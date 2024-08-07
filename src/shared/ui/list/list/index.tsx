import { FC } from 'react'
import cl from './index.module.scss'
//INTERFACE
import { ITemplate } from '@/shared/interfaces/ITemplate'


export const ListTemplate: FC<ITemplate> = ({ children }) => {
  return (
    <div className={cl.list}>
        {children}
    </div>
  )
}
