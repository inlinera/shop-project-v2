import { makeAutoObservable } from 'mobx'

class PriceStore {

    priceType: string = ''
    API_PAR = ''

    constructor() {
        makeAutoObservable(this)
    }

    sortPrice = (chosedPrice: string) => {
        this.priceType = chosedPrice
        this.API_PAR = `&sortBy=${chosedPrice}`
    }
}

export default new PriceStore()