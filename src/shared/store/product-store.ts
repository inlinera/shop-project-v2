import { makeAutoObservable } from 'mobx'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
import axios from 'axios';
//INTERFACES
import { IProduct } from '../interfaces/IProduct'
//DATA
import { API_URL } from '../data/API_URL'

class ProductStore {
  product?: IPromiseBasedObservable<IProduct>

  constructor() {
    makeAutoObservable(this)
  }

  getProduct = async (id: number) => (await axios.get(`${API_URL}/${id}`)).data

  fetchProduct = async (id: number) => {
    this.product = fromPromise( this.getProduct(id) )
  }
}

export default new ProductStore()