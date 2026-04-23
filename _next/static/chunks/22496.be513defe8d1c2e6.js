"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22496],{99264:function(t,e,s){s.d(e,{j:function(){return a},q:function(){return n}});var i=s(27596),r=s(64665),n=(0,i.eW)((t,e)=>{let s;"sandbox"===e&&(s=(0,r.Ys)("#i"+t));let i="sandbox"===e?(0,r.Ys)(s.nodes()[0].contentDocument.body):(0,r.Ys)("body"),n=i.select(`[id="${t}"]`);return n},"getDiagramElement"),a=(0,i.eW)((t,e,s,r)=>{t.attr("class",s);let{width:n,height:a,x:c,y:d}=o(t,e);(0,i.v2)(t,a,n,r);let h=l(c,d,n,a,e);t.attr("viewBox",h),i.cM.debug(`viewBox configured: ${h} with padding: ${e}`)},"setupViewPortForSVG"),o=(0,i.eW)((t,e)=>{let s=t.node()?.getBBox()||{width:0,height:0,x:0,y:0};return{width:s.width+2*e,height:s.height+2*e,x:s.x,y:s.y}},"calculateDimensionsWithPadding"),l=(0,i.eW)((t,e,s,i,r)=>`${t-r} ${e-r} ${s} ${i}`,"createViewBox")},22496:function(t,e,s){s.d(e,{Ee:function(){return t$},J8:function(){return l},_$:function(){return O},bH:function(){return tC}});var i=s(99264),r=s(4022),n=s(93326),a=s(27596),o=function(){var t=(0,a.eW)(function(t,e,s,i){for(s=s||{},i=t.length;i--;s[t[i]]=e);return s},"o"),e=[1,2],s=[1,3],i=[1,4],r=[2,4],n=[1,9],o=[1,11],l=[1,16],c=[1,17],d=[1,18],h=[1,19],u=[1,32],p=[1,20],y=[1,21],f=[1,22],g=[1,23],S=[1,24],m=[1,26],_=[1,27],b=[1,28],T=[1,29],k=[1,30],E=[1,31],x=[1,34],I=[1,35],C=[1,36],$=[1,37],D=[1,33],v=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],L=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],A=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],W={trace:(0,a.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:(0,a.eW)(function(t,e,s,i,r,n,a){var o=n.length-1;switch(r){case 3:return i.setRootDoc(n[o]),n[o];case 4:this.$=[];break;case 5:"nl"!=n[o]&&(n[o-1].push(n[o]),this.$=n[o-1]);break;case 6:case 7:case 12:this.$=n[o];break;case 8:this.$="nl";break;case 13:let l=n[o-1];l.description=i.trimColon(n[o]),this.$=l;break;case 14:this.$={stmt:"relation",state1:n[o-2],state2:n[o]};break;case 15:let c=i.trimColon(n[o]);this.$={stmt:"relation",state1:n[o-3],state2:n[o-1],description:c};break;case 19:this.$={stmt:"state",id:n[o-3],type:"default",description:"",doc:n[o-1]};break;case 20:var d=n[o],h=n[o-2].trim();if(n[o].match(":")){var u=n[o].split(":");d=u[0],h=[h,u[1]]}this.$={stmt:"state",id:d,type:"default",description:h};break;case 21:this.$={stmt:"state",id:n[o-3],type:"default",description:n[o-5],doc:n[o-1]};break;case 22:this.$={stmt:"state",id:n[o],type:"fork"};break;case 23:this.$={stmt:"state",id:n[o],type:"join"};break;case 24:this.$={stmt:"state",id:n[o],type:"choice"};break;case 25:this.$={stmt:"state",id:i.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:n[o-1].trim(),note:{position:n[o-2].trim(),text:n[o].trim()}};break;case 29:this.$=n[o].trim(),i.setAccTitle(this.$);break;case 30:case 31:this.$=n[o].trim(),i.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:n[o-1].trim(),classes:n[o].trim()};break;case 34:this.$={stmt:"style",id:n[o-1].trim(),styleClass:n[o].trim()};break;case 35:this.$={stmt:"applyClass",id:n[o-1].trim(),styleClass:n[o].trim()};break;case 36:i.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:i.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:i.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:i.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:n[o].trim(),type:"default",description:""};break;case 44:case 45:this.$={stmt:"state",id:n[o-2].trim(),classes:[n[o].trim()],type:"default",description:""}}},"anonymous"),table:[{3:1,4:e,5:s,6:i},{1:[3]},{3:5,4:e,5:s,6:i},{3:6,4:e,5:s,6:i},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],r,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:n,5:o,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:d,22:h,24:u,25:p,26:y,27:f,28:g,29:S,32:25,33:m,35:_,37:b,38:T,42:k,45:E,48:x,49:I,50:C,51:$,54:D},t(v,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:l,17:c,19:d,22:h,24:u,25:p,26:y,27:f,28:g,29:S,32:25,33:m,35:_,37:b,38:T,42:k,45:E,48:x,49:I,50:C,51:$,54:D},t(v,[2,7]),t(v,[2,8]),t(v,[2,9]),t(v,[2,10]),t(v,[2,11]),t(v,[2,12],{14:[1,39],15:[1,40]}),t(v,[2,16]),{18:[1,41]},t(v,[2,18],{20:[1,42]}),{23:[1,43]},t(v,[2,22]),t(v,[2,23]),t(v,[2,24]),t(v,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},t(v,[2,28]),{34:[1,48]},{36:[1,49]},t(v,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},t(L,[2,42],{55:[1,54]}),t(L,[2,43],{55:[1,55]}),t(v,[2,36]),t(v,[2,37]),t(v,[2,38]),t(v,[2,39]),t(v,[2,6]),t(v,[2,13]),{13:56,24:u,54:D},t(v,[2,17]),t(A,r,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},t(v,[2,29]),t(v,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},t(v,[2,14],{14:[1,67]}),{4:n,5:o,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:d,21:[1,68],22:h,24:u,25:p,26:y,27:f,28:g,29:S,32:25,33:m,35:_,37:b,38:T,42:k,45:E,48:x,49:I,50:C,51:$,54:D},t(v,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},t(v,[2,32]),t(v,[2,33]),t(v,[2,34]),t(v,[2,35]),t(L,[2,44]),t(L,[2,45]),t(v,[2,15]),t(v,[2,19]),t(A,r,{7:72}),t(v,[2,26]),t(v,[2,27]),{4:n,5:o,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:d,21:[1,73],22:h,24:u,25:p,26:y,27:f,28:g,29:S,32:25,33:m,35:_,37:b,38:T,42:k,45:E,48:x,49:I,50:C,51:$,54:D},t(v,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:(0,a.eW)(function(t,e){if(e.recoverable)this.trace(t);else{var s=Error(t);throw s.hash=e,s}},"parseError"),parse:(0,a.eW)(function(t){var e=this,s=[0],i=[],r=[null],n=[],o=this.table,l="",c=0,d=0,h=0,u=n.slice.call(arguments,1),p=Object.create(this.lexer),y={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(y.yy[f]=this.yy[f]);p.setInput(t,y.yy),y.yy.lexer=p,y.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var g=p.yylloc;n.push(g);var S=p.options&&p.options.ranges;function lex(){var t;return"number"!=typeof(t=i.pop()||p.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,a.eW)(function(t){s.length=s.length-2*t,r.length=r.length-t,n.length=n.length-t},"popStack"),(0,a.eW)(lex,"lex");for(var m,_,b,T,k,E,x,I,C,$={};;){if(b=s[s.length-1],this.defaultActions[b]?T=this.defaultActions[b]:(null==m&&(m=lex()),T=o[b]&&o[b][m]),void 0===T||!T.length||!T[0]){var D="";for(E in C=[],o[b])this.terminals_[E]&&E>2&&C.push("'"+this.terminals_[E]+"'");D=p.showPosition?"Parse error on line "+(c+1)+":\n"+p.showPosition()+"\nExpecting "+C.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(D,{text:p.match,token:this.terminals_[m]||m,line:p.yylineno,loc:g,expected:C})}if(T[0]instanceof Array&&T.length>1)throw Error("Parse Error: multiple actions possible at state: "+b+", token: "+m);switch(T[0]){case 1:s.push(m),r.push(p.yytext),n.push(p.yylloc),s.push(T[1]),m=null,_?(m=_,_=null):(d=p.yyleng,l=p.yytext,c=p.yylineno,g=p.yylloc,h>0&&h--);break;case 2:if(x=this.productions_[T[1]][1],$.$=r[r.length-x],$._$={first_line:n[n.length-(x||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(x||1)].first_column,last_column:n[n.length-1].last_column},S&&($._$.range=[n[n.length-(x||1)].range[0],n[n.length-1].range[1]]),void 0!==(k=this.performAction.apply($,[l,d,c,y.yy,T[1],r,n].concat(u))))return k;x&&(s=s.slice(0,-1*x*2),r=r.slice(0,-1*x),n=n.slice(0,-1*x)),s.push(this.productions_[T[1]][0]),r.push($.$),n.push($._$),I=o[s[s.length-2]][s[s.length-1]],s.push(I);break;case 3:return!0}}return!0},"parse")},N={EOF:1,parseError:(0,a.eW)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,a.eW)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,a.eW)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,a.eW)(function(t){var e=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===i.length?this.yylloc.first_column:0)+i[i.length-s.length].length-s[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,a.eW)(function(){return this._more=!0,this},"more"),reject:(0,a.eW)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,a.eW)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,a.eW)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,a.eW)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,a.eW)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,a.eW)(function(t,e){var s,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],s=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack)for(var n in r)this[n]=r[n];return!1},"test_match"),next:(0,a.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,s,i,r=this._currentRules(),n=0;n<r.length;n++)if((s=this._input.match(this.rules[r[n]]))&&(!e||s[0].length>e[0].length)){if(e=s,i=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(s,r[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,a.eW)(function(){return this.next()||this.lex()},"lex"),begin:(0,a.eW)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,a.eW)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,a.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,a.eW)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,a.eW)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,a.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,a.eW)(function(t,e,s,i){switch(s){case 0:return 41;case 1:case 42:return 48;case 2:case 43:return 49;case 3:case 44:return 50;case 4:case 45:return 51;case 5:case 6:case 8:case 9:case 10:case 11:case 54:case 56:case 62:break;case 7:case 77:return 5;case 12:case 32:return this.pushState("SCALE"),17;case 13:case 33:return 18;case 14:case 20:case 34:case 49:case 52:this.popState();break;case 15:return this.begin("acc_title"),33;case 16:return this.popState(),"acc_title_value";case 17:return this.begin("acc_descr"),35;case 18:return this.popState(),"acc_descr_value";case 19:this.begin("acc_descr_multiline");break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 24:return this.popState(),this.pushState("CLASSDEFID"),39;case 25:return this.popState(),40;case 26:return this.pushState("CLASS"),45;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;case 28:return this.popState(),47;case 29:return this.pushState("STYLE"),42;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;case 31:return this.popState(),44;case 35:this.pushState("STATE");break;case 36:case 39:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 37:case 40:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),26;case 38:case 41:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),27;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";case 48:case 64:return this.popState(),"ID";case 50:return"STATE_DESCR";case 51:return 19;case 53:return this.popState(),this.pushState("struct"),20;case 55:return this.popState(),21;case 57:return this.begin("NOTE"),29;case 58:return this.popState(),this.pushState("NOTE_ID"),56;case 59:return this.popState(),this.pushState("NOTE_ID"),57;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 63:return"NOTE_TEXT";case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;case 66:return this.popState(),e.yytext=e.yytext.substr(2).trim(),31;case 67:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),31;case 68:case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return e.yytext=e.yytext.trim(),14;case 74:return 15;case 75:return 28;case 76:return 55;case 78:return"INVALID"}},"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}};function Parser(){this.yy={}}return W.lexer=N,(0,a.eW)(Parser,"Parser"),Parser.prototype=W,W.Parser=Parser,new Parser}();o.parser=o;var l=o,c="TB",d="state",h="relation",u="default",p="divider",y="fill:none",f="fill: #333",g="text",S="normal",m="rect",_="rectWithTitle",b="divider",T="roundedWithTitle",k="statediagram",E=`${k}-state`,x="transition",I=`${x} note-edge`,C=`${k}-note`,$=`${k}-cluster`,D=`${k}-cluster-alt`,v="parent",L="note",A="----",W=`${A}${L}`,N=`${A}${v}`,w=(0,a.eW)((t,e=c)=>{if(!t.doc)return e;let s=e;for(let e of t.doc)"dir"===e.stmt&&(s=e.value);return s},"getDir"),O={getClasses:(0,a.eW)(function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()},"getClasses"),draw:(0,a.eW)(async function(t,e,s,o){a.cM.info("REF0:"),a.cM.info("Drawing state diagram (v2)",e);let{securityLevel:l,state:c,layout:d}=(0,a.nV)();o.db.extract(o.db.getRootDocV2());let h=o.db.getData(),u=(0,i.q)(e,l);h.type=o.type,h.layoutAlgorithm=d,h.nodeSpacing=c?.nodeSpacing||50,h.rankSpacing=c?.rankSpacing||50,h.markers=["barb"],h.diagramId=e,await (0,r.sY)(h,u),n.w8.insertTitle(u,"statediagramTitleText",c?.titleTopMargin??25,o.db.getDiagramTitle()),(0,i.j)(u,8,k,c?.useMaxWidth??!0)},"draw"),getDir:w},R=new Map,B=0;function stateDomId(t="",e=0,s="",i=A){let r=null!==s&&s.length>0?`${i}${s}`:"";return`state-${t}${r}-${e}`}(0,a.eW)(stateDomId,"stateDomId");var F=(0,a.eW)((t,e,s,i,r,n,o,l)=>{a.cM.trace("items",e),e.forEach(e=>{switch(e.stmt){case d:case u:P(t,e,s,i,r,n,o,l);break;case h:{P(t,e.state1,s,i,r,n,o,l),P(t,e.state2,s,i,r,n,o,l);let c={id:"edge"+B,start:e.state1.id,end:e.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:y,labelStyle:"",label:a.SY.sanitizeText(e.description,(0,a.nV)()),arrowheadStyle:f,labelpos:"c",labelType:g,thickness:S,classes:x,look:o};r.push(c),B++}}})},"setupDoc"),Y=(0,a.eW)((t,e=c)=>{let s=e;if(t.doc)for(let e of t.doc)"dir"===e.stmt&&(s=e.value);return s},"getDir");function insertOrUpdateNode(t,e,s){if(!e.id||"</join></fork>"===e.id||"</choice>"===e.id)return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(t=>{if(s.get(t)){let i=s.get(t);e.cssCompiledStyles=[...e.cssCompiledStyles,...i.styles]}}));let i=t.find(t=>t.id===e.id);i?Object.assign(i,e):t.push(e)}function getClassesFromDbInfo(t){return t?.classes?.join(" ")??""}function getStylesFromDbInfo(t){return t?.styles??[]}(0,a.eW)(insertOrUpdateNode,"insertOrUpdateNode"),(0,a.eW)(getClassesFromDbInfo,"getClassesFromDbInfo"),(0,a.eW)(getStylesFromDbInfo,"getStylesFromDbInfo");var P=(0,a.eW)((t,e,s,i,r,n,o,l)=>{let c=e.id,d=s.get(c),h=getClassesFromDbInfo(d),k=getStylesFromDbInfo(d);if(a.cM.info("dataFetcher parsedItem",e,d,k),"root"!==c){let s=m;!0===e.start?s="stateStart":!1===e.start&&(s="stateEnd"),e.type!==u&&(s=e.type),R.get(c)||R.set(c,{id:c,shape:s,description:a.SY.sanitizeText(c,(0,a.nV)()),cssClasses:`${h} ${E}`,cssStyles:k});let d=R.get(c);e.description&&(Array.isArray(d.description)?(d.shape=_,d.description.push(e.description)):d.description?.length>0?(d.shape=_,d.description===c?d.description=[e.description]:d.description=[d.description,e.description]):(d.shape=m,d.description=e.description),d.description=a.SY.sanitizeTextOrArray(d.description,(0,a.nV)())),d.description?.length===1&&d.shape===_&&("group"===d.type?d.shape=T:d.shape=m),!d.type&&e.doc&&(a.cM.info("Setting cluster for XCX",c,Y(e)),d.type="group",d.isGroup=!0,d.dir=Y(e),d.shape=e.type===p?b:T,d.cssClasses=`${d.cssClasses} ${$} ${n?D:""}`);let x={labelStyle:"",shape:d.shape,label:d.description,cssClasses:d.cssClasses,cssCompiledStyles:[],cssStyles:d.cssStyles,id:c,dir:d.dir,domId:stateDomId(c,B),type:d.type,isGroup:"group"===d.type,padding:8,rx:10,ry:10,look:o};if(x.shape===b&&(x.label=""),t&&"root"!==t.id&&(a.cM.trace("Setting node ",c," to be child of its parent ",t.id),x.parentId=t.id),x.centerLabel=!0,e.note){let t={labelStyle:"",shape:"note",label:e.note.text,cssClasses:C,cssStyles:[],cssCompilesStyles:[],id:c+W+"-"+B,domId:stateDomId(c,B,L),type:d.type,isGroup:"group"===d.type,padding:(0,a.nV)().flowchart.padding,look:o,position:e.note.position},s=c+N,n={labelStyle:"",shape:"noteGroup",label:e.note.text,cssClasses:d.cssClasses,cssStyles:[],id:c+N,domId:stateDomId(c,B,v),type:"group",isGroup:!0,padding:16,look:o,position:e.note.position};B++,n.id=s,t.parentId=s,insertOrUpdateNode(i,n,l),insertOrUpdateNode(i,t,l),insertOrUpdateNode(i,x,l);let h=c,u=t.id;"left of"===e.note.position&&(h=t.id,u=c),r.push({id:h+"-"+u,start:h,end:u,arrowhead:"none",arrowTypeEnd:"",style:y,labelStyle:"",classes:I,arrowheadStyle:f,labelpos:"c",labelType:g,thickness:S,look:o})}else insertOrUpdateNode(i,x,l)}e.doc&&(a.cM.trace("Adding nodes children "),F(e,e.doc,s,i,r,!n,o,l))},"dataFetcher"),M=(0,a.eW)(()=>{R.clear(),B=0},"reset"),G="start",j="color",U="fill";function newClassesList(){return new Map}(0,a.eW)(newClassesList,"newClassesList");var V=[],z=[],H="LR",X=[],J=newClassesList(),K=(0,a.eW)(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),q={root:K()},Z=q.root,Q=0,tt=0,te=(0,a.eW)(t=>JSON.parse(JSON.stringify(t)),"clone"),ts=(0,a.eW)(t=>{a.cM.info("Setting root doc",t),X=t},"setRootDoc"),ti=(0,a.eW)(()=>X,"getRootDoc"),tr=(0,a.eW)((t,e,s)=>{if(e.stmt===h)tr(t,e.state1,!0),tr(t,e.state2,!1);else if(e.stmt===d&&("[*]"===e.id?(e.id=s?t.id+"_start":t.id+"_end",e.start=s):e.id=e.id.trim()),e.doc){let t;let s=[],i=[];for(t=0;t<e.doc.length;t++)if(e.doc[t].type===p){let r=te(e.doc[t]);r.doc=te(i),s.push(r),i=[]}else i.push(e.doc[t]);if(s.length>0&&i.length>0){let t={stmt:d,id:(0,n.Ox)(),type:"divider",doc:te(i)};s.push(te(t)),e.doc=s}e.doc.forEach(t=>tr(e,t,!0))}},"docTranslator"),tn=(0,a.eW)(()=>(tr({id:"root"},{id:"root",doc:X},!0),{id:"root",doc:X}),"getRootDocV2"),ta=(0,a.eW)(t=>{let e;e=t.doc?t.doc:t,a.cM.info(e),tl(!0),a.cM.info("Extract initial document:",e),e.forEach(t=>{switch(a.cM.warn("Statement",t.stmt),t.stmt){case d:to(t.id.trim(),t.type,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles);break;case h:tp(t.state1,t.state2,t.description);break;case"classDef":tS(t.id.trim(),t.classes);break;case"style":{let e=t.id.trim().split(","),s=t.styleClass.split(",");e.forEach(t=>{let e=tc(t);if(void 0===e){let s=t.trim();to(s),e=tc(s)}e.styles=s.map(t=>t.replace(/;/g,"")?.trim())})}break;case"applyClass":t_(t.id.trim(),t.styleClass)}});let s=td(),i=(0,a.nV)(),r=i.look;M(),P(void 0,tn(),s,V,z,!0,r,J),V.forEach(t=>{if(Array.isArray(t.label)){if(t.description=t.label.slice(1),t.isGroup&&t.description.length>0)throw Error("Group nodes can only have label. Remove the additional description for node ["+t.id+"]");t.label=t.label[0]}})},"extract"),to=(0,a.eW)(function(t,e=u,s=null,i=null,r=null,n=null,o=null,l=null){let c=t?.trim();if(Z.states.has(c)?(Z.states.get(c).doc||(Z.states.get(c).doc=s),Z.states.get(c).type||(Z.states.get(c).type=e)):(a.cM.info("Adding state ",c,i),Z.states.set(c,{id:c,descriptions:[],type:e,doc:s,note:r,classes:[],styles:[],textStyles:[]})),i&&(a.cM.info("Setting state description",c,i),"string"==typeof i&&ty(c,i.trim()),"object"==typeof i&&i.forEach(t=>ty(c,t.trim()))),r){let t=Z.states.get(c);t.note=r,t.note.text=a.SY.sanitizeText(t.note.text,(0,a.nV)())}if(n){a.cM.info("Setting state classes",c,n);let t="string"==typeof n?[n]:n;t.forEach(t=>t_(c,t.trim()))}if(o){a.cM.info("Setting state styles",c,o);let t="string"==typeof o?[o]:o;t.forEach(t=>tb(c,t.trim()))}l&&(a.cM.info("Setting state styles",c,o),("string"==typeof l?[l]:l).forEach(t=>tT(c,t.trim())))},"addState"),tl=(0,a.eW)(function(t){V=[],z=[],Z=(q={root:K()}).root,Q=0,J=newClassesList(),t||(0,a.ZH)()},"clear"),tc=(0,a.eW)(function(t){return Z.states.get(t)},"getState"),td=(0,a.eW)(function(){return Z.states},"getStates"),th=(0,a.eW)(function(){a.cM.info("Documents = ",q)},"logDocuments"),tu=(0,a.eW)(function(){return Z.relations},"getRelations");function startIdIfNeeded(t=""){let e=t;return"[*]"===t&&(Q++,e=`${G}${Q}`),e}function startTypeIfNeeded(t="",e=u){return"[*]"===t?G:e}function endIdIfNeeded(t=""){let e=t;return"[*]"===t&&(Q++,e=`end${Q}`),e}function endTypeIfNeeded(t="",e=u){return"[*]"===t?"end":e}function addRelationObjs(t,e,s){let i=startIdIfNeeded(t.id.trim()),r=startTypeIfNeeded(t.id.trim(),t.type),n=startIdIfNeeded(e.id.trim()),o=startTypeIfNeeded(e.id.trim(),e.type);to(i,r,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),to(n,o,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),Z.relations.push({id1:i,id2:n,relationTitle:a.SY.sanitizeText(s,(0,a.nV)())})}(0,a.eW)(startIdIfNeeded,"startIdIfNeeded"),(0,a.eW)(startTypeIfNeeded,"startTypeIfNeeded"),(0,a.eW)(endIdIfNeeded,"endIdIfNeeded"),(0,a.eW)(endTypeIfNeeded,"endTypeIfNeeded"),(0,a.eW)(addRelationObjs,"addRelationObjs");var tp=(0,a.eW)(function(t,e,s){if("object"==typeof t)addRelationObjs(t,e,s);else{let i=startIdIfNeeded(t.trim()),r=startTypeIfNeeded(t),n=endIdIfNeeded(e.trim()),o=endTypeIfNeeded(e);to(i,r),to(n,o),Z.relations.push({id1:i,id2:n,title:a.SY.sanitizeText(s,(0,a.nV)())})}},"addRelation"),ty=(0,a.eW)(function(t,e){let s=Z.states.get(t),i=e.startsWith(":")?e.replace(":","").trim():e;s.descriptions.push(a.SY.sanitizeText(i,(0,a.nV)()))},"addDescription"),tf=(0,a.eW)(function(t){return":"===t.substring(0,1)?t.substr(2).trim():t.trim()},"cleanupLabel"),tg=(0,a.eW)(()=>"divider-id-"+ ++tt,"getDividerId"),tS=(0,a.eW)(function(t,e=""){J.has(t)||J.set(t,{id:t,styles:[],textStyles:[]});let s=J.get(t);null!=e&&e.split(",").forEach(t=>{let e=t.replace(/([^;]*);/,"$1").trim();if(RegExp(j).exec(t)){let t=e.replace(U,"bgFill"),i=t.replace(j,U);s.textStyles.push(i)}s.styles.push(e)})},"addStyleClass"),tm=(0,a.eW)(function(){return J},"getClasses"),t_=(0,a.eW)(function(t,e){t.split(",").forEach(function(t){let s=tc(t);if(void 0===s){let e=t.trim();to(e),s=tc(e)}s.classes.push(e)})},"setCssClass"),tb=(0,a.eW)(function(t,e){let s=tc(t);void 0!==s&&s.styles.push(e)},"setStyle"),tT=(0,a.eW)(function(t,e){let s=tc(t);void 0!==s&&s.textStyles.push(e)},"setTextStyle"),tk=(0,a.eW)(()=>H,"getDirection"),tE=(0,a.eW)(t=>{H=t},"setDirection"),tx=(0,a.eW)(t=>t&&":"===t[0]?t.substr(1).trim():t.trim(),"trimColon"),tI=(0,a.eW)(()=>{let t=(0,a.nV)();return{nodes:V,edges:z,other:{},config:t,direction:w(tn())}},"getData"),tC={getConfig:(0,a.eW)(()=>(0,a.nV)().state,"getConfig"),getData:tI,addState:to,clear:tl,getState:tc,getStates:td,getRelations:tu,getClasses:tm,getDirection:tk,addRelation:tp,getDividerId:tg,setDirection:tE,cleanupLabel:tf,lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},logDocuments:th,getRootDoc:ti,setRootDoc:ts,getRootDocV2:tn,extract:ta,trimColon:tx,getAccTitle:a.eu,setAccTitle:a.GN,getAccDescription:a.Mx,setAccDescription:a.U$,addStyleClass:tS,setCssClass:t_,addDescription:ty,setDiagramTitle:a.g2,getDiagramTitle:a.Kr},t$=(0,a.eW)(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles")}}]);