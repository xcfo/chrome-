function calc(num, length = 2) {
    for (var len = (num + "").length; len < length; len = num.length) {
        num = "0" + num;
    }
    return num;
}

setInterval(function() {
        var today = new Date();
        var h = calc(today.getHours());
        var m = calc(today.getMinutes());
        document.getElementById('time').innerHTML = h + ":" + m;
        // get date
        var date = new Date();
        var day = calc(date.getDate());
        var month = calc(date.getMonth() + 1);
        var year = date.getFullYear();
        document.getElementById('date').innerHTML = day + "/" + month + "/" + year;
    }

)
localStorage.getItem("gwa5f?5tHQ%EREJGENCFfGw=tb-!cDktP@@qDQb2BUNbJ6P@sGqcnV+4ys27$@DRp6#mYm*BgM%6r=8#PWmp=R=4rBhJTwN2*$$+NMCm4TRY*QT!sMn%m#=E8GLuxXrdn3YW#DBJuSRv8Wx+DPVZPDWUBywt^ey_T4BLd&2y3P4u@QqY#r57B4#cZVp7ehrYXTDqU$D@c-U#L34HP=%as42##GYtGsdw$qFkjy3-^t+fXgp_?XYYF@n6Zm=AFG3J") == null ? document.body.style.background = "url(https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb)" : document.body.style.background = "url(" + localStorage.getItem("gwa5f?5tHQ%EREJGENCFfGw=tb-!cDktP@@qDQb2BUNbJ6P@sGqcnV+4ys27$@DRp6#mYm*BgM%6r=8#PWmp=R=4rBhJTwN2*$$+NMCm4TRY*QT!sMn%m#=E8GLuxXrdn3YW#DBJuSRv8Wx+DPVZPDWUBywt^ey_T4BLd&2y3P4u@QqY#r57B4#cZVp7ehrYXTDqU$D@c-U#L34HP=%as42##GYtGsdw$qFkjy3-^t+fXgp_?XYYF@n6Zm=AFG3J") + ")";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center 60%";
document.body.style.backgroundAttachment = "fixed";