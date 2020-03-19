require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/map' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
				var ecConfig = require('echarts/config');
                myChart.on(ecConfig.EVENT.CLICK, doMapClick);
				
                var option = {

					tooltip : {
						trigger: 'item'
					},
					/*legend: {
						x : '90',
						y : '470',
						itemGap: 30,
						itemHeight: 14,
						textStyle: {
							color: '#000',
							fontSize:14
						},
						selectedMode:false,
						data:['证书数量']
					},*/
					dataRange: {
						min: 0,
						max: 100,
						x: '90',
						y: '400',
						textStyle: {
							color: '#000',
							fontSize:12
						},
						calculable : false,
						splitList : [{
							start : 0,
							end : 1,
							label : '< 1',
							color : '#bde3fa',
						}, {
							start : 1,
							end : 100,
							label : '1~100',
							color : '#a1d3f2'
						}, {
							start : 100,
							end : 1000,
							label : '100~1000',
							color : '#87cefa'
						}, {
							start : 1000,
							end : 5000,
							label : '1000~5000',
							color : '#5ebef9'
						}, {
							start : 5000,
							end : 10000,
							label : '5000~10000',
							color : '#46b3f7'
						}, {
							start : 10000,	
							label : '>= 10000',
							color : '#28a8f8'
						}]
					},
					toolbox: {
						show: false,
						orient : 'vertical',
						x: 'right',
						y: 'center',
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					roamController: {
						show: false,
						x: 'right',
						mapTypeControl: {
							'china': true
						}
					},
					series : [
						{
							name: '证书数量',
							type: 'map',
							mapType: 'china',
							roam: false,
							itemStyle:{
								normal: {
									borderWidth:1,
									borderColor:'rgba(0,0,0,0.5)',
									color: '#915d8e',
									label: {
										show: true,
										textStyle: {
										  color: 'rgba(0,0,0,0.99)',
										  fontSize: 12
										}
									}
								},
								emphasis:{label:{show:true}}
							},
							data:[ 
								{name: '北京',value: Math.round(Math.random()*0.1)},
								{name: '天津',value: Math.round(Math.random()*100)},
								{name: '上海',value: Math.round(Math.random()*0.2)},
								{name: '重庆',value: Math.round(Math.random()*1010)},
								{name: '河北',value: Math.round(Math.random()*120)},
								{name: '河南',value: Math.round(Math.random()*1250)},
								{name: '云南',value: Math.round(Math.random()*0.3)},
								{name: '辽宁',value: Math.round(Math.random()*110)},
								{name: '黑龙江',value: Math.round(Math.random()*500)},
								{name: '湖南',value: Math.round(Math.random()*10001)},
								{name: '安徽',value: Math.round(Math.random()*100)},
								{name: '山东',value: Math.round(Math.random()*80)},
								{name: '新疆',value: Math.round(Math.random()*121300)},
								{name: '江苏',value: Math.round(Math.random()*110)},
								{name: '浙江',value: Math.round(Math.random()*90)},
								{name: '江西',value: Math.round(Math.random()*56)},
								{name: '湖北',value: Math.round(Math.random()*5008)},
								{name: '广西',value: Math.round(Math.random()*265)},
								{name: '甘肃',value: Math.round(Math.random()*234)},
								{name: '山西',value: Math.round(Math.random()*90)},
								{name: '内蒙古',value: Math.round(Math.random()*8700)},
								{name: '陕西',value: Math.round(Math.random()*80)},
								{name: '吉林',value: Math.round(Math.random()*53)},
								{name: '福建',value: Math.round(Math.random()*200)},
								{name: '贵州',value: Math.round(Math.random()*980)},
								{name: '广东',value: Math.round(Math.random()*5060)},
								{name: '青海',value: Math.round(Math.random()*34)},
								{name: '西藏',value: Math.round(Math.random()*163)},
								{name: '四川',value: Math.round(Math.random()*2100)},
								{name: '宁夏',value: Math.round(Math.random()*7400)},
								{name: '海南',value: Math.round(Math.random()*300)},
								{name: '台湾',value: Math.round(Math.random()*1967)},
								{name: '香港',value: Math.round(Math.random()*9999)},
								{name: '澳门',value: Math.round(Math.random()*120)}
							]
						}
					]
				};
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
		
		// 地图上的点击事件
		function doMapClick(param) {
			$(".tongji_kuang").hide();//弹窗隐藏
			if(param.name == "台湾" || param.name == "南海诸岛" || param.name == "香港"){
				return;
			}
			if (typeof param.seriesIndex == 'undefined') {
                return;
            }
            if (param.type == 'click') {
				// -- 窗口位置计算 --
				//获取浏览器滚动高度
				var scrollTop=document.documentElement.scrollTop   ||  document.body.scrollTop;
				var scrollLeft=document.documentElement.scrollLeft  ||  document.body.scrollLeft;
				
				//获取点击位置坐标
				var x = param.event.clientX;
				var y = param.event.clientY;
				
				var provinceName = param.name;
				
				if(provinceName == '四川' || provinceName == '重庆' || provinceName == '浙江' || provinceName == '安徽' || provinceName == '湖北' || provinceName == '西藏' || provinceName == '海南' || provinceName == '云南' || provinceName == '贵州' || provinceName == '湖南'|| provinceName == '江西'|| provinceName == '福建' || provinceName == '广西'|| provinceName == '广东'|| provinceName == '香港' || provinceName == '澳门'|| provinceName == '湛江市'){
					y = y-250;
				}
				
				//实际坐标
				var top =  scrollTop + y;
				var left = scrollLeft + x;
				
				$('.tongji_kuang').css({'top':top+'px','left':left+'px'});
				$('.tongji_kuang').show();
            }
        }
		
		//关闭弹出
		$("#close").click(function(){
			$(".tongji_kuang").hide();
		});
		