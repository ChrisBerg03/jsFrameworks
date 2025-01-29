import { useState } from "react";

function inputFixing(name) {
    return (!name ? "20px solid red" : "none");
}

export function InputTest() {
    const [name, setName] = useState("");
      return (
        <>
            <input type="text"
            style={{ border: inputFixing(name) }}
            value={name} 
            onChange={(e) => {
                setName(e.target.value)
            }} />
            <p>{name}</p>
        </>
        
    )
}

function setColor(count) {
    return (count < 3 ? "red" : count <= 6 ? "magenta" : count > 10 ? "green" : "white");
}

//    return (num>10 ? "large" : "small");

// The above is a one line version of writing the one below

//    if(num>10) {
//        return "large";
//    } else {
//        return "small";
//    }

export function CountButton() {
    let [count, setCount] = useState(0);
    return(
        <>
        <button onClick={() => {
            setCount(count + 1);
        }}
        style={{ backgroundColor: setColor(count) }}
        >
        count: {count}
        </button>
        </>
    )
}