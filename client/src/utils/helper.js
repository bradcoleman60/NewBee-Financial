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
      
      
      // companyStore.createIndex('cik', 'cik', { unique: true });
      // companyStore.createIndex('name', 'name', { unique: false });
      // companyStore.createIndex('ticker', 'ticker', { unique: false });
      // companyStore.createIndex('exchange', 'exchange', { unique: false });
      // companyStore.createIndex('revenue', 'revenue', { unique: false });
      // companyStore.createIndex('revenue1', 'revenue1', { unique: false });
      // companyStore.createIndex('netIncome', 'netIncome', { unique: false });
      // companyStore.createIndex('cash', 'cash', { unique: false });
      // companyStore.createIndex('cashFlow', 'cashFlow', { unique: false });
      // companyStore.createIndex('cashFlow1', 'cashFlow1', { unique: false });
      // companyStore.createIndex('eps', 'eps', { unique: false });
      // companyStore.createIndex('eps1', 'eps1', { unique: false });
      // companyStore.createIndex('currentAsset', 'currentAsset', { unique: false });
      // companyStore.createIndex('currentLiabilities', 'currentLiabilities', { unique: false });
      // companyStore.createIndex('taxesPaid', 'taxesPaid', { unique: false });
      // companyStore.createIndex('taxesPaid1', 'taxesPaid1', { unique: false });
      console.log("Saved Companies DB Created")
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
