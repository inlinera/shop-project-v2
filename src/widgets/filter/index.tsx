import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import cl from './index.module.scss'
//MOBX
import BrandStore from '@/shared/store/sort/brand/brand-store'
import PriceStore from '@/shared/store/sort/price/price-store'
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

  const { brands, selectedBrands, sortBrand } = BrandStore
  const { sortPrice, priceType } = PriceStore

  return (
    <div className={`${cl.sort_menu} aic`}>
      <div className={cl.sort_menu_content}>

      <SortModal brands={brands} selectedBrands={selectedBrands}
      sortBrand={sortBrand} sortPrice={sortPrice}
      priceType={priceType} isModalActive={isModalActive}
      setIsModalActive={setIsModalActive}
      />

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
    </div>
  )
})