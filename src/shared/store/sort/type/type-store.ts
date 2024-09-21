import { makeAutoObservable, runInAction } from "mobx"

class TypeStore {

  constructor() {
    makeAutoObservable(this, {
      defaultType: false
    })
  }

    defaultType = 'All Products'
    chosedType = 'All Products'
    API_PAR = ''


    changeType = (type: string) => {
      runInAction(() => {
      this.chosedType = type
        if (this.chosedType === this.defaultType) {
          this.API_PAR = ''
        } else {
          this.API_PAR = `&type=${type}`
        }
      })
    }
}

export default new TypeStore()