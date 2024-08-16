import { makeAutoObservable } from 'mobx'
//MOBX
import FetchProducts from '@/shared/store/products-api'

//ДОДЕЛАТЬ СОРТИРОВКУ ПО ЦЕНЕ

class PriceStore {

    priceType: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    sortPrice = (chosedPrice: string) => {

      }
}

export default new PriceStore()