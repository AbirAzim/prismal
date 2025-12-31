import 'dotenv/config';
import { defineConfig } from '@prisma/config';

export default defineConfig({
	datasource: {
		url: process.env.DATABASE_URL,
	},
	// @ts-expect-error
	seed: {
		command: 'tsx prisma/seed.ts',
	},
});
