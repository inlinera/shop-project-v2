import { makeAutoObservable } from 'mobx'
//
import FetchProducts from '../../products-api'
import ApplyFilters from '../applyAllFilters'

class BrandStore {

    brands: string[] = []
    selectedBrands: string[] = []

    constructor() {
        makeAutoObservable(this)
    }

    sortBrand = (brand: string) => {
        this.selectedBrands = this.selectedBrands.includes(brand) 
           ? this.selectedBrands.filter(b => b !== brand) 
            : [...this.selectedBrands, brand]
        FetchProducts.products = FetchProducts.filterProducts.filter(p => this.selectedBrands.includes(p.brand))
        ApplyFilters.applyFilters()
      }
}

export default new BrandStore()