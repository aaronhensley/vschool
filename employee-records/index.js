const employees = []
function Employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = function(){
        console.log(`name:${name}, jobTitle:${jobTitle}, salary:${salary}, status:${"Full Time"}`)
        
    }
}
const jimmy = new Employee("Jimmy", "Pilot", "80,000/y", ) 
jimmy.printEmployeeForm()
employees.push(jimmy)

const bob = new Employee("Bob", "VSchool Instructor", "4000/hr", "Part Time")
bob.printEmployeeForm()
employees.push(bob)
Employee.prototype.partTime = function(){
    this.status = "Part Time"
}
bob.partTime()
    

const mary = new Employee("Mary", "Doctor", "150,000/y")
mary.printEmployeeForm()
employees.push(mary)


console.log(employees)




    
