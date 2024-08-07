import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
//
import BrandStore from './sort/brand/brand-store'
import { IProduct } from '../interfaces/IProduct'

const API_URL = 'https://66ad1128f009b9d5c73449cd.mockapi.io/api/v1/products'

class FetchProducts {

    products: IProduct[] = []
    filterProducts: IProduct[] = []

    constructor() {
        makeAutoObservable(this)
    }

    getProducts = async () => {
      try {
        const { data } = await axios.get<IProduct[]>(API_URL)
        runInAction(() => {
          this.products = data
          this.filterProducts = data
          BrandStore.brands = [...new Set(data.map(p => p.brand))]
          BrandStore.selectedBrands = BrandStore.brands
        })
      }
      catch(e) {
        console.error(e)
      }
    }
  }

export default new FetchProducts()