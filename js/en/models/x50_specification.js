gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true})
$(document).ready(function () {

    let info = navigator.userAgent;
    let isPhone = /mobile/i.test(info);
//  console.log("isPhone",isPhone)
    
var le=$(".motorcycleType dl").length
function setH(bigH,le,con,f,pCon){
pCon.find('ul').each(function(i,data){
     $(this).find("li").eq(f).height(bigH)
 })
}
function setform(){
    for(var i=0;i<le;i++)
    {
        var con=$(".motorcycleType dl").eq(i).find("dd")
        var powertrain=$(".powertrain dl").eq(i).find("dd")
        var n= powertrain.height();
        var n1=con.height();
        // console.log("i",i)
        // console.log("powertrain",con.find("ul").length)
        
         for(var s=0;s<con.find("ul").length;s++){
            var c=powertrain.find("ul").eq(0)
            var rc=con.find("ul").eq(s)
            var lec=rc.find("li").length
            // console.log("s",s)
            for(var f=0;f<lec;f++)
            { 
                // var bigH=0;
                var l=c.find("li").eq(f).height()
                var r=rc.find("li").eq(f).height()
                var bigH=0;
                if(l>=r)
                {
                    // if( rc.find("li").eq(f).height()<=l)
                    // {
                    //     // rc.find("li").eq(f).height(l)
                        
                    // }
                    con.find("li").eq(f).height(l)
                    bigH=l
                    setH(bigH,lec,con.find("li"),f,con)
                    // setH(r,lec,con.find("li"),f,con)
                    //  setH(r,lec,con.find("li"),l)
                    // console.log("eq(f)",rc.find("li").eq(f))
                    // console.log("l>=r",i,s,f, con.find("li").eq(f))
                }
                else
                {
                    c.find("li").eq(f).height(r)
                    bigH=r
                    // con.find("li").eq(f).height(r)
                    // console.log("eq(f)",i,s,f, con.find("li").eq(f))
                   setH(bigH,lec,con.find("li"),f,con)
                //    console.log(data)
                }
                
                    
            }
         }
        //  console.log("--------n", n)
         if(n>=n1)
         {
            $(".motorcycleType dl").eq(i).find("dd").attr("data-height",n);
         }
         else
         {
            $(".motorcycleType dl").eq(i).find("dd").attr("data-height",n1);
         }
    }
}
    

    $(".motorcycleType dl dt").click(function(){
        var p=$(this).parent();
        var index=p.index()
        var con=p.find('dd')
        var num=p.find("dd").attr("data-height");
        var tP=$(".powertrain").find('dl').eq(index-1);
        var tp_d=tP.find("dd")
        if(p.hasClass('on')){
			p.removeClass('on');
            $(this).parent().find(".close").hide();
            $(this).parent().find(".open").show();
            $(".powertrain dl").eq(index-1).find(".close").hide();
            $(".powertrain dl").eq(index-1).find(".open").show();
            // var con=p.find('dd')
            gsap.set(con, { height:num+'px'});	
            gsap.set(tp_d, { height:num+'px'});	
            gsap.to(con, {height: 0,ease: "none"});	
            gsap.to(tp_d, {height: 0,ease: "none"});	
        }else{
            p.addClass('on');
            $(this).parent().find(".close").show();
            $(this).parent().find(".open").hide();
            $(".powertrain dl").eq(index-1).find(".close").show();
            $(".powertrain dl").eq(index-1).find(".open").hide();
            gsap.set(con, { height:0});	
            gsap.set(tp_d, { height:0});	
            gsap.to(con, {height:num+'px',ease: "none"});
            gsap.to(tp_d, {height:num+'px',ease: "none"});
        }
    })

    $(".x50_specification .motorcycleType .l_b").click(function(){
    // console.log("1234")
    })
    $(".x50_specification .motorcycleType .r_b").click(function(){
        console.log("5678")
    })
    setform()
    // if(!isPhone){
    //     window.addEventListener('resize', function() {
    //         $(".motorcycleType dl dt").click()
    //         setform()
    //         // 获取屏幕宽度和高度
    //         // var screenWidth = window.innerWidth;
    //         // var screenHeight = window.innerHeight;
        
    //         // 打印新的屏幕尺寸
    //         // console.log('Screen size: ' + screenWidth + 'x' + screenHeight);
    //     }); 
    // }
   
})