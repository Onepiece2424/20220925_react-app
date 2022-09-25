import React from "react";
// import Article from "./components/Article"
import TextInput from "./components/TextInput"
import Counter from "./components/Counter"


function App() {
  // const authorName = 'トラハック'

  // const arr = ["りんご","みかん","バナナ","キウイ","パイナップル","グレープフルーツ"]

  return (
    <div>
      <Counter />
      {/* <TextInput /> */}
      {/* <Article
      title={'新日本一わかりやすいReact入門1'}
      content={'今日のコンテンツはpropsについて。'}
      authorName={authorName}
      />
      <br></br>
      <br></br>
      <br></br>
      <p>map関数を用いた繰り返し処理</p>
      <ul>
        {arr.map((fruit, i) => <li key={i}>{fruit}</li>)}
      </ul>
      <p>map,filter関数を用いた特定の条件下での繰り返し処理</p>
      <ul>
        {arr.filter(fruit => fruit.includes("ル")).map((fruit, i) => <li key={i}>{fruit}</li>)}
      </ul> */}
    </div>
  );
}

export default App;
