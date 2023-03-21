"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[442],{3442:function(e,n,r){r.r(n),r.d(n,{default:function(){return I}});var i=r(9434),l=r(9229),a=r(6351),t=r(296),s=r(176),d=r(4224),o=r(3329),u=function(e){var n=e.id,r=e.name,a=e.number,u=(0,i.I0)();return(0,o.jsxs)(s.k,{p:"10px",flexDirection:"row",justifyContent:"space-between",alignItems:"center",variant:"unstyled",children:[(0,o.jsxs)(l.x,{children:[(0,o.jsx)("b",{children:r}),": ",a]}),(0,o.jsx)(s.k,{mr:"5px",children:(0,o.jsx)(d.z,{colorScheme:"red",onClick:function(){return u((0,t.in)(n))},children:"Delete"})})]})},c=function(){var e=(0,i.v9)(a.K2),n=(0,i.v9)(a.zK),r=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,o.jsx)(o.Fragment,{children:0===e.length?(0,o.jsx)(l.x,{textAlign:"center",children:(0,o.jsx)("b",{children:"Contacts list is empty!"})}):r.map((function(e){var n=e.id,r=e.name,i=e.number;return(0,o.jsx)(u,{id:n,name:r,number:i},n)}))})},m=r(2701),v=r(4585),h=r(7886),p=r(2993),f=function(){var e=(0,i.I0)();return(0,o.jsx)(s.k,{children:(0,o.jsxs)(m.NI,{mb:"20px",p:"10px",children:[(0,o.jsx)(v.l,{children:"Find contacts by name:"}),(0,o.jsx)(h.I,{type:"text",name:"name",onChange:function(n){var r=n.target;e((0,p.T)(r.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"User name"})]})})},x=r(1413),b=r(2791),Z={name:"",number:""},j=function(){var e=(0,i.I0)();(0,b.useEffect)((function(){e((0,t.CL)())}),[e]);var n=function(e){var n=e.target,r=n.name,i=n.value;return Z[r]=i};return(0,o.jsx)(s.k,{mt:"20px",flexDirection:"column",p:"10px",children:(0,o.jsxs)("form",{onSubmit:function(n){var r;n.preventDefault(),r=(0,x.Z)({},Z),e((0,t.v6)(r)),n.target.reset()},children:[(0,o.jsxs)(m.NI,{mb:"20px",isRequired:!0,children:[(0,o.jsx)(v.l,{children:"Name"}),(0,o.jsx)(h.I,{type:"text",name:"name",onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Name"})]}),(0,o.jsxs)(m.NI,{mb:"20px",isRequired:!0,children:[(0,o.jsx)(v.l,{children:"Number"}),(0,o.jsx)(h.I,{type:"tel",name:"number",onChange:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Number"})]}),(0,o.jsx)(s.k,{justifyContent:"center",children:(0,o.jsx)(d.z,{colorScheme:"whatsapp",type:"submit",children:"Add contacts"})})]})})},I=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{}),(0,o.jsx)(f,{}),(0,o.jsx)(c,{})]})}},4585:function(e,n,r){r.d(n,{l:function(){return v}});var i=r(1413),l=r(4925),a=r(2701),t=r(7872),s=r(9219),d=r(2996),o=r(1999),u=r(6992),c=r(3329),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,t.G)((function(e,n){var r,t=(0,s.mq)("FormLabel",e),v=(0,d.Lr)(e),p=(v.className,v.children),f=v.requiredIndicator,x=void 0===f?(0,c.jsx)(h,{}):f,b=v.optionalIndicator,Z=void 0===b?null:b,j=(0,l.Z)(v,m),I=(0,a.NJ)(),g=null!=(r=null==I?void 0:I.getLabelProps(j,n))?r:(0,i.Z)({ref:n},j);return(0,c.jsxs)(o.m.label,(0,i.Z)((0,i.Z)({},g),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,i.Z)({display:"block",textAlign:"start"},t),children:[p,(null==I?void 0:I.isRequired)?x:Z]}))}));v.displayName="FormLabel";var h=(0,t.G)((function(e,n){var r=(0,a.NJ)(),l=(0,a.e)();if(!(null==r?void 0:r.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(o.m.span,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:l.requiredIndicator,className:t}))}));h.displayName="RequiredIndicator"},2701:function(e,n,r){r.d(n,{NI:function(){return N},NJ:function(){return k},Q6:function(){return R},e:function(){return j}});var i=r(1413),l=r(4925),a=r(9439),t=r(9886),s=r(4591),d=r(7872),o=r(9219),u=r(2996),c=r(1999),m=r(6992),v=r(2791),h=r(3329),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],x=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,a.Z)(x,2),Z=b[0],j=b[1],I=(0,t.k)({strict:!1,name:"FormControlContext"}),g=(0,a.Z)(I,2),y=g[0],k=g[1];var N=(0,d.G)((function(e,n){var r=(0,o.jC)("Form",e),t=function(e){var n=e.id,r=e.isRequired,t=e.isInvalid,d=e.isDisabled,o=e.isReadOnly,u=(0,l.Z)(e,p),c=(0,v.useId)(),h=n||"field-".concat(c),f="".concat(h,"-label"),x="".concat(h,"-feedback"),b="".concat(h,"-helptext"),Z=(0,v.useState)(!1),j=(0,a.Z)(Z,2),I=j[0],g=j[1],y=(0,v.useState)(!1),k=(0,a.Z)(y,2),N=k[0],R=k[1],q=(0,v.useState)(!1),C=(0,a.Z)(q,2),F=C[0],_=C[1],P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&R(!0)}))})}),[b]),D=(0,v.useCallback)((function(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},r),{},{ref:l,"data-focus":(0,m.PB)(F),"data-disabled":(0,m.PB)(d),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(o),id:null!=(e=r.id)?e:f,htmlFor:null!=(n=r.htmlFor)?n:h})}),[h,d,F,t,o,f]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&g(!0)})),"aria-live":"polite"})}),[x]),z=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!o,isDisabled:!!d,isFocused:!!F,onFocus:function(){return _(!0)},onBlur:function(){return _(!1)},hasFeedbackText:I,setHasFeedbackText:g,hasHelpText:N,setHasHelpText:R,id:h,labelId:f,feedbackId:x,helpTextId:b,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:T,getRootProps:z,getLabelProps:D,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),d=t.getRootProps,x=(t.htmlProps,(0,l.Z)(t,f)),b=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(y,{value:x,children:(0,h.jsx)(Z,{value:r,children:(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},d({},n)),{},{className:b,__css:r.container}))})})}));N.displayName="FormControl";var R=(0,d.G)((function(e,n){var r=k(),l=j(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:l.helperText,className:a}))}));R.displayName="FormHelperText"},7886:function(e,n,r){r.d(n,{I:function(){return f}});var i=r(1413),l=r(4925),a=r(2701),t=r(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],d=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function o(e){var n=function(e){var n,r,s,o=(0,a.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,h=e.isRequired,p=e.isInvalid,f=e.isReadOnly,x=e.isDisabled,b=e.onFocus,Z=e.onBlur,j=(0,l.Z)(e,d),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==o?void 0:o.hasFeedbackText)&&(null==o?void 0:o.isInvalid)&&I.push(o.feedbackId);(null==o?void 0:o.hasHelpText)&&I.push(o.helpTextId);return(0,i.Z)((0,i.Z)({},j),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==o?void 0:o.id,isDisabled:null!=(n=null!=c?c:x)?n:null==o?void 0:o.isDisabled,isReadOnly:null!=(r=null!=m?m:f)?r:null==o?void 0:o.isReadOnly,isRequired:null!=(s=null!=v?v:h)?s:null==o?void 0:o.isRequired,isInvalid:null!=p?p:null==o?void 0:o.isInvalid,onFocus:(0,t.v0)(null==o?void 0:o.onFocus,b),onBlur:(0,t.v0)(null==o?void 0:o.onBlur,Z)})}(e),r=n.isDisabled,o=n.isInvalid,u=n.isReadOnly,c=n.isRequired,m=(0,l.Z)(n,s);return(0,i.Z)((0,i.Z)({},m),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(o),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=r(7872),c=r(9219),m=r(2996),v=r(1999),h=r(3329),p=["htmlSize"],f=(0,u.G)((function(e,n){var r=e.htmlSize,a=(0,l.Z)(e,p),s=(0,c.jC)("Input",a),d=o((0,m.Lr)(a)),u=(0,t.cx)("chakra-input",e.className);return(0,h.jsx)(v.m.input,(0,i.Z)((0,i.Z)({size:r},d),{},{__css:s.field,ref:n,className:u}))}));f.displayName="Input",f.id="Input"}}]);
//# sourceMappingURL=442.154406f3.chunk.js.map