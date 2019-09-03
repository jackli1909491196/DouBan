var Mock=require("mockjs");
//配置数据请求
Mock.mock("/homelist","get",require("./json/home.json"));