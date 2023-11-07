# Project makefile for a ska-nextjs-skeleton
CAR_OCI_REGISTRY_HOST ?= artefact.skao.int
CAR_OCI_REGISTRY_USERNAME ?= ska-telescope
PROJECT_NAME = ska-nextjs-skeleton

# Set sphinx documentation build to fail on warnings (as it is configured
# in .readthedocs.yaml as well)
DOCS_SPHINXOPTS ?= -W --keep-going

# KUBE_NAMESPACE defines the Kubernetes Namespace that will be deployed to
# using Helm.  If this does not already exist it will be created
KUBE_NAMESPACE ?= ska-nextjs-skeleton

# KUBE_HOST defines the IP address of the Minikube ingress.
KUBE_HOST ?= http://`minikube ip`

K8S_CHART ?= ska-nextjs-skeleton-umbrella

# include makefile targets from the submodule
include .make/base.mk
include .make/oci.mk
include .make/k8s.mk
include .make/helm.mk

# include your own private variables for custom deployment configuration
-include PrivateRules.mak

OCI_IMAGE_BUILD_CONTEXT = $(PWD)

up: oci-build ## Start up the UI inside a docker container (accessible at localhost:4200)
	docker run -p 3000:80 $(CAR_OCI_REGISTRY_HOST)/$(strip $(OCI_IMAGE)):$(VERSION)

pre_install_cleanup: #Remove old build reports and node modules
	rm -rf build/*
	rm -rf node_modules
	mkdir -p build/reports

install_dependencies: pre_install_cleanup   ## Install basic dependencies using npm
	npm install;

test: ## test the application and generate test coverage reports
	mkdir -p build/reports;
	npm run test:coverage;
	mv coverage/clover.xml build/reports/code-coverage.xml;
	mv junit.xml build/reports/unit-tests.xml;

lint: ## lint the application (static code analysis)
	mkdir -p build/reports;
	npm run code-analysis;
	mv linting.xml build/reports/linting.xml;


# For the test, dev and integration environment, use the freshly built image in the GitLab registry
ENV_CHECK := $(shell echo $(CI_ENVIRONMENT_SLUG) | egrep 'test|dev|integration')
ifneq ($(ENV_CHECK),)
K8S_CHART_PARAMS = --set ska-nextjs-skeleton.ui.image.tag=$(VERSION)-dev.c$(CI_COMMIT_SHORT_SHA) \
	--set ska-nextjs-skeleton.ui.image.registry=$(CI_REGISTRY)/ska-telescope/ost/ska-nextjs-skeleton
endif


