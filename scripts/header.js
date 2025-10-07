$('body').append('<script type="text/javascript" src="/data/tms/website/html/js/utils/js.cookie.min.js"></script>')
var toggled = false;
function Header() {
  const [childId, setChildId] = React.useState(1);
  const [activeId, setActiveId] = React.useState(1);
  const [mbMenuId, setMbMenuId] = React.useState(-1);
  const [languageShow, setLanguageShow] = React.useState(false);
  const [pathName, setPathName] = React.useState("");

  const [countryList, setCountryList] = React.useState([
    {
      name: "Ecuador",
      svg: "/data/svg/country/egde.svg",
      websiteAddress: "https://carlosroldan.com.ec/",
    },
    {
      name: "Chile",
      svg: "/data/svg/country/zl.svg",
      websiteAddress: "https://jetourchile.cl/",
    },
    {
      name: "Peru",
      svg: "/data/svg/country/Peru.svg",
      websiteAddress: "https://www.jetour.com.pe/",
    },
    {
      name: "Colombia",
      svg: "/data/svg/country/Colombia.svg",
      websiteAddress: "https://www.jetour.com.co/",
    },
    {
      name: "Mexico",
      svg: "/data/svg/country/Mexico.svg",
      websiteAddress: "http://jetourmx.com/",
    },
    {
      name: "Paraguay",
      svg: "/data/svg/country/Paraguay.svg",
      websiteAddress: "https://www.jetour.com.py/",
    },
    {
      name: "Costa Rica",
      svg: "/data/svg/country/Costa Rica.svg",
      websiteAddress: "http://Ambacar.cr",
    },
    {
      name: "Panama",
      svg: "/data/svg/country/Panama.svg",
      websiteAddress: "http://jetour.petroautos.com/",
    },
    {
      name: "Uruguay",
      svg: "/data/svg/country/wlg.svg",
      websiteAddress: "http://jetour.com.uy",
    },
    {
      name: "Saudi Arabia",
      svg: "/data/svg/country/stalb.svg",
      websiteAddress: "https://www.jetourksa.com/",
    },
    {
      name: "Iraq",
      svg: "/data/svg/country/Iraq.svg",
      websiteAddress: "https://www.jetouriraq.com/",
    },
    {
      name: "Oman",
      svg: "/data/svg/country/am.svg",
      websiteAddress: "https://www.jetouroman.com",
    },
    {
      name: "Qatar",
      svg: "/data/svg/country/Qatar.svg",
      websiteAddress: "https://www.jetourqatar.com",
    },
    {
      name: "United Arab Emirates",
      svg: "/data/svg/country/alb.svg",
      websiteAddress: "https://www.jetouruae.com",
    },
    {
      name: "Kuwait",
      svg: "/data/svg/country/kwt.svg",
      websiteAddress: "https://www.jetourbudastoor.com",
    },
    {
      name: "Bahrain",
      svg: "/data/svg/country/bl.svg",
      websiteAddress: "https://www.jetourbahrain.com",
    },
    {
      name: "Lebanon",
      svg: "/data/svg/country/Lebanon.svg",
      websiteAddress: "https://www.jetourlebanon.com",
    },
    {
      name: "Angola",
      svg: "/data/svg/country/agl.svg",
      websiteAddress: "https://jetourangola.com/",
    },
    {
      name: "Libya",
      svg: "/data/svg/country/Libya.svg",
      websiteAddress: "https://jetourlibya.com/",
    },
    {
      name: "Moldova",
      svg: "/data/svg/country/Moldova.svg",
      websiteAddress: "www.jetour.md",
    },
    {
      name: "Cote d'Ivoire",
      svg: "/data/svg/country/Cote d'Ivoire.svg",
      websiteAddress: "www.jetour.ci",
    },
    {
      name: "Cabo Verde",
      svg: "/data/svg/country/Cabo Verde.svg",
      websiteAddress: "https://caetano.cv/jetour/",
    },
    {
      name: "Senegal",
      svg: "/data/svg/country/Senegal.svg",
      websiteAddress: "https://www.jetour.sn/",
    },
    {
      name: "Philippines",
      svg: "/data/svg/country/Philippines.svg",
      websiteAddress: "https://jetourauto.ph/",
    },
    {
      name: "Uzbekistan",
      svg: "/data/svg/country/Uzbekistan.svg",
      websiteAddress: "https://jetouruzbekistan.uz/",
    },
    {
      name: "Kazakhstan",
      svg: "/data/svg/country/Kazakhstan.svg",
      websiteAddress: "https://jetour-auto.kz/",
    },
    {
      name: "Ukraine",
      svg: "/data/svg/country/Ukraine.svg",
      websiteAddress: "https://jetour.com.ua/",
    },
    {
      name: "Argentina",
      svg: "/data/svg/country/Argentina.svg",
      websiteAddress: "https://jetour.com.ar/",
    },
    {
      name: "Egypt",
      svg: "/data/svg/country/Egypt.svg",
      websiteAddress: "https://jetouregypt.com/",
    },
    {
      name: "Algeria",
      svg: "/data/svg/country/Algeria.svg",
      websiteAddress: "https://www.jetour.dz/",
    },
    {
      name: "Cambodia",
      svg: "/data/svg/country/Cambodia.svg",
      websiteAddress: "https://www.facebook.com/share/YDfZvq2PfhxZ3ZpB/?mibextid=WC7FNe",
    },
    {
      name: "Mongolia",
      svg: "/data/svg/country/Mongolia.svg",
      websiteAddress: "https://www.facebook.com/Sainmotors.mn",
    },
    {
      name: "Georgia",
      svg: "/data/svg/country/Georgia.svg",
      websiteAddress: "https://jetour.ge/",
    }, 
    {
      name: "Jordan",
      svg: "/data/svg/country/Jordan.svg",
      websiteAddress: "https://www.jetourjordan.com/",
    },  
    {
      name: "South Africa",
      svg: "/data/svg/country/SouthAfrica.svg",
      websiteAddress: "https://jetour.co.za/",
    },
    {
      name: "Malaysia",
      svg: "/data/svg/country/Malaysia.svg",
      websiteAddress: "https://jetour.com.my/",
    },   
    {
      name: "Indonesia",
      svg: "/data/svg/country/Indonesia.svg",
      websiteAddress: "https://www.jetour.co.id/",
    },    
  ]);
  const [black, setBlack] = React.useState(false);
  const [pcChangeCountryBoxStyle, setPcChangeCountryBoxStyle] = React.useState({
    height: "0",
    bottom: "-300px",
  }); // pc选择国家弹窗
  const [pcUl, setPcUl] = React.useState(false);
  const [pcValue, setPcValue] = React.useState("");
  
  // pcUl列表
  function sortArray(x, y) {
    if (x.name < y.name) { return -1; }
    if (x.name > y.name) { return 1; }
    return 0;
  }
  let sortCountryList = countryList.sort(sortArray)
  const pcUlList = sortCountryList.map((item, index) => {
    return (
      <li
        onClick={() => {
          chooseCountry(item.name);
        }}
        key={index}
      >
        <img src={item.svg} />
        <div>{item.name}</div>
      </li>
    );
  });

  const fuzzyQuery = (list, keyWord) => {
    var reg = new RegExp(keyWord);
    var arr = [];
    for (var i = 0; i < list.length; i++) {
      if (reg.test(list[i].name)) {
        arr.push(list[i]);
      }
    }
    return arr;
  };
  // 打开pc弹窗
  const showChangeCountry = () => {
    setPcChangeCountryBoxStyle({
      height: "85vh",
      bottom: "0",
    });
    $(".language-list").css("display", "none");
    $("#kefu").css("display", "none");
  };
  const showChangePcCountry = () => {
    setPcChangeCountryBoxStyle({
      height: "calc(100vh - 1.07rem)",
      bottom: "0",
    });
  };
  // 关闭pc弹窗
  const closeAll = () => {
  $(".change-country-box").removeClass('on');
    setPcChangeCountryBoxStyle({
      height: "0",
      bottom: "-300px",
    });
  };
  // 点击pc输入框
  const inputClick = (e) => {
    e.stopPropagation();
    setPcValue("");
    setPcUl(true);
    setBlack(false);
  };
  const inputChange = (e) => {
    if (fuzzyQuery(countryList, e.target.value).length > 0) {
      setCountryList(fuzzyQuery(countryList, e.target.value));
    }
    if (!e.target.value) {
      setCountryList([
        {
          name: "United Arab Emirates",
          svg: "/data/svg/country/alb.svg",
          websiteAddress: "http://www.jetour.ae",
        },
        {
          name: "Oman",
          svg: "/data/svg/country/am.svg",
          websiteAddress: "https://jbmotosom.com/",
        },
        {
          name: "Angola",
          svg: "/data/svg/country/agl.svg",
          websiteAddress: null,
        },
        {
          name: "Bahrain",
          svg: "/data/svg/country/bl.svg",
          websiteAddress: "https://motorcity.com.bh/jetour/index",
        },
        {
          name: "Bolivia",
          svg: "/data/svg/country/blwy.svg",
          websiteAddress: "http://www.romelmotors.com/",
        },
        {
          name: "Ecuador",
          svg: "/data/svg/country/egde.svg",
          websiteAddress: "https://www.jetourecuador.com/",
        },
        {
          name: "Kuwait",
          svg: "/data/svg/country/kwt.svg",
          websiteAddress: "http://www.jetourkuwait.com",
        },
        {
          name: "Myanmar",
          svg: "/data/svg/country/md.svg",
          websiteAddress: null,
        },
        {
          name: "Saudi Arabia",
          svg: "/data/svg/country/stalb.svg",
          websiteAddress: "https://jetoursaudi.com/en/",
        },
        {
          name: "Uruguay",
          svg: "/data/svg/country/wlg.svg",
          websiteAddress: "https://jetour.com.uy/",
        },
        {
          name: "Chile",
          svg: "/data/svg/country/zl.svg",
          websiteAddress: "https://www.jetour.cl/",
        },
      ]);
    }
    let name = countryList.find((item) => {
      return item.name == e.target.value;
    });
    if (name) {
      setBlack(true);
    }
    setPcValue(e.target.value);
  };
  // pc 选择国家
  const chooseCountry = (item) => {
    setPcValue(item);
    setPcUl(false);
    setBlack(true);
  };
  const showMbMenu = () => {
    closeAll();
    $("body").css("overflow", "hidden");
    $("#header-menu-mb").css("left", "0");
    $("#header-menu-mb").css("z-index", "55555555555");
  };
  const closeMbMenu = () => {
    $("body").css("overflow", "auto");
    $("#header-menu-mb").css("left", "-100%");
    $("#header-menu-mb").css("z-index", "2222222");
  };
  return (
  	<div className="change-country-box"  onClick={() => { setPcUl(false); }} id="changeBox" >
        <div className="title">JETOUR WORLDWIDE</div>
        <div className="content-box">
          <div className="description">
            Models, products and services – search to your country region
            website
            <br />
            and discover the regional diversity of JETOUR.
          </div>
          <div className="input-box">
            <input
              id="country-input"
              type="text"
              value={pcValue}
              onChange={inputChange}
              onClick={inputClick}
              placeholder="Please select your country / sales region"
            />
            {pcUl ? <ul id="changeUl">{pcUlList}</ul> : ""}
            <div
              onClick={() => {
                let name = countryList.find((item) => {
                  return item.name == pcValue;
                });
                window.location.href = name.websiteAddress;
              }}
              className={
                black
                  ? "button-bubble swith-btn"
                  : "swith-btn swith-btn-disable"
              }
            >
              Go
            </div>
          </div>
        </div>
        <div onClick={closeAll} className="close">
          <img src="/data/tms/website/html/images/close.png" alt="" />
        </div>
      </div>
  );
}
ReactDOM.render(<Header />, document.getElementById("header-box"));


