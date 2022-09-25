const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.order}</p>
      <p>{props.isPublished}</p>
      <p>{props.authorName}</p>
    </div>
  )
}

export default Article;
