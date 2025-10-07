jQuery(document).ready(function($) {
    const anchorPC = $('#anchor-pc-point');
    const anchorMB = $('#anchor-mb-point');
    const body = $('body');
    const placeholder = $('#anchor-placeholder');

    function buildAnchorBars() {
        const logoUrl = anchorPC.data('logo-url') || '';
        const navList = ["3D VISUALIZER", "DETAILS"];

        let navItemsPC = '';
        $.each(navList, function(i, item) { navItemsPC += '<li class="scroll-nav">' + item + '</li>'; });
        const desktopHtml = `<div class="anchor-point-box"><img src="${logoUrl}" /><ul class="anchor-point">${navItemsPC}</ul><div class="btn button-bubble" id="anchor-test-drive-btn">Test Drive</div></div>`;
        if (anchorPC.length > 0) anchorPC.html(desktopHtml);

        let navItemsMB = '';
        $.each(navList, function(i, item) { navItemsMB += '<li class="scroll-nav-mb">' + item + '</li>'; });
        const mobileHtml = `<div class="anchor-point-box-mb"><div class="test-drive-box"><div class="test-drive" id="anchor-test-drive-btn-mb">Test Drive</div></div><ul id="anchor-point-ul-mb" class="anchor-point">${navItemsMB}</ul></div>`;
        if (anchorMB.length > 0) anchorMB.html(mobileHtml);
    }

    if (anchorPC.length > 0 || anchorMB.length > 0) {
        buildAnchorBars();
        
        var defaults = { floorClass: ".scroll-floor", navClass: ".scroll-nav", activeClass: "scroll-nav-active", activeTop: 200, scrollTop: 0, delayTime: 500 };
        var defaultsMb = { floorClass: ".scroll-floor-mb", navClass: ".scroll-nav-mb", activeClass: "scroll-nav-active-mb", activeTop: 200, scrollTop: 80, delayTime: 500 };

        function initScrollNav(options, isMobile) {
            var floorList = body.find(options.floorClass);
            var navList = body.find(options.navClass);
            var items = [];
            
            function calculateOffsets() {
                items = [];
                floorList.each(function () { items.push({ activeTop: $(this).offset().top - options.activeTop, scrollTop: $(this).offset().top - options.scrollTop }); });
            }
            
            $(window).on('load resize', calculateOffsets);

            function scrollActive() {
                var nowScrollTop = $(window).scrollTop();
                var activeIndex = -1;
                $.each(items, function (i, item) { if (nowScrollTop >= item.activeTop) { activeIndex = i; } });
                navList.removeClass(options.activeClass).eq(activeIndex).addClass(options.activeClass);

                if(isMobile && activeIndex !== -1) {
                    var $activeItem = navList.eq(activeIndex), $container = $('#anchor-point-ul-mb');
                    if ($container.length > 0 && $activeItem.length > 0) {
                        var scrollTo = $activeItem.position().left + $container.scrollLeft() - ($container.width() / 2) + ($activeItem.width() / 2);
                        $container.stop().animate({ scrollLeft: scrollTo }, 300);
                    }
                }
            }
            $(window).on("scroll.anchorNav", scrollActive);
            navList.on("click.anchorNav", function () { var index = $(this).index(); if(items[index]) $("html,body").animate({ scrollTop: items[index].scrollTop }, options.delayTime); });
        }
        
        initScrollNav(defaults, false);
        initScrollNav(defaultsMb, true);

        $('body').on('click', '#anchor-test-drive-btn, #anchor-test-drive-btn-mb', function() { $("#drive").css("display", "block"); $("body").css("overflow", "hidden"); });

        var anchorElement = anchorPC.is(':visible') ? anchorPC : anchorMB;
        if(anchorElement.length > 0) {
            $(window).on('load', function() {
                var stickyPoint = anchorElement.offset().top;
                $(window).on('scroll.stickyAnchor', function() {
                    var isFixed = $(window).scrollTop() >= stickyPoint;
                    anchorElement.toggleClass('is-fixed', isFixed);
                    body.toggleClass('anchor-is-fixed', isFixed);
                    placeholder.css('display', isFixed ? 'block' : 'none');
                }).trigger('scroll.stickyAnchor');
            });
        }
    }
});

