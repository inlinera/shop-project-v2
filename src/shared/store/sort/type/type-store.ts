import { makeAutoObservable, runInAction } from "mobx"

class TypeStore {

  constructor() {
    makeAutoObservable(this, {
      defaultType: false
    })
  }
  //ALL TYPES STATES
    defaultType = 'All Products'
    chosedType = 'All Products'
    API_PAR = ''

  //ALL TYPES ACTIONS
  changeType = (type: string) => {
    runInAction(() => {
      this.setType(type)
      if (type === this.defaultType) {
        this.setApiParams('')
      } else {
        this.setApiParams(`&type=${type}`)
      }
    })
  }

  //ALL TYPES STATES MOVES
  setType = (type: string) => this.chosedType = type
  setApiParams = (params: string) => this.API_PAR = params
}

export default new TypeStore()