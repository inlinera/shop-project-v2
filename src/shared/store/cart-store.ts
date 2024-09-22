import { makeAutoObservable, runInAction } from 'mobx'
//MOBX
import ToggleItem from './common/item-store'
//INTERFACES
import { IProduct } from '../interfaces/IProduct'

class CartStore {

  constructor() {
    const storedCart = localStorage.getItem('cart-inl')
    this.cart = storedCart ? JSON.parse(storedCart) : []
    makeAutoObservable(this)
  }
  //ALL CART STATES
    cart: IProduct[] = []

  //ALL CART ACTIONS
    toggleCart = (product: IProduct) => {
        runInAction(() => {
          ToggleItem.toggleItem(product, this.cart)
          localStorage.setItem('cart-inl', JSON.stringify(this.cart))
        })
      }
}

export default new CartStore()