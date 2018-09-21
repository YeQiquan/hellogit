$(function () {
    //设置刻度线
    var aLishiz = "";
    for (var i = 0; i < 60; i++) {
        aLishiz += "<li></li>"
    }
    $("#list").html(aLishiz);
    $("ul>li").each(function (index, item) {
        $(item).css("transform", "rotate(" + index * 6 + "deg)")
    })

    //设置指针旋转
    toTime();
    setInterval(toTime, 50);
    function toTime() {
        var oDate = new Date();
        var iMisec = oDate.getMilliseconds();
        var iSec = oDate.getSeconds() + iMisec / 1000;
        var iMin = oDate.getMinutes() + iSec / 60;
        var iHour = oDate.getHours() + iMin / 60;
        $("#sec").css("transform", "rotate(" + iSec * 6 + "deg)")
        $("#min").css("transform", "rotate(" + iMin * 6 + "deg)")
        $("#hour").css("transform", "rotate(" + iHour * 30 + "deg)")
    };

    //设置拖拽

    drag("#clock");
    function drag(obj) {
        $(obj).mousedown(function (e) {
            var disX = e.pageX - $(this).offset().left;
            var disY = e.pageY - $(this).offset().top;

            $(document).mousemove(function (e) {
                //L为obj左侧到屏幕左侧的距离
                var L = e.pageX - disX;
                var T = e.pageY - disY;

                if (L < 60) {
                    L = 0;
                } else if (L > $(document).width() - $(obj).outerWidth(true) - 60) {
                    L = $(document).width() - $(obj).outerWidth(true);
                    //obj吸附到屏幕右侧
                }

                if (T < 60) {
                    T = 0;
                } else if (T > $(document).height() - $(obj).outerHeight(true) - 60) {
                    T = $(document).height() - $(obj).outerHeight(true);
                }
                $(obj).css(
                    {
                        "left": L + "px",
                        "top": T + "px"
                    }
                )


            });

            $(document).mouseup(function () {
                $(document).off('mousemove');
            });

            return false;

        });
    }



})