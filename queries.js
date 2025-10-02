const { MongoClient } = require('mongodb');

// Connection URI - replace with your MongoDB connection string if using Atlas
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'plp_bookstore';

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    
    // Get reference to the database
    const db = client.db(dbName);
    
    // Get reference to the books collection
    const booksCollection = db.collection('books');

    // Task 2:  Basic CRUD Operations
  //   // INSERT BOOK

  // const insertResult = await booksCollection.insertOne({    
  //   title:"The 1984",
  //   author: "George Orwell",
  //   genre: "Fiction",
  //   published_year: 1961,
  //   price: 19.99,
  //   in_stock: true,
  //   pages: 245,
  //   publisher: "Ballantine Books"
  //   });
  //   console.log('Inserted document:', insertResult);

// // CREATE
// const creatBook = await Create({
//     title: "Project hail mary",
//     author: "Andy Weir",
//     genre: "Fiction",
//     published_year: 2021,
//     price: 29.99,
//     in_stock: true,
//     pages: 359,
//     publisher: "Ballantine Books"
// });


// ------------------------------------------------------
// Task 2:  Basic CRUD Operations

//find all books in specific genre
const selfHelpBooks = await booksCollection.find({genre: "Self -help"}).toArray();
console.log('self help books', selfHelpBooks);




// // Find books published after a certain year
const booksAfter2000 = await booksCollection.find({
  published_year:{$gt:2000},
}).toArray();
console.log("books published after 2000", booksAfter2000);



// Find books by a specific author
const georgeOrwellBooks =await booksCollection.find({author:"George Orwell"}).toArray();
console.log("books written by George Orwell", georgeOrwellBooks);


// Update the price of a specific book
await booksCollection.updateOne({
  title: "The Alchemist",
},
{$set:{price:199}}
);
console.log("The price of Alchemist is updated");




// Delete a book by its title
await booksCollection.deleteOne({
  title:"Pride and Prejudice",
})
console.log("The book title pride and prejuiced is deleted");







// Task 3: Advanced Queries

// Write a query to find books that are both in stock and published after 2010
const inStockAndAfter2010 =await booksCollection.find({
  in_stock:true,
  published_year:{$gt:2010}
}).toArray();
console.log("in stock books published after 2010",inStockAndAfter2010);



// Use projection to return only the title, author, and price fields in your queries
const projectedBooks =await booksCollection.find(
  {}, //Empty query to get books
 { projection:{
   _id: 0, // Exclude the default _id field
  title:1,  // include title
  author:1, //include author
  price:1, //include price
}}).toArray();
console.log('Projected books (title, author, price):', projectedBooks);



// Implement sorting to display books by price (both ascending and descending)

// Sort by price ascending
const booksPriceAscending = await booksCollection.find({}).sort({price:1}).toArray();
console.log('Books sorted by price (Ascending):', booksPriceAscending);

// Sort by price descending
const booksPriceDescending = await booksCollection.find({}).sort({price:-1}).toArray();
console.log('Books sorted by price (Descending):', booksPriceDescending);







// Use the limit and skip methods to implement pagination (5 books per page)

const booksPerPage = 5;

    // Page 1: Skip 0 books, Limit 
    
    console.log(`\n Page 1 (Showing ${booksPerPage} books) ---`);
    const page1 = await booksCollection.find({})
      .sort({ title: 1 }) // Good practice to sort before paginating for consistent results
      .skip(0)            // Skip the first 0 documents
      .limit(booksPerPage) // Take the next 5 documents
      .toArray();
    console.log('Page 1:', page1);


    // Page 2: Skip 5 books, Limit 5
    console.log(`\n Page 2 (Showing ${booksPerPage} books) `);
    const page2 = await booksCollection.find({})
      .sort({ title: 1 })
      .skip(booksPerPage * 1) // Skip the first 5 books
      .limit(booksPerPage)
      .toArray();
    console.log('Page 2:', page2);



    // Page 3: Skip 10 books, Limit 5
    console.log(`\n Pagination: Page 3 (Showing ${booksPerPage} books) `);
    const page3 = await booksCollection.find({})
      .sort({ title: 1 })
      .skip(booksPerPage * 2) // Skip the first 10 books
      .limit(booksPerPage)
      .toArray();
    console.log('Page 3:', page3);







    // Task 4: Aggregation Pipeline


    // Create an aggregation pipeline to calculate the average price of books by genre
    const avgPricePipeline = [
      {
        $group: {
          _id: "$genre",             // Group by the value of the 'genre' field
          averagePrice: {
            $avg: "$price"          // Calculate the average of the 'price' field for each group
          },
        }
      }
    ];

    const averagePriceByGenre = await booksCollection.aggregate(avgPricePipeline).toArray();
    console.log("Average price by genre:", averagePriceByGenre);






