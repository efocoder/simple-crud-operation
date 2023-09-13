FROM node:20

RUN npm install -g pnpm

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /frontend-app

COPY package.json ./

RUN pnpm install

COPY . .

EXPOSE 5173

#CMD ["pnpm", "run", "dev"]