function CookieBox() {
  // React.useEffect(() => {
  //     const isRTL = document.documentElement.getAttribute("dir") === "rtl";
  //     if (isRTL) {
  //     }
  // }, []);
  return (
    <div className="cookie_cont">
      <div className="cont_lf">
        <div className="tit">About Cookies On This Site</div>
        <div className="det">
          We use cookies to analyze site usage and improve our website and services. Click"<span className="setting">Cookies Settings</span>" to
          manage youpreferences. For more information, read our <a href="/agree">Cookies
            Policy</a>.
        </div>
      </div>
      <div className="cont_rt">
        <div className="btn_wrap">
          <div className="understand">Accept All</div>
          <div className="reject">Reject All</div>
          <div className="setting">Cookie Settings</div>
        </div>
      </div>
      <span className="close"></span>
    </div>
  );
}


function CookiePop() {
  // React.useEffect(() => {
  //     const isRTL = document.documentElement.getAttribute("dir") === "rtl";
  //     if (isRTL) {
  //     }
  // }, []);
  return (

    <div className="cookie_pop_cont">
      <div className="tit">Privacy Preference Center</div>
      <div className="det">
        We place cookies in order to make sure our website works properly and to improve your browsing experience, to streamline and personalize our marketing content and to show you personalized advertisements (including on third party websites). We sometimes share cookie data with our partners for these purposes. Our cookies remember your settings and the data you fill out on forms on our website and analyse traffic to our website. Our cookies also register how you found us and collect information about your browsing habits. You can read more about our use of cookies in our <a href="/cookie">Cookie Notice</a>.
      </div>
      <div className="set_panel">
        <p>Manage Consent Preferences</p>
        <div className="panel_p">
          <span className="cookie_type">Analytics Cookies</span>
          <div className="cut">
            <span></span>
          </div>
          <div className="hidden_text">We use analytics cookies to improve the quality of our website and its content, and to ensure that our partners’ embedded services work properly.</div>
        </div>
      </div>
      <div className="btn_wrap">
        <div className="accept">Accept All</div>
        <div className="reject">Reject All</div>
      </div>
      <span className="close"></span>
    </div>
  );
}
function CookieDetPop() {
  // React.useEffect(() => {
  //     const isRTL = document.documentElement.getAttribute("dir") === "rtl";
  //     if (isRTL) {
  //     }
  // }, []);
  return (
    <div className="cookie_det_pop_cont">
      <div className="btn_wrap">
        <div className="back">Back</div>
      </div>
      <div className="det_wrap">
        <div className="tit">Analytics Cookies:</div>
        <div className="det">We use Google Analytics to place and read cookies for the abovementioned use. We have changed our Google Analytics settings to further protect your privacy. For example, we have made sure that the last octet of your IP-address is invisible and have turned off the setting which allows sharing data with Google. We are also not using any other Google Analytics related cookie services which are offered by Google.</div>
        <div className="det_table">
          <div className="img_head pc-pad">
            <img src="/data/tms/website/html/images/agree/cookie_det_img_head.jpg" className="table_head" />
          </div>
          <div className="img_wrap pc-pad">
            <img src="/data/tms/website/html/images/agree/cookie_det_img.jpg" />
          </div>
          <img src="/data/tms/website/html/images/agree/cookie_det_img_m.jpg" className="mb-only" />
        </div>
      </div>
      <span className="close"></span>
    </div>
  );
}

