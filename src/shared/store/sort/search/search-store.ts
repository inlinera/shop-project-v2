import { makeAutoObservable } from 'mobx'
//MOBX
import FetchProducts from '../../products-api'

class SearchStore {
  API_PAR = ''

  constructor() {
    makeAutoObservable(this)
  }

  sortSearch = (query: string) => {
    this.API_PAR = `&name=*${query}`
    FetchProducts.getProducts()
  }
}

export default new SearchStore()