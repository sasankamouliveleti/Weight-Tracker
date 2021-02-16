import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import firebase from "../config/firebase-config";

const Linechart = () => {
  const [dates, setDate] = useState([]);
  const [weights, setWeight] = useState([]);
  const [showChart, setShowChart] = useState(false);
  useEffect(() => {
    firebase
      .database()
      .ref("weights")
      .on("value", (snapshot) => {
        let date = [];
        let weight = [];
        if (snapshot != undefined) {
          snapshot.forEach((snap) => {
            let data = snap.val();
            date.push(data.date);
            weight.push(data.weight);
          });
          setDate(date);
          setWeight(weight);
          setShowChart(true);
        }
      });
  }, []);

  const state = {
    labels: dates,
    datasets: [
      {
        label: "Weight Loss",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 3,
        data: weights,
      },
    ],
  };

  return (
    <div>
      {showChart ? (
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Weight Tracking",
              fontSize: 20,
            },
          }} 
        />
      ) : (
        <p>Loading!!!!</p>
      )}
    </div>
  );
};

export default Linechart;
