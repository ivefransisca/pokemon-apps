(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{82:function(t,n,e){},95:function(t,n,e){"use strict";e.r(n);var r=e(3),a=e(2),o=e.n(a),i=e(73),c=e.n(i),s=(e(82),e(30)),u=e(13),l=e(31),d=e(32),b=e(25),j=o.a.createContext(),p=function(t){var n="SET_POKEMONLIST",e="ADD_MYPOKEMON",o="RELEASE_MYPOKEMON",i="SET_ACTIVEPOKEMON",c="SET_ALLSTATEDATA";var s=Object(a.useReducer)((function(t,r){switch(r.type){case n:return Object(b.a)(Object(b.a)({},t),{},{pokemonList:r.value});case e:var a=Object(d.a)(t.pokemonList).map((function(t){return t.name===r.value.name?Object.assign({},t,{count:t.count+1}):t}));return Object(b.a)(Object(b.a)({},t),{},{myPokemonList:t.myPokemonList.concat(r.value),activePokemon:[],pokemonList:a});case o:var s=Object(d.a)(t.pokemonList).map((function(t){return t.name===r.value.name?Object.assign({},t,{count:t.count-1}):t})),u=t.myPokemonList.filter((function(t){return t.nickname!==r.value.nickname}));return Object(b.a)(Object(b.a)({},t),{},{myPokemonList:u,pokemonList:s});case i:return Object(b.a)(Object(b.a)({},t),{},{activePokemon:r.value});case c:return r.value;default:throw new Error}}),{pokemonList:[],myPokemonList:[],activePokemon:{},count:0}),u=Object(l.a)(s,2),p=u[0],m=u[1],f={allStateData:p,myPokemon:p.myPokemonList,activePokemon:p.activePokemon,pokemonList:p.pokemonList,setAllStateData:function(t){m({type:c,value:t})},setPokemonList:function(t){m({type:n,value:t})},addMyPokemon:function(t){m({type:e,value:t})},releaseMyPokemon:function(t){m({type:o,value:t})},setActivePokemon:function(t){m({type:i,value:t})}};return Object(r.jsx)(j.Provider,{value:f,children:t.children})},m=e(5),f=e(6);function x(){var t=Object(m.a)(['\n\t\tfont-size: 20px;\n\t\tmargin-top: 0px;\n\t\tmargin-bottom: 20px;\n\t\tcolor: #3d7dca ;\n\t\ttext-align: center;\n\t\ttext-transform: capitalize;\n\t\t&:after{\n\t\t\tcontent: "";\n\t\t\twidth: 60px;\n\t\t\tmargin: auto;\n\t\t\tbackground: linear-gradient(165.7deg , #20FDF0 4.24%, #94AAF9 86.78%);\n\t\t\theight: 3px;\n\t\t\tdisplay: block;\n\t\t\tmargin-top: 5px;\n\t\t}\n\t']);return x=function(){return t},t}function O(){var t=Object(m.a)(["\n\t\tpadding: 15px 10px;\n\t"]);return O=function(){return t},t}var h=function(t){var n=Object(f.a)("div")(O()),e=Object(f.a)("h4")(x());return Object(r.jsxs)(n,{children:[Object(r.jsx)(e,{children:Object(r.jsx)("span",{"data-testid":"page-title",children:t.title})}),t.children]})},g=e(24);function v(){var t=Object(m.a)(["\n\t\ttext-transform: capitalize;\n\t\tmargin-top: 0px;\n\t\tmargin-bottom: 0px;\n\t\tcolor: #b7b7b7;\n\t\tfont-size: 12px;\n\t\tfont-weight: 400;\n\t\tmargin-bottom: 5px;\n\t"]);return v=function(){return t},t}function k(){var t=Object(m.a)(["\n\t\tbackground: linear-gradient(160deg , #20FDF0 1.24%, #94AAF9 93.78%);\n\t\tborder: none;\n\t\tborder-radius: 30px;\n\t\tpadding: 6px 25px;\n\t\tmargin: 5px;\n\t\tcolor: white;\n\t\tcursor: pointer;\n\t\ttransition: 0.25s ease-in-out;\n\t\tdisplay: block;\n\t\tmargin: auto;\n\t\t&:hover{\n\t\t\tbackground: linear-gradient(320deg , #20FDF0 1.24%, #94AAF9 93.78%);\n\t\t}\n\t\t&:focus{\n\t\t\toutline: none;\n\t\t}\n\t"]);return k=function(){return t},t}function w(){var t=Object(m.a)(["\n\t\ttext-transform: capitalize;\n\t\tmargin-top: 0px;\n\t\tmargin-bottom: 0px;\n\t\tcolor: #3d7dca ;\n\t"]);return w=function(){return t},t}function y(){var t=Object(m.a)(["\n\t\tpadding: 10px;\n\t\ttext-align: center;\n\t\tborder-radius: 15px;\n\t\tbackground: white;\n\t\tborder: none;\n\t\tposition: relative;\n\t\tmargin: 0px 10px 15px;\n\t\ttransition: 0.25s ease-in-out;\n\t\t&:hover{\n\t\t\tbackground: linear-gradient(180deg, #FFFFFF 57.29%, #BAFBFF 100%);\n\t\t\tcursor: pointer;\n\t\t}\n\t\t&.mypokemon-card{\n\t\t\t&:hover{\n\t\t\t\tcursor: auto;\n\t\t\t\tbackground: white;\n\t\t\t}\n\t\t}\n\t"]);return y=function(){return t},t}function P(){var t=Object(m.a)(['\n\t\tposition: absolute;\n\t\tright: 5px;\n\t\ttop: 5px;\n\t\tborder-radius: 25px;\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\ttext-align: center;\n\t\tborder: 2px solid #f1f1f1;\n\t\t&:before{\n\t\t\tcontent: "";\n\t\t\twidth: 30px;\n\t\t\theight: 15px;\n\t\t\tbackground-color: white;\n\t\t\tposition: absolute;\n\t\t\tborder-radius: 0 0 200px 200px;\n\t\t\tleft: 0;\n\t\t\tbottom: 0;\n\t\t}\n\t\t&:after{\n\t\t\tcontent: "";\n\t\t\twidth: 30px;\n\t\t\theight: 15px;\n\t\t\tbackground-color: #FF0000;\n\t\t\tposition: absolute;\n\t\t\tborder-radius: 0 0 200px 200px;\n\t\t\tleft: 0;\n\t\t\ttop: 0;\n\t\t\ttransform: rotate(180deg);\n\t\t}\n\t\t&>span{\n\t\t\tfont-size: 12px;\n\t\t\tbackground: #ddd;\n\t\t\tcolor: #3d7dca;\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\tfont-weight: bold;\n\t\t\twidth: 20px;\n\t\t\theight: 20px;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\ttransform: translateX(-50%) translateY(-50%);\n\t\t\tborder-radius: 50%;\n\t\t\tline-height: 20px;\n\t\t}\n\t']);return P=function(){return t},t}var F=function(t){var n=Object(a.useContext)(j),e=Object(f.a)("div")(P()),o=Object(f.a)("div")(y()),i=Object(f.a)("h4")(w()),c=Object(f.a)("button")(k()),s=Object(f.a)("h5")(v());return Object(r.jsxs)(o,{className:t.data.nickname&&"mypokemon-card",children:[Object(r.jsx)("img",{src:t.data.image,alt:"".concat(t.data.name," Icon")}),t.data.nickname?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{children:t.data.nickname}),Object(r.jsx)(s,{children:t.data.name}),Object(r.jsx)(c,{"data-testid":"release",onClick:function(){return e=t.data.nickname,r=t.data.name,void n.releaseMyPokemon({nickname:e,name:r});var e,r},children:"Release Me"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{children:t.data.name}),Object(r.jsx)(e,{children:Object(r.jsx)("span",{children:t.data.count})})]})]})};function A(){var t=Object(m.a)(["query pokemons($limit: Int, $offset: Int) {\n\t\tpokemons(limit: $limit, offset: $offset) {\n\t\tcount\n\t\tnext\n\t\tprevious\n\t\tstatus\n\t\tmessage\n\t\tresults {\n\t\t\turl\n\t\t\tname\n\t\t\timage\n\t\t}\n\t\t}\n\t}"]);return A=function(){return t},t}function L(){var t=Object(m.a)(["\n\t\tdisplay: block;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\twidth: 100%;\n\t\tpadding: 0px;\n\t\t&:focus{\n\t\t\toutline: none;\n\t\t}\n\t"]);return L=function(){return t},t}function S(){var t=Object(m.a)(["\n\t\t-webkit-box-flex: 0;\n\t\t-ms-flex: 0 0 50%;\n\t\tflex: 0 0 50%;\n\t\tmax-width: 50%;\n\t\t& > a{\n\t\t\ttext-decoration: none;\n\t\t}\n\t"]);return S=function(){return t},t}var C=function(){var t=Object(u.f)(),n=Object(a.useContext)(j),e=function(e){n.setActivePokemon(e),t.push("/".concat(e.name))},o=Object(f.a)("div")(S()),i=Object(f.a)("button")(L()),c=Object(g.gql)(A()),s=Object(g.useQuery)(c,{limit:2,offset:1}),l=s.loading,b=s.error,p=s.data;return Object(a.useEffect)((function(){if(n.pokemonList.length<=0&&p){var t=Object(d.a)(p.pokemons.results).map((function(t){return Object.assign({},t,{count:0})}));n.setPokemonList(t)}}),[p,n]),console.log(p),l?Object(r.jsx)("p",{children:"Loading..."}):b?Object(r.jsx)("p",{children:"Error :("}):Object(r.jsx)(j.Consumer,{children:function(t){return t.pokemonList.map((function(t){return Object(r.jsx)(o,{children:Object(r.jsx)(i,{onClick:function(){return e(t)},children:Object(r.jsx)(F,{data:t})})},t.name)}))}})};function E(){var t=Object(m.a)(["\n\t\tdisplay: flex;\n\t\t-ms-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t"]);return E=function(){return t},t}var D=function(){var t=Object(f.a)("div")(E());return Object(r.jsx)(h,{title:"Pokemon List",children:Object(r.jsx)(t,{children:Object(r.jsx)(C,{})})})};function M(){var t=Object(m.a)(["\n\t\tfont-size: 11px;\n\t\tfont-style: italic;\n\t\tcolor: red;\n\t"]);return M=function(){return t},t}function z(){var t=Object(m.a)(["\n\t\tbackground: linear-gradient(160deg , #20FDF0 1.24%, #94AAF9 93.78%);\n\t\tborder: none;\n\t\tborder-radius: 30px;\n\t\tpadding: 6px 25px;\n\t\tmargin: 5px;\n\t\tcolor: white;\n\t\tcursor: pointer;\n\t\ttransition: 0.25s ease-in-out;\n\t\tdisplay: block;\n\t\tmargin: auto;\n\t\tposition: relative;\n\t\t&:hover{\n\t\t\tbackground: linear-gradient(320deg , #20FDF0 1.24%, #94AAF9 93.78%);\n\t\t}\n\t\t&:focus{\n\t\t\toutline: none;\n\t\t}\n\t"]);return z=function(){return t},t}var N=function(){var t=Object(a.useState)(""),n=Object(l.a)(t,2),e=n[0],o=n[1],i=Object(a.useState)(""),c=Object(l.a)(i,2),s=c[0],p=c[1],m=Object(a.useContext)(j),x=Object(u.f)(),O=Object(f.a)("button")(z()),h=Object(f.a)("span")(M());return Object(r.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),Object(d.a)(m.myPokemon).filter((function(t){return t.nickname===e})).length>=1)p(!0);else{var n=Object(b.a)({},m.activePokemon);n.nickname=e,m.addMyPokemon(n),x.push("/my-pokemon")}},children:[Object(r.jsx)("label",{children:"Gotcha, give me a name!"}),Object(r.jsx)("input",{type:"text",onChange:function(t){o(t.currentTarget.value)},"data-testid":"input-nickname",value:e,style:{padding:"10px",border:"1px solid #3d7dca",color:"#3d7dca",margin:"10px 0px",width:"100%",borderRadius:"5px",boxSizing:"border-box"}}),s&&Object(r.jsx)(h,{children:"Nickname sudah terdaftar!"}),Object(r.jsx)(O,{type:"submit",children:"Submit"})]})};function T(){var t=Object(m.a)(["\n\t\ttext-align: center;\n\t\ttext-transform: capitalize;\n\t\tcolor: #3d7dca;\n\t\tmargin-top: 20px;\n\t"]);return T=function(){return t},t}function I(){var t=Object(m.a)(["\n\t\tposition: relative;\n\t\t& > img{\n\t\t\tposition: absolute;\n\t\t\ttop: -70px;\n\t\t\tleft: 50%;\n\t\t\ttransform: translateX(-50%) scale(1.5);\n\t\t}\n\t"]);return I=function(){return t},t}function W(){var t=Object(m.a)(["\n\t\tpadding: 20px;\n\t"]);return W=function(){return t},t}function R(){var t=Object(m.a)(["\n\t\tz-index: 1000;\n\t\tposition: absolute;\n\t\ttop: 42%;\n\t\tleft: 50%;\n\t\twidth: 280px;\n\t\tmax-width: 100%;\n\t\tmin-height: 100px;\n\t\tborder-radius: 10px;\n\t\ttransform: translate(-50%, -50%);\n\t\tbackground: #fff;\n\t"]);return R=function(){return t},t}function $(){var t=Object(m.a)(["\n\t\tz-index: 999;\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground: rgba(0,0,0,0.3);\n\t"]);return $=function(){return t},t}var q=function(t){var n=Object(f.a)("div")($()),e=Object(f.a)("div")(R()),o=Object(f.a)("div")(W()),i=Object(f.a)("div")(I()),c=Object(f.a)("h3")(T());return Object(r.jsx)(j.Consumer,{children:function(s){return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsxs)(e,{children:[Object(r.jsx)(i,{children:Object(r.jsx)("img",{src:s.activePokemon.image,alt:""})}),Object(r.jsxs)(o,{children:[Object(r.jsx)(c,{children:s.activePokemon.name}),Object(r.jsx)(N,{})]})]}),Object(r.jsx)(n,{onClick:t.closeModal})]})}})};function B(){var t=Object(m.a)(["\n\t\tdisplay: inline-block;\n\t\tmargin-right: 5px;\n\t\tcolor: white;\n\t\tbackground: white;\n\t\tpadding: 3px 10px;\n\t\tborder-radius: 20px;\n\t\tfont-size: 12px;\n\t\tline-height: 1.2;\n\t\tcolor: #3d7dca;\n\t\ttext-transform: capitalize;\n\t"]);return B=function(){return t},t}function _(){var t=Object(m.a)(["\n\t\tmargin-bottom: 0px;\n\t\tlist-style: none;\n\t\tpadding-left: 0px;\n\t"]);return _=function(){return t},t}function J(){var t=Object(m.a)(["\n\t\tmargin-bottom: 15px;\n\t\ttext-align: center;\n\t\t@media (min-width: 768px) {\n\t\t\ttext-align: left;\n\t\t\tflex-basis: 180px;\n\t\t\t&.moves{\n\t\t\t\tflex-basis: calc(100% - 180px);\n\t\t\t}\n\t\t}\n\t"]);return J=function(){return t},t}function K(){var t=Object(m.a)(["\n\t\tfont-size: 14px;\n\t\tmargin-top: 30px;\n\t\tmargin-bottom: 10px;\n\t\tcolor: #2f4f4f ;\n\t\ttext-transform: capitalize;\n\t"]);return K=function(){return t},t}var U=function(t){var n=Object(f.a)("h5")(K()),e=Object(f.a)("div")(J()),a=Object(f.a)("ul")(_()),o=Object(f.a)("li")(B());return Object(r.jsx)(e,{className:"moves"===t.name&&"moves",children:Object(r.jsxs)(a,{children:[Object(r.jsx)(n,{children:t.title}),"types"===t.name?t.data.map((function(t){return Object(r.jsx)(o,{children:t.type.name},t.type.name)})):t.data.map((function(t){return Object(r.jsx)(o,{children:t.move.name},t.move.name)}))]})})};function Y(){var t=Object(m.a)(["\n\t\tbackground: linear-gradient(160deg , #20FDF0 1.24%, #94AAF9 93.78%);\n\t\tborder: none;\n\t\tborder-radius: 30px;\n\t\tpadding: 6px 25px;\n\t\tmargin: 5px;\n\t\tcolor: white;\n\t\tcursor: pointer;\n\t\ttransition: 0.25s ease-in-out;\n\t\tdisplay: block;\n\t\tmargin: auto;\n\t\tposition: relative;\n\t\t&:hover{\n\t\t\tbackground: linear-gradient(320deg , #20FDF0 1.24%, #94AAF9 93.78%);\n\t\t}\n\t\t&:focus{\n\t\t\toutline: none;\n\t\t}\n\t"]);return Y=function(){return t},t}var Q=function(t){var n=Object(f.a)("button")(Y());return Object(r.jsx)(n,{"data-testid":"random-button",onClick:function(){var n=Math.random()<.5;t.getRandom(n)},children:"Catch Me!"})};function X(){var t=Object(m.a)(["query pokemon($name: String!) {\n\t\tpokemon(name: $name) {\n\t\t\tid\n\t\t\tname\n\t\t\tabilities {\n\t\t\t\tability {\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\tmoves {\n\t\t\t\tmove {\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\ttypes {\n\t\t\t\ttype {\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\tmessage\n\t\t\tstatus\n\t\t}\n\t}"]);return X=function(){return t},t}function G(){var t=Object(m.a)(["\n\t\twidth: 180px;\n\t\theight: 180px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tmargin: auto;\n\t\t&>img{\n\t\t\ttransform: scale(2.0);\n\t\t}\n\t"]);return G=function(){return t},t}function V(){var t=Object(m.a)(["\n\t\tmargin: 0px 20px;\n\t\ttext-align: center;\n\t"]);return V=function(){return t},t}var H=function(){var t=Object(u.g)().pokemonName,n=Object(a.useState)(!1),e=Object(l.a)(n,2),o=e[0],i=e[1],c=Object(a.useState)(!1),s=Object(l.a)(c,2),d=s[0],b=s[1],p=Object(f.a)("div")(V()),m=Object(f.a)("div")(G()),x={name:t},O=Object(g.gql)(X()),v=Object(g.useQuery)(O,{variables:x}),k=v.loading,w=v.error,y=v.data;if(k)return Object(r.jsx)(h,{children:"Loading..."});if(w)return Object(r.jsx)(h,{children:"Error :("});var P=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{title:"Pokemon Types",data:y.pokemon.types,name:"types"}),Object(r.jsx)(U,{title:"Pokemon Moves",data:y.pokemon.moves,name:"moves"})]})},F=function(){b(!1)};return Object(r.jsx)(h,{title:t,children:Object(r.jsxs)(p,{children:[Object(r.jsx)(j.Consumer,{children:function(t){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{children:Object(r.jsx)("img",{src:t.activePokemon.image,alt:t.activePokemon.name})}),o&&d&&Object(r.jsx)(q,{closeModal:F})]})}}),Object(r.jsx)(Q,{getRandom:function(t){return function(t){i(t),t&&b(!0)}(t)}}),Object(r.jsx)(P,{})]})})};function Z(){var t=Object(m.a)(["\n\t\t-webkit-box-flex: 0;\n\t\t-ms-flex: 0 0 50%;\n\t\tflex: 0 0 50%;\n\t\tmax-width: 50%;\n\t\t& > a{\n\t\t\ttext-decoration: none;\n\t\t}\n\t"]);return Z=function(){return t},t}function tt(){var t=Object(m.a)(["\n\t\tdisplay: flex;\n\t\t-ms-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t"]);return tt=function(){return t},t}var nt=function(){var t=Object(f.a)("div")(tt()),n=Object(f.a)("div")(Z());return Object(r.jsx)(j.Consumer,{children:function(e){return Object(r.jsx)(h,{title:"My Pokemon",children:Object(r.jsx)(t,{children:e.myPokemon.map((function(t,e){return Object(r.jsx)(n,{children:Object(r.jsx)(F,{data:t})},e)}))})})}})},et=e(57),rt=e(58);function at(){var t=Object(m.a)(["\n\t\tmargin-left: 10px;\n\t"]);return at=function(){return t},t}function ot(){var t=Object(m.a)(["\n\t\t-webkit-box-flex: 0;\n\t\t-ms-flex: 0 0 50%;\n\t\tflex: 0 0 50%;\n\t\tmax-width: 50%;\n\t\ttext-align: center;\n\t\tpadding: 15px 0px;\n\t\t& > a{\n\t\t\ttext-decoration: none;\n\t\t\tcolor: white;\n\t\t\tfont-weight: 500;\n\t\t\tdisplay: block;\n\t\t}\n\t\t&:last-child{\n\t\t\tbox-sizing: border-box;\n\t\t\tborder-left: 1px solid white;\n\t\t}\n\t"]);return ot=function(){return t},t}function it(){var t=Object(m.a)(["\n\t\tdisplay: flex;\n\t\t-ms-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t\t// margin-right: -15px;\n\t\t// margin-left: -15px;\n\t"]);return it=function(){return t},t}function ct(){var t=Object(m.a)(["\n\t\tposition: fixed;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tz-index: 1030;\n\t\tbackground: white;\n\t\tbox-shadow: 0px -2px 15px rgba(0,0,0,0.25);\n\t\tbackground: #3d7dca;\n\t\tcolor: white;\n\t"]);return ct=function(){return t},t}var st=function(){var t=Object(f.a)("div")(ct()),n=Object(f.a)("div")(it()),e=Object(f.a)("div")(ot()),a=Object(f.a)("span")(at());return Object(r.jsx)(t,{children:Object(r.jsxs)(n,{children:[Object(r.jsx)(e,{children:Object(r.jsxs)(s.b,{to:"/","data-testid":"pokemon-list-link",children:[Object(r.jsx)(et.a,{className:"mr-2",icon:rt.a}),Object(r.jsx)(a,{children:"Pokemon List"})]})}),Object(r.jsx)(e,{children:Object(r.jsxs)(s.b,{to:"/my-pokemon","data-testid":"my-pokemon-link",children:[Object(r.jsx)(et.a,{className:"mr-2",icon:rt.b}),Object(r.jsx)(a,{children:"My Pokemon"})]})})]})})};function ut(){var t=Object(m.a)(["\n\t\tmargin-bottom: 50px;\n\t\tmin-height: 100vh;\n\t\tbackground: rgba(255, 255,255,0.9);\n\t\t@media (min-width: 768px) {\n\t\t\tmax-width: 600px;\n\t\t\tmargin: auto;\n\t\t\tmargin-bottom: 50px;\n\t\t}\n\t"]);return ut=function(){return t},t}var lt=function(t){var n=Object(a.useContext)(j);Object(a.useEffect)((function(){if(sessionStorage.getItem("allStateData")){var t=JSON.parse(sessionStorage.getItem("allStateData"));t.pokemonList&&n.setAllStateData(t)}}),[]),Object(a.useEffect)((function(){sessionStorage.setItem("allStateData",JSON.stringify(n.allStateData))}),[n]);var e=Object(f.a)("div")(ut());return Object(r.jsx)(e,{children:t.children})},dt=function(){return Object(r.jsx)(p,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)(lt,{children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",children:Object(r.jsx)(D,{"data-testid":"pokemon-list"})}),Object(r.jsx)(u.a,{path:"/my-pokemon",children:Object(r.jsx)(nt,{"data-testid":"my-pokemon"})}),Object(r.jsx)(u.a,{path:"/:pokemonName",children:Object(r.jsx)(H,{"data-testid":"pokemon-detail"})})]})}),Object(r.jsx)(st,{})]})})},bt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function jt(t,n){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(t)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var pt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,97)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,i=n.getTTFB;e(t),r(t),a(t),o(t),i(t)}))},mt=new g.ApolloClient({uri:"https://graphql-pokeapi.vercel.app/api/graphql",cache:new g.InMemoryCache});c.a.render(Object(r.jsx)(g.ApolloProvider,{client:mt,children:Object(r.jsx)(dt,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/pokemon-apps",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/pokemon-apps","/service-worker.js");bt?(!function(t,n){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(e){var r=e.headers.get("content-type");404===e.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):jt(t,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):jt(n,t)}))}}(),pt()}},[[95,1,2]]]);
//# sourceMappingURL=main.cb779cca.chunk.js.map