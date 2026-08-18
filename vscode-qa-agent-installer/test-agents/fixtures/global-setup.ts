import { FullConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

async function globalSetup() {
  dotenv.config();
  // Here we can initialize global authentication state or seed global test data.
  console.log('Global Setup executed.');
}

export default globalSetup;
