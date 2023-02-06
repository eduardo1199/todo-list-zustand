import { FormEvent, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import useTaskStore, { Task } from '../../store/task-slice';

export function NewTask() {
  const [taskName, setTaskName] = useState('');

  const { getTask, addTask } = useTaskStore();

  function handleNewTaskForm(e: FormEvent) {
    e.preventDefault();

    if(!taskName.trim()) {
      return;
    }

    const existTaskByName = getTask(taskName);

    if(existTaskByName) {
      return alert(`Já existe tarefa com esse nome!`)
    } else {
      const newTask: Task = {
        id: uuidv4(),
        marked: false,
        name: taskName
      }

      addTask(newTask);
    }
  }

  return (
    <form className="flex items-center gap-4" onSubmit={handleNewTaskForm}>
      <label htmlFor="task" className="text-xl font-bold group">New Task</label>
      <input 
        type="text" 
        id="task" 
        className="rounded font-bold text-white p-1 h-10 bg-rose-500 focus:outline-none focus:border-2  focus:border-rose-600 focus:ring-1 " 
        onChange={(event) => setTaskName(event.target.value)} 
      />
      <button className="bg-rose-500 p-2 rounded-lg font-bold cursor-pointer hover:brightness-95 transition-colors" type="submit">Register</button>
    </form>
  )

}