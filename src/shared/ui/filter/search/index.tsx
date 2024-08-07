import { FC } from "react"
import cl from './index.module.scss'
//MOBX
import SearchStore from '@/shared/store/sort/search/search-store'

interface SearchTemplateProps {
    placeholder: string
}

export const SearchTemplate: FC<SearchTemplateProps> = ({ placeholder }) => {
  return (
    <input type="text" placeholder={placeholder} 
    onChange={e => SearchStore.sortSearch(e.target.value)} className={cl.inputSearch}/>
  )
}
