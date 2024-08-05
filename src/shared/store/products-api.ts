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
    filterProducts: ProductItem[] = []
    cart:ProductItem[] = []
    favorites:ProductItem[] = []
    type = 'All Products'

    constructor() {
      const storedCart = localStorage.getItem('cart')
      this.cart = storedCart? JSON.parse(storedCart) : []
      const storedFavs = localStorage.getItem('favorites')
      this.favorites = storedFavs? JSON.parse(storedFavs) : []
        makeAutoObservable(this)
    }

    getProducts = async () => {
      const url = 'https://66ad1128f009b9d5c73449cd.mockapi.io/api/v1/products'
      try{
        const response = await axios.get(url)
        runInAction(() => {
          this.products = response.data
          this.filterProducts = response.data
        })
      }
      catch(e) {
        console.error(e)
      }
    }

    toggleItem = (item: ProductItem, array: ProductItem[]) => {
      const index = array.findIndex(i => i.id === item.id)
      if (index !== -1) {
        array.splice(index, 1)
      } else {
        array.push(item)
      }
    }

    toggleCart = (product: ProductItem) => {
      runInAction(() => {
        this.toggleItem(product, this.cart)
      localStorage.setItem('cart', JSON.stringify(this.cart))
      })
    }

    toggleFavorites = (product: ProductItem) => {
      runInAction(() => {
        this.toggleItem(product, this.favorites)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
      })
    }

    changeType = (type: string) => {
      runInAction(() => {
        this.type = type;
        if (type!== 'All Products') {
          this.products = this.filterProducts.filter(p => p.type.toLocaleLowerCase() === type.toLocaleLowerCase())
        } else {
          this.products = this.filterProducts.filter(p => p)
        }
      })
    }
}

export default new FetchProducts()