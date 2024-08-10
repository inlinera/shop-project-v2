import { FC, useCallback } from "react"
import cl from './index.module.scss'
//MOBX
import SearchStore from '@/shared/store/sort/search/search-store'

interface SearchTemplateProps {
    placeholder: string
}

export const SearchTemplate: FC<SearchTemplateProps> = ({ placeholder }) => {
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    SearchStore.sortSearch(e.target.value);
  }, [SearchStore]);

  return (
    <input type="text" placeholder={placeholder} 
    onChange={handleSearch} className={cl.inputSearch}/>
  )
}
