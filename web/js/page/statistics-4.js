function getTableDatas(t,a,e,d){var n=e+"-"+d+"-1",o=e+"-"+d+"-"+getDate(e,d);$.ajax({type:"GET",async:!1,url:t+"/customer/saleState",headers:{token:a},data:{begin:n,end:o},dataType:"json",success:function(t){if("200"==t.code){if(null!=t.data){var a={};a.thtml="<tr><td>线索总量</td><td>"+t.data.totalContact[0]+"</td><td>"+t.data.totalContact[1]+"</td><td>"+t.data.totalContact[2]+"</td></tr><tr><td>线索总量占比</td><td>"+Math.floor(1e4*t.data.totalContactPercent[0])/100+"%</td><td>"+Math.floor(1e4*t.data.totalContactPercent[1])/100+"%</td><td>"+Math.floor(1e4*t.data.totalContactPercent[2])/100+"%</td></tr><tr><td>线索新增量</td><td>"+t.data.addedContact[0]+"</td><td>"+t.data.addedContact[1]+"</td><td>"+t.data.addedContact[2]+"</td></tr><tr><td>线索新增占比</td><td>"+Math.floor(1e4*t.data.addedContactPercent[0])/100+"%</td><td>"+Math.floor(1e4*t.data.addedContactPercent[1])/100+"%</td><td>"+Math.floor(1e4*t.data.addedContactPercent[2])/100+"%</td></tr><tr><td>意向量</td><td>"+t.data.intentedContact[0]+"</td><td>"+t.data.intentedContact[1]+"</td><td>"+t.data.intentedContact[2]+"</td></tr><tr><td>意向率</td><td>"+Math.floor(1e4*t.data.intentedContactPercent[0])/100+"%</td><td>"+Math.floor(1e4*t.data.intentedContactPercent[1])/100+"%</td><td>"+Math.floor(1e4*t.data.intentedContactPercent[2])/100+"%</td></tr><tr><td>接通量</td><td>"+t.data.connectedContact[0]+"</td><td>"+t.data.connectedContact[1]+"</td><td>"+t.data.connectedContact[2]+"</td></tr><tr><td>接通率</td><td>"+Math.floor(1e4*t.data.connectedContactPercent[0])/100+"%</td><td>"+Math.floor(1e4*t.data.connectedContactPercent[1])/100+"%</td><td>"+Math.floor(1e4*t.data.connectedContactPercent[2])/100+"%</td></tr><tr><td>有效沟通量</td><td>"+t.data.validedContact[0]+"</td><td>"+t.data.validedContact[1]+"</td><td>"+t.data.validedContact[2]+"</td></tr><tr><td>有效沟通率</td><td>"+Math.floor(1e4*t.data.validedContactPercent[0])/100+"%</td><td>"+Math.floor(1e4*t.data.validedContactPercent[1])/100+"%</td><td>"+Math.floor(1e4*t.data.validedContactPercent[2])/100+"%</td></tr><tr><td>成单量</td><td>"+t.data.saledContact[0]+"</td><td>"+t.data.saledContact[1]+"</td><td>"+t.data.saledContact[2]+"</td></tr><tr><td>成单率</td><td>"+Math.floor(1e4*t.data.saledContactPercent[0])/100+"%</td><td>"+Math.floor(1e4*t.data.saledContactPercent[1])/100+"%</td><td>"+Math.floor(1e4*t.data.saledContactPercent[2])/100+"%</td></tr>",$(".table-box table tbody").html(a.thtml)}}else console.log(t.code)},error:function(t){console.log(t)}})}function initYearSearch(){for(var t=new Date,a=t.getFullYear(),e=(t.getMonth(),""),d=a;d>=2017;d--)e+='<li data-v="'+d+'">'+d+"年</li>";$(".search-box .search-year ul").html(e),$(".search-box .search-year .tyear").html(a+"年").attr("data-v",a),initMonthSearch(a)}function initMonthSearch(t){var a=new Date,e=a.getFullYear(),d=a.getMonth()+1,n="",o=1,r=12;2017==t?(o=9,r=t==e?d:12):(o=1,r=t==e?d:12);for(var c=r;c>=o;c--)n+=c==r?'<li class="on" data-v="'+c+'">'+c+"月</li>":'<li data-v="'+c+'">'+c+"月</li>";$(".search-box .search-month ul").html(n).animate({left:"0"})}function getDate(t,a){var e=1,d=new Date,n=d.getFullYear(),o=d.getMonth()+1;return t=parseInt(t),a=parseInt(a),t==n&&a==o?e=d.getDate():1==a||3==a||5==a||7==a||8==a||10==a||12==a?e=31:4==a||6==a||9==a||11==a?e=30:2==a&&(e=t%4==0&&t%100!=0||t%400==0?29:28),e}function getWidth(t){var a=$(".com-height").height();return parseFloat(a)*parseFloat(t)}$(function(){function t(t){t.preventDefault()}initYearSearch();var a=new Pdata,e=a.url(),d=a.token();if(null==d)window.location.href="index.html";else{var n=$(".search-box .search-year .tyear").attr("data-v"),o=$(".search-box .search-month ul li.on").attr("data-v");getTableDatas(e,d,n,o)}$(".search-box .search-year").click(function(){event.stopPropagation(),$(this).find("ul").show()}),$(".search-box .search-year ul li").click(function(){event.stopPropagation();var t=$(this).attr("data-v");initMonthSearch(t),$(".search-box .search-year .tyear").html(t+"年").attr("data-v",t),$(this).parents("ul").hide();var a=$(".search-box .search-month ul li.on").attr("data-v");getTableDatas(e,d,t,a)}),$("body").click(function(){$(".search-box .search-year ul").hide()}),$(".search-box .search-month ul").on("touchstart",function(t){startX=t.originalEvent.changedTouches[0].pageX}),$(".search-box .search-month ul").on("touchend",function(t){moveEndX=t.originalEvent.changedTouches[0].pageX,X=moveEndX-startX;var a=$(this).find("li").length,e=parseFloat($(this).css("left"));if(X>0)(n=getWidth(7.68))+e>0?n=0:n+=e,$(this).animate({left:n});else if(X<0){var d=getWidth(1.92*(a-4)),n=getWidth(7.68);n-e<=d?n-=e:n=d,$(this).animate({left:-n})}}),$(".search-box .search-month ul").delegate("li","click",function(){$(".search-box .search-month ul li").removeClass("on"),$(this).addClass("on");var t=$(".search-box .search-year .tyear").attr("data-v"),a=$(".search-box .search-month ul li.on").attr("data-v");getTableDatas(e,d,t,a)});var r,c,l=document.getElementById("change_box");l.addEventListener("touchstart",function(a){console.log(a);var e=a.touches[0];r=e.clientX-l.offsetLeft,c=e.clientY-l.offsetTop,document.addEventListener("touchmove",t,!1)},!1),l.addEventListener("touchmove",function(t){var a=t.touches[0],e=a.clientX-r,d=a.clientY-c;e<0?e=0:e>document.documentElement.clientWidth-l.offsetWidth&&(e=document.documentElement.clientWidth-l.offsetWidth),d<128&&(d=128),l.style.left=e+"px",l.style.top=d+"px"},!1),l.addEventListener("touchend",function(){document.removeEventListener("touchmove",t,!1)},!1)});