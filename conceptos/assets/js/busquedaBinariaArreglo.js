let binarySearch = (arr,val)=> { 
  
  let start = 0; 
  let end = arr.length - 1;
  let middle = Math.floor((start + end)/2);

  if (arr[middle] === val) return middle
  
  while(arr[middle] !== val){
    console.log(start,middle,end)
    if(val < arr[middle]){
      end = middle -1;
    }
    else{
      start = middle + 1;
    }
  middle = Math.floor((start + end)/2);
  } 
  console.log(start,middle,end)
  console.log(middle)
  return middle;
}
binarySearch([1,2,3,4,6,7,8,9,10,20,28,32,45,50],10)