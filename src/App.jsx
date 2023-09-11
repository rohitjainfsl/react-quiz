import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [count, setcount] = useState(0);
  const [questionNuumber, setquestionNuumber] = useState(0);
  const [store, setstore] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (questionNuumber === data.length - 1) {
        clearInterval(interval);
        checkans();
      } else setquestionNuumber(questionNuumber + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [questionNuumber]);

  function checkans() {
    for (let i = 0; i < data.length; i++) {
      console.log(Number(store[i]), data[i].answer)
      if (Number(store[i]) === data[i].answer) {
        setcount(count + 1);
      }
    }
  }
  console.log(count)

  return (
    <>
      <div className="quiz">
        <div className="question">{data[questionNuumber].question}</div>
        <div className="options">
          <input
            type="radio"
            name="opt"
            value={data[questionNuumber].options[0]}
            onClick={(e) => {
              setstore([...store, e.target.value]);
            }}
          />
          <label htmlFor="">{data[questionNuumber].options[0]}</label>
          <input
            type="radio"
            name="opt"
            value={data[questionNuumber].options[1]}
            onClick={(e) => {
              setstore([...store, e.target.value]);
            }}
          />
          <label htmlFor="">{data[questionNuumber].options[1]}</label>
          <input
            type="radio"
            name="opt"
            value={data[questionNuumber].options[2]}
            onClick={(e) => {
              setstore([...store, e.target.value]);
            }}
          />
          <label htmlFor="">{data[questionNuumber].options[2]}</label>
          <input
            type="radio"
            name="opt"
            value={data[questionNuumber].options[3]}
            onClick={(e) => {
              setstore([...store, e.target.value]);
            }}
          />
          <label htmlFor="">{data[questionNuumber].options[3]}</label>
        </div>
      </div>
    </>
  );
}

export default App;
