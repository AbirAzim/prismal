import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
	console.log('Seeding...');
	// Clear existing users to prevent unique constraint errors
	await prisma.user.deleteMany();

	await prisma.user.createMany({
		data: [
			{
				name: 'abir',
				email: 'abir@prisma.io',
			},
			{
				name: 'azim',
				email: 'azim@prisma.io',
			},
		],
	});
}

seed().then(() => {
	console.log('Seeding completed');
	prisma.$disconnect();
});
