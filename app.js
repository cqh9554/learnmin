// app.js
App({
  onLaunch:function(){
    wx.getUserInfo({
      success:(res)=>{
        console.log(res)
      }
    })
  },
  onShow:function(options){
    console.log(options)
  },
  
})
