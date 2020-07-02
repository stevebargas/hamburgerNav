


function fart(){


    var elementWrapperSize  = $('.navContainer').width();
    var navWrapperSize  = $('.csi-nav').width();
    

      if( elementWrapperSize < navWrapperSize ){
        $(".csi-nav").hide();
        $(".hamMenu").show();

      } else{
        $(".csi-nav").show();
        $(".hamMenu").hide();
      }
      
      console.log( 'element wrapper', elementWrapperSize );
      console.log( 'nav wrapper', navWrapperSize );
      console.log( elementWrapperSize < navWrapperSize);    
}

$(document).ready(function() {
  fart();
});

$(window).resize(function() {
 fart();
});

