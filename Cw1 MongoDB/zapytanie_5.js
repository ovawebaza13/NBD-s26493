printjson(db.people.find( { birth_date:  {$gt: "2001",$lt: "2100" } },
    {first_name: 1,
    last_name: 1,
    "location.city":1}
).toArray())