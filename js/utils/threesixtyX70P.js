function threeSixFun(
  imgName = "/data/tms/website/html/images/360/X70P_360_Black/X70PLUS_EXT_360_",
  totalFrames = 36
) {
  // 是否准备好进行用户交互
  var ready = false,
    // 是否正在拖动指针
    dragging = false,
    // 存储指针开始X位置的指针，用于指针跟踪
    pointerStartPosX = 0,
    // 存储指针结束X位置，用于指针跟踪
    pointerEndPosX = 0,
    // 存储在我们跟踪指针的每个时间段内开始指针和结束指针X位置之间的距离
    pointerDistance = 0,
    // 指针跟踪周期的开始时间
    monitorStartTime = 0,
    // 指针跟踪时间
    monitorInt = 10,
    // 用于调用呈现函数的setInterval实例
    ticker = 0,
    // 设置图像滑动动画的速度
    speedMultiplier = 10,
    // 图片名称
    imgName = imgName,
    // CanvasLoader实例变量
    spinner,
    // 存储序列中图像的总量
    totalFrames = totalFrames,
    // 图像滑块动画的当前帧值
    currentFrame = 0,
    //存储所有加载的图像对象
    frames = [],
    // 在滑动动画期间，currentFrame将被补间到的结束帧的值
    endFrame = 0,
    // 我们通过增加每一个新的图像被添加到图像滑块来跟踪加载的图像
    loadedImages = 0,
    // 缓存DOM元素引用
    $document = $(document),
    $container = $("#threesixty"),
    $images = $("#threesixty_images"),
    $imagesBox = $(".threesixty_images_box");
  // 初始自旋演示变量
  (demoMode = false),
    (fakePointer = {
      x: 0,
      speed: 4,
    }),
    (fakePointerTimer = 0);

  /**
   * 添加一个“螺旋”形状的CanvasLoader实例到#spinner div
   */
  function addSpinner() {
    // spinner = new CanvasLoader("spinner");
    // spinner.setShape("spiral");
    // spinner.setDiameter(90);
    // spinner.setDensity(90);
    // spinner.setRange(1);
    // spinner.setSpeed(4);
    // spinner.setColor("#333333");
    //因为默认情况下它是隐藏的而不是呈现的，所以我们必须调用它的show()方法
    // spinner.show();
    // 我们使用jQuery的fadeIn方法在预加载器中慢慢淡出
    //$("#spinner").fadeIn("slow");
    $("#spinner").css("display", "flex");
  }

  /**
   * 创建一个新的<li>并在其中的序列中加载下一个图像。
   * 使用jQuery，我们向图像添加了“load”事件处理程序，因此当它成功加载时，我们调用“imageLoaded”函数。
   */
  $images.empty();

  function loadImage() {
    //创建一个新的<li>
    var li = document.createElement("li");
    //使用递增的“loaddimages”变量生成映像文件名
    var imageName = imgName + (loadedImages + 1) + ".png";
    /*
      创建一个新的<img>并将其src属性设置为指向我们生成的文件名。它还通过应用“previous-image”CSS类来隐藏图像。然后将图像添加到<li>。
    */
    var image = $("<img>")
      .attr("src", imageName)
      .addClass("previous-image")
      .appendTo(li);

    // 我们将新添加的图像对象(由jQuery返回)添加到“frames”数组中。
    frames.push(image);
    // We add the <li> to the <ol>
    $images.append(li);
    /*
    向新图像添加“load”事件处理程序。当事件触发时，它调用“imageLoaded”函数。
    */
    $(image).load(function () {
      imageLoaded();
    });
  }
  // 它处理图像“加载”事件。*每次这个函数被调用它检查是否所有的图像已经加载或它必须加载下一个。
  //每次一个新图像成功加载，我们设置预加载器的百分比值来通知用户加载进度
  //如果所有的图像都加载了，它隐藏预加载器使用jQuery的“fadeOut”方法，这在完全停止预加载器渲染
  //并调用“showThreesixty”方法，显示图像滑块
  function imageLoaded() {
    // 增加“loaddimages”变量的值
    loadedImages++;
    // 更新预加载器百分比文本
    $("#spinner .num").text(
      Math.floor((loadedImages / totalFrames) * 100) + "%"
    );
    // 检查当前加载的图像是否是序列中的最后一个…
    if (loadedImages == totalFrames) {
      // 如果是这样，它通过删除“previous-image”类并在其上应用“current-image”使序列中的第一个图像可见
      frames[0].removeClass("previous-image").addClass("current-image");
      /*
      使用jQuery“淡出”动画及其完整的事件处理程序显示图像滑块。当预加载器完全淡出时，它会停止预加载器渲染，并调用“showThreesixty”函数来显示图像。			*/
      $("#spinner").fadeOut("slow", function () {
        //spinner.hide();
        showThreesixty();
      });
    } else {
      // ...如果没有，加载序列中的下一个图像
      loadImage();
    }
  }

  /**
    显示具有“swooshy”旋转效果的图像。当endFrame设置为-720时，滑块将在停止前旋转4次。此时，它还设置应用程序为用户交互做好准备。 
   */
  function showThreesixty() {
    // 使用jQuery的“淡出”方法淡入图像滑块
    $imagesBox.fadeIn("slow");
    // 设置“ready”变量为true，因此应用程序现在对用户交互做出反应
    ready = true;
    // 将endFrame设置为初始值…
    //endFrame = -720;
    // ..所以当动画渲染时，它最初会进行4次完整的旋转。
    if (!demoMode) {
      refresh();
    } else {
      fakePointerTimer = window.setInterval(moveFakePointer, 100);
    }
  }

  /*
    移动假指针，这样我们就可以让一些演示旋转，直到用户干扰他们的指针
   */
  function moveFakePointer() {
    fakePointer.x += fakePointer.speed;
    trackPointer();
  }

  /*
   *停止假指针的移动，并让用户控制旋转
   */
  function quitDemoMode() {
    window.clearInterval(fakePointerTimer);
    demoMode = false;
  }

  /*
    我们启动应用程序通过… 添加预加载器，和…	
  */
  addSpinner();
  // 加载序列中的第一个图像。
  loadImage();

  /**
   * 渲染图像滑块帧动画。
   */
  function render() {
    // 渲染函数只在"currentFrame"的值还没有达到"endFrame"的值时运行
    if (currentFrame !== endFrame) {
      /*
        计算“currentFrame”和“endFrame”之间距离的10%。通过添加10%，我们得到了一个很好的平滑和缓和的动画。
        如果距离是正数，我们就必须限制数值，如果是负数，我们就必须限制数值，
        以确保“currentFrame”的值一定会到达“endFrame”的值，并且呈现不会进入无限循环。
      */
      var frameEasing =
        endFrame < currentFrame
          ? Math.floor((endFrame - currentFrame) * 0.1)
          : Math.ceil((endFrame - currentFrame) * 0.1);
      //将当前图像设置为隐藏
      hidePreviousFrame();
      // 对“currentFrame”的值增加/减少10%的帧距
      currentFrame += frameEasing;
      // 将当前图像设置为可见
      showCurrentFrame();
    } else {
      // 如果渲染可以停止，我们就停止并清除代码
      window.clearInterval(ticker);
      ticker = 0;
    }
  }

  /**
    创建一个新的setInterval并将其存储在“ticker”中 默认情况下，我将FPS的值设置为60，这样在新的浏览器中就会呈现出漂亮平滑的渲染效果 和相对较快的机器，但显然对于较老的架构来说太高了。   
  */
  function refresh() {
    //如果股票行情器还没有运行……
    if (ticker === 0) {
      // 让我们创建一个新的!
      ticker = self.setInterval(render, Math.round(1000 / 60));
    }
  }

  /**
   * 隐藏前一帧
   */
  function hidePreviousFrame() {
    /*
      将“current-image”类替换为图像上的“previous-image”类。 它调用“getNormalizedCurrentFrame”方法将“currentFrame”值转换为“totalFrames”范围(默认为1-180)。		
    */
    frames[getNormalizedCurrentFrame()]
      .removeClass("current-image")
      .addClass("previous-image");
  }

  /**
   * 显示当前帧
   */
  function showCurrentFrame() {
    /**
       将“current-image”类替换为图像上的“previous-image”类。它调用“getNormalizedCurrentFrame”方法将“currentFrame”值转换为“totalFrames”范围(默认为1-180)。    
    **/
    frames[getNormalizedCurrentFrame()]
      .removeClass("previous-image")
      .addClass("current-image");
  }

  /**
   * 返回转换为0和totalFrames范围内的值的"currentFrame"值
   */
  function getNormalizedCurrentFrame() {
    var c = -Math.ceil(currentFrame % totalFrames);
    if (c < 0) c += totalFrames - 1;
    return c;
  }

  /**
   * 返回一个简单的事件，原始事件是一个鼠标事件或触摸事件。
   */
  function getPointerEvent(event) {
    return event.originalEvent.targetTouches
      ? event.originalEvent.targetTouches[0]
      : event;
  }

  /**
   * 添加jQuery“mousedown”事件到图像滑动器包装。
   */
  $container.on("mousedown", function (event) {
    quitDemoMode();

    // 阻止原始事件处理程序行为
    event.preventDefault();
    // 将指针x位置存储为起始位置
    pointerStartPosX = getPointerEvent(event).pageX;
    // 告诉指针跟踪函数，用户实际上正在拖动指针，它需要跟踪指针的变化
    dragging = true;
  });

  /**
    向文档添加jQuery“mouseup”事件。我们使用文档是因为我们想让用户能够将鼠标拖出图像滑块，提供一个更大的“游乐场”。   
  **/
  $document.on("mouseup", function (event) {
    // 阻止原始事件处理程序行为
    event.preventDefault();
    // 告诉指针跟踪函数，用户已经完成了指针的拖动，不再需要跟踪指针的变化
    dragging = false;
  });

  /**
    向文档添加jQuery“mousemove”事件处理程序。通过再次使用文档，我们为用户提供了更好的用户体验，为鼠标交互提供了更多的播放区域。   
  **/
  $document.on("mousemove", function (event) {
    if (demoMode) {
      return;
    }
    // 阻止原始事件处理程序行为
    event.preventDefault();
    // 开始跟踪指针X位置的变化
    trackPointer(event);
  });

  /**
   *
   */
  $container.on("touchstart", function (event) {
    quitDemoMode();
    // 阻止原始事件处理程序行为
    event.preventDefault();
    // 将指针x位置存储为起始位置
    pointerStartPosX = getPointerEvent(event).pageX;
    // 告诉指针跟踪函数，用户实际上正在拖动指针，它需要跟踪指针的变化
    dragging = true;
  });

  $container.on("touchmove", function (event) {
    // 阻止原始事件处理程序行为
    event.preventDefault();
    // 开始跟踪指针X位置的变化
    trackPointer(event);
  });

  $container.on("touchend", function (event) {
    // 阻止原始事件处理程序行为
    event.preventDefault();
    // 告诉指针跟踪函数，用户已经完成了指针的拖动，不再需要跟踪指针的变化
    dragging = false;
  });

  /** 
    跟踪指针X位置的变化并计算图像滑块帧动画的“endFrame”。
    这个函数只在应用程序已经准备好并且用户正在拖动指针的情况下运行;这样我们可以避免不必要的计算和CPU使用。   
  **/
  function trackPointer(event) {
    var userDragging = ready && dragging ? true : false;
    var demoDragging = demoMode;

    if (userDragging || demoDragging) {
      // 存储指针的最后一个x位置
      pointerEndPosX = userDragging
        ? getPointerEvent(event).pageX
        : fakePointer.x;

      // 检查从这段时间到最后一段跟踪时间之间是否有足够的时间
      if (monitorStartTime < new Date().getTime() - monitorInt) {
        // 计算上次跟踪时间段内指针开始位置与结束位置之间的距离
        pointerDistance = pointerEndPosX - pointerStartPosX;
        // 使用指针X的起始位置和结束位置之间的距离以及“speedMultiplier”的值来计算endFrame
        endFrame =
          currentFrame +
          Math.ceil(
            (totalFrames - 1) *
              speedMultiplier *
              (pointerDistance / $container.width())
          );
        // 更新图像滑块帧动画
        refresh();
        // 重新开始统计指针跟踪周期
        monitorStartTime = new Date().getTime();
        // 将指针X位置存储为起始位置(因为我们开始了一个新的跟踪周期)

        pointerStartPosX = userDragging
          ? getPointerEvent(event).pageX
          : fakePointer.x;
      }
    } else {
      return;
    }
  }
}
