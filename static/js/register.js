$(function(){

$('#myButton').on('click', submit_register)
  function submit_register(){
  var url_str = "/submit_register/";
  var param = {"address":"lsdhhh", "password":"123"};
    var $btn = $(this).button('loading')
    	$.post(url_str, param , function(result) {
			console.log(result);
    $btn.button('reset')
		});
  }


    $("#signIn").on("click",function(){
        var $mailbox_name=$("#mailbox_name");
        var $mailbox_key=$("#mailbox_key");
        var flag=true;
        var mailbox_name=$mailbox_name.val();
        var mailbox_key=$mailbox_key.val();
        var pa=/^[0-9_a-zA-Z]{6,20}$/;
        // console.log(mailbox_name.length);
        $mailbox_name.parent().removeClass("has-error");
        $mailbox_key.parent().removeClass("has-error");
        if(mailbox_name.length<4||mailbox_name.length>30){
            //mailbox name check failed
            flag=false;
            $mailbox_name.parent().addClass("has-error");
        }
        if(!pa.test(mailbox_key)){
            //mailbox key check failed
            flag=false;
            $mailbox_key.parent().addClass("has-error");
        }
        if(flag){
            $.post('/submit_register/', { address: mailbox_name,password: mailbox_key}, function (stat) {
                console.log(stat["register_success"]);
                if(!stat["register_success"]){
                $("#mailbox-name-alert").show();
                }
            });
        }

    });

})
