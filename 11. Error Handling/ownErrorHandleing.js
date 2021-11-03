class AuthenticationError extends Error{
  constructor(message){
    super(message)
    this.name='authenticationError'
    this.favoriteSnack='grapes'
  }
}

class DbError extends Error{
  constructor(message){
    super(message)
    this.name='DbError'
    this.favoriteSnack='grapes'
  }
}

const a = new AuthenticationError('oopsie')
console.log(a.favoriteSnack)
