import { http } from '../../utils'

export interface loginPrams {
  username: string,
  password: string
}

export const login = (params:loginPrams) => http.post('user/login', params)
