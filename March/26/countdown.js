function myFunction(){
    countDown(3);
}

function countDown(fromNumber){
    //Let nextNumber = fromNumber - 1;
    
    if(fromNumber>0){
        console.log("before"+fromNumber);
        countDown(fromNumber-1);
        console.log("After"+fromNumber); 
    }
    return;
}

myFunction();