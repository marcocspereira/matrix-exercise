(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cvkL:function(t,e,n){"use strict";n.r(e),n.d(e,"PaymentsModule",function(){return M});var i=n("ofXK"),a=n("3Pt+"),s=n("tyNb"),r=n("lFOl"),o=n("4FMD"),c=n("quSY"),b=n("C3L6"),h=n("fXoL"),u=n("tKv7"),d=n("XNiG");let m=(()=>{class t{constructor(){this._paymentData=new d.a,this.paymentDataObservable$=this._paymentData.asObservable()}persistCode(t){const e=JSON.parse(sessionStorage.getItem("paymentData"))||[];e.push(t),sessionStorage.setItem("paymentData",JSON.stringify(e))}destroyCodes(){sessionStorage.removeItem("paymentData"),this._paymentData.next([])}getCodes(){const t=JSON.parse(sessionStorage.getItem("paymentData"))||[];this._paymentData.next(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=h.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n("UxHo"),p=n("7l5q");function g(t,e){if(1&t){const t=h.Mb();h.Lb(0,"tr"),h.Lb(1,"td"),h.ic(2),h.Kb(),h.Lb(3,"td"),h.ic(4),h.Kb(),h.Lb(5,"td"),h.ic(6),h.Kb(),h.Lb(7,"td"),h.Lb(8,"button",25),h.Sb("click",function(){h.ec(t);const n=e.$implicit;return h.Ub().highlightChecksum(n)}),h.ic(9," + "),h.Kb(),h.Kb(),h.Kb()}if(2&t){const t=e.$implicit;h.yb(2),h.jc(t.name),h.yb(2),h.jc(t.amount),h.yb(2),h.jc(t.code)}}function y(t,e){1&t&&(h.Lb(0,"div",26),h.ic(1," GENERATE AND ADD SOME CODES! "),h.Kb())}function f(t,e){if(1&t&&(h.Lb(0,"p"),h.ic(1),h.Kb()),2&t){const t=e.$implicit;h.yb(1),h.kc("- ",t,"")}}function L(t,e){if(1&t&&(h.Lb(0,"div",27),h.hc(1,f,2,1,"p",13),h.Kb()),2&t){const t=h.Ub();h.yb(1),h.Zb("ngForOf",t.errorMessages)}}function K(t,e){if(1&t&&(h.Lb(0,"span"),h.ic(1),h.Kb()),2&t){const t=e.$implicit;h.yb(1),h.kc(" ",t," ")}}const k=function(t){return{"is-active":t}},C=[{path:"",component:(()=>{class t{constructor(t,e){this._codeManager=t,this._paymentManager=e,this._subscription=new c.a,this._subscribeCodeGenerationStatus(),this._subscribeMatrix(),this._subscribePaymentManager(),this._paymentManager.getCodes(),this.paymentForm=this.createForm()}createForm(){return new a.d({name:new a.b("",[a.m.required,b.a.alphanumeric]),amount:new a.b("",[a.m.required,b.a.numeric])},{updateOn:"change"})}addCode(){this._manageFormInvalidity()||(this._paymentManager.persistCode({name:this.paymentForm.controls.name.value,amount:this.paymentForm.controls.amount.value,code:this.code,matrix:this.matrix}),this._paymentManager.getCodes())}destroyCodes(){this._paymentManager.destroyCodes()}highlightChecksum(t){this.checksumHighlighted=t}hideChecksum(){this.checksumHighlighted=void 0}ngOnDestroy(){this._subscription.unsubscribe()}_subscribeMatrix(){this._subscription.add(this._codeManager.generatedCodeObservable$.subscribe(t=>{this.matrix=t.referenceMatrix,this.code=t.code}))}_subscribeCodeGenerationStatus(){this._subscription.add(this._codeManager.codeGenerationStatusObservable$.subscribe(t=>{this.status=t}))}_subscribePaymentManager(){this._subscription.add(this._paymentManager.paymentDataObservable$.subscribe(t=>{this.paymentData=t}))}_manageFormInvalidity(){return this.errorMessages=[],this.code||this.errorMessages.push("A code must be generated in Generator page"),this.paymentForm.controls.name.hasError("required")&&this.errorMessages.push("Name is required"),this.paymentForm.controls.name.hasError("invalidAlphanumeric")&&this.errorMessages.push("Name must be alphanumeric"),this.paymentForm.controls.amount.hasError("required")&&this.errorMessages.push("Amount is required"),this.paymentForm.controls.amount.hasError("invalidNumeric")&&this.errorMessages.push("Amount must be numeric"),this.errorMessages.length>0}}return t.\u0275fac=function(e){return new(e||t)(h.Ib(u.a),h.Ib(m))},t.\u0275cmp=h.Cb({type:t,selectors:[["app-payments"]],decls:59,vars:17,consts:[[1,"hero","is-small"],[1,"hero-body"],[1,"title"],[1,"subtitle"],[1,"card"],[1,"card-content"],[1,"content"],[1,"code-box",3,"status"],[3,"formGroup","submit"],["formControlName","name",3,"label","placeholder"],["formControlName","amount",3,"label","placeholder"],["type","submit",1,"button","is-success","add-button"],[1,"table","is-hoverable"],[4,"ngFor","ngForOf"],["class","notification",4,"ngIf"],[1,"button","is-danger","destroy-codes",3,"click"],["class","notification is-danger",4,"ngIf"],[1,"modal",3,"ngClass"],[1,"modal-background",3,"click"],[1,"modal-card"],[1,"modal-card-head"],[1,"modal-card-title"],[1,"modal-card-body"],[1,"modal-card-foot"],[1,"button",3,"click"],[1,"button","is-dark",3,"click"],[1,"notification"],[1,"notification","is-danger"]],template:function(t,e){1&t&&(h.Lb(0,"section",0),h.Lb(1,"div",1),h.Lb(2,"p",2),h.ic(3,"Payments"),h.Kb(),h.Lb(4,"p",3),h.ic(5," It displays the most recent code and allow to add new codes with a given name and amount. "),h.Jb(6,"br"),h.ic(7,"Since that also persists the source matrix, you can check the checksum for each entry. "),h.Kb(),h.Kb(),h.Kb(),h.Lb(8,"div",4),h.Lb(9,"div",5),h.Lb(10,"div",6),h.Lb(11,"app-code-box",7),h.ic(12),h.Kb(),h.Lb(13,"form",8),h.Sb("submit",function(){return e.addCode()}),h.Jb(14,"app-altar-input",9),h.Jb(15,"app-altar-input",10),h.Lb(16,"button",11),h.ic(17," + ADD "),h.Kb(),h.Jb(18,"br"),h.Kb(),h.Jb(19,"hr"),h.Lb(20,"table",12),h.Lb(21,"thead"),h.Lb(22,"tr"),h.Lb(23,"th"),h.ic(24,"PAYMENT NAME"),h.Kb(),h.Lb(25,"th"),h.ic(26,"AMOUNT"),h.Kb(),h.Lb(27,"th"),h.ic(28,"CODE"),h.Kb(),h.Lb(29,"th"),h.ic(30,"CHECKSUM"),h.Kb(),h.Kb(),h.Kb(),h.Lb(31,"tbody"),h.hc(32,g,10,3,"tr",13),h.Kb(),h.Kb(),h.hc(33,y,2,0,"div",14),h.Jb(34,"hr"),h.Lb(35,"button",15),h.Sb("click",function(){return e.destroyCodes()}),h.ic(36," DESTROY ALL CODES "),h.Kb(),h.hc(37,L,2,1,"div",16),h.Kb(),h.Kb(),h.Kb(),h.Lb(38,"div",17),h.Lb(39,"div",18),h.Sb("click",function(){return e.hideChecksum()}),h.Kb(),h.Lb(40,"div",19),h.Lb(41,"header",20),h.Lb(42,"p",21),h.ic(43),h.Kb(),h.Kb(),h.Lb(44,"section",22),h.Lb(45,"b"),h.ic(46,"Amount:"),h.Kb(),h.ic(47),h.Jb(48,"br"),h.Lb(49,"b"),h.ic(50,"Code:"),h.Kb(),h.ic(51),h.Jb(52,"br"),h.Lb(53,"b"),h.ic(54,"Matrix chars:"),h.Kb(),h.hc(55,K,2,1,"span",13),h.Kb(),h.Lb(56,"footer",23),h.Lb(57,"button",24),h.Sb("click",function(){return e.hideChecksum()}),h.ic(58,"Close"),h.Kb(),h.Kb(),h.Kb(),h.Kb()),2&t&&(h.yb(11),h.Zb("status",e.status),h.yb(1),h.jc(e.code),h.yb(1),h.Zb("formGroup",e.paymentForm),h.yb(1),h.Zb("label","payment")("placeholder","payment"),h.yb(1),h.Zb("label","amount")("placeholder","aumount"),h.yb(17),h.Zb("ngForOf",e.paymentData),h.yb(1),h.Zb("ngIf",!e.paymentData),h.yb(4),h.Zb("ngIf",(null==e.errorMessages?null:e.errorMessages.length)>0),h.yb(1),h.Zb("ngClass",h.bc(15,k,e.checksumHighlighted)),h.yb(5),h.jc(null==e.checksumHighlighted?null:e.checksumHighlighted.name),h.yb(4),h.kc(" ",null==e.checksumHighlighted?null:e.checksumHighlighted.amount,""),h.yb(4),h.kc(" ",null==e.checksumHighlighted?null:e.checksumHighlighted.code,""),h.yb(4),h.Zb("ngForOf",null==e.checksumHighlighted?null:e.checksumHighlighted.matrix._characters))},directives:[l.a,a.n,a.i,a.e,p.a,a.h,a.c,i.j,i.k,i.i],styles:[".input-box-label[_ngcontent-%COMP%]{line-height:40px;font-size:15px;padding-right:10px;font-weight:700}.notification[_ngcontent-%COMP%]{margin-top:90px}.destroy-codes[_ngcontent-%COMP%]{float:right}.input-box[_ngcontent-%COMP%]{width:10%;text-align:center}.code-box[_ngcontent-%COMP%]{padding-bottom:50px}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.Gb({type:t}),t.\u0275inj=h.Fb({imports:[[i.b,s.b.forChild(C),a.k,a.f,o.a,r.a],s.b]}),t})()}}]);