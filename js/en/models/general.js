gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true })

let info = navigator.userAgent;
let isPhone = /mobile/i.test(info);
// 车型旧---------------------------------------
// function changeCar(carname,titlename,el){
// 	$('.bottom ul li').removeClass('active-li')
// 	$('.carModel-color-bottom ul li').removeClass('active-li')
// 	$('.carModel-color-bottom ul li div').css('display', 'none')
// 	var index = $(el).parent().find('li').index(el);
// 	$('.bottom ul li').eq(index).addClass('active-li')
// 	$('.carModel-color-bottom ul li').eq(index).addClass('active-li')
// 	$('.carModel-color-bottom ul li').eq(index).find('div').css('display','block')
// 	if(carname=='Green'){
// 		$('.car-img img').attr('src','/data/tms/website/html/images/carModel/t1/'+carname+'car.png')
// 		$('.car-description').html(titlename)
// 		$('.bottom .title').html(titlename)
// 		$('.car-pc-color .right').css('background','linear-gradient(-30deg, #80b6be, #6199a2)')
// 		$('.right-box .right').css('background','linear-gradient(-30deg, #80b6be, #6199a2)')
// 	}
// 	if(carname=='White'){
// 	  $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t1/'+carname+'car.png')
// 	  $('.car-description').html(titlename)
// 	  $('.bottom .title').html(titlename)
// 	  $('.car-pc-color .right').css('background','linear-gradient(-30deg, #efefef, #ebebeb)')
// 	  $('.right-box .right').css('background','linear-gradient(-30deg, #efefef, #ebebeb)')
// 	}
// 	if(carname=='Silver'){
// 	  $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t1/'+carname+'car.png')
// 	  $('.car-description').html(titlename)
// 	  $('.bottom .title').html(titlename)
// 	  $('.car-pc-color .right').css('background','linear-gradient(-30deg, #b2c1d1, #a5b2be)')
// 	  $('.right-box .right').css('background','linear-gradient(-30deg, #b2c1d1, #a5b2be)')
// 	}
// 	if(carname=='Gold'){
// 	  $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t1/'+carname+'car.png')
// 	  $('.car-description').html(titlename)
// 	  $('.bottom .title').html(titlename)
// 	  $('.car-pc-color .right').css('background','linear-gradient(-30deg, #a9a8a2, #98968c)')
// 	  $('.right-box .right').css('background','linear-gradient(-30deg, #a9a8a2, #98968c)')
// 	}
// 	if(carname=='Black'){
// 	  $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t1/'+carname+'car.png')
// 	  $('.car-description').html(titlename)
// 	  $('.bottom .title').html(titlename)
// 	  $('.car-pc-color .right').css('background','linear-gradient(-30deg, #444343, #0c0c0c)')
// 	  $('.right-box .right').css('background','linear-gradient(-30deg, #444343, #0c0c0c)')
// 	}
//   }


// 车型旧---------------------------------------

