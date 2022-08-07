function js(){//порядок приоритета выполнения



menutransorm();
saveform();
if(document.getElementById("main")){
color();

more();
up();
stick();
focus();
auto();
filtrreset();
test();
}
if(document.getElementById("regso")){
	searchcity();
	clicksearch();
	resettext("regso");
		
	
}
if(document.getElementById("entry")){
	resettext("entry");
		
	
}
if(document.getElementById("regra")){
	resettext("regra");
		
	
}
if(document.getElementById("personalso")){
	color();
	reduct("personalso");
}
if(document.getElementById("personalra")){
	reduct("personalra");
}
if(document.getElementById("create")){
	workforms();
}


}


function workforms(){
	let hide1=document.getElementById("hide1");
	let text1=hide1.querySelector("input");
	let hide2=document.getElementById("hide2");
	let texts2=hide2.querySelectorAll("input");
	let hide3=document.getElementById("hide3");
	let text3=hide3.querySelector("input");

	
	let event= new Event("input");
	

	document.querySelectorAll('input[type="checkbox"]').forEach(function(e){
		if(e.name=="salaryflag"){
			e.addEventListener("click", function(){//на клик
				if(e.checked){
					hide1.className=hide1.className.replace("magic2", "none");
					 text1.value="";
					text1.dispatchEvent(event);
				}else{
					hide1.className=hide1.className.replace("none","magic2");
				}
				})
				if(e.checked){//на загрузку
					hide1.className=hide1.className.replace("magic2", "none");
				    text1.value="";
					text1.dispatchEvent(event);
					
				}
				
				
				
			
		}else{
			e.addEventListener("click", function(){//на клик
				if(e.checked){
					hide2.className=hide2.className.replace("magic2", "none");
					hide3.classList.add("none");
					texts2[0].value="";
					texts2[0].dispatchEvent(event);
					texts2[1].value="";
					texts2[1].dispatchEvent(event);
					text3.value="";
					text3.dispatchEvent(event);
				
				}else{
					hide2.className=hide2.className.replace("none","magic2");
					hide3.classList.remove("none");
				}
			})
			if(e.checked){//на загрузку
					hide2.className=hide2.className.replace("magic2", "none");
					hide3.classList.add("none");
						texts2[0].value="";
					texts2[0].dispatchEvent(event);
					texts2[1].value="";
					texts2[1].dispatchEvent(event);
					text3.value="";
					text3.dispatchEvent(event);
				
				}
				
			}
			
		})
	
		
	}
	
	


