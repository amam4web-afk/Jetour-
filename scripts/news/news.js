function News() {
  const [activeNewsId, setActiveNewsId] = React.useState(-1);
  const [newsList, setNewsList] = React.useState([])
  React.useEffect(() => {
	  
    new Swiper(".news-swiper-pc", {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: false,
      preventClicksPropagation: true,
      preventClicks: true,
      mousewheel: true,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
	 //  breakpoints: { 
		// 767: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 0,
		// }
	 //  }
    });
	// console.log()
  }, []);
  // console.log("useEffect", React.useEffect())
  React.useEffect(() => {
    $.ajax({
      url: "/prj/archive/getPresscenterList?categoryCode=news",
      type: "post",
      dataType: "json",
      data: {
        press_type: '',
        is_home:1
      },
      success: (res) => {
        console.log(res);
        if (res.code == 200) {
          res.data.push({})
          setNewsList(res.data)
        }
      },
    });
  }, [])

  React.useEffect(() => {
    const isRTL = document.documentElement.getAttribute("dir") === "rtl";
	console.log("isRTL",isRTL)
    if (isRTL) {
      $("#home-pc-news > div > div.top > div.right-box").css({
        left: "-4rem",
        right: "auto",
      });
      $(".news .top .right-box .news-swiper .swiper-slide").css({
        "border-left": "none",
        "border-right": "1px solid #ccc",
      });
      $(".news .top").css({
        "padding-right": "1.37rem",
        "padding-left": "0",
      });
      $(
        "#home-pc-news > div > div.top > div.left-box > div.swiper-btn-box > div.swiper-prev"
      ).css({
        "margin-left": "0.2rem",
      });
    }
  }, []);
  return (
    <div className="news">
      <div className="top">
        <div className="left-box">
          <div id="news-title" className="title animated">
            NEWS
            <br />
            CENTER
          </div>
		  <a className="viewAll" href="/news">
		  	<span>VIEW ALL</span>
		  	<img src="/data/tms/website/html/images/model/W-R.png"/>
		  </a>
          
          <div className="swiper-btn-box">
            <div className="swiper-prev">
              <img src="/data/tms/website/html/images/common/W-L.png" alt="" />
              <img src="/data/tms/website/html/images/common/O-L.png" alt="" />
            </div>
            <div className="swiper-next">
              <img src="/data/tms/website/html/images/common/W-R.png" alt="" />
              <img src="/data/tms/website/html/images/common/O-R.png" alt="" />
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="swiper news-swiper news-swiper-pc">
            <div className="swiper-wrapper">
              {newsList.map((item, index) => {
                return (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setActiveNewsId(item.id);
                    }}
                    onMouseLeave={() => {
                      setActiveNewsId(-1);
                    }}
                    onClick={() => {
                      window.open(item.archiveLink);
                    }}
                    className="swiper-slide"
                  >
					<img src={item.press_image} className="swiper-bg-img" />
                    <div className="title">{item.press_title}</div>
                    <div className="date">{item.release_date}</div>
                    {index == newsList.length - 1 ? (
                      ""
                    ) : (
                      <div className="swiper-slide-img-box">
                        <img src={item.home_img} className="swiper-slide-img" />
                      </div>
                    )}

                    {index == newsList.length - 1 ? (
                      ""
                    ) : (
                      <div className="link-btn">
                        <div>EXPLORE</div>
                      </div>
                    )}
                   
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
ReactDOM.render(<News />, document.getElementById("home-pc-news"));
