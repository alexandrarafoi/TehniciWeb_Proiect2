document.getElementById("buton").addEventListener('click',function(){
window.location.href="start.html";
});

document.getElementById("submit").addEventListener('click',function(){


	
	var nume=document.getElementById("text1").value;
	var prenume= document.getElementById("text2").value;
	var email= document.getElementById("text3").value;
	console.log(nume,prenume,email);
	
	var flag=0;
		if(/^[a-zA-Z]+$/.test(nume))
			if(/^[a-zA-Z]+$/.test(prenume)){
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if( re.test(email))
				{
				if( document.getElementById("check").checked){
				alert("Inregistrare cu succes! Multumim!");
				document.getElementById("text1").value="";
				document.getElementById("text2").value="";
				document.getElementById("text3").value="";
				document.getElementById("check").checked=false;
				flag=1;}
				else
				{alert("Toate campurile sunt obligatorii!");}
				}
				else
				{alert("Email invalid!");
				document.getElementById("text3").value="";
				}
				}
			else
			{alert("Prenume invalid!");
			document.getElementById("text2").value="";
			}
		else
		{alert("Nume invalid!");
		document.getElementById("text1").value="";
		}
	
	if(flag)
	{
	var mesaj = document.createElement('div');
	mesaj.id="mesaj";
	mesaj.innerHTML = '<p></p>';
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("mesaj").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "demo.asp", true);
  xhttp.send();
	
	}


});
