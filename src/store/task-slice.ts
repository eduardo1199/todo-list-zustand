import { create } from 'zustand';

interface Task {
  id: string
  name: string;
  marked: boolean;
}

interface StateTask {
  tasks: Task[];
  addTask: (task: Task) => void;
  markedTask: (id: string) => void;
  getAmountTasksChecked: () => number;
  getAmountTasksPending: () => number;
}

const useTaskStore = create<StateTask>((set, get) => ({
  tasks: [],
  addTask: (task: Task) => {
    set((state) => {
      return {
        tasks: [...state.tasks, task]
      }
    })
  },
  markedTask: (id: string) => {
    set((state) => {
      const markedTask = state.tasks.map((task) => {
        if(task.id === id) {
          return {
            ...task,
            marked: true
          }
        } else {
          return task
        }
      })

      return {
        tasks: markedTask,
      }
    })
  },
  getAmountTasksChecked: () => {
    const amountTasksChecked = get().tasks.reduce((sum, task) => {
      if(task.marked) {
        sum.total += 1
      }

      return sum
    }, {
      total: 0
    })
    
    return amountTasksChecked?.total ?? 0
  },
  getAmountTasksPending: () => {
    const amountTasksPending = get().tasks.length - get().getAmountTasksChecked() 

    return amountTasksPending;
  }
}))

export default useTaskStore;
