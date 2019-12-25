// var i=1;
// function imageshow()
// {
// 	if(i<5)
// 	setInterval("imageshow()",100);		i++;
// 	}else
// 	{
// 		i=1;
// 	}
// 		$("#banner_img").attr("src","../images/index/image1("+i+").jpg");
// }
// setInterval("imageshow()",100);
$(function(){
	$(".header_content_mul").hover(
		function(){
			$(this).find('ul').stop().slideDown(500)
		},
		function(){
			$(this).find('ul').stop().slideUp(500)
		}
	)
	
	var timer;
	var cur = 0;
	var len = $(".section_content_banner li").length
	//定义图片切换函数
	function showImg(){
		timer = setInterval(function(){
			cur++;
			if(cur >= len){
				cur = 0
			}
			$(".section_content_banner img").eq(cur).fadeIn(5000).siblings("img").fadeOut(3000)
			$(".section_content_banner li").eq(cur).addClass("banner_imgli").siblings("li").removeClass("banner_imgli")
		},5000)
	}
	showImg();
	
	// $(".content_goods_leftbtn").click(function(){
	// 	$(".content_goods_item").animate({left:"-420px"})
	// })
	$(".content_goods_leftbtn").click(function(){
		var item = $(".content_goods_item:first")
		$(".content_goods_item:first").remove()
		$(".content_goods_box").append(item)
	})
	
	$(".content_goods_rightbtn").click(function(){
		var item = $(".content_goods_item:last")
		$(".content_goods_item:last").remove()
		$(".content_goods_box").prepend(item)
	})
	
	
	
	/*点击id为"display"的button显示弹出层*/
	$(".icon_item_shop").click(function() {
	    $(".mask").fadeIn();
	    $(".toDisplay").fadeIn();
	});
		
	/*点击id为"close"的button关闭弹出层*/
	$("#close").click(function() {
	    $(".mask").fadeOut();
	    $(".toDisplay").fadeOut();
	});
	
	$(".content_ul_item").click(function(){
		// console.log("当前的点的是第几个 ： " + $(this).index()) 
		$(".content_text_item").eq($(this).index()).show().siblings().hide()
	})
	
	
	
	
	 //当滚动条的垂直位置距顶部100像素一下时，跳转链接出现，否则消失
     $(window).scroll(function() {
         if ($(window).scrollTop() > 100) {
             $('.back_top').fadeIn(1000);
         } else {
             $(".back_top").fadeOut(1000);
         }
     });


	$(".back_top").click(function () {
    //滚动时 滚动条离上部的距离
    var distance = $("html").scrollTop() + $("body").scrollTop();
    //设置滚动的总时间
    var time = 1000;
    //间隔时间
    var intervalTime = 50;
    var itemDistance = distance / (time / intervalTime);
    var intervalId = setInterval(function () {
        distance -= itemDistance;

        if (distance <= 0) {
            clearInterval(intervalId);
        }
        $("html,body").scrollTop(distance - itemDistance);
    }, intervalTime);
	});
	
	
	$('.content_weibo_div').change(function(){
		var selectId = $('.content_weibo_div option:selected');
		if(selectId.val() == "1"){
			window.open('japan.html')
		}
	})
	
	
	$(window).scroll(function(){
        if($(window).scrollTop()>=$('.header_content').height()){
            $('.header_content').css('position','fixed').css('top',0);
        }else{
            $('.header_content').css('position','static');
			
        }
    })
	
	$(".header_search").click(function(){
		$(this).css("width","80%")
	})
})

