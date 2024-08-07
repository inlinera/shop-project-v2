import { FC } from 'react'
import cl from './index.module.scss'

interface FilterModalProps {
    isActive: boolean
    setIsActive: (isActive: boolean) => void
    children?: React.ReactNode | React.ReactChild
}

export const FilterModal: FC<FilterModalProps> = ({ isActive, setIsActive, children }) => {

  return (
    <div className={`${cl.modal} ${isActive ? cl.active : ''} jcc aic`} onClick={() => setIsActive(false)}>
        <div className={`${cl.modal__content} ${isActive ? cl.active : ''} jcc aic`} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}
