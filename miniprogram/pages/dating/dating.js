// pages/date/date.js  
const db = wx.cloud.database();

const date = new Date();
const years = [];
const months = [];
const days = [];
const hours = [];
const minutes = [];
//获取年
for (let i = 2019; i <= date.getFullYear() + 5; i++) {
  years.push("" + i);
}
//获取月份
for (let i = 1; i <= 12; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  months.push("" + i);
}
//获取日期
for (let i = 1; i <= 31; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  days.push("" + i);
}
//获取小时
for (let i = 0; i < 24; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  hours.push("" + i);
}
//获取分钟
for (let i = 0; i < 60; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  minutes.push("" + i);
}



Page({
  data: {
    time: '',
    multiArray: [years, months, days, hours, minutes],
    multiIndex: [0, 9, 16, 10, 17],
    choose_year: '',
    name:'',
    phone: '',
    hos: '',
    doctor: '',
  },
  onLoad: function () {
    //设置默认的年份
    this.setData({
      choose_year: this.data.multiArray[0][0]
    })
  },

  nameInput:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  phoneInput:function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  hosInput: function (e) {
    this.setData({
      hos: e.detail.value
    })
  },
  doctorInput: function (e) {
    this.setData({
      doctor: e.detail.value
    })
  },
  /*textInput:function(e){
    _this.setData({           //实时获取内容，无关紧要
      reason_input: e.detail.value
    });

  },   */


  //获取时间日期
  bindMultiPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
    const index = this.data.multiIndex;
    const year = this.data.multiArray[0][index[0]];
    const month = this.data.multiArray[1][index[1]];
    const day = this.data.multiArray[2][index[2]];
    const hour = this.data.multiArray[3][index[3]];
    const minute = this.data.multiArray[4][index[4]];
    
    console.log('预约日期：' + `${year}-${month}-${day}-${hour}:${minute}`);//输出选择的时间
    this.setData({
      time: year + '-' + month + '-' + day + ' ' + hour + ':' + minute
    })
    // console.log(this.data.time);
  },

  //监听picker的滚动事件
  bindMultiPickerColumnChange: function (e) {
    //获取年份
    if (e.detail.column == 0) {
      let choose_year = this.data.multiArray[e.detail.column][e.detail.value];
      console.log(choose_year);
      this.setData({
        choose_year
      })
    }
    //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    if (e.detail.column == 1) {
      let num = parseInt(this.data.multiArray[e.detail.column][e.detail.value]);
      let temp = [];
      if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) { //判断31天的月份
        for (let i = 1; i <= 31; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else if (num == 4 || num == 6 || num == 9 || num == 11) { //判断30天的月份
        for (let i = 1; i <= 30; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else if (num == 2) { //判断2月份天数
        let year = parseInt(this.data.choose_year);
        console.log(year);
        if (((year % 400 == 0) || (year % 100 != 0)) && (year % 4 == 0)) {
          for (let i = 1; i <= 29; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['multiArray[2]']: temp
          });
        } else {
          for (let i = 1; i <= 28; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['multiArray[2]']: temp
          });
        }
      }
      console.log(this.data.multiArray[2]);
    }
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },



  save(e) {
    console.log("姓名:" + this.data.name);
    console.log('手机号: ' + this.data.phone);
    console.log('验证医院: ' + this.data.hos);
    console.log('预约专家：'+ this.data.doctor);
    //co

    //省略提交过程

    //数据库插入这个登录信息
    const todos = db.collection('patient')
    db.collection('patient').add({    //赋值,查询主要是通过_id
      data: {
        _id: this.data.phone,
        Pno: this.data.phone,
        Pname:this.data.name,
        Phos:this.data.hos,
        Pdoctor:this.data.doctor
      },
      success: function (res) {
        console.log(res.data)
      }
    })

    /*查询该医生的单日预约名额
    db.collection('doctor').where({
      Dname:this.data.doctor
    })
    .get({
      success: function (res) {
        console.log(res.data)
        var val= res.data,
      }
    })

    */


    wx.navigateTo({     //页面跳转  参考：https://blog.csdn.net/Yanzudada/article/details/82055177
      url: '../detail/appointment/appointment?str=' + this.data.phone,
      success: function () {
        wx.setNavigationBarTitle({
          title: '预约情况',
        })
        wx.showNavigationBarLoading();
        setTimeout(function () {
          wx.hideNavigationBarLoading();
        }, 2000)
      }
    })


    
  }


})