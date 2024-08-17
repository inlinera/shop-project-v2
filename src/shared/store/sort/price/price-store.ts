import { makeAutoObservable } from 'mobx'
//MOBX
import FetchProducts from '@/shared/store/products-api'

class PriceStore {

    priceType: string = ''
    API_PAR = ''

    constructor() {
        makeAutoObservable(this)
    }

    sortPrice = (chosedPrice: string) => {
        this.priceType = chosedPrice
        this.API_PAR = `&sortBy=${chosedPrice}`
        FetchProducts.getProducts()
      }
}

export default new PriceStore()