export default function TableHeader({
  headers,
  sortingValue,
  setSortingValue,
}) {
  function handleClick(e) {
    console.log("Clicked HEADER!");
    const newSort =
      e.target.innerText +
      ":" +
      (sortingValue.split(":")[1] === "ASC" ? "DESC" : "ASC");
    console.log(sortingValue.split(":")[0] === e.target.innerText);
    console.log("Old:" + e.target.innerText);
    console.log("New: " + newSort);

    setSortingValue(newSort);
  }
  return (
    <tr>
      {headers.map((header, index) => (
        <th key={index} onClick={handleClick}>
          {header}
        </th>
      ))}
    </tr>
  );
}
