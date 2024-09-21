function Table({apiData}) {
  console.log('We are in the TABLE componeent')
  console.log('in api data:' + apiData);


  if (!apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // Write your code here:
  console.log('Pager - ', apiData.pager)
  console.log('Results', apiData.results)

    return <table>
      
    </table>;
  }
}

export default Table;
