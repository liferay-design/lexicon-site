var pageComponent=webpackJsonppageComponent([18],{172:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=o(r),u=n(1),c=o(u);n(2),n(3),n(4),n(5),n(6),n(7),n(8);var p=n(173),f=o(p),g=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);c.default.register(g,f.default),t.default=g},173:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.GZKbX=void 0;var r,s=n(0),u=o(s),c=n(1),p=o(c);goog.loadModule(function(e){function t(e,t,o){var r=function(){i("h3",null,null,"id","description"),s("Description"),l("h3"),i("p");var t=e.page.description;"function"==typeof t?t():null!=t&&s(t),l("p"),i("h3",null,null,"id","usage"),s("Usage"),l("h3"),i("p"),s("Icons can be used only when the metaphor is direct and clear. In case there is not a good icon to represent the concept you want to transmit, it will probably better to use words. Icons must be reserved to broad accepted visual ideas."),l("p"),i("h3",null,null,"id","size-usage-for-designers"),s("Size usage for designers"),l("h3"),i("table"),i("thead"),i("tr"),i("th"),s("Size"),l("th"),i("th"),s("Usage"),l("th"),l("tr"),l("thead"),i("tbody"),i("tr"),i("td"),i("img",null,null,"srcset","../../../images/Icon12@2x.png 2x","src","../../../images/Icon12.png","alt","Icon 12px box 16px"),l("img"),l("td"),i("td"),s("16px box with icons of 12px"),l("td"),l("tr"),i("tr"),i("td"),i("img",null,null,"srcset","../../../images/Icon16@2x.png 2x","src","../../../images/Icon16.png","alt","Icon 16px box 16px"),l("img"),l("td"),i("td"),s("16px box with icons of 16px"),l("td"),l("tr"),i("tr"),i("td"),i("img",null,null,"srcset","../../../images/Icon20@2x.png 2x","src","../../../images/Icon20.png","alt","Icon 24px box 32px"),l("img"),l("td"),i("td"),s("32px box with icons of 20px"),l("td"),l("tr"),l("tbody"),l("table"),i("h3",null,null,"id","size-usage-for-developers"),s("Size usage for developers"),l("h3"),i("ul"),i("li"),s("Icons in lexicon have no size."),l("li"),i("li"),s("The size of the icon is established by its container."),l("li"),i("li"),s("By default it would be 16px."),l("li"),i("li"),s("All the icons available to use are in the Lexicon Icon Library. Don't use icons from outside this library. Switch icon libraries completely in case Lexicon icons set is not enough for you."),l("li"),l("ul"),i("h3",null,null,"id","liferay-icon-library"),s("Liferay icon library"),l("h3"),i("p"),s("Liferay has its own icon library created for the purposes of the projects that use Lexicon."),l("p"),i("ul",null,null,"class","lexicon-icon-list list-unstyled");for(var n=e.page.icons,o=n.length,r=0;r<o;r++){var u=n[r];i("li"),i("svg",null,null,"class","lexicon-icon lexicon-icon-"+u),a("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#"+u),l("svg"),i("span");var c=u;"function"==typeof c?c():null!=c&&s(c),l("span"),l("li")}l("ul"),i("p"),s("Please, read this "),i("a",null,null,"href","https://gist.github.com/natecavanaugh/b9546c4215e5d5ef88a1b9d6ae2041a3#lexicon-icon-design-guidelines"),s("guide"),l("a"),s(" on how to create icons for Lexicon."),l("p"),i("h4"),s("Language flags"),l("h4"),i("p"),s("People tend to have pretty strong opinions on whether flags should be used as a visual cue for indicating a language, mainly because in many parts of the world, the flag may have cultural and geographic meanings that we might not be aware of, or the flag itself isn't fully accurate to the dialects spoken in that region."),l("p"),i("p"),s("While we understand that reasoning, we've found that the times they are actually needed (when a user is not familiar with the currently displayed language) somewhat eliminates using other mechanisms, such as the name of the language (since the current language could be in an entirely different character set). Given this, there is often at least some familiarity with the identity of a country that speaks a shared language."),l("p"),i("ul",null,null,"class","lexicon-icon-list list-unstyled");for(var p=e.page.flags,f=p.length,g=0;g<f;g++){var h=p[g];i("li"),i("svg",null,null,"class","lexicon-icon lexicon-icon-"+h),a("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#"+h),l("svg"),i("span");var d=e.page.flagData[h];"function"==typeof d?d():null!=d&&s(d),s(" (");var y=h;"function"==typeof y?y():null!=y&&s(y),s(")"),l("span"),l("li")}l("ul"),i("h4"),s("Other icon libraries"),l("h4"),i("p"),i("a",null,null,"href","http://fontawesome.io/"),s("Font Awesome"),l("a"),s(" and "),i("a",null,null,"href","http://glyphicons.com/"),s("Glyphicons"),l("a"),s(" are good alternatives in case you don't want to use Lexicon icon library."),l("p"),i("input",null,null,"type","hidden","value",e.page.title),l("input"),i("input",null,null,"type","hidden","value",e.site.title),l("input")};u(n.$$assignDefaults({content:r},e),null,o)}goog.module("GZKbX.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),i=o.elementOpen,l=o.elementClose,a=o.elementVoid,s=(o.elementOpenStart,o.elementOpenEnd,o.text),u=(o.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="GZKbX.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=r=e,e});var f=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);p.default.register(f,r),t.GZKbX=f,t.templates=r,t.default=r}},[172]);