function reduct(id){
	let all=document.getElementsByName("reduction");
	let form=document.getElementById(id);
    let href=document.getElementById("reducthref");
	let event0= new Event("click");
	let event1= new Event("input");
	
	
	let none;
	let cont;


	
	
	
	href.onclick=()=>{
		document.querySelectorAll("button, input").forEach( function(e){
			if(e.matches("button")){
			if(e.textContent=="скрыть"){
				e.dispatchEvent(event0);
			}}
			if(e.matches("input")){
					form.reset();
		if(e.type=="text"||e.type=="tel"||e.type=="email"||e.type=="date"||e.type=="password"){
			e.dispatchEvent(event1);//триггер для сессии	
		}
			}
		})
		
	}
	all.forEach( function(e){
		let button=e.querySelector("button");
		button.onclick = (i) =>{
			
		let text=button.textContent;
	     
		if(text=="изменить"){
			window.sessionStorage.setItem(button.name, "скрыть")
			}else{
			window.sessionStorage.setItem(button.name, "изменить")	
			}
			
	   
		 if(text=="изменить"){
			 button.textContent="скрыть";
		     button.style.color="#770000";
			 none=e.querySelectorAll("div")[1];
			 none.classList.remove("none");
		}else{
			button.textContent="изменить";
		     button.style.color="red";
			 none=e.querySelectorAll("div")[1];
			 none.classList.add("none");
		}
		}
		
	})
		document.querySelectorAll("button.confirm").forEach( function(e){

		
		cont=window.sessionStorage.getItem(e.name);
		
		if(cont=="изменить"||cont=="скрыть"){
			
			if(cont=="скрыть"){
				e.dispatchEvent(event0);
				
			}
		  }
			
		
		
			
	})
	
	
}
function resettext(id){
	let event= new Event("input");
	let button=document.getElementById("res");
	let form=document.getElementById(id);
	button.addEventListener('click', function(){
		
	   
			document.querySelectorAll('input').forEach(function(e){
				form.reset();
		if(e.type=="text"||e.type=="tel"||e.type=="email"||e.type=="date"||e.type=="password"){
			e.dispatchEvent(event);//триггер для сессии	
		}
			})
	
})
}
function clicksearch(){
	let event= new Event("click");
	let button=document.getElementById('se');
    let field=document.getElementById('searchcity').value;
	if(field!=""){
		button.dispatchEvent(event);
	}
	
}
function searchcity(){
	let se=document.getElementsByClassName("se")[0];
	let cl=document.getElementsByClassName("cl")[0];
	let list=document.getElementById("list");
	let search=document.getElementsByClassName("cis")[0];
	let message=document.getElementById("nocity");
	let str;
	let first;
	
	se.addEventListener('mousedown', function(e){
		
		e.preventDefault();
	})
	se.addEventListener('click', function(e){
		first=0;
		list.querySelectorAll('div').forEach( function(e){  
		e.classList.add("none");	
		
		
		})
		message.classList.add("none");
		
		
		
		
		list.querySelectorAll('div').forEach( function(e){
        str=e.getElementsByClassName('radio')[0].value.toLowerCase();			
		if(str.indexOf(search.value.toLowerCase())!=-1){
		if(first==0){
			e.getElementsByClassName('radio')[0].checked=true;
			first++;
		}   
		e.classList.remove("none");	
		}
		
		})
				
		if(first==0){
			message.classList.remove("none");
		}
	})
	cl.addEventListener('mousedown', function(e){
		
		e.preventDefault();

		
	})
	cl.addEventListener('click', function(){
		
	   
		search.value="";
		list.querySelectorAll('div').forEach( function(e){
		       
		e.classList.add("none");	})
		message.classList.add("none");
	   
	
		
		
	})
}

function auto(){//надо начать использовать ajax


if(!window.location.search||window.location.search=="?page=index"){
	
document.getElementById("search").click();//а сабмит формы не робит
}
		

}
function test(){
	let button=document.getElementsByClassName("test")[0];
	let block=document.getElementById("shortform");
	//onload 
	button.textContent="longfiltr";
	block.style="none";
	button.addEventListener('click', function(){
		if(button.textContent=="longfiltr"){
			button.textContent="shortfiltr";
			block.style.display="none";
		}else{
			button.textContent="longfiltr";
	        block.style="none";
		}
	})
	
	
}

function menutransorm(){
	let button=document.getElementsByClassName("btm")[0];
	let a=document.querySelectorAll('a.menua, a.blockmenua');
	let event=new Event("resize");
	let flag=0;
	let flag1=0;//триггер на уход с растянутой 
	a.forEach(function(e){
	if(window.innerWidth>1100){//на загрузку
		
		e.style="none";
		
		flag=1;
		flag1=1;
	}})
	window.addEventListener('resize', event =>{
			a.forEach(function(e){
	if(window.innerWidth>1100){
		
		
		e.style="none";
		flag1=1;
	
	}
	else{
		if(flag==0||flag1==1){
		e.style.display="none";
		}
	}})
		
	}, false);

    button.onclick=function(){
		if(flag1==1){flag=0}
	        
			a.forEach(function(e){
				if(flag==0){
				e.style="none";
				}else{
					e.style.display="none";
				}
			})
	    flag1=0;
		if(flag==0){
			flag=1;
		}else{
			flag=0;
		}
		
		window.dispatchEvent(event);

		
	}

	
}




