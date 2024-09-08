import axios from 'axios'
import { makeAutoObservable, reaction } from 'mobx'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
//MOBX
import BrandStore from './sort/brand/brand-store'
import TypeStore from './sort/type/type-store'
import SearchStore from './sort/search/search-store'
import PriceStore from './sort/price/price-store'
//INTERFACES
import { IProduct } from '../interfaces/IProduct'
//DATA
import { API_URL } from '../data/API_URL'

class FetchProducts {

  products?: IPromiseBasedObservable<IProduct[]>
  API_URL = `${API_URL}?`
  
  constructor() {
      makeAutoObservable(this, {
        API_URL: false
      })
      reaction(() => [TypeStore.API_PAR, BrandStore.API_PAR,
       SearchStore.API_PAR, PriceStore.API_PAR], () => {
        this.getProducts()
      }, { fireImmediately: true })
  }

  getProds = async () => (await axios.get<IProduct[]>(this.API_URL + this.getParams)).data
  
  async getProducts(): Promise<void | Error> {
     this.products = fromPromise( this.getProds() )
  }

  get getParams() {
    return TypeStore.API_PAR + BrandStore.API_PAR 
    + SearchStore.API_PAR + PriceStore.API_PAR
  }
}

export default new FetchProducts()