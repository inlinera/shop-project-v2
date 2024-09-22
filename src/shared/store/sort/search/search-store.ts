import { makeAutoObservable } from 'mobx'

class SearchStore {

  constructor() {
    makeAutoObservable(this)
  }
  //ALL SEARCH STATES
  API_PAR = ''
  value = ''

  //ALL SEARCH ACTIONS
  sortSearch = (query: string) => {
      this.API_PAR = this.value ? `&name=*${query}` : ''
  }
  //ALL SEARCH STATE MOVES
  setValue = (value: string) => this.value = value
}

export default new SearchStore()