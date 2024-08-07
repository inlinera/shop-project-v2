import { makeAutoObservable, runInAction } from "mobx";
import FetchProducts from '../../products-api'
import ApplyFilters from '../applyAllFilters'

class TypeStore {

    defaultType = 'All Products'
    type = ''

    constructor() {
        makeAutoObservable(this)
    }

    changeType = (type: string) => {
        runInAction(() => {
          this.type = type;
            FetchProducts.products = FetchProducts.filterProducts.filter(
              this.type.toLowerCase() !== this.defaultType.toLowerCase() 
              ? p => p.type.toLowerCase() === type.toLowerCase()
              : p => p )
          ApplyFilters.applyFilters()
        })
      }
}

export default new TypeStore()