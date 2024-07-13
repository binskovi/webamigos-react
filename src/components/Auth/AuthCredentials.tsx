import { useContext } from "react"

import {AuthContext} from './AuthContext'

export const AuthCredentials = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <p>Is user logged? {isLoggedIn ? "YES" : "NO"}</p>
    </div>
  )
}