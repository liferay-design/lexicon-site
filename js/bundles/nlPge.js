var pageComponent=webpackJsonppageComponent([44],{202:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=o(i),u=r(1),p=o(u);r(4),r(5),r(3),r(7),r(2),r(8),r(6),r(9),r(10),r(11),r(12),r(13),r(14);var c=r(203),d=o(c),g=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(a.default);p.default.register(g,d.default),t.default=g},203:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.nlPge=void 0;var i,a=r(0),u=o(a),p=r(1),c=o(p);goog.loadModule(function(e){function t(e,t,o){var i=function(){n("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&l(t),s("div"),n("p"),n("img",null,null,"srcset","../../../images/Alert@2x.jpg 2x","src","../../../images/Alert.jpg","alt","info alert colors"),s("img"),s("p"),n("h3",null,null,"id","usage"),l("Usage"),s("h3"),n("ul"),n("li"),l("Four different colors are available to define alert status."),s("li"),n("li"),l("The status icon and the keyword that defines the message type for the alert must be semi-bold."),s("li"),n("li"),l("Alerts can have multiple text lines."),s("li"),n("li"),l("Alerts can contain links. These links are defined in primary color."),s("li"),n("li"),l("Toast and stripe alerts can be temporary. The delay times for these temporary alerts to disappear are shown below:"),n("ul"),n("li"),l("10 sec if there are actions associated."),s("li"),n("li"),l("5 sec if there are no actions associated."),s("li"),n("li"),l("In both cases, the time freezes on hover to allow the user more time to interact with the alert message. On mouse out, the countdown continues."),s("li"),s("ul"),s("li"),s("ul"),n("h3",null,null,"id","types"),l("Types"),s("h3"),n("p"),n("img",null,null,"srcset","../../../images/AlertColors@2x.jpg 2x","src","../../../images/AlertColors.jpg","alt","alert colors to define each type as the table below describes"),s("img"),s("p"),n("table"),n("thead"),n("tr"),n("th"),l("Type"),s("th"),n("th"),l("Usage"),s("th"),s("tr"),s("thead"),n("tbody"),n("tr"),n("td"),l("Error"),s("td"),n("td"),l("The error alert is Red. It indicates that something went wrong after performing an action. (E.g.: The form couldn’t be saved because some data was missing)"),s("td"),s("tr"),n("tr"),n("td"),l("Success"),s("td"),n("td"),l("The success alert is Green. It appears when the action is successful. (E.g.: The user was created successfully)."),s("td"),s("tr"),n("tr"),n("td"),l("Warning"),s("td"),n("td"),l("The warning alert is Yellow. It lets users know that the action was completed, but there are some issues with it. (E.g. The item was created but with some issues)."),s("td"),s("tr"),n("tr"),n("td"),l("Information"),s("td"),n("td"),l("The information alert is Blue. It provides relevant information while a user carries out a task."),s("td"),s("tr"),s("tbody"),s("table"),n("p"),l("See the "),n("a",null,null,"href","../designPrinciples/colors.html"),l("colors page"),s("a"),l(" to learn more about color definitions."),s("p"),n("h3",null,null,"id","attributes"),l("Attributes"),s("h3"),n("p"),n("img",null,null,"srcset","../../../images/AlertParts@2x.jpg 2x","src","../../../images/AlertParts.jpg","alt","info alert colors with numbers specifying each of its attributes"),s("img"),s("p"),n("p"),l("An alert has 4 different attributes:"),s("p"),n("ol"),n("li"),l("The status icon"),s("li"),n("li"),l("The type text"),s("li"),n("li"),l("The description text"),s("li"),n("li"),l("The close button. This may not appear, depending on the alert's use."),s("li"),s("ol"),n("p"),l("The image below shows the metrics for an alert's design:"),s("p"),n("p"),n("img",null,null,"srcset","../../../images/AlertMetrics@2x.jpg 2x","src","../../../images/AlertMetrics.jpg","alt","info alert colors with metrics stated to understand how it is built"),s("img"),s("p"),n("h3",null,null,"id","variations"),l("Variations"),s("h3"),n("h4"),l("Toast"),s("h4"),n("p"),n("img",null,null,"srcset","../../../images/AlertToast@2x.jpg 2x","src","../../../images/AlertToast.jpg","alt","four different toast alert colors"),s("img"),s("p"),n("p"),l("This type of alert must appear at the bottom left side of the screen. There must be a 24px separation from the left and from the bottom. If the alert is temporary, it will disappear in 10 seconds."),s("p"),n("p"),l("An example is shown below:"),s("p"),n("p"),n("img",null,null,"srcset","../../../images/AlertToastExample@2x.jpg 2x","src","../../../images/AlertToastExample.jpg","alt","toast alert example. Placed to the top right in the screen and below the header"),s("img"),s("p"),n("p"),l("Toasts can have actions associated. Actions are always represented by buttons while navigation is represented by links:"),s("p"),n("p"),n("img",null,null,"srcset","../../../images/AlertToastWithButton@2x.jpg 2x","src","../../../images/AlertToastWithButton.jpg","alt","toast alert examples for each type with a button"),s("img"),s("p"),n("h4"),l("Embedded"),s("h4"),n("p"),l("Embedded alerts are meant for use in forms. Usually you will only need to use the information one. Its width depends on the width of the container it is placed in, always respecting the container margins to the content. The close action is not required for embedded alerts."),s("p"),n("p"),n("img",null,null,"srcset","../../../images/AlertEmbedded@2x.jpg 2x","src","../../../images/AlertEmbedded.jpg","alt","four different embedded alert colors"),s("img"),s("p"),n("p"),l("An example is shown below:"),s("p"),n("p"),n("img",null,null,"srcset","../../../images/AlertEmbeddedExample@2x.jpg 2x","src","../../../images/AlertEmbeddedExample.jpg","alt","embedded alert example. Placed inside a form."),s("img"),s("p"),n("input",null,null,"type","hidden","value",e.page.title),s("input"),n("input",null,null,"type","hidden","value",e.site.title),s("input")};a(r.$$assignDefaults({content:i},e),null,o)}goog.module("nlPge.incrementaldom");var r=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),n=o.elementOpen,s=o.elementClose,l=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),a=(o.attr,c.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="nlPge.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var d=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(u.default);c.default.register(d,i),t.nlPge=d,t.templates=i,t.default=i}},[202]);