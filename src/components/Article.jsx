import { useState } from "react";

const Article = (props) => {
  const [ispublished, setIsPublished] = useState(false);
  console.log(ispublished);

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.authorName}</p>
      <button onClick={() => setIsPublished(true)}>公開</button>
    </div>
  )
}

export default Article;
