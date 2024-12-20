'use server'

import { revalidatePath } from "next/cache"
import prisma from "./prisma"

export const addTodo = async (formData: FormData) => {
  const title = formData.get('title') as string
  if(title) {
    await prisma.todo.create({data: {title: title as string}})
  }
  revalidatePath('/')
}

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({
    where: {id},
  });
  revalidatePath('/');
}