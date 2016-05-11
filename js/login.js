

$('#btnLogin').click(function(){
	var username = $('#txtUsername').val();
	var password = $('#txtPassword').val();
	if(username != "" && password != ""){
		$('.fillmissing').css("display","none");
		$.ajax({
			type       : "POST",
            url        : "http://192.168.0.115:8080/palimex/log.php",
            crossDomain: true,
            beforeSend : function() {$('.loadImg').css("display","block");},
            complete   : function() {$('.loadImg').css("display","none");},
            data       : { 'user':username, 'pass':password},
            // dataType   : 'json',
            success    : function(response) {
 
                var json = $.parseJSON(response);
                var j = [];
                var ss = 0;
                $(json).each(function(i,val){
                    $.each(val, function(k,v){
                        j[ss] = v;
                        ss++;
                        console.log(v);

                    });

                });       
            },
            error      : function() {
                //console.error("error");
                alert('Not working!');                  
            }
		});
	}
	else{
		var fill= "Please fill the missing field/s.";
		$('.fillmissing').html(fill);
		$('.fillmissing').css("display","block");
	}
});
$('#btnExit').click(function(){
	//navigator.app.exitApp();
	window.close();
});
$('.divClose').click(function(){
	$('.pop-up').css("display","none");
});
