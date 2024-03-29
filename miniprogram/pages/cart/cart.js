// page/component/new-pages/cart/cart.js
Page({
    /**
   * 页面的初始数据
   */
    data: {
        carts: [], //数据 
        iscart: false,
        hidden: null,
        isAllSelect: true,
        totalPrice: 0,
    },
    onShow: function () {
        // 获取产品展示页保存的缓存数据（购物车的缓存数组，没有数据，则赋予一个空数组）  
        var arr = wx.getStorageSync('cart') || [];
        if (arr.length > 0) {
            // 更新数据  
            this.setData({
                carts: arr,
                iscart: true,
                hidden: false
            });
        } else {
            this.setData({
                iscart: false,
                hidden: true,
            });
        }
        this.getTotalPrice();
    },
    /**
   * 当前商品选中事件
   */
    selectList(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        const selected = carts[index].selected;
        carts[index].selected = !selected;
        this.setData({
            carts: carts
        });
        this.getTotalPrice();
    },

    /**
     * 删除购物车当前商品
     */
    deleteList(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        carts.splice(index, 1);
        this.setData({
            carts: carts
        });
        if (!carts.length) {
            this.setData({
                iscart: false
            });
        } else {
            this.getTotalPrice();
        }
        wx.setStorageSync('cart', carts)
    },

    /**
     * 购物车全选事件
     */
    selectAll(e) {
        let isAllSelect = this.data.isAllSelect;
        isAllSelect = !isAllSelect;
        let carts = this.data.carts;

        for (let i = 0; i < carts.length; i++) {
            carts[i].selected=!carts[i].selected;
            if(!carts[i].selected){
                isAllSelect=false;
            }
            // carts[i].selected = isAllSelect;
        }
        this.setData({
            isAllSelect: isAllSelect,
            carts: carts
        });
        this.getTotalPrice();
    },

    /**
     * 绑定加数量事件
     */
    addCount(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        let num = carts[index].num;
        num = num + 1;
        carts[index].num = num;
        this.setData({
            carts: carts
        });
        this.getTotalPrice();
    },

    /**
     * 绑定减数量事件
     */
    minusCount(e) {
        const index = e.currentTarget.dataset.index;
        const obj = e.currentTarget.dataset.obj;
        let carts = this.data.carts;
        let num = carts[index].num;
        if (num <= 1) {
            return false;
        }
        num = num - 1;
        carts[index].num = num;
        this.setData({
            carts: carts
        });
        this.getTotalPrice();
    },

    /**
     * 计算总价
     */
    getTotalPrice() {
        let carts = this.data.carts;                  // 获取购物车列表
        let total = 0;
        for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
            if (carts[i].selected) {                     // 判断选中才会计算价格
                total += carts[i].num * carts[i].price;   // 所有价格加起来
            }
        }
        this.setData({                                // 最后赋值到data中渲染到页面
            carts: carts,
            totalPrice: total.toFixed(2)
        });
    }

})