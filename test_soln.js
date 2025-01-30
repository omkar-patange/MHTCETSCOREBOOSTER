		const section = document.querySelectorAll('.sub .btns');
 		// section[0].classList.add('active');
 		const PC_Data = JSON.parse(localStorage.getItem("PC_Data"));
 		const M_Data = JSON.parse(localStorage.getItem("M_Data"));
 		let sec_1 = section[0].classList.contains('active');
  		let sec_2 = section[1].classList.contains('active');
 			// ****** Main code *******

	const main_tab = document.querySelector('.main_tab');
	const inst_tab = document.querySelector('.instructions');
	const result_tab = document.querySelector('.result_tab');
 	// const section_ = document.querySelectorAll('.sub .btns');
 	const option_list = document.querySelector(".option_list");
 	const quiz_box = document.querySelector('.sub_tab');
 	const next_btn = quiz_box.querySelector(".next_btn");
 	const previous_btn = quiz_box.querySelector(".previous_btn");
 	const T_question = document.querySelector('.T_question');
 	const C_ans = document.querySelector('.C_ans');
 	const W_ans = document.querySelector('.W_ans');
 	const que_no = document.querySelector(".que_nos");
 	const sub_btn = document.getElementsByClassName('sub_btn')[0];
 	const user_score = document.getElementsByClassName('score');
 	const attempted = document.getElementsByClassName('answered')[0];
 	const acurat = document.getElementsByClassName('acurat')[0];
 	const T_Que = document.getElementsByClassName('T_Que')[0];
 	
 	const Que_Img = document.getElementsByClassName("Que_Img")[0];
 	const Result_text = document.getElementsByClassName("Result_text")[0];
 	const ans_tab = document.getElementsByClassName("ans_tab")[0];
 	

 	let que_count = 0;
	let que_numb = 1;
	let que_serial = 0;
	let select;
	let PC = 0;
	let M = 0;
	let que_number = 1;
	let userAns;
	var que_numbers = [];
	let attempt = 0;
	let opt_Selected = 0;
	let xx;
	let opt = [];
	let total_PC, total_M;


 	window.onload = () =>{
 		main_tab.classList.add('activate');
 		showQuestion(0);
 		T_question.innerHTML = questions.length;
 	}

	function showQuestion(index){

		xx = index;
		let Que_img = '<span>'+questions[index].img+'</span>';
		// Que_Img.innerHTML = Que_img;

		let findout = questions[index].img;
		let checking = typeof findout;

		if(checking != "undefined"){
			// console.log("True");
			Que_Img.classList.add('activate');
			Que_Img.innerHTML = Que_img;
			Que_Img.style.display = "block";
		}
		else{
			// console.log("False");
			// Que_Img.classList.remove('activate');
			Que_Img.style.display = "none";
		}

		const que_text = document.querySelector(".que_text");
		let que_tag = '<span>'+ questions[index].question +'</span>';
		let option_tag = '<div class="option"><span>'+questions[index].options[0]+'</span></div>'
		+ '<div class="option"><span>'+questions[index].options[1]+'</span></div>'
		+ '<div class="option"><span>'+questions[index].options[2]+'</span></div>'
		+ '<div class="option"><span>'+questions[index].options[3]+'</span></div>';

		let ans_image = images[index].img;
		let image_type = typeof ans_image;
		// console.log(image_type);
		if(image_type != 'undefined'){
		ans_tab.innerHTML = ans_image;
		ans_tab.style.display = "block";
		}
		else{
		console.log("Image not initialised");
		ans_tab.style.display = "none";
		}
		que_text.innerHTML = que_tag;
		option_list.innerHTML = option_tag;
		MathJax.typeset();
		const option = option_list.querySelectorAll('.option');
		if(sec_1 == true){
		let aa = PC_Data[index];
		var correctAns = questions[index].answer;
		correctAns = correctAns - 1;
		if(aa != null){
			Result_text.innerHTML = "Answered";
			Result_text.classList.remove("false");
			Result_text.classList.add("true");
		if(correctAns == aa){
		option[aa].classList.add("true");
		}
		else{
			option[correctAns].classList.add("true");
			option[aa].classList.add("false");
		}
		}
		else{
		option[correctAns].classList.add("true");
		Result_text.innerHTML = "Not Answered";
		Result_text.classList.remove("true");
		Result_text.classList.add("false");
		}
		}
		else if(sec_2 == true){
			let aa = M_Data[index];
			var correctAns = questions[index].answer;
		correctAns = correctAns - 1;
		if(aa != null){
			Result_text.innerHTML = "Answered";
			Result_text.classList.remove("false");
			Result_text.classList.add("true");
		if(correctAns == aa){
		option[aa].classList.add("true");
		}
		else{
			option[correctAns].classList.add("true");
			option[aa].classList.add("false");
		}
		}
		else{
		option[correctAns].classList.add("true");
		Result_text.innerHTML = "Not Answered";
		Result_text.classList.remove("true");
		Result_text.classList.add("false");
		}
		}
		


		for(let i=0; i < 4; i++){
			option[i].classList.add('disabled');
    			}

    if(que_number < questions.length){
    	for(var i=0; i < questions.length; i++){
    		que_numbers[i] = '<button class="btns col-2">'+que_number+'</button>';
 			que_no.innerHTML += que_numbers[i];
 			que_number++;
    	}
    }

    const que_btn = que_no.querySelectorAll(".btns");
    	for(i=0; i < que_btn.length; i++){
        que_btn[i].setAttribute("onclick", "queSelected(this)");
 		};

 		if(questions[index].numb == 1){
 			previous_btn.style.display = "none";
 		}
 		else{
 			previous_btn.style.display = "block";
 		}

 		let que_serials = questions.length - 1;

 		if(que_serial == que_serials){
 		}
 		else{
 			next_btn.style.display = "block";
 		}
 		
 		if(que_serial != que_serials){
 			next_btn.style.display = "block";
 		}
 		que_serial = index;


	}

	

	function queSelected(answer){
			que_serial = answer.textContent - 1;
      showQuestion(que_serial);
      // ***** Scroll function ****
      		const element = document.getElementsByClassName("d_Que")[0];
			element.scrollTop = 0;
 	}


	next_btn.onclick = () =>{
		que_count = que_serial;
		let i = que_count+1;
		if(que_count < questions.length - 1){
			que_count++;
			que_numb++;
			que_serial++;
		showQuestion(que_count);
		}

		else{
			window.open("m1_soln.html", "_self");
			console.log('Test End');
		}
	}

	previous_btn.onclick = () =>{
		que_count = que_serial;
		if(que_count > 0){
			que_count--;
			que_numb--;
			que_serial--;
		showQuestion(que_count);
		next_btn.style.display = "block";
		sub_btn.style.display = "none";
		}
		else{
			console.log('Test End');
		}

	}

	function queSelected(answer){
			que_serial = answer.textContent - 1;
      showQuestion(que_serial);
 	}

 		section[1].onclick = () =>{
 			window.open("m1_soln.html", "_self");
 	}

 	section[0].onclick = () =>{
 		window.open("pc1_sol.html", "_self");
 	}

// ********* End of Script ***************