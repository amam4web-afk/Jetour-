var subjectSwiper = new Swiper('.subject-swiper', {
	slidesPerView : 1,
  autoplay: 2000,
  loop:true,
  prevButton:'.swiper-button-prev-pc',
  nextButton:'.swiper-button-next-pc',
})

var subjectSwiperMb1 = new Swiper('.subject-swiper-mb1', {
	slidesPerView : 1,
  autoplay: 2000,
  loop:true,
  prevButton:'.swiper-button-prev-mb1',
  nextButton:'.swiper-button-next-mb1',
})

var subjectSwiperMb2 = new Swiper('.subject-swiper-mb2', {
	slidesPerView : 1,
  autoplay: 2000,
  loop:true,
  prevButton:'.swiper-button-prev-mb2',
  nextButton:'.swiper-button-next-mb2',
})


$('.subject .videoWrapper .video-box .play-btn').click(function() {
  $('.subject .video-box .mb-video')[0].play();
  $(this).hide();
})