const Intern = require ('../lib/Intern.js')

describe('Intern', () => {

    it('should return the name of the Intern with getName', () => {
        const john = new Intern('John Doe', 'J1', 'john@email.com', 'UNH')
        expect(john.getName()).toBe('John Doe')
    })

    it('should return the id of the Intern with getId', () => {
        const john = new Intern('John Doe', 'J1', 'john@email.com', 'UNH')
        expect(john.getId()).toBe('J1')
    })

    it('should return the email of the Intern with getEmail', () => {
        const john = new Intern('John Doe', 'J1', 'john@email.com', 'UNH')
        expect(john.getEmail()).toBe('john@email.com')
    })

    it('should return the role of the Intern with getRole', () => {
        const john = new Intern('John Doe', 'J1', 'john@email.com', 'UNH')
        expect(john.getRole()).toBe('Intern')
    })

    it('should return the school of the Intern with getSchool', () => {
        const john = new Intern('John Doe', 'J1', 'john@email.com', 'UNH')
        expect(john.getSchool()).toBe('UNH')
    })
})