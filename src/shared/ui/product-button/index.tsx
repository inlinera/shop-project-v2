import React, { ButtonHTMLAttributes, FC } from 'react'
import cl from './index.module.scss'

interface ProdButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | React.ReactChild
}

export const ProdButton: FC<ProdButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.prodBtn}>
        {children}
    </button>
  )
}
