import React from "react";
import Article from "./components/Article"


function App() {
  const authorName = 'トラハック'

  const arr = ["りんご","みかん","バナナ","キウイ","パイナップル","グレープフルーツ"]

  return (
    <div>
      <Article
      title={'新日本一わかりやすいReact入門'}
      content={'今日のコンテンツはpropsについて。'}
      order={3}
      isPublished={true}
      authorName={authorName}
      />
      <p>map関数を用いた繰り返し処理</p>
      <ul>
        {arr.map((fruit, i) => <li key={i}>{fruit}</li>)}
      </ul>
      <p>map,filter関数を用いた特定の条件下での繰り返し処理</p>
      <ul>
        {arr.filter(fruit => fruit.includes("ル")).map((fruit, i) => <li key={i}>{fruit}</li>)}
      </ul>
    </div>
  );
}

export default App;
