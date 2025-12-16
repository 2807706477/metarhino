
const domain = "https://cryptocoins9.com";//您的域名//独立部署需要填写Go服务api接口域名(部署在Go目录下可以留空)
const localhost="https://cryptocoins9.com";//访问本地的域名和端口，如果您改变Go服务端口，请自行修改
window.globalConfig = {
	Main_url:`${domain}`,//域名
	Main_url_dev:`${localhost}`,//域名
	Root_url:`${domain}/business`,//Api服务器域名
  Root_url_dev:`${localhost}/business`,//Api服务器域名-开发环境
	Upload_url:`${domain}/common`,//Api服务器域名
	Upload_url_dev:`${localhost}/common`,//Api服务器域名-开发环境
	AppTitle:"Go-Quant-B后台管理系统",
  AppTitle_zhCN: "Quant-B系统",
  AppTitle_zhTW: "Quant-B系統",
  AppTitle_enUS: "Quant-B Admin System",
    AppVersion:"2.5.0",
    CompanySite:"///",//公司官网
    ICP:"x-xxxx",//备案号
    Company:"",//公司名称
    Address:"",
    TeamSite:"",//技术团队官网
    Team:"",//技术团队，没有则填空""
    loginTitle:"登录GoQuantB后台管理系统",
    loginSubTitle:"",
    Copyright:"",
    RouterHome:"home",//路由默认入口
    MaxSizeImage:5,//最大上传图片大小,单位M
	MaxSizeVideo:150,//最大上传视频大小,单位M
};