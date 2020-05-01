flat:

var array = [1,2,3,[4,5,6]]

function myFlat(array){
  var a = [];
  for(i=0;i<array.length;i++){
    if(array[i].length>1){
      for(j=0;j<array[i].length;j++){
        a.push(array[i][j]);
      }
    }
    else{
          a.push(array[i]);
        }
  }
  return a;
}

console.log(myFlat(array));
