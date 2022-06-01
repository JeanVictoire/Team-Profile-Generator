const Engineer = require ('../lib/Engineer.js')

describe('Engineer', () => {

    it('should return the name of the engineer with getName', () => {
        const john = new Engineer('John Doe', 'J1', 'john@email.com', 'johndoe')
        expect(john.getName()).toBe('John Doe')
    })

    it('should return the id of the engineer with getId', () => {
        const john = new Engineer('John Doe', 'J1', 'john@email.com', 'johndoe')
        expect(john.getId()).toBe('J1')
    })

    it('should return the email of the engineer with getEmail', () => {
        const john = new Engineer('John Doe', 'J1', 'john@email.com', 'johndoe')
        expect(john.getEmail()).toBe('john@email.com')
    })

    it('should return the role of the engineer with getRole', () => {
        const john = new Engineer('John Doe', 'J1', 'john@email.com', 'johndoe')
        expect(john.getRole()).toBe('Engineer')
    })

    it('should return the github username of the engineer with getGitub', () => {
        const john = new Engineer('John Doe', 'J1', 'john@email.com', 'johndoe')
        expect(john.getGitub()).toBe('johndoe')
    })
})