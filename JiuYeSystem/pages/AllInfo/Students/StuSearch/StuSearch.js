{
    Page({
      data:{
        // text:"这是一个页面"
        select:false,
        selected:"姓名"
      },
      selectbox:function(e){
        this.setData({
            select:true
        })
      },
      selectName:function(e){
        this.setData({
          selected:"姓名",
          select:false
        })
      },
      selectYear:function(e){
        this.setData({
          selected:"年级",
          select:false
        })
      },
      searchshow:function(){
          wx.navigateTo({
              url:'../SearchShow/SearchShow'
          })
      },
      onLoad:function(options){
        // 页面初始化 options为页面跳转所带来的参数
      },
      onReady:function(){
        // 页面渲染完成
      },
      onShow:function(){
        // 页面显示
      },
      onHide:function(){
        // 页面隐藏
      },
      onUnload:function(){
        // 页面关闭
      }
    })
}