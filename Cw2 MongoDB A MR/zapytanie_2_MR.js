var mapFunc2= function(){
    for(var i=0;i<this.credit.length;i++){
        var key=this.credit[i].currency;
        var value= parseFloat(this.credit[i].balance);
            emit(key,value)
    }};
var reduceFunc = function(currencies,balances){
    return Array.sum(balances);
};
db.people.mapReduce(
    mapFunc2(),
    reduceFunc(),
    {out: "credit_account"}
)
db.credit_account.find()