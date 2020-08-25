Page({
  data:{
    imagePath:''
  },
  handleChooseAlbum(){
    //系统api让用户在相册中选择图片(或者拍照)
    // console.log('iii');
    wx.chooseImage({
      success:(res) =>{
        // console.log(res);
        //取出路径
        const path = res.tempFilePaths[0]

        //设置imagePath
        this.setData({
          imagePath:path
        })
      }
    })
  },
  imageLoad(){
    console.log('---');
    
  }
})