$(document).ready(function () {
  $('body').append(' <div id="cookie_wrap" class="cookie_wrap"></div>');
  if ($('.model-test-drive').length > 0) {
    $('#cookie_wrap').addClass('hasDrive')
  }
  ReactDOM.render(<CookieBox />, document.getElementById("cookie_wrap"));
  $('body').append('<div id="cookie_pop" class="cookie_pop"></div>');
  ReactDOM.render(<CookiePop />, document.getElementById("cookie_pop"));

  $('body').append('<div id="cookie_det_pop" class="cookie_det_pop"></div>');
  ReactDOM.render(<CookieDetPop />, document.getElementById("cookie_det_pop"));
  // addAnalyticsCode() //临时添加的监控js
  var isAllowCookie = Cookies.get('isAllowCookie');
  if (isAllowCookie === undefined) {
    $(".cookie_wrap").show();
  } else if (isAllowCookie === 'true') {
    setLocaCookie('true');
    addAnalyticsCode();
  }
  function setLocaCookie(type) {
    Cookies.set('isAllowCookie', type);
    $(".cookie_wrap").hide();
  }

  function cookiePopShow() {
    $(".cookie_pop").fadeIn(200);
  }
  function cookiePopHide() {
    $(".cookie_pop").fadeOut(200);
  }
  function cookieDetPopShow() {
    $(".cookie_det_pop").fadeIn(200);
  }
  function cookieDetPopHide() {
    $(".cookie_det_pop").fadeOut(200);
  }

  $(".cookie_wrap .close").click(function () {
    $(".cookie_wrap").hide();
  });

  $(".cookie_wrap .understand").click(function () {
    setLocaCookie('true');
    addAnalyticsCode();
  })
  $(".cookie_wrap .reject").click(function () {
    setLocaCookie('false');
  })
  $(".cookie_pop .accept").click(function () {
    //接受coookie
    setLocaCookie('true');
    addAnalyticsCode();
    $(".set_panel .cut").addClass('on');
    setTimeout(function () {
      cookiePopHide();
    }, 300)
  })

  //cut
  $('.set_panel .cut').click(function () {
    if ($(this).hasClass('on')) {
      $(this).removeClass('on');
    } else {
      $(this).addClass('on');
    }
  })
  $(".cookie_pop .reject").click(function () {
    //拒绝cookie
    setLocaCookie('false');
    cookiePopHide();
  })

  $(".cookie_wrap .setting, .setting").click(function () {
    cookiePopShow();
  })

  $(".cookie_pop .close").click(function () {
    cookiePopHide();
  })
  $(".set_panel .cookie_type").click(function () {
    cookiePopHide();
    cookieDetPopShow();
  });
  $(".cookie_det_pop .back").click(function () {
    cookiePopShow();
    cookieDetPopHide();
  })
  $(".cookie_det_pop .close").click(function () {
    cookieDetPopHide();
  })

  function addAnalyticsCode() {
    loadScript('https://www.googletagmanager.com/gtag/js?id=G-4XVPPT646J', 'async', 'G-4XVPPT646J');
    loadScript('https://www.googletagmanager.com/gtag/js?id=G-VN12DGN69Z', 'async', 'G-VN12DGN69Z');
  }

  //设置统计代码
  function loadScript(url, async, config) {
    var script = document.createElement('script');
    script.src = url;
    if (async) {
      script.setAttribute('async', 'async')
    }
    document.head.appendChild(script);
    var script2 = document.createElement('script');
    script2.innerHTML = " window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', '" + config + "');";
    document.head.appendChild(script2);

  };

  function loadNoScript(label, url, position) {
    var noscript = document.createElement('noscript');
    var labelHtml = document.createElement(label);
    labelHtml.setAttribute('height', 1);
    labelHtml.setAttribute('width', 1);
    labelHtml.style.display = 'none';
    labelHtml.style.visibility = 'hidden';
    labelHtml.setAttribute('src', url)
    noscript.appendChild(labelHtml);
    if (position === 'append') {
      document.head.appendChild(noscript);
    } else if (position === 'insert') {
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  };
});
