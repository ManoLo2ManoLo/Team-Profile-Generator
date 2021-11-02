const Manager = require('../lib/Manager.js');

test('properly inserts information', () => {
    const manager = new Manager('Manuel', '123', 'manuel123@mail.com', '456');

    expect(manager.name).toBe('Manuel')
    expect(manager.id).toBe('123')
    expect(manager.email).toBe('manuel123@mail.com')
    expect(manager.office).toBe('456')
});

test('properly returns role', () => {
    const manager = new Manager;

    expect(manager.getRole()).toEqual('Manager')
})