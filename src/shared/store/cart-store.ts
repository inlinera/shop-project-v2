import { makeAutoObservable, runInAction } from 'mobx'
import ToggleItem from './common/item-store'
import { IProduct } from '../interfaces/IProduct'

class CartStore {
    cart: IProduct[] = []

    constructor() {
        const storedCart = localStorage.getItem('cart-inl')
        this.cart = storedCart ? JSON.parse(storedCart) : []
        makeAutoObservable(this)
    }

    toggleCart = (product: IProduct) => {
        runInAction(() => {
          ToggleItem.toggleItem(product, this.cart)
          localStorage.setItem('cart-inl', JSON.stringify(this.cart))
        })
      }
}

export default new CartStore()