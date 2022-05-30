import { useState } from "react";

export default function Word() {
  const [name, setName] = useState("콩이는");
      
    // 자바스트립트 문법입니다
    // let name = "콩이는";

    // function ChangeName() {
    //     name = name ===  "콩이는" ? "천재견이다" : "콩이는" ;
    //     console.log(name);
    //     document.getElementById("name").innerHTML = name;
    // }

  return (
    <div>
      <h2 id="name">{name}</h2>
      {/* <button onClick={ChangeName}>바꾸기</button> */}
      <button
        onClick={() => {
          setName(name === "콩이는" ? "천재견이다" : "콩이는");
        }}
      >
        바꾸기
      </button>
    </div>
  );
}