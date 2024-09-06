import { makeAutoObservable, runInAction } from "mobx"

class TypeStore {

    defaultType = 'All Products'
    chosedType = 'All Products'
    API_PAR = ''

    constructor() {
        makeAutoObservable(this, {
          defaultType: false
        })
    }

    changeType = (type: string) => {
    this.chosedType = type
      runInAction(() => {
        if (this.chosedType === this.defaultType) {
          this.API_PAR = ''
        } else {
          this.API_PAR = `&type=${type}`
        }
      })
    }
}

export default new TypeStore()