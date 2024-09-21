import axios from "axios"
import { action, makeObservable } from "mobx"

const apiProps = {
    get: action
}

export class Api {

    constructor (path: string) {
        makeObservable(this, apiProps)
        this.path = path
    }

    //ALL API STATES
    path: string

    //ALL API ACTIONS
    get = async (id: number) => (await axios.get(`${this.path}/${id}`)).data

}