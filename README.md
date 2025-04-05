# SolidStart + Panda UI Starter

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com) and [Panda CSS](https://panda-css.com/);

## Install bun

```bash
curl -fsSL https://bun.sh/install | bash
```

See https://bun.sh/docs/installation#installing

## Clone the repo with degit

```bash
mkdir my-project-name
cd my-project-name
bunx degit zipang/solid-start-panda-starter
```

Install the dependencies with `bun install`

## Configure

### Authentication

We use secrets to handle authentication with 3rd party services like Github or Google.
The environment file `.env.sample` can be copied and edited with real values as `.env.local` for local dev and .env.prod for.. deployment.

## Develop!

Start the development server:

```bash
bun dev
```
