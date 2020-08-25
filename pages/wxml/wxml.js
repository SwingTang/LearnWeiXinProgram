// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好小程序',
    firstname:'Kobe',
    lastname:'btynat',
    age:20,
    nowtime:new Date().toLocaleString(),
    isClass:false,
    isShow:false,
    score:60,
    movies:['星际穿越','盗梦空间','大话西游'],
    nums:[
      [1,2,4,5],
      [4,22,44,5],
      [6,5,64,5],
      [8,4,2,4]
    ]
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowtime:new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor(){
    // console.log('0000');
    this.setData({
      isClass:!this.data.isClass
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  numberToFixed(value){
    return value.ToFixed(2)
  }
})