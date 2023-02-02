import { useId } from 'react';

export function NewTask() {

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="task" className="text-xl font-bold group">New Task</label>
      <input type="text" id="task" className="rounded font-bold text-white p-1 h-10 bg-rose-500 focus:outline-none focus:border-2  focus:border-rose-600 focus:ring-1 " />
      <button className="bg-rose-500 p-2 rounded-lg font-bold cursor-pointer" type="button">Register</button>
    </div>
  )

}