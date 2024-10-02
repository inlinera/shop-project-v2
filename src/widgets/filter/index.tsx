import { useState } from 'react'
import cl from './index.module.scss'
import { observer } from 'mobx-react-lite'
//COMPONENTS
import { FilterTemplate } from '@/shared/ui/filter/list/index'
import { FilterItemTemplate } from '@/shared/ui/filter/item/index'
import { SearchTemplate } from '@/shared/ui/filter/search'
import { SortModal } from '@/entities/sort/modal'
//DATA
import { types } from '@/shared/data/types'
//ICONS
import { SlidersVertical } from 'lucide-react'

export const Sort = observer(() => {

  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <div className={`${cl.sort_menu} aic`}>
      <div className={cl.sort_menu_content}>
      <SortModal
      isModalActive={isModalActive}
      setIsModalActive={setIsModalActive}
      />
      <SearchTemplate 
      placeholder='Search the product'
      />
        <FilterTemplate>
          <FilterItemTemplate 
          onModalClick={() => setIsModalActive(true)}
          >
          <SlidersVertical
          size={'18'}
          />
          </FilterItemTemplate>

          {types?.map(t => 
            <FilterItemTemplate
            key={t.name}
            typeInfo={t.name}
            >
              {t.name}
            </FilterItemTemplate>
          )}
        </FilterTemplate>
      </div>
    </div>
  )
})