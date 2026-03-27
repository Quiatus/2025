class ListNode<T> {
  next?: ListNode<T>
  constructor(public value: T) {}
}

class LinkedList<T> {
  private root?: ListNode<T>
  private tail?: ListNode<T>
  private length = 0

  add(value: T) {
    const node = new ListNode(value)
    if (!this.root || !this.tail) {
      this.root = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }

  getLength() {
    return this.length
  }

  print() {
    let current = this.root

    while(current) {
      console.log(current.value)
      current = current.next
    }
  }
}

const list = new LinkedList<number>()

list.add(10)
list.add(5)
list.add(50)

console.log(list.getLength())
console.log(list.print())