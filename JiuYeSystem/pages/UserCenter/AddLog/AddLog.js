//获取应用实例
var app = getApp()
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
}
Page({
     data: {
       date:"2016-10-26",
      arrow2:"../../../img/arrow2.png" ,
      inputValue:'',
      switchChange:true
   },
   takephoto:function(){
            wx.chooseImage({
              count: 3, // 默认9
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType:  'camera', // 可以指定来源是相册还是相机，默认二者都有
              success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
              }
            })
   },
   switchChange: function (e){
     if(e.detail.value){
      this.setData({
        switchChange:true
      })
    }else{
      this.setData({
        switchChange:false
      })
    }
   },
   bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
   cancel : function() {   
     wx.navigateTo({
       url: '../UserLog/UserLog'
     })
  }
   
  //  takevoice:function(){
  //         wx.startRecord({
  //             success: function(res) {
  //               var tempFilePath = res.tempFilePath ;
  //               console('startRecord------');
  //             },
  //             fail: function(res) {
  //               //录音失败
                
  //             }
  //           })
  //           setTimeout(function() {
  //             //结束录音  
  //             wx.stopRecord()
  //           }, 10000)
  //  }
})
