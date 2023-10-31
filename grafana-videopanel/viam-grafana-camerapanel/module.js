      font-family: Open Sans;
      position: relative;
    `,svg:r.css`
      position: absolute;
      top: 0;
      left: 0;
    `,textBox:r.css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `}),h=new e.PanelPlugin((({options:e,data:s,width:p,height:u})=>{const m=(0,n.useStyles2)(b),{status:v,connectOrDisconnect:h,streamClient:R}=(()=>{const[e,o]=(0,t.useState)({status:l});return e.status===l&&e.error&&console.warn("Connection error",e.error),{connectOrDisconnect:t=>{e.status===l?(o({status:g}),a(t).then((e=>{const t=(e=>new i.nV(e))(e),r=(e=>new i.WI(e,"viam_base"))(e);o({status:d,client:e,baseClient:r,streamClient:t})})).catch((e=>o({status:l,error:e})))):e.status===d&&(o({status:c}),e.client.disconnect().then((()=>o({status:l}))).catch((e=>o({status:l,error:e}))))},status:e.status,client:e.status===d?e.client:void 0,baseClient:e.status===d?e.baseClient:void 0,streamClient:e.status===d?e.streamClient:void 0}})(),S=((e,o)=>{const r=(0,t.useRef)(!0),[n,i]=(0,t.useState)();return(0,t.useEffect)((()=>{if(e&&r.current)return r.current=!1,e.getStream(o).then((e=>i(e))).catch((e=>{console.warn(`Unable to connect to camera ${o}`,e)})),()=>{r.current=!0,e.remove(o).catch((e=>{console.warn(`Unable to disconnect to camera ${o}`,e)}))}}),[e,o]),n})(R,"cam");return o().createElement("div",{className:(0,r.cx)(m.wrapper,r.css`
          width: ${p}px;
          height: ${u}px;
        `)},o().createElement(f,{status:v,onSubmit:h}),o().createElement(y,{stream:S}),o().createElement("div",{className:m.textBox},o().createElement("div",null,"Connection Status: ",v)))})).setPanelOptions((e=>e.addTextInput({path:"text",name:"Simple text option",description:"Description of panel option",defaultValue:"Default value of text input option"}).addBooleanSwitch({path:"showSeriesCount",name:"Show series counter",defaultValue:!1}).addRadio({path:"seriesCountSize",defaultValue:"sm",name:"Series counter size",settings:{options:[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}]},showIf:e=>e.showSeriesCount})))})(),__webpack_exports__})()));
//# sourceMappingURL=module.js.map