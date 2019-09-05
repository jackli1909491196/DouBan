var Mock=require("mockjs");
//配置数据请求
Mock.mock("/homelist","get",require("./json/home.json"));
Mock.mock("/movie","get",require("./json/movie.json"));
Mock.mock("/findmovie","get",require("./json/findmovie.json"));
Mock.mock("/book","get",require("./json/book.json"));
Mock.mock("/findbook","get",require("./json/findbook.json"));