// pages/eat/eat.js
Page({
  data: {
    itemName: '点击按钮开始选择', // Initial text displayed
    buttonText: '开始', // Initial button text
    scrolling: false, // State to track if it's currently scrolling
    items: [
      // List of dishes to choose from
      '红烧肉', '宫保鸡丁', '麻婆豆腐', '水煮鱼', '糖醋排骨', '青椒肉丝',
      // ... more dish names ...
    ],
    intervalId: null // To hold the interval ID for clearing later
  },

  // Function to handle the button press
  toggleScroll: function() {
    // Check if it's currently scrolling
    if (this.data.scrolling) {
      this.stopScrolling(); // If it is, then stop scrolling
    } else {
      this.startScrolling(); // If it's not, start scrolling
    }
  },

  // Function to start scrolling through dish names
  startScrolling: function() {
    // Update the button text to "Stop" and set scrolling to true
    this.setData({ buttonText: '停止', scrolling: true });

    // Start an interval to change the dish name every 100 milliseconds
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.data.items.length); // Get a random index
      this.setData({ itemName: this.data.items[randomIndex] }); // Set a new dish name based on the random index
    }, 100);

    // Store the interval ID so we can clear it later
    this.setData({ intervalId: intervalId });
  },

  // Function to stop scrolling through dish names
  stopScrolling: function() {
    // Clear the interval using the stored ID
    clearInterval(this.data.intervalId);
    
    // Update the state and button text to reflect that scrolling has stopped
    // Note: We don't update itemName here because we want to show the last selected dish name
    this.setData({ buttonText: '开始', scrolling: false, intervalId: null });
  }
});
