import prisma from '@/lib/prisma';
import { DeleteTodoButton } from './DeleteTodoButton';

export const TodoList = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div className='space-y-2'>
      {todos.map((todo: any) => {
        return (
          <div
            key={todo.id}
            className='flex justify-between items-center bg-white rounded-lg p-2'
          >
            {todo.title}
            <DeleteTodoButton id={todo.id}/>
          </div>
        );
      })}
    </div>
  );
}