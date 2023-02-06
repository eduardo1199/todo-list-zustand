import useTaskStore from '../../store/task-slice';

export function AmountTasks() {
  const { getAmountTasksChecked, getAmountTasksPending } = useTaskStore(state => state)

  return (
    <div className="flex gap-8">
      <span className="text-3xl font-bold">Tasks: <span className="text-rose-500">{getAmountTasksPending()}</span></span>
      <span className="text-3xl font-bold">Marked: <span className="text-rose-500">{getAmountTasksChecked()}</span></span>
    </div>
  )
}