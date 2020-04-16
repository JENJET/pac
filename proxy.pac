function FindProxyForURL(url, host) {
   if (shExpMatch(url,"*https://ocsp.apple.com/*")) {
     return "PROXY 45.253.64.168:500";
   }
   if (shExpMatch(url,"*.baidu.com*")) {
     return "PROXY 149.28.43.104:500,PROXY 45.253.64.168:500";
   }
   if (url == "https://m.ip138.com") {
     return "PROXY 45.253.64.168:500";
   }
   return "DIRECT"; 
}