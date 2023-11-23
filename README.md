# SKA NextJS Web App Skeleton

[![Documentation Status](https://readthedocs.org/projects/ska-react-webapp-skeleton/badge/?version=latest)](https://developer.skatelescope.org/projects/ska-react-webapp-skeleton/en/latest/?badge=latest)

This project is intended to act as a skeleton for any SKA developer looking to make a NextJS based web application.

It includes tools for linting, code formatting, and testing which are easily integrated into various IDEs.

### TODO - BELOW NEEDS TO BE IMPLEMENTED

# It also includes modular federation, exposing the Home() component, which can be imported into other applications as a remote

### Requirements

See /docs/src/ directory for further documentation or refer to 'Read The Docs'

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/ska-telescope/templates/ska-nextjs-skeleton/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name

Choose a self-explaining name for your project.

## Description

Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges

On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals

Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation

Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

# Local development and testing

### Installing project dependencies

Run `make install_dependencies` to install the latest project dependencies from package.json and package-lock.json

### Check project dependencies vulnerabilities

Run `npm audit` to check the latest project dependencies from package.json and package-lock for vulnerabilities currently identfied by security companies like snyk.io and etc.

### Build a production deployment

Run `yarn build` or `npm run build` to build the project. The build artifacts will be stored in the `.next/` directory.

### Rebuild the new Next.js project structure class diagram for ReadTheDoc

Run `npm run arkit-diagram` or `yarn arkit-diagram` on the base directory of the project. It will
generate the new diagram 'nextjs_structure_class.svg' within the docs/src/\_static/img/ directory.

### Running a front end development server

Run `npm dev` for a dev server. Navigate to `http://localhost:3000/`. The
app will automatically reload if you change any of the source files.

### Running unit tests

Run `make test` to execute the unit tests.

### Running static code analysis

Run `make lint` to lint the code.

### Running unit tests coverage

Run `yarn test:coverage` or `npm run test:coverage` to execute the unit tests coverage.

### Running component tests coverage

Run `yarn component:headless` or `npm run component:headless` to execute the component tests coverage.

### Running End-to-end tests coverage

Run `yarn e2e:headless` or `npm run e2e:headless` to execute the End-to-end tests coverage.

## OSO Developer check-list before moving the ticket into Ready to Review

- [ ] [Run Vulnerabilities Check](`npm audit`)
- [ ] [Run Lint Check](`npm run lint`)
- [ ] [Run Unit Test Coverage Check](`npm run test:coverage`)
- [ ] [Run Component Test Coverage Check](`npm run component:headless`)
- [ ] [Run Integration Test Coverage Check](`npm run e2e:headless`)
- [ ] [Update Project Structure Class Diagram](`npm run arkit-diagram`)

## Usage

Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support

Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing

State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment

Show your appreciation to those who have contributed to the project.

## License

For open source projects, say how it is licensed.

## Project status

If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
