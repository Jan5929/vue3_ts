import * as Cookies from 'js-cookie'
const JToken = 'J-token'

export function geToKen ():string|undefined {
  return Cookies.get('JToken')
}
export function setToken (value: string):void {
  Cookies.set('JToken', value)
}

export function removeToken (): void {
  Cookies.remove('JToken')
}
