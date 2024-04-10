// index.js
Page({
  data:{
    name:'cqh',
    sum:0,
    left: 20,
    top: 250,
    isIos: true
  },
  ff(){
    console.log('')
    this.data.sum++
    this.setData({
      sum:this.data.sum+1
    })
    console.log(this.data.sum)
  },
  getu(event){
    console.log(event)
    wx.openEmbeddedMiniProgram("wxe5f52902cf4de896")
  },
  setTouchMove: function (e) {
    if (e.touches[0].clientX > 0 && e.touches[0].clientY > 0) {
      this.setData({
        left: e.touches[0].clientX - 30,
        top: e.touches[0].clientY - 30
      })
    } else {
      this.setData({
        left: 20, //默认显示位置 left距离
        top: 250  //默认显示位置 top距离
      })
    }
  },

})
