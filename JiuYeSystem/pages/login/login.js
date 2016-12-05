//获取应用实例
var app = getApp()
Page({
   data: {
     aa:'500px '
   },
   onLoad:function(){
     
   },  
   //事件处理函数
  loginOk : function() {
    
     wx.navigateTo({
       url: '../index/index'
     })
  }
})


// wx.getSystemInfo({
//         success:function(res){
//           scrHeight=res.windowHeight+'px' ;  
//           console.log('height:----'+scrHeight);
//         },
//      })