import { makeAutoObservable, runInAction } from 'mobx'
import ToggleItem from './common/item-store'
import { IProduct } from '../interfaces/IProduct'

class FavoritesStore {

  constructor() {
    const storedFavs = localStorage.getItem('favorites-inl')
    this.favorites = storedFavs ? JSON.parse(storedFavs) : []
    makeAutoObservable(this)
  }
  //ALL FAVORITES STATES
    favorites: IProduct[] = []
    
  //ALL FAVORITES ACTIONS
    toggleFavorites = (product: IProduct) => {
        runInAction(() => {
          ToggleItem.toggleItem(product, this.favorites)
          localStorage.setItem('favorites-inl', JSON.stringify(this.favorites))
        })
      }
}

export default new FavoritesStore()