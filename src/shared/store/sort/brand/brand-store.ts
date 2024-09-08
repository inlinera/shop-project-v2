import { makeAutoObservable } from 'mobx'
//
import axios from 'axios'
import { BRAND_API_URL } from '@/shared/data/API_URL'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
import { IBrandItem } from '@/shared/interfaces/IBrandItem'


class BrandStore {

    brands?: IPromiseBasedObservable<IBrandItem[]>
    selectedBrands: IBrandItem[] = []
    API_PAR = ''
  
    constructor() {
      makeAutoObservable(this)
      this.getBrandsAction()
    }

    getBrands = async () => (await axios.get<IBrandItem[]>(BRAND_API_URL)).data
  
    async getBrandsAction(): Promise<void> {
      this.brands = fromPromise(this.getBrands())
    }
  
    sortBrand = (brand: IBrandItem) => {
      const isBrandIncludes = this.selectedBrands.includes(brand) 

      this.selectedBrands = isBrandIncludes
       ? this.selectedBrands.filter(b => b != brand) 
       : [...this.selectedBrands, brand]

      if (this.selectedBrands.length === (this.brands?.value as IBrandItem[])?.length 
      || this.selectedBrands.length == 0) 
        this.API_PAR = ''
      else 
        this.API_PAR = this.selectedBrands.map(b => `&brand[]=${b}`).join('')
    }
}

export default new BrandStore()