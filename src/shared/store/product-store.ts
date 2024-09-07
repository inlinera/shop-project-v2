import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios';
//INTERFACES
import { IProduct } from '../interfaces/IProduct'
//DATA
import { API_URL } from '../data/API_URL'

class ProductStore {
  product: IProduct = {
    name: '',
    price: 0,
    type: '',
    brand: '',
    id: 0,
    pictures: []
  }
  isLoading = false
  error = null

  constructor() {
    makeAutoObservable(this)
  }

 fetchProduct = async (id: number) => {
    this.isLoading = true
    try {
      const { data } = await axios.get(`${API_URL}/${id}`)
      runInAction(() => {
        this.product = data
        this.isLoading = false
      })
    } catch (err: any) {
      runInAction(() => {
        this.error = err.message
        this.isLoading = false
      })
    }
  }
}

export default new ProductStore()