let counterClick = 0;

let makeZoneGreen = function(event){
  console.log("mouse entred!!");
  console.log(event.target);
  $(event.target).css("background-color","green");
}

let makeZoneWhite = function(e){
  console.log("mouse leaved!!");
  $(e.target).css("background-color","white");
}

let makeZoneGreenForever = function(x){
  counterClick += 1;
  console.log("mouse clicked!!");
  $(x.target).css("background-color","green");
  $(x.target).off("mouseleave");
  $(x.target).off("mouseenter");
  $(x.target).off("click");
  if(counterClick === 4){
      alert("Congratulation!!!");
  }
}

$(".zone").on("mouseenter",makeZoneGreen);
$(".zone").on("mouseleave",makeZoneWhite);
$(".zone").on("click",makeZoneGreenForever);