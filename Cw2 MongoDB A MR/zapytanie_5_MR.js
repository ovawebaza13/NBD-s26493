var mapFunction=function (){
    if(!this.credit) return;
    for(var idx=0;idx<this.credit.length;idx++){
        emit(this.credit[idx].currency,{count:1,money:parseFloat(this.credit[idx].balance)||0})
    };
};
var reduceFunction=function (key,values){
    var ret={count:0,money:0};
    for(var idx=0;idx<values.length;idx++){
        ret.count +=values[idx].count;
        ret.money +=values[idx].money;
    };
    return ret;
};
var finalFunction=function (key,value){
    return{average_money:value.money/value.count,sum_money:value.money};
};
printjson(
    db.people.mapReduce(mapFunction,reduceFunction,{out:"average_sum_money",query:{sex:"Female",nationality:"Poland"},
        finalize:finalFunction})
);
printjson(db.average_sum_money.find({}).toArray());