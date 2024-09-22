import { action, makeObservable, observable } from 'mobx'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
//MOBX
import { Api } from '../../common/api'
//DATA
import { BRAND_API_URL } from '@/shared/data/API_URL'
//INTERFACES
import { IBrandItem } from '@/shared/interfaces/IBrandItem'

const BrandStoreProps = {
  brands: observable,
  selectedBrands: observable,
  API_PAR: observable,
  getBrandsAction: action,
  sortBrand: action
}


class BrandStore extends Api<IBrandItem[]> {
  
  constructor() {
    super(`${BRAND_API_URL}?`)
    makeObservable(this, BrandStoreProps)
    this.getBrandsAction()
  }
  //ALL BRANDS STATES
    brands?: IPromiseBasedObservable<IBrandItem[]>
    selectedBrands: IBrandItem[] = []
    API_PAR = ''

  //ALL BRANDS ACTIONS
    getBrandsAction = async () => {
      this.brands = fromPromise(this.get(''))
    }

    sortBrand = (brand: IBrandItem) => {
      const isBrandIncludes = this.selectedBrands.includes(brand) 

      this.selectedBrands = isBrandIncludes
       ? this.selectedBrands.filter(b => b != brand) 
       : [...this.selectedBrands, brand]

      if (this.selectedBrands.length === (this.brands?.value as IBrandItem[])?.length ||
       this.selectedBrands.length == 0) {
        this.API_PAR = ''
      }
      else {
        this.API_PAR = this.selectedBrands.map(b => `&brand[]=${b}`).join('')
      }
    }
}

export default new BrandStore()