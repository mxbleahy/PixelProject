$(document).ready(function() {
  $('#sizePicker').submit(function makeGrid(grid) { // The makeGrid function allow user to enter numbers of rows, column to create a table.
      $('table tr').remove(); // this code rest the table and make it white as a new table.
      var rowsInput = document.getElementById('rowsInput').value;
      var columnInput = document.getElementById('columnInput').value;
      for (var r = 1; r <= rowsInput; r++) { // This loop for draw rows.
          $('table').append("<tr></tr>");
          for (var c = 1; c <= columnInput; c++) { // This loop for draw columns.
              $('tr:last').append("<td></td>");
              $('td').attr("class", 'cells')
          }
      }
      grid.preventDefault(); // To make the table always visible.
      $('.cells').click(function(event) { // This function allow user to fill the cells colors.
          var color = $('#colorPicker').val();
          $(event.target).css('background-color', color);
      });
  });
});