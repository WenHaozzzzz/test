// pages/eat/eat.js
Page({
  data: {
    food: '点击按钮开始选择',
    buttonText: '开始',
    scrolling: false,
    dishes: [
      '红烧肉', '宫保鸡丁', '麻婆豆腐', '水煮鱼', '糖醋排骨',
      // ...其他菜品...
    ],
    intervalId: null
  },

  toggleScroll: function() {
    if (this.data.scrolling) {
      this.stopScrolling();
    } else {
      this.startScrolling();
    }
  },

  startScrolling: function() {
    this.setData({ buttonText: '停止', scrolling: true });
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.data.dishes.length);
      this.setData({ food: this.data.dishes[randomIndex] });
    }, 100); // 每100毫秒更新一次
    this.setData({ intervalId: intervalId });
  },

  stopScrolling: function() {
    clearInterval(this.data.intervalId);
    this.setData({ buttonText: '开始', scrolling: false, intervalId: null });
    // 不重置 food，保留当前显示的菜名
  }
});
