import {  makeAutoObservable, reaction } from 'mobx'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
import axios from 'axios'
//INTERFACES
import { IProduct } from "@/shared/interfaces/IProduct"
//MOBX
import BrandStore from './sort/brand/brand-store'
import TypeStore from './sort/type/type-store'
import SearchStore from './sort/search/search-store'
import PriceStore from './sort/price/price-store'
//DATA
import { API_URL } from '../data/API_URL'

class FetchProducts {

  constructor() {
    makeAutoObservable(this)
    reaction(() => this.getParams, () => {
      this.getProducts()
    }, { fireImmediately: true })
  }

  products?: IPromiseBasedObservable<IProduct[]>

  //API PARAMS GETTER
    get getParams() {
      return TypeStore.API_PAR + BrandStore.API_PAR 
      + SearchStore.API_PAR + PriceStore.API_PAR
    }

  getProductList = async () => (await axios.get<IProduct[]>(`${API_URL}?` + this.getParams)).data

  getProducts = async () => this.products = fromPromise(this.getProductList())
}

export const fetchProducts = new FetchProducts()