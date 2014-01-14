!function(c){var a=function(e,d){this.options=d;this.$element=c(e).unbind("submit.ajaxform").bind("submit.ajaxform",c.proxy(this.submit,this))};a.prototype={constructor:a,submit:function(g){var f=g?g:c.Event("submit");if(f.isDefaultPrevented()){return false}f.preventDefault();this.options.before(this.$element);var d=this;c.ajax({type:this.options.method,url:this.options.action,data:this.$element.serialize(),success:function(e,h){if(h==="success"){if(d.options.target&&d.options.type=="html"){c(d.options.target).html(e)}d.options.success(d.$element,e)}else{d.options.error(d.$element,e)}d.options.complete(d.$element)},error:function(e,h){if(h!=="abort"){d.options.error(d.$element)}d.options.complete(d.$element)},dataType:this.options.type});return false}};var b=c.fn.ajaxform;c.fn.ajaxform=function(d){return this.each(function(){var g=c(this),e=c.extend({},c.fn.ajaxform.defaults,{action:g.attr("action"),method:g.attr("method"),target:g.attr("target")},typeof d=="object"&&d),f=new a(this,e);if(typeof d=="string"){f[d]()}else{if(e.trigger){f.submit()}}})};c.fn.ajaxform.defaults={action:false,method:"POST",target:false,type:"html",before:function(d){},success:function(d,e){},error:function(d,e){},complete:function(d){},trigger:false};c.fn.ajaxform.Constructor=a;c.fn.ajaxform.noConflict=function(){c.fn.ajaxform=b;return this};c(document).ready(function(){c('form[data-toggle="ajaxform"]').each(function(d){var e=c(this);e.ajaxform(e.data())})})}(window.jQuery);!function(c){var b=function(e,d){this.options=d;this.$element=this;if(d.source){this.$source=d.source instanceof c?d.source:c(d.source)}};b.prototype={constructor:b,index:0,submit:function(f){var d=f?f:c.Event("submit");if(d.isDefaultPrevented()){return false}d.preventDefault();if(this.$source&&this.$source.length>0){this.index=0;this.subprocess()}return false},subprocess:function(){if(this.index==this.$source.length){this.options.complete(this.$element);return}var d=this;var f=this.$source.eq(this.index);var e=this.options.getdata(this.$element,f,this.index);this.options.before(this.$element,f,this.index);c.ajax({type:this.options.method,url:this.options.action,data:e,success:function(g,i){var h=false;if(i==="success"){h=d.options.success(d.$element,g,f,d.index)}else{h=d.options.error(d.$element,g,f,d.index)}d.index+=1;if(h){d.subprocess()}else{d.options.complete(this.$element,h)}},error:function(g,h){if(h!=="abort"){d.options.fail(d.$element,f,d.index)}},dataType:this.options.type})}};var a=c.fn.batchajax;c.fn.batchajax=function(d){return this.each(function(){var g=c(this),e=c.extend({},c.fn.batchajax.defaults,g.data(),typeof d=="object"&&d),f=new b(this,e);if(typeof d=="string"){f[d]()}else{if(e.trigger){f.submit()}}})};c.fn.batchajax.defaults={action:false,method:"POST",type:"json",source:false,getdata:function(e,f,d){},before:function(e,f,d){},success:function(e,g,f,d){},error:function(e,g,f,d){},complete:function(e,d){},fail:function(e,f,d){},trigger:true};c.fn.batchajax.Constructor=b;c.fn.batchajax.noConflict=function(){c.fn.batchajax=a;return this}}(window.jQuery);
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));
!function(b,d){var c=function(f,e){this.options=e;if(!d(this.options.element).length){d("body").children().eq(0).before(this.options.template)}};c.prototype={constructor:c,show:function(i,g){g=typeof(g)!="undefined"?g:"";var f=d(this.options.element);var h=this;var e=this.options;f.show();f.append("<p>"+i+"</p>");e.data=d("p",f).last();e.data.addClass(g);if(!f.hasClass("alert-danger")&&!f.hasClass("alert-error")){f.removeClass("alert-success alert-info").addClass(g)}e.data.delay(e.toggleSpeed/2).animate({opacity:1,paddingLeft:"+=20"},e.toggleSpeed/2,e.easing);e.data.slideDown(e.toggleSpeed,e.easing,function(){if(g!="alert-danger"&&g!="alert-error"){if(!e.visibleNotification){clearTimeout(e.timeout);e.timeout=setTimeout(function(){h.hide()},e.delay)}e.visibleNotification=true}else{clearTimeout(e.timeout)}h.show_close_button()});f.unbind("click");f.click(function(){h.hide_close_button();d("p",f).slideUp(e.toggleSpeed,e.easing,function(){d(this).remove();f.removeClass("alert-success alert-danger alert-info alert-error");f.hide()});e.visibleNotification=false})},hide:function(){if(this.options.visibleNotification===true){var f=d(this.options.element);var g=this;var e=this.options;if(d("p",f).length==1){g.hide_close_button()}e.data.animate({opacity:0},e.toggleSpeed/2,e.easing);e.data.slideUp(e.toggleSpeed,e.easing,function(){e.data.remove();if(d("p",f).length===0){e.visibleNotification=false;clearTimeout(e.timeout);f.removeClass("alert-success alert-danger alert-info alert-error");f.hide()}})}},hideAll:function(){if(this.options.visibleNotification===true){var f=d(this.options.element);var g=this;var e=this.options;if(d("p",f).length==1){g.hide_close_button()}d("p",f).first().animate({opacity:0},e.toggleSpeed/2,e.easing);d("p",f).first().slideUp(e.toggleSpeed,e.easing,function(){d("p",f).first().remove();if(d("p",f).length===0){e.visibleNotification=false;clearTimeout(e.timeout);f.removeClass("alert-success alert-danger alert-info alert-error");f.hide()}else{clearTimeout(e.timeout);e.timeout=setTimeout(function(){g.hideAll()},e.delay/2)}})}},show_close_button:function(){var f=d(this.options.element);var e=this.options;d(".close",f).show();d(".close",f).animate({opacity:0.2},e.toggleSpeed,e.easing)},hide_close_button:function(){var f=d(this.options.element);var e=this.options;d(".close",f).animate({opacity:0},e.toggleSpeed/3,e.easing,function(){d(".close",f).hide()})}};var a=b.notify;b.notify=function(h,g,f){var e=d.extend({},b.notify.defaults,typeof f=="object"&&f),i=new c(this,e);if(typeof h=="string"){i.show(h,g)}return i};b.notify.defaults={element:".notification-bar",template:'<div class="notification-bar"><button class="close">&times;</button></div>',data:null,toggleSpeed:200,easing:"swing",delay:5000,color:"rgba(255, 238, 150, 1)",textColor:"#111",handlerNotification:null,visibleNotification:false,timeout:null};b.notify.Constructor=c;b.notify.noConflict=function(){b.notify=a;return this}}(window,window.jQuery);
