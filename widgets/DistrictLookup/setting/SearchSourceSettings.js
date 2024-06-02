// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DistrictLookup/setting/SearchSourceSettings.html":'\x3cdiv\x3e\r\n  \x3c!--Search source setting hint text --\x3e\r\n  \x3cdiv class\x3d"esriCTHint" style\x3d"width: 99%"\x3e\r\n    ${nls.searchSourceSetting.searchSourceSettingTitleHintText}\r\n  \x3c/div\x3e\r\n  \x3c!--Add Search Source Label and click--\x3e\r\n  \x3cdiv class\x3d"esriCTDropdownButton" role\x3d"button"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cspan\x3e ${nls.searchSourceSetting.addSearchSourceLabel}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cul class\x3d"esriCTDropdownMenu" role\x3d"menu" data-dojo-attach-point\x3d"menuItemClickNode"\x3e\r\n      \x3cli class\x3d"esriCTDropdownItem" type\x3d"query"\x3e${nls.searchSourceSetting.featureLayerLabel}\x3c/li\x3e\r\n      \x3cli class\x3d"esriCTDropdownItem" type\x3d"locator"\x3e${nls.searchSourceSetting.geocoderLabel}\x3c/li\x3e\r\n    \x3c/ul\x3e\r\n  \x3c/div\x3e\r\n \x3c!--Add Search Source Label and click--\x3e\r\n  \x3cdiv class\x3d"esriCTSources" data-dojo-attach-point\x3d"searchSources"\x3e\r\n    \x3cdiv class\x3d"esriCTSourceList jimu-float-leading"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"sourceList" style\x3d"100%"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTSourceSetting jimu-float-trailing" data-dojo-attach-point\x3d"sourceSettingNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n     \x3c!--General setting: Label--\x3e\r\n    \x3cdiv class\x3d"esriCTlabel esriCTGeneralSettingLabelStyle"\x3e\r\n      ${nls.searchSourceSetting.generalSettingLabel}\r\n    \x3c/div\x3e\r\n    \x3c!--General setting: All Place Holder Label--\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTlabel esriCTLabelContainer" title\x3d"${nls.searchSourceSetting.allPlaceholderLabel}"\x3e\r\n        ${nls.searchSourceSetting.allPlaceholderLabel}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTLayerField" style\x3d"width: 72%;"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"allPlaceholder" style\x3d"width: 100%;" data-dojo-type\x3d"dijit/form/TextBox" trim\x3d"true"\x3e\r\n        \x3c/div\x3e\r\n         \x3c!--General setting: All Place Holder Hint--\x3e\r\n        \x3cdiv class\x3d"esriCTHint"\x3e\r\n          ${nls.searchSourceSetting.allPlaceholderHintText}\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n     \x3c!--General setting: Checkbox--\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabelFont " data-dojo-attach-point\x3d"showInfoWindowOnSelectNode"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./SearchSourceSettings.html dojo/_base/html jimu/dijit/SimpleTable ./QuerySourceSetting ./LocatorSourceSetting jimu/LayerInfos/LayerInfos ../searchSourceUtils jimu/utils dojo/when esri/lang dojo/_base/lang dojo/_base/array dojo/query dojo/on dojo/dom-class jimu/dijit/CheckBox dojo/domReady!".split(" "),function(t,u,v,w,x,n,y,p,q,z,h,l,A,B,e,r,m,f,k,C){return t([u,v,w],{baseClass:"jimu-widget-districtlookup-search-source-settings",
templateString:x,startup:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this.own(f(this.menuItemClickNode,"click",e.hitch(this,this._onMenuItemClick)));this._createSourceListTable();this.showInfoWindowOnSelect=new C({checked:!1,label:this.nls.searchSourceSetting.generalSettingCheckboxLabel},this.showInfoWindowOnSelectNode);this.config&&this.config.sources||(this.config.sources=[]);this.shelter.show();z.getInstance(this.map,this.map.itemInfo).then(e.hitch(this,
function(a){this.layerInfosObj=a;h.setMap(this.map);h.setLayerInfosObj(this.layerInfosObj);h.setAppConfig(this.appConfig);A(h.getConfigInfo(this.config)).then(e.hitch(this,this._loadConfig))}))},_loadConfig:function(a){this.domNode&&(this.setConfig(a),this.shelter.hide())},setConfig:function(a){this.config=a;a=a.sources;this.allPlaceholder.set("value",l.stripHTML(this.config.allPlaceholder));this.showInfoWindowOnSelect.setValue(B.isDefined(this.config.showInfoWindowOnSelect)?!!this.config.showInfoWindowOnSelect:
!0);r.forEach(a,e.hitch(this,function(c,b){var d=this.sourceList.addRow({name:c.name||""});d&&d.success?(this._setRelatedConfig(d.tr,c),0===b&&setTimeout(e.hitch(this,function(){this.sourceList.selectRow(d.tr)}),100)):console.error("add row failed ",d)}))},getConfig:function(){if(this._currentSourceSetting)if(this._currentSourceSetting.isValidConfig())this._closeSourceSetting();else return null;var a={allPlaceholder:l.stripHTML(this.allPlaceholder.get("value")),showInfoWindowOnSelect:this.showInfoWindowOnSelect.checked},
c=this.sourceList.getRows(),b=[];r.forEach(c,e.hitch(this,function(d){var g=this._getRelatedConfig(d);delete g._definition;this._removeRelatedConfig(d);b.push(g)}));a.sources=b;return a},destroy:function(){h.setMap(null);h.setLayerInfosObj(null);h.setAppConfig(null);this.inherited(arguments)},_onAllPlaceholderBlur:function(){this.allPlaceholder.set("value",l.stripHTML(this.allPlaceholder.get("value")))},_createSourceListTable:function(){this.sourceList=new y({autoHeight:!1,selectable:!0,fields:[{name:"name",
title:this.nls.searchSourceSetting.nameTitle,width:"auto",type:"text",editable:!1},{name:"actions",title:"",width:"70px",type:"actions",actions:["up","down","delete"]}]},this.sourceList);n.setStyle(this.sourceList.domNode,"height","100%");this.sourceList.startup();this.own(f(this.sourceList,"row-select",e.hitch(this,this._onSourceItemSelected)));this.own(f(this.sourceList,"row-delete",e.hitch(this,this._onSourceItemRemoved)))},_onSourceItemRemoved:function(a){this._currentSourceSetting&&this._currentSourceSetting.getRelatedTr()===
a&&(this._currentSourceSetting.destroy(),this._currentSourceSetting=null)},_onSourceItemSelected:function(a){var c=this._getRelatedConfig(a),b=this._currentSourceSetting&&this._currentSourceSetting.tr;c&&a!==b&&(this._currentSourceSetting&&!this._currentSourceSetting.isValidConfig()?(this._currentSourceSetting.showValidationTip(),this.sourceList.selectRow(b)):(k.remove(this.searchSources,"esriCTSourcesExtraHeight"),"query"===c.type?this._createNewQuerySourceSettingFromSourceList(c,c._definition||
{},a):"locator"===c.type&&this._createNewLocatorSourceSettingFromSourceList(c,c._definition||{},a)))},_setRelatedConfig:function(a,c){m(a).data("config",e.clone(c))},_getRelatedConfig:function(a){return m(a).data("config")[0]},_removeRelatedConfig:function(a){return m(a).removeData("config")},_onMenuItemClick:function(a){a=a&&a.target&&n.getAttr(a.target,"type");this._currentSourceSetting&&!this._currentSourceSetting.isValidConfig()?this.emit("invalid-source-setting"):(k.remove(this.searchSources,
"esriCTSourcesExtraHeight"),"locator"===a?this._addNewLocator():"query"===a&&this._addNewQuerySource())},_addNewLocator:function(){this._createNewLocatorSourceSettingFromMenuItem({},{})},_addNewQuerySource:function(){this._createNewQuerySourceSettingFromMenuItem({},{})},_createNewLocatorSourceSettingFromMenuItem:function(a,c){var b=new q({nls:this.nls.searchSourceSetting,map:this.map});b.setDefinition(c);b.setConfig({url:a.url||"",name:a.name||"",singleLineFieldName:a.singleLineFieldName||"",placeholder:a.placeholder||
"",countryCode:a.countryCode||"",zoomScale:a.zoomScale||5E4,maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,searchInCurrentMapExtent:!!a.searchInCurrentMapExtent,type:"locator"});b._openLocatorChooser();b.own(f(b,"select-locator-url-ok",e.hitch(this,function(d){(d=this.sourceList.addRow({name:d.name||"New Geocoder"},this.sourceList.getRows().length))&&d.success&&(this._currentSourceSetting&&this._closeSourceSetting(),b.setRelatedTr(d.tr),b.placeAt(this.sourceSettingNode),this.sourceList.selectRow(d.tr),
this._currentSourceSetting=b)})));b.own(f(b,"reselect-locator-url-ok",e.hitch(this,function(d){var g=this._currentSourceSetting.getRelatedTr();this.sourceList.editRow(g,{name:d.name})})));b.own(f(b,"select-locator-url-cancel",e.hitch(this,function(){this._currentSourceSetting!==b&&(b.destroy(),b=null)})))},_createNewLocatorSourceSettingFromSourceList:function(a,c,b){this._currentSourceSetting&&this._closeSourceSetting();this._currentSourceSetting=new q({nls:this.nls.searchSourceSetting,map:this.map});
this._currentSourceSetting.own(f(this._currentSourceSetting,"enable-local-search",e.hitch(this,function(){k.add(this.searchSources,"esriCTSourcesExtraHeight")})));this._currentSourceSetting.own(f(this._currentSourceSetting,"disable-local-search",e.hitch(this,function(){k.remove(this.searchSources,"esriCTSourcesExtraHeight")})));this._currentSourceSetting.setDefinition(c);this._currentSourceSetting.setConfig({url:a.url||"",name:a.name||"",singleLineFieldName:a.singleLineFieldName||"",placeholder:a.placeholder||
"",countryCode:a.countryCode||"",zoomScale:a.zoomScale||5E4,maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,searchInCurrentMapExtent:!!a.searchInCurrentMapExtent,enableLocalSearch:!!a.enableLocalSearch,localSearchMinScale:a.localSearchMinScale,localSearchDistance:a.localSearchDistance,type:"locator"});this._currentSourceSetting.setRelatedTr(b);this._currentSourceSetting.placeAt(this.sourceSettingNode);this._currentSourceSetting.own(f(this._currentSourceSetting,"reselect-locator-url-ok",
e.hitch(this,function(d){var g=this._currentSourceSetting.getRelatedTr();this.sourceList.editRow(g,{name:d.name})})))},_closeSourceSetting:function(){var a=this._currentSourceSetting.getRelatedTr(),c=this._currentSourceSetting.getConfig();c._definition=this._currentSourceSetting.getDefinition();this._setRelatedConfig(a,c);this.sourceList.editRow(a,{name:c.name});this._currentSourceSetting.destroy()},_createNewQuerySourceSettingFromMenuItem:function(a,c){var b=new p({nls:this.nls.searchSourceSetting,
map:this.map,appConfig:this.appConfig});b.setDefinition(c);b.setConfig({url:a.url,name:a.name||"",layerId:a.layerId,placeholder:a.placeholder||"",searchFields:a.searchFields||[],displayField:a.displayField||c.displayField||"",exactMatch:!!a.exactMatch,zoomScale:a.zoomScale||5E4,maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,searchInCurrentMapExtent:!!a.searchInCurrentMapExtent,type:"query"});b._openQuerySourceChooser();b.own(f(b,"select-query-source-ok",e.hitch(this,function(d){(d=
this.sourceList.addRow({name:d.name},0))&&d.success&&(this._currentSourceSetting&&this._closeSourceSetting(),b.setRelatedTr(d.tr),b.placeAt(this.sourceSettingNode),this.sourceList.selectRow(d.tr),this._currentSourceSetting=b)})));b.own(f(b,"reselect-query-source-ok",e.hitch(this,function(d){var g=this._currentSourceSetting.getRelatedTr();this.sourceList.editRow(g,{name:d.name})})));b.own(f(b,"select-query-source-cancel",e.hitch(this,function(){this._currentSourceSetting!==b&&(b.destroy(),b=null)})))},
_createNewQuerySourceSettingFromSourceList:function(a,c,b){this._currentSourceSetting&&this._closeSourceSetting();this._currentSourceSetting=new p({nls:this.nls.searchSourceSetting,map:this.map,appConfig:this.appConfig});this._currentSourceSetting.placeAt(this.sourceSettingNode);this._currentSourceSetting.setDefinition(c);this._currentSourceSetting.setConfig({url:a.url,name:a.name||"",layerId:a.layerId,placeholder:a.placeholder||"",searchFields:a.searchFields||[],displayField:a.displayField||c.displayField||
"",exactMatch:!!a.exactMatch,zoomScale:a.zoomScale||5E4,maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,searchInCurrentMapExtent:!!a.searchInCurrentMapExtent,type:"query"});this._currentSourceSetting.setRelatedTr(b);this._currentSourceSetting.own(f(this._currentSourceSetting,"reselect-query-source",e.hitch(this,function(d){var g=this._currentSourceSetting.getRelatedTr();this.sourceList.editRow(g,{name:d.name})})))}})});