import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Learn from './Pages/Learn';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Companies from './Pages/Dashboard/Search';
import Nav from './Components/NavBar';
import Footer from "./Components/Footer";
 import { CompanyProvider } from './utils/companyContext.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <CompanyProvider>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/register" 
                element={<Register />}  
              />
              <Route 
                path="/company" 
                element={<Companies />}  
              />
              <Route 
                path="/learn" 
                element={<Learn />}  
              />
              <Route 
                path="/dashboard" 
                element={<Dashboard />}  
              />
              <Route 
                path="*" 
                element={<NotFound />} 
              />
            </Routes>
            <Footer/>
            </CompanyProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
