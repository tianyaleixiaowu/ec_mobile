function loadItem3Datas(t,a,e){$.ajax({type:"GET",url:t+"/contact/province/"+e.pid+"/"+e.id,headers:{token:a},dataType:"json",success:function(t){if("200"==t.code)if(t.data.list.length>0){chart_3_list=t.data.list;for(var a="",i=[],r=1.2*t.data.list[0].count,n=0;n<t.data.list.length;n++)a+='<li><div class="li-data-bg"><div class="li-data" style="width:0%;"></div><span class="font-left">'+t.data.list[n].name+"</span><span>"+t.data.list[n].count+"</span></div></li>",i.push(t.data.list[n].count/r*100);if($("#item-3").show().find("#chart-3 ul").html(a),$(".container .charts .item-3 .charts-item-title h4 p").html(e.name+"["+e.value+"]"),window.location.href="#item-3",i.length>0)for(n=0;n<i.length;n++)$("#chart-3 ul li .li-data").eq(n).animate({width:i[n]+"%"},"fast");chart_3_plist=i}else $("#item-3").hide();else console.log(t.code)},error:function(t){console.log(t)}})}function changeChartBarDatas(t,a,e){window.location.href="#item-2",$("#chart-2").height("7.6rem"),chart_2.clear(),chart_2.resize({height:getHeight(7.6)}),chart_2.showLoading("default",{text:"",color:"#ffff00",maskColor:"rgba(255, 255, 255, 0)"}),$(".container .charts .item-2 .charts-item-title h4 p").html(e.name+"["+e.value+"]"),setChartBarDatas(t,a,e.id),chart_3_list={},chart_3_plist=[],$("#item-3").hide()}function setChartBarDatas(t,a,e){$.ajax({type:"GET",url:t+"/contact/province/"+e,headers:{token:a},dataType:"json",success:function(i){if("200"==i.code){if(i.data.list.length>0){(chart_2_list=i.data.list).pid=e;for(var r=[],n=[],o=i.data.list.length-1;o>=0;o--)r.push(""==i.data.list[o].name?"其他":i.data.list[o].name.substr(0,3)),n.push({name:i.data.list[o].name,value:i.data.list[o].count,id:parseInt(i.data.list[o].city),pid:e});var l=1*i.data.list.length;$("#chart-2").height(l+"rem"),chart_2.resize({height:getHeight(l)}),chart_2.setOption(initBarOption(t,a,r,n)),chart_2.hideLoading()}}else console.log(i.code)},error:function(t){console.log(t)}})}function initBarOption(t,a,e,i){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){return loadItem3Datas(t,a,e[0].data),e[0].name+" : "+e[0].value+"条"}},grid:{top:"3%",left:"3%",right:"5%",bottom:"3%",containLabel:!0},xAxis:{type:"value",axisLine:{lineStyle:{color:"#ffff00",width:2}},axisLabel:{textStyle:{color:"#ffffff"}},splitLine:{show:!1},boundaryGap:[0,.01]},yAxis:{type:"category",axisLine:{lineStyle:{color:"#ffff00",width:2}},axisTick:{show:!1},axisLabel:{textStyle:{color:"#ffffff"}},data:e},series:[{type:"bar",barWidth:"6px",itemStyle:{normal:{color:"#ffff00"}},data:i}]}}function setChartMapDatas(t,a){$.ajax({type:"GET",url:t+"/contact/province",headers:{token:a},dataType:"json",success:function(t){"200"==t.code?($(".container .charts .item-1 .charts-item-title h4 p").html(t.data.totalCount),chart_1.setOption({series:[{data:convertValues(t.data.list)},{data:convertData(t.data.list)}]}),chart_1.setOption(option_map)):console.log(t.code)},error:function(t){console.log(t)}})}function convertData(t){for(var a=[],e=0;e<t.length;e++){var i=geoMap[t[e].province];i&&a.push({id:t[e].province,name:provinceMap[t[e].province],value:i.concat(t[e].count)})}return a}function convertValues(t){for(var a=[],e=0;e<t.length;e++)"110000"==t[e].province?(a.push({id:t[e].province,name:provinceMap[t[e].province],value:t[e].count,selected:!0}),$(".container .charts .item-2 .charts-item-title h4 p").html("北京["+t[e].count+"]")):a.push({id:t[e].province,name:provinceMap[t[e].province],value:t[e].count});return a.push({id:0,name:"青海",value:0}),a.push({id:0,name:"台湾",value:0}),a.push({id:0,name:"香港",value:0}),a.push({id:0,name:"澳门",value:0}),a}function getHeight(t){var a=$(".com-height").height();return parseFloat(a)*parseFloat(t)}var chart_1=new echarts.init(document.getElementById("chart-1")),chart_2=new echarts.init(document.getElementById("chart-2"));chart_2.showLoading("default",{text:"",color:"#ffff00",maskColor:"rgba(255, 255, 255, 0)"}),document.getElementById("item-3").style="display:none";var chart_2_list={},chart_3_list={},chart_3_plist=[];$(function(){var t=new Pdata,a=(new Common,t.url()),e=t.token();null==e&&(window.location.href="index.html"),chart_1.setOption(option_map),chart_1.on("click",function(t){"map"==t.componentSubType&&(void 0==t.data||0==t.data.id?$("#item-2").hide():($("#item-2").show(),changeChartBarDatas(a,e,t.data)))}),setChartMapDatas(a,e),setChartBarDatas(a,e,11e4),$("#sort-2").click(function(){var t=[],i=[];if($(this).attr("data-code")>1){$(this).attr("data-code",1);for(r=chart_2_list.length-1;r>=0;r--)t.push(""==chart_2_list[r].name?"其他":chart_2_list[r].name.substr(0,3)),i.push({name:""==chart_2_list[r].name?"其他":chart_2_list[r].name.substr(0,3),value:chart_2_list[r].count,id:parseInt(chart_2_list[r].city),pid:chart_2_list.pid})}else{$(this).attr("data-code",2);for(var r=0;r<chart_2_list.length;r++)t.push(""==chart_2_list[r].name?"其他":chart_2_list[r].name.substr(0,3)),i.push({name:""==chart_2_list[r].name?"其他":chart_2_list[r].name.substr(0,3),value:chart_2_list[r].count,id:parseInt(chart_2_list[r].city),pid:chart_2_list.pid})}chart_2.setOption(initBarOption(a,e,t,i))}),$("#sort-3").click(function(){var t="";if($(this).attr("data-code")>1){$(this).attr("data-code",1);for(a=0;a<chart_3_list.length;a++)t+='<li><div class="li-data-bg"><div class="li-data" style="width:0%;"></div><span class="font-left">'+chart_3_list[a].name+"</span><span>"+chart_3_list[a].count+"</span></div></li>";if($("#item-3").show().find("#chart-3 ul").html(t),chart_3_plist.length>0)for(var a=0,e=0;e<chart_3_plist.length;a++,e++)$("#chart-3 ul li .li-data").eq(a).animate({width:chart_3_plist[e]+"%"},"fast")}else{$(this).attr("data-code",2);for(a=chart_3_list.length-1;a>=0;a--)t+='<li><div class="li-data-bg"><div class="li-data" style="width:0%;"></div><span class="font-left">'+chart_3_list[a].name+"</span><span>"+chart_3_list[a].count+"</span></div></li>";if($("#item-3").show().find("#chart-3 ul").html(t),chart_3_plist.length>0)for(var a=0,e=chart_3_plist.length-1;e>=0;a++,e--)$("#chart-3 ul li .li-data").eq(a).animate({width:chart_3_plist[e]+"%"},"fast")}}),$("#chart-3 ul").delegate("li","click",function(){$("#chart-3 ul li").removeClass("current"),$(this).addClass("current")})});var option_map={backgroundColor:"transparent",layoutCenter:["50%","50%"],layoutSize:"120%",aspectScale:.75,tooltip:{trigger:"item",formatter:function(t){if(null!=t){if("map"==t.componentSubType)return""==t.name?"":t.name+" : "+t.value+"条";if("scatter"==t.componentSubType)return t.name+" : "+t.value[2]+"条"}}},geo:{map:"china",label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#09233c",borderColor:"#49f5fd",borderWidth:1.5,shadowColor:"rgba(73,245, 253,1)",shadowBlur:15},emphasis:{areaColor:"transparent"}}},series:[{type:"map",mapType:"china",selectedMode:"single",label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#09233c",borderColor:"#0b3958",borderWidth:1},emphasis:{areaColor:"#49f5fd"}}},{type:"scatter",coordinateSystem:"geo",symbolSize:5,itemStyle:{normal:{color:"#49f5fd"}}}]},provinceMap={110000:"北京",120000:"天津",130000:"河北",140000:"山西",150000:"内蒙古",210000:"辽宁",220000:"吉林",230000:"黑龙江",310000:"上海",320000:"江苏",330000:"浙江",340000:"安徽",350000:"福建",360000:"江西",370000:"山东",410000:"河南",420000:"湖北",430000:"湖南",440000:"广东",450000:"广西",460000:"海南",500000:"重庆",510000:"四川",520000:"贵州",530000:"云南",540000:"西藏",610000:"陕西",620000:"甘肃",630000:"青海",640000:"宁夏",650000:"新疆"},geoMap={110000:[116.46,39.92],120000:[117.2,39.13],130000:[114.48,38.03],140000:[112.53,37.87],150000:[111.65,40.82],210000:[123.38,41.8],220000:[125.35,43.88],230000:[126.63,45.75],310000:[121.48,31.22],320000:[118.78,32.04],330000:[120.19,30.26],340000:[117.27,31.86],350000:[119.3,26.08],360000:[115.89,28.68],370000:[117,36.65],410000:[113.65,34.76],420000:[114.31,30.52],430000:[113,28.21],440000:[113.23,23.16],450000:[108.33,22.84],460000:[110.35,20.02],500000:[106.54,29.59],510000:[104.06,30.67],520000:[106.71,26.57],530000:[102.73,25.04],540000:[91.11,29.97],610000:[108.95,34.27],620000:[103.73,36.03],630000:[101.74,36.56],640000:[106.27,38.47],650000:[87.68,43.77]};