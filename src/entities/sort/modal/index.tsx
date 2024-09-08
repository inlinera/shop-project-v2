import { observer } from 'mobx-react-lite'
//COMPONENTS
import { FilterCheckbox } from '@/shared/ui/filter/checkbox'
import { FilterModal } from '@/shared/ui/filter/modal'
//MOBX
import BrandStore from '@/shared/store/sort/brand/brand-store'
import PriceStore from '@/shared/store/sort/price/price-store'
//DATA
import { prices } from '@/shared/data/prices'
//INTERFACES
import { IBrandItem } from '@/shared/interfaces/IBrandItem'

type SortModalProps = {
  isModalActive: boolean
  setIsModalActive: (active: boolean) => void
}

export const SortModal = observer(({ ...props }: SortModalProps) => {

    const { isModalActive, setIsModalActive } = props

    const { brands, selectedBrands, sortBrand } = BrandStore
    const { sortPrice, priceType } = PriceStore

  return (
    <div>
        <FilterModal isActive={isModalActive} setIsActive={setIsModalActive}>
        <h2>Sort by brands</h2>
        {brands?.state == 'fulfilled'
        &&
        brands?.value?.map(
          (brandItem: IBrandItem) => (
            <FilterCheckbox
              type='checkbox'
              checked={selectedBrands?.includes(brandItem.brand as any)}
              onChange={() => sortBrand(brandItem.brand as any)}
              key={brandItem.brand}
            >
              <span>{brandItem.brand}</span>
            </FilterCheckbox>
          )
        )
        }
        {brands?.state == 'rejected' && 'Error, please try again later'}
        {brands?.state == 'pending' && 'Loading'}
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
})
