require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "Mani1008",
  "id": 46606385,
  "node_id": "MDQ6VXNlcjQ2NjA2Mzg1",
  "avatar_url": "https://avatars.githubusercontent.com/u/46606385?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Mani1008",
  "html_url": "https://github.com/Mani1008",
  "followers_url": "https://api.github.com/users/Mani1008/followers",
  "following_url": "https://api.github.com/users/Mani1008/following{/other_user}",
  "gists_url": "https://api.github.com/users/Mani1008/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Mani1008/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Mani1008/subscriptions",
  "organizations_url": "https://api.github.com/users/Mani1008/orgs",
  "repos_url": "https://api.github.com/users/Mani1008/repos",
  "events_url": "https://api.github.com/users/Mani1008/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Mani1008/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Manish Kumar",
  "company": null,
  "blog": "",
  "location": "Delhi, IN",
  "email": null,
  "hireable": null,
  "bio": "MERN Stack Developer",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 2,
  "following": 5,
  "created_at": "2019-01-11T17:39:40Z",
  "updated_at": "2024-06-17T15:57:44Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login here</h1>')
})

app.get('/hi', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})