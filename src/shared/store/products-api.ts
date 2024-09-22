import {  action, makeObservable, observable, reaction } from 'mobx'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
//MOBX
import { Api } from './common/api'
//INTERFACES
import { IProduct } from "@/shared/interfaces/IProduct"
//DATA
import { API_URL } from '../data/API_URL'

const fetchProductsProps = {
  products: observable,
  getProducts: action
}

class FetchProducts extends Api<IProduct[]> {

  constructor() {
    super(`${API_URL}?`)
    makeObservable(this, fetchProductsProps)
    reaction(
      () => this.getParams, () => {
      this.getProducts()
      },
      { fireImmediately: true }
    )
  }
  //ALL FETCH-PRODUCT STATES
  products?: IPromiseBasedObservable<IProduct[]>

  //ALL FETCH-PRODUCT ACTIONS
  getProducts = async () => this.products = fromPromise(this.get(this.getParams))
}

export const fetchProducts = new FetchProducts()