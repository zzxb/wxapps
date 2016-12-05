{
    Page({
      data:{
        // text:"这是一个页面"
        select:false,
        selected:"姓名",
        RowItems:[
         {
            stuname:'张三风',
            stuyear:'2013',
            stuclass:'计算机4班',
            phone:'15953102060',
            url:"../studentinfo/studentinfo",
            isrow:true
         },
         {
            stuname:'李四',
            stuyear:'2013',   
            stuclass:'计算机3班', 
            phone:'15953102060',                    
            url:"../studentinfo/studentinfo",
            isrow:false
         },
         {
            stuname:'李四',
            stuyear:'2013',   
            stuclass:'计算机3班',
            phone:'15953102060',                     
            url:"../studentinfo/studentinfo",
            isrow:true
         },
         {
            stuname:'李四',
            stuyear:'2013',   
            stuclass:'计算机3班',
            phone:'15953102060',                    
            url:"../studentinfo/studentinfo",
            isrow:false
         },
         {
            stuname:'李四',
            stuyear:'2013',   
            stuclass:'计算机3班',
            phone:'15953102060',                     
            url:"../studentinfo/studentinfo",
            isrow:true
         },
         {
            stuname:'李四',
            stuyear:'2013',   
            stuclass:'计算机3班',
            phone:'15953102060',                     
            url:"../studentinfo/studentinfo",
            isrow:false
         }
     ]
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
      makephone:function(e){
         wx.showModal({
          title: '提示',
          content: '确定要拨打该同学电话吗',
          success: function(res) {
            if (res.confirm) {
              wx.makePhoneCall({
                phoneNumber: '15953102133' //如何动态获取电话号码！？？？？
              })
              console.log('用户点击确定')
            }
          }
        })
        // wx.makePhoneCall({
        //   phoneNumber: e.detail.value //仅为示例，并非真实的电话号码
        // })
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