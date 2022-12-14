import { createActions } from "reduxsauce"

const { Types, Creators } = createActions({
  // View actions
  logIn: ["user", "password"],
  // Reducer
  logInRequest: null,
  logInSuccess: null,
  logInFailure: ["error"],
  logInClean: null
})

export { Creators, Types }
