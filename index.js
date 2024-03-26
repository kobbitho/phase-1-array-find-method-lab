// code your solution here...
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  
]
function superbowlWin(recordsArray){ //declare the function
    let response = "";// define response
    response = recordsArray.find(object => (object.result === "W"));// use array.find to loop through the objects and fing the one with the rsult "W".
    //response = (response === undefined) ? undefined : response.year;  //use of tanary

if (response ===undefined){
    response = undefined;
}else{
    return response.year;
}
return response;
}      //use if else

console.log(superbowlWin(record));