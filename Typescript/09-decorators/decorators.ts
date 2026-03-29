function logger<T extends new (...args: any[]) => any>(target: T, context: ClassDecoratorContext) {
  console.log('logger')
  console.log(target)
  console.log(context)

  return class extends target {
    constructor(...args: any[]) {
      super(...args)
      console.log('class constructor')
      console.log(this)
    }
  }
}

function autobind(target: Function, context: ClassMemberDecoratorContext) {
  context.addInitializer(function(this: any) {
    this[context.name] = this[context.name].bind(this)
  })

  return function() {
    target()
  }
}

@logger
class Person {
  name = 'Pat'

  @autobind
  greet() {
    console.log(`Hi, ${this.name}!`)
  }
}

const nm = new Person()
const greet = nm.greet
greet()
