	function save(data, filename, type) {
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + '-' + today.getMinutes();
	var dateTime = date+'_'+time;
	var filename = 'northgate_data_'+dateTime+'.json';
    var file = new Blob([JSON.stringify(localStorage)], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
(function load() {
  // Key for local storage, use to save and access.
  var FILE_KEY = 'save.json';

  // fire processUpload when the user uploads a file.
  document.querySelector('#fileUpload').addEventListener('change', handleFileUpload, false);

  // Setup file reading
  var reader = new FileReader();
  reader.onload = handleFileRead;

  function handleFileUpload(event) {
    var file = event.target.files[0];
    reader.readAsText(file); // fires onload when done.
  }

  function handleFileRead(event) {
	localStorage.clear();
    var save,x;
		save = JSON.parse(event.target.result);
	for (x in save) {
	localStorage.setItem(x,save[x]);
	}
	alert('Save Loaded!')
	location.reload();
  }

})();