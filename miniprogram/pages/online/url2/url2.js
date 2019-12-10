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
              name: '向瑜',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '谢京波',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '胡刚',
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
              name: '林甜',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '余红亚',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "口腔科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '党平',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '黑博',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '史铁钧',
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
              name: '裘静',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '刘文博',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '白小军',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            }
          ]
      },
      {
        cate_id: 5,
        cate_name: "精神心理科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '王韬',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '赵全军',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '顾建文',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            }
            
          ]
      },






      {
        cate_id: 6,
        cate_name: "妇产科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '李连峰',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '崔绍',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '胡治刚',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            }

          ]
      },
      {
        cate_id: 7,
        cate_name: "儿科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '贾风云',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 2,
              name: '谢京波',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },
            {
              child_id: 3,
              name: '崔绍杰',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            }

          ]
      },
      {
        cate_id: 8,
        cate_name: "骨外科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '黄豪',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },

          ]
      },
      {
        cate_id: 9,
        cate_name: "肿瘤科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '王培新',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574652161331&di=ab4f09122492749ca3488cc8449e20cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F40%2F91%2F47%2F5934ca24474e3.png"
            },

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
