ScrollReveal().reveal(".counter1", {
  reset: true,
  beforeReveal: () => {
      anime({
          targets: ".counter1",
          innerHTML: [0, 1498],
          round: 1,
          easing: "linear",
      });
      anime({
          targets: ".active-line1",
          width: "80%",
          easing: "linear",
      });
  },
  beforeReset: function (domEl) {
      anime({
          targets: ".active-line1",
          width: "0",
      });
  },
});
ScrollReveal().reveal(".counter1_1", {
  reset: true,
  beforeReveal: () => {
      anime({
          targets: ".counter1_1",
          innerHTML: [0, 1998],
          round: 1,
          easing: "linear",
      });
  },
  beforeReset: function (domEl) {
      anime({
          targets: ".active-line1",
          width: "0",
      });
  },
});
ScrollReveal().reveal(".counter2", {
  reset: true,
  beforeReveal: () => {
      anime({
          targets: ".counter2",
          innerHTML: [0, 135],
          round: 1,
          easing: "linear",
      });
      anime({
          targets: ".active-line2",
          width: "75%",
          easing: "linear",
      });
  },
  beforeReset: function (domEl) {
      anime({
          targets: ".active-line2",
          width: "0",
      });
  },
});
ScrollReveal().reveal(".counter2_2", {
  reset: true,
  beforeReveal: () => {
      anime({
          targets: ".counter2_2",
          innerHTML: [0, 187],
          round: 1,
          easing: "linear",
      });
  },
  beforeReset: function (domEl) {
      anime({
          targets: ".active-line2",
          width: "0",
      });
  },
});
ScrollReveal().reveal(".counter3", {
  reset: true,
  beforeReveal: () => {
      anime({
          targets: ".counter3",
          innerHTML: [0, 290],
          round: 10,
          easing: "linear",
      });
      anime({
          targets: ".active-line3",
          width: "60%",
          easing: "linear",
      });
  },
  beforeReset: function (domEl) {
      anime({
          targets: ".active-line3",
          width: "0",
      });
  },
});
ScrollReveal().reveal(".counter3_3", {
  reset: true,
  beforeReveal: () => {
      anime({
          targets: ".counter3_3",
          innerHTML: [0, 390],
          round: 10,
          easing: "linear",
      });
  },
  beforeReset: function (domEl) {
      anime({
          targets: ".active-line3",
          width: "0",
      });
  },
});
var carIndex = 1
var isMobile=window.innerWidth<1012?true:false;
function changeCar(carname,titlename,el){
  $('.bottom ul li').removeClass('active-li')
  $('.carModel-color-bottom ul li').removeClass('active-li')
  $('.carModel-color-bottom ul li div').css('display', 'none')
  var index = $(el).parent().find('li').index(el);
  $('.bottom ul li').eq(index).addClass('active-li')
  $('.carModel-color-bottom ul li').eq(index).addClass('active-li')
  $('.carModel-color-bottom ul li').eq(index).find('div').css('display','block')
  if(carname=='Highway-Gray'){
      $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t2/'+carname+'car.png')
      $('.car-description').html(titlename)
      $('.bottom .title').html(titlename)
      $('.car-pc-color .right').css('background','linear-gradient(-30deg, #495b70, #617081)')
      $('.right-box .right').css('background','linear-gradient(-30deg, #495b70, #617081)')
  }
  if(carname=='Night-Black'){
    $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t2/'+carname+'car.png')
    $('.car-description').html(titlename)
    $('.bottom .title').html(titlename)
    $('.car-pc-color .right').css('background','linear-gradient(-30deg, #1f2329, #34363a)')
    $('.right-box .right').css('background','linear-gradient(-30deg, #1f2329, #34363a)')
  }
  if(carname=='Sun-Orange'){
    $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t2/'+carname+'car.png')
    $('.car-description').html(titlename)
    $('.bottom .title').html(titlename)
    $('.car-pc-color .right').css('background','linear-gradient(-30deg, #a3291f, #b33226)')
    $('.right-box .right').css('background','linear-gradient(-30deg, #a3291f, #b33226)')
  }
  if(carname=='Sand'){
    $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t2/'+carname+'car.png')
    $('.car-description').html(titlename)
    $('.bottom .title').html(titlename)
    $('.car-pc-color .right').css('background','linear-gradient(-30deg, #746a53, #8d8066)')
    $('.right-box .right').css('background','linear-gradient(-30deg, #746a53, #8d8066)')
  }
  if(carname=='Misty-Cyan'){
    $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t2/'+carname+'car.png')
    $('.car-description').html(titlename)
    $('.bottom .title').html(titlename)
    $('.car-pc-color .right').css('background','linear-gradient(-30deg, #4d7094, #608caa)')
    $('.right-box .right').css('background','linear-gradient(-30deg, #4d7094, #608caa)')
  }
  if(carname =='Lime-Green'){
    $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t2/'+carname+'car.png')
    $('.car-description').html(titlename)
    $('.bottom .title').html(titlename)
    $('.car-pc-color .right').css('background','linear-gradient(-30deg, #9dac07, #d8e851)')
    $('.right-box .right').css('background','linear-gradient(-30deg, #9dac07, #d8e851)')
  }
  if(carname=='Silver-Snow'){
    $('.car-img img').attr('src','/data/tms/website/html/images/carModel/t2/'+carname+'car.png')
    $('.car-description').html(titlename)
    $('.bottom .title').html(titlename)
    $('.car-pc-color .right').css('background','linear-gradient(-30deg, #7e8a98, #a3acb6)')
    $('.right-box .right').css('background','linear-gradient(-30deg, #7e8a98, #a3acb6)')
  }
}
// car-color--end
var ar = []
$(document).ready(function () {
  
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
  let page1Swiper = new Swiper('.page1-box', {
    loop: true,
    navigation: {
      nextEl: '#page1 .swiper-button-next',
      prevEl: '#page1 .swiper-button-prev',
    },
  })
  let slidesPerViewNum = 1.5
  let page5slidesPerViewNum = 4
  let page5spaceBetween = 30
  if (isMobile) { 
    slidesPerViewNum=1
    page5slidesPerViewNum = 1.1;
    page5spaceBetween = 20;
  }
  let page2Swiper =initpage2Swiper()
  let page3Swiper = new Swiper('.page3-box', {
    loop: true,
    navigation: {
      nextEl: '#page3 .swiper-button-next',
      prevEl: '#page3 .swiper-button-prev',
    },
  })

  let page4Swiper = initpage4Swiper()
  let page5Swiper = initpage5Swiper()
  $(window).resize(function () { 
    isMobile = window.innerWidth < 1012 ? true : false;
    if (isMobile) { 
      slidesPerViewNum = 1;
      page5slidesPerViewNum = 1.1;
      page5spaceBetween = 20
      page2Swiper.destroy();
      page2Swiper = initpage2Swiper()
      page4Swiper.destroy();
      page4Swiper = initpage4Swiper()
      page5Swiper.destroy();
      page5Swiper = initpage5Swiper()
    } else {
      slidesPerViewNum = 1.5;
      page5slidesPerViewNum = 4;
      page5spaceBetween = 30
      page2Swiper.destroy();
      page2Swiper = initpage2Swiper()
      page4Swiper.destroy();
      page4Swiper = initpage4Swiper()
      page5Swiper.destroy();
      page5Swiper = initpage5Swiper()
    }
   
  });
  function initpage2Swiper(){
    return new Swiper('.page2-box', {
      loop: true,
      slidesPerView: slidesPerViewNum,
      centeredSlides: true,
      centeredSlidesBounds: true,
      pagination: {
        el: "#page2 .swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: '#page2 .swiper-button-next',
        prevEl: '#page2 .swiper-button-prev',
      },
    })
  }
  function initpage4Swiper(){
    return  new Swiper('.page4-box', {
      loop: true,
      slidesPerView: slidesPerViewNum,
      centeredSlides: true,
      centeredSlidesBounds: true,
      pagination: {
        el: "#page4 .swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: '#page4 .swiper-button-next',
        prevEl: '#page4 .swiper-button-prev',
      },
    })
  }
  function initpage5Swiper(){
    return  new Swiper('.page5-box', {
      loop: true,
      slidesPerView: page5slidesPerViewNum,
      spaceBetween : page5spaceBetween,
      navigation: {
        nextEl: '#page5 .swiper-button-next',
        prevEl: '#page5 .swiper-button-prev',
      },
      on: {
        click: function (swiper) {
          let url = $(swiper.clickedSlide).find('.playbtn').attr('video-url');
          playVideo(url);
        },
      }
    })
  }
  $('.about-video-mask .close').click(closeMask)
  function  playVideo(url) {
    $('.about-video-mask').show();
    player = new Aliplayer(
      {
        id: "play-video",
        autoplay: true,
        useH5Prism: true,
        rePlay: true,
        width: "100%",
        height: "100%",
        source:  url, //播放地址，可以是第三方直播地址，或阿里云直播服务中的拉流地址。
        isLive: false, //是否为直播播放。
        controlBarVisibility: "hover",
      },
    );
  }
  function closeMask() {
    $('.about-video-mask').hide();
    player.dispose();
  }
})


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  // colorbox
  gsap.set('#car-color-pc .move-box', { y: '-40%', })
  var profileMaster = gsap.timeline();
  profileMaster.to("#car-color-pc .move-box", { y: '40%', ease: "none" })
  ScrollTrigger.create({
    animation: profileMaster,
    trigger: '#car-color-pc',
    start: "top-=80% top",
    end: 'bottom-=30% top',
    scrub: true,
    // //markers: true,
    invalidateOnRefresh: true,
    anticipatePin: 1
    });
  gsap.fromTo("#car-color-pc .txtbox", { y: "-=5%" , opacity: 0  }, {
    scrollTrigger: {
    trigger: '#car-color-pc',
    scrub: true,
    start: "top-=20% top",
    end: 'center center',
      // //markers: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      onLeave: ({progress, direction, isActive}) => console.log('car-color-pconLeave',progress, direction, isActive)
    },
    y: '0', opacity: 1 , ease: "none"
  })
  gsap.fromTo("#page1 .move-box",{ y: '-40%'}, {
    scrollTrigger: {
    trigger: '#page1',
    scrub: true,
    start:  "top-=80% top",
      end: 'top top',
      //markers: true,
    },
    y: '0' , ease: "none"
  })
  
  
