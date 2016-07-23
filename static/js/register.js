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

})
