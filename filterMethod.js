filter:
function myFilter(array,func){
  var newArray=[];
  for(i=0;i<array.length;i++){
  if(func(array[i])){
    newArray.push(array[i]);
  }
}
return newArray;
}

var array = [1,2,3];
function func(item){
  return item%2==0;
}		

console.log(myFilter(array,func));