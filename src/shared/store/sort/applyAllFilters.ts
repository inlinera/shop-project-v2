import { makeAutoObservable } from 'mobx'
//MOBX AND TYPE
import FetchProducts, { ProductItem } from '../products-api'
import SearchStore from './search/search-store'
import TypeStore from './type/type-store'
import BrandStore from './brand/brand-store'

class ApplyFilters {

    constructor() {
        makeAutoObservable(this)
    }

    applyFilters = () => {
        const typeMatch = (p: ProductItem) => TypeStore.type === 'All Products' || p.type.toLocaleLowerCase() === TypeStore.type.toLocaleLowerCase()
        const brandMatch = (p: ProductItem) => BrandStore.selectedBrands.includes(p.brand)
        const searchMatch = (p: ProductItem) => SearchStore.searchQuery === '' || p.name.toLocaleLowerCase().includes(SearchStore.searchQuery.toLocaleLowerCase())
        
        FetchProducts.products = FetchProducts.filterProducts.filter(p => typeMatch(p) && brandMatch(p) && searchMatch(p))
    }
  }

export default new ApplyFilters()