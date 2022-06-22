var mapFunc3 = function(){
    if(!this.job) return;
    emit(this.job, {count:1});
};
var reduceFunc = function (key,values){
    var ret = {count: 0}
    for(var idx=0;idx<values.length;idx++){
        ret.count+=values[idx].count;
    };
    return ret;
};
db.people.mapReduce(
    mapFunc3,
    reduceFunc,
    {out:"jobs"}
)
db.jobs.find({})