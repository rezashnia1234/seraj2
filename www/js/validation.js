


 function validation()
 {

		var name=document.enq.name.value;

		if(name=='')
		{
			alert("پر کردن نام اجباریست");
			return false;
		}
	

		
		var rayanama=document.enq.rayanama.value;

		if(rayanama=='')
		{
			alert("پرکردن رایانامه اجباریست");

			return false;
		}

		
		var number=document.enq.tell.value;

		if(number=='')
		{
			alert("پر کردن تلفن همراه اجباریست");

			return false;
		}else{
			$.ajax({
				type: 'POST',
				url: 'http://app.sobhane.ir/news/register.php', 
				data: $("form").serialize()
			})
			.done(function(data){
				if(data == "tekrary"){
					alert("تکراری است")
				}else if(data == "done"){
					alert("با موفقیت ثبت شد")
				}
			})
				.fail(function() {
				alert("خطا در ارسال");             
			});				  
			// to prevent refreshing the whole page page  
			return false;
		}

		


	
  return true;
 }
