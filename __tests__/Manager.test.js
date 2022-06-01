const Manager = require ('../lib/Manager.js')

describe('Manager', () => {

    it('should return the name of the Manager with getName', () => {
        const john = new Manager('John Doe', 'J1', 'john@email.com', '4')
        expect(john.getName()).toBe('John Doe')
    })

    it('should return the id of the Manager with getId', () => {
        const john = new Manager('John Doe', 'J1', 'john@email.com', '4')
        expect(john.getId()).toBe('J1')
    })

    it('should return the email of the Manager with getEmail', () => {
        const john = new Manager('John Doe', 'J1', 'john@email.com', '4')
        expect(john.getEmail()).toBe('john@email.com')
    })

    it('should return the role of the Manager with getRole', () => {
        const john = new Manager('John Doe', 'J1', 'john@email.com', '4')
        expect(john.getRole()).toBe('Manager')
    })

    it('should return the office number of the Manager with getOfficeNum', () => {
        const john = new Manager('John Doe', 'J1', 'john@email.com', '4')
        expect(john.getOfficeNum()).toBe('4')
    })
})