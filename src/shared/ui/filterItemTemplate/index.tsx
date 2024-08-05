import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import cl from './index.module.scss'
//MOBX
import FetchProducts from '@/shared/store/products-api'

interface FilterItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactChild
  typeInfo: string
}

export const FilterItemTemplate: FC<FilterItemProps> = observer(({ children, typeInfo, ...props }) => {
  const { changeType, type } = FetchProducts

  const handleClick = () => {
      changeType(typeInfo)
  }
  
  return (
    <button {...props} className={`${cl.btnSort} ${type === typeInfo && cl.active }`} onClick={handleClick}>
      {children}
    </button>
  )
})