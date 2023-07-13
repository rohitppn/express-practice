let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
];

const getBooks = (req, res) => {
  res.json(books);
};

const createBooks = (req, res) => {
  console.log(req.body);
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
};

const updateBooks = (req, res) => {
  const id = parseInt(req.param.id);
  const updatedBook = req.body;
  const index = books.findIndex((books) => books.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBook };
  } else {
    res.status(404).json({ error: "Book not updated" });
  }
};

const deleteBooks = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book -> book.id ===id)
  if(index !== -1){
    const deleteBook = books[index]
    books.splice(index,1)
    res.json(deleteBook)
  }else{
    res.status(404)({error: 'Books not found'})
  }
};

module.exports ={getBooks, createBooks,
  updateBooks, deleteBooks}