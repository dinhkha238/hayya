// Import thư viện HTTP của Node.js
const http = require('http');

// Tạo một máy chủ HTTP
const server = http.createServer((req, res) => {
  // Thiết lập header phản hồi
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Gửi nội dung phản hồi
  res.end('Hello, World!');
});

// Lắng nghe trên cổng 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server đang lắng nghe trên http://localhost:${port}`);
});

