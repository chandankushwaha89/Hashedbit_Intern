import { useEffect, useState } from "react";
import "./Table.css";
function Table() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR); // ascending sort
        setTeams(sortedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching IPL data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading IPL points table...</p>;

  return (
    <div className="ipl-container">
      <h2>IPL 2022 Points Table (Sorted by NRR ↑)</h2>
      <table className="ipl-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.No}>
              <td>{team.No}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;