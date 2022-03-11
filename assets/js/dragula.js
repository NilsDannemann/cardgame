!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).dragula=e()}(function(){return function o(r,i,u){function c(t,e){if(!i[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(a)return a(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},r[t][0].call(n.exports,function(e){return c(r[t][1][e]||e)},n,n.exports,o,r,i,u)}return i[t].exports}for(var a="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,n){"use strict";var o={},r="(?:^|\\s)",i="(?:\\s|$)";function u(e){var t=o[e];return t?t.lastIndex=0:o[e]=t=new RegExp(r+e+i,"g"),t}t.exports={add:function(e,t){var n=e.className;n.length?u(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(u(t)," ").trim()}}},{}],2:[function(e,t,n){(function(r){"use strict";var M=e("contra/emitter"),k=e("crossvent"),j=e("./classes"),R=document,q=R.documentElement;function U(e,t,n,o){r.navigator.pointerEnabled?k[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],o):r.navigator.msPointerEnabled?k[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],o):(k[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],o),k[t](e,n,o))}function K(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;e=e.button;return void 0!==e?1&e?1:2&e?3:4&e?2:0:void 0}function z(e,t){return void 0!==r[t]?r[t]:(q.clientHeight?q:R.body)[e]}function H(e,t,n){var o=(e=e||{}).className||"";return e.className+=" gu-hide",n=R.elementFromPoint(t,n),e.className=o,n}function V(){return!1}function $(){return!0}function G(e){return e.width||e.right-e.left}function J(e){return e.height||e.bottom-e.top}function Q(e){return e.parentNode===R?null:e.parentNode}function W(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){if(!t)return!1;if("false"===t.contentEditable)return!1;if("true"===t.contentEditable)return!0;return e(Q(t))}(e)}function Z(t){return t.nextElementSibling||function(){var e=t;for(;e=e.nextSibling,e&&1!==e.nodeType;);return e}()}function ee(e,t){var t=(n=t).targetTouches&&n.targetTouches.length?n.targetTouches[0]:n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,n={pageX:"clientX",pageY:"clientY"};return e in n&&!(e in t)&&n[e]in t&&(e=n[e]),t[e]}t.exports=function(e,t){var l,f,s,d,m,o,r,v,p,h,n;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var i,g=null,y=t||{};void 0===y.moves&&(y.moves=$),void 0===y.accepts&&(y.accepts=$),void 0===y.invalid&&(y.invalid=function(){return!1}),void 0===y.containers&&(y.containers=e||[]),void 0===y.isContainer&&(y.isContainer=V),void 0===y.copy&&(y.copy=!1),void 0===y.copySortSource&&(y.copySortSource=!1),void 0===y.revertOnSpill&&(y.revertOnSpill=!1),void 0===y.removeOnSpill&&(y.removeOnSpill=!1),void 0===y.direction&&(y.direction="vertical"),void 0===y.ignoreInputTextSelection&&(y.ignoreInputTextSelection=!0),void 0===y.mirrorContainer&&(y.mirrorContainer=R.body);var w=M({containers:y.containers,start:function(e){e=S(e);e&&C(e)},end:O,cancel:L,remove:X,destroy:function(){c(!0),N({})},canMove:function(e){return!!S(e)},dragging:!1});return!0===y.removeOnSpill&&w.on("over",function(e){j.rm(e,"gu-hide")}).on("out",function(e){w.dragging&&j.add(e,"gu-hide")}),c(),w;function u(e){return-1!==w.containers.indexOf(e)||y.isContainer(e)}function c(e){e=e?"remove":"add";U(q,e,"mousedown",E),U(q,e,"mouseup",N)}function a(e){U(q,e?"remove":"add","mousemove",x)}function b(e){e=e?"remove":"add";k[e](q,"selectstart",T),k[e](q,"click",T)}function T(e){i&&e.preventDefault()}function E(e){var t,n;o=e.clientX,r=e.clientY,1!==K(e)||e.metaKey||e.ctrlKey||(n=S(t=e.target))&&(i=n,a(),"mousedown"===e.type&&(W(t)?t.focus():e.preventDefault()))}function x(e){if(i)if(0!==K(e)){if(!(void 0!==e.clientX&&Math.abs(e.clientX-o)<=(y.slideFactorX||0)&&void 0!==e.clientY&&Math.abs(e.clientY-r)<=(y.slideFactorY||0))){if(y.ignoreInputTextSelection){var t=ee("clientX",e)||0,n=ee("clientY",e)||0;if(W(R.elementFromPoint(t,n)))return}n=i;a(!0),b(),O(),C(n);n=function(e){e=e.getBoundingClientRect();return{left:e.left+z("scrollLeft","pageXOffset"),top:e.top+z("scrollTop","pageYOffset")}}(s);d=ee("pageX",e)-n.left,m=ee("pageY",e)-n.top,j.add(h||s,"gu-transit"),function(){if(l)return;var e=s.getBoundingClientRect();(l=s.cloneNode(!0)).style.width=G(e)+"px",l.style.height=J(e)+"px",j.rm(l,"gu-transit"),j.add(l,"gu-mirror"),y.mirrorContainer.appendChild(l),U(q,"add","mousemove",P),j.add(y.mirrorContainer,"gu-unselectable"),w.emit("cloned",l,s,"mirror")}(),P(e)}}else N({})}function S(e){if(!(w.dragging&&l||u(e))){for(var t=e;Q(e)&&!1===u(Q(e));){if(y.invalid(e,t))return;if(!(e=Q(e)))return}var n=Q(e);if(n)if(!y.invalid(e,t))if(y.moves(e,n,t,Z(e)))return{item:e,source:n}}}function C(e){var t,n;t=e.item,n=e.source,("boolean"==typeof y.copy?y.copy:y.copy(t,n))&&(h=e.item.cloneNode(!0),w.emit("cloned",h,e.item,"copy")),f=e.source,s=e.item,v=p=Z(e.item),w.dragging=!0,w.emit("drag",s,f)}function O(){var e;w.dragging&&_(e=h||s,Q(e))}function I(){a(!(i=!1)),b(!0)}function N(e){var t,n;I(),w.dragging&&(t=h||s,n=ee("clientX",e)||0,e=ee("clientY",e)||0,(e=B(H(l,n,e),n,e))&&(h&&y.copySortSource||!h||e!==f)?_(t,e):(y.removeOnSpill?X:L)())}function _(e,t){var n=Q(e);h&&y.copySortSource&&t===f&&n.removeChild(s),A(t)?w.emit("cancel",e,f,f):w.emit("drop",e,t,f,p),Y()}function X(){var e,t;w.dragging&&((t=Q(e=h||s))&&t.removeChild(e),w.emit(h?"cancel":"remove",e,t,f),Y())}function L(e){var t,n,o;w.dragging&&(t=0<arguments.length?e:y.revertOnSpill,!1===(e=A(o=Q(n=h||s)))&&t&&(h?o&&o.removeChild(h):f.insertBefore(n,v)),e||t?w.emit("cancel",n,f,f):w.emit("drop",n,o,f,p),Y())}function Y(){var e=h||s;I(),l&&(j.rm(y.mirrorContainer,"gu-unselectable"),U(q,"remove","mousemove",P),Q(l).removeChild(l),l=null),e&&j.rm(e,"gu-transit"),n&&clearTimeout(n),w.dragging=!1,g&&w.emit("out",e,g,f),w.emit("dragend",e),f=s=h=v=p=n=g=null}function A(e,t){t=void 0!==t?t:l?p:Z(h||s);return e===f&&t===v}function B(t,n,o){for(var r=t;r&&!function(){if(!1===u(r))return!1;var e=D(r,t),e=F(r,e,n,o);if(A(r,e))return!0;return y.accepts(s,r,f,e)}();)r=Q(r);return r}function P(e){if(l){e.preventDefault();var t=ee("clientX",e)||0,n=ee("clientY",e)||0,o=t-d,r=n-m;l.style.left=o+"px",l.style.top=r+"px";var i=h||s,e=H(l,t,n),o=B(e,t,n),u=null!==o&&o!==g;!u&&null!==o||(g&&a("out"),g=o,u&&a("over"));r=Q(i);if(o!==f||!h||y.copySortSource){var c,e=D(o,e);if(null!==e)c=F(o,e,t,n);else{if(!0!==y.revertOnSpill||h)return void(h&&r&&r.removeChild(i));c=v,o=f}(null===c&&u||c!==i&&c!==Z(i))&&(p=c,o.insertBefore(i,c),w.emit("shadow",i,o,f))}else r&&r.removeChild(i)}function a(e){w.emit(e,i,g,f)}}function D(e,t){for(var n=t;n!==e&&Q(n)!==e;)n=Q(n);return n===q?null:n}function F(r,t,i,u){var c="horizontal"===y.direction;return(t!==r?function(){var e=t.getBoundingClientRect();if(c)return n(i>e.left+G(e)/2);return n(u>e.top+J(e)/2)}:function(){var e,t,n,o=r.children.length;for(e=0;e<o;e++){if(t=r.children[e],n=t.getBoundingClientRect(),c&&n.left+n.width/2>i)return t;if(!c&&n.top+n.height/2>u)return t}return null})();function n(e){return e?Z(t):t}}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,t,n){t.exports=function(e,t){return Array.prototype.slice.call(e,t)}},{}],4:[function(e,t,n){"use strict";var o=e("ticky");t.exports=function(e,t,n){e&&o(function(){e.apply(n||null,t||[])})}},{ticky:10}],5:[function(e,t,n){"use strict";var c=e("atoa"),a=e("./debounce");t.exports=function(r,e){var i=e||{},u={};return void 0===r&&(r={}),r.on=function(e,t){return u[e]?u[e].push(t):u[e]=[t],r},r.once=function(e,t){return t._once=!0,r.on(e,t),r},r.off=function(e,t){var n=arguments.length;if(1===n)delete u[e];else if(0===n)u={};else{e=u[e];if(!e)return r;e.splice(e.indexOf(t),1)}return r},r.emit=function(){var e=c(arguments);return r.emitterSnapshot(e.shift()).apply(this,e)},r.emitterSnapshot=function(o){var e=(u[o]||[]).slice(0);return function(){var t=c(arguments),n=this||r;if("error"===o&&!1!==i.throws&&!e.length)throw 1===t.length?t[0]:t;return e.forEach(function(e){i.async?a(e,t,n):e.apply(n,t),e._once&&r.off(o,e)}),r}},r}},{"./debounce":4,atoa:3}],6:[function(n,o,e){(function(r){"use strict";var i=n("custom-event"),u=n("./eventmap"),c=r.document,e=function(e,t,n,o){return e.addEventListener(t,n,o)},t=function(e,t,n,o){return e.removeEventListener(t,n,o)},a=[];function l(e,t,n){t=function(e,t,n){var o,r;for(o=0;o<a.length;o++)if((r=a[o]).element===e&&r.type===t&&r.fn===n)return o}(e,t,n);if(t){n=a[t].wrapper;return a.splice(t,1),n}}r.addEventListener||(e=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var o=l(e,t,n)||function(n,o){return function(e){var t=e||r.event;t.target=t.target||t.srcElement,t.preventDefault=t.preventDefault||function(){t.returnValue=!1},t.stopPropagation=t.stopPropagation||function(){t.cancelBubble=!0},t.which=t.which||t.keyCode,o.call(n,t)}}(e,n);return a.push({wrapper:o,element:e,type:t,fn:n}),o}(e,t,n))},t=function(e,t,n){n=l(e,t,n);if(n)return e.detachEvent("on"+t,n)}),o.exports={add:e,remove:t,fabricate:function(e,t,n){var o=-1===u.indexOf(t)?new i(t,{detail:n}):function(){var e;c.createEvent?(e=c.createEvent("Event")).initEvent(t,!0,!0):c.createEventObject&&(e=c.createEventObject());return e}();e.dispatchEvent?e.dispatchEvent(o):e.fireEvent("on"+t,o)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,r,t){(function(e){"use strict";var t=[],n="",o=/^on/;for(n in e)o.test(n)&&t.push(n.slice(2));r.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){var t=e.CustomEvent;n.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}}()?t:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,n){var o,r,t=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(o===setTimeout)return setTimeout(t,0);if((o===i||!o)&&setTimeout)return o=setTimeout,setTimeout(t,0);try{return o(t,0)}catch(e){try{return o.call(null,t,0)}catch(e){return o.call(this,t,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:i}catch(e){o=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,l=[],f=!1,s=-1;function d(){f&&a&&(f=!1,a.length?l=a.concat(l):s=-1,l.length&&m())}function m(){if(!f){var e=c(d);f=!0;for(var t=l.length;t;){for(a=l,l=[];++s<t;)a&&a[s].run();s=-1,t=l.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}t.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new v(e,t)),1!==l.length||f||c(m)},v.prototype.run=function(){this.fun.apply(null,this.array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={},t.on=p,t.addListener=p,t.once=p,t.off=p,t.removeListener=p,t.removeAllListeners=p,t.emit=p,t.prependListener=p,t.prependOnceListener=p,t.listeners=function(e){return[]},t.binding=function(e){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(e){throw new Error("process.chdir is not supported")},t.umask=function(){return 0}},{}],10:[function(e,n,t){(function(t){var e="function"==typeof t?function(e){t(e)}:function(e){setTimeout(e,0)};n.exports=e}).call(this,e("timers").setImmediate)},{timers:11}],11:[function(a,e,l){(function(e,t){var o=a("process/browser.js").nextTick,n=Function.prototype.apply,r=Array.prototype.slice,i={},u=0;function c(e,t){this._id=e,this._clearFn=t}l.setTimeout=function(){return new c(n.call(setTimeout,window,arguments),clearTimeout)},l.setInterval=function(){return new c(n.call(setInterval,window,arguments),clearInterval)},l.clearTimeout=l.clearInterval=function(e){e.close()},c.prototype.unref=c.prototype.ref=function(){},c.prototype.close=function(){this._clearFn.call(window,this._id)},l.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},l.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},l._unrefActive=l.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;0<=t&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},l.setImmediate="function"==typeof e?e:function(e){var t=u++,n=!(arguments.length<2)&&r.call(arguments,1);return i[t]=!0,o(function(){i[t]&&(n?e.apply(null,n):e.call(null),l.clearImmediate(t))}),t},l.clearImmediate="function"==typeof t?t:function(e){delete i[e]}}).call(this,a("timers").setImmediate,a("timers").clearImmediate)},{"process/browser.js":9,timers:11}]},{},[2])(2)});

document.addEventListener("DOMContentLoaded", function() {
    // Global Vars
    var useMap = '4x3';            // '2x2', '3x2', '4x2', '3x3', '4x3', '4x4' (cols x rows)
    var useElements = true;        // Later: use in initNewRound() to start game with/without elements
    var useAbilities = false;      // Later: use in initNewRound() to start game with/without abilities
    var useDebugMode = false;      // Options: 'phases', 'state' 
    var turnDuration = 15000;      // Options: in milliseconds
    var cardPoolSize = 3;          // Options: 3, 4, ... 
    var battlefield = document.querySelector('.battlefield');
    
    // Interface
    var endTurnButton = document.querySelector( '.button--end-turn' );
    var endTurnButtonTimer = document.querySelector('.button--end-turn .button__countdown-progress');
    var turnTimer;
    
    // Init New Game
    var playerCardBoardA = document.querySelector( '.main__aside--left' );
    var playerCardBoardB = document.querySelector( '.main__aside--right' );
    var playerCardPoolA = document.querySelector( '.main__aside--left .card-pool' );
    var playerCardPoolB = document.querySelector( '.main__aside--right .card-pool' );
    initNewRound(playerCardBoardA, playerCardBoardB, useMap, useElements, useAbilities, useDebugMode);
    
    // Init Drag & Drop Functionality
    var battlefieldSlots = document.querySelectorAll('.battlefield__slot');
    var playerA = dragula([playerCardPoolA].concat(Array.from(battlefieldSlots)), dragulaOptions);
    var playerB = dragula([playerCardPoolB].concat(Array.from(battlefieldSlots)), dragulaOptions);
    var dragulaOptions = {
        isContainer: function (el) {
            return false;                  // only elements in playerA.containers will be taken into account
        },
        moves: function (el, source, handle, sibling) {
            return true;                   // elements are always draggable by default
        },
        accepts: function (el, target, source, sibling) {
            return true;                   // elements can be dropped in any of the `containers` by default
        },
        invalid: function (el, handle) {
            return false;                  // don't prevent any drags from initiating by default
        },
        direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
        copy: false,                       // elements are moved by default, not copied
        copySortSource: false,             // elements in copy-source containers can be reordered
        revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
        removeOnSpill: false,              // spilling will `.remove` the element, if this is true
        mirrorContainer: document.body,    // set the element that gets mirror elements appended
        ignoreInputTextSelection: true,    // allows users to select input text, see details below
        slideFactorX: 0,                   // allows users to select the amount of movement on the X axis before it is considered a drag instead of a click
        slideFactorY: 0,                   // allows users to select the amount of movement on the Y axis before it is considered a drag instead of a click
    }



    // Player Action - Drag Card
    playerA.on('drag', function(el, source) {
    });
    playerB.on('drag', function(el, source) {
    });

    // Player Action - Drop Card
    playerA.on('drop', function(el, target, source, sibling) {
        // Check if Card dropped in Slot
        if(target != source) {
            cardDrop(el, target);
            checkCardStates();
            checkSlotStates();
            changePlayer();
        }
    });
    playerB.on('drop', function(el, target, source, sibling) {
        // Check if Card dropped in Slot
        if(target != source) {
            cardDrop(el, target);
            checkCardStates();
            checkSlotStates();
            changePlayer();
        }
    });

    // Player Action - End Turn
    endTurnButton.addEventListener('click', function(){
        changePlayer();
    });



    // Card Draw
    function cardDraw(cardPool, color) {
        if(useDebugMode == 'phases'){console.log('Card Draw');}

        // Stop if full cardpool
        if( cardPool.childElementCount == cardPoolSize ) {
            return;
        }
        
        // Create the new card
        var card = document.createElement('div');
        var cardElements = ['card--fire','card--water','card--earth'];
        var cardDmgTotal = 20;
        var cardDmg = getRandomDamageNumbers(cardDmgTotal, 4, 9);
        var cardLayout = '<div class="card__inner"> <div class="card__front"> <div class="card__dmg"> <div class="card__dmg-top">' + cardDmg[0] + '<div class="card__dmg-element"></div></div> <div class="card__dmg-right">' + cardDmg[1] + '<div class="card__dmg-element"></div></div> <div class="card__dmg-bottom">' + cardDmg[2] + '<div class="card__dmg-element"></div></div> <div class="card__dmg-left">' + cardDmg[3] + '<div class="card__dmg-element"></div></div> </div> </div> <div class="card__back"> <div class="card__dmg"> <div class="card__dmg-top">' + cardDmg[0] + '<div class="card__dmg-element"></div></div> <div class="card__dmg-right">' + cardDmg[1] + '<div class="card__dmg-element"></div></div> <div class="card__dmg-bottom">' + cardDmg[2] + '<div class="card__dmg-element"></div></div> <div class="card__dmg-left">' + cardDmg[3] + '<div class="card__dmg-element"></div></div></div></div></div>';
        
        // Add card base-class
        card.classList.add('card');
        
        // Set card color
        card.classList.add('card--' + color);

        // Set card element (random)
        if (useElements) {
            card.classList.add(cardElements[Math.floor(Math.random()*cardElements.length)]);
        }

        // Add card content
        card.innerHTML = cardLayout;

        // Insert card to players cardpool
        cardPool.appendChild(card);
    }
    
    // Card Drop
    function cardDrop(card, slot) {
        if(useDebugMode == 'phases'){console.log('Card Drop');}
        
        // Set card-state to dropped
        card.classList.add('card--dropped');
        
        // Remove filled Slot as possible Drop Target
        playerA.containers.splice(playerA.containers.indexOf(slot), 1);
        playerB.containers.splice(playerB.containers.indexOf(slot), 1);

        // Init Combat
        cardAttack(card, slot)
    }

    // Card Attack
    function cardAttack(card, slot) {
        if(useDebugMode == 'phases'){console.log('Card Attack');}
        
        // Get current card stats
        var cardStats = getCardStats(card);

        // Get current index of slot card was dropped in 
        var currentSlotIndex = Array.prototype.indexOf.call(battlefieldSlots, slot);

        // Get target slot to attack
        var targetSlotTop = getTargetSlots(battlefieldSlots, currentSlotIndex, useMap)[0];
        var targetSlotRight = getTargetSlots(battlefieldSlots, currentSlotIndex, useMap)[1];
        var targetSlotBottom = getTargetSlots(battlefieldSlots, currentSlotIndex, useMap)[2];
        var targetSlotLeft = getTargetSlots(battlefieldSlots, currentSlotIndex, useMap)[3];
        
        // Get target cards
        if (targetSlotTop) {var targetCardTop = targetSlotTop.querySelector('.card');}
        if (targetSlotRight) {var targetCardRight = targetSlotRight.querySelector('.card');}
        if (targetSlotBottom) {var targetCardBottom = targetSlotBottom.querySelector('.card');}
        if (targetSlotLeft) {var targetCardLeft = targetSlotLeft.querySelector('.card');}

        // Attack target cards
        if (targetCardTop) {
            // attack
            var targetCardTopStats = getCardStats(targetCardTop);
            // check color
            if ( cardStats[5] != targetCardTopStats[5] ) {
                // check power
                if (cardStats[0] >= targetCardTopStats[2]) {
                    cardFlip(targetCardTop);
                }
            }
        }
        if (targetCardRight) {
            // attack
            var targetCardRightStats = getCardStats(targetCardRight);
            // check color
            if ( cardStats[5] != targetCardRightStats[5] ) {
                // check power
                if (cardStats[1] >= targetCardRightStats[3]) {
                    cardFlip(targetCardRight);
                }
            }
        }
        if (targetCardBottom) {
            // attack
            var targetCardBottomStats = getCardStats(targetCardBottom);
            // check color
            if ( cardStats[5] != targetCardBottomStats[5] ) {
                // check power
                if (cardStats[2] >= targetCardBottomStats[0]) {
                    cardFlip(targetCardBottom);
                }
            }
        }
        if (targetCardLeft) {
            // attack
            var targetCardLeftStats = getCardStats(targetCardLeft);
            // check color
            if ( cardStats[5] != targetCardLeftStats[5] ) {
                // check power
                if (cardStats[3] >= targetCardLeftStats[1]) {
                    cardFlip(targetCardLeft);
                }
            }
        }

    }
    
    // Card Flip
    function cardFlip(card, slot) {
        if(useDebugMode == 'phases'){console.log('Card Flip');}

        // Add flipped class
        setTimeout(() => {
            card.classList.toggle('card--flipped');
        }, 100);
        // Add color class
        setTimeout(() => {
            if ( card.classList.contains('card--red') ) {
                card.classList.remove('card--red');
                card.classList.add('card--blue');
            } else {
                card.classList.remove('card--blue');
                card.classList.add('card--red');
            }
        }, 150);
    }



    // Game - Check all Cards
    function checkCardStates() {
        if(useDebugMode == 'state'){console.log('Check all Card States');}

        // Needed?
    }

    // Game - Check all Slots
    function checkSlotStates() {
        if(useDebugMode == 'state'){console.log('Check all Slot States');}

        var slots = document.querySelectorAll( '.battlefield__slot' );
        
        slots.forEach(slot => {
            var slotIsFilled = slot.querySelectorAll('.card')[0];

            if ( slotIsFilled ) {
                // Set slot-state to filled
                slot.classList.add('battlefield__slot--filled');
                
                // Set slot-state to color
                if ( slotIsFilled.classList.contains('card--red') ) {
                    slot.classList.add('battlefield__slot--red');
                    slot.classList.remove('battlefield__slot--blue');
                } else {
                    slot.classList.add('battlefield__slot--blue');
                    slot.classList.remove('battlefield__slot--red');
                }
            }
        });
    }
    
    // Game - Update Phase
    function updatePhase(phaseBlock) {

        // Cycle through phases
        if ( phaseBlock.classList.contains('phase--1') ) {
            phaseBlock.classList.remove('phase--1');
            phaseBlock.classList.add('phase--2');
        } else if( phaseBlock.classList.contains('phase--2') ) {
            phaseBlock.classList.remove('phase--2');
            phaseBlock.classList.add('phase--3');
        } else if( phaseBlock.classList.contains('phase--3') ) {
            phaseBlock.classList.remove('phase--3');
            phaseBlock.classList.add('phase--4');
        } else if( phaseBlock.classList.contains('phase--4') ) {
            phaseBlock.classList.remove('phase--4');
            phaseBlock.classList.remove('phase--active');
        } else {
            phaseBlock.classList.add('phase--1');
            phaseBlock.classList.add('phase--active');
        }
    }

    // Game - Change Player
    function changePlayer() {
        if ( playerCardBoardA.classList.contains('main__aside--active') ) {
            playerCardBoardA.classList.remove('main__aside--active');
            playerCardBoardB.classList.add('main__aside--active');
            cardDraw(playerCardPoolB, 'blue');
        } else {
            playerCardBoardB.classList.remove('main__aside--active');
            playerCardBoardA.classList.add('main__aside--active');
            cardDraw(playerCardPoolA, 'red');
        }
        startTurnTimer(turnDuration);
    }

    // Game - Cointoss
    function doCointoss() {
   
        var coin = document.querySelector('.coin');
        var overlay = document.querySelector('.overlay');
        var cointossResult = Math.random();

        coin.classList.remove('heads');
        coin.classList.remove('tails');

        // Execute toincoss
        setTimeout(function(){
            if(cointossResult <= 0.5) {
                coin.classList.add('heads');
            } else {
                coin.classList.add('tails');
            }
        }, 100);

        // Remove coin
        setTimeout(function(){
            coin.classList.add('hidden');
        }, 3000);

        // Fade-out overlay
        setTimeout(function(){
            overlay.classList.add('overlay--hidden');
        }, 3500);
        
        // Remove overlay & Start first countdown
        setTimeout(function(){
            overlay.remove();
            startTurnTimer(turnDuration);
        }, 3650);

        // Set starting player
        if(cointossResult <= 0.5) {
            return 'playerA';
        } else {
            return 'playerB';
        }
        
    }

    //Game - Countdown Timer
    function startTurnTimer(duration) {
        
        // Trun Timer - Clear
        window.clearTimeout(turnTimer);
        // Trun Timer - Start
        turnTimer = setTimeout(function(){ changePlayer() }, duration);
        
        // Reset Animation
        endTurnButtonTimer.classList.remove('button__countdown-progress--animating');
        // Reset Animation - Trigger a DOM reflow 
        void endTurnButtonTimer.offsetWidth;
        
        // Add current Player Color
        if ( playerCardBoardA.classList.contains('main__aside--active') ) {
            endTurnButtonTimer.classList.add('button__countdown-progress--red');
            endTurnButtonTimer.classList.remove('button__countdown-progress--blue');
        } else {
            endTurnButtonTimer.classList.add('button__countdown-progress--blue');
            endTurnButtonTimer.classList.remove('button__countdown-progress--red');
        }

        // Add Animation Duration
        endTurnButtonTimer.style.animationDuration = duration + 'ms';
        
        // Start Animation Duration
        endTurnButtonTimer.classList.add('button__countdown-progress--animating');
    }

    // Game - Create Battlefield Slot
    function createBattlefieldSlot(type) {
        // Create the new battlefield slot
        var slot = document.createElement('div');

        // Add slot base-class
        slot.classList.add('battlefield__slot');
        
        // Add slot optional classes
        if(type == 'blocked') {
            // implement later
        }

        // Insert slot to battlefield
        battlefield.appendChild(slot);
    }

    // Game - Init new Round
    function initNewRound(boardA, boardB, map, elements, abilities, debug) {
        if(useDebugMode == 'state'){console.log('Init New Game');}

        // Set Game Options
        useDebugMode = debug;
        useElements = elements;
        useAbilities = abilities;
        useMap = map;

        // Set starting Player
        startingPlayer = doCointoss();

        // Set Battlefield Map
        if ( useMap == '2x2' ) {
            battlefield.classList.add('battlefield--2x2');
            for (var i = 1; i < 5; i++) createBattlefieldSlot(i);
        }
        if ( useMap == '3x2' ) {
            battlefield.classList.add('battlefield--3x2');
            for (var i = 1; i < 7; i++) createBattlefieldSlot(i);
        }
        if ( useMap == '4x2' ) {
            battlefield.classList.add('battlefield--4x2');
            for (var i = 1; i < 9; i++) createBattlefieldSlot(i);
        }
        if ( useMap == '3x3' ) {
            battlefield.classList.add('battlefield--3x3');
            for (var i = 1; i < 10; i++) createBattlefieldSlot(i);
        }
        if ( useMap == '4x3' ) {
            battlefield.classList.add('battlefield--4x3');
            for (var i = 1; i < 13; i++) createBattlefieldSlot(i);
        }
        if ( useMap == '4x4' ) {
            battlefield.classList.add('battlefield--4x4');
            for (var i = 1; i < 17; i++) createBattlefieldSlot(i);
        }
        
        // Player A - Draw initial Cards
        setTimeout(function(){
            for (var i = 1; i < cardPoolSize+1; i++) cardDraw(playerCardPoolA, 'red');
        }, 3650);
        // Player A - Reset Board
        boardA.scrollTop = 0;
        
        // Player A - Draw initial Cards
        setTimeout(function(){
            for (var i = 1; i < cardPoolSize+1; i++) cardDraw(playerCardPoolB, 'blue');
        }, 3650);
        // Player B - Reset Board
        boardB.scrollTop = 0;

        // Set starting Player
        if (startingPlayer == 'playerA') {
            boardA.classList.add('main__aside--active');
        } else {
            boardB.classList.add('main__aside--active');
        }
    }
    
    

    // ------------------------------------
    // Hepler Functions
    // ------------------------------------
    // Helper Function - Create Random Damage Numbers
    function getRandomDamageNumbers(total, parts, max) {
        // var total = 20;
        // var parts = 4;
        // var max = 9;
        var arr = new Array(parts);
        var sum = 0;
        do {
            for (var i = 0; i < parts; i++) {
                arr[i] = Math.random();
            }
            sum = arr.reduce((acc, val) => acc + val, 0);
            var scale = (total - parts) / sum;
            arr = arr.map(val => Math.min(max, Math.round(val * scale) + 1));
            sum = arr.reduce((acc, val) => acc + val, 0);
        } while (sum - total);
        
        return arr;
    }

    // Helper Function - Get Card Stats
    function getCardStats(card) {

        var cardStats = [];

        // Get Card Damage
        cardStats.push(card.querySelector('.card__dmg-top').innerText);
        cardStats.push(card.querySelector('.card__dmg-right').innerText);
        cardStats.push(card.querySelector('.card__dmg-bottom').innerText);
        cardStats.push(card.querySelector('.card__dmg-left').innerText);

        // Get Card Element 
        if (card.classList.contains('card--fire')) {
            cardStats.push('fire');
        } else if (card.classList.contains('card--water')) {
            cardStats.push('water');
        } else if (card.classList.contains('card--earth')) {
            cardStats.push('earth');
        } else {
            cardStats.push(null);
        }

        // Get Card Color
        if (card.classList.contains('card--red')) {
            cardStats.push('red');
        } else {
            cardStats.push('blue');
        }

        return cardStats;
    }

    // Helper Function - Get Slot Targets
    function getTargetSlots(battlefieldSlots, currentSlotIndex, currentMap) {
        
        var targetSlots = [];
        var col = currentMap.split('')[0]; // cols of grid
        var row = currentMap.split('')[2]; // rows of grid
        
        // Convert formats for calculations
        col = parseInt(col, 10);
        row = parseInt(row, 10);
        currentSlotIndex = parseInt(currentSlotIndex, 10);
        
        // Check for grid edges
        var isOnTopEdge = Math.floor(currentSlotIndex / col) === 0; // Slot on top edge
        var isOnRightEdge = (currentSlotIndex+1) % col === 0; // Slot on right edge
        var isOnBottomEdge = Math.floor( currentSlotIndex / col ) === (row - 1); // Slot on bottom edge
        var isOnLeftEdge = currentSlotIndex % col === 0; // Slot on very left edge
        
        if (isOnTopEdge) {
            targetSlots.push(null);
        } else {
            targetSlots.push(battlefieldSlots.item(currentSlotIndex - col));
        }
        
        if (isOnRightEdge) {
            targetSlots.push(null);
        } else {
            targetSlots.push(battlefieldSlots.item(currentSlotIndex + 1));
        }
        
        if (isOnBottomEdge) {
            targetSlots.push(null);
        } else {
            targetSlots.push(battlefieldSlots.item(currentSlotIndex + col));
        }
        
        if (isOnLeftEdge) {
            targetSlots.push(null);
        } else {
            targetSlots.push(battlefieldSlots.item(currentSlotIndex - 1));
        }

        return targetSlots;
    }

      

    

    // ------------------------------------
    // For testing purposes (remove later)
    // ------------------------------------

    // Update phase on click on phase block
    var playerPhaseBlockA = document.querySelector( '.footer__aside--left .phase' );
    var playerPhaseBlockB = document.querySelector( '.footer__aside--right .phase' );
    playerPhaseBlockA.addEventListener('click', function(){
        updatePhase(playerPhaseBlockA);
    });
    playerPhaseBlockB.addEventListener('click', function(){
        updatePhase(playerPhaseBlockB);
    });

});