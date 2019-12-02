// pages/online/url3/url3.js
// pages/online/url2/url2.js
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
              name: '迟成',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '李飞',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '平浩',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 4,
              name: '杨澎',
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
              name: '周建博',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '赵亚丽',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '毕春山',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 4,
              name: '段丽军',
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
              name: '黄鲁',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '赵莲',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '黄东生',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 4,
              name: '张季媛',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "眼科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '王钢',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            }
          ]
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
