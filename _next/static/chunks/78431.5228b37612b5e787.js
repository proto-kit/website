(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78431],{79771:function(t){t.exports=function(t,e){var i=e.prototype,r=i.format;i.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return r.bind(this)(t);var s=this.$utils(),n=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return i.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return i.ordinal(e.week(),"W");case"w":case"ww":return s.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return s.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return s.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return r.bind(this)(n)}}},30156:function(t){var e,i,r,s,n,o,c,l,d,u,h,f,y;t.exports=(e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d/,s=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,c={},l=function(t){return(t=+t)+(t>68?1900:2e3)},d=function(t){return function(e){this[t]=+e}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),i=60*e[1]+(+e[2]||0);return 0===i?0:"+"===e[0]?-i:i}(t)}],h=function(t){var e=c[t];return e&&(e.indexOf?e:e.s.concat(e.f))},f=function(t,e){var i,r=c.meridiem;if(r){for(var s=1;s<=24;s+=1)if(t.indexOf(r(s,0,e))>-1){i=s>12;break}}else i=t===(e?"pm":"PM");return i},y={A:[o,function(t){this.afternoon=f(t,!1)}],a:[o,function(t){this.afternoon=f(t,!0)}],Q:[r,function(t){this.month=3*(t-1)+1}],S:[r,function(t){this.milliseconds=100*+t}],SS:[s,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,d("seconds")],ss:[n,d("seconds")],m:[n,d("minutes")],mm:[n,d("minutes")],H:[n,d("hours")],h:[n,d("hours")],HH:[n,d("hours")],hh:[n,d("hours")],D:[n,d("day")],DD:[s,d("day")],Do:[o,function(t){var e=c.ordinal,i=t.match(/\d+/);if(this.day=i[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],w:[n,d("week")],ww:[s,d("week")],M:[n,d("month")],MM:[s,d("month")],MMM:[o,function(t){var e=h("months"),i=(h("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[o,function(t){var e=h("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,d("year")],YY:[s,function(t){this.year=l(t)}],YYYY:[/\d{4}/,d("year")],Z:u,ZZ:u},function(t,r,s){s.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(l=t.parseTwoDigitYear);var n=r.prototype,o=n.parse;n.parse=function(t){var r=t.date,n=t.utc,l=t.args;this.$u=n;var d=l[1];if("string"==typeof d){var u=!0===l[2],h=!0===l[3],f=l[2];h&&(f=l[2]),c=this.$locale(),!u&&f&&(c=s.Ls[f]),this.$d=function(t,r,s,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*t);var o=(function(t){var r,s;r=t,s=c&&c.formats;for(var n=(t=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,i,r){var n=r&&r.toUpperCase();return i||s[r]||e[r]||s[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,i){return e||i.slice(1)})})).match(i),o=n.length,l=0;l<o;l+=1){var d=n[l],u=y[d],h=u&&u[0],f=u&&u[1];n[l]=f?{regex:h,parser:f}:d.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,r=0;i<o;i+=1){var s=n[i];if("string"==typeof s)r+=s.length;else{var c=s.regex,l=s.parser,d=t.slice(r),u=c.exec(d)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var i=t.hours;e?i<12&&(t.hours+=12):12===i&&(t.hours=0),delete t.afternoon}}(e),e}})(r)(t),l=o.year,d=o.month,u=o.day,h=o.hours,f=o.minutes,k=o.seconds,m=o.milliseconds,p=o.zone,g=o.week,b=new Date,T=u||(l||d?1:b.getDate()),x=l||b.getFullYear(),v=0;l&&!d||(v=d>0?d-1:b.getMonth());var w,_=h||0,W=f||0,D=k||0,$=m||0;return p?new Date(Date.UTC(x,v,T,_,W,D,$+60*p.offset*1e3)):s?new Date(Date.UTC(x,v,T,_,W,D,$)):(w=new Date(x,v,T,_,W,D,$),g&&(w=n(w).week(g).toDate()),w)}catch(t){return new Date("")}}(r,d,n,s),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),(u||h)&&r!=this.format(d)&&(this.$d=new Date("")),c={}}else if(d instanceof Array)for(var k=d.length,m=1;m<=k;m+=1){l[1]=d[m-1];var p=s.apply(this,l);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===k&&(this.$d=new Date(""))}else o.call(this,t)}})},78881:function(t){t.exports=function(t,e,i){var a=function(t){return t.add(4-t.isoWeekday(),"day")},r=e.prototype;r.isoWeekYear=function(){return a(this).year()},r.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,r,s,n=a(this),o=(e=this.isoWeekYear(),s=4-(r=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),r.isoWeekday()>4&&(s+=7),r.add(s,"day"));return n.diff(o,"week")+1},r.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var s=r.startOf;r.startOf=function(t,e){var i=this.$utils(),r=!!i.u(e)||e;return"isoweek"===i.p(t)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(t,e)}}},78431:function(t,e,i){"use strict";i.d(e,{diagram:function(){return tL}});var r,s,n,o=i(93326),c=i(27596),l=i(80357),d=i(16483),u=i(78881),h=i(30156),f=i(79771),y=i(64665),k=function(){var t=(0,c.eW)(function(t,e,i,r){for(i=i||{},r=t.length;r--;i[t[r]]=e);return i},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],r=[1,27],s=[1,28],n=[1,29],o=[1,30],l=[1,31],d=[1,32],u=[1,33],h=[1,34],f=[1,9],y=[1,10],k=[1,11],m=[1,12],p=[1,13],g=[1,14],b=[1,15],T=[1,16],x=[1,19],v=[1,20],w=[1,21],_=[1,22],W=[1,23],D=[1,25],$=[1,35],C={trace:(0,c.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,c.eW)(function(t,e,i,r,s,n,o){var c=n.length-1;switch(s){case 1:return n[c-1];case 2:case 6:case 7:this.$=[];break;case 3:n[c-1].push(n[c]),this.$=n[c-1];break;case 4:case 5:this.$=n[c];break;case 8:r.setWeekday("monday");break;case 9:r.setWeekday("tuesday");break;case 10:r.setWeekday("wednesday");break;case 11:r.setWeekday("thursday");break;case 12:r.setWeekday("friday");break;case 13:r.setWeekday("saturday");break;case 14:r.setWeekday("sunday");break;case 15:r.setWeekend("friday");break;case 16:r.setWeekend("saturday");break;case 17:r.setDateFormat(n[c].substr(11)),this.$=n[c].substr(11);break;case 18:r.enableInclusiveEndDates(),this.$=n[c].substr(18);break;case 19:r.TopAxis(),this.$=n[c].substr(8);break;case 20:r.setAxisFormat(n[c].substr(11)),this.$=n[c].substr(11);break;case 21:r.setTickInterval(n[c].substr(13)),this.$=n[c].substr(13);break;case 22:r.setExcludes(n[c].substr(9)),this.$=n[c].substr(9);break;case 23:r.setIncludes(n[c].substr(9)),this.$=n[c].substr(9);break;case 24:r.setTodayMarker(n[c].substr(12)),this.$=n[c].substr(12);break;case 27:r.setDiagramTitle(n[c].substr(6)),this.$=n[c].substr(6);break;case 28:this.$=n[c].trim(),r.setAccTitle(this.$);break;case 29:case 30:this.$=n[c].trim(),r.setAccDescription(this.$);break;case 31:r.addSection(n[c].substr(8)),this.$=n[c].substr(8);break;case 33:r.addTask(n[c-1],n[c]),this.$="task";break;case 34:this.$=n[c-1],r.setClickEvent(n[c-1],n[c],null);break;case 35:this.$=n[c-2],r.setClickEvent(n[c-2],n[c-1],n[c]);break;case 36:this.$=n[c-2],r.setClickEvent(n[c-2],n[c-1],null),r.setLink(n[c-2],n[c]);break;case 37:this.$=n[c-3],r.setClickEvent(n[c-3],n[c-2],n[c-1]),r.setLink(n[c-3],n[c]);break;case 38:this.$=n[c-2],r.setClickEvent(n[c-2],n[c],null),r.setLink(n[c-2],n[c-1]);break;case 39:this.$=n[c-3],r.setClickEvent(n[c-3],n[c-1],n[c]),r.setLink(n[c-3],n[c-2]);break;case 40:this.$=n[c-1],r.setLink(n[c-1],n[c]);break;case 41:case 47:this.$=n[c-1]+" "+n[c];break;case 42:case 43:case 45:this.$=n[c-2]+" "+n[c-1]+" "+n[c];break;case 44:case 46:this.$=n[c-3]+" "+n[c-2]+" "+n[c-1]+" "+n[c]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:r,14:s,15:n,16:o,17:l,18:d,19:18,20:u,21:h,22:f,23:y,24:k,25:m,26:p,27:g,28:b,29:T,30:x,31:v,33:w,35:_,36:W,37:24,38:D,40:$},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:i,13:r,14:s,15:n,16:o,17:l,18:d,19:18,20:u,21:h,22:f,23:y,24:k,25:m,26:p,27:g,28:b,29:T,30:x,31:v,33:w,35:_,36:W,37:24,38:D,40:$},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:(0,c.eW)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,c.eW)(function(t){var e=this,i=[0],r=[],s=[null],n=[],o=this.table,l="",d=0,u=0,h=0,f=n.slice.call(arguments,1),y=Object.create(this.lexer),k={yy:{}};for(var m in this.yy)Object.prototype.hasOwnProperty.call(this.yy,m)&&(k.yy[m]=this.yy[m]);y.setInput(t,k.yy),k.yy.lexer=y,k.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var p=y.yylloc;n.push(p);var g=y.options&&y.options.ranges;function lex(){var t;return"number"!=typeof(t=r.pop()||y.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof k.yy.parseError?this.parseError=k.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,c.eW)(function(t){i.length=i.length-2*t,s.length=s.length-t,n.length=n.length-t},"popStack"),(0,c.eW)(lex,"lex");for(var b,T,x,v,w,_,W,D,$,C={};;){if(x=i[i.length-1],this.defaultActions[x]?v=this.defaultActions[x]:(null==b&&(b=lex()),v=o[x]&&o[x][b]),void 0===v||!v.length||!v[0]){var S="";for(_ in $=[],o[x])this.terminals_[_]&&_>2&&$.push("'"+this.terminals_[_]+"'");S=y.showPosition?"Parse error on line "+(d+1)+":\n"+y.showPosition()+"\nExpecting "+$.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(d+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(S,{text:y.match,token:this.terminals_[b]||b,line:y.yylineno,loc:p,expected:$})}if(v[0]instanceof Array&&v.length>1)throw Error("Parse Error: multiple actions possible at state: "+x+", token: "+b);switch(v[0]){case 1:i.push(b),s.push(y.yytext),n.push(y.yylloc),i.push(v[1]),b=null,T?(b=T,T=null):(u=y.yyleng,l=y.yytext,d=y.yylineno,p=y.yylloc,h>0&&h--);break;case 2:if(W=this.productions_[v[1]][1],C.$=s[s.length-W],C._$={first_line:n[n.length-(W||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(W||1)].first_column,last_column:n[n.length-1].last_column},g&&(C._$.range=[n[n.length-(W||1)].range[0],n[n.length-1].range[1]]),void 0!==(w=this.performAction.apply(C,[l,u,d,k.yy,v[1],s,n].concat(f))))return w;W&&(i=i.slice(0,-1*W*2),s=s.slice(0,-1*W),n=n.slice(0,-1*W)),i.push(this.productions_[v[1]][0]),s.push(C.$),n.push(C._$),D=o[i[i.length-2]][i[i.length-1]],i.push(D);break;case 3:return!0}}return!0},"parse")},S={EOF:1,parseError:(0,c.eW)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,c.eW)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,c.eW)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,c.eW)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,c.eW)(function(){return this._more=!0,this},"more"),reject:(0,c.eW)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,c.eW)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,c.eW)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,c.eW)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,c.eW)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,c.eW)(function(t,e){var i,r,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var n in s)this[n]=s[n];return!1},"test_match"),next:(0,c.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,r,s=this._currentRules(),n=0;n<s.length;n++)if((i=this._input.match(this.rules[s[n]]))&&(!e||i[0].length>e[0].length)){if(e=i,r=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,c.eW)(function(){return this.next()||this.lex()},"lex"),begin:(0,c.eW)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,c.eW)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,c.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,c.eW)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,c.eW)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,c.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,c.eW)(function(t,e,i,r){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};function Parser(){this.yy={}}return C.lexer=S,(0,c.eW)(Parser,"Parser"),Parser.prototype=C,C.Parser=Parser,new Parser}();k.parser=k,d.extend(u),d.extend(h),d.extend(f);var m={friday:5,saturday:6},p="",g="",b=void 0,T="",x=[],v=[],w=new Map,_=[],W=[],D="",$="",C=["active","done","crit","milestone"],S=[],E=!1,M=!1,Y="sunday",L="saturday",A=0,I=(0,c.eW)(function(){_=[],W=[],D="",S=[],tf=0,r=void 0,s=void 0,tp=[],p="",g="",$="",b=void 0,T="",x=[],v=[],E=!1,M=!1,A=0,w=new Map,(0,c.ZH)(),Y="sunday",L="saturday"},"clear"),F=(0,c.eW)(function(t){g=t},"setAxisFormat"),O=(0,c.eW)(function(){return g},"getAxisFormat"),P=(0,c.eW)(function(t){b=t},"setTickInterval"),B=(0,c.eW)(function(){return b},"getTickInterval"),z=(0,c.eW)(function(t){T=t},"setTodayMarker"),N=(0,c.eW)(function(){return T},"getTodayMarker"),G=(0,c.eW)(function(t){p=t},"setDateFormat"),H=(0,c.eW)(function(){E=!0},"enableInclusiveEndDates"),V=(0,c.eW)(function(){return E},"endDatesAreInclusive"),j=(0,c.eW)(function(){M=!0},"enableTopAxis"),Z=(0,c.eW)(function(){return M},"topAxisEnabled"),R=(0,c.eW)(function(t){$=t},"setDisplayMode"),U=(0,c.eW)(function(){return $},"getDisplayMode"),q=(0,c.eW)(function(){return p},"getDateFormat"),Q=(0,c.eW)(function(t){x=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),X=(0,c.eW)(function(){return x},"getIncludes"),K=(0,c.eW)(function(t){v=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),J=(0,c.eW)(function(){return v},"getExcludes"),tt=(0,c.eW)(function(){return w},"getLinks"),te=(0,c.eW)(function(t){D=t,_.push(t)},"addSection"),ti=(0,c.eW)(function(){return _},"getSections"),tr=(0,c.eW)(function(){let t=tv(),e=0;for(;!t&&e<10;)t=tv(),e++;return W=tp},"getTasks"),ts=(0,c.eW)(function(t,e,i,r){return!r.includes(t.format(e.trim()))&&(!!(i.includes("weekends")&&(t.isoWeekday()===m[L]||t.isoWeekday()===m[L]+1)||i.includes(t.format("dddd").toLowerCase()))||i.includes(t.format(e.trim())))},"isInvalidDate"),tn=(0,c.eW)(function(t){Y=t},"setWeekday"),ta=(0,c.eW)(function(){return Y},"getWeekday"),to=(0,c.eW)(function(t){L=t},"setWeekend"),tc=(0,c.eW)(function(t,e,i,r){let s,n;if(!i.length||t.manualEndTime)return;s=(s=t.startTime instanceof Date?d(t.startTime):d(t.startTime,e,!0)).add(1,"d"),n=t.endTime instanceof Date?d(t.endTime):d(t.endTime,e,!0);let[o,c]=tl(s,n,e,i,r);t.endTime=o.toDate(),t.renderEndTime=c},"checkTaskDates"),tl=(0,c.eW)(function(t,e,i,r,s){let n=!1,o=null;for(;t<=e;)n||(o=e.toDate()),(n=ts(t,i,r,s))&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,o]},"fixTaskDates"),td=(0,c.eW)(function(t,e,i){i=i.trim();let r=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==r){let t=null;for(let e of r.groups.ids.split(" ")){let i=tT(e);void 0!==i&&(!t||i.endTime>t.endTime)&&(t=i)}if(t)return t.endTime;let e=new Date;return e.setHours(0,0,0,0),e}let s=d(i,e.trim(),!0);if(s.isValid())return s.toDate();{c.cM.debug("Invalid date:"+i),c.cM.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},"getStartDate"),tu=(0,c.eW)(function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),th=(0,c.eW)(function(t,e,i,r=!1){i=i.trim();let s=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==s){let t=null;for(let e of s.groups.ids.split(" ")){let i=tT(e);void 0!==i&&(!t||i.startTime<t.startTime)&&(t=i)}if(t)return t.startTime;let e=new Date;return e.setHours(0,0,0,0),e}let n=d(i,e.trim(),!0);if(n.isValid())return r&&(n=n.add(1,"d")),n.toDate();let o=d(t),[c,l]=tu(i);if(!Number.isNaN(c)){let t=o.add(c,l);t.isValid()&&(o=t)}return o.toDate()},"getEndDate"),tf=0,ty=(0,c.eW)(function(t){return void 0===t?"task"+(tf+=1):t},"parseId"),tk=(0,c.eW)(function(t,e){let i;i=":"===e.substr(0,1)?e.substr(1,e.length):e;let r=i.split(","),s={};getTaskTags(r,s,C);for(let t=0;t<r.length;t++)r[t]=r[t].trim();let n="";switch(r.length){case 1:s.id=ty(),s.startTime=t.endTime,n=r[0];break;case 2:s.id=ty(),s.startTime=td(void 0,p,r[0]),n=r[1];break;case 3:s.id=ty(r[0]),s.startTime=td(void 0,p,r[1]),n=r[2]}return n&&(s.endTime=th(s.startTime,p,n,E),s.manualEndTime=d(n,"YYYY-MM-DD",!0).isValid(),tc(s,p,v,x)),s},"compileData"),tm=(0,c.eW)(function(t,e){let i;i=":"===e.substr(0,1)?e.substr(1,e.length):e;let r=i.split(","),s={};getTaskTags(r,s,C);for(let t=0;t<r.length;t++)r[t]=r[t].trim();switch(r.length){case 1:s.id=ty(),s.startTime={type:"prevTaskEnd",id:t},s.endTime={data:r[0]};break;case 2:s.id=ty(),s.startTime={type:"getStartDate",startData:r[0]},s.endTime={data:r[1]};break;case 3:s.id=ty(r[0]),s.startTime={type:"getStartDate",startData:r[1]},s.endTime={data:r[2]}}return s},"parseData"),tp=[],tg={},tb=(0,c.eW)(function(t,e){let i={section:D,type:D,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},r=tm(s,e);i.raw.startTime=r.startTime,i.raw.endTime=r.endTime,i.id=r.id,i.prevTaskId=s,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,i.order=A,A++;let n=tp.push(i);s=i.id,tg[i.id]=n-1},"addTask"),tT=(0,c.eW)(function(t){let e=tg[t];return tp[e]},"findTaskById"),tx=(0,c.eW)(function(t,e){let i={section:D,type:D,description:t,task:t,classes:[]},s=tk(r,e);i.startTime=s.startTime,i.endTime=s.endTime,i.id=s.id,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,r=i,W.push(i)},"addTaskOrg"),tv=(0,c.eW)(function(){let t=(0,c.eW)(function(t){let e=tp[t],i="";switch(tp[t].raw.startTime.type){case"prevTaskEnd":{let t=tT(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=td(void 0,p,tp[t].raw.startTime.startData))&&(tp[t].startTime=i)}return tp[t].startTime&&(tp[t].endTime=th(tp[t].startTime,p,tp[t].raw.endTime.data,E),tp[t].endTime&&(tp[t].processed=!0,tp[t].manualEndTime=d(tp[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),tc(tp[t],p,v,x))),tp[t].processed},"compileTask"),e=!0;for(let[i,r]of tp.entries())t(i),e=e&&r.processed;return e},"compileTasks"),tw=(0,c.eW)(function(t,e){let i=e;"loose"!==(0,c.nV)().securityLevel&&(i=(0,l.N)(e)),t.split(",").forEach(function(t){void 0!==tT(t)&&(tD(t,()=>{window.open(i,"_self")}),w.set(t,i))}),t_(t,"clickable")},"setLink"),t_=(0,c.eW)(function(t,e){t.split(",").forEach(function(t){let i=tT(t);void 0!==i&&i.classes.push(e)})},"setClass"),tW=(0,c.eW)(function(t,e,i){if("loose"!==(0,c.nV)().securityLevel||void 0===e)return;let r=[];if("string"==typeof i){r=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<r.length;t++){let e=r[t].trim();e.startsWith('"')&&e.endsWith('"')&&(e=e.substr(1,e.length-2)),r[t]=e}}0===r.length&&r.push(t),void 0!==tT(t)&&tD(t,()=>{o.w8.runFunc(e,...r)})},"setClickFun"),tD=(0,c.eW)(function(t,e){S.push(function(){let i=document.querySelector(`[id="${t}"]`);null!==i&&i.addEventListener("click",function(){e()})},function(){let i=document.querySelector(`[id="${t}-text"]`);null!==i&&i.addEventListener("click",function(){e()})})},"pushFun"),t$=(0,c.eW)(function(t,e,i){t.split(",").forEach(function(t){tW(t,e,i)}),t_(t,"clickable")},"setClickEvent"),tC=(0,c.eW)(function(t){S.forEach(function(e){e(t)})},"bindFunctions"),tS={getConfig:(0,c.eW)(()=>(0,c.nV)().gantt,"getConfig"),clear:I,setDateFormat:G,getDateFormat:q,enableInclusiveEndDates:H,endDatesAreInclusive:V,enableTopAxis:j,topAxisEnabled:Z,setAxisFormat:F,getAxisFormat:O,setTickInterval:P,getTickInterval:B,setTodayMarker:z,getTodayMarker:N,setAccTitle:c.GN,getAccTitle:c.eu,setDiagramTitle:c.g2,getDiagramTitle:c.Kr,setDisplayMode:R,getDisplayMode:U,setAccDescription:c.U$,getAccDescription:c.Mx,addSection:te,getSections:ti,getTasks:tr,addTask:tb,findTaskById:tT,addTaskOrg:tx,setIncludes:Q,getIncludes:X,setExcludes:K,getExcludes:J,setClickEvent:t$,setLink:tw,getLinks:tt,bindFunctions:tC,parseDuration:tu,isInvalidDate:ts,setWeekday:tn,getWeekday:ta,setWeekend:to};function getTaskTags(t,e,i){let r=!0;for(;r;)r=!1,i.forEach(function(i){let s="^\\s*"+i+"\\s*$",n=new RegExp(s);t[0].match(n)&&(e[i]=!0,t.shift(1),r=!0)})}(0,c.eW)(getTaskTags,"getTaskTags");var tE=(0,c.eW)(function(){c.cM.debug("Something is calling, setConf, remove the call")},"setConf"),tM={monday:y.Ox9,tuesday:y.YDX,wednesday:y.EFj,thursday:y.Igq,friday:y.y2j,saturday:y.LqH,sunday:y.Zyz},tY=(0,c.eW)((t,e)=>{let i=[...t].map(()=>-1/0),r=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),s=0;for(let t of r)for(let r=0;r<i.length;r++)if(t.startTime>=i[r]){i[r]=t.endTime,t.order=r+e,r>s&&(s=r);break}return s},"getMaxIntersections"),tL={parser:k,db:tS,renderer:{setConf:tE,draw:(0,c.eW)(function(t,e,i,r){let s;let o=(0,c.nV)().gantt,l=(0,c.nV)().securityLevel;"sandbox"===l&&(s=(0,y.Ys)("#i"+e));let u="sandbox"===l?(0,y.Ys)(s.nodes()[0].contentDocument.body):(0,y.Ys)("body"),h="sandbox"===l?s.nodes()[0].contentDocument:document,f=h.getElementById(e);void 0===(n=f.parentElement.offsetWidth)&&(n=1200),void 0!==o.useWidth&&(n=o.useWidth);let k=r.db.getTasks(),m=[];for(let t of k)m.push(t.type);m=checkUnique(m);let p={},g=2*o.topPadding;if("compact"===r.db.getDisplayMode()||"compact"===o.displayMode){let t={};for(let e of k)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let r=tY(t[i],e)+1;e+=r,g+=r*(o.barHeight+o.barGap),p[i]=r}}else for(let t of(g+=k.length*(o.barHeight+o.barGap),m))p[t]=k.filter(e=>e.type===t).length;f.setAttribute("viewBox","0 0 "+n+" "+g);let b=u.select(`[id="${e}"]`),T=(0,y.Xf)().domain([(0,y.VV$)(k,function(t){return t.startTime}),(0,y.Fp7)(k,function(t){return t.endTime})]).rangeRound([0,n-o.leftPadding-o.rightPadding]);function taskCompare(t,e){let i=t.startTime,r=e.startTime,s=0;return i>r?s=1:i<r&&(s=-1),s}function makeGantt(t,e,i){let s=o.barHeight,n=s+o.barGap,c=o.topPadding,l=o.leftPadding,d=(0,y.BYU)().domain([0,m.length]).range(["#00B9FA","#F95002"]).interpolate(y.JHv);drawExcludeDays(n,c,l,e,i,t,r.db.getExcludes(),r.db.getIncludes()),makeGrid(l,c,e,i),drawRects(t,n,c,l,s,d,e,i),vertLabels(n,c,l,s,d),drawToday(l,c,e,i)}function drawRects(t,i,s,n,l,d,u){let h=[...new Set(t.map(t=>t.order))],f=h.map(e=>t.find(t=>t.order===e));b.append("g").selectAll("rect").data(f).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+s-2}).attr("width",function(){return u-o.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of m.entries())if(t.type===i)return"section section"+e%o.numberSectionStyles;return"section section0"});let k=b.append("g").selectAll("rect").data(t).enter(),p=r.db.getLinks();k.append("rect").attr("id",function(t){return t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?T(t.startTime)+n+.5*(T(t.endTime)-T(t.startTime))-.5*l:T(t.startTime)+n}).attr("y",function(t,e){return t.order*i+s}).attr("width",function(t){return t.milestone?l:T(t.renderEndTime||t.endTime)-T(t.startTime)}).attr("height",l).attr("transform-origin",function(t,e){return e=t.order,(T(t.startTime)+n+.5*(T(t.endTime)-T(t.startTime))).toString()+"px "+(e*i+s+.5*l).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,r]of m.entries())t.type===r&&(i=e%o.numberSectionStyles);let r="";return t.active?t.crit?r+=" activeCrit":r=" active":t.done?r=t.crit?" doneCrit":" done":t.crit&&(r+=" crit"),0===r.length&&(r=" task"),t.milestone&&(r=" milestone "+r),"task"+(r+=i+" "+e)}),k.append("text").attr("id",function(t){return t.id+"-text"}).text(function(t){return t.task}).attr("font-size",o.fontSize).attr("x",function(t){let e=T(t.startTime),i=T(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(T(t.endTime)-T(t.startTime))-.5*l),t.milestone&&(i=e+l);let r=this.getBBox().width;return r>i-e?i+r+1.5*o.leftPadding>u?e+n-5:i+n+5:(i-e)/2+e+n}).attr("y",function(t,e){return t.order*i+o.barHeight/2+(o.fontSize/2-2)+s}).attr("text-height",l).attr("class",function(t){let e=T(t.startTime),i=T(t.endTime);t.milestone&&(i=e+l);let r=this.getBBox().width,s="";t.classes.length>0&&(s=t.classes.join(" "));let n=0;for(let[e,i]of m.entries())t.type===i&&(n=e%o.numberSectionStyles);let c="";return(t.active&&(c=t.crit?"activeCritText"+n:"activeText"+n),t.done?c=t.crit?c+" doneCritText"+n:c+" doneText"+n:t.crit&&(c=c+" critText"+n),t.milestone&&(c+=" milestoneText"),r>i-e)?i+r+1.5*o.leftPadding>u?s+" taskTextOutsideLeft taskTextOutside"+n+" "+c:s+" taskTextOutsideRight taskTextOutside"+n+" "+c+" width-"+r:s+" taskText taskText"+n+" "+c+" width-"+r});let g=(0,c.nV)().securityLevel;if("sandbox"===g){let t;t=(0,y.Ys)("#i"+e);let i=t.nodes()[0].contentDocument;k.filter(function(t){return p.has(t.id)}).each(function(t){var e=i.querySelector("#"+t.id),r=i.querySelector("#"+t.id+"-text");let s=e.parentNode;var n=i.createElement("a");n.setAttribute("xlink:href",p.get(t.id)),n.setAttribute("target","_top"),s.appendChild(n),n.appendChild(e),n.appendChild(r)})}}function drawExcludeDays(t,e,i,s,n,l,u,h){let f,y;if(0===u.length&&0===h.length)return;for(let{startTime:t,endTime:e}of l)(void 0===f||t<f)&&(f=t),(void 0===y||e>y)&&(y=e);if(!f||!y)return;if(d(y).diff(d(f),"year")>5){c.cM.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let k=r.db.getDateFormat(),m=[],p=null,g=d(f);for(;g.valueOf()<=y;)r.db.isInvalidDate(g,k,u,h)?p?p.end=g:p={start:g,end:g}:p&&(m.push(p),p=null),g=g.add(1,"d");let x=b.append("g").selectAll("rect").data(m).enter();x.append("rect").attr("id",function(t){return"exclude-"+t.start.format("YYYY-MM-DD")}).attr("x",function(t){return T(t.start)+i}).attr("y",o.gridLineStartPadding).attr("width",function(t){let e=t.end.add(1,"day");return T(e)-T(t.start)}).attr("height",n-e-o.gridLineStartPadding).attr("transform-origin",function(e,r){return(T(e.start)+i+.5*(T(e.end)-T(e.start))).toString()+"px "+(r*t+.5*n).toString()+"px"}).attr("class","exclude-range")}function makeGrid(t,e,i,s){let n=(0,y.LLu)(T).tickSize(-s+e+o.gridLineStartPadding).tickFormat((0,y.i$Z)(r.db.getAxisFormat()||o.axisFormat||"%Y-%m-%d")),c=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||o.tickInterval);if(null!==c){let t=c[1],e=c[2],i=r.db.getWeekday()||o.weekday;switch(e){case"millisecond":n.ticks(y.U8T.every(t));break;case"second":n.ticks(y.S1K.every(t));break;case"minute":n.ticks(y.Z_i.every(t));break;case"hour":n.ticks(y.WQD.every(t));break;case"day":n.ticks(y.rr1.every(t));break;case"week":n.ticks(tM[i].every(t));break;case"month":n.ticks(y.F0B.every(t))}}if(b.append("g").attr("class","grid").attr("transform","translate("+t+", "+(s-50)+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||o.topAxis){let i=(0,y.F5q)(T).tickSize(-s+e+o.gridLineStartPadding).tickFormat((0,y.i$Z)(r.db.getAxisFormat()||o.axisFormat||"%Y-%m-%d"));if(null!==c){let t=c[1],e=c[2],s=r.db.getWeekday()||o.weekday;switch(e){case"millisecond":i.ticks(y.U8T.every(t));break;case"second":i.ticks(y.S1K.every(t));break;case"minute":i.ticks(y.Z_i.every(t));break;case"hour":i.ticks(y.WQD.every(t));break;case"day":i.ticks(y.rr1.every(t));break;case"week":i.ticks(tM[s].every(t));break;case"month":i.ticks(y.F0B.every(t))}}b.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function vertLabels(t,e){let i=0,r=Object.keys(p).map(t=>[t,p[t]]);b.append("g").selectAll("text").data(r).enter().append(function(t){let e=t[0].split(c.SY.lineBreakRegex),i=-(e.length-1)/2,r=h.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,s]of(r.setAttribute("dy",i+"em"),e.entries())){let e=h.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=s,r.appendChild(e)}return r}).attr("x",10).attr("y",function(s,n){if(!(n>0))return s[1]*t/2+e;for(let o=0;o<n;o++)return i+=r[n-1][1],s[1]*t/2+i*t+e}).attr("font-size",o.sectionFontSize).attr("class",function(t){for(let[e,i]of m.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%o.numberSectionStyles;return"sectionTitle"})}function drawToday(t,e,i,s){let n=r.db.getTodayMarker();if("off"===n)return;let c=b.append("g").attr("class","today"),l=new Date,d=c.append("line");d.attr("x1",T(l)+t).attr("x2",T(l)+t).attr("y1",o.titleTopMargin).attr("y2",s-o.titleTopMargin).attr("class","today"),""!==n&&d.attr("style",n.replace(/,/g,";"))}function checkUnique(t){let e={},i=[];for(let r=0,s=t.length;r<s;++r)Object.prototype.hasOwnProperty.call(e,t[r])||(e[t[r]]=!0,i.push(t[r]));return i}(0,c.eW)(taskCompare,"taskCompare"),k.sort(taskCompare),makeGantt(k,n,g),(0,c.v2)(b,g,n,o.useMaxWidth),b.append("text").text(r.db.getDiagramTitle()).attr("x",n/2).attr("y",o.titleTopMargin).attr("class","titleText"),(0,c.eW)(makeGantt,"makeGantt"),(0,c.eW)(drawRects,"drawRects"),(0,c.eW)(drawExcludeDays,"drawExcludeDays"),(0,c.eW)(makeGrid,"makeGrid"),(0,c.eW)(vertLabels,"vertLabels"),(0,c.eW)(drawToday,"drawToday"),(0,c.eW)(checkUnique,"checkUnique")},"draw")},styles:(0,c.eW)(t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,"getStyles")}}}]);