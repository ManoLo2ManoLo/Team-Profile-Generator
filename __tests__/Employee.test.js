const Employee = require('../lib/Employee.js');

test('properly inserts information', () => {
    const employee = new Employee('Manuel', '123', 'manuel123@mail.com');

    expect(employee.name).toBe('Manuel')
    expect(employee.id).toBe('123')
    expect(employee.email).toBe('manuel123@mail.com')
});

test('properly returns role', () => {
    const employee = new Employee;

    expect(employee.getRole()).toEqual('Employee')
})