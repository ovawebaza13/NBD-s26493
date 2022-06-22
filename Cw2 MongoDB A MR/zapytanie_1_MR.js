var mapFunction1 = function() {
    var key=this.sex;
    var value= {
        count: 1,
        weight: parseFloat(this.weight),
        height: parseFloat(this.height)
    }
    emit(key,value);
};
   var reduceFunction=function(key,values){
    var w =values.map(v=>v.count)
       return{
       count: values.map(v=>v.count),
       count: values.map(v=>v.weight),
        count: values.map(v=>v.height)
    }};
   var finalizeF=function(key,value){
       return{
           avgWeight:value.weight/value.count,
           avgHeight:value.height/value.count,
       }
   }
db.people.mapReduce(
    mapFunction1,
    reduceFunction,
{
    out: "avg_height_weight",
    finalize: finalizeF
});
   db.avg_height_weight.find()