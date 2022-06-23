import riak

myClient = riak.RiakClient(pb_port=8087, protocol='pbc')

myBucket = myClient.bucket('test')

book = {
  'isbn': "978-0-06100-282-3",
  'title': "Hellraiser",
  'author': "Clive Barker",
  'body': "Oh, no. It is a means to summon us.",
  'copies_owned': 2
}

### Dodanie dokumentu ###
booksBucket = myClient.bucket('books')
newBook = booksBucket.new(book['isbn'], data=book)
newBook.store()

### wypisanie dokumentu ###
print "### wypisanie dokumentu ###"
fetchedBook = booksBucket.get(book['isbn'])

print fetchedBook.encoded_data

### modyfikacja dokumentu ###
print "### modyfikacja dokumentu ###"
fetchedBook.data["title"] = "Powrot z piekla"
fetchedBook.store()

print booksBucket.get(book['isbn']).encoded_data

### Kasowanie z bazy ###
print "### Kasowanie z bazy ###"
fetchedBook.delete()
print booksBucket.get(book['isbn']).exists