// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require select2

$(document).ready(function() {
$('input').on('ifChanged', function(){
  var id = $(this).attr('id');
  var s_id = '#submit' + id;
  $(s_id).click();
  $(s_id).val(id);
  $(s_id).attr('name','todoID');
  })
})
$(document).ready(function() {
  $("#btnshow").click(function() {
    $("#cn").show();
    $(".row").css("pointer-events", "none");
  })
  $("#btnhide").click(function() {
    $("#cn").hide();
    $(".row").css("pointer-events", "auto");
  })

  $("#textInput").click(function() {
    $('#textInput').val("");
    $("#textInput").css("color", "black");
  })
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%'
  });
  $("#e1").select2();
  $('select').select2({
    minimumResultsForSearch: -1,
    width: '100%',
  });
});
