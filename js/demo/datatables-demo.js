// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "lengthMenu": [ 12, 24, 48, 96, 192 ]
  });
});
