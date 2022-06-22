db.people.update(
    { city: "Moscow" },
    { $set:
            {
                location:{city:"Moskwa"}
            }
    }
)