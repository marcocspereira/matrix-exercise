(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{iYjF:function(t,e,n){"use strict";n.r(e),n.d(e,"GeneratorModule",function(){return C});var i=n("ofXK"),r=n("3Pt+"),o=n("tyNb"),s=n("lFOl"),a=n("4FMD"),c=n("quSY"),b=n("C3L6"),u=n("fXoL"),d=n("tKv7"),l=n("7l5q"),h=n("UxHo");const g=function(t){return{width:t}};function m(t,e){if(1&t&&(u.Lb(0,"div",18),u.Lb(1,"div",19),u.ic(2),u.Kb(),u.Kb()),2&t){const t=e.$implicit,n=u.Ub();u.yb(1),u.Zb("ngStyle",u.bc(2,g,100/n.matrixWidth+"%")),u.yb(1),u.kc(" ",t," ")}}function f(t,e){1&t&&(u.Lb(0,"div",20),u.ic(1," START GENERATING YOUR 2D GRID! "),u.Kb())}function p(t,e){if(1&t&&(u.Lb(0,"p"),u.ic(1),u.Kb()),2&t){const t=e.$implicit;u.yb(1),u.kc("- ",t,"")}}function x(t,e){if(1&t&&(u.Lb(0,"div",21),u.hc(1,p,2,1,"p",22),u.Kb()),2&t){const t=u.Ub();u.yb(1),u.Zb("ngForOf",t.errorMessages)}}const y=function(t,e){return{"is-success":t,"is-danger":e}},v=[{path:"",component:(()=>{class t{constructor(t){this._codeManager=t,this._subscription=new c.a,this.matrixWidth=0,this._subscribeCodeGenerationStatus(),this._subscribeMatrix(),this.jokerForm=this._createForm()}toggleStatus(){this.status=!this.status,this._codeManager.codeGenerationStatus=this.status}addJokerChar(){this._manageFormInvalidity()||(this._codeManager.jokerCharacter=this.jokerForm.controls.jokerChar.value,this._disableAddButton())}ngOnDestroy(){this._subscription.unsubscribe()}_createForm(){return new r.d({jokerChar:new r.b("",[r.m.maxLength(1),b.a.alphabetical])})}_subscribeMatrix(){this._subscription.add(this._codeManager.generatedCodeObservable$.subscribe(t=>{this.matrixChars=t.referenceMatrix.characters,this.code=t.code,this.matrixWidth=t.referenceMatrix.matrixDimensions.width}))}_subscribeCodeGenerationStatus(){this._subscription.add(this._codeManager.codeGenerationStatusObservable$.subscribe(t=>{this.status=t}))}_manageFormInvalidity(){return this.errorMessages=[],this.jokerForm.controls.jokerChar.hasError("maxlength")&&this.errorMessages.push("Only 1 char at time is allowed"),this.jokerForm.controls.jokerChar.hasError("invalidAlphabetical")&&this.errorMessages.push("Only a-z chars are allowed"),this.errorMessages.length>0}_disableAddButton(){document.getElementById("jokerSubmitButton").disabled=!0,setTimeout(function(){document.getElementById("jokerSubmitButton").disabled=!1},4e3)}}return t.\u0275fac=function(e){return new(e||t)(u.Ib(d.a))},t.\u0275cmp=u.Cb({type:t,selectors:[["app-generator"]],decls:25,vars:13,consts:[[1,"hero","is-small"],[1,"hero-body"],[1,"title"],[1,"subtitle"],[1,"card"],[1,"card-content"],[1,"content"],[1,"columns"],[1,"column","is-half","left-column"],[3,"formGroup","submit"],["formControlName","jokerChar",3,"label","placeholder"],["type","submit","id","jokerSubmitButton",1,"button","is-success","add-button"],[1,"column","is-half","right-column"],[1,"button",3,"ngClass","click"],["class","matrix-container",4,"ngFor","ngForOf"],["class","notification",4,"ngIf"],[1,"code-box",3,"status"],["class","notification is-danger",4,"ngIf"],[1,"matrix-container"],[1,"matrix-val",3,"ngStyle"],[1,"notification"],[1,"notification","is-danger"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(u.Lb(0,"section",0),u.Lb(1,"div",1),u.Lb(2,"p",2),u.ic(3,"Generator"),u.Kb(),u.Lb(4,"p",3),u.ic(5," It generates a code every 2 seconds. "),u.Jb(6,"br"),u.ic(7,"You can place a joker character with a weight of 20% that can be updated/removed after 4 seconds of the input. "),u.Kb(),u.Kb(),u.Kb(),u.Lb(8,"div",4),u.Lb(9,"div",5),u.Lb(10,"div",6),u.Lb(11,"div",7),u.Lb(12,"div",8),u.Lb(13,"form",9),u.Sb("submit",function(){return e.addJokerChar()}),u.Jb(14,"app-altar-input",10),u.Lb(15,"button",11),u.ic(16," + ADD "),u.Kb(),u.Kb(),u.Kb(),u.Lb(17,"div",12),u.Lb(18,"button",13),u.Sb("click",function(){return e.toggleStatus()}),u.ic(19),u.Kb(),u.Kb(),u.Kb(),u.hc(20,m,3,4,"div",14),u.hc(21,f,2,0,"div",15),u.Lb(22,"app-code-box",16),u.ic(23),u.Kb(),u.hc(24,x,2,1,"div",17),u.Kb(),u.Kb(),u.Kb()),2&t&&(u.yb(13),u.Zb("formGroup",e.jokerForm),u.yb(1),u.Zb("label","character")("placeholder","chr"),u.yb(4),u.Zb("ngClass",u.cc(10,y,!e.status,e.status)),u.yb(1),u.kc(" ",e.status?"STOP GENERATE 2D GRID":"START GENERATE 2D GRID"," "),u.yb(1),u.Zb("ngForOf",e.matrixChars),u.yb(1),u.Zb("ngIf",!e.matrixChars),u.yb(1),u.Zb("status",e.status),u.yb(1),u.jc(e.code),u.yb(1),u.Zb("ngIf",(null==e.errorMessages?null:e.errorMessages.length)>0))},directives:[r.n,r.i,r.e,l.a,r.h,r.c,i.i,i.j,i.k,h.a,i.l],styles:[".code-box[_ngcontent-%COMP%], .matrix-container[_ngcontent-%COMP%]{width:100%}.matrix-val[_ngcontent-%COMP%]{float:left;padding:10px;background-color:#1abc9c;color:#fff;text-align:center;border:1px solid #000}.left-column[_ngcontent-%COMP%]{text-align:left;padding:10px}.right-column[_ngcontent-%COMP%]{text-align:right}.input-box-label[_ngcontent-%COMP%]{line-height:40px;font-size:15px;padding-right:10px;font-weight:700}.input-box[_ngcontent-%COMP%]{width:20%;text-align:center}.notification[_ngcontent-%COMP%]{margin-top:20px}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.Gb({type:t}),t.\u0275inj=u.Fb({imports:[[i.b,o.b.forChild(v),a.a,s.a,r.k],o.b]}),t})()}}]);