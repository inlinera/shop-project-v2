import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'

export type ProductItem = {
    name: string
    price: number
    type: string
    brand: string
    id: number
    pictures: string[]
}

class FetchProducts {

    products: ProductItem[] = []
    cart:ProductItem[] = []
    favorites:ProductItem[] = []

    constructor() {
        const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                this.cart = JSON.parse(storedCart);
            } else {
                this.cart = [];
            }
            const storedFavs = localStorage.getItem('favorites');
            if (storedFavs) {
                this.favorites = JSON.parse(storedFavs);
            } else {
                this.favorites = [];
            }
        makeAutoObservable(this)
    }

    getProducts = async () => {
      const url = 'https://66ad1128f009b9d5c73449cd.mockapi.io/api/v1/products'
      try{
        const response = await axios.get(url)
        runInAction(() => {
          this.products = response.data
        })
      }
      catch(e) {
        console.error(e)
      }
    }

    toggleCart = (product: ProductItem) => {
      runInAction(() => {
        const isExists = this.cart.some(p => p.id === product.id)
        if (!isExists) this.cart.push(product)
        else if (isExists) {
          const index = this.cart.findIndex(p => p.id === product.id)
          if (index!== -1) {
            this.cart.splice(index, 1)
          }
        }
        localStorage.setItem('cart', JSON.stringify(this.cart))
      })
    }

    toggleFavorites = (product: ProductItem) => {
      runInAction(() => {
        const isExists = this.favorites.some(p => p.id === product.id)
        if (!isExists) this.favorites.push(product)
        else if (isExists) {
          const index = this.favorites.findIndex(p => p.id === product.id)
          if (index!== -1) {
            this.favorites.splice(index, 1)
          }
        }
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
      })
    }
}

export default new FetchProducts()