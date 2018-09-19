//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util');
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    banner: null,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    txtAds: null,
    advertise: null,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    vertical: true,
    circular: true,
    top: 0,
    toView: 'red',
    scrollTop: 100,
    windowHeight:"",
    windowWidth : 0,
   flexWrpedTop : 0,
  },

  /**
   * 入口
   */
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight + "px",
          windowWidth : res.windowWidth
          
        })
        that.setData({
          flexWrpedTop: that.calculateRpxToPx(200)
        })
        console.log("wwww",that.data.flexWrpedTop)
      }
    })
   
  },
  //控制回到顶部按钮的显示与消失
  scrollTopFun(e) {
    console.log(e)
    let that = this;
that.setData({
  top: e.detail.scrollTop
})
    
  },
  //计算手机rpx   rpx--->px
  calculateRpxToPx: function(no){
    let that = this;
    let rpx = that.data.windowWidth/750;
    return parseInt(no * rpx)
  }
});