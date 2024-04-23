// components/top-tabar/top-tabar.js
Component({
multipleSlot:true,
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    morenindex:0,
    shu:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changecolor(event){
      console.log(event.currentTarget.dataset.index)
      
      this.setData({
        morenindex:event.currentTarget.dataset.index
      })
    }
  }
})