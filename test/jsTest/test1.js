let n = ["test1", "name2a", "name2b", "haha3a", "haha3b", "haha3c", "jack4a", "jack4b"];
let r = ["passed", "failed", "passed", "passed", "passed", "passed", "timeout", "failed"];

function noRepeat(arr) {
    return [...new Set(arr)];
}

function initMap(arr) {
    let obj = {};
    arr.forEach((item, index) => {
        obj[item] = true;
    });
    return obj;
}


const fun = (n, r) => {
    let subject = [];
    n.forEach((item, index) => {
        subject.push(item.match(/^[a-z|A-Z]+/gi)[0]);
    });
    subject = noRepeat(subject);
    let subJectMap = initMap(subject);
    console.log("初始化科目",subJectMap);

    for (let i = 0; i < n.length; i++) {
        let nStr = n[i].match(/^[a-z|A-Z]+/gi)[0];
        let rStr = r[i];
        if(rStr !== 'passed'){
            subJectMap[nStr] = false;
        }
    }

    console.log("计算后的科目成绩",subJectMap);

    let pass = 0;
    let total = 0;
    for(let key in subJectMap){
        if(subJectMap[key] === true){
            pass++;
        }
        total++;
    }
    console.log(`合格科目${pass}`);

    return pass * 100 / total;
}

console.log(fun(n, r));


