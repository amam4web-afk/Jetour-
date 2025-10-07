jQuery(document).ready(function($) {
    // --- Fallback data for themeData in case it's not defined ---
    var themeData = window.themeData || {
        menu: [],
        location: '/',
        themeUri: '/wp-content/themes/jetour-t2-theme' 
    };

    var menuData = themeData.menu || [];
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var opendMenu = false;

    function buildMenu() {
        // *** THIS IS THE FIX ***
        // First, completely empty the header container to prevent duplication.
        $('#header-box').empty();

        var html = '<div class="level-menu">';
        html += '<div class="centerCon">';
        html += '<div class="leftMemu"></div>';

        if (themeData.logo_url) {
            html += '<a class="logo" href="' + themeData.location + '"><img src="' + themeData.logo_url + '" alt="Logo"></a>';
        }

        html += '<div class="rightMemu">';
        
        // This container will be targeted by TranslatePress
        html += '<div class="language-container"></div>'; 

        if (themeData.world_icon_url) {
            html += '<a class="world"><img src="' + themeData.world_icon_url + '" alt="World"></a>';
        }
        if (themeData.location_icon_url) {
             html += '<a class="location" href="' + themeData.location + '"><img src="' + themeData.location_icon_url + '" alt="Location"></a>';
        }
        if (themeData.database_icon_url) {
            html += '<a class="database" target="_blank" href="https://global-brandhub.jetourauto.com/"><img src="' + themeData.database_icon_url + '" alt="Database"></a>';
        }

        html += '</div>'; // End rightMemu
        html += '</div>'; // End centerCon
        html += '<div class="seBg"></div>';
        html += '</div>'; // End level-menu

        $('#header-box').append(html);

        // Move the TranslatePress language switcher into our container
        var TPlanguageSwitcher = $('#trp-floater-ls-language-switcher');
        if(TPlanguageSwitcher.length > 0) {
            $('.language-container').append(TPlanguageSwitcher);
        }

        // Build the menu items
        if (isMobile) {
            addClickMobile();
        }

        $.each(menuData, function(i, d) {
            if (!isMobile) {
                setLevel(d);
            } else {
                mobileSm(d);
            }
        });

        attachEvents();
    }

    function setLevel(data) {
        var hasContent = data.content && data.content.length > 0;
        var itemHtml;
        var isVehicles = data.name.toLowerCase().includes('vehicles');

        if (isVehicles && hasContent) {
            itemHtml = '<div class="level level-vehicles">' + data.name + '</div>';
            $('.level-menu .leftMemu').append(itemHtml);
            fM(data.content);
        } else if (hasContent) {
            itemHtml = '<div class="level"><a href="' + (data.more || '#') + '">' + data.name + '</a><div class="seM sm"></div></div>';
             $('.level-menu .leftMemu').append(itemHtml);
             sM(data.content, $('.level-menu .leftMemu .level').last().find(".seM"));
        } else {
            itemHtml = '<div class="level"><a href="' + (data.more || '#') + '">' + data.name + '</a></div>';
            $('.level-menu .leftMemu').append(itemHtml);
        }
    }

    function fM(content) {
        var vehicles = '<div class="vehiclesMenu sm">';
        vehicles += '<div class="secondLevel"></div>';
        vehicles += '<ul class="con"></ul>';
        vehicles += '</div>';
        $('.level-menu .leftMemu .level-vehicles').append(vehicles);

        $.each(content, function(i, d) {
            var b = '<a class="m">' + d.name + '</a>';
            $('.level-menu .leftMemu .secondLevel').append(b);

            var con = '<li>';
            if(d.pic) con += '<div class="pic"><img src="' + d.pic + '"></div>';
            con += '<div class="word"><div class="wordCon">';
            if(d.title) con += '<div class="logoW"><img src="' + d.title + '"></div>';
            con += '<div class="url">';
            if(d.drive && d.driveName) con += '<a class="a" href="' + d.drive + '">' + d.driveName + '</a>';
            if(d.drive && d.driveName && d.fD && d.fDName) con += '|';
            if(d.fD && d.fDName) con += '<a class="b" href="' + d.fD + '">' + d.fDName + '</a>';
            con += '</div>';
            if (d.more && d.moreName) {
                con += '<div class="more"><a class="blue_btn" href="' + d.more + '"><span>' + d.moreName + '</span><img src="' + themeData.themeUri + '/images/carModel/W-R.png"></a></div>';
            }
            con += '</div></div>';
            con += '</li>';
            $('.level-menu .leftMemu .vehiclesMenu .con').append(con);
        });
    }

    function sM(content, container) {
        $.each(content, function(i, d) {
            var seM = '<a class="m" href="' + d.more + '">' + d.name + '</a>';
            container.append(seM);
        });
    }

    function addClickMobile() {
        var menuButton = '<div class="menu-button"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>';
        $('.level-menu .leftMemu').append(menuButton);
        var htmlCon = '<div class="mobileCon"><ul></ul></div>';
        $('.level-menu').append(htmlCon);
    }

    function mobileSm(data) {
        var hasContent = data.content && data.content.length > 0;
        var isVehicles = data.name.toLowerCase().includes('vehicles');

        var html = '<li>';
        html += '<div class="m">';
        html += '<a href="' + (data.more || '#') + '">' + data.name + '</a>';
        if (hasContent) {
            html += '<span><img class="arrow" src="' + themeData.themeUri + '/images/header/close_b.png"></span>';
        }
        html += '</div>';
        if (hasContent) {
             html += '<div class="mobilecontent"></div>';
        }
        html += '</li>';
        $('.mobileCon ul').append(html);

        if (hasContent && isVehicles) {
             $.each(data.content, function(i, d) {
                var a0 = '<a class="mBtn" href="' + d.more + '">';
                if(d.mPic) a0 += '<img class="pic" src="' + d.mPic + '">';
                if(d.title_m) a0 += '<span><img class="title" src="' + d.title_m + '"></span>';
                a0 += '</a>';
                $('.mobileCon ul li').last().find(".mobilecontent").append(a0);
            });
        } else if (hasContent) {
             $.each(data.content, function(i, d) {
                var a = '<a class="mBtn1" href="' + d.more + '">' + d.name + '</a>';
                $('.mobileCon ul li').last().find(".mobilecontent").append(a);
            });
        }
    }

    function attachEvents() {
        if (!isMobile) {
            var hoverTimeout;
            $('.level-menu .leftMemu').on('mouseenter', '.level', function() {
                clearTimeout(hoverTimeout);
                var $this = $(this);
                $('.level-menu .sm, .level-menu .seBg').removeClass('on');
                
                $this.find('.sm').addClass('on');
                
                if ($this.find('.seM').length > 0) {
                    $('.level-menu .seBg').addClass('on');
                } else if ($this.hasClass('level-vehicles')) {
                    var $vehiclesMenu = $this.find('.vehiclesMenu');
                    $vehiclesMenu.addClass('on');
                    if (!$vehiclesMenu.find('.secondLevel a.on').length) {
                        $vehiclesMenu.find('.secondLevel a').first().addClass('on');
                        $vehiclesMenu.find('.con li').first().addClass('on');
                    }
                }
            });

            $('.level-menu').on('mouseleave', function() {
                hoverTimeout = setTimeout(function() {
                    $('.level-menu .sm, .level-menu .seBg').removeClass('on');
                }, 200);
            });

            $('.level-menu .leftMemu').on('mouseenter', '.vehiclesMenu .secondLevel a', function() {
                var index = $(this).index();
                $('.level-menu .vehiclesMenu .secondLevel a').removeClass("on");
                $(this).addClass("on");
                $('.level-menu .vehiclesMenu ul li').removeClass("on");
                $('.level-menu .vehiclesMenu ul li').eq(index).addClass("on");
            });

        } else { // Mobile events
            $('.level-menu .leftMemu').on('click', '.menu-button', function() {
                $(this).toggleClass("cross");
                $(".level-menu .mobileCon").toggleClass("on");
                $('body').toggleClass('no-scroll');
                 opendMenu = $(this).hasClass('cross');
            });
            $('.level-menu .mobileCon').on('click', 'li .m span', function() {
                $(this).closest('li').toggleClass('on');
            });
        }

        $('.rightMemu').on('click', '.world', function() {
             if($('.change-country-box').length > 0){
                $('.change-country-box').addClass('on');
             }
        });
        
        var lastScrollTop = 0;
        
        $(window).scroll(function(){
            if(opendMenu) return;

            var st = $(window).scrollTop();
            
            if ($('body').hasClass('anchor-is-fixed')) {
                 $('.level-menu').addClass('out');
            } else {
                if (st > lastScrollTop){
                    if(st > 100) {
                        $('.level-menu').addClass('out');
                    }
                } else {
                    $('.level-menu').removeClass('out');
                }
            }
            lastScrollTop = st <= 0 ? 0 : st;
        });
    }

    buildMenu();
});

