$(document).ready(function() {
  
  $('.gallery-item a').on('click', function(e) {
    e.preventDefault(); 
    
    var targetLightbox = $(this).attr('data-target');
    
    $(targetLightbox).fadeIn(400).css('display', 'flex');
  });

  $('.lightbox-close').on('click', function(e) {
    e.preventDefault();
    
    $(this).closest('.lightbox').fadeOut(300);
  });

  $('.lightbox').on('click', function(e) {
    if ($(e.target).is('.lightbox')) {
      $(this).fadeOut(300);
    }
  });
  
});