function focus(){
	let bts=document.getElementsByClassName("bts")[0];
	let rts=document.getElementsByClassName("rts")[0];
	let search=document.getElementById("searchtext");
	let event= new Event("input");
	bts.addEventListener('mousedown', function(e){
		
		e.preventDefault();
	})
	rts.addEventListener('mousedown', function(e){
		
		e.preventDefault();

		
	})
	rts.addEventListener('click', function(){
		
	   
		search.value="";
	    search.dispatchEvent(event);//триггер для сессии
	
		
		
	})
	
}
function filtrreset(){
	let reset=document.getElementById("reset0");
	let form=document.getElementById("searchform");
    let name=[];
	let event0= new Event("input");
	let event1= new Event("click");
	let text="";
	let search=document.getElementById("searchtext");
	reset.addEventListener('click', function(){
		
	   
		text=search.value;
		form.reset();// не работает для чекбоксов и радио (вообще не работает) 
		search.value=text;
			document.querySelectorAll('input[type="text"]').forEach(function(e){
		
			e.dispatchEvent(event0);//триггер для сессии	
			})
			
			document.querySelectorAll('input.check').forEach(function(e){
			e.checked=false;
            e.dispatchEvent(event1);//триггер для сессии			
			})
				document.querySelectorAll('input.radio').forEach(function(e){//имена всех батонов и часть алгоритма сохранения
		        if(name.indexOf(e.name)==-1){
				name.push(e.name);	
				}	
				})
				
					name.forEach(function(e){
			let radios=document.getElementsByName(e);
			radios[0].checked="true";
			  radios[0].dispatchEvent(event1);//триггер для сессии	
			
		})
			
	    
	
		
		
	})
}

function color(){
	let forms=document.getElementsByClassName("form");
	let lines=document.querySelectorAll('div.form hr');
	 for(var i=0;i<forms.length; i++){
		 let form=forms[i];
		 let line=lines[i];
		 form.onmouseover = (e) => {
         form.className=form.className.replace("fform","sform");
		 line.setAttribute("color", "#EE82EE");
		
         }
		form.onmouseout = (e) => {
        form.className=form.className.replace("sform","fform");
		 form.className=form.className.replace("tform","fform");
		 line.setAttribute("color", "red");
        }
        form.onclick = (e) =>{
			
		  form.className=form.className.replace("sform","tform");
		  form.className=form.className.replace("fform","tform");
		 line.setAttribute("color", "magenta");
			
		}
		 
	 }
	
	
}
function more(){
	let list=document.getElementById("none");
	let buttons=document.getElementsByClassName("moretown");
	let button=buttons[0];
	let block=document.getElementById("block");
	let change;
	
           
			list.querySelectorAll('div').forEach( function(e){ //для загрузки
	
			     if(e.getElementsByClassName('check')[0].checked){
				e.classList.remove("none");	
				}else{
				e.classList.add("none");		
				}
		 })
	 
	button.onclick = (e) =>{
		let text=button.textContent;
	   
		 if(text=="Ещё"){
			 button.textContent="Скрыть";
			 button.style.color="#770000";
		
			  list.querySelectorAll('div').forEach( function(e){ //для нажатия
		
				e.classList.remove("none");	
				
				 
		 })
		 }else{
			 button.textContent="Ещё";
				  list.querySelectorAll('div').forEach( function(e){ //для нажатия
			     if(e.getElementsByClassName('check')[0].checked){
				e.classList.remove("none");	
				}else{
				e.classList.add("none");		
				}
		 })
			 button.style.color="#DC143C"
		 }
		 
		
		 
		 
	 }

	 
	
	
}
function saveform(){
	
        let name=[];
		
		document.querySelectorAll('input').forEach(function(e){
		if(e.type=="text"||e.type=="tel"||e.type=="email"||e.type=="date"){
			if(e.value===''&&e.id!='user_page'){//костыль
				e.value=window.sessionStorage.getItem(e.name);
				
			}
			
			e.addEventListener('input', function(){
				window.sessionStorage.setItem(e.name, e.value);
			})
		}
			
		
		if(e.type=="checkbox"){
			if(window.sessionStorage.getItem(e.id)=="true"){
			
				e.setAttribute("checked","checked");
			}
			e.addEventListener("click", function(){
				if(e.checked){
					window.sessionStorage.setItem(e.id, "true");
				}else{
					window.sessionStorage.setItem(e.id, "false");
				}
			})
		}
		})
		document.querySelectorAll('input.radio').forEach(function(e){//имена всех батонов и часть алгоритма сохранения
		
		if(window.sessionStorage.getItem(e.name)==e.id){
			
				e.setAttribute("checked","checked");
			}
		if(name.indexOf(e.name)==-1){
		name.push(e.name);	
		}	
		})
		
		name.forEach(function(e){
			let radios=document.getElementsByName(e);
			radios.forEach(function(i){
            i.onclick=function(){ //если клик на батон произошел
				window.sessionStorage.setItem(e, i.id)
				}//сохранение айди  варика под этим именем выбора
				
			})
			
		})
	
		
		
	
	
	
}
function up(){
	let past=0;
	let button=document.getElementsByClassName("up")[0];
	let cont=document.getElementsByClassName("fakesearch")[0];
	 button.style.visibility="hidden";
	document.addEventListener('scroll', function(){
	let top=cont.getBoundingClientRect().top;
	let now=document.body.scrollTop||(document.documentElement&&document.documentElement.scrollTop);//не спрашивайте. это реально дичь с лисой
	
	if(now <= past&&top<=0){
     button.style.visibility="visible";
	}else{
	button.style.visibility="hidden";}	
	past=now;
	});
		button.onclick = (e) =>{
			window.scrollTo(0,0);
		}
}


