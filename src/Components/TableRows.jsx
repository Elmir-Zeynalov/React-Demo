export default function TableRows({ data }) {
  return (
    <>
      {data.map((datapoint) => (
        <tr id={datapoint.id}>
          <td>{datapoint.Country}</td>
          <td>{datapoint.Continent}</td>
          <td>{datapoint.Population}</td>
          <td>{datapoint.PopulationGrowth}</td>
        </tr>
      ))}
    </>
  );
}
