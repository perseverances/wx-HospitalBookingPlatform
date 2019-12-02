// pages/tabTwo/tabTwo.js
const db = wx.cloud.database()
var zhenzisms = require('./../utils/zhenzisms.js');
//获取应用实例
const app = getApp();

Page({

  // 页面的初始数据
  data: {
    hidden:false,   //false意为不隐藏
    btnValue:'获取验证码',
    btnDisabled: false,   //禁用
    name: '',
    phone: '',
    code: '',
    second: 60
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {

  },

  //手机号输入
  bindPhoneInput(e){
    console.log(e.detail.value);
    var val= e.detail.value;
    this.setData({
      phone: val
    })
    if (val != '') {   //显示'获取验证码'的提示
      this.setData({
        hidden: false,
        btnValue: '获取验证码'
      })
    } else {
      this.setData({
        hidden: false
      })
    }
  },

  //验证码输入
  bindCodeInput(e) {
    this.setData({
      code: e.detail.value
    })
  },

  //获取短信验证码
  getCode(e) {
    if (this.data.phone.length != 11) { //判断手机号长度
      wx.showModal({
        title: '提示',
        content: '请您输入符合规范的手机号',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    
    console.log('获取验证码');
    var that = this;
    zhenzisms.client.init('https://sms_developer.zhenzikj.com', '103124', '995fa545-c664-48ff-9ba8-c38a3621ba7b');
    zhenzisms.client.send(function (res) {
      if (res.data.code == 0) {
        that.timer();
        return;
      }
      wx.showToast({
        title: res.data.data,
        icon: 'none',
        duration: 2000
      })
    }, this.data.phone, '验证码为:3322');
  },

  //短信验证码时间倒计时
  timer: function () {
    let promise = new Promise((resolve, reject) => {
      let setTimer = setInterval(
        () => {
          var second = this.data.second - 1;
          this.setData({
            second: second,
            btnValue: second + '秒',
            btnDisabled: true
          })
          if (this.data.second <= 0) {
            this.setData({
              second: 60,
              btnValue: '获取验证码',
              btnDisabled: false
            })
            resolve(setTimer)
          }
        }
        , 1000)
    })
    promise.then((setTimer) => {
      clearInterval(setTimer)
    })
  },

  //登录
  save(e) {
    console.log('手机号: ' + this.data.phone);
    console.log('验证码: ' + this.data.code);

    //省略提交过程

    if (this.data.code =='3322'){

      //查询数据库有这个手机号预约信息
      db.collection('patient').where({
        Pno:this.data.phone
      })
      .get({
        success:function(res){    //查询成功则执行
          console.log(res.data)

        }
      })
      
      wx.navigateTo({     //页面跳转  参考：https://blog.csdn.net/Yanzudada/article/details/82055177
        url: '/pages/detail/appointment/appointment?str=' + this.data.phone,
        success: function () {
          wx.setNavigationBarTitle({
            title: '个人信息',
          })
          wx.showNavigationBarLoading();
          setTimeout(function () {
            wx.hideNavigationBarLoading();
          }, 2000)
        }
      })
      

      /*数据库插入这个登录信息
      const todos = db.collection('patient')
      db.collection('patient').add({
        data: {
          _id: this.data.phone,//查询主要是通过_id，所以需要赋值
          Pno: this.data.phone
        },
        success: function (res) {
          console.log(res)
        }
      })

      wx.showModal({
        title: '提示',
        content: '亲，暂未查到您的预约信息',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确认')
          } else if (res.concel) {
            console.log('用户点击取消')
          }
        }
      })*/
    
    }
    else{
      wx.showModal({
        title: '提示',
        content: '亲，您的验证码与手机号不匹配',
        success(res){
          if(res.confirm){
            console.log('用户点击确认')
          }else if(res.concel){
            console.log('用户点击取消')
          }
        }
      })
      
    }

    
    /*
    ,
      {
        "pagePath": "pages/index/index",
        "text": "控制后台",
        "iconPath": "pages/images/tab/first.png",
        "selectedIconPath": "pages/images/tab/first.png"
      }

      
    */

  }
})