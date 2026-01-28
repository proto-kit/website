"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3152],{86810:function(e,t,a){function populateCommonDb(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{A:function(){return populateCommonDb}}),(0,a(27596).eW)(populateCommonDb,"populateCommonDb")},13152:function(e,t,a){a.d(t,{diagram:function(){return b}});var i=a(86810),l=a(93326),r=a(32356),n=a(27596),o=a(99290),s=a(64665),c=n.vZ.pie,p={sections:new Map,showData:!1,config:c},d=p.sections,u=p.showData,g=structuredClone(c),f=(0,n.eW)(()=>structuredClone(g),"getConfig"),m=(0,n.eW)(()=>{d=new Map,u=p.showData,(0,n.ZH)()},"clear"),h=(0,n.eW)(({label:e,value:t})=>{d.has(e)||(d.set(e,t),n.cM.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),x=(0,n.eW)(()=>d,"getSections"),w=(0,n.eW)(e=>{u=e},"setShowData"),D=(0,n.eW)(()=>u,"getShowData"),C={getConfig:f,clear:m,setDiagramTitle:n.g2,getDiagramTitle:n.Kr,setAccTitle:n.GN,getAccTitle:n.eu,setAccDescription:n.U$,getAccDescription:n.Mx,addSection:h,getSections:x,setShowData:w,getShowData:D},S=(0,n.eW)((e,t)=>{(0,i.A)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),T={parse:(0,n.eW)(async e=>{let t=await (0,o.Qc)("pie",e);n.cM.debug(t),S(t,C)},"parse")},$=(0,n.eW)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),y=(0,n.eW)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value),a=(0,s.ve8)().value(e=>e.value);return a(t)},"createPieArcs"),b={parser:T,db:C,renderer:{draw:(0,n.eW)((e,t,a,i)=>{n.cM.debug("rendering pie chart\n"+e);let o=i.db,c=(0,n.nV)(),p=(0,l.Rb)(o.getConfig(),c.pie),d=(0,r.P)(t),u=d.append("g");u.attr("transform","translate(225,225)");let{themeVariables:g}=c,[f]=(0,l.VG)(g.pieOuterStrokeWidth);f??=2;let m=p.textPosition,h=(0,s.Nb1)().innerRadius(0).outerRadius(185),x=(0,s.Nb1)().innerRadius(185*m).outerRadius(185*m);u.append("circle").attr("cx",0).attr("cy",0).attr("r",185+f/2).attr("class","pieOuterCircle");let w=o.getSections(),D=y(w),C=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],S=(0,s.PKp)(C);u.selectAll("mySlices").data(D).enter().append("path").attr("d",h).attr("fill",e=>S(e.data.label)).attr("class","pieCircle");let T=0;w.forEach(e=>{T+=e}),u.selectAll("mySlices").data(D).enter().append("text").text(e=>(e.data.value/T*100).toFixed(0)+"%").attr("transform",e=>"translate("+x.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let $=u.selectAll(".legend").data(S.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>{let a=22*S.domain().length/2;return"translate(216,"+(22*t-a)+")"});$.append("rect").attr("width",18).attr("height",18).style("fill",S).style("stroke",S),$.data(D).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:a}=e.data;return o.getShowData()?`${t} [${a}]`:t});let b=Math.max(...$.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),W=512+b;d.attr("viewBox",`0 0 ${W} 450`),(0,n.v2)(d,450,W,p.useMaxWidth)},"draw")},styles:$}}}]);