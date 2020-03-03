function determinant(){
	var S = document.getElementById('inner').value;
	var st = document.getElementById('inner');
	var answer = document.getElementById('answer');
	answer.innerHTML = '';
	st.style.background = "";
	if (S === "Глеб") {
		answer.innerHTML = 'имя';
	} else {
		if (S === "Веселов") {
			answer.innerHTML = 'фамилия';
		} else {
			if (S === "Евгеньевич") {
				answer.innerHTML = 'отчество';
			} else {
				st.style.background = "red";
			}
		}
	}
}