var lastval=0;
var newval;

$('.srvc').mouseenter(function(){
    // console.log("done");
    // $(this).next('.colore').slideToggle();
    // $('.colore').not($(this).next('.colore')).slideUp(); 
  
   var relY = event.pageY ;
   newval=relY;
   if(newval>lastval){
    //    in:- slideDown
        $(this).next('.colore').animate({height:"100%"});
        lastval=newval;        
   }
   else{
      // in:- slideup
        
         $(this).next('.colore').css("top","100%");
         $(this).next('.colore').css("height","100%");
        $(this).next('.colore').animate({top: '0%'});
        lastval=newval;
   }
});

$('.srvc').mouseleave(function () { 
   var relY = event.pageY ;

   if(relY>lastval){
     // leavedown
        $(this).next('.colore').animate({top: '100%',height:'0%'});
        $(this).next('.colore').css("top","0%");
        $(this).next('.colore').css("height","0%");
       
   }
   else{
     // leaveup
        $(this).next('.colore').animate({height: '0%'});
        $(this).next('.colore').css("top","0%");

   }
   
});