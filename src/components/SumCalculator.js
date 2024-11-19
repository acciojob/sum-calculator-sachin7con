// SGN
import React, { useState, useEffect } from "react";

const SumCalculator = () => {
    const [arr, setArr] = useState([]);
    const [sum, setSum] = useState(0);
    const [inputValue, setInputValue] = useState("");
    

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        const parsedInt = parseInt(value, 10);
        if (!isNaN(parsedInt)) {
            setSum(parsedInt); 
        }
    };
    

    useEffect(() =>{
          
        const total = arr.reduce((acc, num) => acc + num, 0);
        setSum(total);  
    }, [arr]);


    


  return (
    <div>
        {/* ONS Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" name="numVal" value={ inputValue } onChange={handleInputChange} />
       
        <div style={{ marginTop: "20px" }}>
            <h3>Sum: {sum} </h3>
        </div>

    </div>
  );
};

export default SumCalculator;
