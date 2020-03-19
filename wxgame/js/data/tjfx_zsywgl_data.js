require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts', // 按需加载
                'echarts/chart/bar', 
				'echarts/chart/line',
				'echarts/chart/pie' 
            ],
            function (ec) {
				
                // 基于准备好的dom，初始化echarts图表
                var myChart1 = ec.init(document.getElementById('main1')); 
                var myChart2 = ec.init(document.getElementById('main2')); 
                var myChart3 = ec.init(document.getElementById('main3')); 
                var myChart4 = ec.init(document.getElementById('main4')); 
                var myChart5 = ec.init(document.getElementById('main5')); 
                var myChart6 = ec.init(document.getElementById('main6')); 
                var myChart7 = ec.init(document.getElementById('main7')); 
				
				var ecConfig = require('echarts/config');
                myChart3.on(ecConfig.EVENT.CLICK, zshuNumClick);
                myChart6.on(ecConfig.EVENT.CLICK, zshuAreaNumClick);
                
				
				//证书发放统计
				var option1 = {
					tooltip : {
						trigger: 'axis'
					},
					legend: {
						data:['个人证书','企业证书','服务器证书','代码签名证书','其它']
					},
					/*toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},*/
					calculable : true,
					xAxis : [
						{
							type : 'category',
							boundaryGap : false,
							data : ['2013年','2014年','2015年','2016年','2017年','2018年']
						}
					],
					yAxis : [
						{
							type : 'value',
							name : '张'
						}
					],
					series : [
						{
							name:'个人证书',
							type:'line',
            				smooth:true,
							itemStyle: {normal: {areaStyle: {type: 'default'}}},
							data:[210, 1332, 3101, 6134, 7690, 9230]
						},
						{
							name:'企业证书',
							type:'line',
            				smooth:true,
							itemStyle: {normal: {areaStyle: {type: 'default'}}},
							data:[320, 1282, 1291, 7234, 8290, 12330]
						},
						{
							name:'服务器证书',
							type:'line',
            				smooth:true,
							itemStyle: {normal: {areaStyle: {type: 'default'}}},
							data:[150, 2342, 3301, 4154, 6190, 8130]
						},
						{
							name:'代码签名证书',
							type:'line',
            				smooth:true,
							itemStyle: {normal: {areaStyle: {type: 'default'}}},
							data:[220, 3432, 4101, 6434, 7390, 9330]
						},
						{
							name:'其它',
							type:'line',
            				smooth:true,
							itemStyle: {normal: {areaStyle: {type: 'default'}}},
							data:[320, 932, 1901, 3934, 6290, 8330]
						}
					]
				};
				
				//总发证比例分布
				var option2 = {
					/*title : {
						text: '总发证比例分布',
						subtext: '纯属虚构',
						x:'center'
					},*/
					tooltip : {
						trigger: 'item',
						formatter: "{b} : {c} ({d}%)"
					},
					legend: {
						orient : 'vertical',
						x : 40,
						data:['个人证书','企业证书','服务器证书','代码签名证书','esim证书']
					},
					/*toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {
								show: true, 
								type: ['pie', 'funnel'],
								option: {
									funnel: {
										x: '25%',
										width: '50%',
										funnelAlign: 'left',
										max: 1548
									}
								}
							},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},*/
					calculable : true,
					series : [
						{
							/*name:'访问来源',*/
							type:'pie',
							radius : '55%',
							center: ['50%', '60%'],
							data:[
								{value:2548, name:'个人证书'},
								{value:310, name:'企业证书'},
								{value:234, name:'服务器证书'},
								{value:135, name:'代码签名证书'},
								{value:1123, name:'esim证书'}
							]
						}
					]
				};
				
				//新增证书量
				var option3 = {
					legend: {
						data:['新增证书量']
					},
					/*toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {show: true, type: ['line', 'bar']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},*/
					calculable : true,
					tooltip : {
						trigger: 'axis'
					},
					xAxis : [
						{
							type : 'category',
							boundaryGap : false,
							data : ['2013年','2014年','2015年','2016年','2017年','2018年']
						}
					],
					yAxis : [
						{
							type : 'value',
							name : '张'
						}
					],
					series : [
						{
							name:'新增证书量',
							type:'line',
							smooth:true,
							itemStyle: {
								normal: {
									lineStyle: {
										shadowColor : 'rgba(0,0,0,0.4)'
									}
								}
							},
							data:[132, 50, 3565, 465, 2221, 255]
						}
					]
				};
				
				//CA应用增长情况
				var option4 = {
					/*title : {
						text: 'CA应用增长情况',
						subtext: '纯属虚构'
					},*/
					tooltip : {
						trigger: 'axis'
					},
					legend: {
						data:['新增CA应用','累计CA应用']
					},
					/*toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {show: true, type: ['line', 'bar']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},*/
					calculable : true,
					xAxis : [
						{
							type : 'category',
							data : ['2017年','2018年1月','2018年2月','2018年3月','2018年4月','2018年5月','2018年6月','2018年7月','2018年8月','2018年9月','2018年10月','2018年11月','2018年12月']
						}
					],
					yAxis : [
						{
							type : 'value',
							name : '个'
						}
					],
					series : [
						{
							name:'新增CA应用',
							type:'bar',
							data:[90, 9, 10, 23, 26, 27, 35, 62, 36, 20, 64, 33, 56]
						},
						{
							name:'累计CA应用',
							type:'bar',
							data:[126, 59, 90, 56, 38, 70, 65, 78, 48, 58, 80, 53, 88]
						}
					]
				};
				
				//各省总证书发放量
				var option5 = {
					/*title : {
						text: '各省总证书发放量',
						subtext: '纯属虚构'
					},*/
					tooltip : {
						trigger: 'item',
						formatter: "{b} : {c} ({d}张)"
					},
					legend: {
						data:['各省证书发放量']
					},
					/*toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {show: true, type: ['line', 'bar']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},*/
					calculable : true,
					xAxis : [
						{
							type : 'category',
							axisLabel:{'interval':0},
							data:[
								'北京','\n天津','河北','\n山西','内蒙古','\n辽宁','吉林','\n黑龙江',
								'上海','\n江苏','浙江','\n安徽','福建','\n江西','山东','\n河南',
								'湖北','\n湖南','广东','\n广西','海南','\n重庆','四川','\n贵州',
								'云南','\n西藏','陕西','\n甘肃','青海','\n宁夏','新疆'
							]
						}
					],
					yAxis : [
						{
							type : 'value',
							name : '张'
						}
					],
					series : [
						{
							name:'各省证书发放量',
							type:'bar',
							barCategoryGap:'40%',
							data:[90, 9, 10, 23, 26, 27, 35, 62, 36, 20, 64, 33, 56, 126, 59, 90, 56, 38, 70, 65, 78, 48, 58, 80, 53, 88, 54, 34, 56, 76, 67, 87, 89]
						}
					]
				};
				
        		//各省应用量占比
				var option6 = {
					/*title : {
						text: '各省应用量占比',
						subtext: '纯属虚构',
						x:'center'
					},*/
					tooltip : {
						trigger: 'item',
						formatter: "{b} : {c} ({d}%)"
					},
					legend: {
						orient : 'vertical',
						x : 40,
						data:[
							'北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江',
							'上海','江苏','浙江','安徽','福建','江西','山东','河南',
							'湖北','湖南','广东','广西','海南','重庆','四川','贵州',
							'云南','西藏','陕西','甘肃','青海','宁夏','新疆'
						],
						show:false
					},
					/*toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {
								show: true, 
								type: ['pie', 'funnel'],
								option: {
									funnel: {
										x: '25%',
										width: '50%',
										funnelAlign: 'left',
										max: 1548
									}
								}
							},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},*/
					calculable : true,
					series : [
						{
							/*name:'访问来源',*/
							type:'pie',
							radius : '55%',
							center: ['50%', '50%'],
							data:[
								{value:43, name:'北京'},
								{value:43, name:'天津'},
								{value:13, name:'河北'},
								{value:34, name:'山西'},
								{value:21, name:'内蒙古'},
								{value:23, name:'辽宁'},
								{value:13, name:'吉林'},
								{value:43, name:'黑龙江'},
								{value:2, name:'上海'},
								{value:34, name:'江苏'},
								{value:5, name:'浙江'},
								{value:6, name:'安徽'},
								{value:23, name:'福建'},
								{value:8, name:'江西'},
								{value:24, name:'山东'},
								{value:65, name:'河南'},
								{value:13, name:'湖北'},
								{value:87, name:'湖南'},
								{value:24, name:'广东'},
								{value:53, name:'广西'},
								{value:22, name:'海南'},
								{value:34, name:'重庆'},
								{value:98, name:'四川'},
								{value:54, name:'贵州'},
								{value:33, name:'云南'},
								{value:28, name:'西藏'},
								{value:54, name:'陕西'},
								{value:32, name:'甘肃'},
								{value:12, name:'青海'},
								{value:13, name:'宁夏'},
								{value:33, name:'新疆'}
							]
						}
					]
				};
				
				var option7 = {
					tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
							type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data:['1月', '2月','3月','4月','5月','6月', '7月','8月','9月','10月','11月','12月']
					},
					grid: {   
						x2: '20px',
						y2:'20px'
					},
					/*toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},*/
					calculable : true,
					xAxis : [
						{
							type : 'value',
							/*data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']*/
						}
					],
					yAxis : [
						{
							type : 'category',
							name :'',
							data : ['统一认证', '湖南4A', '湖南4G小基站', '四川OA', '湖南网准', '天津4A', '浙江4G小基站', '广东移动4G小基站', '四川网准', '天津4G小基站'],
							axisLabel:{  
							   interval: 0,//标签设置为全部显示  
							   formatter:function(params){  
								   var newParamsName = "";// 最终拼接成的字符串  
								   var paramsNameNumber = params.length;// 实际标签的字数  
								   var provideNumber = 6;// 每行能显示的字的个数  
								   var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整  
								   /** 
									* 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签 
									*/  
								 // 条件等同于rowNumber>1  
								   if (paramsNameNumber > provideNumber) {  
									   /** 循环每一行,p表示行 */  
									   for (var p = 0; p < rowNumber; p++) {  
										   var tempStr = "";// 表示每一次截取的字符串  
										   var start = p * provideNumber;// 开始截取的位置  
										   var end = start + provideNumber;// 结束截取的位置  
										   // 此处特殊处理最后一行的索引值  
										   if (p == rowNumber - 1) {  
											   // 最后一次不换行  
											   tempStr = params.substring(start, paramsNameNumber);  
										   } else {  
											  // 每一次拼接字符串并换行  
											   tempStr = params.substring(start, end) + "\n";  
										   }  
										   newParamsName += tempStr;// 最终拼成的字符串  
									   }  
				
								   } else {  
									   // 将旧标签的值赋给新标签  
									   newParamsName = params;  
								   }  
								   //将最终的字符串返回  
								   return newParamsName  
				
							   }  
						   }  
						}
					],
					series : [
						{
							name:'1月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[90, 102, 201, 398, 478, 567, 664, 756, 854, 1130]
						},
						{
							name:'2月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[100, 232, 300, 494, 576, 664, 760, 850, 930, 1110]
						},
						{
							name:'3月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[100, 120, 145, 156, 160, 170, 187, 191, 212, 280]
						},
						{
							name:'4月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[98, 124, 137, 140, 145, 156, 164, 171, 202, 250]
						},
						{
							name:'5月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[89, 120, 129, 138, 140, 148, 159, 162, 182, 220]
						},
						{
							name:'6月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[87, 100, 110, 120, 138, 140, 146, 150, 159, 187]
						},
						{
							name:'7月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[122, 129, 130, 139, 140, 145, 155, 160, 170, 185]
						},
						{
							name:'8月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[126, 129, 135, 143, 147, 150, 155, 159, 168, 170]
						},
						{
							name:'9月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[68, 72, 76, 89, 94, 99, 101, 109, 113, 121]
						},
						{
							name:'10月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[79, 98, 109, 118, 121, 128, 130, 133, 143, 146]
						},
						{
							name:'11月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[69, 72, 76, 88, 97, 102, 109, 116, 127, 134]
						},
						{
							name:'12月',
							type:'bar',
							stack: '总量',
							itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
							data:[90, 112, 134, 145, 150, 155, 162, 168, 170, 176]
						}
					]
				};
									
                // 为echarts对象加载数据 
                myChart1.setOption(option1);
                myChart2.setOption(option2);
                myChart3.setOption(option3);
                myChart4.setOption(option4);
                myChart5.setOption(option5);
                myChart6.setOption(option6);
                myChart7.setOption(option7);
            }
        );
	
		//新增证书量拐点点击
	 	function zshuNumClick(param) {
            if (typeof param.seriesIndex == 'undefined') {
                return;
            }
            if (param.type == 'click') {
                //alert(param.data);
				showPopBox(0);
            }
        }
		
		//各省应用量占比点击扇面弹出
	 	function zshuAreaNumClick(param) {
            if (typeof param.seriesIndex == 'undefined') {
                return;
            }
            if (param.type == 'click') {
                //alert(param.data);
				showPopBox(1);
            }
        }