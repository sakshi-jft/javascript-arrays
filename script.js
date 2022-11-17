Array.prototype.flatarray = function(arr1,arr2) {
    let newarr= [...arr2,...arr1];
    this.reverse(newarr);
    return newarr;
  };
 let arr1=[2,3,4];
 let arr2=[7,8,9];
 console.log(arr1.flatarray(arr1,arr2));

 Array.prototype.getdifferencefromleft=function(arr){
    
    for(let i=0;i<arr.length-1;i++){
        arr[i]=arr[i]-arr[i+1];
    }
    return arr;
 }
 console.log(arr1.getdifferencefromleft(arr1));