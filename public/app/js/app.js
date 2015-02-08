$(function() {
  $('#carousel-videos').on('slide.bs.carousel', function (event) {
    $('#video-title').text($(event.relatedTarget).children('.video-container').data('title'));
    $('#video-date').text($(event.relatedTarget).children('.video-container').data('date'));
  });
  if ($('#datepicker').length > 0) $("#datepicker").datepicker();
});
