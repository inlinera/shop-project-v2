import { FC } from "react"
import cl from './index.module.scss'
//INTERFACE
import { ITemplate } from "@/shared/interfaces/ITemplate"

export const FilterTemplate: FC<ITemplate> = ({ children }) => {
  return (
    <div className={cl.navigate_sort}>
        {children}
    </div>
  )
}
