# Things To-Do app

This is a simple "Things" To-Do app clone that uses:

- React
- jotai
- Tailwind
- Prisma
- TypeScript

You can run it locally by simply cloning this repo and typing:

```bash
npm install
npm run dev
```

into your terminal.

## Why I made this

I wanted to get a deeper look into capabilities of Replay.io - a debugging tool that records everything that happens in your application when you interact with it. It plays really well with React and state management tools like jotai. To learn more Replay.io make sure to [visit the homepage](https://www.replay.io/).

## Cypress, Playwright & Replay.io

Besides recording everything in the browser, you can create recordings by simply running your tests with GitHub Actions. Take a look into [cypress](.github/workflows/cypress.yml) and [playwright](.github/workflows/playwright.yml) to find out more or [checkout Replay.io](https://docs.replay.io/test-suites/cypress) docs for a full tutorial.

## Take a look into Replay.io yourself

To experience how Replay.io can help you with debugging, download Replay.io browser, open your app and hit record. [Add your first print statement](https://docs.replay.io/debugging#e52695c558884780a93be039ae42867a) to the recording and be blown away 💥

To see how Cypress tests and Replay.io work together on this project, [click on this invitation link](https://app.replay.io/team/invitation?code=999d8c88-33a8-443e-b6a1-d83d61919e36) to see replays recorded on this project.

## Local development

You can run this app locally.

### Requirements

- Docker
- Postgres

To check if you have these installed, open terminal and run these commands:

```bash
psql --version
docker --version
```

If any of these commands throw an error, follow installation instructions on [Postgres](https://www.postgresql.org/download/) and [Docker](https://www.docker.com/) homepages.

### Installation

1. Create a `docker-compose.yml` file with following contents:

```yml
version: "3"
services:
  db:
    image: postgres:latest
    container_name: prisma_postgres
    environment:
      POSTGRES_USER: <YOUR_NAME>
      POSTGRES_PASSWORD: <YOUR_PASS>
      POSTGRES_DB: <DB_NAME>
    ports:
      - "5432:5432"
```

2. Create a `.env` file with following content

```bash
POSTGRES_PRISMA_URL="postgresql://<YOUR_NAME>:<YOUR_PASS>@localhost:5432/<DB_NAME>?schema=public"
POSTGRES_URL_NON_POOLING="postgresql://<YOUR_NAME>:<YOUR_PASS>@localhost:5432/<DB_NAME>?schema=public"
```

3. Rename `<YOUR_NAME>`, `<YOUR_PASS>`, `<DB_NAME>` in both `docker-compose.yml` file and `.env`. Since we are in local development, these can be set to anything you want. You can also change the default `5432` port.
4. Run `docker-compose up -d`
5. Run `npx prisma migrate dev --name init` to initialize database
6. Run `npm run dev`

If anything goes wrong, don’t hesitate to open an issue, or reach out to us on [Replay.io Discord](https://discord.gg/replayio)
