var mapFunction= function(){
    var bmi=parseFloat(this.weight)/Math.pow(parseFloat(this.height)/100,2);
    emit(this.nationality,
        {count:1,sum_bmi:bmi,max_bmi:bmi,min_bmi:bmi});
};
var reduceFunc=function (key,values){
    ret={count:0,sum_bmi:0,max_bmi:0,min_bmi:0};
    for(var idx=0;idx<values.length;idx++){
        ret.count+=values[idx].count;
        ret.sum_bmi+=values[idx].sum_bmi;
        if(ret.min_bmi==0){ret.min_bmi=values[idx].min_bmi};
        ret.max_bmi=Math.max(ret.max_bmi,values[idx].max_bmi);
       ret.min_bmi=Math.min(ret.min_bmi,values[idx].min_bmi);
    };
    return ret;
};
var finall=function (key,value){
    return {average_bmi: value.sum_bmi/value.count, max_bmi: value.max_bmi,min_bmi: value.min_bmi}
};
printjson(
    db.people.mapReduce(mapFunction,reduceFunc,{out:"averagebmi",finalize: finall})
);
printjson(db.averagebmi.find({}).toArray());