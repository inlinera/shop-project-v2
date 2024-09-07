import { FC } from 'react'
import cl from './index.module.scss'
//INTERFACE
import { ITemplate } from '@/shared/interfaces/ITemplate'

export const ItemTemplate: FC<ITemplate> = ({ children }) => {
  return (
    <div className={`${cl.cart_item} jcc aic`}>
        {children}
    </div>
  )
}