// const { MongoClient } = require('mongodb');

// // Connection URI - replace with your MongoDB connection string if using Atlas
// const uri = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'plp_bookstore';

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function connectToDatabase() {
//   await client.connect();
//   console.log('Connected successfully to MongoDB server');
//   return client.db(dbName);
// }

// async function createBook(book) {
//   const db = await connectToDatabase();
//   const booksCollection = db.collection('books');

//   const insertResult = await booksCollection.insertOne(book);
//   console.log('Inserted document:', insertResult);
// }

// async function findBooks(query = {}) {
//   const db = await connectToDatabase();
//   const booksCollection = db.collection('books');

//   const findResult = await booksCollection.find(query).toArray();
//   console.log('Found documents:', findResult);
// }

// async function updateBook(filter, update) {
//   const db = await connectToDatabase();
//   const booksCollection = db.collection('books');

//   const updateResult = await booksCollection.updateOne(filter, { $set: update });
//   console.log('Updated document count:', updateResult.modifiedCount);
// }

// async function deleteBook(filter) {
//   const db = await connectToDatabase();
//   const booksCollection = db.collection('books');

//   const deleteResult = await booksCollection.deleteOne(filter);
//   console.log('Deleted document count:', deleteResult.deletedCount);
// }

// async function main() {
//   try {

    
//     // Example: Create a book
//     await createBook( {
//     title:"atomic Habits",
//     author: "James Clear",
//     genre: "Self -help",
//     published_year: 2018,
//     price: 13.99,
//     in_stock: true,
//     pages: 319,
//     publisher: "Avery"
// },
// //     );
//    await db.insertOne({
//         title:"Feel Good Productivity",
//     author: "Ali Abdaal",
//     genre: "Self -help",
//     published_year: 2022,
//     price: 14.95,
//     in_stock: true,
//     pages: 299,
//     publisher: "Avery"
//     })
// {
//      title:"Feel Good Productivity",
//     author: "Ali Abdaal",
//     genre: "Self -help",
//     published_year: 2022,
//     price: 14.95,
//     in_stock: true,
//     pages: 299,
//     publisher: "Avery"
// },{
//      title:"How to be a toic",
//     author: "Massimo Pigliucci",
//     genre: "Philosophy",
//     published_year: 2017,
//     price: 16.99,
//     in_stock: true,
//     pages: 239,
//     publisher: "Avery"
// },{
//      title:"Think and grow rich",
//     author: "Napoleon Hill",
//     genre: "Self -help",
//     published_year: 1937,
//     price: 132.85,
//     in_stock: true,
//     pages: 309,
//     publisher: "Avery"
// },{
//    title:"Think and grow rich",
//     author: "Napoleon Hill",
//     genre: "Self -help",
//     published_year: 1937,
//     price: 132.85,
//     in_stock: true,
//     pages: 309,
//     publisher: "Avery"
// },{
//     title:"The mid night library",
//     author: "Matt Haig",
//     genre: "Fiction",
//     published_year: 2020,
//     price: 16.99,
//     in_stock: true,
//     pages: 304,
//     publisher: "viking"
// },{ 
//     title:"Where the crawdads sing",
//     author: "Delia ownes",
//     genre: "Mystery",
//     published_year: 2018,
//     price: 24.99,
//     in_stock: false,
//     pages: 369,
//     publisher: "Putnam"
//  },{
//     title:"educated",
//     author: "Tara westover",
//     genre: "2018",
//     published_year: 18.99,
//     price: 32.85,
//     in_stock: false,
//     pages: 339,
//     publisher: "Random House"
// },{
//     title:"The silent patient",
//     author: "Alex Michaelides",
//     genre: "Thriller",
//     published_year: 2019,
//     price: 21.85,
//     in_stock: true,
//     pages: 336,
//     publisher: "Celadon Books"
// },
// {
//     title:"Project hail mary",
//     author: "Andy Weir",
//     genre: "Fiction",
//     published_year: 2021,
//     price: 29.99,
//     in_stock: true,
//     pages: 359,
//     publisher: "Ballantine Books"
// },
// );
// db.books.insertOne(
//     {
//     title:"Project hail mary",
//     author: "Andy Weir",
//     genre: "Fiction",
//     published_year: 2021,
//     price: 29.99,
//     in_stock: true,
//     pages: 359,
//     publisher: "Ballantine Books"
// });
    // title: "Project Hail Mary",
    // author: "Andy Weir",
    // genre: "Fiction",
    // published_year: 2021,
    // price: 29.99,
    // in_stock: true,
    // pages: 359,
    // publisher: "Ballantine Books"
    // });

    // // Example: Find all books
    // await findBooks();

    // Example: Update a book
    // await updateBook({ title: "The Hobbit" }, { pages: 320 });

    // Example: Delete a book
    // await deleteBook({ title: "The Hobbit" });

    // Check remaining books
    // await findBooks();

//   } catch (err) {
//     console.error('Error occurred:', err);
//   } finally {
//     // Close the connection when done
//     await client.close();
//     console.log('MongoDB connection closed');
//   }
// }

// // Run the main function
// main().catch(console.error);




// db = db.getSiblingDB('bookstore');
// const { MongoClient } = require('mongodb');

// // Connection URI (replace with your MongoDB connection string if using Atlas)
// const uri = 'mongodb://localhost:27017';

// // Database and collection names
// const dbName = 'plp_bookstore';
// const collectionName = 'books';
// const db=dbName;




// async function main(){
//     const client =new MongoClient("mongodb connected");
//     try {
//         await client.connect();
//         const database= client.db('plp_bookstore');
//         const books = database.collection('books');
// await books.insertOne({
//     // db.books.insertOne({
//   title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     genre: 'Fiction',
//     published_year: 1960,
//     price: 12.99,
//     in_stock: true,
//     pages: 336,
//     publisher: 'J. B. Lippincott & Co.'
//  });
//     }
//     finally{
//         await client.close();
//     }
// }


// main().catch("error");






// db.books.insertOne({
//     title: "Project Hail Mary",
//     author: "Andy Weir",
//     genre: "Fiction",
//     published_year: 2021,
//     price: 29.99,
//     in_stock: true,
//     pages: 359,
//     publisher: "Ballantine Books"
// // });
// db.books.insertOne({
// title: "Project Hail Mary",
//     author: "Andy Weir",
//     genre: "Fiction",
//     published_year: 2021,
//     price: 29.99,
//     in_stock: true,
//     pages: 359,
//     publisher: "Ballantine Books"
// });
// // const { MongoClient } = require('mongodb');

// // Connection URI (replace with your MongoDB connection string if using Atlas)
// const uri = 'mongodb://localhost:27017';

// // Database and collection names
// const dbName = 'plp_bookstore';
// const collectionName = 'books';
// db = db.getSiblingDB('bookstore');
// db.books.insertOne({
//     title: "Project Hail Mary",
//     author: "Andy Weir",
//     genre: "Fiction",
//     published_year: 2021,
//     price: 29.99,
//     in_stock: true,
//     pages: 359,
//     publisher: "Ballantine Books"
// });


// db.books.drop();
// // insert books in to the db
// db.books.insertMany([{
//     title:"atomic Habits",
//     author: "James Clear",
//     genre: "Self -help",
//     published_year: 2018,
//     price: 13.99,
//     in_stock: true,
//     pages: 319,
//     publisher: "Avery"
// },{
//      title:"Feel Good Productivity",
//     author: "Ali Abdaal",
//     genre: "Self -help",
//     published_year: 2022,
//     price: 14.95,
//     in_stock: true,
//     pages: 299,
//     publisher: "Avery"
// },{
//      title:"How to be a toic",
//     author: "Massimo Pigliucci",
//     genre: "Philosophy",
//     published_year: 2017,
//     price: 16.99,
//     in_stock: true,
//     pages: 239,
//     publisher: "Avery"
// },{
//      title:"Think and grow rich",
//     author: "Napoleon Hill",
//     genre: "Self -help",
//     published_year: 1937,
//     price: 132.85,
//     in_stock: true,
//     pages: 309,
//     publisher: "Avery"
// },{
//    title:"Think and grow rich",
//     author: "Napoleon Hill",
//     genre: "Self -help",
//     published_year: 1937,
//     price: 132.85,
//     in_stock: true,
//     pages: 309,
//     publisher: "Avery"
// },{
//     title:"The mid night library",
//     author: "Matt Haig",
//     genre: "Fiction",
//     published_year: 2020,
//     price: 16.99,
//     in_stock: true,
//     pages: 304,
//     publisher: "viking"
// },{ 
//     title:"Where the crawdads sing",
//     author: "Delia ownes",
//     genre: "Mystery",
//     published_year: 2018,
//     price: 24.99,
//     in_stock: false,
//     pages: 369,
//     publisher: "Putnam"
// },{
//     title:"educated",
//     author: "Tara westover",
//     genre: "2018",
//     published_year: 18.99,
//     price: 32.85,
//     in_stock: false,
//     pages: 339,
//     publisher: "Random House"
// },{
//     title:"The silent patient",
//     author: "Alex Michaelides",
//     genre: "Thriller",
//     published_year: 2019,
//     price: 21.85,
//     in_stock: true,
//     pages: 336,
//     publisher: "Celadon Books"
// },{
//     title:"Project hail mary",
//     author: "Andy Weir",
//     genre: "Fiction",
//     published_year: 2021,
//     price: 29.99,
//     in_stock: true,
//     pages: 359,
//     publisher: "Ballantine Books"
// },
// // ]);
// db.books.insertOne(
//     {
//     title:"Project hail mary",
//     author: "Andy Weir",
//     genre: "Fiction",
//     published_year: 2021,
//     price: 29.99,
//     in_stock: true,
//     pages: 359,
//     publisher: "Ballantine Books"
// });
// MongoDB Shell Script Example
// Run this with: mongosh --file mongodb_shell_example.js

// Connect to a database (will create it if it doesn't exist)
// db = db.getSiblingDB('plp_bookstore');
// db.books.insertOne(
//     {
//      title:"Project hail mary",
//           author: "Andy Weir",
//     genre: "Fiction",
//     published_year: 2021,
//     price: 29.99,
//     in_stock: true,
//     pages: 359,
//     publisher: "Ballantine Books"
// });

// Create a collection (will create it if it doesn't exist)
// Clear existing data for demonstration purposes
// db.books.drop();

// // Insert documents into the collection
// print("Inserting books into the collection...");
// db.books.insertMany([
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     year: 1937,
//     pages: 310,
//     genres: ["fantasy", "adventure"]
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     pages: 281,
//     genres: ["fiction", "drama"]
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     year: 1949,
//     pages: 328,
//     genres: ["dystopian", "science fiction"]
//   }
// ]);

// // Find all documents in the collection
// print("\nAll books in the collection:");
// const allBooks = db.books.find().toArray();
// printjson(allBooks);

// // Find books with a specific condition
// print("\nBooks published after 1950:");
// const modernBooks = db.books.find({ year: { $gt: 1950 } }).toArray();
// printjson(modernBooks);

// // Update a document
// print("\nUpdating '1984' page count...");
// db.books.updateOne(
//   { title: "1984" },
//   { $set: { pages: 336 } }
// );

// // Find the updated document
// print("\nVerifying the update:");
// const updatedBook = db.books.findOne({ title: "1984" });
// printjson(updatedBook);

// // Aggregate example
// print("\nAverage number of pages per book:");
// const avgPagesResult = db.books.aggregate([
//   { $group: { _id: null, avgPages: { $avg: "$pages" } } }
// ]).toArray();
// printjson(avgPagesResult);

// print("\nMongoDB Shell script completed!"); 

// Connect to a database (will create it if it doesn't exist)
db = db.getSiblingDB('bookstore');

// Create a collection (will create it if it doesn't exist)
// Clear existing data for demonstration purposes
db.books.drop();

// Insert documents into the collection
print("Inserting books into the collection...");
db.books.insertMany([
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    pages: 310,
    genres: ["fantasy", "adventure"]
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    pages: 281,
    genres: ["fiction", "drama"]
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    pages: 328,
    genres: ["dystopian", "science fiction"]
  }
]);

// Find all documents in the collection
print("\nAll books in the collection:");
const allBooks = db.books.find().toArray();
printjson(allBooks);

// Find books with a specific condition
print("\nBooks published after 1950:");
const modernBooks = db.books.find({ year: { $gt: 1950 } }).toArray();
printjson(modernBooks);

// Update a document
print("\nUpdating '1984' page count...");
db.books.updateOne(
  { title: "1984" },
  { $set: { pages: 336 } }
);+

// Find the updated document
print("\nVerifying the update:");
const updatedBook = db.books.findOne({ title: "1984" });
printjson(updatedBook);

// Aggregate example
print("\nAverage number of pages per book:");
const avgPagesResult = db.books.aggregate([
  { $group: { _id: null, avgPages: { $avg: "$pages" } } }
]).toArray();
printjson(avgPagesResult);

print("\nMongoDB Shell script completed!"); 