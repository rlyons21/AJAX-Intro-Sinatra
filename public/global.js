window.addEventListener("load", function(){
	var submit_btn = document.getElementsByClassName("submit");	 


	submit_btn[0].addEventListener("click", function(form){
		form.preventDefault();
		var get_responses = document.getElementsByClassName("response");
		var results = document.getElementsByClassName("result");
		
		

		check = new XMLHttpRequest();

		check.addEventListener("load", function(correctness){
			var r1 = correctness.target.responseText;

			results[0].innerHTML = "1. " + r1;

		});

		check.open("get", "/server?" + get_responses[0].value);
		check.send();
	});


});