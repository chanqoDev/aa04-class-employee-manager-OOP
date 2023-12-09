class Employee {
    constructor(name, salary, title, manager = null ) {
        this.name = name; 
        this.salary = salary; 
        this.title = title; 
        this.manager = manager; 
        // check if its truthy 
        if (manager) {
            this.manager.addEmployee(this)
        }
    }


}


// const leo = new Employee('Leonardo', 90000, 'Ninja');
// console.log(leo);

try {
    module.exports = Employee; 
} catch {
    module.exports = null; 
}