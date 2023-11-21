// pages/menu/menu.js
Page({
  navigateToEat: function() {
    // 确保 '/pages/eat/eat' 是您的小程序中“吃什么”页面的正确路径
    wx.navigateTo({
      url: '/pages/eat/eat'
    });
  },
  navigateToDrink: function() {
    // 确保 '/pages/drink/drink' 是您的小程序中“喝什么”页面的正确路径
    wx.navigateTo({
      url: '/pages/drink/drink'
    });
  },
  navigateToWear: function() {
    // 确保 '/pages/wear/wear' 是您的小程序中“穿什么”页面的正确路径
    wx.navigateTo({
      url: '/pages/wear/wear'
    });
  },
  navigateToPlay: function() {
    // 确保 '/pages/play/play' 是您的小程序中“玩什么”页面的正确路径
    wx.navigateTo({
      url: '/pages/play/play'
    });
  }
});
