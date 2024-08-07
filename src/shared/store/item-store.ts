import { makeAutoObservable } from 'mobx'
import { ProductItem } from './products-api'

class ToggleItem {

    constructor() {
        makeAutoObservable(this)
    }

    toggleItem = (item: ProductItem, array: ProductItem[]) => {
        const index = array.findIndex(i => i.id === item.id)
        if (index !== -1) {
          array.splice(index, 1)
        } else {
          array.push(item)
        }
      }
}

export default new ToggleItem()