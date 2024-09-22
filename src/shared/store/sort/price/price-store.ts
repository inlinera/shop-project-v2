import { makeAutoObservable, runInAction } from 'mobx'

class PriceStore {

    constructor() {
        makeAutoObservable(this)
    }
    //ALL PRICE STATES
    priceType = ''
    API_PAR = ''

    //ALL PRICE ACTIONS
    sortPrice = (chosedPrice: string) => {
        runInAction(() => {
            this.setType(chosedPrice)
            this.setApiParams(`&sortBy=${chosedPrice}`)
        })
    }

    //ALL PRICE STATE MOVES
    setType = (type: string) => this.priceType = type
    setApiParams = (params: string) => this.API_PAR = params
}

export default new PriceStore()