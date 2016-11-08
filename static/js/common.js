$(function() {
	var a = $(".zh-backtotop");
	$(window).bind("scroll", function() {
		var b = $(window).scrollTop();
		if(b >= 300) {
			a.fadeIn()
		} else {
			a.fadeOut()
		}
	});
	a.bind("click", function() {
		$("body,html").animate({
			scrollTop: 0
		}, 500)
	});
	$(".search").click(function() {
		$(".mask").show();
		$(".pop").fadeIn(200);
		$(".s_title").val("").focus();
	});
	$(".pop .close").click(function() {
		$(".mask").hide();
		$(".pop").hide()
	});
	$(".data-search-btn").click(function(b) {
		b.preventDefault();
		var c = $(".s_title").val();
		if(!c) {
			alert("请输入标题");
			return false
		}
		$(".s_form").submit()
	});
	$(".inner a,.list_block a").click(function(c) {
		c.preventDefault();
		var b = $(this).attr("href");
		window.open(b)
	})
});
console.log("%chello blackweater,联系我:tan1chong@163.com", "background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #0f0),color-stop(0.75, #0f0), color-stop(0.9, #f00), color-stop(1, #f00) );color:transparent;-webkit-background-clip: text;font-size:30px;");