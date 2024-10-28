# Stage 1: Build

FROM node:20-alpine AS build

RUN npm install -g pnpm

WORKDIR /app
COPY . .

RUN pnpm install --frozen-lockfile

# TODO Add checks

RUN pnpm run build


# Stage 2: Serve

FROM caddy:alpine

COPY --from=build /app/dist /usr/share/caddy

EXPOSE 80
CMD ["caddy", "file-server", "--root", "/usr/share/caddy"]
