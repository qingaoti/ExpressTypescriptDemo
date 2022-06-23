

// let originArr = ["5","2","C","D","+"];


let originArr = ["5","-2","4","C","D","9","+","+"];

const fun = (arr) =>{
    let scoreArr = [];

    arr.forEach((item,index)=>{
        switch (item) {
            case 'C':
                let num = scoreArr.pop();
                console.log(`操作：最后一个有效回合是分数无效，应该删除 ${num}`)
                break;
            case 'D':
                let D_num = scoreArr[scoreArr.length-1] * 2;
                scoreArr.push(D_num);
                console.log(`D:本轮分数是前一轮的双倍 ${D_num}  ，得分轮：`,scoreArr);
                break;
            case '+':
                let num_2 = scoreArr[scoreArr.length-1] + scoreArr[scoreArr.length-2];
                scoreArr.push(num_2);
                console.log(`+:本轮的分数是前两轮得分的总和 ${num_2}，得分轮`,scoreArr);
                break;
            default :
                //这种情况是整数，得分
                scoreArr.push(Number.parseInt(item));
                console.log("整数：得分轮：",scoreArr);
                break;
        }
    });

    let ted = scoreArr.reduce((a,b) => {
        return Number.parseInt(a) + Number.parseInt(b);
    });

    console.log("最后计算",scoreArr);
    console.log("得分:",ted);
    return ted;
}

console.log(fun(originArr));
