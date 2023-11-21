// pages/wear/wear.js
Page({
  data: {
    outfit: '点击按钮开始选择穿着',
    buttonText: '开始选择',
    scrolling: false,
    clothes: [
      'T恤和牛仔裤', '卫衣和休闲裤', '衬衫和西裤', '风衣和长裤', '针织衫和裙子',
      // ...其他穿着选项...
    ],
    intervalId: null
  },

  toggleClothesScroll: function() {
    if (this.data.scrolling) {
      this.stopScrolling();
    } else {
      this.startScrolling();
    }
  },

  startScrolling: function() {
    this.setData({ buttonText: '停止选择', scrolling: true });
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.data.clothes.length);
      this.setData({ outfit: this.data.clothes[randomIndex] });
    }, 50); // 更新频率为 50 毫秒
    this.setData({ intervalId: intervalId });
  },

  stopScrolling: function() {
    clearInterval(this.data.intervalId);
    this.setData({ buttonText: '开始选择', scrolling: false, intervalId: null });
    // 不重置 outfit，保留当前显示的穿着
  }
});
