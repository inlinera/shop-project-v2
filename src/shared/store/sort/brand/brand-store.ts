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
        if (this.selectedBrands.includes(brand)) {
            this.selectedBrands = this.selectedBrands.filter(b => b !== brand)
        }
        else {
            this.selectedBrands.push(brand)
        }
        FetchProducts.products = FetchProducts.filterProducts.filter(p => this.selectedBrands.includes(p.brand))
        ApplyFilters.applyFilters()
      }
}

export default new BrandStore()