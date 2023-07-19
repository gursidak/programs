function reverseArray(a: number[]): number[] {
    // Write your code here
    
    /* Base case :  if array contains only one element; */
    if(a.length ==1){
        return a;
    }
    
    /* Rest all other cases; */
    let start=0;
    let end = a.length-1;
    while(start<end){
       const temp =  a[start];
       a[start] = a[end];
       a[end] = temp;
       start+=1;
       end-=1;
    }
    
    return a;

}