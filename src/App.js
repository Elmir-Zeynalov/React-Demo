import React, { useState, useEffect } from "react";
import "./App.css";

import Search from "./Components/Search.jsx";
import Table from "./Components/Table.jsx";
import FooterComponent from "./Components/FooterComponent.jsx";


function App() {
  /* Create state:
        - apiData: List containing dictionaries of countries from API.
        - searchQuery: The query parameter that should be added to &search=
        - pageNumber: The page that is requested
  */

  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(); // Default = No search query
  const [pageNumber, setPageNumber] = useState(1); //Default = Page 1
  const [pageSize, setPageSize] = useState(10);

  const [orderValue, setOrderValue] = useState('');


  useEffect(() => {
    // When searchQuery changes, reset the page number to 1
    setPageNumber(1);
  }, [searchQuery]);




  useEffect(() => {
    // All parameters are appended to this URL.
    let apiQuery = "https://dhis2-app-course.ifi.uio.no/api?";

    apiQuery = apiQuery + "&pageSize=" + pageSize;
    // If searchQuery isn't empty add &search=searchQuery to the API request.
    if (searchQuery) {
      apiQuery = apiQuery + "&search=" + searchQuery;
    }

    if(orderValue.length > 1){
      apiQuery = apiQuery + "&order=" + orderValue;
    }

    // Add what page we are requesting to the API request.
    apiQuery = apiQuery + "&page=" + pageNumber;

    // Query data from API.
    console.log("Querying: " + apiQuery);
    fetch(apiQuery)
      .then((results) => results.json())
      .then((data) => {
        // Then add response to state.
        setApiData(data);
      }).catch(()=> {console.log("FAIL")});
  }, [searchQuery, pageNumber, pageSize, orderValue]); // Array containing which state changes that should re-reun useEffect()

   // New effect to reset page number when searchQuery changes



  return (
    <div className="App">
      <h1>Country Search</h1>
      <Search onSearchInput={setSearchQuery}/>
      <Table apiData={apiData} sortingValue={orderValue} setSortingValue={setOrderValue}/>
      <FooterComponent 
      pager = {apiData.pager} 
      pageSwitcher={setPageNumber} 
      pageSize={pageSize} 
      pageSizeChanger={setPageSize}
      setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
