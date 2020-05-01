function myFindIndex(array,func){
  for(i=0;i<array.length;i++){
    if(func(array[i])){
           return i;
    }
  }
}

var array = [{id:1},{id:2},{id:3}];
function f(item){
  return item.id===3;
}

console.log(myFindIndex(array,f));