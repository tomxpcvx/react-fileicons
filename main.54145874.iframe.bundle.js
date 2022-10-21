(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[179],{"../react-fileicons/dist/components/FileIcon.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_propTypes=_interopRequireDefault(__webpack_require__("../react-fileicons/node_modules/prop-types/index.js"));__webpack_require__("../react-fileicons/node_modules/typeface-roboto/index.css");var _FileIconBase=_interopRequireDefault(__webpack_require__("../react-fileicons/dist/components/FileIconBase.js")),_FileIconContainer=_interopRequireDefault(__webpack_require__("../react-fileicons/dist/components/FileIconContainer.js")),_ColorScheme=_interopRequireDefault(__webpack_require__("../react-fileicons/dist/helpers/ColorScheme.js")),_IconStyle=_interopRequireDefault(__webpack_require__("../react-fileicons/dist/helpers/IconStyle.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var FileIcon=function(_react$default$PureCo){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(FileIcon,_react$default$PureCo);var _super=_createSuper(FileIcon);function FileIcon(){return _classCallCheck(this,FileIcon),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(FileIcon,[{key:"render",value:function render(){var props=this.props;return _react.default.createElement(_FileIconContainer.default,{size:props.size},_react.default.createElement(_FileIconBase.default,props))}}]),FileIcon}(_react.default.PureComponent);FileIcon.defaultProps={extension:"js",colorScheme:_ColorScheme.default.lightBlue,iconStyle:_IconStyle.default.normal,size:50,background:"#fff",fontSize:0},FileIcon.propTypes={extension:_propTypes.default.string.isRequired,colorScheme:_propTypes.default.shape({primary:_propTypes.default.string.isRequired,secondary:_propTypes.default.string.isRequired}).isRequired,iconStyle:_propTypes.default.string.isRequired,size:_propTypes.default.number.isRequired,background:_propTypes.default.string,fontSize:_propTypes.default.number};var _default=FileIcon;exports.default=_default,FileIcon.__docgenInfo={description:"",methods:[],displayName:"FileIcon",props:{extension:{defaultValue:{value:"'js'",computed:!1},description:"",type:{name:"custom",raw:"_propTypes.default.string.isRequired"},required:!1},colorScheme:{defaultValue:{value:"_ColorScheme.default.lightBlue",computed:!0},description:"",type:{name:"custom",raw:"_propTypes.default.shape({\n  primary: _propTypes.default.string.isRequired,\n  secondary: _propTypes.default.string.isRequired\n}).isRequired"},required:!1},iconStyle:{defaultValue:{value:"_IconStyle.default.normal",computed:!0},description:"",type:{name:"custom",raw:"_propTypes.default.string.isRequired"},required:!1},size:{defaultValue:{value:"50",computed:!1},description:"",type:{name:"custom",raw:"_propTypes.default.number.isRequired"},required:!1},background:{defaultValue:{value:"'#fff'",computed:!1},description:"",type:{name:"custom",raw:"_propTypes.default.string"},required:!1},fontSize:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"custom",raw:"_propTypes.default.number"},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../react-fileicons/dist/components/FileIcon.js"]={name:"FileIcon",docgenInfo:FileIcon.__docgenInfo,path:"../react-fileicons/dist/components/FileIcon.js"})},"../react-fileicons/dist/components/FileIconBase.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _templateObject,_styledComponents=_interopRequireDefault(__webpack_require__("../react-fileicons/node_modules/styled-components/dist/styled-components.browser.esm.js")),_IconStyle=_interopRequireDefault(__webpack_require__("../react-fileicons/dist/helpers/IconStyle.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=_styledComponents.default.div(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n\tposition: relative;\n\tmargin: 5px auto;\n\twidth: ",";\n\theight: ",";\n\tborder-radius: ","px;\n\tborder: ",";\n\tbackground: ",";\n\tfont-size: ","px;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 500;\n\tcolor: ",";\n\n\t&:before {\n\t\tposition: absolute;\n\t\ttop: ",";\n\t\tright: ",";\n\t\tborder-width: ","px;\n\t\tborder-bottom-left-radius: ","px;\n\t\tborder-style: solid;\n\t\tborder-color: ",';\n\t\tcontent: "";\n\t}\n\n\t&:after {\n\t\tposition: absolute;\n\t\tbottom: ',"px;\n\t\tleft: ",'px;\n\t\tcontent: "','";\n\t}\n'])),(function(props){return props.iconStyle===_IconStyle.default.outline?"90%":"100%"}),(function(props){return props.iconStyle===_IconStyle.default.outline?"93%":"100%"}),(function(props){return props.size/100*12}),(function(props){return props.iconStyle===_IconStyle.default.outline?function(props){return props.size/100*5+"px solid "+props.colorScheme.primary}:"auto"}),(function(props){return props.iconStyle===_IconStyle.default.gradient?"linear-gradient(to bottom, ".concat(props.colorScheme.primary," 0%,\n\t\t\t\t\t").concat(props.colorScheme.secondary," 100%)"):props.iconStyle===_IconStyle.default.outline?"none":props.colorScheme.primary}),(function(props){return props.fontSize?props.fontSize/100*25:props.size/100*25}),(function(props){return props.iconStyle===_IconStyle.default.outline?props.colorScheme.primary:"#fff"}),(function(props){return props.iconStyle===_IconStyle.default.outline?props.size/100*-5+"px":"0px"}),(function(props){return props.iconStyle===_IconStyle.default.outline?props.size/100*-5+"px":"0px"}),(function(props){return props.size/100*20}),(function(props){return props.size/100*6}),(function(props){return props.iconStyle===_IconStyle.default.outline?props.background+" "+props.background+" "+props.colorScheme.primary+" "+props.colorScheme.secondary:props.background+" "+props.background+" rgba(255,255,255,.30) rgba(255,255,255,.30)"}),(function(props){return props.size/100*10}),(function(props){return props.size/100*10}),(function(props){return props.extension}));exports.default=_default},"../react-fileicons/dist/components/FileIconContainer.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _templateObject;__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("../react-fileicons/node_modules/styled-components/dist/styled-components.browser.esm.js")).default.div(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    width: ","px;\n    height: ","px;\n    display: block;\n"])),(function(props){return props.size}),(function(props){return 1.4*props.size}));exports.default=_default},"../react-fileicons/dist/helpers/ColorScheme.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default={red:{primary:"#D32F2F",secondary:"#C62828"},pink:{primary:"#D81B60",secondary:"#C2185B"},purple:{primary:"#8E24AA",secondary:"#7B1FA2"},deepPurple:{primary:"#5E35B1",secondary:"#512DA8"},indigo:{primary:"#3949AB",secondary:"#303F9F"},blue:{primary:"#1E88E5",secondary:"#1976D2"},lightBlue:{primary:"#039BE5",secondary:"#0288D1"},cyan:{primary:"#00ACC1",secondary:"#0097A7"},teal:{primary:"#00897B",secondary:"#00796B"},green:{primary:"#43A047",secondary:"#388E3C"},lightGreen:{primary:"#7CB342",secondary:"#689F38"},lime:{primary:"#C0CA33",secondary:"#AFB42B"},yellow:{primary:"#FDD835",secondary:"#FBC02D"},amber:{primary:"#FFB300",secondary:"#FFA000"},orange:{primary:"#FB8C00",secondary:"#F57C00"},deepOrange:{primary:"#F4511E",secondary:"#E64A19"},brown:{primary:"#6D4C41",secondary:"#5D4037"},grey:{primary:"#757575",secondary:"#616161"},blueGrey:{primary:"#546E7A",secondary:"#455A64"},black:{primary:"#546E7A",secondary:"#455A64"},white:{primary:"#546E7A",secondary:"#455A64"}};exports.default=_default},"../react-fileicons/dist/helpers/IconStyle.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default={normal:"normal",gradient:"gradient",outline:"outline"};exports.default=_default},"../react-fileicons/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"eL",{enumerable:!0,get:function get(){return _ColorScheme.default}}),Object.defineProperty(exports,"ze",{enumerable:!0,get:function get(){return _IconStyle.default}}),Object.defineProperty(exports,"ZP",{enumerable:!0,get:function get(){return _FileIcon.default}});var _ColorScheme=_interopRequireDefault(__webpack_require__("../react-fileicons/dist/helpers/ColorScheme.js")),_IconStyle=_interopRequireDefault(__webpack_require__("../react-fileicons/dist/helpers/IconStyle.js")),_FileIcon=_interopRequireDefault(__webpack_require__("../react-fileicons/dist/components/FileIcon.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./stories/FileIcon.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StoryFileIcon:()=>StoryFileIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,fileIcon:()=>fileIcon});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),react_fileicons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../react-fileicons/dist/index.js"),_excluded=["components"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var StoryFileIcon=function StoryFileIcon(args){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment,null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h1",null,"Welcome to storybook"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("code",null,"react-fileicons")," is a simple and intuitive react component for visualizing file icons."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"If the configuration options are not displayed, they can be displayed by pressing D."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("br",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(react_fileicons__WEBPACK_IMPORTED_MODULE_9__.ZP,_extends({},args,{mdxType:"FileIcon"})))},layoutProps={StoryFileIcon};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_8__.h_,{title:"react-fileicons/FileIcon",component:react_fileicons__WEBPACK_IMPORTED_MODULE_9__.ZP,argTypes:{extension:{name:"extension",description:"Extension",table:{type:{summary:"string",detail:"<string>{0,5}"}}},colorScheme:{name:"colorScheme",description:"Color scheme",options:react_fileicons__WEBPACK_IMPORTED_MODULE_9__.eL,control:{type:"select"},table:{type:{summary:"object",detail:'{ primary: "#039BE5", secondary: "#0288D1" } or ColorScheme.lightBlue'}}},iconStyle:{name:"iconStyle",description:"Icon style",options:react_fileicons__WEBPACK_IMPORTED_MODULE_9__.ze,control:{type:"radio"},table:{type:{summary:"string",detail:"[ normal | gradient | outline ] or IconStyle.normal"}}},size:{name:"size",description:"Size of the fileicon, autoscales font",control:{type:"number"},table:{type:{summary:"number",detail:"100"}}},background:{name:"background",description:"Background color behind the fileicon as hexcode",table:{type:{summary:"string",detail:"#ffffff"}}},fontSize:{name:"fontSize",description:"Size of the font, optional parameter",control:{type:"number"},table:{type:{summary:"number",detail:"0"}}}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_8__.Xz,{mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_8__.oG,{name:"FileIcon",args:{extension:"js",colorScheme:react_fileicons__WEBPACK_IMPORTED_MODULE_9__.eL.lightBlue,iconStyle:react_fileicons__WEBPACK_IMPORTED_MODULE_9__.ze.normal,size:80,background:"#fff",fontSize:0},parameters:{docs:{source:{code:'<FileIcon {\n    extension: "js",\n    colorScheme: ColorScheme.lightBlue,\n    iconStyle: IconStyle.normal,\n    size: 80,\n    background: "#fff",\n    fontSize: 0\n} />\n'}}},mdxType:"Story"},StoryFileIcon.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var fileIcon=StoryFileIcon.bind({});fileIcon.storyName="FileIcon",fileIcon.args={extension:"js",colorScheme:react_fileicons__WEBPACK_IMPORTED_MODULE_9__.eL.lightBlue,iconStyle:react_fileicons__WEBPACK_IMPORTED_MODULE_9__.ze.normal,size:80,background:"#fff",fontSize:0},fileIcon.parameters=Object.assign({storySource:{source:"args => <>\n\t\t<h1>Welcome to storybook</h1>\n\t\t<p><code>react-fileicons</code> is a simple and intuitive react component for visualizing file icons.</p>\n\t\t<p>If the configuration options are not displayed, they can be displayed by pressing D.</p>\n\t\t<br />\n\t\t<FileIcon {...args} />\n\t</>"}},{docs:{source:{code:'<FileIcon {\n    extension: "js",\n    colorScheme: ColorScheme.lightBlue,\n    iconStyle: IconStyle.normal,\n    size: 80,\n    background: "#fff",\n    fontSize: 0\n} />\n'}}});var componentMeta={title:"react-fileicons/FileIcon",component:react_fileicons__WEBPACK_IMPORTED_MODULE_9__.ZP,argTypes:{extension:{name:"extension",description:"Extension",table:{type:{summary:"string",detail:"<string>{0,5}"}}},colorScheme:{name:"colorScheme",description:"Color scheme",options:react_fileicons__WEBPACK_IMPORTED_MODULE_9__.eL,control:{type:"select"},table:{type:{summary:"object",detail:'{ primary: "#039BE5", secondary: "#0288D1" } or ColorScheme.lightBlue'}}},iconStyle:{name:"iconStyle",description:"Icon style",options:react_fileicons__WEBPACK_IMPORTED_MODULE_9__.ze,control:{type:"radio"},table:{type:{summary:"string",detail:"[ normal | gradient | outline ] or IconStyle.normal"}}},size:{name:"size",description:"Size of the fileicon, autoscales font",control:{type:"number"},table:{type:{summary:"number",detail:"100"}}},background:{name:"background",description:"Background color behind the fileicon as hexcode",table:{type:{summary:"string",detail:"#ffffff"}}},fontSize:{name:"fontSize",description:"Size of the font, optional parameter",control:{type:"number"},table:{type:{summary:"number",detail:"0"}}}},includeStories:["fileIcon"]},mdxStoryNameToKey={FileIcon:"fileIcon"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(MDXContent,null))}});const __WEBPACK_DEFAULT_EXPORT__=componentMeta;var __namedExportsOrder=["StoryFileIcon","fileIcon"]},"./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackEmptyContext},"./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./FileIcon.stories.mdx":"./stories/FileIcon.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[127],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);