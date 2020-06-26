(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bf65792"],{"0bc6":function(e,t,n){},"2a72":function(e,t,n){"use strict";var c=n("dbfe"),s=n.n(c);s.a},"7a6f":function(e,t,n){"use strict";var c=n("d96c4"),s=n.n(c);s.a},bb51:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"deckselection"},[n("DeckSelection",{attrs:{decks:e.decks,numberOfSelectedDecks:e.numberOfSelectedDecks}})],1)},s=[],o=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DeckSelection"},[n("v-subheader",[e._v("Decks")]),e.decks.length>0?n("v-list",[n("v-list-item-group",{attrs:{multiple:"",color:"indigo"},model:{value:e.deckModel,callback:function(t){e.deckModel=t},expression:"deckModel"}},e._l(e.decks,(function(t){return n("v-list-item",{key:t.id,attrs:{value:t.id,id:t.id}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1),n("v-list-item-icon",{class:{hidden:0===e.numberOfSelectedDecks,visible:e.numberOfSelectedDecks>0}},[t.selected?n("v-icon",[e._v("mdi-check-box-outline")]):n("v-icon",[e._v("mdi-checkbox-blank-outline")])],1)],1)})),1)],1):n("p",{attrs:{id:"no-decks-yet-notice"}},[e._v(" You don't have any decks yet. You might want to add some by clicking on the button in the bottom right corner.")]),n("v-btn",{staticClass:"mx-2 btn-fixed-bottom-right-corner",attrs:{fab:"",dark:"",color:"indigo"},on:{click:e.onButtonClick}},[n("v-icon",{class:{"rotate-90":e.numberOfSelectedDecks>0},domProps:{textContent:e._s(0===e.numberOfSelectedDecks?"mdi-plus":"mdi-navigation")}})],1),n("DialogDeleteDecks",{ref:"confirmDelete",attrs:{numberOfSelectedDecks:e.numberOfSelectedDecks},on:{confirmed:e.deleteSelectedDecks}}),n("DialogDeckInfo",{ref:"info",attrs:{deck:e.selectedDeck}})],1)}),i=[],a=(n("4de4"),n("7db0"),n("4160"),n("caad"),n("d81d"),n("2532"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"400"},model:{value:e.showDeleteDialog,callback:function(t){e.showDeleteDialog=t},expression:"showDeleteDialog"}},[n("v-card",{attrs:{color:"#2e2e2e"}},[n("v-card-title",{staticClass:"headline"},[e._v("Delete Deck"+e._s(e.numberOfSelectedDecks>1?"s":"")+"?")]),n("v-card-text",{staticClass:"text-left"},[e._v(" Do you really want to delete the "+e._s(e.numberOfSelectedDecks>1?e.numberOfSelectedDecks+" ":"")+"selected deck"+e._s(e.numberOfSelectedDecks>1?"s":"")+"?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.showDeleteDialog=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.$emit("confirmed")}}},[e._v(" Delete ")])],1)],1)],1)}),l=[],r={name:"DialogDeleteDecks",props:{numberOfSelectedDecks:Number},data:function(){return{showDeleteDialog:!1}},methods:{hide:function(){this.showDeleteDialog=!1},show:function(){this.showDeleteDialog=!0}}},d=r,u=n("2877"),f=n("6544"),k=n.n(f),m=n("8336"),h=n("b0af"),v=n("99d9"),D=n("169a"),b=n("2fa4"),p=Object(u["a"])(d,a,l,!1,null,"03c85f76",null),_=p.exports;k()(p,{VBtn:m["a"],VCard:h["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDialog:D["a"],VSpacer:b["a"]});var g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"400"},model:{value:e.showInfo,callback:function(t){e.showInfo=t},expression:"showInfo"}},[n("v-card",{attrs:{color:"#2e2e2e"}},[n("v-card-title",{staticClass:"headline"},[e._v(e._s(e.deck?e.deck.name:""))]),e.deck?n("v-list",[e._l(e.fileInfos,(function(t){return n("v-list-item",{key:t.key},[n("v-list-item-content",[e._v(e._s(t.name))]),n("v-list-item-content",[e._v(e._s(e.deck.meta.file[t.key]||"-"))])],1)})),e._l(e.deckInfos,(function(t){return n("v-list-item",{key:t.key},[n("v-list-item-content",[e._v(e._s(t.name))]),n("v-list-item-content",[e._v(e._s(e.deck.meta.deck[t.key]||"-"))])],1)})),n("v-list-item",[n("v-list-item-content",[e._v("Number of Cards")]),n("v-list-item-content",[e._v(e._s(e.deck.cards.length))])],1)],2):e._e(),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.showInfo=!1}}},[e._v("Close")])],1)],1)],1)},w=[],S={name:"DialogDeckInfo",props:{deck:Object},data:function(){return{showInfo:!1,fileInfos:[{key:"author",name:"Author"}],deckInfos:[{key:"description",name:"Description"}]}},methods:{hide:function(){this.showInfo=!1},show:function(){this.showInfo=!0}}},C=S,I=(n("2a72"),n("8860")),V=n("da13"),O=n("5d23"),x=Object(u["a"])(C,g,w,!1,null,"dd16f88c",null),$=x.exports;k()(x,{VBtn:m["a"],VCard:h["a"],VCardActions:v["a"],VCardTitle:v["c"],VDialog:D["a"],VList:I["a"],VListItem:V["a"],VListItemContent:O["a"],VSpacer:b["a"]});var y={name:"DeckSelection",components:{DialogDeleteDecks:_,DialogDeckInfo:$},props:{decks:Array,numberOfSelectedDecks:Number},created:function(){var e=this;this.$eventHub.$on("askForConfirmationToDeleteSelectedDecks",(function(){e.$refs.confirmDelete&&e.$refs.confirmDelete.show()})),this.$eventHub.$on("showInfoForSelectedDeck",(function(){e.$refs.info&&e.$refs.info.show()}))},data:function(){return{showDeleteDialog:!1,showInfo:!1}},computed:{deckModel:{get:function(){return this.decks.map((function(e){return e.selected?e.id:void 0})).filter((function(e){return void 0!==e}))},set:function(e){this.decks.forEach((function(t){t.selected=e.includes(t.id)}))}},selectedDeck:function(){var e=this;return 1!==this.deckModel.length?null:this.decks.find((function(t){return t.id===e.deckModel[0]}))}},methods:{onButtonClick:function(){0===this.numberOfSelectedDecks?this.$router.push("add"):this.$router.push("learn")},deleteSelectedDecks:function(){this.$refs.confirmDelete.hide(),this.$eventHub.$emit("deleteDecks",this.deckModel)}}},L=y,j=(n("7a6f"),n("132d")),M=n("1baa"),B=n("34c3"),A=n("e0c7"),E=Object(u["a"])(L,o,i,!1,null,"22474a87",null),T=E.exports;k()(E,{VBtn:m["a"],VIcon:j["a"],VList:I["a"],VListItem:V["a"],VListItemContent:O["a"],VListItemGroup:M["a"],VListItemIcon:B["a"],VListItemTitle:O["b"],VSubheader:A["a"]});var H={name:"Home",props:{decks:Array,numberOfSelectedDecks:Number},computed:{},components:{DeckSelection:T}},N=H,F=Object(u["a"])(N,c,s,!1,null,null,null);t["default"]=F.exports},d96c4:function(e,t,n){},dbfe:function(e,t,n){},e0c7:function(e,t,n){"use strict";var c=n("5530"),s=(n("0bc6"),n("7560")),o=n("58df");t["a"]=Object(o["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(e){return e("div",{staticClass:"v-subheader",class:Object(c["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-5bf65792.801d5df7.js.map