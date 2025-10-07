function NewsMb() {
  const [newsList, setNewsList] = React.useState([])
  React.useEffect(() => {
	  
    var swiperNews = new Swiper(".news-swiper", {
      direction: "horizontal",
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
    });
  }, []);
  React.useEffect(() => {
    $.ajax({
      url: "/prj/archive/getPresscenterList?categoryCode=news",
      type: "post",
      dataType: "json",
      data: {
        press_type: ''
      },
      success: (res) => {
        console.log(res);
        if (res.code == 200) {
          setNewsList(res.data)
        }
      },
    });
  }, [])
  return (
    <div className="news-mb">
      <div id="news-title" className="title animated">
        NEWS
        <br />
        CENTER
      </div>
		<a className="viewAll" href="/news">
			<span>VIEW ALL</span>
			<img src="/data/tms/website/html/images/model/W-R.png"/>
		</a>
      <div className="right-box">
        <div className="swiper news-swiper">
          <div className="swiper-wrapper">
            {newsList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="swiper-slide"
                  onClick={() => {
                    window.open(item.archiveLink);
                  }}
                >
                  <div className="title">{item.press_title}</div>
                  <div className="date">{item.release_date}</div>
				  <div className="swiper-slide-img-box">
				    <img src={item.home_img} className="swiper-slide-img" />
				  </div>
                 
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="left-box">
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
      
    </div>
  );
}

ReactDOM.render(<NewsMb />, document.getElementById("home-mb-news"));
