var e,n,_,t,l,o,r={},i=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,n){for(var _ in n)e[_]=n[_];return e}function c(e){var n=e.parentNode;n&&n.removeChild(e)}function f(n,_,t){var l,o,r,i={};for(r in _)"key"==r?l=_[r]:"ref"==r?o=_[r]:i[r]=_[r];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):t),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===i[r]&&(i[r]=n.defaultProps[r]);return p(n,i,l,o,null)}function p(e,t,l,o,r){var i={type:e,props:t,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++_:r};return null!=n.vnode&&n.vnode(i),i}function a(e){return e.children}function d(e,n){this.props=e,this.context=n}function h(e,n){if(null==n)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var _;n<e.__k.length;n++)if(null!=(_=e.__k[n])&&null!=_.__e)return _.__e;return"function"==typeof e.type?h(e):null}function v(e){var n,_;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(_=e.__k[n])&&null!=_.__e){e.__e=e.__c.base=_.__e;break}return v(e)}}function y(e){(!e.__d&&(e.__d=!0)&&t.push(e)&&!m.__r++||o!==n.debounceRendering)&&((o=n.debounceRendering)||l)(m)}function m(){for(var e;m.__r=t.length;)e=t.sort((function(e,n){return e.__v.__b-n.__v.__b})),t=[],e.some((function(e){var n,_,t,l,o,r;e.__d&&(o=(l=(n=e).__v).__e,(r=n.__P)&&(_=[],(t=s({},l)).__v=l.__v+1,w(r,l,t,n.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,_,null==o?h(l):o,l.__h),D(_,l),l.__e!=o&&v(l)))}))}function k(e,n,_,t,l,o,u,s,c,f){var d,v,y,m,k,x,S,P=t&&t.__k||i,C=P.length;for(_.__k=[],d=0;d<n.length;d++)if(null!=(m=_.__k[d]=null==(m=n[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?p(null,m,null,null,m):Array.isArray(m)?p(a,{children:m},null,null,null):m.__b>0?p(m.type,m.props,m.key,null,m.__v):m)){if(m.__=_,m.__b=_.__b+1,null===(y=P[d])||y&&m.key==y.key&&m.type===y.type)P[d]=void 0;else for(v=0;v<C;v++){if((y=P[v])&&m.key==y.key&&m.type===y.type){P[v]=void 0;break}y=null}w(e,m,y=y||r,l,o,u,s,c,f),k=m.__e,(v=m.ref)&&y.ref!=v&&(S||(S=[]),y.ref&&S.push(y.ref,null,m),S.push(v,m.__c||k,m)),null!=k?(null==x&&(x=k),"function"==typeof m.type&&null!=m.__k&&m.__k===y.__k?m.__d=c=g(m,c,e):c=b(e,m,y,P,k,c),f||"option"!==_.type?"function"==typeof _.type&&(_.__d=c):e.value=""):c&&y.__e==c&&c.parentNode!=e&&(c=h(y))}for(_.__e=x,d=C;d--;)null!=P[d]&&("function"==typeof _.type&&null!=P[d].__e&&P[d].__e==_.__d&&(_.__d=h(t,d+1)),U(P[d],P[d]));if(S)for(d=0;d<S.length;d++)T(S[d],S[++d],S[++d])}function g(e,n,_){var t,l;for(t=0;t<e.__k.length;t++)(l=e.__k[t])&&(l.__=e,n="function"==typeof l.type?g(l,n,_):b(_,l,l,e.__k,l.__e,n));return n}function b(e,n,_,t,l,o){var r,i,u;if(void 0!==n.__d)r=n.__d,n.__d=void 0;else if(null==_||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<t.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function x(e,n,_){"-"===n[0]?e.setProperty(n,_):e[n]=null==_?"":"number"!=typeof _||u.test(n)?_:_+"px"}function S(e,n,_,t,l){var o;e:if("style"===n)if("string"==typeof _)e.style.cssText=_;else{if("string"==typeof t&&(e.style.cssText=t=""),t)for(n in t)_&&n in _||x(e.style,n,"");if(_)for(n in _)t&&_[n]===t[n]||x(e.style,n,_[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=_,_?t||e.addEventListener(n,o?C:P,o):e.removeEventListener(n,o?C:P,o);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==_?"":_;break e}catch(e){}"function"==typeof _||(null!=_&&(!1!==_||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,_):e.removeAttribute(n))}}function P(e){this.l[e.type+!1](n.event?n.event(e):e)}function C(e){this.l[e.type+!0](n.event?n.event(e):e)}function w(e,_,t,l,o,r,i,u,c){var f,p,h,v,y,m,g,b,x,S,P,C=_.type;if(void 0!==_.constructor)return null;null!=t.__h&&(c=t.__h,u=_.__e=t.__e,_.__h=null,r=[u]),(f=n.__b)&&f(_);try{e:if("function"==typeof C){if(b=_.props,x=(f=C.contextType)&&l[f.__c],S=f?x?x.props.value:f.__:l,t.__c?g=(p=_.__c=t.__c).__=p.__E:("prototype"in C&&C.prototype.render?_.__c=p=new C(b,S):(_.__c=p=new d(b,S),p.constructor=C,p.render=N),x&&x.sub(p),p.props=b,p.state||(p.state={}),p.context=S,p.__n=l,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=s({},p.__s)),s(p.__s,C.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,h)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,S),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,S)||_.__v===t.__v){p.props=b,p.state=p.__s,_.__v!==t.__v&&(p.__d=!1),p.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach((function(e){e&&(e.__=_)})),p.__h.length&&i.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,S),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=S,p.props=b,p.state=p.__s,(f=n.__r)&&f(_),p.__d=!1,p.__v=_,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(l=s(s({},l),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),P=null!=f&&f.type===a&&null==f.key?f.props.children:f,k(e,Array.isArray(P)?P:[P],_,t,l,o,r,i,u,c),p.base=_.__e,_.__h=null,p.__h.length&&i.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==r&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=E(t.__e,_,t,l,o,r,i,c);(f=n.diffed)&&f(_)}catch(e){_.__v=null,(c||null!=r)&&(_.__e=u,_.__h=!!c,r[r.indexOf(u)]=null),n.__e(e,_,t)}}function D(e,_){n.__c&&n.__c(_,e),e.some((function(_){try{e=_.__h,_.__h=[],e.some((function(e){e.call(_)}))}catch(e){n.__e(e,_.__v)}}))}function E(n,_,t,l,o,i,u,s){var f,p,a,d=t.props,v=_.props,y=_.type,m=0;if("svg"===y&&(o=!0),null!=i)for(;m<i.length;m++)if((f=i[m])&&(f===n||(y?f.localName==y:3==f.nodeType))){n=f,i[m]=null;break}if(null==n){if(null===y)return document.createTextNode(v);n=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),i=null,s=!1}if(null===y)d===v||s&&n.data===v||(n.data=v);else{if(i=i&&e.call(n.childNodes),p=(d=t.props||r).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!s){if(null!=i)for(d={},m=0;m<n.attributes.length;m++)d[n.attributes[m].name]=n.attributes[m].value;(a||p)&&(a&&(p&&a.__html==p.__html||a.__html===n.innerHTML)||(n.innerHTML=a&&a.__html||""))}if(function(e,n,_,t,l){var o;for(o in _)"children"===o||"key"===o||o in n||S(e,o,null,_[o],t);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||_[o]===n[o]||S(e,o,n[o],_[o],t)}(n,v,d,o,s),a)_.__k=[];else if(m=_.props.children,k(n,Array.isArray(m)?m:[m],_,t,l,o&&"foreignObject"!==y,i,u,i?i[0]:t.__k&&h(t,0),s),null!=i)for(m=i.length;m--;)null!=i[m]&&c(i[m]);s||("value"in v&&void 0!==(m=v.value)&&(m!==n.value||"progress"===y&&!m)&&S(n,"value",m,d.value,!1),"checked"in v&&void 0!==(m=v.checked)&&m!==n.checked&&S(n,"checked",m,d.checked,!1))}return n}function T(e,_,t){try{"function"==typeof e?e(_):e.current=_}catch(e){n.__e(e,t)}}function U(e,_,t){var l,o;if(n.unmount&&n.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||T(l,null,_)),null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){n.__e(e,_)}l.base=l.__P=null}if(l=e.__k)for(o=0;o<l.length;o++)l[o]&&U(l[o],_,"function"!=typeof e.type);t||null==e.__e||c(e.__e),e.__e=e.__d=void 0}function N(e,n,_){return this.constructor(e,_)}function L(_,t,l){var o,i,u;n.__&&n.__(_,t),i=(o="function"==typeof l)?null:l&&l.__k||t.__k,u=[],w(t,_=(!o&&l||t).__k=f(a,null,[_]),i||r,r,void 0!==t.ownerSVGElement,!o&&l?[l]:i?null:t.firstChild?e.call(t.childNodes):null,u,!o&&l?l:i?i.__e:t.firstChild,o),D(u,_)}e=i.slice,n={__e:function(e,n){for(var _,t,l;n=n.__;)if((_=n.__c)&&!_.__)try{if((t=_.constructor)&&null!=t.getDerivedStateFromError&&(_.setState(t.getDerivedStateFromError(e)),l=_.__d),null!=_.componentDidCatch&&(_.componentDidCatch(e),l=_.__d),l)return _.__E=_}catch(n){e=n}throw e}},_=0,d.prototype.setState=function(e,n){var _;_=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(s({},_),this.props)),e&&s(_,e),null!=e&&this.__v&&(n&&this.__h.push(n),y(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},d.prototype.render=a,t=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0;export{L as S,n as l,f as v};
