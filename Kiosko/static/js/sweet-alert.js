swal({
  title: 'Are you sure?',
  text: 'You will not be able to recover this imaginary file!',
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it'
}).then(function() {
  swal(
    'Deleted!',
    'Your imaginary file has been deleted.',
    'success'
  )
}, function(dismiss) {
  // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
  if (dismiss === 'cancel') {
    swal(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})