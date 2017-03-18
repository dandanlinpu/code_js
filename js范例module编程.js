<script>
jQuery="jQuery";	    	//jquery库
var MAIN_APP=new Object;	//其他文件定义的module，在这里将被扩展
(function($,APP){
	//扩展module模块
	var	module=(function(module){
			//私有部分
            var a=1;
			var b=2;
			var run=function(){
				alert(a+""+b);
			}	
            //对module外部接口扩展
			module.init=function(){alert($);} //扩展一个方法
 			module._run=(function(){ //扩展一个模块_run应引用一个对象：1个闭包对应返回一个对象(Object)
				return{
					   pos:1,
					   run:function(){
						   run()
						   }
					}
				   })();
			return module;
			})(MAIN_APP)
	//该闭包内其他代码使用module模块
	module.init();
})(jQuery,MAIN_APP) //其他文件中定义的APP主题

//在document.ready中可以调用
alert(MAIN_APP._run.pos);
MAIN_APP._run.run();

</script>
