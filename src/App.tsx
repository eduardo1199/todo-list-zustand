import * as CheckBox from "@radix-ui/react-checkbox"
import { AmountTasks } from "./components/AmountTasks"

import { Logo } from "./components/Logo"
import { Task } from "./components/Task"

import useTaskStore from './store/task-slice';

function App() {
  const tasks = useTaskStore(state => state.tasks)

  return (
    <div className="w-screen h-screen flex flex-col gap-7 justify-center items-center">
      
      <Logo />

      <form className="flex flex-col gap-3">
        {tasks.map((task) => {
          return (
            <Task 
              key={task.id}
              checked={task.marked}
              id={task.id}
              label={task.name}
            />
          )
        })}
      </form>

      <AmountTasks />
    </div>
  )
}

export default App
