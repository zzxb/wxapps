//获取应用实例
var app = getApp()
Page({
   data: {
     arrow2:"../../../../img/arrow2.png", 
     hidden:true,
     select:false,
     selected:"按企业名称",
     RowItems:[
         {
            compname:'中兴济南公司1',
            url:'../CompDetail/CompDetail',
            isrow:true
         },
         {
            compname:'中兴济南公司2',
            url:'../CompDetail/CompDetail',
            isrow:false
         },
         {
            compname:'中兴济南公司3',
             url:'../CompDetail/CompDetail',
            isrow:true

         },
         {
            compname:'中兴济南公司4',
             url:'../CompDetail/CompDetail',
            isrow:false
         },
         {
            compname:'中兴济南公司5',
            url:'../CompDetail/CompDetail',
            isrow:true
         },
         {
            compname:'中兴济南公司6',
            url:'../CompDetail/CompDetail',
            isrow:false
         },
         {
            compname:'中兴济南公司7',
             url:'../CompDetail/CompDetail',
            isrow:true
         } 
     ]
   },
   
   onLoad:function(){
     
       wx.getSystemInfo({
        success:function(res){
          var scrheight=res.windowHeight+'px';  
          console.log('height:----'+scrheight);
        } 
     })
   },
  selectbox:function(e){
        this.setData({
            select:true
        })
      },
  selectName:function(e){
        this.setData({
          selected:"按企业名称",
          select:false
        })
      },
  selectLxr:function(e){
        this.setData({
          selected:"按联系人",
          select:false
        })
      },
  toCompD:function(){
      wx.navigateTo({
              url:'../CompShow/CompShow'
          })
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
