import React, {useState} from 'react'


function Bmi() {

  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
   const [result,setResult]=useState("");
   const[message,setMessage]=useState("");

   const bmiEval=(e)=>
   {
       let bmi=(weight)/(height*height)
      setResult((weight)/(height*height));
    if(bmi<18.5)
    {
       setMessage("UnderWeight");
    }
    else if(bmi<24.95)
    {
       setMessage("NormalWeight");
    }
    else if(bmi<29.9)
    {
       setMessage("OverWeight");
    }
    else if(bmi<34.9)
    {
       setMessage("Obesity - Class 1");
    }
    else if(bmi<39.9)
    {
       setMessage("Obesity - Class 2");
    }
    else
    {
       setMessage("Obesity - Class 3");
    }
   }
   

  return (
    <div>
      <h1>BMI CALCULATOR</h1>
      <div className="main">
        <h3>Your Height(meters)</h3>
      <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)}></input>
      <h3>Your weight(kgs)</h3>
      <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
      <h3>BMI</h3>
      <button onClick={bmiEval}>Calculate</button>
      <div className="result"> {result}<br></br>{message}</div>
      </div>
    </div>
  )
}

export default Bmi