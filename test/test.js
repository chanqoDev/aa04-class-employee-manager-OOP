const chai = require('chai');
const expect = chai.expect;

const Employee = require('../employee');
const Manager = require('../manager'); 

describe('Bonus for Employee and Manager', () => {
  it('should Calculate Bonus Correctly', () => {
    const hobbes = new Manager('Hobbes', 1000000, 'Founder', null);
    const calvin = new Manager('Calvin', 130000, 'Director', hobbes);
    const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
    const lily = new Employee('Lily', 90000, 'TA', susie); 
    const clifford = new Employee('Clifford', 90000, 'TA', susie); 
    // Calculate bonuses
    const hobbesBonus = hobbes.calculateBonus(0.05);
    const calvinBonus = calvin.calculateBonus(0.05);
    const susieBonus = susie.calculateBonus(0.05);
    const lilyBonus = lily.calculateBonus(0.05); 
    const cliffordBonus = clifford.calculateBonus(0.05); 

    console.log('Hobbes Bonus:', hobbesBonus);
    console.log('Calvin Bonus:', calvinBonus);
    console.log('Susie Bonus:', susieBonus);
    console.log('Lily Bonus:', lilyBonus); 
    console.log('clifford Bonus:', cliffordBonus); 

  // Assert bonuses
    expect(hobbesBonus).to.equal(70500); // $70,500
    expect(calvinBonus).to.equal(20500);
    expect(susieBonus).to.equal(14000);
    expect(lilyBonus).to.equal(4500);
    expect(cliffordBonus).to.equal(4500);
});
});