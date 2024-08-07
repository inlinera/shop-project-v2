import cl from './index.module.scss'
//COMPONENTS
import { Search } from '@/entities/search/index'
import { Sort } from '@/entities/sort/index'

export const Filter = () => {
  return (
    <div className={cl.search_sort_menu}>
        <Search />
        <Sort />
    </div>
  )
}
