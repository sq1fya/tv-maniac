let hello = 'world'

export { hello }

type BookId = number | string // union type
type MyEvent = 'click' | 'keypress' | 'mouseenter'

let e: MyEvent = 'keypress'

type Size = 1 | 2 | 4 | 8

enum Category {
  Fiction,
  IT,
  History,
}

interface Book {
  id: BookId
  title: string
  category?: Category
}

class LibraryBook implements Book {
  id: BookId

  constructor(public title: string) {}

  logId(id: BookId) {
    if (typeof id === 'string') {
      return id.toUpperCase()
    }
    return id.toFixed(2)
  }
}

const book1 = { id: 1, title: 'Chrome Browser' }
const book2: Book = {
  id: 2,
  title: 'JavaScript introduction',
  category: 200,
}
const book3 = new LibraryBook('TypeScript in Practice')

let bookshelf: Book[] = [book1, book2]
bookshelf = adder(bookshelf, book3)

let ids = [1, 2, 4, 5]
ids = adder(ids, 9)

function adder<T>(items: ReadonlyArray<T>, item: T): T[] {
  return [...items, item]
}
