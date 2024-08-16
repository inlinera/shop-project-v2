import { makeAutoObservable, runInAction } from "mobx";
import FetchProducts from '../../products-api'

class TypeStore {

    defaultType = 'All Products'
    chosedType = 'All Products'
    API_PAR = ''

    constructor() {
        makeAutoObservable(this)
    }

    changeType = (type: string) => {
    this.chosedType = type
      runInAction(() => {
        if (this.chosedType === this.defaultType) {
          this.API_PAR = ''
        } else {
          this.API_PAR = `&type=${type}`
        }
        FetchProducts.getProducts()
      })
    }
}

export default new TypeStore()