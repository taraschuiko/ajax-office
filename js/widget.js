var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		document.getElementById('employeeList').innerHTML = xhr.responseText;
	}
}

xhr.open('GET', '../data/employees.json');
xhr.send();