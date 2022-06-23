let planArr = [7, 3, 7, 3, 1, 3, 4, 1];

function countNum(arr,res){
    let newArrays = arr.filter(item => {
       return item === res;
    });
    return newArrays.length;
}

function delForRight(arr){
    for (let i = 0; i < arr.length; i++) {
        let c = arr[0];
        let num = countNum(arr,c);
        if(num>1){
            arr.shift();
        }
    }
}

function delForLeft(arr){
    for (let i = 0; i < arr.length; i++) {
        let c = arr[arr.length-1];
        let num = countNum(arr,c);
        if(num>1){
            arr.pop();
        }
    }
}

const fun = (planArr) => {
    if (planArr == null || planArr.length === 0) {
        return 0;
    }

    delForRight(planArr);
    delForLeft(planArr);

    return planArr.length
}

console.log(fun(planArr));


