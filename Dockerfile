# First stage: build the app

# pull the base image
FROM node:20.6.1 as builder

# Install the SKAO specific libraries
RUN npm config set @ska-telescope:registry https://artefact.skao.int/repository/npm-internal/ &&\
    yarn add @ska-telescope/ska-gui-components@latest

# # set the working direction
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Second stage: run the app
FROM node:20.6.1
WORKDIR /app/out
COPY --from=builder /app/out/ .
EXPOSE 3000

# start app
CMD [ "npm", "start" ]
