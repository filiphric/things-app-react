/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from "cypress";
import { resetDbTask } from './cypress/tasks/resetDb';
import replayPlugin from "@replayio/cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { resetDbTask })
      replayPlugin(on, config);

      return config
    },
    baseUrl: 'http://localhost:3000'
  },
});