function stick(){
	let block=document.getElementById("block");
	let master=document.getElementById("master");
	let footer=document.getElementById("pagenavigator");
	let past=0;
    flag=0;
	
	let topEdge=block.getBoundingClientRect().top+pageYOffset;
	 let downEdge=footer.getBoundingClientRect().top+pageYOffset-10;
     let size=document.getElementById("size");
	let fake=document.getElementById("fake");
	
    window.addEventListener('resize', event =>{
		downEdge=footer.getBoundingClientRect().top+pageYOffset-10;
		 topEdge=master.getBoundingClientRect().bottom+pageYOffset+15;
		 past=0;
         flag=0;
		 fake.style=none;
		if(block.getBoundingClientRect().bottom+pageYOffset>downEdge){ //граничный нижний блок
				  block.style.bottom=0;
				 
		}
		
	});
	let debug=document.getElementsByClassName("debug")[0];
	document.addEventListener('scroll', function(){
       
		let temp;
		let downLine=block.getBoundingClientRect().bottom;
		let topLine=block.getBoundingClientRect().top;

		
		let now=document.body.scrollTop||(document.documentElement&&document.documentElement.scrollTop);//не спрашивайте. это реально дичь с лисой
		let height=block.offsetHeight;
     
		if(height<size.scrollHeight){

		if (height>=window.innerHeight){
		if(now > past){
			//поведение поиска вниз
			//if(flag==1){//если прокручивали вверх
				//fake.style.top=fake.getBoundingClientRect().top+pageYOffset+"px";
				fake.style.top=(block.getBoundingClientRect().top+pageYOffset-115)+"px"; //неподвижность при смене направления за счет нподвижности фильтров
				fake.style.position="absolute";
				if(fake.getBoundingClientRect().top+fake.offsetHeight<0){
					fake.style=none;
				fake.style.position="absolute";
				}
			//}
			
			
			
		  if(((downLine) < window.innerHeight)||topLine>0){ //первый если
			
		    if((downLine)+8 < window.innerHeight){//вниз появилась нижняя граница. 8, тк при 10 (оно нужно для плавного перехода bottom) при ресайзе окна возникают
			//такие значениe, которые входя в первый если и отсекают второй
			
			block.style=null;
			block.className="form1 form11";
		
			if(block.getBoundingClientRect().bottom+pageYOffset>downEdge){ //граничный нижний блок
				  block.style.bottom=0;
                 
				  block.className="form1 form12";
					//чтобы поиск не застрял
					fake.style.top=(block.getBoundingClientRect().top+pageYOffset-115)+"px"; //неподвижность при смене направления за счет нподвижности фильтров
				fake.style.position="absolute";
			  }
			 
		    }
		    if(topLine>0){//вниз появилась верхняя граница
		  
		   
			block.style.top=((topLine)-topEdge+pageYOffset)+"px";
			
			block.className="form1 form10";	
			
				if(block.getBoundingClientRect().bottom+pageYOffset>downEdge){ //граничный нижний блок
				block.style.top="auto";
				  block.className="form1 form12";
					//чтобы поиск не застрял
					fake.style.top=(block.getBoundingClientRect().top+pageYOffset-115)+"px"; //неподвижность при смене направления за счет нподвижности фильтров
					fake.style.position="absolute";					
			  }
		    }
		  }
		}else{
			
			if(fake.getBoundingClientRect().top<0){//поведение поиска вверх
			fake.style.position="absolute";
			fake.style.top=(block.getBoundingClientRect().top+pageYOffset-115)+"px"; //неподвижность при смене направления за счет нподвижности фильтров
			flag=1;
			}else{
			fake.style.position="fixed";
            fake.style.top=0;
				flag=1;
			}
			if(fake.getBoundingClientRect().top<=master.getBoundingClientRect().top&&flag==1){
				fake.style=none;
				fake.style.position="absolute";
			}

		  if(((downLine) < window.innerHeight)||topLine>0){
			  if((downLine) < window.innerHeight){//вверх появилась нижняя граница

			  block.style.top=(topLine-topEdge+pageYOffset)+"px";
			 
			  block.className=block.className.replace("form11","form12");
			   if(block.getBoundingClientRect().top+pageYOffset<=topEdge){
				  block.style.top=0;
			
				   block.className=block.className.replace("form12","form10"); 
				   
				    
			  }
		
			
			  
		
			  
			  
              			  
		      }
		
		      if(topLine>=115){//вверх появилась верхняя граница
			   
			   block.style.top=105+"px"; //10px???
			  
			  block.className="form1 form13";
			 
			  if(block.getBoundingClientRect().top+pageYOffset<=topEdge){ //граничный верхний блок
				  block.style.top=0;
				  block.className="form1 form10"; 
			  }
		      }
			  
		  }else{
			  block.style.top=(topLine-topEdge+pageYOffset)+"px";
			
		  }
		}
		past=now;
		
	    }else{//пора всё ломать. блок помещается на экран
		//если с поиском то вниз всё ок, а если с поиском вверх, то возможна ситуация,когда
		//фильтры могут быть околоэкранного размера, что вместе с поиском выдвинит их за экран
			//block.className=block.className.replace("form10","form14");	
			if(now > past){
				//вниз
			//debug.textContent=block.getBoundingClientRect().top+"";//как ты без скобок запустился
			if(block.getBoundingClientRect().top-15<0){//крутим вниз,граница фильтров приближается к началу экрана
			block.className=block.className.replace("form10","form13"); 	
			}
			if(block.getBoundingClientRect().bottom+pageYOffset>downEdge){//крутим вниз,доходим до нижней границы
			block.style.top="auto"
			block.style.bottom=0;
			block.className=block.className.replace("form13","form12"); 	
			}
				
			}else{
				//вверх
				//debug.textContent=block.getBoundingClientRect().top+pageYOffset+" "+topEdge;
				  if(topLine>=15){//вверх появилась верхняя граница
			   
			   block.style.top=5+"px"; //10px???
			  
			  block.className="form1 form13";
			 
		      }
			   if(block.getBoundingClientRect().top+pageYOffset<=topEdge){ //граничный верхний блок
				  block.style.top=0;
				  block.className="form1 form10";
			  }
				
			}
			past=now;
		}
		}
		
	});
	
	
}