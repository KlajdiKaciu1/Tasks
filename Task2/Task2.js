function turnOnTheStove(callback1,callback2)
{
    console.log("The stove is turned on!");
    callback1();
    setTimeout(()=>{console.log("BINGGG!") 
    callback2()},2000);
    
}
function doTheDishes()
{
    console.log("The dishes are done!");
}
function comeBackToTheStove()
{
    console.log("Lunch is ready!");
}

function main()
{
 turnOnTheStove(doTheDishes,comeBackToTheStove);
}
main();