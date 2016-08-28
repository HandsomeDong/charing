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

    //激活tooltip，必须。
    $("[data-toggle='tooltip']").tooltip();



    $("#joinNow").on("click",function(){
        var $btn = $(this).button('loading');
        var $mailbox_name = $("#mailbox_name_join");
        var $mailbox_key = $("#mailbox_key_join");
        var flag = true;
        var mailbox_name = $mailbox_name.val();
        var mailbox_key = $mailbox_key.val();
        var name_verify = /^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9_\u4E00-\u9FA5]{5,15}$/;
        var key_verify = /^[a-zA-Z]\w{5,11}$/;
        // console.log(mailbox_name.length);
        $mailbox_name.parent().removeClass("has-error");
        $mailbox_key.parent().removeClass("has-error");
        if(!name_verify.test(mailbox_name)){
            //mailbox name check failed
            flag=false;
            $mailbox_name.parent().addClass("has-error");
        }
        if(!key_verify.test(mailbox_key)){
            //mailbox key check failed
            flag=false;
            $mailbox_key.parent().addClass("has-error");
        }
        if(flag){
            $.post('/submit_register/', { address: mailbox_name,password: mailbox_key}, function (stat) {
                console.log(stat["register_success"]);
                if(!stat["register_success"]){
                    $mailbox_name.parent().addClass("has-error");
                    $mailbox_name.attr("data-original-title","已有人拥有该信箱，请再想一个ID吧~");
                    // $("[data-toggle='tooltip']").tooltip();
                    $mailbox_name.tooltip('show');
                    $("#register_success").hide();
                    //$("#register_fail").show();
                }
                else{
                    $("#register_success").show();
                    $("#register_fail").hide();
                }
                $btn.button('reset');
            });
        }
        else
        {
            $btn.button('reset');
        }
    });

    $("#mailbox_name_join").on("click",function(){
        var $mailbox_name = $("#mailbox_name_join");
        var $mailbox_key = $("#mailbox_key_join");

        $mailbox_name.attr("data-original-title","信箱ID可以由字母、数字、下划线和中文组成，以中文或字母开头，长度为6-16位。");

        $mailbox_name.parent().removeClass("has-error");
        if( $mailbox_key.parent().hasClass("has-error")){
            $mailbox_key.val("");
            $mailbox_key.parent().removeClass("has-error");
        }
    });

    $("#mailbox_key_join").on("click",function(){
        var $mailbox_name = $("#mailbox_name_join");
        var $mailbox_key = $("#mailbox_key_join");

        $mailbox_key.parent().removeClass("has-error");
    });

})
