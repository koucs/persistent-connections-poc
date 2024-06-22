const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

let clients = [];

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  // ヘッダーをすぐにクライアントに送信
  // その後のデータの送信を待つことなくクライアントがヘッダーを解析できるようになる
  res.flushHeaders();

  clients.push(res);

  // 接続が閉じられたクライアントはclients配列から削除され、その後のイベントの送信対象から除外
  req.on('close', () => {
    clients = clients.filter(client => client !== res);
  });
});

app.post('/event', (req, res) => {
  const newEvent = `data: ${JSON.stringify(req.body)}\n\n`;

  clients.forEach(client =>
    client.write(newEvent)
  );

  res.send();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
