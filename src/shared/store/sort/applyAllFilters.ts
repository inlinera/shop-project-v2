import { makeAutoObservable } from 'mobx'
//MOBX AND INTEFACE
import FetchProducts from '../products-api'
import SearchStore from './search/search-store'
import TypeStore from './type/type-store'
import BrandStore from './brand/brand-store'
import PriceStore from './price/price-store'
import { IProduct } from '@/shared/interfaces/IProduct'
//DATA
import { prices } from '@/shared/data/prices'

class ApplyFilters {

    constructor() {
        makeAutoObservable(this)
    }

    applyFilters = () => {
        const typeMatch = (p: IProduct) => TypeStore.type.toLowerCase() === TypeStore.defaultType.toLowerCase() 
        || p.type.toLowerCase() === TypeStore.type.toLowerCase()

        const brandMatch = (p: IProduct) => BrandStore.selectedBrands.includes(p.brand)

        const searchMatch = (p: IProduct) => SearchStore.searchQuery === '' 
        || p.name.toLowerCase().includes(SearchStore.searchQuery.toLowerCase())

        const priceMatch = (a: IProduct, b: IProduct) => {
            if (PriceStore.priceType === prices[0].name) return b.price - a.price
            else if (PriceStore.priceType === prices[1].name) return a.price - b.price
            else return 0
        }

        FetchProducts.products = FetchProducts.filterProducts.filter(p => typeMatch(p) && brandMatch(p) && searchMatch(p)).sort(
            priceMatch
        )
    }
  }

export default new ApplyFilters()