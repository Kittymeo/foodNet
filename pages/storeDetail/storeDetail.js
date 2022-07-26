const app = getApp()
Page({
  data: {
    toView: 'one',
    scrollLeft: 0,
    itemInfo:[
			{name: "cheesecake", avatar: '/image/profilepics/profile_pic.png', event:'detail1'},
			{name: "berry", avatar: '/image/profilepics/pic1.jpeg', event:'detail2'},
			{name: "sandwich", avatar: '/image/profilepics/pic2.jpeg', event:'detail3'},
			{name: "pizza", avatar: '/image/profilepics/pic3.jpeg', event:'detail4'}
		],
    scrolls:[
      {name: "Pets Friendly",tag:'one' },
      {name:"Neat",tag:'two'},
      {name: "Night Bird", tag: 'three'},
      {name:"Early Bird",tag: 'four'},
      {name:"Non Smoker", tag:'five'},
      {name: "Party Person", tag:'six'},
    ],
    currentIndex:0,
    height:0,
    login: false,
    content: [
      {text: "My Saved Roommates"},
      {text: "Invitations"}
    ],
    
  },
  onLoad() {
    const that = this;
    wx.getSystemInfo({
      success (res) {
        that.setData({
          height :res.windowHeight
        })
      }
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
  goDonate(){
    wx.navigateTo({
      url: '../donate/donate',
    })
  }

})