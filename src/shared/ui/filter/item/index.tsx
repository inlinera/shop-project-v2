import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import cl from './index.module.scss'
//MOBX
import TypeStore from '@/shared/store/sort/type/type-store'

interface FilterItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactChild
  typeInfo?: string
  onModalClick?: () => void
}

export const FilterItemTemplate: FC<FilterItemProps> = observer(({ children, typeInfo, onModalClick, ...props }) => {
  const { changeType, type } = TypeStore

  const handleClick = () => {
    if (typeInfo) changeType(typeInfo)
      if (onModalClick) onModalClick()
  }
  
  return (
    <button {...props} className={`${cl.btnSort} ${type === typeInfo && cl.active }`} onClick={handleClick}>
      {children}
    </button>
  )
})