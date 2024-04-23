// components/first-cpn/first-cpn.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    text:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 抛出事件取名为“djadd1”,第一个{}传递数据，第二个{}传递options,
    dj(){
      this.triggerEvent('djadd1',{},{})
    }
  }
})