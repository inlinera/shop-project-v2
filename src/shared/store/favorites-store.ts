import { makeAutoObservable, runInAction } from 'mobx'
import ToggleItem from './item-store'
import { ProductItem } from './products-api'

class FavoritesStore {
    favorites:ProductItem[] = []

    constructor() {
        const storedFavs = localStorage.getItem('favorites')
        this.favorites = storedFavs? JSON.parse(storedFavs) : []
        makeAutoObservable(this)
    }

    toggleFavorites = (product: ProductItem) => {
        runInAction(() => {
          ToggleItem.toggleItem(product, this.favorites)
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
        })
      }
}

export default new FavoritesStore()