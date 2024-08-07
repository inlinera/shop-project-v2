import { makeAutoObservable } from 'mobx'
//MOBX AND TYPE
import FetchProducts, { ProductItem } from '../../products-api'
import TypeStore from '../type/type-store'
import BrandStore from '../brand/brand-store'
import ApplyFilters from '../applyAllFilters'

class SearchStore {
    searchQuery = ''

    constructor() {
        makeAutoObservable(this)
    }

    sortSearch = (query: string) => {
      this.searchQuery = query
      const filter = (p: ProductItem) => {
        const typeMatch = TypeStore.type === 'All Products' || p.type.toLocaleLowerCase() === TypeStore.type.toLocaleLowerCase()
        const brandMatch = BrandStore.selectedBrands.includes(p.brand)
        const searchMatch = this.searchQuery === '' || p.name.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase())
        return typeMatch && brandMatch && searchMatch
      }
      FetchProducts.products = FetchProducts.filterProducts.filter(filter)
      ApplyFilters.applyFilters()
    }
  }

export default new SearchStore()