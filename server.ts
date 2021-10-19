import express, { Application } from 'express';
import favicon from 'serve-favicon';
import path from 'path';

const app: Application = express();
const PORT = 8000;

app.use(favicon(__dirname + '/build/favicon.svg'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