//Create an aggregation pipeline to find the author with the most books in the collection

const authorWithMostBooks =await booksCollection.aggregate([
  {
    $group:{
      _id:"$author",
      bookCount:{$sum:1}
    }
  },
  {
    $sort: {bookCount:-1}
  },{
    $limit:1,
  }
]).toArray();
console.log('Author(s) with most books:',authorWithMostBooks);



// Implement a pipeline that groups books by publication decade and counts them
   
const decadeCount = await booksCollection.aggregate([{
$project: {
  decade:{
    $subtract:[
"$published_year",
{
  $mod: ["$published_year",10]
}
    ]
  }
}},
{
  $group:{
    _id:"$decade",
    count: {
      $sum:1
    }
  }
},
{
  $sort:{_id:1}
}
]).toArray();
console.log("'Books by publication decade:", decadeCount);







    // Task 5: Indexing
    
// Create an index on the title field for faster searches

    // Index on the 'title' field
    const titleIndexName = await booksCollection.createIndex({ title: 1 });
    console.log("Created index on 'title':", titleIndexName);



// Create a compound index on author and published_year
 const authorYearCompoundIndexName = await booksCollection.createIndex({ author: 1, year: 1}); // -1 for year descending if you often query that way
    console.log(`Created compound index on 'author' and 'year': ${authorYearCompoundIndexName}`);


// Use the explain() method to demonstrate the performance improvement with your indexes

    
console.log("\n--- Explaining query WITHOUT a specific 'genre' index (simulated) ---");
    console.log("This query would likely result in a Collection Scan (COLLSCAN) if no suitable index exists.");

    const cursorWithoutIndex = booksCollection.find({ genre: "Science Fiction" });
    const explainWithoutIndex = await cursorWithoutIndex.explain();
    console.log("Explain Plan (without specific index):");
    // console.log(JSON.stringify(explainWithoutIndex, null, 2)); // Uncomment to see full plan
    console.log(` Winning Plan: ${explainWithoutIndex.queryPlanner.winningPlan.stage}`);
    console.log(` Total Docs Examined: ${explainWithoutIndex.executionStats.totalDocsExamined}`);

    // Query 1: Using the 'title' index
    console.log("\n--- Explaining query USING 'title' index ---");
    const cursorWithTitleIndex = booksCollection.find({ title: "Dune" }); // This query should use the 'title' index
    const explainWithTitleIndex = await cursorWithTitleIndex.explain();
    console.log("Explain Plan (using 'title' index):");
    // console.log(JSON.stringify(explainWithTitleIndex, null, 2)); // Uncomment to see full plan
    console.log(` Winning Plan Stage: ${explainWithoutIndex.queryPlanner.winningPlan.stage}`); // Note: The actual stage name here will depend on what MongoDB decided. Could be IXSCAN.
    console.log(` Total Docs Examined: ${explainWithTitleIndex.executionStats.totalDocsExamined}`);


    // Query 2: Using the compound 'author' and 'year' index
    console.log("\n--- Explaining query USING compound 'author' and 'year' index ---");
    const cursorWithCompoundIndex = booksCollection.find(
      { author: "J.R.R. Tolkien", year: 1954 } // This query perfectly matches the compound index fields
    );
    const explainWithCompoundIndex = await cursorWithCompoundIndex.explain();
    console.log("Explain Plan (using compound index):");
    // console.log(JSON.stringify(explainWithCompoundIndex, null, 2)); // Uncomment to see full plan
    console.log(` Winning Plan Stage: ${explainWithCompoundIndex.queryPlanner.winningPlan.stage}`);
    console.log(` Total Docs Examined: ${explainWithCompoundIndex.executionStats.totalDocsExamined}`);

    // Query 3: Using the compound index partially (querying only by author)
    console.log("\n--- Explaining query USING compound index partially (author only) ---");
    const cursorWithCompoundIndexPartial = booksCollection.find(
      { author: "Andy Weir" } // This query can use the 'author' part of the compound index
    );
    const explainWithCompoundIndexPartial = await cursorWithCompoundIndexPartial.explain();
    console.log("Explain Plan (using compound index partially):");
    
  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection when done
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// // Run the main function
main().catch(console.error);
