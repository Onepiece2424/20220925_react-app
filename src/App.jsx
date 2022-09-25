import React from "react";
import Article from "./components/Article"


function App() {
  const authorName = 'トラハック'
  return (
    <div>
      <Article
      title={'新日本一わかりやすいReact入門'}
      content={'今日のコンテンツはpropsについて。'}
      order={3}
      isPublished={true}
      authorName={authorName}
      />
    </div>
  );
}

export default App;
