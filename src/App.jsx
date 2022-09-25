import React from "react";
import Article from "./components/Article"


function App() {
  const authorName = 'トラハック'

  const arr = ["りんご","みかん","バナナ","キウイ"]

  return (
    <div>
      <Article
      title={'新日本一わかりやすいReact入門'}
      content={'今日のコンテンツはpropsについて。'}
      order={3}
      isPublished={true}
      authorName={authorName}
      />
      <ul>
        {arr.map((fruit, i) => <li ley={i}>{fruit}</li>)}
      </ul>
    </div>
  );
}

export default App;
