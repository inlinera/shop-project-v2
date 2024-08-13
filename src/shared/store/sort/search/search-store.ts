import { makeAutoObservable } from 'mobx'
//MOBX
import FetchProducts from '../../products-api'
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

    FetchProducts.products = FetchProducts.filterProducts.filter(p =>
      (TypeStore.type.toLowerCase() === TypeStore.defaultType.toLowerCase()
        || p.type.toLowerCase() === TypeStore.type.toLowerCase()) &&
      BrandStore.selectedBrands.includes(p.brand) &&
      (this.searchQuery === '' || p.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    )
    ApplyFilters.applyFilters()
  }
}

export default new SearchStore()