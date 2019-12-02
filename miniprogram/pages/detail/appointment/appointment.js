// pages/appointment/appointment.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // onPullDownRefresh: function () {
    //   wx.stopPullDownRefresh()
    // },
    myinfo:null,
    phone:'',
    /*
    myinfoname:12,
    myinfono:12,
    myinfohos:12,
    myinfodoctor:12,*/

  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var str = options.str;  //使用phone接收传过来的数据
    var _this = this    //????为什么需要转化一下?????
    _this.setData({
      phone:str
    })
    console.log("接收到的参数是str=" + str)

    //根据手机号查询数据
    db.collection('patient').where({
      Pno:_this.data.phone      //this.data.phone
    }).get({
      success:function(res){

        console.log(res.data[0])   //返回一个数组，所以使用res.data[0],
        _this.setData({
          myinfo:res.data[0]     //myinfo接收查询到的数据
        })

      }
    })


  },
  exit: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')

          //页面跳转,
          wx.redirectTo({
            url: '/pages/online/online',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  delete1:function(e){
    var _this = this
    wx.showModal({
      title: '提示',
      content: '是否确认取消',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          
          const todos = db.collection('patient')    //删除数据
          db.collection('patient').doc(_this.data.phone).remove({
            success: function (res) {
              console.log(res.data)
            }
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

})
