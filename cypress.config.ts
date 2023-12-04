/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from "cypress";
import { resetDbTask } from './cypress/tasks/resetDb';
import { plugin as replayPlugin } from "@replayio/cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { resetDbTask })
      replayPlugin(on, config, {
        apiKey: process.env.REPLAY_API_KEY,
      });

      return config
    },
    baseUrl: 'http://localhost:3000'
  },
});
