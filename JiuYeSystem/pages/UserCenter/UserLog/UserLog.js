//获取应用实例
var app = getApp()
 function thismonth(date) {
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      var d = date.getDate()
      return y+"-"+m
    }
Page({
    
     data: {
       weeks:[
        {
          weekday:'日'
        },{
          weekday:'一'
        },{
          weekday:'二'
        },{
          weekday:'三'
        },{
          weekday:'四'
        },{
          weekday:'五'
        },{
          weekday:'六'
        }],
       thismonth:{thismonth},
       days:[
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         },
         {
           day:"",
           thing:""
         }
       ]
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
  },
      bindYearChange: function(e) {
        this.setData({
          year: e.detail.value
        })
      },
      bindMonthChange: function(e) {
        this.setData({
          month: e.detail.value
        })
      },
      AddLog:function(){
          wx.navigateTo({
              url:'../AddLog/AddLog'
          })
      },
      LogDetail:function(){
          wx.navigateTo({
              url:'../LogDetail/LogDetail'
          })
      }
})