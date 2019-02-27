var pageComponent=webpackJsonppageComponent([44],{202:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),a=o(s),u=r(1),p=o(u);r(4),r(5),r(3),r(7),r(2),r(8),r(6),r(9),r(10),r(11),r(12),r(13),r(14);var c=r(203),d=o(c),m=function(e){function t(){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(a.default);p.default.register(m,d.default),t.default=m},203:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.exlNO=void 0;var s,a=r(0),u=o(a),p=r(1),c=o(p);goog.loadModule(function(e){function t(e,t,o){var s=function(){l("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),n("div"),l("p"),l("img",null,null,"srcset","../../../images/Alert@2x.jpg 2x","src","../../../images/Alert.jpg","alt","info alert colors"),n("img"),n("p"),l("h3",null,null,"id","usage"),i("Usage"),n("h3"),l("ul"),l("li"),i("Four different colors are available to define alert status."),n("li"),l("li"),i("The status icon and the keyword that defines the message type for the alert must be semi-bold."),n("li"),l("li"),i("Alerts can have multiple text lines."),n("li"),l("li"),i("Alerts can contain links. These links are defined in primary color."),n("li"),l("li"),i("Toast and stripe alerts can be temporary. The delay times for these temporary alerts to disappear are shown below:"),l("ul"),l("li"),i("10 sec if there are actions associated."),n("li"),l("li"),i("5 sec if there are no actions associated."),n("li"),l("li"),i("In both cases, the time freezes on hover to allow the user more time to interact with the alert message. On mouse out, the countdown continues."),n("li"),n("ul"),n("li"),n("ul"),l("h3",null,null,"id","types"),i("Types"),n("h3"),l("p"),l("img",null,null,"srcset","../../../images/AlertColors@2x.jpg 2x","src","../../../images/AlertColors.jpg","alt","alert colors to define each type as the table below describes"),n("img"),n("p"),l("table"),l("thead"),l("tr"),l("th"),i("Type"),n("th"),l("th"),i("Usage"),n("th"),n("tr"),n("thead"),l("tbody"),l("tr"),l("td"),i("Error"),n("td"),l("td"),i("The error alert is Red. It indicates that something went wrong after performing an action. (E.g.: The form couldn’t be saved because some data was missing)"),n("td"),n("tr"),l("tr"),l("td"),i("Success"),n("td"),l("td"),i("The success alert is Green. It appears when the action is successful. (E.g.: The user was created successfully)."),n("td"),n("tr"),l("tr"),l("td"),i("Warning"),n("td"),l("td"),i("The warning alert is Yellow. It lets users know that the action was completed, but there are some issues with it. (E.g. The item was created but with some issues)."),n("td"),n("tr"),l("tr"),l("td"),i("Information"),n("td"),l("td"),i("The information alert is Blue. It provides relevant information while a user carries out a task."),n("td"),n("tr"),n("tbody"),n("table"),l("p"),i("See the "),l("a",null,null,"href","../designPrinciples/colors.html"),i("colors page"),n("a"),i(" to learn more about color definitions."),n("p"),l("h3",null,null,"id","attributes"),i("Attributes"),n("h3"),l("p"),l("img",null,null,"srcset","../../../images/AlertParts@2x.jpg 2x","src","../../../images/AlertParts.jpg","alt","info alert colors with numbers specifying each of its attributes"),n("img"),n("p"),l("p"),i("An alert has 4 different attributes:"),n("p"),l("ol"),l("li"),i("The status icon"),n("li"),l("li"),i("The type text"),n("li"),l("li"),i("The description text"),n("li"),l("li"),i("The close button. This may not appear, depending on the alert's use."),n("li"),n("ol"),l("p"),i("The image below shows the metrics for an alert's design:"),n("p"),l("p"),l("img",null,null,"srcset","../../../images/AlertMetrics@2x.jpg 2x","src","../../../images/AlertMetrics.jpg","alt","info alert colors with metrics stated to understand how it is built"),n("img"),n("p"),l("h3",null,null,"id","variations"),i("Variations"),n("h3"),l("h4"),i("Toast"),n("h4"),l("p"),l("img",null,null,"srcset","../../../images/AlertToast@2x.jpg 2x","src","../../../images/AlertToast.jpg","alt","four different toast alert colors"),n("img"),n("p"),l("p"),i("This type of alert must appear at the bottom left side of the screen. There must be a 24px separation from the left and from the bottom. If the alert is temporary, it will disappear in 10 seconds."),n("p"),l("p"),i("An example is shown below:"),n("p"),l("p"),l("img",null,null,"srcset","../../../images/AlertToastExample@2x.jpg 2x","src","../../../images/AlertToastExample.jpg","alt","toast alert example. Placed to the top right in the screen and below the header"),n("img"),n("p"),l("h4"),i("Embedded"),n("h4"),l("p"),i("Embedded alerts are meant for use in forms. Usually you will only need to use the information one. Its width depends on the width of the container it is placed in, always respecting the container margins to the content. The close action is not required for embedded alerts."),n("p"),l("p"),l("img",null,null,"srcset","../../../images/AlertEmbedded@2x.jpg 2x","src","../../../images/AlertEmbedded.jpg","alt","four different embedded alert colors"),n("img"),n("p"),l("p"),i("An example is shown below:"),n("p"),l("p"),l("img",null,null,"srcset","../../../images/AlertEmbeddedExample@2x.jpg 2x","src","../../../images/AlertEmbeddedExample.jpg","alt","embedded alert example. Placed inside a form."),n("img"),n("p"),l("input",null,null,"type","hidden","value",e.page.title),n("input"),l("input",null,null,"type","hidden","value",e.site.title),n("input")};a(r.$$assignDefaults({content:s},e),null,o)}goog.module("exlNO.incrementaldom");var r=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),l=o.elementOpen,n=o.elementClose,i=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),a=(o.attr,c.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="exlNO.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var d=function(e){function t(){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);c.default.register(d,s),t.exlNO=d,t.templates=s,t.default=s}},[202]);