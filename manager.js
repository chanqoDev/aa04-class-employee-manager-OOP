const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager); 
        this.employees = employees; // array 
    }
    addEmployee(employee) {
        this.employees.push(employee); 
    }
    /* 
    To calculate a Manager's bonus you must sum the salaries of each employee in their employees array.
    You must also take into account whether each employee is an instance of an Employee,
        in which case simply add their salary to a sum.
        // If, they are Managers then process each of their employees and so on. 
        bonus = (manager's salary + total salary of all employees under them) * multiplier
    */
    calculateBonus(multiplier) {
        const totalSubSalary = this._totalSubSalary(); 
        const bonus = (this.salary + totalSubSalary) * multiplier; 
        return bonus; 
    }
    // Private helper Function 
    _totalSubSalary() {
        return this.employees.reduce((sum, employee) => {
            if (employee instanceof Manager) {
                return sum + employee.salary + employee._totalSubSalary(); 
            } else {
                return sum + employee.salary; 
            }
        }, 0); 
        // let sum = 0; 
        // for (const employee of this.employees){
        //     if (employee instanceof Manager) {
        //         sum += employee.salary + employee._totalSubSalary(); 
        //     } else {
        //         sum += employee.salary; 
        //     }
        // }
        // return sum; 
    }
}


try {
    module.exports = Manager; 
} catch {
    module.exports = null; 
}