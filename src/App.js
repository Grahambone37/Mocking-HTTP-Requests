import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [gitHubName, setGitHubName] = useState('')
  const [gitHubLink, setGitHubLink] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/Grahambone37')
      .then(res => res.json())
      .then(data => {
        setGitHubName(data.name)
        setGitHubLink(data.url)
      })
  }, [])


  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
      <a href={gitHubLink}>Link to GitHub account</a>
    </div>
  );
}

export default App;
