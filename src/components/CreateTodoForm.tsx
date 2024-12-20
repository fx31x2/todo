import { addTodo } from '@/lib/action'

export const CreateTodoForm = () => {
  return (
    <form action={addTodo}>
      <div className="flex items-center justify-center space-x-3">
        <input
          placeholder="Todo を入力"
          type="text"
          name='title'
          className="max-w-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2 cursor-pointer"
          defaultValue=""
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-900 focus:ring-4 focus:ring-blue-300"
        >
          追加
        </button>
      </div>
    </form>
  );
};