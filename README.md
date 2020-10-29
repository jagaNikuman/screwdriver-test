# todo app
## /register
```bash
jaganikuman@shina$ curl -s localhost:3000/register -X POST -H "Content-Type: application/json" -d '{"tasks": [{"date": "2020/10/12", "title": "foo"}]}' | jq

[
  {
    "date": "2020/10/12",
    "title": "foo"
  }
]
```
