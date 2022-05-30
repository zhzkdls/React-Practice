
export default function key() {
    const useList = [
        {id : 1, name : "하용"},
        {id : 2, name : "콩이"},
        {id : 3, name : "조리"},
        {id : 4, name : "온뉴"},
    ];

  return (
    <div>
        <ul>
            {useList.map(user => (
                <li>{user.name}</li>
            ))}
        </ul>
    </div>
  );
}

// React 에서 key 가 필요한 이유
// 단순히 index를 쓰는것이 왜 안좋은지
// 어떤 값을 key 롤 사용하는게 좋은지
//(0)index를 key 값을 사용하면 에러가 발생하지 아니한다.
//(1) 유저명을 placeholder로 나타냅니다.
//(2) 