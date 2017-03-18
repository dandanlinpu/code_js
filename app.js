function Animal(){
  this.type="animal";
}
function Cat(name,color){
  this.name=name;
  this.color=color;
}
Cat.prototype = new Animal();
Cat.prototype.constructor=Cat;
Cat1 = new Cat(1,2);
console.log(Cat1.type + Cat1.name + Cat1.color);
