window.addEventListener("load", function(){
	var submit_btn = document.getElementsByClassName("submit");	 
	var next = document.getElementsByClassName("nextQ");
	var questions = document.getElementsByClassName("question");


	for(i=0; i<next.length; i++){
		next[i].addEventListener("click", function(form){
			form.preventDefault();
			var id = this.getAttribute("id");
			questions[id-1].style.display = "none";
			questions[id].style.display = "inline";

		});
	}

	submit_btn[0].addEventListener("click", function(form){
		form.preventDefault();
		questions[2].style.display = "none";

		var get_responses = document.getElementsByClassName("response");
		

		check = new XMLHttpRequest();

		check.addEventListener("load", function(correctness){
			var results = document.getElementsByClassName("result");
			var r = correctness.target.response;
			var user_results = JSON.parse(r);

	

			results[0].innerHTML = "1. " + user_results.r1;
			results[1].innerHTML = "2. " + user_results.r2;
			results[2].innerHTML = "3. " + user_results.r3;


		});


		check.open("get", "/server?string=" + get_responses[0].value + "," + get_responses[1].value + "," + get_responses[2].value);
		check.send();
	});


});