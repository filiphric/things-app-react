/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from "cypress";
import { resetDbTask } from './cypress/tasks/resetDb';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { resetDbTask })

      return config
    },
    baseUrl: 'http://localhost:3000'
  },
});
