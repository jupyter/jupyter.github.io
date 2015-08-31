$(".flip").hover(function(){
  $(this).find(".card").toggleClass("flipped");
  return false;
});