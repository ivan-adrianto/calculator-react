(this.webpackJsonpcalcyo=this.webpackJsonpcalcyo||[]).push([[0],[,,,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_ivan_Documents_GitBoys_calc_calc_dw_challenge_calculator_collabs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_home_ivan_Documents_GitBoys_calc_calc_dw_challenge_calculator_collabs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_home_ivan_Documents_GitBoys_calc_calc_dw_challenge_calculator_collabs_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_home_ivan_Documents_GitBoys_calc_calc_dw_challenge_calculator_collabs_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Display__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(13),_TombolAngka__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),_App_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(29),_App_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__),_letscalc_png__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(14),_phone_png__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(15),react_bootstrap__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(30),_PrevOperationz__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(16),_right_arrow_black_triangle_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(17),_rounded_black_square_shape_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(18),_dry_clean_svg__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(19),App=function(_Component){Object(_home_ivan_Documents_GitBoys_calc_calc_dw_challenge_calculator_collabs_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(_home_ivan_Documents_GitBoys_calc_calc_dw_challenge_calculator_collabs_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;Object(_home_ivan_Documents_GitBoys_calc_calc_dw_challenge_calculator_collabs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={result:"",prevOperation:""},_this.forbiddenOnes=["++","**","//","+*","-*","-+","*+","+/","/+","*/","/*","-/","-*","..","--","+-","*-","()"],_this.specialOperators=["=","C","CE"],_this.noSpecialBegin=["=","*","/"],_this.onClick=function(_){if(""!==_this.state.prevOperation){if(["+","-","*","/"].indexOf(_)>-1)_this.setState({result:_this.state.result+_,prevOperation:""});else{if(_this.specialOperators.indexOf(_)>-1)return console.log("yes"),_this.specialOps(_);_this.setState({result:_,prevOperation:""})}}else if(""===_this.state.prevOperation){if(""!==_this.state.result)return _this.normalOps(_);if(!(_this.noSpecialBegin.indexOf(_)>-1))return _this.normalOps(_);_this.setState({result:""})}},_this.normalOps=function(_){if(_this.specialOperators.indexOf(_)>-1)return _this.specialOps(_);_this.forbiddenOnes.indexOf(_this.state.result[_this.state.result.length-1]+_)>-1?_this.setState({result:_this.state.result.slice(0,-1)+_}):_this.state.result.length>11?_this.setState({result:_this.state.result}):_this.setState({result:_this.state.result+_})},_this.specialOps=function(_){return"CE"===_?_this.backspace():"C"===_?_this.reset():"="===_?_this.calculate():void 0},_this.calculate=function(){try{var singkatan=eval(_this.state.result),final=singkatan.toFixed(singkatan.toString().length-(singkatan.toString().length-12)-(singkatan.toString().split(".")[0].length+1));if(singkatan.toString().length>12)try{_this.setState({prevOperation:_this.state.result,result:(final||"")+""})}catch(e){_this.setState({result:"error"})}else try{_this.setState({prevOperation:_this.state.result,result:(singkatan||"")+""})}catch(e){_this.setState({result:0})}}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:"",prevOperation:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1),prevOperation:""})},_this}return Object(_home_ivan_Documents_GitBoys_calc_calc_dw_challenge_calculator_collabs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"letscalc",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{src:_letscalc_png__WEBPACK_IMPORTED_MODULE_9__.a,className:"lets",alt:"calc"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"mockup",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"phone",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{src:_phone_png__WEBPACK_IMPORTED_MODULE_10__.a,className:"App-phone",alt:"phone"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"calcbutton",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PrevOperationz__WEBPACK_IMPORTED_MODULE_12__.a,{prevOps:this.state.prevOperation}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Display__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TombolAngka__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.onClick})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"mockup-menu",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{src:_rounded_black_square_shape_svg__WEBPACK_IMPORTED_MODULE_14__.a,alt:"home"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{src:_dry_clean_svg__WEBPACK_IMPORTED_MODULE_15__.a,alt:"option"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{src:_right_arrow_black_triangle_svg__WEBPACK_IMPORTED_MODULE_13__.a,alt:"back"})]})]})]})})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},function(_,e,t){"use strict";var s=t(3),a=t(4),c=t(6),r=t(5),i=t(0),n=t(1),l=function(_){Object(c.a)(t,_);var e=Object(r.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){var _=this.props.result;return Object(i.jsx)("div",{className:"result",children:Object(i.jsx)("p",{children:_})})}}]),t}(n.Component);e.a=l},function(_,e,t){"use strict";e.a=t.p+"static/media/letscalc.f96fab08.png"},function(_,e,t){"use strict";e.a=t.p+"static/media/phone.f31e4e58.png"},function(_,e,t){"use strict";var s=t(3),a=t(4),c=t(6),r=t(5),i=t(0),n=t(1),l=function(_){Object(c.a)(t,_);var e=Object(r.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){var _=this.props.prevOps;return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:_})})}}]),t}(n.Component);e.a=l},function(_,e,t){"use strict";e.a=t.p+"static/media/right-arrow-black-triangle.b41c499d.svg"},function(_,e,t){"use strict";e.a=t.p+"static/media/rounded-black-square-shape.27a0d0fa.svg"},function(_,e,t){"use strict";e.a=t.p+"static/media/dry-clean.2322b803.svg"},function(_,e,t){"use strict";var s=t(3),a=t(4),c=t(6),r=t(5),i=t(0),n=t(1),l=t(31),o=t.p+"static/media/backspace.b48b3cfb.svg",u=function(_){Object(c.a)(t,_);var e=Object(r.a)(t);function t(){var _;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(_=e.call.apply(e,[this].concat(c))).clicked=function(e){_.props.onClick(e.target.name)},_}return Object(a.a)(t,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)(l.a,{variant:"success",className:"operator",name:"(",onClick:this.clicked,children:"("}),Object(i.jsx)(l.a,{variant:"success",className:"operator",name:")",onClick:this.clicked,children:")"}),Object(i.jsx)(l.a,{variant:"success",className:"operator",name:"C",onClick:this.clicked,children:"C"}),Object(i.jsx)(l.a,{variant:"success",className:"operator",name:"CE",onClick:this.clicked,children:Object(i.jsx)("img",{src:o,alt:"backspace"})}),Object(i.jsx)("br",{}),Object(i.jsx)(l.a,{variant:"success",className:"number",name:"1",onClick:this.clicked,children:"1"}),Object(i.jsx)(l.a,{variant:"success",className:"number",name:"2",onClick:this.clicked,children:"2"}),Object(i.jsx)(l.a,{variant:"success",className:"number",name:"3",onClick:this.clicked,children:"3"}),Object(i.jsx)(l.a,{variant:"success",className:"operator",name:"+",onClick:this.clicked,children:"+"}),Object(i.jsx)("br",{}),Object(i.jsx)(l.a,{variant:"success",className:"number",name:"4",onClick:this.clicked,children:"4"}),Object(i.jsx)(l.a,{variant:"success",className:"number",name:"5",onClick:this.clicked,children:"5"}),Object(i.jsx)(l.a,{variant:"success",className:"number",name:"6",onClick:this.clicked,children:"6"}),Object(i.jsx)(l.a,{variant:"success",className:"operator",name:"-",onClick:this.clicked,children:"-"}),Object(i.jsx)("br",{}),Object(i.jsx)(l.a,{variant:"success",className:"number",name:"7",onClick:this.clicked,children:"7"}),Object(i.jsx)(l.a,{variant:"success",className:"number",name:"8",onClick:this.clicked,children:"8"}),Object(i.jsx)(l.a,{variant:"success",className:"number",name:"9",onClick:this.clicked,children:"9"}),Object(i.jsx)(l.a,{variant:"success",className:"operator",name:"*",onClick:this.clicked,children:"x"}),Object(i.jsx)("br",{}),Object(i.jsx)(l.a,{variant:"success",className:"operator",name:".",onClick:this.clicked,children:"."}),Object(i.jsx)(l.a,{variant:"success",className:"number",name:"0",onClick:this.clicked,children:"0"}),Object(i.jsx)(l.a,{variant:"success",className:"operator",name:"=",onClick:this.clicked,children:"="}),Object(i.jsx)(l.a,{variant:"success",className:"operator",name:"/",onClick:this.clicked,children:"\xf7"}),Object(i.jsx)("br",{})]})}}]),t}(n.Component);e.a=u},function(_,e,t){"use strict";t.r(e);var s=t(0),a=t(1),c=t.n(a),r=t(11),i=t.n(r),n=(t(28),t(12));i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(n.a,{})}),document.getElementById("root"))},,,,,,,,function(_,e,t){}],[[21,1,2]]]);
//# sourceMappingURL=main.95142367.chunk.js.map