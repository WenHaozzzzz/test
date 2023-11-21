// pages/drink/drink.js
Page({
  data: {
    itemName: '点击按钮开始选择',
    buttonText: '开始',
    scrolling: false,
    drinks: [
      '奶茶', '绿茶', '红茶', '咖啡', '果汁', '汽水', '水',
      // ... other drink names ...
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
      const randomIndex = Math.floor(Math.random() * this.data.drinks.length);
      this.setData({ itemName: this.data.drinks[randomIndex] });
    }, 100);
    this.setData({ intervalId: intervalId });
  },

  stopScrolling: function() {
    clearInterval(this.data.intervalId);
    this.setData({ buttonText: '开始', scrolling: false, intervalId: null });
  }
});
