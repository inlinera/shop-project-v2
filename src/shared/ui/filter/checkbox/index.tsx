import { FC, ReactNode } from "react"
import { observer } from "mobx-react-lite"
import cl from './index.module.scss'

interface FilterCheckboxProps {
    type: string
    checked?: boolean
    onChange?: () => void
    defaultChecked?: boolean
    children: ReactNode
}

export const FilterCheckbox: FC<FilterCheckboxProps> = observer(({ 
  type, checked, onChange, defaultChecked, children
 }) => {
  return (
    <label className={`${cl.checkBoxEl} flex aic`}>
      <input type={type} checked={checked} onChange={onChange} defaultChecked={defaultChecked}/>
      <span>{children}</span>
    </label>
  )
})
