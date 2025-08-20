const http = require("http");
const fs = require("fs");
const uri = require("url")
const server = http.createServer((req, res) => {
  console.log("Server Created");
  if(req.url ==="/favicon.ico")
  {
    res.end();
    return;
  }
  const log = `${Date.now()} Server created on path ${req.url}\n`;
  fs.appendFile("practice httplog.txt", log, (error) => {
    console.log("Error", error);
  });
  console.log("Checker");
  
  const checker = uri.parse(req.url, true);
  // console.log('Full URL:', req.url);
  // console.log('Parsed checker:', checker);
  // console.log('Path:', checker.pathname);
  // console.log('Query object:', checker.query);
  
  console.log(path);
  
  if (path === "/") {
    res.end(`This is home page`);
  } else if (path === "/about") {
    const name = checker.query.name;
    res.end(`Your name is ${name}`)
  } else if(path === "/search"){
      const search = checker.query.search_query;
      console.log('Search query value:', search);
      res.end(`Your search is : ${search || 'No search query provided'}`)
  }
  else {
    res.end("Erorr cannot find page");
  }
});

// server is listening 
server.listen(8000, (error) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("Server is listening on port 8000");
  }
});
