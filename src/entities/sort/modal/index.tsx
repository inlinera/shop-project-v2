//COMPONENTS
import { FilterCheckbox } from '@/shared/ui/filter/checkbox'
import { FilterModal } from '@/shared/ui/filter/modal'
//DATA
import { prices } from '@/shared/data/prices'

export const SortModal = ({ ...props }) => {

    const { brands, selectedBrands, sortBrand, sortPrice,
        priceType, isModalActive, setIsModalActive } = props

  return (
    <div>
        <FilterModal isActive={isModalActive} setIsActive={setIsModalActive}>
        <h2>Sort by brands</h2>
        {brands.map(
          (b: string) => <FilterCheckbox type='checkbox' checked={selectedBrands.includes(b)} 
          onChange={() => sortBrand(b)} key={b}>
          <span>{b}</span>
          </FilterCheckbox>
        )}
        <h2>Sort by price</h2>
        {prices.map(
          p => <FilterCheckbox type='radio' key={p.name} checked={priceType === p.sort}
        onChange={() => sortPrice(p.sort)} >
          <span>{p.name}</span>
          </FilterCheckbox>
        )}
      </FilterModal>
    </div>
  )
}
