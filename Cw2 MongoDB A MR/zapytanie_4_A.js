db.people.aggregate([{
    $group:{
        _id: "$nationality",
        "avgBMI":{"$avg":{$divide:[{"$toDouble":"$weight"},{"$multiply":[{$divide:[{"$toDouble":"$height"},100 ]},{$divide:[{"$toDouble":"$height"},100]}]}]}},
        "minBMI":{"$min":{$divide:[{"$toDouble":"$weight"},{"$multiply":[{$divide:[{"$toDouble":"$height"},100 ]},{$divide:[{"$toDouble":"$height"},100]}]}]}},
        "maxBMI":{"$max":{$divide:[{"$toDouble":"$weight"},{"$multiply":[{$divide:[{"$toDouble":"$height"},100 ]},{$divide:[{"$toDouble":"$height"},100]}]}]}}
}
}])