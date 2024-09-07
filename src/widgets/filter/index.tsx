import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import cl from './index.module.scss'
//MOBX
import BrandStore from '@/shared/store/sort/brand/brand-store'
import PriceStore from '@/shared/store/sort/price/price-store'
//COMPONENTS
import { FilterTemplate } from '@/shared/ui/filter/list/index'
import { FilterItemTemplate } from '@/shared/ui/filter/item/index'
import { FilterModal } from '@/shared/ui/filter/modal/index'
import { FilterCheckbox } from '@/shared/ui/filter/checkbox'
import { SearchTemplate } from '@/shared/ui/filter/search'
//DATA
import { types } from '@/shared/data/types'
import { prices } from '@/shared/data/prices'
//ICONS
import { SlidersVertical } from 'lucide-react'

export const Sort = observer(() => {
  const [isModalActive, setIsModalActive] = useState(false)

  const { brands, selectedBrands, sortBrand } = BrandStore
  const { sortPrice, priceType } = PriceStore

  return (
    <div className={`${cl.sort_menu} aic`}>
      <div className={cl.sort_menu_content}>

      <FilterModal isActive={isModalActive} setIsActive={setIsModalActive}>
        <h2>Sort by brands</h2>
        {brands.map(b => <div key={b}>
          <FilterCheckbox type='checkbox' checked={selectedBrands.includes(b)} 
          onChange={() => sortBrand(b)}>
          <span>{b}</span>
          </FilterCheckbox>
        </div>
        )
        }
        <h2>Sort by price</h2>
        {prices.map(p => <FilterCheckbox type='radio' key={p.name} checked={priceType === p.sort}
        onChange={() => sortPrice(p.sort)} >
          <span>{p.name}</span>
          </FilterCheckbox>)}
      </FilterModal>
      </div>
      
      <SearchTemplate placeholder='Search the product'/>

        <FilterTemplate>
          <FilterItemTemplate onModalClick={() => setIsModalActive(true)}>
          <SlidersVertical size={'18'}/>
          </FilterItemTemplate>
            {types?.map(t => 
          <FilterItemTemplate key={t.name} typeInfo={t.name}>
                {t.name}
            </FilterItemTemplate>
            )}
        </FilterTemplate>
    </div>
  )
})