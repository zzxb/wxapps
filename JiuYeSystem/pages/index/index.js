//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    navItems:[
      {
        name:'企业信息',
        url:'../AllInfo/Comp/CompSearch/CompSearch',
        img:'../../img/tubiao1.png'
      },
      {
        name:'学生信息',
        url:'../AllInfo/Students/StuSearch/StuSearch',
        img:'../../img/tubiao2.png'
      },
      {
        name:'面试信息',
        url:' ',
        img:'../../img/tubiao3.png'
      } 
    ]
  },
  
  onLoad: function () {
    
    console.log('onLoad-index');
  }
  
})
