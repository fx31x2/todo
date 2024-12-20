import { CreateTodoForm } from '@/components/CreateTodoForm';
import { TodoList } from '@/components/TodoList';

export default function Home() {
  return (
    <div className='max-w-xl mx-auto'>
      <h1 className='text-center text-3xl font-bold mb-3'> Todo App</h1>
      <div className='mb-6'>
        <CreateTodoForm />
      </div>
      <div className='bg-gray-200 p-5 rounded-lg'>
        <TodoList />
      </div>
    </div>
   
  );
}