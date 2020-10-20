export default class Categories {
    constructor () {
        this.categories = []
        this.subscribers = []
    }

    subscribe (func) {
        this.subscribers.push(func)
    }

    unsubscribe (func) {
        this.subscribers = this.subscribers.filter(f => f !== func)
    }

    notify () {
        this.subscribers.forEach(func => func(this.categories))
    }

    addCategory (newCategory) {
        this.categories.push(newCategory)
        this.notify()
    }
}