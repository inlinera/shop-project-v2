import { observer } from "mobx-react-lite"
import React, { FC } from "react"


interface FilterCheckboxProps {
    type: string
    checked?: boolean
    onChange?: () => void
    defaultChecked?: boolean
    children: React.ReactNode | React.ReactChild
}

export const FilterCheckbox: FC<FilterCheckboxProps> = observer(({ type, checked, onChange, defaultChecked, children }) => {
  return (
    <label>
      <input type={type} checked={checked} onChange={onChange} defaultChecked={defaultChecked}/>
      {children}
    </label>
  )
})
