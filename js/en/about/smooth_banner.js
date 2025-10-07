var phoneBigSize = 960;
    function isMobile() {
        //if(/s=noRedirect/i.test(location.search)) return; 
        if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
            try {
                if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    return true;
                } else {
                    return false;
                }
            } catch (e) { }
        }
    }
    document.addEventListener("DOMContentLoaded", function () {
        // var isMobile=/Mobi|Android|iPhone/i.test(navigator.userAgent)?true:false;
        gsap.registerPlugin(ScrollTrigger);
        var brandMaster_an0 = gsap.timeline()
        if (isMobile() || document.body.clientWidth <= phoneBigSize) {
            if ($('.smooth—banner .bg').length > 0) {
                brandMaster_an0.fromTo(".smooth—banner .bg", { y: "-=10%" }, { duration: 25, y: '-1%', ease: "none" }, "0")
                brandMaster_an0.fromTo(".smooth—banner .building", { y: "+=8%" }, { duration: 25, y: 0, ease: "none" }, "0")
                brandMaster_an0.fromTo(".smooth—banner .word", { y: "-=2%" }, { duration: 25, y: "+=2%", ease: "none" }, "0")
            } else {
                brandMaster_an0.fromTo(".smooth—banner .building", {y:"+=8%"}, {duration:25, y:'0' ,ease:"none"},"0")
                brandMaster_an0.fromTo(".smooth—banner .word", {y:"-=2%"}, {duration:25, y:"+=2%", ease:"none"},"0")
            }
        }
        else {
            if ($('.smooth—banner .bg').length > 0) {
                brandMaster_an0.fromTo(".smooth—banner .bg", { y: "-=5%" }, { duration: 25, y: '-1%', ease: "none" }, "0")
                brandMaster_an0.fromTo(".smooth—banner .building", { y: "+=8%" }, { duration: 25, y: 0, ease: "none" }, "0")
                brandMaster_an0.fromTo(".smooth—banner .word", { y: "-=2%" }, { duration: 25, y: "+=2%", ease: "none" }, "0")
            } else {
                brandMaster_an0.fromTo(".smooth—banner .building", {y:"+=8%"}, {duration:25, y:'0' ,ease: "none"},"0")
                brandMaster_an0.fromTo(".smooth—banner.word", {y:"-=10%"}, {duration:25, y:"+=20%", ease:"none"},"0")
            }
        }
        ScrollTrigger.create({
            animation: brandMaster_an0,
            trigger: '.smooth—banner',
            start: 'top',
            end: 'bottom top',
            scrub: 2,
            pin: true,
            snap: 1,
        });
    })