import express from 'express';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/users', async (req, res) => {
	const users = await prisma.user.findMany({
		where: {
			nationality: {
				in: ['Brazil', 'Sweden'],
			},
			isMarried: true,
			age: {
				gte: 35,
			},
		},
	});
	res.json(users);
});

app.put('/users/:id', async (req, res) => {
	const { id } = req.params;
	const { name, email, age, isMarried, nationality } = req.body;
	const updatedUser = await prisma.user.update({
		where: {
			id: Number(id),
		},
		data: {
			name,
			email,
			age,
			isMarried,
			nationality,
		},
	});
	res.json(updatedUser);
});

app.delete('/users/:id', async (req, res) => {
	const { id } = req.params;
	const deletedUser = await prisma.user.delete({
		where: {
			id: Number(id),
		},
	});
	res.json(deletedUser);
});

app.listen(port, () => {
	console.log(`Example app listening from port ${port}`);
});
