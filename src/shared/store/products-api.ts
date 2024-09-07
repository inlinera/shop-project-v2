import axios from 'axios'
import { makeAutoObservable, reaction } from 'mobx'
//MOBX
import BrandStore from './sort/brand/brand-store'
import TypeStore from './sort/type/type-store'
import SearchStore from './sort/search/search-store'
import PriceStore from './sort/price/price-store'
//INTERFACES
import { IProduct } from '../interfaces/IProduct'


class FetchProducts {

  products: IProduct[] = []
  loading = false
  API_URL = 'https://e646a0ef033b0e33.mokky.dev/products?'
  
  constructor() {
      makeAutoObservable(this, {
        API_URL: false
      })
      reaction(() => [TypeStore.API_PAR, BrandStore.API_PAR,
       SearchStore.API_PAR, PriceStore.API_PAR], () => {
        this.getProducts()
      }, { fireImmediately: true })
  }
  
  async getProducts(): Promise<void | Error> {
    this.setLoading(true)
    try {
        const { data } = await axios.get<IProduct[]>(this.API_URL + this.getParams)
        this.setProducts(data)
    } catch (error) {
      console.error(`Error: ${error}`)
      throw error
    }
    finally {
      this.setLoading(false)
    }
  }

  get getParams() {
    return TypeStore.API_PAR + BrandStore.API_PAR 
    + SearchStore.API_PAR + PriceStore.API_PAR
  }

  setLoading = (state: boolean) => this.loading = state
  setProducts = (data: IProduct[]) => this.products = data
}

export default new FetchProducts()