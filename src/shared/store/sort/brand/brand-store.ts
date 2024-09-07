import { makeAutoObservable, runInAction } from 'mobx'
//
import axios from 'axios'
import { BRAND_API_URL } from '@/shared/data/API_URL'

interface BrandItem {
    brand: string
}

class BrandStore {

    brands: string[] = []
    selectedBrands: string[] = []
    API_PAR = ''
  
    constructor() {
      makeAutoObservable(this)
      this.getBrands()
    }
  
    async getBrands(): Promise<void>{
      try {
        const { data } = await axios.get<BrandItem[]>(BRAND_API_URL)
        runInAction(() => {
          this.brands = data.map(item => item.brand)
          this.selectedBrands = [...this.brands]
        })
      } catch (e) {
        alert(`Error fetching brands. Please try again later, error: ${e}`)
      }
    }
  
    sortBrand = (brand: string) => {
      const isBrandIncludes = this.selectedBrands.includes(brand) 

      this.selectedBrands = isBrandIncludes
       ? this.selectedBrands.filter(b => b != brand) 
       : [...this.selectedBrands, brand]

      if (this.selectedBrands.length === this.brands.length) 
        this.API_PAR = ''
      else 
        this.API_PAR = this.selectedBrands.map(b => `&brand[]=${b}`).join('')
    }
  
  }

export default new BrandStore()