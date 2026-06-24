$(document).ready(function() {
  
  // 1. When an image link is clicked
  $('.gallery-item a').on('click', function(e) {
    e.preventDefault(); // Stop standard link behavior
    
    // Get the target ID from the data attribute (e.g., "#lb1")
    var targetLightbox = $(this).attr('data-target');
    
    // Smoothly fade in the correct lightbox window
    $(targetLightbox).fadeIn(400).css('display', 'flex');
  });

  // 2. When the close button inside the lightbox is clicked
  $('.lightbox-close').on('click', function(e) {
    e.preventDefault();
    
    // Smoothly fade out the open lightbox window
    $(this).closest('.lightbox').fadeOut(300);
  });

  // 3. Optional Bonus: Close the lightbox if a user clicks outside the image
  $('.lightbox').on('click', function(e) {
    if ($(e.target).is('.lightbox')) {
      $(this).fadeOut(300);
    }
  });
  
});