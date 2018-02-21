//= require rails-ujs
//= require turbolinks
//= require jquery
//= require moment
//= require bootstrap-datetimepicker


$(document).ready(function() {
   $('#datetimepicker1').datetimepicker({
      format: 'YYYY-MM-DD'
   });

   $('#datetimepicker3').datetimepicker({
       format: 'HH:mm'
   });

   $(document).on('click', '.drop-down-btn', function(){
      $(this).parents('tr').nextUntil('.no-hover', 'tr').toggle();
   });

   $(document).on('click', '#new-todo', function(){
      $('#new-todo-form').toggle();
   });
});



