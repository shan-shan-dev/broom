import { log } from "@libs/logger";

async function seed() {
	// TODO: Add seeding scripts for each table here...
}

try {
	log.info("Seeding the database...");
	await seed();
	log.info("Done!");
	process.exit(0);
} catch (error) {
	log.fatal({ error }, "An error occurred!");
	throw error;
}
