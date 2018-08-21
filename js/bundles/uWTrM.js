var pageComponent=webpackJsonppageComponent([76],{302:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=o(0),s=n(l),p=o(1),u=n(p);o(4),o(5),o(3),o(7),o(2),o(8),o(6),o(9),o(10),o(11),o(12),o(13),o(14);var h=o(303),c=n(h),f=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);u.default.register(f,c.default),t.default=f},303:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.uWTrM=void 0;var l,s=o(0),p=n(s),u=o(1),h=n(u);goog.loadModule(function(e){function t(e,t,n){var l=function(){i("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&a(t),r("div"),i("h3",null,null,"id","interaction-events"),a("Interaction events"),r("h3"),i("p"),a("In case you need to create your own chart, it is really valuable to know how our events are defined. Use the same rules to be consistent with the rest of charts."),r("p"),i("h4"),a("Mouse events"),r("h4"),i("p"),i("strong"),a("Mouse hover"),r("strong"),r("p"),i("ul"),i("li"),a("Show popover"),r("li"),r("ul"),i("p"),i("strong"),a("Mouse out"),r("strong"),r("p"),i("ul"),i("li"),a("Dismiss popover"),r("li"),r("ul"),i("p"),i("strong"),a("Mouse click"),r("strong"),r("p"),i("ul"),i("li"),a("If element is not selected"),i("ul"),i("li"),a("Selects the element. This is a gray-out, 40% opacity, of the rest."),r("li"),i("li"),a("Show popover"),r("li"),r("ul"),r("li"),i("li"),a("If element is selected (the click can be in the element itself or any other part of the chart, except the popover)"),i("ul"),i("li"),a("Unselects the element"),r("li"),i("li"),a("Dismiss popover"),r("li"),i("li"),a("Chart to default state"),r("li"),r("ul"),r("li"),r("ul"),i("h4"),a("Touch events"),r("h4"),i("p"),a("Same as mouse click events."),r("p"),i("h3",null,null,"id","interaction-items"),a("Interaction items"),r("h3"),i("h4"),a("Chart item"),r("h4"),i("p"),a("This can be a bar inside a bar chart, a pie-piece in a pie chart, etc. The popover must show information related to this specific item. The popover must be shown on top of the chart item. Highlight legend item (font weight to semibold). This creates a better relation between element in chart a legend value."),r("p"),i("h4"),a("Chart item inside a group"),r("h4"),i("p"),a("We are not going to make a difference between grouped items and stand alone items. Whenever there is an interaction inside a set of items we will do individual interactions per item as in Chart Item."),r("p"),i("h4"),a("Axis item"),r("h4"),i("p"),a("The popover must show information related to all the elements in that axis row or column. This information can be either a global information, like a number, or an information breakdown. The popover must be shown next to the axis item not hovering the chart."),r("p"),i("p"),a("Sometimes there will be only one axis. Sometimes the chart will not provide interaction in both axis. This is perfectly normal."),r("p"),i("p"),i("em"),a("Example: Vertical stacked bar"),r("em"),r("p"),i("ul"),i("li"),a("An interaction in the x-axis item will show a popover with information for each of the items."),r("li"),i("li"),a("An interaction in the y-axis item will show nothing."),r("li"),r("ul"),i("h4"),a("Legend item"),r("h4"),i("p"),a("Highlight all items of this legend type in the chart. The popover must show information related to this specific item summary information for that legend type. The popover must be shown on top of the legend item."),r("p"),i("h3",null,null,"id","chart-popover"),a("Chart popover"),r("h3"),i("p"),a("Chart popover allow you to display specific data for a exact point or exact area that is interactive. This is just a different usage of the popover pattern."),r("p"),i("p"),i("img",null,null,"srcset","../../../images/ChartBubble@2x.png 2x","src","../../../images/ChartBubble.png","alt","Tooltip or popover"),r("img"),r("p"),i("p"),a("The following half donut chart shows a chart tooltip in action."),r("p"),i("p"),i("img",null,null,"srcset","../../../images/ChartBubbleExample@2x.png 2x","src","../../../images/ChartBubbleExample.png","alt","tooltip usage in a half donut chart"),r("img"),r("p"),i("input",null,null,"type","hidden","value",e.page.title),r("input"),i("input",null,null,"type","hidden","value",e.site.title),r("input")};s(o.$$assignDefaults({content:l},e),null,n)}goog.module("uWTrM.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),i=n.elementOpen,r=n.elementClose,a=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),s=(n.attr,h.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="uWTrM.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var c=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(p.default);h.default.register(c,l),t.uWTrM=c,t.templates=l,t.default=l}},[302]);