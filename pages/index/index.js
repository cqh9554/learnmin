// index.js
Page({
  data:{
    name:'cqh',
    left: 20,
    top: 250,
    isIos: true,
    nowtime:new Date().toLocaleString(),
    sum:0,
    count:0
  },
  shuadd1(){
    const cpn = this.selectComponent('#cpn1')
    console.log(cpn,cpn.data)
    cpn.setData({
      shu:cpn.data.shu+20
    })
  },
  // 定义cpnadd1方法，修改数据
  cpnadd1(){
    // 页面上的数据也会跟着改变而该改变 
    this.setData({
      count:this.data.count+1
    })
  },
  dj(event){
    console.log('ok')
    // 传递的数据放在了currentTarget中的dataset里
    console.log(event)
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowtime:new Date().toLocaleTimeString(),
        sum:this.data.sum+1
      })
    },1000)
    
  },
  ff(){
    const _this = this
    console.log(_this.data)
    console.log('')
    this.data.sum++
    this.setData({
      sum:this.data.sum+1
    })
    console.log(this.data.sum)
  },
  getu(event){
    console.log(event)
    wx.openEmbeddedMiniProgram({appId:"wxe5f52902cf4de896",path: "pages/payment/index",success:()=>{console.log('跳转成功')}})
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
