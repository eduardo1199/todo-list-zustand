import * as CheckBox from "@radix-ui/react-checkbox"

import { CheckIcon  } from '@radix-ui/react-icons'

interface TaskProps {
  id: string;
  checked: boolean;
  label: string;
}

export function Task({ checked, label }: TaskProps) {
  return (
    <div className="flex gap-3 items-center">
      <CheckBox.Root id="checkbox-1" className="flex items-center gap-3 group" checked={checked}>
        <div className="h-6 w-6 rounded-lg flex items-center justify-center border-2 border-white group-data-[state=checked]:bg-rose-500 group-data-[state=checked]:border-rose-500 transition-colors group-focus:ring-2 group-focus:ring-rose-500 group-focus:ring-offset-2 group-focus:ring-offset-background">
          <CheckBox.CheckboxIndicator>
            <CheckIcon />
          </CheckBox.CheckboxIndicator>
        </div>
        <label htmlFor="checkbox-1" className="font-bold text-lg group-data-[state=checked]:line-through group-data-[state=checked]:opacity-70">
          {label}
        </label>
      </CheckBox.Root>
    </div>
  )
}