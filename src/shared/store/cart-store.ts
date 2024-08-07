import { makeAutoObservable, runInAction } from 'mobx'
import ToggleItem from './item-store'
import { ProductItem } from './products-api'

class CartStore {
    cart: ProductItem[] = []

    constructor() {
        const storedCart = localStorage.getItem('cart')
        this.cart = storedCart? JSON.parse(storedCart) : []
        makeAutoObservable(this)
    }

    toggleCart = (product: ProductItem) => {
        runInAction(() => {
          ToggleItem.toggleItem(product, this.cart)
        localStorage.setItem('cart', JSON.stringify(this.cart))
        })
      }
}

export default new CartStore()