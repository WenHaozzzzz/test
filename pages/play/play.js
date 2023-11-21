// pages/play/play.js
Page({
  data: {
    activityName: '点击按钮开始选择活动',
    buttonText: '开始选择',
    scrolling: false,
    activities: [
      '去公园散步', '看电影', '参观博物馆', '打篮球', '阅读', '写日记',
      // ...其他活动...
    ],
    intervalId: null
  },

  toggleActivityScroll: function() {
    if (this.data.scrolling) {
      this.stopScrolling();
    } else {
      this.startScrolling();
    }
  },

  startScrolling: function() {
    this.setData({ buttonText: '停止选择', scrolling: true });
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.data.activities.length);
      this.setData({ activityName: this.data.activities[randomIndex] });
    }, 50); // 更新频率为 50 毫秒
    this.setData({ intervalId: intervalId });
  },

  stopScrolling: function() {
    clearInterval(this.data.intervalId);
    this.setData({ buttonText: '开始选择', scrolling: false, intervalId: null });
    // 不重置 activityName，保留当前显示的活动
  }
});
