(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),c=a.n(r),s=(a(14),a(5)),l=a(6),m=a(8),o=a(7),p=(a(15),a(1)),u=a.n(p),h=(a(3),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={},e.getTime=function(){var t=u()().utcOffset(e.state.timezone/60).format("h:mm a");e.setState({time:t})},e.getWeather=function(){var t=document.getElementById("zipInput").value;fetch("https://api.openweathermap.org/data/2.5/weather?zip="+t+",us&units=imperial&appid=a1e3df40f95c0b92d083b8a468d14883").then((function(a){200===a.status?a.json().then((function(a){console.log(a),e.setState({zip:t,temperature:a.main.temp,tempmax:a.main.temp_max,tempmin:a.main.temp_min,city:a.name,description:a.weather[0].description,Country:a.sys.country,timezone:a.timezone}),e.getTime()})):console.log("Status Code: "+a.status)})).catch((function(e){console.log("Error")}))},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"display-1 "},i.a.createElement("h1",{className:"Header"},"Daily Weather")),i.a.createElement("div",{className:"display"},i.a.createElement("input",{type:"text",id:"zipInput",className:"search-input",placeholder:"Enter Zipcode",maxLength:"5"}),i.a.createElement("button",{className:"material-icons",onClick:this.getWeather},"search")),i.a.createElement("div",{className:"display"},i.a.createElement("p",null,this.state.city,"   ",this.state.Country),i.a.createElement("p",null,this.state.temperature," \u2109"),i.a.createElement("p",null,this.state.description),i.a.createElement("p",null,this.state.time)),i.a.createElement("div",{className:"bg"}))}}]),a}(i.a.Component));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.c0d21217.chunk.js.map