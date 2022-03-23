function getEven(){
    let list = [];
    for(let i =1; i< 50; i++){
        if(i%2==0){
            list.push(i)
        }
    }
    return list;
}
console.log(getEven());