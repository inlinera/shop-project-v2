import { FC } from "react"
import cl from './index.module.scss'
//MOBX
import SearchStore from '@/shared/store/sort/search/search-store'
//HOOKS
import { useDebounce } from "@/shared/hooks/useDebounce"
import { observer } from "mobx-react-lite"

interface SearchTemplateProps {
    placeholder: string
}

export const SearchTemplate: FC<SearchTemplateProps> = observer(({ placeholder }) => {

  const { value, sortSearch, setValue } = SearchStore

  const debouncedSearch = useDebounce((query: string) => { 
    sortSearch(query)
  }, 1000)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setValue(e.target.value)
    debouncedSearch(value)
  }

    return ( 
        <input 
            type="text" 
            placeholder={placeholder} 
            value={value} 
            onChange={handleChange} 
            className={cl.inputSearch} 
        /> 
    )
})