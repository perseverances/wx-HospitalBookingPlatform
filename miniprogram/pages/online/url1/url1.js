// pages/online/url/url.js
Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "外科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '齐强',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '梁海龙',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '刘茁',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 4,
              name: '吴超',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "内科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '张晶晶',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '白瑾',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '刘作静',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 4,
              name: '魏玲',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "妇儿",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '田慧',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '陈练',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '鲁珊',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 4,
              name: '杨俊芳',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "中医科",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})
