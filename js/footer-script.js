jQuery(document).ready(function($) {

    function buildFooter() {
        var themeData = window.themeData || { 
            themeUri: '', 
            location: '/', 
            copyright_text: `© Copyright ${new Date().getFullYear()} JETOUR Auto | KAIFENG JETOUR AUTOMOBILE SALES CO.LTD`,
            footer_logo_url: '',
            footer_menu: [],
            menu: [],
            socials: {}
        };
        
        var copyrightParts = themeData.copyright_text.split('|');
        var mainCopyright = copyrightParts[0] ? copyrightParts[0].trim() : `© Copyright ${new Date().getFullYear()} JETOUR Auto`;
        var companyCopyright = copyrightParts[1] ? copyrightParts[1].trim() : 'KAIFENG JETOUR AUTOMOBILE SALES CO.LTD';

        var logoImg = '';
        if(themeData.footer_logo_url) {
            logoImg = `<img class="logo" src="${themeData.footer_logo_url}" alt="Footer Logo" />`;
        } else if (themeData.themeUri) {
            logoImg = `<img class="logo" src="${themeData.themeUri}/data/tms/website/html/images/footer/logo.png" alt="Footer Logo" />`;
        }
        
        var footerLinks = '';
        if(themeData.footer_menu && themeData.footer_menu.length > 0){
            themeData.footer_menu.forEach(function(item){
                footerLinks += `<li><a href="${item.url}">${item.title}</a></li>`;
            });
        }
        
        // --- Social Links ---
        var socialLinksDesktop = '';
        var socialLinksMobile = '';
        var socials = themeData.socials || {};
        var socialOrder = ['instagram', 'facebook', 'youtube', 'twitter'];
        var defaultIcons = {
            instagram: { icon: '4-1.png', hover: '4-2.png' },
            facebook: { icon: '1-1.png', hover: '1-2.png' },
            youtube: { icon: '3-1.png', hover: '3-2.png' },
            twitter: { icon: '2-1.png', hover: '2-2.png' },
        };

        socialOrder.forEach(function(key) {
            if(socials[key] && socials[key].url) {
                var icon = socials[key].icon || `${themeData.themeUri}/data/tms/website/html/images/footer/${defaultIcons[key].icon}`;
                var hoverIcon = socials[key].hover || `${themeData.themeUri}/data/tms/website/html/images/footer/${defaultIcons[key].hover}`;
                
                socialLinksDesktop += `<li><a href="${socials[key].url}" target="_blank"><img src="${icon}" alt="${key}" /><img src="${hoverIcon}" alt="${key} Hover" /></a></li>`;
                socialLinksMobile += `<a href="${socials[key].url}" target="_blank"><img src="${icon}" /></a>`;
            }
        });


        // --- Desktop Footer ---
        var footerHtml = `
            <footer class="pc-pad">
                <div class="top">
                    ${logoImg}
                    <ul class="box2">
                        ${footerLinks}
                    </ul>
                    <div class="box3">
                        <ul class="top">
                            <li><a href="${themeData.location}cookie">Cookies</a></li>
                            <li><a href="${themeData.location}agree">Privacy</a></li>
                        </ul>
                    </div>
                    <div class="box4">
                        <div class="title">${mainCopyright}</div>
                        <ul>${socialLinksDesktop}</ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <ul>
                        <li class="nolink">${companyCopyright}</li>
                    </ul>
                </div>
            </footer>`;
        $('#footer-box').html(footerHtml);

        // --- Mobile Footer ---
        var vehicleLinks = '';
        if (themeData.menu) {
            var vehicles = themeData.menu.find(function(item) { return item.name && item.name.toLowerCase().includes('vehicles'); });
            if (vehicles && vehicles.content) {
                vehicles.content.forEach(function(car) {
                    vehicleLinks += `<div data-url="${car.more}">${car.name}</div>`;
                });
            }
        }

        var footerMbHtml = `
            <footer class="mb-only">
                <div class="back-top"><img src="${themeData.themeUri}/data/tms/website/html/images/footer/goback.png" /></div>
                <ul>
                    <li class="vehicle-toggle">
                        <div>Vehicles</div>
                        <img src="${themeData.themeUri}/data/tms/website/html/images/header/open.png" class="toggle-arrow" />
                    </li>
                    <div class="car-list">${vehicleLinks}</div>
                    ${footerLinks}
                </ul>
                <div class="icon-list">
                    ${socialLinksMobile}
                </div>
                <div class="text-list">
                    <div>${companyCopyright}</div>
                </div>
                <div class="text-list">
                    <div><a href="${themeData.location}cookie">Cookies</a></div>
                    <div><a href="${themeData.location}agree">Privacy</a></div>
                </div>
                <div class="copyright">${mainCopyright}</div>
            </footer>`;
        $('#footer-mb-box').html(footerMbHtml);
    }

    function attachFooterEvents() {
        $('body').on('click', '.back-top', function() {
            $('html, body').animate({ scrollTop: 0 }, 550);
        });

        $('body').on('click', '.vehicle-toggle', function() {
            var $carList = $(this).siblings('.car-list');
            var $arrow = $(this).find('.toggle-arrow');
            $carList.toggleClass('car-list1'); 
            var isOpen = $carList.hasClass('car-list1');
            var newSrc = isOpen ? `${themeData.themeUri}/data/tms/website/html/images/header/close.png` : `${themeData.themeUri}/data/tms/website/html/images/header/open.png`;
            $arrow.attr('src', newSrc);
        });
        
        $('body').on('click', '.car-list > div', function() {
            var url = $(this).data('url');
            if (url) { window.location.href = url; }
        });
    }

    buildFooter();
    attachFooterEvents();
});

