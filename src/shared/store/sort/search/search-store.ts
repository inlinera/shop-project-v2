import { makeAutoObservable, runInAction } from 'mobx'

class SearchStore {
  API_PAR = ''
  value = ''

  constructor() {
    makeAutoObservable(this)
  }

  sortSearch = (query: string) => {
    runInAction(() => {
      this.API_PAR = this.value ? `&name=*${query}` : ''
    })
  }

  setValue = (value: string) => this.value = value
}

export default new SearchStore()