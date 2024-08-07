import { makeAutoObservable, runInAction } from 'mobx'
import ToggleItem from './item-store'
import { IProduct } from '../interfaces/IProduct'

class CartStore {
    cart: IProduct[] = []

    constructor() {
        const storedCart = localStorage.getItem('cart')
        this.cart = storedCart ? JSON.parse(storedCart) : []
        makeAutoObservable(this)
    }

    toggleCart = (product: IProduct) => {
        runInAction(() => {
          ToggleItem.toggleItem(product, this.cart)
        localStorage.setItem('cart', JSON.stringify(this.cart))
        })
      }
}

export default new CartStore()