$(document).ready(function () {

	var userAgent = window.navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('micromessenger') !== -1) {
		// 确认是微信浏览器
		console.log('用户使用的是微信浏览器');
		$(".noWeixin").hide();
		$(".weixin").show();
	} else {
		// 不是微信浏览器
		console.log('用户使用的不是微信浏览器');
		$(".weixin").hide();
		$(".noWeixin").show();
	}

	var banner = new Swiper('.banner .swiper-container', {
		effect: 'fade',
		loop: true,
		speed: 1000,
		touchRatio: 0,
		observer: true,
		observeParents: true,
		initialSlide: 0,
		// pagination: {
		//     el: '.banner .pagination',
		//     clickable: true,
		// },
	});

	function numCount(className, num) {
		// console.log(className, num)
		// 读秒
		// var curNume = className.attr('data-num')
		var curNume = num
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
				}, 1000, function () {
					className.text(curNume[0] + num)
				})
			} else if (curNume.indexOf('/') >= 0) {
				var curindex = curNume.indexOf('/')
				var num = +curNume.slice(0, curindex)
				className.animateNumber({
					number: num
				}, 1000, function () {
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
				numberStep: function (now, tween) {
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
	function initNumber() {

		var carShowSwiper = new Swiper('.carSwiper', {

			// 如果需要前进后退按钮
			centeredSlides: true,
			speed: 800,
			on: {
				slideChangeTransitionStart: function () {
					//   console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
					//   initNumber(this.activeIndex)
					//   carMenuSwiper.slideTo(this.activeIndex, 1000, false);//切换到第一个slide，速度为1秒
					// console.log(this.previousIndex>this.activeIndex)
					if (this.previousIndex > this.activeIndex) {
						TweenMax.to('#carShow .carSwiper .wheel', 0.94, { rotation: '+=360', ease: Cubic.easeOut })
						// sceneLine.restart();
					}
					else {
						TweenMax.to('#carShow .carSwiper .wheel', 0.94, { rotation: '-=360', ease: Cubic.easeOut })
						// sceneLine.restart();
					}

				},
				slideChangeTransitionEnd: function () {
					colorChange(this.activeIndex)

				},
				init: function (swiper) {

				},
			},
			breakpoints: {
				1013: {  //当屏幕宽度小于等于1280
					slidesPerView: 'auto',
				},
				768: {  //当屏幕宽度小于等于768
					slidesPerView: 1,
				},
				320: {  //当屏幕宽度小于等于320
					slidesPerView: 1,
				}
			}
		})
		$("#carShow .colorL .color").click(function () {
			var index = $(this).index();
			colorChange(index);
			carShowSwiper.slideToLoop(index);
		})
		var tarCon = $(".carShow .parameter .n")
		var le = tarCon.length;
		// console.log("le", le)
		for (var i = 0; i < le; i++) {
			var tar = tarCon.eq(i).find(".num")
			var num = tarCon.eq(i).attr("data-num")
			//    var num=ar[i]
			// var num = tar.attr("data-num");
			console.log("tar", tar, num)
			numCount(tar, num);
		}
	}

	// 如果需要前进后退按钮
	// var interleaveOffset = 0.6; //视差比值

	// var swiperOptions = {
	// 	 	speed: 800,
	// 	 	grabCursor: true,
	// 	 	watchSlidesProgress: true,
	// 	 	mousewheelControl: true,
	// 	 	keyboardControl: true,
	// 		on: {
	// 			slideChangeTransitionStart: function(swiper){
	// 				console.log("ddddd")

	// 			   carShowSwiper.slideTo(swiper.activeIndex, 1000, false);

	// 			},
	// 			progress: function(swiper) {
	// 					  for (var i = 0; i < swiper.slides.length; i++) {
	// 						var slideProgress = swiper.slides[i].progress;
	// 						var innerOffset = swiper.width * interleaveOffset;
	// 						console.log("innerOffset",innerOffset)
	// 						var innerTranslate = slideProgress * innerOffset;
	// 						swiper.slides[i].querySelector(".slide-inner").style.transform =
	// 						  "translate3d(" + innerTranslate + "px, 0, 0)";
	// 					  }      
	// 					},
	// 					touchStart: function(swiper) {
	// 					  for (var i = 0; i < swiper.slides.length; i++) {
	// 						swiper.slides[i].style.transition = "";
	// 					  }

	// 					},
	// 					setTransition: function(swiper, speed) {
	// 					  for (var i = 0; i < swiper.slides.length; i++) {
	// 						swiper.slides[i].style.transition = speed + "ms";
	// 						swiper.slides[i].querySelector(".slide-inner").style.transition =
	// 						  speed + "ms";
	// 					  }
	// 					},	
	// 		  },


	//   }
	//    var carMenuSwiper = new Swiper(".carShow .bg", swiperOptions);


	//   function swiper_blur(dur) {
	//   		console.log( dur)
	// 	var blur = 65;
	// 	$({state: 0}).animate({state: blur}, {
	// 		duration: (dur / 2),
	// 		step: function(now) { 
	// 			$('#blur feGaussianBlur').attr("stdDeviation", now+", 0");
	// 		},
	// 		done: function() {
	// 			$({state: blur}).animate({state: 0}, {
	// 				duration: (dur / 2),
	// 				step: function(now) { 
	// 					$('#blur feGaussianBlur').attr("stdDeviation", now+", 0");
	// 				}
	// 			});
	// 		}
	// 	});
	// }

	function colorChange(index) {
		$("#carShow .colorL .color").removeClass("on");
		$("#carShow .colorL .color").eq(index).addClass("on");
	}



	// carShowSwiper.controller.control = carMenuSwiper;
	// carMenuSwiper.controller.control = carShowSwiper;
	colorChange(0)
	// var carShowline = new TimelineMax({paused: true,onComplete: function() {
	// 	initNumber()
	// }});
	// carShowline.addLabel("carShow")
	// carShowline.add(TweenMax.fromTo('#carShow .title', 1, {autoAlpha: 0,y:-200}, {autoAlpha: 1,y:0,ease:Expo.easeInOut}), 'carShow')
	// .add(TweenMax.fromTo('#carShow .carSwiper', 1, {alpha: 0,x:400}, {alpha:1,x:0,ease:Cubic.easeInOut}), 'carShow')	
	// .add(TweenMax.to('#carShow .carSwiper .wheel', 1, {rotation: -360,ease:Cubic.easeInOut}), 'carShow')	
	// .add(TweenMax.fromTo('#carShow .car_btn',1, {alpha: 0,}, {alpha:1}), 'carShow+=0.6')
	// .add(TweenMax.fromTo('#carShow .parameter', 0.8, {alpha: 0,y:-20}, {alpha:1,y:0}), 'carShow+=1')
	// .add(TweenMax.fromTo('#carShow .colorL', 0.8, {alpha: 0,y:-20}, {alpha:1,y:0}), 'carShow+=1.2')



	// gsap.set("#carShow .title", { yPercent: -200, autoAlpha: 0 });
	// gsap.set("#carShow .carSwiper", { x: 400 });
	// gsap.set("#carShow .carSwiper .wheel", { rotation: 0 });
	// gsap.set("#carShow .car_btn", { autoAlpha: 0 });
	// gsap.set("#carShow .parameter", { y: -20 });
	// gsap.set("#carShow .colorL", { y: -20 });
	// gsap.to("#carShow .title", {
	// 	yPercent: 0, autoAlpha: 1, ease: "none",
		// scrollTrigger: {
		// 	trigger: ".carShow",
		// 	// start: "bottom top",
		// 	end: "bottom bottom",
		// 	//  markers:true,
		// 	scrub: 1,
		// 	onEnter: e => {
		// 		initNumber()
		// 	},
		// }
	// });
	initNumber()
// 	ScrollTrigger.create({
// 		// animation: ".carShow",
// 		ignoreMobileResize: true,
// 		trigger: ".carShow",
// 		tart: "bottom bottom",
// 		end: "+=800",
// 		scrub: 1,
// 		pin: true,
// 	  anticipatePin: 1, // 通常最合适，可以减少或增加该数字以控制钉扎的时间
// 	   onLeaveBack: ()=>{
// 		// t5.progress(0).pause()
// 		//   t5.reverse(0);
// 	//    console.log("123456-----------------onLeaveBack")
// 	  },
// 	   onEnter:()=>{
// 	//    console.log("123456")
	   
// 	   // gsap.to('.startCon .stars',{bottom:'70%', duration:1});
	  
// 	//    t5.progress(0).play();
// 	   },
// 	  onLeave:() => {
// 	//   console.log("123456-----------------onLeave")
// 	  // t10.progress(1).pause()
// 	  },
//   // onUpdate: (self) => {
//   // 	let p=self.progress.toFixed(3)
	  
//   // },
//   })
	// gsap.to("#carShow .carSwiper", {
	// 	x: 0, ease: "none",
	// 	scrollTrigger: {
	// 		trigger: ".carShow",
	// 		// start: "bottom top",
	// 		end: "bottom bottom",
	// 		//  markers:true,
	// 		scrub: 1
	// 	},
	// });
	// gsap.to("#carShow .carSwiper .wheel", {
	// 	rotation: -360, ease: "none",
	// 	scrollTrigger: {
	// 		trigger: ".carShow",
	// 		// start: "bottom top",
	// 		end: "bottom bottom",
	// 		// markers:true,
	// 		scrub: 1
	// 	},
	// });
	// gsap.to("#carShow .car_btn", {
	// 	autoAlpha: 1, delay: 0.6, ease: "none",
	// 	scrollTrigger: {
	// 		trigger: ".carShow",
	// 		// start: "bottom top",
	// 		end: "bottom bottom",
	// 		// markers:true,
	// 		scrub: 1
	// 	},
	// });
	// gsap.to("#carShow .parameter", {
	// 	y: 0, delay: 1, ease: "none",
	// 	scrollTrigger: {
	// 		trigger: ".carShow",
	// 		// start: "bottom top",
	// 		end: "bottom bottom",
	// 		// markers:true,
	// 		scrub: 1
	// 	},
	// });
	// gsap.to("#carShow .colorL", {
	// 	y: 0, delay: 1.2, ease: "none",
	// 	scrollTrigger: {
	// 		trigger: ".carShow",
	// 		// start: "bottom top",
	// 		end: "bottom bottom",
	// 		// markers:true,
	// 		scrub: 1
	// 	},
	// });
	// gsap.set(".listP0 .bigTitle .t", { yPercent:-100,autoAlpha: 0});

	// let t2 = gsap.timeline({
	//   scrollTrigger: {
	//     trigger: ".carShow",
	// 	// ignoreMobileResize: true,
	//     pin: true, // pin the trigger element while active
	//     start: "90% bottom", // when the top of the trigger hits the top of the viewport
	// 	end: "+=500", // end after scrolling 500px beyond the start
	//     // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
	// 	markers:true,
	// 	 onEnter: e => {
	// 		carShowline.play();

	// 	 },
	//   },
	// });

	var overviewPListSwiper = new Swiper('.listP0 .overviewPList', {

		slidesPerView: 1,
		// spaceBetween: 30,
		loop: true,
		speed: 1500,
		autoplay: {
			delay: 4000,//1秒切换一次
		},
		navigation: {
			nextEl: ".listP0 .swiper-button-next",
			prevEl: ".listP0 .swiper-button-prev",
		},
		on: {
			slideChangeTransitionStart: function () {
				// console.log(this.$el.parent().find(".wordCon li"))
				this.$el.parent().find(".wordCon li").removeClass('on');
				this.$el.parent().find(".wordCon li").eq(this.realIndex).addClass('on');
			},
			slideChangeTransitionEnd: function () {

			},
		},

	})

	//   let t3_a=gsap.timeline({paused: true,onComplete: function() {
	// 	$(".listP0 .wordCon li").removeClass('on');
	// 	 $(".listP0 .wordCon li").eq(0).addClass('on');
	// 	}})
	// 	.fromTo('.listP0 .bigTitle .con', {y:-150,autoAlpha: 0,duration: 1}, {y: 0,autoAlpha: 1,duration: 1,ease:Cubic.easeInOut}, 0)
	// 	.fromTo('.listP0 .bigTitle .t', {y:-150,autoAlpha: 0,duration: 1}, {y: 0,autoAlpha:1,duration: 1,ease:Cubic.easeInOut}, 0.15)


	// 	let t3 = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: ".listP0",
	// 			ignoreMobileResize: true,
	// 			pin: true, // pin the trigger element while active
	// 			start: "top top", // when the top of the trigger hits the top of the viewport
	// 			end: "+=400", // end after scrolling 500px beyond the start
	// 			scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
	// 			onEnter: e => {
	// 					t3_a.progress(0).play();
	// 			},
	// 			onLeaveBack: ()=>{
	// 				t3_a.reverse()
	// 			},
	// 		},
	// 	});

	// gsap.set(".listP0 .bigTitle .con", { yPercent: -100, autoAlpha: 0 });
	// gsap.set(".listP0 .bigTitle .t", { yPercent: -100, autoAlpha: 0 });
	// gsap.to(".listP0 .bigTitle .con", {
	// 	yPercent: 0, autoAlpha: 1, ease: "none",
	// 	scrollTrigger: {
	// 		trigger: ".listP0",
	// 		// start: "bottom top",
	// 		end: "bottom bottom",
	// 		//  markers:true,
	// 		scrub: 1
	// 	},
	// });
	// gsap.to(".listP0 .bigTitle .t", {
	// 	yPercent: 0, autoAlpha: 1, ease: "none", delay: 0.2,
	// 	scrollTrigger: {
	// 		trigger: ".listP0",
	// 		//   start: "top top",
	// 		end: "bottom bottom",
	// 		//   markers:true,
	// 		scrub: 1
	// 	},
	// });


	var configurationSwiper = new Swiper(".configuration .picList", {
		// slidesPerView: "auto",
		// spaceBetween: 30,
		// centeredSlides: true,
		// slidesPerGroupSkip: 1,
		loop: true,
		slidesPerView: "auto",
		spaceBetween: 30,
		centeredSlides: true,
		centeredSlidesBounds: true,
		grabCursor: true,
		loopPreventsSlide: true,
		// scrollbar: {
		//   el: ".configuration .swiper-scrollbar",
		// },
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
		navigation: {
			nextEl: '.configuration .swiper-button-next',
			prevEl: '.configuration .swiper-button-prev',
		},
	});
	// var configurationSwiper = new Swiper(".configuration .picList", {
	// 	slidesPerView: "auto",
	// 	spaceBetween: 30,
	// 	slidesPerGroupSkip: 1,
	// 	grabCursor: true,
	// 	scrollbar: {
	// 	  el: ".configuration .swiper-scrollbar",
	// 	},
	// 	navigation: {
	// 		nextEl: '.configuration .swiper-button-next',
	// 		prevEl: '.configuration .swiper-button-prev',
	// 	},
	//   });

	//   let t4_a=gsap.timeline({paused: true,onComplete: function() {

	// 	}})
	// 	.fromTo('.configuration .bigTitle .con', {y:-150,autoAlpha: 0,duration: 1}, {y: 0,autoAlpha: 1,duration: 1,ease:Cubic.easeInOut}, 0)
	// 	.fromTo('.configuration .bigTitle .t', {y:-150,autoAlpha: 0,duration: 1}, {y: 0,autoAlpha:1,duration: 1,ease:Cubic.easeInOut}, 0.15)


	// 	let t4 = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: ".configuration",
	// 			ignoreMobileResize: true,
	// 			pin: true, // pin the trigger element while active
	// 			start: "top top", // when the top of the trigger hits the top of the viewport
	// 			end: "+=400", // end after scrolling 500px beyond the start
	// 			scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

	// 			onEnter: e => {
	// 				t4_a.progress(0).play();
	// 			},
	// 			onLeaveBack: ()=>{		
	// 				t4_a.reverse()
	// 			},
	// 		},
	// 	});

	// gsap.set(".configuration .bigTitle .con", { yPercent: -100, autoAlpha: 0 });
	// gsap.set(".configuration .bigTitle .t", { yPercent: -100, autoAlpha: 0 });
	// gsap.to(".configuration .bigTitle .con", {
	// 	yPercent: 0, autoAlpha: 1, ease: "none",
	// 	scrollTrigger: {
	// 		trigger: ".configuration",
	// 		// start: "bottom top",
	// 		end: "bottom bottom",
	// 		//  markers:true,
	// 		scrub: 1
	// 	},
	// });
	// gsap.to(".configuration .bigTitle .t", {
	// 	yPercent: 0, autoAlpha: 1, ease: "none", delay: 0.2,
	// 	scrollTrigger: {
	// 		trigger: ".configuration",
	// 		//   start: "top top",
	// 		end: "bottom bottom",
	// 		//   markers:true,
	// 		scrub: 1
	// 	},
	// });

	var overviewPListSwiper = new Swiper('.listP1 .overviewPList', {

		slidesPerView: 1,
		// spaceBetween: 30,
		speed: 1500,
		autoplay: {
			delay: 4000,//1秒切换一次
		},
		loop: true,
		navigation: {
			nextEl: ".listP1 .swiper-button-next",
			prevEl: ".listP1 .swiper-button-prev",
		},
		on: {
			slideChangeTransitionStart: function () {
				$(".listP1 .wordCon li").removeClass('on');
				$(".listP1 .wordCon li").eq(this.realIndex).addClass('on');
			},
			slideChangeTransitionEnd: function () {
			},
		},

	})

	//   let t5_a=gsap.timeline({paused: true,onComplete: function() {
	// 	}})
	// 	.fromTo('.listP1 .bigTitle .con', {y:-150,autoAlpha: 0,duration: 1}, {y: 0,autoAlpha: 1,duration: 1,ease:Cubic.easeInOut}, 0)
	// 	.fromTo('.listP1 .bigTitle .t', {y:-150,autoAlpha: 0,duration: 1}, {y: 0,autoAlpha:1,duration: 1,ease:Cubic.easeInOut}, 0.15)
	// 	let t5 = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: ".listP1",
	// 			ignoreMobileResize: true,
	// 			pin: true, // pin the trigger element while active
	// 			start: "top top", // when the top of the trigger hits the top of the viewport
	// 			end: "+=400", // end after scrolling 500px beyond the start
	// 			scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
	// 			// markers: true,
	// 			onEnter: e => {
	// 				t5_a.progress(0).play();
	// 			},
	// 			onLeaveBack: ()=>{		
	// 				t5_a.reverse()
	// 			},
	// 		},
	// 	});
	// gsap.set(".listP1 .bigTitle .con", { yPercent: -100, autoAlpha: 0 });
	// gsap.set(".listP1 .bigTitle .t", { yPercent: -100, autoAlpha: 0 });
	// gsap.to(".listP1 .bigTitle .con", {
	// 	yPercent: 0, autoAlpha: 1, ease: "none",
	// 	scrollTrigger: {
	// 		trigger: ".listP1",
	// 		// start: "bottom top",
	// 		end: "bottom bottom",
	// 		//  markers:true,
	// 		scrub: 1
	// 	},
	// });
	// gsap.to(".listP1 .bigTitle .t", {
	// 	yPercent: 0, autoAlpha: 1, ease: "none", delay: 0.2,
	// 	scrollTrigger: {
	// 		trigger: ".listP1",
	// 		//   start: "top top",
	// 		end: "bottom bottom",
	// 		//   markers:true,
	// 		scrub: 1
	// 	},
	// });

	//   var vPicSwiper = new Swiper(".vPic .swiper", {
	// 	slidesPerView: 4,
	// 	navigation: {
	// 		nextEl: ".vPic .swiper-button-next",
	// 		prevEl: ".vPic .swiper-button-prev",
	// 	  },
	// 	spaceBetween: 30,
	// 	on: {
	// 		click: function (swiper) {
	// 		  let url = $(swiper.clickedSlide).find('.playbtn').attr('video-url');
	// 		  playVideo(url);
	// 		},
	// 	  },
	// 	breakpoints: {
	// 		1013: {  //当屏幕宽度小于等于1280
	// 			slidesPerView: 4,
	// 			spaceBetween: 30,
	// 		},
	// 		768: {  //当屏幕宽度小于等于768
	// 		  slidesPerView: 2,
	// 		  spaceBetween: 10,
	// 		  slidesPerView:"auto",
	// 			centeredSlides: true,
	// 		},
	// 		320: {  //当屏幕宽度小于等于320
	// 		  slidesPerView:2,
	// 		  spaceBetween: 10,
	// 		  slidesPerView:"auto",
	// 		  centeredSlides: true,
	// 		}
	// 	  } 
	//   });

	function isVideoLink(href) {
		const videoExtensions = ['.mp4', '.webm', '.ogg'];
		return videoExtensions.some(ext => href.toLowerCase().endsWith(ext));
	}

	$(".model-test-drive").css("display", "none");
	$('.about-video-mask .close').click(closeMask)
	var isv;
	function playVideo(url) {

		isv = isVideoLink(url)
		console.log(isv)
		$('.about-video-mask').show();

		if (isv) {
			player = new Aliplayer(
				{
					id: "play-video",
					autoplay: true,
					useH5Prism: true,
					rePlay: true,
					width: "100%",
					height: "100%",
					source: url, //播放地址，可以是第三方直播地址，或阿里云直播服务中的拉流地址。
					isLive: false, //是否为直播播放。
					controlBarVisibility: "hover",
				},
			);
		}
		else {
			var img = "<img src=" + url + ">"
			// $(".play-video").
			$('#play-video').html(img);
		}

	}
	$(".vPic .picbox").click(function () {
		let url = $(this).find('.playbtn').attr('video-url');
		playVideo(url);
	})


	function closeMask() {
		$('.about-video-mask').hide();
		//   console.log($('#play-video').find('img'))
		if (isv) {
			// $('#play-video').empty();
			player.dispose();
		}
		else {

			$('#play-video').find('img').remove();
		}

	}



	// let t6_a=gsap.timeline({paused: true,onComplete: function() {

	// 	}})
	// 	.fromTo('.vPic .title', {y:-150,autoAlpha: 0,duration: 1}, {y: 0,autoAlpha: 1,duration: 1,ease:Cubic.easeInOut}, 0)
	// 	let t6 = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: ".vPic",
	// 			ignoreMobileResize: true,
	// 			pin: true, // pin the trigger element while active
	// 			start: "top top", // when the top of the trigger hits the top of the viewport
	// 			end: "+=400", // end after scrolling 500px beyond the start
	// 			scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
	// 			// markers: true,
	// 			onEnter: e => {
	// 				t6_a.progress(0).play();
	// 			},
	// 			onLeaveBack: ()=>{		
	// 				t6_a.reverse()
	// 			},
	// 		},
	// 	});
	// gsap.set(".vPic .title", { yPercent: -100, autoAlpha: 0 });
	// gsap.to(".vPic .title", {
	// 	yPercent: 0, autoAlpha: 1, ease: "none",
	// 	scrollTrigger: {
	// 		trigger: ".vPic",
	// 		//   start: "top top",
	// 		end: "bottom bottom",
	// 		//   markers:true,
	// 		scrub: 1
	// 	},
	// });

   //--------------------------------------车型旧文件
//    var ncounter1=1998

// console.log("(ScrollTrigger.isInViewport(element))",ScrollTrigger.isInViewport(".car-color-pc"))

function setBar(tar,width){
	gsap.fromTo(tar, {width:"0",ease: "Power0.out"}, {width:width,duration: 1,ease: "Power0.out"})
}

function showTar(){
	 var carColorL=$(".carColorContainer .top .box").length;
	//  var numAr=[]
   for(var i=0;i<carColorL;i++)
   {
	  var tar=$(".carColorContainer .top .box").eq(i);
	  var counter=tar.find(".counter");
	   var num=counter.attr("data-num");
	   var line=tar.find(".active-line");
	   var lineN=line.attr("data-line");
	   numCount(counter,num);
	   setBar(line,lineN)
   }
}
// $(window).on('scroll',function(){
// 	var w=$(document).scrollTop();//获取滚动条到顶部的垂直高度
// 	// console.log($("#car-color-pc").offset().top)
// }); 
 var showN=true
$(window).scroll(function() {
	// 获取目标元素的位置
	const targetElement =$("#car-color");
	const elementTop = targetElement.offset().top; // 元素顶部距离页面顶部的距离
	const elementBottom = elementTop + targetElement.outerHeight(); // 元素底部距离页面顶部的距离

	// 获取当前滚动位置
	const scrollTop = $(window).scrollTop(); // 当前滚动条距离页面顶部的距离
	const windowHeight = $(window).height(); // 窗口高度

	// 判断是否滚动到目标区域
	if (scrollTop + windowHeight >= elementTop && scrollTop <= elementBottom) {
		// targetElement.addClass("highlight"); // 滚动到目标区域时添加高亮样式
		// console.log("已滚动到目标区域！");
		if(showN)
		{
			showTar()
			showN=false
		}
		
	} else {
		showN=true
		// targetElement.removeClass("highlight"); // 离开目标区域时移除高亮样式
	}
});


//    ScrollReveal().reveal(".counter1", {
// 	reset: true,
// 	beforeReveal: () => {
// 		anime({
// 			targets: ".counter1",
// 			innerHTML: [0, ncounter1],
// 			round: 1,
// 			easing: "linear",
// 		});
// 		anime({
// 			targets: ".active-line1",
// 			width: "80%",
// 			easing: "linear",
// 		});
// 	},
// 	beforeReset: function (domEl) {
// 		anime({
// 			targets: ".active-line1",
// 			width: "0",
// 		});
// 	},
//   });
//   ScrollReveal().reveal(".counter1_1", {
// 	reset: true,
// 	beforeReveal: () => {
// 		anime({
// 			targets: ".counter1_1",
// 			innerHTML: [0, 1998],
// 			round: 1,
// 			easing: "linear",
// 		});
// 	},
// 	beforeReset: function (domEl) {
// 		anime({
// 			targets: ".active-line1",
// 			width: "0",
// 		});
// 	},
//   });
//   ScrollReveal().reveal(".counter2", {
// 	reset: true,
// 	beforeReveal: () => {
// 		anime({
// 			targets: ".counter2",
// 			innerHTML: [0, 187],
// 			round: 1,
// 			easing: "linear",
// 		});
// 		anime({
// 			targets: ".active-line2",
// 			width: "65%",
// 			easing: "linear",
// 		});
// 	},
// 	beforeReset: function (domEl) {
// 		anime({
// 			targets: ".active-line2",
// 			width: "0",
// 		});
// 	},
//   });
//   ScrollReveal().reveal(".counter2_2", {
// 	reset: true,
// 	beforeReveal: () => {
// 		anime({
// 			targets: ".counter2_2",
// 			innerHTML: [0, 187],
// 			round: 1,
// 			easing: "linear",
// 		});
// 	},
// 	beforeReset: function (domEl) {
// 		anime({
// 			targets: ".active-line2",
// 			width: "0",
// 		});
// 	},
//   });
//   ScrollReveal().reveal(".counter3", {
// 	reset: true,
// 	beforeReveal: () => {
// 		anime({
// 			targets: ".counter3",
// 			innerHTML: [0, 390],
// 			round: 10,
// 			easing: "linear",
// 		});
// 		anime({
// 			targets: ".active-line3",
// 			width: "80%",
// 			easing: "linear",
// 		});
// 	},
// 	beforeReset: function (domEl) {
// 		anime({
// 			targets: ".active-line3",
// 			width: "0",
// 		});
// 	},
//   });
//   ScrollReveal().reveal(".counter3_3", {
// 	reset: true,
// 	beforeReveal: () => {
// 		anime({
// 			targets: ".counter3_3",
// 			innerHTML: [0, 390],
// 			round: 10,
// 			easing: "linear",
// 		});
// 	},
// 	beforeReset: function (domEl) {
// 		anime({
// 			targets: ".active-line3",
// 			width: "0",
// 		});
// 	},
//   });
$(".carColorContainer .colorbtn li").click(function(){
	var index=$(this).index();
	var name=$(this).attr("data-name");
	var color=$(this).attr("data-color");
	// console.log(" li",index,name,color);
	$(".carColorContainer .colorbtn li").removeClass("on");
	$(this).addClass("on");
	$(".carColorContainer .bottom .title").html(name);
	$(".carColorContainer .right .car-description").html(name);
	$(".carColorContainer .right .car-img .car").hide();
	$(".carColorContainer .right .car-img .car").eq(index).show();
	if(isPhone)
	{
    //   console.log("isPhone",isPhone)
	  $(".carColorContainer .right").css('background',"none");
	  $(".carColorContainer .right .graphic").css('background',color);
	  $(".carColorContainer .bottom .title").hide();
	  $(".carColorContainer .bottom .colorbtn li span").html("");
	  $(".carColorContainer .bottom .colorbtn li").eq(index).find("span").html(name)
	}
	else{
		// console.log("!isPhone",color)
		$(".carColorContainer .right .graphic").css('background',"none");
		$(".carColorContainer .right").css('background',color);
		$(".carColorContainer .bottom .title").show();
		$(".carColorContainer .bottom .colorbtn li span").hide();
	}

	
	
})
  

  $('.colorbtn li').click(function () {
    var index = $('.colorbtn li').index(this);
    $('.car img').css({ 'z-index': 0 });
    $('.car img').not($('.car img').eq(index)[0]).fadeOut(300);
    $('.car img').eq(index);
    $('.car img').eq(index).css({ 'z-index': 1 });
    $('.car img').eq(index).finish().fadeIn(300);
    $('.colorbtn li').removeClass('on');
    $(this).addClass('on');
  });
  $('.colorbtn li').eq(0).click();
  let carSwiper = new Swiper('#car-model-swiper', {
    loop: true,
    autoplay:true,
    pagination: {
      el: ".car-swiper-pagination",
      clickable :true,
    },
  })
  
//--------------------------------------车型旧文件
	new WOW().init();

});