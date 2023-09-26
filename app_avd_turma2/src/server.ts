import {PrismaClient} from '@prisma/client'
import fastify from 'fastify';

const app = fastify();
const prisma = new PrismaClient();

app.get('/events' , async () => {
    const events = await prisma.events.findMany();
    return events;
})

app.listen({
    port: 3333,
}).then(()=> {
    console.log('HTTP server listening on http://localhost:5555')
})

