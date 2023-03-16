const dbName = 'savedCompanies';

// A function that returns a promise that interacts with IndexedDB
export function idbPromise(method, object) {
  // Return a new Promise that resolves or rejects based on the outcome of the IndexedDB interaction
  return new Promise((resolve, reject) => {
    // Open a connection to the 'company-list' database with version number 1
    const request = window.indexedDB.open(dbName, 1);
    let db, tx, company;

    request.onupgradeneeded = function(e) {
      const db = request.result;
      db.createObjectStore('companies', { keyPath: 'cik' });

    };
    
    // Log an error message if the database connection request fails
    request.onerror = function(e) {
      console.log('There was an error');
    };

    // On successful database connection, assign the database, transaction, and object store to variables
    request.onsuccess = function(e) {
      db = request.result;
      tx = db.transaction(['companies'], 'readwrite');
      company = tx.objectStore('companies');

      // Log an error message if there is an error during database interaction
      db.onerror = function(e) {
        console.log('error', e);
      };

      // Use a switch statement to determine the type of interaction to perform on the object store
      switch (method) {
        case 'put':
          console.log("Entered PUT")
          console.log("company.put(object)")
          console.log("company: ", company)
          console.log("object: ", object)
          // Add or update an object in the store
          company.put(object);
          resolve(object);
          break;
        case 'get':
          // Get all objects from the store
          const all = company.getAll();
          all.onsuccess = function() {
            resolve(all.result);
          };
          break;
        case 'delete':
          // Delete an object from the store by ID
          company.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      // Close the database connection after the transaction completes
      tx.oncomplete = function() {
        db.close();
      };
    };
  });
}
