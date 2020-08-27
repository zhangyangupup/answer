let mockData = [
    { id: 1, type: "province", displayName: "广东省", parentId: null },
    { id: 2, type: "province", displayName: "广西省", parentId: null },

    { id: 3, type: "city", displayName: "东莞市", parentId: 1 },
    { id: 4, type: "city", displayName: "广州市", parentId: 1 },
    { id: 5, type: "city", displayName: "深圳市", parentId: 1 },
    { id: 6, type: "city", displayName: "南宁", parentId: 2 },
    { id: 7, type: "city", displayName: "玉林", parentId: 2 },

    { id: 8, type: "area", displayName: "松山湖片区", parentId: 3 },
    { id: 9, type: "area", displayName: "东部产业园", parentId: 3 },
    { id: 10, type: "area", displayName: "滨海区", parentId: 3 },
    { id: 11, type: "area", displayName: "天河区", parentId: 4 },
    { id: 12, type: "area", displayName: "番禺区", parentId: 4 },
    { id: 13, type: "area", displayName: "宝安区", parentId: 5 },
    { id: 14, type: "area", displayName: "南山区", parentId: 5 },
    { id: 15, type: "area", displayName: "兴宁区", parentId: 6 },
    { id: 16, type: "area", displayName: "玉州区", parentId: 7 },
];
// 数据处理
(function packetData(data) {
    // 分类别
    let temporaryArr = [] // 临时数组
    let types = [] // 种类
    data.forEach(ele => {
        temporaryArr.push(ele.type)
    })
    types = Array.from(new Set(temporaryArr))
    // 组装数据容器
    types = types.map(ele => {
        let obj = {
            name: ele,
            options: []
        }
        return obj
    })
    // 组装数据
    data.forEach(ele => {
        for (let i = 0; i < types.length; i++) {
            const item = types[i]
            if (item.name === ele.type) {
                item.options.push(ele)
            }
        }
    })
    console.log(types)
    return types
})(mockData)