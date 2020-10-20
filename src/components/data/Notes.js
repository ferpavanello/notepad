export default class Notes {
    constructor () {
        this.notes = []
        this.subscribers = []
    }

    subscribe (func) {
        this.subscribers.push(func)
    }

    unsubscribe (func) {
        this.subscribers = this.subscribers.filter(f => f !== func)
    }

    notify () {
        this.subscribers.forEach(func => func(this.notes))
    }

    createNote (title, text, category) {
        const newNote = new Note(title, text, category)
        this.notes.push(newNote)
        this.notify()
    }

    deleteNote (index) {
        this.notes.splice(index, 1)
        this.notify()
    }
}

class Note {
    constructor (title, text,  category) {
        this.title = title
        this.text = text
        this.category = category
    }
}