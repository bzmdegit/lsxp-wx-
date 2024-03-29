// page/component/new-pages/user/user.js
Page({
    data: {
        thumb: '',
        nickname: '',
        orders: [],
        hasAddress: false,
        address: {},
        login:false
    },
    getMyInfo: function (event) {
        let info = event.detail.userInfo;
        this.setData({
            nickname: info.nickName,
            thumb: info.avatarUrl,
            login:true
        })
    },
    onShow() {
        var self = this;
        /**
         * 获取本地缓存 地址信息
         */
        wx.getStorage({
            key: 'address',
            success: function(res) {
                self.setData({
                    hasAddress: true,
                    address: res.data
                })
            }
        })
    },
    /**
     * 发起支付请求
     */
    payOrders() {
        wx.requestPayment({
            timeStamp: 'String1',
            nonceStr: 'String2',
            package: 'String3',
            signType: 'MD5',
            paySign: 'String4',
            success: function(res) {
                console.log(res)
            },
            fail: function(res) {
                wx.showModal({
                    title: '支付提示',
                    content: '<text>',
                    showCancel: false
                })
            }
        })
    }
})