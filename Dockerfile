# Stage 1: Build

FROM node:20-alpine AS build

RUN npm install -g pnpm

WORKDIR /app
COPY . .

# ? Consider --frozen-lockfile
RUN pnpm install

# ? Add checks?

# ? Consider --prod
RUN pnpm run build


# Stage 2: Serve

FROM caddy:alpine

COPY --from=build /app/dist /usr/share/caddy

EXPOSE 80
CMD ["caddy", "file-server", "--root", "/usr/share/caddy"]
