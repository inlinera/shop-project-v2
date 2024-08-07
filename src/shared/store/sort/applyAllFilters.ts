import { makeAutoObservable } from 'mobx'
//MOBX AND INTEFACE
import FetchProducts from '../products-api'
import SearchStore from './search/search-store'
import TypeStore from './type/type-store'
import BrandStore from './brand/brand-store'
import { IProduct } from '@/shared/interfaces/IProduct'

class ApplyFilters {

    constructor() {
        makeAutoObservable(this)
    }

    applyFilters = () => {
        const typeMatch = (p: IProduct) => TypeStore.type.toLowerCase() === TypeStore.defaultType.toLowerCase() 
        || p.type.toLowerCase() === TypeStore.type.toLowerCase()
        const brandMatch = (p: IProduct) => BrandStore.selectedBrands.includes(p.brand)
        const searchMatch = (p: IProduct) => SearchStore.searchQuery === '' || p.name.toLowerCase().includes(SearchStore.searchQuery.toLowerCase())
        
        FetchProducts.products = FetchProducts.filterProducts.filter(p => typeMatch(p) && brandMatch(p) && searchMatch(p))
    }
  }

export default new ApplyFilters()