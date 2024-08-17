import { FC } from "react"
import cl from './index.module.scss'
//MOBX
import SearchStore from '@/shared/store/sort/search/search-store'
//HOOKS
import { useDebounce } from "@/shared/hooks/useDebounce"

interface SearchTemplateProps {
    placeholder: string
}

export const SearchTemplate: FC<SearchTemplateProps> = ({ placeholder }) => {

  const debouncedSearch = useDebounce((value: string) => {
    SearchStore.sortSearch(value)
  }, 1000)

  return (
    <input type="text" placeholder={placeholder} 
    onChange={(e) => debouncedSearch(e.target.value)} className={cl.inputSearch}/>
  )
}