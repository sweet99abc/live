$(document).ready(function(){
  new WOW({ mobile: true }).init();
  // 星星 '#f5d76e','#f7ca18','#f4d03f','#ececec','#ecf0f1','#a2ded0'
  var cols = ['#f8efcd','#f7e59e','#f4e5ac','#ececec','#ecf0f1','#dcf7f0'];
      var stars = 250;

      for (var i = 0; i <= stars; i++) {

        var size = Math.random()*3;
        var color = cols[parseInt(Math.random()*4)];

        $('#starsBox').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random()*100 + '%; left: ' + Math.random()*100 + '%; background: ' + color + '; box-shadow: 0 0 '+ Math.random()*10 +'px' + color + ';"></span>') ;
      };

      setTimeout(function(){ 
        $('#starsBox span').each(function(){  
          $(this).css('top', Math.random()*100 + '%').css('left', Math.random()*150 + '%'); 
        });
      }, 1);

      setInterval(function(){ 
        $('#starsBox span').each(function(){      
          $(this).css('top', Math.random()*100 + '%').css('left', Math.random()*150 + '%'); 
        });
      }, 100000);
});
