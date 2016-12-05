{
    Page({
      data:{
        // text:"这是一个页面"
        selected:true,
        selected1:false,
        selected2:false,
        state:2,
        star:3*30,
        startext:'该生表现良好，编程能力一般。思维活跃。学习态度认真。'
      },
      selected:function(e){
        this.setData({
            selected1:false,
            selected:true,
            selected2:false
        })
    },
    selected1:function(e){
        this.setData({
            selected:false,
            selected1:true,
            selected2:false
        })
    },
    selected2:function(e){
        this.setData({
            selected:false,
            selected2:true,
            selected1:false
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