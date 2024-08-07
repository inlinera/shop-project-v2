import { useState } from 'react';
//MOBX
import BrandStore from '@/shared/store/sort/brand/brand-store'
//COMPONENTS
import { FilterTemplate } from '@/shared/ui/filter/list/index'
import { FilterItemTemplate } from '@/shared/ui/filter/item/index'
import { FilterModal } from '@/shared/ui/filter/modal/index'
import { FilterCheckbox } from '@/shared/ui/filter/checkbox'
//DATA
import { types } from '@/shared/data/types'
//ICONS
import { SlidersVertical } from 'lucide-react';
import { observer } from 'mobx-react-lite';

export const Sort = observer(() => {
  const [isModalActive, setIsModalActive] = useState(false)

  const { brands, selectedBrands, sortBrand } = BrandStore

  return (
    <div>
      <FilterModal isActive={isModalActive} setIsActive={setIsModalActive}>
        <h2>Sort by brands</h2>
        {brands.map(brand => <div key={brand}>
          <FilterCheckbox type='checkbox' checked={selectedBrands.includes(brand)} onChange={() => sortBrand(brand)}>
          <span>{brand}</span>
          </FilterCheckbox>
        </div>
        )
        }
        <h2>Sort by price</h2>
        <FilterCheckbox type='radio' defaultChecked={true}>
          <span>Ones expensive</span>
          </FilterCheckbox>
          <FilterCheckbox type='radio' defaultChecked={false}>
          <span>Ones chip</span>
          </FilterCheckbox>
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
