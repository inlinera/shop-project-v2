import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
//INTERFACES
import { IProduct } from '../interfaces/IProduct'
//DATA
import { API_URL } from '../data/API_URL'
import { Api } from './common/api';

class ProductStore extends Api {

  constructor() {
    super(API_URL)
  }

  product?: IPromiseBasedObservable<IProduct>

  fetchProduct = async (id: number) => {
    this.product = fromPromise( this.get(id) )
  }
}

export const productStore = new ProductStore()