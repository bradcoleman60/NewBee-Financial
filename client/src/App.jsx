import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/home/Home.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Learn from './pages/learn/Learn.jsx';
import NotFound from './pages/notFound/NotFound.jsx';


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="/dashboard" 
              element={<Dashboard />}
            />
            <Route 
              path="/learn" 
              element={<Learn />}
            />
            <Route 
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </Router>
    // </ApolloProvider>
  );
}

export default App;
