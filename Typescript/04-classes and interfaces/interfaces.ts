interface Auth {
  email: string
  password: string

  login(): void
  logout(): void
}

let user: Auth

user = {
  email: 'blah',
  password: '132',

  login() {
    console.log('...')
  },

  logout() {
    console.log(('...'))
  }
}

class AuthUser implements Auth {
  constructor(public email: string, public password: string) {}

  login() {
    
  }

  logout() {
    
  }
}

