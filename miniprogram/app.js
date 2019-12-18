let list = [{
        id: '01',
        title: "丽芝士威化饼干",
        spec: "290g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/a1.jpg',
        price: 17.8,
        num: 1,
        selected: true
    },
    {
        id: '02',
        title: "郁瑟蒜香面包干",
        spec: "160g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/a2.jpg',
        price: 19.8,
        num: 1,
        selected: true
    },
    {
        id: '02',
        title: "郁瑟蒜香面包干",
        spec: "160g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/a2.jpg',
        price: 19.8,
        num: 1,
        selected: true
    },
    {
        id: '03',
        title: "蜂蜜芥末面包干",
        spec: "75g×3包",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/a3.jpg',
        price: 29.9,
        num: 1,
        selected: true
    },
    {
        id: '11',
        title: "黑胡椒味木薯片",
        spec: "150g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/b1.jpg',
        price: 19.5,
        num: 1,
        selected: true
    },
    {
        id: '12',
        title: "海太蜂蜜黄油薯片",
        spec: "60g×1包",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/b2.jpg',
        price: 16.8,
        num: 1,
        selected: true
    },
    {
        id: '13',
        title: "九日蜂蜜土豆条",
        spec: "54g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/b3.jpg',
        price: 12.8,
        selected: true
    },
    {
        id: '31',
        title: "U100大话梅",
        spec: "45g×2袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/c1.jpg',
        price: 29.9,
        num: 1,
        selected: true
    },
    {
        id: '32',
        title: "越南进口芋头条",
        spec: "100g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/c2.jpg',
        price: 16.8,
        num: 1,
        selected: true
    },
    {
        id: '33',
        title: "蔓越莓干",
        spec: "900g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/c3.jpg',
        price: 59.9,
        num: 1,
        selected: true
    },
    {
        id: '34',
        title: "马卡兰香蕉干",
        spec: "70g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/c4.jpg',
        price: 12.9,
        num: 1,
        selected: true
    },
    {
        id: '35',
        title: "原味椰子脆片",
        spec: "300g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/c5.jpg',
        price: 48.9,
        num: 1,
        selected: true
    },
    {
        id: '41',
        title: "U100无添加腰果",
        spec: "72g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/d1.jpg',
        price: 23.9,
        num: 1,
        selected: true
    },
    {
        id: '42',
        title: "U100无添加扁核桃仁",
        spec: "72g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/d2.jpg',
        price: 29.9,
        num: 1,
        selected: true
    },
    {
        id: '43',
        title: "U100无添加开心果",
        spec: "72g×1袋",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/d3.jpg',
        price: 15.9,
        num: 1,
        selected: true
    },
    {
        id: '51',
        title: "红丝绒湿蛋糕",
        spec: "150g×1盒",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/e1.jpg',
        price: 13.4,
        num: 1,
        selected: true
    },
    {
        id: '52',
        title: "迪乐思干酪酥",
        spec: "100g×1盒",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/e2.jpg',
        price: 9.9,
        num: 1,
        selected: true
    },
    {
        id: '53',
        title: "奇亚籽湿蛋糕",
        spec: "150g×1盒",
        img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/e3.jpg',
        price: 8.8,
        num: 1,
        selected: true
    },
]
App({
    onLaunch: function() {
        wx.requestTest = ({
            data: {
                page,
                size
            },
            success
        }) => {
            setTimeout(
                () => {
                    let res = {
                        data: {
                            data: {
                                rows: list.slice((page - 1) * size, size + (page - 1) * size)
                            },
                            result: true,
                        }
                    }
                    success(res)
                }, 1000 //模拟网络延迟
            )
        }
    },
    globalData: {
        hasLogin: false
    }
})