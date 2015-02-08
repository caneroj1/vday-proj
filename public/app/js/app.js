$(function() {
  var startingIndex = $('#carousel-videos').data('start');
  var videoIndex = startingIndex;
  $('#carousel-videos').on('slide.bs.carousel', function (event) {
    if(event.direction === "right") {
      videoIndex -= 1
      if(videoIndex < startingIndex) {
        videoIndex = parseInt($('#carousel-videos').data('total')) + startingIndex - 1;
      }

      $('#video-title').text($('#' + videoIndex).data('title'));
      $('#video-date').text($('#' + videoIndex).data('date'));
    }
    else {
      videoIndex = (videoIndex + 1) % (parseInt($('#carousel-videos').data('total')) + startingIndex);
      if(videoIndex < startingIndex) {
        videoIndex = startingIndex
      }

      $('#video-title').text($('#' + videoIndex).data('title'));
      $('#video-date').text($('#' + videoIndex).data('date'));
    }
  });

  $('.picker').on('click', function() {
    videoIndex = $(this).data("slide-id");
    $('#video-title').text($('#' + videoIndex).data('title'));
    $('#video-date').text($('#' + videoIndex).data('date'));
  });

  if ($('#datepicker').length > 0) $("#datepicker").datepicker();
});
