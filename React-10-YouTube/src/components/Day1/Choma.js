import styles from "./App.module.css";

export default function Choma() {

    const name = "Tom";
    const naver = {
      name: "Git hub",
      url: "https://github.com/coding-angma/voca/tree/lesson/6/src",
    };

  return (
    <div>
      <h1
        style={{
        color: "#f0f",
        backgroundColor: "green",
        }}
        >
        Hello, {name}.<p>{2 + 3}</p>
        </h1>
        <a href={naver.url}>{naver.name}</a>
        <div className={styles.box}>App</div>
    </div>
  );
}