//----------------------------------------------------------------------------------
function numCount(className,num) {
  console.log(className,num)
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
  function initNumber() {
  
  // var tarCon = $(".list li").eq(index).find(".num_con")
  // var carSwiper=$(".carShow .carSwiper .swiper-slide").eq(index);
  // var m0=carSwiper.attr("data-num0");
  // var m1=carSwiper.attr("data-num1");
  // var m2=carSwiper.attr("data-num2");
  // var ar=[m0,m1,m2]
  var tarCon=$(".carShow .parameter .n")
  var le = tarCon.length;
  // console.log("le", le)
  for (var i = 0; i < le; i++) {
    var tar = tarCon.eq(i).find(".num")
    var num = tarCon.eq(i).attr("data-num")
    //    var num=ar[i]
    // var num = tar.attr("data-num");
    console.log("tar", tar, num)
    numCount(tar,num);
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
  
function colorChange(index){
  $("#carShow .colorL .color").removeClass("on");
  $("#carShow .colorL .color").eq(index).addClass("on");
}


var carShowSwiper = new Swiper ('.carSwiper', {
  
  // 如果需要前进后退按钮
  slidesPerView: 3,
  centeredSlides: true,
  speed:800,
  on: {
    slideChangeTransitionStart: function(){
    //   console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
    //   initNumber(this.activeIndex)
    //   carMenuSwiper.slideTo(this.activeIndex, 1000, false);//切换到第一个slide，速度为1秒
    // console.log(this.previousIndex>this.activeIndex)
      if(this.previousIndex>this.activeIndex)
      {
        TweenMax.to('#carShow .carSwiper .wheel',0.94, {rotation: '+=360', ease:Cubic.easeOut})
        // sceneLine.restart();
      }
      else
      {
        TweenMax.to('#carShow .carSwiper .wheel',0.94, {rotation: '-=360', ease:Cubic.easeOut})
        // sceneLine.restart();
      }
    
    },
    slideChangeTransitionEnd: function(){
      colorChange(this.activeIndex)
      
    },
    init: function(swiper){
      
    }, 
    },
    breakpoints: {
    1013: {  //当屏幕宽度小于等于1280
      slidesPerView: 3,
    },
    768: {  //当屏幕宽度小于等于768
      slidesPerView: 1,
    },
    320: {  //当屏幕宽度小于等于320
      slidesPerView:1,
    }
    } 
  })
  $("#carShow .colorL .color").click(function(){
  var index=$(this).index();
  colorChange(index);
  carShowSwiper.slideToLoop(index);
}) 
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
  


  gsap.set("#carShow .title", { yPercent:-200,autoAlpha: 0});	
  gsap.set("#carShow .carSwiper", {x:400});
  gsap.set("#carShow .carSwiper .wheel", { rotation:0});
  gsap.set("#carShow .car_btn", { autoAlpha: 0});
  gsap.set("#carShow .parameter", { y:-20});
  gsap.set("#carShow .colorL", { y:-20});
  gsap.to("#carShow .title", {yPercent: 0,autoAlpha: 1,ease: "none",
    scrollTrigger: {
    trigger: ".carShow",
    // start: "bottom top",
    end: "bottom bottom",
    //  markers:true,
    scrub: 1,
    onEnter: e => {
      initNumber()
     },
    }, 
  });	
  gsap.to("#carShow .carSwiper", {x:0,ease:"none",
    scrollTrigger: {
    trigger: ".carShow",
    // start: "bottom top",
    end: "bottom bottom",
    //  markers:true,
    scrub: 1
    }, 
  });
  gsap.to("#carShow .carSwiper .wheel", {rotation: -360,ease:"none",
    scrollTrigger: {
    trigger: ".carShow",
    // start: "bottom top",
    end: "bottom bottom",
    // markers:true,
    scrub: 1
    }, 
  });
  gsap.to("#carShow .car_btn", {autoAlpha: 1,delay:0.6,ease:"none",
    scrollTrigger: {
    trigger: ".carShow",
    // start: "bottom top",
    end: "bottom bottom",
    // markers:true,
    scrub: 1
    }, 
  });
  gsap.to("#carShow .parameter", {y:0,delay:1,ease:"none",
    scrollTrigger: {
    trigger: ".carShow",
    // start: "bottom top",
    end: "bottom bottom",
    // markers:true,
    scrub: 1
    }, 
  });
  gsap.to("#carShow .colorL", {y:0,delay:1.2,ease:"none",
    scrollTrigger: {
    trigger: ".carShow",
    // start: "bottom top",
    end: "bottom bottom",
    // markers:true,
    scrub: 1
    }, 
  });
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

//=====--------------------------------------------------------------------------

  // var sideitemPic1 = $("#page1 .sideBox .sideitem").eq(0).find('img')[0]
  // var tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#page1",
	// 	scrub: 1,
	// 	pin: true,
	//     start: "top top",
  //     end: "+=1000",
  //           pinSpacing: true,
  //     fastScrollEnd: true,
	// 	snap: {
	// 	  snapTo: "labels", // snap to the closest label in the timeline
	// 	  duration: { min: 0.2, max: 2 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
	// 	  delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
	// 	  ease: "power3.inOut", // the ease of the snap animation ("power3" by default)
	// 	},
  //   }
  // });
  //   tl.addLabel("start")
  //   .fromTo(sideitemPic1, { scale: 0.4 }, {
  //     scale: 1, duration:1, ease: "power2.out"
  //   })
  //   .addLabel("s0")
  //   .to('#page1 .sideBox', {
  //     y: '-100vh',
  //     duration: 1, ease: "power2.out"
  //   }, ">")
  //   .to('#page1 .sideBox .move-box-side0', {
  //     y: '40%',
  //     duration: 1, ease: "none"
  //   }, "<")
  //   .from('#page1 .sideBox .move-box-side1', {
  //     y: '-40%',
  //     duration: 1, ease: "power2.out"
  //   }, "<")
  //   .addLabel("s1")
  //   .to('#page1 .sideBox', {
  //     y: '-200vh',
  //     duration: 1, ease: "power2.out"
  //   }, ">")
  //   .to('#page1 .sideBox .move-box-side1', {
  //     y: '40%',
  //     duration: 1, ease: "none"
  //   }, "<")
  //   .from('#page1 .sideBox .move-box-side2', {
  //     y: '-40%',
  //     duration: 1, ease: "power2.out"
  //   }, "<")
  //   .addLabel("s2")
  //   .to('#page1 .sideBox', {
  //     y: '-300vh',
  //     duration: 1, ease: "power2.out"
  //   }, ">")
  //   .to('#page1 .sideBox .move-box-side2', {
  //     y: '40%',
  //     duration: 1, ease: "none"
  //   }, "<")
  //   .from('#page1 .sideBox .move-box-side3', {
  //     y: '-40%',
  //     duration: 1, ease: "power2.out"
  //   }, "<")
  //   .addLabel("end")
    
  // let sections1 = gsap.utils.toArray("#page2 .sideBox .sideitem"),
  //   bodywidth1 = window.innerWidth * 2;
  // let progress= document.querySelector('#page2 .progress .progress_item')
  // var tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#page2",
  //     pin: true,
  //     scrub: 0.4,
  //     snap:  1 / (sections1.length-1),
  //     start: "20% 20%",
  //     end: ("+=" + bodywidth1),
  //     pinSpacing: true,
  //     fastScrollEnd: true,
  //     // //markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},
  //     // //markers: true,
  //     onUpdate: (self) => {
  //       $(progress).width((self.progress*100)+'%')
  //     },
  //   }
  // });
 
  // tl.to(sections1, {
  // xPercent: -100 * (sections1.length - 1),
  // // duration: duration,
  // ease: "none"
  // });
 
  gsap.fromTo("#page3 .move-box",{ y: '-40%'}, {
    scrollTrigger: {
    trigger: '#page3',
    scrub: true,
    start:  "top-=80% top",
      end: 'top top',
      // //markers: true,
    },
    y: '0' , ease: "none"
  })
  // var sideitemPic3 = $("#page3 .sideBox .sideitem").eq(0).find('img')[0]
  // var tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#page3",
	// 	scrub: 1,
	// 	pin: true,
	//     start: "top top",
  //     end: "+=1050",
  //           pinSpacing: true,
  //     fastScrollEnd: true,
	// 	snap: {
	// 	  snapTo: "labels", // snap to the closest label in the timeline
	// 	  duration: { min: 0.2, max: 2 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
	// 	  delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
	// 	  ease: "power3.inOut", // the ease of the snap animation ("power3" by default)
	// 	},
  //   }
  // });
  //   tl2.addLabel("start")
  //   .fromTo(sideitemPic3, { scale: 0.4 }, {
  //     scale: 1, duration:1, ease: "power2.out"
  //   })
  //   .addLabel("s0")
  //   .to('#page3 .sideBox', {
  //     y: '-100vh',
  //     duration: 1, ease: "power2.out"
  //   }, ">")
  //   .to('#page3 .sideBox .move-box-side0', {
  //     y: '40%',
  //     duration: 1, ease: "none"
  //   }, "<")
  //   .from('#page3 .sideBox .move-box-side1', {
  //     y: '-40%',
  //     duration: 1, ease: "power2.out"
  //   }, "<")
  //   .addLabel("s1")
  //   .to('#page3 .sideBox', {
  //     y: '-200vh',
  //     duration: 1, ease: "power2.out"
  //   }, ">")
  //   .to('#page3 .sideBox .move-box-side1', {
  //     y: '40%',
  //     duration: 1, ease: "none"
  //   }, "<")
  //   .from('#page3 .sideBox .move-box-side2', {
  //     y: '-40%',
  //     duration: 1, ease: "power2.out"
  //   }, "<")
  //   .addLabel("s2")
  //   .to('#page3 .sideBox', {
  //     y: '-300vh',
  //     duration: 1, ease: "power2.out"
  //   }, ">")
  //   .to('#page3 .sideBox .move-box-side2', {
  //     y: '40%',
  //     duration: 1, ease: "none"
  //   }, "<")
  //   .from('#page3 .sideBox .move-box-side3', {
  //     y: '-40%',
  //     duration: 1, ease: "power2.out"
  //   }, "<")
  //   .addLabel("s3")
  //   .to('#page3 .sideBox', {
  //     y: '-400vh',
  //     duration: 1, ease: "power2.out"
  //   }, ">")
  //   .to('#page3 .sideBox .move-box-side3', {
  //     y: '40%',
  //     duration: 1, ease: "none"
  //   }, "<")
  //   .from('#page3 .sideBox .move-box-side4', {
  //     y: '-40%',
  //     duration: 1, ease: "power2.out"
  //   }, "<")
  //   .addLabel("end")

  // let sections4 = gsap.utils.toArray("#page4 .sideBox .sideitem"),
  //   bodywidth4 = window.innerWidth * 2;
  // let progress2= document.querySelector('#page4 .progress .progress_item')
  // var tl4 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#page4",
  //     pin: true,
  //     scrub:  0.4,
  //     snap:  1 / (sections4.length-1),
  //     start: "20% 20%",
  //     end: ("+=" + bodywidth4),
  //     pinSpacing: true,
  //     fastScrollEnd: true,
  //     ////markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},
  //     onUpdate: (self) => {
  //       $(progress2).width((self.progress*100)+'%')
  //     },
  //   }
  // });
 
  // tl4.to(sections4, {
  // xPercent: -100 * (sections4.length - 1),
  // // duration: duration,
  // ease: "none"
  // });

  // // let bodywidth5 = window.innerWidth * 5;
  // // var tl5 = gsap.timeline();
 
  // // tl5.fromTo('#page5 .g_box1',{width:'33%', y:'20vh'}, {
  // //   width: '0',
  // //   y: '-10.8rem',
  // //   ease: "none"
  // // });
  // // tl5.fromTo('#page5 .g_box2',{width:'33%', y:'20vh'}, {
  // //   width: '100vw',
  // //   y: '-10.8rem',
  // //   ease: "none"
  // // },'<');
  // // tl5.fromTo('#page5 .g_box3',{width:'33%', y:'20vh'}, {
  // //   width: '0',
  // //   y: '-10.8rem',
  // //   ease: "none"
  // // }, '<');

  // // ScrollTrigger.create({
  // //   animation: tl5,
  // //   trigger: '#page5',
  // //   start: 'top top',
  // //   pin: true,
  // //   end: ("+=" + bodywidth5),
  // //       scrub: 2,
  // //   });
})