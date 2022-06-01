const Employee = require ('../lib/Employee.js')

describe('Employee', () => {

    it('should return the name of the employee with getName', () => {
        const john = new Employee('John Doe', 'J1', 'john@email.com')
        expect(john.getName()).toBe('John Doe')
    })

    it('should return the id of the employee with getId', () => {
        const john = new Employee('John Doe', 'J1', 'john@email.com')
        expect(john.getId()).toBe('J1')
    })

    it('should return the email of the employee with getEmail', () => {
        const john = new Employee('John Doe', 'J1', 'john@email.com')
        expect(john.getEmail()).toBe('john@email.com')
    })

    it('should return the role of the employee with getRole', () => {
        const john = new Employee('John Doe', 'J1', 'john@email.com')
        expect(john.getRole()).toBe('Employee')
    })
})