$(document).ready(function(){
    /*自制的小屏下拉菜单*/
    //nav
    $("#btn").click(function(){
//		$("#show").toggleClass("none");
		$("#show").slideToggle("slow");
	}); 




	//section 显示隐藏
    $("#btn1").click(function(){
		$(".show").toggleClass("none");
//		$(".show").slideToggle("slow");
	});  
    $("#btn2").click(function(){
		$(".shows").toggleClass("none");
//		$("#show").slideToggle("slow");
	});
    $("#btn3").click(function(){
		$(".star").toggleClass("none");
//		$("#show").slideToggle("slow");
	}); 
    $("#btn4").click(function(){
		$(".work").toggleClass("none");
//		$("#show").slideToggle("slow");
	});
	
	$(window).resize(function(){
					location.reload(true);
//					window.location.reload();
				})
	
	//明星学员
//	var btn=document.getElementById("btn1")
//			btn.onclick=function(){
//				if(btn.innerHTML=="查看更多&nbsp;&nbsp;+"){
//					btn.innerHTML="关闭&nbsp;&nbsp;×";
////					$(".show").css("display","block")
//				}else{
//					btn.innerHTML="查看更多&nbsp;&nbsp;+";
////					$(".show").css("display","none")
//				}
//			}
//			
//			
			
			$(function(){
			$(".aside_title").click(function(){
				$(this).hide();
				$(this).parent(".aside_online").animate({right:"0"},500)
			})
			$("#del").click(function(){
				$(this).parents(".aside_online").animate({right:"-145px"},500,function(){
					$(".aside_title").show();
				})
				
			})
		})
		//就业单位
	  			$(function(){

       $(".btn2 li").click(function() {

        $(this).siblings('li').removeClass('hover');  // 删除其他兄弟元素的样式
        $(this).addClass('hover');// 添加当前元素的样式

    });
  }); 
});





