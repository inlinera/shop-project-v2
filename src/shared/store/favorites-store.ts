import { makeAutoObservable, runInAction } from 'mobx'
import ToggleItem from './item-store'
import { IProduct } from '../interfaces/IProduct'

class FavoritesStore {
    favorites: IProduct[] = []

    constructor() {
        const storedFavs = localStorage.getItem('favorites')
        this.favorites = storedFavs ? JSON.parse(storedFavs) : []
        makeAutoObservable(this)
    }

    toggleFavorites = (product: IProduct) => {
        runInAction(() => {
          ToggleItem.toggleItem(product, this.favorites)
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
        })
      }
}

export default new FavoritesStore()