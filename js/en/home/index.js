// kv
var kvSwiper, animation, kvMbSwiper, mbAnimation, swiperModel, modelMbSwiper, realIndex = 0;
var timer = null;
var delay = 5000;
var anD = 500;
var currentIndex = 0;
// $(document).ready(function() {
	
	$(document).ready(function(){
		var isMobile=/Mobi|Android|iPhone/i.test(navigator.userAgent)?true:false;
		// if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
		//   // 当前设备是移动设备
		//   console.log("是手机版")
		// }
		// console.log(isMobile)
		function judge() {
			var ua = navigator.userAgent.toLowerCase()
			return ua.match(/MicroMessenger/i) == 'micromessenger' // true or false
		}
		// if(judge())
		// {
		// 	$(".playDirectly .videoWrapper video")[0].controls=true;
		// }
		// console.log("micromessenger",judge())
		console.log("isMobile:",isMobile, document.body.clientWidth>1012)
		if(isMobile||document.body.clientWidth<=1024)return
		else
		{
			console.log("no-isMobile")
			$(".rest li").mouseenter(function(){
				// console.log(".rest li")
				var f=$(this).hasClass('r0');
				//var b=$(this).addClass('r1');
				//console.log(f,b);
				console.log(f);
				if(f)
				{
					$(".rest .r1").css("width","38%")
					$(".rest .r0").css("width","62%")
					$(".rest .r1 >div").css({'right':'0.3rem','transition':'all 0.5s ease'})
					$(".rest .r0 >div").css({'left':'1.19rem','transition':'all 0.5s ease'})
				}
				else
				{
					$(".rest .r1").css("width","62%")
					$(".rest .r0").css("width","38%")
					$(".rest .r0 >div").css({'left':'1.19rem','transition':'all 0.5s ease'})
					$(".rest .r1 >div").css({'right':'0.3rem','transition':'all 0.5s ease'})
				}
			})
			$(".rest li").mouseleave(function(){
				$(".rest .r1").css("width","50%")
				$(".rest .r0").css("width","50%")
				$(".rest .r1 >div").css({'right':'1.55rem','transition':'all 0.5s ease'})
				$(".rest .r0 >div").css({'left':'2.32rem','transition':'all 0.5s ease'})
			})
		 }
		
		
		// var news=new Swiper(".news-swiper-pc", {
		//      slidesPerView: 3,
		//      spaceBetween: 0,
		//      loop: false,
		//      preventClicksPropagation: true,
		//      preventClicks: true,
		//      mousewheel: true,
		//      navigation: {
		//        nextEl: ".swiper-next",
		//        prevEl: ".swiper-prev",
		//      },
		// 	  breakpoints: { 
		// 		767: {
		// 			slidesPerView: 2,
		// 			spaceBetween: 0,
		// 		}
		// 	  }
		//    });
	
	 })
	function bannerAnimation(anD, delay) {

		animation = anime({
			targets: ".path-pagination-loop",
			delay: 0,
			loop: false,
			//   strokeDashoffset: function (el) {
			// console.log("el",el)
			//       var svgLength = anime.setDashoffset(el);
			// console.log("svgLength",svgLength)
			//       return [svgLength, 0];
			//   },
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: "linear",
			duration: delay,
		});
		animation.restart();
		// console.log(animation.paused)

		// console.log("animation.currentTime:", animation.currentTime, "animation.delay:", animation.delay,"animation.duration:", animation.duration)
		// animation.restart();
	}
	 
	kvSwiper = new Swiper(".kv-swiper", {
		loop: true,
		// speed:500,
		freeMode:false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		effect: 'fade',
		grabCursor: true,
		pagination: {
			el: ".swiper-pagination",
			type: "custom",
			renderCustom: function(swiper, current, total) {
				var customPaginationHtml = "";
				for (var i = 0; i < total; i++) {
					//判断哪个分页器此刻应该被激活
					if (i == current - 1) {
						customPaginationHtml += `<div class="pagination-loop">
                        <span class="point pause" ></span>
                        <svg viewBox="0 0 54 54">
                          <path
                            class="path-pagination-loop-bg"
                            d="M27,2A25,25,0,1,1,2,27,25,25,0,0,1,27,2"
                          ></path>
                          <path
                            class="path-pagination-loop"
                            d="M27,2A25,25,0,1,1,2,27,25,25,0,0,1,27,2"
							style="stroke-dashoffset:0px"
                          ></path>
                        </svg>
                      </div>`;
						// <img class="pause" onclick="pausePc()" src="/data/tms/website/html/images/kv/pause.png" />
					} else {
						customPaginationHtml +=
							`<div class="swiper-pagination-customs" onclick="changeSlide(${i})"></div>`;
					}
				}
				return customPaginationHtml;
			},
		},
		on: {
			changeSlide: function(e) {
				console.log(e);
			},
			init: function(swiper) {
				// var numList = `<ul>
				//       <li>01</li>
				//       <li>02</li>
				//       <li>03</li>
				//       <li>04</li>
				//       <li>05</li>
				//     </ul>`;
				// $(".swiper-pagination-text").html(
				//     numList +
				//     '<span class="total">' +
				//     "/0" +
				//     (this.slides.length - 2) +
				//     "</span>"
				// );
				// this.emit("transitionStart");
				// var realIndex = swiper.realIndex;
				// delay =swiper.params.autoplay.delay;
				// swiper.params.autoplay.delay=realIndex==0?5000:3000;
				// console.log("animation-delay", delay,realIndex==0,realIndex);
				// delay =swiper.params.autoplay.delay-swiper.params.speed;
				// anD=swiper.params.speed;
				 bannerAnimation(anD,delay);
			},
			slideChangeTransitionStart: function(swiper){
			
					

			},
			slideChangeTransitionEnd: function(swiper){
			 // if(animation)
			 // { 
				//  animation.restart();
				 
			 // }
			   //
			    
			// 	console.log("slideChangeTransitionEnd-animation.currentTime:", animation.currentTime, "animation.delay:", animation.delay,
			// "animation.duration:", animation.duration)
			},
			// slideChange: function(){
			//       console.log('改变了，activeIndex为'+this.activeIndex);
			// },
			transitionStart: function(swiper) {
				// if(animation)
				// {
				// 	//animation.pause();
				// 	animation.currentTime=0;
				// 	console.log("slideChangeTransitionStart-animation.currentTime:", animation.currentTime, "animation.delay:", animation.delay,
				// 	"animation.duration:", animation.duration)
				// }
				var realIndex = swiper.realIndex;
				delay = swiper.params.autoplay.delay;
				swiper.params.autoplay.delay = realIndex == 0 ? 5000 : 3000;
				// console.log("animation-delay", swiper.params.autoplay.delay)
				delay = swiper.params.autoplay.delay - swiper.params.speed;
				anD = swiper.params.speed;
				// console.log("transitionStart",delay,anD,realIndex);
				 bannerAnimation(anD, delay);
				// $(".pagination-loop .path-loop").css("stroke-dashoffset","0px");
				
			},
		},
	});
	// kvMbSwiper = new Swiper(".kv-mb-swiper", {
	// 	loop: true,
	// 	speed: 700,
	// 	autoplay: {
	// 		delay: 6000,
	// 		disableOnInteraction: false,
	// 	},
	// 	grabCursor: true,
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		type: "custom",
	// 		renderCustom: function(swiper, current, total) {
	// 			var customPaginationHtml = "";
	// 			for (var i = 0; i < total; i++) {
	// 				//判断哪个分页器此刻应该被激活
	// 				if (i == current - 1) {
	// 					customPaginationHtml += `<div class="pagination-loop">
 //                        <img class="pause" onclick="pauseMb()" src="/data/tms/website/html/images/kv/pause.png" />
 //                        <svg viewBox="0 0 54 54">
 //                          <path
 //                            class="path-loop-bg"
 //                            d="M27,2A25,25,0,1,1,2,27,25,25,0,0,1,27,2"
 //                          ></path>
 //                          <path
 //                            class="path-loop"
 //                            d="M27,2A25,25,0,1,1,2,27,25,25,0,0,1,27,2"
 //                          ></path>
 //                        </svg>
 //                      </div>`;
	// 				} else {
	// 					customPaginationHtml += `<div class="swiper-pagination-customs"></div>`;
	// 				}
	// 			}
	// 			return customPaginationHtml;
	// 		},
	// 	},
	// 	on: {
	// 		init: function() {
	// 			var numList = `<ul>
 //                  <li>01</li>
 //                  <li>02</li>
 //                  <li>03</li>
 //                  <li>04</li>
 //                  <li>05</li>
 //                </ul>`;
	// 			$(".swiper-pagination-mb-text").html(
	// 				numList +
	// 				'<span class="total">' +
	// 				"/0" +
	// 				(this.slides.length - 2) +
	// 				"</span>"
	// 			);
	// 			this.emit("transitionStart");
	// 		},
	// 		transitionStart: function() {
	// 			var delay = this.params.autoplay.delay - 1000;
	// 			var realIndex = this.realIndex;
	// 			var speed = this.params.speed;
	// 			var bullets = this.$el.find(".swiper-pagination-mb-text li");
	// 			var slideLength = bullets.length;
	// 			for (var i = 0; i < slideLength; i++) {
	// 				if (i - realIndex > Math.floor(slideLength / 2)) {
	// 					var difference = i - slideLength - realIndex;
	// 				} else if (i - realIndex < -Math.floor(slideLength / 2)) {
	// 					difference = i + slideLength - realIndex;
	// 				} else {
	// 					difference = i - realIndex;
	// 				}
	// 				bullets.eq(i).transition(speed);
	// 				bullets
	// 					.eq(i)
	// 					.transform(
	// 						"rotateX(" +
	// 						difference * 30 +
	// 						"deg) translate3d(0, " +
	// 						difference * 30 +
	// 						"px, 0)"
	// 					);
	// 				bullets.eq(i).css("opacity", 1 - Math.abs(difference));
	// 			}
	// 			mbAnimation = anime({
	// 				targets: ".path-loop",
	// 				delay: 750,
	// 				strokeDashoffset: function(el) {
	// 					var svgLength = anime.setDashoffset(el);
	// 					return [svgLength, 0];
	// 				},
	// 				easing: "linear",
	// 				duration: delay,
	// 			});
	// 		},
	// 	},
	// });

	function changeSlide(e) {
		kvSwiper.slideTo(e + 1);
		kvSwiper.autoplay.start();
	}

	function pausePc() {
		console.log("animation.paused", animation.paused)
		if (animation.paused) {
			animation.restart();
		} else {
			animation.pause();
		}
		console.log("kvSwiper.autoplay.running", kvSwiper.autoplay.running)
		if (kvSwiper.autoplay.running) {
			kvSwiper.autoplay.stop();
		} else {
			kvSwiper.autoplay.start();
		}
	}

	// function pauseMb() {
	// 	if (mbAnimation.paused) {
	// 		mbAnimation.restart();
	// 	} else {
	// 		mbAnimation.pause();
	// 	}
	// 	if (kvMbSwiper.autoplay.running) {
	// 		kvMbSwiper.autoplay.stop();
	// 	} else {
	// 		kvMbSwiper.autoplay.start();
	// 	}
	// }

	// car-model
	const swiper_model_thumb = new Swiper('.carShow .model-swiper', {
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
		delay: 6000,
		loop: true,
		speed: 1200,
		on: {
			// init: function(swiper){
			// 				initNumber(swiper.realIndex);	 
			// 		},
			slideChangeTransitionStart: function(swiper) {

				// swiperModelIndex=swiper.realIndex;
				console.log(swiper.realIndex);
				// initNumber(swiper.realIndex);
			},
		}

	})

	swiperModel = new Swiper(".carShow .swiper-model", {
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		delay: 6000,
		speed: 1200,
		thumbs: {
			swiper: swiper_model_thumb,
		},
		navigation: {
			nextEl: ".carShow .swiper-next",
			prevEl: ".carShow .swiper-prev",
		},
		on: {
			slideChangeTransitionStart: function(swiper) {
				$(".carShow .list li").hide();
				$(".carShow .list li").eq(swiper.realIndex).show();
				$(".carShow .list li").eq(swiper.realIndex).css("display","flex")
				currentIndex = swiper.realIndex;
				//initNumber(swiper.realIndex);
			},
			slideChangeTransitionEnd: function(swiper) {
				console.log(swiper.realIndex)

			},
			init: function(swiper) {
				//Swiper初始化了
				// console.log("swiper", swiper)
				// $(".carShow .swiper-model").addClass("on");

				// setTimeout(function() {
				// 	$('.carShow .swiper-model .swiper-slide-active .carWrapper').addClass(
				// 		'active');
				// 	$(".carShow .swiper-model .swiper-slide-active .wheels").addClass(
				// 		'active');

				// }, 80)

			},
		},

	});
	$(".carShow .list li").eq(0).show();

	// swiper.slideTo(2);
	// $('.carShow .swiper-model .swiper-slide .carWrapper').removeClass('active');
	// $('.carShow .swiper-model .swiper-slide .carWrapper').removeClass('reverse');
	//  $('.carShow .swiper-model .swiper-slide-active .carWrapper').addClass('active');

	//  $(".carShow .swiper-model .swiper-slide .wheels").removeClass('active');
	//  $(".carShow .swiper-model .swiper-slide .wheels").removeClass('reverse');
	//  $(".carShow .swiper-model .swiper-slide-active .wheels").addClass('active');

	//  initNumber(swiper.realIndex);
	function numCount(className) {
		// 读秒
		var curNume = className.attr('data-num')
		if (!curNume) return;
		if (curNume.indexOf('.') == -1) {
			//是否小数
			if (
				curNume.indexOf('≥') >= 0 ||
				curNume.indexOf('>') >= 0 ||
				curNume.indexOf('≤') >= 0 ||
				curNume.indexOf('<') >= 0
			) {
				var num = +curNume.slice(1)
				className.animateNumber({
					number: num
				}, 1000, function() {
					className.text(curNume[0] + num)
				})
			} else if (curNume.indexOf('/') >= 0) {
				var curindex = curNume.indexOf('/')
				var num = +curNume.slice(0, curindex)
				className.animateNumber({
					number: num
				}, 1000, function() {
					className.text(curNume)
				})
			} else {
				className.animateNumber({
					number: curNume
				}, 1000)
			}
		} else {
			//小数位数
			var decimal_places = 1
			var decimal_factor =
				decimal_places === 0 ? 1 : Math.pow(10, decimal_places)
			className.animateNumber({
					number: curNume * decimal_factor,
					numberStep: function(now, tween) {
						var floored_number = Math.floor(now) / decimal_factor,
							target = $(tween.elem)
						if (decimal_places > 0) {
							floored_number = floored_number.toFixed(decimal_places)
							floored_number = floored_number
								.toString()
								.replace('.', '.')
						}
						target.text(floored_number)
					},
				},
				1000
			)
		}
	}


	function initNumber(index) {
		
		var tarCon = $(".list li").eq(index).find(".num_con")
		var le = tarCon.find(">div").length;
		console.log("le", le)
		for (var i = 0; i < le; i++) {
			var tar = tarCon.find(">div").eq(i).find(".p .num");

			var num = tar.attr("data-num");
			console.log("tar", tar, num)
			numCount(tar);
			// tar.animateNumber({
			// 	number: 72,
			// 	numberstep: function(now, tween){
			// 		var target = $(tween.elem);
			// 		target
			// 		.prop( 'number', now) // keep current prop valuetext(now);
			// 		.text(now);
			// 	}
			// })
			// tar.animateNumber({ number: num });
		}

		// $(#points').animateNumber(
		// number: 72,
		// numberstep: function(now, tween)var target = $(tween.elem);target
		// .prop( 'number", now) // keep current prop valuetext(now);
	}

	swiperModel.on('afterInit', function() {
		// $('.index .model-show .modelNumber .numberCluster').addClass('s'+swiper_model.realIndex);
	})
	
	
	swiperModel.on('slideNextTransitionStart', function(swiper) {
		swiper_model_thumb.slideNext(200);
		console.log("slideNextTransitionStart")
		$('.carShow .swiper-model .swiper-slide .carWrapper').removeClass('active');
		$('.carShow .swiper-model .swiper-slide .carWrapper').removeClass('reverse');
		$('.carShow .swiper-model .swiper-slide-active .carWrapper').addClass('active');

		$(".carShow .swiper-model .swiper-slide .wheels").removeClass('active');
		$(".carShow .swiper-model .swiper-slide .wheels").removeClass('reverse');
		$(".carShow .swiper-model .swiper-slide-active .wheels").addClass('active');

		initNumber(swiper.realIndex);
	});
	swiperModel.on('slidePrevTransitionStart', function() {
		swiper_model_thumb.slidePrev(200);
		$('.carShow .swiper-model .swiper-slide .carWrapper').removeClass('active');
		$('.carShow .swiper-model .swiper-slide .carWrapper').removeClass('reverse');
		$('.carShow .swiper-model .swiper-slide-active .carWrapper').addClass('active');
		$('.carShow .swiper-model .swiper-slide-active .carWrapper').addClass('reverse');

		$(".carShow .swiper-model .swiper-slide .wheels").removeClass('active');
		$(".carShow .swiper-model .swiper-slide .wheels").removeClass('reverse');
		$(".carShow .swiper-model .swiper-slide-active .wheels").addClass('active');
		$(".carShow .swiper-model .swiper-slide .wheels").addClass('reverse');
	});



	// function toCarDetail() {
	//     if(realIndex==0){
	//         window.location.href="/dashing"
	//     }
	//     if(realIndex==1){
	//         window.location.href="/x70Plus"
	//     }
	//     if(realIndex==2){
	//         window.location.href="/x95"
	//     }
	//     if(realIndex==3){
	//         window.location.href="/x70"
	//     }
	//     if(realIndex==4){
	//         window.location.href="/x90"
	//     }
	//     if(realIndex==5){
	//         window.location.href="/x90Plus"
	//     }
	// }
	// let realIndexMb = 0
	// modelMbSwiper = new Swiper(".model-mb-swiper", {
	// 	direction: "horizontal",
	// 	loop: true,
	// 	slidesPerView: "auto",
	// 	slideToClickedSlide: true,
	// 	centeredSlides: true,
	// 	spaceBetween: 30,
	// 	on: {
	// 		transitionEnd: function(e) {
	// 			realIndexMb = e.realIndex;
	// 			var modelNameMb = $('#model-name-mb')
	// 			var bigCarMb = $('.big-car-mb img')
	// 			modelNameMb.attr('src', `/images/model/model-name${Number(realIndexMb)}.png`)
	// 			if (realIndexMb == 0) {
	// 				bigCarMb.attr('src', `/images/model/dashing.png`)
	// 			}
	// 			if (realIndexMb == 1) {
	// 				bigCarMb.attr('src', `/images/model/x70plus.png`)
	// 			}
	// 			if (realIndexMb == 2) {
	// 				bigCarMb.attr('src', `/images/model/x95.png`)
	// 			}
	// 			if (realIndexMb == 3) {
	// 				bigCarMb.attr('src', `/images/model/x70.png`)
	// 			}
	// 			if (realIndexMb == 4) {
	// 				bigCarMb.attr('src', `/images/model/x90.png`)
	// 			}
	// 			if (realIndexMb == 5) {
	// 				bigCarMb.attr('src', `/images/model/x70s.png`)
	// 			}
	// 		},
	// 	},
	// });

	// function toCarDetailMb() {
	// 	if (realIndexMb == 0) {
	// 		window.location.href = "/dashing"
	// 	}
	// 	if (realIndexMb == 1) {
	// 		window.location.href = "/x70Plus"
	// 	}
	// 	if (realIndexMb == 2) {
	// 		window.location.href = "/x95"
	// 	}
	// 	if (realIndexMb == 3) {
	// 		window.location.href = "/x70"
	// 	}
	// 	if (realIndexMb == 4) {
	// 		window.location.href = "/x90"
	// 	}
	// 	if (realIndexMb == 5) {
	// 		window.location.href = "/x90Plus"
	// 	}
	// }
	// ScrollReveal().reveal("#model-name", {
	// 	reset: true,
	// 	duration: 1000,
	// 	opacity: 0,
	// 	scale: 1,
	// 	distance: "50px", //动画的距离
	// 	origin: "top",
	// 	easing: "linear",
	// 	beforeReveal: () => {},
	// });
	// ScrollReveal().reveal(".model-name2", {
	// 	reset: true,
	// 	duration: 1000,
	// 	delay: 0,
	// 	opacity: 0,
	// 	scale: 1,
	// 	distance: "60px", //动画的距离
	// 	origin: "top",
	// 	easing: "linear",
	// 	beforeReveal: () => {},
	// });
	// ScrollReveal().reveal("#model-more-btn", {
	// 	reset: true,
	// 	duration: 1000,
	// 	delay: 0,
	// 	opacity: 0,
	// 	scale: 1,
	// 	distance: "70px", //动画的距离
	// 	origin: "top",
	// 	easing: "linear",
	// 	beforeReveal: () => {},
	// });
	// ScrollReveal().reveal("#model-description", {
	// 	reset: true,
	// 	duration: 1000,
	// 	delay: 0,
	// 	opacity: 0,
	// 	scale: 1,
	// 	distance: "70px", //动画的距离
	// 	origin: "top",
	// 	easing: "linear",
	// 	beforeReveal: () => {},
	// });
	// 文化
	// new Swiper(".culture-mb-swiper", {
	// 	direction: "horizontal",
	// 	loop: true,
	// 	slidesPerView: "auto",
	// 	spaceBetween: 25,
	// });
	// video
	// var player, playerMb;
	// player = new Aliplayer({
	// 		id: "science-video",
	// 		// autoplay: true,
	// 		useH5Prism: true,
	// 		width: "100%",
	// 		height: "100%",
	// 		source: "/videos/app.mp4", //播放地址，可以是第三方直播地址，或阿里云直播服务中的拉流地址。
	// 		isLive: false, //是否为直播播放。
	// 		controlBarVisibility: "never",
	// 	},
	// 	function(player) {
	// 		player.mute();
	// 		player.on("cancelFullScreen", function(e) {
	// 			$("#science-video").css("transition", "all 2s");
	// 		});
	// 	}
	// );
	// playerMb = new Aliplayer({
	// 		id: "science-mb-video",
	// 		rePlay: true,
	// 		autoplay: false,
	// 		skinRes: "",
	// 		useH5Prism: true,
	// 		width: "100%",
	// 		cover: "/images/video/cover.jpg",
	// 		height: "100%",
	// 		source: "/videos/app.mp4", //播放地址，可以是第三方直播地址，或阿里云直播服务中的拉流地址。
	// 		isLive: false, //是否为直播播放。
	// 		controlBarVisibility: "always",
	// 	},
	// 	function(player) {
	// 		player.mute();
	// 	}
	// );
	$(window).scroll(function() {
		// var scienceVideoTitle = $(".science-video-title");
		// var scienceVideo = $("#science-video");
		// var a, b;
		// a = $(window).height(); //浏览器窗口高度
		// b = $(window).scrollTop(); //页面滚动的高度
		// // 视频缩放
		// if (a + b > scienceVideo.offset().top) {
		// 	player.play();
		// 	scienceVideoTitle.css("font-size", ".9rem");
		// 	scienceVideo.css("transform", "scale(1)");
		// } else {
		// 	player.pause();
		// 	scienceVideoTitle.css("font-size", ".45rem");
		// 	scienceVideo.css("transform", "scale(0.5)");
		// }
	})

	// function playVideo() {
	// 	$("#science-video").css("transition", "all 0s");
	// 	player.fullscreenService.requestFullScreen();
	// }

	// function play() {
	// 	playerMb.play();
	// 	$('.science-mb-mask').css('display', 'none')
	// }

	// function videoMouseOver() {
	// 	$(".video-btn").css("transform", "scale(1)");
	// }

	// function videoMouseOut() {
	// 	$(".video-btn").css("transform", "scale(0)");
	// }

	// function videoMouseMove(e) {
	// 	$(".video-btn").css({
	// 		left: e.pageX - $(".video-btn").width() / 2 + "px"
	// 	});
	// 	$(".video-btn").css({
	// 		top: e.pageY -
	// 			$(".science-video-box").offset().top +
	// 			$(".video-btn").width() -
	// 			50 +
	// 			"px",
	// 	});
	// }

	// 打开预约试驾
	function openTestDrive() {
		$("body").css("overflow", "hidden");
		$("#drive").css("display", "block");
	}
	
	
