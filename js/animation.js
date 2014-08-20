  var topValue=0;// 上次滚动条到顶部的距离
        var interval=null;// 定时器

        $(window).scroll(function () {
            var screenTop = $(window).scrollTop();
            var documentHeight = $(document).height();
            var windowHeight =  $(window).height();

            if (screenTop < windowHeight - 130)
            {
                $("#nav1").hide()
            }
            else
            {
                $("#nav1").fadeOut("fast");

            }

            if(interval==null)
                interval=setInterval("test()",1000);//这里就是判定时间，当前是1秒一判定
            topValue=document.documentElement.scrollTop;
        });

        function test(){
            // 判断此刻到顶部的距离是否和1秒前的距离相等
            var scrollTop1 = $(window).scrollTop();
            var windowHeight1 =  $(window).height();
            // console.log("1:"+ scrollTop1);
            // console.log("2:"+ windowHeight1)
            if((document.documentElement.scrollTop==topValue) && (scrollTop1 > 500)){

                $("#nav1").fadeIn("fast");

                clearInterval(interval);
                interval=null;
            }
        }


        $(document).ready(function(){
              $("#nav1").hide()
            $(".goTop").anchorGoWhere({target:1});
            $(".goDown").anchorGoWhere({target:1});
            // $(".goNext").anchorGoWhere({target:1});
            // $(".goFront").anchorGoWhere({target:1});
            // $(".goVertical").anchorGoWhere({target:2});
             $("#moreproject").hide();
            $("#hide-pro-button").hide();
            $("#more-pro-button").click(function() {
                $("#moreproject").fadeIn('slow');
                $(this).hide();
                $("#hide-pro-button").show();
                return false;
            });
             $("#hide-pro-button").click(function() {
                $("#moreproject").fadeOut('fast');
                $(this).hide();
                $("#more-pro-button").show();
                return false;
            });


              $("#morepaper").hide();
            $("#hide-paper-button").hide();
            $("#more-paper-button").click(function() {
                $("#morepaper").fadeIn('slow');
                $(this).hide();
                $("#hide-paper-button").show();
                return false;
            });
             $("#hide-paper-button").click(function() {
                $("#morepaper").fadeOut('fast');
                $(this).hide();
                $("#more-paper-button").show();
                return false;
            });
        });
        jQuery.fn.anchorGoWhere = function(options){
            var obj = jQuery(this);
            var defaults = {target:0, timer:1000};
            var o = jQuery.extend(defaults,options);
            obj.each(function(i){
                jQuery(obj[i]).click(function(){
                    var _rel = jQuery(this).attr("href").substr(1);
                    switch(o.target){
                        case 1:
                            var _targetTop = jQuery("#"+_rel).offset().top;
                            jQuery("html,body").animate({scrollTop:_targetTop},o.timer);
                            break;
                        case 2:
                            var _targetLeft = jQuery("#"+_rel).offset().left;
                            jQuery("html,body").animate({scrollLeft:_targetLeft},o.timer);
                            break;
                    }
                    return false;
                });
            });
 $(function(){
   $("a").target="_blank";
});
        }         
          
