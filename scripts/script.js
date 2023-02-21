$(document).ready(function () {
  console.log("doc is ready");



  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();


    let userName = $("#userName").val();
    console.log("user name = ", userName);
   

    console.log("name length f/n = ", nameLength(userName));

    console.log("you clicked the button");
    

    $("#coolNameFactsOutput").html(nameLength(userName));

   
  });
});



function nameLength(name) 
{
 
  square = name.length * name.length;
  
  return "Your name is " + name.length + " letters long! Also did you know that the length of your name "+name.length+", is also the square root of "+square+"? How cool!";
}
