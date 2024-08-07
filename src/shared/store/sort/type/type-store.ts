import { makeAutoObservable, runInAction } from "mobx";
import FetchProducts from '../../products-api'
import ApplyFilters from '../applyAllFilters'

class TypeStore {

    type = ''

    constructor() {
        makeAutoObservable(this)
    }

    changeType = (type: string) => {
        runInAction(() => {
          this.type = type;
          if (type !== 'All Products') {
            FetchProducts.products = FetchProducts.filterProducts.filter(
              p => p.type.toLocaleLowerCase() === type.toLocaleLowerCase()
            )
          } else {
            FetchProducts.products = FetchProducts.filterProducts.filter(p => p)
          }
          ApplyFilters.applyFilters()
        })
      }
}

export default new TypeStore()