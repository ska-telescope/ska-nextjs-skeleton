# First stage: build the app

# pull the base image
FROM node:20.6.1 as deps
ENV NODE-ENV=production

# Install the SKAO specific libraries
RUN npm config set @ska-telescope:registry https://artefact.skao.int/repository/npm-internal/ &&\
    yarn add @ska-telescope/ska-gui-components@latest

# # set the working direction
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn install

# Second stage: run the app
FROM node:20.6.1 as builder
ENV NODE-ENV=production

WORKDIR /app
COPY next.config.mjs ./next.config.mjs
COPY package*.json yarn.lock ./
COPY --from=deps /app/node_modules ./node_modules

COPY src ./src
COPY public ./public

RUN yarn install
COPY . .
RUN yarn build

# Production image. copy only the files needed and run next
FROM node:20.6.1 as runner
ENV NODE-ENV=production
WORKDIR /app

RUN addgroup --system --gid 888 nodejs
RUN adduser --system --uid 888 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ././next/static

USER nextjs
EXPOSE 3000

# start app
CMD [ "node", "server.js" ]
