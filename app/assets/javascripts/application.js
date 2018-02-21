//= require jquery
//= require jquery_ujs
//= require moment
//= require bootstrap-datetimepicker


$(document).ready(function () {
   $('#datetimepicker1').datetimepicker({
      format: 'YYYY-MM-DD'
   });

   $('#datetimepicker3').datetimepicker({
       format: 'HH:mm'
   });

   $('.drop-down-btn').click(function(){
      $(this).parents('tr').nextUntil('.no-hover', 'tr').toggle()
      // .css('color: red')
      // .toggle()
   });

   // $('.input_checkbox').click(function() {
    // alert("clicked!");
    // var checked;
    // var id = params.attr('id');
    
    // if ( $(this).is(':checked')) {
    //   checked = true;
    // } else {
    //   checked = false;
    // }

    // alert('clicked!');

    // $(this).submit();

    // $.ajax({
    //   type: "PATCH",
    //   url: "/complete/" + id ,
    //   data: { 
    //     params: { checked: checked }, 
    //   }
    // }); 
    // $.patch({
    //   url: "/complete/" + id,
    //   data: {
    //     params: {check_box: checked}
    //   }
    // });

});



