import { FC, useCallback, useState, useRef } from "react"
import cl from './index.module.scss'
//MOBX
import SearchStore from '@/shared/store/sort/search/search-store'

interface SearchTemplateProps {
    placeholder: string
}

export const SearchTemplate: FC<SearchTemplateProps> = ({ placeholder }) => {
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null)
  const lastValueRef = useRef<string>('')

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    lastValueRef.current = e.target.value
    if (debounceTimeout) {
      globalThis.clearTimeout(debounceTimeout)
    }
    const timeout = globalThis.setTimeout(() => {
      SearchStore.sortSearch(lastValueRef.current)
    }, 1000)
    setDebounceTimeout(timeout)
  }, [SearchStore])

  return (
    <input type="text" placeholder={placeholder} 
    onChange={handleSearch} className={cl.inputSearch}/>
  )
}