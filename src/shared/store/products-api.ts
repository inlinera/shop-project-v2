import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
//
import BrandStore from './sort/brand/brand-store'
import TypeStore from './sort/type/type-store'
import { IProduct } from '../interfaces/IProduct'


class FetchProducts {

  products: IProduct[] = []
  loading = false
  API_URL = 'https://e646a0ef033b0e33.mokky.dev/products?'
  API_PARAMS = ''
  
  constructor() {
      makeAutoObservable(this)
  }
  
  getProducts = async () => {
    try {
      this.loading = true
      this.API_PARAMS = TypeStore.API_PAR + BrandStore.API_PAR
      const url = this.API_URL + this.API_PARAMS
      const { data } = await axios.get<IProduct[]>(url)
      runInAction(() => {
        this.products = data
        this.loading = false
      })
    }
    catch (e) {
      this.loading = false
      alert(`Error ${e}`)
    }
  }
  
  }
  
  export default new FetchProducts()