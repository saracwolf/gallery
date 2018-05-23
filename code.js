   $(document).ready(function() {
      $('.toggleNav').click(function() {
        $('#flex-nav ul').toggleClass('open');
      });
      $('input').on('focus', function(){
          $(this).css('outline-color', 'navy');
      });
        $('#button').hover(function(){
        $(this).removeClass('shadow');
    },
    function(){
        $(this).addClass('shadow');
    });
     $('.call').click(function() {
        $('.phone').slideToggle('slow');
    }); 
    });