every:
// creating an alternate "every" function
function myEvery(array,fun){
  for(i=0;i<array.length;i++){
    if(fun(array[i])===false){
      return false;
    }
  }
  return true;
}
var array = [1,2,3];
function fun(item){
  return item%2==0;
}
console.log(myEvery(array,fun));