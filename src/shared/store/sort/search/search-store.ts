import { makeAutoObservable } from 'mobx'
//MOBX
import FetchProducts from '../../products-api'


//ДОДЕЛАТЬ ПОИСК

class SearchStore {
  searchQuery = ''

  constructor() {
    makeAutoObservable(this)
  }

  sortSearch = (query: string) => {
    this.searchQuery = query
    console.log(query)
  }
}

export default new SearchStore()