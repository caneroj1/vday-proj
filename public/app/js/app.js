$(function() {
  $('#carousel-videos').on('slide.bs.carousel', function (event) {
    $('#video-title').text($(event.relatedTarget).children('.video-container').data('title'));
    $('#video-date').text($(event.relatedTarget).children('.video-container').data('date'));
  });
  if ($('#datepicker').length > 0) $("#datepicker").datepicker();

  $('.video').click(function(){
    this.paused? this.play() : this.pause();
  });

  $('#upload-form').uploadProgress({
    /* scripts locations for safari */
    jqueryPath: "../../vendor/js/jquery-1.10.1.min.js",
    uploadProgressPath: "../../vendor/js/jquery.uploadProgress.js",

    /* function called each time bar is updated */
    uploading: function(upload) {console.log(upload.percents + "%");},

    /* selector or element that will be updated */
    progressBar: "#bar",

    /* progress reports url */
    progressUrl: "/progress",

    /* how often will bar be updated */
    interval: 500
  });
});
