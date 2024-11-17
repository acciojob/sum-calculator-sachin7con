// SGN
import React, { useState, useEffect } from "react";

const SumCalculator = () => {
    const [arr, setArr] = useState([]);
    const [sum, setSum] = useState(0);
    const [inputValue, setInputValue] = useState("");
    

    const handleInputChange = (e) => {
        setInputValue(e.target.value)

    }

    useEffect(() =>{
       const calculateSum = () => {
        const total = arr.reduce((acc, num) => acc + num, 0);
        setSum(total);
       }
       calculateSum();  
    }, [arr]);


    const handleAddNumber = () => {
        const parsedInt = parseInt(inputValue, 10);
        if (!isNaN(parsedInt)) {
            setArr((prevArr) => [ ...prevArr, parsedInt]);

        }
        setInputValue("");
    }


  return (
    <div>
        {/* ONS Do not remove the main div */}
        <input type="number" name="numVal" value={ inputValue } onChange={handleInputChange} ></input>
        <button onClick={handleAddNumber}>Add Number</button>

        <div style={{ marginTop: "20px" }}>
            <h3>Sum: {sum} </h3>
        </div>

    </div>
  )
}

export default SumCalculator
