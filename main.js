// code goes here :)

//first one
var total =0;
var avPrice;
items.forEach(function(element){
  total+= element.price;
});

avPrice= (total/items.length);
console.log(total);

document.getElementById("answer1").innerHTML = "Average price $:"+ avPrice;



// Second one
var arr = items.filter(function(el){
  console.log(el.price);

  return el.price >=14 && el.price<=18;
});


 var post =arr.map(function(element){
 return{

     title:element.title,
   price:element.price

 };
 });

 var newPost ="";
 post.forEach(function(el){
   newPost+= "<h3>" + el.title + "price range:" + el.price + "</h3>";
   console.log(newPost);
 });
 document.getElementById("answer2").innerHTML = newPost;

 //Third one

 var curr =items.filter(function(one){
   console.log(one.currency_code);

   return one.currency_code ==="GBP";
 });

 var curr1 = curr.map(function(one1){
   return{
     title:one1.title,
     price:one1.price
   };
 });

 var curr2 ="";
 curr1.forEach(function(one2){
   curr2+= "<h3>" + one2.title + " price:" + one2.price + "</h3>";
   console.log(curr2);
 });
 document.getElementById("answer3").innerHTML = curr2;


//Fourth one

var wood1 =items.filter(function(made){

  return made.materials.includes("wood");
});



var wood3="";
wood1.forEach(function(made3){
wood3+= "<h3>" + made3.title + "</h3>";
});
 document.getElementById("answer4").innerHTML = wood3;

 //Fifth one2

 var fifth =items.filter(function(el){
  return el.materials.length >=8;

 });

 var itm = curr.map(function(itm1){
   return{
     title:itm1.title,
     materials:itm1.materials

   };
 });

 var last ="";
 fifth.forEach(function(itm2){
   last+= "<h3>" + itm2.title + "Items:" + itm2.materials + "</h3>";

 });
 document.getElementById("answer5").innerHTML = last;

 //Sixth one

 var sell = items.filter(function(seller1){
   return seller1.who_made ==="i_did";
 });

 var sell2 ="";
 sell.forEach(function(elem){
   sell2+= "<h3>" +elem.title + "Sellers:" +"</h3";
 });

  document.getElementById("answer6").innerHTML = sell2;
