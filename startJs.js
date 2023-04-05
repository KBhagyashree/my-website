// js automatically detects the type of the var, that means 
// var data type could be changed later during the execution also
const person1 = {
    name : 'Sam',

    get getName(){
        return this.name;
    },

    set setName(newName){
        this.name = newName;
    }
};

console.log(person1.name);
person1.setName = prompt("Enter the name you like");
console.log(person1.getName);