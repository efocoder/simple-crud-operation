FROM node:20

RUN npm install -g pnpm

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package*.json ./


RUN pnpm install

# RUN pnpm install -g run-rs 

# RUN run-rs

COPY . .

RUN pnpm build

