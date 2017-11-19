jQuery(document).ready(function($) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			var array = JSON.parse(xhr.responseText);
			// console.log(typeof(array));
			var genHTML = "";
			for (var i = 0; i < array.length; i++) {
				var office;
				if (array[i].inoffice) {
					office = "in";
				} else {
					office = "out";
				}
				genHTML += "<div class='workers " + office + "'>" + "<p class='available'>" + office + "</p><p>" + array[i].name + "</p></div>";
			}
			console.log(genHTML);
			$('#employeeList').html(genHTML);
		}
	}

	xhr.open('GET', '../data/employees.json');
	xhr.send();

	
});