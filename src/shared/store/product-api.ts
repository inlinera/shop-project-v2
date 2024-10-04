import { action, makeObservable, observable } from 'mobx'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
//INTERFACES
import { IProduct } from '../interfaces/IProduct'
//DATA
import { API_URL } from '../data/API_URL'
//MOBX
import { Api } from './common/api'

const productStoreProps = {
  product: observable,
  fetchProduct: action
}

class ProductStore extends Api<IProduct> {

  constructor() {
    super(`${API_URL}/`)
    makeObservable(this, productStoreProps)
  }
  //ALL PRODUCT STATES
  product?: IPromiseBasedObservable<IProduct>

  //ALL PRODUCT ACTIONS
  fetchProduct = async (id: number) => this.product = fromPromise(this.get(id))
}

export const productStore = new ProductStore()