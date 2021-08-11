let arr=[1,2,3,4,5];
function fun(x){
    return (2*x);
}
function map(arr,fun){
    let b=[];
   for (let i=0 ; i< arr.length;i++){
     b.push(fun(arr[i]));
   }
  console.log(b);

   return b;
}
map(arr,fun);

// Filter
function fun1(x){
    return (x%2==0);
}
function Filter(arr,fun1){
  let b=[];
 for (let i=0 ; i< arr.length;i++){
   if(fun1(arr[i]))
   b.push(arr[i]);
 }
console.log(b);
return b;
}
Filter(arr,fun1);



function fun3(x,y){
  return (x+y);
}
function reduce(arr,func3){
let b=arr[0];
for (let i=1 ; i< arr.length;i++){
 b=func3(b,arr[i]);
}
console.log(b);
return b;
}
reduce(arr,fun3);
