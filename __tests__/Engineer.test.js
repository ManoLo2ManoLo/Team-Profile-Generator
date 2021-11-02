const Engineer = require('../lib/Engineer.js');

test('properly inserts information', () => {
    const engineer = new Engineer('Manuel', '123', 'manuel123@mail.com', 'Manuel123');

    expect(engineer.name).toBe('Manuel')
    expect(engineer.id).toBe('123')
    expect(engineer.email).toBe('manuel123@mail.com')
    expect(engineer.github).toBe('Manuel123')
});

test('properly returns role', () => {
    const engineer = new Engineer;

    expect(engineer.getRole()).toEqual('Engineer')
})