/* LICENSE
*
* Copyright (c) 2012-2015, 4chan community support LLC
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright
*    notice, this list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright
*    notice, this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the 4chan nor the names of its contributors
*    may be used to endorse or promote products derived from this software
*    without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*
* CONTRIBUTORS
*
* Maxime "desuwa" Youdine <desuwa@4chan.org>
*
* PAST CONTRIBUTORS
*
* Christopher "moot" Poole <moot@4chan.org>
* "King Jaffe Joffer"
*
* MORE INFORMATION
*
* https://github.com/4chan/4chan-JS
*
*/
var zoomermode={init:function(){zoomermode.alt_name=alt_name,zoomermode.btntop=document.querySelectorAll('a[data-cmd="toggle_alt_name"]')[0],zoomermode.btnbottom=document.querySelectorAll('a[data-cmd="toggle_alt_name"]')[1],zoomermode.on=!1},toggle:function(){zoomermode.on?zoomermode.disable_alt_names():zoomermode.enable_alt_names(),zoomermode.on=!zoomermode.on},enable_alt_names:function(){for(x of(zoomermode.btntop.firstChild.textContent="normal mode",zoomermode.btnbottom.firstChild.textContent="normal mode",zoomermode.btntop.childNodes[1].innerText="go back to the numbers",zoomermode.btnbottom.childNodes[1].innerText="go back to the numbers",document.getElementsByClassName("zoomermode")))x.classList.remove("hidden");for(x of document.getElementsByClassName("normalmode"))x.classList.add("hidden");for(const[e,t]of Object.entries(zoomermode.alt_name))document.querySelectorAll('a[href="#p'+e+'"]').forEach(e=>{e.innerText.includes("No")||(e.classList.contains("backlink")?e.innerText="to "+t+(e.innerText.includes("OP")?" (OP)":""):e.innerText="from "+t)})},disable_alt_names:function(){for(x of(zoomermode.btntop.firstChild.textContent="zoomer mode",zoomermode.btnbottom.firstChild.textContent="zoomer mode",zoomermode.btntop.childNodes[1].innerText="replaces all the scawy numbers with friendly, randomised names",zoomermode.btnbottom.childNodes[1].innerText="replaces all the scawy numbers with friendly, randomised names",document.getElementsByClassName("zoomermode")))x.classList.add("hidden");for(x of document.getElementsByClassName("normalmode"))x.classList.remove("hidden");for(const[e,t]of Object.entries(zoomermode.alt_name))document.querySelectorAll('a[href="#p'+e+'"]').forEach(t=>{t.innerText.includes("No")||(t.innerText=">>"+e+(t.innerText.includes("OP")?" (OP)":""))})}},$={id:function(e){return document.getElementById(e)},cls:function(e,t){return(t||document).getElementsByClassName(e)},qsa:function(e,t){return(t||document).querySelectorAll(e)}};document.documentElement.classList?($.hasClass=function(e,t){return e.classList.contains(t)},$.addClass=function(e,t){e.classList.add(t)},$.removeClass=function(e,t){e.classList.remove(t)}):($.hasClass=function(e,t){return-1!=(" "+e.className+" ").indexOf(" "+t+" ")},$.addClass=function(e,t){e.className=""===e.className?t:e.className+" "+t},$.removeClass=function(e,t){e.className=(" "+e.className+" ").replace(" "+t+" ","")}),$.docEl=document.documentElement;var QuotePreview={init:function(){this.regex=/(?:\/([a-z0-9]+)\/thread\/)?([0-9]+)?#p([0-9]+)$/,this.highlight=null,this.highlightAnti=null,this.cur=null},resolve:function(e){var t,o,n,i,a;if((t=QuotePreview).cur=null,(o=e.getAttribute("href").match(t.regex))&&(a=e.getAttribute("data-pfx")||"",n=document.getElementById(a+"p"+o[3]))){if((i=n.getBoundingClientRect()).top>0&&i.bottom<window.innerHeight&&!$.hasClass(n.parentNode,"post-hidden"))return void($.hasClass(n,"highlight")||location.hash.slice(1)==n.id?$.hasClass(n,"op")||(t.highlightAnti=n,$.addClass(n,"highlight-anti")):(t.highlight=n,$.addClass(n,"highlight")));t.show(e,n)}},show:function(e,t,o){var n,i,a,s,d,l,r,m,c,h,u,g;if(o?(Parser.parsePost(t),t.style.display=""):(t=t.cloneNode(!0),location.hash&&location.hash=="#"+t.id&&(t.className+=" highlight"),t.id="quote-preview",t.className+=" preview"+($.hasClass(e.parentNode.parentNode,"backlink")?"":" reveal-spoilers")),!e.parentNode.className&&(r=$.qsa("#"+$.cls("postMessage",t)[0].id+" > .quotelink",t))[1])for(h=">>"+e.parentNode.parentNode.id.split("_")[1],m=0;c=r[m];++m)if(c.textContent==h){$.addClass(c,"dotted");break}n=e.getBoundingClientRect(),s=(a=document.documentElement).offsetWidth,d=t.style,document.body.appendChild(t),Main.isMobileDevice?(d.top=n.top+e.offsetHeight+window.pageYOffset+"px",s-n.right<(0|.3*s)?d.right=s-n.right+"px":d.left=n.left+"px"):(s-n.right<(0|.3*s)?(l=s-n.left,d.right=l+5+"px"):(l=n.left+n.width,d.left=l+5+"px"),u=n.top+e.offsetHeight+window.pageYOffset-t.offsetHeight/2-n.height/2,i=t.getBoundingClientRect().height,u<(g=a.scrollTop!=document.body.scrollTop?a.scrollTop+document.body.scrollTop:document.body.scrollTop)?d.top=g+"px":u+i>g+a.clientHeight?d.top=g+a.clientHeight-i+"px":d.top=u+"px")},remove:function(e){var t,o;(t=QuotePreview).cur=null,t.highlight?($.removeClass(t.highlight,"highlight"),t.highlight=null):t.highlightAnti&&($.removeClass(t.highlightAnti,"highlight-anti"),t.highlightAnti=null),e&&(e.style.cursor=""),(o=$.id("quote-preview"))&&document.body.removeChild(o)}},ReplyHiding={init:function(){this.threshold=6048e5,this.hidden={},this.hasR=!1},isHidden:function(e){var t=$.id("sa"+e);return!t||t.hasAttribute("data-hidden")},toggle:function(e){this.isHidden(e)?this.show(e):this.hide(e)},show:function(e){$.removeClass($.id("pc"+e),"post-hidden"),$.id("sa"+e).removeAttribute("data-hidden"),delete ReplyHiding.hidden[e]},hide:function(e){$.addClass($.id("pc"+e),"post-hidden"),$.id("sa"+e).setAttribute("data-hidden",e),ReplyHiding.hidden[e]=Date.now()}};Main={},Main.init=function(){zoomermode.init(),document.addEventListener("DOMContentLoaded",Main.run,!1)},Main.run=function(){var e;document.removeEventListener("DOMContentLoaded",Main.run,!1),document.addEventListener("click",Main.onclick,!1),Main.isOekakiBoard="i"===Main.board,$.addClass(document.body,Main.type),(e=$.id("delform")||$.id("arc-list")).addEventListener("mouseover",Main.onThreadMouseOver,!1),e.addEventListener("mouseout",Main.onThreadMouseOut,!1),ReplyHiding.init(),QuotePreview.init()},Main.onclick=function(e){var t,o,n;if((t=e.target)!=document&&(o=t.getAttribute("data-cmd")))switch(n=t.getAttribute("data-id"),o){case"hide-r":t.hasAttribute("data-recurse")?ReplyHiding.toggleR(n):ReplyHiding.toggle(n);break;case"toggle_alt_name":zoomermode.toggle()}},Main.onThreadMouseOver=function(e){var t=e.target;$.hasClass(t,"quotelink")&&QuotePreview.resolve(e.target)},Main.onThreadMouseOut=function(e){var t=e.target;$.hasClass(t,"quotelink")&&QuotePreview.remove(t)},Main.init();