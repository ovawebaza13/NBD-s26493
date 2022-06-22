db.people.aggregate([{
    $project:
        {"money":
                {"$map":
                        {"input": "$credit",
                            "in": {"currency":"$$this.currency","balance": "$$this.balance"}
                                }
                        }
                }
         },{$unwind:"$money"}, {
        $group: {
        _id: {currency:"$money.currency"},
        sum: {$sum:{"$toDouble":"$money.balance"}}
        }
     },{$sort:{_id:1}}])