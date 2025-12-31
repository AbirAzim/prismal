import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
	console.log('Seeding...');

	await prisma.user.createMany({
		skipDuplicates: true,
		data: [
			{
				name: 'abi',
				email: 'abir22@prisma.io',
				age: 22,
				isMarried: false,
				nationality: 'Bangladesh',
			},
			{
				name: 'badhon11',
				email: 'badhon11@prisma.io',
				age: 22,
				isMarried: false,
				nationality: 'India',
			},
			{
				name: 'user3',
				email: 'user3@example.com',
				age: 25,
				isMarried: true,
				nationality: 'USA',
			},
			{
				name: 'user4',
				email: 'user4@example.com',
				age: 30,
				isMarried: false,
				nationality: 'Canada',
			},
			{
				name: 'user5',
				email: 'user5@example.com',
				age: 28,
				isMarried: true,
				nationality: 'UK',
			},
			{
				name: 'user6',
				email: 'user6@example.com',
				age: 35,
				isMarried: false,
				nationality: 'Australia',
			},
			{
				name: 'user7',
				email: 'user7@example.com',
				age: 22,
				isMarried: false,
				nationality: 'Germany',
			},
			{
				name: 'user8',
				email: 'user8@example.com',
				age: 29,
				isMarried: true,
				nationality: 'France',
			},
			{
				name: 'user9',
				email: 'user9@example.com',
				age: 31,
				isMarried: false,
				nationality: 'Japan',
			},
			{
				name: 'user10',
				email: 'user10@example.com',
				age: 27,
				isMarried: true,
				nationality: 'China',
			},
			{
				name: 'user11',
				email: 'user11@example.com',
				age: 24,
				isMarried: false,
				nationality: 'Brazil',
			},
			{
				name: 'user12',
				email: 'user12@example.com',
				age: 33,
				isMarried: true,
				nationality: 'India',
			},
			{
				name: 'user13',
				email: 'user13@example.com',
				age: 26,
				isMarried: false,
				nationality: 'Bangladesh',
			},
			{
				name: 'user14',
				email: 'user14@example.com',
				age: 32,
				isMarried: true,
				nationality: 'Spain',
			},
			{
				name: 'user15',
				email: 'user15@example.com',
				age: 21,
				isMarried: false,
				nationality: 'Italy',
			},
			{
				name: 'user16',
				email: 'user16@example.com',
				age: 34,
				isMarried: true,
				nationality: 'Russia',
			},
			{
				name: 'user17',
				email: 'user17@example.com',
				age: 23,
				isMarried: false,
				nationality: 'Mexico',
			},
			{
				name: 'user18',
				email: 'user18@example.com',
				age: 36,
				isMarried: true,
				nationality: 'South Korea',
			},
			{
				name: 'user19',
				email: 'user19@example.com',
				age: 20,
				isMarried: false,
				nationality: 'Netherlands',
			},
			{
				name: 'user20',
				email: 'user20@example.com',
				age: 38,
				isMarried: true,
				nationality: 'Sweden',
			},
			{
				name: 'user21',
				email: 'user21@example.com',
				age: 25,
				isMarried: false,
				nationality: 'Norway',
			},
			{
				name: 'user22',
				email: 'user22@example.com',
				age: 29,
				isMarried: true,
				nationality: 'Denmark',
			},
		],
	});
}

seed().then(() => {
	console.log('Seeding completed');
	prisma.$disconnect();
});
