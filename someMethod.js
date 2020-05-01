Some:

function mySome(array,fun){
  for(i=0;i<array.length;i++){
    if(fun(array[i])===true){
      return true;
    }
  }
  return false;
}
var array = [1,2,5];
function fun(item){
  return item%2==0;
}
console.log(mySome(array,fun));