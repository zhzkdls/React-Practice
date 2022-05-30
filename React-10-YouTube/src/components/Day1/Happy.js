export default function Happy() {
    function showName() {
      console.log("콩이는 천재견");
    }
    function showAge(age) {
      console.log(age);
    }
    function showText(txt) {
      console.log(txt);
    }
  
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={showName}>Show name</button>
        <button
          onClick={() => {
            showAge(4) ;
          }}
        >
          Show age
        </button>
        <input
          type="text"
          onChange={e => {
            const txt = e.target.value;
            showText(txt);
          }}
        />
      </div>
    );
  }