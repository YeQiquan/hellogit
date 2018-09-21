$(function () {

    $('.container').fullpage({
        /*配置参数*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd"],
        navigation: true,//导航栏
        afterLoad:function (link,index) {
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index-1).addClass('now');
        },
        /*离开某一个页面的时候触发*/
        onLeave:function (index,nextIndex) {
            var currentSection = $('.section').eq(index-1);
            if(index == 2 && nextIndex == 3){
                /*当前是从第二页到第三页*/
                currentSection.addClass('leaved');
            }else if(index == 3 && nextIndex == 4){
                /*当前是从第三页到第四页*/
                currentSection.addClass('leaved');
            
            }else if(index == 5 && nextIndex == 6){
                /*当前是从第5页到第6页*/
                $('.screen06 .star').addClass('show');
                $('.screen06 .text').addClass('show');
                $('.screen06 .star img').each(function (i) {
                    $(this).css('transition-delay',i*0.5+'s');
                });

            }
        },
       
        afterRender:function () {

            /*点击更多切换下一页*/
            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });

            // 当第四屏的购物车动画结束之后执行收货地址的动画
            // transitionend 事件在 CSS 完成过渡后触发。
            $('.screen04 .cart').on('transitionend',function () {
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });


            /*第7屏功能*/
            $('.screen07 .again').on('click',function () {
                // 点击再来一次重置动画跳回第一页
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                $('.content [style]').removeAttr('style');

                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });
        },
    //    滚动时间
        scrollingSpeed:1000
    });
});