db.people.update(
    {job:"Editor"},
    {$unset: { email:""}}
)