import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions, joinMission } from '../Redux/missions/MissionsSlice';

function Missions() {
  const { missions } = useSelector((state) => state.missions);

  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  const handleJoinMission = (event) => {
    console.log(event);
    const missionId = event.target.value;
    dispatch(joinMission(missionId));
  };

  return (
    <>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>
              <button type="button">NOT A MEMBER</button>
            </td>
            <td>
              <button onClick={handleJoinMission} type="button">
                Join Mission
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default Missions;
