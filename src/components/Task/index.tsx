import * as CheckBox from "@radix-ui/react-checkbox"

import { CheckIcon  } from '@radix-ui/react-icons'


export function Task() {
  return (
    <div className="flex gap-3 items-center">
      <CheckBox.Root id="checkbox-1" className="w-5 h-5 bg-white rounded flex items-center justify-center shadow-md hover:shadow-2xl" defaultChecked>
        <CheckBox.CheckboxIndicator className="bg-rose-500">
          <CheckIcon />
        </CheckBox.CheckboxIndicator>
      </CheckBox.Root>
      <label htmlFor="checkbox-1" className="font-bold text-lg">
        task programming
      </label>
    </div>
  )
}