window.onload=function(){
  var date=new Date();
  var ajax=function(o){
    var req=new XMLHttpRequest();
    req.open('get',o.url);
    req.send();
    req.onreadystatechange=function(){
    if(this.readyState==this.DONE&&this.status==200){
      o.onsuccess(this.response);
      // return console.log(JSON.parse(req.response));
      // return console.log(JSON.parse(req.response));
    }};
  };
 
 var date2string=function(){
  return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
 }


 var dangtianpic=function(){
    ajax({
      url:'http://localhost:3000/tupian?time='+date2string(),
      onsuccess:function(data){
        dingwei_p.innerHTML='';
          if(data!=='none'){
            data=JSON.parse(data);
            console.log(data);
            for(var i=0;i<data.length;i++){
              var el=document.createElement('img');
              el.setAttribute('class','tupian');
              el.setAttribute('data',i);
              el.src='pics/'+data[i];
              dingwei_p.appendChild(el);
            }
          }

          dingwei_p.onclick=function(e){
            fangda.innerHTML='<div class="guanbi" id="guanbi"></div>';
            if(e.target.getAttribute('class')=='tupian'){
              fangda.style.display='block';
              console.log(fangda.getBoundingClientRect().width);
              // if(fangda.getBoundingClientRect().width==1000){}
              // var mm=e.target.src;
              // var el=document.createElement('img');
              // el.src=mm;
              var mm=e.target.getAttribute('src');

              console.log(mm);
              var el=document.createElement('img');
              // var el=document.createElement('div');
              // el.setAttribute('class','datu');
              el.setAttribute('src',mm)
              // el.style.background='url('+mm+')';
              // el.style.backgroundSize='cover';
              el.setAttribute('class','t_center');
              // console.log(el.getBoundingClientRect().width);
              // if(fangda.offsetWidth>=800){
              //   el.style.width=400+'px';
              // }
              // el.style.margin='0 auto';
              // console.log(el.offsetWidth);
              // fangda.style.width=el.offsetWidth+100+'px';
              fangda.appendChild(el);
              guanbi.onclick=function(){
                fangda.style.display='none';
              };
              // removeClass(e.target,'tupian')
            }
          }
          // var 
          // for(var i=0;i<){}


      }
    });

 }

  	var $=function(e){
  		return document.getElementById(e);
  	};
    var ZHENG=24*60*60*1000;
    var xiao=document.getElementsByClassName('xiao');
    // qian
    //dang 
    // xia
    // var CURR;
    
    var shijianxianchange=function(){
      var date=new Date();
      // console.log((date.getHours()*60+date.getMinutes())/(24*60));
    hongxian.style.top=(date.getHours()*60+date.getMinutes())/(24*60)*1009+40+'px';
    if(date.getHours()<12){
      if(date.getMinutes()<10){ shuzih.innerHTML='上午'+date.getHours()+':'+'0'+date.getMinutes();}
      else{shuzih.innerHTML='上午'+date.getHours()+':'+date.getMinutes();}
    }
    else if(date.getHours()==12){
      if(date.getMinutes()<10){ shuzih.innerHTML='中午'+date.getHours()+':'+'0'+date.getMinutes();}
      else{shuzih.innerHTML='中午'+date.getHours()+':'+date.getMinutes();}
        // shuzi.innerHTML='中午'+date.getHours()+':'+date.getMinutes();
    }else{
      if(date.getMinutes()<10){ shuzih.innerHTML='下午'+date.getHours()+':'+'0'+date.getMinutes();}
      else{shuzih.innerHTML='下午'+(date.getHours()-12)+':'+date.getMinutes();}
       // shuzi.innerHTML='下午'+date.getHours()+':'+date.getMinutes();
    }
    };
    shijianxianchange();
     // console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
   setInterval(shijianxianchange,60000);
    
    var shuzi=document.getElementsByClassName('shuzi');
    for(var i=0;i<shuzi.length;i++){
      if(date.getHours()<12&&shuzi[i].getAttribute('class').indexOf('xw')==-1){
         if(date.getHours()==Number(shuzi[i].innerHTML)&&date.getMinutes()<=30){
          shuzi[i].innerHTML='';

        }
        else if(date.getHours()==Number(shuzi[i].innerHTML)&&date.getMinutes()>=30){
          shuzi[i+1].innerHTML='';
        }
        // else{
        //   shuzi[i+1].innerHTML='';
        // }
      }
      else if(date.getHours()==12&&shuzi[i].innerHTML=='中午'){
         // if(date.getHours()==Number(shuzi[i].innerHTML)){
          shuzi[i].innerHTML='';

        // }
      }
      else if(date.getHours()>12&&shuzi[i].getAttribute('class').indexOf('xw')!==-1){
         if(date.getHours()-12==Number(shuzi[i].innerHTML)){
          shuzi[i].innerHTML='';

        }
      }
     
    }
    // shuzhi.innerHTML
    // CURR/ZHENG*a_ri.offsetWidth;
    // console.log(date.getHours());
    // console.log(date.getTime());
    // if(date.getHours()==0&&date.getMinutes()){

    // }
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());

    var jintian_d=date.getDate();  
     var jintian_m=date.getMonth();  
      var jintian_y=date.getFullYear(); 
      var jintian_w=date.getDay();

    var L;
    var nowdate=new Date(Date.now());
       var isrunnian=function(year){
      if(year%4==0&&year%100!=0||year%400==0){
        return true;
      }else{
        return false;
      }
    };



    //onmousedown
  	// var d=new Date(Date.now());
    var meiyuetianshu=[31,28,31,30,31,30,31,31,30,31,30,31];
    var shangyige;
    // 
    var addClass=function(el,s){
        var tmp=el.getAttribute('class').split(' ');
        var dict={};
        for(var i=0;i<tmp.length;i++){
          dict[tmp[i]]=true;
        }
        if(!dict[s]){
          el.setAttribute('class',el.getAttribute('class')+' '+s);
        }
    };
   var removeClass=function(el,s){
      var tmp=el.getAttribute('class').split(' ');
        var dict={};
        for(var i=0;i<tmp.length;i++){
          dict[tmp[i]]=true;
        }
        delete dict[s];
        var ns='';
        for(var name in dict){
          ns+=' '+name;
        }
        el.setAttribute('class',ns);
    };

    var huarili=function(){

        // console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
      var i=0;
      var tmp=date.getDate();
      date.setDate(1);

      var xingqi=date.getDay();
      date.setDate(tmp);
      L=xingqi==0?6:xingqi-1;
      for(var k=0;k<xiao.length;k++){

         removeClass(xiao[k],'fense');
          removeClass(xiao[k],'jintian_');
      }
      
      if(date.getMonth()==1&&isrunnian(date.getFullYear())){
          meiyuetianshu[1]=29;
        }

      if(date.getMonth()-1==-1){
        var shangyuetianshu=31;
      }
      // else if(date.getMonth()==1&&isrunnian(date.getFullYear())){
      //    var shangyuetianshu=29;
        
      // }
      else{
        if(date.getMonth()==2&&isrunnian(date.getFullYear())){
          meiyuetianshu[1]=29;
        }
        var shangyuetianshu=meiyuetianshu[date.getMonth()-1];//上月天数
        
        // if(date.getMonth()==2){}
      }
      //前一月
      for(;i<L;i++){
        // xiao[i].innerHTML=31-(L-i-1);
        xiao[i].innerHTML=shangyuetianshu-(L-i-1);
       
        xiao[i].removeAttribute('id');
        xiao[i].setAttribute('pr',true);
        xiao[i].style.color='#ccc';

      }
      //当月
     
      for(;i<meiyuetianshu[date.getMonth()]+L;i++){
         // xiao[i].style.color='black';
         xiao[i].innerHTML=i-L+1;
          xiao[i].setAttribute('id','d'+(i-L+1));
          // xiao[i].setAttribute('class','');
     if(jintian_y==date.getFullYear()&&jintian_m==date.getMonth()&&xiao[i].innerHTML==jintian_d){
    // if(jintian_y==date.getFullYear()&&jintian_m==date.getMonth()&&date.getDate()==jintian_d){

        xiao[i].style.color='red';
        addClass(xiao[i],'fense');
        // xiao[i].onmouseover=function(){
        //   xiao[i].style.background='#FFBBBB';
        // };
        //  xiao[i].onmouseover=function(){
        //   xiao[i].style.background='white';
        // };

          }else{
            xiao[i].style.color='black';
          }
          


          xiao[i].removeAttribute('pr');
           xiao[i].removeAttribute('nx');
           if(jintian_y==date.getFullYear()&&jintian_d==tmp&&jintian_m==date.getMonth()&&xiao[i].innerHTML==tmp){
            addClass(xiao[i],'hong');
            xiao[i].style.color='white';
           }
          

      }
      // console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
      // if(jintian_d==date.getDate()&&jintian_m==date.getMonth()&&jintian_y==date.getFullYear()){
      //       // console.log(document.getElementById('d'+jintian));
      //       addClass(document.getElementById('d'+jintian_d),'hong');
      //     }else{removeClass(document.getElementById('d'+jintian_d),'hong');alert(1);}

    // 下一月
      var D=i;
      // if(42-D>=7){
      //     for(;i<42-7;i++){

      //    xiao[i].innerHTML=i-D+1;
      //    xiao[i].removeAttribute('id');
      //     xiao[i].style.color='#ccc';

      //     xiao[i].setAttribute('nx',true);
      //   }

      // }else{

        for(;i<xiao.length;i++){

         xiao[i].innerHTML=i-D+1;
         xiao[i].removeAttribute('id');
          xiao[i].style.color='#ccc';

          xiao[i].setAttribute('nx',true);
      }

      // }
      // for(;i<xiao.length;i++){

      //    xiao[i].innerHTML=i-D+1;
      //    xiao[i].removeAttribute('id');
      //     xiao[i].style.color='#ccc';

      //     xiao[i].setAttribute('nx',true);
      // }



    };
    huarili();
    // if(){}
    // addClass(document.getElementById('d'+jintian_d),'hong');
    // if(){}
    //数据结构

      // console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
    var prevDay=function(){
      var currentyear=date.getFullYear();
      var currentmonth=date.getMonth();
      var currentdate=date.getDate();

      var targetyear,targetmonth,targetdate;
     
      targetdate=currentdate-1;
      if(targetdate==0){
        targetyear=currentyear;
        targetmonth=currentmonth-1;
        if(targetmonth==-1){
          targetyear=currentyear-1;
          targetmonth=11;
        }
        if(targetmonth==1){
          if(isrunnian(targetyear)){
            meiyuetianshu[1]=29;
          }
        }
        targetdate=meiyuetianshu[targetmonth];

      }else{
         targetmonth=currentmonth;
          targetyear=currentyear;
      }
     
     
      date=new Date(targetyear,targetmonth,targetdate);
      
      console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
      // date=new Date(targetyear,targetmonth,targetdate);
      // console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
    };
    // prevDay();

    var nextDay=function(){
       console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
      var currentyear=date.getFullYear();
      var currentmonth=date.getMonth();
      var currentdate=date.getDate();

      var targetyear,targetmonth,targetdate;
      if(currentmonth==1&&isrunnian(currentyear)){
        meiyuetianshu[1]=29;
      }
      targetdate=currentdate+1;
      
       // targetmonth=currentmonth;
      if(meiyuetianshu[currentmonth]<targetdate){
        targetyear=currentyear;
        targetmonth=currentmonth+1;
       
        if(targetmonth==12){
          targetyear=currentyear+1;
          targetmonth=0;

        }
        targetdate=1;
      }else{
        targetmonth=currentmonth;
         targetyear=currentyear;

      }
       
     
      date=new Date(targetyear,targetmonth,targetdate);
      console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
    };
    var nowC;
    var week=['日','一','二','三','四','五','六'];
    var ondatechange=function(){  
      if(shangyige){ 
        // if(){
          while(today_pi.children.length!=0){
            today_pi.removeChild(today_pi.firstElementChild);
          }
        // }

        removeClass(shangyige,'hui');
        //  if(shangyige.getAttribute('class').indexOf('fense')!=-1){
        //   // return
        //   shangyige.style.background='#f0f0f0';
        //    // addClass(shangyige,'');
        //    // addClass(shangyige,'huih');
        // }
      }
      var xx=date.getDate();
      var el=document.getElementById('d'+xx);
        addClass(el,'hui');
      // console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
      // console.log(jintian_d,jintian_m+1,jintian_y);
      if(jintian_d==xx&&jintian_m==(date.getMonth())&&jintian_y==date.getFullYear()){
        el.style.color='red';
        // removeClass(el,'hui');
        removeClass(el,'hui');
        if(jintian_w==6||jintian_w==0){
          // el.style.background='#F7F7F7';
          a_ri.style.background='#F7F7F7';
           addClass(el,'jintian_1');

        }else{
            addClass(el,'jintian_');
        }
         
        
      addClass(el,'hong');

      el.style.color='white';
       hongxian.style.display='block';
   }else{
     removeClass(el,'hong');
   
  }
     
      shangyige=el;
     // if(jintian==xx){
     //  removeClass(el,'hui');
     //  addClass(el,'hong');
     // }

      today.innerHTML=date.getDate();
      var ss=date.getFullYear()+' 年 '+(date.getMonth()+1)+' 月 '+date.getDate()+' 日'+' 星期'+week[date.getDay()];
      detail.innerHTML=ss;
      ye_mo_d.innerHTML=ss.slice(0,-3);
      y_www.innerHTML=ss.slice(-3);

        console.log(date.getFullYear(),(date.getMonth()+1),date.getDate());


    dangtianpic();





         // ajax({
         //          // date.getTime()
         //              url:'http://localhost:3000/test?time='+(''+date.getFullYear()+(date.getMonth()+1)+date.getDate())+'&b=2',//向服务器传递参数
         //              onsuccess:function(d){
         //              // console.log(JSON.parse(d));
         //               var tmp= JSON.parse(d);
         //               for(var i=0;i<tmp.length;i++){
         //                var el=document.createElement('img');
         //                el.setAttribute('class','tupian');
         //                el.style.background='url(images/'+tmp[i]+')';
         //                el.style.backgroundSize='cover';
         //                // el.src='images/'+tmp[i];
         //                today_pi.appendChild(el);

         //               }
         //               console.table(tmp);
         //               // for(var i=0;i<tmp.length;i++){
         //               //  if(i==0){
         //                  // tu1.style.background='url('+tmp[0]+')';
                       
                        
         //                  // tu2.style.background='url('+tmp[1]+')';
                        
                         
         //                  // tu3.style.background='url('+tmp[2]+')';
                      


         //               // }
         //            }


         //          });

     
      // console.log(Number(ss.slice(0,4)));
     //  var nowdate=new Date(Date.now());
     // if(nowdate.getDate()==date.getDate()){

     //  // if(nowdate.getDate()==xx&&nowdate.getMonth()==Number(ss.slice(0,4))&&nowdate.getFull()==Number(ss.slice(0,4))){
     //    el.setAttribute('class','xiao hong');
     //    el.style.color='white';
     //  }
   
      

      

    };
    ondatechange();

    for(var i=0;i<xiao.length;i++){

      xiao[i].onclick=function(){






          for(var j=0;j<xiao.length;j++){
            if(xiao[j].getAttribute('class').indexOf('hong')!=-1){
               removeClass(xiao[j],'hong');
               xiao[j].style.color='red';
               // xiao[j].style.background='red';
                // xiao[j].onmouseover=function(){
                //   this.style.background='#FFADA9';
                //   xiao[j].onclick=function(){
                //      this.style.background='#FF3B30';
                //       this.style.color='white';
                //   };
                // };
                // xiao[j].onmouseout=function(){
                //   this.style.background='white';
                // };

            }
          
           
          }
           // if(this.getAttribute('class').indexOf('hong')!=-1){
           

           
           // }
        hongxian.style.display='none';
        if(this.getAttribute('class').indexOf('xiu')!=-1){
          a_ri.style.background='#f7f7f7';
        }else{
          // if(this.getAttribute('class').indexOf('jintian_')!=-1){
          //   a_ri.style.background='#f0f0f0';
          // }else{
            a_ri.style.background='white';
          // }
           
        }
        // shangyige=null;
        // shangyige.style.color='#ccc';
        this.onmousedown=function(e){
          e.preventDefault();
        };
        // console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
        var a=date.getFullYear();
        var b=date.getMonth();
         var c=date.getDate();
         var x,y,z;
        if(this.hasAttribute('id')){


          date.setDate(this.innerHTML);
          ondatechange();
          // console.log(date.getDate());

           














                // ajax({
                //   // date.getTime()
                //       url:'http://localhost:3000/tupian?time='+date.getDate()+'&b=2',//向服务器传递参数
                //       onsuccess:function(d){
                //       // console.log(JSON.parse(d));
                //        var tmp= JSON.parse(d);
                //        console.log(tmp);
                //        // for(var i=0;i<tmp.length;i++){
                //        //  if(i==0){
                //           tu1.style.background='url('+tmp[0]+')';
                       
                        
                //           tu2.style.background='url('+tmp[1]+')';
                        
                         
                //           tu3.style.background='url('+tmp[2]+')';
                      


                //        // }
                //     }


                //   });





          //  for(var j=0;j<b.length;j++){
          //  xiao[i].style.color='black';

          // }
        }
        else if(this.hasAttribute('pr')){
          z=this.innerHTML;
          // if(b-1==-1){
          //   x=a-1;
          //   y=11;
          // }
            // else if(b-1==1&&isrunnian(a)){
            //   meiyuetianshu[1]=29;
            // }
          // else{
            y=b-1;
            x=a;
          // }
          date=new Date(x,y,z);


          huarili();
           ondatechange();
        }
          else if(this.hasAttribute('nx')){

            z=this.innerHTML;
            // if(b+1==12){
            //   x=a+1;
            //   y=0;
            // }else{
              y=b+1;
              x=a;
            // }
            date=new Date(x,y,z);




            // 根据abc得到逻辑正确的xyz
            huarili();
             
             ondatechange();
          }

          
        
      };
    }
    le_but.onclick=function(){
      prevDay();
      huarili();
      ondatechange();
       if(date.getDay()==6||date.getDay()==0){
        a_ri.style.background='#f7f7f7';
      }else{
         a_ri.style.background='white';
      }
    };
    le_but.onmousedown=function(e){
      e.preventDefault();
    };
    ri_but.onmousedown=function(e){
      e.preventDefault();
    };
    ri_but.onclick=function(){
      nextDay();
       huarili();
      ondatechange();
       if(date.getDay()==6||date.getDay()==0){
        a_ri.style.background='#f7f7f7';
      }else{
         a_ri.style.background='white';
      }
    };
    //前往今天
    qianw.onclick=function(){
      date=new  Date();
      huarili();
      ondatechange();
    };
 // console.log(date.getFullYear(),date.getMonth()+1,date.getDate());
    // nextDay;

 // ajax({
 //          // date.getTime()
 //              url:'http://localhost:3000/tupian?time='+date.getDate()+'&b=2',//向服务器传递参数
 //              onsuccess:function(d){
 //              // console.log(JSON.parse(d));
 //               var tmp= JSON.parse(d);
 //               console.log(tmp);        
 //                  tu1.style.background='url('+tmp[0]+')';          
 //                  tu2.style.background='url('+tmp[1]+')';
 //                  tu3.style.background='url('+tmp[2]+')';
              


          
 //            }


 //          });






   
  		// d.setDate(5);
  		// console.log(d);
  	// var mm=new Date();
  	// // var today
  	// var xianshi=function(mm){
  	// 	$('today').innerHTML=mm.getDate();
  	// 	// mm.setFullYear(2000);
  	// 	$('yyy').innerHTML=mm.getFullYear();
  	// 	$('mmm').innerHTML=mm.getMonth()+1;
  	// 	$('ddd').innerHTML=mm.getDate();
  	// 	var biall=mm.getDay();
  	// 	if(biall==1){biall='一'};
  	// 	if(biall==2){biall='二'};
  	// 	if(biall==3){biall='三'};
  	// 	if(biall==4){biall='四'};
  	// 	if(biall==5){biall='五'};
  	// 	if(biall==6){biall='六'};
  	// 	if(biall==0){biall='日'};
  	// 	// switch
  	// 	$('www').innerHTML='星期'+biall;
  	// 	$('y_www').innerHTML='星期'+biall;
  	// 	$('he_ddd').innerHTML=mm.getDate();
  	// 	$('he_yyy').innerHTML=mm.getFullYear();
  	// 	$('he_mmm').innerHTML=mm.getMonth()+1;

  	// };
  	// xianshi(mm);
  	// var ondatechange=function(e){
  	// 	if(e.getAttribute('class').indexOf('xiu')!=-1){
  	// 		e.setAttribute('class','xiao hui xiu');
  	// 	}

  	// 	else{
  	// 		e.setAttribute('class','xiao hui');
  	// 	}
  	// 	mm.setDate(Number(e.innerHTML));
  	// 	xianshi(mm);
  		
  	// };
  	// var onpr=function(e){
  	// 	if(e.getAttribute('class').indexOf('xiu')!=-1){
  	// 		e.setAttribute('class','xiao xiu');
  	// 	}else{
  	// 		e.setAttribute('class','xiao');
  	// 	}
  	// };
  	
  	// console.log(d.getDate());
  	// var xiao=document.getElementsByClassName('xiao');
   //  var x_age=document.getElementsByClassName('x_age');
   //   console.log(x_age);
   //    console.log($('tbody').lastElementChild.nextElementSibling);
   //  x_age[0].onclick=function(){
   //    console.log($('tbody').firstElementChild);
   //    while($('tbody').firstElementChild){
   //      $('tbody').removeChild($('tbody').firstElementChild);
   //    }
   //  };
  	// var currentIndex;
  	// for(var i=0;i<xiao.length;i++){
  	// 	xiao[i].index=i;
  	// 	if(xiao[i].innerHTML==d.getDate()+''){
  	// 		var a=i;
  	// 		xiao[i].setAttribute('class','xiao hong');
  	// 	}
  	// 	xiao[i].onclick=function(e){
  	// 		e.preventDefault();
  	// 		if(this.index==a){
  				
  	// 			if(!currentIndex){
  	// 				ondatechange(xiao[this.index]);
  	// 			}else{
  	// 				onpr(currentIndex);
  	// 				ondatechange(xiao[this.index]);
  	// 			}
  	// 			xiao[this.index].setAttribute('class','xiao hong');
  				
  	// 			return;
  	// 		}
  	// 		if(!currentIndex){
  	// 			ondatechange(xiao[this.index]);
  	// 		}else{
  	// 			onpr(currentIndex);
  	// 		}
  			
  			
  	// 		currentIndex=xiao[this.index];
  	// 		ondatechange(currentIndex);
  	// 	}
  	// }





  	
  	// $('among').style.left=$('scene').offsetWidth-$('among').offsetWidth/2+'%';

//红心大战

};//最后