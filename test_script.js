// ****** Main code *******

	const main_tab = document.querySelector('.main_tab');
	const inst_tab = document.querySelector('.instructions');
	const result_tab = document.querySelector('.result_tab');
 	const section_ = document.querySelectorAll('.sub .btns');
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
 	// const not_attempted = document.getElementsByClassName('not_answered')[0];
 	const acurat = document.getElementsByClassName('acurat')[0];
 	const T_Que = document.getElementsByClassName('T_Que')[0];
 	
 	const Que_Img = document.getElementsByClassName("Que_Img")[0];

 	let que_count = 0;
	let que_numb = 1;
	let que_serial = 0;
	let select;
	let PC = 0;
	let M = 0;
	let que_number = 1;
	let userAns;
	let correctAns;
	var que_numbers = [];
	let attempt = 0;
	let opt_Selected = 0;
	let xx;
	let opt_pc = [];
	let opt_m = [];
	let total_PC, total_M;

 	window.onload = () =>{
 		main_tab.classList.add('activate');
 		showQuestion(0);
 		timer();
 		T_question.innerHTML = questions.length;
 	}

	function showQuestion(index){
		xx = index;
		let Que_img = '<span>'+questions[index].img+'</span>';
		// Que_Img.innerHTML = Que_img;

		let findout = questions[index].img;
		let checking = typeof findout;
		console.log(checking);

		if(checking != "undefined"){
			console.log("True");
			Que_Img.classList.add('activate');
			Que_Img.innerHTML = Que_img;
			Que_Img.style.display = "block";
		}
		else{
			console.log("False");
			// Que_Img.classList.remove('activate');
			Que_Img.style.display = "none";
		}

		const que_text = document.querySelector(".que_text");
		let que_tag = '<span>'+ questions[index].question +'</span>';
		let option_tag = '<div class="option"><span>'+questions[index].options[0]+'</span></div>'
		+ '<div class="option"><span>'+questions[index].options[1]+'</span></div>'
		+ '<div class="option"><span>'+questions[index].options[2]+'</span></div>'
		+ '<div class="option"><span>'+questions[index].options[3]+'</span></div>';
		que_text.innerHTML = que_tag;
		option_list.innerHTML = option_tag;
		MathJax.typeset();
		const option = option_list.querySelectorAll('.option');
		
		for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    };

    if(que_number < questions.length){
    	for(var i=0; i < questions.length; i++){
    		que_numbers[i] = '<button class="btns col-2"><a href="#">'+que_number+'</a></button>';
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
			sub_btn.style.display = "block";
 		}
 		else{
 			next_btn.style.display = "block";
			sub_btn.style.display = "none";
 		}
 		
 		if(que_serial != que_serials){
 			next_btn.style.display = "block";
			sub_btn.style.display = "none";
 		}

 		que_attempted(xx);
 		que_serial = index;
	}

	

	function que_attempted(j){
		const option = option_list.querySelectorAll('.option');
		const que_btn = que_no.querySelectorAll(".btns");
		let sec_1 = section_[0].classList.contains('active');
  		let sec_2 = section_[1].classList.contains('active');
			if(sec_1 == true){
				let visited = que_btn[j].classList.contains('btn-success');
			let allOptions = option_list.children.length;
			let aa = opt_pc[j];
			if(visited == true){
				console.log("Selected");
				option[aa].classList.add("select");
				for(let i=0; i < allOptions; i++){
				option[i].classList.add('disabled');
    		}
			}
			else{
				// console.log("Not Selected");
			}
			}
			else if(sec_2 == true){
				let visited = que_btn[j].classList.contains('btn-success');
			let allOptions = option_list.children.length;
			let aa = opt_m[j];
			if(visited == true){
				console.log("Selected");
				option[aa].classList.add("select");
				for(let i=0; i < allOptions; i++){
				option[i].classList.add('disabled');
    		}
			}
			else{
				// console.log("Not Selected");
			}
			}
	}

	function optionSelected(answer){

		const option = option_list.querySelectorAll('.option');
		let sec_1 = section_[0].classList.contains('active');
  		let sec_2 = section_[1].classList.contains('active');
		if(sec_1 == true){
			select = answer;
		que_count = que_serial;
		correctAns = questions[que_count].answer - 1;
		userAns = Array.from(answer.parentElement.children).indexOf(answer);
		// console.log(userAns, correctAns);
		let allOptions = option_list.children.length;
		answer.classList.add('select');
		for(i=0; i < option.length; i++){
        x = option[i].classList.contains("select");
        if(x == true){
        	opt_pc[xx] = i;
        }
    }
	}
        else if(sec_2 == true){
        	select = answer;
		que_count = que_serial;
		correctAns = questions[que_count].answer - 1;
		userAns = Array.from(answer.parentElement.children).indexOf(answer);
		// console.log(userAns, correctAns);
		let allOptions = option_list.children.length;
		answer.classList.add('select');
		for(i=0; i < option.length; i++){
        x = option[i].classList.contains("select");
        if(x == true){
        	opt_m[xx] = i;
        }
        }
		}
    
		let allOptions = option_list.children.length;
		for(let i=0; i < allOptions; i++){
		option_list.children[i].classList.add('disabled');
    	}
    if(userAns == correctAns){
	    	
    	if(sec_1==true){
    	PC++;
    	console.log("Correct");
    }
    else if(sec_2==true){
    	M ++;
    	console.log("Correct");
    }
    }
    else{
    	console.log("Wrong");
    }
    opt_Selected = 1;
	};

	function queSelected(answer){
		
			que_serial = answer.textContent - 1;
			console.log(que_serial);
			showQuestion(que_serial);
      		que_attempted(xx);

      	// ***** Scroll function ****
      		const element = document.getElementsByClassName("d_Que")[0];
			element.scrollTop = 0;

 	}
	

	function clear_response(){
		let sec_1 = section_[0].classList.contains('active');
  		let sec_2 = section_[1].classList.contains('active');
		let total = PC+M;
		const que_btn = que_no.querySelectorAll(".btns");
		let allOptions = option_list.children.length;
		if(sec_1 == true){
			select.classList.remove('select');
		for(let i=0; i < allOptions; i++){
			option_list.children[i].classList.remove('disabled');
			option_list.children[i].classList.remove('select');
			opt_pc[xx] = null;
			que_btn[xx].classList.add("btn-danger");
			que_btn[xx].classList.add("text-white");
		}
		}
		else if( sec_2 == true){
			select.classList.remove('select');
		for(let i=0; i < allOptions; i++){
			option_list.children[i].classList.remove('disabled');
			option_list.children[i].classList.remove('select');
			opt_m[xx] = null;
			que_btn[xx].classList.add("btn-danger");
			que_btn[xx].classList.add("text-white");
		}
		}


		if((userAns == correctAns) && (total != 0)){
    if(sec_1==true){
    	PC--;
    }
    else if(sec_2==true){
    	M --;
    }
    console.log("Data Erased");
    }

    opt_Selected = 0;
    if(attempt != 0){
    	attempt--;
    }
	}

	next_btn.onclick = () =>{
		que_count = que_serial;
		let i = que_count+1;
		if(que_count < questions.length - 1){
			que_count++;
			que_numb++;
			que_serial++;
		showQuestion(que_count);
		check_que(que_count);
		}

		else if(i == questions.length){
			check_que(i);
		}
		else{
			console.log('Test End');
		}
		// let que_serials = questions.length - 1;
		// if(que_serial == que_serials){
		// 	sub_btn.style.display = "block";
 	// 	}
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

		check_que(que_count+2);
	}

	sub_btn.onclick = () => {
		let sec_1 = section_[0].classList.contains('active');
  		let sec_2 = section_[1].classList.contains('active');
  	if(sec_1 == true){
  		let Que_PC = questions.length;
  		// total_PC.innerHTML = PC;
  		localStorage.setItem("PC", PC);
  		localStorage.setItem("Attempt_PC", attempt);
  		localStorage.setItem("Que_PC", Que_PC);
  		window.open("m1.html", "_self");
  		localStorage.setItem('PC_Data', JSON.stringify(opt_pc));
  		sec_1 = false;
  		sec_2 = true;
  	}
  	else if(sec_2 == true){
  		showResult();
  		localStorage.setItem('M_Data', JSON.stringify(opt_m));

  	}
	}

	function timer(){
		let sec_1 = section_[0].classList.contains('active');
  		let sec_2 = section_[1].classList.contains('active');
		const startingMinutes = 90;
		let time = startingMinutes * 60;
		const coutdownEl = document.getElementById('countdown');

		const timer = setInterval(updateCountdown, 1000);

		function updateCountdown(){
			let minutes = Math.floor(time / 60);
			let seconds = time % 60;
			if(seconds < 10){
				seconds = "0"+seconds;
			}
			coutdownEl.innerHTML = minutes+":"+seconds;
			time--;

			if(sec_1 == true){
				if(time/100 < 20){
					section[1].classList.remove('disable');
				}
				else{
					section[1].classList.add('disable');
				}
			}
			if(sec_2 == true){
				section[1].classList.add('disable');
			}

			if(time/100 < 0){
			clearInterval(timer);
			if(sec_1 == true){
				window.open("m1.html", "_self");
			}
			else{
			showResult();
		}
	}

		}

	}

	function check_que(value){

		const que_btn = que_no.querySelectorAll(".btns");
		let j = value - 1;
		let visited = que_btn[j].classList.contains('btn-success');
 		if(opt_Selected != 0){
			attempt++;
			opt_Selected = 0;
			que_btn[j].classList.add("btn-success");
			que_btn[j].classList.remove("btn-danger");
			que_btn[j].classList.add("text-white");
		}

		else if(visited == false){
			que_btn[j].classList.add("btn-danger");
			que_btn[j].classList.add("text-white");
	}

	}

	function showResult(){
  	const total_PC = localStorage.getItem("PC");
  	const Attempt_PC = localStorage.getItem("Attempt_PC");
  	const Que_PC = localStorage.getItem("Que_PC");
  	var a,b,c;
  	a = parseInt(total_PC);
  	b = parseInt(Attempt_PC);
  	c = parseInt(Que_PC);
  	let Que_M = questions.length;
  	total_M = M;
		let total = a + total_M;
		let total_attempt = b + attempt;
		let unattempt = total_attempt - total;
		let accuracy = total / total_attempt;
		let total_que = c + Que_M;
		
		attempted.innerHTML = total_attempt;
		C_ans.innerHTML = total;
		W_ans.innerHTML = unattempt;
		T_Que.innerHTML = total_que;
		accuracy = accuracy * 100;
		accuracy = accuracy.toFixed(2);
		acurat.innerHTML = accuracy+"%";
		// not_attempted.innerHTML = total_que - total_attempt;
		main_tab.style.display = "none";
		total_M = total_M * 2;
		total = a + total_M;
		Que_M = Que_M * 2;
		total_que = c + Que_M;
		user_score[0].innerHTML = total+"/"+total_que;
		result_tab.style.display = "block";
		localStorage.removeItem(PC);
  		localStorage.removeItem(Attempt_PC);
  		localStorage.removeItem(Que_PC);
	}


	function reload(){
		window.open("pc1_sol.html", "_self");
	}

 		section[1].onclick = () =>{
 			window.open("m1.html", "_self");
 			// var lock = '<i class="fa-solid fa-lock"></i>';
 			// section[0].innerHTML = lock;
 	}

 	// section[0].onclick = () =>{
 	// 	window.open("pc1.html", "_self");
 	// }


// ********* End of Script ***************