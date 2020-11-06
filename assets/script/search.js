var searchbar = document.getElementById('searchbar')
var dropdown = document.getElementsByClassName('dropdown')[0];
searchbar.onfocus = function() {
  document.getElementById("myDropdown").style.display = "block";
}
window.addEventListener('click', function(e){
	if (!dropdown.contains(e.target)){
  	document.getElementById("myDropdown").style.display = "none";
  }
})
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}