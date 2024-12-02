import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const todos = [{title: '課題1'}, {title: 'チャーハン'}, {title: 'チンジャオロース'}]
  for (let todo of todos) {
    await prisma.todo.create({
      data: todo
    })
  }
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })