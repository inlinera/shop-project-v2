import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios';
import { IProduct } from '../interfaces/IProduct';

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
      const { data } = await axios.get(`https://e646a0ef033b0e33.mokky.dev/products/${id}`)
      runInAction(() => {
        this.product = data
        console.log(data)
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