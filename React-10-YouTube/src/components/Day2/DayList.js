import { Link } from "react-router-dom";
import dummy from "../../db/data.json";

export default function DayList() {
  return (
    <ul className="list_day">
        {/* map() 함수는 각 배열의 요소를 돌면서 인자로 전달된 함수를 사용하여 처리 된 새로운 결과를 새로운 배열에 담아 반환하는 함수입니다. */}
      {dummy.days.map(day => (
        // key 값은 map() 함수를 호출할 때 인자로 넘기는 Callback 함수의 인자로 넘어오는 index 값을 사용하면 됩니다. 
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
