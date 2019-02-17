//轮播图1
(function() {
    var osliderPage = document.getElementById('sliderpage1');
	var $silderpage = $('#sliderpage1'),
		$prev = $('#prev1'),
		$next = $('#next1'),
		$li = $('#slider_Index1 li');
	var	sider_timer,
		key = true,
		num = 0,    //当前num
		prev_num ;   //上一个num

        
        $prev.click(function() {  //点击--->上一张
            
			if(key) {
				key = false;
				prevmove();
			}
		})

		$next.click(function() {  //点击--->下一张
			if(key) {
                console.log(111);
				key = false;
				nextmove();
			}			
		})
		init();
		
		function prevmove() {
			if(num == 0) {
				num = 3;
				$silderpage.animate({left: -675 * num},0);
			}
			num--;
			$silderpage.animate({left: -675 * num}, 1000,function () {
				key = true;
				changeClass();
			});
			if(typeof(sider_timer) !== undefined){
				clearTimeout(sider_timer);
				init();
			}
        }
        
		function nextmove() {
			prev_num = num;
			num++;
			$silderpage.animate({left: -675*num}, 1000,function () {
				if(num == 3) {
					num = 0;
					$silderpage.animate({left: 0},0,function() {
						key = true;
					});
				}else{
					key = true;
				}
				changeClass();	
			});
			if(typeof(sider_timer) !== undefined){
				clearTimeout(sider_timer);
				init();
			}
        }
        
		function changeClass () {
			$li.removeClass('slider-index');
        	$li.eq(num).addClass('slider-index');
		}
		
		function init() {
			sider_timer = setTimeout(function() {
				nextmove();
			 },6000)
		}
}());

//轮播图2
(function() {
	var $silderpage = $('#sliderpage2'),
		$prev = $('#prev2'),
		$next = $('#next2'),
		$li = $('#slider_Index2 li');
	var	sider_timer,
		key = true,
		num = 0,    //当前num
		prev_num ;   //上一个num

        
        $prev.click(function() {  //点击--->上一张
            
			if(key) {
				key = false;
				prevmove();
			}
		})

		$next.click(function() {  //点击--->下一张
			if(key) {
				key = false;
				nextmove();
			}			
		})
		init();
		
		function prevmove() {
			if(num == 0) {
				num = 3;
				$silderpage.animate({left: -675 * num},0);
			}
			num--;
			$silderpage.animate({left: -675 * num}, 1000,function () {
				key = true;
				changeClass();
			});
			if(typeof(sider_timer) !== undefined){
				clearTimeout(sider_timer);
				init();
			}
        }
        
		function nextmove() {
			prev_num = num;
			num++;
			$silderpage.animate({left: -675*num}, 1000,function () {
				if(num == 3) {
					num = 0;
					$silderpage.animate({left: 0},0,function() {
						key = true;
					});
				}else{
					key = true;
				}
				changeClass();	
			});
			if(typeof(sider_timer) !== undefined){
				clearTimeout(sider_timer);
				init();
			}
        }
        
		function changeClass () {
			$li.removeClass('slider-index');
        	$li.eq(num).addClass('slider-index');
		}
		
		function init() {
			sider_timer = setTimeout(function() {
				nextmove();
			 },10000)
		}
}());

//轮播图3
(function() {
	var $silderpage = $('#sliderpage3'),
		$prev = $('#prev3'),
		$next = $('#next3'),
		$li = $('#slider_Index3 li');
	var	sider_timer,
		key = true,
		num = 0,    //当前num
		prev_num ;   //上一个num

        
        $prev.click(function() {  //点击--->上一张
            
			if(key) {
				key = false;
				prevmove();
			}
		})

		$next.click(function() {  //点击--->下一张
			if(key) {
                console.log(111);
				key = false;
				nextmove();
			}			
		})
		init();
		
		function prevmove() {
			if(num == 0) {
				num = 3;
				$silderpage.animate({left: -675 * num},0);
			}
			num--;
			$silderpage.animate({left: -675 * num}, 1000,function () {
				key = true;
				changeClass();
			});
			if(typeof(sider_timer) !== undefined){
				clearTimeout(sider_timer);
				init();
			}
        }
        
		function nextmove() {
			prev_num = num;
			num++;
			$silderpage.animate({left: -675*num}, 1000,function () {
				if(num == 3) {
					num = 0;
					$silderpage.animate({left: 0},0,function() {
						key = true;
					});
				}else{
					key = true;
				}
				changeClass();	
			});
			if(typeof(sider_timer) !== undefined){
				clearTimeout(sider_timer);
				init();
			}
        }
        
		function changeClass () {
			$li.removeClass('slider-index');
        	$li.eq(num).addClass('slider-index');
		}
		
		function init() {
			sider_timer = setTimeout(function() {
				nextmove();
			 },12000)
		}
}());

// 轮播图4
(function () {
    var osliderPage = document.getElementById('sliderpage4');
	var $silderpage = $('#sliderpage4'),
		$prev = $('#prev4'),
		$next = $('#next4'),
		$li = $('#slider_Index4 li');
	var	sider_timer,
		key = true,
		num = 0,    //当前num
		prev_num ;   //上一个num

        
        $prev.click(function() {  //点击--->上一张
            
			if(key) {
				key = false;
				prevmove();
			}
		})

		$next.click(function() {  //点击--->下一张
			if(key) {
                console.log(444)
				key = false;
				nextmove();
			}			
		})
		init();
		
		function prevmove() {
			if(num == 0) {
				num = 5;
				$silderpage.animate({left: -675 * num},0);
			}
			num--;
			$silderpage.animate({left: -675 * num}, 1000,function () {
				key = true;
				changeClass();
			});
			if(typeof(sider_timer) !== undefined){
				clearTimeout(sider_timer);
				init();
			}
        }
        
		function nextmove() {
			prev_num = num;
			num++;
			$silderpage.animate({left: -675*num}, 1000,function () {
				if(num == 5) {
					num = 0;
					$silderpage.animate({left: 0},0,function() {
						key = true;
					});
				}else{
					key = true;
				}
				changeClass();	
			});
			if(typeof(sider_timer) !== undefined){
				clearTimeout(sider_timer);
				init();
			}
        }
        
		function changeClass () {
			$li.removeClass('slider-index');
        	$li.eq(num).addClass('slider-index');
		}
		
		function init() {
			sider_timer = setTimeout(function() {
				nextmove();
			 },5000)
		}
}())
	
//搜索框




