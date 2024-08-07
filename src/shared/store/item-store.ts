import { makeAutoObservable } from 'mobx'
import { IProduct } from '../interfaces/IProduct'

class ToggleItem {

    constructor() {
        makeAutoObservable(this)
    }

    toggleItem = (item: IProduct, array: IProduct[]) => {
        const index = array.findIndex(i => i.id === item.id)
        if (index !== -1) {
          array.splice(index, 1)
        } else {
          array.push(item)
        }
      }
}

export default new ToggleItem()