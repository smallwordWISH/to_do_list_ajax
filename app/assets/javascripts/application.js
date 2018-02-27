//= require rails-ujs
//= require turbolinks
//= require jquery
//= require moment
//= require bootstrap-datetimepicker


$(document).on('turbolinks:load',function() {
   
   $('#datetimepicker1').datetimepicker({
         format: 'YYYY-MM-DD'
   });

   $('#datetimepicker3').datetimepicker({
      format: 'HH:mm'
   });

   $('#new-todo-form').on('click', '#calender-btn', function(){
      $('#datetimepicker1').datetimepicker({
         format: 'YYYY-MM-DD'
      });
   });
      
   $('#new-todo-form').on('click', '#time-btn', function(){
      $('#datetimepicker3').datetimepicker({
         format: 'HH:mm'
      });
   });

   $(document).on('click', '.drop-down-btn', function(){
      $(this).parents('tr').nextUntil('.no-hover', 'tr').toggle();
   });

   $(document).on('click', '#new-todo', function(){
      $('#new-todo-form').toggle();
   });
});



