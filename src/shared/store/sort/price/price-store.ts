import { makeAutoObservable } from 'mobx'
//MOBX
import ApplyFilters from '../applyAllFilters'

class PriceStore {

    priceType: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    sortPrice = (chosedPrice: string) => {
        this.priceType = chosedPrice
        
        ApplyFilters.applyFilters()
      }
}

export default new PriceStore()