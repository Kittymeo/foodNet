const app = getApp()
Page({
  data: {
    setting: {
        scale: 15,
        latitude: 40.015433,
        longitude: 116.392593
      },
    markers: [{
        id: 1,
        latitude: 40.040736,
        longitude: 116.273031,
        width: 34,
        height: 34,
        iconPath: '../../image/mapPin.png'
      },{
        id: 2,
        latitude: 39.992553,
        longitude: 116.273117,
        width: 34,
        height: 34,
        iconPath: '../../image/mapPin.png'
      },{
        id: 3,
        latitude: 39.895690,
        longitude: 116.321182,
        width: 34,
        height: 34,
        iconPath: '../../image/mapPin.png'
      },{
        id: 4,
        latitude: 40.015433,
        longitude: 116.392593,
        width: 34,
        height: 34,
        iconPath: '../../image/mapPin.png'
      },{
        id: 5,
        latitude: 39.917548,
        longitude: 116.324959,
        width: 34,
        height: 34,
        iconPath: '../../image/mapPin.png'
      }],
      points: [{
        latitude: 40.040736,
        longitude: 116.273031,
      },{
        latitude: 39.992553,
        longitude: 116.273117,
      },{
        latitude: 39.895690,
        longitude: 116.321182,
      },{
        latitude: 40.015433,
        longitude: 116.392593,
      },{
        latitude: 39.917548,
        longitude: 116.324959,
      }],
    toView: 'one',
    scrollLeft: 0,
    
    currentIndex:0,
    height:0,
    login: false,
   
    
    
  },
  onLoad (){
    const mapCtx = wx.createMapContext('map', this);
      mapCtx.includePoints({
        points: this.data.points,
        padding: [36, 36, 10, 36]
      })
  },
  onShow() {
    const that = this
    if (!that.login) {
      wx.getStorage({
        key: 'userinfo',
        success(res){
          that.setData({
            login: res.data ? true : false,
          })
        }
      })
    }
  },
  checkItem(e) {
    const that = this;
    if (this.data.currentIndex === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentIndex: e.target.dataset.index
      })
    }
  },
  // 滑动切换tab
  changeTab(e) {
    const that = this;
    that.setData({
      currentIndex:e.detail.current
    })
  },
  goStore(){
    wx.navigateTo({
      url: '../storeDetail/storeDetail',
    })
  },
  goMyStore(){
    wx.navigateTo({
      url: '../storeDetail/storeDetail',
    })
  },

})