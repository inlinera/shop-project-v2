import { useState } from 'react';
//MOBX
import BrandStore from '@/shared/store/sort/brand/brand-store'
import PriceStore from '@/shared/store/sort/price/price-store'
//COMPONENTS
import { FilterTemplate } from '@/shared/ui/filter/list/index'
import { FilterItemTemplate } from '@/shared/ui/filter/item/index'
import { FilterModal } from '@/shared/ui/filter/modal/index'
import { FilterCheckbox } from '@/shared/ui/filter/checkbox'
//DATA
import { types } from '@/shared/data/types'
import { prices } from '@/shared/data/prices'
//ICONS
import { SlidersVertical } from 'lucide-react';
import { observer } from 'mobx-react-lite';

export const Sort = observer(() => {
  const [isModalActive, setIsModalActive] = useState(false)

  const { brands, selectedBrands, sortBrand } = BrandStore
  const { priceType, sortPrice } = PriceStore

  return (
    <div>
      <FilterModal isActive={isModalActive} setIsActive={setIsModalActive}>
        <h2>Sort by brands</h2>
        {brands.map(brand => <div key={brand}>
          <FilterCheckbox type='checkbox' checked={selectedBrands.includes(brand)} 
          onChange={() => sortBrand(brand)}>
          <span>{brand}</span>
          </FilterCheckbox>
        </div>
        )
        }
        <h2>Sort by price</h2>
        {prices.map(p => <FilterCheckbox type='radio' key={p.name} checked={priceType === p.name}
        onChange={() => sortPrice(p.name)} >
          <span>{p.name}</span>
          </FilterCheckbox>)}
      </FilterModal>
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
