const obj = [{
    key: 'Sample1',
    data: 'Data1',
},{
    key: 'Sample1',
    data: 'Data1',
},{
    key: 'Sample2',
    data: 'Data1',
},{
    key: 'Sample2',
    data: 'Data1',
},{
    key: 'Sample3',
    data: 'Data1',
},{
    key: 'Sample3',
    data: 'Data1',
},{
    key: 'Sample4',
    data: 'Data1',
}
]
const output = {};
obj.forEach(item =>{
    if (output[item.key]){
        //key is available
        output[item.key].push(item)

    }else{
        output[item.key] = [item]
    }
})
console.log(output);