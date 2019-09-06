import { Injectable, Component, NgModule, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SbUiComponentsService {
    constructor() { }
}
SbUiComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SbUiComponentsService.ctorParameters = () => [];
/** @nocollapse */ SbUiComponentsService.ngInjectableDef = defineInjectable({ factory: function SbUiComponentsService_Factory() { return new SbUiComponentsService(); }, token: SbUiComponentsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SbUiComponentsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SbUiComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-sb-ui-components',
                template: `
    <p>
      sb-ui-components works Lakhan Ji!
    </p>
  `
            }] }
];
/** @nocollapse */
SbUiComponentsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-card',
                template: "<!-- card component -->\r\n<div class=\"sbcard sbcard--resource sbcard--course\">\r\n  <div class=\"sbcard__main_area\">\r\n    <!-- card img -->\r\n    <div class=\"sbcard__img\"><img src={{data.img}} alt=\"{{data.title}}\" title=\"{{data.title}}\"></div>\r\n    <!-- card mobile view details -->\r\n    <div class=\"sbcard__info\">\r\n      <h4 class=\"sbcard__title sb__ellipsis sb__ellipsis--two\">{{data.title}}</h4>\r\n      <div class=\"sbcard__meta1\"><span>{{data.subject}}</span><span class=\"dot-divider\"></span><span>{{data.class}}</span></div>\r\n    </div>\r\n  </div>\r\n  <!-- content for only desktop -->\r\n  <div class=\"sb__DesktopOnly\">\r\n    <div class=\"sbcard__moreinfo\">\r\n      <!-- other meta info Medium, Organization etc -->\r\n      <div class=\"sbcard__meta2\">\r\n        <div class=\"sbcard__medium\"><span class=\"medium\">{{data.medium}}</span></div>\r\n        <div class=\"sbcard__org sb__ellipsis\">{{data.org}}</div>\r\n      </div>\r\n      <!-- other meta info Badge and card category Book, learn, practice -->\r\n      <div class=\"sbcard__tags\">\r\n        <span class=\"sbcard__badge\"><img src=\"assets/images/badge.svg\" alt=\"\" title=\"\" /></span>\r\n        <span class=\"sbcard__type\">{{data.category}}</span>\r\n      </div>\r\n    </div>\r\n    <!-- progress bar -->\r\n    <div class=\"sbcard__progressbar sbcard__progressbar--green\">\r\n      <span style=\"width:50%\"></span>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".sb__DesktopOnly{display:none}@media screen and (min-width:768px){.sb__DesktopOnly{display:block}}.sbcard__grid{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));grid-gap:0}.sbcard__flex{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.sbcard__flex sb-card{margin-bottom:16px;min-width:320px;margin-right:16px}.sbcard__flex--wrap{flex-wrap:wrap;justify-content:flex-start}.sbcard{width:100%;border-radius:0;background-color:#fff;box-shadow:0 2px 7px 0 rgba(0,0,0,.16);display:flex;flex-direction:column;cursor:pointer;position:relative}.sbcard__main_area{display:flex;flex-direction:row;align-items:center;padding:8px;height:88px}.sbcard__img{height:76px;width:76px;overflow:hidden;margin-right:8px;flex:inherit}@media screen and (min-width:768px){.sbcard__grid{grid-gap:1rem}.sbcard{border-radius:2px}.sbcard__img{flex:0 0 76px}}.sbcard__img img{width:100%}.sbcard__title{color:#333;font-size:14px;margin-bottom:0;line-height:normal}.sbcard__meta1{color:#979797;font-size:12px;display:inline-flex;align-items:center}.sbcard .dot-divider{width:4px;height:4px;border-radius:100%;background-color:#d8d8d8;display:inline-block;margin:0 8px}.sbcard__moreinfo{border-top:1px solid #e9e5e5;border-radius:0 0 2px 2px;background-color:#fafafa;display:flex;flex-direction:row;align-items:stretch;justify-content:space-between;padding:8px;max-height:56px}.sbcard__meta2{color:#666;font-size:12px;line-height:14px;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around}.sbcard__tags{display:flex;flex-direction:row;align-items:center}.sbcard__badge{display:flex}.sbcard__badge img{width:16px}.sbcard__type{margin-left:24px;background:#999;position:relative;height:20px;padding:0 8px 0 4px;color:#fff;margin-right:-8px;font-size:11px;display:flex;align-items:center}.sbcard__type:before{content:\"\";width:0;height:0;border-width:10px 5px;border-style:solid;border-color:#999 #999 #999 transparent;position:absolute;left:-10px}.sbcard__progressbar{height:4px;position:absolute;margin:0;background:#999;border-radius:0;box-shadow:inset 0 -1px 1px rgba(255,255,255,.3);width:100%;bottom:0}.sbcard__progressbar>span{display:block;height:100%;background-color:#2bc253;background-image:-webkit-gradient(center bottom,#2bc253 37%,#54f054 69%);box-shadow:inset 0 2px 9px rgba(255,255,255,.3),inset 0 -2px 6px rgba(0,0,0,.4);position:relative;overflow:hidden}.animate>span>span,.sbcard__progressbar>span:after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;background-image:-webkit-gradient(linear,0 0,100% 100%,color-stop(.25,rgba(255,255,255,.2)),color-stop(.25,transparent),color-stop(.5,transparent),color-stop(.5,rgba(255,255,255,.2)),color-stop(.75,rgba(255,255,255,.2)),color-stop(.75,transparent),to(transparent));z-index:1;background-size:50px 50px;-webkit-animation:2s linear infinite move;overflow:hidden;border-radius:20px 8px 8px 20px}.animate>span:after{display:none}@-webkit-keyframes move{0%{background-position:0 0}100%{background-position:50px 50px}}.orange>span{background-color:#f1a165;background-image:-webkit-linear-gradient(#f1a165,#f36d0a)}.red>span{background-color:#f0a3a3;background-image:-webkit-linear-gradient(#f0a3a3,#f42323)}.nostripes>span:after,.nostripes>span>span{-webkit-animation:none;-moz-animation:none;background-image:none}.sb__ellipsis{cursor:pointer;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1}.sb__ellipsis--two{-webkit-line-clamp:2}"]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-modal',
                template: "\r\n<!-- modal component -->\r\n<div class=\"sbmodal--overlay\"></div>\r\n<div class=\"sbmodal sbmodal--md sbmodal--primary sbmodal--isNotClosable animated fadeInUp\">\r\n  <!-- modal header area -->\r\n    <div class=\"sbmodal__header\">\r\n        <h4>{{title}}</h4>\r\n        <a href=\"javascript:void(0)\" title=\"Close\" class=\"i-link sbbtn-close\"><svg class=\"sbicon sbicon--close sbicon--xs sbicon--white\"><use xlink:href=\"assets/images/sprite.svg#close\"></use></svg></a>\r\n      </div>\r\n  <!-- modal body area -->\r\n      <div class=\"sbmodal__content sbmodal__content-scroll\">\r\n        <p>Amazon Textract is a service that automatically extracts text and data from scanned documents. Amazon Textract goes beyond simple optical character recognition (OCR) to also identify the contents of fields in forms and information stored in tables.</p>\r\n        <p>Many companies today extract data from documents and forms through manual data entry that\u2019s slow and expensive or through simple optical character recognition (OCR) software that requires manual customization or configuration. Rules and workflows for each document and form often need to be hard-coded and updated with each change to the form or when dealing with multiple forms. If the form deviates from the rules, the output is often scrambled and unusable.</p>\r\n      </div>\r\n      <!-- modal actions area -->\r\n      <div class=\"sbmodal__actions\">\r\n        <button type=\"button\" class=\"sbbtn sbbtn--sm\">Yes</button>\r\n        <button type=\"button\" class=\"sbbtn sbbtn--sm\">No</button>\r\n        \r\n        <button type=\"button\" class=\"sbbtn sbbtn--sm\">Maybe</button>\r\n      </div>\r\n</div>",
                styles: [":root{--font-stack-en:'Noto Sans','Noto Sans Devanagari','Noto Sans Tamil','Noto Sans Bengali','Noto Sans Malayalam','Noto Sans Gurmukhi','Noto Sans Gujarati','Noto Sans Telugu','Noto Sans Kannada','Noto Sans Oriya','Noto Nastaliq Urdu',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;--font-stack-hi:'Noto Sans Devanagari','Noto Sans','Noto Sans Tamil','Noto Sans Bengali','Noto Sans Malayalam','Noto Sans Gurmukhi','Noto Sans Gujarati','Noto Sans Telugu','Noto Sans Kannada','Noto Sans Oriya','Noto Nastaliq Urdu',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;--font-stack-ur:'Noto Sans','Noto Nastaliq Urdu','Noto Sans Devanagari','Noto Sans Tamil','Noto Sans Bengali','Noto Sans Malayalam','Noto Sans Gurmukhi','Noto Sans Gujarati','Noto Sans Telugu','Noto Sans Kannada','Noto Sans Oriya',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;--blue:#024f9d;--black:#000000;--green:#008840;--orange:#e55a28;--red:#ff4558;--white:#ffffff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--yellow:#ffc107;--teal:#20c997;--cyan:#17a2b8;--gray-hs:0,0%;--gray:hsl(var(--gray-hs),20%);--gray-0:hsl(var(--gray-hs),95%);--gray-100:hsl(var(--gray-hs),80%);--gray-200:hsl(var(--gray-hs),60%);--gray-300:hsl(var(--gray-hs),59%);--gray-400:hsl(var(--gray-hs),40%);--gray-800:var(--gray);--primary-color:var(--blue);--secondary-color:var(--green);--tertiary-color:var(--orange);--primary-0:#F3F7FA;--primary-100:#EDF4F9;--primary-200:#80A7CE;--primary-250:#D3E7F4;--primary-300:#7AB4EE;--primary-400:var(--primary-color);--primary-600:#005391;--primary-800:#002E50;--secondary-0:#E1FFDF;--secondary-100:#00C786;--secondary-200:#07bc81;--secondary-400:var(--secondary-color);--tertiary-0:#FEEDD7;--tertiary-100:#FFA11D;--tertiary-400:var(--tertiary-color);--red-0:#FBCCD1;--red-100:#FF6979;--red-400:var(--red);--base-block-space:8px;--icon-svg-xs:calc(var(--base-block-space) * 2);--icon-svg-sm:calc(var(--base-block-space) * 2.5);--icon-svg-md:calc(var(--base-block-space) * 3);--icon-svg-lg:calc(var(--base-block-space) * 4);--icon-svg-xl:calc(var(--base-block-space) * 5)}input[type=button],input[type=reset],input[type=submit]{width:100%}a.sbbtn{text-align:center;display:inline-flex;justify-content:center;align-items:center;flex-wrap:wrap}.sbbtn{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;display:inline-block;border:1px solid;color:var(--white);cursor:pointer;min-width:64px;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;position:relative;text-transform:capitalize;text-decoration:none}.sbbtn:hover{opacity:1}.sbbtn--disabled,.sbbtn--disabled:hover,.sbbtn:disabled,.sbbtn:disabled:hover{background-color:var(--gray-100);color:var(--gray-200);border:1px solid var(--gray-100);cursor:default}.sbbtn:after{content:\"\";position:absolute;top:50%;left:50%;width:3px;height:3px;background:var(--primary-600);opacity:0;border-radius:50%;transform:scale(1,1) translate(-50%);transform-origin:50% 50%}.sbbtn--full,.sbbtn--lg,.sbbtn--md,.sbbtn--sm,.sbbtn--xs{padding:4px 16px}.sbbtn--xs{height:24px;padding:0 8px;font-size:11.9994px}.sbbtn--sm{height:32px;font-size:14px}.sbbtn--md{height:48px;font-size:16.002px}.sbbtn--lg{height:56px;padding:16px 24px;font-size:20.006px}.sbbtn--error:active,.sbbtn--error:hover,.sbbtn--info:active,.sbbtn--info:hover,.sbbtn--primary:active,.sbbtn--primary:hover,.sbbtn--secondary:active,.sbbtn--secondary:hover,.sbbtn--success:active,.sbbtn--success:hover,.sbbtn--tertiary:active,.sbbtn--tertiary:hover,.sbmodal--error .sbmodal__actions button:active:nth-child(1),.sbmodal--error .sbmodal__actions button:hover:nth-child(1),.sbmodal--primary .sbmodal__actions button:active:nth-child(1),.sbmodal--primary .sbmodal__actions button:hover:nth-child(1),.sbmodal--success .sbmodal__actions button:active:nth-child(1),.sbmodal--success .sbmodal__actions button:hover:nth-child(1){color:var(--white);border:1px solid transparent}.sbbtn--info,.sbbtn--primary,.sbmodal--primary .sbmodal__actions button:nth-child(1){border-color:var(--primary-color);background-color:var(--primary-color);color:var(--white)}.sbbtn--info:active,.sbbtn--info:hover,.sbbtn--primary:active,.sbbtn--primary:hover,.sbmodal--primary .sbmodal__actions button:active:nth-child(1),.sbmodal--primary .sbmodal__actions button:hover:nth-child(1){background:var(--primary-800)}.sbbtn--secondary,.sbbtn--success,.sbmodal--success .sbmodal__actions button:nth-child(1){border-color:var(--secondary-200);background-color:var(--secondary-200);color:var(--white)}.sbbtn--secondary:active,.sbbtn--secondary:hover,.sbbtn--success:active,.sbbtn--success:hover,.sbmodal--success .sbmodal__actions button:active:nth-child(1),.sbmodal--success .sbmodal__actions button:hover:nth-child(1){background:var(--secondary-400)}.sbbtn--tertiary,.sbbtn--warning,.sbmodal--warning .sbmodal__actions button:nth-child(1){border-color:var(--tertiary-100);background-color:var(--tertiary-100);color:var(--white)}.sbbtn--tertiary:active,.sbbtn--tertiary:hover,.sbbtn--warning:active,.sbbtn--warning:hover,.sbmodal--warning .sbmodal__actions button:active:nth-child(1),.sbmodal--warning .sbmodal__actions button:hover:nth-child(1){background:var(--tertiary-400)}.sbbtn--success,.sbmodal--success .sbmodal__actions button:nth-child(1){border-color:var(--secondary-200);background-color:var(--secondary-200);color:var(--white)}.sbbtn--success:active,.sbbtn--success:hover,.sbmodal--success .sbmodal__actions button:active:nth-child(1),.sbmodal--success .sbmodal__actions button:hover:nth-child(1){background:var(--secondary-400)}.sbbtn--info{border-color:var(--primary-400);background-color:var(--primary-400);color:var(--white)}.sbbtn--info:active,.sbbtn--info:hover{background:var(--primary-800)}.sbbtn--warning,.sbmodal--warning .sbmodal__actions button:nth-child(1){border-color:var(--tertiary-400);background-color:var(--tertiary-400);color:var(--white)}.sbbtn--warning:active,.sbbtn--warning:hover,.sbmodal--warning .sbmodal__actions button:active:nth-child(1),.sbmodal--warning .sbmodal__actions button:hover:nth-child(1){background:var(--tertiary-400)}.sbbtn--error,.sbmodal--error .sbmodal__actions button:nth-child(1){border-color:var(--red-100);background-color:var(--red-100);color:var(--white)}.sbbtn--error:active,.sbbtn--error:hover,.sbmodal--error .sbmodal__actions button:active:nth-child(1),.sbmodal--error .sbmodal__actions button:hover:nth-child(1){background:var(--red-400)}.sbbtn--gray{border-color:var(--gray-200);background-color:var(--gray-200);color:var(--white)}.sbbtn--gray:active,.sbbtn--gray:hover{background:var(--gray-400)}.sbbtn--ol-info,.sbbtn--ol-primary,.sbmodal--primary .sbmodal__actions button:nth-child(2),.sbmodal--primary .sbmodal__actions button:nth-child(3){background-color:var(--white);color:var(--primary-color)}.sbbtn--ol-info:active,.sbbtn--ol-info:hover,.sbbtn--ol-primary:active,.sbbtn--ol-primary:hover,.sbmodal--primary .sbmodal__actions button:active:nth-child(2),.sbmodal--primary .sbmodal__actions button:active:nth-child(3),.sbmodal--primary .sbmodal__actions button:hover:nth-child(2),.sbmodal--primary .sbmodal__actions button:hover:nth-child(3){background:var(--primary-100);color:var(--primary-800);border-color:var(--primary-800)}.sbbtn--ol-secondary,.sbbtn--ol-success,.sbmodal--success .sbmodal__actions button:nth-child(2),.sbmodal--success .sbmodal__actions button:nth-child(3){background-color:var(--white);color:var(--secondary-200);color:var(--secondary-100);border-color:var(--secondary-100)}.sbbtn--ol-secondary:active,.sbbtn--ol-secondary:hover,.sbbtn--ol-success:active,.sbbtn--ol-success:hover,.sbmodal--success .sbmodal__actions button:active:nth-child(2),.sbmodal--success .sbmodal__actions button:active:nth-child(3),.sbmodal--success .sbmodal__actions button:hover:nth-child(2),.sbmodal--success .sbmodal__actions button:hover:nth-child(3){background:var(--secondary-0);color:var(--secondary-400);border-color:var(--secondary-400)}.sbbtn--ol-tertiary,.sbbtn--ol-warning,.sbmodal--warning .sbmodal__actions button:nth-child(2),.sbmodal--warning .sbmodal__actions button:nth-child(3){background-color:var(--white);color:var(--tertiary-color);color:var(--tertiary-100);border-color:var(--tertiary-100)}.sbbtn--ol-tertiary:active,.sbbtn--ol-tertiary:hover,.sbbtn--ol-warning:active,.sbbtn--ol-warning:hover,.sbmodal--warning .sbmodal__actions button:active:nth-child(2),.sbmodal--warning .sbmodal__actions button:active:nth-child(3),.sbmodal--warning .sbmodal__actions button:hover:nth-child(2),.sbmodal--warning .sbmodal__actions button:hover:nth-child(3){background:var(--tertiary-0);color:var(--tertiary-400);border-color:var(--tertiary-400)}.sbbtn--ol-error,.sbmodal--error .sbmodal__actions button:nth-child(2),.sbmodal--error .sbmodal__actions button:nth-child(3){background-color:var(--white);color:var(--red-400);color:var(--red-100);border-color:var(--red-100)}.sbbtn--ol-error:active,.sbbtn--ol-error:hover,.sbmodal--error .sbmodal__actions button:active:nth-child(2),.sbmodal--error .sbmodal__actions button:active:nth-child(3),.sbmodal--error .sbmodal__actions button:hover:nth-child(2),.sbmodal--error .sbmodal__actions button:hover:nth-child(3){background:var(--red-0);color:var(--red-400);border-color:var(--red-400)}.sbbtn--ol-gray{background-color:var(--white);color:var(--gray-800);color:var(--gray-300);border-color:var(--gray-300)}.sbbtn--ol-gray:active,.sbbtn--ol-gray:hover{background:var(--gray-0);color:var(--gray-800);border-color:var(--gray-800)}.sbbtn--ol-white{background-color:var(--white);color:var(--white);color:var(--primary-800);border-color:var(--white)}.sbbtn--ol-white:active,.sbbtn--ol-white:hover{background:var(--gray-0);color:var(--primary-800);border-color:var(--white)}.sbbtn--link-error,.sbbtn--link-gray,.sbbtn--link-info,.sbbtn--link-primary,.sbbtn--link-secondary,.sbbtn--link-success,.sbbtn--link-tertiary,.sbbtn--link-warning{background:0 0;border:0}.sbbtn--link-info,.sbbtn--link-primary{color:var(--primary-color)}.sbbtn--link-info:active,.sbbtn--link-info:hover,.sbbtn--link-primary:active,.sbbtn--link-primary:hover{background:var(--primary-100)}.sbbtn--link-secondary,.sbbtn--link-success{color:var(--secondary-200)}.sbbtn--link-secondary:active,.sbbtn--link-secondary:hover,.sbbtn--link-success:active,.sbbtn--link-success:hover{background:var(--secondary-0)}.sbbtn--link-tertiary,.sbbtn--link-warning{color:var(--tertiary-color)}.sbbtn--link-tertiary:active,.sbbtn--link-tertiary:hover,.sbbtn--link-warning:active,.sbbtn--link-warning:hover{background:var(--tertiary-0);border:0}.sbbtn--link-error{color:var(--red-400)}.sbbtn--link-error:active,.sbbtn--link-error:hover{background:var(--red-0)}.sbbtn--link-gray{color:var(--gray-800)}.sbbtn--link-gray:active,.sbbtn--link-gray:hover{background:var(--gray-0)}.sbbtn--link{background:0 0;border:0}.sbbtn--dashed{border-style:dashed;border-width:1px}.sbbtn--dashed-info,.sbbtn--dashed-primary{background-color:var(--white);border-color:var(--primary-400);color:var(--primary-400)}.sbbtn--dashed-info:active,.sbbtn--dashed-info:hover,.sbbtn--dashed-primary:active,.sbbtn--dashed-primary:hover{background-color:var(--primary-0)}.sbbtn--disabled,.sbbtn--error[disabled],.sbbtn--info[disabled],.sbbtn--primary[disabled],.sbbtn--secondary[disabled],.sbbtn--success[disabled],.sbbtn--tertiary[disabled],.sbbtn--warning[disabled],.sbmodal--error .sbmodal__actions button[disabled]:nth-child(1),.sbmodal--primary .sbmodal__actions button[disabled]:nth-child(1),.sbmodal--success .sbmodal__actions button[disabled]:nth-child(1),.sbmodal--warning .sbmodal__actions button[disabled]:nth-child(1){background-color:var(--gray-100);border:1px solid var(--gray-100);color:var(--gray-200);cursor:default}.sbbtn--ol-disabled,.sbbtn--ol-error[disabled],.sbbtn--ol-gray[disabled],.sbbtn--ol-info[disabled],.sbbtn--ol-primary[disabled],.sbbtn--ol-secondary[disabled],.sbbtn--ol-success[disabled],.sbbtn--ol-tertiary[disabled],.sbbtn--ol-warning[disabled],.sbmodal--error .sbmodal__actions button[disabled]:nth-child(2),.sbmodal--error .sbmodal__actions button[disabled]:nth-child(3),.sbmodal--primary .sbmodal__actions button[disabled]:nth-child(2),.sbmodal--primary .sbmodal__actions button[disabled]:nth-child(3),.sbmodal--success .sbmodal__actions button[disabled]:nth-child(2),.sbmodal--success .sbmodal__actions button[disabled]:nth-child(3),.sbmodal--warning .sbmodal__actions button[disabled]:nth-child(2),.sbmodal--warning .sbmodal__actions button[disabled]:nth-child(3){background-color:var(--white);border:1px solid var(--gray-100);color:var(--gray-100);cursor:default;font-weight:400}.sbbtn--download{transition:1.2s ease-in-out}.sbbtn--download i::after{content:\"\\f019\";font-size:13px;color:#fff}.sbbtn--download:hover{-webkit-animation:.2s 2 both pulse;animation:.2s 2 both pulse}.sbbtn--download.loading i{-webkit-animation:2s linear infinite loading;animation:2s linear infinite loading}.sbbtn--download.loading i::after{content:\"\\f1ce\"}.sbbtn--download.success i::after{content:\"\\f00c\";color:transparent;-webkit-animation:1s linear .6s both change-icon;animation:1s linear .6s both change-icon}.sb-btn-loading-spinner{padding:8px 16px 8px 8px}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}.loading-spinner{width:1rem;height:1rem;margin-right:8px;display:inline-block;vertical-align:text-bottom;border:.15em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:.75s linear infinite spinner-border;animation:.75s linear infinite spinner-border}.sb-btn-loading:before{position:absolute;content:\"\";top:50%;left:50%;margin:-.64285714em 0 0 -.64285714em;width:1.28571429em;height:1.28571429em;border-radius:500rem;border:.2em solid rgba(0,0,0,.15)}.sb-btn-loading:after{position:absolute;content:\"\";top:50%;left:50%;margin:-.64285714em 0 0 -.64285714em;width:1.28571429em;height:1.28571429em;-webkit-animation:.6s linear infinite button-spin;animation:.6s linear infinite button-spin;border-radius:500rem;border-color:#fff transparent transparent;border-style:solid;border-width:.2em;box-shadow:0 0 0 1px transparent}[dir=ltr] .sb-right-icon-btn{padding:8px 8px 8px 16px}[dir=ltr] .sb-right-icon-btn i.icon{margin-left:8px;margin-right:0}[dir=ltr] .sb-left-icon-btn{padding:8px 16px 8px 8px}[dir=ltr] .sb-left-icon-btn i.icon{margin-right:8px}[dir=rtl] .sb-right-icon-btn{padding:8px 8px 8px 16px}[dir=rtl] .sb-right-icon-btn i.icon{margin-left:0;margin-right:8px}[dir=rtl] .sb-left-icon-btn{padding:8px 16px 8px 8px}[dir=rtl] .sb-left-icon-btn i.icon{margin-left:8px}.sb-left-icon-btn{padding:0 8px}.ripple{position:relative;overflow:hidden;transform:translate3d(0,0,0)}.ripple:after{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0,0);opacity:.3;transition:none}@-webkit-keyframes loading{0%{transform:rotate(0)}100%{transform:rotate(359deg)}}@keyframes loading{0%{transform:rotate(0)}100%{transform:rotate(359deg)}}@-webkit-keyframes change-icon{0%{color:transparent}100%{color:#fff}}@keyframes change-icon{0%{color:transparent}100%{color:#fff}}@-webkit-keyframes pulse{from,to{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}}@keyframes pulse{from,to{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}}.sbmodal{margin:0 auto;position:fixed;z-index:1001;text-align:center;background:0 0;border:none;box-shadow:1px 3px 3px 0 rgba(0,0,0,.2),1px 3px 15px 2px rgba(0,0,0,.2);-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;border-radius:4px 4px 0 0;bottom:0;left:0;right:0;width:100%;-webkit-animation-fill-mode:inherit;animation-fill-mode:inherit}.sbmodal--overlay{background:rgba(0,0,0,.35);position:fixed;perspective:2000px;transform-origin:center center;opacity:1;overflow-y:auto;z-index:999;top:0;left:0;width:100%;height:100%;text-align:center;vertical-align:middle;line-height:1;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:.5s;animation-duration:.5s;transition:background-color .5s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:opacity}.sbmodal__header{background-color:var(--primary-400);color:var(--white);padding:calc(var(--base-block-space) * .5) calc(var(--base-block-space) * 2);border-bottom:0 solid var(--gray-100);min-height:40px;border-top-left-radius:4px;border-top-right-radius:4px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.sbmodal__header h4{margin:0;padding:0;font-weight:700;font-size:16.002px;flex:1}@media screen and (min-width:768px){.sbmodal{width:calc(100% - 16px);height:-webkit-min-content;height:-moz-min-content;height:min-content;border-radius:4px;top:50%;transform:translate(0,-50%);text-align:left}.sbmodal__header h4{flex:inherit}}.sbmodal__content{min-height:96px;padding:16px;overflow-y:auto;background:var(--white)}.sbmodal__actions{padding:8px 16px;background:var(--white);border-top:1px solid var(--gray-100);min-height:56px;display:flex;flex-direction:row-reverse;align-items:center;justify-content:center}.sbmodal__actions .sbbtn+.sbbtn{margin:0 8px 0 0!important}.sbmodal--sm{max-width:480px}.sbmodal--md{max-width:720px}.sbmodal--md .sbmodal__content{max-height:calc(100vh - 124px)}.sbmodal--md .sbmodal__content.o-y-visible{max-height:inherit}.sbmodal--lg{max-width:900px}.sbmodal--lg .sb-modal-content{max-height:calc(100vh - 124px)}.sbmodal--full{position:fixed;top:0;right:0;bottom:0;left:0;width:calc(100% - 16px);margin:0 auto!important;overflow-y:auto;overflow-x:hidden}.sbmodal--full .sbmodal__header{height:56px;width:auto;border-radius:0}.sbmodal--full .sbmodal__content{height:calc(100vh - 120px)}.sbmodal--full .close{position:relative}.sbmodal--isNotClosable .sbbtn-close{display:none}.sbmodal--primary .sbmodal__header{background-color:var(--primary-400)}.sbmodal--warning .sbmodal__header{background-color:var(--tertiary-100)}.sbmodal--success .sbmodal__header{background-color:var(--secondary-200)}.sbmodal--error .sbmodal__header{background-color:var(--red-400)}@media screen and (min-width:768px){.sbmodal__actions{justify-content:inherit;border-radius:0 0 4px 4px}.sbmodal--error .sbmodal__actions button:nth-child(3),.sbmodal--primary .sbmodal__actions button:nth-child(3),.sbmodal--success .sbmodal__actions button:nth-child(3),.sbmodal--warning .sbmodal__actions button:nth-child(3){margin-right:auto!important}}.sbicon{position:relative;top:1px;display:inline-block;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;opacity:.8}.sbicon--xs{width:var(--icon-svg-xs);height:var(--icon-svg-xs)}.sbicon--sm{width:var(--icon-svg-sm);height:var(--icon-svg-sm)}.sbicon--md{width:var(--icon-svg-md);height:var(--icon-svg-md)}.sbicon--lg{width:var(--icon-svg-lg);height:var(--icon-svg-lg)}.sbicon--xl{width:var(--icon-svg-xl);height:var(--icon-svg-xl)}.sbicon--white{fill:var(--white)}.sbicon--primary{fill:var(--primary-color)}.sbicon--secondary{fill:var(--secondary-color)}.sbicon--tertiary{fill:var(--tertiary-color)}.sbicon--red{fill:var(--red-400)}.sbicon--gray{fill:var(--gray-800)}"]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [];
ModalComponent.propDecorators = {
    title: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SbUiComponentsModule {
}
SbUiComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SbUiComponentsComponent, CardComponent, ModalComponent],
                imports: [],
                exports: [SbUiComponentsComponent, CardComponent, ModalComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SbUiComponentsService, SbUiComponentsComponent, SbUiComponentsModule, CardComponent, ModalComponent };

//# sourceMappingURL=sb-ui-components.js.map