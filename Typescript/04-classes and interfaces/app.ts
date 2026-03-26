// class User {
//   name: string
//   age: number
  
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }

// TS shortcut 

class User {
  readonly hobbies: string = 'None'
  private _role: string = ''
  
  constructor(public name: string, public age: number) {}

  set role( roleName :string) {
    if (roleName.trim() === '') {
      throw new Error('Role must not be empty!')
    }

    this._role = roleName
  }

  get userName() {
    return this.name + '_' + this._role
  }

  static clName() {
    console.log('User')
  }
}

class Employee extends User {
  constructor(name: string, age: number, public title: string) {
    super(name, age)
  }
}

User.clName()

const user = new User('Patrik', 30)
user.role = 'admin'

console.log(user.userName)

const empl = new Employee('Matt', 22, 'Coffee Procurer')
empl.role = 'employee'


// abstract classess cannot be instantiated, only extended

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(target: string) {
    // ...
  }
}



