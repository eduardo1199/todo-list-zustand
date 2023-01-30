import * as CheckBox from "@radix-ui/react-checkbox"

import { Logo } from "./components/Logo"
import { Task } from "./components/Task"

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      
      <Logo />

      <form className="flex flex-col gap-3">
        <Task />
      </form>
    </div>
  )
}

export default App
