//jQuery option 1
$('#fieldToRemove').prop('required',false);

//jQuery option 2
$('#fieldToRemove').removeAttr('required');

//with querySelector
document.querySelector('#fieldToRemove').required = false;