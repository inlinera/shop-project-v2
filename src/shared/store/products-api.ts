import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
//
import BrandStore from './sort/brand/brand-store'

export type ProductItem = {
    name: string
    price: number
    type: string
    brand: string
    id: number
    pictures: string[]
}

class FetchProducts {

    products: ProductItem[] = []
    filterProducts: ProductItem[] = []

    constructor() {
        makeAutoObservable(this)
    }

    getProducts = async () => {
      const url = 'https://66ad1128f009b9d5c73449cd.mockapi.io/api/v1/products'
      try{
        const response = await axios.get<ProductItem[]>(url)
        runInAction(() => {
          this.products = response.data
          this.filterProducts = response.data
          BrandStore.brands = [...new Set(response.data.map(p => p.brand))]
          BrandStore.selectedBrands = BrandStore.brands
        })
      }
      catch(e) {
        console.error(e)
      }
    }
  }

export default new FetchProducts()