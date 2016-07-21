$(function(){

   $.when($('#form1').validator('isFormValid')).then(function() {
// 验证成功的逻辑
alert('ok');
}, function() {
// 验证失败的逻辑
alert('no');
});　　

})