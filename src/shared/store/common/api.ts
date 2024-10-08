import axios from "axios"
import { action, makeObservable } from "mobx"
//MOBX
import BrandStore from '../sort/brand/brand-store'
import TypeStore from '../sort/type/type-store'
import SearchStore from '../sort/search/search-store'
import PriceStore from '../sort/price/price-store'

export class Api<T> {

    constructor (path: string) {
        makeObservable(this, {
            get: action
        })
        this.path = path
    }

    //ALL API STATES
    path: string

    //ALL API ACTIONS
    get = async (params?: string | number) => {
        if (!params) {
            return (await axios.get<T>(`${this.path}`)).data
        }
        return (await axios.get<T>(`${this.path}${params}`)).data
    }
    //PARAMS GETTER
    get getParams() {
        return TypeStore.API_PAR + BrandStore.API_PAR 
        + SearchStore.API_PAR + PriceStore.API_PAR
    }
}