Find:
function myFind(array,func){
  for(i=0;i<array.length;i++){
    if(func(array[i])){
           return array[i];
    }
  }
}

var array = [{id:1},{id:2},{id:3}];
function f(item){
  return item.id===3;
}

console.log(myFind(array,f));