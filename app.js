var express=require('express');
var app=express();
var http=require('http').Server(app);
app.use(express.static('public'));//让public文件可以通过/直接访问
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	// res.json(array);

});
var database={};
var fs=require('fs');
fs.readdir('./public/pics/',function(err,files){
	// console.log(files);
	// console.log(files.length);
	for(var i=0;i<files.length;i++){
		fs.stat('./public/pics/'+files[i],(function(i){
				return	function(err,info){
							var mtime=info.mtime;
							// console.log(info);
							var key=mtime.getFullYear()+'-'+mtime.getMonth()+'-'+mtime.getDate();
							// console.log(key);
							if(!database[key]){
								database[key]=[];
							}
							database[key].push(files[i]);
							console.log(database);

				}
		})(i));	
	}
});

app.get('/tupian',function(req,res){

	// console.log(database);
	if(database[req.query.time]){
		res.json(database[req.query.time]);
	}else{
		res.send('none');
	}

	// res.sendFile(__dirname+'/index.html');
	// res.json(array);

});

http.listen(3000,function(){
	console.log('listening on *:3000');
});




//我们的目标：把shenqi={}
// // 变成
// var shenqi={
// 	123:[{time:早上3点,src:'a.jpg'},{time:早上3点,src:'a.jpg'},{time:早上3点,src:'a.jpg'}]
// };

// var fn=(function(){
// return function(){}
// })(i);

// var fs=require('fs');

// fs.readdir('./public/images',function(err,files){
	
// 	for(var i=0;i<files.length;i++){

// 		// console.log(files[i]);
// 		// // files[i].index=i;
// 		// var aa=files[i];

// 		fs.stat('./public/images/'+files[i],(function(x){
// 			// console.log(stats.ctime);
// 			// console.log(x);

// 			return function(err,stats){
					
// 					var shuxing=''+stats.ctime.getFullYear()+(stats.ctime.getMonth()+1)+stats.ctime.getDate();
// 				// var time=''+stats.ctime.getHours()+':'+stats.ctime.getMinutes()+':'+stats.ctime.getSeconds();
				
// 					if(!shenqi[shuxing]){
// 						shenqi[shuxing]=[];
// 					}
// 					shenqi[shuxing].push(files[x]);
// 					if(x==files.length-1){
// 						// res.json(shenqi[req.query.time]);
// 						// res.json(database[req.query.time]);
// 						console.log(shenqi);
// 					}	
			

// 				};
			
			

// 		})(i));


// 	}
// });
// console.log(shenqi);
 // console.log('-------------------------');
 // console.log(shenqi);
// console.log(shenqi);

	// +files[i],function(err,stats){
	// console.log(stats,ctime);
// });
	// console.log(shenqi);

// app.get('/test',function(req,res){
// 	var shenqi={};
// 	// console.log(req.query.time,req.query.b);
// 	fs.readdir('./public/images',function(err,files){
	
// 		for(var i=0;i<files.length;i++){

// 			// console.log(files[i]);
// 			// // files[i].index=i;
// 			// var aa=files[i];
// 			fs.stat('./public/images/'+files[i],(function(x){
// 				// console.log(stats.ctime);
// 				// console.log(x);
// 				return function(err,stats){

// 						var shuxing=''+stats.ctime.getFullYear()+(stats.ctime.getMonth()+1)+stats.ctime.getDate();
// 					// var time=''+stats.ctime.getHours()+':'+stats.ctime.getMinutes()+':'+stats.ctime.getSeconds();
					
// 						if(!shenqi[shuxing]){
// 							shenqi[shuxing]=[];
// 						}
// 						shenqi[shuxing].push(files[x]);
// 						if(x==files.length-1){
// 							if(shenqi[req.query.time+'']){
// 								res.json(shenqi[req.query.time+'']);
// 							}
							
// 							// res.json(database[req.query.time]);
// 							// console.log(shenqi);
// 						}	
				

// 					};
				
				

// 			})(i));


// 		}
// 	});
// });



// 上面这些代码实质做了些什么事

// 所谓的web服务器软件，就是让电脑上的某个文件变成公开的
// 任何人都可以通过ip地址请求这个文件夹里的内容
// 前提是请求时要描述清楚双方交流的语言（采用http协议）



// 什么是服务器
// 怎么访问服务器上的数据
// node.js是什么
// 为什么需要服务器
// 什么是url
// 什么是http协议

// 当我们在浏览器中输入http://www.baidu.com的时候 究竟发生了什么



// ajax是什么
// 使用它有什么好处
// 利用ajax和node.js可以做什么
// 例子

// for(var i=0;i<12;i++){
// 	console.log(i);
// }

// node.js 解析js代码
// 操作系统中运行

// 网络的好处
// 服务器模式服务范围是无限的

// 客户端服务器
// 浏览器根据url发起http请求
// 服务器（）根据请求的内容做出回应

// js发起http请求