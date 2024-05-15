import { useEffect, useState } from "react";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setworkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setworkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts &&
          workouts.map((workout) => (
            <div key={workout._id}>
              <WorkoutDetails workout={workout}></WorkoutDetails>
            </div>
          ))}
      </div>
      <WorkoutForm></WorkoutForm>
    </div>
  );
};

export default Home;
