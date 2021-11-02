const Intern = require('../lib/Intern.js');

test('properly inserts information', () => {
    const intern = new Intern('Manuel', '123', 'manuel123@mail.com', 'Harvard');

    expect(intern.name).toBe('Manuel')
    expect(intern.id).toBe('123')
    expect(intern.email).toBe('manuel123@mail.com')
    expect(intern.school).toBe('Harvard')
});

test('properly returns role', () => {
    const intern = new Intern;

    expect(intern.getRole()).toEqual('Intern')
})