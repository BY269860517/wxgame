$(function(){

	$(".select").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};  //展开效果
		var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};   //关闭效果
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.find("a").click(function(){dt.html($(this).html());_hide();});    //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$("html").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
	})


})


/**
 * 登录js
 */

function login(obj) {
	var user={
		userName:$("#username").val(),
		passWord:$("#password").val()

	}
	$(obj).attr("disabled", true);

	var username = $.trim($('#username').val());
	var password = $.trim($('#password').val());
	if (username == "" || password == "") {
		$(".tishi").html('用户名或者密码不能为空');
		$(obj).attr("disabled", false);
	} else {
		$(".tishi").html('');
		$.ajax({
			type : 'post',
			url : 'http://192.168.0.106:9097/game/login/login',
			contentType: "application/json",
			data : JSON.stringify(user),
			success : function(result) {
				if(result.code==-1){
					$(".tishi").html(result.msg);
					$(obj).attr("disabled", false);
				}else {
				  localStorage.setItem("tokens",result.data.token);
					location.href = 'index.html';
				}
              console.log(result);
			},
			error : function(xhr, textStatus, errorThrown) {
				$(".tishi").html("登录失败，请联系管理员！");
			}
		});

	}
}
/**
 * 退出
 */
function longOut(){
	debugger
	var token=window.localStorage.getItem("tokens");
		$.ajax({
			 type : 'post',
			 url : 'http://192.168.0.106:9097/game/login/out',
	   contentType: "application/json",
	   headers:{"token":token},
			 success : function(result) {
				 if(result.code==-1){
					 $(".tishi").html(result.msg);
					 $(obj).attr("disabled", false);
				 }else {
				   localStorage.setItem("tokens",result.data.session_id);
					 location.href = 'index.html';
				 }
			   console.log(result);
			 },
			 error : function(xhr, textStatus, errorThrown) {
				 $(".tishi").html("登录失败，请联系管理员！");
			 }
		 });
  }


