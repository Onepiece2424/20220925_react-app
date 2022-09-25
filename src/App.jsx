import React, { useState, useEffect } from "react";
// import Article from "./components/Article"
// import TextInput from "./components/TextInput"
// import Counter from "./components/Counter"
import ToggleButton from "./components/ToggleButton"

function App() {
  // const authorName = 'トラハック'
  // const arr = ["りんご","みかん","バナナ","キウイ","パイナップル","グレープフルーツ"]

  const [name, setName] = useState()

  const [id, setId] = useState('deatiger')

  const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook', 'Onepiece2424']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setName(data.name)
    })
    .catch(error => {
      console.error(error)
    })
  }, [id])

  return (
    <div>
      <p>{id}の、github上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
      <br></br>
      <br></br>
      <ToggleButton />
      <br></br>
      <br></br>
      {/* <Counter /> */}
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
