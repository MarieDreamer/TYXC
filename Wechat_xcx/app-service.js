	var __wxAppData = {}; 	var __wxRoute; 	var __wxRouteBegin; 	var __wxAppCode__ = {};	var global = {};	var __wxAppCurrentFile__; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.6vv_20180522_fbi*/global.__wcc_version__='v0.6vv_20180522_fbi';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};
if(typeof __WXML_GLOBAL__ === 'undefined') __WXML_GLOBAL__={};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if("undefined"!==typeof debugInfo)
e.stack += "\n "+" "+" "+" at "+debugInfo[g.opindex][0]+":"+debugInfo[g.opindex][1]+":"+debugInfo[g.opindex][2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
return rev;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
if ( !__WXML_GLOBAL__.ops_init.$gwx){
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'activity-section']);Z([1,false]);Z(z[1]);Z([[2,'>'],[[6],[[7],[3,'specialList']],[3,'length']],[1,0]]);Z([[7],[3,'isAllGroup']]);Z([3,'activity-group-list']);Z([[2,'>'],[[6],[[7],[3,'allActivityGroup']],[3,'length']],[1,0]]);Z([[7],[3,'showLoadingImg']]);Z(z[5]);Z([[2,'>'],[[6],[[7],[3,'myActivityGroup']],[3,'length']],[1,0]]);Z([[7],[3,'showLoadingImgMy']]);Z([[7],[3,'show']]);Z([3,'bless']);Z([3,'bless-main']);Z([a,[3,'bm-tabs '],[[2,'?:'],[[7],[3,'tabsFix']],[1,'bm-tabs-fixed'],[1,'']]]);Z([3,'switchTab']);Z([a,[3,'bm-tab '],[[2,'?:'],[[2,'==='],[[7],[3,'currentTab']],[1,'events']],[1,'bm-tab-active'],[1,'']]]);Z([3,'events']);Z([[2,'==='],[[7],[3,'currentTab']],[1,'events']]);Z(z[15]);Z([a,z[16][1],[[2,'?:'],[[2,'==='],[[7],[3,'currentTab']],[1,'ranking']],[1,'bm-tab-active'],[1,'']]]);Z([3,'ranking']);Z([[2,'==='],[[7],[3,'currentTab']],[1,'ranking']]);Z([3,'bm-content']);Z(z[18]);Z([3,'bm-events']);Z([[2,'||'],[[2,'!='],[[6],[[7],[3,'colLeft']],[3,'length']],[1,0]],[[2,'!='],[[6],[[7],[3,'colRight']],[3,'length']],[1,0]]]);Z([[7],[3,'colLeft']]);Z([3,'bm-events-item']);Z([[2,'?:'],[[2,'==='],[[7],[3,'index']],[1,0]],[1,'margin-top:0'],[1,'']]);Z([3,'bm-ei-thumb']);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'userid']],[[7],[3,'userId']]]);Z(z[31]);Z([3,'bm-ei-board']);Z([3,'bm-ei-borad-options']);Z(z[31]);Z([3,'bm-ei-bo-like']);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'myBlessCountAtThisUser']],[1,1]]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'myBlessCountAtThisUser']],[1,0]]);Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'blesses']],[3,'length']],[1,0]]);Z(z[26]);Z([[7],[3,'colRight']]);Z([3,'bm-events-item ']);Z(z[29]);Z(z[30]);Z(z[31]);Z(z[31]);Z(z[33]);Z(z[34]);Z(z[31]);Z(z[36]);Z(z[37]);Z(z[38]);Z(z[39]);Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'colLeft']],[3,'length']],[1,0]],[[2,'==='],[[6],[[7],[3,'colRight']],[3,'length']],[1,0]]]);Z(z[22]);Z([3,'bm-ranking']);Z([[2,'==='],[[6],[[7],[3,'ranking']],[3,'length']],[1,0]]);Z([3,'bm-rl-item bm-rank-myself-bouns']);Z([[2,'<'],[[6],[[7],[3,'myRanking']],[3,'mySelfOrder']],[1,0]]);Z([[2,'>'],[[6],[[7],[3,'myRanking']],[3,'mySelfOrder']],[1,0]]);Z(z[60]);Z(z[59]);Z([[7],[3,'activityRules']]);Z([3,'bless-detail']);Z([3,'bd-content']);Z([[2,'>'],[[6],[[6],[[7],[3,'detail']],[3,'pictureRecords']],[3,'length']],[1,1]]);Z([3,'bd-content-img']);Z(z[1]);Z([[2,'>'],[[6],[[6],[[7],[3,'detail']],[3,'pictureRecords']],[3,'length']],[1,0]]);Z(z[69]);Z(z[1]);Z([[2,'>'],[[6],[[7],[3,'myBlessing']],[3,'length']],[1,0]]);Z([[7],[3,'commentsList']]);Z([[2,'>'],[[6],[[7],[3,'commentsList']],[3,'length']],[1,0]]);Z([3,'bd-ci-info-name']);Z([[2,'!='],[[6],[[7],[3,'item']],[3,'ceduserid']],[1,10]]);Z(z[76]);Z([3,'bd-footer-right']);Z([[2,'=='],[[7],[3,'loginUserId']],[[7],[3,'userId']]]);Z([[2,'&&'],[[2,'!='],[[7],[3,'loginUserId']],[[7],[3,'userId']]],[[2,'=='],[[7],[3,'iLike']],[1,0]]]);Z([[2,'&&'],[[2,'!='],[[7],[3,'loginUserId']],[[7],[3,'userId']]],[[2,'=='],[[7],[3,'iLike']],[1,1]]]);Z([[7],[3,'commentBox']]);Z([3,'blessingModalClose']);Z([3,'_getDetail']);Z([[6],[[7],[3,'blessingModal']],[3,'eventId']]);Z([[7],[3,'groupId']]);Z([[7],[3,'scene']]);Z([[6],[[7],[3,'blessingModal']],[3,'selectedIndex']]);Z([[6],[[7],[3,'blessingModal']],[3,'show']]);Z([[6],[[7],[3,'blessingModal']],[3,'userId']]);Z([[7],[3,'modalShow']]);Z([3,'preventTouchMove']);Z([a,[3,'menu_modal '],[[2,'?:'],[[7],[3,'modalAnimation']],[1,'menu_modal-show'],[1,'']]]);Z([[7],[3,'on']]);Z([3,'signDay']);Z([[2,'>'],[[7],[3,'inviteNum']],[1,1000]]);Z([[7],[3,'prizeDetail']]);Z([[7],[3,'index']]);Z([[2,'&&'],[[2,'>='],[[7],[3,'inviteNum']],[[6],[[7],[3,'item']],[3,'personMin']]],[[2,'<'],[[7],[3,'inviteNum']],[[6],[[7],[3,'item']],[3,'personMax']]]]);Z([[7],[3,'showGetPrizeModel']]);Z([[7],[3,'submitSuccess']]);Z([[7],[3,'showDisposeModel']]);Z(z[95]);Z([[2,'>'],[[7],[3,'picNum']],[1,15000]]);Z(z[97]);Z(z[98]);Z([[2,'&&'],[[2,'>='],[[7],[3,'picNum']],[[6],[[7],[3,'item']],[3,'picMin']]],[[2,'<'],[[7],[3,'picNum']],[[6],[[7],[3,'item']],[3,'picMax']]]]);Z(z[100]);Z(z[101]);Z(z[102]);Z(z[95]);Z([[2,'>'],[[7],[3,'daysCount']],[1,365]]);Z(z[97]);Z(z[98]);Z([[2,'&&'],[[2,'>='],[[7],[3,'daysCount']],[[6],[[7],[3,'item']],[3,'dayMin']]],[[2,'<'],[[7],[3,'daysCount']],[[6],[[7],[3,'item']],[3,'dayMax']]]]);Z(z[100]);Z(z[101]);Z(z[102]);Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'isBlongToAblum']],[1,0]],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,2]],[[2,'!='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,3]]],[[2,'!='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,4]]],[[2,'!='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,5]]],[[2,'!='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,11]]]]);Z([3,'scrollTop']);Z([3,'commentLoading']);Z([3,'450']);Z([[7],[3,'scrollView']]);Z([3,'height: 100%;']);Z([[2,'&&'],[[7],[3,'showPage']],[[7],[3,'eventinfo']]]);Z([3,'detailContainer']);Z([3,'eventDetailTitle']);Z([[7],[3,'isShowEnterAlbumButton']]);Z(z[128]);Z([[2,'!'],[[7],[3,'isShowEnterAlbumButton']]]);Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'advertisementsShow']],[1,1]],[[6],[[7],[3,'eventinfo']],[3,'img']]]);Z([3,'main-content']);Z([[2,'!='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,6]]);Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'gcreator']],[[7],[3,'userid']]],[[2,'=='],[[7],[3,'userid']],[[6],[[6],[[7],[3,'eventinfo']],[3,'publishUser']],[3,'userid']]]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,0]]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,4]]]);Z([[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,6]]);Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'gcreator']],[[7],[3,'userid']]],[[2,'=='],[[7],[3,'userid']],[[6],[[6],[[7],[3,'eventinfo']],[3,'publishUser']],[3,'userid']]]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,0]]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,4]]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,6]]]);Z([[2,'&&'],[[6],[[7],[3,'eventinfo']],[3,'etext']],[[2,'!='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,1]]]);Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'gOrigin']],[1,1]],[[2,'||'],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'gtype']],[1,11]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'gtype']],[1,10]]]]);Z(z[135]);Z([[6],[[7],[3,'eventinfo']],[3,'publishUsers']]);Z([3,'item']);Z([[2,'!='],[[6],[[6],[[7],[3,'eventinfo']],[3,'publishUser']],[3,'userid']],[[6],[[7],[3,'item']],[3,'userid']]]);Z([[2,'!'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,3]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,11]]],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,2]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,2]]]]]);Z([[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'eventinfo']],[3,'attentionMember']],[3,'length']],[1,0]],[[2,'!='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,1]]]);Z([[6],[[7],[3,'eventinfo']],[3,'attentionMember']]);Z([[7],[3,'item']]);Z([[2,'<'],[[7],[3,'index']],[1,5]]);Z(z[131]);Z([3,'smallPicList']);Z(z[135]);Z([3,'sixteen event_add']);Z([[2,'=='],[[6],[[6],[[7],[3,'eventinfo']],[3,'picList']],[3,'length']],[1,0]]);Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'eventinfo']],[3,'picList']],[3,'length']],[1,1]],[[2,'=='],[[6],[[6],[[7],[3,'eventinfo']],[3,'picList']],[3,'length']],[1,3]]]);Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'eventinfo']],[3,'picList']],[3,'length']],[1,2]],[[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'eventinfo']],[3,'picList']],[3,'length']],[1,3]],[[2,'<'],[[6],[[6],[[7],[3,'eventinfo']],[3,'picList']],[3,'length']],[1,9]]]]);Z([[2,'>'],[[6],[[6],[[7],[3,'eventinfo']],[3,'picList']],[3,'length']],[1,8]]);Z(z[1]);Z([[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,4]]);Z([[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,0]]);Z([[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,2]]);Z([[6],[[7],[3,'eventinfo']],[3,'eaudioDuration']]);Z([[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,1]]);Z([[6],[[7],[3,'eventinfo']],[3,'textTitle']]);Z([[2,'>'],[[7],[3,'allPicLength']],[[6],[[6],[[7],[3,'eventinfo']],[3,'picList']],[3,'length']]]);Z([[2,'!='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,3]]);Z(z[1]);Z(z[1]);Z([3,'likesAndCommentsBox']);Z(z[1]);Z(z[164]);Z([3,'prevent']);Z([3,'none']);Z([[2,'+'],[1,'/pages/others/morepraise/morepraise?eid\x3d'],[[6],[[7],[3,'eventinfo']],[3,'eid']]]);Z([[2,'&&'],[[7],[3,'showpuzze']],[[2,'>'],[[6],[[7],[3,'eventinfo']],[3,'likeCnt']],[1,0]]]);Z([3,'likeindex']);Z([3,'likeitem']);Z([[6],[[7],[3,'eventinfo']],[3,'like']]);Z([[6],[[7],[3,'eventinfo']],[3,'likeID']]);Z([[2,'<'],[[7],[3,'likeindex']],[1,8]]);Z([[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'advertisementsShow']],[1,1]]);Z([3,'businessinner']);Z([[6],[[7],[3,'eventinfo']],[3,'advList']]);Z(z[98]);Z([[2,'<'],[[7],[3,'index']],[1,6]]);Z([[2,'>'],[[6],[[6],[[7],[3,'eventinfo']],[3,'advList']],[3,'length']],[1,6]]);Z(z[164]);Z([[2,'>'],[[6],[[6],[[7],[3,'eventinfo']],[3,'comments']],[3,'length']],[1,0]]);Z([a,[3,'talkbox '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'likeCnt']],[1,0]],[1,'borderTop'],[1,'']]]);Z([3,'talkBox']);Z([[6],[[7],[3,'eventinfo']],[3,'comments']]);Z(z[98]);Z([[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'gcreator']],[[7],[3,'userid']]],[[2,'||'],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'gtype']],[1,11]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'gOrigin']],[1,1]]]],[1,'longPressDelete'],[1,'stop']]);Z([a,[3,'comment '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[1,0]],[1,'borderTop'],[1,'']]]);Z(z[98]);Z([[6],[[7],[3,'item']],[3,'cid']]);Z([[6],[[7],[3,'eventinfo']],[3,'eid']]);Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'commentedUser']],[3,'userid']],[1,10]]);Z([3,'editBtnBox']);Z([[2,'!='],[[7],[3,'userid']],[[6],[[6],[[7],[3,'item']],[3,'commentUser']],[3,'userid']]]);Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'commentUser']],[3,'userid']],[[7],[3,'userid']]],[[2,'&&'],[[2,'=='],[[7],[3,'gcreator']],[[7],[3,'userid']]],[[2,'||'],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'gtype']],[1,11]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'gOrigin']],[1,1]]]]]);Z(z[197]);Z(z[198]);Z(z[199]);Z(z[7]);Z(z[179]);Z(z[164]);Z(z[164]);Z([3,'toTalkBox']);Z([3,'commentNum']);Z([[2,'>'],[[6],[[7],[3,'eventinfo']],[3,'commentCnt']],[1,0]]);Z([[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,11]]);Z([[2,'>'],[[6],[[7],[3,'eventinfo']],[3,'likeCnt']],[1,0]]);Z([[2,'!='],[[6],[[7],[3,'eventinfo']],[3,'groupNewType']],[1,11]]);Z(z[211]);Z(z[120]);Z(z[121]);Z(z[122]);Z(z[123]);Z(z[124]);Z(z[125]);Z(z[132]);Z(z[137]);Z(z[138]);Z(z[149]);Z(z[157]);Z(z[158]);Z(z[159]);Z(z[160]);Z(z[161]);Z(z[162]);Z(z[163]);Z([[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'dialogShow']],[1,1]]);Z([[7],[3,'showComInput']]);Z([[7],[3,'secondEnd']]);Z([[7],[3,'showPlayVideoModal']]);Z([3,'closeFunModel']);Z([3,'funModel-box']);Z([3,'stop']);Z([3,'mainList']);Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,4]]],[[2,'=='],[[6],[[7],[3,'eventinfo']],[3,'eMain']],[1,6]]]);Z([[2,'=='],[[6],[[6],[[7],[3,'eventinfo']],[3,'publishUser']],[3,'userid']],[[7],[3,'userid']]]);Z([[2,'&&'],[[7],[3,'showAuthPic']],[[6],[[7],[3,'authpic']],[3,'belowImgUrl']]]);Z([[10],[[7],[3,'authpic']]]);Z([3,'tempic']);Z([[7],[3,'addpicModal']]);Z([[7],[3,'showProgress']]);Z(z[1]);Z([[7],[3,'showLikeSuccessModel']]);Z(z[119]);Z(z[120]);Z(z[121]);Z(z[122]);Z(z[123]);Z(z[124]);Z(z[125]);Z(z[126]);Z(z[127]);Z(z[128]);Z(z[128]);Z(z[130]);Z(z[131]);Z(z[132]);Z(z[133]);Z(z[134]);Z(z[135]);Z(z[136]);Z(z[137]);Z(z[138]);Z(z[135]);Z(z[140]);Z(z[141]);Z(z[142]);Z(z[143]);Z(z[144]);Z(z[145]);Z(z[146]);Z(z[147]);Z(z[131]);Z(z[149]);Z(z[135]);Z(z[151]);Z(z[152]);Z(z[153]);Z(z[154]);Z(z[155]);Z(z[1]);Z(z[157]);Z(z[158]);Z(z[159]);Z(z[160]);Z(z[161]);Z(z[162]);Z(z[163]);Z(z[164]);Z(z[1]);Z(z[1]);Z(z[167]);Z(z[1]);Z(z[164]);Z(z[170]);Z(z[171]);Z(z[172]);Z(z[173]);Z(z[174]);Z(z[175]);Z(z[176]);Z(z[177]);Z(z[178]);Z(z[179]);Z(z[180]);Z(z[181]);Z(z[98]);Z(z[183]);Z(z[184]);Z(z[164]);Z(z[186]);Z([a,z[187][1],z[187][2]]);Z(z[188]);Z(z[189]);Z(z[98]);Z(z[191]);Z([a,z[192][1],z[192][2]]);Z(z[98]);Z(z[194]);Z(z[195]);Z(z[196]);Z(z[197]);Z(z[198]);Z(z[199]);Z(z[197]);Z(z[198]);Z(z[199]);Z(z[7]);Z(z[179]);Z(z[164]);Z(z[164]);Z(z[207]);Z(z[208]);Z(z[209]);Z(z[210]);Z(z[211]);Z(z[212]);Z(z[211]);Z(z[120]);Z(z[121]);Z(z[122]);Z(z[123]);Z(z[124]);Z(z[125]);Z(z[132]);Z(z[137]);Z(z[138]);Z(z[149]);Z(z[157]);Z(z[158]);Z(z[159]);Z(z[160]);Z(z[161]);Z(z[162]);Z(z[163]);Z(z[231]);Z(z[232]);Z(z[233]);Z(z[234]);Z(z[235]);Z(z[236]);Z(z[237]);Z(z[238]);Z(z[239]);Z(z[240]);Z(z[241]);Z(z[242]);Z(z[243]);Z(z[244]);Z(z[245]);Z(z[1]);Z(z[247]);Z([a,[3,'transition '],[[2,'?:'],[[7],[3,'publishMenu']],[1,'gaussian_blur'],[1,'']]]);Z([3,'v-container']);Z([[2,'>'],[[6],[[7],[3,'eventlist']],[3,'length']],[1,0]]);Z([3,'event_timeline']);Z([3,'Aindex']);Z([[7],[3,'eventlist']]);Z([[7],[3,'Aindex']]);Z([3,'loadmore']);Z([3,'list-item']);Z([[6],[[6],[[6],[[7],[3,'item']],[3,'list']],[1,0]],[3,'eid']]);Z(z[383]);Z([3,'0']);Z([3,'Bindex']);Z([3,'listitem']);Z([[6],[[7],[3,'item']],[3,'list']]);Z([[6],[[7],[3,'listitem']],[3,'eid']]);Z([3,'list-item-child']);Z([3,'item_userDate']);Z([[2,'=='],[[6],[[7],[3,'listitem']],[3,'elevel']],[1,1]]);Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'gcreator']],[[7],[3,'userid']]],[[2,'||'],[[2,'=='],[[7],[3,'userid']],[[6],[[6],[[7],[3,'listitem']],[3,'publishUser']],[3,'userid']]],[[6],[[7],[3,'ablumInfo']],[3,'canDelete']]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,6]]]);Z([[6],[[7],[3,'listitem']],[3,'etext']]);Z([[2,'>'],[[6],[[6],[[7],[3,'listitem']],[3,'attentionMember']],[3,'length']],[1,0]]);Z([[6],[[7],[3,'listitem']],[3,'attentionMember']]);Z(z[98]);Z(z[147]);Z([3,'sixteen']);Z([[2,'=='],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,0]]);Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,1]],[[2,'=='],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,3]]]);Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,2]],[[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,3]],[[2,'<'],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,9]]]]);Z([[2,'>'],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,8]]);Z([3,'index']);Z([[6],[[7],[3,'listitem']],[3,'picList']]);Z([3,'enterpreview']);Z([a,[3,'sixteen-item sixteen-gt9 '],[[2,'?:'],[[2,'!='],[[2,'%'],[[2,'+'],[[7],[3,'index']],[1,1]],[1,4]],[1,0]],[1,'sixteen-gt9-gap'],[1,'']]]);Z(z[408]);Z([[7],[3,'Bindex']]);Z(z[98]);Z(z[383]);Z(z[98]);Z([[2,'=='],[[7],[3,'index']],[1,10]]);Z([3,'listDetailBox']);Z([[2,'>'],[[6],[[7],[3,'listitem']],[3,'commentCnt']],[1,0]]);Z([3,'recomment']);Z([3,'talkbox']);Z([a,z[383],[3,','],z[412]]);Z(z[392]);Z([[6],[[7],[3,'listitem']],[3,'comments']]);Z(z[98]);Z([[2,'<'],[[7],[3,'index']],[1,3]]);Z([3,'preReset']);Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'/pages/eventdetail/eventdetail?lastPage\x3dalbumDetail\x26dateindex\x3d'],[[7],[3,'Aindex']]],[1,'\x26rowindex\x3d']],[[7],[3,'Bindex']]],[1,'\x26eid\x3d']],[[6],[[7],[3,'listitem']],[3,'eid']]],[1,'\x26efrom\x3dgrouptypescoll']]);Z([[2,'>'],[[6],[[7],[3,'listitem']],[3,'commentCnt']],[1,3]]);Z(z[1]);Z(z[7]);Z(z[379]);Z(z[1]);Z([[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'gOrigin']],[1,1]]);Z([[2,'&&'],[[7],[3,'showpuzze']],[[7],[3,'isUpPicState']]]);Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'gOrigin']],[1,2]],[[7],[3,'isUpPicState']]]);Z([[2,'||'],[[7],[3,'showFooterIntro1']],[[7],[3,'showFooterIntro2']]]);Z([3,'footerIntro']);Z([[7],[3,'showFooterIntro1']]);Z([[7],[3,'showFooterIntro2']]);Z(z[434]);Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'activitySwitchhot']]],[[2,'!='],[[6],[[7],[3,'ablumInfo']],[3,'gOrigin']],[1,1]]],[[2,'!='],[[6],[[7],[3,'ablumInfo']],[3,'gOrigin']],[1,2]]]);Z([[7],[3,'addModalOn']]);Z([3,'closeModal']);Z(z[92]);Z([a,[3,'party-modal '],[[2,'?:'],[[7],[3,'addModalAnimation']],[1,'party-modal-on'],[1,'']]]);Z([[7],[3,'addEventModalOn']]);Z([[7],[3,'addPhotoModalOn']]);Z([3,'party-add_photo']);Z([[2,'==='],[[7],[3,'modalTitle']],[1,'照片']]);Z(z[449]);Z([[2,'==='],[[7],[3,'modalTitle']],[1,'视频']]);Z(z[451]);Z(z[235]);Z(z[236]);Z(z[237]);Z(z[238]);Z([[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'gcreator']],[[7],[3,'userid']]]);Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'gcreator']],[[7],[3,'userid']]],[[2,'=='],[[7],[3,'userid']],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'publishUser']],[3,'userid']]]],[[6],[[7],[3,'ablumInfo']],[3,'canDelete']]]);Z(z[241]);Z(z[242]);Z(z[243]);Z(z[233]);Z(z[245]);Z([[7],[3,'Mengcen']]);Z(z[102]);Z(z[232]);Z([[7],[3,'showcomeuserModel']]);Z([[2,'!'],[[7],[3,'activitySwitchhot']]]);Z([[7],[3,'showfirstuploadModel']]);Z(z[469]);Z([[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'dialogShow']],[1,1]]);Z([[7],[3,'showAudioModelBox']]);Z([[7],[3,'playPhoto']]);Z([3,'制作图片']);Z([a,z[377][1],z[377][2]]);Z(z[378]);Z([3,'header']);Z([[7],[3,'isUpPicState']]);Z(z[237]);Z([3,'viewFunBtnbox']);Z([[6],[[7],[3,'ablumInfo']],[3,'list']]);Z([[6],[[7],[3,'item']],[3,'gmtime']]);Z(z[425]);Z([[7],[3,'showpuzze']]);Z([3,'addmember']);Z([3,'invite']);Z([3,'true']);Z([[2,'<='],[[6],[[6],[[7],[3,'ablumInfo']],[3,'list']],[3,'length']],[1,1]]);Z([[2,'=='],[[7],[3,'userid']],[[6],[[7],[3,'ablumInfo']],[3,'gcreator']]]);Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'bannerInfo']],[3,'textSwitch']],[1,0]],[[2,'!='],[[6],[[7],[3,'ablumInfo']],[3,'gOrigin']],[1,1]]]);Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'advertisementsShow']],[1,1]],[[2,'>'],[[6],[[7],[3,'businessList']],[3,'length']],[1,0]]]);Z(z[491]);Z([[2,'>'],[[6],[[7],[3,'eventlist']],[3,'length']],[1,0]]);Z(z[493]);Z([3,'timeline']);Z(z[381]);Z(z[382]);Z(z[383]);Z(z[384]);Z(z[385]);Z(z[386]);Z(z[383]);Z(z[388]);Z(z[389]);Z(z[390]);Z(z[391]);Z(z[392]);Z([[2,'&&'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,4]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,6]]],[[2,'>'],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,0]]]);Z(z[393]);Z([3,'childTop']);Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,4]]]);Z([[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,6]]);Z(z[394]);Z(z[511]);Z(z[395]);Z(z[512]);Z(z[395]);Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'gcreator']],[[7],[3,'userid']]],[[2,'||'],[[2,'=='],[[7],[3,'userid']],[[6],[[6],[[7],[3,'listitem']],[3,'publishUser']],[3,'userid']]],[[6],[[7],[3,'ablumInfo']],[3,'canDelete']]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,0]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,4]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,6]]]);Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,4]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,6]]]);Z(z[397]);Z(z[398]);Z(z[399]);Z(z[98]);Z(z[147]);Z([[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,4]]);Z([3,'seeBigVideo']);Z([3,'mainImg h-box']);Z([[6],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[1,0]],[3,'poriginal']]);Z([[6],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[1,0]],[3,'pcover']]);Z([[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,0]]);Z([3,'picindex']);Z([3,'picitem']);Z(z[408]);Z([[7],[3,'picindex']]);Z([[2,'<'],[[7],[3,'picindex']],[1,9]]);Z(z[170]);Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'/pages/eventdetail/eventdetail?lastPage\x3dalbumDetail\x26dateindex\x3d'],[[7],[3,'Aindex']]],[1,'\x26rowindex\x3d']],[[7],[3,'Bindex']]],[1,'\x26eid\x3d']],[[6],[[7],[3,'listitem']],[3,'eid']]],[1,'\x26efrom\x3dgrouptypescoll\x26groupNewType\x3d']],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']]]);Z([[2,'&&'],[[2,'=='],[[7],[3,'picindex']],[1,8]],[[2,'>'],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,9]]]);Z(z[512]);Z(z[402]);Z(z[403]);Z(z[404]);Z(z[405]);Z(z[406]);Z(z[407]);Z(z[408]);Z(z[409]);Z([a,z[410][1],z[410][2]]);Z(z[408]);Z(z[412]);Z(z[98]);Z(z[383]);Z(z[98]);Z(z[416]);Z(z[417]);Z(z[418]);Z(z[419]);Z(z[420]);Z([a,z[383],z[421][2],z[412]]);Z(z[392]);Z(z[423]);Z(z[98]);Z(z[425]);Z(z[426]);Z(z[427]);Z(z[428]);Z(z[1]);Z(z[7]);Z([3,'openPublishMenu']);Z([3,'loversEmptyUp']);Z([[2,'=='],[[6],[[7],[3,'isActivitySwitch']],[3,'isDelete']],[1,0]]);Z(z[493]);Z(z[379]);Z(z[433]);Z(z[434]);Z(z[435]);Z(z[436]);Z(z[437]);Z(z[438]);Z(z[439]);Z(z[434]);Z(z[441]);Z(z[442]);Z(z[443]);Z(z[92]);Z([a,z[445][1],z[445][2]]);Z(z[446]);Z(z[447]);Z([a,[3,'party-modal-warp '],[[2,'?:'],[[7],[3,'addPhotoModalAnimation']],[1,'party-modal-warp-on'],[1,'']]]);Z([[2,'!'],[[7],[3,'eventModel']]]);Z(z[448]);Z(z[449]);Z(z[449]);Z(z[451]);Z(z[451]);Z(z[235]);Z(z[236]);Z(z[237]);Z(z[238]);Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'list']],[1,0]],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'list']],[1,0]],[3,'eMain']],[1,4]]],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'list']],[1,0]],[3,'eMain']],[1,6]]]);Z([[2,'||'],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'list']],[1,0]],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'list']],[1,0]],[3,'eMain']],[1,6]]]);Z(z[457]);Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'gcreator']],[[7],[3,'userid']]],[[2,'=='],[[7],[3,'userid']],[[6],[[6],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'list']],[1,0]],[3,'publishUser']],[3,'userid']]]],[[6],[[7],[3,'ablumInfo']],[3,'canDelete']]]);Z(z[241]);Z(z[242]);Z(z[243]);Z(z[233]);Z([[2,'&&'],[[7],[3,'alading']],[[7],[3,'aladingTwo']]]);Z(z[245]);Z(z[464]);Z(z[102]);Z(z[232]);Z(z[467]);Z(z[468]);Z(z[469]);Z(z[469]);Z(z[471]);Z(z[472]);Z([3,'publishMenuClosed']);Z([[7],[3,'menuNames']]);Z([[7],[3,'publishMenu']]);Z(z[473]);Z(z[474]);Z(z[381]);Z([[7],[3,'likelist']]);Z(z[383]);Z(z[532]);Z([[6],[[7],[3,'item']],[3,'pictures']]);Z(z[98]);Z([[2,'<'],[[7],[3,'index']],[1,4]]);Z([3,'seebigpic']);Z([3,'box']);Z(z[383]);Z(z[98]);Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'pictures']],[3,'length']],[1,4]]);Z([[7],[3,'photolist']]);Z([[2,'>'],[[7],[3,'index']],[1,0]]);Z([a,z[377][1],[[2,'?:'],[[7],[3,'publishMenu']],[1,'gaussian_blur'],[1,'']]]);Z([[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']],[1,2]]);Z([[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']],[1,3]]);Z([[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']],[1,5]]);Z([[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']],[1,11]]);Z(z[241]);Z(z[242]);Z(z[243]);Z(z[233]);Z(z[608]);Z(z[245]);Z(z[464]);Z(z[102]);Z(z[232]);Z(z[467]);Z(z[468]);Z(z[469]);Z(z[469]);Z(z[471]);Z(z[472]);Z([[7],[3,'showMayDayActivity']]);Z([[10],[[7],[3,'contentText']]]);Z([3,'uppicnum']);Z(z[619]);Z(z[620]);Z(z[621]);Z(z[473]);Z(z[474]);Z([[2,'>'],[[6],[[7],[3,'grouplist']],[3,'length']],[1,0]]);Z([3,'toMsgCenter']);Z([3,'msgBox']);Z(z[487]);Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'showMsg']],[3,'tx']],[1,1]],[[2,'=='],[[6],[[7],[3,'showMsg']],[3,'jf']],[1,1]]],[[2,'=='],[[6],[[7],[3,'showMsg']],[3,'pl']],[1,1]]],[[2,'=='],[[6],[[7],[3,'showMsg']],[3,'dz']],[1,1]]]);Z([[2,'&&'],[[7],[3,'ufApiImgUrl']],[[7],[3,'userpic']]]);Z([3,'grouplist_container']);Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'grouplist']],[3,'length']],[1,0]],[[2,'=='],[[6],[[7],[3,'activityBanner']],[3,'bannerstatus']],[1,1]]]);Z([[2,'<'],[[6],[[7],[3,'grouplist']],[3,'length']],[1,4]]);Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'grouplist']],[3,'length']],[1,0]],[[2,'=='],[[6],[[7],[3,'activityBanner']],[3,'bannerstatus']],[1,1]]]);Z(z[7]);Z([[2,'>='],[[6],[[7],[3,'grouplist']],[3,'length']],[1,4]]);Z(z[677]);Z([[2,'&&'],[[2,'&&'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'GetActivityMsg']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'GetActivityMsg']],[3,'type']],[1,2]]],[[2,'=='],[[6],[[7],[3,'GetActivityMsg']],[3,'type']],[1,3]]],[[7],[3,'showVersion']]],[[2,'!'],[[7],[3,'showintroduce']]]]);Z([3,'versionModel']);Z([[2,'=='],[[6],[[7],[3,'GetActivityMsg']],[3,'type']],[1,1]]);Z([[6],[[7],[3,'GetActivityMsg']],[3,'msg']]);Z(z[98]);Z(z[183]);Z([[2,'=='],[[6],[[7],[3,'GetActivityMsg']],[3,'type']],[1,2]]);Z([[2,'=='],[[6],[[7],[3,'GetActivityMsg']],[3,'type']],[1,3]]);Z([[7],[3,'showNewUser']]);Z(z[102]);Z([[7],[3,'showDelete']]);Z([[2,'>'],[[6],[[7],[3,'tags']],[3,'length']],[1,0]]);Z([[7],[3,'contentText']]);Z([3,'mayDay-allphotos']);Z([[2,'>'],[[6],[[7],[3,'allPicList']],[3,'length']],[1,0]]);Z([[7],[3,'allPicList']]);Z(z[98]);Z([[2,'=='],[[6],[[7],[3,'contentText']],[3,'isReceive']],[1,0]]);Z(z[691]);Z([[7],[3,'showRewardsModalBox']]);Z([[7],[3,'groupList']]);Z(z[98]);Z([3,'selectGroup']);Z([3,'upgroup-item']);Z(z[98]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isActive']],[1,1]]);Z([3,'au-section-center']);Z([[2,'=='],[[7],[3,'pagetype']],[1,'mine']]);Z([[2,'=='],[[7],[3,'pagetype']],[1,'activity']]);Z([3,'discover-bottom']);Z([[2,'>'],[[6],[[7],[3,'colLeft']],[3,'length']],[1,0]]);Z([3,'m-container']);Z([a,[3,'height:'],[[7],[3,'minHeight']],[3,'rpx']]);Z([[2,'>'],[[6],[[7],[3,'activeList']],[3,'length']],[1,0]]);Z([3,'photoStream']);Z(z[712]);Z([[7],[3,'hasactiveList']]);Z([3,'streamLeftAndRight']);Z(z[27]);Z(z[98]);Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'eMain']],[1,4]],[1,'seeBigVideo'],[1,'toEventDetail']]);Z([3,'itemImgBox']);Z([[2,'+'],[[2,'+'],[[7],[3,'index']],[1,',']],[[6],[[7],[3,'item']],[3,'eid']]]);Z([[6],[[6],[[6],[[7],[3,'item']],[3,'picList']],[1,0]],[3,'poriginal']]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'eMain']],[1,4]]);Z(z[41]);Z(z[98]);Z(z[719]);Z(z[720]);Z(z[721]);Z(z[722]);Z(z[723]);Z([[2,'!'],[[7],[3,'hasactiveList']]]);Z(z[234]);Z(z[378]);Z(z[379]);Z(z[495]);Z(z[381]);Z(z[390]);Z(z[382]);Z(z[392]);Z([3,'toEventDetail']);Z(z[385]);Z([a,z[392],z[421][2],z[383],z[421][2],[[6],[[7],[3,'listitem']],[3,'isDefault']]]);Z([[2,'||'],[[2,'||'],[[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,4]]],[[2,'>'],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,0]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,1]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,2]]]);Z(z[393]);Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,2]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,4]]]);Z(z[397]);Z([[2,'!'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'groupNewType']],[1,3]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'groupNewType']],[1,11]]],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'groupNewType']],[1,2]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,2]]]]]);Z(z[398]);Z(z[399]);Z(z[98]);Z(z[147]);Z([[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,4]]);Z(z[526]);Z(z[527]);Z(z[529]);Z(z[528]);Z(z[529]);Z(z[530]);Z(z[531]);Z(z[532]);Z(z[408]);Z(z[534]);Z(z[535]);Z([[2,'&&'],[[2,'=='],[[7],[3,'picindex']],[1,8]],[[2,'>'],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,9]]]);Z([[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,2]]);Z([[6],[[7],[3,'listitem']],[3,'eaudioDuration']]);Z([[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,1]]);Z(z[747]);Z(z[398]);Z(z[399]);Z(z[98]);Z(z[147]);Z(z[767]);Z([[6],[[7],[3,'listitem']],[3,'textTitle']]);Z(z[417]);Z([[2,'!='],[[6],[[7],[3,'listitem']],[3,'groupNewType']],[1,3]]);Z(z[418]);Z(z[419]);Z(z[420]);Z(z[383]);Z(z[392]);Z(z[423]);Z(z[98]);Z(z[425]);Z(z[428]);Z(z[776]);Z(z[7]);Z(z[493]);Z(z[235]);Z(z[236]);Z(z[237]);Z(z[238]);Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'eMain']],[1,4]]]);Z([[2,'=='],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'eMain']],[1,0]]);Z(z[603]);Z(z[102]);Z(z[232]);Z([3,'my_self']);Z(z[1]);Z([[2,'=='],[[6],[[7],[3,'userInfo']],[3,'showSign']],[1,0]]);Z([3,'notification-albums']);Z(z[381]);Z([[7],[3,'notifyAlbums']]);Z(z[383]);Z([[2,'!='],[[7],[3,'Aindex']],[[2,'-'],[[6],[[7],[3,'notifyAlbums']],[3,'length']],[1,1]]]);Z([[7],[3,'loadingImgOrText']]);Z([[2,'!'],[[7],[3,'hasloadall']]]);Z(z[232]);Z([3,'pullUpLoad']);Z([3,'personal_page']);Z([3,'500']);Z([1,true]);Z([[2,'=='],[[7],[3,'userId']],[[7],[3,'pageUserId']]]);Z([3,'eIndex']);Z([3,'e']);Z([[7],[3,'events']]);Z([3,'e.level']);Z([[2,'!'],[[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'e']],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[7],[3,'e']],[3,'eMain']],[1,4]]],[[2,'=='],[[6],[[6],[[7],[3,'e']],[3,'photos']],[3,'length']],[1,0]]]]);Z([a,[3,'pp-event-item '],[[2,'?:'],[[2,'>'],[[7],[3,'eIndex']],[1,0]],[1,'pp-event-item-bt'],[1,'']]]);Z([3,'pp-ei-header']);Z([[2,'=='],[[6],[[7],[3,'e']],[3,'stickStatus']],[1,1]]);Z([[2,'==='],[[7],[3,'deletePermission']],[1,1]]);Z([[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'e']],[3,'desc']],[3,'length']],[1,0]],[[2,'!='],[[6],[[7],[3,'e']],[3,'eMain']],[1,1]]]);Z([[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'e']],[3,'desc']],[3,'length']],[1,0]],[[2,'=='],[[6],[[7],[3,'e']],[3,'eMain']],[1,1]]]);Z([3,'openEventDetail']);Z([3,'pp-ei-text']);Z([[6],[[7],[3,'e']],[3,'eid']]);Z([[2,'>'],[[6],[[6],[[7],[3,'e']],[3,'textTitle']],[3,'length']],[1,0]]);Z([[2,'&&'],[[6],[[6],[[7],[3,'e']],[3,'jurisdiction']],[3,'andFriends']],[[2,'>'],[[6],[[6],[[7],[3,'e']],[3,'andFriends']],[3,'length']],[1,0]]]);Z([[6],[[7],[3,'e']],[3,'andFriends']]);Z([[2,'!='],[[2,'-'],[[6],[[6],[[7],[3,'e']],[3,'andFriends']],[3,'length']],[1,1]],[[7],[3,'index']]]);Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'e']],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[7],[3,'e']],[3,'eMain']],[1,4]]]);Z([a,[3,'pp-ei-photos '],[[2,'?:'],[[2,'=='],[[6],[[6],[[7],[3,'e']],[3,'photos']],[3,'length']],[1,1]],[1,'pp-ei-photos-single'],[1,'']],[3,' '],[[2,'?:'],[[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'e']],[3,'photos']],[3,'length']],[1,2]],[[2,'=='],[[6],[[6],[[7],[3,'e']],[3,'photos']],[3,'length']],[1,4]]],[1,'pp-ei-photos-double'],[1,'']]]);Z([3,'pIndex']);Z([3,'p']);Z([[6],[[7],[3,'e']],[3,'photos']]);Z(z[834]);Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'e']],[3,'eMain']],[1,4]],[[2,'<'],[[7],[3,'pIndex']],[1,9]]]);Z([[2,'&&'],[[2,'=='],[[7],[3,'pIndex']],[1,8]],[[2,'>'],[[6],[[6],[[7],[3,'e']],[3,'photos']],[3,'length']],[1,9]]]);Z([[2,'=='],[[6],[[7],[3,'e']],[3,'eMain']],[1,4]]);Z(z[526]);Z([3,'pp-ei-video']);Z([[6],[[6],[[6],[[7],[3,'e']],[3,'photos']],[1,0]],[3,'pcover']]);Z(z[827]);Z([[6],[[6],[[6],[[7],[3,'e']],[3,'photos']],[1,0]],[3,'poriginal']]);Z(z[843]);Z([[2,'=='],[[6],[[7],[3,'e']],[3,'eMain']],[1,2]]);Z([3,'pp-ei-audio']);Z([3,'pp-ei-al-t']);Z([[2,'=='],[[6],[[7],[3,'e']],[3,'audioPlayStatus']],[1,'ready']]);Z([[2,'=='],[[6],[[7],[3,'e']],[3,'audioPlayStatus']],[1,'play']]);Z([3,'pp-ei-audio-right']);Z([3,'pp-ei-ar-img']);Z(z[850]);Z(z[851]);Z(z[850]);Z(z[851]);Z([[6],[[6],[[7],[3,'e']],[3,'jurisdiction']],[3,'comment']]);Z([3,'pp-ei-comment']);Z([3,'cIndex']);Z([3,'c']);Z([[6],[[7],[3,'e']],[3,'comments']]);Z(z[860]);Z([[2,'<'],[[7],[3,'cIndex']],[1,3]]);Z([3,'deleteComment']);Z([3,'pp-ei-cm-list']);Z([[6],[[7],[3,'c']],[3,'cid']]);Z([[6],[[6],[[7],[3,'c']],[3,'commentUser']],[3,'userid']]);Z(z[827]);Z([[2,'!='],[[6],[[6],[[7],[3,'c']],[3,'commentedUser']],[3,'userid']],[1,10]]);Z(z[870]);Z([[2,'>'],[[6],[[7],[3,'e']],[3,'commentCount']],[1,3]]);Z([3,'pp-ei-operate']);Z([[6],[[6],[[7],[3,'e']],[3,'jurisdiction']],[3,'like']]);Z(z[812]);Z(z[1]);Z([[2,'&&'],[[2,'==='],[[7],[3,'eventLoadComplete']],[1,1]],[[2,'>'],[[6],[[7],[3,'events']],[3,'length']],[1,0]]]);Z([[2,'==='],[[7],[3,'loading']],[1,0]]);Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'events']],[3,'length']],[1,0]],[[2,'=='],[[7],[3,'loading']],[1,1]]]);Z(z[1]);Z([[7],[3,'isShowPlayer']]);Z(z[232]);Z([[7],[3,'menuModalShow']]);Z([3,'more']);Z([[6],[[7],[3,'more']],[3,'download']]);Z([[6],[[7],[3,'more']],[3,'sync']]);Z([[6],[[7],[3,'more']],[3,'del']]);Z([[6],[[7],[3,'more']],[3,'stick']]);Z([[2,'!'],[[7],[3,'showMonthTimeData']]]);Z(z[120]);Z([3,'photoageitem']);Z([3,'300']);Z([3,'height:100%;']);Z([[2,'>'],[[6],[[7],[3,'photopagedata_day']],[3,'length']],[1,0]]);Z(z[531]);Z([3,'pic']);Z([[7],[3,'photopagedata_day']]);Z([[6],[[7],[3,'item']],[3,'pid']]);Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'pic']],[3,'pMain']],[1,4]],[1,'seeBigVideo'],[1,'']]);Z([3,'photopageimgbox']);Z([[6],[[7],[3,'pic']],[3,'poriginal']]);Z([[2,'=='],[[6],[[7],[3,'pic']],[3,'pMain']],[1,4]]);Z(z[889]);Z(z[120]);Z([[2,'?:'],[[7],[3,'showTimeData']],[1,'photoageitem'],[1,'photopeople']]);Z(z[892]);Z(z[893]);Z([[7],[3,'showTimeData']]);Z(z[894]);Z([3,'picitemindex']);Z(z[897]);Z([[6],[[7],[3,'item']],[3,'euploadtime']]);Z([a,[3,'photoageitem '],[[2,'?:'],[[2,'=='],[[7],[3,'picitemindex']],[1,0]],[1,'margTop'],[1,'']]]);Z(z[531]);Z(z[896]);Z([[6],[[7],[3,'item']],[3,'picture']]);Z(z[898]);Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'pic']],[3,'myMain']],[1,4]],[1,'seeBigVideo'],[1,'']]);Z(z[900]);Z(z[901]);Z([[2,'=='],[[6],[[7],[3,'pic']],[3,'myMain']],[1,4]]);Z([[2,'>'],[[6],[[7],[3,'item']],[3,'num']],[1,99]]);Z([[2,'>'],[[6],[[7],[3,'photopagedata_people']],[3,'length']],[1,0]]);Z(z[910]);Z([[7],[3,'photopagedata_people']]);Z(z[912]);Z(z[531]);Z(z[896]);Z([[6],[[7],[3,'item']],[3,'picList']]);Z(z[534]);Z(z[918]);Z(z[900]);Z(z[901]);Z(z[921]);Z([[2,'&&'],[[2,'=='],[[7],[3,'picindex']],[1,8]],[[2,'>'],[[6],[[7],[3,'item']],[3,'num']],[1,9]]]);Z(z[120]);Z([[2,'?:'],[[7],[3,'showTimeData']],[1,'photoageitemBymonth'],[1,'photopeopleBymonth']]);Z(z[892]);Z(z[893]);Z(z[908]);Z(z[894]);Z(z[910]);Z(z[897]);Z(z[912]);Z([a,z[913][1],z[913][2]]);Z(z[531]);Z(z[896]);Z(z[916]);Z(z[898]);Z(z[918]);Z(z[900]);Z(z[901]);Z(z[921]);Z(z[922]);Z(z[923]);Z(z[910]);Z(z[925]);Z([[7],[3,'picitemindex']]);Z(z[531]);Z(z[896]);Z(z[929]);Z(z[534]);Z(z[918]);Z(z[900]);Z(z[901]);Z(z[921]);Z(z[935]);Z([[7],[3,'showModelHidden']]);Z(z[471]);Z([[7],[3,'pvShowModel']]);Z(z[245]);Z(z[102]);Z([[7],[3,'checkFeatures']]);Z([3,'container']);Z([3,'end']);Z([3,'move']);Z([3,'startmove']);Z([3,'pingtu']);Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'*'],[[7],[3,'picwid']],[1,3]]],[1,'px;height:']],[[2,'*'],[[7],[3,'picwid']],[1,3]]],[1,'px']]);Z([[7],[3,'showcover']]);Z(z[171]);Z(z[171]);Z(z[171]);Z([3,'cover']);Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[2,'*'],[[7],[3,'picwid']],[1,3]],[1,1]]],[1,'px;height:']],[[2,'+'],[[2,'*'],[[7],[3,'picwid']],[1,3]],[1,1]]],[1,'px']]);Z([[7],[3,'showstartbtn']]);Z([[7],[3,'showresult']]);Z([[2,'=='],[[6],[[7],[3,'joiner']],[3,'length']],[1,0]]);Z(z[968]);Z([3,'pl-text']);Z([3,'toSelectMember']);Z([3,'pl-result text-overflow']);Z([[6],[[7],[3,'andFriends']],[3,'result']]);Z(z[98]);Z([[2,'!='],[[7],[3,'index']],[[2,'-'],[[6],[[6],[[7],[3,'andFriends']],[3,'result']],[3,'length']],[1,1]]]);Z([[2,'>'],[[6],[[6],[[7],[3,'andFriends']],[3,'result']],[3,'length']],[1,0]]);Z([[2,'>'],[[6],[[6],[[7],[3,'datetime']],[3,'result']],[3,'length']],[1,0]]);Z([3,'showDatetime']);Z([[6],[[7],[3,'datetime']],[3,'show']]);Z(z[11]);Z(z[1]);Z([[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'location']],[3,'result']],[3,'length']],[1,0]],[[2,'!='],[[6],[[7],[3,'location']],[3,'result']],[1,'正在获取当前位置...']]]);Z([[2,'>'],[[6],[[6],[[7],[3,'sync']],[3,'result']],[3,'length']],[1,0]]);Z([3,'publish']);Z([3,'publish-record']);Z([[2,'==='],[[7],[3,'recordStatus']],[1,'ready']]);Z([[2,'==='],[[7],[3,'recordStatus']],[1,'recording']]);Z(z[1]);Z([[2,'==='],[[7],[3,'recordStatus']],[1,'completed']]);Z([3,'pr-content pr-preview']);Z([[2,'==='],[[7],[3,'playStatus']],[1,'ready']]);Z([[2,'==='],[[7],[3,'playStatus']],[1,'playing']]);Z([3,'getLocation']);Z(z[1004]);Z(z[1]);Z([3,'getInputText']);Z([3,'描述事件...']);Z(z[1013]);Z([[6],[[7],[3,'jurisdiction']],[3,'andFriends']]);Z([3,'getAndFriends']);Z(z[86]);Z([[7],[3,'selectedFriends']]);Z([[6],[[7],[3,'jurisdiction']],[3,'publishedTime']]);Z([3,'getDatetime']);Z([[2,'<'],[[6],[[7],[3,'images']],[3,'length']],[1,27]]);Z(z[1004]);Z(z[1016]);Z(z[1013]);Z(z[1019]);Z(z[1020]);Z(z[86]);Z(z[1022]);Z(z[1023]);Z(z[1024]);Z([3,'getSelectedSyncAlbums']);Z(z[86]);Z([[7],[3,'selectedSyncAlbums']]);Z(z[1025]);Z([3,'select_member']);Z([[7],[3,'memberList']]);Z([3,'key']);Z([[2,'!='],[[6],[[6],[[7],[3,'item']],[3,'user']],[3,'userid']],[[7],[3,'userId']]]);Z([3,'selectMember']);Z([3,'sm-list-item']);Z([[6],[[7],[3,'item']],[3,'selected']]);Z([[6],[[6],[[7],[3,'item']],[3,'user']],[3,'userid']]);Z([[2,'==='],[[6],[[7],[3,'item']],[3,'isAdmin']],[1,1]]);Z([[2,'==='],[[7],[3,'loading']],[1,0]]);Z(z[1004]);Z(z[1]);Z(z[1016]);Z(z[811]);Z(z[1013]);Z([[2,'=='],[[7],[3,'albumType']],[1,2]]);Z(z[1020]);Z(z[86]);Z(z[1022]);Z(z[1004]);Z(z[1016]);Z(z[1013]);Z(z[1019]);Z(z[1020]);Z(z[86]);Z(z[1022]);Z(z[1023]);Z(z[1024]);Z(z[1035]);Z(z[86]);Z(z[1037]);Z([3,'publish-select']);Z([[2,'>'],[[6],[[6],[[7],[3,'video']],[3,'tempFilePath']],[3,'length']],[1,0]]);Z(z[1]);Z([3,'mem-container']);Z([[2,'>'],[[7],[3,'gnum']],[1,100]]);Z([[7],[3,'start']]);Z([3,'album_setting']);Z([3,'as-option_list']);Z([[2,'&&'],[[2,'!=='],[[7],[3,'albumType']],[1,'loversalbum']],[[2,'!=='],[[7],[3,'albumType']],[1,'personalalbum']]]);Z([[7],[3,'userlist']]);Z(z[98]);Z([[2,'==='],[[6],[[7],[3,'item']],[3,'isAdmin']],[1,1]]);Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'codeAuth']],[3,'groupQrCodeAuth']],[1,1]],[[2,'!='],[[7],[3,'albumType']],[1,'personalalbum']]]);Z([[2,'&&'],[[7],[3,'showIt']],[[2,'!'],[[7],[3,'isSpecialAlbum']]]]);Z([a,[3,'as-operate '],[[2,'?:'],[[7],[3,'isIphonex']],[1,'iponexPadd'],[1,'']]]);Z([[2,'=='],[[7],[3,'canNotExit']],[1,0]]);Z([[2,'&&'],[[2,'||'],[[2,'!'],[[7],[3,'userid']]],[[2,'!='],[[7],[3,'userid']],[[7],[3,'createrid']]]],[[2,'=='],[[7],[3,'canNotExit']],[1,0]]]);Z([[2,'=='],[[7],[3,'userid']],[[7],[3,'createrid']]]);Z([[2,'==='],[[7],[3,'modal']],[1,1]]);Z([3,'pld-container']);Z([3,'main-img']);Z([3,'positionBox']);Z([[2,'&&'],[[7],[3,'sucessState']],[[6],[[7],[3,'dataList']],[3,'etext']]]);Z([[2,'&&'],[[7],[3,'sucessState']],[[6],[[7],[3,'dataList']],[3,'eaudio']]]);Z([[2,'&&'],[[7],[3,'sucessState']],[[2,'>'],[[6],[[6],[[7],[3,'dataList']],[3,'picList']],[3,'length']],[1,0]]]);Z([[2,'&&'],[[7],[3,'sucessState']],[[6],[[7],[3,'dataList']],[3,'redEnvelopInfo']]]);Z([[2,'!'],[[7],[3,'sucessState']]]);Z(z[484]);Z(z[472]);Z(z[378]);Z(z[477]);Z(z[478]);Z(z[237]);Z(z[480]);Z(z[481]);Z(z[482]);Z(z[425]);Z(z[484]);Z(z[485]);Z(z[486]);Z(z[487]);Z(z[642]);Z([[2,'&&'],[[2,'<='],[[6],[[6],[[7],[3,'ablumInfo']],[3,'list']],[3,'length']],[1,1]],[[7],[3,'activitySwitchhot']]]);Z([[2,'&&'],[[2,'<='],[[6],[[6],[[7],[3,'ablumInfo']],[3,'list']],[3,'length']],[1,1]],[[2,'!'],[[7],[3,'activitySwitchhot']]]]);Z(z[1112]);Z(z[1113]);Z(z[489]);Z(z[490]);Z(z[491]);Z(z[491]);Z(z[493]);Z(z[493]);Z(z[495]);Z(z[381]);Z(z[382]);Z(z[383]);Z(z[384]);Z(z[385]);Z(z[386]);Z(z[383]);Z(z[388]);Z(z[389]);Z(z[390]);Z(z[391]);Z(z[392]);Z([[2,'||'],[[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,4]]],[[2,'>'],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,0]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,1]]]);Z(z[393]);Z(z[394]);Z(z[395]);Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'gcreator']],[[7],[3,'userid']]],[[2,'||'],[[2,'=='],[[7],[3,'userid']],[[6],[[6],[[7],[3,'listitem']],[3,'publishUser']],[3,'userid']]],[[6],[[7],[3,'ablumInfo']],[3,'canDelete']]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,0]]],[[2,'=='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,4]]]);Z(z[745]);Z(z[397]);Z(z[525]);Z(z[526]);Z(z[527]);Z(z[528]);Z(z[529]);Z(z[530]);Z(z[531]);Z(z[532]);Z(z[408]);Z(z[534]);Z(z[535]);Z(z[170]);Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'../../pages/eventdetail/eventdetail?lastPage\x3dalbumDetail\x26dateindex\x3d'],[[7],[3,'Aindex']]],[1,'\x26rowindex\x3d']],[[7],[3,'Bindex']]],[1,'\x26eid\x3d']],[[6],[[7],[3,'listitem']],[3,'eid']]],[1,'\x26efrom\x3dgrouptypescoll\x26groupNewType\x3d']],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']]]);Z(z[538]);Z(z[767]);Z(z[774]);Z(z[417]);Z(z[418]);Z(z[419]);Z(z[420]);Z([a,z[383],z[421][2],z[412]]);Z(z[392]);Z(z[423]);Z(z[98]);Z(z[425]);Z(z[426]);Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'../../pages/eventdetail/eventdetail?lastPage\x3dalbumDetail\x26dateindex\x3d'],[[7],[3,'Aindex']]],[1,'\x26rowindex\x3d']],[[7],[3,'Bindex']]],[1,'\x26eid\x3d']],[[6],[[7],[3,'listitem']],[3,'eid']]],[1,'\x26efrom\x3dgrouptypescoll']]);Z(z[428]);Z(z[1]);Z(z[7]);Z(z[569]);Z([3,'emptyItem lightUp']);Z(z[571]);Z(z[493]);Z(z[379]);Z(z[433]);Z(z[434]);Z(z[435]);Z(z[436]);Z(z[437]);Z(z[438]);Z(z[439]);Z(z[434]);Z(z[569]);Z([a,[3,'upLoadOld '],[[2,'?:'],[[7],[3,'isIphonex']],[1,'upLoadBtm'],[1,'']],z[833][3],[[2,'?:'],[[7],[3,'activitySwitchhot']],[1,''],[1,'activitySwitchhot']]]);Z(z[571]);Z(z[441]);Z(z[442]);Z(z[443]);Z(z[92]);Z([a,z[445][1],z[445][2]]);Z(z[446]);Z(z[447]);Z(z[448]);Z(z[449]);Z(z[449]);Z(z[451]);Z(z[451]);Z(z[235]);Z(z[236]);Z(z[237]);Z(z[238]);Z([[2,'||'],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'list']],[1,0]],[3,'eMain']],[1,0]],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'list']],[1,0]],[3,'eMain']],[1,4]]]);Z([[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'list']],[1,0]],[3,'eMain']],[1,0]]);Z(z[457]);Z(z[603]);Z(z[243]);Z(z[660]);Z(z[378]);Z(z[477]);Z(z[478]);Z(z[237]);Z(z[480]);Z(z[481]);Z(z[482]);Z(z[425]);Z(z[484]);Z(z[485]);Z(z[486]);Z(z[487]);Z(z[642]);Z(z[1112]);Z(z[1113]);Z(z[1112]);Z(z[1113]);Z(z[489]);Z(z[490]);Z(z[491]);Z(z[491]);Z(z[493]);Z(z[493]);Z(z[495]);Z(z[381]);Z(z[382]);Z(z[383]);Z(z[384]);Z(z[385]);Z(z[386]);Z(z[383]);Z(z[388]);Z(z[389]);Z(z[390]);Z(z[391]);Z(z[392]);Z(z[743]);Z(z[393]);Z(z[394]);Z(z[395]);Z(z[1139]);Z(z[745]);Z(z[397]);Z([[2,'!='],[[6],[[7],[3,'listitem']],[3,'eMain']],[1,2]]);Z(z[398]);Z(z[399]);Z(z[98]);Z(z[147]);Z(z[525]);Z(z[526]);Z(z[527]);Z(z[528]);Z(z[529]);Z(z[530]);Z(z[531]);Z(z[532]);Z(z[408]);Z(z[534]);Z(z[535]);Z(z[170]);Z(z[1154]);Z(z[538]);Z(z[765]);Z(z[766]);Z(z[767]);Z(z[398]);Z(z[399]);Z(z[98]);Z(z[147]);Z(z[774]);Z(z[417]);Z(z[418]);Z(z[419]);Z(z[420]);Z([a,z[383],z[421][2],z[412]]);Z(z[392]);Z(z[423]);Z(z[98]);Z(z[425]);Z(z[426]);Z(z[1168]);Z(z[428]);Z(z[1]);Z(z[7]);Z(z[569]);Z(z[1173]);Z(z[571]);Z(z[493]);Z(z[379]);Z(z[433]);Z(z[434]);Z(z[435]);Z(z[436]);Z(z[437]);Z(z[438]);Z(z[439]);Z(z[434]);Z(z[569]);Z([a,z[1186][1],z[1186][2],z[833][3],z[1186][4]]);Z(z[571]);Z(z[441]);Z(z[442]);Z(z[443]);Z(z[92]);Z([a,z[445][1],z[445][2]]);Z(z[446]);Z(z[447]);Z(z[448]);Z(z[449]);Z(z[449]);Z(z[451]);Z(z[451]);Z(z[235]);Z(z[236]);Z(z[237]);Z(z[238]);Z(z[1204]);Z(z[1205]);Z(z[457]);Z(z[603]);Z([a,[3,'v-container '],[[2,'?:'],[[2,'>'],[[6],[[7],[3,'eventlist']],[3,'length']],[1,0]],[1,''],[1,'loverNoitem']]]);Z(z[490]);Z([[2,'||'],[[2,'!='],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']],[1,4]],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']],[1,4]],[[2,'=='],[[6],[[7],[3,'loversBannerInfo']],[3,'bannerSwitch']],[1,0]]]]);Z(z[491]);Z(z[491]);Z(z[493]);Z(z[493]);Z(z[495]);Z(z[381]);Z(z[382]);Z(z[383]);Z(z[384]);Z(z[385]);Z(z[386]);Z(z[383]);Z(z[388]);Z(z[389]);Z(z[390]);Z(z[391]);Z(z[392]);Z(z[743]);Z(z[393]);Z(z[394]);Z(z[395]);Z(z[1139]);Z(z[745]);Z(z[397]);Z(z[525]);Z(z[526]);Z(z[527]);Z(z[528]);Z(z[529]);Z(z[530]);Z(z[531]);Z(z[532]);Z(z[408]);Z(z[534]);Z(z[535]);Z(z[170]);Z(z[1154]);Z(z[538]);Z(z[765]);Z(z[766]);Z(z[767]);Z(z[774]);Z(z[417]);Z(z[418]);Z(z[419]);Z(z[420]);Z([a,z[383],z[421][2],z[412]]);Z(z[392]);Z(z[423]);Z(z[98]);Z(z[425]);Z(z[426]);Z(z[1168]);Z(z[428]);Z([3,'editPhotosBtnBox']);Z([3,'editBtnRight']);Z(z[1]);Z([3,'like']);Z(z[237]);Z([3,'icon_commit']);Z(z[412]);Z(z[1390]);Z(z[383]);Z(z[487]);Z([3,'like-btn']);Z([3,'submit']);Z([[2,'=='],[[6],[[7],[3,'listitem']],[3,'likeCnt']],[1,0]]);Z([[2,'>='],[[6],[[7],[3,'listitem']],[3,'likeCnt']],[1,1]]);Z([[2,'>'],[[6],[[7],[3,'listitem']],[3,'likeCnt']],[1,0]]);Z([3,'editBtnLeft']);Z([[2,'=='],[[6],[[7],[3,'listitem']],[3,'readFlag']],[1,1]]);Z(z[1]);Z(z[7]);Z(z[493]);Z(z[434]);Z(z[442]);Z(z[443]);Z(z[92]);Z([a,z[445][1],z[445][2]]);Z(z[446]);Z(z[447]);Z(z[448]);Z(z[449]);Z(z[449]);Z(z[451]);Z(z[451]);Z(z[235]);Z(z[236]);Z(z[237]);Z(z[238]);Z(z[1204]);Z(z[1205]);Z(z[457]);Z([[2,'||'],[[2,'=='],[[7],[3,'userid']],[[6],[[6],[[6],[[6],[[6],[[7],[3,'eventlist']],[[7],[3,'selNumA']]],[3,'list']],[1,0]],[3,'publishUser']],[3,'userid']]],[[6],[[7],[3,'ablumInfo']],[3,'canDelete']]]);Z([[7],[3,'showInviteModal']]);Z(z[378]);Z(z[477]);Z(z[478]);Z(z[489]);Z(z[491]);Z(z[491]);Z(z[493]);Z(z[493]);Z(z[495]);Z(z[381]);Z(z[382]);Z(z[383]);Z(z[384]);Z(z[385]);Z(z[386]);Z(z[383]);Z(z[388]);Z(z[389]);Z(z[390]);Z(z[391]);Z(z[392]);Z(z[743]);Z(z[393]);Z(z[394]);Z(z[395]);Z(z[1139]);Z(z[745]);Z(z[525]);Z(z[526]);Z(z[527]);Z(z[528]);Z(z[529]);Z(z[530]);Z(z[531]);Z(z[532]);Z(z[408]);Z(z[534]);Z(z[535]);Z(z[170]);Z(z[1154]);Z(z[538]);Z(z[765]);Z(z[766]);Z(z[767]);Z(z[774]);Z(z[1]);Z(z[7]);Z(z[569]);Z(z[1173]);Z(z[571]);Z(z[493]);Z(z[379]);Z(z[433]);Z(z[434]);Z(z[435]);Z(z[436]);Z(z[437]);Z(z[438]);Z(z[439]);Z(z[434]);Z(z[569]);Z([3,'upLoadOld']);Z(z[571]);Z(z[442]);Z(z[443]);Z(z[92]);Z([a,z[445][1],z[445][2]]);Z(z[446]);Z(z[447]);Z(z[448]);Z(z[449]);Z(z[449]);Z(z[451]);Z(z[451]);Z(z[235]);Z(z[236]);Z(z[237]);Z(z[238]);Z(z[1204]);Z(z[1205]);Z(z[457]);Z(z[603]);Z(z[378]);Z(z[477]);Z(z[478]);Z(z[237]);Z(z[480]);Z(z[481]);Z(z[482]);Z(z[425]);Z(z[484]);Z(z[485]);Z(z[486]);Z(z[487]);Z([[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']],[1,30]]);Z(z[488]);Z(z[488]);Z(z[489]);Z(z[490]);Z([[2,'||'],[[2,'!='],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']],[1,30]],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']],[1,30]],[[2,'=='],[[6],[[7],[3,'loversBannerInfo']],[3,'bannerSwitch']],[1,0]]]]);Z(z[491]);Z(z[491]);Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'ablumInfo']],[3,'groupNewType']],[1,30]],[[2,'=='],[[6],[[7],[3,'loversBannerInfo']],[3,'bannerSwitch']],[1,1]]]);Z(z[493]);Z(z[493]);Z(z[495]);Z(z[381]);Z(z[382]);Z(z[383]);Z([[2,'?:'],[[2,'>'],[[6],[[6],[[6],[[6],[[7],[3,'item']],[3,'list']],[1,0]],[3,'picList']],[3,'length']],[1,0]],[1,'loadmore'],[1,'']]);Z(z[385]);Z(z[386]);Z(z[383]);Z(z[388]);Z(z[389]);Z(z[390]);Z(z[391]);Z(z[392]);Z([[2,'>'],[[6],[[6],[[7],[3,'listitem']],[3,'picList']],[3,'length']],[1,0]]);Z(z[393]);Z(z[394]);Z(z[395]);Z(z[1139]);Z(z[397]);Z(z[525]);Z(z[526]);Z(z[527]);Z(z[528]);Z(z[529]);Z(z[531]);Z(z[532]);Z(z[408]);Z(z[534]);Z(z[535]);Z(z[170]);Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'../../pages/eventdetail/eventdetail?lastPage\x3dalbumDetail\x26dateindex\x3d'],[[7],[3,'Aindex']]],[1,'\x26rowindex\x3d']],[[7],[3,'Bindex']]],[1,'\x26eid\x3d']],[[6],[[7],[3,'listitem']],[3,'eid']]],[1,'\x26efrom\x3dviewscoll']]);Z(z[538]);Z(z[417]);Z(z[418]);Z(z[419]);Z(z[420]);Z([a,z[383],z[421][2],z[412]]);Z(z[392]);Z(z[423]);Z(z[98]);Z(z[425]);Z(z[426]);Z(z[1563]);Z(z[428]);Z(z[1]);Z(z[7]);Z([3,'noitem']);Z(z[1522]);Z([3,'showPvModel']);Z(z[570]);Z([[2,'=='],[[6],[[7],[3,'loversBannerInfo']],[3,'bannerSwitch']],[1,1]]);Z(z[1581]);Z(z[1173]);Z(z[571]);Z(z[493]);Z(z[379]);Z(z[433]);Z(z[434]);Z(z[435]);Z(z[436]);Z(z[437]);Z(z[438]);Z(z[439]);Z(z[434]);Z(z[1581]);Z([a,z[1186][1],z[1186][2],z[833][3],z[1186][4]]);Z(z[1583]);Z(z[441]);Z(z[970]);Z(z[235]);Z(z[236]);Z(z[237]);Z(z[238]);Z(z[1204]);Z(z[1205]);Z(z[457]);Z(z[1426]);Z(z[471]);Z(z[472]);Z(z[233]);Z(z[608]);Z(z[245]);Z(z[464]);Z(z[102]);Z(z[467]);Z(z[469]);Z(z[241]);Z(z[242]);Z(z[243]);Z(z[232]);Z([[7],[3,'showLoveIntroBox']]);Z([[7],[3,'showLoveFirstBox']]);Z(z[658]);Z(z[659]);Z(z[660]);Z(z[473]);Z(z[474]);})(z);__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
}
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./pages/activitypage/activityindex/activityindex.wxml','./pages/activitypage/login/home.wxml','./pages/authorization/authorization.wxml','./pages/blessingActivities/components/sendBlessing/sendBlessing.wxml','./pages/blessingActivities/pages/album/album.wxml','./pages/blessingActivities/pages/detail/detail.wxml','./pages/commonpage/sendcomment/send.wxml','./pages/components/menuModal/menuModal.wxml','./pages/components/publishMenu/publishMenu.wxml','./pages/creatlogin/creatlogin.wxml','./pages/detail/invitation/invitation.wxml','./pages/detail/invited/invited.wxml','./pages/detail/photodetail/photodetail.wxml','./pages/detail/sign/sign.wxml','./pages/downloadApp/downloadApp.wxml','./pages/editplace/editplace.wxml','./pages/eventdetail/eventdetail.wxml','../template/beforeauthpic/beforeauthpic.wxml','./pages/eventdetail2/eventdetail2.wxml','./pages/familyAlbum/eventAxis/eventAxis.wxml','/pages/template/beforeauthpic/beforeauthpic.wxml','./pages/familyAlbum/index/index.wxml','./pages/find/findindex/findindex.wxml','./pages/find/likelist/likelist.wxml','./pages/find/photoerlist/photoerlist.wxml','./pages/grouptypescoll/grouptypescoll.wxml','/pages/template/friendsalbum/friendsalbum.wxml','/pages/template/personalalbum/personalalbum.wxml','/pages/template/babyalbum/babyalbum.wxml','/pages/template/loversalbum/loversalbum.wxml','../template/beforeauthpic/uppicnum.wxml','./pages/index/index.wxml','./pages/loversauth/loversauth.wxml','./pages/loverscloseauth/loverscloseauth.wxml','./pages/makegroup/makegroup.wxml','./pages/makepingtu/makepingtu.wxml','./pages/mayDayActivity/index/index.wxml','./pages/mayDayActivity/upgroup/upgroup.wxml','./pages/minelogin/minelogin.wxml','./pages/moment/moment.wxml','./pages/mymemory/mymemory.wxml','./pages/myself/myself.wxml','./pages/newauth/newauth.wxml','./pages/notification/notification.wxml','./pages/personalPage/personalPage.wxml','./pages/photowall/morephoto/morephoto.wxml','./pages/photowall/photowall.wxml','./pages/pingtu/pingtu.wxml','./pages/publish/components/andFriends/andFriends.wxml','./pages/publish/components/dateAndTime/dateAndTime.wxml','./pages/publish/components/datetime/datetime.wxml','./pages/publish/components/inputText/inputText.wxml','./pages/publish/components/location/location.wxml','./pages/publish/components/syncToOtherAlbums/syncToOtherAlbums.wxml','./pages/publish/pages/audio/audio.wxml','./pages/publish/pages/eventImage/eventImage.wxml','./pages/publish/pages/image/image.wxml','./pages/publish/pages/selectMember/selectMember.wxml','./pages/publish/pages/text/text.wxml','./pages/publish/pages/video/video.wxml','./pages/selectplace/selectplace.wxml','./pages/setting/addmember/addmember.wxml','./pages/setting/addset/addset.wxml','./pages/setting/setting.wxml','./pages/sharehtml/pailide/pailide.wxml','./pages/template/babyalbum/babyalbum.wxml','./pages/template/beforeauthpic/beforeauthpic.wxml','./pages/template/beforeauthpic/uppicnum.wxml','./pages/template/friendsalbum/friendsalbum.wxml','./pages/template/loversalbum/loversalbum.wxml','./pages/template/personalalbum/personalalbum.wxml','./pages/test/index.wxml','./pages/timelinelogin/timelinelogin.wxml','./pages/uploadpic/uploadpic.wxml','./pages/uploadvideo/uploadvideo.wxml','./pages/viewscoll/bigvideo/bigvideo.wxml','./pages/viewscoll/viewscoll.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var oB=_n('view')
_r(oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_o(1,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_o(2,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_o(3,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oB,cF)
if(_o(4,e,s,gg)){cF.wxVkey=1
var hG=_n('view')
_r(hG,'class',5,e,s,gg)
var oH=_v()
_(hG,oH)
if(_o(6,e,s,gg)){oH.wxVkey=1
var cI=_v()
_(oH,cI)
if(_o(7,e,s,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
}
else{oH.wxVkey=2
}
oH.wxXCkey=1
_(cF,hG)
}
else{cF.wxVkey=2
var oJ=_n('view')
_r(oJ,'class',8,e,s,gg)
var lK=_v()
_(oJ,lK)
if(_o(9,e,s,gg)){lK.wxVkey=1
var aL=_v()
_(lK,aL)
if(_o(10,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
}
else{lK.wxVkey=2
}
lK.wxXCkey=1
_(cF,oJ)
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var oP=_v()
_(r,oP)
if(_o(11,e,s,gg)){oP.wxVkey=1
}
oP.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var oR=_n('view')
_r(oR,'class',12,e,s,gg)
var cT=_n('view')
_r(cT,'class',13,e,s,gg)
var hU=_n('view')
_r(hU,'class',14,e,s,gg)
var oV=_m('view',['catch:tap',15,'class',1,'data-tab',2],[],e,s,gg)
var cW=_v()
_(oV,cW)
if(_o(18,e,s,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
_(hU,oV)
var oX=_m('view',['catch:tap',19,'class',1,'data-tab',2],[],e,s,gg)
var lY=_v()
_(oX,lY)
if(_o(22,e,s,gg)){lY.wxVkey=1
}
lY.wxXCkey=1
_(hU,oX)
_(cT,hU)
var aZ=_n('view')
_r(aZ,'class',23,e,s,gg)
var t1=_v()
_(aZ,t1)
if(_o(24,e,s,gg)){t1.wxVkey=1
var b3=_n('view')
_r(b3,'class',25,e,s,gg)
var o4=_v()
_(b3,o4)
if(_o(26,e,s,gg)){o4.wxVkey=1
var f7=_v()
_(o4,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_m('view',['class',28,'style',1],[],o0,h9,gg)
var aDB=_n('view')
_r(aDB,'class',30,o0,h9,gg)
var tEB=_v()
_(aDB,tEB)
if(_o(31,o0,h9,gg)){tEB.wxVkey=1
}
var eFB=_v()
_(aDB,eFB)
if(_o(32,o0,h9,gg)){eFB.wxVkey=1
}
tEB.wxXCkey=1
eFB.wxXCkey=1
_(lCB,aDB)
var bGB=_n('view')
_r(bGB,'class',33,o0,h9,gg)
var xIB=_n('view')
_r(xIB,'class',34,o0,h9,gg)
var oJB=_v()
_(xIB,oJB)
if(_o(35,o0,h9,gg)){oJB.wxVkey=1
}
var fKB=_n('view')
_r(fKB,'class',36,o0,h9,gg)
var cLB=_v()
_(fKB,cLB)
if(_o(37,o0,h9,gg)){cLB.wxVkey=1
}
var hMB=_v()
_(fKB,hMB)
if(_o(38,o0,h9,gg)){hMB.wxVkey=1
}
cLB.wxXCkey=1
hMB.wxXCkey=1
_(xIB,fKB)
oJB.wxXCkey=1
_(bGB,xIB)
var oHB=_v()
_(bGB,oHB)
if(_o(39,o0,h9,gg)){oHB.wxVkey=1
}
oHB.wxXCkey=1
_(lCB,bGB)
_(cAB,lCB)
return cAB
}
f7.wxXCkey=2
_2(27,c8,e,s,gg,f7,'item','index','')
}
var x5=_v()
_(b3,x5)
if(_o(40,e,s,gg)){x5.wxVkey=1
var oNB=_v()
_(x5,oNB)
var cOB=function(lQB,oPB,aRB,gg){
var eTB=_m('view',['class',42,'style',1],[],lQB,oPB,gg)
var bUB=_n('view')
_r(bUB,'class',44,lQB,oPB,gg)
var oVB=_v()
_(bUB,oVB)
if(_o(45,lQB,oPB,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(bUB,xWB)
if(_o(46,lQB,oPB,gg)){xWB.wxVkey=1
}
oVB.wxXCkey=1
xWB.wxXCkey=1
_(eTB,bUB)
var oXB=_n('view')
_r(oXB,'class',47,lQB,oPB,gg)
var cZB=_n('view')
_r(cZB,'class',48,lQB,oPB,gg)
var h1B=_v()
_(cZB,h1B)
if(_o(49,lQB,oPB,gg)){h1B.wxVkey=1
}
var o2B=_n('view')
_r(o2B,'class',50,lQB,oPB,gg)
var c3B=_v()
_(o2B,c3B)
if(_o(51,lQB,oPB,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(o2B,o4B)
if(_o(52,lQB,oPB,gg)){o4B.wxVkey=1
}
c3B.wxXCkey=1
o4B.wxXCkey=1
_(cZB,o2B)
h1B.wxXCkey=1
_(oXB,cZB)
var fYB=_v()
_(oXB,fYB)
if(_o(53,lQB,oPB,gg)){fYB.wxVkey=1
}
fYB.wxXCkey=1
_(eTB,oXB)
_(aRB,eTB)
return aRB
}
oNB.wxXCkey=2
_2(41,cOB,e,s,gg,oNB,'item','index','')
}
var o6=_v()
_(b3,o6)
if(_o(54,e,s,gg)){o6.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
o6.wxXCkey=1
_(t1,b3)
}
var e2=_v()
_(aZ,e2)
if(_o(55,e,s,gg)){e2.wxVkey=1
var l5B=_n('view')
_r(l5B,'class',56,e,s,gg)
var a6B=_v()
_(l5B,a6B)
if(_o(57,e,s,gg)){a6B.wxVkey=1
}
var t7B=_n('view')
_r(t7B,'class',58,e,s,gg)
var e8B=_v()
_(t7B,e8B)
if(_o(59,e,s,gg)){e8B.wxVkey=1
}
var b9B=_v()
_(t7B,b9B)
if(_o(60,e,s,gg)){b9B.wxVkey=1
}
var o0B=_v()
_(t7B,o0B)
if(_o(61,e,s,gg)){o0B.wxVkey=1
}
var xAC=_v()
_(t7B,xAC)
if(_o(62,e,s,gg)){xAC.wxVkey=1
}
e8B.wxXCkey=1
b9B.wxXCkey=1
o0B.wxXCkey=1
xAC.wxXCkey=1
_(l5B,t7B)
a6B.wxXCkey=1
_(e2,l5B)
}
t1.wxXCkey=1
e2.wxXCkey=1
_(cT,aZ)
_(oR,cT)
var fS=_v()
_(oR,fS)
if(_o(63,e,s,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
_(r,oR)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var fCC=_n('view')
_r(fCC,'class',64,e,s,gg)
var oFC=_n('view')
_r(oFC,'class',65,e,s,gg)
var cGC=_v()
_(oFC,cGC)
if(_o(66,e,s,gg)){cGC.wxVkey=1
}
var lIC=_n('view')
_r(lIC,'class',67,e,s,gg)
var aJC=_v()
_(lIC,aJC)
if(_o(68,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(lIC,tKC)
if(_o(69,e,s,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(lIC,eLC)
if(_o(70,e,s,gg)){eLC.wxVkey=1
}
aJC.wxXCkey=1
tKC.wxXCkey=1
eLC.wxXCkey=1
_(oFC,lIC)
var oHC=_v()
_(oFC,oHC)
if(_o(71,e,s,gg)){oHC.wxVkey=1
}
cGC.wxXCkey=1
oHC.wxXCkey=1
_(fCC,oFC)
var cDC=_v()
_(fCC,cDC)
if(_o(72,e,s,gg)){cDC.wxVkey=1
}
var bMC=_v()
_(fCC,bMC)
var oNC=function(oPC,xOC,fQC,gg){
var hSC=_v()
_(fQC,hSC)
if(_o(74,oPC,xOC,gg)){hSC.wxVkey=1
var oTC=_n('view')
_r(oTC,'class',75,oPC,xOC,gg)
var cUC=_v()
_(oTC,cUC)
if(_o(76,oPC,xOC,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(oTC,oVC)
if(_o(77,oPC,xOC,gg)){oVC.wxVkey=1
}
cUC.wxXCkey=1
oVC.wxXCkey=1
_(hSC,oTC)
}
hSC.wxXCkey=1
return fQC
}
bMC.wxXCkey=2
_2(73,oNC,e,s,gg,bMC,'item','index','')
var lWC=_n('view')
_r(lWC,'class',78,e,s,gg)
var aXC=_v()
_(lWC,aXC)
if(_o(79,e,s,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(lWC,tYC)
if(_o(80,e,s,gg)){tYC.wxVkey=1
}
var eZC=_v()
_(lWC,eZC)
if(_o(81,e,s,gg)){eZC.wxVkey=1
}
aXC.wxXCkey=1
tYC.wxXCkey=1
eZC.wxXCkey=1
_(fCC,lWC)
var hEC=_v()
_(fCC,hEC)
if(_o(82,e,s,gg)){hEC.wxVkey=1
}
var b1C=_m('send-blessing',['bindclose',83,'bindreturnResult',1,'eventId',2,'groupId',3,'scene',4,'selectedIndex',5,'show',6,'userId',7],[],e,s,gg)
_(fCC,b1C)
cDC.wxXCkey=1
hEC.wxXCkey=1
_(r,fCC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var o4C=_v()
_(r,o4C)
if(_o(91,e,s,gg)){o4C.wxVkey=1
var f5C=_m('view',['catchtouchmove',92,'class',1],[],e,s,gg)
var c6C=_n('slot')
_(f5C,c6C)
_(o4C,f5C)
}
o4C.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var o8C=_v()
_(r,o8C)
if(_o(94,e,s,gg)){o8C.wxVkey=1
}
o8C.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var bED=_n('view')
_r(bED,'class',95,e,s,gg)
var oFD=_v()
_(bED,oFD)
if(_o(96,e,s,gg)){oFD.wxVkey=1
}
else{oFD.wxVkey=2
var xGD=_v()
_(oFD,xGD)
var oHD=function(cJD,fID,hKD,gg){
var cMD=_v()
_(hKD,cMD)
if(_o(99,cJD,fID,gg)){cMD.wxVkey=1
}
cMD.wxXCkey=1
return hKD
}
xGD.wxXCkey=2
_2(97,oHD,e,s,gg,xGD,'item','index','{{index}}')
}
oFD.wxXCkey=1
_(r,bED)
var aBD=_v()
_(r,aBD)
if(_o(100,e,s,gg)){aBD.wxVkey=1
}
var tCD=_v()
_(r,tCD)
if(_o(101,e,s,gg)){tCD.wxVkey=1
}
var eDD=_v()
_(r,eDD)
if(_o(102,e,s,gg)){eDD.wxVkey=1
}
aBD.wxXCkey=1
tCD.wxXCkey=1
eDD.wxXCkey=1
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var eRD=_n('view')
_r(eRD,'class',103,e,s,gg)
var bSD=_v()
_(eRD,bSD)
if(_o(104,e,s,gg)){bSD.wxVkey=1
}
else{bSD.wxVkey=2
var oTD=_v()
_(bSD,oTD)
var xUD=function(fWD,oVD,cXD,gg){
var oZD=_v()
_(cXD,oZD)
if(_o(107,fWD,oVD,gg)){oZD.wxVkey=1
}
oZD.wxXCkey=1
return cXD
}
oTD.wxXCkey=2
_2(105,xUD,e,s,gg,oTD,'item','index','{{index}}')
}
bSD.wxXCkey=1
_(r,eRD)
var lOD=_v()
_(r,lOD)
if(_o(108,e,s,gg)){lOD.wxVkey=1
}
var aPD=_v()
_(r,aPD)
if(_o(109,e,s,gg)){aPD.wxVkey=1
}
var tQD=_v()
_(r,tQD)
if(_o(110,e,s,gg)){tQD.wxVkey=1
}
lOD.wxXCkey=1
aPD.wxXCkey=1
tQD.wxXCkey=1
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var t5D=_n('view')
_r(t5D,'class',111,e,s,gg)
var e6D=_v()
_(t5D,e6D)
if(_o(112,e,s,gg)){e6D.wxVkey=1
}
else{e6D.wxVkey=2
var b7D=_v()
_(e6D,b7D)
var o8D=function(o0D,x9D,fAE,gg){
var hCE=_v()
_(fAE,hCE)
if(_o(115,o0D,x9D,gg)){hCE.wxVkey=1
}
hCE.wxXCkey=1
return fAE
}
b7D.wxXCkey=2
_2(113,o8D,e,s,gg,b7D,'item','index','{{index}}')
}
e6D.wxXCkey=1
_(r,t5D)
var o2D=_v()
_(r,o2D)
if(_o(116,e,s,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(r,l3D)
if(_o(117,e,s,gg)){l3D.wxVkey=1
}
var a4D=_v()
_(r,a4D)
if(_o(118,e,s,gg)){a4D.wxVkey=1
}
o2D.wxXCkey=1
l3D.wxXCkey=1
a4D.wxXCkey=1
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var lGE=e_[x[16]].i
var aHE=_v()
_(r,aHE)
if(_o(119,e,s,gg)){aHE.wxVkey=1
var oRE=_m('scroll-view',['scrollY',-1,'bindscroll',120,'bindscrolltolower',1,'lowerThreshold',2,'scrollIntoView',3,'style',4],[],e,s,gg)
var cSE=_v()
_(oRE,cSE)
if(_o(125,e,s,gg)){cSE.wxVkey=1
var oTE=_n('view')
_r(oTE,'class',126,e,s,gg)
var tWE=_n('view')
_r(tWE,'class',127,e,s,gg)
var eXE=_v()
_(tWE,eXE)
if(_o(128,e,s,gg)){eXE.wxVkey=1
}
var bYE=_v()
_(tWE,bYE)
if(_o(129,e,s,gg)){bYE.wxVkey=1
}
var oZE=_v()
_(tWE,oZE)
if(_o(130,e,s,gg)){oZE.wxVkey=1
}
eXE.wxXCkey=1
bYE.wxXCkey=1
oZE.wxXCkey=1
_(oTE,tWE)
var lUE=_v()
_(oTE,lUE)
if(_o(131,e,s,gg)){lUE.wxVkey=1
}
var x1E=_n('view')
_r(x1E,'class',132,e,s,gg)
var o2E=_v()
_(x1E,o2E)
if(_o(133,e,s,gg)){o2E.wxVkey=1
var eBF=_v()
_(o2E,eBF)
if(_o(134,e,s,gg)){eBF.wxVkey=1
}
eBF.wxXCkey=1
}
var f3E=_v()
_(x1E,f3E)
if(_o(135,e,s,gg)){f3E.wxVkey=1
var bCF=_v()
_(f3E,bCF)
if(_o(136,e,s,gg)){bCF.wxVkey=1
}
bCF.wxXCkey=1
}
var c4E=_v()
_(x1E,c4E)
if(_o(137,e,s,gg)){c4E.wxVkey=1
}
var h5E=_v()
_(x1E,h5E)
if(_o(138,e,s,gg)){h5E.wxVkey=1
}
var o6E=_v()
_(x1E,o6E)
if(_o(139,e,s,gg)){o6E.wxVkey=1
var oDF=_v()
_(o6E,oDF)
var xEF=function(fGF,oFF,cHF,gg){
var oJF=_v()
_(cHF,oJF)
if(_o(142,fGF,oFF,gg)){oJF.wxVkey=1
}
oJF.wxXCkey=1
return cHF
}
oDF.wxXCkey=2
_2(140,xEF,e,s,gg,oDF,'item','index','item')
}
var c7E=_v()
_(x1E,c7E)
if(_o(143,e,s,gg)){c7E.wxVkey=1
var cKF=_v()
_(c7E,cKF)
if(_o(144,e,s,gg)){cKF.wxVkey=1
var oLF=_v()
_(cKF,oLF)
var lMF=function(tOF,aNF,ePF,gg){
var oRF=_v()
_(ePF,oRF)
if(_o(147,tOF,aNF,gg)){oRF.wxVkey=1
}
oRF.wxXCkey=1
return ePF
}
oLF.wxXCkey=2
_2(145,lMF,e,s,gg,oLF,'item','index','{{item}}')
}
cKF.wxXCkey=1
}
var o8E=_v()
_(x1E,o8E)
if(_o(148,e,s,gg)){o8E.wxVkey=1
}
var xSF=_n('view')
_r(xSF,'class',149,e,s,gg)
var oTF=_v()
_(xSF,oTF)
if(_o(150,e,s,gg)){oTF.wxVkey=1
var cYF=_n('view')
_r(cYF,'class',151,e,s,gg)
var oZF=_v()
_(cYF,oZF)
if(_o(152,e,s,gg)){oZF.wxVkey=1
}
var l1F=_v()
_(cYF,l1F)
if(_o(153,e,s,gg)){l1F.wxVkey=1
}
var a2F=_v()
_(cYF,a2F)
if(_o(154,e,s,gg)){a2F.wxVkey=1
}
var t3F=_v()
_(cYF,t3F)
if(_o(155,e,s,gg)){t3F.wxVkey=1
}
oZF.wxXCkey=1
l1F.wxXCkey=1
a2F.wxXCkey=1
t3F.wxXCkey=1
_(oTF,cYF)
}
var fUF=_v()
_(xSF,fUF)
if(_o(156,e,s,gg)){fUF.wxVkey=1
}
var cVF=_v()
_(xSF,cVF)
if(_o(157,e,s,gg)){cVF.wxVkey=1
}
else if(_o(158,e,s,gg)){cVF.wxVkey=2
}
else if(_o(159,e,s,gg)){cVF.wxVkey=3
var e4F=_v()
_(cVF,e4F)
if(_o(160,e,s,gg)){e4F.wxVkey=1
}
e4F.wxXCkey=1
}
var hWF=_v()
_(xSF,hWF)
if(_o(161,e,s,gg)){hWF.wxVkey=1
var b5F=_v()
_(hWF,b5F)
if(_o(162,e,s,gg)){b5F.wxVkey=1
}
b5F.wxXCkey=1
}
var oXF=_v()
_(xSF,oXF)
if(_o(163,e,s,gg)){oXF.wxVkey=1
}
oTF.wxXCkey=1
fUF.wxXCkey=1
cVF.wxXCkey=1
hWF.wxXCkey=1
oXF.wxXCkey=1
_(x1E,xSF)
var l9E=_v()
_(x1E,l9E)
if(_o(164,e,s,gg)){l9E.wxVkey=1
}
var a0E=_v()
_(x1E,a0E)
if(_o(165,e,s,gg)){a0E.wxVkey=1
}
var tAF=_v()
_(x1E,tAF)
if(_o(166,e,s,gg)){tAF.wxVkey=1
}
var o6F=_n('view')
_r(o6F,'class',167,e,s,gg)
var x7F=_v()
_(o6F,x7F)
if(_o(168,e,s,gg)){x7F.wxVkey=1
}
var o8F=_v()
_(o6F,o8F)
if(_o(169,e,s,gg)){o8F.wxVkey=1
var hAG=_m('navigator',['catchtap',170,'hoverClass',1,'url',2],[],e,s,gg)
var oBG=_v()
_(hAG,oBG)
if(_o(173,e,s,gg)){oBG.wxVkey=1
var cCG=_v()
_(oBG,cCG)
var oDG=function(aFG,lEG,tGG,gg){
var bIG=_v()
_(tGG,bIG)
if(_o(178,aFG,lEG,gg)){bIG.wxVkey=1
}
bIG.wxXCkey=1
return tGG
}
cCG.wxXCkey=2
_2(176,oDG,e,s,gg,cCG,'likeitem','likeindex','{{eventinfo.likeID}}')
}
oBG.wxXCkey=1
_(o8F,hAG)
}
var f9F=_v()
_(o6F,f9F)
if(_o(179,e,s,gg)){f9F.wxVkey=1
var oJG=_n('view')
_r(oJG,'class',180,e,s,gg)
var oLG=_v()
_(oJG,oLG)
var fMG=function(hOG,cNG,oPG,gg){
var oRG=_v()
_(oPG,oRG)
if(_o(183,hOG,cNG,gg)){oRG.wxVkey=1
}
oRG.wxXCkey=1
return oPG
}
oLG.wxXCkey=2
_2(181,fMG,e,s,gg,oLG,'item','index','{{index}}')
var xKG=_v()
_(oJG,xKG)
if(_o(184,e,s,gg)){xKG.wxVkey=1
}
xKG.wxXCkey=1
_(f9F,oJG)
}
var c0F=_v()
_(o6F,c0F)
if(_o(185,e,s,gg)){c0F.wxVkey=1
var lSG=_v()
_(c0F,lSG)
if(_o(186,e,s,gg)){lSG.wxVkey=1
var aTG=_m('view',['class',187,'id',1],[],e,s,gg)
var eVG=_v()
_(aTG,eVG)
var bWG=function(xYG,oXG,oZG,gg){
var c2G=_m('view',['catchlongpress',191,'class',1,'data-index',2,'data-longcid',3,'data-longeid',4],[],xYG,oXG,gg)
var h3G=_v()
_(c2G,h3G)
if(_o(196,xYG,oXG,gg)){h3G.wxVkey=1
var o4G=_n('view')
_r(o4G,'class',197,xYG,oXG,gg)
var c5G=_v()
_(o4G,c5G)
if(_o(198,xYG,oXG,gg)){c5G.wxVkey=1
}
var o6G=_v()
_(o4G,o6G)
if(_o(199,xYG,oXG,gg)){o6G.wxVkey=1
}
c5G.wxXCkey=1
o6G.wxXCkey=1
_(h3G,o4G)
}
else{h3G.wxVkey=2
var l7G=_n('view')
_r(l7G,'class',200,xYG,oXG,gg)
var a8G=_v()
_(l7G,a8G)
if(_o(201,xYG,oXG,gg)){a8G.wxVkey=1
}
var t9G=_v()
_(l7G,t9G)
if(_o(202,xYG,oXG,gg)){t9G.wxVkey=1
}
a8G.wxXCkey=1
t9G.wxXCkey=1
_(h3G,l7G)
}
h3G.wxXCkey=1
_(oZG,c2G)
return oZG
}
eVG.wxXCkey=2
_2(189,bWG,e,s,gg,eVG,'item','index','{{index}}')
var tUG=_v()
_(aTG,tUG)
if(_o(203,e,s,gg)){tUG.wxVkey=1
}
tUG.wxXCkey=1
_(lSG,aTG)
}
else{lSG.wxVkey=2
}
lSG.wxXCkey=1
}
x7F.wxXCkey=1
o8F.wxXCkey=1
f9F.wxXCkey=1
c0F.wxXCkey=1
_(x1E,o6F)
o2E.wxXCkey=1
f3E.wxXCkey=1
c4E.wxXCkey=1
h5E.wxXCkey=1
o6E.wxXCkey=1
c7E.wxXCkey=1
o8E.wxXCkey=1
l9E.wxXCkey=1
a0E.wxXCkey=1
tAF.wxXCkey=1
_(oTE,x1E)
var aVE=_v()
_(oTE,aVE)
if(_o(204,e,s,gg)){aVE.wxVkey=1
var e0G=_v()
_(aVE,e0G)
if(_o(205,e,s,gg)){e0G.wxVkey=1
}
e0G.wxXCkey=1
}
else{aVE.wxVkey=2
var bAH=_v()
_(aVE,bAH)
if(_o(206,e,s,gg)){bAH.wxVkey=1
var oDH=_m('view',['catchtap',207,'class',1],[],e,s,gg)
var fEH=_v()
_(oDH,fEH)
if(_o(209,e,s,gg)){fEH.wxVkey=1
}
fEH.wxXCkey=1
_(bAH,oDH)
var oBH=_v()
_(bAH,oBH)
if(_o(210,e,s,gg)){oBH.wxVkey=1
var cFH=_v()
_(oBH,cFH)
if(_o(211,e,s,gg)){cFH.wxVkey=1
}
cFH.wxXCkey=1
}
var xCH=_v()
_(bAH,xCH)
if(_o(212,e,s,gg)){xCH.wxVkey=1
var hGH=_v()
_(xCH,hGH)
if(_o(213,e,s,gg)){hGH.wxVkey=1
}
hGH.wxXCkey=1
}
oBH.wxXCkey=1
xCH.wxXCkey=1
}
bAH.wxXCkey=1
}
lUE.wxXCkey=1
aVE.wxXCkey=1
_(cSE,oTE)
}
cSE.wxXCkey=1
_(aHE,oRE)
}
else{aHE.wxVkey=2
var oHH=_m('scroll-view',['scrollY',-1,'bindscroll',214,'bindscrolltolower',1,'lowerThreshold',2,'scrollIntoView',3,'style',4],[],e,s,gg)
var cIH=_v()
_(oHH,cIH)
if(_o(219,e,s,gg)){cIH.wxVkey=1
var oJH=_n('view')
_r(oJH,'class',220,e,s,gg)
var lKH=_v()
_(oJH,lKH)
if(_o(221,e,s,gg)){lKH.wxVkey=1
}
var aLH=_v()
_(oJH,aLH)
if(_o(222,e,s,gg)){aLH.wxVkey=1
}
var tMH=_n('view')
_r(tMH,'class',223,e,s,gg)
var eNH=_v()
_(tMH,eNH)
if(_o(224,e,s,gg)){eNH.wxVkey=1
}
else if(_o(225,e,s,gg)){eNH.wxVkey=2
}
else if(_o(226,e,s,gg)){eNH.wxVkey=3
var xQH=_v()
_(eNH,xQH)
if(_o(227,e,s,gg)){xQH.wxVkey=1
}
xQH.wxXCkey=1
}
var bOH=_v()
_(tMH,bOH)
if(_o(228,e,s,gg)){bOH.wxVkey=1
var oRH=_v()
_(bOH,oRH)
if(_o(229,e,s,gg)){oRH.wxVkey=1
}
oRH.wxXCkey=1
}
var oPH=_v()
_(tMH,oPH)
if(_o(230,e,s,gg)){oPH.wxVkey=1
}
eNH.wxXCkey=1
bOH.wxXCkey=1
oPH.wxXCkey=1
_(oJH,tMH)
lKH.wxXCkey=1
aLH.wxXCkey=1
_(cIH,oJH)
}
cIH.wxXCkey=1
_(aHE,oHH)
}
var tIE=_v()
_(r,tIE)
if(_o(231,e,s,gg)){tIE.wxVkey=1
}
var eJE=_v()
_(r,eJE)
if(_o(232,e,s,gg)){eJE.wxVkey=1
}
var bKE=_v()
_(r,bKE)
if(_o(233,e,s,gg)){bKE.wxVkey=1
}
var oLE=_v()
_(r,oLE)
if(_o(234,e,s,gg)){oLE.wxVkey=1
}
var fSH=_m('view',['catchtap',235,'class',1],[],e,s,gg)
var cTH=_m('view',['catchtap',237,'class',1],[],e,s,gg)
var hUH=_v()
_(cTH,hUH)
if(_o(239,e,s,gg)){hUH.wxVkey=1
}
var oVH=_v()
_(cTH,oVH)
if(_o(240,e,s,gg)){oVH.wxVkey=1
}
hUH.wxXCkey=1
oVH.wxXCkey=1
_(fSH,cTH)
_(r,fSH)
_ai(lGE,x[17],e_,x[16],537,2)
var xME=_v()
_(r,xME)
if(_o(241,e,s,gg)){xME.wxVkey=1
var cWH=_v()
_(xME,cWH)
var oXH=_o(243,e,s,gg)
var lYH=_gd(x[16],oXH,e_,d_)
if(lYH){
var aZH=_1(242,e,s,gg) || {}
var cur_globalf=gg.f
cWH.wxXCkey=3
lYH(aZH,aZH,cWH,gg)
gg.f=cur_globalf
}
else _w(oXH,x[16],538,14)
}
var oNE=_v()
_(r,oNE)
if(_o(244,e,s,gg)){oNE.wxVkey=1
}
var fOE=_v()
_(r,fOE)
if(_o(245,e,s,gg)){fOE.wxVkey=1
}
var cPE=_v()
_(r,cPE)
if(_o(246,e,s,gg)){cPE.wxVkey=1
}
var hQE=_v()
_(r,hQE)
if(_o(247,e,s,gg)){hQE.wxVkey=1
}
aHE.wxXCkey=1
tIE.wxXCkey=1
eJE.wxXCkey=1
bKE.wxXCkey=1
oLE.wxXCkey=1
xME.wxXCkey=1
oNE.wxXCkey=1
fOE.wxXCkey=1
cPE.wxXCkey=1
hQE.wxXCkey=1
lGE.pop()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[18]]={}
var m17=function(e,s,r,gg){
var e2H=e_[x[18]].i
var b3H=_v()
_(r,b3H)
if(_o(248,e,s,gg)){b3H.wxVkey=1
var lCI=_m('scroll-view',['scrollY',-1,'bindscroll',249,'bindscrolltolower',1,'lowerThreshold',2,'scrollIntoView',3,'style',4],[],e,s,gg)
var aDI=_v()
_(lCI,aDI)
if(_o(254,e,s,gg)){aDI.wxVkey=1
var tEI=_n('view')
_r(tEI,'class',255,e,s,gg)
var oHI=_n('view')
_r(oHI,'class',256,e,s,gg)
var xII=_v()
_(oHI,xII)
if(_o(257,e,s,gg)){xII.wxVkey=1
}
var oJI=_v()
_(oHI,oJI)
if(_o(258,e,s,gg)){oJI.wxVkey=1
}
var fKI=_v()
_(oHI,fKI)
if(_o(259,e,s,gg)){fKI.wxVkey=1
}
xII.wxXCkey=1
oJI.wxXCkey=1
fKI.wxXCkey=1
_(tEI,oHI)
var eFI=_v()
_(tEI,eFI)
if(_o(260,e,s,gg)){eFI.wxVkey=1
}
var cLI=_n('view')
_r(cLI,'class',261,e,s,gg)
var hMI=_v()
_(cLI,hMI)
if(_o(262,e,s,gg)){hMI.wxVkey=1
var xWI=_v()
_(hMI,xWI)
if(_o(263,e,s,gg)){xWI.wxVkey=1
}
xWI.wxXCkey=1
}
var oNI=_v()
_(cLI,oNI)
if(_o(264,e,s,gg)){oNI.wxVkey=1
var oXI=_v()
_(oNI,oXI)
if(_o(265,e,s,gg)){oXI.wxVkey=1
}
oXI.wxXCkey=1
}
var cOI=_v()
_(cLI,cOI)
if(_o(266,e,s,gg)){cOI.wxVkey=1
}
var oPI=_v()
_(cLI,oPI)
if(_o(267,e,s,gg)){oPI.wxVkey=1
}
var lQI=_v()
_(cLI,lQI)
if(_o(268,e,s,gg)){lQI.wxVkey=1
var fYI=_v()
_(lQI,fYI)
var cZI=function(o2I,h1I,c3I,gg){
var l5I=_v()
_(c3I,l5I)
if(_o(271,o2I,h1I,gg)){l5I.wxVkey=1
}
l5I.wxXCkey=1
return c3I
}
fYI.wxXCkey=2
_2(269,cZI,e,s,gg,fYI,'item','index','item')
}
var aRI=_v()
_(cLI,aRI)
if(_o(272,e,s,gg)){aRI.wxVkey=1
var a6I=_v()
_(aRI,a6I)
if(_o(273,e,s,gg)){a6I.wxVkey=1
var t7I=_v()
_(a6I,t7I)
var e8I=function(o0I,b9I,xAJ,gg){
var fCJ=_v()
_(xAJ,fCJ)
if(_o(276,o0I,b9I,gg)){fCJ.wxVkey=1
}
fCJ.wxXCkey=1
return xAJ
}
t7I.wxXCkey=2
_2(274,e8I,e,s,gg,t7I,'item','index','{{item}}')
}
a6I.wxXCkey=1
}
var tSI=_v()
_(cLI,tSI)
if(_o(277,e,s,gg)){tSI.wxVkey=1
}
var cDJ=_n('view')
_r(cDJ,'class',278,e,s,gg)
var hEJ=_v()
_(cDJ,hEJ)
if(_o(279,e,s,gg)){hEJ.wxVkey=1
var aJJ=_n('view')
_r(aJJ,'class',280,e,s,gg)
var tKJ=_v()
_(aJJ,tKJ)
if(_o(281,e,s,gg)){tKJ.wxVkey=1
}
var eLJ=_v()
_(aJJ,eLJ)
if(_o(282,e,s,gg)){eLJ.wxVkey=1
}
var bMJ=_v()
_(aJJ,bMJ)
if(_o(283,e,s,gg)){bMJ.wxVkey=1
}
var oNJ=_v()
_(aJJ,oNJ)
if(_o(284,e,s,gg)){oNJ.wxVkey=1
}
tKJ.wxXCkey=1
eLJ.wxXCkey=1
bMJ.wxXCkey=1
oNJ.wxXCkey=1
_(hEJ,aJJ)
}
var oFJ=_v()
_(cDJ,oFJ)
if(_o(285,e,s,gg)){oFJ.wxVkey=1
}
var cGJ=_v()
_(cDJ,cGJ)
if(_o(286,e,s,gg)){cGJ.wxVkey=1
}
else if(_o(287,e,s,gg)){cGJ.wxVkey=2
}
else if(_o(288,e,s,gg)){cGJ.wxVkey=3
var xOJ=_v()
_(cGJ,xOJ)
if(_o(289,e,s,gg)){xOJ.wxVkey=1
}
xOJ.wxXCkey=1
}
var oHJ=_v()
_(cDJ,oHJ)
if(_o(290,e,s,gg)){oHJ.wxVkey=1
var oPJ=_v()
_(oHJ,oPJ)
if(_o(291,e,s,gg)){oPJ.wxVkey=1
}
oPJ.wxXCkey=1
}
var lIJ=_v()
_(cDJ,lIJ)
if(_o(292,e,s,gg)){lIJ.wxVkey=1
}
hEJ.wxXCkey=1
oFJ.wxXCkey=1
cGJ.wxXCkey=1
oHJ.wxXCkey=1
lIJ.wxXCkey=1
_(cLI,cDJ)
var eTI=_v()
_(cLI,eTI)
if(_o(293,e,s,gg)){eTI.wxVkey=1
}
var bUI=_v()
_(cLI,bUI)
if(_o(294,e,s,gg)){bUI.wxVkey=1
}
var oVI=_v()
_(cLI,oVI)
if(_o(295,e,s,gg)){oVI.wxVkey=1
}
var fQJ=_n('view')
_r(fQJ,'class',296,e,s,gg)
var cRJ=_v()
_(fQJ,cRJ)
if(_o(297,e,s,gg)){cRJ.wxVkey=1
}
var hSJ=_v()
_(fQJ,hSJ)
if(_o(298,e,s,gg)){hSJ.wxVkey=1
var oVJ=_m('navigator',['catchtap',299,'hoverClass',1,'url',2],[],e,s,gg)
var lWJ=_v()
_(oVJ,lWJ)
if(_o(302,e,s,gg)){lWJ.wxVkey=1
var aXJ=_v()
_(lWJ,aXJ)
var tYJ=function(b1J,eZJ,o2J,gg){
var o4J=_v()
_(o2J,o4J)
if(_o(307,b1J,eZJ,gg)){o4J.wxVkey=1
}
o4J.wxXCkey=1
return o2J
}
aXJ.wxXCkey=2
_2(305,tYJ,e,s,gg,aXJ,'likeitem','likeindex','{{eventinfo.likeID}}')
}
lWJ.wxXCkey=1
_(hSJ,oVJ)
}
var oTJ=_v()
_(fQJ,oTJ)
if(_o(308,e,s,gg)){oTJ.wxVkey=1
var f5J=_n('view')
_r(f5J,'class',309,e,s,gg)
var h7J=_v()
_(f5J,h7J)
var o8J=function(o0J,c9J,lAK,gg){
var tCK=_v()
_(lAK,tCK)
if(_o(312,o0J,c9J,gg)){tCK.wxVkey=1
}
tCK.wxXCkey=1
return lAK
}
h7J.wxXCkey=2
_2(310,o8J,e,s,gg,h7J,'item','index','{{index}}')
var c6J=_v()
_(f5J,c6J)
if(_o(313,e,s,gg)){c6J.wxVkey=1
}
c6J.wxXCkey=1
_(oTJ,f5J)
}
var cUJ=_v()
_(fQJ,cUJ)
if(_o(314,e,s,gg)){cUJ.wxVkey=1
var eDK=_v()
_(cUJ,eDK)
if(_o(315,e,s,gg)){eDK.wxVkey=1
var bEK=_m('view',['class',316,'id',1],[],e,s,gg)
var xGK=_v()
_(bEK,xGK)
var oHK=function(cJK,fIK,hKK,gg){
var cMK=_m('view',['catchlongpress',320,'class',1,'data-index',2,'data-longcid',3,'data-longeid',4],[],cJK,fIK,gg)
var oNK=_v()
_(cMK,oNK)
if(_o(325,cJK,fIK,gg)){oNK.wxVkey=1
var lOK=_n('view')
_r(lOK,'class',326,cJK,fIK,gg)
var aPK=_v()
_(lOK,aPK)
if(_o(327,cJK,fIK,gg)){aPK.wxVkey=1
}
var tQK=_v()
_(lOK,tQK)
if(_o(328,cJK,fIK,gg)){tQK.wxVkey=1
}
aPK.wxXCkey=1
tQK.wxXCkey=1
_(oNK,lOK)
}
else{oNK.wxVkey=2
var eRK=_n('view')
_r(eRK,'class',329,cJK,fIK,gg)
var bSK=_v()
_(eRK,bSK)
if(_o(330,cJK,fIK,gg)){bSK.wxVkey=1
}
var oTK=_v()
_(eRK,oTK)
if(_o(331,cJK,fIK,gg)){oTK.wxVkey=1
}
bSK.wxXCkey=1
oTK.wxXCkey=1
_(oNK,eRK)
}
oNK.wxXCkey=1
_(hKK,cMK)
return hKK
}
xGK.wxXCkey=2
_2(318,oHK,e,s,gg,xGK,'item','index','{{index}}')
var oFK=_v()
_(bEK,oFK)
if(_o(332,e,s,gg)){oFK.wxVkey=1
}
oFK.wxXCkey=1
_(eDK,bEK)
}
else{eDK.wxVkey=2
}
eDK.wxXCkey=1
}
cRJ.wxXCkey=1
hSJ.wxXCkey=1
oTJ.wxXCkey=1
cUJ.wxXCkey=1
_(cLI,fQJ)
hMI.wxXCkey=1
oNI.wxXCkey=1
cOI.wxXCkey=1
oPI.wxXCkey=1
lQI.wxXCkey=1
aRI.wxXCkey=1
tSI.wxXCkey=1
eTI.wxXCkey=1
bUI.wxXCkey=1
oVI.wxXCkey=1
_(tEI,cLI)
var bGI=_v()
_(tEI,bGI)
if(_o(333,e,s,gg)){bGI.wxVkey=1
var xUK=_v()
_(bGI,xUK)
if(_o(334,e,s,gg)){xUK.wxVkey=1
}
xUK.wxXCkey=1
}
else{bGI.wxVkey=2
var oVK=_v()
_(bGI,oVK)
if(_o(335,e,s,gg)){oVK.wxVkey=1
var hYK=_m('view',['catchtap',336,'class',1],[],e,s,gg)
var oZK=_v()
_(hYK,oZK)
if(_o(338,e,s,gg)){oZK.wxVkey=1
}
oZK.wxXCkey=1
_(oVK,hYK)
var fWK=_v()
_(oVK,fWK)
if(_o(339,e,s,gg)){fWK.wxVkey=1
var c1K=_v()
_(fWK,c1K)
if(_o(340,e,s,gg)){c1K.wxVkey=1
}
c1K.wxXCkey=1
}
var cXK=_v()
_(oVK,cXK)
if(_o(341,e,s,gg)){cXK.wxVkey=1
var o2K=_v()
_(cXK,o2K)
if(_o(342,e,s,gg)){o2K.wxVkey=1
}
o2K.wxXCkey=1
}
fWK.wxXCkey=1
cXK.wxXCkey=1
}
oVK.wxXCkey=1
}
eFI.wxXCkey=1
bGI.wxXCkey=1
_(aDI,tEI)
}
aDI.wxXCkey=1
_(b3H,lCI)
}
else{b3H.wxVkey=2
var l3K=_m('scroll-view',['scrollY',-1,'bindscroll',343,'bindscrolltolower',1,'lowerThreshold',2,'scrollIntoView',3,'style',4],[],e,s,gg)
var a4K=_v()
_(l3K,a4K)
if(_o(348,e,s,gg)){a4K.wxVkey=1
var t5K=_n('view')
_r(t5K,'class',349,e,s,gg)
var e6K=_v()
_(t5K,e6K)
if(_o(350,e,s,gg)){e6K.wxVkey=1
}
var b7K=_v()
_(t5K,b7K)
if(_o(351,e,s,gg)){b7K.wxVkey=1
}
var o8K=_n('view')
_r(o8K,'class',352,e,s,gg)
var x9K=_v()
_(o8K,x9K)
if(_o(353,e,s,gg)){x9K.wxVkey=1
}
else if(_o(354,e,s,gg)){x9K.wxVkey=2
}
else if(_o(355,e,s,gg)){x9K.wxVkey=3
var cBL=_v()
_(x9K,cBL)
if(_o(356,e,s,gg)){cBL.wxVkey=1
}
cBL.wxXCkey=1
}
var o0K=_v()
_(o8K,o0K)
if(_o(357,e,s,gg)){o0K.wxVkey=1
var hCL=_v()
_(o0K,hCL)
if(_o(358,e,s,gg)){hCL.wxVkey=1
}
hCL.wxXCkey=1
}
var fAL=_v()
_(o8K,fAL)
if(_o(359,e,s,gg)){fAL.wxVkey=1
}
x9K.wxXCkey=1
o0K.wxXCkey=1
fAL.wxXCkey=1
_(t5K,o8K)
e6K.wxXCkey=1
b7K.wxXCkey=1
_(a4K,t5K)
}
a4K.wxXCkey=1
_(b3H,l3K)
}
var o4H=_v()
_(r,o4H)
if(_o(360,e,s,gg)){o4H.wxVkey=1
}
var x5H=_v()
_(r,x5H)
if(_o(361,e,s,gg)){x5H.wxVkey=1
}
var o6H=_v()
_(r,o6H)
if(_o(362,e,s,gg)){o6H.wxVkey=1
}
var f7H=_v()
_(r,f7H)
if(_o(363,e,s,gg)){f7H.wxVkey=1
}
var oDL=_m('view',['catchtap',364,'class',1],[],e,s,gg)
var cEL=_m('view',['catchtap',366,'class',1],[],e,s,gg)
var oFL=_v()
_(cEL,oFL)
if(_o(368,e,s,gg)){oFL.wxVkey=1
}
var lGL=_v()
_(cEL,lGL)
if(_o(369,e,s,gg)){lGL.wxVkey=1
}
oFL.wxXCkey=1
lGL.wxXCkey=1
_(oDL,cEL)
_(r,oDL)
_ai(e2H,x[17],e_,x[18],537,2)
var c8H=_v()
_(r,c8H)
if(_o(370,e,s,gg)){c8H.wxVkey=1
var aHL=_v()
_(c8H,aHL)
var tIL=_o(372,e,s,gg)
var eJL=_gd(x[18],tIL,e_,d_)
if(eJL){
var bKL=_1(371,e,s,gg) || {}
var cur_globalf=gg.f
aHL.wxXCkey=3
eJL(bKL,bKL,aHL,gg)
gg.f=cur_globalf
}
else _w(tIL,x[18],538,14)
}
var h9H=_v()
_(r,h9H)
if(_o(373,e,s,gg)){h9H.wxVkey=1
}
var o0H=_v()
_(r,o0H)
if(_o(374,e,s,gg)){o0H.wxVkey=1
}
var cAI=_v()
_(r,cAI)
if(_o(375,e,s,gg)){cAI.wxVkey=1
}
var oBI=_v()
_(r,oBI)
if(_o(376,e,s,gg)){oBI.wxVkey=1
}
b3H.wxXCkey=1
o4H.wxXCkey=1
x5H.wxXCkey=1
o6H.wxXCkey=1
f7H.wxXCkey=1
c8H.wxXCkey=1
h9H.wxXCkey=1
o0H.wxXCkey=1
cAI.wxXCkey=1
oBI.wxXCkey=1
e2H.pop()
return r
}
e_[x[18]]={f:m17,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[19]]={}
var m18=function(e,s,r,gg){
var xML=e_[x[19]].i
var eXL=_n('view')
_r(eXL,'class',377,e,s,gg)
var o2L=_n('view')
_r(o2L,'class',378,e,s,gg)
var c4L=_v()
_(o2L,c4L)
if(_o(379,e,s,gg)){c4L.wxVkey=1
var h5L=_n('view')
_r(h5L,'class',380,e,s,gg)
var c7L=_v()
_(h5L,c7L)
var o8L=function(a0L,l9L,tAM,gg){
var bCM=_m('view',['catchtap',384,'class',1,'data-eid',2,'data-sela',3,'data-selb',4],[],a0L,l9L,gg)
var oDM=_v()
_(bCM,oDM)
var xEM=function(fGM,oFM,cHM,gg){
var oJM=_n('view')
_r(oJM,'class',393,fGM,oFM,gg)
var cKM=_n('view')
_r(cKM,'class',394,fGM,oFM,gg)
var oLM=_v()
_(cKM,oLM)
if(_o(395,fGM,oFM,gg)){oLM.wxVkey=1
}
var lMM=_v()
_(cKM,lMM)
if(_o(396,fGM,oFM,gg)){lMM.wxVkey=1
}
oLM.wxXCkey=1
lMM.wxXCkey=1
_(oJM,cKM)
var aNM=_v()
_(oJM,aNM)
if(_o(397,fGM,oFM,gg)){aNM.wxVkey=1
}
var tOM=_v()
_(oJM,tOM)
if(_o(398,fGM,oFM,gg)){tOM.wxVkey=1
var ePM=_v()
_(tOM,ePM)
var bQM=function(xSM,oRM,oTM,gg){
var cVM=_v()
_(oTM,cVM)
if(_o(401,xSM,oRM,gg)){cVM.wxVkey=1
}
cVM.wxXCkey=1
return oTM
}
ePM.wxXCkey=2
_2(399,bQM,fGM,oFM,gg,ePM,'item','index','{{index}}')
}
var hWM=_n('view')
_r(hWM,'class',402,fGM,oFM,gg)
var oXM=_v()
_(hWM,oXM)
if(_o(403,fGM,oFM,gg)){oXM.wxVkey=1
}
var cYM=_v()
_(hWM,cYM)
if(_o(404,fGM,oFM,gg)){cYM.wxVkey=1
}
var oZM=_v()
_(hWM,oZM)
if(_o(405,fGM,oFM,gg)){oZM.wxVkey=1
}
var l1M=_v()
_(hWM,l1M)
if(_o(406,fGM,oFM,gg)){l1M.wxVkey=1
var a2M=_v()
_(l1M,a2M)
var t3M=function(b5M,e4M,o6M,gg){
var o8M=_m('view',['catchtap',409,'class',1,'data-arr',2,'data-childindex',3,'data-index',4,'data-parentindex',5,'data-sel',6],[],b5M,e4M,gg)
var f9M=_v()
_(o8M,f9M)
if(_o(416,b5M,e4M,gg)){f9M.wxVkey=1
}
f9M.wxXCkey=1
_(o6M,o8M)
return o6M
}
a2M.wxXCkey=2
_2(408,t3M,fGM,oFM,gg,a2M,'item','index','')
}
oXM.wxXCkey=1
cYM.wxXCkey=1
oZM.wxXCkey=1
l1M.wxXCkey=1
_(oJM,hWM)
aNM.wxXCkey=1
tOM.wxXCkey=1
_(cHM,oJM)
var c0M=_n('view')
_r(c0M,'class',417,fGM,oFM,gg)
var hAN=_v()
_(c0M,hAN)
if(_o(418,fGM,oFM,gg)){hAN.wxVkey=1
var cCN=_m('view',['catchtap',419,'class',1,'data-dataindex',2,'data-eid',3],[],fGM,oFM,gg)
var oDN=_v()
_(cCN,oDN)
var lEN=function(tGN,aFN,eHN,gg){
var oJN=_v()
_(eHN,oJN)
if(_o(425,tGN,aFN,gg)){oJN.wxVkey=1
}
oJN.wxXCkey=1
return eHN
}
oDN.wxXCkey=2
_2(423,lEN,fGM,oFM,gg,oDN,'item','index','{{index}}')
var xKN=_m('navigator',['catchtap',426,'url',1],[],fGM,oFM,gg)
var oLN=_v()
_(xKN,oLN)
if(_o(428,fGM,oFM,gg)){oLN.wxVkey=1
}
oLN.wxXCkey=1
_(cCN,xKN)
_(hAN,cCN)
}
var oBN=_v()
_(c0M,oBN)
if(_o(429,fGM,oFM,gg)){oBN.wxVkey=1
}
hAN.wxXCkey=1
oBN.wxXCkey=1
_(cHM,c0M)
return cHM
}
oDM.wxXCkey=2
_2(391,xEM,a0L,l9L,gg,oDM,'listitem','Bindex','{{listitem.eid}}')
_(tAM,bCM)
return tAM
}
c7L.wxXCkey=2
_2(382,o8L,e,s,gg,c7L,'item','Aindex','{{Aindex}}')
var o6L=_v()
_(h5L,o6L)
if(_o(430,e,s,gg)){o6L.wxVkey=1
}
o6L.wxXCkey=1
_(c4L,h5L)
}
else{c4L.wxVkey=2
}
c4L.wxXCkey=1
var f3L=_v()
_(o2L,f3L)
if(_o(431,e,s,gg)){f3L.wxVkey=1
}
f3L.wxXCkey=1
_(eXL,o2L)
var bYL=_v()
_(eXL,bYL)
if(_o(432,e,s,gg)){bYL.wxVkey=1
var fMN=_v()
_(bYL,fMN)
if(_o(433,e,s,gg)){fMN.wxVkey=1
var cNN=_v()
_(fMN,cNN)
if(_o(434,e,s,gg)){cNN.wxVkey=1
}
cNN.wxXCkey=1
}
else if(_o(435,e,s,gg)){fMN.wxVkey=2
var hON=_v()
_(fMN,hON)
if(_o(436,e,s,gg)){hON.wxVkey=1
var oPN=_n('view')
_r(oPN,'class',437,e,s,gg)
var cQN=_v()
_(oPN,cQN)
if(_o(438,e,s,gg)){cQN.wxVkey=1
}
var oRN=_v()
_(oPN,oRN)
if(_o(439,e,s,gg)){oRN.wxVkey=1
}
cQN.wxXCkey=1
oRN.wxXCkey=1
_(hON,oPN)
}
hON.wxXCkey=1
}
else{fMN.wxVkey=3
var lSN=_v()
_(fMN,lSN)
if(_o(440,e,s,gg)){lSN.wxVkey=1
}
lSN.wxXCkey=1
}
fMN.wxXCkey=1
}
var oZL=_v()
_(eXL,oZL)
if(_o(441,e,s,gg)){oZL.wxVkey=1
}
var x1L=_v()
_(eXL,x1L)
if(_o(442,e,s,gg)){x1L.wxVkey=1
var aTN=_m('view',['catch:tap',443,'catch:touchmove',1,'class',2],[],e,s,gg)
var tUN=_v()
_(aTN,tUN)
if(_o(446,e,s,gg)){tUN.wxVkey=1
}
var eVN=_v()
_(aTN,eVN)
if(_o(447,e,s,gg)){eVN.wxVkey=1
var bWN=_n('view')
_r(bWN,'class',448,e,s,gg)
var oXN=_v()
_(bWN,oXN)
if(_o(449,e,s,gg)){oXN.wxVkey=1
}
var xYN=_v()
_(bWN,xYN)
if(_o(450,e,s,gg)){xYN.wxVkey=1
}
var oZN=_v()
_(bWN,oZN)
if(_o(451,e,s,gg)){oZN.wxVkey=1
}
var f1N=_v()
_(bWN,f1N)
if(_o(452,e,s,gg)){f1N.wxVkey=1
}
oXN.wxXCkey=1
xYN.wxXCkey=1
oZN.wxXCkey=1
f1N.wxXCkey=1
_(eVN,bWN)
}
tUN.wxXCkey=1
eVN.wxXCkey=1
_(x1L,aTN)
}
var c2N=_m('view',['catchtap',453,'class',1],[],e,s,gg)
var h3N=_m('view',['catchtap',455,'class',1],[],e,s,gg)
var o4N=_v()
_(h3N,o4N)
if(_o(457,e,s,gg)){o4N.wxVkey=1
}
var c5N=_v()
_(h3N,c5N)
if(_o(458,e,s,gg)){c5N.wxVkey=1
}
o4N.wxXCkey=1
c5N.wxXCkey=1
_(c2N,h3N)
_(eXL,c2N)
bYL.wxXCkey=1
oZL.wxXCkey=1
x1L.wxXCkey=1
_(r,eXL)
_ai(xML,x[20],e_,x[19],336,2)
var oNL=_v()
_(r,oNL)
if(_o(459,e,s,gg)){oNL.wxVkey=1
var o6N=_v()
_(oNL,o6N)
var l7N=_o(461,e,s,gg)
var a8N=_gd(x[19],l7N,e_,d_)
if(a8N){
var t9N=_1(460,e,s,gg) || {}
var cur_globalf=gg.f
o6N.wxXCkey=3
a8N(t9N,t9N,o6N,gg)
gg.f=cur_globalf
}
else _w(l7N,x[19],337,14)
}
var fOL=_v()
_(r,fOL)
if(_o(462,e,s,gg)){fOL.wxVkey=1
}
var cPL=_v()
_(r,cPL)
if(_o(463,e,s,gg)){cPL.wxVkey=1
}
var hQL=_v()
_(r,hQL)
if(_o(464,e,s,gg)){hQL.wxVkey=1
}
var oRL=_v()
_(r,oRL)
if(_o(465,e,s,gg)){oRL.wxVkey=1
}
var cSL=_v()
_(r,cSL)
if(_o(466,e,s,gg)){cSL.wxVkey=1
}
var oTL=_v()
_(r,oTL)
if(_o(467,e,s,gg)){oTL.wxVkey=1
}
var lUL=_v()
_(r,lUL)
if(_o(468,e,s,gg)){lUL.wxVkey=1
var e0N=_v()
_(lUL,e0N)
if(_o(469,e,s,gg)){e0N.wxVkey=1
}
e0N.wxXCkey=1
}
else{lUL.wxVkey=2
var bAO=_v()
_(lUL,bAO)
if(_o(470,e,s,gg)){bAO.wxVkey=1
}
bAO.wxXCkey=1
}
var aVL=_v()
_(r,aVL)
if(_o(471,e,s,gg)){aVL.wxVkey=1
}
var tWL=_v()
_(r,tWL)
if(_o(472,e,s,gg)){tWL.wxVkey=1
}
var oBO=_m('menu-modal',['modalShow',473,'title',1],[],e,s,gg)
_(r,oBO)
oNL.wxXCkey=1
fOL.wxXCkey=1
cPL.wxXCkey=1
hQL.wxXCkey=1
oRL.wxXCkey=1
cSL.wxXCkey=1
oTL.wxXCkey=1
lUL.wxXCkey=1
aVL.wxXCkey=1
tWL.wxXCkey=1
xML.pop()
return r
}
e_[x[19]]={f:m18,j:[],i:[],ti:[x[20]],ic:[]}
d_[x[21]]={}
var m19=function(e,s,r,gg){
var oDO=e_[x[21]].i
var oPO=_n('view')
_r(oPO,'class',475,e,s,gg)
var cTO=_n('view')
_r(cTO,'class',476,e,s,gg)
var aZO=_n('view')
_r(aZO,'class',477,e,s,gg)
var t1O=_v()
_(aZO,t1O)
if(_o(478,e,s,gg)){t1O.wxVkey=1
var b3O=_m('view',['catchtap',479,'class',1],[],e,s,gg)
var x5O=_v()
_(b3O,x5O)
var o6O=function(c8O,f7O,h9O,gg){
var cAP=_v()
_(h9O,cAP)
if(_o(483,c8O,f7O,gg)){cAP.wxVkey=1
}
cAP.wxXCkey=1
return h9O
}
x5O.wxXCkey=2
_2(481,o6O,e,s,gg,x5O,'item','index','{{item.gmtime}}')
var o4O=_v()
_(b3O,o4O)
if(_o(484,e,s,gg)){o4O.wxVkey=1
var oBP=_m('form',['bindsubmit',485,'class',1,'reportSubmit',2],[],e,s,gg)
var lCP=_v()
_(oBP,lCP)
if(_o(488,e,s,gg)){lCP.wxVkey=1
}
lCP.wxXCkey=1
_(o4O,oBP)
}
o4O.wxXCkey=1
_(t1O,b3O)
}
var e2O=_v()
_(aZO,e2O)
if(_o(489,e,s,gg)){e2O.wxVkey=1
}
t1O.wxXCkey=1
e2O.wxXCkey=1
_(cTO,aZO)
var hUO=_v()
_(cTO,hUO)
if(_o(490,e,s,gg)){hUO.wxVkey=1
}
var oVO=_v()
_(cTO,oVO)
if(_o(491,e,s,gg)){oVO.wxVkey=1
var aDP=_v()
_(oVO,aDP)
if(_o(492,e,s,gg)){aDP.wxVkey=1
}
aDP.wxXCkey=1
}
var cWO=_v()
_(cTO,cWO)
if(_o(493,e,s,gg)){cWO.wxVkey=1
}
var oXO=_v()
_(cTO,oXO)
if(_o(494,e,s,gg)){oXO.wxVkey=1
var tEP=_n('view')
_r(tEP,'class',495,e,s,gg)
var bGP=_v()
_(tEP,bGP)
var oHP=function(oJP,xIP,fKP,gg){
var hMP=_m('view',['catchtap',499,'class',1,'data-eid',2,'data-sela',3,'data-selb',4],[],oJP,xIP,gg)
var oNP=_v()
_(hMP,oNP)
var cOP=function(lQP,oPP,aRP,gg){
var eTP=_v()
_(aRP,eTP)
if(_o(508,lQP,oPP,gg)){eTP.wxVkey=1
var bUP=_n('view')
_r(bUP,'class',509,lQP,oPP,gg)
var xWP=_n('view')
_r(xWP,'class',510,lQP,oPP,gg)
var oXP=_v()
_(xWP,oXP)
if(_o(511,lQP,oPP,gg)){oXP.wxVkey=1
}
var fYP=_v()
_(xWP,fYP)
if(_o(512,lQP,oPP,gg)){fYP.wxVkey=1
}
var cZP=_n('view')
_r(cZP,'class',513,lQP,oPP,gg)
var h1P=_v()
_(cZP,h1P)
if(_o(514,lQP,oPP,gg)){h1P.wxVkey=1
var o4P=_v()
_(h1P,o4P)
if(_o(515,lQP,oPP,gg)){o4P.wxVkey=1
}
o4P.wxXCkey=1
}
var o2P=_v()
_(cZP,o2P)
if(_o(516,lQP,oPP,gg)){o2P.wxVkey=1
var l5P=_v()
_(o2P,l5P)
if(_o(517,lQP,oPP,gg)){l5P.wxVkey=1
}
l5P.wxXCkey=1
}
var c3P=_v()
_(cZP,c3P)
if(_o(518,lQP,oPP,gg)){c3P.wxVkey=1
}
h1P.wxXCkey=1
o2P.wxXCkey=1
c3P.wxXCkey=1
_(xWP,cZP)
oXP.wxXCkey=1
fYP.wxXCkey=1
_(bUP,xWP)
var oVP=_v()
_(bUP,oVP)
if(_o(519,lQP,oPP,gg)){oVP.wxVkey=1
var a6P=_v()
_(oVP,a6P)
if(_o(520,lQP,oPP,gg)){a6P.wxVkey=1
}
var t7P=_v()
_(oVP,t7P)
if(_o(521,lQP,oPP,gg)){t7P.wxVkey=1
var b9P=_v()
_(t7P,b9P)
var o0P=function(oBQ,xAQ,fCQ,gg){
var hEQ=_v()
_(fCQ,hEQ)
if(_o(524,oBQ,xAQ,gg)){hEQ.wxVkey=1
}
hEQ.wxXCkey=1
return fCQ
}
b9P.wxXCkey=2
_2(522,o0P,lQP,oPP,gg,b9P,'item','index','{{index}}')
}
var e8P=_v()
_(oVP,e8P)
if(_o(525,lQP,oPP,gg)){e8P.wxVkey=1
var oFQ=_m('view',['catchtap',526,'class',1,'data-url',2],[],lQP,oPP,gg)
var cGQ=_v()
_(oFQ,cGQ)
if(_o(529,lQP,oPP,gg)){cGQ.wxVkey=1
}
cGQ.wxXCkey=1
_(e8P,oFQ)
}
else if(_o(530,lQP,oPP,gg)){e8P.wxVkey=2
var oHQ=_v()
_(e8P,oHQ)
var lIQ=function(tKQ,aJQ,eLQ,gg){
var oNQ=_v()
_(eLQ,oNQ)
if(_o(535,tKQ,aJQ,gg)){oNQ.wxVkey=1
var xOQ=_m('navigator',['catchtap',536,'url',1],[],tKQ,aJQ,gg)
var oPQ=_v()
_(xOQ,oPQ)
if(_o(538,tKQ,aJQ,gg)){oPQ.wxVkey=1
}
oPQ.wxXCkey=1
_(oNQ,xOQ)
}
oNQ.wxXCkey=1
return eLQ
}
oHQ.wxXCkey=2
_2(533,lIQ,lQP,oPP,gg,oHQ,'picitem','picindex','{{picindex}}')
}
else if(_o(539,lQP,oPP,gg)){e8P.wxVkey=3
var fQQ=_n('view')
_r(fQQ,'class',540,lQP,oPP,gg)
var cRQ=_v()
_(fQQ,cRQ)
if(_o(541,lQP,oPP,gg)){cRQ.wxVkey=1
}
var hSQ=_v()
_(fQQ,hSQ)
if(_o(542,lQP,oPP,gg)){hSQ.wxVkey=1
}
var oTQ=_v()
_(fQQ,oTQ)
if(_o(543,lQP,oPP,gg)){oTQ.wxVkey=1
}
var cUQ=_v()
_(fQQ,cUQ)
if(_o(544,lQP,oPP,gg)){cUQ.wxVkey=1
var oVQ=_v()
_(cUQ,oVQ)
var lWQ=function(tYQ,aXQ,eZQ,gg){
var o2Q=_m('view',['catchtap',547,'class',1,'data-arr',2,'data-childindex',3,'data-index',4,'data-parentindex',5,'data-sel',6],[],tYQ,aXQ,gg)
var x3Q=_v()
_(o2Q,x3Q)
if(_o(554,tYQ,aXQ,gg)){x3Q.wxVkey=1
}
x3Q.wxXCkey=1
_(eZQ,o2Q)
return eZQ
}
oVQ.wxXCkey=2
_2(546,lWQ,lQP,oPP,gg,oVQ,'item','index','')
}
cRQ.wxXCkey=1
hSQ.wxXCkey=1
oTQ.wxXCkey=1
cUQ.wxXCkey=1
_(e8P,fQQ)
}
a6P.wxXCkey=1
t7P.wxXCkey=1
e8P.wxXCkey=1
}
oVP.wxXCkey=1
_(eTP,bUP)
var o4Q=_n('view')
_r(o4Q,'class',555,lQP,oPP,gg)
var f5Q=_v()
_(o4Q,f5Q)
if(_o(556,lQP,oPP,gg)){f5Q.wxVkey=1
var h7Q=_m('view',['catchtap',557,'class',1,'data-dataindex',2,'data-eid',3],[],lQP,oPP,gg)
var o8Q=_v()
_(h7Q,o8Q)
var c9Q=function(lAR,o0Q,aBR,gg){
var eDR=_v()
_(aBR,eDR)
if(_o(563,lAR,o0Q,gg)){eDR.wxVkey=1
}
eDR.wxXCkey=1
return aBR
}
o8Q.wxXCkey=2
_2(561,c9Q,lQP,oPP,gg,o8Q,'item','index','{{index}}')
var bER=_m('navigator',['catchtap',564,'url',1],[],lQP,oPP,gg)
var oFR=_v()
_(bER,oFR)
if(_o(566,lQP,oPP,gg)){oFR.wxVkey=1
}
oFR.wxXCkey=1
_(h7Q,bER)
_(f5Q,h7Q)
}
var c6Q=_v()
_(o4Q,c6Q)
if(_o(567,lQP,oPP,gg)){c6Q.wxVkey=1
}
f5Q.wxXCkey=1
c6Q.wxXCkey=1
_(eTP,o4Q)
}
eTP.wxXCkey=1
return aRP
}
oNP.wxXCkey=2
_2(506,cOP,oJP,xIP,gg,oNP,'listitem','Bindex','{{listitem.eid}}')
_(fKP,hMP)
return fKP
}
bGP.wxXCkey=2
_2(497,oHP,e,s,gg,bGP,'item','Aindex','{{Aindex}}')
var eFP=_v()
_(tEP,eFP)
if(_o(568,e,s,gg)){eFP.wxVkey=1
}
eFP.wxXCkey=1
_(oXO,tEP)
}
else{oXO.wxVkey=2
var xGR=_m('view',['catchtap',569,'class',1],[],e,s,gg)
var oHR=_v()
_(xGR,oHR)
if(_o(571,e,s,gg)){oHR.wxVkey=1
}
oHR.wxXCkey=1
_(oXO,xGR)
}
var lYO=_v()
_(cTO,lYO)
if(_o(572,e,s,gg)){lYO.wxVkey=1
}
hUO.wxXCkey=1
oVO.wxXCkey=1
cWO.wxXCkey=1
oXO.wxXCkey=1
lYO.wxXCkey=1
_(oPO,cTO)
var xQO=_v()
_(oPO,xQO)
if(_o(573,e,s,gg)){xQO.wxVkey=1
var fIR=_v()
_(xQO,fIR)
if(_o(574,e,s,gg)){fIR.wxVkey=1
var cJR=_v()
_(fIR,cJR)
if(_o(575,e,s,gg)){cJR.wxVkey=1
}
cJR.wxXCkey=1
}
else if(_o(576,e,s,gg)){fIR.wxVkey=2
var hKR=_v()
_(fIR,hKR)
if(_o(577,e,s,gg)){hKR.wxVkey=1
var oLR=_n('view')
_r(oLR,'class',578,e,s,gg)
var cMR=_v()
_(oLR,cMR)
if(_o(579,e,s,gg)){cMR.wxVkey=1
}
var oNR=_v()
_(oLR,oNR)
if(_o(580,e,s,gg)){oNR.wxVkey=1
}
cMR.wxXCkey=1
oNR.wxXCkey=1
_(hKR,oLR)
}
hKR.wxXCkey=1
}
else{fIR.wxVkey=3
var lOR=_v()
_(fIR,lOR)
if(_o(581,e,s,gg)){lOR.wxVkey=1
}
lOR.wxXCkey=1
}
fIR.wxXCkey=1
}
var oRO=_v()
_(oPO,oRO)
if(_o(582,e,s,gg)){oRO.wxVkey=1
}
var fSO=_v()
_(oPO,fSO)
if(_o(583,e,s,gg)){fSO.wxVkey=1
var aPR=_m('view',['catch:tap',584,'catch:touchmove',1,'class',2],[],e,s,gg)
var tQR=_v()
_(aPR,tQR)
if(_o(587,e,s,gg)){tQR.wxVkey=1
}
var eRR=_v()
_(aPR,eRR)
if(_o(588,e,s,gg)){eRR.wxVkey=1
var bSR=_n('view')
_r(bSR,'class',589,e,s,gg)
var oTR=_v()
_(bSR,oTR)
if(_o(590,e,s,gg)){oTR.wxVkey=1
}
var xUR=_n('view')
_r(xUR,'class',591,e,s,gg)
var oVR=_v()
_(xUR,oVR)
if(_o(592,e,s,gg)){oVR.wxVkey=1
}
var fWR=_v()
_(xUR,fWR)
if(_o(593,e,s,gg)){fWR.wxVkey=1
}
var cXR=_v()
_(xUR,cXR)
if(_o(594,e,s,gg)){cXR.wxVkey=1
}
var hYR=_v()
_(xUR,hYR)
if(_o(595,e,s,gg)){hYR.wxVkey=1
}
oVR.wxXCkey=1
fWR.wxXCkey=1
cXR.wxXCkey=1
hYR.wxXCkey=1
_(bSR,xUR)
oTR.wxXCkey=1
_(eRR,bSR)
}
tQR.wxXCkey=1
eRR.wxXCkey=1
_(fSO,aPR)
}
var oZR=_m('view',['catchtap',596,'class',1],[],e,s,gg)
var c1R=_m('view',['catchtap',598,'class',1],[],e,s,gg)
var o2R=_v()
_(c1R,o2R)
if(_o(600,e,s,gg)){o2R.wxVkey=1
}
var l3R=_v()
_(c1R,l3R)
if(_o(601,e,s,gg)){l3R.wxVkey=1
}
var a4R=_v()
_(c1R,a4R)
if(_o(602,e,s,gg)){a4R.wxVkey=1
}
var t5R=_v()
_(c1R,t5R)
if(_o(603,e,s,gg)){t5R.wxVkey=1
}
o2R.wxXCkey=1
l3R.wxXCkey=1
a4R.wxXCkey=1
t5R.wxXCkey=1
_(oZR,c1R)
_(oPO,oZR)
xQO.wxXCkey=1
oRO.wxXCkey=1
fSO.wxXCkey=1
_(r,oPO)
_ai(oDO,x[20],e_,x[21],488,2)
var fEO=_v()
_(r,fEO)
if(_o(604,e,s,gg)){fEO.wxVkey=1
var e6R=_v()
_(fEO,e6R)
var b7R=_o(606,e,s,gg)
var o8R=_gd(x[21],b7R,e_,d_)
if(o8R){
var x9R=_1(605,e,s,gg) || {}
var cur_globalf=gg.f
e6R.wxXCkey=3
o8R(x9R,x9R,e6R,gg)
gg.f=cur_globalf
}
else _w(b7R,x[21],489,14)
}
var cFO=_v()
_(r,cFO)
if(_o(607,e,s,gg)){cFO.wxVkey=1
}
var hGO=_v()
_(r,hGO)
if(_o(608,e,s,gg)){hGO.wxVkey=1
}
var oHO=_v()
_(r,oHO)
if(_o(609,e,s,gg)){oHO.wxVkey=1
}
var cIO=_v()
_(r,cIO)
if(_o(610,e,s,gg)){cIO.wxVkey=1
}
var oJO=_v()
_(r,oJO)
if(_o(611,e,s,gg)){oJO.wxVkey=1
}
var lKO=_v()
_(r,lKO)
if(_o(612,e,s,gg)){lKO.wxVkey=1
}
var aLO=_v()
_(r,aLO)
if(_o(613,e,s,gg)){aLO.wxVkey=1
}
var tMO=_v()
_(r,tMO)
if(_o(614,e,s,gg)){tMO.wxVkey=1
var o0R=_v()
_(tMO,o0R)
if(_o(615,e,s,gg)){o0R.wxVkey=1
}
o0R.wxXCkey=1
}
else{tMO.wxVkey=2
var fAS=_v()
_(tMO,fAS)
if(_o(616,e,s,gg)){fAS.wxVkey=1
}
fAS.wxXCkey=1
}
var eNO=_v()
_(r,eNO)
if(_o(617,e,s,gg)){eNO.wxVkey=1
}
var bOO=_v()
_(r,bOO)
if(_o(618,e,s,gg)){bOO.wxVkey=1
}
var cBS=_m('publish-menu',['bindClose',619,'menuNames',1,'on',2],[],e,s,gg)
_(r,cBS)
var hCS=_m('menu-modal',['modalShow',622,'title',1],[],e,s,gg)
_(r,hCS)
fEO.wxXCkey=1
cFO.wxXCkey=1
hGO.wxXCkey=1
oHO.wxXCkey=1
cIO.wxXCkey=1
oJO.wxXCkey=1
lKO.wxXCkey=1
aLO.wxXCkey=1
tMO.wxXCkey=1
eNO.wxXCkey=1
bOO.wxXCkey=1
oDO.pop()
return r
}
e_[x[21]]={f:m19,j:[],i:[],ti:[x[20]],ic:[]}
d_[x[22]]={}
var m20=function(e,s,r,gg){
return r
}
e_[x[22]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m21=function(e,s,r,gg){
var oFS=_v()
_(r,oFS)
var lGS=function(tIS,aHS,eJS,gg){
var oLS=_v()
_(eJS,oLS)
var xMS=function(fOS,oNS,cPS,gg){
var oRS=_v()
_(cPS,oRS)
if(_o(630,fOS,oNS,gg)){oRS.wxVkey=1
var cSS=_m('view',['catchtap',631,'class',1,'data-a',2,'data-b',3],[],fOS,oNS,gg)
var oTS=_v()
_(cSS,oTS)
if(_o(635,fOS,oNS,gg)){oTS.wxVkey=1
}
oTS.wxXCkey=1
_(oRS,cSS)
}
oRS.wxXCkey=1
return cPS
}
oLS.wxXCkey=2
_2(628,xMS,tIS,aHS,gg,oLS,'picitem','index','{{index}}')
return eJS
}
oFS.wxXCkey=2
_2(625,lGS,e,s,gg,oFS,'item','Aindex','{{Aindex}}')
return r
}
e_[x[23]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m22=function(e,s,r,gg){
var aVS=_v()
_(r,aVS)
var tWS=function(bYS,eXS,oZS,gg){
var o2S=_v()
_(oZS,o2S)
if(_o(637,bYS,eXS,gg)){o2S.wxVkey=1
}
o2S.wxXCkey=1
return oZS
}
aVS.wxXCkey=2
_2(636,tWS,e,s,gg,aVS,'item','index','')
return r
}
e_[x[24]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m23=function(e,s,r,gg){
var c4S=_n('view')
_r(c4S,'class',638,e,s,gg)
var h5S=e_[x[25]].i
var o6S=_v()
_(c4S,o6S)
if(_o(639,e,s,gg)){o6S.wxVkey=1
var hIT=e_[x[25]].j
_ic(x[26],e_,x[25],e,s,o6S,gg);
hIT.pop()
}
else if(_o(640,e,s,gg)){o6S.wxVkey=2
var oJT=e_[x[25]].j
_ic(x[27],e_,x[25],e,s,o6S,gg);
oJT.pop()
}
else if(_o(641,e,s,gg)){o6S.wxVkey=3
var cKT=e_[x[25]].j
_ic(x[28],e_,x[25],e,s,o6S,gg);
cKT.pop()
}
else if(_o(642,e,s,gg)){o6S.wxVkey=4
var oLT=e_[x[25]].j
_ic(x[29],e_,x[25],e,s,o6S,gg);
oLT.pop()
}
_ai(h5S,x[20],e_,x[25],24,4)
var c7S=_v()
_(c4S,c7S)
if(_o(643,e,s,gg)){c7S.wxVkey=1
var lMT=_v()
_(c7S,lMT)
var aNT=_o(645,e,s,gg)
var tOT=_gd(x[25],aNT,e_,d_)
if(tOT){
var ePT=_1(644,e,s,gg) || {}
var cur_globalf=gg.f
lMT.wxXCkey=3
tOT(ePT,ePT,lMT,gg)
gg.f=cur_globalf
}
else _w(aNT,x[25],25,16)
}
var o8S=_v()
_(c4S,o8S)
if(_o(646,e,s,gg)){o8S.wxVkey=1
}
var l9S=_v()
_(c4S,l9S)
if(_o(647,e,s,gg)){l9S.wxVkey=1
}
var a0S=_v()
_(c4S,a0S)
if(_o(648,e,s,gg)){a0S.wxVkey=1
}
var tAT=_v()
_(c4S,tAT)
if(_o(649,e,s,gg)){tAT.wxVkey=1
}
var eBT=_v()
_(c4S,eBT)
if(_o(650,e,s,gg)){eBT.wxVkey=1
}
var bCT=_v()
_(c4S,bCT)
if(_o(651,e,s,gg)){bCT.wxVkey=1
}
var oDT=_v()
_(c4S,oDT)
if(_o(652,e,s,gg)){oDT.wxVkey=1
}
var xET=_v()
_(c4S,xET)
if(_o(653,e,s,gg)){xET.wxVkey=1
var bQT=_v()
_(xET,bQT)
if(_o(654,e,s,gg)){bQT.wxVkey=1
}
bQT.wxXCkey=1
}
else{xET.wxVkey=2
var oRT=_v()
_(xET,oRT)
if(_o(655,e,s,gg)){oRT.wxVkey=1
}
oRT.wxXCkey=1
}
var oFT=_v()
_(c4S,oFT)
if(_o(656,e,s,gg)){oFT.wxVkey=1
}
var fGT=_v()
_(c4S,fGT)
if(_o(657,e,s,gg)){fGT.wxVkey=1
}
_ai(h5S,x[30],e_,x[25],252,4)
var cHT=_v()
_(c4S,cHT)
if(_o(658,e,s,gg)){cHT.wxVkey=1
var xST=_v()
_(cHT,xST)
var oTT=_o(660,e,s,gg)
var fUT=_gd(x[25],oTT,e_,d_)
if(fUT){
var cVT=_1(659,e,s,gg) || {}
var cur_globalf=gg.f
xST.wxXCkey=3
fUT(cVT,cVT,xST,gg)
gg.f=cur_globalf
}
else _w(oTT,x[25],253,16)
}
o6S.wxXCkey=1
c7S.wxXCkey=1
o8S.wxXCkey=1
l9S.wxXCkey=1
a0S.wxXCkey=1
tAT.wxXCkey=1
eBT.wxXCkey=1
bCT.wxXCkey=1
oDT.wxXCkey=1
xET.wxXCkey=1
oFT.wxXCkey=1
fGT.wxXCkey=1
cHT.wxXCkey=1
h5S.pop()
h5S.pop()
_(r,c4S)
var hWT=_m('publish-menu',['bindClose',661,'menuNames',1,'on',2],[],e,s,gg)
_(r,hWT)
var oXT=_m('menu-modal',['modalShow',664,'title',1],[],e,s,gg)
_(r,oXT)
return r
}
e_[x[25]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m24=function(e,s,r,gg){
var oZT=_v()
_(r,oZT)
if(_o(666,e,s,gg)){oZT.wxVkey=1
var o6T=_m('form',['bindsubmit',667,'class',1,'reportSubmit',2],[],e,s,gg)
var x7T=_v()
_(o6T,x7T)
if(_o(670,e,s,gg)){x7T.wxVkey=1
}
x7T.wxXCkey=1
_(oZT,o6T)
}
var l1T=_v()
_(r,l1T)
if(_o(671,e,s,gg)){l1T.wxVkey=1
}
var o8T=_n('view')
_r(o8T,'class',672,e,s,gg)
var f9T=_v()
_(o8T,f9T)
if(_o(673,e,s,gg)){f9T.wxVkey=1
}
var c0T=_v()
_(o8T,c0T)
if(_o(674,e,s,gg)){c0T.wxVkey=1
}
var hAU=_v()
_(o8T,hAU)
if(_o(675,e,s,gg)){hAU.wxVkey=1
}
var oBU=_v()
_(o8T,oBU)
if(_o(676,e,s,gg)){oBU.wxVkey=1
}
var cCU=_v()
_(o8T,cCU)
if(_o(677,e,s,gg)){cCU.wxVkey=1
}
var oDU=_v()
_(o8T,oDU)
if(_o(678,e,s,gg)){oDU.wxVkey=1
}
f9T.wxXCkey=1
c0T.wxXCkey=1
hAU.wxXCkey=1
oBU.wxXCkey=1
cCU.wxXCkey=1
oDU.wxXCkey=1
_(r,o8T)
var a2T=_v()
_(r,a2T)
if(_o(679,e,s,gg)){a2T.wxVkey=1
var lEU=_n('view')
_r(lEU,'class',680,e,s,gg)
var aFU=_v()
_(lEU,aFU)
if(_o(681,e,s,gg)){aFU.wxVkey=1
var tGU=_v()
_(aFU,tGU)
var eHU=function(oJU,bIU,xKU,gg){
var fMU=_v()
_(xKU,fMU)
if(_o(684,oJU,bIU,gg)){fMU.wxVkey=1
}
fMU.wxXCkey=1
return xKU
}
tGU.wxXCkey=2
_2(682,eHU,e,s,gg,tGU,'item','index','{{index}}')
}
else if(_o(685,e,s,gg)){aFU.wxVkey=2
}
else if(_o(686,e,s,gg)){aFU.wxVkey=3
}
aFU.wxXCkey=1
_(a2T,lEU)
}
var t3T=_v()
_(r,t3T)
if(_o(687,e,s,gg)){t3T.wxVkey=1
}
var e4T=_v()
_(r,e4T)
if(_o(688,e,s,gg)){e4T.wxVkey=1
}
var b5T=_v()
_(r,b5T)
if(_o(689,e,s,gg)){b5T.wxVkey=1
}
oZT.wxXCkey=1
l1T.wxXCkey=1
a2T.wxXCkey=1
t3T.wxXCkey=1
e4T.wxXCkey=1
b5T.wxXCkey=1
return r
}
e_[x[31]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m25=function(e,s,r,gg){
return r
}
e_[x[32]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m26=function(e,s,r,gg){
return r
}
e_[x[33]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m27=function(e,s,r,gg){
var cQU=_v()
_(r,cQU)
if(_o(690,e,s,gg)){cQU.wxVkey=1
}
cQU.wxXCkey=1
return r
}
e_[x[34]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m28=function(e,s,r,gg){
return r
}
e_[x[35]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m29=function(e,s,r,gg){
var aTU=_v()
_(r,aTU)
if(_o(691,e,s,gg)){aTU.wxVkey=1
var bWU=_n('view')
_r(bWU,'class',692,e,s,gg)
var oXU=_v()
_(bWU,oXU)
if(_o(693,e,s,gg)){oXU.wxVkey=1
var xYU=_v()
_(oXU,xYU)
var oZU=function(c2U,f1U,h3U,gg){
var c5U=_v()
_(h3U,c5U)
if(_o(696,c2U,f1U,gg)){c5U.wxVkey=1
}
c5U.wxXCkey=1
return h3U
}
xYU.wxXCkey=2
_2(694,oZU,e,s,gg,xYU,'item','index','{{index}}')
}
else{oXU.wxVkey=2
}
oXU.wxXCkey=1
_(aTU,bWU)
}
var tUU=_v()
_(r,tUU)
if(_o(697,e,s,gg)){tUU.wxVkey=1
}
var eVU=_v()
_(r,eVU)
if(_o(698,e,s,gg)){eVU.wxVkey=1
}
aTU.wxXCkey=1
tUU.wxXCkey=1
eVU.wxXCkey=1
return r
}
e_[x[36]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m30=function(e,s,r,gg){
var l7U=_v()
_(r,l7U)
var a8U=function(e0U,t9U,bAV,gg){
var xCV=_m('view',['catchtap',701,'class',1,'data-sel',2],[],e0U,t9U,gg)
var oDV=_v()
_(xCV,oDV)
if(_o(704,e0U,t9U,gg)){oDV.wxVkey=1
}
oDV.wxXCkey=1
_(bAV,xCV)
return bAV
}
l7U.wxXCkey=2
_2(699,a8U,e,s,gg,l7U,'item','index','{{index}}')
return r
}
e_[x[37]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m31=function(e,s,r,gg){
var cFV=_n('view')
_r(cFV,'class',705,e,s,gg)
var hGV=_v()
_(cFV,hGV)
if(_o(706,e,s,gg)){hGV.wxVkey=1
}
var oHV=_v()
_(cFV,oHV)
if(_o(707,e,s,gg)){oHV.wxVkey=1
}
hGV.wxXCkey=1
oHV.wxXCkey=1
_(r,cFV)
return r
}
e_[x[38]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m32=function(e,s,r,gg){
var lKV=_n('view')
_r(lKV,'class',708,e,s,gg)
var aLV=_v()
_(lKV,aLV)
if(_o(709,e,s,gg)){aLV.wxVkey=1
var eNV=_m('view',['class',710,'style',1],[],e,s,gg)
var bOV=_v()
_(eNV,bOV)
if(_o(712,e,s,gg)){bOV.wxVkey=1
}
var oPV=_n('view')
_r(oPV,'class',713,e,s,gg)
var xQV=_v()
_(oPV,xQV)
if(_o(714,e,s,gg)){xQV.wxVkey=1
}
var oRV=_v()
_(oPV,oRV)
if(_o(715,e,s,gg)){oRV.wxVkey=1
var fSV=_n('view')
_r(fSV,'class',716,e,s,gg)
var cTV=_v()
_(fSV,cTV)
var hUV=function(cWV,oVV,oXV,gg){
var aZV=_m('view',['catchtap',719,'class',1,'data-mydata',2,'data-url',3],[],cWV,oVV,gg)
var t1V=_v()
_(aZV,t1V)
if(_o(723,cWV,oVV,gg)){t1V.wxVkey=1
}
t1V.wxXCkey=1
_(oXV,aZV)
return oXV
}
cTV.wxXCkey=2
_2(717,hUV,e,s,gg,cTV,'item','index','{{index}}')
var e2V=_v()
_(fSV,e2V)
var b3V=function(x5V,o4V,o6V,gg){
var c8V=_m('view',['catchtap',726,'class',1,'data-mydata',2,'data-url',3],[],x5V,o4V,gg)
var h9V=_v()
_(c8V,h9V)
if(_o(730,x5V,o4V,gg)){h9V.wxVkey=1
}
h9V.wxXCkey=1
_(o6V,c8V)
return o6V
}
e2V.wxXCkey=2
_2(724,b3V,e,s,gg,e2V,'item','index','{{index}}')
_(oRV,fSV)
}
else{oRV.wxVkey=2
}
xQV.wxXCkey=1
oRV.wxXCkey=1
_(eNV,oPV)
bOV.wxXCkey=1
_(aLV,eNV)
}
var tMV=_v()
_(lKV,tMV)
if(_o(731,e,s,gg)){tMV.wxVkey=1
}
aLV.wxXCkey=1
tMV.wxXCkey=1
_(r,lKV)
var oJV=_v()
_(r,oJV)
if(_o(732,e,s,gg)){oJV.wxVkey=1
}
oJV.wxXCkey=1
return r
}
e_[x[39]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m33=function(e,s,r,gg){
var lCW=_n('view')
_r(lCW,'class',733,e,s,gg)
var aDW=_v()
_(lCW,aDW)
if(_o(734,e,s,gg)){aDW.wxVkey=1
var eFW=_n('view')
_r(eFW,'class',735,e,s,gg)
var oHW=_v()
_(eFW,oHW)
var xIW=function(fKW,oJW,cLW,gg){
var oNW=_m('view',['catchtap',740,'class',1,'data-datas',2],[],fKW,oJW,gg)
var cOW=_v()
_(oNW,cOW)
if(_o(743,fKW,oJW,gg)){cOW.wxVkey=1
var oPW=_n('view')
_r(oPW,'class',744,fKW,oJW,gg)
var lQW=_v()
_(oPW,lQW)
if(_o(745,fKW,oJW,gg)){lQW.wxVkey=1
var tSW=_v()
_(lQW,tSW)
if(_o(746,fKW,oJW,gg)){tSW.wxVkey=1
}
var eTW=_v()
_(lQW,eTW)
if(_o(747,fKW,oJW,gg)){eTW.wxVkey=1
var oVW=_v()
_(eTW,oVW)
if(_o(748,fKW,oJW,gg)){oVW.wxVkey=1
var xWW=_v()
_(oVW,xWW)
var oXW=function(cZW,fYW,h1W,gg){
var c3W=_v()
_(h1W,c3W)
if(_o(751,cZW,fYW,gg)){c3W.wxVkey=1
}
c3W.wxXCkey=1
return h1W
}
xWW.wxXCkey=2
_2(749,oXW,fKW,oJW,gg,xWW,'item','index','{{index}}')
}
oVW.wxXCkey=1
}
var bUW=_v()
_(lQW,bUW)
if(_o(752,fKW,oJW,gg)){bUW.wxVkey=1
var o4W=_m('view',['catchtap',753,'class',1,'data-pcover',2,'data-url',3],[],fKW,oJW,gg)
var l5W=_v()
_(o4W,l5W)
if(_o(757,fKW,oJW,gg)){l5W.wxVkey=1
}
l5W.wxXCkey=1
_(bUW,o4W)
}
else if(_o(758,fKW,oJW,gg)){bUW.wxVkey=2
var a6W=_v()
_(bUW,a6W)
var t7W=function(b9W,e8W,o0W,gg){
var oBX=_v()
_(o0W,oBX)
if(_o(763,b9W,e8W,gg)){oBX.wxVkey=1
var fCX=_v()
_(oBX,fCX)
if(_o(764,b9W,e8W,gg)){fCX.wxVkey=1
}
fCX.wxXCkey=1
}
oBX.wxXCkey=1
return o0W
}
a6W.wxXCkey=2
_2(761,t7W,fKW,oJW,gg,a6W,'picitem','picindex','{{picindex}}')
}
else if(_o(765,fKW,oJW,gg)){bUW.wxVkey=3
var cDX=_v()
_(bUW,cDX)
if(_o(766,fKW,oJW,gg)){cDX.wxVkey=1
}
cDX.wxXCkey=1
}
tSW.wxXCkey=1
eTW.wxXCkey=1
bUW.wxXCkey=1
}
var aRW=_v()
_(oPW,aRW)
if(_o(767,fKW,oJW,gg)){aRW.wxVkey=1
var hEX=_v()
_(aRW,hEX)
if(_o(768,fKW,oJW,gg)){hEX.wxVkey=1
var cGX=_v()
_(hEX,cGX)
if(_o(769,fKW,oJW,gg)){cGX.wxVkey=1
var oHX=_v()
_(cGX,oHX)
var lIX=function(tKX,aJX,eLX,gg){
var oNX=_v()
_(eLX,oNX)
if(_o(772,tKX,aJX,gg)){oNX.wxVkey=1
}
oNX.wxXCkey=1
return eLX
}
oHX.wxXCkey=2
_2(770,lIX,fKW,oJW,gg,oHX,'item','index','{{index}}')
}
cGX.wxXCkey=1
}
var oFX=_v()
_(aRW,oFX)
if(_o(773,fKW,oJW,gg)){oFX.wxVkey=1
var xOX=_v()
_(oFX,xOX)
if(_o(774,fKW,oJW,gg)){xOX.wxVkey=1
}
xOX.wxXCkey=1
}
hEX.wxXCkey=1
oFX.wxXCkey=1
}
lQW.wxXCkey=1
aRW.wxXCkey=1
_(cOW,oPW)
var oPX=_n('view')
_r(oPX,'class',775,fKW,oJW,gg)
var fQX=_v()
_(oPX,fQX)
if(_o(776,fKW,oJW,gg)){fQX.wxVkey=1
var hSX=_v()
_(fQX,hSX)
if(_o(777,fKW,oJW,gg)){hSX.wxVkey=1
var oTX=_m('view',['catchtap',778,'class',1,'data-dataindex',2,'data-eid',3],[],fKW,oJW,gg)
var oVX=_v()
_(oTX,oVX)
var lWX=function(tYX,aXX,eZX,gg){
var o2X=_v()
_(eZX,o2X)
if(_o(784,tYX,aXX,gg)){o2X.wxVkey=1
}
o2X.wxXCkey=1
return eZX
}
oVX.wxXCkey=2
_2(782,lWX,fKW,oJW,gg,oVX,'item','index','{{index}}')
var cUX=_v()
_(oTX,cUX)
if(_o(785,fKW,oJW,gg)){cUX.wxVkey=1
}
cUX.wxXCkey=1
_(hSX,oTX)
}
hSX.wxXCkey=1
}
var cRX=_v()
_(oPX,cRX)
if(_o(786,fKW,oJW,gg)){cRX.wxVkey=1
}
fQX.wxXCkey=1
cRX.wxXCkey=1
_(cOW,oPX)
}
cOW.wxXCkey=1
_(cLW,oNW)
return cLW
}
oHW.wxXCkey=2
_2(738,xIW,e,s,gg,oHW,'listitem','Aindex','{{listitem.eid}}')
var bGW=_v()
_(eFW,bGW)
if(_o(787,e,s,gg)){bGW.wxVkey=1
}
bGW.wxXCkey=1
_(aDW,eFW)
}
else{aDW.wxVkey=2
}
var tEW=_v()
_(lCW,tEW)
if(_o(788,e,s,gg)){tEW.wxVkey=1
}
aDW.wxXCkey=1
tEW.wxXCkey=1
_(r,lCW)
var x3X=_m('view',['catchtap',789,'class',1],[],e,s,gg)
var o4X=_m('view',['catchtap',791,'class',1],[],e,s,gg)
var f5X=_v()
_(o4X,f5X)
if(_o(793,e,s,gg)){f5X.wxVkey=1
}
var c6X=_v()
_(o4X,c6X)
if(_o(794,e,s,gg)){c6X.wxVkey=1
}
var h7X=_v()
_(o4X,h7X)
if(_o(795,e,s,gg)){h7X.wxVkey=1
}
f5X.wxXCkey=1
c6X.wxXCkey=1
h7X.wxXCkey=1
_(x3X,o4X)
_(r,x3X)
var cAW=_v()
_(r,cAW)
if(_o(796,e,s,gg)){cAW.wxVkey=1
}
var oBW=_v()
_(r,oBW)
if(_o(797,e,s,gg)){oBW.wxVkey=1
}
cAW.wxXCkey=1
oBW.wxXCkey=1
return r
}
e_[x[40]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m34=function(e,s,r,gg){
var c9X=_n('view')
_r(c9X,'class',798,e,s,gg)
var o0X=_v()
_(c9X,o0X)
if(_o(799,e,s,gg)){o0X.wxVkey=1
}
var lAY=_v()
_(c9X,lAY)
if(_o(800,e,s,gg)){lAY.wxVkey=1
}
o0X.wxXCkey=1
lAY.wxXCkey=1
_(r,c9X)
return r
}
e_[x[41]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m35=function(e,s,r,gg){
return r
}
e_[x[42]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m36=function(e,s,r,gg){
var bEY=_n('view')
_r(bEY,'class',801,e,s,gg)
var oHY=_v()
_(bEY,oHY)
var fIY=function(hKY,cJY,oLY,gg){
var oNY=_v()
_(oLY,oNY)
if(_o(805,hKY,cJY,gg)){oNY.wxVkey=1
}
oNY.wxXCkey=1
return oLY
}
oHY.wxXCkey=2
_2(803,fIY,e,s,gg,oHY,'item','Aindex','{{Aindex}}')
var oFY=_v()
_(bEY,oFY)
if(_o(806,e,s,gg)){oFY.wxVkey=1
}
var xGY=_v()
_(bEY,xGY)
if(_o(807,e,s,gg)){xGY.wxVkey=1
}
oFY.wxXCkey=1
xGY.wxXCkey=1
_(r,bEY)
var eDY=_v()
_(r,eDY)
if(_o(808,e,s,gg)){eDY.wxVkey=1
}
eDY.wxXCkey=1
return r
}
e_[x[43]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m37=function(e,s,r,gg){
var tQY=_m('scroll-view',['bindscrolltolower',809,'class',1,'lowerThreshold',2,'scrollY',3],[],e,s,gg)
var eRY=_v()
_(tQY,eRY)
if(_o(813,e,s,gg)){eRY.wxVkey=1
}
var fWY=_v()
_(tQY,fWY)
var cXY=function(oZY,hYY,c1Y,gg){
var l3Y=_v()
_(c1Y,l3Y)
if(_o(818,oZY,hYY,gg)){l3Y.wxVkey=1
var a4Y=_n('view')
_r(a4Y,'class',819,oZY,hYY,gg)
var fAZ=_n('view')
_r(fAZ,'class',820,oZY,hYY,gg)
var cBZ=_v()
_(fAZ,cBZ)
if(_o(821,oZY,hYY,gg)){cBZ.wxVkey=1
}
var hCZ=_v()
_(fAZ,hCZ)
if(_o(822,oZY,hYY,gg)){hCZ.wxVkey=1
}
cBZ.wxXCkey=1
hCZ.wxXCkey=1
_(a4Y,fAZ)
var t5Y=_v()
_(a4Y,t5Y)
if(_o(823,oZY,hYY,gg)){t5Y.wxVkey=1
}
var e6Y=_v()
_(a4Y,e6Y)
if(_o(824,oZY,hYY,gg)){e6Y.wxVkey=1
var oDZ=_m('view',['catchtap',825,'class',1,'data-eid',2],[],oZY,hYY,gg)
var cEZ=_v()
_(oDZ,cEZ)
if(_o(828,oZY,hYY,gg)){cEZ.wxVkey=1
}
cEZ.wxXCkey=1
_(e6Y,oDZ)
}
var b7Y=_v()
_(a4Y,b7Y)
if(_o(829,oZY,hYY,gg)){b7Y.wxVkey=1
var oFZ=_v()
_(b7Y,oFZ)
var lGZ=function(tIZ,aHZ,eJZ,gg){
var oLZ=_v()
_(eJZ,oLZ)
if(_o(831,tIZ,aHZ,gg)){oLZ.wxVkey=1
}
oLZ.wxXCkey=1
return eJZ
}
oFZ.wxXCkey=2
_2(830,lGZ,oZY,hYY,gg,oFZ,'item','index','')
}
var o8Y=_v()
_(a4Y,o8Y)
if(_o(832,oZY,hYY,gg)){o8Y.wxVkey=1
var xMZ=_n('view')
_r(xMZ,'class',833,oZY,hYY,gg)
var fOZ=_v()
_(xMZ,fOZ)
var cPZ=function(oRZ,hQZ,cSZ,gg){
var lUZ=_v()
_(cSZ,lUZ)
if(_o(838,oRZ,hQZ,gg)){lUZ.wxVkey=1
var aVZ=_v()
_(lUZ,aVZ)
if(_o(839,oRZ,hQZ,gg)){aVZ.wxVkey=1
}
aVZ.wxXCkey=1
}
lUZ.wxXCkey=1
return cSZ
}
fOZ.wxXCkey=2
_2(836,cPZ,oZY,hYY,gg,fOZ,'p','pIndex','pIndex')
var oNZ=_v()
_(xMZ,oNZ)
if(_o(840,oZY,hYY,gg)){oNZ.wxVkey=1
var tWZ=_m('view',['catchtap',841,'class',1,'data-cover',2,'data-eid',3,'data-url',4],[],oZY,hYY,gg)
var eXZ=_v()
_(tWZ,eXZ)
if(_o(846,oZY,hYY,gg)){eXZ.wxVkey=1
}
eXZ.wxXCkey=1
_(oNZ,tWZ)
}
oNZ.wxXCkey=1
_(o8Y,xMZ)
}
var x9Y=_v()
_(a4Y,x9Y)
if(_o(847,oZY,hYY,gg)){x9Y.wxVkey=1
var bYZ=_n('view')
_r(bYZ,'class',848,oZY,hYY,gg)
var oZZ=_n('view')
_r(oZZ,'class',849,oZY,hYY,gg)
var x1Z=_v()
_(oZZ,x1Z)
if(_o(850,oZY,hYY,gg)){x1Z.wxVkey=1
}
var o2Z=_v()
_(oZZ,o2Z)
if(_o(851,oZY,hYY,gg)){o2Z.wxVkey=1
}
x1Z.wxXCkey=1
o2Z.wxXCkey=1
_(bYZ,oZZ)
var f3Z=_n('view')
_r(f3Z,'class',852,oZY,hYY,gg)
var o6Z=_n('view')
_r(o6Z,'class',853,oZY,hYY,gg)
var c7Z=_v()
_(o6Z,c7Z)
if(_o(854,oZY,hYY,gg)){c7Z.wxVkey=1
}
var o8Z=_v()
_(o6Z,o8Z)
if(_o(855,oZY,hYY,gg)){o8Z.wxVkey=1
}
c7Z.wxXCkey=1
o8Z.wxXCkey=1
_(f3Z,o6Z)
var c4Z=_v()
_(f3Z,c4Z)
if(_o(856,oZY,hYY,gg)){c4Z.wxVkey=1
}
var h5Z=_v()
_(f3Z,h5Z)
if(_o(857,oZY,hYY,gg)){h5Z.wxVkey=1
}
c4Z.wxXCkey=1
h5Z.wxXCkey=1
_(bYZ,f3Z)
_(x9Y,bYZ)
}
var o0Y=_v()
_(a4Y,o0Y)
if(_o(858,oZY,hYY,gg)){o0Y.wxVkey=1
var l9Z=_n('view')
_r(l9Z,'class',859,oZY,hYY,gg)
var tA1=_v()
_(l9Z,tA1)
var eB1=function(oD1,bC1,xE1,gg){
var fG1=_v()
_(xE1,fG1)
if(_o(864,oD1,bC1,gg)){fG1.wxVkey=1
var cH1=_m('view',['catch:longpress',865,'class',1,'data-cid',2,'data-cuserid',3,'data-eid',4],[],oD1,bC1,gg)
var hI1=_v()
_(cH1,hI1)
if(_o(870,oD1,bC1,gg)){hI1.wxVkey=1
}
var oJ1=_v()
_(cH1,oJ1)
if(_o(871,oD1,bC1,gg)){oJ1.wxVkey=1
}
hI1.wxXCkey=1
oJ1.wxXCkey=1
_(fG1,cH1)
}
fG1.wxXCkey=1
return xE1
}
tA1.wxXCkey=2
_2(862,eB1,oZY,hYY,gg,tA1,'c','cIndex','cIndex')
var a0Z=_v()
_(l9Z,a0Z)
if(_o(872,oZY,hYY,gg)){a0Z.wxVkey=1
}
a0Z.wxXCkey=1
_(o0Y,l9Z)
}
var cK1=_n('view')
_r(cK1,'class',873,oZY,hYY,gg)
var oL1=_v()
_(cK1,oL1)
if(_o(874,oZY,hYY,gg)){oL1.wxVkey=1
}
var lM1=_v()
_(cK1,lM1)
if(_o(875,oZY,hYY,gg)){lM1.wxVkey=1
}
var aN1=_v()
_(cK1,aN1)
if(_o(876,oZY,hYY,gg)){aN1.wxVkey=1
}
oL1.wxXCkey=1
lM1.wxXCkey=1
aN1.wxXCkey=1
_(a4Y,cK1)
t5Y.wxXCkey=1
e6Y.wxXCkey=1
b7Y.wxXCkey=1
o8Y.wxXCkey=1
x9Y.wxXCkey=1
o0Y.wxXCkey=1
_(l3Y,a4Y)
}
l3Y.wxXCkey=1
return c1Y
}
fWY.wxXCkey=2
_2(816,cXY,e,s,gg,fWY,'e','eIndex','e.level')
var bSY=_v()
_(tQY,bSY)
if(_o(877,e,s,gg)){bSY.wxVkey=1
}
var oTY=_v()
_(tQY,oTY)
if(_o(878,e,s,gg)){oTY.wxVkey=1
}
var xUY=_v()
_(tQY,xUY)
if(_o(879,e,s,gg)){xUY.wxVkey=1
var tO1=_v()
_(xUY,tO1)
if(_o(880,e,s,gg)){tO1.wxVkey=1
}
tO1.wxXCkey=1
}
var oVY=_v()
_(tQY,oVY)
if(_o(881,e,s,gg)){oVY.wxVkey=1
}
eRY.wxXCkey=1
bSY.wxXCkey=1
oTY.wxXCkey=1
xUY.wxXCkey=1
oVY.wxXCkey=1
_(r,tQY)
var aPY=_v()
_(r,aPY)
if(_o(882,e,s,gg)){aPY.wxVkey=1
}
var eP1=_n('menu-modal')
_r(eP1,'modalShow',883,e,s,gg)
var bQ1=_n('view')
_r(bQ1,'class',884,e,s,gg)
var oR1=_v()
_(bQ1,oR1)
if(_o(885,e,s,gg)){oR1.wxVkey=1
}
var xS1=_v()
_(bQ1,xS1)
if(_o(886,e,s,gg)){xS1.wxVkey=1
}
var oT1=_v()
_(bQ1,oT1)
if(_o(887,e,s,gg)){oT1.wxVkey=1
}
var fU1=_v()
_(bQ1,fU1)
if(_o(888,e,s,gg)){fU1.wxVkey=1
}
oR1.wxXCkey=1
xS1.wxXCkey=1
oT1.wxXCkey=1
fU1.wxXCkey=1
_(eP1,bQ1)
_(r,eP1)
aPY.wxXCkey=1
return r
}
e_[x[44]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m38=function(e,s,r,gg){
var hW1=_v()
_(r,hW1)
if(_o(889,e,s,gg)){hW1.wxVkey=1
var oX1=_m('scroll-view',['scrollY',-1,'bindscroll',890,'bindscrolltolower',1,'lowerThreshold',2,'style',3],[],e,s,gg)
var cY1=_v()
_(oX1,cY1)
if(_o(894,e,s,gg)){cY1.wxVkey=1
var oZ1=_v()
_(cY1,oZ1)
var l11=function(t31,a21,e41,gg){
var o61=_m('view',['catchtap',899,'class',1,'data-url',2],[],t31,a21,gg)
var x71=_v()
_(o61,x71)
if(_o(902,t31,a21,gg)){x71.wxVkey=1
}
x71.wxXCkey=1
_(e41,o61)
return e41
}
oZ1.wxXCkey=2
_2(897,l11,e,s,gg,oZ1,'pic','picindex','{{item.pid}}')
}
cY1.wxXCkey=1
_(hW1,oX1)
}
hW1.wxXCkey=1
return r
}
e_[x[45]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m39=function(e,s,r,gg){
var f91=_v()
_(r,f91)
if(_o(903,e,s,gg)){f91.wxVkey=1
var aF2=_m('scroll-view',['scrollY',-1,'bindscroll',904,'bindscrolltolower',1,'lowerThreshold',2,'style',3],[],e,s,gg)
var tG2=_v()
_(aF2,tG2)
if(_o(908,e,s,gg)){tG2.wxVkey=1
var eH2=_v()
_(tG2,eH2)
if(_o(909,e,s,gg)){eH2.wxVkey=1
var bI2=_v()
_(eH2,bI2)
var oJ2=function(oL2,xK2,fM2,gg){
var hO2=_n('view')
_r(hO2,'class',913,oL2,xK2,gg)
var cQ2=_v()
_(hO2,cQ2)
var oR2=function(aT2,lS2,tU2,gg){
var bW2=_m('view',['catchtap',918,'class',1,'data-url',2],[],aT2,lS2,gg)
var oX2=_v()
_(bW2,oX2)
if(_o(921,aT2,lS2,gg)){oX2.wxVkey=1
}
oX2.wxXCkey=1
_(tU2,bW2)
return tU2
}
cQ2.wxXCkey=2
_2(916,oR2,oL2,xK2,gg,cQ2,'pic','picindex','{{item.pid}}')
var oP2=_v()
_(hO2,oP2)
if(_o(922,oL2,xK2,gg)){oP2.wxVkey=1
}
oP2.wxXCkey=1
_(fM2,hO2)
return fM2
}
bI2.wxXCkey=2
_2(911,oJ2,e,s,gg,bI2,'item','picitemindex','{{item.euploadtime}}')
}
else{eH2.wxVkey=2
}
eH2.wxXCkey=1
}
else{tG2.wxVkey=2
var xY2=_v()
_(tG2,xY2)
if(_o(923,e,s,gg)){xY2.wxVkey=1
var oZ2=_v()
_(xY2,oZ2)
var f12=function(h32,c22,o42,gg){
var o62=_v()
_(o42,o62)
var l72=function(t92,a82,e02,gg){
var oB3=_m('view',['catchtap',931,'class',1,'data-url',2],[],t92,a82,gg)
var xC3=_v()
_(oB3,xC3)
if(_o(934,t92,a82,gg)){xC3.wxVkey=1
}
var oD3=_v()
_(oB3,oD3)
if(_o(935,t92,a82,gg)){oD3.wxVkey=1
}
xC3.wxXCkey=1
oD3.wxXCkey=1
_(e02,oB3)
return e02
}
o62.wxXCkey=2
_2(929,l72,h32,c22,gg,o62,'pic','picindex','{{picindex}}')
return o42
}
oZ2.wxXCkey=2
_2(925,f12,e,s,gg,oZ2,'item','picitemindex','{{item.euploadtime}}')
}
else{xY2.wxVkey=2
}
xY2.wxXCkey=1
}
tG2.wxXCkey=1
_(f91,aF2)
}
else{f91.wxVkey=2
var fE3=_m('scroll-view',['scrollY',-1,'bindscroll',936,'bindscrolltolower',1,'lowerThreshold',2,'style',3],[],e,s,gg)
var cF3=_v()
_(fE3,cF3)
if(_o(940,e,s,gg)){cF3.wxVkey=1
var hG3=_v()
_(cF3,hG3)
if(_o(941,e,s,gg)){hG3.wxVkey=1
var oH3=_v()
_(hG3,oH3)
var cI3=function(lK3,oJ3,aL3,gg){
var eN3=_n('view')
_r(eN3,'class',945,lK3,oJ3,gg)
var oP3=_v()
_(eN3,oP3)
var xQ3=function(fS3,oR3,cT3,gg){
var oV3=_m('view',['catchtap',950,'class',1,'data-url',2],[],fS3,oR3,gg)
var cW3=_v()
_(oV3,cW3)
if(_o(953,fS3,oR3,gg)){cW3.wxVkey=1
}
cW3.wxXCkey=1
_(cT3,oV3)
return cT3
}
oP3.wxXCkey=2
_2(948,xQ3,lK3,oJ3,gg,oP3,'pic','picindex','{{item.pid}}')
var bO3=_v()
_(eN3,bO3)
if(_o(954,lK3,oJ3,gg)){bO3.wxVkey=1
}
bO3.wxXCkey=1
_(aL3,eN3)
return aL3
}
oH3.wxXCkey=2
_2(943,cI3,e,s,gg,oH3,'item','picitemindex','{{item.euploadtime}}')
}
else{hG3.wxVkey=2
}
hG3.wxXCkey=1
}
else{cF3.wxVkey=2
var oX3=_v()
_(cF3,oX3)
if(_o(955,e,s,gg)){oX3.wxVkey=1
var lY3=_v()
_(oX3,lY3)
var aZ3=function(e23,t13,b33,gg){
var x53=_v()
_(b33,x53)
var o63=function(c83,f73,h93,gg){
var cA4=_m('view',['catchtap',963,'class',1,'data-url',2],[],c83,f73,gg)
var oB4=_v()
_(cA4,oB4)
if(_o(966,c83,f73,gg)){oB4.wxVkey=1
}
var lC4=_v()
_(cA4,lC4)
if(_o(967,c83,f73,gg)){lC4.wxVkey=1
}
oB4.wxXCkey=1
lC4.wxXCkey=1
_(h93,cA4)
return h93
}
x53.wxXCkey=2
_2(961,o63,e23,t13,gg,x53,'pic','picindex','{{picindex}}')
return b33
}
lY3.wxXCkey=2
_2(957,aZ3,e,s,gg,lY3,'item','picitemindex','{{picitemindex}}')
}
else{oX3.wxVkey=2
}
oX3.wxXCkey=1
}
cF3.wxXCkey=1
_(f91,fE3)
}
var c01=_v()
_(r,c01)
if(_o(968,e,s,gg)){c01.wxVkey=1
}
var hA2=_v()
_(r,hA2)
if(_o(969,e,s,gg)){hA2.wxVkey=1
}
var oB2=_v()
_(r,oB2)
if(_o(970,e,s,gg)){oB2.wxVkey=1
}
var cC2=_v()
_(r,cC2)
if(_o(971,e,s,gg)){cC2.wxVkey=1
}
var oD2=_v()
_(r,oD2)
if(_o(972,e,s,gg)){oD2.wxVkey=1
}
var lE2=_v()
_(r,lE2)
if(_o(973,e,s,gg)){lE2.wxVkey=1
}
f91.wxXCkey=1
c01.wxXCkey=1
hA2.wxXCkey=1
oB2.wxXCkey=1
cC2.wxXCkey=1
oD2.wxXCkey=1
lE2.wxXCkey=1
return r
}
e_[x[46]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m40=function(e,s,r,gg){
var tE4=_n('view')
_r(tE4,'class',974,e,s,gg)
var oH4=_m('view',['bindtouchend',975,'bindtouchmove',1,'catchtouchstart',2,'class',3,'style',4],[],e,s,gg)
var xI4=_v()
_(oH4,xI4)
if(_o(980,e,s,gg)){xI4.wxVkey=1
var oJ4=_m('view',['catchtouchend',981,'catchtouchmove',1,'catchtouchstart',2,'class',3,'style',4],[],e,s,gg)
var fK4=_v()
_(oJ4,fK4)
if(_o(986,e,s,gg)){fK4.wxVkey=1
}
var cL4=_v()
_(oJ4,cL4)
if(_o(987,e,s,gg)){cL4.wxVkey=1
}
fK4.wxXCkey=1
cL4.wxXCkey=1
_(xI4,oJ4)
}
xI4.wxXCkey=1
_(tE4,oH4)
var eF4=_v()
_(tE4,eF4)
if(_o(988,e,s,gg)){eF4.wxVkey=1
}
var bG4=_v()
_(tE4,bG4)
if(_o(989,e,s,gg)){bG4.wxVkey=1
}
eF4.wxXCkey=1
bG4.wxXCkey=1
_(r,tE4)
return r
}
e_[x[47]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m41=function(e,s,r,gg){
var oN4=_n('view')
_r(oN4,'class',990,e,s,gg)
var oP4=_m('view',['catchtap',991,'class',1],[],e,s,gg)
var lQ4=_v()
_(oP4,lQ4)
var aR4=function(eT4,tS4,bU4,gg){
var xW4=_v()
_(bU4,xW4)
if(_o(995,eT4,tS4,gg)){xW4.wxVkey=1
}
xW4.wxXCkey=1
return bU4
}
lQ4.wxXCkey=2
_2(993,aR4,e,s,gg,lQ4,'item','index','{{index}}')
_(oN4,oP4)
var cO4=_v()
_(oN4,cO4)
if(_o(996,e,s,gg)){cO4.wxVkey=1
}
cO4.wxXCkey=1
_(r,oN4)
return r
}
e_[x[48]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m42=function(e,s,r,gg){
var fY4=_v()
_(r,fY4)
if(_o(997,e,s,gg)){fY4.wxVkey=1
}
var cZ4=_m('datetime',['bindreturnResult',998,'show',1],[],e,s,gg)
_(r,cZ4)
fY4.wxXCkey=1
return r
}
e_[x[49]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m43=function(e,s,r,gg){
var o24=_v()
_(r,o24)
if(_o(1000,e,s,gg)){o24.wxVkey=1
}
o24.wxXCkey=1
return r
}
e_[x[50]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m44=function(e,s,r,gg){
var o44=_v()
_(r,o44)
if(_o(1001,e,s,gg)){o44.wxVkey=1
}
o44.wxXCkey=1
return r
}
e_[x[51]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m45=function(e,s,r,gg){
var a64=_v()
_(r,a64)
if(_o(1002,e,s,gg)){a64.wxVkey=1
}
a64.wxXCkey=1
return r
}
e_[x[52]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m46=function(e,s,r,gg){
var e84=_v()
_(r,e84)
if(_o(1003,e,s,gg)){e84.wxVkey=1
}
e84.wxXCkey=1
return r
}
e_[x[53]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m47=function(e,s,r,gg){
var o04=_n('view')
_r(o04,'class',1004,e,s,gg)
var xA5=_n('view')
_r(xA5,'class',1005,e,s,gg)
var oB5=_v()
_(xA5,oB5)
if(_o(1006,e,s,gg)){oB5.wxVkey=1
}
var fC5=_v()
_(xA5,fC5)
if(_o(1007,e,s,gg)){fC5.wxVkey=1
var hE5=_v()
_(fC5,hE5)
if(_o(1008,e,s,gg)){hE5.wxVkey=1
}
hE5.wxXCkey=1
}
var cD5=_v()
_(xA5,cD5)
if(_o(1009,e,s,gg)){cD5.wxVkey=1
var oF5=_n('view')
_r(oF5,'class',1010,e,s,gg)
var cG5=_v()
_(oF5,cG5)
if(_o(1011,e,s,gg)){cG5.wxVkey=1
}
var oH5=_v()
_(oF5,oH5)
if(_o(1012,e,s,gg)){oH5.wxVkey=1
}
cG5.wxXCkey=1
oH5.wxXCkey=1
_(cD5,oF5)
}
oB5.wxXCkey=1
fC5.wxXCkey=1
cD5.wxXCkey=1
_(o04,xA5)
var lI5=_n('location')
_r(lI5,'bindreturnResult',1013,e,s,gg)
_(o04,lI5)
_(r,o04)
return r
}
e_[x[54]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m48=function(e,s,r,gg){
var tK5=_n('view')
_r(tK5,'class',1014,e,s,gg)
var eL5=_v()
_(tK5,eL5)
if(_o(1015,e,s,gg)){eL5.wxVkey=1
}
var oP5=_m('input-text',['bindreturnResult',1016,'placeholder',1],[],e,s,gg)
_(tK5,oP5)
var fQ5=_n('location')
_r(fQ5,'bindreturnResult',1018,e,s,gg)
_(tK5,fQ5)
var bM5=_v()
_(tK5,bM5)
if(_o(1019,e,s,gg)){bM5.wxVkey=1
var cR5=_m('and-friends',['bindreturnResult',1020,'groupId',1,'selectedFriends',2],[],e,s,gg)
_(bM5,cR5)
}
var oN5=_v()
_(tK5,oN5)
if(_o(1023,e,s,gg)){oN5.wxVkey=1
var hS5=_n('date-and-time')
_r(hS5,'bindreturnResult',1024,e,s,gg)
_(oN5,hS5)
}
var xO5=_v()
_(tK5,xO5)
if(_o(1025,e,s,gg)){xO5.wxVkey=1
}
eL5.wxXCkey=1
bM5.wxXCkey=1
bM5.wxXCkey=3
oN5.wxXCkey=1
oN5.wxXCkey=3
xO5.wxXCkey=1
_(r,tK5)
return r
}
e_[x[55]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m49=function(e,s,r,gg){
var cU5=_n('view')
_r(cU5,'class',1026,e,s,gg)
var tY5=_n('input-text')
_r(tY5,'bindreturnResult',1027,e,s,gg)
_(cU5,tY5)
var eZ5=_n('location')
_r(eZ5,'bindreturnResult',1028,e,s,gg)
_(cU5,eZ5)
var oV5=_v()
_(cU5,oV5)
if(_o(1029,e,s,gg)){oV5.wxVkey=1
var b15=_m('and-friends',['bindreturnResult',1030,'groupId',1,'selectedFriends',2],[],e,s,gg)
_(oV5,b15)
}
var lW5=_v()
_(cU5,lW5)
if(_o(1033,e,s,gg)){lW5.wxVkey=1
var o25=_n('date-and-time')
_r(o25,'bindreturnResult',1034,e,s,gg)
_(lW5,o25)
}
var x35=_m('sync-to-other-albums',['bindreturnResult',1035,'groupId',1,'selectedSyncAlbums',2],[],e,s,gg)
_(cU5,x35)
var aX5=_v()
_(cU5,aX5)
if(_o(1038,e,s,gg)){aX5.wxVkey=1
}
oV5.wxXCkey=1
oV5.wxXCkey=3
lW5.wxXCkey=1
lW5.wxXCkey=3
aX5.wxXCkey=1
_(r,cU5)
return r
}
e_[x[56]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m50=function(e,s,r,gg){
var f55=_n('view')
_r(f55,'class',1039,e,s,gg)
var h75=_v()
_(f55,h75)
var o85=function(o05,c95,lA6,gg){
var tC6=_v()
_(lA6,tC6)
if(_o(1042,o05,c95,gg)){tC6.wxVkey=1
var eD6=_m('view',['catch:tap',1043,'class',1,'data-selected',2,'data-userid',3],[],o05,c95,gg)
var bE6=_v()
_(eD6,bE6)
if(_o(1047,o05,c95,gg)){bE6.wxVkey=1
}
bE6.wxXCkey=1
_(tC6,eD6)
}
tC6.wxXCkey=1
return lA6
}
h75.wxXCkey=2
_2(1040,o85,e,s,gg,h75,'item','index','key')
var c65=_v()
_(f55,c65)
if(_o(1048,e,s,gg)){c65.wxVkey=1
}
c65.wxXCkey=1
_(r,f55)
return r
}
e_[x[57]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m51=function(e,s,r,gg){
var xG6=_n('view')
_r(xG6,'class',1049,e,s,gg)
var oH6=_v()
_(xG6,oH6)
if(_o(1050,e,s,gg)){oH6.wxVkey=1
}
var cJ6=_m('input-text',['bindreturnResult',1051,'maxLength',1],[],e,s,gg)
_(xG6,cJ6)
var hK6=_n('location')
_r(hK6,'bindreturnResult',1053,e,s,gg)
_(xG6,hK6)
var fI6=_v()
_(xG6,fI6)
if(_o(1054,e,s,gg)){fI6.wxVkey=1
var oL6=_m('and-friends',['bindreturnResult',1055,'groupId',1,'selectedFriends',2],[],e,s,gg)
_(fI6,oL6)
}
oH6.wxXCkey=1
fI6.wxXCkey=1
fI6.wxXCkey=3
_(r,xG6)
return r
}
e_[x[58]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[59]]={}
var m52=function(e,s,r,gg){
var oN6=_n('view')
_r(oN6,'class',1058,e,s,gg)
var tQ6=_n('input-text')
_r(tQ6,'bindreturnResult',1059,e,s,gg)
_(oN6,tQ6)
var eR6=_n('location')
_r(eR6,'bindreturnResult',1060,e,s,gg)
_(oN6,eR6)
var lO6=_v()
_(oN6,lO6)
if(_o(1061,e,s,gg)){lO6.wxVkey=1
var bS6=_m('and-friends',['bindreturnResult',1062,'groupId',1,'selectedFriends',2],[],e,s,gg)
_(lO6,bS6)
}
var aP6=_v()
_(oN6,aP6)
if(_o(1065,e,s,gg)){aP6.wxVkey=1
var oT6=_n('date-and-time')
_r(oT6,'bindreturnResult',1066,e,s,gg)
_(aP6,oT6)
}
var xU6=_m('sync-to-other-albums',['bindreturnResult',1067,'groupId',1,'selectedSyncAlbums',2],[],e,s,gg)
_(oN6,xU6)
var oV6=_n('view')
_r(oV6,'class',1070,e,s,gg)
var fW6=_v()
_(oV6,fW6)
if(_o(1071,e,s,gg)){fW6.wxVkey=1
var cX6=_v()
_(fW6,cX6)
if(_o(1072,e,s,gg)){cX6.wxVkey=1
}
cX6.wxXCkey=1
}
else{fW6.wxVkey=2
}
fW6.wxXCkey=1
_(oN6,oV6)
lO6.wxXCkey=1
lO6.wxXCkey=3
aP6.wxXCkey=1
aP6.wxXCkey=3
_(r,oN6)
return r
}
e_[x[59]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m53=function(e,s,r,gg){
return r
}
e_[x[60]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[61]]={}
var m54=function(e,s,r,gg){
var c16=_n('view')
_r(c16,'class',1073,e,s,gg)
var o26=_v()
_(c16,o26)
if(_o(1074,e,s,gg)){o26.wxVkey=1
var l36=_v()
_(o26,l36)
if(_o(1075,e,s,gg)){l36.wxVkey=1
}
l36.wxXCkey=1
}
else{o26.wxVkey=2
}
o26.wxXCkey=1
_(r,c16)
return r
}
e_[x[61]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
var m55=function(e,s,r,gg){
return r
}
e_[x[62]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
var m56=function(e,s,r,gg){
var e66=_n('view')
_r(e66,'class',1076,e,s,gg)
var o86=_n('view')
_r(o86,'class',1077,e,s,gg)
var x96=_v()
_(o86,x96)
if(_o(1078,e,s,gg)){x96.wxVkey=1
var cB7=_v()
_(x96,cB7)
var hC7=function(cE7,oD7,oF7,gg){
var aH7=_v()
_(oF7,aH7)
if(_o(1081,cE7,oD7,gg)){aH7.wxVkey=1
}
aH7.wxXCkey=1
return oF7
}
cB7.wxXCkey=2
_2(1079,hC7,e,s,gg,cB7,'item','index','{{index}}')
}
var o06=_v()
_(o86,o06)
if(_o(1082,e,s,gg)){o06.wxVkey=1
}
var fA7=_v()
_(o86,fA7)
if(_o(1083,e,s,gg)){fA7.wxVkey=1
}
x96.wxXCkey=1
o06.wxXCkey=1
fA7.wxXCkey=1
_(e66,o86)
var tI7=_n('view')
_r(tI7,'class',1084,e,s,gg)
var eJ7=_v()
_(tI7,eJ7)
if(_o(1085,e,s,gg)){eJ7.wxVkey=1
}
var bK7=_v()
_(tI7,bK7)
if(_o(1086,e,s,gg)){bK7.wxVkey=1
}
var oL7=_v()
_(tI7,oL7)
if(_o(1087,e,s,gg)){oL7.wxVkey=1
}
eJ7.wxXCkey=1
bK7.wxXCkey=1
oL7.wxXCkey=1
_(e66,tI7)
var b76=_v()
_(e66,b76)
if(_o(1088,e,s,gg)){b76.wxVkey=1
}
b76.wxXCkey=1
_(r,e66)
return r
}
e_[x[63]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[64]]={}
var m57=function(e,s,r,gg){
var fO7=_n('view')
_r(fO7,'class',1089,e,s,gg)
var hQ7=_n('view')
_r(hQ7,'class',1090,e,s,gg)
var cS7=_n('view')
_r(cS7,'class',1091,e,s,gg)
var oT7=_v()
_(cS7,oT7)
if(_o(1092,e,s,gg)){oT7.wxVkey=1
}
var lU7=_v()
_(cS7,lU7)
if(_o(1093,e,s,gg)){lU7.wxVkey=1
}
var aV7=_v()
_(cS7,aV7)
if(_o(1094,e,s,gg)){aV7.wxVkey=1
}
var tW7=_v()
_(cS7,tW7)
if(_o(1095,e,s,gg)){tW7.wxVkey=1
}
oT7.wxXCkey=1
lU7.wxXCkey=1
aV7.wxXCkey=1
tW7.wxXCkey=1
_(hQ7,cS7)
var oR7=_v()
_(hQ7,oR7)
if(_o(1096,e,s,gg)){oR7.wxVkey=1
}
oR7.wxXCkey=1
_(fO7,hQ7)
var cP7=_v()
_(fO7,cP7)
if(_o(1097,e,s,gg)){cP7.wxVkey=1
}
cP7.wxXCkey=1
_(r,fO7)
var oN7=_v()
_(r,oN7)
if(_o(1098,e,s,gg)){oN7.wxVkey=1
}
oN7.wxXCkey=1
return r
}
e_[x[64]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[65]]={}
var m58=function(e,s,r,gg){
var o27=_n('view')
_r(o27,'class',1099,e,s,gg)
var o87=_n('view')
_r(o87,'class',1100,e,s,gg)
var l97=_v()
_(o87,l97)
if(_o(1101,e,s,gg)){l97.wxVkey=1
var tA8=_m('view',['catchtap',1102,'class',1],[],e,s,gg)
var bC8=_v()
_(tA8,bC8)
var oD8=function(oF8,xE8,fG8,gg){
var hI8=_v()
_(fG8,hI8)
if(_o(1106,oF8,xE8,gg)){hI8.wxVkey=1
}
hI8.wxXCkey=1
return fG8
}
bC8.wxXCkey=2
_2(1104,oD8,e,s,gg,bC8,'item','index','{{item.gmtime}}')
var eB8=_v()
_(tA8,eB8)
if(_o(1107,e,s,gg)){eB8.wxVkey=1
var oJ8=_m('form',['bindsubmit',1108,'class',1,'reportSubmit',2],[],e,s,gg)
var cK8=_v()
_(oJ8,cK8)
if(_o(1111,e,s,gg)){cK8.wxVkey=1
var oL8=_v()
_(cK8,oL8)
if(_o(1112,e,s,gg)){oL8.wxVkey=1
}
var lM8=_v()
_(cK8,lM8)
if(_o(1113,e,s,gg)){lM8.wxVkey=1
}
oL8.wxXCkey=1
lM8.wxXCkey=1
}
else{cK8.wxVkey=2
var aN8=_v()
_(cK8,aN8)
if(_o(1114,e,s,gg)){aN8.wxVkey=1
}
var tO8=_v()
_(cK8,tO8)
if(_o(1115,e,s,gg)){tO8.wxVkey=1
}
aN8.wxXCkey=1
tO8.wxXCkey=1
}
cK8.wxXCkey=1
_(eB8,oJ8)
}
eB8.wxXCkey=1
_(l97,tA8)
}
var a07=_v()
_(o87,a07)
if(_o(1116,e,s,gg)){a07.wxVkey=1
}
l97.wxXCkey=1
a07.wxXCkey=1
_(o27,o87)
var f37=_v()
_(o27,f37)
if(_o(1117,e,s,gg)){f37.wxVkey=1
}
var c47=_v()
_(o27,c47)
if(_o(1118,e,s,gg)){c47.wxVkey=1
var eP8=_v()
_(c47,eP8)
if(_o(1119,e,s,gg)){eP8.wxVkey=1
}
eP8.wxXCkey=1
}
var h57=_v()
_(o27,h57)
if(_o(1120,e,s,gg)){h57.wxVkey=1
}
var o67=_v()
_(o27,o67)
if(_o(1121,e,s,gg)){o67.wxVkey=1
var bQ8=_n('view')
_r(bQ8,'class',1122,e,s,gg)
var xS8=_v()
_(bQ8,xS8)
var oT8=function(cV8,fU8,hW8,gg){
var cY8=_m('view',['catchtap',1126,'class',1,'data-eid',2,'data-sela',3,'data-selb',4],[],cV8,fU8,gg)
var oZ8=_v()
_(cY8,oZ8)
var l18=function(t38,a28,e48,gg){
var o68=_v()
_(e48,o68)
if(_o(1135,t38,a28,gg)){o68.wxVkey=1
var x78=_n('view')
_r(x78,'class',1136,t38,a28,gg)
var c08=_n('view')
_r(c08,'class',1137,t38,a28,gg)
var hA9=_v()
_(c08,hA9)
if(_o(1138,t38,a28,gg)){hA9.wxVkey=1
}
var oB9=_v()
_(c08,oB9)
if(_o(1139,t38,a28,gg)){oB9.wxVkey=1
}
hA9.wxXCkey=1
oB9.wxXCkey=1
_(x78,c08)
var o88=_v()
_(x78,o88)
if(_o(1140,t38,a28,gg)){o88.wxVkey=1
var cC9=_v()
_(o88,cC9)
if(_o(1141,t38,a28,gg)){cC9.wxVkey=1
}
var oD9=_v()
_(o88,oD9)
if(_o(1142,t38,a28,gg)){oD9.wxVkey=1
var lE9=_m('view',['catchtap',1143,'class',1,'data-url',2],[],t38,a28,gg)
var aF9=_v()
_(lE9,aF9)
if(_o(1146,t38,a28,gg)){aF9.wxVkey=1
}
aF9.wxXCkey=1
_(oD9,lE9)
}
else if(_o(1147,t38,a28,gg)){oD9.wxVkey=2
var tG9=_v()
_(oD9,tG9)
var eH9=function(oJ9,bI9,xK9,gg){
var fM9=_v()
_(xK9,fM9)
if(_o(1152,oJ9,bI9,gg)){fM9.wxVkey=1
var cN9=_m('navigator',['catchtap',1153,'url',1],[],oJ9,bI9,gg)
var hO9=_v()
_(cN9,hO9)
if(_o(1155,oJ9,bI9,gg)){hO9.wxVkey=1
}
hO9.wxXCkey=1
_(fM9,cN9)
}
fM9.wxXCkey=1
return xK9
}
tG9.wxXCkey=2
_2(1150,eH9,t38,a28,gg,tG9,'picitem','picindex','{{picindex}}')
}
cC9.wxXCkey=1
oD9.wxXCkey=1
}
var f98=_v()
_(x78,f98)
if(_o(1156,t38,a28,gg)){f98.wxVkey=1
var oP9=_v()
_(f98,oP9)
if(_o(1157,t38,a28,gg)){oP9.wxVkey=1
}
oP9.wxXCkey=1
}
o88.wxXCkey=1
f98.wxXCkey=1
_(o68,x78)
var cQ9=_n('view')
_r(cQ9,'class',1158,t38,a28,gg)
var oR9=_v()
_(cQ9,oR9)
if(_o(1159,t38,a28,gg)){oR9.wxVkey=1
var aT9=_m('view',['catchtap',1160,'class',1,'data-dataindex',2,'data-eid',3],[],t38,a28,gg)
var tU9=_v()
_(aT9,tU9)
var eV9=function(oX9,bW9,xY9,gg){
var f19=_v()
_(xY9,f19)
if(_o(1166,oX9,bW9,gg)){f19.wxVkey=1
}
f19.wxXCkey=1
return xY9
}
tU9.wxXCkey=2
_2(1164,eV9,t38,a28,gg,tU9,'item','index','{{index}}')
var c29=_m('navigator',['catchtap',1167,'url',1],[],t38,a28,gg)
var h39=_v()
_(c29,h39)
if(_o(1169,t38,a28,gg)){h39.wxVkey=1
}
h39.wxXCkey=1
_(aT9,c29)
_(oR9,aT9)
}
var lS9=_v()
_(cQ9,lS9)
if(_o(1170,t38,a28,gg)){lS9.wxVkey=1
}
oR9.wxXCkey=1
lS9.wxXCkey=1
_(o68,cQ9)
}
o68.wxXCkey=1
return e48
}
oZ8.wxXCkey=2
_2(1133,l18,cV8,fU8,gg,oZ8,'listitem','Bindex','{{listitem.eid}}')
_(hW8,cY8)
return hW8
}
xS8.wxXCkey=2
_2(1124,oT8,e,s,gg,xS8,'item','Aindex','{{Aindex}}')
var oR8=_v()
_(bQ8,oR8)
if(_o(1171,e,s,gg)){oR8.wxVkey=1
}
oR8.wxXCkey=1
_(o67,bQ8)
}
else{o67.wxVkey=2
var o49=_m('view',['catchtap',1172,'class',1],[],e,s,gg)
var c59=_v()
_(o49,c59)
if(_o(1174,e,s,gg)){c59.wxVkey=1
}
c59.wxXCkey=1
_(o67,o49)
}
var c77=_v()
_(o27,c77)
if(_o(1175,e,s,gg)){c77.wxVkey=1
}
f37.wxXCkey=1
c47.wxXCkey=1
h57.wxXCkey=1
o67.wxXCkey=1
c77.wxXCkey=1
_(r,o27)
var bY7=_v()
_(r,bY7)
if(_o(1176,e,s,gg)){bY7.wxVkey=1
var o69=_v()
_(bY7,o69)
if(_o(1177,e,s,gg)){o69.wxVkey=1
var l79=_v()
_(o69,l79)
if(_o(1178,e,s,gg)){l79.wxVkey=1
}
l79.wxXCkey=1
}
else if(_o(1179,e,s,gg)){o69.wxVkey=2
var a89=_v()
_(o69,a89)
if(_o(1180,e,s,gg)){a89.wxVkey=1
var t99=_n('view')
_r(t99,'class',1181,e,s,gg)
var e09=_v()
_(t99,e09)
if(_o(1182,e,s,gg)){e09.wxVkey=1
}
var bA0=_v()
_(t99,bA0)
if(_o(1183,e,s,gg)){bA0.wxVkey=1
}
e09.wxXCkey=1
bA0.wxXCkey=1
_(a89,t99)
}
a89.wxXCkey=1
}
else{o69.wxVkey=3
var oB0=_v()
_(o69,oB0)
if(_o(1184,e,s,gg)){oB0.wxVkey=1
var xC0=_m('view',['catchtap',1185,'class',1],[],e,s,gg)
var oD0=_v()
_(xC0,oD0)
if(_o(1187,e,s,gg)){oD0.wxVkey=1
}
oD0.wxXCkey=1
_(oB0,xC0)
}
oB0.wxXCkey=1
}
o69.wxXCkey=1
}
var oZ7=_v()
_(r,oZ7)
if(_o(1188,e,s,gg)){oZ7.wxVkey=1
}
var x17=_v()
_(r,x17)
if(_o(1189,e,s,gg)){x17.wxVkey=1
var fE0=_m('view',['catch:tap',1190,'catch:touchmove',1,'class',2],[],e,s,gg)
var cF0=_v()
_(fE0,cF0)
if(_o(1193,e,s,gg)){cF0.wxVkey=1
}
var hG0=_v()
_(fE0,hG0)
if(_o(1194,e,s,gg)){hG0.wxVkey=1
var oH0=_n('view')
_r(oH0,'class',1195,e,s,gg)
var cI0=_v()
_(oH0,cI0)
if(_o(1196,e,s,gg)){cI0.wxVkey=1
}
var oJ0=_v()
_(oH0,oJ0)
if(_o(1197,e,s,gg)){oJ0.wxVkey=1
}
var lK0=_v()
_(oH0,lK0)
if(_o(1198,e,s,gg)){lK0.wxVkey=1
}
var aL0=_v()
_(oH0,aL0)
if(_o(1199,e,s,gg)){aL0.wxVkey=1
}
cI0.wxXCkey=1
oJ0.wxXCkey=1
lK0.wxXCkey=1
aL0.wxXCkey=1
_(hG0,oH0)
}
cF0.wxXCkey=1
hG0.wxXCkey=1
_(x17,fE0)
}
var tM0=_m('view',['catchtap',1200,'class',1],[],e,s,gg)
var eN0=_m('view',['catchtap',1202,'class',1],[],e,s,gg)
var bO0=_v()
_(eN0,bO0)
if(_o(1204,e,s,gg)){bO0.wxVkey=1
}
var oP0=_v()
_(eN0,oP0)
if(_o(1205,e,s,gg)){oP0.wxVkey=1
}
var xQ0=_v()
_(eN0,xQ0)
if(_o(1206,e,s,gg)){xQ0.wxVkey=1
}
var oR0=_v()
_(eN0,oR0)
if(_o(1207,e,s,gg)){oR0.wxVkey=1
}
bO0.wxXCkey=1
oP0.wxXCkey=1
xQ0.wxXCkey=1
oR0.wxXCkey=1
_(tM0,eN0)
_(r,tM0)
bY7.wxXCkey=1
oZ7.wxXCkey=1
x17.wxXCkey=1
return r
}
e_[x[65]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[66]]={}
d_[x[66]]["tempic"]=function(e,s,r,gg){
var b=x[66]+':tempic'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/beforeauthpic/beforeauthpic.wxml"],"",1)
if(p_[b]){_wl(b,x[66]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m59=function(e,s,r,gg){
return r
}
e_[x[66]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[67]]={}
d_[x[67]]["uppicnum"]=function(e,s,r,gg){
var b=x[67]+':uppicnum'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/beforeauthpic/uppicnum.wxml"],"",1)
if(p_[b]){_wl(b,x[67]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m60=function(e,s,r,gg){
return r
}
e_[x[67]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[68]]={}
var m61=function(e,s,r,gg){
var lY0=_n('view')
_r(lY0,'class',1210,e,s,gg)
var x50=_n('view')
_r(x50,'class',1211,e,s,gg)
var o60=_v()
_(x50,o60)
if(_o(1212,e,s,gg)){o60.wxVkey=1
var c80=_m('view',['catchtap',1213,'class',1],[],e,s,gg)
var o00=_v()
_(c80,o00)
var cAAB=function(lCAB,oBAB,aDAB,gg){
var eFAB=_v()
_(aDAB,eFAB)
if(_o(1217,lCAB,oBAB,gg)){eFAB.wxVkey=1
}
eFAB.wxXCkey=1
return aDAB
}
o00.wxXCkey=2
_2(1215,cAAB,e,s,gg,o00,'item','index','{{item.gmtime}}')
var h90=_v()
_(c80,h90)
if(_o(1218,e,s,gg)){h90.wxVkey=1
var bGAB=_m('form',['bindsubmit',1219,'class',1,'reportSubmit',2],[],e,s,gg)
var oHAB=_v()
_(bGAB,oHAB)
if(_o(1222,e,s,gg)){oHAB.wxVkey=1
var xIAB=_v()
_(oHAB,xIAB)
if(_o(1223,e,s,gg)){xIAB.wxVkey=1
}
var oJAB=_v()
_(oHAB,oJAB)
if(_o(1224,e,s,gg)){oJAB.wxVkey=1
}
xIAB.wxXCkey=1
oJAB.wxXCkey=1
}
else{oHAB.wxVkey=2
var fKAB=_v()
_(oHAB,fKAB)
if(_o(1225,e,s,gg)){fKAB.wxVkey=1
}
var cLAB=_v()
_(oHAB,cLAB)
if(_o(1226,e,s,gg)){cLAB.wxVkey=1
}
fKAB.wxXCkey=1
cLAB.wxXCkey=1
}
oHAB.wxXCkey=1
_(h90,bGAB)
}
h90.wxXCkey=1
_(o60,c80)
}
var f70=_v()
_(x50,f70)
if(_o(1227,e,s,gg)){f70.wxVkey=1
}
o60.wxXCkey=1
f70.wxXCkey=1
_(lY0,x50)
var aZ0=_v()
_(lY0,aZ0)
if(_o(1228,e,s,gg)){aZ0.wxVkey=1
}
var t10=_v()
_(lY0,t10)
if(_o(1229,e,s,gg)){t10.wxVkey=1
var hMAB=_v()
_(t10,hMAB)
if(_o(1230,e,s,gg)){hMAB.wxVkey=1
}
hMAB.wxXCkey=1
}
var e20=_v()
_(lY0,e20)
if(_o(1231,e,s,gg)){e20.wxVkey=1
}
var b30=_v()
_(lY0,b30)
if(_o(1232,e,s,gg)){b30.wxVkey=1
var oNAB=_n('view')
_r(oNAB,'class',1233,e,s,gg)
var oPAB=_v()
_(oNAB,oPAB)
var lQAB=function(tSAB,aRAB,eTAB,gg){
var oVAB=_m('view',['catchtap',1237,'class',1,'data-eid',2,'data-sela',3,'data-selb',4],[],tSAB,aRAB,gg)
var xWAB=_v()
_(oVAB,xWAB)
var oXAB=function(cZAB,fYAB,h1AB,gg){
var c3AB=_v()
_(h1AB,c3AB)
if(_o(1246,cZAB,fYAB,gg)){c3AB.wxVkey=1
var o4AB=_n('view')
_r(o4AB,'class',1247,cZAB,fYAB,gg)
var t7AB=_n('view')
_r(t7AB,'class',1248,cZAB,fYAB,gg)
var e8AB=_v()
_(t7AB,e8AB)
if(_o(1249,cZAB,fYAB,gg)){e8AB.wxVkey=1
}
var b9AB=_v()
_(t7AB,b9AB)
if(_o(1250,cZAB,fYAB,gg)){b9AB.wxVkey=1
}
e8AB.wxXCkey=1
b9AB.wxXCkey=1
_(o4AB,t7AB)
var l5AB=_v()
_(o4AB,l5AB)
if(_o(1251,cZAB,fYAB,gg)){l5AB.wxVkey=1
var o0AB=_v()
_(l5AB,o0AB)
if(_o(1252,cZAB,fYAB,gg)){o0AB.wxVkey=1
}
var xABB=_v()
_(l5AB,xABB)
if(_o(1253,cZAB,fYAB,gg)){xABB.wxVkey=1
var fCBB=_v()
_(xABB,fCBB)
if(_o(1254,cZAB,fYAB,gg)){fCBB.wxVkey=1
var cDBB=_v()
_(fCBB,cDBB)
var hEBB=function(cGBB,oFBB,oHBB,gg){
var aJBB=_v()
_(oHBB,aJBB)
if(_o(1257,cGBB,oFBB,gg)){aJBB.wxVkey=1
}
aJBB.wxXCkey=1
return oHBB
}
cDBB.wxXCkey=2
_2(1255,hEBB,cZAB,fYAB,gg,cDBB,'item','index','{{index}}')
}
fCBB.wxXCkey=1
}
var oBBB=_v()
_(l5AB,oBBB)
if(_o(1258,cZAB,fYAB,gg)){oBBB.wxVkey=1
var tKBB=_m('view',['catchtap',1259,'class',1,'data-url',2],[],cZAB,fYAB,gg)
var eLBB=_v()
_(tKBB,eLBB)
if(_o(1262,cZAB,fYAB,gg)){eLBB.wxVkey=1
}
eLBB.wxXCkey=1
_(oBBB,tKBB)
}
else if(_o(1263,cZAB,fYAB,gg)){oBBB.wxVkey=2
var bMBB=_v()
_(oBBB,bMBB)
var oNBB=function(oPBB,xOBB,fQBB,gg){
var hSBB=_v()
_(fQBB,hSBB)
if(_o(1268,oPBB,xOBB,gg)){hSBB.wxVkey=1
var oTBB=_m('navigator',['catchtap',1269,'url',1],[],oPBB,xOBB,gg)
var cUBB=_v()
_(oTBB,cUBB)
if(_o(1271,oPBB,xOBB,gg)){cUBB.wxVkey=1
}
cUBB.wxXCkey=1
_(hSBB,oTBB)
}
hSBB.wxXCkey=1
return fQBB
}
bMBB.wxXCkey=2
_2(1266,oNBB,cZAB,fYAB,gg,bMBB,'picitem','picindex','{{picindex}}')
}
else if(_o(1272,cZAB,fYAB,gg)){oBBB.wxVkey=3
var oVBB=_v()
_(oBBB,oVBB)
if(_o(1273,cZAB,fYAB,gg)){oVBB.wxVkey=1
}
oVBB.wxXCkey=1
}
o0AB.wxXCkey=1
xABB.wxXCkey=1
oBBB.wxXCkey=1
}
var a6AB=_v()
_(o4AB,a6AB)
if(_o(1274,cZAB,fYAB,gg)){a6AB.wxVkey=1
var lWBB=_v()
_(a6AB,lWBB)
if(_o(1275,cZAB,fYAB,gg)){lWBB.wxVkey=1
var tYBB=_v()
_(lWBB,tYBB)
var eZBB=function(o2BB,b1BB,x3BB,gg){
var f5BB=_v()
_(x3BB,f5BB)
if(_o(1278,o2BB,b1BB,gg)){f5BB.wxVkey=1
}
f5BB.wxXCkey=1
return x3BB
}
tYBB.wxXCkey=2
_2(1276,eZBB,cZAB,fYAB,gg,tYBB,'item','index','{{index}}')
}
var aXBB=_v()
_(a6AB,aXBB)
if(_o(1279,cZAB,fYAB,gg)){aXBB.wxVkey=1
}
lWBB.wxXCkey=1
aXBB.wxXCkey=1
}
l5AB.wxXCkey=1
a6AB.wxXCkey=1
_(c3AB,o4AB)
var c6BB=_n('view')
_r(c6BB,'class',1280,cZAB,fYAB,gg)
var h7BB=_v()
_(c6BB,h7BB)
if(_o(1281,cZAB,fYAB,gg)){h7BB.wxVkey=1
var c9BB=_m('view',['catchtap',1282,'class',1,'data-dataindex',2,'data-eid',3],[],cZAB,fYAB,gg)
var o0BB=_v()
_(c9BB,o0BB)
var lACB=function(tCCB,aBCB,eDCB,gg){
var oFCB=_v()
_(eDCB,oFCB)
if(_o(1288,tCCB,aBCB,gg)){oFCB.wxVkey=1
}
oFCB.wxXCkey=1
return eDCB
}
o0BB.wxXCkey=2
_2(1286,lACB,cZAB,fYAB,gg,o0BB,'item','index','{{index}}')
var xGCB=_m('navigator',['catchtap',1289,'url',1],[],cZAB,fYAB,gg)
var oHCB=_v()
_(xGCB,oHCB)
if(_o(1291,cZAB,fYAB,gg)){oHCB.wxVkey=1
}
oHCB.wxXCkey=1
_(c9BB,xGCB)
_(h7BB,c9BB)
}
var o8BB=_v()
_(c6BB,o8BB)
if(_o(1292,cZAB,fYAB,gg)){o8BB.wxVkey=1
}
h7BB.wxXCkey=1
o8BB.wxXCkey=1
_(c3AB,c6BB)
}
c3AB.wxXCkey=1
return h1AB
}
xWAB.wxXCkey=2
_2(1244,oXAB,tSAB,aRAB,gg,xWAB,'listitem','Bindex','{{listitem.eid}}')
_(eTAB,oVAB)
return eTAB
}
oPAB.wxXCkey=2
_2(1235,lQAB,e,s,gg,oPAB,'item','Aindex','{{Aindex}}')
var cOAB=_v()
_(oNAB,cOAB)
if(_o(1293,e,s,gg)){cOAB.wxVkey=1
}
cOAB.wxXCkey=1
_(b30,oNAB)
}
else{b30.wxVkey=2
var fICB=_m('view',['catchtap',1294,'class',1],[],e,s,gg)
var cJCB=_v()
_(fICB,cJCB)
if(_o(1296,e,s,gg)){cJCB.wxVkey=1
}
cJCB.wxXCkey=1
_(b30,fICB)
}
var o40=_v()
_(lY0,o40)
if(_o(1297,e,s,gg)){o40.wxVkey=1
}
aZ0.wxXCkey=1
t10.wxXCkey=1
e20.wxXCkey=1
b30.wxXCkey=1
o40.wxXCkey=1
_(r,lY0)
var oV0=_v()
_(r,oV0)
if(_o(1298,e,s,gg)){oV0.wxVkey=1
var hKCB=_v()
_(oV0,hKCB)
if(_o(1299,e,s,gg)){hKCB.wxVkey=1
var oLCB=_v()
_(hKCB,oLCB)
if(_o(1300,e,s,gg)){oLCB.wxVkey=1
}
oLCB.wxXCkey=1
}
else if(_o(1301,e,s,gg)){hKCB.wxVkey=2
var cMCB=_v()
_(hKCB,cMCB)
if(_o(1302,e,s,gg)){cMCB.wxVkey=1
var oNCB=_n('view')
_r(oNCB,'class',1303,e,s,gg)
var lOCB=_v()
_(oNCB,lOCB)
if(_o(1304,e,s,gg)){lOCB.wxVkey=1
}
var aPCB=_v()
_(oNCB,aPCB)
if(_o(1305,e,s,gg)){aPCB.wxVkey=1
}
lOCB.wxXCkey=1
aPCB.wxXCkey=1
_(cMCB,oNCB)
}
cMCB.wxXCkey=1
}
else{hKCB.wxVkey=3
var tQCB=_v()
_(hKCB,tQCB)
if(_o(1306,e,s,gg)){tQCB.wxVkey=1
var eRCB=_m('view',['catchtap',1307,'class',1],[],e,s,gg)
var bSCB=_v()
_(eRCB,bSCB)
if(_o(1309,e,s,gg)){bSCB.wxVkey=1
}
bSCB.wxXCkey=1
_(tQCB,eRCB)
}
tQCB.wxXCkey=1
}
hKCB.wxXCkey=1
}
var cW0=_v()
_(r,cW0)
if(_o(1310,e,s,gg)){cW0.wxVkey=1
}
var oX0=_v()
_(r,oX0)
if(_o(1311,e,s,gg)){oX0.wxVkey=1
var oTCB=_m('view',['catch:tap',1312,'catch:touchmove',1,'class',2],[],e,s,gg)
var xUCB=_v()
_(oTCB,xUCB)
if(_o(1315,e,s,gg)){xUCB.wxVkey=1
}
var oVCB=_v()
_(oTCB,oVCB)
if(_o(1316,e,s,gg)){oVCB.wxVkey=1
var fWCB=_n('view')
_r(fWCB,'class',1317,e,s,gg)
var cXCB=_v()
_(fWCB,cXCB)
if(_o(1318,e,s,gg)){cXCB.wxVkey=1
}
var hYCB=_v()
_(fWCB,hYCB)
if(_o(1319,e,s,gg)){hYCB.wxVkey=1
}
var oZCB=_v()
_(fWCB,oZCB)
if(_o(1320,e,s,gg)){oZCB.wxVkey=1
}
var c1CB=_v()
_(fWCB,c1CB)
if(_o(1321,e,s,gg)){c1CB.wxVkey=1
}
cXCB.wxXCkey=1
hYCB.wxXCkey=1
oZCB.wxXCkey=1
c1CB.wxXCkey=1
_(oVCB,fWCB)
}
xUCB.wxXCkey=1
oVCB.wxXCkey=1
_(oX0,oTCB)
}
var o2CB=_m('view',['catchtap',1322,'class',1],[],e,s,gg)
var l3CB=_m('view',['catchtap',1324,'class',1],[],e,s,gg)
var a4CB=_v()
_(l3CB,a4CB)
if(_o(1326,e,s,gg)){a4CB.wxVkey=1
}
var t5CB=_v()
_(l3CB,t5CB)
if(_o(1327,e,s,gg)){t5CB.wxVkey=1
}
var e6CB=_v()
_(l3CB,e6CB)
if(_o(1328,e,s,gg)){e6CB.wxVkey=1
}
var b7CB=_v()
_(l3CB,b7CB)
if(_o(1329,e,s,gg)){b7CB.wxVkey=1
}
a4CB.wxXCkey=1
t5CB.wxXCkey=1
e6CB.wxXCkey=1
b7CB.wxXCkey=1
_(o2CB,l3CB)
_(r,o2CB)
oV0.wxXCkey=1
cW0.wxXCkey=1
oX0.wxXCkey=1
return r
}
e_[x[68]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m62=function(e,s,r,gg){
var cBDB=_n('view')
_r(cBDB,'class',1330,e,s,gg)
var hCDB=_v()
_(cBDB,hCDB)
if(_o(1331,e,s,gg)){hCDB.wxVkey=1
}
var oDDB=_v()
_(cBDB,oDDB)
if(_o(1332,e,s,gg)){oDDB.wxVkey=1
var aHDB=_v()
_(oDDB,aHDB)
if(_o(1333,e,s,gg)){aHDB.wxVkey=1
var tIDB=_v()
_(aHDB,tIDB)
if(_o(1334,e,s,gg)){tIDB.wxVkey=1
}
tIDB.wxXCkey=1
}
aHDB.wxXCkey=1
}
var cEDB=_v()
_(cBDB,cEDB)
if(_o(1335,e,s,gg)){cEDB.wxVkey=1
}
var oFDB=_v()
_(cBDB,oFDB)
if(_o(1336,e,s,gg)){oFDB.wxVkey=1
var eJDB=_n('view')
_r(eJDB,'class',1337,e,s,gg)
var oLDB=_v()
_(eJDB,oLDB)
var xMDB=function(fODB,oNDB,cPDB,gg){
var oRDB=_m('view',['catchtap',1341,'class',1,'data-eid',2,'data-sela',3,'data-selb',4],[],fODB,oNDB,gg)
var cSDB=_v()
_(oRDB,cSDB)
var oTDB=function(aVDB,lUDB,tWDB,gg){
var bYDB=_v()
_(tWDB,bYDB)
if(_o(1350,aVDB,lUDB,gg)){bYDB.wxVkey=1
var oZDB=_n('view')
_r(oZDB,'class',1351,aVDB,lUDB,gg)
var f3DB=_n('view')
_r(f3DB,'class',1352,aVDB,lUDB,gg)
var c4DB=_v()
_(f3DB,c4DB)
if(_o(1353,aVDB,lUDB,gg)){c4DB.wxVkey=1
}
var h5DB=_v()
_(f3DB,h5DB)
if(_o(1354,aVDB,lUDB,gg)){h5DB.wxVkey=1
}
c4DB.wxXCkey=1
h5DB.wxXCkey=1
_(oZDB,f3DB)
var x1DB=_v()
_(oZDB,x1DB)
if(_o(1355,aVDB,lUDB,gg)){x1DB.wxVkey=1
var o6DB=_v()
_(x1DB,o6DB)
if(_o(1356,aVDB,lUDB,gg)){o6DB.wxVkey=1
}
var c7DB=_v()
_(x1DB,c7DB)
if(_o(1357,aVDB,lUDB,gg)){c7DB.wxVkey=1
var o8DB=_m('view',['catchtap',1358,'class',1,'data-url',2],[],aVDB,lUDB,gg)
var l9DB=_v()
_(o8DB,l9DB)
if(_o(1361,aVDB,lUDB,gg)){l9DB.wxVkey=1
}
l9DB.wxXCkey=1
_(c7DB,o8DB)
}
else if(_o(1362,aVDB,lUDB,gg)){c7DB.wxVkey=2
var a0DB=_v()
_(c7DB,a0DB)
var tAEB=function(bCEB,eBEB,oDEB,gg){
var oFEB=_v()
_(oDEB,oFEB)
if(_o(1367,bCEB,eBEB,gg)){oFEB.wxVkey=1
var fGEB=_m('navigator',['catchtap',1368,'url',1],[],bCEB,eBEB,gg)
var cHEB=_v()
_(fGEB,cHEB)
if(_o(1370,bCEB,eBEB,gg)){cHEB.wxVkey=1
}
cHEB.wxXCkey=1
_(oFEB,fGEB)
}
oFEB.wxXCkey=1
return oDEB
}
a0DB.wxXCkey=2
_2(1365,tAEB,aVDB,lUDB,gg,a0DB,'picitem','picindex','{{picindex}}')
}
else if(_o(1371,aVDB,lUDB,gg)){c7DB.wxVkey=3
var hIEB=_v()
_(c7DB,hIEB)
if(_o(1372,aVDB,lUDB,gg)){hIEB.wxVkey=1
}
hIEB.wxXCkey=1
}
o6DB.wxXCkey=1
c7DB.wxXCkey=1
}
var o2DB=_v()
_(oZDB,o2DB)
if(_o(1373,aVDB,lUDB,gg)){o2DB.wxVkey=1
var oJEB=_v()
_(o2DB,oJEB)
if(_o(1374,aVDB,lUDB,gg)){oJEB.wxVkey=1
}
oJEB.wxXCkey=1
}
x1DB.wxXCkey=1
o2DB.wxXCkey=1
_(bYDB,oZDB)
var cKEB=_n('view')
_r(cKEB,'class',1375,aVDB,lUDB,gg)
var oLEB=_v()
_(cKEB,oLEB)
if(_o(1376,aVDB,lUDB,gg)){oLEB.wxVkey=1
var lMEB=_m('view',['catchtap',1377,'class',1,'data-dataindex',2,'data-eid',3],[],aVDB,lUDB,gg)
var aNEB=_v()
_(lMEB,aNEB)
var tOEB=function(bQEB,ePEB,oREB,gg){
var oTEB=_v()
_(oREB,oTEB)
if(_o(1383,bQEB,ePEB,gg)){oTEB.wxVkey=1
}
oTEB.wxXCkey=1
return oREB
}
aNEB.wxXCkey=2
_2(1381,tOEB,aVDB,lUDB,gg,aNEB,'item','index','{{index}}')
var fUEB=_m('navigator',['catchtap',1384,'url',1],[],aVDB,lUDB,gg)
var cVEB=_v()
_(fUEB,cVEB)
if(_o(1386,aVDB,lUDB,gg)){cVEB.wxVkey=1
}
cVEB.wxXCkey=1
_(lMEB,fUEB)
_(oLEB,lMEB)
}
var hWEB=_n('view')
_r(hWEB,'class',1387,aVDB,lUDB,gg)
var oXEB=_n('view')
_r(oXEB,'class',1388,aVDB,lUDB,gg)
var cYEB=_v()
_(oXEB,cYEB)
if(_o(1389,aVDB,lUDB,gg)){cYEB.wxVkey=1
}
else{cYEB.wxVkey=2
var oZEB=_m('form',['bindsubmit',1390,'catchtap',1,'class',2,'data-childindex',3,'data-likecatagry',4,'data-parentindex',5,'reportSubmit',6],[],aVDB,lUDB,gg)
var l1EB=_m('button',['class',1397,'formType',1],[],aVDB,lUDB,gg)
var a2EB=_v()
_(l1EB,a2EB)
if(_o(1399,aVDB,lUDB,gg)){a2EB.wxVkey=1
}
var t3EB=_v()
_(l1EB,t3EB)
if(_o(1400,aVDB,lUDB,gg)){t3EB.wxVkey=1
}
var e4EB=_v()
_(l1EB,e4EB)
if(_o(1401,aVDB,lUDB,gg)){e4EB.wxVkey=1
}
a2EB.wxXCkey=1
t3EB.wxXCkey=1
e4EB.wxXCkey=1
_(oZEB,l1EB)
_(cYEB,oZEB)
}
cYEB.wxXCkey=1
_(hWEB,oXEB)
var b5EB=_n('view')
_r(b5EB,'class',1402,aVDB,lUDB,gg)
var o6EB=_v()
_(b5EB,o6EB)
if(_o(1403,aVDB,lUDB,gg)){o6EB.wxVkey=1
}
var x7EB=_v()
_(b5EB,x7EB)
if(_o(1404,aVDB,lUDB,gg)){x7EB.wxVkey=1
}
o6EB.wxXCkey=1
x7EB.wxXCkey=1
_(hWEB,b5EB)
_(cKEB,hWEB)
oLEB.wxXCkey=1
_(bYDB,cKEB)
}
bYDB.wxXCkey=1
return tWDB
}
cSDB.wxXCkey=2
_2(1348,oTDB,fODB,oNDB,gg,cSDB,'listitem','Bindex','{{listitem.eid}}')
_(cPDB,oRDB)
return cPDB
}
oLDB.wxXCkey=2
_2(1339,xMDB,e,s,gg,oLDB,'item','Aindex','{{Aindex}}')
var bKDB=_v()
_(eJDB,bKDB)
if(_o(1405,e,s,gg)){bKDB.wxVkey=1
}
bKDB.wxXCkey=1
_(oFDB,eJDB)
}
else{oFDB.wxVkey=2
}
var lGDB=_v()
_(cBDB,lGDB)
if(_o(1406,e,s,gg)){lGDB.wxVkey=1
}
hCDB.wxXCkey=1
oDDB.wxXCkey=1
cEDB.wxXCkey=1
oFDB.wxXCkey=1
lGDB.wxXCkey=1
_(r,cBDB)
var x9CB=_v()
_(r,x9CB)
if(_o(1407,e,s,gg)){x9CB.wxVkey=1
}
var o0CB=_v()
_(r,o0CB)
if(_o(1408,e,s,gg)){o0CB.wxVkey=1
var o8EB=_m('view',['catch:tap',1409,'catch:touchmove',1,'class',2],[],e,s,gg)
var f9EB=_v()
_(o8EB,f9EB)
if(_o(1412,e,s,gg)){f9EB.wxVkey=1
}
var c0EB=_v()
_(o8EB,c0EB)
if(_o(1413,e,s,gg)){c0EB.wxVkey=1
var hAFB=_n('view')
_r(hAFB,'class',1414,e,s,gg)
var oBFB=_v()
_(hAFB,oBFB)
if(_o(1415,e,s,gg)){oBFB.wxVkey=1
}
var cCFB=_v()
_(hAFB,cCFB)
if(_o(1416,e,s,gg)){cCFB.wxVkey=1
}
var oDFB=_v()
_(hAFB,oDFB)
if(_o(1417,e,s,gg)){oDFB.wxVkey=1
}
var lEFB=_v()
_(hAFB,lEFB)
if(_o(1418,e,s,gg)){lEFB.wxVkey=1
}
oBFB.wxXCkey=1
cCFB.wxXCkey=1
oDFB.wxXCkey=1
lEFB.wxXCkey=1
_(c0EB,hAFB)
}
f9EB.wxXCkey=1
c0EB.wxXCkey=1
_(o0CB,o8EB)
}
var aFFB=_m('view',['catchtap',1419,'class',1],[],e,s,gg)
var tGFB=_m('view',['catchtap',1421,'class',1],[],e,s,gg)
var eHFB=_v()
_(tGFB,eHFB)
if(_o(1423,e,s,gg)){eHFB.wxVkey=1
}
var bIFB=_v()
_(tGFB,bIFB)
if(_o(1424,e,s,gg)){bIFB.wxVkey=1
}
var oJFB=_v()
_(tGFB,oJFB)
if(_o(1425,e,s,gg)){oJFB.wxVkey=1
}
var xKFB=_v()
_(tGFB,xKFB)
if(_o(1426,e,s,gg)){xKFB.wxVkey=1
}
eHFB.wxXCkey=1
bIFB.wxXCkey=1
oJFB.wxXCkey=1
xKFB.wxXCkey=1
_(aFFB,tGFB)
_(r,aFFB)
var fADB=_v()
_(r,fADB)
if(_o(1427,e,s,gg)){fADB.wxVkey=1
}
x9CB.wxXCkey=1
o0CB.wxXCkey=1
fADB.wxXCkey=1
return r
}
e_[x[69]]={f:m62,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
var m63=function(e,s,r,gg){
var hOFB=_n('view')
_r(hOFB,'class',1428,e,s,gg)
var aTFB=_n('view')
_r(aTFB,'class',1429,e,s,gg)
var tUFB=_v()
_(aTFB,tUFB)
if(_o(1430,e,s,gg)){tUFB.wxVkey=1
}
var eVFB=_v()
_(aTFB,eVFB)
if(_o(1431,e,s,gg)){eVFB.wxVkey=1
}
tUFB.wxXCkey=1
eVFB.wxXCkey=1
_(hOFB,aTFB)
var oPFB=_v()
_(hOFB,oPFB)
if(_o(1432,e,s,gg)){oPFB.wxVkey=1
var bWFB=_v()
_(oPFB,bWFB)
if(_o(1433,e,s,gg)){bWFB.wxVkey=1
}
bWFB.wxXCkey=1
}
var cQFB=_v()
_(hOFB,cQFB)
if(_o(1434,e,s,gg)){cQFB.wxVkey=1
}
var oRFB=_v()
_(hOFB,oRFB)
if(_o(1435,e,s,gg)){oRFB.wxVkey=1
var oXFB=_n('view')
_r(oXFB,'class',1436,e,s,gg)
var oZFB=_v()
_(oXFB,oZFB)
var f1FB=function(h3FB,c2FB,o4FB,gg){
var o6FB=_m('view',['catchtap',1440,'class',1,'data-eid',2,'data-sela',3,'data-selb',4],[],h3FB,c2FB,gg)
var l7FB=_v()
_(o6FB,l7FB)
var a8FB=function(e0FB,t9FB,bAGB,gg){
var xCGB=_v()
_(bAGB,xCGB)
if(_o(1449,e0FB,t9FB,gg)){xCGB.wxVkey=1
var fEGB=_n('view')
_r(fEGB,'class',1450,e0FB,t9FB,gg)
var oHGB=_n('view')
_r(oHGB,'class',1451,e0FB,t9FB,gg)
var cIGB=_v()
_(oHGB,cIGB)
if(_o(1452,e0FB,t9FB,gg)){cIGB.wxVkey=1
}
var oJGB=_v()
_(oHGB,oJGB)
if(_o(1453,e0FB,t9FB,gg)){oJGB.wxVkey=1
}
cIGB.wxXCkey=1
oJGB.wxXCkey=1
_(fEGB,oHGB)
var cFGB=_v()
_(fEGB,cFGB)
if(_o(1454,e0FB,t9FB,gg)){cFGB.wxVkey=1
var lKGB=_v()
_(cFGB,lKGB)
if(_o(1455,e0FB,t9FB,gg)){lKGB.wxVkey=1
var aLGB=_m('view',['catchtap',1456,'class',1,'data-url',2],[],e0FB,t9FB,gg)
var tMGB=_v()
_(aLGB,tMGB)
if(_o(1459,e0FB,t9FB,gg)){tMGB.wxVkey=1
}
tMGB.wxXCkey=1
_(lKGB,aLGB)
}
else if(_o(1460,e0FB,t9FB,gg)){lKGB.wxVkey=2
var eNGB=_v()
_(lKGB,eNGB)
var bOGB=function(xQGB,oPGB,oRGB,gg){
var cTGB=_v()
_(oRGB,cTGB)
if(_o(1465,xQGB,oPGB,gg)){cTGB.wxVkey=1
var hUGB=_m('navigator',['catchtap',1466,'url',1],[],xQGB,oPGB,gg)
var oVGB=_v()
_(hUGB,oVGB)
if(_o(1468,xQGB,oPGB,gg)){oVGB.wxVkey=1
}
oVGB.wxXCkey=1
_(cTGB,hUGB)
}
cTGB.wxXCkey=1
return oRGB
}
eNGB.wxXCkey=2
_2(1463,bOGB,e0FB,t9FB,gg,eNGB,'picitem','picindex','{{picindex}}')
}
else if(_o(1469,e0FB,t9FB,gg)){lKGB.wxVkey=3
var cWGB=_v()
_(lKGB,cWGB)
if(_o(1470,e0FB,t9FB,gg)){cWGB.wxVkey=1
}
cWGB.wxXCkey=1
}
lKGB.wxXCkey=1
}
var hGGB=_v()
_(fEGB,hGGB)
if(_o(1471,e0FB,t9FB,gg)){hGGB.wxVkey=1
var oXGB=_v()
_(hGGB,oXGB)
if(_o(1472,e0FB,t9FB,gg)){oXGB.wxVkey=1
}
oXGB.wxXCkey=1
}
cFGB.wxXCkey=1
hGGB.wxXCkey=1
_(xCGB,fEGB)
var oDGB=_v()
_(xCGB,oDGB)
if(_o(1473,e0FB,t9FB,gg)){oDGB.wxVkey=1
}
oDGB.wxXCkey=1
}
xCGB.wxXCkey=1
return bAGB
}
l7FB.wxXCkey=2
_2(1447,a8FB,h3FB,c2FB,gg,l7FB,'listitem','Bindex','{{listitem.eid}}')
_(o4FB,o6FB)
return o4FB
}
oZFB.wxXCkey=2
_2(1438,f1FB,e,s,gg,oZFB,'item','Aindex','{{Aindex}}')
var xYFB=_v()
_(oXFB,xYFB)
if(_o(1474,e,s,gg)){xYFB.wxVkey=1
}
xYFB.wxXCkey=1
_(oRFB,oXFB)
}
else{oRFB.wxVkey=2
var lYGB=_m('view',['catchtap',1475,'class',1],[],e,s,gg)
var aZGB=_v()
_(lYGB,aZGB)
if(_o(1477,e,s,gg)){aZGB.wxVkey=1
}
aZGB.wxXCkey=1
_(oRFB,lYGB)
}
var lSFB=_v()
_(hOFB,lSFB)
if(_o(1478,e,s,gg)){lSFB.wxVkey=1
}
oPFB.wxXCkey=1
cQFB.wxXCkey=1
oRFB.wxXCkey=1
lSFB.wxXCkey=1
_(r,hOFB)
var fMFB=_v()
_(r,fMFB)
if(_o(1479,e,s,gg)){fMFB.wxVkey=1
var t1GB=_v()
_(fMFB,t1GB)
if(_o(1480,e,s,gg)){t1GB.wxVkey=1
var e2GB=_v()
_(t1GB,e2GB)
if(_o(1481,e,s,gg)){e2GB.wxVkey=1
}
e2GB.wxXCkey=1
}
else if(_o(1482,e,s,gg)){t1GB.wxVkey=2
var b3GB=_v()
_(t1GB,b3GB)
if(_o(1483,e,s,gg)){b3GB.wxVkey=1
var o4GB=_n('view')
_r(o4GB,'class',1484,e,s,gg)
var x5GB=_v()
_(o4GB,x5GB)
if(_o(1485,e,s,gg)){x5GB.wxVkey=1
}
var o6GB=_v()
_(o4GB,o6GB)
if(_o(1486,e,s,gg)){o6GB.wxVkey=1
}
x5GB.wxXCkey=1
o6GB.wxXCkey=1
_(b3GB,o4GB)
}
b3GB.wxXCkey=1
}
else{t1GB.wxVkey=3
var f7GB=_v()
_(t1GB,f7GB)
if(_o(1487,e,s,gg)){f7GB.wxVkey=1
var c8GB=_m('view',['catchtap',1488,'class',1],[],e,s,gg)
var h9GB=_v()
_(c8GB,h9GB)
if(_o(1490,e,s,gg)){h9GB.wxVkey=1
}
h9GB.wxXCkey=1
_(f7GB,c8GB)
}
f7GB.wxXCkey=1
}
t1GB.wxXCkey=1
}
var cNFB=_v()
_(r,cNFB)
if(_o(1491,e,s,gg)){cNFB.wxVkey=1
var o0GB=_m('view',['catch:tap',1492,'catch:touchmove',1,'class',2],[],e,s,gg)
var cAHB=_v()
_(o0GB,cAHB)
if(_o(1495,e,s,gg)){cAHB.wxVkey=1
}
var oBHB=_v()
_(o0GB,oBHB)
if(_o(1496,e,s,gg)){oBHB.wxVkey=1
var lCHB=_n('view')
_r(lCHB,'class',1497,e,s,gg)
var aDHB=_v()
_(lCHB,aDHB)
if(_o(1498,e,s,gg)){aDHB.wxVkey=1
}
var tEHB=_v()
_(lCHB,tEHB)
if(_o(1499,e,s,gg)){tEHB.wxVkey=1
}
var eFHB=_v()
_(lCHB,eFHB)
if(_o(1500,e,s,gg)){eFHB.wxVkey=1
}
var bGHB=_v()
_(lCHB,bGHB)
if(_o(1501,e,s,gg)){bGHB.wxVkey=1
}
aDHB.wxXCkey=1
tEHB.wxXCkey=1
eFHB.wxXCkey=1
bGHB.wxXCkey=1
_(oBHB,lCHB)
}
cAHB.wxXCkey=1
oBHB.wxXCkey=1
_(cNFB,o0GB)
}
var oHHB=_m('view',['catchtap',1502,'class',1],[],e,s,gg)
var xIHB=_m('view',['catchtap',1504,'class',1],[],e,s,gg)
var oJHB=_v()
_(xIHB,oJHB)
if(_o(1506,e,s,gg)){oJHB.wxVkey=1
}
var fKHB=_v()
_(xIHB,fKHB)
if(_o(1507,e,s,gg)){fKHB.wxVkey=1
}
var cLHB=_v()
_(xIHB,cLHB)
if(_o(1508,e,s,gg)){cLHB.wxVkey=1
}
var hMHB=_v()
_(xIHB,hMHB)
if(_o(1509,e,s,gg)){hMHB.wxVkey=1
}
oJHB.wxXCkey=1
fKHB.wxXCkey=1
cLHB.wxXCkey=1
hMHB.wxXCkey=1
_(oHHB,xIHB)
_(r,oHHB)
fMFB.wxXCkey=1
cNFB.wxXCkey=1
return r
}
e_[x[70]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
var m64=function(e,s,r,gg){
return r
}
e_[x[71]]={f:m64,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
var m65=function(e,s,r,gg){
return r
}
e_[x[72]]={f:m65,j:[],i:[],ti:[],ic:[]}
d_[x[73]]={}
var m66=function(e,s,r,gg){
return r
}
e_[x[73]]={f:m66,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
var m67=function(e,s,r,gg){
return r
}
e_[x[74]]={f:m67,j:[],i:[],ti:[],ic:[]}
d_[x[75]]={}
var m68=function(e,s,r,gg){
return r
}
e_[x[75]]={f:m68,j:[],i:[],ti:[],ic:[]}
d_[x[76]]={}
var m69=function(e,s,r,gg){
var eTHB=e_[x[76]].i
var oBIB=_n('view')
_r(oBIB,'class',1510,e,s,gg)
var lIIB=_n('view')
_r(lIIB,'class',1511,e,s,gg)
var aJIB=_v()
_(lIIB,aJIB)
if(_o(1512,e,s,gg)){aJIB.wxVkey=1
var eLIB=_m('view',['catchtap',1513,'class',1],[],e,s,gg)
var oNIB=_v()
_(eLIB,oNIB)
var xOIB=function(fQIB,oPIB,cRIB,gg){
var oTIB=_v()
_(cRIB,oTIB)
if(_o(1517,fQIB,oPIB,gg)){oTIB.wxVkey=1
}
oTIB.wxXCkey=1
return cRIB
}
oNIB.wxXCkey=2
_2(1515,xOIB,e,s,gg,oNIB,'item','index','{{item.gmtime}}')
var bMIB=_v()
_(eLIB,bMIB)
if(_o(1518,e,s,gg)){bMIB.wxVkey=1
var cUIB=_m('form',['bindsubmit',1519,'class',1,'reportSubmit',2],[],e,s,gg)
var oVIB=_v()
_(cUIB,oVIB)
if(_o(1522,e,s,gg)){oVIB.wxVkey=1
var lWIB=_v()
_(oVIB,lWIB)
if(_o(1523,e,s,gg)){lWIB.wxVkey=1
}
lWIB.wxXCkey=1
}
else{oVIB.wxVkey=2
var aXIB=_v()
_(oVIB,aXIB)
if(_o(1524,e,s,gg)){aXIB.wxVkey=1
}
aXIB.wxXCkey=1
}
oVIB.wxXCkey=1
_(bMIB,cUIB)
}
bMIB.wxXCkey=1
_(aJIB,eLIB)
}
var tKIB=_v()
_(lIIB,tKIB)
if(_o(1525,e,s,gg)){tKIB.wxVkey=1
}
aJIB.wxXCkey=1
tKIB.wxXCkey=1
_(oBIB,lIIB)
var fCIB=_v()
_(oBIB,fCIB)
if(_o(1526,e,s,gg)){fCIB.wxVkey=1
}
var cDIB=_v()
_(oBIB,cDIB)
if(_o(1527,e,s,gg)){cDIB.wxVkey=1
var tYIB=_v()
_(cDIB,tYIB)
if(_o(1528,e,s,gg)){tYIB.wxVkey=1
var eZIB=_v()
_(tYIB,eZIB)
if(_o(1529,e,s,gg)){eZIB.wxVkey=1
}
eZIB.wxXCkey=1
}
tYIB.wxXCkey=1
}
var hEIB=_v()
_(oBIB,hEIB)
if(_o(1530,e,s,gg)){hEIB.wxVkey=1
}
var oFIB=_v()
_(oBIB,oFIB)
if(_o(1531,e,s,gg)){oFIB.wxVkey=1
}
var cGIB=_v()
_(oBIB,cGIB)
if(_o(1532,e,s,gg)){cGIB.wxVkey=1
var b1IB=_n('view')
_r(b1IB,'class',1533,e,s,gg)
var x3IB=_v()
_(b1IB,x3IB)
var o4IB=function(c6IB,f5IB,h7IB,gg){
var c9IB=_m('view',['catchtap',1537,'class',1,'data-eid',2,'data-sela',3,'data-selb',4],[],c6IB,f5IB,gg)
var o0IB=_v()
_(c9IB,o0IB)
var lAJB=function(tCJB,aBJB,eDJB,gg){
var oFJB=_v()
_(eDJB,oFJB)
if(_o(1546,tCJB,aBJB,gg)){oFJB.wxVkey=1
var xGJB=_n('view')
_r(xGJB,'class',1547,tCJB,aBJB,gg)
var cJJB=_n('view')
_r(cJJB,'class',1548,tCJB,aBJB,gg)
var hKJB=_v()
_(cJJB,hKJB)
if(_o(1549,tCJB,aBJB,gg)){hKJB.wxVkey=1
}
var oLJB=_v()
_(cJJB,oLJB)
if(_o(1550,tCJB,aBJB,gg)){oLJB.wxVkey=1
}
hKJB.wxXCkey=1
oLJB.wxXCkey=1
_(xGJB,cJJB)
var oHJB=_v()
_(xGJB,oHJB)
if(_o(1551,tCJB,aBJB,gg)){oHJB.wxVkey=1
}
var fIJB=_v()
_(xGJB,fIJB)
if(_o(1552,tCJB,aBJB,gg)){fIJB.wxVkey=1
var cMJB=_m('view',['catchtap',1553,'class',1,'data-url',2],[],tCJB,aBJB,gg)
var oNJB=_v()
_(cMJB,oNJB)
if(_o(1556,tCJB,aBJB,gg)){oNJB.wxVkey=1
}
oNJB.wxXCkey=1
_(fIJB,cMJB)
}
else{fIJB.wxVkey=2
var lOJB=_v()
_(fIJB,lOJB)
var aPJB=function(eRJB,tQJB,bSJB,gg){
var xUJB=_v()
_(bSJB,xUJB)
if(_o(1561,eRJB,tQJB,gg)){xUJB.wxVkey=1
var oVJB=_m('navigator',['catchtap',1562,'url',1],[],eRJB,tQJB,gg)
var fWJB=_v()
_(oVJB,fWJB)
if(_o(1564,eRJB,tQJB,gg)){fWJB.wxVkey=1
}
fWJB.wxXCkey=1
_(xUJB,oVJB)
}
xUJB.wxXCkey=1
return bSJB
}
lOJB.wxXCkey=2
_2(1559,aPJB,tCJB,aBJB,gg,lOJB,'picitem','picindex','{{picindex}}')
}
oHJB.wxXCkey=1
fIJB.wxXCkey=1
_(oFJB,xGJB)
var cXJB=_n('view')
_r(cXJB,'class',1565,tCJB,aBJB,gg)
var hYJB=_v()
_(cXJB,hYJB)
if(_o(1566,tCJB,aBJB,gg)){hYJB.wxVkey=1
var c1JB=_m('view',['catchtap',1567,'class',1,'data-dataindex',2,'data-eid',3],[],tCJB,aBJB,gg)
var o2JB=_v()
_(c1JB,o2JB)
var l3JB=function(t5JB,a4JB,e6JB,gg){
var o8JB=_v()
_(e6JB,o8JB)
if(_o(1573,t5JB,a4JB,gg)){o8JB.wxVkey=1
}
o8JB.wxXCkey=1
return e6JB
}
o2JB.wxXCkey=2
_2(1571,l3JB,tCJB,aBJB,gg,o2JB,'item','index','{{index}}')
var x9JB=_m('navigator',['catchtap',1574,'url',1],[],tCJB,aBJB,gg)
var o0JB=_v()
_(x9JB,o0JB)
if(_o(1576,tCJB,aBJB,gg)){o0JB.wxVkey=1
}
o0JB.wxXCkey=1
_(c1JB,x9JB)
_(hYJB,c1JB)
}
var oZJB=_v()
_(cXJB,oZJB)
if(_o(1577,tCJB,aBJB,gg)){oZJB.wxVkey=1
}
hYJB.wxXCkey=1
oZJB.wxXCkey=1
_(oFJB,cXJB)
}
oFJB.wxXCkey=1
return eDJB
}
o0IB.wxXCkey=2
_2(1544,lAJB,c6IB,f5IB,gg,o0IB,'listitem','Bindex','{{listitem.eid}}')
_(h7IB,c9IB)
return h7IB
}
x3IB.wxXCkey=2
_2(1535,o4IB,e,s,gg,x3IB,'item','Aindex','{{Aindex}}')
var o2IB=_v()
_(b1IB,o2IB)
if(_o(1578,e,s,gg)){o2IB.wxVkey=1
}
o2IB.wxXCkey=1
_(cGIB,b1IB)
}
else{cGIB.wxVkey=2
var fAKB=_n('view')
_r(fAKB,'class',1579,e,s,gg)
var cBKB=_v()
_(fAKB,cBKB)
if(_o(1580,e,s,gg)){cBKB.wxVkey=1
var hCKB=_m('view',['catchtap',1581,'class',1],[],e,s,gg)
var oDKB=_v()
_(hCKB,oDKB)
if(_o(1583,e,s,gg)){oDKB.wxVkey=1
}
oDKB.wxXCkey=1
_(cBKB,hCKB)
}
else{cBKB.wxVkey=2
var cEKB=_m('view',['catchtap',1584,'class',1],[],e,s,gg)
var oFKB=_v()
_(cEKB,oFKB)
if(_o(1586,e,s,gg)){oFKB.wxVkey=1
}
oFKB.wxXCkey=1
_(cBKB,cEKB)
}
cBKB.wxXCkey=1
_(cGIB,fAKB)
}
var oHIB=_v()
_(oBIB,oHIB)
if(_o(1587,e,s,gg)){oHIB.wxVkey=1
}
fCIB.wxXCkey=1
cDIB.wxXCkey=1
hEIB.wxXCkey=1
oFIB.wxXCkey=1
cGIB.wxXCkey=1
oHIB.wxXCkey=1
_(r,oBIB)
var bUHB=_v()
_(r,bUHB)
if(_o(1588,e,s,gg)){bUHB.wxVkey=1
var lGKB=_v()
_(bUHB,lGKB)
if(_o(1589,e,s,gg)){lGKB.wxVkey=1
var aHKB=_v()
_(lGKB,aHKB)
if(_o(1590,e,s,gg)){aHKB.wxVkey=1
}
aHKB.wxXCkey=1
}
else if(_o(1591,e,s,gg)){lGKB.wxVkey=2
var tIKB=_v()
_(lGKB,tIKB)
if(_o(1592,e,s,gg)){tIKB.wxVkey=1
var eJKB=_n('view')
_r(eJKB,'class',1593,e,s,gg)
var bKKB=_v()
_(eJKB,bKKB)
if(_o(1594,e,s,gg)){bKKB.wxVkey=1
}
var oLKB=_v()
_(eJKB,oLKB)
if(_o(1595,e,s,gg)){oLKB.wxVkey=1
}
bKKB.wxXCkey=1
oLKB.wxXCkey=1
_(tIKB,eJKB)
}
tIKB.wxXCkey=1
}
else{lGKB.wxVkey=3
var xMKB=_v()
_(lGKB,xMKB)
if(_o(1596,e,s,gg)){xMKB.wxVkey=1
var oNKB=_m('view',['catchtap',1597,'class',1],[],e,s,gg)
var fOKB=_v()
_(oNKB,fOKB)
if(_o(1599,e,s,gg)){fOKB.wxVkey=1
}
fOKB.wxXCkey=1
_(xMKB,oNKB)
}
xMKB.wxXCkey=1
}
lGKB.wxXCkey=1
}
var oVHB=_v()
_(r,oVHB)
if(_o(1600,e,s,gg)){oVHB.wxVkey=1
}
var xWHB=_v()
_(r,xWHB)
if(_o(1601,e,s,gg)){xWHB.wxVkey=1
}
var cPKB=_m('view',['catchtap',1602,'class',1],[],e,s,gg)
var hQKB=_m('view',['catchtap',1604,'class',1],[],e,s,gg)
var oRKB=_v()
_(hQKB,oRKB)
if(_o(1606,e,s,gg)){oRKB.wxVkey=1
}
var cSKB=_v()
_(hQKB,cSKB)
if(_o(1607,e,s,gg)){cSKB.wxVkey=1
}
var oTKB=_v()
_(hQKB,oTKB)
if(_o(1608,e,s,gg)){oTKB.wxVkey=1
}
var lUKB=_v()
_(hQKB,lUKB)
if(_o(1609,e,s,gg)){lUKB.wxVkey=1
}
oRKB.wxXCkey=1
cSKB.wxXCkey=1
oTKB.wxXCkey=1
lUKB.wxXCkey=1
_(cPKB,hQKB)
_(r,cPKB)
var oXHB=_v()
_(r,oXHB)
if(_o(1610,e,s,gg)){oXHB.wxVkey=1
}
var fYHB=_v()
_(r,fYHB)
if(_o(1611,e,s,gg)){fYHB.wxVkey=1
}
var cZHB=_v()
_(r,cZHB)
if(_o(1612,e,s,gg)){cZHB.wxVkey=1
}
var h1HB=_v()
_(r,h1HB)
if(_o(1613,e,s,gg)){h1HB.wxVkey=1
}
var o2HB=_v()
_(r,o2HB)
if(_o(1614,e,s,gg)){o2HB.wxVkey=1
}
var c3HB=_v()
_(r,c3HB)
if(_o(1615,e,s,gg)){c3HB.wxVkey=1
}
var o4HB=_v()
_(r,o4HB)
if(_o(1616,e,s,gg)){o4HB.wxVkey=1
}
var l5HB=_v()
_(r,l5HB)
if(_o(1617,e,s,gg)){l5HB.wxVkey=1
}
var a6HB=_v()
_(r,a6HB)
if(_o(1618,e,s,gg)){a6HB.wxVkey=1
}
_ai(eTHB,x[17],e_,x[76],698,2)
var t7HB=_v()
_(r,t7HB)
if(_o(1619,e,s,gg)){t7HB.wxVkey=1
var aVKB=_v()
_(t7HB,aVKB)
var tWKB=_o(1621,e,s,gg)
var eXKB=_gd(x[76],tWKB,e_,d_)
if(eXKB){
var bYKB=_1(1620,e,s,gg) || {}
var cur_globalf=gg.f
aVKB.wxXCkey=3
eXKB(bYKB,bYKB,aVKB,gg)
gg.f=cur_globalf
}
else _w(tWKB,x[76],699,14)
}
var e8HB=_v()
_(r,e8HB)
if(_o(1622,e,s,gg)){e8HB.wxVkey=1
}
var b9HB=_v()
_(r,b9HB)
if(_o(1623,e,s,gg)){b9HB.wxVkey=1
}
var o0HB=_v()
_(r,o0HB)
if(_o(1624,e,s,gg)){o0HB.wxVkey=1
}
_ai(eTHB,x[30],e_,x[76],731,2)
var xAIB=_v()
_(r,xAIB)
if(_o(1625,e,s,gg)){xAIB.wxVkey=1
var oZKB=_v()
_(xAIB,oZKB)
var x1KB=_o(1627,e,s,gg)
var o2KB=_gd(x[76],x1KB,e_,d_)
if(o2KB){
var f3KB=_1(1626,e,s,gg) || {}
var cur_globalf=gg.f
oZKB.wxXCkey=3
o2KB(f3KB,f3KB,oZKB,gg)
gg.f=cur_globalf
}
else _w(x1KB,x[76],732,14)
}
var c4KB=_m('menu-modal',['modalShow',1628,'title',1],[],e,s,gg)
_(r,c4KB)
bUHB.wxXCkey=1
oVHB.wxXCkey=1
xWHB.wxXCkey=1
oXHB.wxXCkey=1
fYHB.wxXCkey=1
cZHB.wxXCkey=1
h1HB.wxXCkey=1
o2HB.wxXCkey=1
c3HB.wxXCkey=1
o4HB.wxXCkey=1
l5HB.wxXCkey=1
a6HB.wxXCkey=1
t7HB.wxXCkey=1
e8HB.wxXCkey=1
b9HB.wxXCkey=1
o0HB.wxXCkey=1
xAIB.wxXCkey=1
eTHB.pop()
eTHB.pop()
return r
}
e_[x[76]]={f:m69,j:[],i:[],ti:[x[17],x[30]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['pages/blessingActivities/components/sendBlessing/sendBlessing.json'] = {
  "component": true,
  "usingComponents": {}
};
		__wxAppCode__['pages/blessingActivities/components/sendBlessing/sendBlessing.wxml'] = $gwx( './pages/blessingActivities/components/sendBlessing/sendBlessing.wxml' );
		__wxAppCode__['pages/blessingActivities/pages/album/album.json'] = {
  "enablePullDownRefresh":true,
  "usingComponents": {
    "send-blessing": "../../components/sendBlessing/sendBlessing"
  }
};
		__wxAppCode__['pages/blessingActivities/pages/album/album.wxml'] = $gwx( './pages/blessingActivities/pages/album/album.wxml' );
		__wxAppCode__['pages/blessingActivities/pages/detail/detail.json'] = {
  "usingComponents": {
    "send-blessing": "../../components/sendBlessing/sendBlessing"
  }
};
		__wxAppCode__['pages/blessingActivities/pages/detail/detail.wxml'] = $gwx( './pages/blessingActivities/pages/detail/detail.wxml' );
		__wxAppCode__['pages/components/menuModal/menuModal.json'] = {
  "component": true,
  "usingComponents": {}
};
		__wxAppCode__['pages/components/menuModal/menuModal.wxml'] = $gwx( './pages/components/menuModal/menuModal.wxml' );
		__wxAppCode__['pages/components/publishMenu/publishMenu.json'] = {
  "component": true,
  "usingComponents": {}
};
		__wxAppCode__['pages/components/publishMenu/publishMenu.wxml'] = $gwx( './pages/components/publishMenu/publishMenu.wxml' );
		__wxAppCode__['pages/familyAlbum/eventAxis/eventAxis.json'] = {
    "enablePullDownRefresh": true,
  "usingComponents": {
    "publish-menu": "/pages/components/publishMenu/publishMenu",
    "menu-modal": "/pages/components/menuModal/menuModal"
  }
};
		__wxAppCode__['pages/familyAlbum/eventAxis/eventAxis.wxml'] = $gwx( './pages/familyAlbum/eventAxis/eventAxis.wxml' );
		__wxAppCode__['pages/familyAlbum/index/index.json'] = {
    "enablePullDownRefresh": true,
  "usingComponents": {
    "publish-menu": "/pages/components/publishMenu/publishMenu",
    "menu-modal": "/pages/components/menuModal/menuModal"
  }
};
		__wxAppCode__['pages/familyAlbum/index/index.wxml'] = $gwx( './pages/familyAlbum/index/index.wxml' );
		__wxAppCode__['pages/grouptypescoll/grouptypescoll.json'] = {
  "navigationBarTitleText": "忆年共享相册",
  "enablePullDownRefresh": true,
  "onReachBottomDistance": 1000,
  "usingComponents": {
    "publish-menu": "/pages/components/publishMenu/publishMenu",
    "menu-modal": "/pages/components/menuModal/menuModal"
  }
};
		__wxAppCode__['pages/grouptypescoll/grouptypescoll.wxml'] = $gwx( './pages/grouptypescoll/grouptypescoll.wxml' );
		__wxAppCode__['pages/personalPage/personalPage.json'] = {
  "navigationBarTitleText": "个人主页",
  "usingComponents": {
    "menu-modal": "/pages/components/menuModal/menuModal"
  }
};
		__wxAppCode__['pages/personalPage/personalPage.wxml'] = $gwx( './pages/personalPage/personalPage.wxml' );
		__wxAppCode__['pages/publish/components/andFriends/andFriends.json'] = {
  "component": true,
  "usingComponents": {}
};
		__wxAppCode__['pages/publish/components/andFriends/andFriends.wxml'] = $gwx( './pages/publish/components/andFriends/andFriends.wxml' );
		__wxAppCode__['pages/publish/components/dateAndTime/dateAndTime.json'] = {
  "component": true,
  "usingComponents": {
    "datetime": "../datetime/datetime"
  }
};
		__wxAppCode__['pages/publish/components/dateAndTime/dateAndTime.wxml'] = $gwx( './pages/publish/components/dateAndTime/dateAndTime.wxml' );
		__wxAppCode__['pages/publish/components/datetime/datetime.json'] = {
  "component": true,
  "usingComponents": {}
};
		__wxAppCode__['pages/publish/components/datetime/datetime.wxml'] = $gwx( './pages/publish/components/datetime/datetime.wxml' );
		__wxAppCode__['pages/publish/components/inputText/inputText.json'] = {
  "component": true,
  "usingComponents": {}
};
		__wxAppCode__['pages/publish/components/inputText/inputText.wxml'] = $gwx( './pages/publish/components/inputText/inputText.wxml' );
		__wxAppCode__['pages/publish/components/location/location.json'] = {
  "component": true,
  "usingComponents": {}
};
		__wxAppCode__['pages/publish/components/location/location.wxml'] = $gwx( './pages/publish/components/location/location.wxml' );
		__wxAppCode__['pages/publish/components/syncToOtherAlbums/syncToOtherAlbums.json'] = {
  "component": true,
  "usingComponents": {}
};
		__wxAppCode__['pages/publish/components/syncToOtherAlbums/syncToOtherAlbums.wxml'] = $gwx( './pages/publish/components/syncToOtherAlbums/syncToOtherAlbums.wxml' );
		__wxAppCode__['pages/publish/pages/audio/audio.json'] = {
  "navigationBarTitleText": "上传音频",
  "usingComponents": {
    "location": "../../components/location/location",
    "date-and-time": "../../components/dateAndTime/dateAndTime"
  }
};
		__wxAppCode__['pages/publish/pages/audio/audio.wxml'] = $gwx( './pages/publish/pages/audio/audio.wxml' );
		__wxAppCode__['pages/publish/pages/eventImage/eventImage.json'] = {
  "navigationBarTitleText": "上传图片",
  "usingComponents": {
    "input-text": "../../components/inputText/inputText",
    "location": "../../components/location/location",
    "date-and-time": "../../components/dateAndTime/dateAndTime",
    "sync-to-other-albums": "../../components/syncToOtherAlbums/syncToOtherAlbums",
    "and-friends": "../../components/andFriends/andFriends"
  }
};
		__wxAppCode__['pages/publish/pages/eventImage/eventImage.wxml'] = $gwx( './pages/publish/pages/eventImage/eventImage.wxml' );
		__wxAppCode__['pages/publish/pages/image/image.json'] = {
  "navigationBarTitleText": "上传图片",
  "usingComponents": {
    "input-text": "../../components/inputText/inputText",
    "location": "../../components/location/location",
    "date-and-time": "../../components/dateAndTime/dateAndTime",
    "sync-to-other-albums": "../../components/syncToOtherAlbums/syncToOtherAlbums",
    "and-friends": "../../components/andFriends/andFriends"
  }
};
		__wxAppCode__['pages/publish/pages/image/image.wxml'] = $gwx( './pages/publish/pages/image/image.wxml' );
		__wxAppCode__['pages/publish/pages/text/text.json'] = {
  "navigationBarTitleText": "发布文字",
  "usingComponents": {
    "input-text": "../../components/inputText/inputText",
    "location": "../../components/location/location",
    "date-and-time": "../../components/dateAndTime/dateAndTime",
    "and-friends": "../../components/andFriends/andFriends"
  }
};
		__wxAppCode__['pages/publish/pages/text/text.wxml'] = $gwx( './pages/publish/pages/text/text.wxml' );
		__wxAppCode__['pages/publish/pages/video/video.json'] = {
  "navigationBarTitleText": "上传视频",
  "usingComponents": {
    "input-text": "../../components/inputText/inputText",
    "location": "../../components/location/location",
    "date-and-time": "../../components/dateAndTime/dateAndTime",
    "sync-to-other-albums": "../../components/syncToOtherAlbums/syncToOtherAlbums",
    "and-friends": "../../components/andFriends/andFriends"
  }
};
		__wxAppCode__['pages/publish/pages/video/video.wxml'] = $gwx( './pages/publish/pages/video/video.wxml' );
		__wxAppCode__['pages/viewscoll/viewscoll.json'] = {
  "navigationBarTitleText": "忆年共享相册",
  "enablePullDownRefresh": true,
  "onReachBottomDistance": 1000,
  "usingComponents": {
    "menu-modal": "/pages/components/menuModal/menuModal"
  }
};
		__wxAppCode__['pages/viewscoll/viewscoll.wxml'] = $gwx( './pages/viewscoll/viewscoll.wxml' );
	
	define("pages/blessingActivities/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){return new Promise(function(e,t){wx.showLoading({title:"准备上传照片",icon:"none"}),wx.request({url:o.host+"/YinianProject/yinian/GetPrivateSpaceUploadToken",method:"GET",success:function(t){e(t)},fail:function(e){t({code:-100,msg:"请求失败"})},complete:function(){wx.hideLoading()}})})}function t(e,t,n){var o=e.lastIndexOf("."),i=(new Date).getTime()+""+parseInt(1e8*Math.random()+1e8)+e.substring(o);return new Promise(function(n,o){wx.uploadFile({url:"https://upload.qiniup.com",filePath:e,name:"file",formData:{key:i,token:t},success:function(e){var t=JSON.parse(e.data).key;n(t)},fail:function(e){o({code:-100,msg:"请求失败"})},complete:function(){}})})}function n(e){return wx.hideLoading(),console.log("uploadEvent",e),new Promise(function(t,n){wx.showLoading({title:"正在发布"}),wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/uploadEvent",data:{userId:e.userId,groupId:e.groupId,picAddress:e.picAddress,storage:3e3},success:function(e){0===e.data.code?t(e.data):n(e.data)},fail:function(e){n(e)},complete:function(){wx.hideLoading()}})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getBlessingList=exports.getComment=exports.comment=exports.getMyBlessing=exports.getDetail=exports.getMyRanking=exports.getRankingList=exports.getBlessedUser=exports.sendBlessing=exports.getOthersEvent=exports.getMyEvent=exports.upload=void 0;require("../../utils/util.js");var o=require("../../utils/api.js");exports.upload=function(o){console.log("接收到的参数",o);var i="",a=void 0;if(0!==o.paths.length)return e().then(function(e){return console.log("获取七牛云TOKEN:",e.data.data[0].token),a=e.data.data[0].token,wx.showLoading({title:"正在上传照片"}),o.paths[0],t(o.paths[0],a,1)}).then(function(e){var n=o.paths[1];if(n)return console.log("第二张-有数据",e),e&&(i+=e+","),t(n,a,2);e&&(i+=e),console.log("第二张-无",e)}).then(function(e){var n=o.paths[2];if(n)return console.log("第三张-有数据",e),e&&(i+=e+","),t(n,a,3);console.log("第三张-无",e),e&&(i+=e)}).then(function(e){var n=o.paths[3];if(n)return console.log("第四张-有数据",e),e&&(i+=e+","),t(n,a,4);console.log("第四张-无",e),e&&(i+=e)}).then(function(e){e&&(i+=e+",");var n=o.paths[4];if(n)return console.log("第五张-有数据",e),e&&(i+=e+","),t(n,a,5);console.log("第五张-无",e),e&&(i+=e)}).then(function(e){var n=o.paths[5];if(n)return console.log("第六张-有数据",e),e&&(i+=e+","),t(n,a,6);console.log("第六张-无",e),e&&(i+=e)}).then(function(e){var n=o.paths[6];if(n)return console.log("第七张-有数据",e),e&&(i+=e+","),t(n,a,7);console.log("第七张-无",e),e&&(i+=e)}).then(function(e){var n=o.paths[7];if(n)return console.log("第八张-有数据",e),e&&(i+=e+","),t(n,a,8);console.log("第八张-无",e),e&&(i+=e)}).then(function(e){var n=o.paths[8];if(n)return console.log("第九张-有数据",e),e&&(i+=e),t(n,a,9);console.log("第九张-无",e),e&&(i+=e)}).then(function(e){return wx.hideLoading(),console.log("最后结果",i),o.picAddress=i,n(o)});wx.showToast({title:"没有选择照片"})},exports.getMyEvent=function(e){var t=e.userId,n=e.groupId;return new Promise(function(e,i){wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/homePageMySelfBaseInfo",data:{loginUserId:t,groupId:n},success:function(t){0===t.data.code?e(t.data):i(t.data)},fail:function(e){i(e)},complete:function(){}})})},exports.getOthersEvent=function(e){var t=e.userId,n=e.groupId,i=e.pageNumber;return new Promise(function(e,a){wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/homePageOtherUserInfo",data:{loginUserId:t,groupId:n,pageNumber:i},success:function(t){0===t.data.code?e(t.data):a(t.data)},fail:function(e){a(e)},complete:function(){}})})},exports.sendBlessing=function(e){var t=e.userId,n=e.eventId,i=e.blessContent;return new Promise(function(e,a){wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/sendBless",data:{loginUserId:t,eventId:n,blessContent:i},success:function(t){0===t.data.code?e(t.data):a(t.data)},fail:function(e){a(e)},complete:function(){}})})},exports.getBlessedUser=function(e){return new Promise(function(e,t){wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/homePageBlessNickNames",success:function(n){0===n.data.code?e(n.data):t(n.data)},fail:function(e){t(e)},complete:function(){}})})},exports.getRankingList=function(e){var t=e.pageSize,n=e.pageNumber;return new Promise(function(e,i){wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/orderPageOtherInfo",data:{pageSize:t,pageNumber:n},success:function(t){0===t.data.code?e(t.data):i(t.data)},fail:function(e){i(e)},complete:function(){}})})},exports.getMyRanking=function(e){return new Promise(function(t,n){wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/orderPageMySelfInfo",data:{loginUserId:e},success:function(e){0===e.data.code?t(e.data):n(e.data)},fail:function(e){n(e)},complete:function(){}})})},exports.getDetail=function(e){var t=e.eventId,n=e.userId;return new Promise(function(e,i){wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/detailPageMySelfPictures",data:{eventId:t,loginUserId:n},success:function(t){0===t.data.code?e(t.data):i(t.data)},fail:function(e){i(e)},complete:function(){}})})},exports.getMyBlessing=function(e){return new Promise(function(t,n){wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/detailPageMySelfBlessInfo",data:{detailUserId:e},success:function(e){0===e.data.code?t(e.data):n(e.data)},fail:function(e){n(e)},complete:function(){}})})},exports.comment=function(e){var t=e.userId,n=e.eventId,i=e.content,a=e.formID;return new Promise(function(e,r){wx.request({url:o.host+"/YinianProject/yinian/SendComment1",data:{commentUserId:t,commentedUserId:10,eventId:n,content:i,formID:a},success:function(t){0===t.data.code?e(t.data):r(t.data)},fail:function(e){r(e)},complete:function(){}})})},exports.getComment=function(e){var t=e.eventId,n=e.pageSize,i=e.pageNumber;return new Promise(function(e,a){wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/detailPageShowComments",data:{eventId:t,pageSize:n,pageNumber:i},success:function(t){0===t.data.code?e(t.data):a(t.data)},fail:function(e){a(e)},complete:function(){}})})},exports.getBlessingList=function(e){return new Promise(function(e,t){wx.request({url:o.host+"/YinianProject/activity201805WorkHonor/showBlessForSelect",success:function(n){0===n.data.code?e(n.data):t(n.data)},fail:function(e){t(e)},complete:function(){}})})}; 
 			}); 
		define("pages/blessingActivities/icon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var s="http://oibl5dyji.bkt.clouddn.com/",e={RULES:s+"bless_rules@2x.png",BLADE:s+"bless_blade@2x.png",LOVE:s+"bless_love@2x.png",LOVE_ADD:s+"bless_love_add@2x.png",LOVE_GRAY:s+"bless_love_gray@2x.png",TAG:s+"bless_tag@2x.png",CLOSE:s+"bless_close@2x.png",CLOSE_L:s+"bless_close_l@2x.png",EDGE:s+"bless_edge@2x.png",POINT:s+"bless_point@2x.png",GIFT:s+"bless_gift@2x.png",HOUSE:s+"bless_house@2x.png",WRITE:s+"bless_write@2x.png",PLUS:s+"bless_plus@2x.png",PLUS_LIGHT:s+"bless_plus_light@2x.png",SPEAKER:s+"bless_speaker@2x.png",DELETE:s+"bless_delete@2x.png"};exports.ICON=e; 
 			}); 
		define("pages/publish/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.publishText=exports.getAlbumBaseInfo=exports.getAlbumMembers=void 0;var e=require("../../utils/api.js"),t=require("../../utils/hotActive.js").hotActive;exports.getAlbumMembers=function(t){var o=t.groupid,i=t.userid,u=t.pagenum,r=void 0===u?1:u;return new Promise(function(t,u){wx.request({url:e.host+"/YinianProject/space/ShowGroupMemberTop",data:{groupid:o,userid:i,pagenum:r,source:""},method:"GET",success:function(e){0==e.data.code?t(e.data.data):u({msg:"获取数据失败",code:-1})},fail:function(){u({msg:"请求发送失败",code:-1})}})})},exports.getAlbumBaseInfo=function(t){return new Promise(function(o,i){wx.request({url:e.host+"/YinianProject/space/MembersNum",data:{groupid:t},method:"GET",success:function(e){0==e.data.code?o(e.data.data[0]):i({msg:"获取数据失败",code:-1})},fail:function(){i({msg:"请求发送失败",code:-1})}})})},exports.publishText=function(o){return wx.showLoading({title:"正在发布..."}),new Promise(function(i,u){wx.request({url:e.host+"/YinianProject/event/UploadEvent",data:{formID:o.formID,userid:o.userId,groupid:o.groupId,textTitle:o.title,content:o.content,attentionMember:o.attentionMember||"",memorytime:o.memorytime,publishedTime:o.publishTime||"",place:o.place,source:"小程序",isPush:"true",main:1},success:function(e){0===e.data.code?(i(e.data.data),t(o.userId,o.groupId,"upload")):u({msg:"请求返回错误",code:-1})},fail:function(){u({msg:"请求发送失败",code:-1})},complete:function(){wx.hideLoading()}})})}; 
 			}); 
		define("pages/publish/icon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var p="http://oibl5dyji.bkt.clouddn.com/",_={RECORD_STOP:p+"publish_audio_stop@2x.png",RECORD_PAUSE:p+"publish_audio_pause@2x.png",RECORD_MIKE_PLUS_MULTICOLOR:p+"publish_mike_plus@2x.png",RECORD_MIKE_PLUS_MONOTONE:p+"publish_audio_mike@2x.png",AUDIO_BACKGROUND_IMAGE:p+"publish_audio_bgc@2x.png",AUDIO_PLAY:p+"publish_audio_play@2x.png",ADD_PHOTO:p+"0426_addreupload.png",ADD_VIDEO:p+"publish_add_video@2x.png",SYNC:p+"publish_sync@2x.png",AND:p+"publish_and@2x.png",CLOSE:p+"publish_close@2x.png",CLOSE_SOLID:p+"publish_close_solid@2x.png",POSITION:p+"publish_position@2x.png",PAGE:p+"publish_page@2x.png",PAGE_GRAY:p+"publish_page_gray@2x.png",VIDEO:p+"publish_video@2x@2x.png",MIKE:p+"publish_mike@2x.png",CLOCK:p+"publish_clock@2x.png",WRITE:p+"publish_write@2x.png",WRITE_GRAY:p+"publish_write_gray@2x.png",SELECTED:p+"publish_selected@2x.png",UNSELECTED:p+"publish_unSelected@2x.png",ARROW:p+"myself_more@2x.png",LOADING:p+"homepage_loading.gif"};exports.ICON=_; 
 			}); 
		define("pages/publish/publish.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.previousPageNoRefresh=function(){var e=getCurrentPages();setTimeout(function(){e[e.length-2].setData({fromlast:1}),e[e.length-2].fromlast=1},150)}; 
 			}); 
		define("pages/test/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(function(e){return e&&e.__esModule?e:{default:e}})(require("../../utils/pagehelper.js")).default.page({data:{},changetext:function(){console.log(this.from)}}); 
 			}); 
		define("utils/albumsjump.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,a,l){var t="";switch(e=parseInt(e)){case 2:t="/pages/grouptypescoll/grouptypescoll",l&&(t=t+"?"+l),o(a,t),console.log("type",2);break;case 3:t="/pages/grouptypescoll/grouptypescoll",l&&(t=t+"?"+l),o(a,t),console.log("type",3);break;case 4:t="/pages/familyAlbum/index/index",l&&(t=t+"?"+l),o(a,t),console.log("type",4);break;case 5:t="/pages/grouptypescoll/grouptypescoll",l&&(t=t+"?"+l),o(a,t),console.log("type",5);break;case 11:t="/pages/loversalbum/index/index",l&&(t=t+"?"+l),o(a,t),console.log("type",11);break;case 40:t="/pages/collegealbum/albumlist/index",l&&(t=t+"?"+l),o(a,t),console.log("type",30);break;default:t="/pages/viewscoll/viewscoll",l&&(t=t+"?"+l),o(a,t),console.log("type",e)}}function o(e,o){switch(e){case"navigate":wx.navigateTo({url:o});break;case"redirect":wx.redirectTo({url:o});break;case"switchTab":wx.switchTab({url:o});break;case"reLaunch":wx.reLaunch({url:o});break;case"navigateBack":wx.navigateBack({delta:1});break;default:wx.switchTab({url:"/pages/index/index"})}}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports={albumsjump:function(o){if("object"===(void 0===o?"undefined":a(o))&&"null"!=o){var l=o.navigator||"navigate",t=o.groupNewType||0,c=o.data||{},s=[];Object.keys(c).forEach(function(e){s.push(e+"="+c[e])});var n=s.join("&");console.log(n),e(t,l,n)}else console.log(o)}}; 
 			}); 
		define("utils/amap-wx.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports.AMapWX=function(e){this.key=e.key,this.requestConfig={s:"rsx",platform:"WXJS",appname:e.key,sdkversion:"1.1.0",logversion:"2.0"},this.getRegeo=function(e){function t(t){var a=s.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:s.key,location:t,extensions:"all",s:a.s,platform:a.platform,appname:s.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(s){var a,o,i,r,n,c,d,p;s.data.status&&"1"==s.data.status?(a=s.data.regeocode,o=a.addressComponent,i=[],r=a.roads[0].name+"附近",n=t.split(",")[0],c=t.split(",")[1],a.pois&&a.pois[0]&&(r=a.pois[0].name+"附近",(d=a.pois[0].location)&&(n=parseFloat(d.split(",")[0]),c=parseFloat(d.split(",")[1]))),o.provice&&i.push(o.provice),o.city&&i.push(o.city),o.district&&i.push(o.district),o.streetNumber&&o.streetNumber.street&&o.streetNumber.number?(i.push(o.streetNumber.street),i.push(o.streetNumber.number)):i.push(a.roads[0].name),i=i.join(""),p=[{iconPath:e.iconPath,width:e.iconWidth,height:e.iconHeight,name:i,desc:r,longitude:n,latitude:c,id:0,regeocodeData:a}],e.success(p)):e.fail({errCode:s.data.infocode,errMsg:s.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}var s=this;e.location?t(e.location):wx.getLocation({type:"gcj02",success:function(e){t(e.longitude+","+e.latitude)},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},this.getWeather=function(e){function t(t){var o="base";e.type&&"forecast"==e.type&&(o="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:s.key,city:t,extensions:o,s:a.s,platform:a.platform,appname:s.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(t){var s,a;t.data.status&&"1"==t.data.status?t.data.lives?(s=t.data.lives)&&s.length>0&&(s=s[0],a=function(e){return{city:{text:"城市",data:e.city},weather:{text:"天气",data:e.weather},temperature:{text:"温度",data:e.temperature},winddirection:{text:"风向",data:e.winddirection+"风"},windpower:{text:"风力",data:e.windpower+"级"},humidity:{text:"湿度",data:e.humidity+"%"}}}(s),a.liveData=s,e.success(a)):t.data.forecasts&&t.data.forecasts[0]&&e.success({forecast:t.data.forecasts[0]}):e.fail({errCode:t.data.infocode,errMsg:t.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}var s=this,a=s.requestConfig;e.city?t(e.city):wx.getLocation({type:"gcj02",success:function(o){var i=o.longitude+","+o.latitude;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:s.key,location:i,extensions:"all",s:a.s,platform:a.platform,appname:s.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(s){var a,o;s.data.status&&"1"==s.data.status?((o=s.data.regeocode).addressComponent?a=o.addressComponent.adcode:o.aois&&o.aois.length>0&&(a=o.aois[0].adcode),t(a)):e.fail({errCode:s.data.infocode,errMsg:s.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},this.getPoiAround=function(e){function t(t){var o={key:s.key,location:t,s:a.s,platform:a.platform,appname:s.key,sdkversion:a.sdkversion,logversion:a.logversion};e.querytypes&&(o.types=e.querytypes),e.querykeywords&&(o.keywords=e.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:o,method:"GET",header:{"content-type":"application/json"},success:function(t){var s,a,o,i;if(t.data.status&&"1"==t.data.status){if((t=t.data)&&t.pois){for(s=[],a=0;a<t.pois.length;a++)o=0==a?e.iconPathSelected:e.iconPath,s.push({latitude:parseFloat(t.pois[a].location.split(",")[1]),longitude:parseFloat(t.pois[a].location.split(",")[0]),iconPath:o,width:22,height:32,id:a,name:t.pois[a].name,address:t.pois[a].address});i={markers:s,poisData:t.pois},e.success(i)}}else e.fail({errCode:t.data.infocode,errMsg:t.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}var s=this,a=s.requestConfig;e.location?t(e.location):wx.getLocation({type:"gcj02",success:function(e){t(e.longitude+","+e.latitude)},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},this.getStaticmap=function(e){function t(t){o.push("location="+t),e.zoom&&o.push("zoom="+e.zoom),e.size&&o.push("size="+e.size),e.scale&&o.push("scale="+e.scale),e.markers&&o.push("markers="+e.markers),e.labels&&o.push("labels="+e.labels),e.paths&&o.push("paths="+e.paths),e.traffic&&o.push("traffic="+e.traffic);var s=i+o.join("&");e.success({url:s})}var s,a=this,o=[],i="https://restapi.amap.com/v3/staticmap?";o.push("key="+a.key),s=a.requestConfig,o.push("s="+s.s),o.push("platform="+s.platform),o.push("appname="+s.appname),o.push("sdkversion="+s.sdkversion),o.push("logversion="+s.logversion),e.location?t(e.location):wx.getLocation({type:"gcj02",success:function(e){t(e.longitude+","+e.latitude)},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}}; 
 			}); 
		define("utils/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("./config.js");var t="https://api.zhuiyinanian.com",i="https://api.zhuiyinanian.com";module.exports={getUrl:function(i){return t+"/"+i},getUrl_test:function(t){return i+"/"+t},host:t,host_test:i}; 
 			}); 
		define("utils/base64.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var r=new function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t=function(r){r=r.replace(/\r\n/g,"\n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},e=function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)(o=r.charCodeAt(e))<128?(t+=String.fromCharCode(o),e++):o>191&&o<224?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t};this.encode=function(e){var o,a,n,c,h,C,d,i="",f=0;for(e=t(e);f<e.length;)c=(o=e.charCodeAt(f++))>>2,h=(3&o)<<4|(a=e.charCodeAt(f++))>>4,C=(15&a)<<2|(n=e.charCodeAt(f++))>>6,d=63&n,isNaN(a)?C=d=64:isNaN(n)&&(d=64),i=i+r.charAt(c)+r.charAt(h)+r.charAt(C)+r.charAt(d);return i},this.decode=function(t){var o,a,n,c,h,C,d="",i=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");i<t.length;)o=r.indexOf(t.charAt(i++))<<2|(c=r.indexOf(t.charAt(i++)))>>4,a=(15&c)<<4|(h=r.indexOf(t.charAt(i++)))>>2,n=(3&h)<<6|(C=r.indexOf(t.charAt(i++))),d+=String.fromCharCode(o),64!=h&&(d+=String.fromCharCode(a)),64!=C&&(d+=String.fromCharCode(n));return d=e(d)}};module.exports={Base64:r}; 
 			}); 
		define("utils/common.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={host:"http://192.168.0.111:8080",hasUserId:function(){wx.getStorageSync("userInfo").userid||wx.showModal({title:"错误",content:"获取用户ID失败",showCancel:!1,success:function(t){t.confirm&&wx.switchTab({url:"/pages/index/index"})}})},getCurrentPageUrlWithArgs:function(){var t=getCurrentPages(),e=t[t.length-1],n=e.route,r=e.options,s=n+"?";for(var o in r)s+=o+"="+r[o]+"&";return s=s.substring(0,s.length-1)}}; 
 			}); 
		define("utils/config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={baseUrl:"api.zhuiyinanian.com/",newGroupType:[2,3,4,5,11],nweGroupTypeNoLover:[2,3,5],usernumber:1e7};module.exports=e; 
 			}); 
		define("utils/controal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("./util.js").wxreq;module.exports={hotmallSharePic:function(){return a({pathname:"YinianProject/flashSale/flashSaleShowSwitch",data:{}})}}; 
 			}); 
		define("utils/grace.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,n){if("object"==("undefined"==typeof exports?"undefined":e(exports))&&"object"==("undefined"==typeof module?"undefined":e(module)))module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var o=n();for(var r in o)("object"==("undefined"==typeof exports?"undefined":e(exports))?exports:t)[r]=o[r]}}(void 0,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(t,n,o){var r,i="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return void 0===t?"undefined":e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":e(t)};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":i(window))&&(r=window)}t.exports=r},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.type=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,o,r){Object.defineProperty(t,o,{set:function(t){r=n(t),u?s=!0:e.setData(a,null,null,!0)},get:function(){return r},enumerable:!0,configurable:!0})}function n(e){return"object"===(0,o.type)(e)?e=i(e):"array"===(0,o.type)(e)&&(e=r(e)),e}function r(e){for(var t=[],o=0;o<e.length;++o){var r=e[o];r=n(r),t[o]=r}return["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var n=t[e];t[e]=function(){var e=n.apply(this,[].slice.call(arguments));return s=!0,u||a.$commit(),e}}),t}function i(e){var o={};for(var r in e){var i=e[r];t(o,r,i=n(i))}return o}var a,u=!1,s=!1;a=i(e.data),Object.defineProperty(e,"$data",{set:function(e){a.$cache();for(var t in e)a[t]=e[t];s=!0,a.$commit()},get:function(){return a},enumerable:!0,configurable:!0}),a.$set=function(e,r,i){"array"==(0,o.type)(e)?(i=n(i),e[r]=i):"object"==(0,o.type)(e)&&t(e,r,i),s=!0,u||a.$commit()},a.$cache=function(){u=!0},a.$commit=function(){u=!1,s&&!a.$hide&&(s=!1,e.setData(a,null,null,!0))}};var o=n(1)},function(e,t,n){(function(e){Object.defineProperty(t,"__esModule",{value:!0}),e._graceBus||(e._graceBus={}),t.default={$emit:function(t){for(var n=e._graceBus[t],o=arguments.length,r=Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=!0,u=!1,s=void 0;try{for(var c,f=n[Symbol.iterator]();!(a=(c=f.next()).done);a=!0)c.value.apply(null,r)}catch(e){u=!0,s=e}finally{try{!a&&f.return&&f.return()}finally{if(u)throw s}}},$on:function(t,n){e._graceBus[t]=e._graceBus[t]||[],e._graceBus[t].push(n)},$off:function(t,n){var r=e._graceBus[t]||[];if(n){for(var i=0;i<r.length;++i)if(n==o){r.splice(i,1);break}}else e._graceBus[t]=[]}}}).call(t,n(0))},function(t,n,o){(function(t){var o,r,i,a="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return void 0===t?"undefined":e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":e(t)};!function(e,u){"object"===a(n)&&"object"===a(t)?t.exports=u():(r=[],void 0!==(i="function"==typeof(o=u)?o.apply(n,r):o)&&(t.exports=i))}(0,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){var o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return void 0===e?"undefined":a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":a(e)};e.exports={type:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isObject:function(e,t){return t?"object"===this.type(e):e&&"object"===(void 0===e?"undefined":o(e))},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},encode:function(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")},formatParams:function(e){var t=[];for(var n in e){var o=e[n];this.isObject(o)&&(o=JSON.stringify(o)),t.push(this.encode(n)+"="+this.encode(o))}return t.join("&")},merge:function(e,t){for(var n in t)e.hasOwnProperty(n)?this.isObject(t[n],1)&&this.isObject(e[n],1)&&this.merge(e[n],t[n]):e[n]=t[n];return e}}},function(e,t,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return void 0===e?"undefined":a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":a(e)},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),s="undefined"!=typeof document;e.exports=function(e){return function(){function t(){o(this,t),this.requestHeaders={},this.readyState=0,this.timeout=0,this.responseURL="",this.responseHeaders={}}return i(t,[{key:"_call",value:function(e){this[e]&&this[e].apply(this,[].splice.call(arguments,1))}},{key:"_changeReadyState",value:function(e){this.readyState=e,this._call("onreadystatechange")}},{key:"open",value:function(e,t){if(this.method=e,t){if(0!==(t=u.trim(t)).indexOf("http")&&s){var n=document.createElement("a");n.href=t,t=n.href}}else t=location.href;this.responseURL=t,this._changeReadyState(1)}},{key:"send",value:function(t){var n=this;if(t=t||null,s){var o=document.cookie;o&&(this.requestHeaders.cookie=o)}var i=this;if(e){var a={method:i.method,url:i.responseURL,headers:i.requestHeaders||{},body:t};u.merge(a,i._options||{}),"GET"===a.method&&(a.body=null),i._changeReadyState(3);var c;i.timeout=i.timeout||0,i.timeout>0&&(c=setTimeout(function(){3===i.readyState&&(n._call("onloadend"),i._changeReadyState(0),i._call("ontimeout"))},i.timeout)),a.timeout=i.timeout,e(a,function(e){function t(t){var n=e[t];return delete e[t],n}if(3===i.readyState){clearTimeout(c),i.status=t("statusCode")-0;var n=t("responseText"),o=t("statusMessage");if(i.status){var a=t("headers"),u={};for(var f in a){var l=a[f],d=f.toLowerCase();"object"===(void 0===l?"undefined":r(l))?u[d]=l:(u[d]=u[d]||[],u[d].push(l))}var p=u["set-cookie"];s&&p&&p.forEach(function(e){document.cookie=e.replace(/;\s*httpOnly/gi,"")}),i.responseHeaders=u,i.statusText=o||"",i.response=i.responseText=n,i._response=e,i._changeReadyState(4),i._call("onload")}else i.statusText=n,i._call("onerror",{msg:o});i._call("onloadend")}})}else console.error("Ajax require adapter")}},{key:"setRequestHeader",value:function(e,t){this.requestHeaders[u.trim(e)]=t}},{key:"getResponseHeader",value:function(e){return(this.responseHeaders[e.toLowerCase()]||"").toString()||null}},{key:"getAllResponseHeaders",value:function(){var e="";for(var t in this.responseHeaders)e+=t+":"+this.getResponseHeader(t)+"\r\n";return e||null}},{key:"abort",value:function(e){this._changeReadyState(0),this._call("onerror",{msg:e}),this._call("onloadend")}}],[{key:"setAdapter",value:function(t){e=t}}]),t}()}},function(e,t,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a="undefined"!=typeof document,u=function(){function e(t){function n(e){var t;i.merge(e,{lock:function(){t||(e.p=new Promise(function(e){t=e}))},unlock:function(){t&&(t(),e.p=t=null)}})}o(this,e),this.engine=t||XMLHttpRequest,this.default=this;var r=this.interceptors={response:{use:function(e,t){this.handler=e,this.onerror=t}},request:{use:function(e){this.handler=e}}},a=r.request;n(r.response),n(a),this.config={method:"GET",baseURL:"",headers:{},timeout:0,parseJson:!0,withCredentials:!1}}return r(e,[{key:"request",value:function(e,t,n){var o=this,r=new this.engine,u="Content-Type",s=u.toLowerCase(),c=this.interceptors,f=c.request,l=c.response,d=f.handler,p=new Promise(function(c,p){function h(e){return e&&e.then&&e.catch}function y(e,t){e?e.then(function(){t()}):t()}function m(n){function o(e,t,o){y(l.p,function(){e&&(o&&(t.request=n),t=e.call(l,t,Promise)||t),h(t)||(t=Promise[0===o?"resolve":"reject"](t)),t.then(function(e){c(e)}).catch(function(e){p(e)})})}function s(e){e.engine=r,o(l.onerror,e,-1)}function f(e,t){this.message=e,this.status=t}t=n.body,e=i.trim(n.url);var d=i.trim(n.baseURL||"");if(e||!a||d||(e=location.href),0!==e.indexOf("http")){var m="/"===e[0];if(!d&&a){var v=location.pathname.split("/");v.pop(),d=location.protocol+"//"+location.host+(m?"":v.join("/"))}if("/"!==d[d.length-1]&&(d+="/"),e=d+(m?e.substr(1):e),a){var b=document.createElement("a");b.href=e,e=b.href}}var g=i.trim(n.responseType||"");r.withCredentials=!!n.withCredentials;var S="GET"===n.method;S&&t&&("string"!==i.type(t)&&(t=i.formatParams(t)),e+=(-1===e.indexOf("?")?"?":"&")+t),r.open(n.method,e);try{r.timeout=n.timeout||0,"stream"!==g&&(r.responseType=g)}catch(e){}i.isFormData(t)||-1===["object","array"].indexOf(i.type(t))||(n.headers[u]="application/json;charset=utf-8",t=JSON.stringify(t));for(var _ in n.headers)if(_!==u||!i.isFormData(t)&&t&&!S)try{r.setRequestHeader(_,n.headers[_])}catch(e){}else delete n.headers[_];r.onload=function(){var e=r.response||r.responseText;n.parseJson&&-1!==(r.getResponseHeader(u)||"").indexOf("json")&&!i.isObject(e)&&(e=JSON.parse(e));var t={},a=(r.getAllResponseHeaders()||"").split("\r\n");a.pop(),a.forEach(function(e){var n=e.split(":")[0];t[n]=r.getResponseHeader(n)});var c=r.status,d=r.statusText,p={data:e,headers:t,status:c,statusText:d};if(i.merge(p,r._response),c>=200&&c<300||304===c)p.engine=r,p.request=n,o(l.handler,p,0);else{var h=new f(d,c);h.response=p,s(h)}},r.onerror=function(e){s(new f(e.msg||"Network Error",0))},r.ontimeout=function(){s(new f("timeout [ "+r.timeout+"ms ]",1))},r._options=n,setTimeout(function(){r.send(S?null:t)},0)}i.isObject(e)&&(n=e,e=n.url),(n=n||{}).headers=n.headers||{},y(f.p,function(){i.merge(n,o.config);var r=n.headers;r[u]=r[u]||r[s]||"application/x-www-form-urlencoded",delete r[s],n.body=t||n.body,e=i.trim(e||""),n.method=n.method.toUpperCase(),n.url=e;var a=n;d&&(a=d.call(f,n,Promise)||n),h(a)||(a=Promise.resolve(a)),a.then(function(e){e===n?m(e):c(e)},function(e){p(e)})})});return p.engine=r,p}},{key:"all",value:function(e){return Promise.all(e)}},{key:"spread",value:function(e){return function(t){return e.apply(null,t)}}},{key:"lock",value:function(){this.interceptors.request.lock()}},{key:"unlock",value:function(){this.interceptors.request.unlock()}}]),e}();u.default=u,["get","post","put","patch","head","delete"].forEach(function(e){u.prototype[e]=function(t,n,o){return this.request(t,n,i.merge({method:e},o))}}),e.exports=u},,,,function(e,t,n){e.exports=function(e,t){var n={method:e.method,url:e.url,dataType:e.dataType||void 0,header:e.headers,data:e.body||{},success:function(e){t({statusCode:e.statusCode,responseText:e.data,headers:e.header,statusMessage:e.errMsg})},fail:function(e){t({statusCode:e.statusCode||0,statusMessage:e.errMsg})}};wx.request(n)}},,,,,function(e,t,n){var o=n(2),r=n(1)(n(6));e.exports=function(e){return new o(e||r)}}])})}).call(n,o(6)(t))},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n in t){var r,i;!function(n){var a=e[n];if(a){if("function"==(r=(0,o.type)(a)))e[n]=function(){var e=[].slice.call(arguments);return t[n].apply(this,e),a.apply(this,e)};else if("object"==r&&(0,o.type)(t[n])==r)for(i in t[n])a.hasOwnProperty(i)||(a[i]=t[n][i])}else e[n]=t[n]}(n)}};var o=n(1)},function(e,t,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(t,o,r,i){if(o||r||i)return n.call(e,t,o,r);e.$data=t}var n=e.setData;n.toString()!==t.toString()&&Object.defineProperty(e,"setData",{get:function(){return t}})}Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(2)),a=o(n(4)),u=o(n(5)),s=o(n(3)),c=new a.default;t.default={page:function(t){(0,u.default)(t,{onLoad:function(t){var n=this;e.id=e.id||1,this.$id=e.id++,r(this),(0,i.default)(this),this.$http=c,this.$bus=s.default,s.default.$on("_back-data",function(e,t){e==n.$id&&n.$onBackData&&(n.$hide=!1,n.$onBackData.call(n,t))})},onHide:function(){var e=this.$data;e.$hide=!0,e.$cache()},onShow:function(){var e=this.$data;e.$hide=!1,e.$commit()},$goBack:function(e,t){if(t=t>0?t:1,void 0!==e){var n=getCurrentPages(),o=n.length-t-1;o<-1&&(o=0),o>=0&&s.default.$emit("_back-data",n[o].$id,e)}wx.navigateBack({delta:t})}}),Page(t)},component:function(e){(0,u.default)(e,{ready:function(e){r(this),(0,i.default)(this),this.$http=c,this.$bus=s.default}}),Component(e)},mixin:u.default,bus:s.default,http:c,createHttpClient:function(){return new a.default}}}).call(t,n(0))}])}); 
 			}); 
		define("utils/hotActive.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("./util.js");module.exports={hotActive:function(e,o,a){console.log(e,o,a),t.wxreq({pathname:"YinianProject/flashSale/calculateHotForUser",data:{userId:e,groupId:o,operation:a}}).then(function(t){}).catch(function(t){})}}; 
 			}); 
		define("utils/pagehelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t){return t&&t.__esModule?t:{default:t}}(require("grace.js")),e=t.default.page,a=getApp();t.default.page=function(o){t.default.mixin(o,{onLoad:function(t){var e=this;Object.keys(t).forEach(function(a){e[a]=t[a]}),t.port&&(a.globalData.port=t.port),a.stat.statpv({route:this.route,options:t})}}),e.call(t.default,o)},exports.default=t.default; 
 			}); 
		define("utils/promise.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(n,e){"object"===("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.ES6Promise=e()}(void 0,function(){function n(n){return"function"==typeof n||"object"===(void 0===n?"undefined":t(n))&&null!==n}function e(t){return"function"==typeof t}function r(){return void 0!==F?function(){F(i)}:o()}function o(){var t=setTimeout;return function(){return t(i,1)}}function i(){for(var t=0;t<D;t+=2)(0,G[t])(G[t+1]),G[t]=void 0,G[t+1]=void 0;D=0}function s(t,n){var e=arguments,r=this,o=new this.constructor(c);void 0===o[I]&&x(o);var i=r._state;return i?function(){var t=e[i-1];L(function(){return E(i,o,t,r._result)})}():w(r,o,t,n),o}function u(n){var e=this;if(n&&"object"===(void 0===n?"undefined":t(n))&&n.constructor===e)return n;var r=new e(c);return v(r,n),r}function c(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function a(){return new TypeError("A promises callback cannot return that same promise.")}function l(t){try{return t.then}catch(t){return V.error=t,V}}function h(t,n,e,r){try{t.call(n,e,r)}catch(t){return t}}function p(t,n,e){L(function(t){var r=!1,o=h(e,n,function(e){r||(r=!0,n!==e?v(t,e):m(t,e))},function(n){r||(r=!0,b(t,n))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,b(t,o))},t)}function d(t,n){n._state===Q?m(t,n._result):n._state===R?b(t,n._result):w(n,void 0,function(n){return v(t,n)},function(n){return b(t,n)})}function _(t,n,r){n.constructor===t.constructor&&r===s&&n.constructor.resolve===u?d(t,n):r===V?b(t,V.error):void 0===r?m(t,n):e(r)?p(t,n,r):m(t,n)}function v(t,e){t===e?b(t,f()):n(e)?_(t,e,l(e)):m(t,e)}function y(t){t._onerror&&t._onerror(t._result),g(t)}function m(t,n){t._state===J&&(t._result=n,t._state=Q,0!==t._subscribers.length&&L(g,t))}function b(t,n){t._state===J&&(t._state=R,t._result=n,L(y,t))}function w(t,n,e,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=n,o[i+Q]=e,o[i+R]=r,0===i&&t._state&&L(g,t)}function g(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<n.length;s+=3)r=n[s],o=n[s+e],r?E(e,r,o,i):o(i);t._subscribers.length=0}}function A(){this.error=null}function S(t,n){try{return t(n)}catch(t){return X.error=t,X}}function E(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,f=void 0;if(i){if((s=S(r,o))===X?(f=!0,u=s.error,s=null):c=!0,n===s)return void b(n,a())}else s=o,c=!0;n._state!==J||(i&&c?v(n,s):f?b(n,u):t===Q?m(n,s):t===R&&b(n,s))}function j(t,n){try{n(function(n){v(t,n)},function(n){b(t,n)})}catch(n){b(t,n)}}function T(){return Z++}function x(t){t[I]=Z++,t._state=void 0,t._result=void 0,t._subscribers=[]}function M(t,n){this._instanceConstructor=t,this.promise=new t(c),this.promise[I]||x(this.promise),q(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?m(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&m(this.promise,this._result))):b(this.promise,C())}function C(){return new Error("Array Methods must be provided an Array")}function O(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function P(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function k(t){this[I]=T(),this._result=this._state=void 0,this._subscribers=[],c!==t&&("function"!=typeof t&&O(),this instanceof k?j(this,t):P())}var Y=void 0,q=Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},D=0,F=void 0,K=void 0,L=function(t,n){G[D]=t,G[D+1]=n,2===(D+=2)&&(K?K(i):H())},N="undefined"!=typeof window?window:void 0,U=N||{},W=U.MutationObserver||U.WebKitMutationObserver,z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),B="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,G=new Array(1e3),H=void 0;H=z?function(){return process.nextTick(i)}:W?function(){var t=0,n=new W(i),e=document.createTextNode("");return n.observe(e,{characterData:!0}),function(){e.data=t=++t%2}}():B?function(){var t=new MessageChannel;return t.port1.onmessage=i,function(){return t.port2.postMessage(0)}}():void 0===N&&"function"==typeof require?function(){try{var t=require("vertx");return F=t.runOnLoop||t.runOnContext,r()}catch(t){return o()}}():o();var I=Math.random().toString(36).substring(16),J=void 0,Q=1,R=2,V=new A,X=new A,Z=0;return M.prototype._enumerate=function(){for(var t=this.length,n=this._input,e=0;this._state===J&&e<t;e++)this._eachEntry(n[e],e)},M.prototype._eachEntry=function(t,n){var e=this._instanceConstructor,r=e.resolve;if(r===u){var o=l(t);if(o===s&&t._state!==J)this._settledAt(t._state,n,t._result);else if("function"!=typeof o)this._remaining--,this._result[n]=t;else if(e===k){var i=new e(c);_(i,t,o),this._willSettleAt(i,n)}else this._willSettleAt(new e(function(n){return n(t)}),n)}else this._willSettleAt(r(t),n)},M.prototype._settledAt=function(t,n,e){var r=this.promise;r._state===J&&(this._remaining--,t===R?b(r,e):this._result[n]=e),0===this._remaining&&m(r,this._result)},M.prototype._willSettleAt=function(t,n){var e=this;w(t,void 0,function(t){return e._settledAt(Q,n,t)},function(t){return e._settledAt(R,n,t)})},k.all=function(t){return new M(this,t).promise},k.race=function(t){var n=this;return new n(q(t)?function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)}:function(t,n){return n(new TypeError("You must pass an array to race."))})},k.resolve=u,k.reject=function(t){var n=new this(c);return b(n,t),n},k._setScheduler=function(t){K=t},k._setAsap=function(t){L=t},k._asap=L,k.prototype={constructor:k,then:s,catch:function(t){return this.then(null,t)}},k.Promise=k,k}); 
 			}); 
		define("utils/qqmap-wx-jssdk.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),o={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},i={location2query:function(t){if("string"==typeof t)return t;for(var e="",o=0;o<t.length;o++){var i=t[o];e&&(e+=";"),i.location&&(e=e+i.location.lat+","+i.location.lng),i.latitude&&i.longitude&&(e=e+i.latitude+","+i.longitude)}return e},getWXLocation:function(t,e,o){wx.getLocation({type:"gcj02",success:t,fail:e,complete:o})},getLocationParam:function(t){return"string"==typeof t&&(t=2===t.split(",").length?{latitude:t.split(",")[0],longitude:t.split(",")[1]}:{}),t},polyfillParam:function(t){t.success=t.success||function(){},t.fail=t.fail||function(){},t.complete=t.complete||function(){}},checkParamKeyEmpty:function(t,e){if(!t[e]){var i=this.buildErrorConfig(o.PARAM_ERR,o.PARAM_ERR_MSG+e+"参数格式有误");return t.fail(i),t.complete(i),!0}return!1},checkKeyword:function(t){return!this.checkParamKeyEmpty(t,"keyword")},checkLocation:function(t){var e=this.getLocationParam(t.location);if(!e||!e.latitude||!e.longitude){var i=this.buildErrorConfig(o.PARAM_ERR,o.PARAM_ERR_MSG+" location参数格式有误");return t.fail(i),t.complete(i),!1}return!0},buildErrorConfig:function(t,e){return{status:t,message:e}},buildWxRequestConfig:function(t,e){var i=this;return e.header={"content-type":"application/json"},e.method="GET",e.success=function(e){var o=e.data;0===o.status?t.success(o):t.fail(o)},e.fail=function(e){e.statusCode=o.WX_ERR_CODE,t.fail(i.buildErrorConfig(o.WX_ERR_CODE,result.errMsg))},e.complete=function(e){switch(+e.statusCode){case o.WX_ERR_CODE:t.complete(i.buildErrorConfig(o.WX_ERR_CODE,e.errMsg));break;case o.WX_OK_CODE:var r=e.data;0===r.status?t.complete(r):t.complete(i.buildErrorConfig(r.status,r.message));break;default:t.complete(i.buildErrorConfig(o.SYSTEM_ERR,o.SYSTEM_ERR_MSG))}},e},locationProcess:function(t,e,r,a){var n=this;r=r||function(e){e.statusCode=o.WX_ERR_CODE,t.fail(n.buildErrorConfig(o.WX_ERR_CODE,e.errMsg))},a=a||function(e){e.statusCode==o.WX_ERR_CODE&&t.complete(n.buildErrorConfig(o.WX_ERR_CODE,e.errMsg))},t.location?n.checkLocation(t)&&e(i.getLocationParam(t.location)):n.getWXLocation(e,r,a)}},r=function(){function o(e){if(t(this,o),!e.key)throw Error("key值不能为空");this.key=e.key}return e(o,[{key:"search",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),i.checkKeyword(t)){var o={keyword:t.keyword,orderby:t.orderby||"_distance",page_size:t.page_size||10,page_index:t.page_index||1,output:"json",key:e.key};t.address_format&&(o.address_format=t.address_format),t.filter&&(o.filter=t.filter);var r=t.distance||"1000",a=t.auto_extend||1;i.locationProcess(t,function(e){o.boundary="nearby("+e.latitude+","+e.longitude+","+r+","+a+")",wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/place/v1/search",data:o}))})}}},{key:"getSuggestion",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),i.checkKeyword(t)){var o={keyword:t.keyword,region:t.region||"全国",region_fix:t.region_fix||0,policy:t.policy||0,output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/place/v1/suggestion",data:o}))}}},{key:"reverseGeocoder",value:function(t){var e=this;t=t||{},i.polyfillParam(t);var o={coord_type:t.coord_type||5,get_poi:t.get_poi||0,output:"json",key:e.key};t.poi_options&&(o.poi_options=t.poi_options);i.locationProcess(t,function(e){o.location=e.latitude+","+e.longitude,wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/geocoder/v1/",data:o}))})}},{key:"geocoder",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"address")){var o={address:t.address,output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/geocoder/v1/",data:o}))}}},{key:"getCityList",value:function(t){var e=this;t=t||{},i.polyfillParam(t);var o={output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/district/v1/list",data:o}))}},{key:"getDistrictByCityId",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"id")){var o={id:t.id||"",output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/district/v1/getchildren",data:o}))}}},{key:"calculateDistance",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"to")){var o={mode:t.mode||"walking",to:i.location2query(t.to),output:"json",key:e.key};t.from&&(t.location=t.from),i.locationProcess(t,function(e){o.from=e.latitude+","+e.longitude,wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/distance/v1/",data:o}))})}}}]),o}();module.exports=r; 
 			}); 
		define("utils/reg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={testStr:function(q){return new RegExp("AV|hz|sm|PX|C4|usk|flg|GCD|gcd|GHB|rfa|sex|TND|voa|.ru|.cc|SQ|tmd|nnd|89-|cnd|dpp|TMD|xxx|t56|LSD|qy6|TEL|淫|嫖|陰|姦|肏|屄|K粉|18dy|pn95|3退|A级|A片|fuck|J巴|lama|nacb|nmis|porn|shit|suck|svdc|taip|TNND|wo98|操B|插B|大b|二B|狗b|傻B|傻X|F·B|T·W|Z·W|Y·D|S·F|a片|2奶|k粉|cdjp|dafa|dfdz|falu|>jnv|9评|G点|MDMA|SARS|红K|.exe|6合|c-sz|hqzg|it01|wj2y|FUCK|反G|六4|法L|9坪|h漫|h图|99dv|嫩b|RX65|T牌|qvod|3箭|654K|55MM|AK47|ATOM|b毛|3健|3棱|CP99|G水|lqb78|zsgnw|lqb18|cxmyw|dk555|laohj|we399|h59me|boxun|17大|18禁|3d肉|Kx粉|naive|paper|黄JU|FALun|yinh|anime|bitch|Bjork|bjork|Party|fldfh|598gj|ab003|baiok|buslz|djkdh|haosf|hy898|jsxys|ka888|ka999|kaobi|meiti|qqywf|s3186|typou|weizi|wt800|xgzrc|xj818|zdbmm|zs007|zt286|bb弹|fa轮|看jj|daai8|zqfpw|台du|89之|tusha|FL功|自fe|9ping|zifen|XX功|看JJ|S2940|HCCH2|630XP|54手|92手|63式|77手|38式|TV棒|64手|42酮|TVUSB|DM528|762mm|qiang|ADBOX|80色|qi狗|GLOCK|M1911|假BI|54狗|64狗|色BB|92式|64式|54式|77式|BB弹|槍qq|fa票|K 粉|六合|刻章|法轮|乱伦|做鸡|罗干|鬼村|昏药|春药|疆独|藏独|禁书|特码|共狗|达赖|暴动|反中|拉登|幼女|喷剂|毛片|套牌|军火|针孔|女优|朱蒙|征途|私服|两会|肉棍|退党|反华|反共|换妻|偷拍|露点|走光|丑化|党国|共奴|大珐|反动|策屁|特马|色情|乱交|鸡巴|露毛|肉棒|龟头|玉龟|奢恋|毛派|邓派|冰毒|办证|诈骗|大荣|贪官|迷药|罢食|蜜洞|泄题|罢餐|天浴|偷电|盗电|明慧|拉凳|江氏|假币|動乱|性奴|假钞|无界|升达|杨林|代考|替考|iow.cn|tzz.cn|搜客|柑|mp654k|退欓|98qian|k20128|dzboo5|szbzcn|51test|ksj8cn|3ufcom|lnimcn|zgque6|bj0099|wsbz68|dkw800|ktdbzj|jczj08|jcnlae|80hhcn|97xxoo|dzb028|劣乐|cz3456|1Pondo|hentai|huanet|incest|Judies|Kundun|making|simple|wangce|yuming|爱迪|八老|巴赫|罢吃|罢饭|罢课|白军|白梦|包夜|保钓|报禁|鲍戈|鲍彤|暴動|暴干|暴乱|暴亂|暴政|北韩|贝领|被逼|被虐|逼样|婊子|冰火|博彩|博讯|薄格|苍焱|藏獨|操逼|操比|操蛋|操你|操死|操他|插插|插她|插你|插他|插我|柴玲|常劲|常委|潮吹|车仑|陈军|陈蒙|程凯|程真|赤匪|赤化|抽插|臭作|处女|吹萧|春藥|痤疮|大逼|大比|大彩|大法|大纪|大禁|大史|代办|代辦|代开|代開|代写|代孕|弹劾|弹夹|党棍|党禁|党魁|荡妇|登辉|底裤|弟疼|弟痛|調教|丁元|东社|东突|东洲|动乱|独裁|独夫|赌球|多维|屙民|恶党|恶警|发抡|发仑|发伦|发囵|发沦|发纶|发轮|发论|发票|發倫|發淪|發輪|發論|發票|法功|法会|法愣|法抡|法仑|法伦|法囵|法沦|法纶|法倫|法淪|法輪|法论|法論|法谪|法正|砝仑|砝伦|砝轮|反党|反攻|废统|分裂|粉刺|風花|腐败|腐敗|干她|干妳|干你|干他|甘油|肛交|肛门|高潮|高干|高幹|高官|睾丸|戈扬|哥疼|哥痛|鸽派|革命|工力|功法|功学|功友|攻台|共产|共党|共黨|共匪|共军|狗操|狗娘|广闻|龜頭|郭平|国军|国贼|哈批|汉风|何勇|河殇|黑车|红兽|红志|红智|宏恩|宏法|宏志|宏治|洪传|洪吟|洪志|洪治|洪智|紅志|紅智|胡江|胡派|胡平|胡温|胡瘟|胡系|虎机|护法|换偶|換妻|黃菊|黄祸|黄局|黄菊|黄翔|簧片|慧网|昏藥|活体|鸡八|鸡吧|极景|纪元|加府|贾系|假鈔|监听|贱逼|贱比|江驴|江罗|江牌|江派|江青|江宋|江系|江贼|江朱|江猪|僵贼|疆獨|讲法|交班|交媾|叫春|教徒|接班|姐疼|姐痛|锦涛|近平|近親|禁看|精液|静坐|九评|绝版|军车|军妓|軍火|开苞|康本|抗议|恐共|口技|口交|狂操|狂插|狂干|狂搞|捆绑|喇嘛|烂逼|烂比|烂货|劳改|劳教|老江|老毛|雷管|冷宽|李录|李禄|李鹏|李鵬|連發|联总|炼功|林彪|林斌|凌锋|凌辱|菱恝|刘刚|刘青|流脑|流亡|六彩|鲁俊|陆肆|陆委|亂倫|抡功|伦公|伦功|伦攻|沦公|沦功|沦攻|轮大|轮公|轮功|轮攻|倫公|倫功|倫攻|淪公|淪功|淪攻|輪公|輪功|輪攻|论公|论功|论攻|論公|論功|論攻|羅幹|妈逼|妈批|媽個|麻古|麻衣|麻醉|马馼|码会|卖逼|卖比|卖国|毛共|毛贼|妹疼|妹痛|猛插|蒙独|蒙汗|迷魂|迷香|迷藥|秘录|绵恒|民联|民殇|民运|民運|民阵|民猪|明Hui|明hui|魔教|内射|奶子|闹事|女優|虐待|诺龙|喷精|喷尿|彭钢|屁眼|骗局|騙局|迫害|破处|蒲团|祁建|齐墨|汽狗|千源|前考|钱达|强暴|强歼|强卫|抢盐|乔石|窃听|秦晋|情妇|情色|请愿|庆红|球彩|权斗|群交|群射|人权|日逼|日你|日您|日批|日他|肉洞|肉欲|辱师|三級|三退|三唑|色狼|色友|色欲|沙鹰|傻逼|煞笔|上访|尚勇|射精|神佛|沈彤|升達|升天|盛雪|失密|师涛|石戈|示威|手狗|手铐|首长|首長|兽交|熟女|双规|氵去|水扁|税力|丝袜|私彩|私处|私营|思潮|斯诺|宋平|素女|台獨|台独|台盟|谭力|唐捷|天怒|天权|天葬|舔奶|挺胡|同房|童屹|统独|统战|捅你|捅我|偷窥|偷情|透视|屠杀|吐血|团派|退团|脱党|脱光|脱团|脱衣|外蒙|汪岷|亡党|亡国|王策|王丹|王刚|网特|网赚|伪水|尾行|瘟家|文革|翁虹|瓮安|我操|我草|我日|我色|无毛|無界|五不|伍凡|吸储|吸儲|洗脑|洗瑙|下体|香功|肖强|邪党|邪恶|邪教|谢安|新党|刑警|行房|邢铮|性爱|性愛|性福|性交|性息|熊炎|熊焱|修炼|修煉|薛伟|学潮|学运|血卡|言禁|颜射|艳舞|阳具|阳痿|一党|一黨|伊東|乙醚|义解|櫻井|游行|右派|幼齿|幼交|舆论|援交|岳武|杂种|脏独|造爱|造反|则民|择民|泽东|泽民|贼民|炸药|张钢|张健|张林|赵南|哲民|真象|镇压|正法|郑义|政变|支那|制服|中功|中共|猪操|专政|专制|專政|專制|自殘|自焚|自摸|自杀|自慰|作爱|坐交|坐台|做爱|做雞|做鸭|黄镇|黄敬|薄熙|徐明|老丁|贪污|www.cn|xp.com|u88.cn|jkk.tw|www.am|sdo.ms|171.cn|鹰派|禁播|二奶|周容|陈云|方毅|吴德|耿飚|彭冲|王震|彭真|谢非|吴仪|王克|刘淇|血恋|偷欢|censor|fa lun|fanhua|妓女|玉茎|雏妓|赌博|股歌|啊扁|官场|群砍|炸弹|买春|被插|色戒|复活|阿扁|氨水|爆炸|丙酮|布赫|催眠|催情|大麻|毒素|疯药|豪江|濠江|剑奴|降頭|借种|老温|麻姑|麻药|马药|吗啡|迷幻|迷昏|迷情|缅古|杀手|偷香|邪僧|性病|性媾|性药|性夜|鸦片|盐酸|艳降|艳遇|罂粟|早泄|北姑|波胆|春宫|吹箭|叫鸡|卖春|人祸|大庄|盗取|男妓|盘口|赔率|三陪|骚货|摇奖|116738|200100|251700|581578|8happy|ake163|bet365|cks123|cnepep|cosway|Cosway|czj163|eweber|gogoer|gzyrly|ha2.cn|hngyjt|jdh011|lhjykq|midasc|niaita|now.cn|qdjywq|rorcll|sar120|wengan|wes.tw|xingsc|yuyify|zxzgjx|阿宾|安定|挫仑|气狗|三挫|斑蝥|办怔|辦證|包养|报码|暴菊|爆菊|鞭满|变牌|厕奴|长狗|贷开|弹种|盗号|电狗|电鸡|赌具|根浴|狗友|华闻|黄冰|贱货|贱人|江毒|警徽|菊暴|菊爆|军刺|军转|開票|磕彰|嗑药|六死|漏题|卖身|卖血|灭共|男奴|嫩逼|浓精|女奴|泡友|陪聊|氣槍|铅弹|亲共|情杀|犬交|人弹|剩火|尸博|熟妇|骰子|推翻|无码|希脏|霰弹|性虐|一肖|蝇毒|咏妓|有码|脏毒|中特|左棍|雞巴|禁片|巨波|色界|色诱|爽片|xxfysd|操她|操它|干它|开票|猫池|目漂|批发|凭办|黄赌|蓝芒|紫田|唐子|何山|张戎|虐杀|应招|林海|黄琦|刘荻|颜均|赵岩|封锁|推油|朱德|泛绿|泛蓝|双轨|伊东|调教|近亲|樱井|风花|产党|伪大|陆独|共独|殃视|打压|蒋公|共贼|亡共|集会|维权|罢市|买断|聚集|信访|征地|拆迁|复员|示wei|讨薪|暴行|紫阳|九凭|法lun|九抨|反日|屠华|参拜|抗日|围攻|靖国|灭日|惨案|保过|包过|贷款|带考|司考|押题|切腹|打手|开锁|套现|一码|彩宝|合彩|足交|富姐|做台|导弹|牧业|报税|伟哥|爱欲|趣谷|暗杀|奶交|菩提|麻果|病毒|足疗|足浴|搬迁|种猪|精子|办證|月嫂|警棍|疫苗|水军|探头|毒品|自考|电棍|报关|偷税|逃税|漏税|税务|审计|年检|逃婚|白洁|苍主|创魂|宠奴|刀霸|呻吟|情欲|東宮|FDZONE|麻烟|冷却|偷電|监聼|跟听|罚没|走私|D2S500|稀土|mai人|丁烯|丙腈|丁腈|苄醇|苯醌|杜廷|山奈|升汞|白砒|砒霜|帝绿|苔绿|塔崩|索曼|沙林|光气|氮芥|烟碱|蒜醇|华果|腈果|蚜螨|亚砜|亚果|硫丹|大隆|敌鼠|安妥|甘伏|窃电|钢珠|冰Ice|媚药|疯丸|撬锁|矿脂|甲撑|火棉|硝宇|泰安|铵煤|铵木|铵磺|铵邻|铵萘|铵胍|雷汞|雷银|虎头|秃鹰|瓦斯|按摩|刀具|爱刀|铀235|杀伤|匕首|兵团|纵情|毒碱|器官|猎箭|农药|黑市|黑梯|虎骑|色医|艳情|金钟|折刀|送养|领养|骆冰|色图|乙腈|赌场|艳帝|梭哈|人皮|禽兽|黄站|麻狗|涉毒|猎狗|皮碗|双管|解码|拦截|屏蔽|猎艳|伪币|狩猎|点色|冰砖|发漂|高爆|艳母|地磅|阳江|野战|东宫|DM7000|改火|A4U平|A4U网|A4U站|狗专|气皇|长刺|qie听|Zha药|白粉|白刃|JIA币|白冰|短狗|黑狗|火狗|假rmb|军狗|镁粉|手拷|春泄|fapiao|戈博|麻谷|甩刀|假比|雷豹|力霸|春堂|鲍鱼|露鲍|蜜桃|名刀|耻蜜|虐恋|秦氏|氢弹|散弹|色域|山猪|兽兽|淘刀|舔弄|硝铵|冰古|纯古|晶冰|战狗|艳史|投票|报仇|纯冰|票据|精鹰|好色|刷票|赌波|夺妻|官能|画魂|宦妻|狼车|猎情|龙使|掠爱|眉姐|密诱|脑王|逆侠|破局|情乱|人欲|如焉|色惑|绳师|胎记|庭妍|袭警|亵渎|玄战|艳飘|隐杀|众香|气狙|罢考|码报|假钱|马报|狠操|外挂|传销|双鹰|弹药|虎牙|刺刀|甩棍|助勃|鹰牌|伪钞|涩爱|官战|春色|核弹|跳刀|军刃|砍刀|cocain|迁都|假证|SevBBS|卖槍|妓院|青楼|亵衣|色魔|老鸨|蹂躏|偷精|吹箫|失身|失禁|虐爱|虐情|情夫|春梦|艳星|艳行|艳记|艳事|禁果|浴女|外遇|出轨|沉沦|调情|调戏|寻欢|合欢|偷腥|挑情|同眠|菲彩|跑马|证务|卖胆|勃起|脚交|滥交|口活|篡逆|丹警|金血|蛮村|贱妇|胸摧|發缥|发缥|口爆|揉奶|大奶|杀死|拉丹|压迫|非典|回民|falong|中俄|无能|36tl.cn|9aab.cn|gfwo.cn|hroc.cn|qxsw.cn|xx44.cn|原装k|mnltscn|cet4答|中daan|gmtkwcn|22w33cn|gwykscn|hd101cn|ztyzcom|sj516cn|hykswcn|ygafnet|3zszcom|bakqcom|a89acom|47aicom|nine评|1795628|5569118|949-081|freenet|hongzhi|HuangJu|huzhuxi|minghui|playboy|safeweb|toolbar|tuidang|Undergo|unixbox|ustibet|wstaiji|发-票|發-票|法.轮|龚平|胡J涛|江core|江z民|九-评|九.评|抢盐|色-情|替.考|玄`机|G·M·D|L·H·Z|H动漫|H漫画|bignews|chinamz|fangong|ry80.cn|0033.cn|020wuzi|30t.net|3197918|3197919|35so.cn|4dq.com|5bzj.cn|779.net|7caiyun|8892484|9kj.com|aganbio|tom.com|asyr520|caxieji|da11.cn|dotmore|e80.com|fipa.cn|gyp.com|hrzj998|htte.cn|jcx.com|jim.net|jpkg.cn|my6e.cn|oolaiya|pyqq.cn|sixfour|srogold|tbcgold|tpypump|ucenter|wapgame|wowgold|xqzj168|ysee.cn|jiuping|t牌车|法0功|法o功|李洪x|7580185|价 格|hrw.org|GONG党|共X党|xuechao|法X功|九ping|李洪X|法O功|1夜情|3级片|3唑仑|甲苯2|4二酮|K他命|Ting器|BOLT630|3利达|3步倒|2踢脚|2羟基|3仙丹|4乙锡|2硼烷|5硼烷|2硝酚|2恶英|3赛昂|3氮苯|1本道|十8禁|CNK6080|LBM4型|M92F手|M92F式|4级证|黄b色|3唑纶|NEWB630|6和采|heroine|尘诱2|king粉|群P图|E乐博|92狗qq|E周刊|IP17908|智能H3|14gm.com|3456.net|55po.com|7evk.com|9352.com|ab222.cn|cctve.cn|dotoo.cn|ghkj.net|heidc.cn|jsh8.com|ok129.cn|quna.com|ttyie.cn|weeky.cn|ym59.com|sonyf707|51297514|freegate|64运动|zd份子|传奇sf|辦譪qq|pj899com|33465607|和谐zf|廱閠px|厦门px|px事件|px项目|反对px|反對px|px項目|spe59263|项目px|pl123号|21018728|21018908|21478521|26544455|51267950|51517198|54457055|57198536|60365563|60370027|61592271|62985375|78233985|79457053|82168838|83121803|83405002|84718900|87549294|87582796|89死难|hrichina|huang菊|ILLUSION|MC军团|MC軍團|tianwang|tibetalk|triangle|wow gold|xinsheng|佳龙it|江ze民|露拉3D|我XX你|BT下载|QQ宠物|Ketamine|偷啪dv|WoW Gold|ws88.net|xcity.cn|xicp.net|xihuchem|XXWLAQZY|zcld.net|zgcej.cn|3d轮盘|六he彩|sf传奇|08ys.com|55798676|81978137|bxzw.com|fzboyang|反party|89事件|64时期|liuhecai|3D轮盘|六HE彩|bt下载|zm病危|qq物语|playerTV|Dreambox|1羟基2|49环氧|banzheng|MARUHAMA|Flexispy|SNL6B型|bt电影|2甲2硫|S4氧代|海豹M9|国产95|女同BT|英国B5|av资源|手槍QQ|kb之家|av直播|gv下载|gv资源|gv动漫|3p图片|av快播|庐江6p|狗管qq|3P艳照|庐江5p|5p庐江|Av影院|luo聊QQ|木仓QQ|av影院|18岁禁|賣槍QQ|警衔QQ|买冰QQ|楼凤QQ|FlexiSPY|色bb吧|亚洲BT|日韩BT|欧美BT|欧美GV|真善忍|毛一鲜|黎阳平|张小平|反政府|陈良宇|胡新宇|金伯帆|马加爵|色空寺|蒋彦永|关机房|干扰器|快操我|乖乖药|卖答案|买答案|新唐人|摇头丸|戴海静|中纪委|领导人|家乐福|活摘器|切波特|噶玛吧|社民党|九jiu评|六开网|露胸图|要射了|双儿篇|江二世|江核心|江老贼|江魔头|陶驷驹|江理论|江昏君|江路线|违禁品|追踪器|大扎荣|太王记|大祚荣|民告官|蚁力神|渊苏文|童奴工|波佳达|菊花洞|刘全喜|十七大|李沛瑶|梁保华|沧澜曲|黑天使|十景缎|风尘劫|胡錦濤|六决不|轮盘机|百家乐|连线机|模拟机|礼品机|卢跃刚|玫瑰园|杨元元|趙紫陽|人民报|崔英杰|萬人暴|张大权|博白县|女死囚|劉奇葆|女友坊|白小姐|曾道人|奴事件|海乐神|酣乐欣|高莺莺|广东王|红海湾|新生网|大紀元|死刑过|一四我|四我周|重题工|灭绝罪|大揭露|宾致网|共铲党|642928838|张筱雨|搞皮叛|村骗乡|三呆婊|林西亮|祸布斯|逢必乱|喝党酒|痰太浓|拜德良|张锡铭|凌沧洲|眔聽王|拍肩药|857606349|佬唬机|529543905|kcn和khs|消聲器|吃女婴|食女婴|嬰兒湯|婴儿汤|婴兒汤|猪肉版|vpn代理|绿坝娘|杜崇烟|三鹿版|蟹药店|拉面剂|飞易vpn|vpn翻墙|ultrasurf|藏青会|谴责cnn|供产谠|傥文化|供铲傥|股票歌|股市版|股民苦|轮子功|贡产谠|www99kicn|幼香阁|霸奴娇|摸奶门|藏字石|温加饱|无官正|胡紧掏|亡秦石|温小萌|温云松|温假保|朱容鸡|京c53011|胡紧套|温嫁饱|汪兆钧|林保华|共残党|杨友林|曹炎焱|颜跃明|宁b00077|高智晟|蕐彥永|共惨党|lhj114com|shsdlb163|张博树|虎劲涛|汪达林|罗永忠|邓玉娇|赵无眠|普恩富|哄铲谠|拱产谠|涂远高|胡妖邦|姜折民|供产档|工产谠|辛灏年|批评谠|江折民|徐其耀|汪兆均|赵昌林|罗静虹|谭海华|皖ok0332|徐国元|武思伦|湘dy5707|郑筱萸|陈相贵|佘祥林|孔德新|苗国辉|王直桂|刘清江|柴铁民|批判邓|陈振翊|王同信|常俊亚|俞大纯|姬胜德|钟圣文|向首明|毕晓哲|镡京湘|杨晓陆|黄齐帆|吾子续|任其良|奥nmd运|无子诗|任不寐|吴振海|岩帅王|刁爱青|耿庆国|翁文波|龙小霞|骂四川|吕笃功|吴升标|阳晓东|猪容鸡|张沛良|肖敬明|黄伟木|翟秀枝|王建泽|林嘉祥|猪叫石|唐雪凝|曾金燕|林松岭|杨佳案|杨湘洪|唐徳刚|中泡委|张伯笠|崔阎王|推碑图|奥巴毛|137388878|171752945|271265850|301医院|314事件|371工程|375792088|4618-9173|51ini.com|563924795|571工程|576591512|597708162|6.4事件|601184337|634706444|756235557|811693788|811782205|859800299|870530092|910049455|937158678|949081180|951400296|974997851|freechina|huangdies|hypermart|JGT发帖|peacehall|QQGGDDYYL|RedCorner|renminbao|Triazolam|UltraSurf|wenjiabao|woyaobaby|zhengjian|zhouenlai|zhurongji|爱姐妹|愛姐妹|安魂网|安立敏|安眠药|巴拉斯|巴特尔|白立朴|白皮书|包送车|包娃衣|北京帮|被立王|避孕套|变声器|變聲器|病不起|病业说|伯希来|捕鱼机|捕鱼器|擦鞋机|蔡崇国|藏春阁|藏春閣|藏妇会|曹长青|曹刚川|草你妈|禅密功|長瀨愛|超声波|朝河蘭|陈炳基|陈建华|陈金龙|陈破空|陈希同|陈小同|陈雄彪|陈宣良|陈一谘|陈志坤|陈总统|程方鹏|程铁军|程渭山|迟浩田|除湿机|慈悲功|粗口歌|崔会烈|催泪弹|打保单|打飞机|打砸抢|大参考|大盖帽|大蓋帽|大花逼|大记元|大跃进|大澤惠|代发贴|代发帖|代缴税|戴海靜|戴相龙|挡坦克|党妈妈|党文化|邓二世|邓小平|邓笑贫|鄧小平|狄玉明|第三党|第四代|电子狗|電子狗|钓鱼岛|丁关根|丁子霖|定情粉|定情药|董宜胜|动态网|冻干粉|賭博粉|杜智富|多美康|恩诺欣|发正念|法国游|法拉盛|樊守志|反人类|反社会|饭岛爱|飯島愛|方励之|方祖岐|防拍器|仿云石|飞机票|斐得勒|费良勇|分家在|分析王|封从德|冯东海|冯素英|冯勇彬|府软弱|付申奇|傅成玉|傅申奇|傅志寰|干死你|干以胜|幹擾器|高立新|高文谦|高自联|搞晚会|搞晚會|割肉人|葛振峰|工自联|公子党|公子族|勾清明|狗卵子|古怪歌|古拉格|关卓中|光端机|桂世镛|郭伯雄|郭罗基|郭岩华|国民党|韩东方|韩联潮|韩杼滨|何德普|核设施|核污染|贺邦靖|黑皮书|黑手党|红病历|红灯区|红卫兵|红血丝|宏踏鞋|洪巨平|洪哲胜|呼喊派|胡春华|胡锦滔|胡锦淘|胡进涛|胡景涛|胡下台|胡耀邦|胡耀帮|胡中央|华藏功|华国锋|华建敏|黃麗滿|黄慈萍|黄褐斑|黄华华|黄金书|黄丽满|黄霉素|黄作兴|回良玉|昏迷剂|霍英东|积克馆|吉炳轩|贾庆林|贾廷安|贾育台|贾治邦|賈慶林|假教育|监控器|監聽寶|監聽器|監聽王|减肥药|简鸿章|建国党|剑教材|江八点|江恶人|江公子|江黑心|江祸心|江家帮|江姐问|江姐問|江锦恒|江人马|江三秀|江神经|江梳头|江戏子|江宰民|江择min|江泽慧|江澤民|江者民|江浙民|江作秀|姜春云|姜凤阁|降灾民|酱猪媳|交友网|焦焕成|教养院|揭批书|解厚铨|解学智|解振华|金道铭|金舜禹|金尧如|金银焕|进口车|京夫子|经租房|晶白体|净白体|净水器|靖志远|军警靴|军械所|开天目|開髮票|康成元|康涛杰|靠你妈|扣应队|酷刑罪|邝锦文|赖昌星|攔截器|郎咸平|老虎機|雷鸣球|黎安友|黎阳评|黎陽評|黎智英|李长春|李長春|李崇礼|李崇仁|李崇禧|李传卿|李大尸|李大师|李弘旨|李红痔|李宏智|李洪宽|李洪痣|李洪誌|李鸿志|李鸿智|李继耐|李兰菊|李岚清|李嵐清|李良辉|李瑞环|李瑞環|李少民|李淑娴|李旺阳|李文斌|李向东|李小朋|李小鹏|李远哲|李遠哲|李总理|李总统|里藏春|连胜德|练习器|梁光烈|梁擎墩|廖锡龙|林长盛|林金钱|林樵清|林慎立|令狐安|令计划|刘宾深|刘宾雁|刘春良|刘国凯|刘华清|刘俊国|刘凯中|刘奇葆|刘千石|刘山青|刘少奇|刘士贤|刘文胜|刘晓波|刘晓竹|刘永川|六●四|六一零|龙虎豹|龙新民|龍虎豹|吕京花|吕秀莲|铝热剂|罗礼诗|雒树刚|马大维|马良骏|马三家|马时敏|麦角酸|毛厕东|毛厕洞|毛光烈|毛如柏|毛一鮮|蒙古独|蒙进喜|迷歼药|迷殲藥|闵耀中|名山县|魔难论|末世论|莫伟强|牟新生|木犀地|能力主|倪育贤|倪志福|你妈的|你娘的|你他妈|钮茂生|女神教|欧泽高|帕萨特|拍花子|拍肩迷|潘国平|喷雾型|彭丽媛|平银芳|破碎机|蒲海清|濮洪九|朴鸣呼|曝光王|七宗罪|荨麻疹|钱国梁|钱其琛|钱运录|潜在用|抢答器|抢粮记|抢圣火|羟丁酸|竊聽器|钦本立|清官团|清华帮|群发器|群發器|热比娅|仁青加|日死你|萨斯病|赛克网|三面翻|上海帮|尚福林|烧国旗|邵家健|盛光祖|盛华仁|失忆药|失意药|失意藥|十八大|十八禁|十八摸|石云生|石宗源|时时彩|实际神|视眼镜|手拍肩|刷淘宝|刷信誉|双十节|司马晋|司马璐|司徒华|斯鑫良|四川独|四人帮|四小码|四种当|四種當|宋书元|宋祖英|苏丹达|苏绍智|苏晓康|宿命论|他娘的|它妈的|塔形流|太阳城|太子党|太子黨|覃志刚|探测狗|探測狗|汤光中|唐柏桥|唐家璇|腾文生|滕久明|滕文生|天安门|天安門|天灭中|天要灭|天要亡|天音功|田凤山|田纪云|通示达|统一教|统治术|偷听器|透視器|凸点装|涂运普|退改离|脫衣舞|外围码|万润南|万晓东|万言书|王宝森|王炳章|王超华|王辅臣|王涵万|王沪宁|王进发|王军涛|王力雄|王瑞林|王润生|王若望|王松昌|王韦景|王维林|王希哲|王秀丽|王冶坪|隗福临|尉健行|慰安妇|魏京生|魏新生|温宝宝|温家宝|温家保|温家堡|温假饱|温下台|温爷爷|温元凯|温总理|溫家寶|瘟假鸨|文字狱|文字獄|邬书林|无帮国|无网界|吳邦國|吴百益|吴邦国|吴方城|吴官正|吴弘达|吴宏达|吴基传|吴仁华|吴学灿|吴学璨|吴野渡|無網界|無修正|五毛党|伍绍祖|武腾兰|武藤兰|武藤蘭|奚国华|项怀诚|项小吉|项宗西|消防队|消防隊|消业论|硝化棉|小参考|小电影|小来子|小泽圆|小澤園|谢长廷|谢选骏|谢中之|新景隆|新语丝|新诸侯|星火报|性伴侣|性教官|性网站|性網站|性游戏|徐邦秦|徐才厚|徐匡迪|徐适龄|徐水良|许家屯|学生妹|学位证|学习班|学自联|雅马哈|严家其|严家祺|阎明复|杨怀安|杨建利|杨思敏|杨勇芳|杨月清|楊思敏|姚月谦|搖頭丸|摇头玩|业力轮|叶子楣|夜总会|夜總會|一本道|一通功|遗忘药|抑制剂|易丹轩|易志熹|银行卡|尹庆民|隱形鏡|由喜贵|于大海|于浩成|于幼军|余英时|於淼林|於幼軍|宇明网|玉蒲團|元极功|袁纯清|袁伟民|远志明|云石灯 |昝爱宗|曾培炎|曾慶紅|张宏堡|张丕林|张万年|张伟国|张文彬|张文斌|张五常|张意伟|张昭富|张志良|张志清|張丕林|張五常|張小平|赵海青|赵品潞|赵铁锤|赵晓微|侦听器|真善美|正见网|支联会|中国猪|周天法|朱容基|朱镕基|朱鎔基|朱颜血|猪聋畸|壮阳药|习仲勋|贺国强|贺子珍|周永康|李德生|王岐山|姚依林|李源潮|李干成|戴秉国|刘延东|刘瑞龙|俞正声|薄一波|周小川|周建南|江绵康|李小琳|朱云来|胡海峰|共框非|性启蒙|弘法体|李屠夫|圆明网|艳照门|次下跪|叶剑英|李先念|汪东兴|韦国清|乌兰夫|刘伯承|许世友|纪登奎|苏振华|余秋里|张廷发|陈永贵|陈锡联|聂荣臻|徐向前|邓颖超|杨尚昆|杨得志|宋任穷|胡乔木|廖承志|秦基伟|陈慕华|李铁映|李锡铭|杨汝岱|吴学谦|胡启立|芮杏文|邹家华|谭绍文|王汉斌|任建新|于永波|傅全有|王乐泉|王兆国|刘云山|张立昌|张德江|定位器|上分器|退币王|性生活|艳丽片|001工程|妈妈的|媽媽的|他妈的|他媽的|倔宠儿|错别字|毒鸡蛋|潜规则|现场脱|节电王|无删版|社会：|炸超市|炸广州|王志平|包尔汉|曹查理|醋酸酐|崔晓汉|地西泮|赌恒指|发帖机|高句丽|共残拳|海洛因|黑索今|黄龙云|鸡鸭恋|可卡因|猎头者|麻黄素|毛新宇|毛远新|毛致用|灭门惨|虐之恋|七日情|抢劫药|全树仁|燃烧弹|沙菲片|手榴弹|双姝艳|瘟假报|五套法|性妲已|许宗衡|伊波拉|怡红院|异丙嗪|朱小丹|总输记|女人费|三秒倒|投注站|PCB抄板|PCB样机|PCB线路|安街逆|安门事|败培训|办本科|辦毕业|毕业證|苍蝇水|察象蚂|代发邮|代理票|导人最|得财兼|灯草和|等屁民|电话监|甸果敢|都当警|发牌绝|粉末型|钢针狗|共王储|国库折|果敢地|豪圈钱|华帝国|华门开|划老公|挥发型|活不起|机定位|机号定|机号卫|机卡密|江太上|金扎金|敬请忍|举国体|可提玛|克千术|来福猎|李咏曰|丽媛离|聊斋艳|令家党|伦理片|玛雅预|氓培训|民储害|南充针|拍肩型|牌技网|普通嘌|惹的国|人真钱|认牌绝|韶关斗|韶关旭|失眠药|世界通|试答案|是躲猫|手机跟|手机监|手机窃|手机追|售单管|售冒名|售五四|售信用|术牌具|水阎王|替人体|天朝特|维汉员|委坐船|瘟加饱|瘟假饱|乌蝇水|无抵押|喜贪赃|香烟型|协晃悠|新建户|姓忽悠|晕倒型|炸立交|针刺案|针刺事|众像羔|州三箭|装弹甲|安眠藥|暗访包|拜大哥|避孕膜|波推龙|不查都|不查全|踩踏事|苍山兰|操了嫂|操嫂子|插屁屁|车牌隐|惩贪难|充气娃|冲凉死|答案包|打标语|打错门|打死人|大嘴歌|代表烦|代您考|代讨债|代追债|贷借款|党后萎|导爆索|导叫失|导小商|到花心|的同修|等级證|递纸死|电警棒|蝶舞按|顶花心|顶贴机|顶帖器|东京热|东伊运|東京熱|董元辰|毒蛇钻|段桂清|躲猫猫|俄羅斯|儿园惨|儿园砍|儿园杀|儿园凶|发贴机|法能功|范燕琼|仿真证|佛同修|福香巴|府包庇|妇销魂|富民穷|冈本真|岡本真|港馬會|港鑫華|搞媛交|告洋状|跟帖器|狗日的|乖乖粉|官商勾|国家妓|国统会|國內美|哈狗帮|海访民|和狗交|和狗性|和狗做|紅色恐|胡适眼|护卫团|激光汽|级办理|级答案|集体腐|甲虫跳|甲流了|简易炸|江丑闻|江嫡系|揭贪难|姐服务|姐兼职|姐上门|警用品|就爱插|就要色|绝食声|开邓选|砍杀幼|砍伤儿|康生丹|康跳楼|考考邓|考联盟|考前付|考试保|控制媒|骷髅死|乐透码|李晓英|力月西|利他林|联盟党|聯繫電|领土拿|龙虎斗|隆手指|陆同修|伦理大|伦理毛|落霞缀|漫步丝|忙爱国|妹上门|门保健|门徒会|門服務|免电灯|摩小姐|木齐针|幕前戲|妞上门|女技师|女上门|鸥之歌|拍肩神|普提功|切听器|勤捞致|清純壆|情妹妹|琼花问|娶韩国|全真证|容弹量|柔胸粉|如厕死|三网友|色电影|色妹妹|色小说|杀指南|山涉黑|上门激|烧瓶的|韶关玩|社会混|深喉冰|神七假|沈昌功|生被砍|生踩踏|生意宝|圣殿教|狮子旗|十八等|实体娃|士的年|士的宁|式粉推|视解密|手木仓|售纯度|售防身|售狗子|售热武|售三棱|售左轮|书办理|丝情侣|丝足按|司法黑|四博会|四大扯|苏家屯|速取证|蹋纳税|泰兴幼|泰州幼|特工资|特上门|田田桑|田停工|铁血师|同盟党|偷啪,dv|偷肃贪|偷偷贪|王立军|王益案|网民案|网民诬|伪政府|温影帝|纹了毛|五套功|五月天|午夜电|午夜极|雾型迷|习进平|习晋平|洗澡死|陷害案|陷害罪|香港彩|硝化甘|新疆叛|新疆限|新搪人|性服务|性伙伴|徐玉元|学位證|亚硒酸|严晓玲|言论罪|氧化汞|恙虫病|要泄了|液体炸|伊皮恩|遗情书|乙醇腈|乙硼烷|乙酸汞|婴儿命|雍战胜|永伏虫|幽谷三|游精佑|愚民同|愚民政|与狗性|冤民大|鸳鸯洗|原装弹|袁腾飞|援藏网|韵徐娘|遭便衣|遭到警|择油录|张春桥|张宏宝|张文中|张志新|针刺伤|针刺死|政论区|植物冰|指纹膜|指纹套|中办发|昼将近|主神教|属灵教|装消音|尊爵粉|黄小说|性技巧|11msu.com|166767742|5579-8676|562109065|631008986|634681434|707700266|764411233|813988700|893919854|931711182|983612714|992910953|rrmrw.com|weld8.com|wsf76.com|阿勒泰|毕业证|蹭网卡|车牌号|电子眼|工婚恋|后附款|零定金|媒人网|免定金|哪里找|奶油冰|熟媒人|探伤机|网恋网|先验票|易德富|找小姐|找鸭子|真本科|yxly6.com|鸡皮肤|精华液|去鸡皮|马嘉爵|傅怡彬|太石村|bbc.co.uk|明心网|明思网|银龙岛|留园网|蒋世华|綦彦臣|吴一然|李毅斌|欧阳懿|陶海东|蔡陆军|杜导斌|罗长福|王小宁|马亚莲|郑贻春|李建平|许万平|任自元|李元龙|郭起真|陈秋兰|白秀华|邓力群|周恩来|宋庆龄|孙中山|彭德怀|董必武|陈独秀|瞿秋白|向忠发|蒋介石|宋美龄|蒋经国|蒋方良|马英九|长濑爱|小泽园|朝河兰|大泽惠|无修正|於幼军|司法部|公检法|检察院|信产局|不爱党|反对党|辛灝年|tiananmen|四事件|4事件89|法某功|邓矮子|伊斯兰|劣等人|白头山|四六级|收小弟|帮招人|国办发|眼角膜|天下彩|卖自己|做网站|dragonmen|男妇科|畜牧局|脂膜炎|牛郎店|长寿枕|鼻炎枕|香薰SPA|防刺服|长警棒|警戒带|华域通|制幻剂|性器具|射鱼器|江病危|监视器|会计证|八段锦|彩虹剑|成仁记|春闺梦|春欲手|大练士|大侠魂|百性阁|御花王|俗人岛|夜猫网|恶魔岛|不夜城|品色堂|買到槍|加密狗|截听器|慢转器|调校器|倒转器|节电器|减重器|通行证|复制器|复制机|复制卡|隐性笔|遥控锁|探测门|检测器|接收机|买小孩|飞天冲|开门红|二踢脚|飞天雷|卖角膜|卖骨髓|硝酸汞|碘化汞|溴化汞|羰基镍|硒酸钠|癸硼烷|戊硼烷|乌头碱|藜芦碱|碘甲烷|丙烯醛|二羟基|丙炔醇|乙烯砜|地高辛|花青甙|黄降汞|红降汞|三仙丹|醋酸汞|红矾钠|羰基铁|四乙锡|钒酸酐|锇酸酐|祖母绿|翡翠绿|巴黎绿|草地绿|二硼烷|硼乙烷|十硼烷|十硼氢|五硼烷|芥子气|白路新|附子精|赛丸丁|尼古丁|计明胺|杰莫灵|卡巴考|丙烯腈|氮丙坏|吖丙啶|高哌啶|烯丙胺|甲基碘|二硝酚|烯丙醛|败脂醛|巴豆醛|烯丙醇|苯硫酚|巯基苯|卡巴醌|卡波醌|二噁英|马桑苷|回苏灵|纽瓦克|谷赛昂|杀螨隆|多灭灵|克螨隆|脱麦隆|大灭虫|杀螟畏|毒虫畏|杀虱多|氧乐果|治线灵|西梅脱|敌死通|三赛昂|益赛昂|易赛昂|乙赛昂|保棉丰|伐线丹|力满库|阿米吨|棉花宁|福太农|扑打杀|扑打散|敌敌畏|杀螟松|速灭虫|速灭松|苏米松|稻丰散|益尔散|爱乐散|敌克威|庚硫威|久效威|肟吸威|灭害威|灭多威|灭多虫|灭索威|乙肟威|克百威|呋喃丹|虫螨威|自克威|兹克威|伐虫脒|抗螨脒|抗虫威|多防威|肟杀威|棉果威|虫草灵|杀线威|草肟威|敌蝇威|涕灭威|涕灭克|铁灭克|腈叉威|恶虫威|苯恶威|异索威|异索兰|农螨丹|灭扫利|凯素灵|凯安宝|保棉丹|康素灵|放线酮|农抗101|地乐施|特乐酚|地乐酚|敌磺钠|敌克松|地可松|不膏津|硫特普|触杀灵|苏化203|治螟灵|西力生|谷乐生|灭蚜胺|法尼林|敌锈酮|毒菌锡|艾氏剂|狄氏剂|毒杀芬|克灭鼠|克杀鼠|杀鼠灵|华法灵|灭鼠灵|杀鼠迷|立克命|溴鼠隆|敌拿鼠|鼠得克|灭鼠安|野鼠净|灭鼠丹|扑灭鼠|灭鼠优|抗鼠灵|抗鼠灭|没鼠命|毒鼠强|鼠立死|鼠特灵|鼠克星|灭鼠宁|伏鼠醇|杀它仗|溴敌隆|乐万福|地戈辛|助听器|VPN代理|32-羟基|迷欲水|克他命|失忆水|蒙汉药|乖乖水|听话药|亲密药|快樂丸|欢乐丸|甩头丸|打牌药|赢钱药|微音器|切聼器|凯安拓|富国者|优比特|卫星狗|卫星眼|反雷达|预警器|翻牌机|征服者|金战神|南极星|路耐士|硝酸钾|硝基胍|硝基脲|持屈儿|海西尔|黑索金|喷特儿|继爆管|导火索|烟火剂|梯恩梯|苦味酸|赛力散|敌蚜胺|胡椒醛|青蒿素|黄体酮|黃麻素|小口径|野营刀|警示器|勃朗宁|侦查证|乐透乐|野人谷|高仿真|雷明登|反测速|硝酸胺|可可碱|咖啡因|氮化铅|花和尚|硝酸甘|驾驶证|干扰王|浓硫酸|翻转架|潜伏者|小黑豹|硝酸铵|朝鲜版|大黑鹰|力思曼|麻黄碱|羟亚胺|自制式|大威力|操表姐|接收器|飞鹰A25|导爆管|左轮狗|工字牌|韦小宝|亚梨沙|吡啶胺|OO2甲基|123苯并|OO2乙基|雪狼T91|影音盒|吐根碱|爱与性|A4U在线|级电影|暴光王|引暴器|起爆器|起暴器|启暴器|启爆器|引爆器|tnt制作|tnt哪里|伯莱塔|巴雷特|单管猎|黄麻素|人品币|开心水|麦角醇|手拉AWP|土仿狗|武士刀|小飞虎|小飞狼|信用卡|追风150|水果冰|影音棒|仿真狗|化学冰|咖啡硷|咖啡碱|可可精|姐妹花|莋弊噐|IED制作|排漏弹|雷明顿|雷鸣登|力斯曼|春军团|美洲豹|咪咪爱|金狐狸|御花园|摩洛客|浓硝酸|燃烧剂|共享盒|捕狗药|色人阁|色上色|射钉弹|射孔弹|变号器|改号器|杀破狼|松岛枫|色网址|幼幼论|逍遥游|小蜜蜂|叶雨茗|导航狗|折叠狗|阿兵哥|警查证|信号弹|苯基醇|附体记|曲马多|广陵传|鸿图记|护花剑|花穿越|降头师|金赢传|冷香谷|猎芳谱|猎魂纪|领域战|乱游记|妙人间|魔尊曲|千夫斩|青云路|穹游记|群芳谱|三折剑|色哥哥|色间道|神风曲|双姝记|天如月|嬉美图|相河记|消遥尊|逍遥王|逍遥尊|小新娘|邪艳曲|修罗劫|玄媚剑|玄女经|艳魂咒|艳欲路|妖刀记|妖晶记|鹰狼传|游龙传|诱君欢|玉女盟|珍珠令|紫情绳|生殖器|大祚榮|公开信|火箭筒|加弹器|少精症|手拉m14|手拉狙|开山刀|花间曲|手拉鸡|猎木仓|气木仓|热兵器|燃烧瓶|起爆药|弹簧刀|蝴蝶刀|妈妈色|小鸡鸡|色老汉|潘金莲|致幻剂|代打卡|聊天室|艾滋病|亡灵全|电视棒|翻牌器|换牌器|电视卡|彩信猫|发爆器|办假証|色大嫂|百凤宫|色中色|性酒吧|老公们|通天报|认证书|飞叶子|草榴网|黄图哥|包射网|唐人阁|色客网|妖狐网|小雄传|真人888|爱良窝|豪享博|楼凤网|情狐|媚毒|原点|疯诉|污黑|路人|琼觞|缠上|村医|浴城|村奴|姐夫|球讯网|日博365|博宝金|浪妹网|明升M88|销售ppk|色聊网|幼色网|性影院|性春吧|Fing霸QQ|卖心脏|刀努网|薄码DVD|崔情水|崔情粉|白虎妹|思巢网|色播播|色播器|溜冰妹|多夜情|祼聊网|气弹槍|神之欲|花荫露|仿五四|pcp配件|三客优|毒龙钻|风月阁|色窝窝|释欲堂|极乐岛|都市缘|救国P2P|色老头|快色吧|色一色|色老妈|tnt配方|色婷婷|妻色网|卖藏刀|买藏刀|99%的冰|神仙水|人兽情|性中性|賣槍支|色色岛|找殺手|增值税|龙卷风|十六大|小灵通|花园网|18DY电影|2005言论|Government|360vk.info|799789.com|86cryp.com|928ddz.com|dc8888.com|dgldit.com|girl668.cn|hxzj08.com|lenven.net|ok0411.com|qyao909.cn|rhtzxc.com|rtgjfz.com|sosook.com|souker.com|toomore.cn|tuxilei.cn|usb3721.cn|vikecn.com|wtianx.com|wxttfs.com|xinkeor.cn|zjjvip.com|百乐2号|逢8必灾|3caoh22ph3|j糸己元|wwwvipf4cn|巨h慎入|seseyvmjcn|超虐高h|liuxue1668|代榘l票|帶榘l票|何新1990|8341部队|陈liangyu|8008103456|johntitoer|普寧626|A集中营|a级情片|>真美妙|vangda.com|>我是猪|>我該死|E科士威|拍肩,药|1140177463|1239442154|1298635486|1569053324|1738617380|1789178010|1819006630|1961025666|1969140008|5621o9 o65|ayisou.com|c3h.com.cn|coooov.com|fangpz.com|liuyue.net|uuuwan.com|xueyaj.com|yvxuan.com|acomcn.com|ggkkjj.com|xcomcn.com|17xyou.com|Falun Dafa|Li Hongzhi|epochtimes|oppression|8023部队|免费q币|core病危|J总病危|h搜神记|十8和谐|雪狼T9-1|PixelawDog|StrongHDTV|4乙基铅|2乙基汞|4乙基锡|4氧化锇|丙烯1醇|2吡咯酮|抗霉素A|甲基1605|high乐神|手机Jian|qiān dàn|2硝基苯|2硝基萘|3硝基苯|泽4氮烯|a级大片|4碳酰镍|2氧化氮|3氮化钠|2甲弗林|3氮杂苯|1963661267|间苯3酚|1元模具|3级影片|女人的b|zg60华旦|手拉1911|成都T恤|叶子hash|狮王2012|h片网址|专卖g水|直销g水|订购g水|宾馆群p|宾馆群P|庐江群P|欧美H片|销售cp99|petn制取|国产H片|petn制作|PETN合成|动漫H片|快播H片|Happy水QQ|ooxx人妻|嫩B电影|毒 配方|日本H色|供應M300|销售M300|18年纪念|1969 尼木|神鬼18妓|27军军长|美国c2007|02260504639|13295168065|13731903527|64小時绞|13574242378|第一次3p|眼镜oo型|oo型眼镜|sf一条龙|红朝43年|南航b2959|97年南航|t195和5034|鲁h9656警|b-阻断剂|garden_news|humanrights|rexuebaobao|sanew-cable|zhenshanren|８.9事件|安-眠-药|法+輪+功|干 你 妈|共+产+党|共+產+黨|共+铲+党|共.产.党|共chang党|護士24點|老 婊 子|李 洪 志|蒙-汗-药|迷-魂-药|真n善n忍|IM买卖通|炸ZF大楼|64杀学生|93夜之女|f.l.g旗帜|38集团军|卖qq号码|黄 牙 签|奶 油 冰|BEELY官方|sigline.gif|高压狗QQ|5氧化2钒|4氧化2氮|2-吡咯酮|46级考试|日本MARUI|36磅纯度|81蚜克丁|2仲丁基4|FlexiSpyPRO|asianapples|spyflexispy|德国A1000|18289325866|15990489698|qq賣獵槍|狼友av网|爱bb影院|OK娱乐城|av播放器|快播av站|亚洲3p图|Hgame下载|夫妻玩6P|庐江6P门|庐江县6p|3U娱乐城|安徽5P门|膛线管qq|安徽5p门|欧美se图|亚洲se图|气动狗QQ|掌心雷QQ|高仿证qq|警官证qq|就去97色|真人21点|黄se图片|黄se电影|黄se网址|杜冷丁QQ|黄se小说|黄se网站|最新se站|冰钻石qq|购买xwodi|qi槍专卖|高压狗qq|qq卖手槍|qq卖獵槍|销售CS狗|卖腎源QQ|卖腎臟QQ|买腎源QQ|卖冰钻QQ|卖鉆石QQ|卖冰磚QQ|李 宏 志|真 善 忍|死亡笔记|帝国之梦|投毒杀人|强硬发言|侦探设备|手机复制|天鹅之旅|盘古乐队|血腥图片|手机魔卡|轮暴致死|黄网导航|汕尾事件|仁寿警方|杀人事件|赣江学院|日本小泉|车牌反光|人体艺术|传真群发|美女做愛|放荡青春|电车之狼|对日强硬|军长发威|公产小丑|联国专员|迪里夏提|伊扎布特|公产王朝|边坝时间|对华广播|你退了吗|茶余饭后|秘密花园|痴男发威|超越红墙|导演专访|交换夫妻|浮情浪子|雪染飘朱|凌虐玉门|黑灯舞厅|烈火凤凰|鹿鼎记趣|母之欲火|四海龙女|考验答案|激流中国|渊盖苏文|昔有山西|今有广东|方丈哭曰|十大恶词|性学教授|出墙红杏|go-vern-ment|新诗年鉴|美国凯德|中央军委|苏东解体|反右题材|山西洪洞|巨额骗储|五奶小青|红楼绮梦|夫妇乐园|黑星女侠|狂风暴雨|俪影蝎心|舌战法庭|清华网管|一卡多号|黑窑奴役|山不过来|股市民谣|禁断少女|官逼民反|中原油田|油田总部|香港马会|奴役童工|计生风暴|智能Ｈ３|口头检查|三句硬话|阻无通畅|民为法执|美国之音|求救遭拒|手足口病|51ganrao.com|52kanshu.net|58yinshi.com|97sesevk.com|chaolicy.com|city2046.com|hd315.gov.cn|hihigirls.cn|hyidc.com.cn|idea4ever.cn|myqzy.com.cn|pifuxuan.com|sosalary.com|texishop.com|tooogooo.com|wokuangmo.cn|xuxulove.com|yjtx2008.com|博翔团队|皇冠投注|替比夫定|营销利剑|出千工具|香港总彩|看底牌器|董存瑞问|考包粽子|畅日套餐|人民政腐|届届失业|吴琼hua问|董cun瑞问|体委高俅|部长大禹|何邪社会|毒署署长|三个呆婊|警痞难辨|莫友甲板|慈夫万岁|小姐陪吸|官官皆贪|劉胡蘭問|专家万税|朱閒基传|逗逗小胡|拒廉变腐|小平无奈|董存瑞说|毛岸英问|民工滔滔|民间语录|如此公仆|一个涨字|明年米贵|福娃哭了|逢是灾年|磴在汶川|举国同震|神州共震|震其国土|震到国外|震不死人|不育不运|四个大当|搞怪福娃|布什胡哥|胡哥布什|六零年苦|中国悍匪|日李万姬|你乃人民|裆的干部|毛胜蒋败|凯德原装|刾德原裝|香港ghb水|手檆嘎犉|炸彈製作|教你做弹|自殺手冊|国足要命|超越紅牆|翻墙软件|680u7d密道|680p7d专业|翻墙工具|牛奶三宝|奶业内幕|问奶牛去|三鹿笑话|三鹿黑幕|三鹿300万|面粉掺假|海米抹红|绿坝克星|界浏览器|桔子有虫|橘子有虫|种毒食品|食品黑幕|粪水腌制|翻墙访问|北航甲流|足坛反赌|黑道狂神|侮辱藏人|吾尔开希|僧侣被捕|中国断交|焚烧寺庙|凯度顿珠|干扰火炬|辱我中华|果敢难民|果敢战事|針刺事件|针扎事件|針扎事件|司机罢运|贡傥覆灭|不明针状|不明針狀|缅甸战事|称供污圆|新疆七五|排华运动|策反份子|零八憲章|家家难民|石油兄鉴|崇尚熊市|忠告股民|鱼肉散户|股民跳楼|新股民吧|股市笑话|套牢莽莽|咏股伤怀|股灾风光|炒股國歌|股市歡迎|股民自编|中石油版|股市之痛|股市被套|问中石油|股股下流|股民别哭|股市对联|告股民书|炒股泪歌|股民默哀|股民亏损|益西彭措|洪法交流|远唤上师|遥唤上师|大糸己元|修行盛世|失传正统|济世灵文|himalayansky|karmapajenno|禁室培欲|亚洲嫩苞|消魂午夜|插的好爽|腋毛美女|口罩同好|胯下失守|姐弟销魂|群虐老婆|鹿城娱乐|缩紧后庭|逃亡艳旅|小姐秘籍|清梅飘香|浴室系列|照日天劫|玲珑孽怨|妹妹爽图|西苑风月|魔刀丽影|前妻禁欲|特甲少女|大腿舔食|香艳文学|欲海双艳|都市花盗|鋘售假幣|考中答案|鑫萢集坒|杭州辩证|masterkey258|考试助手|www7selangcn|passboxgmcom|075533941960|wa12568yahoo|英杰教育|gjzjid666com|wwwtenyuncom|takeflash163|xsddz2008com|chinachsicom|dabiaodkwcom|cuiqingnetcn|ltotiwangcom|考后给钱|luoliaowzcom|zhukao360com|zhongguokjcf|教育考王|诚信辦譪|香港一类|www198988net|hengxinkaocn|sofghg01sina|xinde158sohu|启鸣考务|benma5588com|lwygh8796163|保高分过|sacredbuddha|xsbdz2008com|lunwen999com|wwwzbgamenet|dewang518com|qq1030515241|程通办理|qq1036371099|恒顺贷考|053266637977|wuhuan123com|五星宏辉|015806579353|xsjdz2010com|wwwyiyeflcom|冠诚考务|上海舒莲|泰盛环球|588688kswcom|wwwkanbbinfo|shuibi88sohu|wwwjqcshagcn|gzdadeedu163|cctvgouwucom|gzdadeeducom|jiachao666nl|qq1106392111|qq1220096578|wwwwin388com|wwwtyd1688cn|kuaidi123com|045181087569|sifazhukaocn|qq1198752945|lihuanan2009|pinsedidaicn|liuxuerzh163|chengxinjycn|52mingdaocom|91chengrencn|025bsdeducom|82suncitycom|189721783333|80suncitynet|luolewdwdcom|yycetkuucncn|113928444430|jiupinchacom|緒上辦譪|天水辦譪|151581596416|82sumcitycom|竣捷考务|英杰考务|chinafzkjcom|chnanplascom|indiastudycn|无耻语录|向党挑衅|警车被砸|官员别墅|杀人卖尸|殺人賣屍|童工暗流|童工市场|兆山羡鬼|零八宪章|尸油辣条|豪华葬母|杨海举报|雷人提案|争议提案|骇人提案|袭击哨兵|李佳事件|麈柄坚挺|父亲龙修|巴东烈女|永麦酒店|石首命案|抢尸行动|石首尸首|旭日打斗|共慿主義|河蟹社会|韶关群殴|万人抗暴|油乱涨价|韶关事件|惨遭石刑|霾雾侵袭|痞子治国|央视无耻|朱瑟里诺|万人上书|任意羁押|中央澄清|温总太太|托管造林|百姓冤沉|脱亚入世|警车凭啥|马德卖官|厅长落马|白勒依勒|福娃变换|胡总好棒|郴州巨贪|涉嫌倒把|瀛台宴请|巴克曼法|招考黑幕|军道杀拳|哄骗职工|软弱外交|东海中日|落户古雷|烧砸学校|白桦气田|买通砀山|改卷内幕|东莞童奴|机场打砸|蟾蜍搬家|蟾蜍迁徙|捐款作假|非法裁减|中日东海|恶心部门|中国洋奴|杀婴凶手|问责风暴|植树造零|开原游街|杨佳列传|三位昏官|伸冤条幅|普宁传闻|刀客不朽|袭击衙役|离弃供谠|离弃供傥|小平转世|李蕊蕊案|揭黑厅幕|检阅小姐|亳州特警|紫陽軟禁|进京抓女|丽媛习近|马雅预言|巨贪肖扬|陇南事件|赦免杨佳|杨佳杀警|上海杀警|杨佳万岁|白领陨落|黑领升起|黑领崛起|集体端掉|红鱼政权|灰色宾馆|警号047242|沈婷之权|谴责跑跑|永康俞家|石首事件|浮山教案|谭作人案|周济捣蛋|林昭因病|刘和涉嫌|谷歌退出|028-68228818|075521043777|4．25事件|LittleBuddha|Reminiscence|shehuibaitai|《天音》|阿不来提|艾司唑仑|艾斯海提|巴音朝鲁|办高利贷|办理大专|辦理文憑|辦理證件|报告汇编|北京当局|北京高层|北京海艺|北京黑幕|北京京郊|北京小姐|北京战争|北京政权|北京之春|北美讲坛|苯巴比妥|变革之风|变声电话|變聲電話|兵种教材|波动少女|波動少女|财政是爹|草莓牛奶|超常科学|陳方安生|成佛做主|传九退三|春夏之交|大家论坛|大庆工潮|大型地网|大學騷亂|代发广告|代刻印章|代人发帖|党保平安|党内权力|党内权争|党内危机|党政人事|德国宝马|地方召会|地块规划|地下教会|地下刊物|地下先烈|帝國之夢|电动葫芦|電車之狼|電話攔截|叮丙诺菲|东方闪电|东方时空|董存瑞問|动态代理|賭博專用|多吉才让|多难兴邦|反腐总攻|方针定调|防身药水|放下生死|飞扬论坛|粉嫩小洞|粉饰太平|风雨神州|服务人员|服务上门|服务小姐|妇的哀羞|复转军人|高校騷亂|高薪养廉|高压锅炉|哥言语录|歌功颂德|个人崇拜|股票开户|观音法门|广安事件|廣安事件|国家安全|国家机密|航星洗涤|和平修练|黑瞎子岛|红魂网站|红旗漫漫|红色贵族|红色角落|红色恐怖|红头文件|虎胆雄心|虎膽雄心|花花公子|华夏文摘|话紫禁城|换届隐忧|黃色電影|黃色圖片|黄海事件|惠澤社群|及川奈央|吉祥宝贝|纪律检查|家用天线|家用卫星|假人民币|建定防火|江泉集团|江三条腿|江泽公审|阶级敌人|揭个黑幕|金澤文子|津人治津|禁忌试玩|禁忌試玩|京郊旅游|惊悚空间|精确答案|驚悚空間|警用教材|警用设备|军事标号|军事地图|军政名单|軍長發威|咖啡文化|开机信息|刊文回谢|抗菌纤维|考后付款|考前发放|恐怖分子|恐怖牢笼|恐怖牢籠|恐懼殺手|拉帮游说|拉票贿选|拉萨事件|劳工观察|李三共志|李月月鸟|连队资料|联名上书|练功群众|两岸关系|两个中国|两派争斗|两性狂情|辽阳工潮|猎杀熊猫|临震预报|灵修团体|铃声下载|令狐计划|留四进三|六月联盟|六月聯盟|绿叶电器|伦理电影|轮子小报|毛都露出|美国参考|美女視頻|蒙古回归|蒙古之友|咪达唑仑|迷失北京|秘密潜入|民族矛盾|民族问题|末世劫难|木子论坛|奶头真红|南华早报|年春衫薄|派系斗争|盤古樂隊|跑官要官|泡沫经济|皮指纹测|品牌香烟|槍決女犯|槍決現場|槍支彈藥|强开工具|秦青的幸|轻舟快讯|清场内幕|清海师父|权力瓜分|权力核心|群体灭绝|群体事件|群體事件|人工少女|人民真实|人事任免|人事推测|人事预测|人事预言|仁吉旺姆|瑞丽公司|三个代表|三個代表|三浦愛佳|山寨手机|善恶有报|商务时空|上海交大|上门小姐|涉台政局|神的教会|神洲电影|沈默殺手|时代互联|时代论坛|时事论坛|世界之门|收取小费|手機復制|手機跟蹤|司法警官|絲襪寫真|死亡日志|死亡日誌|四川朱昱|台海盾牌|臺灣獨立|滔天大罪|淘宝白号|特别党费|特务机构|天鵝之旅|天国乐团|天互数据|天津事件|天伦王朝|天宇二手|偷窺有罪|头号警花|投毒殺人|透視眼鏡|透視照片|突破技术|屠龙别记|外交论坛|万达卫浴|万能钥匙|萬能鑰匙|网络代理|伪装美女|偽裝美女|魏东死亡|温切斯特|温休曾退|文件秘密|窝囊中国|我虽死去|乌兰木伦|巫毒娃娃|吳瓊花問|吾尔开西|吾尔凯西|梧桐文化|五出三进|武汉办証|侮辱老师|夕樹舞子|西山会议|吸血莱恩|吸血萊恩|香港明报|向巴平措|消业之说|心藏大恶|新华举报|新华内情|新式军服|新约教会|信用危机|兴华论谈|星崎未來|修改成绩|学生信仰|学生运动|雪山狮子|血色京机|血色京畿|血色黎明|血腥圖片|燕玲论坛|燕南评论|业力回报|夜半加税|夜勤病栋|液压马达|一帆通讯|一军两策|一中一台|亿龙汽车|异见人士|异议人士|易购手机|易切削钢|隱形噴劑|英語槍手|永磁吸盘|优化官员|友通科技|诱发恶性|宇宙真理|宇宙主佛|玉森集团|域名备案|战斗条令|战役学纲|找工总行|找建总行|找农总行|找人发帖|針孔攝像|偵探設備|争鸣论坛|整形美容|正浩净化|正见周刊|正念正行|证券从业|中国之春|中國當局|中华大众|中华讲清|中华时事|中雷产品|中央文件|中央资料|重庆钢构|周刊纪事|专业顶帖|专业发帖|专业维修|专业修理|自殺指南|自制手槍|法新闻社|白宫事件|追查国际|法网恢恢|洪发交流|绝食抗暴|师傅法身|联邦政府|秘密文件|机密文件|政府文件|隐私图片|卫星电视|广电总局|飞凤春宵|应召女郎|雪肌夜叉|禁宮秘史|少女换衣|chinaliberal|haokafei.com|秘密潛入|师父法身|电话询问|中国特色|当代八乱|广元橘子|正统文化|震撼记录|血腥时间|最强阵容|两岸才子|中国性城|基地组织|校园招聘|三鹿集团|三鹿奶粉|三鹿事件|赤色杀意|美国原装|风雷游戏|幸运用户|yahoo!奇摩|百度空间|炸公交车|《九剑》|《神灯》|《仙笛》|爱的精灵|爱的色放|爱情万岁|案之孽杀|八大谎言|包娼包赌|不再情牵|差额选举|赤足惊魂|慈禧野史|大乌拉尔|倒卖土地|丁丙诺啡|毒残酷迫|羔羊医生|宫闱情变|官商暴利|国际公法|國際公法|黑狱圣女|花街狂奔|幻想玉女|荒唐禁令|吉瑟利努|极度兽性|家庭教师|家有艳妻|禁忌游戏|绝世遗言|空军会议|恐怖袭击|六大成绩|灭亡中国|七大谎言|倩女销魂|强震海啸|氢氧化钠|卿本佳人|情难自制|人肉腊肠|入联公投|山中艳谭|尸蛊艳谭|师生绮恋|世纪大案|世纪血腥|双面媚娘|双面女友|四大怪事|桃色香居|特区爱奴|田螺艳鬼|玩女无罪|我为卿狂|无水乙醇|五月樱唇|午夜女郎|西厢艳谭|虾录情圣|夏日狂情|先烈来电|新紅唇劫|刑讯逼供|杏林春暖|性趣高手|凶宅胭脂|血染红唇|鸭之一族|艳绛勾魂|杨白劳问|一脱求生|隐身装备|与鸭共舞|玉女聊斋|欲火龙珠|中港丽人|中国储君|中国太子|中央十七|中央团系|钟馗嫁妹|梓健特药|开平受辱|微型监控|追踪定位|足球投注|527我爱妻|led显示屏|当官要精|导人的最|邓爷爷转|都当小姐|都进中央|高就在政|公开小姐|官也不容|兼职上门|酒像喝汤|据说全民|克分析仪|拉开水晶|理各种证|美元的月|牌分析仪|盛行在舞|十类人不|售一元硬|争相自首|志不愿跟|作各种证|《争鸣》|阿凡提机|爱液横流|把病人整|把学生整|百乐二呓|办理本科|办理各种|办理真实|办理证书|办理资格|帮人怀孕|谤罪获刑|包青天机|报复执法|北京风波|北省委门|被指抄袭|辩词与梦|冰在火上|博会暂停|博园区伪|部忙组阁|部是这样|财众科技|策没有不|抽着大中|抽着芙蓉|出成绩付|穿透仪器|传送答案|春水横溢|答案提供|打死经过|打砸办公|当代七整|当官在于|党风日下|党前干劲|刀架保安|等人老百|等人是老|等人手术|地产之歌|第二首都|点金商务|点数优惠|电话交友|洞小口紧|恶势力操|恶势力插|发贴工具|法力像佛|法院给废|房贷给废|夫妻交换|福尔马林|福娃的預|福娃頭上|府集中领|复印件生|复印件制|富婆给废|改号软件|港澳博球|个邪的党|各类考试|工程吞得|攻官小姐|共青背景|共字玄机|鼓动一些|官匪一家|官因发帖|光学真题|广场事件|国际投注|国家软弱|国家吞得|国统纲领|哈药直销|红客联盟|化学扫盲|皇家轮盘|回汉冲突|火车也疯|基本靠吼|绩过后付|集体打砸|家一样饱|家属被打|解密软件|进来的罪|经典谎言|警车雷达|警方包庇|警匪一家|警民冲突|究生答案|九龙论坛|酒象喝汤|康没有不|考前答案|考前密卷|考前预测|考试机构|考试联盟|空和雅典|控诉世博|矿难不公|拉线飞机|狼全部跪|雷人女官|类准确答|李大轮子|理是影帝|理做帐报|力骗中央|了件渔袍|猎好帮手|流血事件|龙湾事件|罗斯小姐|妈了个逼|蟆叫专家|买官卖官|卖地财政|猫眼工具|每周一死|民九亿商|铭记印尼|幕没有不|泥马之歌|你的西域|怒的志愿|女人和狗|女任职名|女士服务|仆不怕饮|奇迹的黄|骑单车出|千禧弘法|钱三字经|强权政府|抢其火炬|禽流感了|清除负面|区的雷人|群起抗暴|群体性事|群众冲击|人在云上|任于斯国|日月气功|软弱的国|瑞安事件|三股势力|扫了爷爷|杀害学生|煽动不明|煽动群众|商务快车|涉嫌抄袭|神韵艺术|圣火护卫|圣战不息|十大谎言|十个预言|实学历文|守所死法|司长期有|私房写真|死法分布|死刑现场|死要见毛|诉讼集团|太王四神|泰兴镇中|涛一样胡|讨厌中国|天推广歌|庭审直播|通钢总经|网民获刑|伪基百科|谓的和谐|闻被控制|我的西域|吾爾開希|务员答案|务员考试|西服进去|席临终前|席指着护|先烈纷纷|现金投注|现在的党|泄漏的内|兴中心幼|行长王益|性推广歌|学生领袖|血腥清场|丫与王益|一小撮别|乙撑亚胺|乙烯甲醇|影子政府|有偿服务|有偿捐献|有奶不一|右转是政|宇宙毁灭|育部女官|预测答案|真钱斗地|证到付款|证生成器|指纹考勤|制证定金|中的班禅|中国不强|中央黑幕|种公务员|种学历证|重阳兵变|州大批贪|宙最高法|住英国房|转是政府|赚钱资料|追债公司|自动群发|总会美女|足球玩法|左转是政|办理文憑|办理专科|插入爽网|答案传输|考生答疑|美女服务|妹妹服务|取得本科|取得专科|热辣美图|人体写真|少儿勿入|声色场所|196.914.0008|kwjy-edu.com|xkpx-edu.com|安防系统|办出生证|办真学历|本科业证|地税发嘌|买大专文|买真学历|免费试用|全国包送|商品销售|天逸代攷|网页游戏|武逆乾坤|星辉汽贸|易搜手机|宅男社区|宅女社区|招代理商|恶意灌水|传奇世界|信息群发|确吉尼玛|星崎未来|夕树舞子|金泽文子|三浦爱佳|执法犯法|土匪政府|国家信息|不办人事|gongchandang|学院爆动|猜宝工具|押宝工具|电表遥控|电表干扰|民族冲突|劣等民族|圣战组织|海军部署|陆军部署|空军部署|四大舰队|提供答案|代理记帐|司法考试|征兵计划|收购文物|有偿献血|网络电话|域名注册|网络空间|电子邮局|主机租用|网站建设|域名服务|养殖基地|企业增资|代理记怅|月赚千元|群发软件|疯狂免费|上网娱乐|富婆找鸭|远程遥控|游戏代币|炎症治疗|精美女包|借腹生子|试管婴儿|养殖总场|转让车票|破坏火炬|丰胸美体|搬家公司|小吃技术|山鸡养殖|山鸡孵化|会计培训|电脑培训|烟囱新建|烟囱拆除|犯罪记录|宾馆住宿|生殖中心|胚胎移植|不孕不育|仁济医院|性欲冷淡|增大增粗|性保健品|回收烟酒|烟酒回收|立体培训|汽车租赁|家政服务|祛斑胶囊|肌肉劳损|发型设计|烫发染发|牙齿松动|牙龈出血|牙齿出血|牙齿美白|口腔美容|四环素牙|美白牙齿|口腔修复|活动义齿|全口义齿|口腔正畸|牙齿正畸|口腔卫生|牙齿检查|私人牙医|防爆盾牌|防爆头盔|警用皮鞋|强光手电|警用水壶|防割手套|水晶照片|网络推手|软文发布|快速删贴|清理负面|删贴公司|负面撤稿|后庭专区|肛栓母狗|男根增长|先帝病危|江总病危|江已病危|空调移机|钢琴搬运|小说合集|奇摩登入|爱上小姨|安然轻尘|暗夜情魔|霸艳邪君|霸占芙蓉|百花故事|百花盛放|百年庆典|北京byebye|冰峰魔恋|不得不贱|不死邪神|不死医神|步步生莲|残阳絮语|苍穹之怒|藏娇都市|超级教师|超级农民|超级仙医|超级学生|超级异能|处子之作|穿越进化|春乡艳少|春意凛然|纯属挑逗|大唐寻芳|丹药大亨|帝王艳梦|第一无赖|氣狗销售|销售钻石|帝国夜色|夜色贵族|农夫电影|夜色王朝|网上赌钱|收养宝宝|真钱游戏|收养孩子|供应假幣|手机改号|FlexiSpy PRO|手驽配件|tnt的制作|翻转车牌|政协车证|论坛群发|电子监控|车防盗器|拐卖婴儿|拐卖儿童|买卖婴儿|重铬酸钠|迭氮化钠|马钱子碱|番木鳖碱|丙撑亚胺|巯基乙醇|苯基硫醇|环己烯酮|氨基吡啶|乙酸苯汞|海葱糖甙|放线菌素|硝酸高汞|碘化高汞|溴化高汞|四碳酰镍|维也纳绿|维埃克斯|路易氏剂|亚当氏气|二氧化氮|过氧化氮|三氮化钠|胚芽儿碱|计末林碱|甲基联胺|无水联胺|硫代苯酚|半方形酸|嘧啶苯芥|二甲二硫|二甲弗林|氧化乐果|乙基乐果|马拉赛昂|己酮肟威|特氨叉威|卡巴呋喃|间异丙威|甲氨叉威|丁醛肟威|放线菌酮|地乐消酚|硫酸甲酯|谷仁乐生|化合物118|化合物497|普罗米特|杀鼠嘧啶|红海葱甙|矢车菊甙|米尔法兰|自力霉素|安非他明|安非它命|电表反转|电表校验|海关拍卖|考试设备|海关查获|教研大纲|可控牌靴|猜宝仪器|速度预警|雷达警示|雷达测速|雷达探测|高速预警|牌照喷雾|雷达之星|活性碳粉|克西里尔|奥克托金|代那买特|震源药柱|基特拉辛|手槍钻石|特殊服务|公关删除|花都逍遥|有偿捐赠|羟间唑啉|收费清理|粉尘女子|兼职服务|玩女大王|考生名单|遥控复制|遥控干扰|娱乐论坛|毕业学历|防拍克星|测速雷达|迅雷下载|萘基硫脲|逼羊为狼|遍地桃花|超级公子|地狱召唤|恶女戏夫|魅夜帝国|嬉游花丛|萧府之败|欲医天下|至尊狼威|34H基甲基|赤道卫星|异性社区|阿兰得龙|高仿纸币|甲基苯胺|甲基苯丙|甲卡西酮|考生考号|森林之豹|森林之虎|车牌执照|东京丸井|车牌翻转|防身器材|防卫棍刀|负面新闻|负面信息|个性号码|无线通话|定时引爆|视讯妹妹|门禁复制|莫洛托夫|美眉娱乐|脱氧麻黄|人人有色|号码软件|显号软件|沙漠之鹰|恐怖份子|森林之狐|森林之狼|森林之鹰|负面帖子|炒作公司|变号软件|手机偷听|北朝鲜冰|捷克左轮|赵氏猎鹰|红烧兔子|娱乐会所|网络负面|特种部队|网络危机|阿兰德龙|乌斯普龙|喋血鸳鸯|东北大炕|东风传奇|东瀛日记|都市藏娇|都市春潮|都市黄昏|都市奇兵|都市擒芳|多情皇帝|多情医仙|恶女总裁|放纵深圳|飞凤灵蛇|风月草民|风月大帝|风姿物语|封魔印章|疯狂求欢|福艳天下|妇科男医|高州水库|隔岸芳烬|隔墙有眼|沟女物语|古镛文集|官人我要|鬼不走门|寒潭鹤影|七日欢恋|河图作品|黑道狂徒|黑道女友|黑色帝国|黑色柔情|红楼遗秘|红旗飘飘|红杏暗香|红映残阳|后宫学院|花心天子|荒莽神话|荒唐传说|皇朝秘史|魂一指令|混混教师|活色逍遥|火爆男妃|火浣神衣|机甲武圣|极度香艳|极品二少|极品复仇|极品公子|极品家教|极品农民|极品色妃|极品少将|极品太女|极品巫男|极品邪龙|极品邪神|剑荡天下|剑起云深|剑指天下|江山美色|娇娇师娘|娇艳人生|骄龙荡魔|狡猾家丁|劫花传奇|尽揽婀娜|禁忌之旅|惊尘溅血|惊伦六日|囧囧仙妻|九流术士|九世魔情|绝代霸主|绝代商骄|绝色大唐|绝色家族|绝世狂龙|空姐羔羊|傀儡皇帝|狼后传奇|狼之天下|浪迹神雕|浪迹香都|浪子彦青|炼狱天使|烈女斗夫|临时俘虏|伶人往事|另类穿越|龙魔传说|龙与女仆|龙语兽修|乱云飞渡|满世妖娆|没尸找尸|写真图片|美妻地狱|美色无边|梦幻倚天|梦回天阙|梦想人生|人妖杂交|迷欲侠女|妙手神医|妙手神织|明日帝国|摹拟爱情|魔皇至尊|魔甲销魂|魔美双修|魔神艳传|魔神紫星|魔兽领主|莫爱邪君|逆天邪传|狞王武霸|奴隶帝国|怒之典章|女人是海|诺贝尔奖|痞子偶像|瓶安如意|扑倒宰相|妻定神闲|妻妾成群|弃妃倾城|千年玄冰|巧取豪夺|俏惹郎心|倾城护爱|情海狂龙|情天大帝|情缘欲海|秋韵夜语|囚禁新娘|群魔丽影|人性禁岛|人在深圳|日出之王|溶解权力|如果的事|如影逐形|三宝局长|散花天女|色酷全书|色香射雕|森下悠里|山村情事|少龙传奇|少龙外传|深纯弄潮|圣魔邪灵|圣女传奇|十年孤剑|仕途官道|守护美女|书剑别传|双面艳姬|桃之夭夭|天地之间|天降神龙|天降神妻|田野花香|听话娃娃|微热少年|我的天下|我和处长|无德皇后|无良公子|无限征服|华夏神龙|妩媚情殇|武林花劫|武林花主|武林状元|误坠花丛|西苑魅影|仙侠魔踪|乡春满艳|乡村神医|乡野情梦|小村神医|小夫少妻|小妾丫鬟|小青系列|小镇飞花|邪气凛然|邪神传说|携美人生|谢雕易遍|性医春歌|胸大有罪|修罗都市|玄女心经|押寨夫人|艳妃惑夫|艳妃偷夫|艳色都市|艳香迷醉|夜诱娘子|一城风絮|一丝不挂|一指擎天|一柱擎天|医世无忧|以后时代|银剑天使|鹰翔长空|永堕黑暗|游龙嬉春|游龙戏凤|诱欲校园|雨过桃花|玉麟传奇|玉体横陈|欲海狂龙|欲海梦蝶|欲海神龙|欲火难眠|欲火难耐|女人的洞|越境鬼医|云雨欲魔|云踪魅影|知乐全集|执子之手|至尊夺研|至尊邪帝|中国特工|中国影帝|重建帝国|逐艳人生|紫屋魔恋|纵欲返古|醉回七九|醉卧红尘|学历认证|制作脏弹|出租网管|财税代理|连锁销售|上门服务|学生服务|根敦确吉|金大物流|神雕外传|浪妇阿姨|色文小说|商务租车|少女发春|神韵千年|文心藏阁|航空母箭|人民币假|转让机打|变性晓薇|逍遥皇帝|洪荒魔尊|套弄花心|桃源洞口|美女真人|农夫导航|香港开奖|股民电话|股民名单|股民资源|股民资料|股民信息|成都校服|三国称霸|个人身份|录像火机|全系列阀|自办频道|兼职小姐|我要官人|獵槍銷售|联兴棋牌|366娱乐城|日月图库|淘金盈网|永利高网|东方心经|先锋百乐|金盛国际|涂山国际|名门国际|名人国际|扑鱼达人|阳光地带|修改证书|邪性总裁|狼欲国度|村色撩人|狼客娱乐|受辱禁处|爱城论坛|色色论坛|只爱色色|无双国土|强制深喉|我爱色吧|色哥导航|耻悦人妻|自制地雷|金彩国际|女神国际|极品人生|三优娱乐|金赞娱乐|删百度帖|售香港ghb|第四色网|极品人妻|鸿利国际|汔狗销售|警备车证|楼凤大全|猎刀订购|订购猎刀|猎刀直销|代人收债|腰刀转让|销售迷烟|爆竹供应|直销缅果|缅果供应|缅果购买|缅果提供|提供猎刀|警衔提供|提供警帽|提供fm2粉|销售汽gou|腰刀销售|销售色站|色站销售|直销爆竹|缅果销售|销售jia币|jia币销售|销售情蛊|销售fm2粉|短刀销售|买卖猎刀|冰钻供应|订购迷烟|迷烟专卖|提供迷烟|全讯网777|工口小说|工口图片|工口动画|工口漫画|工口动漫|工口游戏|草榴地址|月沉吟|美人劫|美人殇|销魂殿|断珠蕊|姑妄言|欢喜缘|后庭花|画眉缘|花放春|换夫妻|空空幻|露春红|两肉缘|林兰香|寐春卷|闹花丛|情海缘|柳花传|桃花庵|桃花影|舞春云|巫梦缘|杏花天|绣屏缘|一片情|鱼水谐|鸳鸯阵|怡情阵|枕瑶钗|戏蛾记|醉春风|灯月缘|捣玉台|春又春|碧玉楼|弁而钗|伴花眠|痴娇丽|酬鸾凤|职业删贴|梦先觉|若相惜|惜情记|玲珑配|金钱帮|白衣传|紫极舞|舞倾城|混沌决|供应ghb水|ghb水销售|销售缅果|销售锇酸|供应铀毒|真钱轮盘|短刀直销|樱花泪|浮缘枝|槐树里|美人情|怯春寒|殷若溪|小渔村|短刀专卖|草榴影院|腰刀供应|警号销售|专卖ghb水|直销ghb水|订购ghb水|就去品色|直销军衔|供应锇酸|luo聊表演|臊冰订购|供应特普|供应硼烷|台秃专卖|转让腰刀|提供腰刀|腰刀提供|订购腰刀|腰刀订购|腰刀买卖|买卖腰刀|猎刀销售|香香社区|浪妹社区|弯刀买卖|买卖弯刀|弯刀提供|锇酸供应|投注娱乐|百博亚洲|优博娱乐|色站大全|艳照下载|Xiao77论坛|直销臊冰|直销腰刀|直销警灯|直销警号|直销警帽|猎刀供应|转让猎刀|猎刀转让|直销警衔|烟花直销|爆竹直销|烟花专卖|狗管专卖|销售狗管|直销狗管|转让狗管|庐江艳照|黄片下载|供应fm2粉|素人电影|人妻系列|素人合集|雇凶打人|雇凶复仇|藏刀供应|藏刀转让|提供藏刀|藏刀销售|销售猎刀|销售藏刀|销售腰刀|销售靴刀|专卖臊冰|供应臊冰|提供臊冰|色聊服务|在线棋牌|直刀专卖|直销猎刀|冰妹服务|买卖臊冰|欧美色站|销售台秃|黄网图片|日韩色站|烟花供应|直销烟花|供应警帽|供应警号|太恩制作|下载黄片|黑彩代理|楼凤陪睡|替人收债|传授赌技|色网地址|色站网址|欧洲色站|调妻派对|找人讨债|警衔供应|专卖警衔|买卖警衔|购买警衔|性吧有你|气GOU专卖|销售木仓|供应木仓|木仓专卖|销售警衔|汽gou销售|色色影视|警号专卖|专卖警号|在线祼聊|销售警灯|代人寻仇|警灯销售|新全讯网|92 式销售|64 式销售|帮人泄愤|色播资源|祼聊表演|提供土冰|缅人绍雄|卖娃广告|物流面单|藏民档案|逼爽导航|提供物冰|亚洲狼图|寻仇了事|楼凤论坛|购买唐刀|舔到你射|中国楼凤|复仇咨询|复仇顾问|速食全套|白嫩妹妹|进口美秃|在线黄片|四房看看|兼职陪睡|洽谈复仇|自制左轮|售人民币|车主数据|土冰合成|五码吹潮|复仇接洽|三棱尖刀|三利达网|仿真头套|赌彩平台|代理复仇|老板数据|老人名录|手机名录|替人泄愤|销售长刀|销售CO2狗|色片下载|真人祼聊|收费祼聊|给我豹豹|抢手总裁|商界狂龙|蔷薇妖娆|七虐弃妃|花花游龙|公车被干|香醉迷艳|腰刀专卖|黄片种子|供应猎刀|供应腰刀|黄片网站|供应山埃|汽gou专卖|色虫影院|色虎影院|同城陪睡|色色快播|亚洲色站|皇冠平台|逍遥社区|色色基地|咪咪基地|汽车套开|包爽爆射|美尻套图|各地凤楼|厕所盗摄|幼童买卖|美女中出|色猫影院|猎刀买卖|色吧社区|投注取现|真钱下注|色吧亚洲|小姐威客|马古配方|气gou专卖|专卖猎刀|气Gun专卖|哇哇影院|办假学历|爆竹专卖|草榴社區|销售烟花|spyera软件|包爽包射|真人色片|足球下注|手槍买卖|幼幼电影|汽槍买卖|在线下注|电购数据|销售醱票|办职称证|壮阳保健|提供小姐|幼幼极品|深喉服务|漂漂美眉|喷雾迷葯|從後插入|精品电影|欧美电影|另类电影|明星情爱|欧美情爱|欧美色片|亚洲色片|人妻中出|幼幼同志|多人杂交|狼友论坛|线上投注|乐酷搏彩|援助交际|舌尖漫游|九九娱乐|碧月吟阁|皇家花园|绝色皇城|靓女主播|尽情纵欲|咪咪娱乐|制毒工艺|矢泽种子|现金棋牌|玛雅论坛|老板手机|特殊名录|车主名录|夜店小姐|真人轮盘|色站导航|聚色导航|美女貼吧|替人跑事|帮人了难|气槍专卖|办军官证|製作炸藥|步槍销售|皇冠足球|古柯买卖|买凶杀人|疯插港姐|婷婷基地|四房播播|学历办理|美女祼聊|亚洲原创|欧美原创|办理凭文|千门六决|网络投注|皇冠开户|电话改号|任意改号|人妖妹妹|高管名录|猎刀专卖|美尻中出|手槍销售|步槍供應|腎脏中介|供应步槍|供应獵槍|供应手槍|銷售步槍|銷售手槍|銷售獵狗|銷售獵槍|提供獵槍|提供獵狗|提供手槍|提供步槍|供應步槍|供應獵狗|供應獵槍|供應手槍|人兽杂交|销售手槍|销售獵狗|销售獵槍|腎源供应|供应腎源|腎臟中介|腎臟供应|找人敲诈|找人毀容|找人勒索|找人绑架|替人讨債|专业復仇|找人消災|真槍销售|专业毀容|专业勒索|彩信改号|销售LQB362|供应LQB362|提供LQB362|LQB362到货|LQB362出货|LQB362订购|LQB362电话|幫人殺人|幫人砍人|替人綁架|幫人綁架|替人毀容|幫人毀容|替人敲詐|幫人勒索|幫人敲詐|幫人討債|復仇了仇|代人報仇|毒的制作|找人復仇|替人復仇|找人報仇|购买槍支|交换人妻|替人讨债|帮人消灾|帮人杀人|替人复仇|雇人复仇|替人追债|替人出气|帮人出气|职业复仇|专业复仇|帮人讨债|雇人打架|帮人勒索|找人复仇|替人打架|代人了仇|代人报复|代人出气|帮人打架|帮人了仇|复仇了仇|帮人报复|替人报复|帮人追债|帮人敲诈|替人杀人|帮人清债|替人清债|替人消灾|替人敲诈|替人勒索|帮人毁容|替人毁容|帮人绑架|替人绑架|帮人砍人|替人砍人|替人消災|幫人消災|代人報復|代人出氣|幫人打架|職業復仇|專業復仇|職業報仇|專業報仇|雇人報仇|雇人復仇|替人討債|替人追債|幫人追債|幫人出氣|替人報仇|替人報復|幫人報復|幫人了仇|替人出氣|替人清債|替人殺人|幫人清債|冰磚配方|冰磚出货|冰磚订购|冰钻订购|冰钻出货|手抢专卖|手抢到货|卖high粉QQ|冰钻到货|冰磚到货|毒的配方|猎槍销售|办警官证|气槍买卖|气槍购买|槍支买卖|鉆石销售|冰磚销售|冰鉆销售|替人了仇|供应冰钻|十八和谐|一边一国|突厥斯坦|边界新约|维基百科|我的奋斗|新xin唐tang|360mother.com|5qshop.com.cn|ailuoliao.com|dgchun-lan.cn|feifeijob.com|hainanidc.com|job-yahoo.com|lekachina.com|newegg.com.cn|officestation|wdyj88.com.cn|xsjdz2010.com|为a股自尽|1215出师表|654k全金属|访问youtube|hotspotshield|rentiandiling|色即是空3|0085266344408|wwwzydk444com|jishu22126com|wwwsz56888com|wwwhuayidkwcn|chengaiai4490|wuweixin68163|youxin2727com|bsto178xtd365|szjyjg0871163|ailiaotiancom|ok1997okyahoo|591luoliaocom|tsbz08hotmail|health21cncom|wwwkchaomacom|dingxiangname|sanyang668163|gzqietingqicn|hybz08hotmail|ygzj258369163|szlin16890126|jheduzx126com|laohujibbscom|400suncitycom|dai22289gmail|xunkong123com|tengshivodcom|botongkejicom|mmfuwusvvkcom|funpnet759277|99lianmengnet|52luoliaowcom|feiyue8998com|qazwsx654321p|essayonlinecn|pandra2003163|szjsedu163com|wwwxyxl5168cn|zptokbc060com|51xiaguangcom|nbzhutancomcn|maopianwangcn|tianyakefu126|huang92896163|chengkao360cn|kjxxwss163com|yuandongzj163|zzddzxinmecom|laohupojiecom|82rsunitcycom|laohupj580com|dfii出海战|惊现5女尸|4次拨打110|预言2012年|頰言2012年|天和佳祥b|0577-26889666|0755-21013177|2011年英语|jiangdongriji|ninna.justice|www.cipfg.org|警用钱包|隐私1图片|隱私1圖片|2008年灾年|全国揭晓|共和国2049|开平,受辱|考试,答案|微型,监控|追踪,定位|134 24o8 1398|135-4406-6974|137.2555-7876|137.2878-1212|159-1095-5681|boxue-edu.com|decai-edu.com|www.beely.com|免费刷Q币|泰国Vervata|手槍 钻石|BBINFOSTATION|3氨基丙烯|4硝基甲烷|4二硝基苯|镰刀菌酮X|丝裂霉素C|二仲丁基4|6亚硫酸酯|2硝基甲苯|3硝基甲苯|4硝基苯胺|4氢吡喃酮|2异丙氨基|2甲基吡啶|硫酸2甲酯|1乙酰硫脲|硫代乙2醇|甲基化2硫|2硝叔丁酚|2硝另丁酚|美女1笑散|找1夜晴网|1元人民币|硫酸3乙锡|汞制剂2号|混世邪神2|重生寡1991|迎z秋庆祝|3d木马78910|18MM电影网|e乐博官网|假结婚证Q|h游戏下载|提供shen源|有声h小说|提供fing霸|high药销售|专卖high药|high药专卖|供应high药|提供high药|h动漫图片|h动漫快播|HIGH药直销|王民生群p|蒋大彬群p|high药直销|PETN的配方|三夫妻ed2k|petn的合成|提供high粉|54自制槍QQ|Fing霸提供|Fing霸专卖|Fing霸销售|专卖Fing霸|提供Fing霸|QVOD色播网|色狗 电影|e夜情电话|e夜情论坛|e夜情交友|qq卖77猎槍|high粉配方|high粉订购|high粉出货|high粉到货|high粉销售|供应high粉|根敦.确吉|18岁的雪儿|60天的攻防|51xiaguang.com|essayonline.cn|gongzqq.com.cn|jianzhan88.com|outlets365.com|zhuangzhigm.cn|京et也很牛|47辆车相撞|软件ui丑陋|全球80人口|64小时绝食|悠游字在13|cuttingthrough|arrivalinlhasa|echoesofpotala|chengrenshipin|少女18岁色|wwwszjyjgcomcn|wwwdajiyiqicom|wwwncs168comcn|13797020693室|7770blogbuscom|tao20032008163|luoliaozhancom|www2008gwydacn|woyao2000gmail|greatenglishcn|allnettoolscom|huaidizhiyahoo|lyou1234520163|cfzj197hotmail|driversvisacom|823629831qzone|huatai88888com|shuguang888com|chaoliukejicom|yangfangzhou99|isleadingchina|wwwgdgz13800cn|wwwhengmei77cn|jiachao888nlae|kuailetianyacn|shch988blog163|15201229670com|jiachao666zw78|edu137875652cn|dingshengzkcom|chinacard18com|彭州80万吨|17权力布局|c4制作方法|nicolasdemarco|The3FeelOnline|６10办公室|专-业承-接|QQ充值中心|充值QQ号码|盲女72小時|bianyaqi.sh.cn|bjscdesign.com|book1.5d6d.com|diy.myrice.com|dxy.cniiyi.com|firefoxcn.info|hljzxq19690724|hongaosoft.com|hosting.czm.cn|iactive.com.cn|infoark.com.cn|movequickly.cn|njgrandeur.com|ovefast.com.cn|pro-wing.co.jp|qichezulin.org|registerjz.com|rosanna.com.cn|silvery.com.tw|telenglish.com|tianyunsun.com|xiaoshanwu.com|xinguanghui.cn|xizang2008.com|yigaosheji.com|yongshengxx.cn|70天大事记|26③850148⑧|my.tv.sohu.com|open-jyedu.com|Yinlong Island|SM后庭器具|地税髮票QQ|FlexiSpy下载|己烯1炔3醇|2氧化丁2烯|2硫化2甲基|1-乙酰硫脲|3-氨基丙烯|id卡拷贝机|3硝基2甲苯|6硝基2苯胺|2硝化乙2醇|2环己烯1酮|DGSTATIONMUANT|forestofbreast|我的wg岁月|重生之80后|供应k2香料|供应k2精灵|BB体育投注|办假军牌QQ|无色毒药QQ|无味毒药QQ|色龙bt发布|女王招奴qq|av天堂影院|av欧美影院|xb综合影院|泷泽萝拉bt|快播色片av|10bet娱乐城|收养男童qq|负面消息qq|帮忙复仇QQ|订购国秃qq|qq代人了事|qq替人了事|qq专卖警帽|销售警棒qq|tt现金娱乐|qq找人报复|qq买卖警帽|qq买卖警号|qq销售ghb水|qq提供ghb水|高清av下载|qq提供情蛊|情蛊提供qq|情蛊购买qq|缅果订购qq|缅果直销qq|购买缅果qq|订购缅果qq|冰钻提供qq|臊冰提供qq|提供ghb水qq|国产64销售|销售警号qq|销售短刀qq|销售ghb水qq|爆竹销售qq|销售爆竹qq|迷烟销售qq|qq销售冰油|qq销售火铳|供应冰油qq|订购冰油qq|直销冰油qq|销售冰油qq|购买冰油qq|提供冰油qq|警衔销售qq|了仇了事qq|复仇办事qq|销售美秃qq|提供缅果qq|帮人复仇qq|gv种子下载|欧美gv种子|供应缅果qq|销售迷粉qq|订购迷粉qq|鸡婆服务qq|老师16岁|90后黑丝网|人妖av下载|欧美av种子|av影片种子|快播av下载|买卖缅果qq|直销happy水|订购happy水|av影片下载|谷子供应qq|臊冰供应qq|锡锋供应qq|专卖腰刀qq|欧美av下载|下载av电影|素人av视讯|素人av影视|亚洲av视讯|日韩av视讯|欧美av视讯|亚洲av下载|美女av图片|快播av色站|日韩av下载|供应弯刀qq|转让弯刀qq|专业制证qq|QQ真人luo聊|luo聊美女qq|庐江6P种子|王民生3P照|QQ帮人复仇|QQ招人复仇|宾馆6P艳照|有偿讨债qq|业主资料QQ|车主名单qq|楼凤小姐QQ|藏刀提供qq|藏刀专卖QQ|qq代人复仇|qq帮人复仇|av动漫在线|动漫av下载|av动漫下载|提供冰钻QQ|云南情蛊QQ|专业删贴qq|购买学历QQ|av在线观看|删除帖子QQ|办高仿证QQ|兼职小妹qq|兼职白领qq|找人毁容QQ|顺丰面单QQ|提供happy水|了仇了事QQ|警号订购QQ|丝足上门QQ|丝足保健QQ|专业删贴QQ|假六级证qq|假四级证qq|中考答案QQ|供应Happy水|替人寻仇QQ|硝甲西泮QQ|Happy水提供|Happy水专卖|Happy水销售|专卖Happy水|提供Happy水|销售Happy水|电购面单QQ|保险数据QQ|代人复仇qq|欧美bt种子|天涯删贴qq|车主资料QQ|帮人灭口QQ|色av色影院|办理军牌QQ|办行驶证QQ|上门陪睡QQ|帮人复仇QQ|代人复仇QQ|97色色导航|警用服装QQ|草榴社区QQ|高纯度99冰|制造意外QQ|假警官证QQ|冷钢专卖QQ|快播av电影|3p美女图片|最新素人av|56軍刺供应|假人民幣QQ|供应77猎槍|銷售77猎槍|供應77猎槍|销售77猎槍|仿真面皮QQ|溫切斯特qq|56軍刺专卖|81軍刺专卖|QQ销售冰磚|QQ订购冰磚|卖摇头糖QQ|卖小冰磚QQ|卖黃體酮QQ|卖麥角酸QQ|卖冰鉆石QQ|卖搖頭糖QQ|卖白牙簽QQ|卖黃牙簽QQ|卖麻黃素QQ|卖大冰磚QQ|卖神仙糖QQ|卖钻石冰QQ|卖鉆石冰QQ|QQ供应冰磚|QQ供应钻石|QQ销售冰钻|松花江污染|公务员工资|一级黄电视|亚洲美女总|中文搜性网|人妻兽虐曲|性信息交友|少女俱乐部|武林情皇传|发票代开|田明建时间|太王死神记|清明节到了|迫近水危机|老衲痛经啊|小平讲英语|陈娘宇下台|千岛湖之旅|徐和柴学友|爱神之传奇|往事追忆录|睡着的武神|济南建设路|总统的讲话|痛批政法委|山西黑砖窑|敢坐飞机吗|最牛钉子户|唐人电视台|江山美人志|公务员调资|双鞋的故事|先烈的电话|gupiaojijing.cn|告别蒸笼车|疯狂水果机|香港六閤彩|老虎计刷分|女性自尉器|小姐全攻略|宿舍拍艳照|董存瑞来电|曾庆一样红|大学不要钱|统一叫小泉|骗到国务院|泡茶抱小密|票贩试比高|当今大谎言|部长李莲英|八耻编成经|宋朝俯卧撑|易地为官称|当官靠后台|马克思来电|小姐欲脱裤|难捉摸的官|两腿之间问|两面都有胶|董存瑞他妈|和小平散步|恩來只喝酒|对警车收费|红太祖本纪|政策来捣鬼|党的喉舌死|小姐搞三讲|翌年缩至余|小平的预言|谁闻民工苦|有理莫惹官|油价月月涨|傥不等于国|领导年年换|呼吸税之歌|股票造的孽|骗到党中央|全球征屁税|他妈是国税|玉姣嗔面责|钟央大手掌|回归大话版|邓爷爷访美|开发商之歌|恩来马上做|加班无偿化|教师奴隶化|上面老换人|流行大谎言|喂养叫填权|只整老百姓|年太不正常|共震迎奥运|暮蒼山蘭舟|福娃在哭泣|零八奥运艰|抗震最不强|养一窝专家|泄密开幕式|火炬传递版|当官者日志|十大怪现状|歪批闭幕式|一江并两河|中国怪现象|油价还得涨|小平不耐烦|美女李万姬|毛邓小故事|党在玩社会|人民在流泪|国家已沉睡|官员代表答|干部的口诀|小姐灌的浆|率领穷光蛋|做官样样好|布什逗小胡|爱党胜过妈|党就是咱妈|恋栈恋权心|谭豁子列传|望纽约内外|四清四不清|天上導彈亂|專榠眔聽器|语音传输器|美国迷你型|手机眔听卡|正宗ghb原液|售安乐死药|烟雾弹制作|闪光弹制作|地雷的制作|蚕蛊的制作|普米族制蛊|制蛊的方法|c6h3no22cl2naoh|弹制作方法|金屬彷真槍|玞槍雷明頳|索多玛120天|国足欢迎你|男足几多愁|让三鹿给废|五粮液横流|再论猪流感|北京搶口罩|中国疫情图|明星之情陷|工信部缓装|加菲猫过滤|街头门事件|自动挂代理|猎杀大熊猫|洗脚妹苹果|极品浏览器|三鹿结牛黄|奶中加入尿|喝毒奶长大|东市退奶粉|鲜非毒之奶|一鹿顶三鹿|把奶问青天|喝牛奶结石|三鹿欢迎你|洗衣粉油条|掀开黑心绵|减排好奶粉|三鹿灭鼠药|表演者三鹿|奥运油和米|平度毒面粉|催长大闸蟹|母亲王静梅|喝奶也结石|孱头式勇猛|北京话骂人|滑石粉致癌|毒食品汇总|毛发水酱油|毒美食排行|三鹿与国足|问题鸡来源|柑橘里有蛆|国产酒致癌|轶可像刘翔|过年吃人肉|孕妇被群殴|proxifier代理|上网过滤门|新疆的畜生|支援果敢族|针状物刺伤|針狀物刺傷|中国被瓜分|股民第一歌|股市欢迎你|牛市转回来|杨白劳出来|股民泪沾裳|满仓中石油|熊市无人问|抄股市大底|股市怎么了|牛市中亏损|股民砸股票|股市三熊组|跌停无极限|接任证监会|潘长江出来|平安惹的祸|狗屁证监会|股民受损失|问中国股市|散户套半年|股票顺口溜|笑新老散户|向股民抽血|解套的日子|股民陈永平|石油把大盘|牛熊十余秋|股市顺口溜|吾工行贤弟|竞价中石油|四大哑巴亏|天天哭亏损|股民在哀号|套牢全中国|股市告别书|股评在撤谎|股市新民谣|证监会会歌|股民已失眠|清海無上師|清海无上师|真心的报讯|李哄志邪说|噶玛巴千诺|木兰裆裤湿|性欲极强女|雪白的肥臀|射的她满脸|肉色连裤袜|从后面被干|遇日本巨棒|勾著肛閠壁|龙战士传说|舞铃笙三女|和廖化打赌|大明奇情录|三少宋智尧|西游记探秘|妻子的小洞|肉体性追缉|服务器租用|新学历证书|龙王采集器|汽车电子磅|快速专业办|手机萣莅器|学历证书班|ccjy2002hotmail|kuailetianya8cn|lixiangjy668com|一手质保答|wangzhuan518com|威特尔电子|wwwxinda2009com|123asd11qq22com|rmbbeiou51vqpcn|所售无军号|可过后付款|bjsj4any2000com|shanghai6868163|91regcomhtm8152|wwwshenhui150cn|460100071088445|ttdzj168hotmail|5xinghonghuicom|gdgz13800163com|www86suncitycom|办理免入学|快速领取科|wangtongsifucom|考前零收费|试过后付款|学历譪辦理|jth简称涛儿|让领导先走|强征建官员|豪华别墅群|政府太无耻|有警车做伥|死区是党权|犯人胡文海|中办警卫局|总参警卫局|中央警卫团|吴官海诗词|嫌疑人突死|日本你听着|旱日鱼肚白|红色御林军|痴汉是犯罪|周小玲尸油|征收呼吸税|小姐代表答|释放刘西峰|胡旭曦冤狱|港人士评邓|哨兵遭歹徒|豪华办公楼|原名吴玉阳|陈赓之三子|败类马洪亮|宝马女局长|再胡搞几年|李意珍女儿|国庆夜独语|村民林水仙|邓贵大烈士|批准邓贵大|周碧清子女|父亲刘仕华|作者萨达姆|韩伯平回忆|质问曹征平|永隆大酒店|女儿温如春|张培莉女士|玩具厂群殴|厂区内斗殴|罢车不加油|相助匿曰党|张乃明等人|旭日玩具厂|油价都调了|世界风云录|观音警世诗|巨贪刘兆久|郝金安冤案|司法造冤案|访民程英才|血是在广场|我想问总理|干部怕退休|工资有希望|真打真准备|黑匣子录音|巨毒化工厂|肮脏的台北|800斤大粪坑|不招镇坪工|群丑闹中华|伍尔维次法|痛斥保护伞|包围镇政府|木有甲板费|江家和三代|烧法国国旗|梅葆玖呼吁|火炬手被拘|夜晚姘妇家|李四光预测|无知的专家|麦当劳被砸|博客门事件|孙悟空入党|青蛙们献血|有地蹦之祸|局长吴忠凯|杨佳被关押|是草的责任|考试有黑幕|预测到英九|杨佳太息曰|局处级别墅|犯法太平常|给领导喂奶|老百姓遭罪|机关出上联|数百人围殴|一人杀六警|取悦王维工|控制人口奖|购奶粉以养|鄱阳报警者|弹铗恨无肉|百行教师贱|周迅的女儿|李蕊蕊被强|局长张为才|四次拨打110|阅兵提前看|瞎认定非法|威哉我汉军|远华案黑幕|阳朔一尺水|关证人禁闭|官员因涉黑|踢到中国脸|小日本疯了|日本的命根|完全照搬cnn|政府救楼市|翻窗上下班|最牛检察长|李培英贪贿|医院不差钱|大栅栏持刀|也谈范跑跑|范跑跑之歌|段义和指示|杨佳式说法|老板石建欧|杀人者杨佳|耶稣在中国|杨佳的博客|陈和受贿案|伤者刘秀起|发明阳谋后|红鱼党害的|中原海捕鱼|唐山原政协|中华被扭曲|沈婷的所谓|湘女嫁新疆|湘女戴庆媛|宋子文生平|党是反宇宙|二哥俞流青|辱骂周总理|所长翁钟文|局长梁继平|农民曾祥刚|抬抬女事件|学生彭启荣|古寺大丑闻|血滴食物里|弃少捕少杀|迂腐全荡走|公酒交私友|唐福珍死亡|预言了神五|制止张金星|赵颖艾未未|政府为可恶|川震豆腐渣|人士谢长发|李劲松律师|村民郭永志|寻找林昭墓|假学生程熙|城市最刻薄|DalaiLama自傳|《风波记》|爱国者同盟|北京劲展鹏|财政部绝密|癡漢是犯罪|迟来的救灾|持不同政见|川島和津實|达米宣教会|打坦克手册|大田高山茶|大中国论坛|大中华论坛|党内言事潮|抵押免担保|第三道路党|第五代红人|电信路藏民|东方红时空|东南西北论|反雷達測速|佛怀煽仇录|佛展千手法|服务器托管|高品质香烟|公民大联盟|共和国之怒|贯通两极法|国色天香网|国新办主任|海盗的悠闲|号码生成器|和解的智慧|红朝谎言录|红潮谎言录|红河谷论坛|洪水的志向|紅河谷論壇|胡哥看奥运|黃色小電影|会计电算化|鸡毛信文汇|疾病业债说|监狱管理局|教师资格证|解体的命运|精密减速器|九十三运动|颗粒包装机|昆仑女神功|劳动教养所|雷達測速器|历史篡改者|莲花艺术团|廉政大论坛|林昭纪念奖|陆空军地图|伦-理-电-影|伦_理_电_影|美国维吾尔|美女野球拳|美少女麻雀|夢幻麻將館|木制工艺品|皮质类固醇|青天白日旗|全范围教会|热站政论网|人类罪恶论|人宇特能功|日内瓦金融|入党申请书|三班仆人派|上_门_服_务|上海孤儿院|身份證生成|神通加持法|神州忏悔录|审查参赛者|生者和死者|手机接听器|谁是新中国|顺利通过考|四二五事件|讨伐中宣部|天父的儿女|外交与方略|为党不为国|维多利亚包|維多利亞包|窝囊的中国|我在黑暗中|乌云其木格|先天健康法|现代伊兰特|香港黄大仙|香港六和采|小泽玛莉亚|新观察论坛|新华通论坛|新中华战记|循环轮回论|雅思成绩单|亚太正悟网|盐雾试验箱|一万个贴子|医师资格证|优昙婆罗花|找政府评理|拯救紫坪铺|正邪大决战|正义党论坛|脂溢性皮炎|中国孤儿院|中南海斗争|中南海秘闻|中南海内斗|中南海内幕|重庆服装厂|重庆滤油机|重庆木门厂|啄木鸟公司|啄木鳥公司|莱仕德事件|台反文旁虫|北戴河会议|中国威胁论|新闻通气会|先烈的电电|现代靓妹仔|中国性搜网|震撼你的心|电表调控器|最强大阵容|幸运大玩家|游戏上分机|真情大反馈|办公室守则|斯皮尔博客|北京奥运会|“中国印”|《马前课》|《梅花诗》|《推背图》|《诸世纪》|哎吔女朋友|巴西预言家|变色的花朵|不文女学堂|摧花神龙教|第五代领导|定制消失笔|发电俏佳娃|福娃变乌龟|羔羊大律师|高低压三箭|古方化骨水|豪情夜生活|黑暗的社会|红楼春上春|哭泣的女人|苦难的中国|历史的伤口|聊斋花弄月|流感大变种|潜水股推荐|人鬼情未了|人肉叉烧包|人头豆腐汤|日本的言论|杀知识分子|畲祥林冤案|社保基金案|射鸡英雄传|神秘的死刑|失忆性行为|兽性新人类|死刑犯图片|唐朝豪放女|偷食女学生|偷试隔墙花|吸我一个吻|新潮女空姐|新倾国倾城|玉女白菊花|云雨生死恋|纸包梦惊魂|致命女人心|宝在甘肃修|才知道只生|俄罗斯轮盘|国一九五七|救度众生说|明镜出版社|娘两腿之间|女被人家搞|汽车走表器|青海无上师|群发广告机|四二六社论|万法归一功|卫星高频头|现在的政府|血染的风采|亚硝酸乙酯|亚硝酰乙氧|一通健康法|乙酰替硫脲|原一九五七|找政法委副|震惊一个民|中国复兴党|中国共和党|中国人民党|中国正义党|中南海黑幕|中正纪念歌|免费爽电影|桑拿一条龙|手机密码破|①千个粉锶|办假户口本|辦假户口本|保真最低价|富婆俱乐部|好看的小说|茂名人才网|茂名招聘网|网婚恋网站|我爱开心网|新富华机械|验证后付款|孕妇装夏装|找小V姐服WU|毛囊角化症|毛周角化症|《新京报》|川岛和津实|信息产业部|现在的社会|古月金帛涛|编成与基地|防区和任务|美女全脱图|越自卫反击|美女图片网|生男孩秘方|香港生孩子|毛发红糠疹|结节性痒疹|性功能障碍|安睡理疗枕|颈椎理疗枕|雀斑分解液|色素清软膏|张氏消痤丸|前胸后背疼|催泪喷射器|发帖人招聘|专业删贴吧|前核心病危|太上皇病危|小鹰号沉没|爱恋筱莉儿|爱笑的女孩|百美娇艳图|便携式小岛|沧海行云录|超级照相机|超极品教师|陈苦作品集|春風化雨錄|大唐群芳录|丹鼎艳修录|鋼珠槍销售|雷明頓銷售|手機截聽器|燃燒彈制作|射釘槍改裝|銷售干擾器|銷售麻黃素|迷失御花園|线上娱乐城|最新版假幣|手机卡复制|金属探测器|影音收发器|二异丙氨基|甲氨基甲基|碘乙酸乙酯|二甲基吡啶|21甲基丙基4|硫酸二甲酯|甲基狄戈辛|人造芥子油|硫代乙二醇|双环氧乙烷|对氨基氮苯|尿嘧啶芳芥|甲基化二硫|间位叶蝉散|增效百虫灵|甲基特乐酯|二硝叔丁酚|二硝另丁酚|联苯杀鼠奈|黄金探测器|美女一笑散|磅秤校正器|电表省电器|复制购物卡|门禁卡复制|复制门禁卡|遥控车牌架|高仿人民币|雷达波探测|硝化纤维素|斯蒂芬酸铅|巴力WILDCATC5|羟基环戊基|氢化可的松|41H3H嘧啶2酮|爸爸的新娘|娇宠水芙蓉|梦幻逆玉王|现代逍遥录|3S4715R16瑟文|金属手拉机|胡椒基甲基|胡椒基甲酮|手工猎刀专|野营生存刀|蝶舞大唐春|都市百美录|都市花缘梦|都市炼宝王|都市逍遥侠|短暂的春秋|恶魔养殖者|方寸光合集|高树三姐妹|公主复国记|攻占大小姐|共和国士兵|共和国之辉|寒天行侠传|豪门小老婆|何春传奇史|黑白二小猫|后宫海贼王|花香飘满衣|幻变小艳妻|混世小农民|极品器炼师|极品少年王|极品桃花运|捡到个天使|江山绝色榜|姐姐的房间|戒指也疯狂|金钱美人志|金庸与明报|京都的故事|静静的辽河|局长成长史|狂野艳逍遥|老婆爱上我|老婆投降吧|怜花百美缘|六朝清羽记|龙吟百美缘|冒牌大英雄|妹妹爱上我|蜜糖俏女佣|母爱的升华|泥人作品集|弄花香满衣|女人也疯狂|女神的诡计|陪睡的女人|骑士的血脉|潜龙作品集|秦守作品集|情戏浴美人|擎羊舞风云|全职业天才|三国百花吟|色麒麟修真|神医擒美录|圣女修道院|失落作品集|时尚女记者|田野的春天|推妻入友怀|退出党团队|王只准宠我|王曼媛之死|危险性学生|我和久美子|我是大魔鬼|武林启示录|舞月间情录|仙剑御香录|乡村野疯狂|相公好无理|逍遥小散仙|销魂百指令|销魂十指令|邪性碧血剑|新青年卡卡|新五朵金花|玄朱神人录|血指销魂迷|艳女销魂泪|一剑破天骄|战乱的星系|这就是绝杀|正气寻妇录|智取小姨子|重生之心动|醉笑卧乡野|金身改进版|少女发育图|输卵管疾病|性文学小说|仿真人民币|国家防火墙|神也是男人|美女伴我游|欲海天龙传|奥运外地人|成都服装厂|成都工作服|防辐射孕妇|杏林轩健康|卷帘车牌架|剧毒化学品|QQ賣45MM狗糧|新妻倩如|注册送现金|白金娱乐城|利澳现金网|华宝娱乐城|利博娱乐城|鸿运娱乐城|帝豪娱乐城|七乐娱乐城|新星娱乐城|大众娱乐城|海立方娱乐|广发娱乐城|中信娱乐城|大赢家赚钱|钻石娱乐城|供应香港ghb|我爱色色吧|色娃娃社区|婷婷五色天|性吧发布器|冯仰妍快播|圣母机器人|曼娜回忆录|门事件种子|同志女论坛|一生酒色网|校园群芳记|百色性导航|供应伞兵刀|美女捰聊网|天天干影院|嘻嘻色影院|色狗狗影院|哥哥插影院|叶倩彤全集|天天色导航|撸撸射影院|幼幼片下载|射雕黄蓉传|后宫群芳图|警花白燕妮|娃娃色社区|供应博伊刀|牌九娱乐城|鼎丰娱乐城|金龙娱乐城|销售awp配件|直销awp配件|订购awp配件|供应awp配件|提供awp配件|awp配件提供|awp配件销售|awp配件订购|awp配件直销|awp配件供应|航宇娱乐城|永利娱乐场|欧洲娱乐场|德晋娱乐城|世博娱乐城|专售迷晕药|永利博娱乐|天马娱乐城|银泰娱乐城|娃娃色导航|亿博娱乐城|北京找楼凤|色农夫影院|红宝石娱乐|皇星娱乐城|金彩娱乐城|真人二八杠|汇丰娱乐城|金宝博滚球|楼凤信息网|订购丛林刀|丛林刀转让|专卖求生刀|销售警用刀|丛林刀提供|色导航联盟|专卖礼花弹|买卖等级证|销售致癌药|供应致癌药|丛林刀专卖|专卖丛林刀|麻雷子销售|直销手拉狗|供应手拉狗|订购手拉狗|购买手拉狗|转让手拉狗|手拉狗直销|手拉狗供应|手拉狗提供|手拉狗购买|手拉狗订购|供应礼花弹|提供礼花弹|采购礼花弹|礼花弹销售|礼花弹购买|礼花弹直销|订购礼花弹|销售礼花弹|购买礼花弹|礼花弹订购|帮人复仇网|手拉狗销售|直销开他敏|购买致癌药|买卖可待因|提供丛林刀|供应丛林刀|转让丛林刀|丛林刀供应|购买气动狗|供应气动狗|提供气动狗|直销气动狗|转让气动狗|气动狗直销|气动狗供应|气动狗提供|气动狗购买|订购气动狗|气动狗订购|气动狗销售|提供安钠咖|安钠咖提供|专卖古可叶|杜冷丁专卖|皇冠注投网|迷晕药直销|迷晕药销售|迷晕药购买|迷晕药提供|长治筋购买|苍蝇粉提供|失忆粉订购|苍蝇粉购买|失忆粉供应|失忆粉直销|失忆粉购买|失忆粉提供|苍蝇粉供应|苍蝇粉订购|苍蝇粉直销|苍蝇粉销售|pcp新贵专卖|提供掌心雷|提供三棱刀|古柯碱提供|供应学生证|销售进口pcp|军官证销售|提供失意粉|销售失意粉|失意粉销售|失意粉供应|买卖苍蝇粉|供应钻石冰|直销礼花弹|冷钢刀直销|冷钢刀销售|汽木仓销售|销售手拉狗|销售汽木仓|销售pcp套件|摇头糖销售|办理警员证|安钠咖销售|听话水销售|销售黎城面|成品冰销售|可待因提供|可待因销售|网络棋牌室|安眠酮提供|订购high粉qq|转让战术刀|直销战术刀|供应战术刀|长治筋买卖|直销汽动狗|订购汽动狗|供应汽动狗|购买汽动狗|销售汽动狗|汽动狗销售|汽动狗直销|转让汽动狗|汽动狗订购|汽动狗供应|汽动狗转让|汽动狗购买|汽动狗提供|提供汽动狗|黄樟素订购|黄樟素供应|黄樟素提供|黄樟素销售|购买pcp套件|麦角胺专卖|提供钻石冰|高仿证供应|礼花弹供应|安钠咖供应|礼花弹提供|丛林刀销售|提供听话水|听话水订购|迷晕药供应|供应迷晕药|百乐门网站|夜来香社区|提供学生证|六级证办理|转让仿真awp|买卖仿真awp|提供仿真awp|直销仿真awp|杜冷丁供应|拍肩粉专卖|买卖pcp新贵|订购手拉awp|少女之心|青蓝双娇|折翼天使|涩女日记|倾世皇妃|六花禁爱|剩女不淑|月上重火|桃花小姐|樱花红破|美艳人妻|花侠浪魂|香艳杀劫|百毒神君|极品弃妇|老根嫩草|暴露指令|淡色满楼|尿道刑法|脂浪斗春|春染绣塌|浪史奇观|浓情秘史|僧尼孽海|桃红香暖|巫山蓝桥|如意君传|冤狐情史|宜春香质|春灯迷史|春透海棠|春闺秘史|痴婆子传|俺去也ａｖ|邻居美妻|月泊西眉|狼友阁论坛|娇艳都市|粉臀红痕|楼凤交流区|开他敏直销|六欲仙缘|逐欲红尘|浴火情潮|同性相吸|狮情化欲|月皎花娇|猎美艳录|穿越大唐|夕浥红尘|梦落繁花|我是王妃|人生如粥|多多益善|懒凤来仪|超级女警|怜镜传说|后宫学园|真情无奈|两个妈妈|甜蜜家庭|巧婢奇缘|凤霸天下|花容天下|艳说大唐|操破苍穹|倾城美人|青莲记事|芙蓉颜色|半路擒君|办理警官证|香国竞艳|情迷都市|惊天密典|幻梦唯心|神仙糖买卖|买卖神仙糖|可待因供应|供应赭曲毒|删除负面帖|美肉商人|艳兽都市|娱乐棋牌城|芳邻好土|客栈老板|岁月无声|代理增值票|流泪的狼|在幽微处|爱的灵感|兽心沸腾|北极之北|醉人倾离|好人难为|活色生香|亲爱的人|卿心依旧|三角关系|轻落天下|蓝颜有奕|末裔之殇|夜魅袭阳|超级官迷|超火司机|飘飘欲仙|村长后宫|浪漫官途|乡村教师|乱村佳人|销售听话水|听话水专卖|供应锡锋b51|专卖pcp新贵|大户家丑|山野情债|人面兽医|小村糙事|后宫男医|邪魔上身|剁饼子服务|pcp货到付款|大玩家娱乐|娱乐城棋牌|中握b50供应|销售中握b50|直销中握b50|订购中握b50|供应中握b50|提供中握b50|中握b50销售|中握b50直销|转让中握b50|中握b50订购|中握b50转让|中握b50提供|专卖古柯叶|专卖可待因|专卖喵喵药|专卖安纳咖|直销可待因|直销麦角胺|专卖ghb原液|直销ghb原液|直销安眠酮|订购可待因|订购安眠酮|订购安纳咖|订购古柯叶|订购ghb原液|供应碘化钠|掌心雷销售|掌心雷供应|砖石冰提供|麦角胺直销|喵喵药直销|喵喵药供应|专卖赛洛新|直销赛洛新|订购赛洛新|供应二恶英|销售丛林刀|三棱刀销售|三棱刀订购|订购三棱刀|龙凤配网站|乡野痞医|美妙人妇|肉体买家|警花出更|荒村野性|媚骨销魂|在线看黄片|色影视导航|金宝博188BET|三棱刀转让|销售长治筋|直销长治筋|订购长治筋|提供长治筋|长治筋销售|长治筋供应|长治筋直销|长治筋订购|长治筋提供|丛林刀直销|订购美沙酮|美沙酮直销|美沙酮订购|美沙酮提供|买卖钻石冰|提供芬太尼|提供芽子碱|提供埃托啡|订购阿桔片|提供丙吡兰|提供呋替啶|提供氢可酮|供应左啡诺|三棱刀供应|订购喵喵药|喵喵药订购|麦角胺订购|订购麦角胺|销售麦罗啡|销售哌替啶|销售赛洛新|销售蒂巴因|销售替力定|销售丙吡兰|销售阿桔片|销售卡西酮|销售已色胺|销售古柯叶|销售芽子碱|销售埃托啡|销售芬太尼|销售呋替啶|销售氢可酮|销售左啡诺|销售醋托啡|销售ghb原液|麦角胺提供|李宗瑞种子|办假学生证|摇头糖供应|同志电影网|汽木仓供应|气抢专卖网|喵喵药提供|直销安纳咖|直销钻石冰|直销液态冰|直销朝鲜冰|直销古柯碱|直销户外刀|在线摸奶秀|转让三棱刀|三夫妻开房|庐江门种子|乐博娱乐城|宝马娱乐城|买卖摇头糖|冠军娱乐城|真龙娱乐城|至尊娱乐城|膛线管专卖|销售膛线管|直销膛线管|转让膛线管|王民生艳照|三夫妻下载|三夫妻种子|逍遥丸供应|真钱棋牌室|现金娱乐城|警官证买卖|麦角胺供应|供应麦角胺|藏刀专卖网|销售安乐死|慢性毒神药|销售可待因|销售安纳咖|销售安眠酮|销售鼻吸剂|销售扒皮刀|销售羊骨刀|销售十字锁|提供美沙酮|金钱豹娱乐|和记娱乐城|百乐坊娱乐|直销执勤装|直销喵喵药|直销听话水|直销三棱刀|办假警官証|办理警官証|棋牌娱乐城|皇冠娱乐城|提供蜘蛛刀|蜘蛛刀提供|色娱乐导航|专卖麦角胺|提供麦角胺|直销警官证|直销美沙酮|销售麦角胺|销售喵喵药|色狐中文站|麦角胺销售|宾利娱乐城|龙博娱乐城|战神娱乐城|豪博娱乐城|日博娱乐城|古柯碱供应|军官证办理|提供tnt教程|杜冷丁买卖|专卖蜘蛛刀|美沙酮供应|永利现金网|警官证销售|专卖警用棍|专卖警官证|买卖警官证|购买警官证|户外刀专卖|开心色播网|警官证专卖|供应美沙酮|专卖美沙酮|自制tnt方法|自制tnt教程|蜘蛛刀专卖|办假警官证|第四色导航|草榴导航网|谷露影院网|日日色影院|提供喵喵药|最新人妻斩|自制烟雾弹|提供古柯碱|复仇一条龙|卖业主信息|拍肩粉销售|大色逼电影|未成年接客|购买木邦刀|供应斩马刀|提供平头刀|供应警官服|专卖锡锋b51|新款打死跌|国产手拉长|澤尻繪裡香|诚 信 办 证|提供液态冰|各式警常服|喵喵药合成|三利达专卖|电子干扰仪|门锁干扰仪|销售警官证|色大哥影院|色中阁影院|哥要插影院|植物化壆冰|五四式专卖|听话水电话|小妹和帅哥|供应三棱刀|色百合导航|冷兵器专卖|我爱小姨子|江南柔娘子|供应警官证|四房色播网|色色播电影|草榴社区网|色酷色影院|经营汽狙狗|警官证供应|大色咪影院|素人俱乐部|色色人体图|美女色导航|供应荷兰水|仓井空电影|空天使种子|空天使全集|欧美色漫图|一个色导肮|包你爽到射|唐刀专卖网|色悠悠成仁|一品色导航|色播电影网|原装汽狙狗|供应杜冷丁|商丘单车网|办理真凭文|真人娱乐城|插妹妹电影|溴化铯供应|学历证办理|八旗娱乐网|极品留学生|眯眯俱乐部|快活谷论坛|广西桑拿网|小姐电视台|狼族娱乐网|号码任意显|365在线投注|高消费名录|真钱扎金花|同性恋上门|欢乐谷导航|成娱色导航|亚洲贴图区|欧美转帖区|欧美贴图区|亚洲转帖区|办假房产证|办假结婚证|办理户口本|办理行驶证|办理军官证|供应黎城面|第四色快播|供应长治筋|咪咪色色网|任意显软件|供应任意显|寻找夜夜情|办假导游证|购买学历证|办理学生证|销售掌心雷|供应掌心雷|供應麥角酸|銷售黃牙簽|供應苯三酚|獵槍制造图|高价收腎脏|供应高压狗|銷售高压狗|提供高压狗|供應高压狗|销售高压狗|高价收腎源|賣假人民幣|找职業殺手|手机变号机|代购手機007|找職業殺手|帮人被欺负|警官证办理|律师证办理|办理律师证|办理国安证|我爱狐狸精|彈簧刀专卖|卖假身份證|卖真身份證|幫人被欺負|麥角酸配方|摇头糖合成|黃牙簽配方|麻黃素配方|神仙糖配方|搖頭糖配方|白牙簽配方|摇头糖配方|人妻俱乐部|香港三中三|平码三中三|麥角酸出货|卖仿真手槍|鉆石冰出货|黃牙簽出货|搖頭糖订购|白牙簽订购|麻黃素订购|神仙糖订购|黃牙簽订购|钻石冰订购|摇头糖订购|鉆石冰订购|麥角酸订购|QQ订购high粉|神仙糖出货|摇头糖出货|搖頭糖出货|白牙簽出货|麻黃素出货|仿真槍专卖|仿真槍到货|卖冰钻手机|卖冰钻电话|卖冰磚电话|摇头糖到货|麥角酸到货|神仙糖到货|搖頭糖到货|白牙簽到货|黃牙簽到货|麻黃素到货|QQ销售high粉|供应麻黃素|供应白牙簽|供应黃牙簽|供应鉆石冰|供应麥角酸|供应大冰磚|搖頭糖销售|鉆石冰销售|黃體酮销售|麥角酸销售|白牙簽销售|黃牙簽销售|麻黃素销售|供应神仙糖|供应摇头糖|神仙糖销售|三利达直销|三利达官网|三利达地址|手机qie听器|99suncity.net.cn|fancylook.com.cn|muxingtianxia.cn|2个倒数第一|官话4级教材|夺得8金以后|dang在玩社会|wuhanwuchang2008|kscm945紧缩版|h1n1殃及股市|离中国5公里|3穘誸惑方式|simin0809hotmail|zydbzj168hotmail|redhotcollection|shoujijiantingqi|triazolamtablets|代樯桃蛋l票|8142095112416105|7051589882818772|sunyong320722126|hvu7w7o2nk648o0w|bjyunqiwenhua163|lihaitaook163com|health588blogbus|3422011968060122|asf0022selfipnet|asf0023webhopnet|jiaoyukaoshiwcom|happy0535lifecom|chengrenjiqingcn|pragmaticenglish|xuesheng512gmail|wztj168ons365com|全国2nai大赛|牛b的萨达姆|无权指挥8341|四川1000万吨|家人4次报警|索尼VGN-TX57CN|舍生取义 庭|1992年5月13日|9500多套图纸|硫酸3乙基锡|2丁基氧化锡|乙酸3乙基锡|乙酸3甲基锡|6亚甲基亚胺|6二硝基苯酚|2硝基重氮酚|3苯基羟基锡|氧化2丁基锡|3乙基乙酸锡|醋酸3甲基锡|2甲基亚硝胺|4氨基氮杂苯|3亚乙基密胺|3宫6院7十2妃|色之戒4合院|2甲基丁酸酯|3硝酸纤维酯|双赢百2对单|红9真人娱乐|办理医师证q|g片免费下载|日本g片下载|免费g片下载|cp99配件直销|cp99配件销售|提供654k配件|654k配件专卖|供应654k配件|冷妹妹2影院|cp99配件专供|订购m4a1配件|订购cp99配件|提供cp99配件|cp99配件专卖|1000人斩下载|官员群P艳照|庐江群p种子|亚洲g片下载|制取petn方法|官员群P照片|庐江官员群P|三对夫妻群P|庐江群p照片|PENT制作过程|开心8娱乐城|2012中考答案|人美B嫩图文|真实的世界2|冰zhuan销售QQ|最新1000人斩|卖high粉手机|卖high粉电话|e夜情俱乐部|zh.wikipedia.org|反对08奥运会|4个2和一对王|09mba考题作废|流感80是甲流|不會蒸發的89|不会蒸发的89|你好韩国16集|jinshirekaospaces|stytzk1939hotmail|laohujigaoshoucom|34229195210195126|zhoukai7590163com|asf0025i|屠杀  sacheforg|baisui010foodqscn|baisui020foodqscn|baihuikejiwangcom|jiqingredian007cn|xintangrendianshi|京v019至京v028|57苦难的祭坛|witnessinghistory|68名顶尖武林|21日世界末日|30日搬出华杰|SevenYearsinTibet|《12个春秋》|39种有毒食品|南洋10大邪术|135－4406－6974|Nine commentaries|生成身份證qq|巴力WILD CAT C5|N亚硝基2甲胺|41H3H嘧啶二酮|4-氨基氮杂苯|2-甲基丁酸酯|2-环己烯-1-酮|丙3醇3硝酸酯|乙2醇2硝酸酯|温彻斯特1000X|34714151620庚醇|NG与乙醇配成|幸福蜜月30天|qq賣虎頭雙管|qq賣左輪手槍|qq賣仿真槍模|qq賣禿鷹汽槍|供应k3精炼粉|供应k2精炼粉|真人现金21点|龙虎万隆前42|假本科学历qq|苍井空av下载|在线真钱21点|3D打印CAD文件|狙3d设计图纸|qq供应芬太尼|假工程师证qq|度冷丁供应QQ|QQ专卖迷晕药|qq四级证制作|qq四级证办理|qq专卖四级证|专卖四级证qq|四级证办理qq|qq销售甲喹酮|qq气动狗转让|qq专卖汽木仓|购买拍肩粉qq|供应黄樟素qq|四级证专卖qq|供应哌甲酯qq|qq军官证制作|中握pcp专卖qq|qq专卖气动狗|手拉狗买卖qq|提供手拉狗qq|手拉狗转让qq|提供pcp新贵qq|供应pcp新贵qq|办理四级证qq|买卖气动狗qq|qq销售气动狗|销售气动狗qq|专卖气动狗qq|qq可待因专卖|qq可待因订购|订购致癌药qq|qq订购安钠咖|qq供应可待因|qq提供致癌药|qq销售安钠咖|qq销售折叠刀|qq提供折叠刀|qq直销折叠刀|qq订购折叠刀|qq供应折叠刀|qq直销安钠咖|qq供应安钠咖|买卖礼花弹qq|提供致癌药qq|直销丛林刀qq|qq办理四级证|黄樟油销售qq|黄樟油提供qq|黄樟油供应qq|黄樟油订购qq|黄樟油直销qq|qq购买喵喵药|qq销售开他敏|qq购买开他敏|qq订购开他敏|开他敏购买qq|供应开他敏qq|订购开他敏qq|购买开他敏qq|提供开他敏qq|购买喵喵药qq|qq订购迷晕药|qq直销迷晕药|qq购买迷晕药|qq提供迷晕药|qq销售迷晕药|订购迷晕药qq|直销迷晕药qq|迷晕药qq|提供迷晕药qq|qq购买苍蝇粉|qq直销苍蝇粉|qq订购苍蝇粉|qq提供苍蝇粉|qq订购失忆粉|qq直销失忆粉|qq销售失忆粉|qq购买失忆粉|qq提供失忆粉|购买失忆粉qq|购买长治筋qq|供应失忆粉qq|订购失忆粉qq|直销失忆粉qq|销售失忆粉qq|提供失忆粉qq|订购苍蝇粉qq|购买苍蝇粉qq|qq直销锡锋b51|qq提供户口本|qq销售昏睡药|qq供应安眠酮|失意粉提供qq|蜘蛛刀供应qq|供应失意粉qq|qq供应听话水|销售朝鲜冰qq|qq提供哌替啶|qq提供拍肩粉|销售军官证qq|喵喵药销售qq|钻石冰销售qq|销售折叠刀qq|销售迷晕药qq|qq销售本科证|销售成品冰qq|qq提供开他敏|qq供应开他敏|提供哌替啶qq|开他敏销售qq|销售开他敏qq|开他敏供应qq|qq提供可待因|提供古柯叶qq|供应古柯叶qq|qq供应古柯叶|qq提供古柯叶|供应拍肩粉qq|qq供应拍肩粉|qq提供膛线管|qq销售杜冷丁|qq订购杜冷丁|qq提供杜冷丁|提供汽木仓qq|订购钻石冰qq|提供苍蝇粉qq|qq订购军官证|办理学历证qq|qq销售苍蝇粉|qq供应苍蝇粉|提供pcp套件qq|安眠酮销售qq|李宗瑞bt种子|订购拍肩粉qq|供应安眠酮qq|拍肩粉提供qq|拍肩粉供应qq|销售拍肩粉qq|提供可待因qq|可待因专卖qq|安眠酮直销qq|销售杜冷丁qq|销售苍蝇粉qq|供应苍蝇粉qq|杜冷丁销售qq|订购杜冷丁qq|k7娱乐城开户|线上真钱21点|杜冷丁购买qq|杜冷丁直销qq|qq直销杜冷丁|qq购买杜冷丁|开他敏提供qq|开他敏订购qq|杜冷丁提供qq|李宗瑞全集bt|专卖度冷丁qq|二代证制作qq|qq直销拍肩粉|购买听话水qq|qq制作本科证|qq办理学历证|买卖杜冷丁qq|军官证制作qq|qq订购拍肩粉|qq销售拍肩粉|提供军官证qq|直销军官证qq|qq销售军官证|制作军官证qq|办理等级证qq|qq制作等级证|qq办理等级证|qq制作军官证|供应可待因qq|办理假学历qq|qq警官证制作|qq五氧化二钒|庐江不雅照bt|古桃色联系QQ|塑料冰供应qq|礼花弹qq供应|提供折叠刀QQ|提供折叠刀qq|日本av之旅|kk娱乐城网站|线上kk娱乐城|办假资格证qq|高价收骨髓QQ|美沙酮销售qq|供应士兵证qq|销售摇头糖QQ|销售美沙酮qq|QQ供应喵喵药|供应喵喵药qq|供应军官证qq|王民生宾馆6p|BB体育娱乐城|删除负面贴qq|网上真钱21点|蜘蛛刀买卖qq|供应蜘蛛刀qq|销售蜘蛛刀qq|供应喵喵药QQ|qq制作警官证|仿真手拉狗QQ|老年人数据QQ|网络专卖74式|网络专销85式|销售黃牙簽QQ|qq卖仿真槍模|qq卖虎頭獵槍|QQ销售大冰磚|QQ销售麥角酸|QQ销售鉆石冰|QQ销售黃牙簽|QQ订购小冰磚|QQ订购搖頭糖|QQ订购摇头糖|QQ销售麻黃素|QQ销售白牙簽|QQ销售搖頭糖|QQ订购黃牙簽|QQ订购麻黃素|QQ订购神仙糖|QQ订购钻石冰|QQ订购麥角酸|QQ订购鉆石冰|QQ订购大冰磚|QQ订购白牙簽|卖间苯三酚QQ|卖間苯三酚QQ|QQ供应小冰磚|QQ供应冰鉆石|QQ供应搖頭糖|QQ销售摇头糖|QQ销售神仙糖|QQ销售小冰磚|第十六次代表|践踏中国女性|三坊七巷火灾|瘟总再杆五年|帐篷就会脱销|希xi望wang之声|现代英雄传奇|手机截听器|手机窃听器|魔界活动转区|腾讯幸运之星|富人与农民工|广州火车春运|十大忽悠名言|当今六大谎言|国际足坛五大|扶不起的阿斗|想不到的黑幕|这年头就这样|公务员的工资|科技精英遇难|campofyourself.com|shipinwangzhan.com|网络推广软件|网络营销工具|语音广告群发|乐众国际娱乐|香港图源总汇|说艳门男女爽|桑拿房玩小姐|淄博的性产业|管理就是收费|当今三大扯蛋|地痞各霸一方|歌星不能入党|跟进村泪汪汪|喝酒基本靠贡|翻身改做小姐|捍卫党的纯洁|喜迎油价上涨|奶所以被弃也|中国弱智现象|汉语谐音艺术|丫就不会入党|可要向党交心|中学生售货员|关于毛的故事|政府忽悠百姓|北方尽出祸害|中国股市荒诞|自比秦皇张献|欢迎李朋同志|政黨玩弄社會|用英语问小平|做為裆的幹部|急裙中之所急|奴颜婢膝之陡|妈好象党中央|干部上任请吃|民工不得入内|酒桌殷勤献献|石油如此稀少|钱不贪权不沾|西方洪水泛滥|叩头处处破费|再不撤退破产|震前鸦雀无声|羞专家他先人|地球调成震动|挖掘基本靠手|李宁跑出画卷|５１２２２８|土匪都剿灭了|上级官位难保|父母下岗儿下|可以踢翻小贩|神舟发射后面|狗屁民族政策|渔肉百姓为荣|全都男盗女娼|祖英照顾民哥|长征路过这村|毛澤栂律硪煌|就算地球不转|十大缺德行业|公僿真是笨蛋|检查就是接待|割肚子要红包|公务奢华程度|费用就比军费|地方政府衭幹|结果人命万碎|国民一直挨饿|胡歌遭遇华仔|剿匪勇士来电|抽烟喝酒有益|独唱回家吃饭|钱换权能通天|非食用冰醋酸|售海樂神司|香港二类ghb水|美国菲力普窃|高锰酸钾和糖|提供彈道導彈|骗子公司大全|榦景緒絡公司|见过人吃人肉|下载代理软件|自动代理软件|震得耳赤舌甘|旭日厨行抢劫|过滤软件之争|科技频道被关|超级翻墙组合|最肮脏的十种|开平女中学生|传球基本靠瞅|三鹿经典广告|奶源收购问题|地沟油炒的菜|感谢河北三鹿|喂添加剂的猪|奶农说是奶牛|吮吸污染奶滴|生成一瓶三鹿|当残奥会冠军|大米里有石蜡|有话对三鹿说|石粉掺进面粉|肉瘤配做包子|油桶改当烤炉|广元蛆虫柑橘|林场追踪疫情|怕有孔雀石绿|三鹿最新广告|三鹿直奔黄泉|招募山寨足球|把玩中国足球|农场辅助工具|牛血兑洗衣粉|劣质蜜饯加工|肯德鸡的内幕|养蟹人不吃蟹|吃四川的橘子|三鹿代言明星|毒食品大曝光|蔡家城的毁灭|搜狐攻击腾讯|肯德基又出事|莫拉克扑闽浙|甲流死亡事件|不敢违背王鑫|光环下的五粮|375路公交车灵|异象频现中国|匿名代理软件|股票软件代理|巟大寃生禁食|领大学生禁食|见新疆人就打|广场上的鲜血|人民的求救信|果敢人民泣拜|果敢汉人开战|难民涌入中国|果敢战争起因|川渝教师罢教|新疆人在韶关|弹落入中国境|维护中缅边境|维族学生狂殴|教師羣課請願|六月股灾出来|股民不是人民|股民的一封信|石油套死出来|人寿股权去向|调查中国证监|股民手中套钱|股是越套越深|资金已被牵引|我站在中石油|中石化说亏损|股票倒数第一|股民挨个换套|中国平安讣告|中国石油腰斩|牛市一去不返|万科给中石油|中国石油悼文|跌股中国石油|给中石油的信|石油放心不下|被套渴望解套|中石油给万科|散户半年总结|股民答会割肉|今天不看大盘|股民埋在弖墟|股民埋在废墟|股市如此多娇|质问威视股份|检阅套牢股民|被套股民方阵|买啥啥套方队|天兵战争集团|三三九乘元功|无上师电视台|佛教音乐下载|格色拉的祈祷|dingxiangroomcomcn|少媎噴血誸惑|日本人妻网站|朋友妻大家骑|透明紧身白裤|黑袜美女狂舞|少媎亮絲誸惑|换卫生巾过程|全都插进去了|欧美美女套图|夫妻互换对搞|绷带石膏爱好|美女沙滩换衣|极品美女秘书|超爽午夜剧场|抚上仁大腿间|不能使劲捏奶|我的放荡生活|宇宙而章三光|夜生活俱乐部|重庆兼职妹妹|身份譪生成器|提供网络攻击|胶水特殊处理|网上快速诚信|网上快速办理|免试大学毕业|让你远离罚单|领导忽悠百姓|武汉诚诺电子|私家侦探用品|富丽毕业设计|xinxiwangjiaoyucom|包您通过考试|luotishipinzhancom|考试咨询联盟|一次性通呖荚|考试一手答案|sy178261150hotmail|专业老牌机构|362427196507100012|网站推广软件|北京办毕业譪|快速办理执业|华悦电子科技|先考试再付款|佳华安防设备|chouenlailafengnet|bloodisonthesquare|globalcompetitions|运通投资信贷|asf0021webhopnet83|secretchinacomnews|lyrz9888blog163com|tianyakefubokeecom|考前不收分文|jiguangdiaokejicom|办理雅思托福|权威一手答案|lijuhantiansinacom|欺负民用车辆|可悲的新千年|坚持杀萨达姆|删改侵华史实|丢解放军的脸|胡佳获诺贝尔|恶性殴斗案件|当街将人打死|当街殴打致死|人類滅亡年表|抬蒋不必抑毛|公务员李文娟|陇南民变现场|证监会不作为|检察官张金祥|谴责法国总统|需要p3c来巡逻|进京抓捕记者|取消农业户口|系列户改措施|取消农村户口|地方政府瞒报|检察官进京抓|取消户籍制度|克里斯汀案件|带编号的014733|刘志军罢免掉|十大丑陋人物|温相该不该哭|退伍军人堵路|内地十大提案|灵宝抗旱黑幕|豪华出殡队伍|预言人类灭亡|王斌余杀人案|民间监政组织|中國應當復仇|重庆哨兵被杀|评毛大力催生|狡猾的风水相|驻渝部队门岗|警官毁灭证据|江苏民众事件|市民疯抢口罩|世界末日頰言|医药代表李佳|小平料事如神|强行强拆为耻|歪风在通知里|好干部邓贵大|独壮玉娇之行|县长之女率众|懒官们的一天|北逃十字路口|共工与耶和华|藐视上级征府|皇叔街转拐处|永信出卖佛教|焚烧161次京沪|职工群体斗殴|葛丽英被拘留|五月瘟神下界|纳米比亚行贿|漢人持械出動|趁火打劫央视|纳税养了一群|掏空中国资源|京城特权车牌|新国会纵火案|黑煤窑包身工|开着公车撞人|泪水流在中国|酷刑对待中国|人民不敢说话|给总理支一招|总理才提协调|转业干部工资|世间难字当头|封媒体阻散步|未来八大劫难|500万买的警务|灌火油入酒瓶|通天语的声母|国家是一条狗|要农民掏腰包|声讨相关部门|传递是该暂停|幼儿活活被埋|群体道德缺失|京师万民送葬|企业收奶流程|一切都怪星矢|村主任李东洋|中南海保镖们|中国已经亡了|苦恼的中国人|执法将被拘留|无群众之呼声|佳纵火于闸北|田文华看守所|广东揭阳惊爆|占道拜访花圈|同伙车某父亲|殴打死大学生|云集上海法庭|金融派系倾轧|学生砍死教授|翌年不足万余|猥亵女童事件|报警者被击毙|教师致县政府|海南大学霍乱|新中国三十年|家人四次报警|还是党的国家|李东风的妻子|统计水分最多|公仆真是笨蛋|圈套给周总理|痛殴农用三轮|汪洋不被追责|藏着利益黑洞|中国就快消亡|坚持反修斗争|救楼市是救百|怒了国家的法|国家公器蒙羞|刘伟私建违章|广州酒吧暗访|丑陋的中国人|百姓严重缺粪|规范干部泡妞|广东幕僚无数|杨佳母亲现身|神州传播协会|嫌疑人李兴辉|做人不要太cnn|500人打砸警车|冲击株洲市府|粪青和老粪蛋|团长是张耀祠|开印钞机还债|安局长崔春晖|徐洁为其添丁|林场开始戒严|安徽姑娘李蕊|派出所就猝死|奴隶少女新娘|隐瞒征召女兵|送政府也不管|挖心割蛋抖肠|党是为了欺骗|批评政府帖子|护矿变成守灵|指导员王松善|局长被打致死|群众包围政府|背叛了陶斯咏|总理全家福照|李淑莲赤着脚|李淑莲被惊醒|怒香港女记者|小姐也有人格|女职工张美霞|出动300余名警|建堂筹备小组|緎權人士胡佳|预测了杨利伟|政委马群自恃|部队打砸酒店|我再派兵去砸|反围剿形势图|中國緎權人士|白领遇见黑领|曹操是韩国人|郭泉案辩护词|可恶的任志强|落网鼠会是谁|帖谴责奥巴马|爱滋村里的爱|北京市委黑幕|北京宣传部长|大熊猫被猎杀|大众真人真事|蛋白合成激素|党内内部资料|德国进口宝马|颠覆中国政权|东土耳其斯坦|东西南北论坛|对外高层人事|飞天舞蹈学校|粉碎林陈材料|告全体网民书|国家政府档案|国研新闻邮件|后勤资料手册|华语世界论坛|话在肉身显现|黃海暗殺事件|监狱里的斗争|旧金山总领馆|觉醒了的中国|军事训练大纲|军需物质保管|军需物资保管|酷睿2双核T7200|李伟信的笔供|两岸三地论坛|领导财产公示|領導財產公示|民间手工艺品|奶粉里都有毒|你说我说论坛|钳制网络言论|侵犯国外专利|人民之声论坛|瑞士金融大学|删除通话记录|沈昌人体科技|生命树的分叉|省委大门集合|圣灵重建教会|十七人事安排|十七位老部长|世界经济导报|双腿间的禁地|苏军情况汇编|特价国际机票|万维读者论坛|维吾尔信息社|卫星安装调试|我的鳥羽兄弟|下届总理人选|香港惠泽社群|新疆反恐纪实|新闻总署粗暴|血溅人民天堂|央视内部晚会|易趣在线购物|真空度测试仪|指点江山论坛|中国复兴论坛|中国社会论坛|中国问题论坛|中国真实内容|中国政坛新星|中华大地思考|中华人民正邪|中华真实报道|钟山风雨论坛|重庆婚纱摄影|重庆物业公司|自主择业军官|最高绝密新闻|中国劳工通讯|阿里布达年代|北京箱子包子|地下的先烈们|杭州地铁坍塌|乱弹人物揭晓|山西襄汾溃坝|不扣钮的女孩|挡不住的风情|镜花风月春降|镜花风月系列|满清禁宫秘史|满清十大酷刑|南洋第一邪降|南洋十大邪降|裴斗娜的体验|色降II-血玫瑰|十大丑陋语录|十大无耻发言|唐朝禁宫风云|我的演员女友|现代白蛇艳谈|友邦正通学历|中国死刑揭秘|中南海大决战|自制固体火箭|anies-registry.org|chinacitywater.org|gentle-essence.com|movequickly.com.cn|starcollege.com.cn|zhongxin-china.com|电话追杀系统|社会主义灭亡|私家侦探服务|卫星广播器材|无人性的政权|氧化二丁基锡|乙酸三甲基锡|乙酸三乙基锡|治疗红斑狼疮|中国过渡政府|中国网络审查|中南海恩仇录|红外线照相机|辦教师资格證|公司绝对保证|光学变色油墨|无弹窗小说网|找俄罗斯妞服|粉红大布娃娃|颠覆国家政权|代理各种执照|注册香港公司|珠海九龙医院|强效FM2销魂水|苗猪繁育基地|烟囱脱硫防腐|皮肤淀粉样变|女性生殖内分|立体技术培训|精气神元气袋|雀斑修复原液|腰椎间盘突出|男士养生会馆|美容美发培训|牙齿美容图片|牙齿美容流程|牙齿美容标准|精密牙齿美容|牙齿美容知识|重新牙齿美容|铸瓷牙齿美容|无痛牙齿美容|活髓牙齿美容|瓷冠固定义齿|精密附着义齿|舌侧牙齿矫正|耳鼓式通话器|防爆罐牵引车|厦门完美装饰|手机通话记录|悬赏兼职发帖|网上发帖赚钱|网络炒作培训|删除负面贴子|十大欠抽人物|阿樱的悄悄话|包括黑暗黎明|不道德的秘密|吃下一群妖男|传奇之狂风传|大公司的圣姑|虎頭獵槍销售|手機改號軟件|卖三箭牌气槍|小飞型号订购|製造緬古合成|雙管獵槍销售|買賣鷹牌獵槍|真钱棋牌游戏|显示任意号码|温彻斯特 1000X|軍品銷售公司|遥控卷帘车架|GX2005共享终端|三苯基羟基锡|左旋溶肉瘤素|烯丙基芥子油|三乙基乙酸锡|醋酸三甲基锡|绿藜芦生物碱|二甲基亚硝胺|枸橼酸芬太尼|三亚乙基密胺|毛地黄叶毒苷|可可粉苯丙胺|甲基安非他命|美女倒提金方|考验最新答案|卷帘型车牌架|考试专用设备|紫外灯验钞笔|六级阅读答案|门禁卡拷贝机|六级真题答案|六级英语答案|交通安全报警|交通安全导航|非电导爆系统|软件免费下载|242异酸甲苯酯|242硝基邻甲酚|342甲基氮杂苯|各类考生信息|纸币货到付款|过机版人民币|恶人成长日记|翻手男覆手女|功夫如此多娇|寒江作品合集|皇极生作品集|皇家娱乐指南|极品雅词文集|极品异能宅男|江山如此多娇|姐姐马上红润|金庸小说改编|绝代艳修之旅|浪荡皇帝秘史|灭主异世销魂|魔女天妖全集|飘在北京续篇|妻不如妾盛天|三国极品军师|色鬼师异界行|山麓百货商店|铁屋中的呐喊|脱落的小背心|往事未付红尘|我的极品老婆|我的教师生涯|我的警花老婆|我的美女大人|我的美女情劫|我的青年岁月|我身边的美女|乡村如此多娇|销魂倚天神雕|小邪女荡妖传|小昭养成计划|性海浪子系列|一个人的圣经|伊底帕斯之镜|异世法师传奇|越之极品色女|紫狂作品合集|总裁的小秘书|不过藏历新年|博客贴子删除|上海皓康汽车|腾讯最新漏洞|高假仿人民币|狡猾的风水师|大鸟鹰作品集|东莞洪升科技|苏州同济医院|正健纳米保健|獵槍子彈供應|手槍子彈供應|步槍子彈提供|獵槍子彈提供|步槍子彈供應|手槍子彈提供|步槍子彈銷售|獵槍子彈銷售|手槍子彈銷售|荷兰叶子供应|有偿帮人复仇|新注册送彩金|皇冠国际足球|战神国际娱乐|长乐坊娱乐城|如意坊娱乐城|删除帖子服务|删贴服务电话|网络删贴服务|号码显示软件|办英语等级证|英吉沙刀专卖|打水软件足球|多彩打水软件|现金网络棋牌|禁断介护快播|美空模特路遥|雅蠛蝶影视网|一起干妹妹网|人妻恥悦旅行|金发白虎女模|快播日本电影|售真实二代证|供应花纹钢刀|色狗中文娱乐|办理民办学历|户外露胸舔鲍|快播痴汉电车|小姐楼凤信息|我的美艳岳母|贝特斯娱乐城|现金娱乐投注|色片在线直播|销售一体直刀|订购一体直刀|供应组合棍刀|宝格丽娱乐城|高尔夫娱乐城|大家玩娱乐城|壹贰博娱乐城|走地皇娱乐城|金三角娱乐城|新普京娱乐城|替人帮忙复仇|找人帮忙复仇|哈瑞斯娱乐城|十六蒲娱乐城|黄金城娱乐城|红财神娱乐城|盈丰国际平台|牡丹国际娱乐|保健全套上门|帮人办事复仇|国产模特私拍|负面删除公司|免费美女luo聊|替人解气了仇|华侨人娱乐城|供应莫达非尼|利博国际娱乐|口工游戏下载|销售普斯普剂|提供替马西泮|销售替马西泮|客户资料专卖|业主数据专卖|业主资料专卖|凯斯网娱乐城|提供高空烟花|麦司卡林供应|武士长刀专卖|专卖慢性毒药|在线赌钱投注|淘宝阿普唑仑|代人复仇了事|楼凤免费信息|老人资料提供|老人资料买卖|销售阿普唑仑|供应高空烟花|提供阿普唑仑|专卖阿普唑仑|买卖慢性毒药|直销阿普唑仑|车主资源供应|安乐死药供应|安乐死药提供|色咪咪色导航|楼凤信息大全|订购阿普唑仑|供应业主数据|提供老人资料|供应老人资料|股民数据提供|车主资源提供|供应神奇蘑菇|提供神奇蘑菇|神奇蘑菇供应|神奇蘑菇专卖|线上现金娱乐|真钱棋牌网站|房主信息销售|女性数据供应|销售考生数据|品色论坛网址|供应安乐死药|真钱网上棋牌|提供半圆刮刀|车主资料提供|业主资料提供|提供绿皮瓦管|提供黄曲霉素|警用电棒提供|提供警用电棒|提供等级证书|车主信息提供|业主信息提供|删除负面评论|供应半自动pcp|三棱尖刺供应|供应高仿证书|销售业主资料|销售车主资源|业主信息销售|销售业主信息|销售警用电棒|业主数据供应|提供业主数据|物流数据销售|销售家长资料|业主数据销售|销售老人数据|警用标志销售|车主资源销售|销售业主资源|销售考生资源|考生资源销售|股民数据销售|销售车主档案|犯人数据销售|销售云南情蛊|顺丰数据销售|打猎专用工具|销售面单数据|缅甸果子销售|销售户主资料|销售半自动pcp|老人数据销售|供应美秃套件|供应专科学历|提供甲硝西泮|甲硝西泮供应|尼美西泮销售|尼美西泮提供|云南情蛊销售|甲硝西泮销售|甲硝西泮提供|日本幼幼合集|老人数据供应|皇冠在线代理|制作假户口本|转让三棱刮刀|购买手工猎刀|手工猎刀购买|手工猎刀提供|买卖手工猎刀|转让手工猎刀|订购三棱刮刀|三棱刮刀订购|购买三棱刮刀|三棱刮刀购买|提供三棱刮刀|三棱刮刀提供|三棱刮刀销售|直销三棱刮刀|买卖三棱刮刀|罂子粟壳订购|罂子粟壳送货|删除网上新闻|删除网上消息|供应膛线狗管|供应特警装备|真钱牌九游戏|业主资料销售|销售老人资料|警用装备供应|提供云南情蛊|慢性毒药直销|专卖三棱尖刺|供应三棱尖刺|办理假学生证|提供黎城辣面|艳照种子全套|提供波推服务|皇冠代理网址|皇冠备选网址|提供ghb水配方|ghb水配方供应|ghb水配方提供|删除负面博客|处理负面消息|爪刀手刺购买|爪刀手刺订购|爪刀手刺供应|供应爪刀手刺|购买爪刀手刺|提供爪刀手刺|爪刀手刺提供|销售爪刀手刺|爪刀手刺销售|订购爪刀手刺|转让爪刀手刺|买卖爪刀手刺|爪刀手刺代理|代理爪刀手刺|爪刀手刺直销|删除不利信息|提供高仿证书|办理学士学位|提供国考答案|在线赌钱游戏|提供专科学历|删除负面消息|直销美秃套件|转让美秃套件|买卖美秃套件|提供美秃套件|慕郎百花羞|小女花不弃|琉璃美人煞|艳欲十二宫|风月艳留香|枕上春残本|别有香残本|皇冠线上开户|提供帮人复仇|提供负面处理|提供负面删除|美女多多影院|娇美的舅妈|都市品香录|豪门浪荡史|迷乱的村庄|西北大通炕|驱妖女仆队|家庭欲火全|武林红杏传|说了不再爱|抱你在身边|弄儿的后宫|虚拟与现实|人妻送友骑|被女人玩弄|姑姑和妈妈|猎爱的男人|为情字煎熬|替人了事办人|替人办事复仇|代人办事复仇|碧玉鸳鸯扣|婚前120小时|删除负面影响|百乐彩全讯网|高价收养女孩|高价抱养婴儿|直销手工猎刀|妻诱之情趣|企业负面清理|负面贴文清理|诽谤信息清理|造谣信息清理|负面评价清理|诽谤帖子清理|负面评价清除|诽谤帖子清除|清除诽谤帖子|黎城辣面供应|供应黎城辣面|订购黎城辣面|直销黎城辣面|销售黎城辣面|黎城辣面销售|黎城辣面提供|王民生不雅照|私售销售气槍|cp99配件提供qq|楼房奇遇夜|专卖人造脸皮|网上现金开户|扬州棋牌热线|订购慢性毒药|从青春走过|不吃草的牛|天下父母心|月真的瘦了|微微的微笑|荒村大觉醒|神医的克星|淡淡柠檬草|你的二我懂|看上去很直|妻子的付出|十八岁猛汉|院长办公室|乱情马窝村|禁恋深陷迷|狂野逃离富|最佳抵债妻|妇产科医院|大院春意浓|失贞的都市|大叔我爱你|攀上女领导|供应印花税漂|三棱刮刀供应|半圆刮刀直销|提供半自动pcp|供应警用电棒|警用电棒供应|业主信息供应|车主信息供应|供应业主信息|供应等级证书|专卖甲硝西泮|直销甲硝西泮|直销间苯三酚|直销尼美西泮|订购间苯三酚|订购甲硝西泮|供应尼美西泮|供应甲硝西泮|有偿收养小孩|真钱娱乐平台|制作高仿证书|办理高仿证书|真钱电子游戏|现金电子游戏|足球真钱投注|艳照种子下载|奥克托今供应|二乙基汞供应|供应无水哌嗪|间苯三酚销售|销售间苯三酚|供五氧化二钒|庐江门不雅照|订购云南情蛊|网上真钱娱乐|供应四乙基锡|销售学生数据|销售学生资料|提供学生数据|提供学生资料|供应速递数据|销售速递数据|足球现金开户|供应学生数据|提供仿真面皮|提供易容面皮|供应儿童数据|车主名单销售|专卖业主名单|专卖车主资料|提供业主信息|监狱数据供应|供应小孩数据|供应学生资料|预订野营猎刀|买卖三棱尖刺|转让三棱尖刺|提供三棱尖刺|三棱尖刺提供|订购三棱尖刺|三棱尖刺订购|三棱尖刺直销|直销三棱尖刺|三棱尖刺买卖|供应三棱毒刺|专卖三棱毒刺|皇冠在线娱乐|维加斯娱乐场|皇冠备用网址|人妻四部曲|生命的奔流|杨野的禁脔|吸血三姐妹|校长办公室|泷泽罗拉种子|虚假负面删除|乐天堂现金网|下载日韩色片|888真人娱乐场|负面消息清除|负面消息清理|提供储户信息|提供考生信息|高仿学位办理|直销快开工具|快开工具销售|供应烟花爆竹|删除诽谤帖子|消除诽谤信息|真钱娱乐游戏|删除新闻评论|删除帖子信息|删除造谣信息|清除诽谤信息|供应丙二酸鉈|丙二酸鉈供应|地芬诺酯提供|地匹哌酮提供|提供已甲噻丁|提供依托利定|提供依托尼秦|订购甲地索啡|订购非诺啡烷|非诺啡烷订购|提供吗苯丁酯|已环利定提供|提供尼可待因|左美沙芬提供|美他佐辛提供|提供地美沙朵|提供二甲噻丁|户主资料供应|夜色撩人社区|销售苯哌利定|销售甲地索啡|销售诺美沙朵|销售诺匹哌酮|销售非诺啡烷|销售匹米诺定|销售丙哌利定|销售瑞芬太尼|销售舒芬太尼|销售醋氢可酮|销售三甲利定|销售右丙氧芬|销售尼可待因|销售福尔可定|销售已环利定|销售贝齐米特|销售阿法罗定|销售阿尼利定|销售可多克辛|销售右吗拉胺|销售地恩丙胺|销售二已噻丁|销售地芬诺辛|销售地美沙朵|销售二甲噻丁|销售吗苯丁酯|销售地芬诺酯|销售地匹哌酮|销售已甲噻丁|销售依托利定|销售依托尼秦|销售异美沙酮|销售左美沙芬|销售美他佐辛|销售阿芬太尼|销售醋美沙朵|二乙基汞销售|四氧化锇提供|提供四氧化锇|四氧化锇销售|销售四氧化锇|李宗瑞照片门|四氧化锇直销|直销四氧化锇|供应野营猎刀|直销安乐死药|慢性毒药专卖|李宗瑞完整版|供应慢性毒药|直销黄曲霉素|供应黄曲霉素|直销慢性毒药|供应绿皮瓦管|转让绿皮瓦管|供应绿瓦瓦管|销售绿皮瓦管|日韩色片地址|帮人解决纠纷|蝴蝶谷色色网|蝴蝶谷中文网|幼幼之家论坛|四氧化锇供应|直销硝甲西泮|直销警用肩章|直销警用棍刀|直销警用器材|直销警用钢叉|订购绿皮瓦管|直销绿皮瓦管|绿皮瓦管专卖|转让二手猎刀|庐江照片全集|警衔专卖电话|警衔销售电话|办理认证证书|办理认证学位|大东方娱乐城|战术直刀销售|专卖战术直刀|在线体育投注|手机现金下注|现金真人游戏|官员宾馆艳照|办理六级证书|供应战术直刀|尊尚会娱乐城|大赢家娱乐城|庐江高清艳照|庐江不县雅照|办理假残疾证|供应四氧化锇|车主名单供应|真钱棋牌导航|业主名单专卖|业主名单销售|供应警械装备|业主名单供应|网络皇家赌城|帮人寻仇出气|季戊四醇销售|季戊四醇合成|提供保险数据|学历证书买卖|买卖职称证书|销售有机溶剂|在线真人娱乐|删除诽谤信息|负面论坛删除|真钱骰宝娱乐|专业删除论坛|速删负面消息|在线赌钱网站|最新天然素人|股民名录销售|供应股民名录|股民名录供应|专卖股民名录|股民名录专卖|股民名录提供|提供股民名录|供应警用器材|提供女性数据|高价收养小孩|最新色站地址|提供业主名单|清扫负面消息|高偿收养婴儿|高偿收养儿童|专卖雅思答案|供应业主资料|线上现金下注|资格证书制作|职称证书制作|专卖警用装备|办理职称证书|论坛负面删除|博客负面删除|微博负面删除|直销警用装备|职业替人寻仇|论坛负面清除|提供讨债服务|专卖顺风面单|销售股民数据|老人数据提供|洪爷论坛地址|性吧最新网址|品色最新地址|网购数据销售|网购数据提供|网购数据供应|麦角新碱销售|提供打鸟木仓|同乐城娱乐城|乐天堂娱乐城|八大胜娱乐城|房主数据买卖|找人毁容电话|找人消灾电话|网络现金赌钱|了仇了事电话|自制爆竹电话|车主资料销售|警用肩章销售|供应军警装备|销售警用肩章|销售甲硝西泮|销售尼美西泮|永利高投注网|专业删除信息|删除信息服务|清除网上信息|警用棍刀销售|供应警用棍刀|销售警用棍刀|提供警用棍刀|在线真钱平台|车主资料供应|提供顺丰面单|提供中考答案|提供吡咯戊酮|槍支订购热线|硝甲西泮提供|硝甲西泮专卖|硝甲西泮销售|专卖硝甲西泮|提供硝甲西泮|手槍子彈专卖|2012答案预售QQ|手把手教做tnt|2012考生资料QQ|现金游戏平台|鸡婆服务信息|供应网购数据|销售网购数据|提供电购资料|供应电购资料|销售物流数据|供应物流数据|提供物流数据|销售电购资料|提供业主名录|百乐门娱乐城|网上现金游戏|最新车主资料|最新強檔合輯|开心四房色播|帮人复仇电话|供应警用装备|投注平台出租|学生家长名单|烟雾弹的配方|银行客户数据|拍拍用户数据|军官档案数据|帮人灭口电话|淘宝卖家数据|保险用户数据|社保用户数据|医保用户数据|警务文职档案|全国车主信息|全国富豪资料|外汇客户资料|期货客户资料|一手车主资料|一手车主信息|最纯的钻石冰|提供大斩马刀|打造单槽苗刀|专业定制马刀|转让中号棍刀|国模私拍套图|皇冠网址大全|供应老人数据|洋妞特服上门|限量版打死跌|销售高纯度冰|业主资料供应|提供老人数据|提供制毒工具|销售申通面单|提供申通面单|色站在线观看|盘锦办理証件|学位英语答案|北京警灯专卖|进口原装美秃|转让进口MP-661|供应犯人名录|土冰制作方法|办假军警官证|提供开户信息|销售信丰面单|最新业主信息|银行储户信息|各式警用常服|色片在线地址|办理建造师证|爱逼爱操影院|提供幼儿信息|小姐全套服务|提供老板资料|提供车主信息|提供车主电话|上门陪睡电话|军工配件组装|女子车内意外|出卖业主资料|供应女性数据|销售女性数据|供应户主资料|提供婴儿数据|警用电棒专卖|烟花爆竹专营|夫妻成长日记|我和我的女人|销售监狱数据|供应监狱数据|提供监狱数据|提供犯人数据|供应犯人数据|销售犯人数据|职业帮忙复仇|专业帮忙复仇|办理假资格证|办理假等级证|办理假军官证|高纯度冰订购|上门陪睡服务|黄金城娱乐场|二代锡纸工具|代删负面贴子|销售车主资料|销售车主名单|销售业主名单|供应车主资源|供应车主名单|供应业主名单|供应车主资料|提供股民数据|供應假人民幣|网络公关删贴|假人民幣銷售|銷售假人民幣|夜店兼职女郎|真钱龙虎游戏|供应股民数据|提供收藏数据|一手老人数据|小姐全套信息|办英语六级证|办律师执业证|手机变号平台|供应三棱刮刀|供应半圆刮刀|办理假户口办|烟花爆竹电话|同性恋俱乐部|性吧最新地址|大母牛综合网|金卡会员资料|设定任意号码|皇冠在线投注|网上真钱骰宝|迷失少女天堂|最新业主名录|全国车主资料|金领白领数据|真人二十一点|犯罪替人说情|同志拉拉服务|财务代理公司|财税有限公司|办理统考证书|小姐保健上门|第四色男人网|警用手电专卖|辦理本科文憑|制作假警官证|专业删贴服务|办理假户口本|办理假结婚证|办理假房产证|精品直刀系列|办理国外证书|在线现金娱乐|号码随意显示|提供胸推服务|仿真槍模专营|买卖雙管獵槍|专业帮人复仇|供应仿真槍模|供应虎頭獵槍|供应禿鷹汽槍|銷售虎頭獵槍|銷售仿真槍模|銷售禿鷹汽槍|提供禿鷹汽槍|提供虎頭獵槍|供應虎頭獵槍|提供仿真槍模|供應禿鷹汽槍|供應仿真槍模|销售仿真槍模|销售虎頭獵槍|销售禿鷹汽槍|定做人造脸皮|销售硅胶面皮|销售易容面皮|销售易容脸皮|销售仿真脸皮|销售高仿脸皮|销售人造脸皮|定做人造面皮|销售硅胶脸皮|销售人造面皮|专业幫人清债|专业幫人杀人|销售高仿面皮|指定号码改号|指定号码变号|任意号码变号|代购手機間諜|手機監聽軟件|潛伏者免費版|007間諜改良版|007間諜專業版|手機竊聽軟件|007间谍增强版|007间谍改良版|007间谍专业版|销售溫切斯特|供应溫切斯特|提供溫切斯特|溫切斯特到货|溫切斯特出货|溫切斯特订购|溫切斯特电话|找人辦事毀容|专业地下警隊|专业解決情敵|专业解决小三|专业解决情敌|专业地下警队|仿真气槍销售|制造特殊死亡|找人办事毁容|手工刀奴专卖|野營軍刀专卖|手工獵刀专卖|野營手斧专卖|M9-D80軍刀专卖|制式軍刀专卖|三棱軍刺专卖|办理假身份證|办理真身份證|代制假身份證|卖假冒身份證|卖真实身份證|专卖进口气槍|销售进口气槍|进口气槍销售|制造意外死亡|制造意外消失|帮人处理恩怨|替人处理恩怨|幫人處理恩怨|替人處理恩怨|专业找人辦事|间苯三酚配方|間苯三酚配方|冰鉆石石配方|冰磚送货上门|間苯三酚出货|間苯三酚订购|间苯三酚订购|间苯三酚出货|卖摇头糖手机|卖麻黃素手机|卖神仙糖手机|卖钻石冰手机|卖小冰磚手机|卖冰鉆石手机|卖搖頭糖手机|卖白牙簽手机|卖黃體酮手机|卖大冰磚手机|卖钻石冰电话|卖鉆石冰手机|卖摇头糖电话|卖神仙糖电话|卖麥角酸手机|卖黃牙簽手机|卖搖頭糖电话|卖冰鉆石电话|卖小冰磚电话|卖白牙簽电话|卖黃牙簽电话|卖麻黃素电话|卖麥角酸电话|卖鉆石冰电话|間苯三酚到货|间苯三酚到货|手槍子彈電話|訂購步槍子彈|電話獵槍子彈|訂購手槍子彈|電話步槍子彈|性吧春暖花开|供应間苯三酚|間苯三酚销售|供应间苯三酚|銷售间苯三酚|2005语录排行榜|大学生0604运动|chengrenliaotianshi|招呸k理國外文|1074套豪华住宅|PowertotheFalunGong|奥运爱国t恤衫|讲事实 要说法|九·十·三运动|动画-小羊肖恩|datasupermarket.com|green-furniture.com|hair-transpl.com.tw|selectthinktank.net|starstudying.com.cn|libertytimes.com.tw|N乙烯基氮丙环|2硝基邻甲酚钠|E世博线上娱乐|爱搞逼综合X网|ewin娱乐城开户|有卖慢性毒药q|办理c1驾驶本qq|fx季候风销售qq|cp100配件订购qq|李宗瑞275g下载|李宗瑞275g全套|俄罗斯654k提供|蒋大彬群P种子|庐江县艳照群P|petn的制作过程|提供美女luoliao|銀行卡復制器|溫切斯特1000Xqq|卖假1代身份證|卖1代假身份證|卖2代假身份證|卖假2代身份證|卖真2代身份證|卖真1代身份證|high粉送货上门|内地核试19万人|中石油48元之颠|picnicatjarlungriver|tearsthatflowinchina|04式第六代军牌|10种肮脏的职业|60周年策划袭击|毛伟人主政41年|中24刀后被炸飞|JucelinoNobregadaLuz|qq幸運用戶抽獎|加盖机密××××|12项吉尼斯排名|powerleveling888.com|st1-fx.com|urban-planning.co.jp|prada酷妃不好惹|snowxefd作品合集|24二异酸甲苯酯|N-乙烯基氮丙环|24二硝基邻甲酚|2丙炔1醇炔丙醇|34二甲基氮杂苯|庚烯2双羟甲基5|环3亚甲基4硝胺|环4亚甲基4硝胺|季戊4醇4硝酸酯|3硝基间苯2酚铅|GeekCook淘宝门市|qq賣健衛小口徑|制造车祸残废qq|负面报道删除qq|删除百度信息qq|转让99式伞兵刀|转让65式伞兵刀|仁科百华bt种子|有偿骨髓中介qq|黄曲毒霉素售qq|冲田杏梨bt种子|删除帖吧负面QQ|专业删除帖吧QQ|假资格证办理qq|qq假资格证制作|qq假资格证办理|供应高仿警帽QQ|删除天涯论坛qq|有偿收养男宝qq|有偿收养女宝qq|有偿收养男童QQ|银行客户资料qq|娱乐城注册送38|高仿学历qq办理|qq直销阻击步狗|qq专卖假军官证|专卖假军官证qq|制作假军官证qq|qq考生数据供应|qq业主名录供应|qq提供客户资料|QQ供应购物数据|QQ购物数据供应|qq婴儿数据专卖|负面贴吧清除qq|删除贴吧帖子qq|英语考级证书qq|办假营业执照qq|王梦溪108gb种子|qq老人资料供应|qq股民数据供应|qq业主资源供应|qq老人数据专卖|qq女性数据专卖|qq男性数据专卖|客户数据专卖qq|qq警用肩章供应|qq假户口本专卖|qq假户口本办理|qq阿普唑仑销售|老人数据专卖qq|女性数据专卖qq|男性数据专卖qq|老人资料供应qq|qq供应男性数据|qq快递数据供应|qq物流数据专卖|qq学生数据供应|供应考生数据qq|qq提供业主资料|qq供应考生资料|qq提供车主资料|办理留学学历qq|假行驶证办理qq|买卖阿普唑仑qq|qq销售客户资料|销售客户资料qq|供应阿普唑仑qq|女性数据提供qq|qq提供安乐死药|qq供应收藏数据|qq供应阿普唑仑|代人解决恩怨qq|删除负面微博qq|qq提供车主资源|负面消息处理qq|qq假行驶证办理|业主资源供应qq|QQ供应面单数据|婴儿数据专卖qq|考生数据供应qq|提供客户资料qq|业主名录供应qq|购物数据供应QQ|供应购物数据QQ|提供购物数据QQ|qq销售车主信息|删除负面报道qq|替人解决恩怨qq|专业解决恩怨qq|虚假信息快删qq|供应收藏数据QQ|办理学位学历qq|云南情蛊供应qq|云南情蛊直销qq|有偿抱养男婴qq|有偿抱养女婴qq|有偿抱养婴儿qq|qq订购警用电棒|提供车主资源qq|提供速递数据qq|提供户主资料qq|qq销售等级证书|警用电棒销售qq|提供面单数据qq|提供考生数据qq|物流数据供应qq|供应礼品数据qq|供应减肥数据qq|车主信息销售qq|销售房主数据qq|老板资料销售qq|qq销售快递面单|销售假资格证qq|销售购物数据qq|qq销售股民名录|销售警用标志qq|销售客户数据qq|半圆刮刀销售qq|销售警用器材qq|销售苯基甲酮qq|qq车主信息销售|销售进口迷烟qq|销售等级证书qq|qq提供尼美西泮|提供尼美西泮qq|qq提供快开工具|清理诽谤帖子qq|qq万能强开供应|提供假健康证qq|qq提供车主名单|删除网上信息qq|删除网上帖子qq|买安乐死药物qq|供应保险数据qq|销售国考答案qq|提供中握套件qq|高价收养婴儿qq|ghb水配方专卖qq|专卖尼美西泮qq|qq专卖尼美西泮|qq提供正规真票|提供正规真票qq|提供博士学历qq|警用电棒买卖qq|删除博客帖子qq|校园4p的记忆|提供业主资料qq|下载av影片地址|qq提供慢性毒药|qq销售慢性毒药|销售车主信息qq|半圆刮刀供应QQ|论坛帖子清理qq|供应麦司卡林qq|qq制作假军官证|有偿认养孤儿qq|av电影种子下载|解决私人恩怨QQ|庐江6P打包下载|日本最新av电影|提供论坛删贴QQ|三棱刮刀买卖QQ|删除负面评价QQ|销售麦司卡林qq|制造意外收费qq|安乐死药直销qq|办理专八证书QQ|提供安乐药物QQ|提供考生资料QQ|销售业主数据QQ|昆明6p快播照片|王民生6p门下载|清除企业负面qq|官员宾馆5P照片|专业删除新闻QQ|删除负面公司QQ|清除企业负面QQ|警用常服供应qq|销售股民名录qq|警用装备专卖qq|购买真实学历QQ|办理国外学位QQ|办理国外学历QQ|删除论坛帖子qq|删除百度快照QQ|制作假资格证qq|订购警用钱包QQ|小区业主信息QQ|小妹24小时服务|提供网购数据qq|防身警用电棒QQ|网络信息删除QQ|提供网购数据QQ|兼职白领上门QQ|供应车主信息QQ|销售少儿数据QQ|供应少儿数据QQ|提供少儿数据QQ|烟花送货上门QQ|爆竹送货上门QQ|flexispy官方网站|xwodi软件版下载|xwodi软件官方网|办理会计师证QQ|日本援助小姐QQ|金融客户资源QQ|小姐包吹包做QQ|提供硅胶面皮QQ|提供高仿面皮QQ|手槍子彈訂購qq|步槍子彈訂購qq|獵槍子彈訂購qq|QQ销售間苯三酚|QQ订购間苯三酚|卖鹽酸羥亞胺QQ|卖左旋麻黃素QQ|养殖户的求救书|学姐和我的故事|从圣地寻求财富|确保北京的水利|金鳞岂是池中物|卫星遭黑客攻击|急聘兼职打字员|千术赌术大揭秘|欲与霆锋试比高|阿娇不以陈卑鄙|龚宇拿著银白色|录像厅陪看小姐|两腿一夹几百块|宁波姑娘最放肆|悟净的层次最低|中山领导流浪汉|法官把法律搞乱|领导干部吃王八|警车不再乱鸣笛|抢劫警车是违法|小蜜像中国移动|不办案子只开会|人民还当牛做马|职务消费是个筐|复议就是找上级|电信我们是亏损|官商警匪多勾结|归牛花满俯卧撑|拉出小姐干一干|最绿的一届政府|政府也能设赌局|开会没有不隆重|愚弄百姓的旧招|工资好比眉毛短|中国最令人恶心|官员们加官进爵|领导小姐你先摸|辽东铁骑带笑意|罚得刁民见阎王|见到局长不收费|血泪工厂工人苦|政府签单给废了|教师阳光工资版|成语解释的纠正|党的宗旨成空谈|身边官员难见廉|公仆工资涨得快|自古未闻屎有税|小姐代表发个言|水晶棺里的遗容|天下恶官应丧魂|新衙只对百姓狂|太祖高皇帝本纪|废话议案排行榜|我抓台谍好助选|起步就能喝一斤|两个高院挺清闲|不讲真话身不明|外星人来看奥运|如此艰难的一年|开幕式方案曝光|没房没车谁嫁你|横批就是不会射|三千万人齐下岗|孙悟空之混沌道|美国是棵卷心菜|三国首脑去打猎|老胡说他不干了|怎么面对魏键行|中山頸導流浪漢|澤民頸導貪污犯|要不变成李莲英|思鍃思權思小蜜|思钱思权思小蜜|党和人民对立了|等不到翻译回来|大人吃奶是零食|喂奶群众都看见|机关干部四大傻|理直气壮正党风|少奇为了包装毛|白崇禧不仁不义|布什向胡哥借钱|领导的小蜜我们|小秘书左右领导|莫友比择更筒裤|畏首畏尾保乌纱|歌女也把将星扛|满城争说宋小娘|中国又卒于中国|陕西绵羊吃老人|牢头牢霸打死你|才打赢官司遭报|初级阶段过不完|工作肯定在法院|真主上帝试比高|让领导秘密舒服|三不反对执政党|唯独中国急推广|电珠丝发热引燃|沟里提炼食用油|在线代理服务器|中国男足有多愁|使猪的皮红毛亮|十本最有害的书|旗帜网已经被封|为绿坝找的台阶|黑客眼里的隐私|惊现甲骨文作文|不如三鹿结石好|把责任推给奶农|送礼就送三鹿奶|冲袋奶粉给党喝|男足指定专用奶|三聚加强版奶粉|帮毒奶事件解围|放多了点蛋白精|桔子出现寄生虫|许晴和老公内幕|河北书坛的怪相|宇独霸河北书坛|奶牛们产奶不当|这些食品你吃过|全聚德和中石油|脸红的国人智慧|敢吃中國大閘蟹|不要买太仓肉松|水果是人为造毒|中国足球弊端重|大清邮政局被拆|邮政局未批先拆|妛克勞核反應堆|奥克劳核反应堆|新疆天空现天眼|维族与汉族冲突|边痛斥假药危害|招揽大批新疆人|维族人两少一宽|记者无疆界组织|外交给缅甸压力|华人正遭受战火|罢教运动倡议书|套牢让人心憔悴|股民死绝都活该|为解套拼命补仓|股评惑众贾机灵|被套总比祸国强|到石化吃苦受累|连连下跌至跌停|向石化大哥问好|五指山股份给套|代问茅台老弟好|股民的血色悲歌|追涨买后变熊样|股改成了穷光蛋|深度套牢两年半|破了太保破石油|已是股市百丈冰|设赌与沪深二市|埋在证券大厅旁|股票未见油已荒|中石油家内豢养|中国股市的悲哀|踩在股民的头上|沉迷与股海之中|布达拉宫的回声|致敬仁波切上师|加伦河畔的野餐|仁波切上师西行|宇宙空间全黑暗|寂莫网上寻聊友|夫妻性教育电影|美女大秀钢管舞|舔屁沟我很激动|春情泛滥办公室|给成年人士观看|吞下带血卫生巾|地下金屬探測器|推广小助手发送|考试百分百通过|成绩单网上可查|一手操作带试卷|cuiaingyaoblogspotcom|快速办理专本科|包高分一次通过|龙虎保单预测仪|查看密码的软件|遥控车牌遮挡器|售胜利之日脚本|院校点招带军籍|tk787680010blog163com|那块石头上的字|公务员十大丑陋|周恩來清譽背後|人类灭亡时间表|国家道德的缺失|年代大饥荒纪实|吉首非法集资案|祖英有一张红卡|我国法律太软弱|低素质国民进城|谈特岗教师工资|中国现状之问答|法官黄松有被抓|出租车停运事件|党性污染者除外|司法不公有冤案|封堵省政府大门|玩具厂冲突事件|纸上国法靠不牢|爱国版吉祥三宝|解放军静得可怕|上骟省委党中央|收费只收燃油税|教师仍囊中羞涩|八佰伴劳资纠纷|取消农村户籍让|毛润之本是天上|酒后开警车肇事|别玩你的子民了|知譺分子劉曉波|中领馆前烧毛像|医药代表万建国|副大队长熊玉儿|再富不能富教育|钱造假新闻吓唬|日本的惊人秘密|燃油税如此开征|剑桥演讲被扔鞋|莫道穷乡出暴民|获知毛家祖先坟|在中国叫爱国者|银行是弱势群体|我引台资入国库|赼得嚴城暫住身|赢得严城暂住身|耀邦保护免获咎|贪出了科学依据|左某持刀杀人后|参观美军基地后|日軍對中國媎女|反恐演练的内幕|跨省抓发帖网民|中国是毛盾社会|鲁德成和喻东岳|遇难学生总名单|让领导同志先走|谴责无德海贝尔|美伊战争小学版|劫后天府泪纵横|自己去舔掉辣椒|八星级办公大楼|爆发的真正内幕|今年猪是疯狂的|美帝有施毒嫌疑|领头低俗是官衙|中国洗脚妹之歌|爱国文化衫运动|贴能惊动党中央|邓贵大最后的话|毛是最大的凶神|声明划清的化名|质问衡水组织部|石首某领导参股|做人不能太高也|七十年後的劫难|抹去印记度劫难|郑州当政非秦桧|港女寃歷乲不低|年收入赶超微软|摇其夫语猥亵事|绿坝子和谐天下|被绿坝识破动机|境外邑指挥煽动|魏元志双腿粉碎|同方子公司涉嫌|汽油降价不和谐|载人都是一二人|血流成河尸骨山|总理夫人做生意|再穷也得过圣诞|中央是谁的中央|家宝听了很烦恼|做中国人的孩子|中国请为我哭泣|金正日通电六方|百姓怕的医疗费|为了排名告网大|商业殖民统治者|背后的巨大丑闻|教师的友邦人士|汗颜的世界第一|苏黎世力挺宝钢|总参技术侦察部|大涨的真正原因|谴责中国红十字|便于言说的纪念|不见亚洲的门槛|开幕式惊现祼体|中国人太不争气|昧着良心的中国|为藏语打抱不平|愚昧的藏族学生|世人纷说杨家子|无耻的十大企业|买遗体顶包火化|哈尔滨糖果酒吧|特大搶劫殺人案|民众将警车掀翻|中国的奇怪现象|肖德松立即下课|车牌照为琼a10815|出警时带走吴俊|漂流者抛尸黄河|游锡堃可以信赖|把我当作了苹果|另眼看蒙古元朝|同僚会场被带走|无耻的公共知识|湾最不友善国家|思想界混乱得很|神话诠释的社会|神話詮釋的社會|神话会走向文学|经济以毁灭教育|衰败跟文化水准|工程交给小日本|我是九号来天国|建设时期大汗流|美国真正的可怕|美国的朝气宽容|学生是怎样被傻|朱閒基答记者问|联络不上圣胡安|接警员工作中玩|九州婴幼泪痕新|钦州港宅地侵权|最牛的村镇干部|杨佳姨妈王静荣|张锐因吸毒被捕|杨佳的青春档案|丘家厉一直上告|偶有奇侠怒涨冠|杨师群被学生告|潘建钗涉嫌行贿|落水者是公务员|毛伟人奇在哪里|所谓的政府部门|都不想回归中国|前谍报官李凤智|十年不屈的历程|北京车牌大检阅|造中国人民的反|中国第一女保镖|过河卒抱成一团|担忧的不是黑恶|派出所所长被打|明娟以车震生活|主播家中好丈夫|年月褃转化为力|总理夫人张培莉|彭启荣和蔡发春|没有就参军去吧|打工和尚是高薪|守望教会告会众|中美打响贸易战|捣蛋的教育部长|最好的职业公污|南方周末开天窗|教会是被政府查|领袖杨荣丽祷告|上告教委整死你|摊贩名叫刘建平|得意狂夫万虑抛|碾压阻挡的百姓|不知悔改的韩寒|两年逍遥官不问|兵最少交人民币|生征女兵的经历|打劫得到的政府|冉工继续开启民|外衣下被私有化|中国式引咎辞职|民刊在中国的意|中国盲动的民族|教学生如何爱国|寄生虫似的小镇|山是京城的厕所|普洛米修士受难|谷歌不能离开中|“震撼中”文件|北大三角地论坛|促红细胞生成素|蛋白合成类固醇|芳香型智悟气功|广东饶平钱东镇|褐铁矿选矿设备|后方想定的编写|华硕双核笔记本|跨世纪的良心犯|领导层预备人选|马来酸迷达唑仑|乔波室内滑雪馆|神州电影制片厂|省政府大门集合|寻找林昭的灵魂|中国社会进步党|中华养生益智功|中南海浓云密布|建立生活性补贴|风情万种野玫瑰|广源橘子长桔蛆|国防部长：曹操|教育部长：孔子|卫生部长：华佗|箱子包子做肉馅|杨白劳来电话问|杨子荣来电话问|高清晰未删节版|中国承认影视网|《圣经启示录》|奥运会徽车祸版|慈禧的秘密生活|滅門慘案之孽殺|南通儿童福利院|三反五反杀地主|三剑侠与飞机妹|生人勿近之邪花|私下肮脏的交易|我的女友是二嫂|无线影音发射器|性工作者十日谈|中国古代性戏观|中南海波澜起伏|中南海权力斗争|shijixinxiu.bokee.com|wow-powerleveling.org|第三次世界大战|网络推广扩散器|中华养生益智气|手机开机密码破|网络工程师答案|1 3 7 3 6 0 3 9 9 3 9|小说免费下载|高档二手车销售|七匹狼官方网站|周大福官方网站|周生生官方网站|前列腺无痛人流|深圳市格美空调|深圳伊卡鲁斯微|招聘兼职发帖员|大面积心肌梗死|热水器专业拆装|爱上花心公子哥|被缚的千面女王|冰人幽灵神无心|不要再来招惹我|出牆王妃拐相公|穿越之极品公主|穿越之纨绔少爷|大家东去狼涛尽|氣動鋼珠槍購買|買賣老虎頭獵槍|鹽酸羟亞胺合成|gps车辆监控系统|甲基苄基亚硝胺|462硝基邻甲苯酚|二硝基邻甲酚钠|甲基乙烯基甲酮|羟基马桑毒内酯|翻转汽车牌照架|六级真题及答案|智能车牌遮挡器|汽车翻转牌照架|邪掳极品小胖妞|公务员考生信息|天生我材必有用|都市狂龙爱无边|都市全异能大师|感慨美国不一样|广东亚运会事件|何处金屋可藏娇|狐王殿下别乱摸|花香袭人春月塘|坏坏老公别吃我|混迹在嘉庆初年|极品美女在身边|家有妖男小小受|艰难的接种经历|江山美人逐鹿记|姐姐嫁给我好吗|惊恐天使档案簿|克里斯蒂安战记|酷总裁的妖娆妻|怜花寻芳美人娇|恋上董事长夫人|凌家有女初为妾|刘亦菲母女逢春|美女妖怪别吃我|美女主持赖上我|梦想之天下女人|魔女天娇美人志|木里求丝称雄记|溺宠爱妾好难缠|女大学生宿舍506|日本女学生图片|倾城惑国女太监|人生何处不多情|三国牛人附身记|色女的无情无爱|色色母女闹古代|射雕之杨康列传|身侍六帝宠不衰|神仙都在兜里揣|谁看了她的屁屁|谁占了她的身体|桃花依旧笑春风|替身王妃不承欢|天煞孤星风云录|天生我才必有用|天使不眠的都市|同学的可爱女友|王者之佣兵天下|网游之无限连击|我的老婆是警花|我的梦想在燃烧|我和我妹妹雯雯|我家相公是情兽|仙人俗世生活录|现代版三妻四妾|现代情侠录泥男|乡下的爱情故事|小姐相公赖定你|艳修之天地不容|妖龙下蛋给你孵|一个领主的养成|一个太监闯内宫|异界之三宫六院|异世之封印人生|英雄难过美人关|月色下的上海滩|这些年哋那些事|至尊爱妃别太坏|重生之极品妖孽|重生之升官发财|重生之仕途风云|重生之逍遥至尊|重生之妖孽人生|总裁的二手新娘|总裁爹地酷妈咪|射进女儿的子宫|放荡中的灵与肉|修真之我是神偷|我的姐姐是美女|养个儿子做丈夫|宠妃本王要定你|恒亿佳免漆装饰|三国美人一锅煮|下岗工人长恨歌|战国杂家吕不韦|春暖花开电影网|利高在线娱乐城|皇冠备用投注网|技术等级证办理|办理假会计师证|供应卡片折叠刀|掘金者打水软件|金皇国际娱乐城|加勒比解禁中出|尼姑庵的男保安|麻仓优全集下载|我的妈妈李彤彤|魅惑波多野结衣|万能变号王下载|狠狠撸在线影院|爱爱很爽很销魂|女体拷问研究所|帝宝娱乐城开户|顶丰国际娱乐城|鼎龙国际娱乐城|澳门新世纪娱乐|丰禾国际娱乐城|永发国际娱乐城|千亿国际娱乐城|金界国际娱乐城|金钻国际娱乐城|铁杆国际娱乐城|天猫国际娱乐城|长江国际娱乐城|宝马会线上娱乐|华夏国际娱乐城|假日国际娱乐城|金牌娱乐城官网|娱乐城注册送金|澳门金沙娱乐城|鸿博网络娱乐城|麦角乙二胺订购|皇室国际娱乐城|麦角乙二胺供应|万豪国际娱乐城|金龙国际娱乐城|新葡京娱乐在线|皇冠线上娱乐场|大富豪国际娱乐|百乐门线上娱乐|供应甲基本丙胺|供应贝尔求生刀|大发真钱娱乐城|新时代娱乐城网|888真人在线游戏|豪门国际娱乐城|二代证制作软件|二代证生成软件|老年人数据供应|礼花弹厂家直销|提供尼蒙尔克素|直销尼蒙尔克素|专卖尼蒙尔克素|供应氨基氮杂苯|销售听话喷雾水|听话喷雾水销售|买卖高仿等级证|收藏品数据提供|老年人资料提供|专卖高仿四级证|供应老年人数据|保健品数据专卖|易发国际现金网|订购拍肩听话粉|拍肩听话粉买卖|拍肩听话粉专卖|销售拍肩听话粉|云南情蛊药供应|云南情蛊药订购|云南情蛊药直销|云南情蛊药销售|云南情蛊药购买|云南情蛊药提供|色站广告位销售|保健品数据供应|收藏品数据直销|收藏品数据供应|提供保健品数据|销售收藏品数据|销售老年人资料|老年人资料销售|销售从业资格证|销售保险人数据|销售pcp新贵配件|pcp新贵配件销售|供应研究生学历|制作高仿户口本|提供假体检证明|买卖安乐死药物|办理高仿户口本|甲基笨丙胺销售|提供安乐死毒药|供应野外求生刀|销售高仿警官证|销售高仿军官证|办理高仿军官证|办理英语等级证|制作高仿军官证|有偿收养女宝宝|高价收养男婴儿|办理仿真户口本|提供研究生学历|楼凤上门剁饼子|拍肩粉货到付款|拍肩粉送货上门|pcp新贵配件直销|pcp新贵配件预定|直销pcp新贵配件|宋朝完美生活|庶女攻略完结|女总裁爱上我|欢喜浪史在线|都市风月奇谭|办公室的沙发|鹿鼎记性事传|被遗忘的宝贝|穿越没有理由|清宫情空净空|穿越与反穿越|绣榻野史全集|订购pcp新贵配件|百乐门线上游戏|办理职业资格证|性吧地址发布器|李宗瑞全集种子|李宗瑞照片种子|四氢吡喃酮提供|女医生风情史|像大树一样高|越轨利欲熏心|慈云寺男保安|女领导男秘书|闯荡火影世界|意恋征服系列|月荷这个女人|女监狱男管教|罪恶交易买妻|极品乡村生活|太子娱乐城网址|太子娱乐城开户|太子娱乐城官网|姚记娱乐城官网|姚记娱乐城网站|金冠娱乐城网站|金冠娱乐城官网|空巢留守村妇|优博在线娱乐城|销售仿真金属狗|直销仿真金属狗|李宗瑞全集下载|李宗瑞照片下载|李宗瑞全套照片|李宗瑞全套种子|迪卡昏迷粉订购|订购迪卡昏迷粉|迪卡昏迷粉提供|提供迪卡昏迷粉|相思红娘剂直销|直销迪卡昏迷粉|直销相思红娘剂|迪卡昏迷粉供应|供应相思红娘剂|供应迪卡昏迷粉|相思红娘剂供应|迪卡昏迷粉销售|销售相思红娘剂|销售迪卡昏迷粉|相思红娘剂销售|订购相思红娘剂|提供相思红娘剂|相思红娘剂提供|相思红娘剂订购|制作假学历证书|供应四硝基甲烷|四氢吡喃酮供应|供应甲氧麻黄酮|云鼎娱乐城网站|无政府食谱资源|无政府主义食谱|皇冠官方投注网|日本黄片电影网|办理高仿资格证|供应四氧化二氮|订购二已基色胺|提供倍他美罗定|提供二氢埃托啡|日本黄片大合集|销售去甲左啡诺|销售醋氢可待因|销售双氢可待因|销售去甲可待因|销售二已基色胺|销售阿法美沙朵|销售倍醋美沙朵|销售倍他美沙朵|销售倍他美罗定|销售二氢埃托啡|供应居民户口本|五氧化二钒提供|五氧化二钒销售|销售五氧化二钒|李宗瑞不雅图片|李宗瑞照片全集|五氧化二钒直销|直销五氧化二钒|利盈在线娱乐城|提供安乐死药物|网上真钱炸金花|李宗瑞迅雷种子|五氧化二钒供应|庐江县官不雅照|昆明夫妻聚会照|昆明三夫妻艳照|庐江何婷婷艳照|专卖俄罗斯MP654k|供应俄罗斯MP654k|销售俄罗斯MP654k|俄罗斯MP654k专卖|直销俄罗斯MP654k|直销特警作战服|特警作战服直销|特警作战服预订|特警作战服供应|供应特警作战服|特警作战服销售|销售特警作战服|特警作战服专卖|专卖特警作战服|188金宝博娱乐城|夫妻不雅照种子|至尊国际娱乐城|钻石国际娱乐城|金都国际娱乐城|百胜百旺娱乐城|乐透世界娱乐城|五湖四海娱乐城|云鼎国际娱乐城|庐江官员不雅照|三夫妻高清艳照|供应五氧化二钒|色站广告位出租|娱乐城现金下注|娱乐城线上下注|从业资格证制作|办理真学历证书|联通vip数据名录|移动vip数据名录|办理职业职称证|办理从业资格证|简易汽油弹制作|甲基乙基酮销售|易发国际娱乐城|环球国际娱乐城|伟德亚洲娱乐城|买卖仿真警官证|皇冠国际娱乐城|提供EMS快递数据|性吧网址发布器|皇冠最新投注网|提供新生儿数据|皇冠国际现金网|供应EMS客户资料|提供EMS客户资料|销售EMS客户资料|供应EMS客户数据|提供EMS客户数据|销售EMS客户数据|销售宅急送数据|供应宅急送数据|提供宅急送数据|真人网上娱乐城|警用電棍電棒甩|人人网用户数据|提供收藏品数据|妖娆魅惑抛美胸|朋友网用户数据|提供化学合成冰|各款精美日本刀|提供警用报警器|洋妞上宾馆陪服|邯郸办假身份証|中级会计师答案|研究生考生答案|喵喵药送货上门|提供收藏品面单|供应收藏品面单|销售收藏品面单|仿真器模具销售|飞蛾扑火爱上你|风中飞舞的血滴|屁屁熊和花花鸡|大方的嫂子素玫|穿越倚天建后宫|金麟岂是池中物|夜色下的上海滩|高纯度钻石订购|苍井空种子下载|南京特洛伊科技|销售全球通名单|供应全球通名单|销售老板通讯录|销售法人通讯录|供应法人通讯录|供应老板通讯录|专业警官证制作|警用电击棒销售|最新版假人民幣|网上真人娱乐场|皇城国际娱乐城|显示任意手机号|帝国幼幼集团军|供应喵喵药电话|专卖高压电击棒|高压电棒专卖网|办假英语六级证|办假英语四级证|办理各类资格证|办理各类操作证|麦角乙二胺销售|俊龙百美缘下载|供應手機變號機|麻黃素合成方法|提供冰鉆石教程|供应健衛小口徑|左旋麻黃素供应|銷售健衛小口徑|提供健衛小口徑|供應健衛小口徑|销售健衛小口徑|帮任意号码改号|手機碟中諜軟件|手机007间谍软件|手机碟中谍软件|专业特種兵殺手|专业地下保安隊|专业地下保安队|贝尔求生刀专卖|海军突击刀专卖|战术突击刀专卖|軍用潛水刀专卖|貝爾求生刀专卖|鷹飛淩軍刀专卖|美國SOG軍刀专卖|蘭博求生刀专卖|办理假冒身份證|代制假冒身份證|卖二代假身份證|卖壹代假身份證|卖假一代身份證|卖假二代身份證|卖一代假身份證|卖假壹代身份證|卖真一代身份證|卖真壹代身份證|卖真二代身份證|专业退伍兵殺手|麥角酸送货上门|鹽酸羥亞胺配方|摇头糖送货上门|搖頭糖送货上门|麻黃素送货上门|鹽酸羥亞胺出货|鹽酸羥亞胺订购|卖间苯三酚手机|卖間苯三酚手机|卖间苯三酚电话|卖間苯三酚电话|黃牙簽送货上门|白牙簽送货上门|鹽酸羥亞胺到货|神仙糖送货上门|供应鹽酸羥亞胺|供应左旋麻黃素|鹽酸羥亞胺销售|銷售黃綠牙籤毒|供应四氢吡喃酮|销售四氢吡喃酮|買賣四氢吡喃酮|销售一元人民币|jsfxzp88wy32idcwindnet|improvealexarankingcom|wangtongchuanqisifucom|8341涉及天机运程|最牛b的女预言家|更加动荡的2009年|注定动荡的2008年|271人拿不动5420万|CIBS海外移民投资|锘挎瘺娉戒笢1234|2010诺贝尔和平奖|硝基3氮杂环已烷|iRadioPOPInternetRadio|修罗总裁a级恋人|仿we51黑龙加长版|E起发国纪娱乐城|庐江何婷婷群p照|王民生宾馆玩群P|庐江县委群p照片|2012最新股民数据|手機X臥底改良版|蘭博3號軍刀专卖|办理2代假身份證|办理1代假身份證|办理假1代身份證|办理假2代身份證|办理真2代身份證|代制假1代身份證|代制假2代身份證|办理真1代身份證|卖假冒1代身份證|卖假冒2代身份證|卖2代精仿身份證|卖真实1代身份證|卖真实2代身份證|卖2代個人身份證|卖2代假冒身份證|卖1代假冒身份證|卖個人1代身份證|卖個人2代身份證|卖1代個人身份證|卖1代高仿身份證|卖2代高仿身份證|卖个人1代身份證|卖个人2代身份證|卖1代精仿身份證|退\\出\\党\\团\\队|全球唯一綄Σ荒苋|d0970714757783e6cf17b26|mingtianhuigenghao123ss|负责中南海的12层|伤透了12亿人的心|21世纪中国基金会|www.landmarklondon.mobi|27军长砸洗浴中心|⒖⒋⒉⒋⒉⒋⒊00|7月4日0时40分去世|pk小三后妈少女血|H.M.X三硝酸纤维酯|S2乙基磺酰基乙基|qq訂購鹽酸羥亞胺|办计算机二级证qq|办理高仿硕士证qq|高仿结婚证办理qq|qq高仿结婚证办理|88娱乐城天上人间|qq高仿军官证制作|行驶证专业制作qq|办理保真学历证QQ|qq专卖高仿军官证|四级成绩单制作qq|四级成绩单办理qq|qq四级成绩单办理|qq四级成绩单制作|QQ提供收藏品资料|QQ保健品数据销售|假工程师资格证qq|qq提供慢性致癌药|qq供应安乐死毒药|qq保健品资源提供|qq提供收藏品资源|qq供应保健品资源|qq收藏品面单供应|qq老年人数据提供|qq提供高仿军官证|qq供应高仿警官证|qq提供删除论坛帖|安乐死药物供应qq|安乐死药物订购qq|购买五氧化二钒qq|订购安乐死药物qq|提供删除论坛帖qq|专卖安乐死药物qq|订购老年人资料qq|老年人数据提供qq|qq供应老年人资料|qq提供老年人资料|qq订购老年人资料|办理高仿四级证qq|qq销售尼蒙尔克素|qq供应尼蒙尔克素|qq订购尼蒙尔克素|qq提供老年人数据|制作高仿等级证qq|供应老年人资料qq|高仿户口本制作qq|保健品资源提供qq|提供收藏品资源qq|供应保健品资源qq|收藏品面单供应QQ|qq办理高仿四级证|qq高仿户口本制作|qq制作高仿四级证|保健品资料提供QQ|保健品资料供应QQ|QQ供应收藏品数据|QQ供应保健品数据|供应保健品数据qq|提供收藏品资料QQ|保健品数据直销QQ|保健品数据销售QQ|供应收藏品数据qq|qq购买云南情蛊药|qq直销云南情蛊药|qq供应云南情蛊药|供应云南情蛊药qq|直销云南情蛊药qq|购买云南情蛊药qq|有偿抱养男宝宝qq|有偿抱养女宝宝qq|宅急送数据供应qq|销售男女性数据qq|销售老年人数据qq|qq销售老年人数据|qq销售相思红娘粉|销售毕业生简历qq|qq专卖安乐死药物|qq提供高仿资格证|提供十字锁工具qq|qq制作高仿资格证|有偿收养男宝宝qq|高价收养女婴儿qq|安乐死药物购买qq|qq提供假等级证书|提供假等级证书qq|职业资格证办理qq|专卖职业资格证qq|职业资格证专卖qq|qq专卖职业资格证|钻石冰货到付款qq|k7娱乐城免费开户|办理高仿本科证qq|办理假学历证书qq|qq销售假学历证书|办理假学历证书QQ|办理高仿等级证qq|qq办理假学历证书|安徽庐江官员6p照|王民生6P高清套图|庐江县委不雅照bt|庐江官员6p事件照|手机号码随意改QQ|专业收藏品数据QQ|网络指定销售88式|网络销售毛瑟M1932|溫切斯特1000X电话|溫切斯特1000X出货|QQ销售鹽酸羥亞胺|QQ销售左旋麻黃素|QQ订购左旋麻黃素|QQ订购鹽酸羥亞胺|历史上的真实故事|背着父亲偷搞母亲|被婶子当鸭子的我|浩方对站平台活动|中国十大悲情语句|广安第二人民医院|江西田园置业集团|出国留学必备物品|急聘兼职文字录入|这一代到底惹谁了|迎接检查让人崩溃|宁可家破不可国亡|黑不过中国证监会|中国人彪悍的一天|领导做蠢事叫轶事|肉体岂能拿来慷慨|毛太阳惊世豪言录|瞎改委抢劫司司长|拔擢儿戏自毁长城|卖命的不如跳舞的|小平真是一代伟人|小姐说俺是第一次|党政干部十大特征|预报了余震而不震|中国的十大不明白|一年兩會又三代表|一代伟人料事如神|中国社会一切向钱|引无数干部竞折腰|总理快步走进会场|容贵国男性的性器|东看全国都是穷人|条型管包装杀猪粉|手把手教你做炸彈|男足缩头乌龟为耻|中国队要是能出线|曼德尔森已经结石|国有完全垄断企业|非法集资血本无归|西门帮老大郑玉龙|油条里掺入洗衣粉|讲师遭到诬陷造谣|自動尋找海外代理|强制预装监控软件|加密代理上网软件|自行车比汽车污染|你哥在国家队踢球|哥哥在国家队踢球|奶业工人的实心话|产品不得用于考场|三鹿能造一川碎石|用酱油和醋勾兑的|注射糖精与色素水|获取国外dns服务器|封堵各种在线游戏|美女小偷被抓现场|用工业柠檬酸浸泡|蟹產卵時餵避孕藥|蟹产卵时喂避孕药|蟹饲养的激素传闻|收奶员的真情告白|收购果农手里染病|赌自己的球队输球|取缔四大名著出版|行唐县出租车罢运|汉人反扑持械上街|罢教运动规模扩大|我是菜市我是菜市|沉痛悼念中国石油|泡沫化的股票发行|套住大盘改变季节|散户们绝望的歌唱|追高被套牢的前辈|发改委的内部谈话|被曾经的谎言蒙蔽|虔心忆念遥呼之歌|功的第一个字是法|野兽眷恋的百合香|北美华人夜色导航|红楼梦之绮梦仙缘|猎鹰怀里的水芙蓉|《爱上你的温柔》|国家正规期刊征稿|通话清单记录查询|纽扣无线影音通讯|执业药师一次通过|专业办理英语四六|保证高分通过考试|考百分百一次通过|专业制作国内外文|帮你轻松通过考试|高邦科技字样礼品|一次高分通过考试|专业辦理各类证书|专业办理各类证书|六八四一九九八三|手机通话清单查询|民办大学真实学历|现代人的五大悲哀|机关人员真没素质|神舟是花瓶的洋奴|六提辖打死林衙内|教育投资不及非洲|教师的工资不公平|中国最神秘的部门|农村的干部最能贪|救房市的集体官员|教师面临生存问题|拿到一部车的工资|摧毁日本陆海空军|中国打日本是必须|有关部门也是人妖|进京抓央视女记者|槍斃后屍體的處理|张祖桦被短暂拘留|江苏出现重大疫情|功劳不亚于杨利伟|派出所内蹊跷死亡|美国的坦克参北斗|十教授被妖精骗了|江西邓毛谢古事件|该刹的歪风在哪里|宣告相关试题作废|燃油税恐成高油价|最牛的警官检讨书|空nlz空軍直屬單位|艾未未与读者闲扯|对民工实行力士后|赶不上领导的变化|中学修建音乐喷泉|郯城至仓山高速路|苍山路段特大事故|无人遇难纯属隐瞒|从纪念堂中扔出来|吴祖光的铁骨柔肠|吃一亩奖励好几百|警车开道暴打记者|穷人是最大的危险|北京暗中调兵遣将|违背国家安置政策|十七团部营房哨兵|解答烈士们的疑惑|情报部门调查蓝苹|粉蝶手中的纸老虎|当今中国震惊世界|观音新降七岁孩童|立碑人署名吴启华|村官公布个人财产|真消息国人看不见|陕西发现人感染猪|你不能不看的墓碑|朱穗生被内部监控|本来就是毛邓社会|猪流感引发的感想|多名医生感染艾滋|女医药代表水淋淋|您真是党的好同志|县长之女施暴追踪|坑了四万六千个儒|纪录我们告诉未来|論民族平等重要性|退伍军人安置问题|心目中的中国地图|东海苏岩岛邹占魁|中国的鸡站起来了|宋徽宗作重要批示|绵州感染瘟疫死亡|预报专家欲哭无泪|512的强震有人预报|宝贝的体内养珍珠|吉首爆发特大规模|安徽人民甘败下风|领导的意见不能提|跟国人和世界辩解|日经松江府上海县|揭开中国涉外金融|内脏移植来源不明|田集镇的真实故事|强迫各省交检测费|舅子李平经营学校|中南海还给老百姓|爱国会救不了灵魂|法光照耀快快回家|派嫦娥一号送我来|强抢占地之贾家庄|丰茂林场发现鼠疫|不满政府隐瞒疫情|吃人民的吸血阶层|地产就没有新中国|强大利益的牺牲品|土地出让领域贿赂|回不去的进城农民|执法四年集体解聘|權力核心中的知青|张学兵不如一条狗|鸡蛋迎接美国总统|中国十大黑心职业|遇难学生名单统计|毛着力于夺取政权|世界都在笑中国傻|叶锦寨这样的恶行|高送转并内幕交易|人民广场惊人一幕|北京政坛清华名人|参谋业务参考资料|告全国股民同胞书|国家粮油统计报表|黑窑母亲群体募捐|胡溫怒批政法系統|军事训练评定标准|领导班子名单外泄|毛时代大饥荒揭秘|批林整风参考材料|企业汇总会计报表|企业如何建立网站|人民大众时事参考|司马义铁力瓦尔地|塑胶原料的流动性|五个部长一个省长|星亚网络影视公司|一个人的奥林匹克|宜昌当阳县级市长|印尼抢劫华人资产|中国高层权力斗争|中华人民实话实说|中南海的权利游戏|qq2009ds3.w223.bizcn.com|ok.paofangwuyuetian.info|online-media-archive.net|zdan84115.xx108.zgsj.net|妇联主任：武则天|广源桔子暴发柑蛆|国家总理：诸葛亮|後勤部長：李蓮英|水利部部长：大禹|政府不欠你们的钱|国家英语六级试题|国家英语四级试题|浩宇高等教育学历|环三亚甲基三硝氨|快速办理深户咨询|深圳红印户口咨询|吸血贵利王血玫瑰|霞姐－夜生活女王|新疆克拉玛依火灾|新三狼之欢场屠夫|性事奇趣录之阉夫|政府说为人民服务|中南海的权力游戏|中央警卫局大换血|专业快速深户咨询|北京先知设计公司|中国消费者报大厦|新闻总署态度蛮横|乙酸甲氧基乙基汞|中国实行血腥教育|中组部前部长直言|手机卡服务密码破|天天高中药增高网|深圳一博网络推广|北京恒昌富达科技|供应删除贴吧帖子|网络炒作执行专家|扬州籍的重要人物|被美女围困的日子|操魂师之美眉天下|陈二狗的妖孽人生|穿越之极品色公主|簡易炸蛋製作方法|《色之戒四合院》|醋酸甲氧基乙基汞|苦毒浆果木防己属|四级考试试题答案|2乙基S4硝基苯基酯|飞机失事后的云雨|我和僵尸有个约会|奉子成婚羔羊皇后|覆雨翻云之逐艳曲|广州亚运会开幕式|黑魔公主除灵异志|坏蛋是怎样炼成的|皇上借我沟引一下|金庸群侠之驭奴者|巨洞色钱权大博弈|茂名高州水灾事件|门房秦大爷的故事|迷失在日本的天堂|女大学生勇闯仕途|诺贝尔和平奖得主|三宫六院七十二妃|色痞子巧诱娇娇女|通缉总裁的出逃妻|先穿射雕再穿大唐|以下是违禁关键词|与掠心老公说拜拜|博康舒大冒险魔女|蓝色快车车身广告|男女婴幼儿童服装|凭什么要被你侮辱|装饰设计有限公司|監聽無線通話軟件|新葡京国际娱乐城|皇冠正网平台出租|提供中考学生信息|快速办理学历证书|足球金球跟飞软件|第一跟单足球软件|楼凤良家兼职信息|兼职小妹服务电话|美女全套服务电话|进京户口指标转让|找大学生全套服务|隐密器变号娱乐版|本科学历快速办理|亚洲新时代娱乐城|色女缠郎免费下载|提供企业老板资料|删除论坛反面帖子|新东泰娱乐城开户|提供了仇了事服务|七胜国际娱乐平台|同花顺国际娱乐城|喜盈门国际娱乐城|大三元娱乐城开户|蝴蝶谷中文娱乐网|皇冠现金网娱乐城|新澳门娱乐城开户|大富翁国际娱乐城|尊龙国际在线娱乐|兼职妹妹双飞服务|清除贴吧负面报道|乐百家国际娱乐城|皇冠金公主娱乐城|百家博国际娱乐城|王梦溪108照片下载|保险客户数据专卖|提供车主详细资料|删除负面网络信息|华尔街娱乐城网址|博天堂娱乐城网站|美高梅娱乐城网站|找小女姐全套服务|真钱百利宫娱乐城|负面消息网络删除|负面消息网络清理|负面消息网络消除|供应西班牙苍蝇粉|办理日语一级证书|真钱网络棋牌游戏|楼盘业主数据提供|销售楼盘业主数据|订购楼盘业主数据|快递面单数据提供|提供英语四级证书|提供英语六级证书|提供英语等级证书|处理企业负面消息|北京地区供应双响|电视购物数据供应|快递面单数据销售|电视购物资料供应|快递面单数据供应|供应楼盘业主数据|提供楼盘业主数据|提供金融客户资源|提供老板个人资料|提供老人保健数据|提供股民开户数据|供应电视购物资料|供应保险用户资料|销售小区业主资料|销售老板个人资料|销售银行客户资料|销售小区住户资料|销售老板资料信息|供应快递面单数据|销售快递面单数据|提供快递面单数据|销售物流客户资料|销售个人信息数据|销售车主信息数据|销售手机间谍软件|销售股民开户数据|电视购物名单销售|销售高档业主数据|销售保险客户资料|销售物流客户数据|销售快递综合数据|销售期货客户资源|销售股民个人信息|销售锡纸快开工具|销售十字快开工具|销售股票客户资源|销售保险用户资料|销售快递客户资料|销售老人保险资料|销售小区业主名录|电视购物数据销售|提供银行客户信息|供应企业名录资源|快递单号交易平台|销售监狱个人资料|销售服刑人员资料|删除企业负面消息|删除网上负面消息|手把手教你作原子|现金赌钱游戏平台|代人解决私人恩怨|代人制造特殊意外|色系漫画打包下载|真人在线娱乐平台|寂寞空庭春欲晚|我是千斤大小姐|我的邻居很腹黑|一只小妖出墙来|网游之纵意花丛|地下室里的春风|提供删除天涯帖子|老婆陪我换配偶|机舱之头等服务|遍收天下美娇娘|红尘都市完整版|总裁女儿爱上我|数见红尘应识我|我爱由我不由天|穿越只为遇见你|有缘千年来相会|我是弱受我怕谁|穿越之兰柯一梦|小小皇后成长记|耻辱之教育实习|美色当前儿心乱|笔仙原来是小受|穿越之万受无疆|十里荒凉胭脂泪|憐卿甘為身下奴|删除网上负面影响|清除网上负面影响|哥哥的猫耳女仆|后宫佳丽三千人|电视购物数据下载|下载电视购物数据|买卖顺丰面单数据|供应小区业主资料|收获人妻的小贼|秘密熟母俱乐部|销售汽车快开工具|轻狂一笑帝王受|跳钢管舞的男人|意难忘之续前缘|九龙夺嫡之胤祹|火影之美女如云|提供真人线上娱乐|姚记娱乐备用网站|富家女的男保姆|一路高升一路情|狐家屯的孽事儿|办理高仿学历证书|天天乐娱乐城官网|星期八娱乐城官网|供应车主信息资料|供应全国车主名单|供应小区住户资料|提供保险用户资料|制作高仿学历证书|金融客户资源销售|金融客户资源供应|庐江不雅照片全集|供应二氧化丁二烯|供应硫酸三乙基锡|供应六亚甲基亚胺|供应保险人员数据|供应网络购物数据|销售网络购物数据|提供网络购物数据|销售保险人员数据|销售小区业主信息|提供医保个人信息|提供旅客个人信息|混在后宫假太监|禁区女领导大院|人妻肛肉曲下载|专业解决个人恩怨|提供信息清除服务|维也纳娱乐城网站|圣淘沙娱乐城网站|提供上门爱爱服务|星期八娱乐城网站|黄金天使降临下载|直销汽车快开工具|供应股民详细信息|提供车主个人信息|清除网络恶意言论|删除网上恶意帖子|提供尼二氢可待因|销售美沙酮中间体|销售尼二氢可待因|有偿解决私人恩怨|二丁基氧化锡提供|提供二丁基氧化锡|二丁基氧化锡销售|销售二丁基氧化锡|二丁基氧化锡直销|直销二丁基氧化锡|删除网络虚假信息|网络真人现金游戏|销售股民详细信息|二丁基氧化锡供应|三对夫妻种子下载|昆明三对夫妇快播|庐江三对夫妻种子|庐江官员乌龙艳照|昆明三对夫妻图片|春暖花开性吧地址|办理六级英语证书|办理四级英语证书|官员夫妻高清艳照|供应物流客户资料|昆明三夫妻不雅照|供应二丁基氧化锡|供应小区业主信息|提供电视购物资料|提供物流客户资料|变瞎子的慢性毒药|电视购物名录专卖|提供电视购物名录|电视购物名录提供|专卖电视购物名录|销售电视购物名录|电视购物名录销售|供应电视购物名录|电视购物名录供应|供应股民开户数据|销售小区业主名单|办理执业资格证书|主叫号码显示修改|删除博客帖子电话|供应老板私人电话|供应老人保健数据|供应小区业主名单|提供保险老人资料|供应高端客户名单|销售高端客户名单|销售学生名单数据|供应学生名单数据|提供学生家长数据|销售学生家长数据|供应学生家长数据|销售内部成单数据|提供内部成单数据|供应内部成单数据|黄樟素黄樟油销售|提供小区车主信息|找人制造意外电话|购买防身警用装备|购买警用防身装备|销售顺丰客户资料|提供保险人员数据|销售最新股民数据|提供全新股民数据|销售顺丰面单数据|防身警用装备专卖|提供中考考生数据|提供最新股民数据|供应汽车车主信息|提供考生家长资料|供应考生家长资料|负面消息专业删除|供应物流进线数据|供应物流成单数据|提供物流进线数据|提供物流成单数据|销售物流进线数据|销售物流成单数据|供应学生家长资料|提供学生家长资料|销售学生家长资料|提供最新保险数据|供应最新保险数据|销售最新保险数据|烟雾弹的制作方法|高校学生信息档案|銀行卡读卡器软件|提供韵达面单数据|提供各种制毒工具|高档商场会员资料|动漫美女触手禁图|外国洋妞酒店特服|国内模特各国洋妞|提供天天面单数据|销售专业顺丰面单|提供电购面单数据|销售电购面单数据|供应电购面单数据|供应电购综合面单|任意手机号码变号|制作溜冰壺子配方|供应专业顺丰面单|提供一手保险数据|提供一手女性数据|提供联通用户数据|提供电信用户数据|专业删除贴吧贴子|公车上的女大学生|恶夫最里的小樱桃|冷狮爪下的小野猫|在韩国留学的日子|专业删除网上信息|提供各地老板资料|销售公司法人资料|销售楼盘业主资料|供应高档客户资料|销售高档客户资料|供应银行客户资料|销售电话营销数据|供应企业名录资料|供应电话营销数据|供应老板个人资料|供应法人手机号码|供应公司法人资料|供应楼盘业主资料|任意修改主叫号码|手机号码修改软件|供应电视购物数据|办理英语四级证书|网上真人现金游戏|全国号码任意设置|办理专业四级证书|我爱你亚洲妹社区|办理大学学历证书|草榴社区最新网址|草榴社区最新地址|专业消除负面消息|办理国外学历证书|供应金融客户资源|销售金融客户资源|提供各种锁匠器材|销售进口硅胶脸皮|专业帮人處理恩怨|专业定制人造面皮|销售进口硅胶面皮|专业定制易容面皮|专业定制硅胶面皮|专业定制人造脸皮|专业定制硅胶脸皮|专业定制美化面皮|专业定制美化脸皮|专业定制高仿脸皮|专业定制仿真脸皮|专业定制易容脸皮|专业定制高仿面皮|专业定制仿真面皮|代购潛伏者改良版|代购潛伏者增強版|代购007間諜增強版|代购007間諜免費版|代购潛伏者專業版|烟花爆竹送货上门|大馬士革鋼刀专卖|美國巴克軍刀专卖|德國博克軍刀专卖|美國卡巴軍刀专卖|美國冷鋼軍刀专卖|代理彩信改號业务|代理手機改號业务|办理二代假身份證|办理壹代假身份證|办理假壹代身份證|办理假一代身份證|办理假二代身份證|办理一代假身份證|办理真二代身份證|办理真一代身份證|代制假二代身份證|代制假壹代身份證|办理真壹代身份證|卖假冒一代身份證|卖假冒壹代身份證|卖假冒二代身份證|卖二代假冒身份證|卖一代精仿身份證|卖二代精仿身份證|卖壹代個人身份證|卖真实二代身份證|卖真实壹代身份證|卖真实一代身份證|卖壹代假冒身份證|卖个人壹代身份證|卖個人一代身份證|卖個人二代身份證|卖個人壹代身份證|卖一代個人身份證|卖二代個人身份證|卖一代高仿身份證|卖二代高仿身份證|卖壹代高仿身份證|卖个人一代身份證|卖个人二代身份證|卖壹代精仿身份證|卖一代假冒身份證|間苯三酚送货上门|间苯三酚送货上门|卖左旋麻黃素手机|卖鹽酸羥亞胺手机|卖鹽酸羥亞胺电话|印尼依斯兰祈祷团|特俚碾姎饣撝殒j|第三代Ｆ3加密通道|怒影覆盖面积n公顷|2x3x4x5x6x7x8.count.xj.cn|预定2013年户口指标|转让2013年户口指标|ewin娱乐城官方下载|金融皇帝十二妃H版|昆明三对夫妻玩群P|庐江县群p照片全集|昆明群P聚会共181张|昆明三对夫妻群p图|庐江县官员群p照片|办理2代精仿身份證|办理1代精仿身份證|办理1代假冒身份證|办理2代假冒身份證|办理个人1代身份證|办理假冒1代身份證|办理假冒2代身份證|办理個人2代身份證|办理個人1代身份證|办理个人2代身份證|办理1代高仿身份證|办理2代高仿身份證|办理2代個人身份證|办理1代個人身份證|18岁或以上人士观看|asf0021homeipnetpics052609|取消13省市农业户口|不看新闻的20条理由|34个政府和部门祝贺|secure-cn.imrworldwide.com|shangshan.w990.vhostgo.com|重庆秘密空间YZ会所|汽油3分之1白糖混合|5氨基甲基3异恶唑醇|二乙基S4硝基苯基酯|2463亚乙基氨基1353嗪|契约99天总裁的前妻|供应正宗天然k2香料|供应正宗天然k3香料|会计师从业资格证qq|上门全套服务电话QQ|小姐全套上门qq电话|注册送20元真人棋牌|金融客户资源提供qq|qq提供保险客户数据|qq供应小区业主数据|qq供应保险客户数据|qq学生家长数据专卖|qq学生家长资料专卖|网站论坛负面处理qq|网站新闻负面处理qq|qq供应期货客户数据|qq电视购物数据提供|qq提供小区业主名单|提供锡纸快开工具qq|qq快递面单数据专卖|qq销售电视购物数据|qq销售西班牙苍蝇粉|qq直销西班牙苍蝇粉|qq订购西班牙苍蝇粉|qq购买西班牙苍蝇粉|qq提供西班牙苍蝇粉|提供小区业主资料qq|qq提供电视购物数据|电视购物数据提供qq|qq提供小区业主名录|供应期货客户数据QQ|快递面单资料提供QQ|学生家长数据专卖qq|学生家长资料专卖qq|提供快递面单资料qq|提供保险客户数据qq|供应保险客户数据qq|供应小区业主数据qq|物流客户信息提供qq|qq清除网上负面报道|清除网上负面报道qq|提供小区住户资料qq|销售联通客户资料qq|供应个人信息数据QQ|销售电视购物数据qq|销售个人信息资料qq|销售业主身份信息qq|提供高仿四级证书qq|提供高仿六级证书qq|qq提供锡纸快开工具|qq供应高仿学历证书|qq替人解决私人恩怨|销售高仿学历证书qq|qq销售高仿学历证书|提供电视购物数据qq|供应顺丰面单数据qq|销售学生信息资料QQ|销售车主信息资料QQ|庐江官员6p照片下载|庐江官员6p全套照片|庐江县不雅照下载bt|安徽庐江官员6p原图|qq提供小区业主信息|专卖小区业主名单qq|电话号码任意修改QQ|提供别墅业主信息QQ|任意显示主叫号码QQ|供应最新女性数据QQ|销售最新女性数据QQ|提供最新女性数据QQ|物流公司内部数据QQ|供应顺丰面单数据QQ|小姐保健服务信息QQ|销售基金人员数据QQ|保险公司客户资料QQ|网游喷血美女左小娜|关于堂明皇与杨贵姬|围绕土地问题的攻防|全球唯一绝对不能惹|发不出工资买不起面|不该把工农兵捧上天|官府忽悠百姓之能事|萨达姆和布什对情歌|上太空都是三四个人|长征时到过她们村子|中国人的十大不明白|双氧水攻击羰基脱水|壹盒壹次性玞槍霰彈|苍山段连环交通事故|流感绝对没这么简单|青年长拳图解全过程|不为人知的行业内幕|紧密团结在手机周围|黄膳中认识了避孕药|超越者联盟突破精英|央视是纳税人的央视|推销自己的炸鸡秘方|翅膀的激素催生技术|奶农把责任推给奶牛|武汉地下肉类加工厂|上犹客家的精神变迁|取消中国国家足球队|拖累白酒板块齐低迷|行业步入换帅敏感期|尸体在农家院被掏空|沙粒中发现早期宇宙|交易大厅一下子看到|十年黄金股市第一年|股民们骗光杀光抢光|普降加持吉祥光耀曲|外国人强悍的性要求|多年的答案操作经验|一次性高分通过考试|可随意改变称重结果|利威电子厂工会斗争|不能耽误了党的工作|中国被占领土一览表|给閒基同志的一封信|屁事都要认证的制度|街道办工作人员赖某|燃油税为何像个人妖|女记者被山西检察官|部队驻上了胶东半岛|户口管制制度的弊端|王启富教授深感痛心|万学海文校长李忠泽|政府和官员就是驴子|中国教育宪章一百条|拿着纳税人钱的骗子|战争正在向我们走来|博雅免疫球蛋白事件|莆田市政府侵吞涉案|韩企工会围堵我使馆|打赢高磕技局部战争|骇人听闻的进补潮流|称能解决农民工就业|被员警围困的北京家|翻译还没来便回答说|黑势力强行推倒房屋|办案中依靠拉拢法官|遇難寃生的詳細名單|邓永固因涉嫌诽谤罪|姜振华因涉嫌受贿罪|珍贵的历史录音予您|第一能治猪流感的人|倒塌学校的质量问题|坦克车装扮成大卡车|政府信用的彻底丧失|四把主刀手同时感染|秘密录音回忆录出版|干部制度的莫大讽刺|狼鞋走遍了澳大利亚|国安局上门的危险发|某些部门的家长作风|叶城特大恐怖凶杀案|三峡大坝导致汶川地|宋秀岩已获中央任命|塔头的大量人口失踪|杨佳是天下第一勇士|套牢资金量创出奇迹|国庆前唯一一次合练|不认识你也要代表你|肉体留不住男人的心|曲解造成今天的乱象|政府和地产商的合谋|银都路2688弄20号301室|锺绍军带进了中南海|反赌不是一出肥皂剧|唯我独尊的美国强盗|外交部最常用口头禅|奥巴马的townhallmeeting|市长走访不事先通知|没有经济头脑的毛泽|当地村民被打成重伤|奥巴马否认与夏雨荷|放光明电视制作中心|黑窑工母亲网上寻助|红太阳是怎样升起的|蒙古教育文化基金会|农民真正贫困的根源|是中国社会的爱滋病|泰州文教局停售通知|中南海高层权利斗争|105qngkk.863computer.org.cn|se.woyaoxingjiaowang.net.cn|不就死了几个孩子吗|国家禁毒署：林则徐|建设部部长：秦始皇|商务部部长：胡雪岩|输港鸡蛋被检出问题|用的都应该是公家的|最高法院院长：包公|救灾专用帐篷引质疑|孽欲追击档案之邪杀|声明退出中国少先队|中国国际战略研究网|中南海高层权力斗争|中石油国家电网倒数|６３１００８９８６|网络执行工作室招人|八八穿越还珠之乾隆|宝贝今夜你是什么牌|豹王别姬豹王你好坏|穿越玩转之羞花妖娆|3分之2的汽油与3分之|462硝基邻甲基苯酚钠|氢氧化吐巴寇拉令碱|1甲基23吡啶基吡咯烷|酰胺福林甲烷磺酸盐|四级真题及答案下载|英语六级试题及答案|妃穿不可蛮妃要出墙|坏叔叔总裁的灰姑娘|混迹在美女如云公司|加非猫现实世界历险|金鳞外传之龙游浅水|京城男女之食色性也|绝色天下之极品弃妃|狼情窃意桃花无意惹|冷妻难惹总裁请下堂|乱欲纯情小男人和美|女文工团的最后下落|俏黄蓉的洞房花烛夜|情冷君恩之一朝为后|石榴裙下的机关男人|帅帅小子之千娇百媚|我和一群女人的故事|先吃后爱将军恶如狼|幸孕弃妃把朕搞翻了|妖艳花丛之百花迷乱|遗忘国度之神秘徽章|赵雅芝那胯下的温柔|重生闻香之慈航静斋|罪爱豪门腹黑总裁惹|不得和你假正经重庆|穿越谁吃了我的皇妃|落魄女生酷总裁爱情|强欢痞妃皇上不下崽|供应飞行员专用叶子|供应飞行员飞的叶子|胜利者足球跟单软件|九龙冰化工主产销售|林雨欣有声小说下载|俄罗斯美女学院快播|色百度网址导航大全|同志会所找帅哥服务|上海情侣网吧门下载|解决2013年户口指标qq|叶倩彤有声小说下载|叶倩彤有声读物下载|金道搏彩网上娱乐城|明珠国际在线娱乐城|手机号任意更改软件|明珠国际网上娱乐城|淘金盈国际线上娱乐|利来国际娱乐城代理|代理威尼斯人娱乐城|真钱二八杠网络平台|广州小姐找上門服务|皇冠国际在线娱乐城|王梦溪照片网盘下载|新澳博天上人间娱乐|澳门十二生肖乐透彩|二代证扫描件生成器|立得二代证制作系统|手机改串号软件下载|销售保健品客户资料|销售汽车干扰信号器|无政府主义者的食谱|天上掉下个打工妹|重生之美女掠夺者|大炕上的肉体联欢|驱妖娘娘冒险奇谭|侠客行之慈母闵柔|我宁愿你虐我到底|无政府主义者食谱pdf|学仿七绝口占答戍|丝丝心动步步惊心|欧阳少恭的心上人|合租屋里的女房客|新上海人浮云之恋|我在花丛中的日子|情燃山乡支医仕途|后湾村的那些事儿|特洛伊监控软件下载|特洛伊监控软件公司|供应各小区电话名单|庐江官员不照雅全部|庐江不雅照图片种子|销售全球通用户资料|全球通用户资料提供|庐江官员艳门照下载|庐江不雅照全集种子|庐江县官员艳照全套|昆明三对夫妻群照片|左旋麻黃素合成配方|销售小区业主手机号|供应小区业主手机号|供应房地产客户资料|销售房地产客户资料|汽油弹简易制作教程|乙酰邻氨基苯酸销售|《娇艳校园》下载|提供宅急送面单数据|小泽玛利亚电影全集|提供全球通用户资料|大叔的幸福人妻生活|我和我的爱人的故事|在镜子里看我和老公|专业提供国内外女郎|金木棉蓝盾在线娱乐|高档俱乐部会员资料|警用电击器防身供应|办理计算机等级证书|雪野あいか电驴下载|波多野结衣合集下载|最新证券新资料供应|二代身份證当面交易|办理二代精仿身份證|代购潛伏者免費試用|代购007間諜免費試用|西班牙奧托軍刀专卖|解放軍現役軍刀专卖|办理壹代假冒身份證|办理一代精仿身份證|办理二代假冒身份證|办理一代假冒身份證|办理一代高仿身份證|办理壹代高仿身份證|办理个人一代身份證|办理假冒一代身份證|办理假冒二代身份證|办理假冒壹代身份證|办理个人壹代身份證|办理個人二代身份證|办理一代個人身份證|办理個人壹代身份證|办理個人一代身份證|办理个人二代身份證|办理二代高仿身份證|代制假冒壹代身份證|代制假冒一代身份證|代制假冒二代身份證|办理壹代個人身份證|办理二代個人身份證|鹽酸羥亞胺送货上门|2009第一号人肉搜索令|2012年的流感爆发威胁|向胡总借钱2000亿遭拒|谁赢得了4170万元订单|liushizhounian.qqxuexiao.com|wylf5168.web013.boothost.com|qq949023.free2.iisiisiis.com|qq充值中心充值qq号码|基本添上1平勺碳酸钠|眯基亚硝胺眯基4氮烯|31甲基24氢吡咯基吡啶|2013中考考生落榜信息|2013中考考生落榜资料|昆明三对夫妻群p聚会|昆明群P聚会181张下载|瑞典Fallkniven軍刀专卖|幸运52发生的真实笑话|幸运52老公比划老婆猜|r25281.nb.host192-168-1-2.com|securitytestinternetguide.com|woaini520.web003.boothost.com|sakamoto-solicitor-office.com|16β瑟文34714151620-庚醇|42甲胺基苯重氮磺酸钠|3羟基5氨基甲基异恶唑|重生之乱世种马YY传奇|qq供应收藏品客户资料|qq提供收藏品客户资料|提供收藏品客户资料QQ|供应收藏品客户资料QQ|踏莎行·三军战震魔|供应全球通用户资料QQ|中国人都在上的四大当|多胡子的应该是马克思|彪长征时都去了什么人|我就让组织部长关心他|有效实现无痛苦的死亡|陡崖所形成的半洞下面|月球极可能是人造天体|火星发现古代湖泊遗迹|青葡萄放入乙烯利稀释|公然伤害消费者的健康|五粮液是当官的取款机|两人中间还被架着一个|告诉你真实的乌鲁木齐|白岩松十问中国证监会|中国股市必须推倒重来|失落的孤独完美中文版|网上可查真实高效办理|包考生一次性通过考试|救楼市别变成救地产商|发射后面的惊天大秘密|取代美国星球大战计划|统一城乡户口登记制度|检察官敲开央视女记者|用权力垄断我们的希望|城乡统一户口登记制度|降油价不能等待燃油税|记者查不法老闆踏地雷|为黄牛党倒票维持秩序|新浪的控股方竟是日本|朱刘街办非法占地问题|制度与文化的百年进化|政府亲商护商还是在毁|京沪高速特大交通事故|办一个会繁荣一座城市|穿国服可刺激经济增长|继承毛独断专行家长制|江都财政局一窝钱耗子|矿难事故的形象代言人|死亡数远超过官方说法|被央视暴光的真正原因|痛心的牡丹江防洪工程|总参谋部的二部和三部|堵哈铁公共安全专家局|根据客户原样印刷制作|中国最牛的加油站标语|建设街交会处的广告牌|将此刻田府中三人成诵|主播李某某的糜烂过往|市长亲自乘坐黑心出租|打的光打不光另当别论|这个党的领袖钦命开除|颠覆中华人民共和国政|干扰赈灾募捐事件回放|高低温交变湿热试验箱|联合起诉最高人民法院|世界以利亚福音宣教会|卫生计划财务参考资料|希望之声国际广播电台|中国高层人事变动解读|中国政坛“明日之星”|阻止中华人民共和国统|web99222840.web159.dikavan.net|齐天大性之大破盘丝洞|孙悟空与阿西娜的故事|中国支配下的朝鲜经济|东莞市创科电子科技有|八元钱泡了个极品空姐|大种马重生三部曲合集|氨甲酰氧甲氧乙基甲基|发动机燃料抗爆混合物|3-羟基5氨基甲基异噁唑|混迹在美女如云的公司|混在美女如云的办公室|魔王神官和勇者美少女|小丫头我要你和充气妹|熊猫哥哥和功夫美少女|倚天屠龙记之我是张无|中国是全球唯一不能惹|中学校园秘闻录之追艳|左手上天堂右手下地狱|马家爵的一句话让在场|山鸡孔雀绿壳蛋鸡梅花|香港爱儿健国际医疗服|快速删除负面网络消息|天利足球打水扫货软件|永利足球打水扫货软件|专业删除网络方面信息|手机号码任意更改软件|圣淘沙娱乐城官方网站|十六浦娱乐城在线娱乐|华尔街娱乐城在线娱乐|供应手机号码变换软件|供应电视购物用户数据|《诱色之野性医生》|无政府主义者手册下载|无政府主义者食谱翻译|女皇陛下的笑话婚姻|大胆总裁敢抢我妈咪|家丁绿帽之杨凌乱入|穿越火线之露水情缘|我和六个男人的故事|英雄无敌之美女军团|阿莎丽小姐的旅行记|翻译无政府主义者烹饪|那场顺其自然的情事|教授夫人的别样生活|蓝天航空公司的空姐|重生火影之漩涡鸣人|爱上风情女老板熳姐|永不落幕的爱恋完本|禁忌情爱霸上留守村|极品美女的超级保镖|无政府主义者食谱下载|中文无政府主义者食谱|无政府主义者食谱资料|翻译无政府主义者食谱|下载无政府主义者食谱|下载无政府主义者手册|翻译无政府主义者手册|供应顺丰面单购物数据|庐江县委不雅照女主角|庐江官员艳照图片下载|安徽庐江全套艳照种子|庐江县艳照事件的起因|季戊四醇四硝酸酯研制|直销手机号码模拟软件|提供手机号码模拟软件|供应电购进线面单数据|提供电购进线面单数据|销售电购进线面单数据|销售快递公司面单数据|提供快递公司面单数据|供应快递公司面单数据|提供物流公司内部数据|销售物流公司内部数据|供应物流公司内部数据|零售专业手机间谍软件|提供电视购物用户数据|郊游时我干了女友同学|我在公车上搞了小姨子|销售个人商务数据资料|供应个人商务数据资料|专业定制进口硅胶面皮|代理任意号码改号业务|专业定制进口硅胶脸皮|销售步槍手槍猎槍气槍|2008年邮政工资调整套改|空降的先头部队4人牺牲|4二甲胺基苯重氮磺酸钠|246三亚乙基氨基135-三嗪|预定2013年北京户口指标|解决2013年北京户口指标|提供2012年中考学生信息|2月5日大盘尾盘跳水内幕|17日向省属媒体发出禁令|csoltiancity.105.80000web.com.cn|quu.wqiu.x.eki.ssk.os.972wyt.com|温州一山村76人离奇死亡|艺坛照妖镜之96应召名册|浙江一古村76村民离奇死|31-甲基2-四氢吡咯基吡啶|下载手机号码变换软件qq|供应手机任意显示软件qq|qq制作高仿执业资格证书|庐江官员6P高清套图下载|供应全国移动用户资料QQ|销售全国移动用户资料QQ|销售全国联通用户资料QQ|供应全国联通用户资料QQ|加非猫：现实世界历险记|姓是唐朝後面的那個朝代|该药是无色无味透明液体|自制射程200公里左右的gps|正視全球中文熱中正體字|正视全球中文热中正体字|乌鲁木齐市打砸烧抢事件|股市会成为百姓的屠宰场|忘记药效期间发生的事情|需要提供资金帮助的朋友|１３６１２８０１２５８|１３４１８５３９８１６|１３６２１１７４９３６|１３６９１６６３６０８|１３９９３４６８０６９|教师工资要略高于公务员|公務唗和教師的工賧差距|取消第五次中欧经济峰会|养车费用将是过去的两倍|进口的是低质高含硫石油|教授建议大幅提高燃油税|联邦作为制度博弈的工具|武汉爆发大规模牛传染病|玫琳凯广州河南行贿清单|干部办公室里的豪华家具|把历史的知情权还给民众|代表团以省长陈政高为首|石桥铺去钟表厂那个方向|小平同志为什么一直跑着|取得许可证始得购买烟土|南昌市的罗汉是杀不完的|美化满清现象形成的原因|拿到了奉贤建设银行报销|第五代的xjp一番蛮横讲话|成全了毛的终身领袖地位|伦敦考虑放弃下届主办权|元朝不是中华民族的王朝|旗子在真空状态自己摆动|为什么国内的油价还不降|中国没有真正意义上的民|１３４１４６２８９９９|尼总务石器吸其目哦轻易|时期打了几次我再次哦唯|是束告项瓷，害电突网解|树亲民形象不如推动政改|47ybnzo.o.o.il.vlfk.os.972wyt.com|国土资源部部长：徐霞客|姐妹们都翻身得解放了吧|人死了以后再通知我们吧|禁宫八大酷刑之极乐酷刑|唐皇宫外情之三唐朝艳妃|唐皇宫外情之太监与宫女|香港新通豪科技有限公司|新女性宝鉴邱玉茹邱莉婷|橡胶溶解汽油中添加碱液|真实教育部学历学位认证|解决2013年公司户口指标qq|预留2013年公司户口指标qq|转让2013年公司户口指标qq|来电显号码修改软件下载|菲律宾圣安娜娱乐官方网|在线真人赌钱娱乐城投注|供应手机号码随意显软件|供应手机号码任意改软件|手机号任意显示软件下载|英语老师的洞房花烛夜|无政府主义者手册doc下载|无政府主义者手册pdf下载|无政府主义者食谱doc下载|无政府主义者食谱英文版|无政府主义者食谱双语版|我和美女同事的那些事|供应特洛伊智能偷听软件|特洛伊智能偷听软件试用|特洛伊监控软件开发公司|无政府主义者食谱电子书|无政府主义者食谱中文版|无政府主义者食谱电子版|中文版无政府主义者食谱|供应智能特洛伊监控软件|毛润之的佛缘与8341的来历|京v牌照的使用权在四总部|历代名妓-悲落叶之柳如是|对2甲基氨基苯重氮磺酸钠|中国靠什么守住18亿亩耕地|迷魂药|迷昏药|三唑仑|手机号码任意改软件下载qq|供应手机号任意显示软件qq|qq销售特洛伊智能偷听软件|央视主持人涉嫌间谍案被捕|将爆发世界最大规模猪流感|烧不破的盛汽油塑料雪碧瓶|专业提供各种大型统一考试|鲜为人知又令人惊叹的历史|工资中扣除教师养老保险金|却鼓励百姓实行垃圾袋装化|中国的新闻比小说还要精彩|中国外交方略让人惨不忍睹|工信部从每个纳税人的口袋|澳门特首选举的困局与危机|西安市劳卫路西荷小学对面|上海市教委组织的统一培训|不是易非毁责。志空服金生|传说的胡曾联手是一种假象|青岛石化项目引发市民恐慌|我以为我是人民的公仆，吃|反对日本介入中国铁路工业|吉林长春哪裡有假幣賣假錢|对二甲基氨基苯重氮磺酸钠|季戊四醇四硝酸酯制作过程|供应手机来电号码修改软件|供应手机任意显示软件电话|无政府主义者食谱内容翻译|老公的精彩之有妻大家尝|无政府主义者食谱中文下载|无政府主义者食谱电子手册|无政府主义者食谱英文下载|无政府主义者烹饪手册下载|下载无政府主义者烹饪手册|庐江官员艳照全套打包下载|《俏尼姑仪琳异传》下载|供应电视购物客户信息资料|fsgsddk566585fdjhdu559594hfghjdgkdcom|性劫兰桂芳大友梨奈,曾玉茹|S5甲氧基4氧代4H吡喃2基甲基O|2013年北京户口办理指标预定|她的姓是唐朝后面的那个朝代|蒙元和满清是中国的敌对政权|媒体就是昧着良心的一个群体|美国总统鲜为人知的十大特权|警校在地道战遗址的不当行为|关于国保工作与时俱进的思考|美国大使代替网络上的网友问|告中国人民解放军广大官兵书|关于做好定案材料工作的意见|卡辛纳大道和三福大道交界处|中国在统一问题上的投降主义|中國國家領導人子女任職名單|ｗｗｗ．ｚｑｆｐｗ．ｃｏｍ|中國人民銀行发行的人民纸币|苯乙基哌啶基丙酰胺柠檬酸盐|供应手机来电号码随意显软件|无政府主义者手册翻译版下载|宅女在古代后宫的幸福生活|无政府主义者烹饪手册rar下载|无政府主义者烹饪手册pdf下载|无政府主义者烹饪手册doc下载|无政府主义者烹饪手册电子版|无政府主义者烹饪手册中文版|中文版无政府主义者烹饪手册|无政府主义者的烹饪食谱下载|中国各地甲型h1n1流感疫情汇总|N苯乙基4哌啶基丙酰胺柠檬酸盐|S5甲氨基2氧代134噻2唑32H基甲基O|随意违反国家规定提拔任用干部|责令百姓向政府申报收入并缴税|夫人和孩子到美国都干了些什么|王良范西江开发规划会议旁听记|四川永川人民教师罢教运动口诀|唐皇宫外情之二唐朝后宫的秘密|我希望中国能有这样一道测试题|香港永和电子国际科技有限公司|N苯乙基4-哌啶基丙酰胺柠檬酸盐|小说偷日同事女友的太恋荡了|无政府主义者的烹饪食谱中文版|无政府主义者的烹饪食谱英文版|S5甲氨基2氧代134噻二唑32H基甲基O|786ts.qqsafe-qqservicesyydswfhuw8ysjftwf.org|首度披露我军令敌胆寒的四大神兵|列强打击中国现代化进程是其一贯|市管领导干部家属座谈会上的讲话|我所犯严重的方向线路错误的检查|解放者CAD文件STL模型设计图纸下载|12hxajx.zij.yaq.58ui.90cj.wcs.500caipiao.com.cn|自愿想退出“少先队员 团员 党员”|综合能力科目考试个别试题出现错误|金利军和锡林郭我向你们的良知呼唤|关于对敌斗争中有关政政策界限汇编|蒋匪军陆军部队师以上主官情况调查|82甲基氨基甲基7甲氧基氨基3甲基黄酮|是否司法不公应该从最后纠正的结果看|玫琳凯泄密资料之政府公关机密记录档案|公务员录用考试报考者违纪违规处理办法|王国昌给南昌市广播电视局全体干部职工|周水同志在全省计划工交工作会议上的报告|手术对她们有好处。考虑到是一项公益事业|N31-羟基2甲氨基乙基苯基甲烷磺酰胺甲磺酸盐|病死鸡已大量流向全国|习近平|福音会|统一教|观音法门|清海无上师|李洪志|逢九必乱|枪出售|逢八必灾|代生孩子|新疆骚乱|这不是天灾|地震来得更猛烈|震死他们|党鞭|炸学校|腐败中国|江氏政治委员江梳头|江太上|江戏子|江系人马|江系人|江贼民|麻果丸|麻将透|麻醉弹|麻醉狗|麻醉枪|麻醉槍|麻醉药台独台湾版假币台独|台湾独立|台湾国|台湾应该独立|台湾有权独立|天灭中共|中共帮凶|中共保命|中共裁|中共腐败|中共的血旗|中共的罪恶|中共近期权力斗争|中共退党|中共政治游戏|中共帝国|中共邪教|中共解体|中共封网|中共黑帮|中共权力斗争").test(q)}}; 
 			}); 
		define("utils/stat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),n=(require("./util.js"),function(){function n(){t(this,n),this.host="https://api.zhuiyinanian.com/"}return o(n,[{key:"statpv",value:function(t){var e=Math.floor(1e15*Math.random()+1e15)+Date.now(),o=wx.getStorageSync("uidStr");o||(o="uid_"+e,wx.setStorage({key:"uidStr",data:o}));var n=wx.getStorageSync("userid"),r=[];Object.keys(t.options).forEach(function(e){r.push(e+"="+t.options[e])});var i=0==r.length?t.route:t.route+"?"+r.join("**"),a=getApp().globalData.port?getApp().globalData.port:0,u=t.options.groupid||t.options.groupId?t.options.groupid?t.options.groupid:t.options.groupId:0;this.request({userId:n,createUserId:o,groupId:u,operation:"pv",remark:i,port:a,userLastLoginTime:getApp().enterTime})}},{key:"stathotmall",value:function(t){wx.request({url:this.host+"YinianProject/count/countFlashSaleOperation",data:t,method:"GET",success:function(t){},fail:function(t){}})}},{key:"request",value:function(t){"object"===(void 0===t?"undefined":e(t))&&(t.port=getApp().globalData.port,t.fromUserId=getApp().globalData.mayDayFromUserid,t.userLastLoginTime=getApp().enterTime,wx.request({url:this.host+"YinianProject/count/countOperation",data:t,method:"GET",success:function(t){},fail:function(t){}}))}},{key:"requestLove",value:function(t){"object"===(void 0===t?"undefined":e(t))&&(t.port=getApp().globalData.port,t.userLastLoginTime=getApp().enterTime,wx.request({url:this.host+"YinianProject/count/countOperation",data:t,method:"GET",success:function(t){},fail:function(t){}}))}}],[{key:"getstatObj",value:function(){return this.instance||(this.instance=new n),this.instance}}]),n}());module.exports=n.getstatObj(); 
 			}); 
		define("utils/tripledes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=t||function(t,e){var r={},i=r.lib={},n=function(){},s=i.Base={extend:function(t){n.prototype=this;var e=new n;return t&&e.mixIn(t),e.hasOwnProperty("init")||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=i.WordArray=s.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=void 0!=e?e:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes;if(t=t.sigBytes,this.clamp(),i%4)for(var n=0;n<t;n++)e[i+n>>>2]|=(r[n>>>2]>>>24-n%4*8&255)<<24-(i+n)%4*8;else if(65535<r.length)for(n=0;n<t;n+=4)e[i+n>>>2]=r[n>>>2];else e.push.apply(e,r);return this.sigBytes+=t,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=s.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],i=0;i<e;i+=4)r.push(4294967296*t.random()|0);return new c.init(r,e)}}),o=r.enc={},a=o.Hex={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],i=0;i<t;i++){var n=e[i>>>2]>>>24-i%4*8&255;r.push((n>>>4).toString(16)),r.push((15&n).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new c.init(r,e/2)}},h=o.Latin1={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],i=0;i<t;i++)r.push(String.fromCharCode(e[i>>>2]>>>24-i%4*8&255));return r.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new c.init(r,e)}},f=o.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=i.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,i=r.words,n=r.sigBytes,s=this.blockSize,o=n/(4*s);if(e=(o=e?t.ceil(o):t.max((0|o)-this._minBufferSize,0))*s,n=t.min(4*e,n),e){for(var a=0;a<e;a+=s)this._doProcessBlock(i,a);a=i.splice(0,e),r.sigBytes-=n}return new c.init(a,n)},clone:function(){var t=s.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});i.Hasher=l.extend({cfg:s.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new u.HMAC.init(t,r).finalize(e)}}});var u=r.algo={};return r}(Math);!function(){var e=t,r=e.lib.WordArray;e.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp(),t=[];for(var n=0;n<r;n+=3)for(var s=(e[n>>>2]>>>24-n%4*8&255)<<16|(e[n+1>>>2]>>>24-(n+1)%4*8&255)<<8|e[n+2>>>2]>>>24-(n+2)%4*8&255,c=0;4>c&&n+.75*c<r;c++)t.push(i.charAt(s>>>6*(3-c)&63));if(e=i.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var e=t.length,i=this._map;(n=i.charAt(64))&&-1!=(n=t.indexOf(n))&&(e=n);for(var n=[],s=0,c=0;c<e;c++)if(c%4){var o=i.indexOf(t.charAt(c-1))<<c%4*2,a=i.indexOf(t.charAt(c))>>>6-c%4*2;n[s>>>2]|=(o|a)<<24-s%4*8,s++}return r.create(n,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(e){function r(t,e,r,i,n,s,c){return((t=t+(e&r|~e&i)+n+c)<<s|t>>>32-s)+e}function i(t,e,r,i,n,s,c){return((t=t+(e&i|r&~i)+n+c)<<s|t>>>32-s)+e}function n(t,e,r,i,n,s,c){return((t=t+(e^r^i)+n+c)<<s|t>>>32-s)+e}function s(t,e,r,i,n,s,c){return((t=t+(r^(e|~i))+n+c)<<s|t>>>32-s)+e}for(var c=t,o=(h=c.lib).WordArray,a=h.Hasher,h=c.algo,f=[],l=0;64>l;l++)f[l]=4294967296*e.abs(e.sin(l+1))|0;h=h.MD5=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(c=0;16>c;c++){a=t[o=e+c];t[o]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var c=this._hash.words,o=t[e+0],a=t[e+1],h=t[e+2],l=t[e+3],u=t[e+4],p=t[e+5],d=t[e+6],_=t[e+7],y=t[e+8],v=t[e+9],B=t[e+10],g=t[e+11],k=t[e+12],x=t[e+13],m=t[e+14],S=t[e+15],z=c[0],w=c[1],C=c[2],E=c[3],w=s(w=s(w=s(w=s(w=n(w=n(w=n(w=n(w=i(w=i(w=i(w=i(w=r(w=r(w=r(w=r(w,C=r(C,E=r(E,z=r(z,w,C,E,o,7,f[0]),w,C,a,12,f[1]),z,w,h,17,f[2]),E,z,l,22,f[3]),C=r(C,E=r(E,z=r(z,w,C,E,u,7,f[4]),w,C,p,12,f[5]),z,w,d,17,f[6]),E,z,_,22,f[7]),C=r(C,E=r(E,z=r(z,w,C,E,y,7,f[8]),w,C,v,12,f[9]),z,w,B,17,f[10]),E,z,g,22,f[11]),C=r(C,E=r(E,z=r(z,w,C,E,k,7,f[12]),w,C,x,12,f[13]),z,w,m,17,f[14]),E,z,S,22,f[15]),C=i(C,E=i(E,z=i(z,w,C,E,a,5,f[16]),w,C,d,9,f[17]),z,w,g,14,f[18]),E,z,o,20,f[19]),C=i(C,E=i(E,z=i(z,w,C,E,p,5,f[20]),w,C,B,9,f[21]),z,w,S,14,f[22]),E,z,u,20,f[23]),C=i(C,E=i(E,z=i(z,w,C,E,v,5,f[24]),w,C,m,9,f[25]),z,w,l,14,f[26]),E,z,y,20,f[27]),C=i(C,E=i(E,z=i(z,w,C,E,x,5,f[28]),w,C,h,9,f[29]),z,w,_,14,f[30]),E,z,k,20,f[31]),C=n(C,E=n(E,z=n(z,w,C,E,p,4,f[32]),w,C,y,11,f[33]),z,w,g,16,f[34]),E,z,m,23,f[35]),C=n(C,E=n(E,z=n(z,w,C,E,a,4,f[36]),w,C,u,11,f[37]),z,w,_,16,f[38]),E,z,B,23,f[39]),C=n(C,E=n(E,z=n(z,w,C,E,x,4,f[40]),w,C,o,11,f[41]),z,w,l,16,f[42]),E,z,d,23,f[43]),C=n(C,E=n(E,z=n(z,w,C,E,v,4,f[44]),w,C,k,11,f[45]),z,w,S,16,f[46]),E,z,h,23,f[47]),C=s(C,E=s(E,z=s(z,w,C,E,o,6,f[48]),w,C,_,10,f[49]),z,w,m,15,f[50]),E,z,p,21,f[51]),C=s(C,E=s(E,z=s(z,w,C,E,k,6,f[52]),w,C,l,10,f[53]),z,w,B,15,f[54]),E,z,a,21,f[55]),C=s(C,E=s(E,z=s(z,w,C,E,y,6,f[56]),w,C,S,10,f[57]),z,w,d,15,f[58]),E,z,x,21,f[59]),C=s(C,E=s(E,z=s(z,w,C,E,u,6,f[60]),w,C,g,10,f[61]),z,w,h,15,f[62]),E,z,v,21,f[63]);c[0]=c[0]+z|0,c[1]=c[1]+w|0,c[2]=c[2]+C|0,c[3]=c[3]+E|0},_doFinalize:function(){var t=this._data,r=t.words,i=8*this._nDataBytes,n=8*t.sigBytes;r[n>>>5]|=128<<24-n%32;var s=e.floor(i/4294967296);for(r[15+(n+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r[14+(n+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),t.sigBytes=4*(r.length+1),this._process(),r=(t=this._hash).words,i=0;4>i;i++)n=r[i],r[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8);return t},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}}),c.MD5=a._createHelper(h),c.HmacMD5=a._createHmacHelper(h)}(Math),function(){var e=t,r=e.lib,i=r.Base,n=r.WordArray,s=(r=e.algo).EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:r.MD5,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=(o=this.cfg).hasher.create(),i=n.create(),s=i.words,c=o.keySize,o=o.iterations;s.length<c;){a&&r.update(a);var a=r.update(t).finalize(e);r.reset();for(var h=1;h<o;h++)a=r.finalize(a),r.reset();i.concat(a)}return i.sigBytes=4*c,i}});e.EvpKDF=function(t,e,r){return s.create(r).compute(t,e)}}(),t.lib.Cipher||function(e){var r=(d=t).lib,i=r.Base,n=r.WordArray,s=r.BufferedBlockAlgorithm,c=d.enc.Base64,o=d.algo.EvpKDF,a=r.Cipher=s.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(t){return{encrypt:function(e,r,i){return("string"==typeof r?_:p).encrypt(t,e,r,i)},decrypt:function(e,r,i){return("string"==typeof r?_:p).decrypt(t,e,r,i)}}}});r.StreamCipher=a.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var h=d.mode={},f=function(t,e,r){var i=this._iv;i?this._iv=void 0:i=this._prevBlock;for(var n=0;n<r;n++)t[e+n]^=i[n]},l=(r.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}})).extend();l.Encryptor=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;f.call(this,t,e,i),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),l.Decryptor=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);r.decryptBlock(t,e),f.call(this,t,e,i),this._prevBlock=n}}),h=h.CBC=l,l=(d.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,i=(r=r-t.sigBytes%r)<<24|r<<16|r<<8|r,s=[],c=0;c<r;c+=4)s.push(i);r=n.create(s,r),t.concat(r)},unpad:function(t){t.sigBytes-=255&t.words[t.sigBytes-1>>>2]}},r.BlockCipher=a.extend({cfg:a.cfg.extend({mode:h,padding:l}),reset:function(){a.reset.call(this);var t=(e=this.cfg).iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=e.createEncryptor;else r=e.createDecryptor,this._minBufferSize=1;this._mode=r.call(e,this,t&&t.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else e=this._process(!0),t.unpad(e);return e},blockSize:4});var u=r.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),h=(d.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext;return((t=t.salt)?n.create([1398893684,1701076831]).concat(t).concat(e):e).toString(c)},parse:function(t){var e=(t=c.parse(t)).words;if(1398893684==e[0]&&1701076831==e[1]){var r=n.create(e.slice(2,4));e.splice(0,4),t.sigBytes-=16}return u.create({ciphertext:t,salt:r})}},p=r.SerializableCipher=i.extend({cfg:i.extend({format:h}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i);return e=n.finalize(e),n=n.cfg,u.create({ciphertext:e,key:r,iv:n.iv,algorithm:t,mode:n.mode,padding:n.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),d=(d.kdf={}).OpenSSL={execute:function(t,e,r,i){return i||(i=n.random(8)),t=o.create({keySize:e+r}).compute(t,i),r=n.create(t.words.slice(e),4*r),t.sigBytes=4*e,u.create({key:t,iv:r,salt:i})}},_=r.PasswordBasedCipher=p.extend({cfg:p.cfg.extend({kdf:d}),encrypt:function(t,e,r,i){return i=this.cfg.extend(i),r=i.kdf.execute(r,t.keySize,t.ivSize),i.iv=r.iv,(t=p.encrypt.call(this,t,e,r.key,i)).mixIn(r),t},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),r=i.kdf.execute(r,t.keySize,t.ivSize,e.salt),i.iv=r.iv,p.decrypt.call(this,t,e,r.key,i)}})}(),function(){function e(t,e){var r=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=r,this._lBlock^=r<<t}function r(t,e){var r=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=r,this._rBlock^=r<<t}var i=t,n=(s=i.lib).WordArray,s=s.BlockCipher,c=i.algo,o=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],a=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],h=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],f=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],l=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],u=c.DES=s.extend({_doReset:function(){for(var t=this._key.words,e=[],r=0;56>r;r++){var i=o[r]-1;e[r]=t[i>>>5]>>>31-i%32&1}for(t=this._subKeys=[],i=0;16>i;i++){for(var n=t[i]=[],s=h[i],r=0;24>r;r++)n[r/6|0]|=e[(a[r]-1+s)%28]<<31-r%6,n[4+(r/6|0)]|=e[28+(a[r+24]-1+s)%28]<<31-r%6;for(n[0]=n[0]<<1|n[0]>>>31,r=1;7>r;r++)n[r]>>>=4*(r-1)+3;n[7]=n[7]<<5|n[7]>>>27}for(e=this._invSubKeys=[],r=0;16>r;r++)e[r]=t[15-r]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,i,n){this._lBlock=t[i],this._rBlock=t[i+1],e.call(this,4,252645135),e.call(this,16,65535),r.call(this,2,858993459),r.call(this,8,16711935),e.call(this,1,1431655765);for(var s=0;16>s;s++){for(var c=n[s],o=this._lBlock,a=this._rBlock,h=0,u=0;8>u;u++)h|=f[u][((a^c[u])&l[u])>>>0];this._lBlock=a,this._rBlock=o^h}n=this._lBlock,this._lBlock=this._rBlock,this._rBlock=n,e.call(this,1,1431655765),r.call(this,8,16711935),r.call(this,2,858993459),e.call(this,16,65535),e.call(this,4,252645135),t[i]=this._lBlock,t[i+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});i.DES=s._createHelper(u),c=c.TripleDES=s.extend({_doReset:function(){var t=this._key.words;this._des1=u.createEncryptor(n.create(t.slice(0,2))),this._des2=u.createEncryptor(n.create(t.slice(2,4))),this._des3=u.createEncryptor(n.create(t.slice(4,6)))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2}),i.TripleDES=s._createHelper(c)}(),exports.encryptByDESModeCBC=function(e){e=""+e;var r=t.enc.Utf8.parse("YZadZjYx"),i=t.enc.Utf8.parse("\b"),n=t.DES.encrypt(e,r,{iv:i,mode:t.mode.CBC,padding:t.pad.Pkcs7}).ciphertext.toString(t.enc.Base64);return encodeURIComponent(n)}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){var e=t.pathname,n=t.data,i=t.reqtype,u=(new Date).getTime()+6e5+"",c=0,s=getApp();s&&s.globalData.userInfo&&s.globalData.userInfo.userid&&(c=s.globalData.userInfo.userid);var p=r.Base64.encode(e+"_"+u+"_"+c);return new a(function(t,a){wx.request({url:o.host+"/"+e,data:n,header:{"content-type":"application/json",token:p,source:"YiNianXiaoChengXu"},method:i||"GET",success:function(e){t(e.data)},fail:function(t){a(t)}})})}function e(t){return(t=t.toString())[1]?t:"0"+t}function n(t,e){return Math.floor(Math.random()*(e-t+1)+t)}var a=require("./promise.js"),o=require("./api.js"),r=require("./base64.js");module.exports={formatTimeWithSecond:function(t){var n=t.getFullYear(),a=t.getMonth()+1,o=t.getDate(),r=t.getHours(),i=t.getMinutes(),u=t.getSeconds();return[n,a,o].map(e).join("-")+" "+[r,i,u].map(e).join(":")},formatTime:function(t){var n=t.getFullYear(),a=t.getMonth()+1,o=t.getDate();t.getHours(),t.getMinutes(),t.getSeconds();return[n,a,o].map(e).join("-")},wxpromise:function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new a(function(n,a){e.success=function(t){n(t)},e.fail=function(t){a(t)},t(e)})}},wxreq:t,wxRequest:function(t){var e=t.pathname,n=t.data,r=t.reqtype;return new a(function(t,a){wx.request({url:o.host+e,data:n,method:r||"GET",success:function(e){t(e.data)},fail:function(t){a(t)}})})},wxreq_test:function(t){var e=t.pathname,n=t.data,r=t.reqtype;return new a(function(t,a){wx.request({url:o.host_test+"/"+e,data:n,method:r||"GET",success:function(e){t(e.data)},fail:function(t){a(t)}})})},sendData:function(t,e){wx.request({url:"https://api.zhuiyinanian.cn/md.php",data:{uid:t,value:e}})},sendFormId:function(t,e){wx.request({url:o.host+"/YinianProject/formId/saveFormId",data:{userId:t,formId:e}})},unique1:function(t){return Array.from(new Set(t))},randomNum:n,timeRest:function(t){var t=t.replace(/-/g,"/"),e=Date.parse(new Date(t));e/=1e3;var n=(new Date).getTime(),a=parseInt(n/1e3)-parseInt(e);return 0==a?"刚刚":a>0&&a<3600?Math.ceil(a/60)+"分钟前":a>=3600&&a<86400?Math.floor(a/3600)+"小时前":a>=86400&&a<259200?Math.floor(a/86400)+"天前":t.slice(0,4)+"."+t.slice(5,7)+"."+t.slice(8,10)},isInArray:function(t,e){for(var n=0;n<e.length;n++)if(t==e[n])return!0;return!1},getAuthPic:function(e,n,a){t({pathname:"YinianProject/count/getAllImg",data:{groupId:n,pageCode:e,port:getApp().globalData.port}}).then(function(t){0==t.code&&"function"==typeof a&&a(t.data[0])})},getQrCodeMakeAuth:function(e){t({pathname:"YinianProject/album/getQrCodeMakeAuth",data:{}}).then(function(t){0==t.code&&"function"==typeof e&&e(t.data[0])})},countOperation:function(e,n,a,o,r){t({pathname:"YinianProject/count/countOperation",data:{operation:e,groupId:n=n||0,imgUrl:o,userId:a=a||0,remark:r=r||"",port:getApp().globalData.port}})},countLoversOperation:function(e,a,o,r,i){var u=wx.getStorageSync("uidStr");if(o);else if(u)o=u;else{var c="uid_"+n(1e15,2e15);o=c,wx.setStorageSync("uidStr",c)}a=a||0,i=i||0,t({pathname:"YinianProject/count/countLoversOperation",data:{operation:e,groupId:a,userId:o,admin:r,port:getApp().globalData.port}})},joinSpacialActivity:function(e){e.activitySpacialId=1,t({pathname:"YinianProject/activitySpacial/joinSpacialActivity",data:e})},formatNumber:e}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=wx.getSystemInfoSync(),e=require("./utils/util.js"),a=require("./utils/stat.js");App({onLaunch:function(){this.globalData.userInfo=wx.getStorageSync("userInfo")||null,this.enterTimestamp=(new Date).getTime(),this.enterTime=e.formatTimeWithSecond(new Date),this.getUpState(),this.getCountPeople()},onHide:function(){},onShow:function(t){this.globalData.scene=t.scene},stat:a,getUpState:function(){this.sendValue=1},getshowState:function(t){e.wxreq({pathname:"YinianProject/activity/GetMyPhoto",data:{id:41}}).then(function(e){if(0==e.code){var a=1==e.data[0].status;"function"==typeof t&&t(a)}})},newAuthfunction:function(t,a,n,o,i,s,r,u,c){var f=this,l=Date.now(),g=parseInt(wx.getStorageSync("initialDate")),d=!0;g?l&&l-g>6048e5&&(d=!1):d=!1,this.globalData.userInfo=wx.getStorageSync("userInfo"),this.globalData.userInfo&&"新用户"!=this.globalData.userInfo.nickName&&d?(f.globalData.userInfo.isnew="no","function"==typeof t&&t(this.globalData.userInfo)):e.wxpromise(wx.login)().then(function(e){"function"==typeof c&&c(),f.loginfuc(t,{iv:r.iv,code:e.code,encodeData:r.encryptedData,source:"小程序",version:a,port:n,fromUserID:o,fromSpaceID:i,fromEventID:s,enterFrom:u})})},loginfuc:function(t,a){var n=this;e.wxreq({pathname:"YinianProject/h5/smallAppLoginAndRegisterRevision",data:a}).then(function(e){wx.setStorage({key:"userid",data:e.data[0].userid}),n.globalData.userInfo=Object.assign(e.data[0],{userid:e.data[0].userid,isnew:e.data[0].isNewUser,uLockPass:e.data[0].uLockPass,openIdFlag:e.data[0].openIdFlag}),n.globalData.userInfo.nickName=e.data[0].unickname,wx.setStorage({key:"userInfo",data:n.globalData.userInfo});var a=(new Date).getTime();wx.setStorage({key:"initialDate",data:a}),"function"==typeof t&&t(n.globalData.userInfo)})},getUserInfo:function(t,e,a,n,o,i,s,r){var u=this,c=Date.now(),f=parseInt(wx.getStorageSync("initialDate")),l=!0;f?c&&c-f>6048e5&&(l=!1):l=!1,this.globalData.userInfo=wx.getStorageSync("userInfo"),this.globalData.userInfo&&l?(u.globalData.userInfo.isnew="no","function"==typeof t&&t(this.globalData.userInfo)):wx.login({success:function(r){var c={code:r.code,source:"小程序",version:e,port:a,fromUserID:n,fromSpaceID:o,fromEventID:i,enterFrom:s};wx.getSetting({success:function(e){e.authSetting["scope.userInfo"]?wx.getUserInfo({success:function(e){c.iv=e.iv,c.encodeData=e.encryptedData,u.loginfuc(t,c)}}):u.loginfuc(t,c)}})}})},globalData:{userInfo:null,systemInfo:t,pwdState:!0,port:"",mayDayFromUserid:0},getCountPeople:function(){e.wxreq({pathname:"YinianProject/yinian/getCountPeople",data:{}}).then(function(t){"success"==t.msg?wx.setStorage({key:"peopleCount",data:parseInt(t.data[0].count)}):wx.setStorage({key:"peopleCount",data:18e6})})}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/blessingActivities/components/sendBlessing/sendBlessing';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/blessingActivities/components/sendBlessing/sendBlessing.js';	define("pages/blessingActivities/components/sendBlessing/sendBlessing.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../icon.js"),t=require("../../api.js"),s=void 0,n=getApp();Component({properties:{show:{type:Boolean,value:!1,observer:function(e,t){console.log("show",e,t)}},userId:{type:Number,value:-1},eventId:{type:Number,value:-1,observer:function(e,t){console.log("newValue",e)}},selectedIndex:{type:Number,value:-1,observer:function(e,t){console.log("newValue",e),-2!=e&&s.setData({value:""})}},scene:{type:Number,value:-1},groupId:{type:Number,value:-1}},data:{image:"https://pic.qqtn.com/up/2018-4/15241069988679136.jpg",value:"",selectedIndex:-1,defaultBlessing:[],loading:-1},created:function(){s=this},attached:function(){s.setData({ICON:e.ICON}),s._getBlessingList()},ready:function(){console.log("ready")},methods:{close:function(){s.setData({show:!1}),s.triggerEvent("close",!1)},selectBlessing:function(e){var t=e.currentTarget.dataset.index;s.setData({selectedIndex:t})},onFocus:function(e){s.setData({selectedIndex:-2})},onInput:function(e){var t=e.detail.value;s.setData({value:t})},_sendBlessing:function(){if(0!==s.data.loading){if(s.setData({loading:0}),s.data.userId<0)return s.setData({loading:1}),void wx.showToast({title:"用户ID不正确",image:"/images/toast_warning.png"});if(s.data.eventId<0)return s.setData({loading:1}),void wx.showToast({title:"动态ID不正确",image:"/images/toast_warning.png"});var e=s.data.selectedIndex,a={userId:s.data.userId,eventId:s.data.eventId,blessContent:""};if(-2==e&&(a.blessContent=s.data.value),e>=0&&(a.blessContent=s.data.defaultBlessing[e]),a.blessContent=a.blessContent.trim(),a.blessContent.length<1)return s.setData({loading:1}),void wx.showToast({title:"没有祝福语",image:"/images/toast_warning.png"});(0,t.sendBlessing)(a).then(function(e){if(s.setData({loading:1}),0===e.code){wx.getStorageSync("firstSendBlessing")?(wx.showToast({title:"赠送成功"}),wx.setStorageSync("firstSendBlessing",!0)):wx.showModal({title:"赠送成功",content:"别人家的孩子都有小心心了",confirmText:"我要参与",success:function(e){e.confirm?(console.log("用户点击确定"),1007==s.data.scene||1008==s.data.scene?wx.redirectTo({url:"/pages/blessingActivities/pages/album/album?groupId="+s.data.groupId}):wx.navigateBack({delta:1})):e.cancel&&console.log("用户点击取消")}});var t={userId:wx.getStorageSync("userid"),fromUserId:n.fromUserID?n.fromUserID:"",operation:"BlessingActivities_like",userLastLoginTime:n.enterTime,remark:s.data.userId};n.stat.request(t),s.triggerEvent("returnResult",{})}else wx.showModal({title:"赠送失败",content:e.msg,showCancel:!1});s.close()}).catch(function(e){s.setData({loading:1}),wx.showModal({title:"赠送失败",content:e.msg,showCancel:!1}),s.close()})}},_getBlessingList:function(){console.log("_getBlessingList"),(0,t.getBlessingList)().then(function(e){if(0===e.code){var t=e.data.blessContents;s.setData({defaultBlessing:t})}else console.log("祝福列表获取失败")}).catch(function(e){console.log("祝福列表获取失败",e)})}}}); 
 			}); 	require("pages/blessingActivities/components/sendBlessing/sendBlessing.js");
 		__wxRoute = 'pages/components/menuModal/menuModal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/menuModal/menuModal.js';	define("pages/components/menuModal/menuModal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=void 0;Component({properties:{title:{type:String,value:"更多功能"},modalShow:{type:Boolean,value:!1,observer:function(t,a){t&&setTimeout(function(){o.setData({modalAnimation:!0,modalBodyAnimation:!0,modalBodyShow:!0})},100)}},modalBodyShow:{type:Boolean,value:!1,observer:function(t,a){t||(o.setData({modalAnimation:!1,modalBodyAnimation:!1}),setTimeout(function(){o.setData({modalShow:!1})},150))}}},data:{modalAnimation:!1,modalBodyAnimation:!1},created:function(){o=this},methods:{closeModalBody:function(){o.setData({modalBodyShow:!1})},preventTouchMove:function(){}}}); 
 			}); 	require("pages/components/menuModal/menuModal.js");
 		__wxRoute = 'pages/publish/components/andFriends/andFriends';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/components/andFriends/andFriends.js';	define("pages/publish/components/andFriends/andFriends.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../icon.js"),t=void 0;Component({properties:{groupId:{type:String,value:""},selectedFriends:{type:Array,value:[],observer:function(e,r){console.log("nv",e);var n=t.data.andFriends;e.length>0?(n.title="提醒",n.result=e,t.setData({andFriends:n})):0!=r.length&&t.clearAndFriends()}}},created:function(){t=this},attached:function(){t.setData({ICON:e.ICON})},data:{andFriends:{title:"提醒谁看",result:[]}},methods:{toSelectMember:function(){var e="",r=t.data.andFriends.result,n=r.length;n>0&&r.forEach(function(t,r){r==n-1?e+=t.userid:e=e+t.userid+","}),wx.navigateTo({url:"../selectMember/selectMember?groupId="+t.data.groupId+"&selected="+e})},clearAndFriends:function(){var e=t.data.andFriends;e.title="提醒谁看",e.result.length=0,t.setData({andFriends:e}),t.triggerEvent("returnResult",e.result)}}}); 
 			}); 	require("pages/publish/components/andFriends/andFriends.js");
 		__wxRoute = 'pages/publish/components/dateAndTime/dateAndTime';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/components/dateAndTime/dateAndTime.js';	define("pages/publish/components/dateAndTime/dateAndTime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../icon.js"),e=void 0;Component({properties:{},data:{datetime:{title:"设置发布时间",show:!1,result:""}},created:function(){e=this},attached:function(){e.setData({ICON:t.ICON})},ready:function(){},methods:{openDatetime:function(){var t=e.data.datetime;t.show=!0,e.setData({datetime:t})},showDatetime:function(t){t.detail.datetime;console.log("e",t);var a=t.detail.year,i=t.detail.month,r=t.detail.day,d=t.detail.hour,n=t.detail.minute,o=e.data.datetime;o.title="发布时间",o.show=!1,o.result=a+"年"+i+"月"+r+"日 "+d+":"+n,e.setData({datetime:o}),e.triggerEvent("returnResult",a+"-"+i+"-"+r+" "+d+":"+n+":00")},clearDatetime:function(){var t=e.data.datetime;t.title="设置发布时间",t.result="",e.setData({datetime:t}),e.triggerEvent("returnResult","")}}}); 
 			}); 	require("pages/publish/components/dateAndTime/dateAndTime.js");
 		__wxRoute = 'pages/publish/components/datetime/datetime';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/components/datetime/datetime.js';	define("pages/publish/components/datetime/datetime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,a){for(var e=[],n=t;n<=a;n++)n<10&&(n="0"+n),n>=10&&(n=""+n),e.push(n);return e}function a(t,a){for(var e=new Date(t,a,0).getDate(),n=[],r=1;r<=e;r++)r<10&&(r="0"+r),n.push(r);return n}var e=void 0;Component({properties:{show:{type:Boolean,value:!1,observer:function(t,a){t&&e.setData({datetimePickerShow:t,datetimeBackgroundShow:t})}},value:{type:Object,value:Array}},data:{years:Array,year:String,months:Array,month:String,days:Array,day:String,hours:Array,hour:String,minutes:Array,minute:String,value:Array,datetimePickerShow:!1,datetimeBackgroundShow:!1,flag:-1},created:function(){(e=this).oldMonth=-1},attached:function(){e.initDatetime(),e.setDefaultDatetime()},methods:{bindChange:function(t){var n=t.detail.value;e.setData({year:e.data.years[n[0]],month:e.data.months[n[1]],day:e.data.days[n[2]],hour:e.data.hours[n[3]],minute:e.data.minutes[n[4]]});var r=this.data.years[n[0]],o=this.data.months[n[1]];if(e.oldMonth!=o){e.oldMonth=o;var i=a(r,o);this.setData({days:i})}},initDatetime:function(){var a=new Date,n=t(a.getFullYear()-18,a.getFullYear()),r=t(1,12),o=t(1,31),i=t(0,23),u=t(0,59);e.setData({years:n,months:r,days:o,hours:i,minutes:u})},setDefaultDatetime:function(){var t=new Date,a=t.getFullYear(),n=e.data.years,r=t.getMonth()+1,o=t.getDate(),i=t.getHours(),u=t.getMinutes(),s=parseInt(r);e.setData({value:[n.length-1,r-1,o-1,i,u],year:a<10?"0"+a:""+a,month:s<10?"0"+s:""+s,day:o<10?"0"+o:""+o,hour:i<10?"0"+i:""+i,minute:u<10?"0"+u:""+u})},saveSelected:function(){var t=new Date,a=e.data.year+"/"+e.data.month+"/"+e.data.day+" "+e.data.hour+":"+e.data.minute+":00";new Date(a).getTime()>t.getTime()?wx.showToast({title:"选择的时间不能大于当前时间",icon:"none"}):(e.cancleSelected(),setTimeout(function(){var t=e.data.years,a=e.data.year,n=e.data.month,r=e.data.day,o=e.data.hour,i=e.data.minute,u=parseInt(n);e.setData({value:[a-t[0],n-1,r-1,o,i],year:a<10?"0"+a:""+a,month:u<10?"0"+u:""+u,day:r<10?"0"+r:""+r,hour:o<10?"0"+o:""+o,minute:i<10?"0"+i:""+i}),e.triggerEvent("returnResult",{year:a,month:n,day:r,hour:o,minute:i})},100))},cancleSelected:function(){e.setData({datetimePickerShow:!1,datetimeBackgroundShow:!1}),setTimeout(function(){e.setData({show:!1})},100)},preventScroll:function(){}}}); 
 			}); 	require("pages/publish/components/datetime/datetime.js");
 		__wxRoute = 'pages/publish/components/inputText/inputText';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/components/inputText/inputText.js';	define("pages/publish/components/inputText/inputText.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../icon.js"),e=void 0;Component({properties:{maxLength:{type:Number,value:120},placeholder:{type:String,value:"留下美好回忆"}},data:{ICON:Object,text:"",IOSHack:!1},created:function(){e=this},attached:function(){if("ios"==wx.getSystemInfoSync().platform){e.setData({IOSHack:!0})}e.setData({ICON:t.ICON})},methods:{inputText:function(t){var a=t.detail.value;a=a.replace(/(^\s*)|(\s*$)/g,""),e.setData({text:a}),e.triggerEvent("returnResult",a)}}}); 
 			}); 	require("pages/publish/components/inputText/inputText.js");
 		__wxRoute = 'pages/publish/components/location/location';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/components/location/location.js';	define("pages/publish/components/location/location.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(){return new Promise(function(t,o){new n({key:"PS3BZ-7WVKG-NMSQO-IA43X-OY5B7-WTFBC"}).reverseGeocoder({success:function(o){var e=o.result.formatted_addresses.recommend;t(e)},fail:function(t){wx.showToast({title:"默认地址获取失败",icon:"none"}),o({msg:"默认地址获取失败",code:-1})}})})}function o(){return new Promise(function(t,o){wx.getSetting({success:function(e){e.authSetting["scope.userLocation"]?t(!0):o(!1)},fail:function(t){o(!1),console.log("wx.getSettingFail",t)}})})}var e=require("../../icon.js"),n=require("../../../../utils/qqmap-wx-jssdk.min.js"),c=void 0;Component({properties:{},data:{location:{title:"所在位置",result:""}},created:function(){c=this},ready:function(){o().then(function(){c.setDefaultLocation()}).catch(function(){wx.authorize({scope:"scope.userLocation",success:function(t){c.setDefaultLocation()},fail:function(t){console.log("授权失败1",t)}})}),c.setData({ICON:e.ICON})},methods:{setDefaultLocation:function(){t().then(function(t){var o=c.data.location;o.title="发布于",o.result=t,c.setData({location:o}),c.triggerEvent("returnResult",o)}).catch(function(t){console.log("err"),location.title="所在位置",location.result="",c.setData({location:location}),c.triggerEvent("returnResult",location)})},deleteLocation:function(){var t=c.data.location;t.title="所在位置",t.result="",c.setData({location:t}),c.triggerEvent("returnResult",t)},openChooseLocation:function(){o().then(function(){wx.chooseLocation({success:function(t){var o=c.data.location;o.title="发布于",o.result=t.name,c.setData({location:o}),c.triggerEvent("returnResult",o)},fail:function(t){console.log("chooseLocation-fail",t)}})}).catch(function(){wx.showModal({title:"地理位置授权提示",content:"你当前没有授权忆年小程序使用地理位置功能，是否需要授权？",success:function(t){t.confirm&&wx.openSetting({success:function(t){c.setDefaultLocation()}})}})})}}}); 
 			}); 	require("pages/publish/components/location/location.js");
 		__wxRoute = 'pages/publish/components/syncToOtherAlbums/syncToOtherAlbums';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/components/syncToOtherAlbums/syncToOtherAlbums.js';	define("pages/publish/components/syncToOtherAlbums/syncToOtherAlbums.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../icon.js"),e=void 0;Component({properties:{groupId:{type:String,value:""},selectedSyncAlbums:{type:Object,observer:function(t,r){var a=e.data.sync;t.groupNames.length>0?(a.title="同步到相册",a.result=t.groupNames,a.groupIds=t.groupIds):a.title="同步到其它相册",e.setData({sync:a})}}},data:{sync:{title:"同步到其它相册",result:"",groupIds:""}},created:function(){(e=this).clearSyncAlbumStorage()},attached:function(){e.setData({ICON:t.ICON})},ready:function(){},methods:{toSyncPage:function(){wx.navigateTo({url:"/pages/others/uploadsync/uploadsync?groupid="+e.data.groupId})},clearSyncAlbumStorage:function(){wx.getStorageSync("strId")&&wx.removeStorageSync("strId"),wx.getStorageSync("strName")&&wx.removeStorageSync("strName")},clearSyncResult:function(){var t=e.data.sync;t.title="同步到其它相册",t.result="",t.groupIds="",e.setData({sync:t}),e.clearSyncAlbumStorage(),e.triggerEvent("returnResult",t)}}}); 
 			}); 	require("pages/publish/components/syncToOtherAlbums/syncToOtherAlbums.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(){function t(t,e){var a=[],i=!0,s=!1,o=void 0;try{for(var n,r=t[Symbol.iterator]();!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){s=!0,o=t}finally{try{!i&&r.return&&r.return()}finally{if(s)throw o}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=getApp(),i=require("../../utils/util.js"),s=require("../../utils/config.js"),o=require("../../utils/api.js"),n=(require("../../utils/promise.js"),require("../../utils/albumsjump.js").albumsjump),r=0,u=0,c=0,d=0;Page({data:{showfuli:!0,show:!0,showpuzze:!1,searchState:!1,showintroduce:!1,page:"index",animationDataed:{},newPerState:!1,loadImgState:!0,showVersion:!0,GetActivityMsg:{},hasCreated:{},showDisposeModel:!1,classArr:["pic1","pic2","pic3"],textArr:["精彩内容正在赶来...","稍等一下啦...","小忆正在加载中..."],pagenum:1,showLoadingImg:!1,loadingImgOrText:!0,usernumber:3006789,maxnumber:10000009,activityBanner:{},showDelete:!1,isGroupCreator:!1,showAuthPic:!1,authpic:{belowImgUrl:"http://oibl5dyji.bkt.clouddn.com/0408_default.png"},showNewUser:!1,newUserPic:"http://oibl5dyji.bkt.clouddn.com/0408_newShow.png",showMsg:{dz:1,tz:1,pl:1,jf:1,tx:1}},onLoad:function(t){a.stat.statpv({route:this.route,options:t}),this.setData({loadImgState:!1});var e=this;e.toastState=!0,t.shareUserid&&(e.shareUserid=t.shareUserid),t.shCode&&(e.shCode=t.shCode);t.q&&t.q.indexOf("api.uboxsale.com")>0&&(this.setData({ufApiImgUrl:"https://api.uboxsale.com/Miniapp/Coupon/ufcode/"+t.q}),this.port="友粉导流",wx.setStorage({key:"hasGetTicket",data:"yes"})),t.version&&(this.version=t.version),t.port&&(this.port=t.port,a.globalData.port=t.port),t.fromUserID&&(this.fromUserID=t.fromUserID),t.fromSpaceID&&(this.fromSpaceID=t.fromSpaceID),t.fromEventID&&(this.fromEventID=t.fromEventID),this.lastPage=t.lastPage,this.lastPage=this.lastPage||"null",this.isSubmit=1,wx.getStorageSync("userInfo")||(this.setData({showAuthPic:!0}),i.getAuthPic("home",0,function(t){e.setData({authpic:t})})),wx.getStorage({key:"peopleCount",success:function(t){0!=t.data&&t.data,e.setData({maxnumber:t.data})}})},addgroup:function(t){var s=t.detail.formId;if(console.log(s),i.sendFormId(a.globalData.userInfo.userid,s),wx.getStorageSync("userid")){var o=this;"object"==e(this.button)&&this.button.push({name:"createAlbum"}),wx.navigateTo({url:"../makegroup/makegroup?lastPage=index",success:function(t){o.data.showNewUser&&o.setData({showNewUser:!1})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！创建相册功能不可用！",showCancel:!1})},ufApiSuccess:function(){wx.showModal({title:"领券成功",content:"成功领取友宝优惠券",showCancel:!0,cancelText:"继续领券",confirmText:"知道了",complete:function(t){t.cancel&&wx.navigateBack({delta:-999})}})},ufApiError:function(){console.log("发券失败")},changepage:function(t){var e=t.target.dataset.type;e!=this.data.page&&this.setData({page:e})},hiddenmodel:function(){var t=wx.createAnimation({transformOrigin:"50% 50%",duration:300,timingFunction:"ease",delay:0});t.scale(0,0).rotate(90).step(),this.setData({animationData:t.export()})},showmodel:function(){var t=wx.createAnimation({transformOrigin:"50% 50%",duration:300,timingFunction:"ease",delay:0});t.scale(1,1).rotate(360).step(),this.setData({animationData:t.export()})},makepingtu:function(){wx.navigateTo({url:"../makepingtu/makepingtu"})},onShow:function(){var t=this,e=this.version?this.version:"",s=this.port?this.port:"",n=this.fromUserID?this.fromUserID:0,r=this.fromSpaceID?this.fromSpaceID:0,u=this.fromEventID?this.fromEventID:0,c=i.randomNum(0,2);t.setData({promptText:c,showDelete:!1,isGroupCreator:!1}),t.delGroupid=0,a.getUserInfo(function(e){t.setData({showAuthPic:!1,switchState:null!=wx.getStorageSync("userInfo").uLockPass}),null!=wx.getStorageSync("userInfo").uLockPass&&a.globalData.pwdState&&wx.navigateTo({url:"/pages/others/password/password?setPwd=shuru"});var n="yes"==e.isnew;if("yes"==e.isnew&&(t.setData({showNewUser:!0}),i.getAuthPic("homeGuidance",0,function(e){t.setData({newUserPic:e.belowImgUrl})})),1==t.isSubmit){t.enterCurrentTimestamp=(new Date).getTime();var r={basicInfo:{userid:e.userid,source:s,"isActivityAlbum ":"null","lastPage ":t.lastPage,timestamp:t.enterCurrentTimestamp,identification:e.userid+"_"+a.enterTimestamp},type:"enter",data:{page:{name:"index",page_identification:e.userid+"_"+t.enterCurrentTimestamp}}};0==a.sendValue&&i.sendData(e.userid,r),t.button=[]}else t.isSubmit=1;a.globalData.utime||t.flashSalegetUserInfo(e.userid),t.getgrouplist(),t.getActivityBanner(),t.getIsHasMsg(),t.everCreated(e.userid),t.data.showVersion&&wx.request({url:o.getUrl("YinianProject/h5/GetActivityMsg"),data:{userid:e.userid},success:function(a){0==a.data.code&&(t.setData({GetActivityMsg:a.data.data[0],showintroduce:n}),t.activityId=a.data.data[0].id,n&&wx.request({url:o.getUrl("YinianProject/h5/SetUserJoinActivity"),data:{activityId:t.activityId,userid:e.userid},success:function(t){}}))}}),a.getshowState(function(e){t.setData({showpuzze:e,showintroduce:n,userpic:a.globalData.userInfo.upic})});a.globalData.userInfo.userid;t.shareUserid&&n&&i.wxreq({pathname:"YinianProject/points/SuccessInviteFriend",data:{userid:t.shareUserid}}).then(function(t){console.log(t)}),t.shareUserid&&t.shCode&&n&&("wx"==t.shCode?i.wxreq({pathname:"YinianProject/activity/ReceiveEncourageReward",data:{userid:t.shareUserid,type:"shareToWechatGroup"}}).then(function(t){console.log(t)}):"friend"==t.shCode&&i.wxreq({pathname:"YinianProject/activity/ReceiveEncourageReward",data:{userid:t.shareUserid,type:"shareToMoments"}}).then(function(t){console.log(t)}))},e,s,n,r,u,"index",function(){t.setData({showAuthPic:!1})})},onHide:function(){1==this.isSubmit&&this.sendLeaveData()},onUnload:function(){},sendLeaveData:function(){var t=this,e=this.port?this.port:"",s=wx.getStorageSync("userid"),o=(new Date).getTime()-t.enterCurrentTimestamp,n={basicInfo:{userid:s,source:e," isActivityAlbum ":"null","lastPage ":t.lastPage,timestamp:(new Date).getTime(),identification:s+"_"+a.enterTimestamp},type:"leave",data:{page:{name:"index",page_identification:s+"_"+t.enterCurrentTimestamp},botton:t.button,time:o}};0==a.sendValue&&i.sendData(s,n)},prevent:function(){},afterReadShow:function(){wx.navigateTo({url:"../commonpage/makeBurnAfterRead/make"})},getIsHasMsg:function(){var t=this;i.wxreq({pathname:"YinianProject/msgCenter/getAllMsgStatus",data:{userId:wx.getStorageSync("userid")}}).then(function(e){console.log(e),0==e.code&&t.setData({showMsg:e.data[0]})})},toMsgCenter:function(t){var e=t.detail.formId;i.sendFormId(a.globalData.userInfo.userid,e),wx.navigateTo({url:"/pages/msgcenter/msgcenter?from=myself&showMsg="+JSON.stringify(this.data.showMsg)})},showDelete:function(e){var a=e.currentTarget.dataset.mydata;if(a){var i=this,s=a.split(","),o=t(s,2);i.delCreator=o[0],i.delGroupid=o[1];var n=wx.getStorageSync("userInfo");n&&(n.userid==i.delCreator?this.setData({isGroupCreator:!0,showDelete:!0}):this.setData({isGroupCreator:!1,showDelete:!0}))}},closeDelete:function(){this.setData({showDelete:!1})},leaveGroup:function(){var t=wx.getStorageSync("userInfo");if(t&&t.userid){var e=this,a=e.data.isGroupCreator?"解散相册":"退出相册",i=e.data.isGroupCreator?"是否确定解散相册":"是否确定退出相册",s=e.data.isGroupCreator?"已解散该相册":"已退出该相册",n=e.data.isGroupCreator?"YinianProject/yinian/DeleteGroup":"YinianProject/yinian/LeaveAlbum";wx.showModal({title:a,content:i,showCancel:!0,success:function(i){i.confirm&&(wx.showToast({title:"请稍后",icon:"loading",duration:15e3,mask:!0}),wx.request({url:o.getUrl(n),data:{userid:t.userid,groupid:e.delGroupid,source:"smallApp"},success:function(t){"success"==t.data.msg?(wx.showToast({title:s,success:function(){}}),[].concat(e.data.grouplist).forEach(function(t,a){t.groupid==e.delGroupid&&e.data.grouplist.splice(a,1)}),e.setData({grouplist:e.data.grouplist,showDelete:!1,isGroupCreator:!1}),e.delGroupid=0):(wx.showToast({title:a+"失败"}),e.setData({showDelete:!1,isGroupCreator:!1}),e.delGroupid=0)},fail:function(){wx.showToast({title:a+"失败"}),e.setData({showDelete:!1,isGroupCreator:!1}),e.delGroupid=0}}))}})}},everCreated:function(t){var e=this;wx.request({url:o.getUrl("YinianProject/h5/getUserCreateGroupCnt"),data:{userid:t},success:function(t){0==t.data.code&&e.setData({hasCreated:t.data.data[0]})}})},getgrouplist:function(){var t=this;i.wxreq({pathname:"YinianProject/yinian/ShowNoPicCntGroupWithTopNew",data:{userid:a.globalData.userInfo.userid,pagenum:10*t.data.pagenum,type:"refresh"}}).then(function(e){t.isLoading=!1,0==e.code?(e.data.forEach(function(t){t.gnum>=1e4&&(t.gnum=parseInt(t.gnum/1e4)+"w+")}),t.setData({grouplist:e.data,newPerState:!0,loadImgState:!0,showLoadingImg:!1,loadingImgOrText:!0}),wx.setStorage({key:"groupListDetail",data:e.data})):wx.showModal({title:"提示",content:"网络错误，请稍后重试",showCancel:!1,success:function(){t.setData({loadImgState:!0})}})}).catch(function(e){wx.showModal({title:"提示",content:"网络忙,请检查网络重试",showCancel:!1,success:function(){t.setData({loadImgState:!0})}})})},getActivityBanner:function(){var t=this;i.wxreq({pathname:"YinianProject/activity/getBanner",data:{}}).then(function(e){0==e.code&&t.setData({activityBanner:e.data[0]})})},toActivityPage:function(t){var e=t.detail.formId;i.sendFormId(a.globalData.userInfo.userid,e),wx.switchTab({url:"/pages/activitypage/activityindex/activityindex"})},onReachBottom:function(){wx.getStorageSync("userid")&&this.data.grouplist&&0!=this.data.grouplist.length&&(this.isLoading||this.loadmoregroup())},loadmoregroup:function(){var t=this;t.setData({showLoadingImg:!0,loadingImgOrText:!0}),this.isLoading=!0,i.wxreq({pathname:"YinianProject/yinian/ShowNoPicCntGroupWithTopNew",data:{userid:a.globalData.userInfo.userid,pagenum:t.data.pagenum+1,type:""}}).then(function(e){if(0!=e.code)return t.isLoading=!1,void wx.showModal({title:"提示",content:"网络错误，请稍后重试",showCancel:!1,success:function(){t.setData({loadImgState:!0,showLoadingImg:!1})}});0!=e.data.length?(e.data.forEach(function(t){t.gnum>=1e4&&(t.gnum=parseInt(t.gnum/1e4)+"w+")}),t.data.grouplist=t.data.grouplist.concat(e.data),t.setData({grouplist:t.data.grouplist,newPerState:!0,loadImgState:!0,pagenum:t.data.pagenum+1,showLoadingImg:!1}),t.isLoading=!1,wx.setStorage({key:"groupListDetail",data:e.data})):t.setData({showLoadingImg:!0,loadingImgOrText:!1})}).catch(function(e){t.setData({showLoadingImg:!1}),t.isLoading=!1,wx.showModal({title:"提示",content:"网络忙,请检查网络重试",showCancel:!1,success:function(){t.setData({loadImgState:!0})}})})},makeTop:function(t){var e=t.detail.formId;i.sendFormId(a.globalData.userInfo.userid,e);var s=this,n=t.currentTarget.dataset.index,r=s.data.grouplist[n],u=r.isTop;s.text=u?"取消置顶":"置顶",wx.showModal({title:"提示",content:"是否"+s.text+"该相册",success:function(t){if(t.confirm){var e=1==u?"no":"yes";wx.request({url:o.getUrl("YinianProject/yinian/SetGroupIsTopNew"),data:{userid:wx.getStorageSync("userid"),groupid:r.groupid,isTop:e},success:function(t){0==t.data.code&&wx.showToast({title:s.text+"成功",icon:"success",success:function(t){s.getgrouplist()}})}})}}})},closeNewUser:function(){this.setData({showNewUser:!1})},modelsession:function(){},showfuli:function(){this.setData({showfuli:!1})},photoalbum:function(){this.setData({show:!0})},toSearch:function(t){var e=t.detail.formId;i.sendFormId(a.globalData.userInfo.userid,e),wx.navigateTo({url:"/pages/others/search/search"})},userInfoHandler:function(t){a.ger},closeVersion:function(t){var e=this,i=this.version?this.version:"",s=this.port?this.port:"",o=this.fromUserID?this.fromUserID:0,n=this.fromSpaceID?this.fromSpaceID:0,r=this.fromEventID?this.fromEventID:0;a.getUserInfo(function(u){"新用户"!=u.nickName?e.closeVersionHttp():"getUserInfo:fail auth deny"==t.detail.errMsg?wx.showModal({title:"提示",content:"只有授权之后才能使用相册哦！",showCancel:!1}):a.newAuthfunction(function(t){"新用户"!=t.nickName&&e.closeVersionHttp()},i,s,o,n,r,t.detail,"",function(){})},i,s,o,n,r,"index",function(){})},closeVersionHttp:function(){var t=this;this.setData({showVersion:!1}),wx.getStorageSync("userid")&&wx.request({url:o.getUrl("YinianProject/h5/SetUserJoinActivity"),data:{activityId:t.activityId,userid:wx.getStorageSync("userid")},success:function(t){}})},toGroupScoll:function(t){console.log(122);var e=t.currentTarget.dataset.groupid,a=t.currentTarget.dataset.grouptype;n({groupNewType:a,data:{lastPage:"index",from:"grouplist",groupid:e},navigator:"navigate"})},ToActivityGroup:function(t){var e=this,i=this.version?this.version:"",s=this.port?this.port:"",o=this.fromUserID?this.fromUserID:0,n=this.fromSpaceID?this.fromSpaceID:0,r=this.fromEventID?this.fromEventID:0;a.getUserInfo(function(t){"新用户"!=t.nickName?e.ToActivityGroupHttp():"getUserInfo:fail auth deny"==res.detail.errMsg?wx.showModal({title:"提示",content:"只有授权之后才能使用相册哦！",showCancel:!1}):a.newAuthfunction(function(t){"新用户"!=t.nickName&&e.ToActivityGroupHttp()},i,s,o,n,r,res.detail,"",function(){})},i,s,o,n,r,"index",function(){})},ToActivityGroupHttp:function(){var t=this,e=t.data.GetActivityMsg.groupid,a=t.data.GetActivityMsg.groupNewType;wx.getStorageSync("userid")&&wx.request({url:o.getUrl("YinianProject/h5/SetUserJoinActivity"),data:{activityId:t.activityId,userid:wx.getStorageSync("userid")},success:function(t){}}),e&&n({groupNewType:a,data:{lastPage:"index",from:"grouplist",groupid:e},navigator:"redirect"})},toSpecailActivity:function(){var t=this,e=this.version?this.version:"",i=this.port?this.port:"",s=this.fromUserID?this.fromUserID:0,o=this.fromSpaceID?this.fromSpaceID:0,n=this.fromEventID?this.fromEventID:0;a.getUserInfo(function(r){"新用户"!=r.nickName?t.toSpecailActivityHttp():"getUserInfo:fail auth deny"==res.detail.errMsg?wx.showModal({title:"提示",content:"只有授权之后才能使用相册哦！",showCancel:!1}):a.newAuthfunction(function(e){"新用户"!=e.nickName&&t.toSpecailActivityHttp()},e,i,s,o,n,res.detail,"",function(){})},e,i,s,o,n,"index",function(){})},toSpecailActivityHttp:function(t){var e=this.data.GetActivityMsg.title,a=this;if(e){wx.navigateTo({url:"/"+e});var s=wx.getStorageSync("userid")||0,n={userId:s};i.joinSpacialActivity(n),s&&wx.request({url:o.getUrl("YinianProject/h5/SetUserJoinActivity"),data:{activityId:a.activityId,userid:s},success:function(t){}})}},onShareAppMessage:function(){this.isSubmit=2;var t=wx.getStorageSync("userInfo").userid||0;return{title:a.globalData.userInfo.nickName+"和你分享了几段时光",desc:"这里面有几张我很喜欢的照片，快来看看你喜欢嘛？",path:"/pages/index/index?port=小程序分享&fromUserID="+t,success:function(){a.stat.request({operation:"shareCallback"})}}},fasttoknow:function(t){var e=t.detail.formId;i.sendFormId(a.globalData.userInfo.userid,e);var o=this;o.setData({showDisposeModel:!0,usernumber:s.usernumber}),clearInterval(o.timerinterval),o.timerinterval=null,o.usernumberchange()},usernumberchange:function(){var t=this;t.timerinterval=setInterval(function(){if(t.data.usernumber>t.data.maxnumber){clearInterval(t.timerinterval),t.timerinterval=null;var e=t.toThousands(t.data.maxnumber);t.setData({usernumber:e})}else t.data.usernumber+=323456,t.setData({usernumber:t.data.usernumber})},100)},toThousands:function(t){for(var t=(t||0).toString(),e="";t.length>3;)e=","+t.slice(-3)+e,t=t.slice(0,t.length-3);return t&&(e=t+e),e},closeModel:function(){this.setData({showDisposeModel:!1,classArr:["pic1","pic2","pic3"]})},changestart:function(t){r=t.touches[0].pageX,u=t.touches[0].pageY},changemove:function(t){},changend:function(t){var e=this;if(c=t.changedTouches[0].pageX,d=t.changedTouches[0].pageY,r-c>30){if("pic2"==e.data.classArr[0])return;e.data.classArr.unshift(e.data.classArr[e.data.classArr.length-1]),e.data.classArr.pop(e.data.classArr[e.data.classArr.length-1]),e.setData({classArr:e.data.classArr})}else if(c-r>30){if("pic1"==e.data.classArr[0])return;e.data.classArr.push(e.data.classArr[0]),e.data.classArr.shift(e.data.classArr[0]),e.setData({classArr:e.data.classArr})}},donothing:function(){},flashSalegetUserInfo:function(t){i.wxreq({pathname:"YinianProject/flashSale/getUserInfo",data:{userId:t}}).then(function(t){0==t.code&&(a.globalData.utime=t.data[0].utime)},function(t){})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/timelinelogin/timelinelogin';__wxRouteBegin = true; 	define("pages/timelinelogin/timelinelogin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),i=require("../../utils/util.js"),r=require("../../utils/config.js").newGroupType,o=require("../../utils/config.js").nweGroupTypeNoLover;Page({data:{upic:"",userName:"",groupName:""},onLoad:function(i){i.version&&(this.version=i.version),i.port&&(this.port=i.port,e.globalData.port=i.port,this.setData({port:i.port})),i.fromUserID&&(this.fromUserID=i.fromUserID),i.fromSpaceID&&(this.fromSpaceID=i.fromSpaceID),i.fromEventID&&(this.fromEventID=i.fromEventID),this.na=this.version?this.version:"",this.nb=this.port?this.port:"",this.nc=this.fromUserID?this.fromUserID:0,this.nd=this.fromSpaceID?this.fromSpaceID:0,this.ne=this.fromEventID?this.fromEventID:0;var t=this,n=Object.keys(i);if(this.query=[],t.clickfrom=i.clickfrom,n.forEach(function(e){t.query.push(e+"="+i[e])}),this.grouptype=i.groupNewType?parseInt(i.groupNewType):0,r.indexOf(t.grouptype)>-1&&"eid"==t.clickfrom)wx.redirectTo({url:"/pages/eventdetail/eventdetail?"+t.query.join("&")});else{e.getUserInfo(function(e){if("新用户"!=e.nickName)if(o.indexOf(t.grouptype)>-1)wx.redirectTo({url:"/pages/grouptypescoll/grouptypescoll?"+t.query.join("&")});else if(11==t.grouptype)wx.redirectTo({url:"/pages/loversalbum/index/index?"+t.query.join("&")});else if(4==t.grouptype)wx.redirectTo({url:"/pages/familyAlbum/index/index?"+t.query.join("&")});else{var i="";i="group"==t.clickfrom?"/pages/viewscoll/viewscoll?"+t.query.join("&"):"eid"==t.clickfrom?"/pages/eventdetail/eventdetail?"+t.query.join("&"):"party"==t.clickfrom?"/pages/party/party?"+t.query.join("&"):"grouptypescoll"==t.clickfrom?"/pages/grouptypescoll/grouptypescoll?"+t.query.join("&"):"storiesIndex"==t.clickfrom?"/pages/stories/pages/landing/landing?"+t.query.join("&"):"/pages/viewscoll/viewscoll?"+t.query.join("&"),wx.redirectTo({url:i})}},this.na,this.nb,this.nc,this.nd,this.ne,function(){});var s=i.groupid||i.gId;this.getShareInformation(i.fromUserID,s)}},onReady:function(){},userInfoHandler:function(i){var r=this;"getUserInfo:fail auth deny"==i.detail.errMsg?wx.switchTab({url:"/pages/index/index"}):e.newAuthfunction(function(e){if("新用户"!=e.nickName)if(o.indexOf(r.grouptype)>-1)wx.redirectTo({url:"/pages/grouptypescoll/grouptypescoll?"+r.query.join("&")});else if(11==r.grouptype||"11"==r.grouptype)wx.redirectTo({url:"/pages/loversalbum/index/index?"+r.query.join("&")});else if(4==r.grouptype)wx.redirectTo({url:"/pages/familyAlbum/index/index?"+r.query.join("&")});else{var i="";i="group"==r.clickfrom?"/pages/viewscoll/viewscoll?"+r.query.join("&"):"eid"==r.clickfrom?"/pages/eventdetail/eventdetail?"+r.query.join("&"):"party"==r.clickfrom?"/pages/party/party?"+r.query.join("&"):"grouptypescoll"==r.clickfrom?"/pages/grouptypescoll/grouptypescoll?"+r.query.join("&"):"storiesIndex"==r.clickfrom?"/pages/stories/pages/landing/landing?"+r.query.join("&"):"/pages/viewscoll/viewscoll?"+r.query.join("&"),wx.redirectTo({url:i})}},this.na,this.nb,this.nc,this.nd,this.ne,i.detail,"",function(){})},onShow:function(){},onHide:function(){},onUnload:function(){},getShareInformation:function(e,r){wx.showLoading({title:"加载中"});var o=this;i.wxreq({pathname:"YinianProject/h5/getUserAndGroupName",data:{userId:e,groupId:r}}).then(function(e){wx.hideLoading(),0==e.code&&o.setData({upic:e.data[0].pic,userName:e.data[0].userName,groupName:e.data[0].groupName})},function(e){wx.hideLoading()})}}); 
 			}); 	require("pages/timelinelogin/timelinelogin.js");
 		__wxRoute = 'pages/myself/myself';__wxRouteBegin = true; 	define("pages/myself/myself.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=require("../../utils/util.js"),n=require("../../utils/api.js"),i=!1;Page({data:{userId:"",signText:"点击签到",userInfo:{loadSignIn:-1,isSignIn:!1,showSign:1}},onLoad:function(t){e.stat.statpv({route:this.route,options:t}),this.isLoadUserInfo=-1},onShow:function(){var t=this,n=this;e.getUserInfo(function(e){"新用户"!=e.nickName?n.getUserInfo():wx.redirectTo({url:"/pages/minelogin/minelogin"})}),wx.getStorageSync("userid")?(n.setData({userId:wx.getStorageSync("userid")}),n.setData({switchState:null!=wx.getStorageSync("userInfo").uLockPass}),0!==this.isLoadUserInfo||setTimeout(function(){t.isLoadUserInfo=-1},100)):wx.showModal({title:"错误",content:"获取用户ID失败，查看详情失败",showCancel:!1,success:function(e){e.confirm&&wx.switchTab({url:"/pages/index/index"})}})},toXiaoYingXiang:function(){var e=this;wx.navigateToMiniProgram({appId:"wx73ef5bcc7a858a68",path:"pages/index/index",success:function(t){e.isLoadUserInfo=0,console.log("EE")}})},toTenSeconds:function(e){var t=this;e.detail.formId;wx.navigateToMiniProgram({appId:"wx44ad13e0063a526d",path:"pages/index/index",success:function(e){t.isLoadUserInfo=0,console.log(e)}})},toCalc:function(e){var t=this;console.log(e);e.detail.formId;wx.navigateToMiniProgram({appId:"wxae8c385faaf97033",path:"pages/index/index",success:function(e){t.isLoadUserInfo=0,console.log(e)}})},conversion:function(e){return e/1024/1024<1?(e/1024).toFixed(2)+"M":(e/1024/1024).toFixed(1)+"M"},prevent:function(){},changeAvatarPic:function(){var e=this;wx.getStorageSync("userid")?wx.request({url:n.getUrl("YinianProject/yinian/GetUploadToken"),data:{},method:"GET",success:function(t){var i=t.data.data[0].token;wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传",icon:"loading",duration:2e3}),wx.uploadFile({url:"https://upload.qiniup.com",filePath:t.tempFilePaths[0],name:"file",formData:{key:t.tempFilePaths[0].split("//")[1],token:i},success:function(t){var i=JSON.parse(t.data);new Date;wx.request({url:n.getUrl("YinianProject/yinian/ModifySingleInfo"),data:{data:i.key,userid:wx.getStorageSync("userid"),type:"pic"},success:function(t){0==t.data.code&&wx.showToast({title:"修改成功",icon:"success",duration:2e3,success:function(){setTimeout(function(){wx.hideToast(),e.getUserInfo()},1500)}})}})}})}})}}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},switchChange:function(e){this.isLoadUserInfo=0,e.detail.value?wx.navigateTo({url:"/pages/others/password/password?setPwd=set"}):wx.navigateTo({url:"/pages/others/password/password?setPwd=cancel"})},getUserInfo:function(){var e=wx.getStorageSync("userid"),t=-1,i=this;setTimeout(function(){-1===t&&wx.showNavigationBarLoading()},500),wx.request({url:n.host+"/YinianProject/points/showPersonInfo",method:"GET",data:{userid:e+""},success:function(e){if(0==e.data.code){var t=e.data.data[0];i.setData({userInfo:{avatar:t.upic,nick:t.unickname,integral:t.useablePoints,isSignIn:t.isTodaySign,signDay:t.signDay,usedSpace:i.conversion(t.uusespace),loadSignIn:1,showSign:t.showSign}}),i.data.userInfo.isSignIn&&i.setData({signText:"已连续签到"+i.data.userInfo.signDay+"天"})}else wx.showToast({title:"数据加载失败",image:"/images/toast_warning.png",duration:2e3})},error:function(e){wx.showToast({title:"数据加载失败",image:"/images/toast_warning.png",duration:2e3})},fail:function(){wx.showToast({title:"数据加载失败",image:"/images/toast_warning.png",duration:2e3})},complete:function(){wx.hideNavigationBarLoading(),t=0}})},signIn:function(e){var a=e.detail.formId;if(t.sendFormId(this.data.userId,a),-1!==this.data.userInfo.loadSignIn)if(this.data.userInfo.isSignIn)wx.showToast({title:"今天已签到",icon:"success",duration:2e3});else if(i)wx.showToast({title:"操作过于频繁",image:"/images/toast_warning.png",duration:2e3});else{i=!0;var s=-1,o=this;setTimeout(function(){-1===s&&wx.showLoading({title:"处理中"})},500),wx.request({url:n.host+"/YinianProject/points/DailySignInNew",method:"GET",data:{userid:o.data.userId+"",signType:0},success:function(e){0===e.data.code?o.getUserInfo():wx.showToast({title:"签到失败",image:"/images/toast_warning.png",duration:2e3})},error:function(e){wx.showToast({title:"签到失败",image:"/images/toast_warning.png",duration:2e3})},fail:function(){wx.showToast({title:"签到失败",image:"/images/toast_warning.png",duration:2e3})},complete:function(){wx.hideLoading(),s=0,i=!1}})}else wx.showToast({title:"网络不好请稍后",image:"/images/toast_warning.png",duration:2e3})},changeLoadUserInfo:function(){this.isLoadUserInfo=0}}); 
 			}); 	require("pages/myself/myself.js");
 		__wxRoute = 'pages/moment/moment';__wxRouteBegin = true; 	define("pages/moment/moment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(){function t(t,a){var e=[],i=!0,o=!1,s=void 0;try{for(var n,r=t[Symbol.iterator]();!(i=(n=r.next()).done)&&(e.push(n.value),!a||e.length!==a);i=!0);}catch(t){o=!0,s=t}finally{try{!i&&r.return&&r.return()}finally{if(o)throw s}}return e}return function(a,e){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return t(a,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=require("../../utils/util.js"),e=require("../../utils/api.js"),i=0,o=0,s=0,n=0,r=0,d=0,c=0,h=0,l=getApp();Page({data:{bpic:[],activeList:[],imgWidth:345,loadImgState:!1,showLoadMore:!1,isactive:!1,animationData:{},pic1top:0,pic1left:"75rpx",pic1opacity:1,discoverData:[],discoverDataloading:!1,hasoperate:!1,iffirstappear:!0,showPlayVideoModal:!1,starttime:0,endtime:0,hasactiveList:!0,textArr:["精彩内容正在赶来...","稍等一下啦...","小忆正在加载中..."]},onLoad:function(t){var a=this;l.stat.statpv({route:this.route,options:t}),this.commentList=[],wx.getSystemInfo({success:function(t){var e=750/t.windowWidth,i=t.windowHeight*e;a.setData({rpp:e,minHeight:i})}}),this.mgb=68,this.fromDetail=!1,this.setData({loadImgState:!1,showLoadMore:!1}),this.loadnewestData()},onShow:function(){if(wx.getStorageSync("userid")){var t=this,e=a.randomNum(0,2);t.setData({promptText:e});var i=wx.createAnimation({duration:0,timingFunction:"linear"});t.animation=i,this.fromDetail?setTimeout(function(){t.fromDetail=!1},150):t.loadingPic=!1}else wx.showModal({title:"提示",content:"获取用户id不成功",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})},onHide:function(){},onUnload:function(){},preRefresh:function(){this.fromDetail=!0},onPullDownRefresh:function(){this.data.isactive?wx.stopPullDownRefresh():(this.loadnewestData(),wx.stopPullDownRefresh())},onReachBottom:function(){var t=this;t.data.isactive||t.loadingPic||(this.loadingPic=!0,(t=this).setData({showLoadMore:!0}),wx.request({url:e.getUrl("YinianProject/event/ShowMoments_sim"),data:{userid:wx.getStorageSync("userid"),eid:t.commentList[t.commentList.length-1].eid,type:"loading"},success:function(a){if(0!=a.data.code)return t.setData({showLoadMore:!1}),wx.showModal({title:"提示",content:"网络错误，请稍后重试",showCancel:!1}),void(t.loadingPic=!1);if(0==a.data.data.length)t.setData({showLoadMore:!1}),wx.showToast({title:"已加载全部照片",duration:2500});else{var e=a.data.data;if(e.length>0)for(var r=0,d=e.length;r<d;r++)if(e[r].picList.length>0){if(4==e[r].eMain){e[r].height=t.data.imgWidth;e[r].picList[0].thumbnail=e[r].picList[0].pcover?e[r].picList[0].pcover:"http://oibl5dyji.bkt.clouddn.com/20170927144819.png"}else{var c=Math.floor(e[r].picList[0].height*t.data.imgWidth/e[r].picList[0].width);e[r].height=c||t.data.imgWidth}t.commentList.push(e[r]),(i=i||s)<=(o=o||n)?(i+=e[r].height+t.mgb,s+=e[r].height+t.mgb,t.data.colLeft.push(e[r])):(o+=e[r].height+t.mgb,n+=e[r].height+t.mgb,t.data.colRight.push(e[r]))}t.setData({colLeft:t.data.colLeft,colRight:t.data.colRight,showLoadMore:!1})}t.loadingPic=!1},fail:function(){t.setData({showLoadMore:!1}),t.loadingPic=!1}}))},toEventDetail:function(a){var e=a.currentTarget.dataset.mydata;if(e){var i=e.split(","),o=t(i,2),s=o[0],n=o[1];wx.navigateTo({url:"/pages/eventdetail/eventdetail?lastPage=moment&dateindex=0&rowindex="+s+"&efrom=moment&eid="+n})}},seeBigVideo:function(t){var a=t.currentTarget.dataset.url;wx.setStorageSync("videourl",a),wx.navigateTo({url:"/pages/viewscoll/bigvideo/bigvideo",success:function(){this.fromDetail=!0}.bind(this)})},toHuoDong:function(){wx.navigateTo({url:this.data.activeList[0].bdata})},discovertap:function(){wx.stopPullDownRefresh();var t=this;t.setData({isactive:!0,loadImgState:!0}),t.data.hasoperate&&t.setData({hasoperate:!1})},newesttap:function(){wx.startPullDownRefresh();var t=this;t.setData({isactive:!1,loadImgState:!0}),t.data.hasoperate&&t.leavediscover()},addgroup:function(){wx.navigateTo({url:"../makegroup/makegroup"})},changestart:function(t){r=t.touches[0].pageX,d=t.touches[0].pageY},changemove:function(t){},changend:function(t){var a=this,e=new Date;if(!(e-a.data.endtime<800)){a.data.endtime=e,c=t.changedTouches[0].pageX,h=t.changedTouches[0].pageY;var i=h-d;i<-50?(a.data.classArr.unshift("shang"),a.setData({classArr:a.data.classArr}),setTimeout(function(){a.data.discoverData.shift(a.data.discoverData[0]),a.data.classArr.shift("shang"),a.setData({classArr:a.data.classArr,discoverData:a.data.discoverData})},300),a.data.discoverData.length<=10&&!a.data.discoverDataloading&&a.loadDiscoverMoreData(),a.data.hasoperate||a.setData({hasoperate:!0,iffirstappear:!1})):i>50&&(a.data.classArr.unshift("xia"),a.setData({classArr:a.data.classArr}),setTimeout(function(){a.data.discoverData.shift(a.data.discoverData[0]),a.data.classArr.shift("xia"),a.setData({classArr:a.data.classArr,discoverData:a.data.discoverData})},300),a.data.discoverData.length<=10&&!a.data.discoverDataloading&&a.loadDiscoverMoreData(),a.data.hasoperate||a.setData({hasoperate:!0,iffirstappear:!1}))}},loadDiscoverMoreData:function(){var t=this;t.setData({discoverDataloading:!0}),a.wxreq({pathname:"YinianProject/newh5/setUserHotPic",data:{uid:wx.getStorageSync("userid"),hid:t.data.discoverData[t.data.discoverData.length-1].hid}}).then(function(e){a.wxreq({pathname:"YinianProject/newh5/getHotPic",data:{uid:wx.getStorageSync("userid"),hid:t.data.discoverData[t.data.discoverData.length-1].hid}}).then(function(a){if(0==a.code){var e=t.data.discoverData.concat(a.data);t.setData({discoverData:e})}else wx.showToast({title:"获取图片失败"});t.setData({discoverDataloading:!1})},function(a){wx.showToast({title:"获取发现图片失败."}),t.setData({discoverDataloading:!1})})},function(t){})},loadDiscoverData:function(){var t=this;a.wxreq({pathname:"YinianProject/newh5/getHotPic",data:{uid:wx.getStorageSync("userid")}}).then(function(a){if(0==a.code){var e=t.data.discoverData.concat(a.data);t.setData({discoverData:e})}else wx.showToast({title:"获取图片失败"})},function(t){wx.showToast({title:"获取图片失败."})})},leavediscover:function(){var t=this;a.wxreq({pathname:"YinianProject/newh5/setUserHotPic",data:{uid:wx.getStorageSync("userid"),hid:t.data.discoverData[0].hid}}).then(function(t){},function(t){})},enterpreview:function(t){var a=new Array;a[0]=t.currentTarget.dataset.hpic,wx.previewImage({urls:a})},loadnewestData:function(){var t=this;i=0,o=0,s=0,n=0,wx.request({url:e.getUrl("YinianProject/event/ShowMoments_sim"),data:{userid:wx.getStorageSync("userid"),eid:0,type:"initialize"},success:function(a){if(0==a.data.code){var e=a.data.data;this.commentList=[];var r=[],d=[];if(e.length>0){for(var c=0,h=e.length;c<h;c++)if(e[c].picList.length>0){if(4==e[c].eMain){e[c].height=t.data.imgWidth;e[c].picList[0].thumbnail=e[c].picList[0].pcover?e[c].picList[0].pcover:"http://oibl5dyji.bkt.clouddn.com/20170927144819.png"}else{var l=Math.floor(e[c].picList[0].height*t.data.imgWidth/e[c].picList[0].width);e[c].height=l||t.data.imgWidth}t.commentList.push(e[c]),i<=o?(i+=e[c].height+t.mgb,s+=e[c].height+t.mgb,r.push(e[c])):(o+=e[c].height+t.mgb,n+=e[c].height+t.mgb,d.push(e[c]))}t.setData({hasactiveList:!0})}else t.setData({hasactiveList:!1});t.setData({colLeft:r,colRight:d,loadImgState:!0})}else wx.showModal({title:"提示",content:"网络错误，请稍后重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})}})},playVideo:function(){this.setData({showPlayVideoModal:!0})},closePlayVideoModal:function(){this.setData({showPlayVideoModal:!1})},savetoablbum:function(){var t=this;wx.setStorage({key:"discoverdata",data:t.data.discoverData[0],success:function(){wx.navigateTo({url:"/pages/others/groupsync2/groupsync2"})}})}}); 
 			}); 	require("pages/moment/moment.js");
 		__wxRoute = 'pages/newauth/newauth';__wxRouteBegin = true; 	define("pages/newauth/newauth.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../utils/util.js"),o=require("../../utils/albumsjump.js").albumsjump;Page({data:{startAuthPic:"http://oibl5dyji.bkt.clouddn.com/0408_default.png"},onLoad:function(o){t.stat.statpv({route:this.route,options:o});var i=this;o.version&&(this.version=o.version),o.port&&(this.port=o.port,t.globalData.port=o.port),o.fromUserID&&(this.fromUserID=o.fromUserID),o.fromSpaceID&&(this.fromSpaceID=o.fromSpaceID),o.fromEventID&&(this.fromEventID=o.fromEventID),this.toPage=o.toPage||"home",this.toGroupid=o.groupid||0,this.groupNewType=o.type,this.setData({toPage:this.toPage}),"home"===this.toPage?this.authFrom="alertAuth_home":"viewscoll"===this.toPage?this.authFrom="alertAuth_createAlbum":"toGroup"===this.toPage?this.authFrom="alertAuth_enterAlbum":this.authFrom="alertAuth",e.getAuthPic(i.authFrom,0,function(t){i.setData({startAuthPic:t.belowImgUrl})})},onShow:function(){this.isAuth=!1},startauth:function(o){var i=this.version?this.version:"",r=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,s=this.fromSpaceID?this.fromSpaceID:0,u=this.fromEventID?this.fromEventID:0,h="newauth_"+this.toPage,n=this;this.isAuth||(this.isAuth=!0,e.countOperation(n.authFrom,0,0,""),t.getUserInfo(function(e){if("新用户"!=e.nickName)n.afterAuth(e);else{if("getUserInfo:fail auth deny"==o.detail.errMsg)return wx.showModal({title:"提示",content:"只有授权之后才能使用相册哦！",showCancel:!1}),void(n.isAuth=!1);t.newAuthfunction(function(t){"新用户"!=t.nickName?n.afterAuth(t):n.isAuth=!1},i,r,a,s,u,o.detail,"",function(){})}},i,r,a,s,u,h,function(){}))},afterAuth:function(t){var e=this;if("home"===e.toPage)wx.reLaunch({url:"/pages/index/index"});else if("viewscoll"===e.toPage)e.makeGroup(t.userid);else if("toGroup"===e.toPage)if(e.toGroupid){var i=e.groupNewType;o({groupNewType:i,data:{lastPage:"newauth",from:"grouplist",groupid:e.toGroupid},navigator:"redirect"})}else wx.reLaunch({url:"/pages/index/index"})},makeGroup:function(t){var i=this;i.isMake||(i.isMake=!0,wx.showToast({title:"正在获取数据...",icon:"loading",duration:15e3,mask:!0}),e.wxreq({pathname:"YinianProject/album/createDefaultAlbum",data:{userId:t,source:"小程序"}}).then(function(t){if(wx.hideToast(),0==t.code){var e=t.data[0].groupNewType;o({groupNewType:e,data:{lastPage:"newauth",from:"grouplist",groupid:t.data[0].groupid},navigator:"redirect"})}else wx.reLaunch({url:"/pages/index/index"})}).catch(function(t){wx.reLaunch({url:"/pages/index/index"}),console.log(t)}))}}); 
 			}); 	require("pages/newauth/newauth.js");
 		__wxRoute = 'pages/loversauth/loversauth';__wxRouteBegin = true; 	define("pages/loversauth/loversauth.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../utils/util.js"),o=require("../../utils/albumsjump.js").albumsjump;Page({data:{startAuthPic:"http://7xlmtr.com1.z0.glb.clouddn.com/alertAuth_lovers_group_201804111732.png"},onLoad:function(o){console.log(o);var r=this;if(o.scene){var i=decodeURIComponent(o.scene);if(o={},i.length>0)for(var a=i.split("&"),s=0;s<a.length;s++)o[a[s].split("=")[0]]=a[s].split("=")[1]}t.stat.statpv({route:this.route,options:o}),this.zj=o.zj||"",o.version&&(this.version=o.version),o.port&&(this.port=o.port,t.globalData.port=o.port),o.fromUserID&&(this.fromUserID=o.fromUserID),o.fromSpaceID&&(this.fromSpaceID=o.fromSpaceID),o.fromEventID&&(this.fromEventID=o.fromEventID),e.getAuthPic("lovers_group_auth",0,function(t){r.setData({startAuthPic:t.belowImgUrl})})},onShow:function(){this.isAuth=!1},startauth:function(o){var r=this.version?this.version:"",i=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,s=this.fromSpaceID?this.fromSpaceID:0,n=this.fromEventID?this.fromEventID:0,u=this;this.isAuth||(this.isAuth=!0,e.countLoversOperation("loversAuth",0,0,0,i),t.isNoConfirm="cancel",t.getUserInfo(function(e){if("新用户"!=e.nickName)u.afterAuth(e,i);else{if("getUserInfo:fail auth deny"==o.detail.errMsg)return wx.showModal({title:"提示",content:"只有授权之后才能使用相册哦！",showCancel:!1}),void(u.isAuth=!1);t.newAuthfunction(function(t){"新用户"!=t.nickName?u.afterAuth(t,i):u.isAuth=!1},r,i,a,s,n,o.detail,"",function(){})}},r,i,a,s,n,"loversauth",function(){}))},afterAuth:function(r,i){var a=this;e.countLoversOperation("loversIsConfirm",0,0,0,i),a.makeGroup(r.userid,function(e,r){wx.chooseImage({count:9,sizeType:["original"],sourceType:["album"],success:function(i){console.log(i);var a=i.tempFilePaths,s=e;t.upState=2,t.fromUp="pic",t.upObj={mainIdStr:s,formID:"",place:"",content:"",picarr:a,attentionMember:"",publishedTime:""},o({groupNewType:r,data:{lastPage:"loversauth",from:"grouplist",groupid:s,makeFrom:"newlovers"},navigator:"redirect"})},fail:function(t){o({groupNewType:r,data:{lastPage:"loversauth",from:"grouplist",groupid:e,makeFrom:"newlovers",isconfirm:"cancel"},navigator:"redirect"})}})})},closeAuth:function(){var t=this.port?this.port:"";e.countLoversOperation("closeAuth",0,0,0,t),wx.navigateTo({url:"/pages/loverscloseauth/loverscloseauth"})},makeGroup:function(o,r){var i=this;i.isMake||(i.isMake=!0,wx.showToast({title:"正在获取数据...",icon:"loading",duration:15e3,mask:!0}),e.wxreq({pathname:"YinianProject/album/createDefaultLoversAlbum",data:{userId:o,source:"小程序",createName:t.globalData.userInfo.nickName}}).then(function(t){wx.hideToast(),0==t.code?(wx.hideToast(),i.sendZjData(o),"function"==typeof r&&r(t.data[0].groupid,t.data[0].groupNewType)):wx.reLaunch({url:"/pages/index/index"})}).catch(function(t){wx.reLaunch({url:"/pages/index/index"}),console.log(t)}))},sendZjData:function(t){var o=this;e.wxreq({pathname:"YinianProject/zhiWeiApi/postToApi",data:{zj:o.zj,userId:t}})}}); 
 			}); 	require("pages/loversauth/loversauth.js");
 		__wxRoute = 'pages/loverscloseauth/loverscloseauth';__wxRouteBegin = true; 	define("pages/loverscloseauth/loverscloseauth.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../utils/util.js"),o=require("../../utils/albumsjump.js").albumsjump;Page({data:{startAuthPic:"http://7xlmtr.com1.z0.glb.clouddn.com/timeAxisBlankPicture_20180412.png"},onLoad:function(o){t.stat.statpv({route:this.route,options:o});var i=this;o.version&&(this.version=o.version),o.port&&(this.port=o.port,t.globalData.port=o.port),o.fromUserID&&(this.fromUserID=o.fromUserID),o.fromSpaceID&&(this.fromSpaceID=o.fromSpaceID),o.fromEventID&&(this.fromEventID=o.fromEventID),e.getAuthPic("loverscloseauth",0,function(t){i.setData({startAuthPic:t.belowImgUrl})})},onShow:function(){this.isAuth=!1},startauth:function(e){var o=this.version?this.version:"",i=this.port?this.port:"",r=this.fromUserID?this.fromUserID:0,s=this.fromSpaceID?this.fromSpaceID:0,a=this.fromEventID?this.fromEventID:0,n=this;this.isAuth||(this.isAuth=!0,t.getUserInfo(function(u){if("新用户"!=u.nickName)n.makeGroup(u.userid);else{if("getUserInfo:fail auth deny"==e.detail.errMsg)return wx.showModal({title:"提示",content:"只有授权之后才能使用相册哦！",showCancel:!1}),void(n.isAuth=!1);t.newAuthfunction(function(t){"新用户"!=t.nickName?n.makeGroup(t.userid):n.isAuth=!1},o,i,r,s,a,e.detail,"",function(){})}},o,i,r,s,a,"loverscloseauth",function(){}))},makeGroup:function(i){var r=this;r.isMake||(r.isMake=!0,wx.showToast({title:"正在获取数据...",icon:"loading",duration:15e3,mask:!0}),e.wxreq({pathname:"YinianProject/album/createDefaultLoversAlbum",data:{userId:i,source:"小程序",createName:t.globalData.userInfo.nickName}}).then(function(t){if(wx.hideToast(),0==t.code){var e=t.data[0].groupNewType;o({groupNewType:e,data:{lastPage:"loverscloseauth",from:"grouplist",groupid:t.data[0].groupid,makeFrom:"newlovers"},navigator:"redirect"})}else wx.reLaunch({url:"/pages/index/index"})}).catch(function(t){wx.reLaunch({url:"/pages/index/index"}),console.log(t)}))}}); 
 			}); 	require("pages/loverscloseauth/loverscloseauth.js");
 		__wxRoute = 'pages/authorization/authorization';__wxRouteBegin = true; 	define("pages/authorization/authorization.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../utils/util.js");Page({data:{resetPic:"http://oibl5dyji.bkt.clouddn.com/0408_default.png"},onLoad:function(o){t.stat.statpv({route:this.route,options:o});var n=this;e.getAuthPic("cancelAuth",0,function(t){n.setData({resetPic:t.belowImgUrl})}),"cancel"===t.isNoConfirm&&(e.countLoversOperation("loversNoConfirm",0,0,0),t.isNoConfirm="")},onReady:function(){wx.reportAnalytics("resetau",{clicktime:e.formatTimeWithSecond(new Date)})},onShow:function(){wx.getSetting?wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]&&wx.navigateBack({delta:1})}}):wx.showModal({title:"提示",content:"忆年小程序需要授权才可使用，请从小程序列表移除本小程序，再重新搜索登录."})},resetau:function(){e.countOperation("resetau",0,0,""),wx.openSetting?wx.openSetting():wx.showModal({title:"提示",content:"忆年小程序需要授权才可使用，请从小程序列表移除本小程序，再重新搜索登录."})}}); 
 			}); 	require("pages/authorization/authorization.js");
 		__wxRoute = 'pages/sharehtml/pailide/pailide';__wxRouteBegin = true; 	define("pages/sharehtml/pailide/pailide.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/util.js"),o=getApp();Page({data:{showAudioModelBox:!1,sucessState:!1,showpuzze:!1},onLoad:function(t){o.stat.statpv({route:this.route,options:t});var e=this;e.fromState=0,t.eid&&(e.eid=t.eid,e.groupid=t.groupid)},onShow:function(){var e=this;o.getshowState(function(t){e.setData({showpuzze:t})}),e.eid?e.fromState?setTimeout(function(){e.fromState=0},1e3):t.wxreq({pathname:"YinianProject/event/GetActivitySpaceSingleEventContent",data:{eid:e.eid}}).then(function(t){console.log(t);var o=t.data[0];e.setData({dataList:o})}):wx.showToast({title:"没有获取到参数"})},introAlert:function(){wx.showModal({title:"提示",content:"下载忆年APP查看详情",showCancel:!1})},showAudioModel:function(){this.setData({showAudioModelBox:!0})},closeAudioBox:function(){this.setData({showAudioModelBox:!1})},prewImg:function(){var t=this;t.fromState=1;var o=[];t.data.dataList.picList.forEach(function(t,e){o.push(t.midThumbnail)}),wx.previewImage({urls:o})},takePic:function(){var t=this;t.groupid?(t.fromState=1,wx.chooseImage({count:1,sizeType:["original"],sourceType:["camera"],success:function(o){var e=o.tempFilePaths[0];wx.showToast({title:"图片对比中",icon:"loading",duration:12e4}),wx.uploadFile({url:"https://api.zhuiyinanian.com/YinianProject/event/ScanForEvent",filePath:e,name:"uploadFile",formData:{groupid:t.groupid||16876},success:function(o){var e=JSON.parse(o.data);wx.hideToast(),console.log(e),e.data.length>0?(wx.showModal({title:"提示",content:"匹配成功",showCancel:!1}),t.setData({sucessState:!0})):wx.showModal({title:"提示",content:"匹配失败，请重新拍照",showCancel:!1})},fail:function(t){wx.hideToast(),wx.showModal({title:"提示",content:t.errMsg,showCancel:!1})}})}})):wx.showToast({title:"没有获取到相册id"})}}); 
 			}); 	require("pages/sharehtml/pailide/pailide.js");
 		__wxRoute = 'pages/viewscoll/bigvideo/bigvideo';__wxRouteBegin = true; 	define("pages/viewscoll/bigvideo/bigvideo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{videourl:""},onLoad:function(o){t.stat.statpv({route:this.route,options:o});var a=wx.getStorageSync("videourl");this.setData({videourl:a})},onShow:function(){t.fromS=1}}); 
 			}); 	require("pages/viewscoll/bigvideo/bigvideo.js");
 		__wxRoute = 'pages/detail/invited/invited';__wxRouteBegin = true; 	define("pages/detail/invited/invited.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=require("../../../utils/util.js");Page({data:{inviteNum:0,prizeDetail:[{personMin:-1,personMax:20,img:"http://oibl5dyji.bkt.clouddn.com/20171013165321.png"},{personMin:20,personMax:88,img:"http://oibl5dyji.bkt.clouddn.com/zipaigan3.png"},{personMin:88,personMax:200,img:"http://oibl5dyji.bkt.clouddn.com/20170611105835pt.png"},{personMin:200,personMax:1e3,img:"http://oibl5dyji.bkt.clouddn.com/20170611105835pic.png"}],prizeState:{},rewardSpace:0,usernamefocus:!0,userphonefocus:!1,useraddressfocus:!1},onLoad:function(t){e.stat.statpv({route:this.route,options:t});var a=t.inviteNum,s=(.5*a).toFixed(2);this.setData({inviteNum:a,rewardSpace:s})},onShow:function(){var a=this;a.userid=e.globalData.userInfo.userid,t.wxreq({pathname:"YinianProject/activity/ShowPrizeReceivePage",data:{userid:a.userid,type:"inviteFriend"}}).then(function(e){console.log(e);var t=e.data[0];a.setData({prizeState:t})})},getPrize:function(e){var t=this,a=e.currentTarget.dataset.level;t.setData({levelState:a}),t.setData({showGetPrizeModel:!0})},nextone:function(){console.log("nextone"),this.setData({userphonefocus:!0})},nextwo:function(){console.log("nextwo"),this.setData({useraddressfocus:!0,userphonefocus:!1})},submitUserInfo:function(a){var s=this,i=this;i.setData({useraddressfocus:!1}),i.userid=e.globalData.userInfo.userid,console.log(a.detail.value,this.data.levelState);var o=a.detail.value;if(0!=o.userName.trim().length&&0!=o.userPhone.trim().length&&0!=o.userAddr.trim().length){switch(console.log("coding...."),i.elTypeName="",i.data.levelState){case"One":i.elTypeName="忆年专属定制水杯";break;case"Two":i.elTypeName="定制自拍杆";break;case"Three":i.elTypeName="个性拼图";break;default:i.elTypeName="圆钉相纸"}t.wxreq({pathname:"YinianProject/activity/WriteLogisticsInfo2",data:{userid:this.userid,type:"inviteFriend",level:i.data.levelState,name:o.userName,address:o.userAddr,phone:o.userPhone,elTypeName:i.elTypeName}}).then(function(e){console.log(e),0==e.code?(s.setData({submitSuccess:!0,showGetPrizeModel:!1}),t.wxreq({pathname:"YinianProject/activity/ShowPrizeReceivePage",data:{userid:i.userid,type:"inviteFriend"}}).then(function(e){console.log(e);var t=e.data[0];i.setData({prizeState:t})})):(console.log("res.code",e.code),wx.showModal({title:"提示",content:"网络错误,请重试",showCancel:!1}))})}else wx.showModal({title:"提示",content:"请填写完整信息",showCancel:!1})},closePrizeModel:function(){var e=this;e.setData({showGetPrizeModel:!1,usernamefocus:!0,userphonefocus:!1,useraddressfocus:!1}),t.wxreq({pathname:"YinianProject/activity/ShowPrizeReceivePage",data:{userid:e.userid,type:"inviteFriend"}}).then(function(t){var a=t.data[0];e.setData({prizeState:a})})},copytext:function(e){wx.setClipboardData({data:"yiniankefu",success:function(e){wx.showToast({title:"复制成功!",icon:"success",duration:2e3})}})},closeDispose:function(){this.setData({showDisposeModel:!1})},showDispose:function(){this.setData({showDisposeModel:!0})},closeSubmitSuccess:function(){this.setData({submitSuccess:!1})}}); 
 			}); 	require("pages/detail/invited/invited.js");
 		__wxRoute = 'pages/uploadpic/uploadpic';__wxRouteBegin = true; 	define("pages/uploadpic/uploadpic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=(require("../../utils/api.js"),require("../../utils/util.js")),a=require("../../utils/reg.js"),o=getApp(),n=void 0,i="";Page({data:{choosepic:[],nameString:"",idStr:""},onLoad:function(t){o.stat.statpv({route:this.route,options:t});var e=this;wx.setNavigationBarTitle({title:"上传图片"}),wx.removeStorageSync("place");var a=wx.getStorageSync("uploadchoosedpic")||[];e.setData({choosepic:a,isIphonex:o.globalData.systemInfo.model.toLowerCase().indexOf("iphone x")>=0}),this.lastPage=t.lastPage,this.lastPage=this.lastPage||"null",this.isSubmit=1,t.port&&(this.port=t.port,o.globalData.port=t.port),wx.getStorageSync("strId")&&wx.removeStorageSync("strId"),wx.getStorageSync("strName")&&wx.removeStorageSync("strName");var n=getCurrentPages();setTimeout(function(){n[n.length-2].setData({fromlast:1}),n[n.length-2].fromlast=1},150)},prevent:function(){},onShow:function(){var t=this,a=wx.getStorageSync("place")||"所在位置";wx.getSystemInfo({success:function(e){var a=e.system.slice(0,3);t.setData({sys:a})}}),this.setData({place:a}),wx.getStorageSync("strName")&&t.setData({nameString:wx.getStorageSync("strName")});var i=wx.getStorageSync("strId"),s=i||wx.getStorageSync("groupid");if(n=s,t.setData({idStr:s}),1==t.isSubmit){t.enterCurrentTimestamp=(new Date).getTime();var r=wx.getStorageSync("userid"),c={basicInfo:{userid:r,source:this.port?this.port:"","isActivityAlbum ":"null","lastPage ":t.lastPage,timestamp:t.enterCurrentTimestamp,identification:r+"_"+o.enterTimestamp},type:"enter",data:{page:{name:"uploadPage",page_identification:r+"_"+t.enterCurrentTimestamp}}};0==o.sendValue&&e.sendData(r,c),t.button=[]}else t.isSubmit=1},onHide:function(){1==this.isSubmit&&(console.log("upload_hide"),this.sendLeaveData())},onUnload:function(){wx.removeStorageSync("uploadchoosedpic"),wx.removeStorageSync("place"),wx.removeStorageSync("content"),console.log("upload_unLoad"),this.sendLeaveData()},sendLeaveData:function(){var t=this,a=this.port?this.port:"",n=wx.getStorageSync("userid"),i=(new Date).getTime()-t.enterCurrentTimestamp,s={basicInfo:{userid:n,source:a," isActivityAlbum ":"null","lastPage ":t.lastPage,timestamp:(new Date).getTime(),identification:n+"_"+o.enterTimestamp},type:"leave",data:{page:{name:"uploadPage",page_identification:n+"_"+t.enterCurrentTimestamp},botton:t.button,time:i}};0==o.sendValue&&e.sendData(n,s)},toUploadSync:function(){wx.navigateTo({url:"/pages/others/uploadsync/uploadsync?groupid="+wx.getStorageSync("groupid")})},addpic:function(){var t=this;t.data.choosepic.length>=27?wx.showModal({title:"提示",content:"单条动态照片数已达上限",showCancel:!1}):wx.chooseImage({count:9,sizeType:["original"],sourceType:["album"],success:function(e){var a=e.tempFilePaths,o=[];t.data.choosepic.forEach(function(t){o.push(t)}),a.forEach(function(t){o.push(t)}),t.setData({choosepic:o})}})},picpdelete:function(t){var e=t.currentTarget.dataset.index,a=[];this.data.choosepic.forEach(function(t){a.push(t)}),a.splice(e,1),this.setData({choosepic:a})},formSubmit:function(e){console.log(e),"object"==t(this.button)&&this.button.push({name:"startUpload"});var s=this;if(wx.getStorageSync("userid")&&wx.getStorageSync("groupid"))if(i=e.detail.formId,console.log(i),s.data.choosepic.length<=0)wx.showModal({title:"提示",content:"至少有一张图片才能上传",showCancel:!1});else{var r=e.detail.value.text.replace(/\n/g,"").trim();a.testStr(r)&&(r=""),wx.setStorage({key:"content",data:r});var c=[];if(s.data.choosepic.forEach(function(t){c.push(t)}),c.length>90)wx.showModal({title:"提示",content:"一次上传张数超出限制",showCancel:!1});else{var l=wx.getStorageSync("place");void 0!=l&&"不显示位置"!=l||(l=""),o.upState=2,o.fromUp="pic",o.upObj={mainIdStr:n,formID:i,place:l,content:r,picarr:c},wx.getStorageSync("userid")?wx.navigateBack({delta:1}):wx.showModal({title:"提示",content:"请先授权",showCancel:!1})}}else wx.showModal({title:"提示",content:"获取用户信息失败，请稍后重试",showCancel:!1})}}); 
 			}); 	require("pages/uploadpic/uploadpic.js");
 		__wxRoute = 'pages/uploadvideo/uploadvideo';__wxRouteBegin = true; 	define("pages/uploadvideo/uploadvideo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=require("../../utils/util.js"),o=getApp(),a=require("../../utils/reg.js");Page({data:{choosevideo:"",videoPosterImg:"",nameString:"",idStr:""},onLoad:function(t){o.stat.statpv({route:this.route,options:t});var e=this;wx.setNavigationBarTitle({title:"上传视频"}),wx.removeStorageSync("place");var a=wx.getStorageSync("uploadchoosedvideo");e.setData({choosevideo:a,isIphonex:o.globalData.systemInfo.model.toLowerCase().indexOf("iphone x")>=0}),this.lastPage=t.lastPage,this.lastPage=this.lastPage||"null",this.isSubmit=1,t.port&&(this.port=t.port,o.globalData.port=t.port),wx.getStorageSync("strId")&&wx.removeStorageSync("strId"),wx.getStorageSync("strName")&&wx.removeStorageSync("strName");var i=getCurrentPages();setTimeout(function(){i[i.length-2].setData({fromlast:1}),i[i.length-2].fromlast=1},150)},prevent:function(){},onShow:function(){var t=this,a=wx.getStorageSync("place")||"所在位置";this.setData({place:a}),wx.getSystemInfo({success:function(e){console.log(e);var o=e.system.slice(0,3);t.setData({sys:o})}}),wx.getStorageSync("strName")&&t.setData({nameString:wx.getStorageSync("strName")});var i=wx.getStorageSync("strId"),s=i||wx.getStorageSync("groupid");if(t.setData({idStr:s}),1==t.isSubmit){t.enterCurrentTimestamp=(new Date).getTime();var n=wx.getStorageSync("userid"),r={basicInfo:{userid:n,source:this.port?this.port:"","isActivityAlbum ":"null","lastPage ":t.lastPage,timestamp:t.enterCurrentTimestamp,identification:n+"_"+o.enterTimestamp},type:"enter",data:{page:{name:"uploadPage",page_identification:n+"_"+t.enterCurrentTimestamp}}};0==o.sendValue&&e.sendData(n,r),t.button=[]}else t.isSubmit=1},onHide:function(){1==this.isSubmit&&(console.log("uploadvideo_hide"),this.sendLeaveData())},onUnload:function(){console.log("uploadvideo_unLoad"),this.sendLeaveData()},sendLeaveData:function(){var t=this,a=this.port?this.port:"",i=wx.getStorageSync("userid"),s=(new Date).getTime()-t.enterCurrentTimestamp,n={basicInfo:{userid:i,source:a," isActivityAlbum ":"null","lastPage ":t.lastPage,timestamp:(new Date).getTime(),identification:i+"_"+o.enterTimestamp},type:"leave",data:{page:{name:"uploadPage",page_identification:i+"_"+t.enterCurrentTimestamp},botton:t.button,time:s}};0==o.sendValue&&e.sendData(i,n)},toUploadSync:function(){wx.getStorageSync("groupid")?wx.navigateTo({url:"/pages/others/uploadsync/uploadsync?groupid="+wx.getStorageSync("groupid")}):wx.showModal({title:"错误",content:"获取用户信息失败！请稍后再试",showCancel:!1})},deletVideo:function(){wx.removeStorageSync("uploadchoosedvideo"),this.setData({choosevideo:""})},deletPic:function(){wx.removeStorageSync("videoPosterImg"),this.setData({videoPosterImg:""})},uploadvideo:function(){var t=this;wx.getStorageSync("userid")?wx.chooseVideo({sourceType:["album","camera"],maxDuration:60,camera:"back",success:function(e){var o=e.tempFilePath;wx.setStorage({key:"uploadchoosedvideo",data:o,success:function(){t.setData({choosevideo:o})},fail:function(){wx.showToast({title:"保存视频临时数据失败"})}})}}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},uploadpic:function(){var t=this;wx.getStorageSync("userid")?wx.chooseImage({count:1,sizeType:["original"],sourceType:["album","camera"],success:function(e){console.log(e);var o=e.tempFilePaths;wx.setStorage({key:"videoPosterImg",data:o,success:function(){t.setData({videoPosterImg:o[0]})},fail:function(){wx.showToast({title:"保存图片临时数据失败"})}})}}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},formSubmit:function(e){"object"==t(this.button)&&this.button.push({name:"startUpload"});var i=this;if(i.data.choosevideo){var s=e.detail.value.text.replace(/\n/g,"").trim();a.testStr(s)&&(s=""),wx.setStorage({key:"content",data:s});var n=wx.getStorageSync("place");void 0!=n&&"不显示位置"!=n||(n=""),o.upState=2,o.fromUp="video",o.upObj={mainIdStr:i.data.idStr,place:n,content:s,picarr:i.data.choosevideo,cover:i.data.videoPosterImg},wx.getStorageSync("userid")?wx.navigateBack({delta:1}):wx.showModal({title:"提示",content:"请先授权",showCancel:!1})}else wx.showModal({title:"提示",content:"请先添加视频"})}}); 
 			}); 	require("pages/uploadvideo/uploadvideo.js");
 		__wxRoute = 'pages/detail/invitation/invitation';__wxRouteBegin = true; 	define("pages/detail/invitation/invitation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../utils/util.js"),s=getApp();Page({data:{canIUse:!1},onLoad:function(e){s.stat.statpv({route:this.route,options:e});var t=this;e.shareUserid&&(t.shareUserid=e.shareUserid,console.log(t.shareUserid)),e.shCode&&(t.shCode=e.shCode,console.log(t.shCode)),wx.canIUse&&wx.canIUse("button.open-type.share")&&t.setData({canIUse:!0}),e.version&&(this.version=e.version),e.port&&(this.port=e.port,s.globalData.port=e.port),e.fromUserID&&(this.fromUserID=e.fromUserID),e.fromSpaceID&&(this.fromSpaceID=e.fromSpaceID),e.fromEventID&&(this.fromEventID=e.fromEventID)},onShow:function(){var t=this,r=this.version?this.version:"",o=this.port?this.port:"",i=this.fromUserID?this.fromUserID:0,a=this.fromSpaceID?this.fromSpaceID:0,n=this.fromEventID?this.fromEventID:0;s.getUserInfo(function(r){if("新用户"!=r.nickName){t.userid=r.userid;var o="yes"==r.isnew;s.globalData.userInfo.userid;t.shareUserid&&o&&e.wxreq({pathname:"YinianProject/activity/SuccessInviteFriend",data:{userid:t.shareUserid}}).then(function(e){console.log(e)}),t.setData({userName:wx.getStorageSync("userInfo").nickName})}else wx.navigateTo({url:"/pages/creatlogin/creatlogin"})},r,o,i,a,n,"invitation")},showIntro:function(){wx.showToast({title:"点击右上角分享"})},previewCode:function(){var e=this;e.userid&&wx.previewImage({urls:[e.data.codeUrl]})},onShareAppMessage:function(){return{title:"分享得空间奖励",path:"/pages/index/index?port=小程序好友邀请&shareUserid="+this.userid+"&shCode=yaoqin",success:function(){s.stat.request({operation:"shareCallback"})}}}}); 
 			}); 	require("pages/detail/invitation/invitation.js");
 		__wxRoute = 'pages/detail/photodetail/photodetail';__wxRouteBegin = true; 	define("pages/detail/photodetail/photodetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var t,a=getApp(),i=require("../../../utils/util.js");Page((t={data:{picNum:0,prizeDetail:[{picMin:-1,picMax:1e3,img:"http://oibl5dyji.bkt.clouddn.com/20171013165321.png"},{picMin:1e3,picMax:2333,img:"http://oibl5dyji.bkt.clouddn.com/zipaigan3.png"},{picMin:2333,picMax:6666,img:"http://oibl5dyji.bkt.clouddn.com/20170611105835pt.png"},{picMin:6666,picMax:15e3,img:"http://oibl5dyji.bkt.clouddn.com/20170611105835pic.png"}],prizeState:{},usernamefocus:!0,userphonefocus:!1,useraddressfocus:!1},onLoad:function(e){a.stat.statpv({route:this.route,options:e});var t=e.picNum;this.setData({picNum:t})},onShow:function(){var e=this;e.userid=a.globalData.userInfo.userid,i.wxreq({pathname:"YinianProject/activity/ShowPrizeReceivePage",data:{userid:e.userid,type:"uploadPicture"}}).then(function(t){var a=t.data[0];console.log(a),e.setData({prizeState:a})})},getPrize:function(e){var t=this,a=e.currentTarget.dataset.level;t.setData({levelState:a}),t.setData({showGetPrizeModel:!0})},closePrizeModel:function(){var e=this;e.setData({showGetPrizeModel:!1}),i.wxreq({pathname:"YinianProject/activity/ShowPrizeReceivePage",data:{userid:e.userid,type:"uploadPicture"}}).then(function(t){var a=t.data[0];e.setData({prizeState:a})})},nextone:function(){console.log("nextone"),this.setData({userphonefocus:!0})},nextwo:function(){console.log("nextwo"),this.setData({useraddressfocus:!0,userphonefocus:!1})},submitUserInfo:function(e){var t=this,o=this;o.setData({useraddressfocus:!1}),o.userid=a.globalData.userInfo.userid,console.log(e.detail.value,this.data.levelState);var s=e.detail.value;if(0!=s.userName.trim().length&&0!=s.userPhone.trim().length&&0!=s.userAddr.trim().length){switch(console.log("coding...."),o.elTypeName="",o.data.levelState){case"One":o.elTypeName="忆年专属定制水杯";break;case"Two":o.elTypeName="定制自拍杆";break;case"Three":o.elTypeName="个性拼图";break;default:o.elTypeName="圆钉相纸"}i.wxreq({pathname:"YinianProject/activity/WriteLogisticsInfo2",data:{userid:this.userid,type:"uploadPicture",level:o.data.levelState,name:s.userName,address:s.userAddr,phone:s.userPhone,elTypeName:o.elTypeName}}).then(function(e){console.log(e),0==e.code?(t.setData({submitSuccess:!0,showGetPrizeModel:!1}),i.wxreq({pathname:"YinianProject/activity/ShowPrizeReceivePage",data:{userid:o.userid,type:"uploadPicture"}}).then(function(e){var t=e.data[0];console.log(t),o.setData({prizeState:t})})):(console.log("res.code",e.code),wx.showModal({title:"提示",content:"网络错误,请重试",showCancel:!1}))})}else wx.showModal({title:"提示",content:"请填写完整信息",showCancel:!1})}},e(t,"closePrizeModel",function(){var e=this;e.setData({showGetPrizeModel:!1,usernamefocus:!0,userphonefocus:!1,useraddressfocus:!1}),i.wxreq({pathname:"YinianProject/activity/ShowPrizeReceivePage",data:{userid:e.userid,type:"uploadPicture"}}).then(function(t){var a=t.data[0];e.setData({prizeState:a})})}),e(t,"copytext",function(e){wx.setClipboardData({data:"yiniankefu",success:function(e){console.log(e),wx.showToast({title:"复制成功!",icon:"success",duration:2e3})}})}),e(t,"closeDispose",function(){this.setData({showDisposeModel:!1})}),e(t,"showDispose",function(){this.setData({showDisposeModel:!0})}),e(t,"closeSubmitSuccess",function(){this.setData({submitSuccess:!1})}),t)); 
 			}); 	require("pages/detail/photodetail/photodetail.js");
 		__wxRoute = 'pages/detail/sign/sign';__wxRouteBegin = true; 	define("pages/detail/sign/sign.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=require("../../../utils/util.js");Page({data:{days:0,daysCount:0,rewardSpace:0,prizeDetail:[{dayMin:-1,dayMax:7,img:"http://oibl5dyji.bkt.clouddn.com/20171013165321.png"},{dayMin:7,dayMax:14,img:"http://oibl5dyji.bkt.clouddn.com/zipaigan3.png"},{dayMin:14,dayMax:30,img:"http://oibl5dyji.bkt.clouddn.com/20170611105835pt.png"},{dayMin:30,dayMax:100,img:"http://oibl5dyji.bkt.clouddn.com/20170611105835pic.png"},{dayMin:100,dayMax:365,img:"http://oibl5dyji.bkt.clouddn.com/20170611105835iphone.png"}],prizeState:{},showGetPrizeModel:!1,levelState:"",submitSuccess:!1,showDisposeModel:!1,usernamefocus:!0,userphonefocus:!1,useraddressfocus:!1},onLoad:function(t){e.stat.statpv({route:this.route,options:t}),console.log(t);var a=t.days,s=t.signcount;console.log(s,111),a-s>0&&(s=a);var o=(100/1024*a).toFixed(2);this.setData({days:a,daysCount:s,rewardSpace:o})},onShow:function(){var a=this;a.userid=e.globalData.userInfo.userid,t.wxreq({pathname:"YinianProject/activity/ShowPrizeReceivePage",data:{userid:a.userid,type:"signIn"}}).then(function(e){console.log(e);var t=e.data[0];a.setData({prizeState:t})})},preventScoll:function(){},getPrize:function(e){var t=this,a=e.currentTarget.dataset.level;t.setData({levelState:a}),t.setData({showGetPrizeModel:!0})},nextone:function(){console.log("nextone"),this.setData({userphonefocus:!0})},nextwo:function(){console.log("nextwo"),this.setData({useraddressfocus:!0,userphonefocus:!1})},submitUserInfo:function(a){var s=this,o=this;o.setData({useraddressfocus:!1}),o.userid=e.globalData.userInfo.userid,console.log(a.detail.value,this.data.levelState);var i=a.detail.value;if(0!=i.userName.trim().length&&0!=i.userPhone.trim().length&&0!=i.userAddr.trim().length){switch(console.log("coding...."),o.elTypeName="",o.data.levelState){case"One":o.elTypeName="忆年专属定制水杯";break;case"Two":o.elTypeName="定制自拍杆";break;case"Three":o.elTypeName="个性拼图";break;case"Four":o.elTypeName="圆钉相纸";break;default:o.elTypeName="iPhone7"}t.wxreq({pathname:"YinianProject/activity/WriteLogisticsInfo2",data:{userid:this.userid,type:"signIn",level:o.data.levelState,name:i.userName,address:i.userAddr,phone:i.userPhone,elTypeName:o.elTypeName}}).then(function(e){console.log(e),0==e.code?(s.setData({submitSuccess:!0,showGetPrizeModel:!1}),t.wxreq({pathname:"YinianProject/activity/ShowPrizeReceivePage",data:{userid:o.userid,type:"signIn"}}).then(function(e){console.log(e);var t=e.data[0];o.setData({prizeState:t})})):(console.log("res.code",e.code),wx.showModal({title:"提示",content:"网络错误,请重试",showCancel:!1}))})}else wx.showModal({title:"提示",content:"请填写完整信息",showCancel:!1})},copytext:function(e){wx.setClipboardData({data:"yiniankefu",success:function(e){console.log(e.data),wx.showToast({title:"复制成功!",icon:"success",duration:2e3})}})},closeDispose:function(){this.setData({showDisposeModel:!1})},showDispose:function(){this.setData({showDisposeModel:!0})},closeSubmitSuccess:function(){this.setData({submitSuccess:!1})},closePrizeModel:function(){var e=this;e.setData({showGetPrizeModel:!1,usernamefocus:!0,userphonefocus:!1,useraddressfocus:!1}),t.wxreq({pathname:"YinianProject/activity/ShowPrizeReceivePage",data:{userid:e.userid,type:"signIn"}}).then(function(t){var a=t.data[0];e.setData({prizeState:a})})}}); 
 			}); 	require("pages/detail/sign/sign.js");
 		__wxRoute = 'pages/pingtu/pingtu';__wxRouteBegin = true; 	define("pages/pingtu/pingtu.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=parseInt((t.globalData.systemInfo.windowWidth-36)/3),o=[],a=require("../../utils/api.js"),i=require("../../utils/util.js"),r=void 0,s=void 0,n=void 0,h=void 0,u=void 0,c=void 0,d=void 0,p=void 0;Page({data:{picwid:e,bgarr:[],state:[],img:"",showstartbtn:!0,blur:!0,showcover:!0,showlongtapcover:!1,showModelHidden:!1,canIUse:!1},onLoad:function(a){t.stat.statpv({route:this.route,options:a});var i=this;o=[],this.audioCtx=wx.createAudioContext("myAudio"),this.audioCtx_good=wx.createAudioContext("myAudio_good");for(var r=[],s=0;s<3;s++)for(var n=0;n<3;n++)o.push([s*e,n*e]),r.push(!1);i.setData({puzzid:a.id||3,state:r,bgarr:o}),wx.canIUse&&wx.canIUse("button.open-type.share")&&i.setData({canIUse:!0}),a.version&&(this.version=a.version),a.port&&(this.port=a.port,t.globalData.port=a.port),a.fromUserID&&(this.fromUserID=a.fromUserID),a.fromSpaceID&&(this.fromSpaceID=a.fromSpaceID),a.fromEventID&&(this.fromEventID=a.fromEventID)},onShow:function(){var e=this.version?this.version:"",r=this.port?this.port:"",s=this.fromUserID?this.fromUserID:0,n=this.fromSpaceID?this.fromSpaceID:0,h=this.fromEventID?this.fromEventID:0,u=this;t.getUserInfo(function(t){"新用户"!=t.nickName?wx.request({url:a.getUrl("YinianProject/activity/ShowPuzzle"),data:{userid:t.userid,puzzleID:u.data.puzzid||266},method:"GET",success:function(t){var e=t.data.data[0];if(i.wxreq({pathname:"YinianProject/yinian/GetDownloadToken",data:{url:e.puzzlePicture+"?imageView2/1/w/500/h/500"}}).then(function(t){u.setData({img:t.data[0].url,joiner:e.joiner,content:e.puzzleContent})}),"no"==e.isJoin)u.disturb();else{var a=e.joiner.filter(function(t){return t.userid==wx.getStorageSync("userid")});u.setData({posArr:o,alltime:a[0].joinScore,showcover:!0,showresult:!0,showstartbtn:!1,showlongtapcover:!1})}}}):wx.navigateTo({url:"/pages/creatlogin/creatlogin"})},e,r,s,n,h,"pingtu")},start:function(t){this.startTime=(new Date).getTime(),this.setData({showstartbtn:!1,blur:!1,showcover:!1})},disturb:function(){var t=[];o.forEach(function(e){t.push(e)});for(var e,a=1;a<9;a++){e=~~(Math.random()*(9-a)+a);var i=t[a-1];t[a-1]=t[e],t[e]=i}this.setData({posArr:t})},startmove:function(t){if(!(t.touches.length>1)){var e=t.touches[0].clientX,o=t.touches[0].clientY;d=t.currentTarget.offsetLeft,p=t.currentTarget.offsetTop,h=t.target.offsetLeft,n=t.target.offsetTop,r=e-d-h,s=o-p-n,u=t.target.dataset.index,this.setData({dargindex:u})}},end:function(t){if(t.touches.length>0){this.moveLi(u,n,h,n,n,!1)}else{var e=this,o=t.changedTouches[0].clientX,a=t.changedTouches[0].clientY,i=o-d,r=a-p;c=this.findNearestLi(r,i),t.touches.length>0&&(c=!1);var s=c?parseInt(e.data.posArr[c-1][0]):n,f=c?parseInt(e.data.posArr[c-1][1]):h;this.moveLi(u,n,h,s,f,c)}},move:function(t){var e=t.touches[0].clientX,o=t.touches[0].clientY-p-s,a=e-d-r;this.data.posArr[u]=[o,a],this.setData({posArr:this.data.posArr})},findNearestLi:function(t,o){var a=[];this.data.posArr.forEach(function(t){a.push(t)});var i=parseInt(Math.floor(t/e)*e),r=parseInt(Math.floor(o/e)*e);if(i==n&&r==h)return!1;for(var s=0;s<a.length;s++){var u=parseInt(a[s][0]),c=parseInt(a[s][1]);if(u==i&&c==r)return s+1}},moveLi:function(t,e,o,a,i,r){var s=this,n=[];s.data.posArr.forEach(function(t){n.push(t)}),n[t]=[a,i],this.data.posArr[t]=[a,i],r&&(n[r-1]=[e,o],n[t].join("-")==this.data.bgarr[t].join("-")||n[r-1].join("-")==this.data.bgarr[r-1].join("-")?this.play("ok"):this.play("no")),s.setData({posArr:n}),this.setcorrectposition(),this.checkComplate()},checkComplate:function(){for(var t=this,e=!1,o=0;o<t.data.posArr.length;o++){if(t.data.posArr[o].join("-")!=t.data.bgarr[o].join("-"))return!1;e=!0}if(e){this.canmove=!1;var i=(((new Date).getTime()-this.startTime)/1e3).toFixed(2);wx.request({url:a.getUrl("YinianProject/activity/FinishPuzzling"),data:{userid:wx.getStorageSync("userid"),score:i,puzzleID:t.data.puzzid},method:"GET",success:function(e){t.setData({showresult:!0,showcover:!0,alltime:i,joiner:e.data.data})}})}},closeresult:function(){this.setData({showresult:!1,blur:!0,showlongtapcover:!0})},showpic:function(){this.setData({blur:!1,showlongtapcover:!1})},hiddenpic:function(){this.setData({blur:!0,showlongtapcover:!0})},none:function(){},play:function(t){"ok"==t?this.audioCtx_good.play():this.audioCtx.play()},makepuzzle:function(){wx.redirectTo({url:"/pages/makepingtu/makepingtu"})},setcorrectposition:function(){var t=this;t.data.posArr.forEach(function(e,o){e.join("-")==t.data.bgarr[o].join("-")?t.data.state[o]=!0:t.data.state[o]=!1}),t.setData({state:t.data.state})},openModel:function(){this.setData({showModelHidden:!0})},closeModel:function(){this.setData({showModelHidden:!1})},returnhome:function(){wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.navigateBack({delta:10})},showIntro:function(){wx.showToast({title:"点击右上角分享"})},onShareAppMessage:function(){return{title:"我用一张照片做了个拼图游戏，一起来玩！",desc:"完成拼图，可以看看TA的神秘照片",path:"/pages/pingtu/pingtu?port=拼图&id="+this.data.puzzid,success:function(){t.stat.request({operation:"shareCallback"})}}}}); 
 			}); 	require("pages/pingtu/pingtu.js");
 		__wxRoute = 'pages/viewscoll/viewscoll';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/viewscoll/viewscoll.js';	define("pages/viewscoll/viewscoll.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function e(t){var t=t.replace(/-/g,"/"),e=Date.parse(new Date(t));e/=1e3;var a=(new Date).getTime(),o=parseInt(a/1e3)-parseInt(e);return 0==o?"刚刚":o>0&&o<3600?Math.ceil(o/60)+"分钟前":o>=3600&&o<86400?Math.floor(o/3600)+"小时前":o>=86400&&o<259200?Math.floor(o/86400)+"天前":t.slice(0,4)+"."+t.slice(5,7)+"."+t.slice(8,10)}var a,o=function(){function t(t,e){var a=[],o=!0,i=!1,s=void 0;try{for(var n,r=t[Symbol.iterator]();!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(t){i=!0,s=t}finally{try{!o&&r.return&&r.return()}finally{if(i)throw s}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=require("../../utils/util.js"),s=require("../../utils/config.js"),n=require("../../utils/reg.js"),r=getApp(),u=require("../../utils/api.js"),l=require("../../utils/common.js"),d=[],c=require("../../utils/albumsjump.js").albumsjump,g=require("../../utils/tripledes.js"),p=require("../../utils/hotActive.js").hotActive,h=void 0,m=void 0,f=0,w=0,v=0,S=0,I=[{maintitle:"每张照片都有一个故事",title:"从今天开始，记录你生活的点滴，分享你快乐的瞬间"},{maintitle:"每一张照片都是我们的样子",title:"记下我们那麽疯那麽热烈的曾经，是快乐或委屈"},{maintitle:"欢乐的时光无法永留",title:"但是在一起的时候当然是留下我们最开心的模样"},{maintitle:"我的故事",title:"专属于我的私密相册，每一次都是真实的蜕变"},{maintitle:"这里是我们的大家庭",title:"我们就是快乐的一家人，快来分享家庭的故事"},{maintitle:"记录宝宝的成长点滴",title:"今天开始，记录宝宝的每一次成长历程"},{maintitle:"旅行是体验不一样的人生",title:"每个地方都有它的历史，我来过也就成了它历史的一部分"},{maintitle:"我们是个团体",title:"我们有我们独有的故事，而故事就从这里开始"},{maintitle:"喜欢的事现在就要去做",title:"这是我的兴趣，也是我不一样的人生"},{maintitle:"美好的时光永远在校园",title:"从今天开始，记录你生活的点滴，分享你快乐的瞬间"},{maintitle:"我们的工作日常",title:"记录工作的琐事、加班的日子还有逗比的同事"},{maintitle:"陪伴是最长情的告白",title:"爱的旅程，只属于你和我，我会记下你的每一天"},{maintitle:"记录活动的精彩瞬间",title:"分享活动，记录活动"},{maintitle:"快上传这个卖萌小能手的照片",title:"用照片记录各种卖萌的样子，调皮的故事"}];Page((a={data:{playPhoto:!1,canIUse:!1,returnhomepic:"http://oibl5dyji.bkt.clouddn.com/20170605160928.png",ablumInfo:{},textNum:0,fromlast:0,showModelHidden:!1,pvShowModel:!1,showAudioModelBox:!1,eventlist:[],authorityList:[],showTop:!0,newState:!0,showFunModel:!1,loadImgState:!0,waitingState:!0,secondNum:0,secondEnd:!0,showFooterIntro1:!0,showFooterIntro2:!0,alading:!1,aladingTwo:!0,progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic",isUpPicState:!0,globalNewUser:!1,inBlackList:1,showLoadingImg:!1,loadingImgOrText:!0,activitySwitchhot:0,inviteSwitchhot:0,inviteBelowHint:"",alertButtonOne:"",alertHidePic:"",alertButtonTwo01:"",alertButtonTwo02:"",showmidifinenameModel:!1,maintitle:"每张照片都有一个故事",titlestr:"从今天开始，记录你生活的点滴，分享你快乐的瞬间",showDisposeModel:!1,classArr:["pic1","pic2","pic3"],usernumber:3006789,showcomeuserModel:!1,showfirstuploadModel:!1,firstUpPic:"http://oibl5dyji.bkt.clouddn.com/0509_firstUpPic.png",inventPerson:"",textArr:["精彩内容正在赶来...","稍等一下啦...","小忆正在加载中..."],showActivityRules:!0,maxnumber:0,showintroduce:!1,showAuthPic:!1,authpic:{belowImgUrl:""},showComInput:!1,placehold:"对ta说点啥...",inputfocus:!1,loversBannerInfo:{bannerShowPic:"http://oibl5dyji.bkt.clouddn.com/0412_loveBanner.png",bannerSwitch:0},showLoveFirstBox:!1,loversInvitePic:"http://7xlmtr.com1.z0.glb.clouddn.com/alertPictureOne_20180412.png",loversIntroPic:"http://7xlmtr.com1.z0.glb.clouddn.com/alertPictureTwo_20180412.png",showMayDayActivity:!1,isActivitySwitch:{},loversInfo:{alertPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/alert_for_lover_201804201820.png",dakahuodongPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/ji_lu_tian_mi_shi_ke_201804232201.png",inviteText:"立即邀请",jilutianmiPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/upload_pic_201804232232.png",kongXiangCePicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/emptyGroup201805091005.png",uploadText:"上传图片",yaoQingPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/yao_qing_ling_yi_ban_pic.png"}},prevent:function(){this.setData({fromlast:1})},stop:function(){},stopreset:function(){this.loadImgStateNo=!0,this.setData({fromlast:1})},stopLoadImg:function(){this.loadImgStateNo=!0},onLoad:function(t){if(r.stat.statpv({route:this.route,options:t}),this.getAlbumCreater(),!t.groupid){var e=decodeURIComponent(t.scene);if(t={},e.length>0)for(var a=e.split("&"),o=0;o<a.length;o++)t[a[o].split("=")[0]]=a[o].split("=")[1]}t.version&&(this.version=t.version),t.port&&(this.port=t.port,r.globalData.port=t.port,this.setData({port:t.port})),t.fromUserID&&(this.fromUserID=t.fromUserID),t.fromSpaceID&&(this.fromSpaceID=t.fromSpaceID),t.fromEventID&&(this.fromEventID=t.fromEventID),this.isconfirm=t.isconfirm,this.mayefrom=t.mayefrom||"",this.loadImgStateNo=!1,this.getActivitySwitch();var s=this;s.setData({fromlast:0,loadImgState:!1}),this.groupid=t.groupid,this.from=t.from,this.mode=t.mode,this.type=t.type,this.comeuserid=t.comeUserid;try{wx.setStorageSync("groupid",parseInt(s.groupid))}catch(t){console.log(t)}this.imgUrl="",this.zj=t.zj||"",this.lastPage=t.lastPage,this.lastPage=this.lastPage||"null";var n="showLoad"+s.groupid,u="showCreat"+s.groupid;wx.getStorageSync(n)?s.setData({showFooterIntro1:!1}):s.setData({showFooterIntro1:!0}),wx.getStorageSync(u)?s.setData({showFooterIntro2:!1}):s.setData({showFooterIntro2:!0}),this.newState=!0,this.loadImgStateNo=!1,wx.getStorageSync("userInfo")||(s.setData({showAuthPic:!0}),i.getAuthPic("timeLine",s.groupid,function(t){s.setData({authpic:t})})),s.getBannerInfo(),wx.getStorage({key:"peopleCount",success:function(t){0!=t.data&&t.data?s.setData({maxnumber:t.data}):(console.log(t),s.setData({maxnumber:t.data}))}}),"newlovers"===t.makeFrom&&(this.setData({showLoveFirstBox:!0}),i.getAuthPic("lovers_invite",0,function(t){s.setData({loversInvitePic:t.belowImgUrl})}))},onShow:function(){var t=this.version?this.version:"",e=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,o=this.fromSpaceID?this.fromSpaceID:0,s=this.fromEventID?this.fromEventID:0;this.nc=a;var n=this;if(n.flashSaleShowSwitch(),n.setData({groupid:n.groupid}),wx.setStorageSync("groupid",parseInt(n.groupid)),r.getshowState(function(t){n.setData({showpuzze:t,newState:n.newState})}),n.retState=!1,2===r.upState){var l=r.upObj;if(!l.picarr||0==l.picarr.length)return void console.log("获取上传的参数出错");r.isUp||("pic"==r.fromUp?n.startUpload():"video"==r.fromUp?n.startUpVideo():"audio"==r.fromUp?n.startUpAudio():"event"==r.fromUp?n.eventUpload():n.setData({isUpPicState:!1}),r.upState=0)}"text"==r.fromUp&&(n.isfirstUpload(r.text),r.fromUp="");var d=i.randomNum(0,2);n.setData({promptText:d}),r.getUserInfo(function(t){r.globalData.utime||n.flashSalegetUserInfo(t.userid),r.stat.stathotmall({userId:t.userid,groupId:n.groupid,port:r.globalData.port,operation:"interalbum",registerTime:r.globalData.utime,inviteId:n.nc}),1!=n.data.fromlast?(n.loadImgStateNo||(n.setData({loadImgState:!1}),setTimeout(function(){n.loadImgStateNo=!1},100)),"yes"==t.isnew&&(n.setData({showintroduce:!0}),r.isNewUser=!0,n.comeuserid&&wx.request({url:u.getUrl("YinianProject/points/SuccessInviteFriend"),data:{userid:n.comeuserid},method:"GET",success:function(t){console.log(t),t.data.code},fail:function(t){}})),r.isNewUser&&n.setData({globalNewUser:!0}),null!=wx.getStorageSync("userInfo").uLockPass&&r.globalData.pwdState&&wx.navigateTo({url:"/pages/others/password/password?setPwd=shuru"}),n.setData({winHeight:r.globalData.systemInfo.windowHeight,isIphonex:r.globalData.systemInfo.model.toLowerCase().indexOf("iphone x")>=0,r2p:r.globalData.systemInfo.windowWidth/750,from:n.from||"",groupid:n.groupid,userid:t.userid,showAuthPic:!1}),console.log(n.groupid),n.groupid?(n.nickname=t.nickName,wx.request({url:u.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(o){if(0==o.data.code&&o.data.data[0].openloading){var s=parseInt(5*Math.random()+5);return n.setData({waitingState:!1,secondNum:s,secondEnd:!0}),n.timer3=setInterval(function(){var t=n.data.secondNum;t<=0?(clearInterval(n.timer3),n.timer3=null,n.setData({secondEnd:!1})):(t--,n.setData({secondNum:t}))},1e3),void console.log("return")}var u=g.encryptByDESModeCBC(t.userid),l=g.encryptByDESModeCBC(n.groupid);i.wxreq({pathname:"YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",data:{userid:u,groupid:l,port:e,fromUserID:a,zj:n.zj,inviteuserid:n.comeuserid}}).then(function(e){if(2!=e.code)if(1012==e.code)wx.showModal({title:"提示",content:"相册已被解散",showCancel:!1,success:function(t){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else if(1037==e.code)wx.showModal({title:"提示",content:"相册已被封",showCancel:!1,success:function(t){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else{if(0!=e.code)return void wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}});e.data[0].inviteusername&&(console.log("yaoqingren",e.data[0].inviteusername,t.isnew),n.comeuserid!=t.userid&&"0"!=e.data[0].picNum&&"yes"==t.isnew&&n.setData({showcomeuserModel:!0,inventPerson:e.data[0].inviteusername}));var a=e.data[0].isPush?e.data[0].isPush:0;wx.setStorageSync("msgState",a);var o=e.data[0];o.joinStatus||wx.showToast({title:"加入相册成功"}),wx.setStorage({key:"createrid",data:o.gcreator}),wx.setStorage({key:"gAuthority",data:o.gAuthority});var s=o.authorityList?o.authorityList:[];wx.setStorage({key:"authorityList",data:s}),wx.setStorage({key:"gnum",data:o.gnum}),wx.setStorage({key:"ganme",data:o.gname}),n.gname=o.gname,r.globalData.gtype=o.gtype,r.globalData.gcreator=o.gcreator;var u=void 0;u=(10==o.gtype||11==o.gtype)&&t.userid==o.gcreator,n.setData({ablumInfo:{gcreator:o.gcreator,canDelete:u,gtype:o.gtype,gnum:o.gnum,picnum:o.picNum,gname:o.gname,list:o.memberList,gpic:o.gpic,gOrigin:o.gOrigin,eventQRCodeCanPublish:o.eventQRCodeCanPublish,dialogShow:o.dialogShow,inBlackList:o.inBlackList,advertisementsShow:o.advertisementsShow,useablePoints:o.points,upic:o.upic,unickname:r.globalData.userInfo.nickName,arTitle:o.arTitle,arValue:o.arValue,belowImgUrl:o.belowImgUrl,canNotExit:o.canNotExit||0,groupNewType:o.groupNewType}}),n.imgUrl=o.gpic,1==o.advertisementsShow&&n.getBusiness(),30==o.groupNewType&&(n.getLoversAuth(),n.getLoversInfo(),i.getAuthPic("lovers_intro",0,function(t){n.setData({loversIntroPic:t.belowImgUrl})})),n.getCsTimeData(),null==o.groupNewType||13==o.groupNewType||(14==o.groupNewType?n.setData({maintitle:I[o.groupNewType-1].maintitle,titlestr:I[o.groupNewType-1].title}):n.setData({maintitle:I[o.groupNewType].maintitle,titlestr:I[o.groupNewType].title}))}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})})}})):wx.showModal({title:"提示",content:"页面找不到了，返回首页看看",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})):n.timer=setTimeout(function(){n.setData({fromlast:0})},100)},t,e,a,o,s,"viewscoll",function(){n.setData({showAuthPic:!1})})},onReady:function(){var t=this,e=0;r.globalData.userInfo&&(e=r.globalData.userInfo.userid),wx.reportAnalytics("addmember",{userid:e,groupid:t.groupid,clicktime:i.formatTimeWithSecond(new Date)})},onHide:function(){},onUnload:function(){var t=this;console.log("viewscoll-onUnload"),this.retState=!0,3==t.data.upSteps&&(r.upState=0,r.upObj={},t.setData({progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0}))},uploadAgain:function(){"pic"==r.fromUp?this.startUpload():"video"==r.fromUp?this.startUpVideo():"audio"==r.fromUp&&this.startUpAudio(),this.setData({isUpPicState:!1})},startUpVideo:function(){console.log(r.upObj);var t=this,e=r.upObj;t.setData({showProgress:!0,totalnum:1,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"video"}),r.isUp=!0,t.uploadvideosync(e)},uploadvideosync:function(t){var e=this;t.cover?wx.request({url:u.getUrl("YinianProject/yinian/GetUploadToken"),data:{},method:"GET",success:function(a){if(0!=a.data.code)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=a.data.data[0].token,i=t.cover;wx.uploadFile({url:"https://upload.qiniup.com",filePath:i,name:"file",formData:{key:i.split("//")[1],token:o},success:function(a){200!=a.statusCode&&(r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}));var o="http://7xlmtr.com1.z0.glb.clouddn.com/"+i.split("//")[1];wx.request({url:u.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(a){if(0!=a.data.code)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var i=a.data.data[0].token,s=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:s,name:"file",formData:{key:s.split("//")[1],token:i},success:function(a){if(console.log(a),200!=a.statusCode)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});e.setData({uploadnum:1,progress:100});var i=JSON.parse(a.data).key;wx.request({url:u.getUrl("YinianProject/event/UploadShortVideo"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.mainIdStr,content:t.content,address:i,storage:6e3,place:t.place,cover:o,attentionMember:t.attentionMember||"",publishedTime:t.publishedTime||""},success:function(a){if(0==a.data.code){e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:2}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3);var o=a.data.data;e.isfirstUpload(o),p(wx.getStorageSync("userid"),t.mainIdStr,"upload")}else 1039==a.data.code?(e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:4}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3)):(r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}}):wx.request({url:u.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(a){if(console.log(a),0!=a.data.code)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=a.data.data[0].token,i=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:i,name:"file",formData:{key:i.split("//")[1],token:o},success:function(a){if(console.log(a),200!=a.statusCode)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});e.setData({uploadnum:1,progress:100});var o=JSON.parse(a.data).key;wx.request({url:u.getUrl("YinianProject/event/UploadShortVideo"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.mainIdStr,content:t.content,address:o,storage:6e3,place:t.place,attentionMember:t.attentionMember||"",publishedTime:t.publishedTime||""},success:function(a){if(console.log(a),0==a.data.code){e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:2}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3);var o=a.data.data;e.isfirstUpload(o),p(wx.getStorageSync("userid"),t.mainIdStr,"upload")}else 1039==a.data.code?(e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:4}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3)):(r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},startUpAudio:function(){console.log(r.upObj);var t=this,e=r.upObj;t.setData({showProgress:!0,totalnum:1,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"audio"}),r.isUp=!0,t.uploadAudio(e)},uploadAudio:function(t){var e=this;wx.request({url:u.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(a){if(console.log(a),0!=a.data.code)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=a.data.data[0].token,i=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:i,name:"file",formData:{key:i.split("//")[1],token:o},success:function(a){if(console.log(a),200!=a.statusCode)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});e.setData({uploadnum:1,progress:100});var o=JSON.parse(a.data);console.log("path",o);var i=o.key;console.log("userid",wx.getStorageSync("userid")),console.log("address",i),console.log("groupId",t.groupId),console.log("location",t.place),console.log("duration",t.duration),wx.request({url:u.getUrl("YinianProject/event/UploadAudio"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.groupId,eaudio:i,eaudioDuration:t.duration,storage:3e3,place:t.place},success:function(a){if(console.log("lastres",a),0==a.data.code){e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:2}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3);var o=a.data.data;e.isfirstUpload(o),p(wx.getStorageSync("userid"),t.groupId,"upload")}else 1039==a.data.code?(e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:4}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3)):(r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},closeProgress:function(){var t=this;clearTimeout(t.timer2),clearTimeout(t.timer4),clearTimeout(t.timer5),r.upState=0,r.upObj={},this.setData({progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,isUpPicState:!0})},startUpload:function(){var t=this,e=r.upObj,a=[].concat(e.picarr);t.setData({showProgress:!0,totalnum:e.picarr.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic"}),r.isUp=!0,d.length=0,wx.request({url:u.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(o){0===o.data.code?t.uploadpicasync(o.data.data[0].token,e,a):(d.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1)},fail:function(e){d.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1}})},uploadpicasync:function(t,e,a){var o=this;if(0==a.length)wx.request({url:u.getUrl("YinianProject/event/UploadEvent"),data:{userid:wx.getStorageSync("userid"),groupid:e.mainIdStr,content:e.content,picAddress:d.join(","),storage:300*d.length,memorytime:i.formatTime(new Date),attentionMember:e.attentionMember||"",publishedTime:e.publishedTime||"",source:"小程序",place:e.place,formID:e.formID,isPush:"true",main:0},success:function(t){if(console.log(t),0!=t.data.code)return d.length=0,r.isUp=!1,void o.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});if(p(wx.getStorageSync("userid"),e.mainIdStr,"upload"),o.getCsTimeData(),r.isUp=!1,0==o.data.isActivitySwitch.isDelete&&1!=o.data.ablumInfo.gOrigin&&11!=o.data.ablumInfo.gtype&&o.getHeaderData(),null==t.data.data)return d.length=0,r.upState=0,r.upObj={},void o.setData({progress:0,upSteps:2,showProgress:!1,isUpPicState:!0});if(t.data.data[0].picList.length>0){var a=t.data.data;o.isfirstUpload(a)}t.data.data[0].picList.length<d.length?(o.setData({sucImgNum:t.data.data[0].picList.length,fitImgNum:d.length-t.data.data[0].picList.length,upSteps:4,progress:0}),d.length=0,r.upState=0,r.upObj={},o.timer4=setTimeout(function(){o.setData({showProgress:!1,isUpPicState:!0})},8e3)):(d.length=0,r.upState=0,r.upObj={},o.setData({progress:0,upSteps:2}),o.timer2=setTimeout(function(){o.setData({showProgress:!1,isUpPicState:!0})},3e3))},fail:function(){d.length=0,r.isUp=!1,o.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}});else{var s=a.splice(0,1);o.uppic(t,s,a,e)}},eventUpload:function(t,e,a){var o=this;if(0==a.length)wx.request({url:u.getUrl("YinianProject/family/addIncident"),data:{userid:wx.getStorageSync("userid"),groupid:e.mainIdStr,content:e.content,picAddress:d.join(","),storage:300*d.length,memorytime:i.formatTime(new Date),attentionMember:e.attentionMember||"",publishedTime:e.publishedTime||"",source:"小程序",place:e.place,formID:e.formID,isPush:"true",main:5},success:function(t){if(console.log(t),0!=t.data.code)return d.length=0,r.isUp=!1,void o.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});if(p(wx.getStorageSync("userid"),e.mainIdStr,"upload"),o.getCsTimeData(),r.isUp=!1,0==o.data.isActivitySwitch.isDelete&&1!=o.data.ablumInfo.gOrigin&&11!=o.data.ablumInfo.gtype&&o.getHeaderData(),null==t.data.data)return d.length=0,r.upState=0,r.upObj={},void o.setData({progress:0,upSteps:2,showProgress:!1,isUpPicState:!0});if(t.data.data[0].picList.length>0){var a=t.data.data;o.isfirstUpload(a)}t.data.data[0].picList.length<d.length?(o.setData({sucImgNum:t.data.data[0].picList.length,fitImgNum:d.length-t.data.data[0].picList.length,upSteps:4,progress:0}),d.length=0,r.upState=0,r.upObj={},o.timer4=setTimeout(function(){o.setData({showProgress:!1,isUpPicState:!0})},8e3)):(d.length=0,r.upState=0,r.upObj={},o.setData({progress:0,upSteps:2}),o.timer2=setTimeout(function(){o.setData({showProgress:!1,isUpPicState:!0})},3e3))},fail:function(){d.length=0,r.isUp=!1,o.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}});else{var s=a.splice(0,1);o.uppic(t,s,a,e)}},uppic:function(t,e,a,o){var i=this,s=e[0],n=s.lastIndexOf("."),u=(new Date).getTime()+""+parseInt(1e8*Math.random()+1e8)+s.substring(n);wx.uploadFile({url:"https://upload.qiniup.com",filePath:s,name:"file",formData:{key:u,token:t},success:function(e){if(200!=e.statusCode)return d.length=0,r.isUp=!1,void i.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var s=JSON.parse(e.data);d.push(s.key),i.setData({uploadnum:d.length,progress:parseInt(d.length/i.data.totalnum*100)}),i.uploadpicasync(t,o,a)},fail:function(){d.length=0,r.isUp=!1,i.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},getActivitySwitch:function(){var t=this;i.wxreq({pathname:"YinianProject/activitySpacial/selectActivityInfoById",data:{activitySpacialId:1}}).then(function(e){0==e.code&&(console.log(e),t.setData({isActivitySwitch:e.data[0]}))})},refresh:function(){var t=this.version?this.version:"",e=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,o=this.fromSpaceID?this.fromSpaceID:0,s=this.fromEventID?this.fromEventID:0,n=this;r.getUserInfo(function(t){n.nickname=t.nickName,wx.request({url:u.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(o){var s;if(0==o.data.code&&(s=o.data.data[0].setlikecnt,n.setlikecnt=s,o.data.data[0].canlogin)){var u=parseInt(5*Math.random()+5);return n.setData({waitingState:!1,secondNum:u,secondEnd:!0}),void(n.timer2=setInterval(function(){var t=n.data.secondNum;t<=0?(clearInterval(n.timer2),n.timer2=null,n.setData({secondEnd:!1})):(t--,n.setData({secondNum:t}))},1e3))}n.setData({waitingState:!0});var l=g.encryptByDESModeCBC(t.userid),d=g.encryptByDESModeCBC(n.groupid);i.wxreq({pathname:"YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",data:{userid:l,groupid:d,port:e,fromUserID:a,zj:n.zj}}).then(function(e){if(2!=e.code)if(1012==e.code)wx.showModal({title:"提示",content:"相册已被删除",showCancel:!1,success:function(t){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else if(1037==e.code)wx.showModal({title:"提示",content:"相册已被封",showCancel:!1,success:function(t){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else{if(0!=e.code)return void wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}});var a=e.data[0].isPush?e.data[0].isPush:0;wx.setStorageSync("msgState",a);var o=e.data[0];o.joinStatus||wx.showToast({title:"加入相册成功"}),wx.setStorage({key:"createrid",data:o.gcreator}),wx.setStorage({key:"gAuthority",data:o.gAuthority});var s=o.authorityList?o.authorityList:[];wx.setStorage({key:"authorityList",data:s}),wx.setStorage({key:"gnum",data:o.gnum}),wx.setStorage({key:"ganme",data:o.gname}),n.gname=o.gname,r.globalData.gtype=o.gtype,r.globalData.gcreator=o.gcreator;var u=void 0;u=(10==o.gtype||11==o.gtype)&&t.userid==o.gcreator,n.setData({ablumInfo:{gcreator:o.gcreator,canDelete:u,gtype:o.gtype,gnum:o.gnum,picnum:o.picNum,gname:o.gname,list:o.memberList,gpic:o.gpic,gOrigin:o.gOrigin,eventQRCodeCanPublish:o.eventQRCodeCanPublish,dialogShow:o.dialogShow,inBlackList:o.inBlackList,advertisementsShow:o.advertisementsShow,useablePoints:o.points,upic:r.globalData.userInfo.avatarUrl,unickname:r.globalData.userInfo.nickName,arTitle:o.arTitle,arValue:o.arValue,belowImgUrl:o.belowImgUrl,canNotExit:o.canNotExit||0,groupNewType:o.groupNewType}}),n.imgUrl=o.gpic,1==o.advertisementsShow&&n.getBusiness(),30==o.groupNewType&&(n.getLoversAuth(),n.getLoversInfo(),i.getAuthPic("lovers_intro",0,function(t){n.setData({loversIntroPic:t.belowImgUrl})})),n.getCsTimeData(),null==o.groupNewType||13==o.groupNewType||(14==o.groupNewType?n.setData({maintitle:I[o.groupNewType-1].maintitle,titlestr:I[o.groupNewType-1].title}):n.setData({maintitle:I[o.groupNewType].maintitle,titlestr:I[o.groupNewType].title}))}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})})}})},t,e,a,o,s,"viewscoll")},onPageScroll:function(t){var e=750/r.globalData.systemInfo.windowWidth;t.scrollTop>372/e?this.data.showTop&&this.setData({showTop:!1}):this.data.showTop||this.setData({showTop:!0}),this.data.showComInput&&this.setData({showComInput:!1})},showLoveIntro:function(t){var e=t.detail.formId;i.sendFormId(this.data.userid,e),this.setData({showLoveIntroBox:!0});var a=this.groupid,o=this.data.userid,s=this.data.ablumInfo.gcreator;i.countLoversOperation("loversBanner",a,o,s)},closeLoversBox:function(){this.setData({showLoveIntroBox:!1})},closeLoversFirstUp:function(){this.setData({showLoveFirstBox:!1});var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("closeInviteOther",t,e,a)},getLoversAuth:function(){var t=this;i.wxreq({pathname:"YinianProject/bannerDisplay/getLoversBannerInfo",data:{groupId:t.groupid}}).then(function(e){console.log(e),0==e.code&&t.setData({loversBannerInfo:e.data[0]})})},loversInviteBtn:function(){var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("inviteOther",t,e,a)},getLoversInfo:function(){var t=this,e=t.groupid;i.wxreq({pathname:"YinianProject/groupConfig/getGroupConfig",data:{groupId:e,configName:"loverGroupContent"}}).then(function(e){console.log(e),0==e.code&&t.setData({loversInfo:e.data[0]})})},showcode:function(){var t=this;this.loadImgStateNo=!0,t.setData({fromlast:1}),t.tepEid?(wx.showToast({title:"正在获取二维码",icon:"loading",duration:6e3,mask:!0}),wx.request({url:u.getUrl("YinianProject/yinian/CreateSmallAppPlan2QRCode"),data:{id:t.tepEid,type:"eventdetail2"},success:function(t){var e=t.data.data[0].QRCodeURL;wx.hideToast(),wx.previewImage({urls:[e]})}})):wx.showModal({title:"提示",content:"获取动态数据不成功,请稍后再试",showCancel:!1})},toAnotherApp:function(){wx.navigateToMiniProgram({appId:"wx228859fda649194f",path:"pages/index/index",success:function(t){}})},goHome:function(){var t=this;1==t.data.ablumInfo.gOrigin?t.data.showintroduce?t.fasttoknow():(t.loadImgStateNo=!0,wx.navigateTo({url:"/pages/makegroup/makegroup?lastPage=albumDetail"})):wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.switchTab({url:"/pages/index/index"}),r.isNewUser=!1,t.setData({globalNewUser:!1})},toLookPhoto:function(t){this.loadImgStateNo=!0,this.setData({fromlast:1});var e=this.data.groupid,a=t.currentTarget.dataset.userid,o=this.data.ablumInfo.gcreator,i=this.data.ablumInfo.groupNewType;wx.navigateTo({url:"/pages/personalPage/personalPage?groupId="+e+"&pageUserId="+a+"&creator="+o+"&albumType="+i})},toSettingPage:function(t){var e=t.currentTarget.dataset.albumtype,a=this.data.ablumInfo.gOrigin,o=this.data.ablumInfo.canNotExit,s=t.detail.formId;i.sendFormId(this.data.userid,s),this.loadImgStateNo=!0,wx.navigateTo({url:"/pages/setting/setting?clickFrom=viewscoll&gOrigin="+a+"&canNotExit="+o+"&albumType="+e})},addmember:function(t){console.log(t);var e=this,a=e.data.userid||0;if(!e.data.inviteSwitchhot){var o="";o="invite"==t.currentTarget.dataset.invite?"notiflyInvite":"albuminvite",r.stat.stathotmall({userId:a,groupId:e.groupid,port:r.globalData.port,operation:o,registerTime:r.globalData.utime,inviteId:e.nc})}var s=t.detail.formId;if(i.sendFormId(e.data.userid,s),e.groupid){if(this.loadImgStateNo=!0,this.setData({fromlast:1}),30==this.data.ablumInfo.groupNewType){var n=this.groupid,u=this.data.userid,l=this.data.ablumInfo.gcreator;i.countLoversOperation("addmember",n,u,l)}var d={operation:"addmenber",groupId:e.groupid||0,userId:a};r.stat.request(d);var c="";c=this.data.inviteSwitchhot?"/pages/others/sharepage/sharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:c+"?lastPage=albumDetail&clickfrom=group&clickRecord=addmenber&groupid="+e.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+e.data.ablumInfo.groupNewType}),this.isInvitepushId()}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},emptyListShare:function(){var t=this;if(t.groupid){var e={operation:"emptylist_share",groupId:t.groupid||0,userId:t.data.userid||0};r.stat.request(e),this.loadImgStateNo=!0,this.setData({fromlast:1});var a="";console.log(this.data.inviteSwitchhot),a=this.data.inviteSwitchhot?"/pages/others/sharepage/sharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:a+"?lastPage=albumDetail&clickfrom=group&clickRecord=emptylist_share&groupid="+t.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+t.data.ablumInfo.gcreator+"&gname="+t.data.ablumInfo.gname+"&groupNewType="+t.data.ablumInfo.groupNewType})}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},toShare:function(t){var e=this;if(e.groupid){if(e.loadImgStateNo=!0,e.setData({fromlast:1}),console.log(t.currentTarget.dataset.info),"info"===t.currentTarget.dataset.info){var a=e.groupid||0,o=e.data.userid||0;i.countOperation("bannerinfo_share",a,o,"")}var s=e.data.userid||0;e.data.activitySwitchhot||r.stat.stathotmall({userId:s,groupId:e.groupid,port:r.globalData.port,operation:"clicknotify",registerTime:r.globalData.utime,inviteId:e.nc});var n="";console.log(this.data.bannerInfo.bannerJump),n=this.data.bannerInfo.bannerJump?"/pages/others/sharepage/sharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:n+"?lastPage=albumDetail&clickfrom=group&clickRecord=bannerinfo_share&groupid="+e.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+e.data.ablumInfo.groupNewType})}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},toEditPhotos:function(t){var e=t.detail.formId;i.sendFormId(this.data.userid,e);var a=this,o=t.currentTarget.dataset.index,s=t.currentTarget.dataset.photosource,n=this.data.eventlist[o].list[0].picList,u=4==this.data.eventlist[o].list[0].eMain?"video":"pic";if("photosync"==s){if(0==this.data.ablumInfo.inBlackList)return void wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1});this.loadImgStateNo=!0;var l={operation:"ediSync",userId:a.data.userid,groupId:a.groupid};r.stat.request(l)}else{if("download"!=s)return;this.loadImgStateNo=!0,this.setData({fromlast:1})}wx.setStorageSync("editPhotoArr",n),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+s+"&isPicOrVideo="+u})},toEditPhotosDelete:function(t){var e=this,a=t.detail.formId;i.sendFormId(this.data.userid,a);var o=t.currentTarget.dataset.photosource,s=this.data.eventlist[this.a].list[0].picList,n=4==this.data.eventlist[this.a].list[0].eMain?"video":"pic";if("photosync"==o){if(0==this.data.ablumInfo.inBlackList)return void wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1});this.loadImgStateNo=!0;var u={operation:"ediSync",userId:e.data.userid,groupId:e.groupid};r.stat.request(u)}else if("download"==o)this.loadImgStateNo=!0,this.setData({fromlast:1});else{if("delete"!=o)return;this.loadImgStateNo=!0}wx.setStorageSync("editPhotoArr",s),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+o+"&isPicOrVideo="+n})},toChaneBgPic:function(){wx.getStorageSync("userid")?wx.getStorageSync("userid")==wx.getStorageSync("createrid")?(this.loadImgStateNo=!0,wx.navigateTo({url:"/pages/others/changbgpic/changbgpic"})):wx.showModal({title:"提示",content:"非相册管理员，无法修改背景图",showCancel:!1}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},editpic:function(t){var e=this;wx.getStorageSync("userid")?wx.getStorageSync("userid")==wx.getStorageSync("createrid")?(this.loadImgStateNo=!0,this.setData({fromlast:1}),wx.request({url:u.getUrl("YinianProject/yinian/GetUploadToken"),data:{},method:"GET",success:function(t){var a=t.data.data[0].token;wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传",icon:"loading",duration:2e3});var o=t.tempFilePaths[0].split("//")[1];wx.uploadFile({url:"https://upload.qiniup.com",filePath:t.tempFilePaths[0],name:"file",formData:{key:t.tempFilePaths[0].split("//")[1],token:a},success:function(t){var a=JSON.parse(t.data);new Date;wx.request({url:u.getUrl("YinianProject/yinian/ModifyGroupPic"),data:{url:a.key,userid:wx.getStorageSync("userid"),groupID:wx.getStorageSync("groupid")},success:function(t){0==t.data.code?(e.data.ablumInfo.gpic="http://7xlmtr.com1.z0.glb.clouddn.com/"+o,e.setData({ablumInfo:e.data.ablumInfo}),wx.showToast({title:"修改成功",icon:"success",duration:2e3,success:function(){setTimeout(function(){wx.hideToast()},1500)}})):wx.showToast({title:"设置失败"})}})}})}})}})):wx.showModal({title:"提示",content:"非相册管理员，无法修改背景图",showCancel:!1}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},comment:function(t){t.currentTarget.dataset.parentindex,t.currentTarget.dataset.childindex;var e=t.currentTarget.dataset.eid;this.commentEid=e,this.commentedUserid=10,this.commentedname="系统消息",this.setData({showComInput:!0,inputfocus:!0,placehold:"对ta说点啥...",contentCurrent:!1})},recomment:function(t){if(void 0!=t.target.dataset.commentindex){var e=this,a=t.target.dataset.commentindex,s=t.currentTarget.dataset.dataindex.split(","),n=o(s,2),u=n[0],l=n[1],d=this.data.eventlist[u].list[l].comments[a],c=d.commentUser.userid,g=d.commentUser.unickname,p=t.currentTarget.dataset.eid;c==r.globalData.userInfo.userid?wx.showModal({title:"提示",content:"删除此条评论？",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:d.cid}}).then(function(t){"success"==t.msg&&(e.data.eventlist.forEach(function(t,e){t.list[0].eid==p&&(t.list[0].comments.splice(a,1),t.list[0].commentCnt--)}),e.setData({eventlist:e.data.eventlist}))})}}):(this.commentEid=p,this.commentedUserid=c,this.commentedname=g,this.setData({showComInput:!0,inputfocus:!0,placehold:"@"+g+":",contentCurrent:!1}))}},sendcomment:function(t){var e=t.detail.formId,a=t.detail.value.content,o=this.data.userid,s=this.commentEid,u=this.commentedUserid,l=this.commentedname;if(0!=a.length)if(n.testStr(a))wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1});else{var d=this;d.isCommentpushId(),p(o,wx.getStorageSync("groupid"),"comment");var c=i.formatTimeWithSecond(new Date),g={cid:-1,commentedUser:{userid:u,unickname:l},commentUser:{userid:o,unickname:r.globalData.userInfo.nickName,upic:r.globalData.userInfo.avatarUrl},ccontent:a,ctime:c},h=Array.from(d.data.eventlist);d.data.eventlist.forEach(function(t,e){t.list[0].eid==s&&(h[e].list[0].comments.unshift(g),h[e].list[0].commentCnt=parseInt(h[e].list[0].commentCnt)+1)}),d.setData({showComInput:!1,eventlist:h,value:"",contentCurrent:!1,placehold:"说点什么..."}),d.commentedUserid=10,d.commentedname="系统消息",wx.showToast({title:"发表成功",icon:"success",duration:1e3}),i.wxreq({pathname:"YinianProject/yinian/SendComment1",data:{commentUserId:o,commentedUserId:u,eventId:s,content:a,formID:e}}).then(function(t){0==t.code&&(d.data.eventlist.forEach(function(e){e.list[0].eid==s&&e.list[0].comments.forEach(function(e){e.ctime===c&&(e.cid=t.data[0].cid)})}),d.setData({eventlist:d.data.eventlist}))})}else wx.showModal({title:"提示",content:"请先输入评论内容",showCancel:!1})},hiddenWrite:function(){this.setData({showComInput:!1})},checkchange:function(t){var e=t.detail.value.trim().length>0;this.setData({contentCurrent:e})},maketop:function(t){var e=this.data.eventlist[this.a].list[0].eid;this.state=this.data.eventlist[this.a].list[0].elevel;var a=this,o=t.detail.formId;i.sendFormId(a.data.userid,o);var s=1==this.state?"cancel":"stick",n=1==this.state?"取消置顶":"置顶";wx.showModal({title:"提示",content:"是否"+n+"此动态",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/ModifyEventLevel",data:{userid:wx.getStorageSync("userid"),groupid:wx.getStorageSync("groupid"),eid:e,type:s}}).then(function(t){if("success"==t.msg){wx.showToast({title:n+"成功"});a.data.eventlist[a.a].list[0].elevel=1==a.data.eventlist[a.a].list[0].elevel?"0":"1",a.state=1==a.state?"0":"1",a.getCsTimeData()}})}})},delete_event:function(){var e=this,a=this.data.eventlist[e.a].list[0].eid,o=10==this.data.ablumInfo.gtype||11==this.data.ablumInfo.gtype?"YinianProject/yinian/DeleteEvent":"YinianProject/yinian/DeleteEventWithUserVerify",s=10==this.data.ablumInfo.gtype||11==this.data.ablumInfo.gtype?"eventId":"eventID";wx.showModal({title:"删除动态",content:"确定删除此条动态吗？",confirmColor:"#353535",success:function(n){n.confirm&&i.wxreq({pathname:o,data:t({userid:wx.getStorageSync("userid")},s,a)}).then(function(t){if("success"==t.msg){wx.showToast({title:"删除成功",icon:"success",duration:2e3});var o=0,i=!1;e.data.eventlist.forEach(function(t,e){if(t.list[0].eid==a)return o=e,void(i=!0)}),i&&e.data.eventlist.splice(o,1),e.setData({eventlist:e.data.eventlist,showFunModel:!1})}})}})},closeintroduce:function(){this.setData({showintroduce:!1})},uploadpic:function(t){var e=this;if(wx.getStorageSync("userid")){clearTimeout(e.timer),this.setData({fromlast:1}),this.loadImgStateNo=!0;var a;a="pai"==(t=t||event).currentTarget.dataset.pic?"camera":"album",wx.chooseImage({count:9,sizeType:["original"],sourceType:[a],success:function(t){var a=t.tempFilePaths;wx.removeStorageSync("uploadchoosedpic"),wx.setStorage({key:"uploadchoosedpic",data:a,success:function(){e.setData({pvShowModel:!1,fromlast:1}),wx.navigateTo({url:"/pages/uploadpic/uploadpic?lastPage=albumDetail"})},fail:function(){wx.showToast({title:"保存图片临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},uploadvideo:function(t){var e=this;if(wx.getStorageSync("userid")){this.setData({fromlast:1}),this.loadImgStateNo=!0;var a;a="pai"==(t=t||event).currentTarget.dataset.video?"camera":"album",wx.chooseVideo({sourceType:[a],maxDuration:60,camera:"back",success:function(t){var a=t.tempFilePath;wx.setStorage({key:"uploadchoosedvideo",data:a,success:function(){e.setData({pvShowModel:!1}),wx.navigateTo({url:"/pages/uploadvideo/uploadvideo?lastPage=albumDetail"})},fail:function(){wx.showToast({title:"保存视频临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},getBusiness:function(){var t=this;wx.request({url:u.getUrl("YinianProject/adv/getTimeAxisAdv"),data:{groupid:t.groupid},success:function(e){0==e.data.code&&t.setData({businessList:e.data.data})}})},getBannerInfo:function(){var t=this;i.wxreq({pathname:"YinianProject/bannerDisplay/getBannerInfo",data:{groupId:t.groupid}}).then(function(e){0==e.code&&t.setData({bannerInfo:e.data[0]})})},getCsTimeData:function(){this.setlikecnt;var t=this;t.isloading=!1,wx.request({url:u.host+"/YinianProject/event/ShowTimeAxis",data:{userid:wx.getStorageSync("userid"),groupid:t.groupid,type:"initialize",source:"ynxc",eid:0},success:function(a){if(console.log(a),0==a.data.code){var o=a.data.data;wx.getStorageSync("userid");t.templatearr=[],o.forEach(function(a){Object.assign(a,{time:e(a.euploadtime),showlibox:!1}),t.templatearr.push({month:a.euploadtime.substring(0,7).replace("-","."),list:[a]})}),t.setData({eventlist:t.templatearr,showFunModel:!1,loadImgState:!0,showLoadingImg:!1,loadingImgOrText:!0}),"3687301"==t.groupid&&t.data.aladingTwo&&(t.setData({alading:!0}),setTimeout(function(){t.setData({alading:!1,aladingTwo:!1})},2500))}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})}})},enterpreview:function(t){var e=t.currentTarget.dataset.parentindex,a=t.currentTarget.dataset.childindex,o=t.currentTarget.dataset.sel,i=this.data.eventlist,s=this;return console.log(i[e].list[a].picList),wx.setStorageSync("lookImgs",i[e].list[a].picList),clearTimeout(s.timer),s.setData({fromlast:1}),void wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+o})},showlike:function(t){if(wx.getStorageSync("userid")){var e=this,a=t.currentTarget.dataset.parentindex,o=t.currentTarget.dataset.childindex,i=t.currentTarget.dataset.eid;this.a=a,this.b=o,this.tepEid=i;var s=this.data.eventlist[a].list[0];this.imgUrl=4==s.eMain?this.data.ablumInfo.gpic:s.picList[0].thumbnail,e.setData({showFunModel:!0,selNumA:a,selNumB:o})}else wx.showToast({title:"获取用户信息失败"})},toDownLoad:function(t){this.loadImgStateNo=!0,this.setData({fromlast:1});var e=this.data.eventlist[this.a].list[0].picList;wx.setStorageSync("downPic",e);var a=4==this.data.eventlist[this.a].list[0].eMain?"video":"pic";wx.navigateTo({url:"/pages/others/download/download?downloadPicOrVideo="+a})},tosharepage:function(t){console.log(t);var e=this,a=t.detail.formId;i.sendFormId(e.data.userid,a);var o=e.groupid||0,s=e.data.userid||0;i.countOperation("viewscoll_eid",o,s,""),this.loadImgStateNo=!0,this.setData({fromlast:1});var n=t.currentTarget.dataset.index,u=this.data.eventlist[n].list[0].picList,l=this.data.eventlist[n].list[0].eMain,d=this.data.eventlist[n].list[0].eid;r.sharePageUserPic=0,wx.setStorageSync("sharePagePic",u);wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=viewscoll_eid&eid="+d+"&eMain="+l+"&groupid="+this.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish})},like:function(t){if(wx.getStorageSync("userid")){var e=t.detail.formId,a=t.currentTarget.dataset.likecatagry,o=t.currentTarget.dataset.parentindex,i=t.currentTarget.dataset.childindex,s=this.data.eventlist[o].list[i].eid,n=this;a&&(n.data.eventlist[o].list[i].likeUser=1,n.data.eventlist[o].list[i].likeCnt=parseInt(n.data.eventlist[o].list[i].likeCnt)+1,n.setData({eventlist:n.data.eventlist}),wx.showToast({title:"点赞成功",icon:"success",duration:1e3}),wx.request({url:u.getUrl("YinianProject/yinian/AttachOrRemoveExpressionByLkNew"),data:{type:a,userid:r.globalData.userInfo.userid,eid:s,formID:e},success:function(t){t=t.data,n.isLikepushId(),p(wx.getStorageSync("userid"),n.groupid,"like")}}))}else wx.showToast({title:"获取用户信息失败"})},likeState:function(){},onPullDownRefresh:function(){this.getCsTimeData(),wx.stopPullDownRefresh()},onReachBottom:function(){wx.getStorageSync("userid")&&this.data.eventlist&&0!=this.data.eventlist.length&&this.templatearr&&0!=this.templatearr.length&&this.loadinged()},loadinged:function(){this.setlikecnt;var t=this;this.isloading||(this.isloading=!0,this.setData({showLoadingImg:!0,loadingImgOrText:!0}),wx.request({url:u.host+"/YinianProject/event/ShowTimeAxis",data:{groupid:t.groupid,type:"loading",source:"ynxc",eid:t.templatearr[t.templatearr.length-1].list[0].eid,userid:wx.getStorageSync("userid")},success:function(a){console.log(a),0==a.data.code?0==(a=a.data).data.length?t.setData({showLoadingImg:!0,loadingImgOrText:!1}):(a.data.forEach(function(a){t.retState||(Object.assign(a,{time:e(a.euploadtime),showlibox:!1}),t.templatearr.push({month:a.euploadtime.substring(0,7).replace("-","."),list:[a]}))}),t.isloading=!1,t.setData({eventlist:t.templatearr,showLoadingImg:!1})):(t.isloading=!1,t.setData({showLoadingImg:!1}))},fail:function(){t.isloading=!1,t.setData({showLoadingImg:!1})}}))},toMakeGroup:function(){this.loadImgStateNo=!0,this.closeIntroCreate(),wx.navigateTo({url:"/pages/makegroup/makegroup?lastPage=albumDetail"})},showPvModel:function(){var t=this;if(0!=t.data.ablumInfo.inBlackList)if(r.isUp)wx.showToast({title:"正在上传中喔~"});else if(2==t.data.ablumInfo.gOrigin&&t.closeIntroUpload(),1!=wx.getStorageSync("gAuthority")||wx.getStorageSync("userid")==wx.getStorageSync("createrid")){if(2==wx.getStorageSync("gAuthority")){var e=wx.getStorageSync("authorityList");if(0==e.length)return;for(var a=0;a<e.length;a++)e[a].userid==wx.getStorageSync("userid")&&(t.quanxian=!0);if(!t.quanxian)return void wx.showModal({title:"提示",content:"没有上传照片的权限",showCancel:!1})}if(t.setData({pvShowModel:!0}),30==this.data.ablumInfo.groupNewType)if("cancel"===t.isconfirm){var o=this.groupid,s=this.data.userid,n=this.data.ablumInfo.gcreator;i.countLoversOperation("cancelLoversUpBtn",o,s,n)}else{var u=this.groupid,l=this.data.userid,d=this.data.ablumInfo.gcreator;i.countLoversOperation("loversUpBtn",u,l,d)}this.isUploadpushId()}else wx.showModal({title:"提示",content:"只能创建者才能上传"});else wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1})},closepvModel:function(){this.setData({pvShowModel:!1})},closeFunModel:function(){this.imgUrl=this.data.ablumInfo.gpic,this.setData({showFunModel:!1})},openAudioModel:function(){this.setData({showAudioModelBox:!0})},closeAudioBox:function(){this.setData({showAudioModelBox:!1})},preReset:function(){this.setData({fromlast:1})},longPressDelete:function(t){var e=this,a=t.currentTarget.dataset.longcid,o=t.currentTarget.dataset.longeid,s=t.currentTarget.dataset.longindex;wx.showModal({title:"提示",content:"是否删除该条评论",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:a}}).then(function(t){"success"==t.msg&&(e.data.eventlist.forEach(function(t,e){t.list[0].eid==o&&(t.list[0].comments.splice(s,1),t.list[0].commentCnt--)}),e.setData({eventlist:e.data.eventlist}))})}})},activityRules:function(){this.data.ablumInfo&&this.data.ablumInfo.arValue&&this.data.ablumInfo.arValue.length>0&&this.setData({showActivityRules:!1})},closeActivityRules:function(){this.setData({showActivityRules:!0})},onShareAppMessage:function(){this.setData({fromlast:1});var t=this;t.nickname=t.nickname?t.nickname:"",t.gname=t.gname?t.gname:"";var e=wx.getStorageSync("userInfo").userid||0;return{title:t.nickname+"邀请你加入“"+t.gname+"”相册",desc:"这里面有几张我很喜欢的照片，快来看看你喜欢嘛？",imageUrl:t.imgUrl,path:"/pages/timelinelogin/timelinelogin?port=小程序空间分享&groupid="+t.groupid+"&fromUserID="+e,success:function(){r.stat.request({operation:"shareCallback"})}}},returnhome:function(t){var e=t.detail.formId;i.sendFormId(this.data.userid,e),wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.switchTab({url:"/pages/index/index"})},closeIntroUpload:function(){var t="showLoad"+this.groupid;wx.setStorageSync(t,1),this.setData({showFooterIntro1:!1})},closeIntroCreate:function(){var t="showCreat"+this.groupid;wx.setStorageSync(t,1),this.setData({showFooterIntro2:!1})},toBusinessGroup:function(t){var e=this,a=t.detail.formId;if(i.sendFormId(e.data.userid,a),0==e.data.businessList[0].joinGroupOrList)wx.navigateTo({url:"/pages/others/businessgroup/businessgroup?lastPage=albumDetail&listid="+e.data.businessList[0].listid});else if(1==e.data.businessList[0].joinGroupOrList){this.loadImgStateNo=!0;var o=e.data.businessList[0].groupNewType,s=e.data.businessList[0].joinGroupid;c({groupNewType:o,data:{from:"grouplist",groupid:s},navigator:"redirect"})}else if(2==e.data.businessList[0].joinGroupOrList){this.loadImgStateNo=!0,this.setData({fromlast:1});var n=e.groupid||0,r=e.data.userid||0;i.countOperation("bannerpic_share",n,r,""),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=group&clickRecord=bannerpic_share&groupid="+e.groupid+"&gOrigin="+e.data.ablumInfo.gOrigin})}else if(3==e.data.businessList[0].joinGroupOrList){var u=e.data.businessList[0].joinGroupid;if(!u)return;this.loadImgStateNo=!0,wx.navigateTo({url:"/"+u})}},seeBigVideo:function(t){var e=t.currentTarget.dataset.url;wx.setStorageSync("videourl",e),wx.navigateTo({url:"/pages/viewscoll/bigvideo/bigvideo",success:function(){this.loadImgStateNo=!0,this.setData({fromlast:1})}.bind(this)})},loadmore:function(t){this.setData({fromlast:1}),wx.navigateTo({url:"/pages/eventdetail/eventdetail?lastPage=albumDetail&dateindex="+t.currentTarget.dataset.sela+"&eid="+t.currentTarget.dataset.eid+"&rowindex="+t.currentTarget.dataset.selb+"&efrom=viewscoll"})},closeDispose:function(){console.log("closeDispose")},sureDispose:function(){console.log("sureDispose")},edit:function(){var t=this;wx.getStorageSync("createrid")==wx.getStorageSync("userid")?t.setData({Mengcen:!0}):wx.showModal({title:"提示",content:"非相册管理员，无法修改相册名",showCancel:!1})},setcolor:function(t){var e=this,a=t.detail.value.length;e.setData({textNum:a}),t.detail.value.trim().length>0?e.setData({buttonactive:!0}):e.setData({buttonactive:!1})},Mengcen_cancel:function(){this.setData({textNum:0,Mengcen:!1})},submitfun:function(t){var e=this;if(wx.getStorageSync("userid")){var a=t.detail.value.groupname;if(a.trim().length>0){if(n.testStr(a))return void wx.showModal({title:"包含敏感词",content:"请勿使用包含敏感词汇的相册名称",showCancel:!1});wx.request({url:u.getUrl("YinianProject/yinian/ModifyGroupName"),data:{groupid:wx.getStorageSync("groupid"),groupName:a,userid:wx.getStorageSync("userid")},success:function(t){0==t.data.code&&(wx.showToast({title:"修改成功",icon:"success",duration:2e3}),wx.setStorageSync("gname",a),e.data.ablumInfo.gname=a,wx.setStorageSync("ganme",a),e.setData({textNum:0,Mengcen:!1,ablumInfo:e.data.ablumInfo}))}})}else wx.showModal({title:"提示",content:"请输入正确的相册名称",showCancel:!1})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},fasttoknow:function(){var t=this;t.setData({showDisposeModel:!0,usernumber:s.usernumber}),clearInterval(t.timerinterval),t.timerinterval=null,t.usernumberchange()},usernumberchange:function(){var t=this;t.timerinterval=setInterval(function(){if(t.data.usernumber>t.data.maxnumber){clearInterval(t.timerinterval),t.timerinterval=null;var e=t.toThousands(t.data.maxnumber);console.log(e),t.setData({usernumber:e})}else t.data.usernumber+=323456,t.setData({usernumber:t.data.usernumber})},100)},toThousands:function(t){for(var t=(t||0).toString(),e="";t.length>3;)e=","+t.slice(-3)+e,t=t.slice(0,t.length-3);return t&&(e=t+e),e},closeModel:function(){this.setData({showDisposeModel:!1,classArr:["pic1","pic2","pic3"]})},changestart:function(t){f=t.touches[0].pageX,w=t.touches[0].pageY},changemove:function(t){},changend:function(t){var e=this;if(v=t.changedTouches[0].pageX,S=t.changedTouches[0].pageY,f-v>30){if("pic2"==e.data.classArr[0])return;e.data.classArr.unshift(e.data.classArr[e.data.classArr.length-1]),e.data.classArr.pop(e.data.classArr[e.data.classArr.length-1]),e.setData({classArr:e.data.classArr})}else if(v-f>30){if("pic1"==e.data.classArr[0])return;e.data.classArr.push(e.data.classArr[0]),e.data.classArr.shift(e.data.classArr[0]),e.setData({classArr:e.data.classArr})}},addgroup:function(){wx.getStorageSync("userid")?(this.loadImgStateNo=!0,wx.navigateTo({url:"../makegroup/makegroup?lastPage=albumDetail"})):wx.showModal({title:"错误",content:"获取用户授权信息失败！创建相册功能不可用！",showCancel:!1})},isfirstUpload:function(t){return},noLongerPrompt:function(){var t=this;wx.setStorageSync("noPrompt",1),t.setData({showfirstuploadModel:!1});var e={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesNoPrompt",userLastLoginTime:r.enterTime};r.stat.request(e)},getHeaderData:function(){var t=this,e=t.data.userid;i.wxreq({pathname:"YinianProject/activitySpacial/selectHasUploadNum",data:{activitySpacialId:1,userId:e}}).then(function(a){if(console.log(a),0==a.code){var o=a.data[0].hasUploadPercent.split("/")[1];if(a.data[0].hasPicNum=parseInt(o),0==a.data[0].isReceive){t.setData({contentText:a.data[0],showMayDayActivity:!0});var i={operation:"twice_page_popover",userId:e,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(i)}}})},closeMayDayModal:function(){this.setData({showMayDayActivity:!1})},goOnUpload:function(){var t=this;this.setData({showMayDayActivity:!1}),this.showPvModel();var e={operation:"twice_page_reupload",userId:t.data.userid,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(e)},toGetPrize:function(){var t=this,e=this.data.userid;wx.redirectTo({url:"/pages/mayDayActivity/index/index"});var a={operation:"twice_page_toreward",userId:e,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(a)},useablePointsclick:function(t){console.log("跳转到 个人中心积分界面");var e=t.detail.formId;i.sendFormId(this.data.userid,e),this.loadImgStateNo=!0,this.setData({fromlast:1});var a=this.data.groupid,o=this.data.userid,s=this.data.ablumInfo.groupNewType||0,n=this.data.ablumInfo.gcreator;wx.navigateTo({url:"/pages/personalPage/personalPage?groupId="+a+"&pageUserId="+o+"&creator="+n+"&albumType="+s})}},t(a,"closeDispose",function(){this.setData({showcomeuserModel:!1})}),t(a,"hurryupload",function(){var t=this;t.closeDispose(),t.showPvModel()}),t(a,"closefirstuploadDispose",function(){var t=this,e=t.data.userid||0;0==t.data.activitySwitchhot&&r.stat.stathotmall({userId:e,groupId:t.data.groupId,port:r.globalData.port,operation:"quitupload",registerTime:r.globalData.utime,inviteId:t.nc}),t.setData({showfirstuploadModel:!1});var a={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesAgainClose",userLastLoginTime:r.enterTime};"first"==t.data.isFirstUpload&&(a.operation="viewscollToStoriesFirstClose"),r.stat.request(a)}),t(a,"firstuploadshare",function(){var t=this,e=t.groupid||0,a=t.data.userid||0;i.countOperation("firstup_share",e,a,""),t.setData({showfirstuploadModel:!1});var o=t.data.thedata;console.log(o);var s=o[0].picList,n=o[0].eMain,r=o[0].eid;wx.setStorageSync("sharePagePic",s),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=firstup_share&eid="+r+"&eMain="+n+"&groupid="+this.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish})}),t(a,"toStories",function(t){var e=t.currentTarget.dataset.flag;console.log("flag",e);var a={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesAgain",userLastLoginTime:r.enterTime};"first"==e&&(a.operation="viewscollToStoriesFirst"),"again"==e&&(a.operation="viewscollToStoriesAgain"),"share"==e&&(a.operation="viewscollToStoriesShare"),r.stat.request(a);var o=void 0;"first"!=e&&"again"!=e||(o=this.data.thedata[0].eid),"share"==e&&(o=t.currentTarget.dataset.eid);var i=this.groupid;wx.navigateTo({url:"/package/share/pages/shareindex/shareindex?eId="+o+"&groupId="+i})}),t(a,"flashSaleShowSwitch",function(){var t=this;i.wxreq({pathname:"YinianProject/flashSale/flashSaleShowSwitch",data:{}}).then(function(e){console.log(e),0==e.code?(t.setData({activitySwitchhot:e.data[0].activitySwitch,inviteSwitchhot:e.data[0].inviteSwitch,bottomUrl:e.data[0].bottomUrl,inviteBelowHint:e.data[0].inviteBelowHint}),r.globalData.activitySwitch=e.data[0].activitySwitch,r.globalData.shareUrl=e.data[0].shareUrl,r.globalData.inviteSwitch=e.data[0].inviteSwitch,r.globalData.regulaUrl=e.data[0].regulaUrl):wx.showToast({title:"hot请求失败!",duration:2e3})}).catch(function(t){wx.showToast({title:"hot请求失败!",duration:2e3})})}),t(a,"donothing",function(){}),t(a,"isUploadpushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isUpload",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(a,"isInvitepushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isInvite",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(a,"getAlbumCreater",function(){var t=this;i.wxreq({pathname:"YinianProject/flashSale/flashSaleTextContentSwitch",data:{}}).then(function(e){console.log(e),0==e.code&&(r.globalData.sharePicTextContent=e.data[0].sharePicTextContent,r.globalData.sharePicUrlContent=e.data[0].sharePicUrlContent,r.globalData.alertButtonOne=e.data[0].alertButtonOne,r.globalData.alertHidePic=e.data[0].alertHidePic,r.globalData.alertButtonTwo01=e.data[0].alertButtonTwo01,r.globalData.alertButtonTwo02=e.data[0].alertButtonTwo02,r.globalData.shareButtonOne=e.data[0].shareButtonOne,r.globalData.shareButtonTwo_1=e.data[0].shareButtonTwo_1,r.globalData.shareButtonTwo_2=e.data[0].shareButtonTwo_2,r.globalData.hotRecordDetail=e.data[0].hotRecordDetail,t.setData({alertButtonOne:e.data[0].alertButtonOne,alertHidePic:e.data[0].alertHidePic,alertButtonTwo01:e.data[0].alertButtonTwo01,alertButtonTwo02:e.data[0].alertButtonTwo02}))}).catch(function(t){})}),t(a,"hotactiveNavgite",function(){console.log("抢购活动的界面跳转");var t=this;t.groupid?t.joinSaleActivty():wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})}),t(a,"isLikepushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isLike",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(a,"isCommentpushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isComment",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(a,"flashSalegetUserInfo",function(t){i.wxreq({pathname:"YinianProject/flashSale/getUserInfo",data:{userId:t}}).then(function(t){0==t.code&&(r.globalData.utime=t.data[0].utime)},function(t){})}),t(a,"tocreateAlbum",function(){var t=this,e=t.data.userid||0;r.stat.stathotmall({userId:e,groupId:t.data.groupId,port:r.globalData.port,operation:"wantplayupload",registerTime:r.globalData.utime,inviteId:t.nc}),wx.navigateTo({url:"../../../makegroup/makegroup",success:function(t){}})}),t(a,"loversToShare",function(){var t=this;t.groupid?(this.loversInviteBtn(),this.loadImgStateNo=!0,this.setData({fromlast:1,showLoveFirstBox:!1}),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=group&clickRecord=inviteOther&groupid="+t.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish})):wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})}),t(a,"playPhoto",function(t){var e=this;console.log(t),this.setData({playPhoto:!0}),h=t.currentTarget.dataset.eid,m=t.currentTarget.dataset.grouptype,r.stat.request({operation:"albumMakeMore",userId:wx.getStorageSync("userid"),groupId:e.groupid,groupNewType:m})}),t(a,"makeStory",function(){var t=this;r.stat.request({operation:"albumMakeStory",userId:wx.getStorageSync("userid"),groupId:t.groupid,groupNewType:m}),wx.showLoading({title:"正在上传",mask:!0}),wx.request({url:u.host+"/YinianProject/story/createStory",data:{userId:wx.getStorageSync("userid")},success:function(e){console.log(e),0==e.data.code&&(wx.hideLoading(),wx.setStorageSync("storyId",e.data.data[0].storyId),wx.request({url:u.host+"/YinianProject/story/eventGenerateStory",data:{userId:wx.getStorageSync("userid"),eId:h,storyId:wx.getStorageSync("storyId"),groupId:t.groupid},method:"GET",success:function(e){if(console.log(e),0===e.data.code){t.setData({playPhoto:!1});var a=l.getCurrentPageUrlWithArgs();console.log(a),wx.setStorageSync("skipUrl",a),wx.navigateTo({url:"/package/stories/pages/make/makeStory?eId="+wx.getStorageSync("storyId")+"&groupid="+t.groupid+"&index=1&groupType="+m})}},fail:function(t){}}))},fail:function(t){}})}),a)); 
 			}); 	require("pages/viewscoll/viewscoll.js");
 		__wxRoute = 'pages/grouptypescoll/grouptypescoll';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/grouptypescoll/grouptypescoll.js';	define("pages/grouptypescoll/grouptypescoll.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var e,a=function(){function t(t,e){var a=[],o=!0,i=!1,s=void 0;try{for(var n,r=t[Symbol.iterator]();!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(t){i=!0,s=t}finally{try{!o&&r.return&&r.return()}finally{if(i)throw s}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=require("../../utils/util.js"),s=require("../../utils/config.js"),n=require("../../utils/reg.js"),r=getApp(),l=require("../../utils/api.js"),u=require("../../utils/common.js"),d=[],c=require("../../utils/tripledes.js"),g=wx.createInnerAudioContext(),p=require("../../utils/albumsjump.js").albumsjump,h=require("../../utils/hotActive.js").hotActive,m=void 0,f=void 0,w=0,v=0,b=0,I=0;Page((e={data:{canIUse:!1,returnhomepic:"http://oibl5dyji.bkt.clouddn.com/20170605160928.png",ablumInfo:{},textNum:0,fromlast:0,showModelHidden:!1,pvShowModel:!1,showAudioModelBox:!1,eventlist:[],authorityList:[],showTop:!0,showFunModel:!1,loadImgState:!0,waitingState:!0,secondNum:0,secondEnd:!0,showFooterIntro1:!0,showFooterIntro2:!0,alading:!1,aladingTwo:!0,progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic",isUpPicState:!0,globalNewUser:!1,inBlackList:1,showLoadingImg:!1,loadingImgOrText:!0,showmidifinenameModel:!1,showDisposeModel:!1,classArr:["pic1","pic2","pic3"],activitySwitchhot:1,inviteSwitchhot:1,bottomUrl:"",isgcreator:!1,inviteBelowHint:"",alertButtonOne:"",alertHidePic:"",alertButtonTwo01:"",alertButtonTwo02:"",usernumber:3006789,showcomeuserModel:!1,showfirstuploadModel:!1,firstUpPic:"http://oibl5dyji.bkt.clouddn.com/0509_firstUpPic.png",inventPerson:"",textArr:["精彩内容正在赶来...","稍等一下啦...","小忆正在加载中..."],showActivityRules:!0,maxnumber:0,showintroduce:!1,showAuthPic:!1,authpic:{belowImgUrl:""},showComInput:!1,placehold:"对ta说点啥...",inputfocus:!1,loversBannerInfo:{bannerShowPic:"http://oibl5dyji.bkt.clouddn.com/0412_loveBanner.png",bannerSwitch:0},showLoveFirstBox:!1,loversInvitePic:"http://7xlmtr.com1.z0.glb.clouddn.com/alertPictureOne_20180412.png",loversIntroPic:"http://7xlmtr.com1.z0.glb.clouddn.com/alertPictureTwo_20180412.png",addModalOn:!1,addModalAnimation:!1,addEventModalOn:!1,addEventModalAnimation:!1,addPhotoModalOn:!1,addPhotoModalAnimation:!1,modalTitle:"照片",icon:{arrow:"http://oibl5dyji.bkt.clouddn.com/myself_more@2x.png",photos:"http://oibl5dyji.bkt.clouddn.com/photos@2x.png",members:"http://oibl5dyji.bkt.clouddn.com/members@2x.png",photo_wall:"http://oibl5dyji.bkt.clouddn.com/photos_wall@2x.png",user:"http://oibl5dyji.bkt.clouddn.com/user@2x.png",camera:"http://oibl5dyji.bkt.clouddn.com/camera@2x.png",camera_l:"http://oibl5dyji.bkt.clouddn.com/camera_l@2x.png",photo_l:"http://oibl5dyji.bkt.clouddn.com/photo_l@2x.png",video_l:"http://oibl5dyji.bkt.clouddn.com/video_l@2x.png",write_l:"http://oibl5dyji.bkt.clouddn.com/write_l@2x.png",mike_l:"http://oibl5dyji.bkt.clouddn.com/mike_l@2x.png",close_l:"http://oibl5dyji.bkt.clouddn.com/close_l@2x.png",pose_add:"http://oibl5dyji.bkt.clouddn.com/PC_add@2x.png",pose_add_l:"http://oibl5dyji.bkt.clouddn.com/PC_add_l@2x.png",camera_dark:"http://oibl5dyji.bkt.clouddn.com/content_carema@2x.png"},loversInfo:{alertPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/alert_for_lover_201804201820.png",dakahuodongPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/dakahuodong_pic_201804201820.png",inviteText:"立即邀请",jilutianmiPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/ji_lu_tian_mi_pic_201804201821.png",kongXiangCePicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/kong_xiang_tupian_pic_201804201822.png",uploadText:"上传甜蜜时刻",yaoQingPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/yao_qing_ling_yi_ban_pic.png"},showMayDayActivity:!1,isActivitySwitch:{},showInviteModal:!1,publishMenu:!1,menuNames:""},prevent:function(){this.setData({fromlast:1})},stop:function(){},donothing:function(){},stopreset:function(){this.loadImgStateNo=!0,this.setData({fromlast:1})},stopLoadImg:function(){this.loadImgStateNo=!0},onLoad:function(t){if(r.stat.statpv({route:this.route,options:t}),this.getAlbumCreater(),!t.groupid){var e=decodeURIComponent(t.scene);if(t={},e.length>0)for(var a=e.split("&"),o=0;o<a.length;o++)t[a[o].split("=")[0]]=a[o].split("=")[1]}t.version&&(this.version=t.version),t.port&&(this.port=t.port,r.globalData.port=t.port,this.setData({port:t.port})),t.fromUserID&&(this.fromUserID=t.fromUserID),t.fromSpaceID&&(this.fromSpaceID=t.fromSpaceID),t.fromEventID&&(this.fromEventID=t.fromEventID),this.isconfirm=t.isconfirm,this.mayefrom=t.mayefrom||"",this.loadImgStateNo=!1,this.getActivitySwitch();var s=this;s.setData({fromlast:0,loadImgState:!1}),this.groupid=t.groupid,this.from=t.from,this.mode=t.mode,this.type=t.type,this.comeuserid=t.comeUserid;try{wx.setStorageSync("groupid",parseInt(s.groupid))}catch(t){console.log(t)}this.zj=t.zj||"",this.lastPage=t.lastPage,this.lastPage=this.lastPage||"null",this.isSubmit=1;var n="showLoad"+s.groupid,l="showCreat"+s.groupid;wx.getStorageSync(n)?s.setData({showFooterIntro1:!1}):s.setData({showFooterIntro1:!0}),wx.getStorageSync(l)?s.setData({showFooterIntro2:!1}):s.setData({showFooterIntro2:!0}),this.loadImgStateNo=!1,wx.getStorageSync("userInfo")||(s.setData({showAuthPic:!0}),i.getAuthPic("timeLine",s.groupid,function(t){s.setData({authpic:t})})),s.getBannerInfo(),wx.getStorage({key:"peopleCount",success:function(t){0!=t.data&&t.data?s.setData({maxnumber:t.data}):(console.log(t),s.setData({maxnumber:t.data}))}}),"newlovers"===t.makeFrom&&(this.setData({showLoveFirstBox:!0}),i.getAuthPic("lovers_invite",0,function(t){s.setData({loversInvitePic:t.belowImgUrl})}))},onShow:function(){var t=this.version?this.version:"",e=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,o=this.fromSpaceID?this.fromSpaceID:0,s=this.fromEventID?this.fromEventID:0;this.nc=a;var n=this;if(n.flashSaleShowSwitch(),n.setData({groupid:n.groupid}),wx.setStorageSync("groupid",parseInt(n.groupid)),r.getshowState(function(t){n.setData({showpuzze:t})}),n.retState=!1,2===r.upState){var u=r.upObj;if(!u.picarr||0==u.picarr.length)return void console.log("获取上传的参数出错");r.isUp||("pic"==r.fromUp?n.startUpload():"video"==r.fromUp?n.startUpVideo():"audio"==r.fromUp&&n.startUpAudio(),n.setData({isUpPicState:!1})),r.upState=0}"text"==r.fromUp&&(n.isfirstUpload(r.text),r.fromUp="");var d=i.randomNum(0,2);n.setData({promptText:d}),r.getUserInfo(function(t){if(1==n.isSubmit){n.enterCurrentTimestamp=(new Date).getTime();var a="null";n.data.ablumInfo&&1==n.data.ablumInfo.gOrigin?a="true":n.data.ablumInfo&&1!=n.data.ablumInfo.gOrigin&&(a="false");var o={basicInfo:{userid:t.userid,source:e,"isActivityAlbum ":a,"lastPage ":n.lastPage,timestamp:n.enterCurrentTimestamp,identification:t.userid+"_"+r.enterTimestamp},type:"enter",data:{page:{name:"albumDetail",page_identification:t.userid+"_"+n.enterCurrentTimestamp}}};0==r.sendValue&&i.sendData(t.userid,o),n.button=[]}else n.isSubmit=1;r.globalData.utime||n.flashSalegetUserInfo(t.userid),r.stat.stathotmall({userId:t.userid,groupId:n.groupid,port:r.globalData.port,operation:"interalbum",registerTime:r.globalData.utime,inviteId:n.nc}),1!=n.data.fromlast?(n.loadImgStateNo||(n.setData({loadImgState:!1}),setTimeout(function(){n.loadImgStateNo=!1},100)),"yes"==t.isnew&&(n.setData({showintroduce:!0}),r.isNewUser=!0,n.comeuserid&&wx.request({url:l.getUrl("YinianProject/points/SuccessInviteFriend"),data:{userid:n.comeuserid},method:"GET",success:function(t){console.log(t),t.data.code},fail:function(t){}})),r.isNewUser&&n.setData({globalNewUser:!0}),null!=wx.getStorageSync("userInfo").uLockPass&&r.globalData.pwdState&&wx.navigateTo({url:"/pages/others/password/password?setPwd=shuru"}),n.setData({winHeight:r.globalData.systemInfo.windowHeight,isIphonex:r.globalData.systemInfo.model.toLowerCase().indexOf("iphone x")>=0,r2p:r.globalData.systemInfo.windowWidth/750,from:n.from||"",groupid:n.groupid,userid:t.userid,showAuthPic:!1}),n.groupid?(n.nickname=t.nickName,wx.request({url:l.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(e){if(0==e.data.code&&e.data.data[0].openloading){var a=parseInt(5*Math.random()+5);return n.setData({waitingState:!1,secondNum:a,secondEnd:!0}),void(n.timer3=setInterval(function(){var t=n.data.secondNum;t<=0?(clearInterval(n.timer3),n.timer3=null,n.setData({secondEnd:!1})):(t--,n.setData({secondNum:t}))},1e3))}n.getAlbumInformation(t)}})):wx.showModal({title:"提示",content:"页面找不到了，返回首页看看",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})):n.timer=setTimeout(function(){n.setData({fromlast:0})},100)},t,e,a,o,s,"viewscoll",function(){n.setData({showAuthPic:!1})})},onReady:function(){var t=this;g.onPlay(function(t){}),g.onPause(function(t){}),g.onError(function(e){wx.showToast({title:"语音播放错误",duration:1e3}),t.closeAllAudio()}),g.onEnded(function(e){t.closeAllAudio()});var e=0;r.globalData.userInfo&&(e=r.globalData.userInfo.userid),wx.reportAnalytics("addmember",{userid:e,groupid:t.groupid,clicktime:i.formatTimeWithSecond(new Date)})},onHide:function(){1==this.isSubmit&&(console.log("viewscoll-hide"),this.sendLeaveData())},onUnload:function(){var t=this;console.log("viewscoll-onUnload"),this.sendLeaveData(),this.retState=!0,3==t.data.upSteps&&(r.upState=0,r.upObj={},t.setData({progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0}))},sendLeaveData:function(){var t=this,e=this.port?this.port:"",a=wx.getStorageSync("userid"),o=(new Date).getTime()-t.enterCurrentTimestamp,s="null";t.data.ablumInfo&&1==t.data.ablumInfo.gOrigin?s="true":t.data.ablumInfo&&1!=t.data.ablumInfo.gOrigin&&(s="false");var n={basicInfo:{userid:a,source:e," isActivityAlbum ":s,"lastPage ":t.lastPage,timestamp:(new Date).getTime(),identification:a+"_"+r.enterTimestamp},type:"leave",data:{page:{name:"albumDetail",page_identification:a+"_"+t.enterCurrentTimestamp},botton:t.button,time:o}};0==r.sendValue&&i.sendData(a,n)},uploadAgain:function(){"pic"==r.fromUp?this.startUpload():"video"==r.fromUp?this.startUpVideo():"audio"==r.fromUp&&this.startUpAudio(),this.setData({isUpPicState:!1})},startUpVideo:function(){console.log(r.upObj);var t=this,e=r.upObj;t.setData({showProgress:!0,totalnum:1,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"video"}),r.isUp=!0,t.uploadvideosync(e)},uploadvideosync:function(t){var e=this;wx.request({url:l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(a){if(console.log(a),0!=a.data.code)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=a.data.data[0].token,i=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:i,name:"file",formData:{key:i.split("//")[1],token:o},success:function(a){if(console.log(a),200!=a.statusCode)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});e.setData({uploadnum:1,progress:100});var o=JSON.parse(a.data).key;wx.request({url:l.getUrl("YinianProject/event/UploadShortVideo"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.mainIdStr,content:t.content,address:o,storage:6e3,place:t.place,attentionMember:t.attentionMember||"",publishedTime:t.publishedTime||""},success:function(a){if(console.log(a),0==a.data.code){e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:2}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3);var o=a.data.data;e.isfirstUpload(o),h(wx.getStorageSync("userid"),t.mainIdStr,"upload")}else 1039==a.data.code?(e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:4}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3)):(r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},startUpAudio:function(){console.log(r.upObj);var t=this,e=r.upObj;t.setData({showProgress:!0,totalnum:1,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"audio"}),r.isUp=!0,t.uploadAudio(e)},uploadAudio:function(t){var e=this;wx.request({url:l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(a){if(console.log(a),0!=a.data.code)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=a.data.data[0].token,i=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:i,name:"file",formData:{key:i.split("//")[1],token:o},success:function(a){if(console.log(a),200!=a.statusCode)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});e.setData({uploadnum:1,progress:100});var o=JSON.parse(a.data);console.log("path",o);var i=o.key;console.log("userid",wx.getStorageSync("userid")),console.log("address",i),console.log("groupId",t.groupId),console.log("location",t.place),console.log("duration",t.duration),wx.request({url:l.getUrl("YinianProject/event/UploadAudio"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.groupId,eaudio:i,eaudioDuration:t.duration,storage:3e3,place:t.place},success:function(a){if(console.log("lastres",a),0==a.data.code){e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:2}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3);var o=a.data.data;e.isfirstUpload(o),h(wx.getStorageSync("userid"),t.groupId,"upload")}else 1039==a.data.code?(e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:4}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3)):(r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},closeProgress:function(){var t=this;clearTimeout(t.timer2),clearTimeout(t.timer4),clearTimeout(t.timer5),r.upState=0,r.upObj={},this.setData({progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,isUpPicState:!0})},startUpload:function(){var t=this,e=r.upObj,a=[].concat(e.picarr);t.setData({showProgress:!0,totalnum:e.picarr.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic"}),r.isUp=!0,d.length=0,wx.request({url:l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(o){0===o.data.code?t.uploadpicasync(o.data.data[0].token,e,a):(d.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1)},fail:function(e){d.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1}})},uploadpicasync:function(t,e,a){var o=this;if(0==a.length)wx.request({url:l.getUrl("YinianProject/event/UploadEvent"),data:{userid:wx.getStorageSync("userid"),groupid:e.mainIdStr,content:e.content,picAddress:d.join(","),storage:300*d.length,memorytime:i.formatTime(new Date),source:"小程序",place:e.place,formID:e.formID,isPush:"true",main:0,attentionMember:e.attentionMember||"",publishedTime:e.publishedTime||""},success:function(t){if(console.log(t),0!=t.data.code)return d.length=0,r.isUp=!1,void o.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});if(h(wx.getStorageSync("userid"),e.mainIdStr,"upload"),o.getCsTimeData(),r.isUp=!1,0==o.data.isActivitySwitch.isDelete&&1!=o.data.ablumInfo.gOrigin&&11!=o.data.ablumInfo.gtype&&o.getHeaderData(),null==t.data.data)return d.length=0,r.upState=0,r.upObj={},void o.setData({progress:0,upSteps:2,showProgress:!1,isUpPicState:!0});if(t.data.data[0].picList.length>0){var a=t.data.data;o.isfirstUpload(a)}t.data.data[0].picList.length<d.length?(o.setData({sucImgNum:t.data.data[0].picList.length,fitImgNum:d.length-t.data.data[0].picList.length,upSteps:4,progress:0}),d.length=0,r.upState=0,r.upObj={},o.timer4=setTimeout(function(){o.setData({showProgress:!1,isUpPicState:!0})},8e3)):(d.length=0,r.upState=0,r.upObj={},o.setData({progress:0,upSteps:2}),o.timer2=setTimeout(function(){o.setData({showProgress:!1,isUpPicState:!0})},3e3))},fail:function(){d.length=0,r.isUp=!1,o.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}});else{var s=a.splice(0,1);o.uppic(t,s,a,e)}},uppic:function(t,e,a,o){var i=this,s=e[0],n=s.lastIndexOf("."),l=(new Date).getTime()+""+parseInt(1e8*Math.random()+1e8)+s.substring(n);wx.uploadFile({url:"https://upload.qiniup.com",filePath:s,name:"file",formData:{key:l,token:t},success:function(e){if(200!=e.statusCode)return d.length=0,r.isUp=!1,void i.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var s=JSON.parse(e.data);d.push(s.key),i.setData({uploadnum:d.length,progress:parseInt(d.length/i.data.totalnum*100)}),i.uploadpicasync(t,o,a)},fail:function(){d.length=0,r.isUp=!1,i.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},getAlbumInformation:function(t){var e=this,a=c.encryptByDESModeCBC(t.userid),o=c.encryptByDESModeCBC(e.groupid),s=this.port?this.port:"",n=this.fromUserID?this.fromUserID:0,l=e.zj,u=e.comeuserid;i.wxreq({pathname:"YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",data:{userid:a,groupid:o,port:s,fromUserID:n,zj:l,inviteuserid:u}}).then(function(a){if(2!=a.code)if(1012==a.code)wx.showModal({title:"提示",content:"相册已被解散",showCancel:!1,success:function(t){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else if(1037==a.code)wx.showModal({title:"提示",content:"相册已被封",showCancel:!1,success:function(t){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else{if(0!=a.code)return void wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}});a.data[0].inviteusername&&(console.log("yaoqingren",a.data[0].inviteusername,t.isnew),u!=t.userid&&"0"!=a.data[0].picNum&&"yes"==t.isnew&&e.setData({showcomeuserModel:!0,inventPerson:a.data[0].inviteusername}));var o=a.data[0].isPush?a.data[0].isPush:0;wx.setStorageSync("msgState",o);var s=a.data[0];s.joinStatus||wx.showToast({title:"加入相册成功"}),wx.setStorage({key:"createrid",data:s.gcreator}),s.gcreator==t.userid&&e.setData({isgcreator:!0}),wx.setStorage({key:"gAuthority",data:s.gAuthority});var n=s.authorityList?s.authorityList:[];wx.setStorage({key:"authorityList",data:n}),wx.setStorage({key:"gnum",data:s.gnum}),wx.setStorage({key:"ganme",data:s.gname}),e.gname=s.gname,r.globalData.gtype=s.gtype,r.globalData.gcreator=s.gcreator;var l=void 0;l=(10==s.gtype||11==s.gtype)&&t.userid==s.gcreator,e.setData({ablumInfo:{gcreator:s.gcreator,canDelete:l,gtype:s.gtype,gnum:s.gnum,picnum:s.picNum,gname:s.gname,list:s.memberList,gpic:s.gpic,gOrigin:s.gOrigin,eventQRCodeCanPublish:s.eventQRCodeCanPublish,dialogShow:s.dialogShow,inBlackList:s.inBlackList,advertisementsShow:s.advertisementsShow,useablePoints:s.points,upic:s.upic,unickname:r.globalData.userInfo.nickName,arTitle:s.arTitle,arValue:s.arValue,belowImgUrl:s.belowImgUrl,canNotExit:s.canNotExit||0,groupNewType:s.groupNewType}}),1==s.advertisementsShow&&e.getBusiness(),4==s.groupNewType&&(e.getLoversAuth(),e.getLoversInfo(),i.getAuthPic("lovers_intro",0,function(t){e.setData({loversIntroPic:t.belowImgUrl})})),e.getCsTimeData()}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})})},getActivitySwitch:function(){var t=this;i.wxreq({pathname:"YinianProject/activitySpacial/selectActivityInfoById",data:{activitySpacialId:1}}).then(function(e){0==e.code&&(console.log(e),t.setData({isActivitySwitch:e.data[0]}))})},refresh:function(){var t=this.version?this.version:"",e=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,o=this.fromSpaceID?this.fromSpaceID:0,i=this.fromEventID?this.fromEventID:0,s=this;r.getUserInfo(function(t){s.nickname=t.nickName,wx.request({url:l.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(e){var a;if(0==e.data.code&&(a=e.data.data[0].setlikecnt,s.setlikecnt=a,e.data.data[0].canlogin)){var o=parseInt(5*Math.random()+5);return s.setData({waitingState:!1,secondNum:o,secondEnd:!0}),void(s.timer2=setInterval(function(){var t=s.data.secondNum;t<=0?(clearInterval(s.timer2),s.timer2=null,s.setData({secondEnd:!1})):(t--,s.setData({secondNum:t}))},1e3))}s.setData({waitingState:!0}),s.getAlbumInformation(t)}})},t,e,a,o,i,"viewscoll")},onPageScroll:function(t){var e=750/r.globalData.systemInfo.windowWidth;t.scrollTop>372/e?this.data.showTop&&this.setData({showTop:!1}):this.data.showTop||this.setData({showTop:!0}),this.data.showComInput&&this.setData({showComInput:!1})},showLoveIntro:function(){this.setData({showLoveIntroBox:!0});var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("loversBanner",t,e,a)},closeLoversBox:function(){this.setData({showLoveIntroBox:!1})},closeLoversFirstUp:function(){this.setData({showLoveFirstBox:!1});var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("closeInviteOther",t,e,a)},getLoversAuth:function(){var t=this;i.wxreq({pathname:"YinianProject/bannerDisplay/getLoversBannerInfo",data:{groupId:t.groupid}}).then(function(e){console.log(e),0==e.code&&t.setData({loversBannerInfo:e.data[0]})})},loversInviteBtn:function(){var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("inviteOther",t,e,a)},getLoversInfo:function(){var t=this,e=t.groupid;i.wxreq({pathname:"YinianProject/groupConfig/getGroupConfig",data:{groupId:e,configName:"loverGroupContent"}}).then(function(e){console.log(e),0==e.code&&t.setData({loversInfo:e.data[0]})})},showcode:function(){var t=this;this.loadImgStateNo=!0,t.setData({fromlast:1}),t.tepEid?(wx.showToast({title:"正在获取二维码",icon:"loading",duration:6e3,mask:!0}),wx.request({url:l.getUrl("YinianProject/yinian/CreateSmallAppPlan2QRCode"),data:{id:t.tepEid,type:"eventdetail2"},success:function(t){var e=t.data.data[0].QRCodeURL;wx.hideToast(),wx.previewImage({urls:[e]})}})):wx.showModal({title:"提示",content:"获取动态数据不成功,请稍后再试",showCancel:!1})},toAnotherApp:function(){wx.navigateToMiniProgram({appId:"wx228859fda649194f",path:"pages/index/index",success:function(t){}})},goHome:function(){var t=this;"object"==o(this.button)&&this.button.push({name:"backToIndex"}),1==t.data.ablumInfo.gOrigin?t.data.showintroduce?t.fasttoknow():(t.loadImgStateNo=!0,wx.navigateTo({url:"/pages/makegroup/makegroup?lastPage=albumDetail"})):wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.switchTab({url:"/pages/index/index"}),r.isNewUser=!1,t.setData({globalNewUser:!1})},toLookPhoto:function(t){this.loadImgStateNo=!0,this.setData({fromlast:1});var e=t.currentTarget.dataset.userid,a=t.currentTarget.dataset.groupid,o=this.data.ablumInfo.groupNewType||0;wx.navigateTo({url:"/pages/personalPage/personalPage?groupId="+a+"&albumType="+o+"&pageUserId="+e+"&creator="+this.data.ablumInfo.gcreator})},toSettingPage:function(t){var e=t.currentTarget.dataset.albumtype,a=this.data.ablumInfo.gOrigin,o=this.data.ablumInfo.canNotExit,s=t.detail.formId;i.sendFormId(this.data.userid,s),console.log(e),this.loadImgStateNo=!0,wx.navigateTo({url:"/pages/setting/setting?clickFrom=grouptypescoll&gOrigin="+a+"&canNotExit="+o+"&albumType="+e})},addmember:function(t){var e=this,a=e.data.userid||0;if(!e.data.inviteSwitchhot){var s="";s="invite"==t.currentTarget.dataset.invite?"notiflyInvite":"albuminvite",r.stat.stathotmall({userId:a,groupId:e.groupid,port:r.globalData.port,operation:s,registerTime:r.globalData.utime,inviteId:e.nc})}if(e.groupid){if(this.loadImgStateNo=!0,this.setData({fromlast:1}),"object"==o(this.button)&&this.button.push({name:"invite"}),4==this.data.ablumInfo.groupNewType){var n=this.groupid,l=this.data.userid,u=this.data.ablumInfo.gcreator;i.countLoversOperation("addmember",n,l,u)}var d=e.groupid||0;i.countOperation("addmenber",d,a,"");var c="";c=e.data.inviteSwitchhot?"/pages/others/newsharepage/newsharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:c+"?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=addmenber&groupid="+e.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+e.data.ablumInfo.groupNewType}),this.isInvitepushId()}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},emptyListShare:function(){var t=this;if(t.groupid){var e=t.groupid||0,a=t.data.userid||0;i.countOperation("emptylist_share",e,a,""),t.loadImgStateNo=!0,t.setData({fromlast:1}),"object"==o(t.button)&&t.button.push({name:"invite"});var s="";console.log(t.data.inviteSwitchhot),s=t.data.inviteSwitchhot?"/pages/others/newsharepage/newsharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:s+"?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=addmenber&groupid="+t.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+t.data.ablumInfo.gcreator+"&gname="+t.data.ablumInfo.gname+"&groupNewType="+t.data.ablumInfo.groupNewType})}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},loversToShare:function(){var t=this;t.groupid?(this.loversInviteBtn(),this.loadImgStateNo=!0,this.setData({fromlast:1}),wx.navigateTo({url:"/pages/others/newsharepage/newsharepage?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerinfo_share&groupid="+t.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish})):wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},toShare:function(t){var e=this;if(e.groupid){if(e.loadImgStateNo=!0,e.setData({fromlast:1}),console.log(t.currentTarget.dataset.info),"info"===t.currentTarget.dataset.info){var a=e.groupid||0,o=e.data.userid||0;i.countOperation("bannerinfo_share",a,o,"")}var s=e.data.userid||0;e.data.activitySwitchhot||r.stat.stathotmall({userId:s,groupId:e.groupid,port:r.globalData.port,operation:"clicknotify",registerTime:r.globalData.utime,inviteId:e.nc});var n="";console.log(this.data.bannerInfo.bannerJump),n=this.data.bannerInfo.bannerJump?"/pages/others/newsharepage/newsharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:n+"?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerinfo_share&groupid="+e.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+e.data.ablumInfo.groupNewType})}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},toEditPhotos:function(t){var e=this,a=t.currentTarget.dataset.index,o=t.currentTarget.dataset.photosource,i=this.data.eventlist[a].list[0].picList,s=4==this.data.eventlist[a].list[0].eMain?"video":"pic";if("photosync"==o){if(0==this.data.ablumInfo.inBlackList)return void wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1});var n={operation:"ediSync",userId:e.data.userid,groupId:e.groupid};r.stat.request(n),this.loadImgStateNo=!0}else{if("download"!=o)return;this.loadImgStateNo=!0,this.setData({fromlast:1})}wx.setStorageSync("editPhotoArr",i),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+o+"&isPicOrVideo="+s})},toEditPhotosDelete:function(t){var e=this,a=t.detail.formId;i.sendFormId(this.data.userid,a);var o=t.currentTarget.dataset.photosource,s=this.data.eventlist[this.a].list[0].picList,n=this.data.eventlist[this.a].list[0].eMain,l=4==n?"video":"pic",u=this.tepEid;if("photosync"==o){if(0==this.data.ablumInfo.inBlackList)return void wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1});this.loadImgStateNo=!0;var d={operation:"ediSync",userId:e.data.userid,groupId:e.groupid};r.stat.request(d)}else if("download"==o)this.loadImgStateNo=!0,this.setData({fromlast:1});else{if("delete"!=o)return;if(1==n||2==n)return void this.delete_event(u);this.loadImgStateNo=!0}wx.setStorageSync("editPhotoArr",s),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+o+"&isPicOrVideo="+l})},toChaneBgPic:function(){wx.getStorageSync("userid")?wx.getStorageSync("userid")==wx.getStorageSync("createrid")?(this.loadImgStateNo=!0,wx.navigateTo({url:"/pages/others/changbgpic/changbgpic"})):wx.showModal({title:"提示",content:"非相册管理员，无法修改背景图",showCancel:!1}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},editpic:function(t){var e=this;wx.getStorageSync("userid")?wx.getStorageSync("userid")==wx.getStorageSync("createrid")?(this.loadImgStateNo=!0,this.setData({fromlast:1}),wx.request({url:l.getUrl("YinianProject/yinian/GetUploadToken"),data:{},method:"GET",success:function(t){var a=t.data.data[0].token;e.isSubmit=2,wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传",icon:"loading",duration:2e3});var o=t.tempFilePaths[0].split("//")[1];wx.uploadFile({url:"https://upload.qiniup.com",filePath:t.tempFilePaths[0],name:"file",formData:{key:t.tempFilePaths[0].split("//")[1],token:a},success:function(t){var a=JSON.parse(t.data);new Date;wx.request({url:l.getUrl("YinianProject/yinian/ModifyGroupPic"),data:{url:a.key,userid:wx.getStorageSync("userid"),groupID:wx.getStorageSync("groupid")},success:function(t){0==t.data.code?(e.data.ablumInfo.gpic="http://7xlmtr.com1.z0.glb.clouddn.com/"+o,e.setData({ablumInfo:e.data.ablumInfo}),wx.showToast({title:"修改成功",icon:"success",duration:2e3,success:function(){setTimeout(function(){wx.hideToast()},1500)}})):wx.showToast({title:"设置失败"})}})}})}})}})):wx.showModal({title:"提示",content:"非相册管理员，无法修改背景图",showCancel:!1}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},comment:function(t){t.currentTarget.dataset.parentindex,t.currentTarget.dataset.childindex;var e=t.currentTarget.dataset.eid;this.commentEid=e,this.commentedUserid=10,this.commentedname="系统消息",this.setData({showComInput:!0,inputfocus:!0,placehold:"对ta说点啥...",contentCurrent:!1})},recomment:function(t){if(void 0!=t.target.dataset.commentindex){var e=this,o=t.target.dataset.commentindex,s=t.currentTarget.dataset.dataindex.split(","),n=a(s,2),l=n[0],u=n[1],d=this.data.eventlist[l].list[u].comments[o],c=d.commentUser.userid,g=d.commentUser.unickname,p=t.currentTarget.dataset.eid;c==r.globalData.userInfo.userid?wx.showModal({title:"提示",content:"删除此条评论？",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:d.cid}}).then(function(t){"success"==t.msg&&(e.data.eventlist.forEach(function(t,e){t.list[0].eid==p&&(t.list[0].comments.splice(o,1),t.list[0].commentCnt--)}),e.setData({eventlist:e.data.eventlist}))})}}):(this.commentEid=p,this.commentedUserid=c,this.commentedname=g,this.setData({showComInput:!0,inputfocus:!0,placehold:"@"+g+":",contentCurrent:!1}))}},sendcomment:function(t){var e=t.detail.formId,a=t.detail.value.content,o=this.data.userid,s=this.commentEid,l=this.commentedUserid,u=this.commentedname;if(0!=a.length)if(n.testStr(a))wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1});else{var d=this,c=i.formatTimeWithSecond(new Date),g={cid:-1,commentedUser:{userid:l,unickname:u},commentUser:{userid:o,unickname:r.globalData.userInfo.nickName,upic:r.globalData.userInfo.avatarUrl},ccontent:a,ctime:c},p=Array.from(d.data.eventlist);d.data.eventlist.forEach(function(t,e){t.list[0].eid==s&&(p[e].list[0].comments.unshift(g),p[e].list[0].commentCnt=parseInt(p[e].list[0].commentCnt)+1)}),d.setData({showComInput:!1,eventlist:p,value:"",contentCurrent:!1,placehold:"说点什么..."}),d.commentedUserid=10,d.commentedname="系统消息",wx.showToast({title:"发表成功",icon:"success",duration:1e3}),d.isCommentpushId(),h(o,wx.getStorageSync("groupid"),"comment"),i.wxreq({pathname:"YinianProject/yinian/SendComment1",data:{commentUserId:o,commentedUserId:l,eventId:s,content:a,formID:e}}).then(function(t){0==t.code&&(d.data.eventlist.forEach(function(e){e.list[0].eid==s&&e.list[0].comments.forEach(function(e){e.ctime===c&&(e.cid=t.data[0].cid)})}),d.setData({eventlist:d.data.eventlist}))})}else wx.showModal({title:"提示",content:"请先输入评论内容",showCancel:!1})},hiddenWrite:function(){this.setData({showComInput:!1})},checkchange:function(t){var e=t.detail.value.trim().length>0;this.setData({contentCurrent:e})},maketop:function(t){var e=this.data.eventlist[this.a].list[0].eid;this.state=this.data.eventlist[this.a].list[0].elevel;var a=this,o=1==this.state?"cancel":"stick",s=1==this.state?"取消置顶":"置顶";wx.showModal({title:"提示",content:"是否"+s+"此动态",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/ModifyEventLevel",data:{userid:wx.getStorageSync("userid"),groupid:wx.getStorageSync("groupid"),eid:e,type:o}}).then(function(t){if("success"==t.msg){wx.showToast({title:s+"成功"});a.data.eventlist[a.a].list[0].elevel=1==a.data.eventlist[a.a].list[0].elevel?"0":"1",a.state=1==a.state?"0":"1",a.getCsTimeData()}})}})},delete_event:function(e){var a=this;if(e){var o=e||this.data.eventlist[a.a].list[0].eid;wx.showModal({title:"删除动态",content:"确定删除此条动态吗？",confirmColor:"#353535",success:function(e){e.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteEvent",data:t({userid:wx.getStorageSync("userid")},"eventId",o)}).then(function(t){if("success"==t.msg){wx.showToast({title:"删除成功",icon:"success",duration:2e3});var e=0,i=!1;a.data.eventlist.forEach(function(t,a){if(t.list[0].eid==o)return e=a,void(i=!0)}),i&&a.data.eventlist.splice(e,1),a.setData({eventlist:a.data.eventlist,showFunModel:!1})}})}})}},closeintroduce:function(){this.setData({showintroduce:!1})},uploadpic:function(t){var e=this;if(wx.getStorageSync("userid")){clearTimeout(e.timer),this.setData({fromlast:1}),this.loadImgStateNo=!0;var a;a="pai"==(t=t||event).currentTarget.dataset.pic?"camera":"album",this.isSubmit=2,wx.chooseImage({count:9,sizeType:["original"],sourceType:[a],success:function(t){var a=t.tempFilePaths;wx.removeStorageSync("uploadchoosedpic"),wx.setStorage({key:"uploadchoosedpic",data:a,success:function(){e.setData({addModalOn:!1,fromlast:1});var t=e.data.ablumInfo.groupNewType,a=e.groupid;e.loadImgStateNo=!0,e.closeModal(),wx.navigateTo({url:"/pages/publish/pages/image/image?lastPage=albumDetail&groupId="+a+"&albumType="+t})},fail:function(){wx.showToast({title:"保存图片临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},uploadvideo:function(t){var e=this;if(wx.getStorageSync("userid")){this.setData({fromlast:1}),this.loadImgStateNo=!0;var a;a="pai"==(t=t||event).currentTarget.dataset.video?"camera":"album",this.isSubmit=2,wx.chooseVideo({sourceType:[a],maxDuration:60,camera:"back",success:function(t){wx.setStorage({key:"uploadchoosedvideo",data:t,success:function(){e.setData({addModalOn:!1});var t=e.data.ablumInfo.groupNewType,a=e.groupid;e.loadImgStateNo=!0,e.closeModal(),wx.navigateTo({url:"/pages/publish/pages/video/video?lastPage=albumDetail&groupId="+a+"&albumType="+t})},fail:function(){wx.showToast({title:"保存视频临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},uploadText:function(){var t=this,e=t.data.ablumInfo.groupNewType,a=t.groupid;t.setData({addModalOn:!1}),t.loadImgStateNo=!0,t.closeModal(),wx.navigateTo({url:"/pages/publish/pages/text/text?lastPage=albumDetail&groupId="+a+"&albumType="+e})},toUploadAudio:function(){var t=this,e=t.data.ablumInfo.groupNewType,a=t.groupid;t.loadImgStateNo=!0,t.closeModal(),t.setData({addModalOn:!1,fromlast:1}),wx.navigateTo({url:"/pages/publish/pages/audio/audio?lastPage=albumDetail&groupId="+a+"&albumType="+e})},getBusiness:function(){var t=this;wx.request({url:l.getUrl("YinianProject/adv/getTimeAxisAdv"),data:{groupid:t.groupid},success:function(e){0==e.data.code&&t.setData({businessList:e.data.data})}})},getBannerInfo:function(){var t=this;i.wxreq({pathname:"YinianProject/bannerDisplay/getBannerInfo",data:{groupId:t.groupid}}).then(function(e){0==e.code&&t.setData({bannerInfo:e.data[0]})})},getCsTimeData:function(){this.setlikecnt;var t=this,e=this.data.ablumInfo.groupNewType||"";t.isloading=!1,wx.request({url:l.getUrl("YinianProject/event/ShowTimeAxis"),data:{userid:wx.getStorageSync("userid"),groupid:t.groupid,type:"initialize",source:"ynxc",eid:0,albumType:e},success:function(e){if(console.log(e),0==e.data.code){var a=e.data.data,o=wx.getStorageSync("userid");t.templatearr=[],a.forEach(function(e){Object.assign(e,{time:i.timeRest(e.euploadtime),showlibox:!1,isAudioPlay:!1}),t.templatearr.push({month:e.euploadtime.substring(0,7).replace("-","."),list:[e]})}),t.setData({eventlist:t.templatearr,showFunModel:!1,loadImgState:!0,showLoadingImg:!1,loadingImgOrText:!0}),t.isShowLoverModal(o,t.groupid),"3687301"==t.groupid&&t.data.aladingTwo&&(t.setData({alading:!0}),setTimeout(function(){t.setData({alading:!1,aladingTwo:!1})},2500))}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})}})},enterpreview:function(t){var e=t.currentTarget.dataset.parentindex,a=t.currentTarget.dataset.childindex,o=t.currentTarget.dataset.sel,i=this.data.eventlist,s=this;return console.log(i[e].list[a].picList),wx.setStorageSync("lookImgs",i[e].list[a].picList),clearTimeout(s.timer),s.setData({fromlast:1}),void wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+o})},showlike:function(t){if(wx.getStorageSync("userid")){var e=this,a=t.currentTarget.dataset.parentindex,o=t.currentTarget.dataset.childindex,i=t.currentTarget.dataset.eid;this.a=a,this.b=o,this.tepEid=i;this.data.eventlist[a].list[0];e.setData({showFunModel:!0,selNumA:a,selNumB:o})}else wx.showToast({title:"获取用户信息失败"})},toDownLoad:function(t){this.loadImgStateNo=!0,this.setData({fromlast:1});var e=this.data.eventlist[this.a].list[0].picList;wx.setStorageSync("downPic",e);var a=4==this.data.eventlist[this.a].list[0].eMain?"video":"pic";wx.navigateTo({url:"/pages/others/download/download?downloadPicOrVideo="+a})},tosharepage:function(t){var e=this,a={operation:"viewscoll_eid",groupId:e.groupid||0,userId:e.data.userid||0};r.stat.request(a),this.loadImgStateNo=!0,this.setData({fromlast:1});var i=t.currentTarget.dataset.index,s=this.data.eventlist[i].list[0].picList,n=this.data.eventlist[i].list[0].eMain,l=this.data.eventlist[i].list[0].eid;r.sharePageUserPic=0,wx.setStorageSync("sharePagePic",s),"object"==o(this.button)&&this.button.push({name:"eventShare"}),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=viewscoll_eid&eid="+l+"&eMain="+n+"&groupid="+this.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+this.data.ablumInfo.groupNewType})},like:function(t){if(wx.getStorageSync("userid")){var e=t.detail.formId,a=t.currentTarget.dataset.likecatagry,o=t.currentTarget.dataset.parentindex,i=t.currentTarget.dataset.childindex,s=this.data.eventlist[o].list[i].eid,n=this;a&&1!=n.data.eventlist[o].list[i].likeUser&&(n.isLikepushId(),h(wx.getStorageSync("userid"),n.groupid,"like"),n.data.eventlist[o].list[i].likeUser=1,n.data.eventlist[o].list[i].likeCnt=parseInt(n.data.eventlist[o].list[i].likeCnt)+1,n.setData({eventlist:n.data.eventlist}),wx.showToast({title:"点赞成功",icon:"success",duration:1e3}),wx.request({url:l.getUrl("YinianProject/yinian/AttachOrRemoveExpressionByLkNew"),data:{type:a,userid:r.globalData.userInfo.userid,eid:s,formID:e},success:function(t){t=t.data}}))}else wx.showToast({title:"获取用户信息失败"})},likeState:function(){},onPullDownRefresh:function(){this.getCsTimeData(),wx.stopPullDownRefresh()},onReachBottom:function(){wx.getStorageSync("userid")&&this.data.eventlist&&0!=this.data.eventlist.length&&this.templatearr&&0!=this.templatearr.length&&this.loadinged()},loadinged:function(){this.setlikecnt;var t=this,e=this.data.ablumInfo.groupNewType||"";this.isloading||(this.isloading=!0,this.setData({showLoadingImg:!0,loadingImgOrText:!0}),wx.request({url:l.getUrl("YinianProject/event/ShowTimeAxis"),data:{groupid:t.groupid,type:"loading",source:"ynxc",albumType:e,eid:t.templatearr[t.templatearr.length-1].list[0].eid,userid:wx.getStorageSync("userid")},success:function(e){console.log(e),0==e.data.code?0==(e=e.data).data.length?t.setData({showLoadingImg:!0,loadingImgOrText:!1}):(e.data.forEach(function(e){t.retState||(Object.assign(e,{time:i.timeRest(e.euploadtime),showlibox:!1,isAudioPlay:!1}),t.templatearr.push({month:e.euploadtime.substring(0,7).replace("-","."),list:[e]}))}),t.isloading=!1,t.setData({eventlist:t.templatearr,showLoadingImg:!1})):(t.isloading=!1,t.setData({showLoadingImg:!1}))},fail:function(){t.isloading=!1,t.setData({showLoadingImg:!1})}}))},toMakeGroup:function(){"object"==o(this.button)&&this.button.push({name:"createAlbum"}),this.loadImgStateNo=!0,this.closeIntroCreate(),wx.navigateTo({url:"/pages/makegroup/makegroup?lastPage=albumDetail"})},showPvModel:function(){var t=this;if("object"==o(this.button)&&this.button.push({name:"upload"}),0!=t.data.ablumInfo.inBlackList)if(r.isUp)wx.showToast({title:"正在上传中喔~"});else if(2==t.data.ablumInfo.gOrigin&&t.closeIntroUpload(),1!=wx.getStorageSync("gAuthority")||wx.getStorageSync("userid")==wx.getStorageSync("createrid")){if(2==wx.getStorageSync("gAuthority")){var e=wx.getStorageSync("authorityList");if(0==e.length)return;for(var a=0;a<e.length;a++)e[a].userid==wx.getStorageSync("userid")&&(t.quanxian=!0);if(!t.quanxian)return void wx.showModal({title:"提示",content:"没有上传照片的权限",showCancel:!1})}if(t.setData({pvShowModel:!0}),4==this.data.ablumInfo.groupNewType)if("cancel"===t.isconfirm){var s=this.groupid,n=this.data.userid,l=this.data.ablumInfo.gcreator;i.countLoversOperation("cancelLoversUpBtn",s,n,l)}else{var u=this.groupid,d=this.data.userid,c=this.data.ablumInfo.gcreator;i.countLoversOperation("loversUpBtn",u,d,c)}}else wx.showModal({title:"提示",content:"只能创建者才能上传"});else wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1})},closepvModel:function(){this.setData({pvShowModel:!1})},closeFunModel:function(){this.setData({showFunModel:!1})},openAudioModel:function(){this.setData({showAudioModelBox:!0})},closeAudioBox:function(){this.setData({showAudioModelBox:!1})},preReset:function(){this.setData({fromlast:1})},longPressDelete:function(t){var e=this,a=t.currentTarget.dataset.longcid,o=t.currentTarget.dataset.longeid,s=t.currentTarget.dataset.longindex;wx.showModal({title:"提示",content:"是否删除该条评论",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:a}}).then(function(t){"success"==t.msg&&(e.data.eventlist.forEach(function(t,e){t.list[0].eid==o&&(t.list[0].comments.splice(s,1),t.list[0].commentCnt--)}),e.setData({eventlist:e.data.eventlist}))})}})},activityRules:function(){this.data.ablumInfo&&this.data.ablumInfo.arValue&&this.data.ablumInfo.arValue.length>0&&this.setData({showActivityRules:!1})},closeActivityRules:function(){this.setData({showActivityRules:!0})},returnhome:function(){"object"==o(this.button)&&this.button.push({name:"backToIndex"}),wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.switchTab({url:"/pages/index/index"})},openModel:function(){this.setData({showModelHidden:!0})},closeModel:function(){this.setData({showModelHidden:!1})},closeIntroUpload:function(){var t="showLoad"+this.groupid;wx.setStorageSync(t,1),this.setData({showFooterIntro1:!1})},closeIntroCreate:function(){var t="showCreat"+this.groupid;wx.setStorageSync(t,1),this.setData({showFooterIntro2:!1})},toBusinessGroup:function(t){var e=this,a=t.detail.formId;if(i.sendFormId(e.data.userid,a),"object"==o(this.button)&&this.button.push({name:"banner"}),0==e.data.businessList[0].joinGroupOrList)wx.navigateTo({url:"/pages/others/businessgroup/businessgroup?lastPage=albumDetail&listid="+e.data.businessList[0].listid});else if(1==e.data.businessList[0].joinGroupOrList){this.loadImgStateNo=!0;var s=e.data.businessList[0].groupNewType;console.log(s),p({groupNewType:s,data:{lastPage:"albumDetail",from:"grouplist",groupid:e.data.businessList[0].joinGroupid},navigator:"navigate"})}else if(2==e.data.businessList[0].joinGroupOrList){if(11==e.data.ablumInfo.groupNewType)return;this.loadImgStateNo=!0,this.setData({fromlast:1});var n=e.groupid||0,r=e.data.userid||0;i.countOperation("bannerpic_share",n,r,""),wx.navigateTo({url:"/pages/others/newsharepage/newsharepage?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerpic_share&groupid="+e.groupid+"&gOrigin="+e.data.ablumInfo.gOrigin})}else if(3==e.data.businessList[0].joinGroupOrList){var l=e.data.businessList[0].joinGroupid;if(!l)return;this.loadImgStateNo=!0,wx.navigateTo({url:"/"+l})}},seeBigVideo:function(t){var e=t.currentTarget.dataset.url;wx.setStorageSync("videourl",e),wx.navigateTo({url:"/pages/viewscoll/bigvideo/bigvideo",success:function(){this.loadImgStateNo=!0,this.setData({fromlast:1})}.bind(this)})},loadmore:function(t){this.setData({fromlast:1}),wx.navigateTo({url:"/pages/eventdetail/eventdetail?lastPage=albumDetail&dateindex="+t.currentTarget.dataset.sela+"&eid="+t.currentTarget.dataset.eid+"&rowindex="+t.currentTarget.dataset.selb+"&efrom=grouptypescoll&groupNewType="+this.data.ablumInfo.groupNewType})},closeDispose:function(){console.log("closeDispose")},sureDispose:function(){console.log("sureDispose")},edit:function(){var t=this;wx.getStorageSync("createrid")==wx.getStorageSync("userid")?t.setData({Mengcen:!0}):wx.showModal({title:"提示",content:"非相册管理员，无法修改相册名",showCancel:!1})},setcolor:function(t){var e=this,a=t.detail.value.length;e.setData({textNum:a}),t.detail.value.trim().length>0?e.setData({buttonactive:!0}):e.setData({buttonactive:!1})},Mengcen_cancel:function(){this.setData({textNum:0,Mengcen:!1})},submitfun:function(t){var e=this;if(wx.getStorageSync("userid")){var a=t.detail.value.groupname;if(a.trim().length>0){if(n.testStr(a))return void wx.showModal({title:"包含敏感词",content:"请勿使用包含敏感词汇的相册名称",showCancel:!1});wx.request({url:l.getUrl("YinianProject/yinian/ModifyGroupName"),data:{groupid:wx.getStorageSync("groupid"),groupName:a,userid:wx.getStorageSync("userid")},success:function(t){0==t.data.code&&(wx.showToast({title:"修改成功",icon:"success",duration:2e3}),wx.setStorageSync("gname",a),e.data.ablumInfo.gname=a,wx.setStorageSync("ganme",a),e.setData({textNum:0,Mengcen:!1,ablumInfo:e.data.ablumInfo}))}})}else wx.showModal({title:"提示",content:"请输入正确的相册名称",showCancel:!1})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},fasttoknow:function(){var t=this;t.setData({showDisposeModel:!0,usernumber:s.usernumber}),clearInterval(t.timerinterval),t.timerinterval=null,t.usernumberchange()},usernumberchange:function(){var t=this;t.timerinterval=setInterval(function(){if(t.data.usernumber>t.data.maxnumber){clearInterval(t.timerinterval),t.timerinterval=null;var e=t.toThousands(t.data.maxnumber);console.log(e),t.setData({usernumber:e})}else t.data.usernumber+=323456,t.setData({usernumber:t.data.usernumber})},100)},toThousands:function(t){for(var t=(t||0).toString(),e="";t.length>3;)e=","+t.slice(-3)+e,t=t.slice(0,t.length-3);return t&&(e=t+e),e}},t(e,"closeModel",function(){this.setData({showDisposeModel:!1,classArr:["pic1","pic2","pic3"]})}),t(e,"changestart",function(t){w=t.touches[0].pageX,v=t.touches[0].pageY}),t(e,"changemove",function(t){}),t(e,"changend",function(t){var e=this;if(b=t.changedTouches[0].pageX,I=t.changedTouches[0].pageY,w-b>30){if("pic2"==e.data.classArr[0])return;e.data.classArr.unshift(e.data.classArr[e.data.classArr.length-1]),e.data.classArr.pop(e.data.classArr[e.data.classArr.length-1]),e.setData({classArr:e.data.classArr})}else if(b-w>30){if("pic1"==e.data.classArr[0])return;e.data.classArr.push(e.data.classArr[0]),e.data.classArr.shift(e.data.classArr[0]),e.setData({classArr:e.data.classArr})}}),t(e,"addgroup",function(){wx.getStorageSync("userid")?("object"==o(this.button)&&this.button.push({name:"createAlbum"}),this.loadImgStateNo=!0,wx.navigateTo({url:"../makegroup/makegroup?lastPage=albumDetail"})):wx.showModal({title:"错误",content:"获取用户授权信息失败！创建相册功能不可用！",showCancel:!1})}),t(e,"isfirstUpload",function(t){return}),t(e,"noLongerPrompt",function(){var t=this;wx.setStorageSync("noPrompt",1),t.setData({showfirstuploadModel:!1});var e={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesNoPrompt",userLastLoginTime:r.enterTime};r.stat.request(e)}),t(e,"getHeaderData",function(){var t=this,e=t.data.userid;i.wxreq({pathname:"YinianProject/activitySpacial/selectHasUploadNum",data:{activitySpacialId:1,userId:e}}).then(function(a){if(console.log(a),0==a.code){var o=a.data[0].hasUploadPercent.split("/")[1];if(a.data[0].hasPicNum=parseInt(o),0==a.data[0].isReceive){t.setData({contentText:a.data[0],showMayDayActivity:!0});var i={operation:"twice_page_popover",userId:e,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(i)}}})}),t(e,"closeMayDayModal",function(){this.setData({showMayDayActivity:!1})}),t(e,"goOnUpload",function(){var t=this;this.setData({showMayDayActivity:!1}),this.openAddEventModal();var e={operation:"twice_page_reupload",userId:t.data.userid,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(e)}),t(e,"toGetPrize",function(){var t=this,e=this.data.userid;wx.redirectTo({url:"/pages/mayDayActivity/index/index"});var a={operation:"twice_page_toreward",userId:e,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(a)}),t(e,"useablePointsclick",function(t){console.log("跳转到 个人中心积分界面"),this.loadImgStateNo=!0,this.setData({fromlast:1});var e=t.detail.formId;i.sendFormId(this.data.userid,e);var a=this.data.groupid,o=this.data.userid,s=this.data.ablumInfo.groupNewType||0,n=this.data.ablumInfo.gcreator;wx.navigateTo({url:"/pages/personalPage/personalPage?groupId="+a+"&pageUserId="+o+"&creator="+n+"&albumType="+s})}),t(e,"closeDispose",function(){this.setData({showcomeuserModel:!1})}),t(e,"hurryupload",function(){var t=this;t.closeDispose(),t.showPvModel()}),t(e,"closefirstuploadDispose",function(){var t=this,e=t.data.userid||0;0==t.data.activitySwitchhot&&r.stat.stathotmall({userId:e,groupId:t.data.groupId,port:r.globalData.port,operation:"quitupload",registerTime:r.globalData.utime,inviteId:t.nc}),t.setData({showfirstuploadModel:!1});var a={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesAgainClose",userLastLoginTime:r.enterTime};"isFirst"==t.data.isFirstUpload&&(a.operation="viewscollToStoriesFirstClose"),r.stat.request(a)}),t(e,"firstuploadshare",function(){var t=this,e=t.groupid||0,a=t.data.userid||0;i.countOperation("firstup_share",e,a,""),t.setData({showfirstuploadModel:!1});var o=t.data.thedata;console.log(o);var s=o[0].picList,n=o[0].eMain,r=o[0].eid;wx.setStorageSync("sharePagePic",s),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=firstup_share&eid="+r+"&eMain="+n+"&groupid="+this.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish})}),t(e,"toStories",function(t){var e=t.currentTarget.dataset.flag;console.log("flag",e);var a={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesAgain",userLastLoginTime:r.enterTime};"first"==e&&(a.operation="viewscollToStoriesFirst"),"again"==e&&(a.operation="viewscollToStoriesAgain"),"share"==e&&(a.operation="viewscollToStoriesShare"),r.stat.request(a);var o=void 0;"first"!=e&&"again"!=e||(o=this.data.thedata[0].eid),"share"==e&&(o=t.currentTarget.dataset.eid);var i=this.groupid;wx.navigateTo({url:"/package/share/pages/shareindex/shareindex?eId="+o+"&groupId="+i})}),t(e,"audioPlay",function(t){var e=t.currentTarget.dataset.audiourl;e&&(console.log(e),g.src=e,g.play(),this.openThisAudio(e))}),t(e,"audioPause",function(){g.pause(),this.closeAllAudio()}),t(e,"openThisAudio",function(t){this.data.eventlist.forEach(function(e){e.list[0].eaudio===t?e.list[0].isAudioPlay=!0:e.list[0].isAudioPlay=!1}),this.setData({eventlist:this.data.eventlist})}),t(e,"closeAllAudio",function(){this.data.eventlist.forEach(function(t){t.list[0].isAudioPlay=!1}),this.setData({eventlist:this.data.eventlist})}),t(e,"openAddModal",function(){var t=this;t.setData({addModalOn:!0}),t.setData({addModalAnimation:!0})}),t(e,"closeAddModal",function(){var t=this;t.setData({addModalOn:!1}),t.setData({addModalAnimation:!1})}),t(e,"openAddEventModal",function(){var t=this;t.permission()&&(t.openAddModal(),t.setData({addEventModalOn:!0}),t.setData({addEventModalAnimation:!0}),t.isUploadpushId())}),t(e,"closeAddEventModal",function(){var t=this;t.setData({addEventModalOn:!1}),t.setData({addEventModalAnimation:!1}),t.closeAddModal()}),t(e,"openAddPhotoModal",function(t){var e=this;e.setData({addEventModalOn:!1}),e.setData({addEventModalAnimation:!1});var a="";a="photo"===t.currentTarget.dataset.type?"照片":"视频",e.setData({addPhotoModalOn:!0,modalTitle:a}),e.setData({addPhotoModalAnimation:!0})}),t(e,"closeAddPhotoModal",function(){var t=this;t.setData({addPhotoModalOn:!1}),t.setData({addPhotoModalAnimation:!1}),t.closeAddModal()}),t(e,"toPoseCamera",function(){var t=this;t.permission()&&(t.setData({fromlast:1}),wx.navigateTo({url:"/pages/poseCamera/pages/camera/camera?groupId="+this.groupid,success:function(t){console.log("跳转成功",t)},fail:function(t){console.log("跳转失败",t)}}))}),t(e,"preventTouchMove",function(){}),t(e,"closeModal",function(){var t=this;t.closeAddPhotoModal(),t.closeAddEventModal()}),t(e,"permission",function(){var t=this,e=!0;if(0==t.data.ablumInfo.inBlackList)return wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1}),void(e=!1);if(1==wx.getStorageSync("gAuthority")&&wx.getStorageSync("userid")!=wx.getStorageSync("createrid"))return wx.showModal({title:"提示",content:"只能创建者才能上传"}),void(e=!1);if(2==wx.getStorageSync("gAuthority")){var a=wx.getStorageSync("authorityList");if(0==a.length)return;for(var o=0;o<a.length;o++)a[o].userid==wx.getStorageSync("userid")&&(t.quanxian=!0);if(!t.quanxian)return wx.showModal({title:"提示",content:"没有上传照片的权限",showCancel:!1}),void(e=!1)}return e}),t(e,"isUploadpushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isUpload",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"isInvitepushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isInvite",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"isLikepushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isLike",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"isCommentpushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isComment",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"flashSaleShowSwitch",function(){var t=this;i.wxreq({pathname:"YinianProject/flashSale/flashSaleShowSwitch",data:{}}).then(function(e){console.log(e),0==e.code?(t.setData({activitySwitchhot:e.data[0].activitySwitch,inviteSwitchhot:e.data[0].inviteSwitch,bottomUrl:e.data[0].bottomUrl,inviteBelowHint:e.data[0].inviteBelowHint}),r.globalData.activitySwitch=e.data[0].activitySwitch,r.globalData.shareUrl=e.data[0].shareUrl,r.globalData.inviteSwitch=e.data[0].inviteSwitch,r.globalData.regulaUrl=e.data[0].regulaUrl):wx.showToast({title:"hotshow请求失败!",duration:2e3})}).catch(function(t){wx.showToast({title:"hotshow请求失败!",duration:2e3})})}),t(e,"hotactiveNavgite",function(){var t=this;t.groupid?t.joinSaleActivty():wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})}),t(e,"joinSaleActivty",function(){var t=this;if(!t.isloadingactive){t.isloadingactive=!0;var e=t.data.userid||0;r.stat.stathotmall({userId:e,groupId:t.groupid,port:r.globalData.port,operation:"bottomhotClick",registerTime:r.globalData.utime,inviteId:t.nc}),i.wxreq({pathname:"YinianProject/flashSale/joinSaleActivty",data:{userId:t.data.ablumInfo.gcreator,groupId:t.groupid,groupName:t.data.ablumInfo.gname}}).then(function(e){t.isloadingactive=!1,wx.navigateTo({url:"/pages/others/hot/index/index?lastPage=albumDetail&clickfrom=group&clickRecord=addmenber&groupid="+t.groupid+"&gOrigin="+t.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+t.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+t.data.ablumInfo.gcreator+"&groupNewType="+t.data.ablumInfo.groupNewType})},function(t){})}}),t(e,"tocreateAlbum",function(){console.log("tocreateAlbum");var t=this,e=t.data.userid||0;r.stat.stathotmall({userId:e,groupId:t.data.groupId,port:r.globalData.port,operation:"wantplayupload",registerTime:r.globalData.utime,inviteId:t.nc}),wx.navigateTo({url:"../makegroup/makegroup",success:function(t){}})}),t(e,"getAlbumCreater",function(){var t=this;i.wxreq({pathname:"YinianProject/flashSale/flashSaleTextContentSwitch",data:{}}).then(function(e){console.log(e),0==e.code&&(r.globalData.sharePicTextContent=e.data[0].sharePicTextContent,r.globalData.sharePicUrlContent=e.data[0].sharePicUrlContent,r.globalData.alertButtonOne=e.data[0].alertButtonOne,r.globalData.alertHidePic=e.data[0].alertHidePic,r.globalData.alertButtonTwo01=e.data[0].alertButtonTwo01,r.globalData.alertButtonTwo02=e.data[0].alertButtonTwo02,r.globalData.shareButtonOne=e.data[0].shareButtonOne,r.globalData.shareButtonTwo_1=e.data[0].shareButtonTwo_1,r.globalData.shareButtonTwo_2=e.data[0].shareButtonTwo_2,r.globalData.hotRecordDetail=e.data[0].hotRecordDetail,t.setData({alertButtonOne:e.data[0].alertButtonOne,alertHidePic:e.data[0].alertHidePic,alertButtonTwo01:e.data[0].alertButtonTwo01,alertButtonTwo02:e.data[0].alertButtonTwo02}))}).catch(function(t){})}),t(e,"flashSalegetUserInfo",function(t){i.wxreq({pathname:"YinianProject/flashSale/getUserInfo",data:{userId:t}}).then(function(t){0==t.code&&(r.globalData.utime=t.data[0].utime)},function(t){})}),t(e,"closeInviteBox",function(){this.setData({showInviteModal:!1})}),t(e,"isShowLoverModal",function(t,e){var a=this;if(t&&"null"!=t&&"undefined"!=t&&e&&"null"!=e&&"undefined"!=e){var o="timeLine_"+t+"_"+e;wx.getStorageSync(o)||(wx.setStorageSync(o,1),a.setData({showInviteModal:!0}))}}),t(e,"openPublishMenu",function(){var t=this;t.permission()&&(t.generateMenuNames(),t.setData({publishMenu:!0}),t.isUploadpushId())}),t(e,"publishMenuClosed",function(t){var e=this;e.setData({publishMenu:!1});var a=t.detail;"photo"===a&&wx.showActionSheet({itemList:["系统相册选择","拍照"],itemColor:"#333",success:function(t){var a=t.tapIndex,o={currentTarget:{dataset:{pic:"phone"}}};console.log("eee",o.currentTarget.dataset.pic),0==a&&(o.currentTarget.dataset.pic="phone"),1==a&&(o.currentTarget.dataset.pic="pai"),e.uploadpic(o)},fail:function(t){console.log(t.errMsg)}}),"video"===a&&wx.showActionSheet({itemList:["系统相册选择","拍摄"],itemColor:"#333",success:function(t){var a=t.tapIndex,o={currentTarget:{dataset:{video:"phone"}}};console.log("eee",o.currentTarget.dataset.video),0==a&&(o.currentTarget.dataset.video="phone"),1==a&&(o.currentTarget.dataset.video="pai"),e.uploadvideo(o)},fail:function(t){console.log(t.errMsg)}}),"audio"===a&&e.toUploadAudio(),"text"===a&&e.uploadText(),"import"===a&&(e.stopreset(),wx.navigateTo({url:"/pages/downloadApp/downloadApp"}))}),t(e,"generateMenuNames",function(){var t=this,e="photo,video,import,",a=t.data.ablumInfo.groupNewType;2!=a&&3!=a&&11!=a||(e+="audio,text"),5==a&&(e+="text"),t.setData({menuNames:e})}),t(e,"playPhoto",function(t){var e=this;console.log(t),this.setData({playPhoto:!0}),m=t.currentTarget.dataset.eid,f=t.currentTarget.dataset.grouptype,r.stat.request({operation:"albumMakeMore",userId:wx.getStorageSync("userid"),groupId:e.groupid,groupNewType:f})}),t(e,"makeStory",function(){var t=this;r.stat.request({operation:"albumMakeStory",userId:wx.getStorageSync("userid"),groupId:t.groupid,groupNewType:f}),wx.showLoading({title:"正在上传",mask:!0}),wx.request({url:l.host+"/YinianProject/story/createStory",data:{userId:wx.getStorageSync("userid")},success:function(e){console.log(e),0==e.data.code&&(wx.hideLoading(),wx.setStorageSync("storyId",e.data.data[0].storyId),wx.request({url:l.host+"/YinianProject/story/eventGenerateStory",data:{userId:wx.getStorageSync("userid"),eId:m,storyId:wx.getStorageSync("storyId"),groupId:t.groupid},method:"GET",success:function(e){if(console.log(e),0===e.data.code){t.setData({playPhoto:!1});var a=u.getCurrentPageUrlWithArgs();console.log(a),wx.setStorageSync("skipUrl",a),wx.navigateTo({url:"/package/stories/pages/make/makeStory?eId="+wx.getStorageSync("storyId")+"&groupid="+t.groupid+"&index=1&groupType="+f})}},fail:function(t){}}))},fail:function(t){}})}),e)); 
 			}); 	require("pages/grouptypescoll/grouptypescoll.js");
 		__wxRoute = 'pages/photowall/photowall';__wxRouteBegin = true; 	define("pages/photowall/photowall.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var a,e=require("../../utils/util.js"),o=require("../../utils/config.js"),s=getApp(),i=require("../../utils/api.js"),n=(require("../../utils/reg.js"),[]),r=require("../../utils/tripledes.js"),p=require("../../utils/hotActive.js").hotActive,l=0,u=0,d=0,c=0;Page((a={data:{canIUse:!1,lookway:"day",looktodelete:!1,looktodeletenum:0,returnhomepic:"http://oibl5dyji.bkt.clouddn.com/20170605160928.png",showModelHidden:!1,pvShowModel:!1,photopagedata_day:[],showTop:!0,showFooterIntro1:!0,showFooterIntro2:!0,progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic",isUpPicState:!0,globalNewUser:!1,inBlackList:1,showDisposeModel:!1,classArr:["pic1","pic2","pic3"],usernumber:3006789,checkFeatures:!1,date:"全部照片",firstdate:"2018-01",picturenumber:"(0)",pagenum:1,showTimeData:!0,showMonthTimeData:!1,timeloading:!1,showActivityRules:!0,maxnumber:0,hasmorephoto:!0},onLoad:function(t){s.stat.statpv({route:this.route,options:t});var a=this;this.looktodelete=!1,this.groupid=t.groupid,this.clickFrom=t.clickFrom||"viewscoll",this.groupid&&wx.setStorageSync("groupid",this.groupid),this.looktodeletenum=0,a.setData({winHeight:s.globalData.systemInfo.screenHeight,isIphonex:s.globalData.systemInfo.model.toLowerCase().indexOf("iphone x")>=0,r2p:s.globalData.systemInfo.windowWidth/750,groupid:a.groupid}),wx.canIUse&&wx.canIUse("button.open-type.share")&&a.setData({canIUse:!0});var e="showLoad"+a.groupid,o="showCreat"+a.groupid;wx.getStorageSync(e)?a.setData({showFooterIntro1:!1}):a.setData({showFooterIntro1:!0}),wx.getStorageSync(o)?a.setData({showFooterIntro2:!1}):a.setData({showFooterIntro2:!0});var i=new Date,n=i.getFullYear(),r=i.getMonth()+1;r<10&&(r="0"+r);var p=n+"-"+r;a.setData({firstdate:p}),wx.getStorage({key:"peopleCount",success:function(t){0!=t.data&&t.data?a.setData({maxnumber:t.data}):(console.log(t),a.setData({maxnumber:t.data}))}})},onShow:function(){var t=this;if(s.getshowState(function(a){t.setData({showpuzze:a})}),this.groupid){if(wx.setStorageSync("groupid",this.groupid),2===s.upState){var a=s.upObj;if(console.log(a),!a.picarr||0==a.picarr.length)return void console.log("获取上传的参数出错");s.isUp||("pic"==s.fromUp?t.startUpload():"video"==s.fromUp&&t.startUpVideo(),t.setData({isUpPicState:!1})),s.upState=0}if(1!=s.fromS)if(1!=t.fromlast)if(this.looktodelete=!1,this.looktodeletenum=0,this.setData({looktodeletenum:0}),wx.getStorageSync("userid")){s.isNewUser&&t.setData({globalNewUser:!0}),t.lookTimeData();var o=r.encryptByDESModeCBC(wx.getStorageSync("userid")),i=r.encryptByDESModeCBC(t.groupid);e.wxreq({pathname:"YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",data:{userid:o,groupid:i}}).then(function(a){if(0==a.code){var e=a.data[0];wx.setStorage({key:"createrid",data:e.gcreator}),wx.setStorage({key:"gAuthority",data:e.gAuthority});var o=e.authorityList?e.authorityList:[];wx.setStorage({key:"authorityList",data:o}),t.setData({ablumInfo:{gnum:e.gnum,picnum:e.picNum,gname:e.gname,list:e.memberList,gpic:e.gpic,gOrigin:e.gOrigin,dialogShow:e.dialogShow,inBlackList:e.inBlackList,gcreator:e.gcreator,eventQRCodeCanPublish:e.eventQRCodeCanPublish,arTitle:e.arTitle,arValue:e.arValue,groupNewType:e.groupNewType},picturenumber:"("+e.picNum+")"})}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})})}else wx.showModal({title:"提示",content:"服务器忙,请稍后重试"});else t.timer=setTimeout(function(){t.fromlast=0},100);else setTimeout(function(){s.fromS=0},1e3)}else wx.showModal({title:"提示",content:"获取相册详情失败",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})},prevent:function(){this.fromlast=1},onUnload:function(){var t=this;3==t.data.upSteps&&(s.upState=0,s.upObj={},t.setData({progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0}))},uploadAgain:function(){"pic"==s.fromUp?this.startUpload():"video"==s.fromUp&&this.startUpVideo(),this.setData({isUpPicState:!1})},startUpVideo:function(){console.log(s.upObj);var t=this,a=s.upObj;t.setData({showProgress:!0,totalnum:1,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"video"}),s.isUp=!0,t.uploadvideosync(a)},uploadvideosync:function(t){var a=this;t.cover?wx.request({url:i.getUrl("YinianProject/yinian/GetUploadToken"),data:{},method:"GET",success:function(e){if(0!=e.data.code)return s.isUp=!1,void a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=e.data.data[0].token,n=t.cover;wx.uploadFile({url:"https://upload.qiniup.com",filePath:n,name:"file",formData:{key:n.split("//")[1],token:o},success:function(e){200!=e.statusCode&&(s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}));var o="http://7xlmtr.com1.z0.glb.clouddn.com/"+n.split("//")[1];wx.request({url:i.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(e){if(0!=e.data.code)return s.isUp=!1,void a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var n=e.data.data[0].token,r=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:r,name:"file",formData:{key:r.split("//")[1],token:n},success:function(e){if(200!=e.statusCode)return s.isUp=!1,void a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});a.setData({uploadnum:1,progress:100});var n=JSON.parse(e.data).key;wx.request({url:i.getUrl("YinianProject/event/UploadShortVideo"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.mainIdStr,content:t.content,address:n,storage:6e3,place:t.place,cover:o},success:function(e){0==e.data.code?(a.setData({photopagedata_people:[],showTimeData:!0}),a.getphotoWallDataByDay(),s.isUp=!1,s.upState=0,s.upObj={},a.setData({progress:0,upSteps:2}),a.timer5=setTimeout(function(){a.setData({showProgress:!1,isUpPicState:!0})},3e3),p(wx.getStorageSync("userid"),t.mainIdStr,"upload")):1039==e.data.code?(a.setData({photopagedata_people:[],showTimeData:!0}),a.getphotoWallDataByDay(),s.isUp=!1,s.upState=0,s.upObj={},a.setData({progress:0,upSteps:4}),a.timer5=setTimeout(function(){a.setData({showProgress:!1,isUpPicState:!0})},3e3)):(s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(t){s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}}):wx.request({url:i.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(e){if(0!=e.data.code)return s.isUp=!1,void a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=e.data.data[0].token,n=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:n,name:"file",formData:{key:n.split("//")[1],token:o},success:function(e){if(200!=e.statusCode)return s.isUp=!1,void a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});a.setData({uploadnum:1,progress:100});var o=JSON.parse(e.data).key;wx.request({url:i.getUrl("YinianProject/event/UploadShortVideo"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.mainIdStr,content:t.content,address:o,storage:6e3,place:t.place},success:function(e){0==e.data.code?(a.setData({photopagedata_people:[],showTimeData:!0}),a.getphotoWallDataByDay(),s.isUp=!1,s.upState=0,s.upObj={},a.setData({progress:0,upSteps:2}),a.timer5=setTimeout(function(){a.setData({showProgress:!1,isUpPicState:!0})},3e3),p(wx.getStorageSync("userid"),t.mainIdStr,"upload")):1039==e.data.code?(a.getphotoWallDataByDay(),a.setData({photopagedata_people:[],showTimeData:!0}),s.isUp=!1,s.upState=0,s.upObj={},a.setData({progress:0,upSteps:4}),a.timer5=setTimeout(function(){a.setData({showProgress:!1,isUpPicState:!0})},3e3)):(s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(){s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(){s.isUp=!1,a.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},closeProgress:function(){var t=this;clearTimeout(t.timer2),clearTimeout(t.timer4),clearTimeout(t.timer5),s.upState=0,s.upObj={},this.setData({progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,isUpPicState:!0})},startUpload:function(){var t=this,a=s.upObj,e=[].concat(a.picarr);t.setData({showProgress:!0,totalnum:a.picarr.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic"}),s.isUp=!0,n.length=0,wx.request({url:i.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(o){0===o.data.code?t.uploadpicasync(o.data.data[0].token,a,e):(n.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),s.isUp=!1)},fail:function(a){n.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),s.isUp=!1}})},uploadpicasync:function(t,a,o){var r=this;if(0==o.length)wx.request({url:i.getUrl("YinianProject/event/UploadEvent"),data:{userid:wx.getStorageSync("userid"),groupid:a.mainIdStr,content:a.content,picAddress:n.join(","),storage:300*n.length,memorytime:e.formatTime(new Date),source:"小程序",place:a.place,formID:a.formID,isPush:"true",main:0},success:function(t){return 0!=t.data.code?(n.length=0,s.isUp=!1,void r.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})):(r.setData({photopagedata_people:[],showTimeData:!0}),r.getphotoWallDataByDay(),s.isUp=!1,p(wx.getStorageSync("userid"),a.mainIdStr,"upload"),null==t.data.data?(n.length=0,s.upState=0,s.upObj={},void r.setData({progress:0,upSteps:2,showProgress:!1,isUpPicState:!0})):void(t.data.data[0].picList.length<n.length?(r.setData({sucImgNum:t.data.data[0].picList.length,fitImgNum:n.length-t.data.data[0].picList.length,upSteps:4,progress:0}),n.length=0,s.upState=0,s.upObj={},r.timer4=setTimeout(function(){r.setData({showProgress:!1,isUpPicState:!0})},8e3)):(n.length=0,s.upState=0,s.upObj={},r.setData({progress:0,upSteps:2}),r.timer2=setTimeout(function(){r.setData({showProgress:!1,isUpPicState:!0})},3e3))))},fail:function(){n.length=0,s.isUp=!1,r.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}});else{var l=o.splice(0,1);r.uppic(t,l,o,a)}},uppic:function(t,a,e,o){var i=this,r=a[0],p=r.lastIndexOf("."),l=(new Date).getTime()+""+parseInt(1e8*Math.random()+1e8)+r.substring(p);wx.uploadFile({url:"https://upload.qiniup.com",filePath:r,name:"file",formData:{key:l,token:t},success:function(a){if(200!=a.statusCode)return n.length=0,s.isUp=!1,void i.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var r=JSON.parse(a.data);n.push(r.key),i.setData({uploadnum:n.length,progress:parseInt(n.length/i.data.totalnum*100)}),i.uploadpicasync(t,o,e)},fail:function(){n.length=0,s.isUp=!1,i.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},closeIntroUpload:function(){var t="showLoad"+this.groupid;wx.setStorageSync(t,1),this.setData({showFooterIntro1:!1})},closeIntroCreate:function(){var t="showCreat"+this.groupid;wx.setStorageSync(t,1),this.setData({showFooterIntro2:!1})},toMakeGroup:function(){this.fromlast=1,this.closeIntroCreate(),wx.navigateTo({url:"/pages/makegroup/makegroup?lastPage=photowall"})},scrollTop:function(t){var a=750/s.globalData.systemInfo.windowWidth,e=t.detail.scrollTop;e>462/a?this.data.showTop&&this.setData({showTop:!1}):this.data.showTop||this.setData({showTop:!0})},goHome:function(){var t=this;1==t.data.ablumInfo.gOrigin?wx.navigateTo({url:"/pages/makegroup/makegroup?lastPage=photowall"}):wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.switchTab({url:"/pages/index/index"}),s.isNewUser=!1,t.setData({globalNewUser:!1})},toLookPhoto:function(t){var a=t.currentTarget.dataset.userid,e=t.currentTarget.dataset.groupid,o=this.data.ablumInfo.groupNewType||0;11!=o&&3!=o&&(this.fromlast=1,wx.navigateTo({url:"/pages/personalPage/personalPage?groupId="+e+"&albumType="+o+"&pageUserId="+a+"&creator="+this.data.ablumInfo.gcreator}))},lookTimeData:function(){var t=this;t.data.timeloading||(t.setData({timeloading:!0}),t.data.ablumInfo?t.setData({photopagedata_people:[],showTimeData:!0,showMonthTimeData:!1,checkFeatures:!1,date:"全部照片",picturenumber:"("+t.data.ablumInfo.picnum+")"}):t.setData({photopagedata_people:[],showTimeData:!0,showMonthTimeData:!1,checkFeatures:!1,date:"全部照片",picturenumber:"(0)"}),t.getphotoWallDataByDay())},lookPeopleData:function(){var t=this;console.log(t.data.timeloading),t.data.timeloading||(t.setData({timeloading:!0}),t.setData({photopagedata_day:[],showTimeData:!1,date:"全部照片",picturenumber:"("+t.data.ablumInfo.picnum+")"}),wx.showToast({title:"加载中...",icon:"loading",duration:6e3}),e.wxreq({pathname:"YinianProject/yinian/ShowPhotoAndVideoWallByUserNew",data:{groupid:t.groupid,uploadTime:e.formatTime(new Date).substr(0,10),type:"initialize"}}).then(function(a){var e=a.data;if(e.length>0)for(var o=0,s=e.length;o<s;o++){e[o].uploadtime=e[o].uploadtime.split(" ")[0];for(var i=0,n=e[o].picList.length;i<n;i++){var r=e[o].picList[i],p=r.thumbnail;new RegExp("(mp4|MP4|3gp|3GP|.avi)").test(p)?(r.thumbnail=r.pcover?r.pcover:"http://oibl5dyji.bkt.clouddn.com/20170927095849.png",r.myMain=4):r.myMain=0}}wx.hideToast(),t.setData({photopagedata_people:e,timeloading:!1}),console.log("照片墙 ren")}))},getphotoWallDataByDay:function(){var t=this;t.setData({showTimeData:!0,hasmorephoto:!0}),wx.showToast({title:"加载中...",icon:"loading",duration:6e4}),e.wxreq({pathname:"YinianProject/yinian/ShowPhotoAndVideoWallNew",data:{groupid:t.groupid,date:e.formatTime(new Date).substr(0,10),type:"initialize"}}).then(function(a){var e=a.data;if(e.length>0)for(var o=0,s=e.length;o<s;o++)for(var i=0,n=e[o].picture.length;i<n;i++){var r=e[o].picture[i],p=r.thumbnail;new RegExp("(mp4|MP4|3gp|3GP|.avi)").test(p)?(r.thumbnail=r.pcover?r.pcover:"http://oibl5dyji.bkt.clouddn.com/20170927095849.png",r.myMain=4):r.myMain=0}t.setData({photopagedata_day:e,timeloading:!1}),wx.hideToast()})},getphotoWallDataByMonth:function(){var t=this;if(!t.data.timeloading){t.setData({timeloading:!0,hasmorephoto:!0}),t.setData({photopagedata_day:[],picturenumber:"(0)",pagenum:1,showTimeData:!0});var a=parseInt(t.data.date.substr(0,4)),o=parseInt(t.data.date.substr(5,2)),s=parseInt(t.data.firstdate.substr(0,4)),i=parseInt(t.data.firstdate.substr(5,2));if(console.log(a,o,s,i),a>s||a==s&&o>i)return t.setData({timeloading:!1}),void console.log("yearsel > yearnow || (yearsel == yearnow && monthsel > monthnow");wx.showToast({title:"加载中...",icon:"loading",duration:6e4}),e.wxreq({pathname:"YinianProject/yinian/ShowPhotoAndVideoWallByTime",data:{groupid:t.groupid,date:t.data.date,pagenum:t.data.pagenum}}).then(function(a){var e=a.data;if(e.length>1)for(var o=0,s=e.length-1;o<s;o++)for(var i=0,n=e[o].picture.length;i<n;i++){var r=e[o].picture[i],p=r.thumbnail;new RegExp("(mp4|MP4|3gp|3GP|.avi)").test(p)?(r.thumbnail=r.pcover?r.pcover:"http://oibl5dyji.bkt.clouddn.com/20170927095849.png",r.myMain=4):r.myMain=0}var l=a.data.pop();console.log(l,l.picnum),t.setData({photopagedata_day:e,picturenumber:"("+l.picnum+")",timeloading:!1}),console.log("照片墙 月份"),wx.hideToast()})}},photoageitem:function(){var t=this;t.data.hasmorephoto?t.data.timeloading||(t.setData({timeloading:!0}),wx.showToast({title:"加载中",icon:"loading",duration:6e4}),e.wxreq({pathname:"YinianProject/yinian/ShowPhotoAndVideoWallNew",data:{groupid:wx.getStorageSync("groupid"),date:t.data.photopagedata_day[t.data.photopagedata_day.length-1].euploadtime,type:"loading"}}).then(function(a){if(t.setData({timeloading:!1}),0==a.data.length)wx.showToast({title:"已加载全部照片",duration:2500}),t.setData({hasmorephoto:!1});else{var e=a.data;if(e.length>0)for(var o=0,s=e.length;o<s;o++)for(var i=0,n=e[o].picture.length;i<n;i++){var r=e[o].picture[i],p=r.thumbnail;new RegExp("(mp4|MP4|3gp|3GP)").test(p)?(r.thumbnail=r.pcover?r.pcover:"http://oibl5dyji.bkt.clouddn.com/20170927095849.png",r.myMain=4):r.myMain=0}t.setData({photopagedata_day:t.data.photopagedata_day.concat(e)}),wx.hideToast()}})):wx.showToast({title:"已加载全部照片",duration:2500})},photopeople:function(){var t=this;console.log(t.data.hasmorephoto,t.data.timeloading),t.data.hasmorephoto?t.data.timeloading||(t.setData({timeloading:!0}),wx.showToast({title:"加载中",icon:"loading"}),e.wxreq({pathname:"YinianProject/yinian/ShowPhotoAndVideoWallByUserNew",data:{groupid:wx.getStorageSync("groupid"),uploadTime:t.data.photopagedata_people[t.data.photopagedata_people.length-1].uploadtime,type:"loading"}}).then(function(a){if(0==a.data.length)wx.showToast({title:"已加载全部照片",duration:2500}),t.setData({hasmorephoto:!1});else{var e=a.data;if(e.length>0)for(var o=0,s=e.length;o<s;o++){e[o].uploadtime=e[o].uploadtime.split(" ")[0];for(var i=0,n=e[o].picList.length;i<n;i++){var r=e[o].picList[i],p=r.thumbnail;new RegExp("(mp4|MP4|3gp|3GP)").test(p)?(r.thumbnail=r.pcover?r.pcover:"http://oibl5dyji.bkt.clouddn.com/20170927095849.png",r.myMain=4):r.myMain=0}}t.setData({photopagedata_people:t.data.photopagedata_people.concat(e)})}t.setData({timeloading:!1})})):wx.showToast({title:"已加载全部照片",duration:2500})},photoageitemBymonth:function(){var t=this;t.data.hasmorephoto?t.data.timeloading||(t.setData({timeloading:!0}),wx.showToast({title:"加载中",icon:"loading",duration:6e4}),e.wxreq({pathname:"YinianProject/yinian/ShowPhotoAndVideoWallByTime",data:{groupid:t.groupid,date:t.data.date,pagenum:t.data.pagenum+1}}).then(function(a){if(t.setData({timeloading:!1}),console.log(a.data.length),0==a.data.length)wx.showToast({title:"已加载全部照片",duration:2500}),t.setData({hasmorephoto:!1});else{t.setData({pagenum:t.data.pagenum+1});var e=a.data;if(e.length>0)for(var o=0,s=e.length;o<s;o++)for(var i=0,n=e[o].picture.length;i<n;i++){var r=e[o].picture[i],p=r.thumbnail;new RegExp("(mp4|MP4|3gp|3GP)").test(p)?(r.thumbnail=r.pcover?r.pcover:"http://oibl5dyji.bkt.clouddn.com/20170927095849.png",r.myMain=4):r.myMain=0}t.setData({photopagedata_day:t.data.photopagedata_day.concat(e)}),wx.hideToast()}})):wx.showToast({title:"已加载全部照片",duration:2500})},photopeopleBymonthFirst:function(){var t=this;if(!t.data.timeloading){t.setData({timeloading:!0,hasmorephoto:!0}),t.setData({pagenum:1,picturenumber:"",showTimeData:!1});var a=parseInt(t.data.date.substr(0,4)),o=parseInt(t.data.date.substr(5,2)),s=parseInt(t.data.firstdate.substr(0,4)),i=parseInt(t.data.firstdate.substr(5,2));if(console.log(a,o,s,i),a>s||a==s&&o>i)return t.setData({timeloading:!1}),void console.log("yearsel > yearnow || (yearsel == yearnow && monthsel > monthnow");wx.showToast({title:"加载中",icon:"loading",duration:6e4}),e.wxreq({pathname:"YinianProject/yinian/ShowPhotoAndVideoWallByUserTime",data:{groupid:wx.getStorageSync("groupid"),uploadTime:t.data.date,pagenum:t.data.pagenum}}).then(function(a){if(0==a.data.length)wx.showToast({title:"已加载全部照片",duration:2500}),t.setData({timeloading:!1});else{var e=a.data;if(e.length>0)for(var o=0,s=e.length;o<s;o++){e[o].uploadtime=e[o].uploadtime.split(" ")[0];for(var i=0,n=e[o].picList.length;i<n;i++){var r=e[o].picList[i],p=r.thumbnail;new RegExp("(mp4|MP4|3gp|3GP)").test(p)?(r.thumbnail=r.pcover?r.pcover:"http://oibl5dyji.bkt.clouddn.com/20170927095849.png",r.myMain=4):r.myMain=0}}t.setData({photopagedata_people:e,timeloading:!1}),wx.hideToast()}})}},photopeopleBymonth:function(){var t=this;console.log(t.data.hasmorephoto,t.data.timeloading),t.data.hasmorephoto?t.data.timeloading||(t.setData({timeloading:!0}),wx.showToast({title:"加载中",icon:"loading",duration:6e4}),e.wxreq({pathname:"YinianProject/yinian/ShowPhotoAndVideoWallByUserTime",data:{groupid:wx.getStorageSync("groupid"),uploadTime:t.data.date,pagenum:t.data.pagenum+1}}).then(function(a){if(t.setData({timeloading:!1}),0==a.data.length)wx.showToast({title:"已加载全部照片",duration:2500}),t.setData({hasmorephoto:!1});else{t.setData({pagenum:t.data.pagenum+1});var e=a.data;if(e.length>0)for(var o=0,s=e.length;o<s;o++){e[o].uploadtime=e[o].uploadtime.split(" ")[0];for(var i=0,n=e[o].picList.length;i<n;i++){var r=e[o].picList[i],p=r.thumbnail;new RegExp("(mp4|MP4|3gp|3GP)").test(p)?(r.thumbnail=r.pcover?r.pcover:"http://oibl5dyji.bkt.clouddn.com/20170927095849.png",r.myMain=4):r.myMain=0}}t.setData({photopagedata_people:t.data.photopagedata_people.concat(e)}),wx.hideToast()}})):wx.showToast({title:"已加载全部照片",duration:2500})},lookbigpic:function(t){console.log(t);var a=t.currentTarget.dataset.picitemindex,e=t.currentTarget.dataset.picindex,o=void 0;if(this.data.showTimeData){o=this.data.photopagedata_day;for(var s=this,i=[],n=0,r=0;r<o[a].picture.length;r++){var p=o[a].picture[r];4!=p.eMain?i.push(p):r<e&&n++}return wx.setStorageSync("lookImgs",i),e-=n,clearTimeout(s.timer),s.fromlast=1,void wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+e})}o=this.data.photopagedata_people;for(var l=this,u=[],d=0,c=0;c<o[a].picList.length;c++){var h=o[a].picList[c];4!=h.myMain?u.push(h):c<e&&d++}return wx.setStorageSync("lookImgs",u),e-=d,clearTimeout(l.timer),l.fromlast=1,void wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+e})},clicloadkmore:function(t){var a=this;a.fromlast=1,wx.navigateTo({url:"/pages/photowall/morephoto/morephoto?groupid="+a.data.groupid+"&uploadtime="+t.currentTarget.dataset.euploadtime})},uploadpic:function(t){var a=this;if(wx.getStorageSync("userid")){var e;e="pai"==(t=t||event).currentTarget.dataset.pic?"camera":"album",this.fromlast=1,wx.chooseImage({count:9,sizeType:["original"],sourceType:[e],success:function(t){var e=t.tempFilePaths;wx.removeStorageSync("uploadchoosedpic"),wx.setStorage({key:"uploadchoosedpic",data:e,success:function(){a.setData({pvShowModel:!1}),wx.navigateTo({url:"/pages/uploadpic/uploadpic?lastPage=photowall"})},fail:function(){wx.showToast({title:"保存图片临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},uploadvideo:function(t){var a=this;if(wx.getStorageSync("userid")){var e;e="pai"==(t=t||event).currentTarget.dataset.video?"camera":"album",this.fromlast=1,wx.chooseVideo({sourceType:[e],maxDuration:60,camera:"back",success:function(t){var e=t.tempFilePath;wx.setStorage({key:"uploadchoosedvideo",data:e,success:function(){a.setData({pvShowModel:!1}),wx.navigateTo({url:"/pages/uploadvideo/uploadvideo?lastPage=photowall"})},fail:function(){wx.showToast({title:"保存视频临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},chooselookToDelete:function(){var t=this;0!=t.data.photopagedata_day.length?(this.looktodelete=!this.looktodelete,this.setData({looktodelete:t.looktodelete})):wx.showModal({title:"提示",content:"上传照片以后就能正常使用了！",showCancel:!1})},selectpic:function(a){var e,o=a.target.dataset.itemindex,s=a.target.dataset.picindex,i=this,n=this.data.photopagedata_day;console.log(n),n[o].picture[s].selected?i.looktodeletenum--:i.looktodeletenum++,n[o].picture[s].selected=!n[o].picture[s].selected,this.setData((e={},t(e,"photopagedata_day",n),t(e,"looktodeletenum",i.looktodeletenum),e))},makelooktodeletepic:function(){var t=this;if(0!==t.data.looktodeletenum){if("month"==t.data.lookway)a=t.data.photopagedata;else var a=t.data.photopagedata_day;wx.navigateTo({url:"../commonpage/makeBurnAfterRead/make",success:function(e){var o=[];setTimeout(function(){var e=getCurrentPages();a.forEach(function(t){t.picture.forEach(function(t){t.selected&&o.push(t.pid)})}),t.setData({looktodelete:!1});var s=t.looktodeletenum;e[e.length-1].setData({pid:o,picnum:s})},1e3)}})}else wx.showModal({title:"错误",content:"上传照片以后就能正常使用了！",showCancel:!1})},returnhome:function(){wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.navigateBack({delta:10})},openModel:function(){this.setData({showModelHidden:!0})},closeModel:function(){this.setData({showModelHidden:!1})},showPvModel:function(){var t=this;if(0!=t.data.ablumInfo.inBlackList)if(s.isUp)wx.showToast({title:"正在上传中喔~"});else if(2==t.data.ablumInfo.gOrigin&&t.closeIntroUpload(),1!=wx.getStorageSync("gAuthority")||wx.getStorageSync("userid")==wx.getStorageSync("createrid")){if(2==wx.getStorageSync("gAuthority")){var a=wx.getStorageSync("authorityList");if(0==a.length)return;for(var e=0;e<a.length;e++)a[e].userid==wx.getStorageSync("userid")&&(t.quanxian=!0);if(!t.quanxian)return void wx.showModal({title:"提示",content:"没有上传照片的权限",showCancel:!1})}t.setData({pvShowModel:!0})}else wx.showModal({title:"提示",content:"只能创建者才能上传"});else wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1})},closepvModel:function(){this.setData({pvShowModel:!1})},seeBigVideo:function(t){var a=t.currentTarget.dataset.url;wx.setStorageSync("videourl",a),wx.navigateTo({url:"/pages/viewscoll/bigvideo/bigvideo"})},activityRules:function(){this.data.ablumInfo&&this.data.ablumInfo.arValue&&this.data.ablumInfo.arValue.length>0&&this.setData({showActivityRules:!1})},closeActivityRules:function(){this.setData({showActivityRules:!0})},fasttoknow:function(){var t=this;console.log("fasttoknow"),t.setData({showDisposeModel:!0,usernumber:o.usernumber}),clearInterval(t.timerinterval),t.timerinterval=null,t.usernumberchange()},usernumberchange:function(){var t=this;t.timerinterval=setInterval(function(){if(t.data.usernumber>t.data.maxnumber){clearInterval(t.timerinterval),t.timerinterval=null;var a=t.toThousands(t.data.maxnumber);console.log(a),t.setData({usernumber:a})}else t.data.usernumber+=323456,t.setData({usernumber:t.data.usernumber})},100)},toThousands:function(t){for(var t=(t||0).toString(),a="";t.length>3;)a=","+t.slice(-3)+a,t=t.slice(0,t.length-3);return t&&(a=t+a),a}},t(a,"closeModel",function(){console.log("closeModel"),this.setData({showDisposeModel:!1,classArr:["pic1","pic2","pic3"]})}),t(a,"changestart",function(t){console.log(t.changedTouches[0],t),l=t.touches[0].pageX,u=t.touches[0].pageY}),t(a,"changemove",function(t){}),t(a,"changend",function(t){console.log("changend");var a=this;if(d=t.changedTouches[0].pageX,c=t.changedTouches[0].pageY,console.log(d,c),l-d>30){if("pic2"==a.data.classArr[0])return;a.data.classArr.unshift(a.data.classArr[a.data.classArr.length-1]),a.data.classArr.pop(a.data.classArr[a.data.classArr.length-1]),a.setData({classArr:a.data.classArr})}else if(d-l>30){if("pic1"==a.data.classArr[0])return;a.data.classArr.push(a.data.classArr[0]),a.data.classArr.shift(a.data.classArr[0]),a.setData({classArr:a.data.classArr})}}),t(a,"addgroup",function(){wx.getStorageSync("userid")?wx.navigateTo({url:"../makegroup/makegroup?lastPage=photowall"}):wx.showModal({title:"错误",content:"获取用户授权信息失败！创建相册功能不可用！",showCancel:!1})}),t(a,"alertCheckData",function(){var t=this;t.data.timeloading||t.setData({checkFeatures:!0})}),t(a,"cancelCheck",function(){this.setData({checkFeatures:!1})}),t(a,"bindDateChange",function(t){var a=this;console.log("picker发送选择改变，携带值为",t.detail.value,a.data.firstdate),a.setData({showMonthTimeData:!0,date:t.detail.value}),a.data.showTimeData?(a.getphotoWallDataByMonth(),a.setData({photopagedata_day:[]})):(a.photopeopleBymonthFirst(),a.setData({photopagedata_people:[]}))}),a)); 
 			}); 	require("pages/photowall/photowall.js");
 		__wxRoute = 'pages/photowall/morephoto/morephoto';__wxRouteBegin = true; 	define("pages/photowall/morephoto/morephoto.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/util.js"),a=getApp();require("../../../utils/api.js"),require("../../../utils/reg.js");Page({data:{canIUse:!1,lookway:"day",looktodelete:!1,looktodeletenum:0,returnhomepic:"http://oibl5dyji.bkt.clouddn.com/20170605160928.png",showModelHidden:!1,pvShowModel:!1,photopagedata_day:[],showTop:!0,showTimeData:!0,checkFeatures:!1,date:"2018-02",pagenum:1,showMonthTimeData:!1,hasmorephoto:!0},onLoad:function(t){a.stat.statpv({route:this.route,options:t});var o=this;this.looktodelete=!1,this.groupid=t.groupid,this.uploadtime=t.uploadtime,this.setData({date:t.uploadtime}),this.groupid&&wx.setStorageSync("groupid",this.groupid),this.looktodeletenum=0,o.setData({winHeight:a.globalData.systemInfo.screenHeight,r2p:a.globalData.systemInfo.windowWidth/750,groupid:o.groupid}),wx.canIUse&&wx.canIUse("button.open-type.share")&&o.setData({canIUse:!0})},onShow:function(){var t=this;a.getshowState(function(a){t.setData({showpuzze:a})}),this.groupid?(wx.setStorageSync("groupid",this.groupid),1!=t.fromlast?t.getphotoWallDataByDay():t.timer=setTimeout(function(){t.fromlast=0},100)):wx.showModal({title:"提示",content:"获取相册详情失败",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})},onUnload:function(){},scrollTop:function(t){var o=750/a.globalData.systemInfo.windowWidth,e=t.detail.scrollTop;e>462/o?this.data.showTop&&this.setData({showTop:!1}):this.data.showTop||this.setData({showTop:!0})},lookTimeData:function(){var t=this;this.setData({photopagedata_people:[],showTimeData:!0,showMonthTimeData:!0}),t.getphotoWallDataByDay()},getphotoWallDataByDay:function(){var a=this;this.loadingDataByDay=!1,wx.showToast({title:"加载中...",icon:"loading",duration:6e4}),t.wxreq({pathname:"YinianProject/yinian/ShowPhotoAndVideoWallMore",data:{groupid:a.groupid,uploadtime:a.uploadtime,pagenum:1,hasmorephoto:!0}}).then(function(t){wx.hideToast();var o=t.data;a.setData({photopagedata_day:o}),wx.hideToast()})},lookbigpic:function(t){console.log(t);for(var a=t.currentTarget.dataset.picindex,o=this.data.photopagedata_day,e=this,i=[],s=0,n=0;n<o.length;n++){var d=o[n];4!=d.pMain?i.push(d):n<a&&s++}wx.setStorageSync("lookImgs",i),a-=s,clearTimeout(e.timer),e.fromlast=1,wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+a})},photoageitem:function(){var a=this;a.data.hasmorephoto?a.loadingDataByDay||(a.loadingDataByDay=!0,wx.showToast({title:"加载中",icon:"loading",duration:6e4}),t.wxreq({pathname:"YinianProject/yinian/ShowPhotoAndVideoWallMore",data:{groupid:a.groupid,uploadtime:a.uploadtime,pagenum:a.data.pagenum+1}}).then(function(t){if(a.loadingDataByDay=!1,0==t.data.length)wx.showToast({title:"已加载全部照片",duration:2500}),a.setData({hasmorephoto:!1});else{a.setData({pagenum:a.data.pagenum+1});var o=t.data;a.setData({photopagedata_day:a.data.photopagedata_day.concat(o)}),wx.hideToast()}})):wx.showToast({title:"已加载全部照片",duration:2500})},seeBigVideo:function(t){var a=t.currentTarget.dataset.url;wx.setStorageSync("videourl",a),wx.navigateTo({url:"/pages/viewscoll/bigvideo/bigvideo"})}}); 
 			}); 	require("pages/photowall/morephoto/morephoto.js");
 		__wxRoute = 'pages/makegroup/makegroup';__wxRouteBegin = true; 	define("pages/makegroup/makegroup.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/api.js"),t=require("../../utils/reg.js"),a=getApp(),i=require("../../utils/util.js"),s=require("../../utils/albumsjump.js").albumsjump,r=[{id:2,tag:"朋友",name:["最佳损友","我和闺蜜","友谊长存","快乐组合","我们的圈子"]},{id:3,tag:"个人",name:["青葱岁月","那些年","私人相册","我的每一天"]},{id:4,tag:"家人",name:["全家福","我们这一家人","快乐家族","Family","Home"]},{id:5,tag:"宝宝",name:["宝宝成长日记","我们的宝宝","宝宝相册","萌宝成长记"]},{id:9,tag:"同学",name:["校园时光","校园的日子","校园记忆","葱葱校园","那些年","我们的故事"]},{id:10,tag:"同事",name:["公司活动","公司日常","同事日记","关于我们"]},{id:11,tag:"情侣",name:["我们的爱","陪伴是最长情的告白","恋恋笔记","幸福日记","关于我爱你"]},{id:14,tag:"萌宠",name:["猫猫狗狗","小萌屋","汪星人和喵星人","家有萌宠","呆萌宝宝","萌宠"]},{id:15,tag:"组织",name:["我们的组织","兴趣小组","组织相册"]},{id:20,tag:"摄影",name:["摄影小组","摄影作品"]},{id:25,tag:"粉丝",name:["粉丝团","粉丝部落"]},{id:13,tag:"其它",name:["未命名相册"]}];Page({data:{tags:[],textNum:0},onLoad:function(e){a.stat.statpv({route:this.route,options:e}),wx.setNavigationBarTitle({title:"创建相册"}),e.version&&(this.version=e.version),e.port&&(this.port=e.port,a.globalData.port=e.port),e.fromUserID&&(this.fromUserID=e.fromUserID),e.fromSpaceID&&(this.fromSpaceID=e.fromSpaceID),e.fromEventID&&(this.fromEventID=e.fromEventID),this.efrom=e.efrom,this.lastPage=e.lastPage,this.lastPage=this.lastPage||"null",this.isSubmit=1,this.selectTag={id:null,index:null},this.setData({tags:r})},onShow:function(){this.isMake=!0;var e=this,t=this.version?this.version:"",s=this.port?this.port:"",r=this.fromUserID?this.fromUserID:0,o=this.fromSpaceID?this.fromSpaceID:0,n=this.fromEventID?this.fromEventID:0;a.getUserInfo(function(t){if(1==e.isSubmit){e.enterCurrentTimestamp=(new Date).getTime();var r=t.userid,o={basicInfo:{userid:r,source:s,"isActivityAlbum ":"null","lastPage ":e.lastPage,timestamp:e.enterCurrentTimestamp,identification:r+"_"+a.enterTimestamp},type:"enter",data:{page:{name:"albumCreatePage",page_identification:r+"_"+e.enterCurrentTimestamp}}};0==a.sendValue&&i.sendData(r,o),e.button=[]}else e.isSubmit=1},t,s,r,o,n,"makegroup",function(){})},onHide:function(){},onUnload:function(){console.log("make_hide"),this.sendLeaveData()},sendLeaveData:function(){var e=this,t=this.port?this.port:"",s=wx.getStorageSync("userid"),r=(new Date).getTime()-e.enterCurrentTimestamp,o={basicInfo:{userid:s,source:t," isActivityAlbum ":"null","lastPage ":e.lastPage,timestamp:(new Date).getTime(),identification:s+"_"+a.enterTimestamp},type:"leave",data:{page:{name:"albumCreatePage",page_identification:s+"_"+e.enterCurrentTimestamp},botton:e.button,time:r}};0==a.sendValue&&i.sendData(s,o)},creategroup:function(i){var r=this;if(r.data.dataId)if(r.isNewpushId(),"新用户"!=a.globalData.userInfo.nickName)if(wx.getStorageSync("userid")){var o=i.detail.formId,n=r.data.value;n||(n="未命名相册",r.data.dataId=13),t.testStr(n)?wx.showModal({title:"包含敏感词",content:"请勿使用包含敏感词汇的相册名称",showCancel:!1}):r.isMake&&(r.isMake=!1,wx.showToast({title:"正在创建",icon:"loading",duration:1e4,mask:!0}),console.log("make"),wx.request({url:e.getUrl("YinianProject/newh5/CreateDefaultAlbum"),data:{userid:wx.getStorageSync("userid"),groupType:4,groupName:n,url:"",source:"小程序",formID:o,isDefault:0,groupNewType:r.data.dataId},method:"GET",success:function(e){if(console.log(333,e),0!=e.data.code)return wx.showModal({title:"提示",content:"创建相册失败",showCancel:!1}),r.isMake=!0,void wx.hideToast();var t=e.data.data[0],i=r.data.dataId;if(i=parseInt(i),"upgroup"==r.efrom){r.selPicToUp(t.groupid,i);var o={operation:"twice_page_create",userId:wx.getStorageSync("userid")||0,groupNewType:i,groupId:t.groupid};a.stat.request(o)}else s({groupNewType:i,data:{lastPage:"albumCreatePage",from:"grouplist",groupid:t.groupid},navigator:"redirect"}),r.isMake=!0,wx.hideToast()},fail:function(){wx.hideToast(),r.isMake=!0}}))}else wx.showToast({title:"获取数据中..."});else wx.navigateTo({url:"/pages/creatlogin/creatlogin"})},selPicToUp:function(e,t){wx.chooseImage({sizeType:["original"],sourceType:["album"],success:function(i){console.log(i);var r=i.tempFilePaths;a.upState=2,a.fromUp="pic",a.upObj={mainIdStr:e,formID:"",place:"",content:"",picarr:r,attentionMember:"",publishedTime:""},s({groupNewType:t,data:{lastPage:"albumCreatePage",from:"grouplist",groupid:e,mayefrom:"specialActivity"},navigator:"redirect"})},fail:function(){wx.navigateBack({delta:1})}})},setname:function(e){var t=this,a=e.target.dataset.index,i=r[a].name.length,s=parseInt(Math.random()*i,10);this.data.tags.forEach(function(e,t){e.back=t==a}),this.setData({value:r[a].name[s],dataId:e.target.dataset.id,tags:t.data.tags})},onShareAppMessage:function(){this.isSubmit=2;var e=wx.getStorageSync("userid")||0;return{title:a.globalData.userInfo.nickName+"邀请你创建相册",path:"/pages/makegroup/makegroup?port=创建相册页分享&fromUserID="+e,success:function(){a.stat.request({operation:"shareCallback"})}}},isNewpushId:function(){""!=a.pushId&&void 0!=a.pushId&&i.wxreq({pathname:"YinianProject/ep/isNew",data:{pushId:a.pushId,port:a.globalData.port}}).then(function(e){},function(e){})}}); 
 			}); 	require("pages/makegroup/makegroup.js");
 		__wxRoute = 'pages/setting/setting';__wxRouteBegin = true; 	define("pages/setting/setting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/api.js"),t=getApp(),a=require("../../utils/reg.js"),o=require("../../utils/util.js"),s=void 0,i=void 0,n=void 0,c=["babyalbum","familyalbum","friendsalbum","loversalbum","personalalbum"];Page({data:{canIUse:!1,showsharemode:!1,showIt:!1,userId:-1,groupId:-1,createrId:-1,albumNameLength:0,modal:0,codeAuth:{groupQrCodeAuth:"0",eventQrCodeAuth:"0"}},onLoad:function(e){t.stat.statpv({route:this.route,options:e});var a=e.gOrigin;this.clickFrom=e.clickFrom||"viewscoll";var n=e.albumType||"viewscoll",l=c.includes(n);s=wx.getStorageSync("userid"),i=wx.getStorageSync("groupid"),wx.setNavigationBarTitle({title:"相册设置"}),o.getQrCodeMakeAuth(function(e){r.setData({codeAuth:e})}),this.disabled=-1;var r=this;wx.canIUse&&wx.canIUse("button.open-type.share")&&r.setData({canIUse:!0}),wx.getSystemInfo({success:function(e){r.setData({winWidth:e.windowWidth,winHeight:e.windowHeight,ganme:wx.getStorageSync("ganme")})}}),t.fromlast=1,this.setData({userid:s,groupid:i,gOrigin:a,albumType:n,isSpecialAlbum:l,canNotExit:e.canNotExit||0,isIphonex:t.globalData.systemInfo.model.toLowerCase().indexOf("iphone x")>=0})},onShow:function(){var a=this;a.getAlbumBaseInfo(function(e){e==s?a.setData({showIt:!0}):a.setData({showIt:!1})});var o;o=1==wx.getStorageSync("msgState"),this.setData({switchState:o}),t.getshowState(function(e){a.setData({showpuzze:e})});getCurrentPages();wx.request({url:e.getUrl("YinianProject/space/ShowGroupMemberTop"),data:{groupid:i,userid:s,source:"",pagenum:1},method:"GET",success:function(e){if(0==e.data.code){var t=e.data.data,o=t.slice(0,4);a.setData({alluserlist:t,userlist:o}),console.log(a.data.userlist)}}})},toAddSet:function(){wx.redirectTo({url:"/pages/setting/addset/addset"})},loading:function(){var e=this;if(!this.isloading){this.isloading=!0;var t=parseInt(e.data.userlist.length)+18;wx.hideToast(),e.setData({userlist:e.data.alluserlist.slice(0,t)}),e.isloading=!1}},switchChange:function(t){var a=t.detail.value.toString();wx.request({url:e.getUrl("YinianProject/space/SpaceMemberSetIsPush"),data:{groupid:i,userid:s,isPush:a},success:function(e){if(0==e.data.code){"true"==a?1:0,wx.setStorageSync("msgState",a),wx.showToast({title:"修改成功"})}}})},deletegroup:function(){s?wx.showModal({title:"解散相册",content:"是否确定解散相册",showCancel:!0,success:function(t){t.confirm&&(wx.showToast({title:"请稍后"}),wx.request({url:e.getUrl("YinianProject/yinian/DeleteGroup"),data:{userid:s,groupid:i,source:"smallApp"},success:function(e){"success"==e.data.msg&&wx.showToast({title:"相册已解散",success:function(){wx.switchTab({url:"/pages/index/index"})}})}}))}}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},leavegroup:function(){s?wx.showModal({title:"退出相册",content:"是否确定退出相册",showCancel:!0,success:function(t){t.confirm&&(wx.showToast({title:"请稍后"}),wx.request({url:e.getUrl("YinianProject/yinian/LeaveAlbum"),data:{userid:s,groupid:i,source:"smallApp"},success:function(e){"success"==e.data.msg&&wx.showToast({title:"已退出该相册",success:function(){wx.switchTab({url:"/pages/index/index"})}})}}))}}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},editpic:function(t){s?s==n?wx.request({url:e.getUrl("YinianProject/yinian/GetUploadToken"),data:{},method:"GET",success:function(t){var a=t.data.data[0].token;wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传",icon:"loading",duration:2e3}),wx.uploadFile({url:"https://upload.qiniup.com",filePath:t.tempFilePaths[0],name:"file",formData:{key:t.tempFilePaths[0].split("//")[1],token:a},success:function(t){var a=JSON.parse(t.data);new Date;wx.request({url:e.getUrl("YinianProject/yinian/ModifyGroupPic"),data:{url:a.key,userid:s,groupID:wx.getStorageSync("groupid")},success:function(e){0==e.data.code&&wx.showToast({title:"修改成功",icon:"success",duration:2e3,success:function(){setTimeout(function(){wx.hideToast()},1500)}})}})}})}})}}):wx.showModal({title:"提示",content:"非相册管理员，无法修改相册封面",showCancel:!1}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},modifyAlbumName:function(e){this.setData({ganme:e.detail.value})},openAlbumCover:function(){s==n?wx.navigateTo({url:"/pages/others/changbgpic/changbgpic"}):wx.showModal({title:"提示",content:"非相册管理员，无法修改相册封面",showCancel:!1})},submitfun:function(t){var o=this;if(0!==o.disabled)if(s)if(s==n){var c=this.data.ganme;if(c.trim().length>0){if(c.indexOf("忆年")>=0)return void wx.showModal({title:"包含敏感词",content:"请勿使用包含敏感词汇的相册名称",showCancel:!1});if(a.testStr(c))return void wx.showModal({title:"包含敏感词",content:"请勿使用包含敏感词汇的相册名称",showCancel:!1});wx.request({url:e.getUrl("YinianProject/yinian/ModifyGroupName"),data:{groupid:i,groupName:c,userid:s},success:function(e){o.cancleModal(),0==e.data.code&&(wx.showToast({title:"修改成功",icon:"success"}),wx.setStorageSync("ganme",c))},complete:function(){o.disabled=1}})}else wx.showModal({title:"提示",content:"请输入正确的相册名称",showCancel:!1})}else wx.showModal({title:"提示",content:"非相册管理员，无法修改相册名称",showCancel:!1});else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1});else wx.showToast({title:"操作太频繁",image:"/images/toast_warning.png",duration:2e3})},showcode:function(){if(i){var t=i||0,a=s||0;if(o.countOperation("settingCode",t,a,""),wx.showToast({title:"正在生成二维码",icon:"loading",duration:15e3}),"grouptypescoll"===this.clickFrom){var n=s||0;o.wxreq({pathname:"YinianProject/qrCode/makeGroupQrCodeToSpacial",data:{userid:n,groupid:i,isJoinAblum:"yes"}}).then(function(e){if(wx.hideToast(),0==e.code){var t=e.data[0].url;wx.previewImage({urls:[t]})}else wx.showModal({title:"提示",content:"获取二维码失败",showCancel:!1})}).catch(function(){wx.hideToast(),wx.showModal({title:"提示",content:"网络错误，稍后重试",showCancel:!1})})}else{var c="YinianProject/qrCode/makeGroupQrCode";"viewscoll"===this.clickFrom?c="YinianProject/qrCode/makeGroupQrCode":"party"===this.clickFrom&&(c="YinianProject/qrCode/makeGroupQrCodeToParty"),wx.request({url:e.getUrl(c),data:{groupid:i,userid:s},success:function(e){if(wx.hideToast(),200==e.statusCode){var t=e.data.data[0].url;wx.previewImage({urls:[t]})}else wx.showModal({title:"提示",content:"获取二维码失败",showCancel:!1})},fail:function(){wx.hideToast(),wx.showModal({title:"提示",content:"网络错误，稍后重试",showCancel:!1})}})}}else wx.showModal({title:"提示",content:"找不到空间信息，请退出该相册重进。。",showCancel:!1})},showshare:function(){wx.showModal({title:"添加好友",content:"将照片墙或时间轴分享给你的好友即可邀请对方加入",showCancel:!1,confirmColor:"#353535"})},modifyAlbumNameInput:function(e){this.setData({ganme:e.detail.value,albumNameLength:e.detail.value.length})},cancleModal:function(){this.setData({modal:0,gname:wx.getStorageSync("ganme"),albumNameLength:wx.getStorageSync("ganme").length})},openModal:function(){s==n?this.setData({modal:1,albumNameLength:wx.getStorageSync("ganme").length}):wx.showModal({title:"提示",content:"非相册管理员，无法修改相册名称",showCancel:!1})},getAlbumBaseInfo:function(t){var a=this;a.disabled=0,wx.showToast({title:"获取数据中...",icon:"loading",duration:1e4,mask:!0}),wx.request({url:e.getUrl("YinianProject/space/MembersNum"),data:{groupid:i},method:"GET",success:function(e){0==e.data.code&&(a.setData({createrid:e.data.data[0].userid}),n=e.data.data[0].userid,wx.hideToast(),"function"==typeof t&&t(n))},complete:function(){a.disabled=1}})}}); 
 			}); 	require("pages/setting/setting.js");
 		__wxRoute = 'pages/setting/addset/addset';__wxRouteBegin = true; 	define("pages/setting/addset/addset.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=require("../../../utils/util.js");Page({data:{allState:!0,onlyCreator:!1,state:!0},onLoad:function(a){t.stat.statpv({route:this.route,options:a})},onShow:function(){var t=this,a=wx.getStorageSync("gAuthority");0==a?t.setData({allState:!0,onlyCreator:!1,state:!0}):1==a?t.setData({allState:!1,onlyCreator:!0,state:!0}):t.setData({allState:!1,onlyCreator:!1,state:!1})},changeAll:function(){var t=this;2!=wx.getStorageSync("gAuthority")?this.setData({allState:!t.data.allState,onlyCreator:!t.data.onlyCreator,state:!0}):this.setData({allState:!t.data.allState,onlyCreator:t.data.allState,state:!0})},changeCreator:function(){var t=this;2!=wx.getStorageSync("gAuthority")?this.setData({allState:!t.data.allState,onlyCreator:!t.data.onlyCreator,state:!0}):this.setData({allState:t.data.onlyCreator,onlyCreator:!t.data.onlyCreator,state:!0})},release:function(){if(this.data.state){var t=this.data.allState?"all":"onlyCreator";a.wxreq({pathname:"YinianProject/space/SetUploadAuthority",data:{userid:wx.getStorageSync("userid"),groupid:wx.getStorageSync("groupid"),authorityType:t},reqtype:"GET"}).then(function(t){wx.navigateBack({delta:1})})}else wx.showModal({title:"提示",content:"还没有设置...",showCancel:!1})}}); 
 			}); 	require("pages/setting/addset/addset.js");
 		__wxRoute = 'pages/setting/addmember/addmember';__wxRouteBegin = true; 	define("pages/setting/addmember/addmember.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/util.js"),e=getApp();Page({data:{createList:[],selectList:[],restList:[],searchList:[],start:!1},onLoad:function(t){e.stat.statpv({route:this.route,options:t})},onShow:function(){var e=this,a=wx.getStorageSync("gnum");if(e.setData({gnum:a}),a>100){var s=[],i=[],r=[],c=[];t.wxreq({pathname:"YinianProject/yinian/ShowInfo",data:{userid:wx.getStorageSync("createrid")}}).then(function(t){s.push({unickname:t.data[0].unickname,upic:t.data[0].upic,userid:wx.getStorageSync("createrid"),select:!0}),e.setData({createList:s})}),t.wxreq({pathname:"YinianProject/space/GetSpaceMemberAuthorityList",data:{groupid:wx.getStorageSync("groupid"),type:"bigger"}}).then(function(t){var a=t.data;a.length>0&&a.forEach(function(t){1==t.gmauthority&&t.userid!=wx.getStorageSync("createrid")&&i.push({gmauthority:t.gmauthority,unickname:t.unickname,upic:t.upic,userid:t.userid,select:!0})}),e.setData({selectList:i,restList:r,searchList:c})})}else{var s=[],i=[],r=[];t.wxreq({pathname:"YinianProject/space/GetSpaceMemberAuthorityList",data:{groupid:wx.getStorageSync("groupid"),type:"smaller"}}).then(function(t){var a=t.data;a.length>0&&a.forEach(function(t){t.userid==wx.getStorageSync("userid")&&s.push({gmauthority:t.gmauthority,unickname:t.unickname,upic:t.upic,userid:t.userid,select:!0}),1==t.gmauthority&&t.userid!=wx.getStorageSync("userid")&&i.push({gmauthority:t.gmauthority,unickname:t.unickname,upic:t.upic,userid:t.userid,select:!0}),0==t.gmauthority&&t.userid!=wx.getStorageSync("userid")&&r.push({gmauthority:t.gmauthority,unickname:t.unickname,upic:t.upic,userid:t.userid,select:!1})}),e.setData({createList:s,selectList:i,restList:r})})}},searchList:function(e){var a=this,e=e||event;if(wx.getStorageSync("userid")){var s=e.detail.value.trim();""!=s?(wx.showToast({title:"搜索中...",icon:"loading",duration:6e3,mask:!0}),t.wxreq({pathname:"YinianProject/space/SearchSpaceMembers",data:{groupid:wx.getStorageSync("groupid"),name:s},reqtype:"GET"}).then(function(t){var e=a.data.selectList,s=[];a.data.restList.forEach(function(t){s.push(t)});for(var i=t.data,r=t.data,c=0;c<e.length;c++)s.push(e[c]);for(var n=i.length-1;n>=0;n--)for(var u=0;u<s.length;u++)s[u].userid==i[n].userid&&r.splice(n,1);a.setData({start:!0,searchList:r}),wx.hideToast()})):wx.showToast({title:"请输入用户名称"})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},addRest:function(t){var e=this,a=(e.data.searchList,t.currentTarget.dataset.add),s=e.data.restList;if(e.data.searchList[a].select=!e.data.searchList[a].select,e.setData({searchList:e.data.searchList}),e.data.searchList[a].select)s.push(e.data.searchList[a]);else for(var i=0;i<s.length;i++)s[i].userid==e.data.searchList[a].userid&&s.splice(i,1);e.setData({restList:s})},closeReset:function(){this.setData({start:!1,searchList:[],value:""})},changeSelList:function(t){var e=this,a=t.currentTarget.dataset.sel;e.data.selectList[a].select=!e.data.selectList[a].select,e.setData({selectList:e.data.selectList})},changeRestList:function(t){var e=this,a=t.currentTarget.dataset.rest;e.data.restList[a].select=!e.data.restList[a].select,e.setData({restList:e.data.restList})},release:function(){var e=this;if(e.data.selectList.length>0){var a=[];e.data.selectList.forEach(function(t){t.select||a.push(t.userid)}),a.length>0&&t.wxreq({pathname:"YinianProject/space/SetUploadAuthority",data:{groupid:wx.getStorageSync("groupid"),userid:a.join(","),authorityType:"part",type:"remove"}}).then(function(t){})}if(e.data.restList.length>0){var s=[];e.data.restList.forEach(function(t){t.select&&s.push(t.userid)}),s.push(e.data.createList[0].userid),s.push(wx.getStorageSync("createrid")),s.length>0&&t.wxreq({pathname:"YinianProject/space/SetUploadAuthority",data:{groupid:wx.getStorageSync("groupid"),userid:s.join(","),authorityType:"part",type:"add"}}).then(function(t){})}wx.navigateBack({delta:1})}}); 
 			}); 	require("pages/setting/addmember/addmember.js");
 		__wxRoute = 'pages/eventdetail/eventdetail';__wxRouteBegin = true; 	define("pages/eventdetail/eventdetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function t(e){var e=e.replace(/-/g,"/"),t=Date.parse(new Date(e));t/=1e3;var a=(new Date).getTime(),i=parseInt(a/1e3)-parseInt(t);return 0==i?"刚刚":i>0&&i<3600?Math.ceil(i/60)+"分钟前":i>=3600&&i<86400?Math.floor(i/3600)+"小时前":i>=86400&&i<259200?Math.floor(i/86400)+"天前":e.slice(0,4)+"."+e.slice(5,7)+"."+e.slice(8,10)}var a,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=getApp(),o=require("../../utils/util.js"),s=require("../../utils/api.js"),r=require("../../utils/reg.js"),d=require("../../utils/common.js"),l=require("../../utils/tripledes.js"),c=[],u=require("../../utils/hotActive.js").hotActive,g=require("../../utils/albumsjump.js").albumsjump,m=wx.createInnerAudioContext();Page((a={data:{showLikeSuccessModel:!1,isFirstLike:!1,eventinfo:"",bigpic:"",showLikeBoxState:!1,fromMon:!1,showPage:!0,waitingState:!0,showComInput:!1,scrollView:"",showPlayVideoModal:!1,showTop:!0,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,showProgress:!1,progress:0,isShowEnterAlbumButton:!0,showLoadingImg:!1,loadingImgOrText:!0,showFunModel:!1,showAuthPic:!1,authpic:{belowImgUrl:"http://oibl5dyji.bkt.clouddn.com/0408_default.png"},addpicModal:!1,clickGroups:[{imgUrl:"http://oibl5dyji.bkt.clouddn.com/stories_cup_plus@2x.png",title:"故事集",openUrl:"/package/stories/pages/make/makeStory"}],useid:wx.getStorageSync("userid")},onLoad:function(e){t=this,n.stat.statpv({route:this.route,options:e}),this.fromSource=e.fromSource,this.fromState=!0;var t=this;if(!e.eid){var a=decodeURIComponent(e.scene);if(e={},a.length>0)for(var i=a.split("&"),s=0;s<i.length;s++)e[i[s].split("=")[0]]=i[s].split("=")[1]}t.groupNewType=e.groupNewType,e.version&&(this.version=e.version),e.port&&(this.port=e.port,n.globalData.port=e.port,this.setData({port:e.port})),e.fromUserID&&(this.fromUserID=e.fromUserID),e.fromSpaceID&&(this.fromSpaceID=e.fromSpaceID),e.fromEventID&&(this.fromEventID=e.fromEventID),wx.getStorageSync("userInfo")||(this.setData({showAuthPic:!0}),o.getAuthPic("event",0,function(e){t.setData({authpic:e})})),this.lastPage=e.lastPage,this.lastPage=this.lastPage||"null",this.isSubmit=1,e.efrom&&(t.efrom=e.efrom,t.setData({efrom:e.efrom})),"share"!=t.efrom&&"moment"!=t.efrom&&"notification"!=t.efrom&&"StoriesLanding"!=t.efrom||t.setData({fromMon:!0}),t.eid=e.eid,this.a=e.dateindex,this.b=e.rowindex,n.fromlast=1,this.commentedUserid=10,e.fm&&this.setData({fm:e.fm}),"homepage"!==e.lastPage&&"mymemory"!=this.efrom&&"personalPage"!==e.lastPage&&"commetmsg"!=this.efrom&&"likemsg"!=this.efrom||this.setData({isShowEnterAlbumButton:!1})},onShow:function(){var e=this,t=this.version?this.version:"",a=this.port?this.port:"",i=this.fromUserID?this.fromUserID:0,r=this.fromSpaceID?this.fromSpaceID:0,d=this.fromEventID?this.fromEventID:0;(e=this).inBlackList=1,n.getUserInfo(function(t){if(e.setData({showAuthPic:!1}),1==e.isSubmit){e.enterCurrentTimestamp=(new Date).getTime();var i="null";e.data.eventinfo&&1==e.data.eventinfo.gOrigin?i="true":e.data.eventinfo&&1!=e.data.eventinfo.gOrigin&&(i="false");var r={basicInfo:{userid:t.userid,source:a,"isActivityAlbum ":i,"lastPage ":e.lastPage,timestamp:e.enterCurrentTimestamp,identification:t.userid+"_"+n.enterTimestamp},type:"enter",data:{page:{name:"eventDetail",page_identification:t.userid+"_"+e.enterCurrentTimestamp}}};0==n.sendValue&&o.sendData(t.userid,r),e.button=[]}else e.isSubmit=1;e.fromState?("yes"==t.isnew&&(n.isNewUser=!0),null!=wx.getStorageSync("userInfo").uLockPass&&n.globalData.pwdState&&wx.navigateTo({url:"/pages/others/password/password?setPwd=shuru"}),e.eid?(e.isBlackList(t.userid),e.userid=t.userid,wx.request({url:s.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(i){if(0==i.data.code&&i.data.data[0].openloading){console.log(i.data.data[0].openloading);var n=parseInt(5*Math.random()+5);return e.setData({waitingState:!1,secondNum:n,secondEnd:!0}),void(e.timer3=setInterval(function(){var t=e.data.secondNum;t<=0?(clearInterval(e.timer3),e.timer3=null,e.setData({secondEnd:!1})):(t--,e.setData({secondNum:t}))},1e3))}console.log("onShow:333"),e.getEventValue(t,a)}}),n.getshowState(function(t){e.setData({showpuzze:t})})):wx.showModal({title:"提示",content:"获取动态详情id不成功，请重试",showCancel:!1,success:function(e){wx.reLaunch({url:"/pages/index/index?lastPage=eventDetail"})}})):setTimeout(function(){e.fromState=!0},100)},t,a,i,r,d,"eventdetail",function(){e.setData({showAuthPic:!1})}),wx.getStorage({key:"firstJoin",success:function(e){console.log(e.data)},fail:function(t){wx.setStorage({key:"firstJoin",data:"value"}),e.setData({isFirstLike:!0})}})},onReady:function(){var e=this;m.onError(function(t){wx.showToast({title:"语音播放错误",duration:1e3}),e.data.eventinfo.isAudioPlay=!1,e.setData({eventinfo:e.data.eventinfo})}),m.onEnded(function(t){e.data.eventinfo.isAudioPlay=!1,e.setData({eventinfo:e.data.eventinfo})})},onHide:function(){1==this.isSubmit&&(console.log("event_hide"),this.sendLeaveData())},onUnload:function(){this.sendLeaveData()},sendLeaveData:function(){var e=this,t=this.port?this.port:"",a=wx.getStorageSync("userid"),i=(new Date).getTime()-e.enterCurrentTimestamp,s="null";e.data.eventinfo&&1==e.data.eventinfo.gOrigin?s="true":e.data.eventinfo&&1!=e.data.eventinfo.gOrigin&&(s="false");var r={basicInfo:{userid:a,source:t," isActivityAlbum ":s,"lastPage ":e.lastPage,timestamp:(new Date).getTime(),identification:a+"_"+n.enterTimestamp},type:"leave",data:{page:{name:"eventDetail",page_identification:a+"_"+e.enterCurrentTimestamp},botton:e.button,time:i}};0==n.sendValue&&o.sendData(a,r)},refresh:function(){var e=this.version?this.version:"",t=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,i=this.fromSpaceID?this.fromSpaceID:0,o=this.fromEventID?this.fromEventID:0,r=this;n.getUserInfo(function(e){r.userid=e.userid,wx.request({url:s.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(a){if(console.log(a),0==a.data.code&&a.data.data[0].canlogin){console.log(a.data.data[0].canlogin);var i=parseInt(5*Math.random()+5);return r.setData({waitingState:!1,secondNum:i,secondEnd:!0}),void(r.timer3=setInterval(function(){var e=r.data.secondNum;e<=0?(clearInterval(r.timer3),r.timer3=null,r.setData({secondEnd:!1})):(e--,r.setData({secondNum:e}))},1e3))}r.setData({waitingState:!0}),console.log("refresh:111"),r.getEventValue(e,t)}}),n.getshowState(function(e){r.setData({showpuzze:e})})},e,t,a,i,o,"eventdetail")},getEventValue:function(e,a){var i=this;i.UserInfo=e,i.nb=a,wx.request({url:s.getUrl("YinianProject/newEvents/dynamicDetails"),data:{eid:i.eid,source:"小程序",userid:e.userid},success:function(n){if(console.log("数据：",n),200==n.statusCode){if(1027==n.data.code){i.setData({showPage:!1});var s="返回相册";return"commetmsg"!=i.efrom&&"likemsg"!=i.efrom||(s="返回"),void wx.showModal({title:"提示",content:"动态已被删除",showCancel:!1,confirmText:s,success:function(e){e.confirm&&("share"==i.efrom?wx.reLaunch({url:"/pages/index/index?lastPage=eventDetail"}):wx.navigateBack({delta:1}))}})}if(0==n.data.code){i.allPicList=n.data.data[0].picList;var r=n.data.data[0];if(r.comments.forEach(function(e){e.ctime=e.ctime.slice(5,16)}),0!=r.eMain&&4!=r.eMain||(r.picList=i.allPicList.slice(0,9)),6==r.eMain&&(r.picList=i.allPicList.slice(0,11),r.publishLength=r.publishUsers.length,r.publishUsers.length>6&&(r.publishUsers=r.publishUsers.slice(0,6))),i.groupid=r.egroupid,i.state=r.elevel,r.time=t(r.euploadtime),r.isAudioPlay=!1,i.setData({allPicLength:i.allPicList.length||0,eventinfo:r,state:i.state,bigpic:4==r.eMain?r.picList[0].poriginal:0==r.eMain?r.picList[0].midThumbnail:"",bigpic2:0==r.eMain?r.picList[0].midThumbnail:"",placehold:"对ta说点啥...",inputfocus:!1,gcreator:r.gcreator,userid:e.userid,scrollView:"",showLoadingImg:!1,loadingImgOrText:!0,showProgress:!1,groupNewType:r.groupNewType}),i.isloading=!1,"share"==i.efrom){var d=r.groupNewType;2==d||3==d||4==d||5==d||11==d||o.wxreq({pathname:"YinianProject/yinian/joinGroupWithEncryption",data:{userid:l.encryptByDESModeCBC(e.userid),groupid:l.encryptByDESModeCBC(r.egroupid),port:a}})}}}else wx.showModal({title:"提示",content:"获取动态数据失败！请稍后重试",showCancel:!1,success:function(e){wx.reLaunch({url:"/pages/index/index?lastPage=eventDetail"})}})}})},commentLoading:function(){if(this.data.eventinfo&&this.data.eventinfo.comments.length>0){var e=this;if(this.isloading)return;this.isloading=!0,this.setData({showLoadingImg:!0,loadingImgOrText:!0}),wx.request({url:s.getUrl("YinianProject/event/GetCommentByPaged"),data:{eid:e.eid,type:"loading",cid:e.data.eventinfo.comments[e.data.eventinfo.comments.length-1].cid},success:function(t){console.log(t),0==t.data.code?0==(t=t.data).data.length?e.setData({showLoadingImg:!0,loadingImgOrText:!1}):(t.data.forEach(function(t){t.ctime=t.ctime.slice(5,16),e.data.eventinfo.comments.push(t)}),e.isloading=!1,e.setData({eventinfo:e.data.eventinfo,showLoadingImg:!1})):(e.isloading=!1,e.setData({showLoadingImg:!1}))},fail:function(){e.isloading=!1,e.setData({showLoadingImg:!1})}})}},scrollTop:function(e){var t=750/n.globalData.systemInfo.windowWidth,a=e.detail.scrollTop;a>118/t?this.data.showTop&&this.setData({showTop:!1}):this.data.showTop||this.setData({showTop:!0})},laodMorePic:function(e){var t=this,a=e.currentTarget.dataset.omain,i=t.data.eventinfo.picList.length;i>=t.data.allPicLength||(i+="6"==a?12:9,t.data.eventinfo.picList=t.allPicList.slice(0,i),t.setData({eventinfo:t.data.eventinfo}))},isBlackList:function(e){var t=this;o.wxreq({pathname:"YinianProject/user/inBlackList",data:{userid:e}}).then(function(e){0==e.code?t.inBlackList=e.data[0].inBlackList:console.log("调取黑名单失败")})},closeFunModel:function(){this.setData({showLikeBoxState:!1})},prewBigImg:function(e){var t=e.currentTarget.dataset.sel,a=this;!a.data.eventinfo||!a.data.eventinfo.picList||a.data.eventinfo.picList.length<=0||(wx.setStorageSync("lookImgs",a.data.eventinfo.picList),this.fromState=!1,wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+t}))},toAnotherApp:function(){wx.navigateToMiniProgram({appId:"wx228859fda649194f",path:"pages/index/index",success:function(e){console.log(e)}})},showcode:function(){var e=this;e.eid?(e.fromState=!1,wx.showToast({title:"正在获取二维码",icon:"loading",duration:6e3,mask:!0}),wx.request({url:s.getUrl("YinianProject/yinian/CreateSmallAppPlan2QRCode"),data:{id:e.eid,type:"eventdetail2"},success:function(e){console.log(e);var t=e.data.data[0].QRCodeURL;wx.hideToast(),wx.previewImage({urls:[t]})}})):wx.showModal({title:"提示",content:"获取动态数据不成功,请稍后再试",showCancel:!1})},setbigpic:function(e){var t=this;this.setData({bigpic:t.data.eventinfo.picList[e.currentTarget.dataset.index].midThumbnail,bigpic2:t.data.eventinfo.picList[e.currentTarget.dataset.index].midThumbnail})},seeBigVideo:function(e){var t=e.currentTarget.dataset.url;wx.setStorageSync("videourl",t),wx.navigateTo({url:"/pages/viewscoll/bigvideo/bigvideo",success:function(){this.fromState=!1}.bind(this)})},showLikeBox:function(){this.data.eventinfo&&(this.eid?this.setData({showLikeBoxState:!this.data.showLikeBoxState}):wx.showModal({title:"提示",content:"获取动态数据不成功,请稍后再试",showCancel:!1}))},toSharePage:function(e){var t=this;this.fromState=!1;var a=this.data.eventinfo.picList,i=this.data.eventinfo.eMain,n=this.data.eventinfo.egroupid,s=this.data.eventinfo.eid,r=wx.getStorageSync("userid")||0;o.countOperation("eventdetail",n,r,""),wx.setStorageSync("sharePagePic",a),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=eventDetail&clickfrom=eid&clickRecord=eventdetail&eid="+s+"&eMain="+i+"&groupid="+n+"&gOrigin="+this.data.eventinfo.gOrigin+"&groupNewType="+t.groupNewType})},like:function(e){if(this.data.eventinfo){var t=e.currentTarget.dataset.likecatagry,a=this.data.eventinfo.eid,i=this,s=e.detail.formId;if(console.log(s),t){if(i.isLikepushId(),u(wx.getStorageSync("userid"),wx.getStorageSync("groupid"),"like"),i.setData({showLikeBoxState:!1}),i.data.eventinfo.like.push({likeID:0,likeUserID:n.globalData.userInfo.userid,likeStatus:"like",upic:n.globalData.userInfo.avatarUrl,unickname:n.globalData.userInfo.nickName}),i.data.eventinfo.likeCnt=parseInt(i.data.eventinfo.likeCnt)+1,i.data.eventinfo.likeUser=1,i.setData({eventinfo:i.data.eventinfo}),"viewscoll"==i.efrom||"grouptypescoll"==i.efrom){console.log("viewscoll");var r=getCurrentPages(),d=r[r.length-2].data.eventlist;d&&d.forEach(function(e){e.list[0].eid==i.eid&&(e.list[0].like.push({likeID:0,likeUserID:n.globalData.userInfo.userid,likeStatus:"like",upic:n.globalData.userInfo.avatarUrl,unickname:n.globalData.userInfo.nickName}),e.list[0].likeUser=1,e.list[0].likeCnt=parseInt(e.list[0].likeCnt)+1)}),r[r.length-2].setData({eventlist:d})}else if("mymemory"==i.efrom){console.log("mymemory");var l=getCurrentPages(),c=l[l.length-2].data.eventlist;c&&(c.forEach(function(e){console.log(e),e.eid==i.eid&&(e.likeUser=1,e.likeCnt=parseInt(e.likeCnt)+1)}),l[l.length-2].setData({eventlist:c}))}else if("personalPage"==i.efrom){var g=getCurrentPages();g[g.length-2].uLike.eid=i.eid}i.setData({showLikeSuccessModel:!0}),o.wxreq({pathname:"YinianProject/yinian/AttachOrRemoveExpressionByLkNew",data:{type:t,userid:n.globalData.userInfo.userid,eid:a,formID:s}}).then(function(e){console.log(e)})}}},comment:function(e){var t=this,a=e.currentTarget.dataset.index,i=this.data.eventinfo.comments[a];i.commentUser.userid==this.userid?(this.commentedUserid=10,this.commentedname="系统消息",this.setData({placehold:"说点什么..."}),wx.showModal({title:"提示",content:"删除此条评论？",success:function(e){e.confirm&&o.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:i.cid}}).then(function(e){if("success"==e.msg){t.data.eventinfo.comments.splice(a,1),t.setData({eventinfo:t.data.eventinfo});var i=t.data.eventinfo.comments.length;if("viewscoll"==t.efrom||"grouptypescoll"==t.efrom){var n=getCurrentPages(),o=n[n.length-2].data.eventlist;o.forEach(function(e,n){e.list[0].eid==t.data.eventinfo.eid&&(e.list[0].comments.splice(i-a,1),e.list[0].commentCnt--)}),n[n.length-2].setData({eventlist:o})}else if("mymemory"==t.efrom){var s=getCurrentPages(),r=s[s.length-2].data.eventlist;r.forEach(function(e,n){e.eid==t.data.eventinfo.eid&&(e.comments.splice(i-a,1),e.commentCnt--)}),s[s.length-2].setData({eventlist:r})}else if("personalPage"==t.efrom){var d=getCurrentPages(),l=d[d.length-2];l.delMultipleComment.eid=t.eid,l.delMultipleComment.cids.push(longCid)}}})}})):(this.commentedUserid=i.commentUser.userid,this.commentedname=i.commentUser.unickname,this.setData({showComInput:!0,placehold:"@"+i.commentUser.unickname,inputfocus:!0}))},longPressDelete:function(e){var t=this,a=e.currentTarget.dataset.longcid,i=e.currentTarget.dataset.longeid,n=e.currentTarget.dataset.index;wx.showModal({title:"提示",content:"是否删除该条评论",success:function(e){e.confirm&&o.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:a}}).then(function(e){if("success"==e.msg)if(t.data.eventinfo.comments.splice(n,1),t.setData({eventinfo:t.data.eventinfo}),"viewscoll"==t.efrom||"grouptypescoll"==t.efrom){var o=getCurrentPages(),s=o[o.length-2].data.eventlist;s.forEach(function(e,t){e.list[0].eid==i&&(e.list[0].comments.splice(n,1),e.list[0].commentCnt--)}),o[o.length-2].setData({eventlist:s})}else if("mymemory"==t.efrom){var r=getCurrentPages(),d=r[r.length-2].data.eventlist;d.forEach(function(e,t){e.eid==i&&(e.comments.splice(n,1),e.commentCnt--)}),r[r.length-2].setData({eventlist:d})}else if("personalPage"==t.efrom){var l=getCurrentPages(),c=l[l.length-2];c.delMultipleComment.eid=t.eid,c.delMultipleComment.cids.push(a)}})}})},delete_event:function(){if((e=this).data.eventinfo){var e=this;wx.showModal({title:"删除动态",content:"确定删除此条动态吗？",confirmColor:"#353535",success:function(t){t.confirm&&(wx.showToast({title:"正在删除",icom:"loading",duration:1e4}),o.wxreq({pathname:"YinianProject/yinian/DeleteEvent",data:{userid:wx.getStorageSync("userid"),eventId:e.data.eventinfo.eid}}).then(function(t){if(wx.hideToast(),"success"==t.msg)if(wx.showToast({title:"删除成功",icon:"success",duration:2e3}),"share"!=e.efrom){if("grouptypescoll"==e.efrom){var a=getCurrentPages(),i=a[a.length-2].data.eventlist;i&&i.forEach(function(t,a){t.list[0].eid==e.eid&&i.splice(a,1)}),a[a.length-2].setData({eventlist:i})}wx.navigateBack({delta:1})}else g({groupNewType:e.data.eventinfo.groupNewType,data:{groupid:e.data.eventinfo.egroupid},navigator:"reLaunch"})}))}})}},maketop:function(){var e=this,t=1==this.state?"cancel":"stick",a=1==this.state?"取消置顶":"置顶";wx.showModal({title:"提示",content:"是否"+a+"此动态",success:function(i){i.confirm&&o.wxreq({pathname:"YinianProject/yinian/ModifyEventLevel",data:{userid:e.userid,groupid:wx.getStorageSync("groupid")||e.data.eventinfo.egroupid,eid:e.eid,type:t}}).then(function(t){if("success"==t.msg){wx.showToast({title:a+"成功"});if(e.data.eventinfo.elevel=1==e.data.eventinfo.elevel?"0":"1",e.state=1==e.state?"0":"1",e.setData({state:1==e.data.state?"0":"1",showLikeBoxState:!1,eventinfo:e.data.eventinfo,showFunModel:!1}),"viewscoll"==e.efrom||"grouptypescoll"==e.efrom){var i=getCurrentPages(),n=i[i.length-2].data.eventlist;n[e.a].list[e.b].elevel=e.data.eventinfo.elevel,i[i.length-2].setData({eventlist:n})}else if("personalPage"==e.efrom){var o=getCurrentPages(),s=o[o.length-2];s.uStick.eid=e.eid,s.uStick.isStick=e.state}}})}})},dorecommend:function(){var e=this,t=1==this.data.eventinfo.isRecommend?"cancel":"recommend",a=1==this.data.eventinfo.isRecommend?"取消推荐":"推荐";wx.showModal({title:"提示",content:"是否"+a+"此动态",success:function(i){i.confirm&&o.wxreq({pathname:"YinianProject/space/RecommendAndCancel",data:{recommendUserID:e.userid,fromGroupID:wx.getStorageSync("groupid"),eid:e.eid,type:t}}).then(function(t){"success"==t.msg&&(wx.showToast({title:a+"成功"}),e.data.eventinfo.isRecommend=1==e.data.eventinfo.isRecommend?"0":"1",e.setData({eventinfo:e.data.eventinfo}))})}})},checkchange:function(e){var t=e.detail.value.trim().length>0;this.setData({contentCurrent:t})},writeCom:function(){this.setData({showComInput:!0,inputfocus:!0,placehold:"对ta说点啥..."})},hiddenWrite:function(){this.setData({showComInput:!1})},toTalkBox:function(){this.setData({scrollView:"talkBox"})},sendcomment:function(e){var a=e.detail.formId,i=e.detail.value.content;if(0!=i.length)if(r.testStr(i))wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1});else{wx.showToast({title:"正在发布",icon:"loading",duration:2e3});var s=this;s.isCommentpushId(),u(s.userid,wx.getStorageSync("groupid"),"comment"),o.wxreq({pathname:"YinianProject/yinian/SendComment1",data:{commentUserId:s.userid,commentedUserId:s.commentedUserid,eventId:s.eid,content:i,formID:a}}).then(function(e){var a=s.data.eventinfo,r=o.formatTimeWithSecond(new Date).slice(5,16);if(0==e.code){var d={cid:e.data[0].cid,commentedUser:{userid:s.commentedUserid,unickname:s.commentedname},commentUser:{userid:s.userid,unickname:n.globalData.userInfo.nickName,upic:n.globalData.userInfo.avatarUrl},ccontent:i,resultTime:t(r),ctime:r};if(a.comments.unshift(d),a.commentCnt=parseInt(a.commentCnt)+1,wx.showToast({title:"发表成功",icon:"success",duration:2e3}),s.setData({showComInput:!1,eventinfo:a,value:"",contentCurrent:!1,placehold:"说点什么..."}),"viewscoll"==s.efrom||"grouptypescoll"==s.efrom){var l=getCurrentPages(),c=l[l.length-2].data.eventlist;c&&c.forEach(function(e){e.list[0].eid==s.eid&&(e.list[0].comments.unshift(d),e.list[0].commentCnt++)}),l[l.length-2].setData({eventlist:c})}else if("mymemory"==s.efrom){var u=getCurrentPages(),g=u[u.length-2].data.eventlist;g&&g.forEach(function(e){e.eid==s.eid&&(e.comments.unshift(d),e.commentCnt++)}),u[u.length-2].setData({eventlist:g})}else if("personalPage"==s.efrom){var m={};m.eid=s.eid,m.text=i,m.cid=e.data[0].cid,console.log("_this.commentedUserid",s.commentedUserid),s.commentedUserid&&10!=s.commentedUserid&&(m.replyUserId=s.commentedUserid,m.nick=s.commentedname);var h=getCurrentPages();h[h.length-2].multipleComment.push(m)}s.commentedUserid=10,s.commentedname="系统消息"}})}else wx.showModal({title:"提示",content:"请先输入评论内容",showCancel:!1})},stop:function(){},prevent:function(){this.fromState=!1},toBusinessGroup:function(){this.fromState=!1;var e=this;"object"==i(this.button)&&this.button.push({name:"banner"}),0==e.data.eventinfo.joinGroupOrList?wx.navigateTo({url:"/pages/others/businessgroup/businessgroup?lastPage=eventDetail&listid="+e.data.eventinfo.listid}):1==e.data.eventinfo.joinGroupOrList&&wx.navigateTo({url:"/pages/viewscoll/viewscoll?lastPage=eventDetail&from=grouplist&groupid="+e.data.eventinfo.joinGroupid})},goToBusinessGroup:function(){this.fromState=!1,"object"==i(this.button)&&this.button.push({name:"watchMore"}),wx.navigateTo({url:"/pages/others/businessgroup/businessgroup?lastPage=eventDetail&listid="+this.data.eventinfo.listid})},toBusinessViewscoll:function(e){var t=e.currentTarget.dataset.selgroupid,a=e.currentTarget.dataset.grouptype;t?g({groupNewType:a,data:{from:"grouplist",groupid:t},navigator:"navigate"}):wx.showModal({title:"提示",content:"获取相册信息失败！请重试",showCancel:!1})},goGroup:function(){var e=this;if(e.data.fromMon){var t=e.data.eventinfo.groupNewType;g({groupNewType:t,data:{groupid:e.data.eventinfo.egroupid},navigator:"redirect"})}else wx.navigateBack({delta:1})},toEditPhotos:function(e){console.log(e.currentTarget.dataset),this.setData({showFunModel:!1});var t=e.currentTarget.dataset.photosource,a=this.allPicList,i=4==this.data.eventinfo.eMain?"video":"pic";if("photosync"==t){if(0==this.inBlackList)return void wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1});this.fromState=!1}else if("download"==t)this.fromState=!1;else{if("delete"!=t)return;var n=this.data.eventinfo.eMain;if(1==n||2==n)return void this.delete_event()}wx.setStorageSync("editPhotoArr",a),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+t+"&isPicOrVideo="+i})},playVideo:function(){this.setData({showPlayVideoModal:!0})},closePlayVideoModal:function(){this.setData({showPlayVideoModal:!1})},audioPlay:function(e){var t=e.currentTarget.dataset.audiourl;t&&(m.src=t,m.play(),this.data.eventinfo.isAudioPlay=!0,this.setData({eventinfo:this.data.eventinfo}))},audioPause:function(){m.pause(),this.data.eventinfo.isAudioPlay=!1,this.setData({eventinfo:this.data.eventinfo})},toMakeGroup:function(){wx.navigateTo({url:"/pages/makegroup/makegroup"})},toHomePage:function(){wx.switchTab({url:"/pages/index/index"})},onShareAppMessage:function(){var e=this;e.fromState=!1,this.isSubmit=2;var t=this.eid||0,a=wx.getStorageSync("userInfo").userid||0;return{title:"您的好友"+wx.getStorageSync("userInfo").nickName+"为你分享了TA的照片,来看看吧!",desc:"这里面有几张我很喜欢的照片，快来看看你喜欢嘛？",path:"/pages/eventdetail/eventdetail?port=动态详情分享&efrom=share&eid="+e.eid+"&fromEventID="+t+"&fromUserID="+a,success:function(){n.stat.request({operation:"shareCallback"})}}},showlike:function(e){wx.getStorageSync("userid")?this.setData({showFunModel:!0}):wx.showToast({title:"获取用户信息失败"})}},e(a,"closeFunModel",function(){this.setData({showFunModel:!1})}),e(a,"isLikepushId",function(){""!=n.pushId&&void 0!=n.pushId&&o.wxreq({pathname:"YinianProject/ep/isLike",data:{pushId:n.pushId,port:n.globalData.port}}).then(function(e){},function(e){})}),e(a,"isCommentpushId",function(){""!=n.pushId&&void 0!=n.pushId&&o.wxreq({pathname:"YinianProject/ep/isComment",data:{pushId:n.pushId,port:n.globalData.port}}).then(function(e){},function(e){})}),e(a,"toStories",function(){var e={userId:wx.getStorageSync("userid")||0,operation:"eventDetailToStories",userLastLoginTime:n.enterTime};n.stat.request(e);this.data.eventinfo.groupNewType;var t=this.eid,a=this.data.eventinfo.egroupid;wx.navigateTo({url:"/pages/stories/pages/index/index?eId="+t+"&groupId="+a})}),e(a,"enterpreview",function(e){console.log(e);var t=e.currentTarget.dataset;wx.setStorageSync("lookImgs",t.arr),wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+t.index})}),e(a,"addImagess",function(e){var t=this;console.log(e),t.oMain=e.currentTarget.dataset.emain,t.eid=e.currentTarget.dataset.eid,t.setData({addpicModal:!0})}),e(a,"uploadpic",function(e){var t=this;if(wx.getStorageSync("userid")){clearTimeout(t.timer),this.setData({fromlast:1}),this.loadImgStateNo=!0;var a;a="pai"==(e=e||event).currentTarget.dataset.pic?"camera":"album",t.fromState=!1,wx.chooseImage({count:9,sizeType:["original"],sourceType:[a],success:function(e){var a=e.tempFilePaths;wx.removeStorageSync("uploadchoosedpic"),wx.setStorage({key:"uploadchoosedpic",data:a,success:function(){t.setData({addModalOn:!1,fromlast:1}),t.loadImgStateNo=!0,t.closeModal(),t.addImgUploadevent()},fail:function(){wx.showToast({title:"保存图片临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})}),e(a,"addImgUploadevent",function(){var e=wx.getStorageSync("uploadchoosedpic"),t=this,a=[],i=e;t.setData({showProgress:!0,totalnum:e.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic"}),n.isUp=!0,c.length=0;wx.request({url:s.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(e){0===e.data.code?t.uploadFileEvent(e.data.data[0].token,i,a,"6"):(c.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),n.isUp=!1)},fail:function(e){c.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),n.isUp=!1}})}),e(a,"uploadFileEvent",function(e,t,a,i){var s=this;if(0==t.length)console.log(c),o.wxreq({pathname:"YinianProject/family/addPictureInIncident",data:{userid:wx.getStorageSync("userid"),groupid:s.groupid,eid:s.eid,picAddress:c.join(","),main:i}}).then(function(e){console.log(e),0==e.code?(c.length=0,n.isUp=!1,s.setData({upSteps:2,showProgress:!0,uploadnum:0,progress:0}),s.getEventValue(s.UserInfo,s.nb),setTimeout(function(){s.setData({upSteps:1,showProgress:!1,uploadnum:0,progress:0})},2e3)):(n.isUp=!1,c.length=0)}).catch(function(e){n.isUp=!1,c.length=0});else{var r=t.splice(0,1);s.uppic(e,r,t,a,i)}}),e(a,"uppic",function(e,t,a,i,o){var s=this,r=t[0],d=r.lastIndexOf("."),l=(new Date).getTime()+""+parseInt(1e8*Math.random()+1e8)+r.substring(d);wx.uploadFile({url:"https://upload.qiniup.com",filePath:r,name:"file",formData:{key:l,token:e},success:function(t){if(200!=t.statusCode)return c.length=0,n.isUp=!1,void s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var r=JSON.parse(t.data);c.push(r.key),s.setData({uploadnum:c.length,progress:parseInt(c.length/s.data.totalnum*100)}),s.uploadFileEvent(e,a,i,o)},fail:function(){c.length=0,n.isUp=!1,s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})}),e(a,"closeModal",function(){this.setData({addpicModal:!1})}),e(a,"jumptoManGod",function(e){var t=this;wx.navigateTo({url:"/pages/collegealbum/albumlist/index?gId=7200923"});var a=e.currentTarget.dataset.type,i="",o={operation:i="banner"==a?"likeBanner":"more"==a?"likeWatchMore":"likeQuickContact",userId:t.userid,groupId:t.groupid,groupNewType:40};n.stat.requestLove(o)}),e(a,"closeFirstLikeModel",function(){this.setData({isFirstLike:!1})}),e(a,"perent",function(){}),e(a,"closeLikeSuccessModel",function(){this.setData({showLikeSuccessModel:!1})}),e(a,"gotoStory",function(e){var t=this;console.log(e),"event"==e.currentTarget.event?n.stat.request({operation:"eventDetailMakeStory",userId:wx.getStorageSync("userid"),groupId:e.currentTarget.dataset.groupid,groupNewType:t.data.groupNewType}):n.stat.request({operation:"detailMakeStory",userId:wx.getStorageSync("userid"),groupId:e.currentTarget.dataset.groupid,groupNewType:t.data.groupNewType}),wx.request({url:s.host+"/YinianProject/story/createStory",data:{userId:wx.getStorageSync("userid")},success:function(a){console.log(a),0==a.data.code&&(wx.setStorageSync("storyId",a.data.data[0].storyId),wx.request({url:s.host+"/YinianProject/story/eventGenerateStory",data:{userId:wx.getStorageSync("userid"),eId:e.currentTarget.dataset.eid,storyId:wx.getStorageSync("storyId"),groupId:e.currentTarget.dataset.groupid},method:"GET",success:function(a){if(console.log(a),0===a.data.code){t.setData({playPhoto:!1});var i=d.getCurrentPageUrlWithArgs();console.log(i),wx.setStorageSync("skipUrl",i),"event"==e.currentTarget.event?wx.navigateTo({url:e.currentTarget.dataset.open+"?eId="+wx.getStorageSync("storyId")+"&groupid="+e.currentTarget.dataset.groupid+"&index=1&groupType="+t.data.groupNewType+"&action=4"}):wx.navigateTo({url:e.currentTarget.dataset.open+"?eId="+wx.getStorageSync("storyId")+"&groupid="+e.currentTarget.dataset.groupid+"&index=1&groupType="+t.data.groupNewType+"&action=1"})}},fail:function(e){}}))},fail:function(e){}})}),a)); 
 			}); 	require("pages/eventdetail/eventdetail.js");
 		__wxRoute = 'pages/eventdetail2/eventdetail2';__wxRouteBegin = true; 	define("pages/eventdetail2/eventdetail2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function t(e){var e=e.replace(/-/g,"/"),t=Date.parse(new Date(e));t/=1e3;var a=(new Date).getTime(),i=parseInt(a/1e3)-parseInt(t);return 0==i?"刚刚":i>0&&i<3600?Math.ceil(i/60)+"分钟前":i>=3600&&i<86400?Math.floor(i/3600)+"小时前":i>=86400&&i<259200?Math.floor(i/86400)+"天前":e.slice(0,4)+"."+e.slice(5,7)+"."+e.slice(8,10)}var a,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=getApp(),o=require("../../utils/util.js"),s=require("../../utils/api.js"),r=require("../../utils/reg.js"),d=require("../../utils/common.js"),l=require("../../utils/tripledes.js"),c=[],u=require("../../utils/hotActive.js").hotActive,g=require("../../utils/albumsjump.js").albumsjump,m=wx.createInnerAudioContext();Page((a={data:{showLikeSuccessModel:!1,isFirstLike:!1,eventinfo:"",bigpic:"",showLikeBoxState:!1,fromMon:!1,showPage:!0,waitingState:!0,showComInput:!1,scrollView:"",showPlayVideoModal:!1,showTop:!0,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,showProgress:!1,progress:0,isShowEnterAlbumButton:!0,showLoadingImg:!1,loadingImgOrText:!0,showFunModel:!1,showAuthPic:!1,authpic:{belowImgUrl:"http://oibl5dyji.bkt.clouddn.com/0408_default.png"},addpicModal:!1,clickGroups:[{imgUrl:"http://oibl5dyji.bkt.clouddn.com/stories_cup_plus@2x.png",title:"故事集",openUrl:"/package/stories/pages/make/makeStory"}],useid:wx.getStorageSync("userid")},onLoad:function(e){t=this,n.stat.statpv({route:this.route,options:e}),this.fromSource=e.fromSource,this.fromState=!0;var t=this;if(!e.eid){var a=decodeURIComponent(e.scene);if(e={},a.length>0)for(var i=a.split("&"),s=0;s<i.length;s++)e[i[s].split("=")[0]]=i[s].split("=")[1]}t.groupNewType=e.groupNewType,e.version&&(this.version=e.version),e.port&&(this.port=e.port,n.globalData.port=e.port,this.setData({port:e.port})),e.fromUserID&&(this.fromUserID=e.fromUserID),e.fromSpaceID&&(this.fromSpaceID=e.fromSpaceID),e.fromEventID&&(this.fromEventID=e.fromEventID),wx.getStorageSync("userInfo")||(this.setData({showAuthPic:!0}),o.getAuthPic("event",0,function(e){t.setData({authpic:e})})),this.lastPage=e.lastPage,this.lastPage=this.lastPage||"null",this.isSubmit=1,e.efrom&&(t.efrom=e.efrom,t.setData({efrom:e.efrom})),"share"!=t.efrom&&"moment"!=t.efrom&&"notification"!=t.efrom&&"StoriesLanding"!=t.efrom||t.setData({fromMon:!0}),t.eid=e.eid,this.a=e.dateindex,this.b=e.rowindex,n.fromlast=1,this.commentedUserid=10,e.fm&&this.setData({fm:e.fm}),"homepage"!==e.lastPage&&"mymemory"!=this.efrom&&"personalPage"!==e.lastPage&&"commetmsg"!=this.efrom&&"likemsg"!=this.efrom||this.setData({isShowEnterAlbumButton:!1})},onShow:function(){var e=this,t=this.version?this.version:"",a=this.port?this.port:"",i=this.fromUserID?this.fromUserID:0,r=this.fromSpaceID?this.fromSpaceID:0,d=this.fromEventID?this.fromEventID:0;(e=this).inBlackList=1,n.getUserInfo(function(t){if(e.setData({showAuthPic:!1}),1==e.isSubmit){e.enterCurrentTimestamp=(new Date).getTime();var i="null";e.data.eventinfo&&1==e.data.eventinfo.gOrigin?i="true":e.data.eventinfo&&1!=e.data.eventinfo.gOrigin&&(i="false");var r={basicInfo:{userid:t.userid,source:a,"isActivityAlbum ":i,"lastPage ":e.lastPage,timestamp:e.enterCurrentTimestamp,identification:t.userid+"_"+n.enterTimestamp},type:"enter",data:{page:{name:"eventDetail",page_identification:t.userid+"_"+e.enterCurrentTimestamp}}};0==n.sendValue&&o.sendData(t.userid,r),e.button=[]}else e.isSubmit=1;e.fromState?("yes"==t.isnew&&(n.isNewUser=!0),null!=wx.getStorageSync("userInfo").uLockPass&&n.globalData.pwdState&&wx.navigateTo({url:"/pages/others/password/password?setPwd=shuru"}),e.eid?(e.isBlackList(t.userid),e.userid=t.userid,wx.request({url:s.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(i){if(0==i.data.code&&i.data.data[0].openloading){console.log(i.data.data[0].openloading);var n=parseInt(5*Math.random()+5);return e.setData({waitingState:!1,secondNum:n,secondEnd:!0}),void(e.timer3=setInterval(function(){var t=e.data.secondNum;t<=0?(clearInterval(e.timer3),e.timer3=null,e.setData({secondEnd:!1})):(t--,e.setData({secondNum:t}))},1e3))}console.log("onShow:333"),e.getEventValue(t,a)}}),n.getshowState(function(t){e.setData({showpuzze:t})})):wx.showModal({title:"提示",content:"获取动态详情id不成功，请重试",showCancel:!1,success:function(e){wx.reLaunch({url:"/pages/index/index?lastPage=eventDetail"})}})):setTimeout(function(){e.fromState=!0},100)},t,a,i,r,d,"eventdetail",function(){e.setData({showAuthPic:!1})}),wx.getStorage({key:"firstJoin",success:function(e){console.log(e.data)},fail:function(t){wx.setStorage({key:"firstJoin",data:"value"}),e.setData({isFirstLike:!0})}})},onReady:function(){var e=this;m.onError(function(t){wx.showToast({title:"语音播放错误",duration:1e3}),e.data.eventinfo.isAudioPlay=!1,e.setData({eventinfo:e.data.eventinfo})}),m.onEnded(function(t){e.data.eventinfo.isAudioPlay=!1,e.setData({eventinfo:e.data.eventinfo})})},onHide:function(){1==this.isSubmit&&(console.log("event_hide"),this.sendLeaveData())},onUnload:function(){this.sendLeaveData()},sendLeaveData:function(){var e=this,t=this.port?this.port:"",a=wx.getStorageSync("userid"),i=(new Date).getTime()-e.enterCurrentTimestamp,s="null";e.data.eventinfo&&1==e.data.eventinfo.gOrigin?s="true":e.data.eventinfo&&1!=e.data.eventinfo.gOrigin&&(s="false");var r={basicInfo:{userid:a,source:t," isActivityAlbum ":s,"lastPage ":e.lastPage,timestamp:(new Date).getTime(),identification:a+"_"+n.enterTimestamp},type:"leave",data:{page:{name:"eventDetail",page_identification:a+"_"+e.enterCurrentTimestamp},botton:e.button,time:i}};0==n.sendValue&&o.sendData(a,r)},refresh:function(){var e=this.version?this.version:"",t=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,i=this.fromSpaceID?this.fromSpaceID:0,o=this.fromEventID?this.fromEventID:0,r=this;n.getUserInfo(function(e){r.userid=e.userid,wx.request({url:s.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(a){if(console.log(a),0==a.data.code&&a.data.data[0].canlogin){console.log(a.data.data[0].canlogin);var i=parseInt(5*Math.random()+5);return r.setData({waitingState:!1,secondNum:i,secondEnd:!0}),void(r.timer3=setInterval(function(){var e=r.data.secondNum;e<=0?(clearInterval(r.timer3),r.timer3=null,r.setData({secondEnd:!1})):(e--,r.setData({secondNum:e}))},1e3))}r.setData({waitingState:!0}),console.log("refresh:111"),r.getEventValue(e,t)}}),n.getshowState(function(e){r.setData({showpuzze:e})})},e,t,a,i,o,"eventdetail")},getEventValue:function(e,a){var i=this;i.UserInfo=e,i.nb=a,wx.request({url:s.getUrl("YinianProject/newEvents/dynamicDetails"),data:{eid:i.eid,source:"小程序",userid:e.userid},success:function(n){if(console.log("数据：",n),200==n.statusCode){if(1027==n.data.code){i.setData({showPage:!1});var s="返回相册";return"commetmsg"!=i.efrom&&"likemsg"!=i.efrom||(s="返回"),void wx.showModal({title:"提示",content:"动态已被删除",showCancel:!1,confirmText:s,success:function(e){e.confirm&&("share"==i.efrom?wx.reLaunch({url:"/pages/index/index?lastPage=eventDetail"}):wx.navigateBack({delta:1}))}})}if(0==n.data.code){i.allPicList=n.data.data[0].picList;var r=n.data.data[0];if(r.comments.forEach(function(e){e.ctime=e.ctime.slice(5,16)}),0!=r.eMain&&4!=r.eMain||(r.picList=i.allPicList.slice(0,9)),6==r.eMain&&(r.picList=i.allPicList.slice(0,11),r.publishLength=r.publishUsers.length,r.publishUsers.length>6&&(r.publishUsers=r.publishUsers.slice(0,6))),i.groupid=r.egroupid,i.state=r.elevel,r.time=t(r.euploadtime),r.isAudioPlay=!1,i.setData({allPicLength:i.allPicList.length||0,eventinfo:r,state:i.state,bigpic:4==r.eMain?r.picList[0].poriginal:0==r.eMain?r.picList[0].midThumbnail:"",bigpic2:0==r.eMain?r.picList[0].midThumbnail:"",placehold:"对ta说点啥...",inputfocus:!1,gcreator:r.gcreator,userid:e.userid,scrollView:"",showLoadingImg:!1,loadingImgOrText:!0,showProgress:!1,groupNewType:r.groupNewType}),i.isloading=!1,"share"==i.efrom){var d=r.groupNewType;2==d||3==d||4==d||5==d||11==d||o.wxreq({pathname:"YinianProject/yinian/joinGroupWithEncryption",data:{userid:l.encryptByDESModeCBC(e.userid),groupid:l.encryptByDESModeCBC(r.egroupid),port:a}})}}}else wx.showModal({title:"提示",content:"获取动态数据失败！请稍后重试",showCancel:!1,success:function(e){wx.reLaunch({url:"/pages/index/index?lastPage=eventDetail"})}})}})},commentLoading:function(){if(this.data.eventinfo&&this.data.eventinfo.comments.length>0){var e=this;if(this.isloading)return;this.isloading=!0,this.setData({showLoadingImg:!0,loadingImgOrText:!0}),wx.request({url:s.getUrl("YinianProject/event/GetCommentByPaged"),data:{eid:e.eid,type:"loading",cid:e.data.eventinfo.comments[e.data.eventinfo.comments.length-1].cid},success:function(t){console.log(t),0==t.data.code?0==(t=t.data).data.length?e.setData({showLoadingImg:!0,loadingImgOrText:!1}):(t.data.forEach(function(t){t.ctime=t.ctime.slice(5,16),e.data.eventinfo.comments.push(t)}),e.isloading=!1,e.setData({eventinfo:e.data.eventinfo,showLoadingImg:!1})):(e.isloading=!1,e.setData({showLoadingImg:!1}))},fail:function(){e.isloading=!1,e.setData({showLoadingImg:!1})}})}},scrollTop:function(e){var t=750/n.globalData.systemInfo.windowWidth,a=e.detail.scrollTop;a>118/t?this.data.showTop&&this.setData({showTop:!1}):this.data.showTop||this.setData({showTop:!0})},laodMorePic:function(e){var t=this,a=e.currentTarget.dataset.omain,i=t.data.eventinfo.picList.length;i>=t.data.allPicLength||(i+="6"==a?12:9,t.data.eventinfo.picList=t.allPicList.slice(0,i),t.setData({eventinfo:t.data.eventinfo}))},isBlackList:function(e){var t=this;o.wxreq({pathname:"YinianProject/user/inBlackList",data:{userid:e}}).then(function(e){0==e.code?t.inBlackList=e.data[0].inBlackList:console.log("调取黑名单失败")})},closeFunModel:function(){this.setData({showLikeBoxState:!1})},prewBigImg:function(e){var t=e.currentTarget.dataset.sel,a=this;!a.data.eventinfo||!a.data.eventinfo.picList||a.data.eventinfo.picList.length<=0||(wx.setStorageSync("lookImgs",a.data.eventinfo.picList),this.fromState=!1,wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+t}))},toAnotherApp:function(){wx.navigateToMiniProgram({appId:"wx228859fda649194f",path:"pages/index/index",success:function(e){console.log(e)}})},showcode:function(){var e=this;e.eid?(e.fromState=!1,wx.showToast({title:"正在获取二维码",icon:"loading",duration:6e3,mask:!0}),wx.request({url:s.getUrl("YinianProject/yinian/CreateSmallAppPlan2QRCode"),data:{id:e.eid,type:"eventdetail2"},success:function(e){console.log(e);var t=e.data.data[0].QRCodeURL;wx.hideToast(),wx.previewImage({urls:[t]})}})):wx.showModal({title:"提示",content:"获取动态数据不成功,请稍后再试",showCancel:!1})},setbigpic:function(e){var t=this;this.setData({bigpic:t.data.eventinfo.picList[e.currentTarget.dataset.index].midThumbnail,bigpic2:t.data.eventinfo.picList[e.currentTarget.dataset.index].midThumbnail})},seeBigVideo:function(e){var t=e.currentTarget.dataset.url;wx.setStorageSync("videourl",t),wx.navigateTo({url:"/pages/viewscoll/bigvideo/bigvideo",success:function(){this.fromState=!1}.bind(this)})},showLikeBox:function(){this.data.eventinfo&&(this.eid?this.setData({showLikeBoxState:!this.data.showLikeBoxState}):wx.showModal({title:"提示",content:"获取动态数据不成功,请稍后再试",showCancel:!1}))},toSharePage:function(e){var t=this;this.fromState=!1;var a=this.data.eventinfo.picList,i=this.data.eventinfo.eMain,n=this.data.eventinfo.egroupid,s=this.data.eventinfo.eid,r=wx.getStorageSync("userid")||0;o.countOperation("eventdetail",n,r,""),wx.setStorageSync("sharePagePic",a),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=eventDetail&clickfrom=eid&clickRecord=eventdetail&eid="+s+"&eMain="+i+"&groupid="+n+"&gOrigin="+this.data.eventinfo.gOrigin+"&groupNewType="+t.groupNewType})},like:function(e){if(this.data.eventinfo){var t=e.currentTarget.dataset.likecatagry,a=this.data.eventinfo.eid,i=this,s=e.detail.formId;if(console.log(s),t){if(i.isLikepushId(),u(wx.getStorageSync("userid"),wx.getStorageSync("groupid"),"like"),i.setData({showLikeBoxState:!1}),i.data.eventinfo.like.push({likeID:0,likeUserID:n.globalData.userInfo.userid,likeStatus:"like",upic:n.globalData.userInfo.avatarUrl,unickname:n.globalData.userInfo.nickName}),i.data.eventinfo.likeCnt=parseInt(i.data.eventinfo.likeCnt)+1,i.data.eventinfo.likeUser=1,i.setData({eventinfo:i.data.eventinfo}),"viewscoll"==i.efrom||"grouptypescoll"==i.efrom){console.log("viewscoll");var r=getCurrentPages(),d=r[r.length-2].data.eventlist;d&&d.forEach(function(e){e.list[0].eid==i.eid&&(e.list[0].like.push({likeID:0,likeUserID:n.globalData.userInfo.userid,likeStatus:"like",upic:n.globalData.userInfo.avatarUrl,unickname:n.globalData.userInfo.nickName}),e.list[0].likeUser=1,e.list[0].likeCnt=parseInt(e.list[0].likeCnt)+1)}),r[r.length-2].setData({eventlist:d})}else if("mymemory"==i.efrom){console.log("mymemory");var l=getCurrentPages(),c=l[l.length-2].data.eventlist;c&&(c.forEach(function(e){console.log(e),e.eid==i.eid&&(e.likeUser=1,e.likeCnt=parseInt(e.likeCnt)+1)}),l[l.length-2].setData({eventlist:c}))}else if("personalPage"==i.efrom){var g=getCurrentPages();g[g.length-2].uLike.eid=i.eid}i.setData({showLikeSuccessModel:!0}),o.wxreq({pathname:"YinianProject/yinian/AttachOrRemoveExpressionByLkNew",data:{type:t,userid:n.globalData.userInfo.userid,eid:a,formID:s}}).then(function(e){console.log(e)})}}},comment:function(e){var t=this,a=e.currentTarget.dataset.index,i=this.data.eventinfo.comments[a];i.commentUser.userid==this.userid?(this.commentedUserid=10,this.commentedname="系统消息",this.setData({placehold:"说点什么..."}),wx.showModal({title:"提示",content:"删除此条评论？",success:function(e){e.confirm&&o.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:i.cid}}).then(function(e){if("success"==e.msg){t.data.eventinfo.comments.splice(a,1),t.setData({eventinfo:t.data.eventinfo});var i=t.data.eventinfo.comments.length;if("viewscoll"==t.efrom||"grouptypescoll"==t.efrom){var n=getCurrentPages(),o=n[n.length-2].data.eventlist;o.forEach(function(e,n){e.list[0].eid==t.data.eventinfo.eid&&(e.list[0].comments.splice(i-a,1),e.list[0].commentCnt--)}),n[n.length-2].setData({eventlist:o})}else if("mymemory"==t.efrom){var s=getCurrentPages(),r=s[s.length-2].data.eventlist;r.forEach(function(e,n){e.eid==t.data.eventinfo.eid&&(e.comments.splice(i-a,1),e.commentCnt--)}),s[s.length-2].setData({eventlist:r})}else if("personalPage"==t.efrom){var d=getCurrentPages(),l=d[d.length-2];l.delMultipleComment.eid=t.eid,l.delMultipleComment.cids.push(longCid)}}})}})):(this.commentedUserid=i.commentUser.userid,this.commentedname=i.commentUser.unickname,this.setData({showComInput:!0,placehold:"@"+i.commentUser.unickname,inputfocus:!0}))},longPressDelete:function(e){var t=this,a=e.currentTarget.dataset.longcid,i=e.currentTarget.dataset.longeid,n=e.currentTarget.dataset.index;wx.showModal({title:"提示",content:"是否删除该条评论",success:function(e){e.confirm&&o.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:a}}).then(function(e){if("success"==e.msg)if(t.data.eventinfo.comments.splice(n,1),t.setData({eventinfo:t.data.eventinfo}),"viewscoll"==t.efrom||"grouptypescoll"==t.efrom){var o=getCurrentPages(),s=o[o.length-2].data.eventlist;s.forEach(function(e,t){e.list[0].eid==i&&(e.list[0].comments.splice(n,1),e.list[0].commentCnt--)}),o[o.length-2].setData({eventlist:s})}else if("mymemory"==t.efrom){var r=getCurrentPages(),d=r[r.length-2].data.eventlist;d.forEach(function(e,t){e.eid==i&&(e.comments.splice(n,1),e.commentCnt--)}),r[r.length-2].setData({eventlist:d})}else if("personalPage"==t.efrom){var l=getCurrentPages(),c=l[l.length-2];c.delMultipleComment.eid=t.eid,c.delMultipleComment.cids.push(a)}})}})},delete_event:function(){if((e=this).data.eventinfo){var e=this;wx.showModal({title:"删除动态",content:"确定删除此条动态吗？",confirmColor:"#353535",success:function(t){t.confirm&&(wx.showToast({title:"正在删除",icom:"loading",duration:1e4}),o.wxreq({pathname:"YinianProject/yinian/DeleteEvent",data:{userid:wx.getStorageSync("userid"),eventId:e.data.eventinfo.eid}}).then(function(t){if(wx.hideToast(),"success"==t.msg)if(wx.showToast({title:"删除成功",icon:"success",duration:2e3}),"share"!=e.efrom){if("grouptypescoll"==e.efrom){var a=getCurrentPages(),i=a[a.length-2].data.eventlist;i&&i.forEach(function(t,a){t.list[0].eid==e.eid&&i.splice(a,1)}),a[a.length-2].setData({eventlist:i})}wx.navigateBack({delta:1})}else g({groupNewType:e.data.eventinfo.groupNewType,data:{groupid:e.data.eventinfo.egroupid},navigator:"reLaunch"})}))}})}},maketop:function(){var e=this,t=1==this.state?"cancel":"stick",a=1==this.state?"取消置顶":"置顶";wx.showModal({title:"提示",content:"是否"+a+"此动态",success:function(i){i.confirm&&o.wxreq({pathname:"YinianProject/yinian/ModifyEventLevel",data:{userid:e.userid,groupid:wx.getStorageSync("groupid")||e.data.eventinfo.egroupid,eid:e.eid,type:t}}).then(function(t){if("success"==t.msg){wx.showToast({title:a+"成功"});if(e.data.eventinfo.elevel=1==e.data.eventinfo.elevel?"0":"1",e.state=1==e.state?"0":"1",e.setData({state:1==e.data.state?"0":"1",showLikeBoxState:!1,eventinfo:e.data.eventinfo,showFunModel:!1}),"viewscoll"==e.efrom||"grouptypescoll"==e.efrom){var i=getCurrentPages(),n=i[i.length-2].data.eventlist;n[e.a].list[e.b].elevel=e.data.eventinfo.elevel,i[i.length-2].setData({eventlist:n})}else if("personalPage"==e.efrom){var o=getCurrentPages(),s=o[o.length-2];s.uStick.eid=e.eid,s.uStick.isStick=e.state}}})}})},dorecommend:function(){var e=this,t=1==this.data.eventinfo.isRecommend?"cancel":"recommend",a=1==this.data.eventinfo.isRecommend?"取消推荐":"推荐";wx.showModal({title:"提示",content:"是否"+a+"此动态",success:function(i){i.confirm&&o.wxreq({pathname:"YinianProject/space/RecommendAndCancel",data:{recommendUserID:e.userid,fromGroupID:wx.getStorageSync("groupid"),eid:e.eid,type:t}}).then(function(t){"success"==t.msg&&(wx.showToast({title:a+"成功"}),e.data.eventinfo.isRecommend=1==e.data.eventinfo.isRecommend?"0":"1",e.setData({eventinfo:e.data.eventinfo}))})}})},checkchange:function(e){var t=e.detail.value.trim().length>0;this.setData({contentCurrent:t})},writeCom:function(){this.setData({showComInput:!0,inputfocus:!0,placehold:"对ta说点啥..."})},hiddenWrite:function(){this.setData({showComInput:!1})},toTalkBox:function(){this.setData({scrollView:"talkBox"})},sendcomment:function(e){var a=e.detail.formId,i=e.detail.value.content;if(0!=i.length)if(r.testStr(i))wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1});else{wx.showToast({title:"正在发布",icon:"loading",duration:2e3});var s=this;s.isCommentpushId(),u(s.userid,wx.getStorageSync("groupid"),"comment"),o.wxreq({pathname:"YinianProject/yinian/SendComment1",data:{commentUserId:s.userid,commentedUserId:s.commentedUserid,eventId:s.eid,content:i,formID:a}}).then(function(e){var a=s.data.eventinfo,r=o.formatTimeWithSecond(new Date).slice(5,16);if(0==e.code){var d={cid:e.data[0].cid,commentedUser:{userid:s.commentedUserid,unickname:s.commentedname},commentUser:{userid:s.userid,unickname:n.globalData.userInfo.nickName,upic:n.globalData.userInfo.avatarUrl},ccontent:i,resultTime:t(r),ctime:r};if(a.comments.unshift(d),a.commentCnt=parseInt(a.commentCnt)+1,wx.showToast({title:"发表成功",icon:"success",duration:2e3}),s.setData({showComInput:!1,eventinfo:a,value:"",contentCurrent:!1,placehold:"说点什么..."}),"viewscoll"==s.efrom||"grouptypescoll"==s.efrom){var l=getCurrentPages(),c=l[l.length-2].data.eventlist;c&&c.forEach(function(e){e.list[0].eid==s.eid&&(e.list[0].comments.unshift(d),e.list[0].commentCnt++)}),l[l.length-2].setData({eventlist:c})}else if("mymemory"==s.efrom){var u=getCurrentPages(),g=u[u.length-2].data.eventlist;g&&g.forEach(function(e){e.eid==s.eid&&(e.comments.unshift(d),e.commentCnt++)}),u[u.length-2].setData({eventlist:g})}else if("personalPage"==s.efrom){var m={};m.eid=s.eid,m.text=i,m.cid=e.data[0].cid,console.log("_this.commentedUserid",s.commentedUserid),s.commentedUserid&&10!=s.commentedUserid&&(m.replyUserId=s.commentedUserid,m.nick=s.commentedname);var h=getCurrentPages();h[h.length-2].multipleComment.push(m)}s.commentedUserid=10,s.commentedname="系统消息"}})}else wx.showModal({title:"提示",content:"请先输入评论内容",showCancel:!1})},stop:function(){},prevent:function(){this.fromState=!1},toBusinessGroup:function(){this.fromState=!1;var e=this;"object"==i(this.button)&&this.button.push({name:"banner"}),0==e.data.eventinfo.joinGroupOrList?wx.navigateTo({url:"/pages/others/businessgroup/businessgroup?lastPage=eventDetail&listid="+e.data.eventinfo.listid}):1==e.data.eventinfo.joinGroupOrList&&wx.navigateTo({url:"/pages/viewscoll/viewscoll?lastPage=eventDetail&from=grouplist&groupid="+e.data.eventinfo.joinGroupid})},goToBusinessGroup:function(){this.fromState=!1,"object"==i(this.button)&&this.button.push({name:"watchMore"}),wx.navigateTo({url:"/pages/others/businessgroup/businessgroup?lastPage=eventDetail&listid="+this.data.eventinfo.listid})},toBusinessViewscoll:function(e){var t=e.currentTarget.dataset.selgroupid,a=e.currentTarget.dataset.grouptype;t?g({groupNewType:a,data:{from:"grouplist",groupid:t},navigator:"navigate"}):wx.showModal({title:"提示",content:"获取相册信息失败！请重试",showCancel:!1})},goGroup:function(){var e=this;if(e.data.fromMon){var t=e.data.eventinfo.groupNewType;g({groupNewType:t,data:{groupid:e.data.eventinfo.egroupid},navigator:"redirect"})}else wx.navigateBack({delta:1})},toEditPhotos:function(e){console.log(e.currentTarget.dataset),this.setData({showFunModel:!1});var t=e.currentTarget.dataset.photosource,a=this.allPicList,i=4==this.data.eventinfo.eMain?"video":"pic";if("photosync"==t){if(0==this.inBlackList)return void wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1});this.fromState=!1}else if("download"==t)this.fromState=!1;else{if("delete"!=t)return;var n=this.data.eventinfo.eMain;if(1==n||2==n)return void this.delete_event()}wx.setStorageSync("editPhotoArr",a),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+t+"&isPicOrVideo="+i})},playVideo:function(){this.setData({showPlayVideoModal:!0})},closePlayVideoModal:function(){this.setData({showPlayVideoModal:!1})},audioPlay:function(e){var t=e.currentTarget.dataset.audiourl;t&&(m.src=t,m.play(),this.data.eventinfo.isAudioPlay=!0,this.setData({eventinfo:this.data.eventinfo}))},audioPause:function(){m.pause(),this.data.eventinfo.isAudioPlay=!1,this.setData({eventinfo:this.data.eventinfo})},toMakeGroup:function(){wx.navigateTo({url:"/pages/makegroup/makegroup"})},toHomePage:function(){wx.switchTab({url:"/pages/index/index"})},onShareAppMessage:function(){var e=this;e.fromState=!1,this.isSubmit=2;var t=this.eid||0,a=wx.getStorageSync("userInfo").userid||0;return{title:"您的好友"+wx.getStorageSync("userInfo").nickName+"为你分享了TA的照片,来看看吧!",desc:"这里面有几张我很喜欢的照片，快来看看你喜欢嘛？",path:"/pages/eventdetail/eventdetail?port=动态详情分享&efrom=share&eid="+e.eid+"&fromEventID="+t+"&fromUserID="+a,success:function(){n.stat.request({operation:"shareCallback"})}}},showlike:function(e){wx.getStorageSync("userid")?this.setData({showFunModel:!0}):wx.showToast({title:"获取用户信息失败"})}},e(a,"closeFunModel",function(){this.setData({showFunModel:!1})}),e(a,"isLikepushId",function(){""!=n.pushId&&void 0!=n.pushId&&o.wxreq({pathname:"YinianProject/ep/isLike",data:{pushId:n.pushId,port:n.globalData.port}}).then(function(e){},function(e){})}),e(a,"isCommentpushId",function(){""!=n.pushId&&void 0!=n.pushId&&o.wxreq({pathname:"YinianProject/ep/isComment",data:{pushId:n.pushId,port:n.globalData.port}}).then(function(e){},function(e){})}),e(a,"toStories",function(){var e={userId:wx.getStorageSync("userid")||0,operation:"eventDetailToStories",userLastLoginTime:n.enterTime};n.stat.request(e);this.data.eventinfo.groupNewType;var t=this.eid,a=this.data.eventinfo.egroupid;wx.navigateTo({url:"/pages/stories/pages/index/index?eId="+t+"&groupId="+a})}),e(a,"enterpreview",function(e){console.log(e);var t=e.currentTarget.dataset;wx.setStorageSync("lookImgs",t.arr),wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+t.index})}),e(a,"addImagess",function(e){var t=this;console.log(e),t.oMain=e.currentTarget.dataset.emain,t.eid=e.currentTarget.dataset.eid,t.setData({addpicModal:!0})}),e(a,"uploadpic",function(e){var t=this;if(wx.getStorageSync("userid")){clearTimeout(t.timer),this.setData({fromlast:1}),this.loadImgStateNo=!0;var a;a="pai"==(e=e||event).currentTarget.dataset.pic?"camera":"album",t.fromState=!1,wx.chooseImage({count:9,sizeType:["original"],sourceType:[a],success:function(e){var a=e.tempFilePaths;wx.removeStorageSync("uploadchoosedpic"),wx.setStorage({key:"uploadchoosedpic",data:a,success:function(){t.setData({addModalOn:!1,fromlast:1}),t.loadImgStateNo=!0,t.closeModal(),t.addImgUploadevent()},fail:function(){wx.showToast({title:"保存图片临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})}),e(a,"addImgUploadevent",function(){var e=wx.getStorageSync("uploadchoosedpic"),t=this,a=[],i=e;t.setData({showProgress:!0,totalnum:e.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic"}),n.isUp=!0,c.length=0;wx.request({url:s.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(e){0===e.data.code?t.uploadFileEvent(e.data.data[0].token,i,a,"6"):(c.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),n.isUp=!1)},fail:function(e){c.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),n.isUp=!1}})}),e(a,"uploadFileEvent",function(e,t,a,i){var s=this;if(0==t.length)console.log(c),o.wxreq({pathname:"YinianProject/family/addPictureInIncident",data:{userid:wx.getStorageSync("userid"),groupid:s.groupid,eid:s.eid,picAddress:c.join(","),main:i}}).then(function(e){console.log(e),0==e.code?(c.length=0,n.isUp=!1,s.setData({upSteps:2,showProgress:!0,uploadnum:0,progress:0}),s.getEventValue(s.UserInfo,s.nb),setTimeout(function(){s.setData({upSteps:1,showProgress:!1,uploadnum:0,progress:0})},2e3)):(n.isUp=!1,c.length=0)}).catch(function(e){n.isUp=!1,c.length=0});else{var r=t.splice(0,1);s.uppic(e,r,t,a,i)}}),e(a,"uppic",function(e,t,a,i,o){var s=this,r=t[0],d=r.lastIndexOf("."),l=(new Date).getTime()+""+parseInt(1e8*Math.random()+1e8)+r.substring(d);wx.uploadFile({url:"https://upload.qiniup.com",filePath:r,name:"file",formData:{key:l,token:e},success:function(t){if(200!=t.statusCode)return c.length=0,n.isUp=!1,void s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var r=JSON.parse(t.data);c.push(r.key),s.setData({uploadnum:c.length,progress:parseInt(c.length/s.data.totalnum*100)}),s.uploadFileEvent(e,a,i,o)},fail:function(){c.length=0,n.isUp=!1,s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})}),e(a,"closeModal",function(){this.setData({addpicModal:!1})}),e(a,"jumptoManGod",function(e){var t=this;wx.navigateTo({url:"/pages/collegealbum/albumlist/index?gId=7200923"});var a=e.currentTarget.dataset.type,i="",o={operation:i="banner"==a?"likeBanner":"more"==a?"likeWatchMore":"likeQuickContact",userId:t.userid,groupId:t.groupid,groupNewType:40};n.stat.requestLove(o)}),e(a,"closeFirstLikeModel",function(){this.setData({isFirstLike:!1})}),e(a,"perent",function(){}),e(a,"closeLikeSuccessModel",function(){this.setData({showLikeSuccessModel:!1})}),e(a,"gotoStory",function(e){var t=this;console.log(e),"event"==e.currentTarget.event?n.stat.request({operation:"eventDetailMakeStory",userId:wx.getStorageSync("userid"),groupId:e.currentTarget.dataset.groupid,groupNewType:t.data.groupNewType}):n.stat.request({operation:"detailMakeStory",userId:wx.getStorageSync("userid"),groupId:e.currentTarget.dataset.groupid,groupNewType:t.data.groupNewType}),wx.request({url:s.host+"/YinianProject/story/createStory",data:{userId:wx.getStorageSync("userid")},success:function(a){console.log(a),0==a.data.code&&(wx.setStorageSync("storyId",a.data.data[0].storyId),wx.request({url:s.host+"/YinianProject/story/eventGenerateStory",data:{userId:wx.getStorageSync("userid"),eId:e.currentTarget.dataset.eid,storyId:wx.getStorageSync("storyId"),groupId:e.currentTarget.dataset.groupid},method:"GET",success:function(a){if(console.log(a),0===a.data.code){t.setData({playPhoto:!1});var i=d.getCurrentPageUrlWithArgs();console.log(i),wx.setStorageSync("skipUrl",i),"event"==e.currentTarget.event?wx.navigateTo({url:e.currentTarget.dataset.open+"?eId="+wx.getStorageSync("storyId")+"&groupid="+e.currentTarget.dataset.groupid+"&index=1&groupType="+t.data.groupNewType+"&action=4"}):wx.navigateTo({url:e.currentTarget.dataset.open+"?eId="+wx.getStorageSync("storyId")+"&groupid="+e.currentTarget.dataset.groupid+"&index=1&groupType="+t.data.groupNewType+"&action=1"})}},fail:function(e){}}))},fail:function(e){}})}),a)); 
 			}); 	require("pages/eventdetail2/eventdetail2.js");
 		__wxRoute = 'pages/selectplace/selectplace';__wxRouteBegin = true; 	define("pages/selectplace/selectplace.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../utils/amap-wx.js"),t=getApp();Page({data:{},onLoad:function(e){t.stat.statpv({route:this.route,options:e});var n=this;new a.AMapWX({key:"ebc8ad3ccdb6bfe66a1e3b1170074bcd",fail:function(){}}).getPoiAround({success:function(a){n.setData({posi:a.poisData})},fail:function(){}})},onShow:function(){},donshowplace:function(){wx.setStorageSync("place","不显示位置"),wx.navigateBack()},selectplace:function(a){var t=a.currentTarget.dataset.placeid,e=this.data.posi[t].name;wx.setStorageSync("place",e),wx.navigateBack({})}}); 
 			}); 	require("pages/selectplace/selectplace.js");
 		__wxRoute = 'pages/editplace/editplace';__wxRouteBegin = true; 	define("pages/editplace/editplace.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{buttonactive:!1},onLoad:function(a){t.stat.statpv({route:this.route,options:a}),wx.setNavigationBarTitle({title:"创建位置"})},creategroup:function(t){var a=t.detail.value.groupname;0==a.trim().length?wx.showModal({title:"提示",content:"请输入正确的地理位置",showCancel:!1,confirmColor:"#000"}):(wx.setStorageSync("place",a),wx.navigateBack({delta:2}))},setcolor:function(t){var a=this;t.detail.value.trim().length>0?a.setData({buttonactive:!0}):a.setData({buttonactive:!1})}}); 
 			}); 	require("pages/editplace/editplace.js");
 		__wxRoute = 'pages/mymemory/mymemory';__wxRouteBegin = true; 	define("pages/mymemory/mymemory.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var e=function(){function t(t,e){var a=[],n=!0,i=!1,s=void 0;try{for(var o,r=t[Symbol.iterator]();!(n=(o=r.next()).done)&&(a.push(o.value),!e||a.length!==e);n=!0);}catch(t){i=!0,s=t}finally{try{!n&&r.return&&r.return()}finally{if(i)throw s}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=require("../../utils/util.js"),n=require("../../utils/config.js"),i=getApp(),s=require("../../utils/api.js"),o=require("../../utils/reg.js"),r=wx.createInnerAudioContext(),d=require("../../utils/hotActive.js").hotActive,l=require("../../utils/albumsjump.js").albumsjump,c=0,u=0,h=0,g=0;Page({data:{showFunModel:!1,eventlist:[],showLoadingImg:!1,loadingImgOrText:!0,loadImgState:!0,textArr:["精彩内容正在赶来...","稍等一下啦...","小忆正在加载中..."],showPlayVideoModal:!1,videoUrl:{url:"",pcover:""},showDisposeModel:!1,classArr:["pic1","pic2","pic3"],usernumber:3006789,maxnumber:5000009,showComInput:!1,placehold:"对ta说点啥...",inputfocus:!1},onLoad:function(t){i.stat.statpv({route:this.route,options:t});var e=this;this.isloading=!1,this.deletedPhotos={eid:-1,photoIds:[]};var n=a.randomNum(0,2);this.setData({loadImgState:!1,promptText:n}),e.getUserData(),wx.getStorage({key:"peopleCount",success:function(t){console.log(t),0!=t.data&&t.data,console.log(t),e.setData({maxnumber:t.data})}})},onShow:function(){var t=this;console.log(t.deletedPhotos),t.deletedPhotos.eid>0&&this.resetEventlist(this.deletedPhotos)},onReady:function(){var t=this;r.onError(function(e){wx.showToast({title:"语音播放错误",duration:1e3}),t.closeAllAudio()}),r.onEnded(function(e){t.closeAllAudio()})},onHide:function(){this.closeAllAudio()},onPageScroll:function(t){this.data.showComInput&&this.setData({showComInput:!1})},seeBigVideo:function(t){var e=t.currentTarget.dataset.url;wx.setStorageSync("videourl",e),wx.navigateTo({url:"/pages/viewscoll/bigvideo/bigvideo"})},toGroup:function(t){var a=t.currentTarget.dataset.id;if(a){var n=a.split(","),i=e(n,2),s=i[0],o=i[1];console.log(o),o=parseInt(o),console.log(o),l({groupNewType:o,data:{lastPage:"mymemory",from:"grouplist",groupid:s},navigator:"navigate"})}},onReachBottom:function(){wx.getStorageSync("userid")&&i.globalData.userInfo.userid&&this.data.eventlist&&0!=this.data.eventlist.length&&this.loadinged()},resetEventlist:function(t){console.log(t);for(var e=this,n=0,i=e.data.eventlist.length;n<i;n++)if(e.data.eventlist[n].eid==t.eid){if(e.data.eventlist[n].picList.length==t.photoIds.length)e.data.eventlist.splice(n,1),e.setData({eventlist:e.data.eventlist});else{var s=[];e.data.eventlist[n].picList.forEach(function(e){a.isInArray(e.pid,t.photoIds)||s.push(e)}),e.data.eventlist[n].picList=s,e.setData({eventlist:e.data.eventlist})}return void(e.deletedPhotos={eid:-1,photoIds:[]})}},getUserData:function(){var t=this;wx.request({url:s.getUrl("YinianProject/newEvents/myActiveInfoCenter"),data:{userid:i.globalData.userInfo.userid,type:"initialize"},success:function(e){console.log(i.globalData.userInfo.userid),console.log(e),0==e.data.code?(e.data.data[0].eventList.forEach(function(t){t.time=a.timeRest(t.euploadtime),t.isAudioPlay=!1}),t.setData({userData:e.data.data[0].users,eventlist:e.data.data[0].eventList,loadImgState:!0,showLoadingImg:!1,loadingImgOrText:!0})):wx.showModal({title:"提示",content:"数据获取失败，请稍后重试",showCancel:!1,success:function(){wx.navigateBack({delta:1})}})},fail:function(){wx.showModal({title:"提示",content:"数据获取失败，请稍后重试",showCancel:!1,success:function(){wx.navigateBack({delta:1})}})}})},stop:function(){},lookmine:function(){wx.navigateTo({url:"/pages/integral/pages/mine/mine"})},showlike:function(t){if(wx.getStorageSync("userid")){var e=this,a=t.currentTarget.dataset.parentindex,n=t.currentTarget.dataset.eid;this.a=a,this.tepEid=n;this.data.eventlist[a];e.setData({showFunModel:!0,selNumA:a})}else wx.showToast({title:"获取用户信息失败"})},closeFunModel:function(){this.setData({showFunModel:!1})},toEditPhotos:function(t){var e=t.currentTarget.dataset.index,a=t.currentTarget.dataset.photosource,n=this.data.eventlist[e].picList,i=4==this.data.eventlist[e].eMain?"video":"pic";if("photosync"==a);else if("download"!=a)return;wx.setStorageSync("editPhotoArr",n),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+a+"&isPicOrVideo="+i})},toEditPhotosDelete:function(t){var e=this,n=t.detail.formId;a.sendFormId(i.globalData.userInfo.userid,n);var s=t.currentTarget.dataset.photosource,o=this.data.eventlist[this.a].picList,r=this.data.eventlist[this.a].eMain,d=4==r?"video":"pic",l=this.tepEid;if("photosync"==s);else if("download"==s);else{if("delete"!=s)return;if(1==r||2==r)return void this.delete_event(l)}wx.setStorageSync("editPhotoArr",o),wx.navigateTo({url:"/pages/others/editphotos/editphotos?sourcePage=mymemory&photosource="+s+"&isPicOrVideo="+d,success:function(){e.setData({showFunModel:!1})}})},delete_event:function(e){var n=this;if(e){var i=e;wx.showModal({title:"删除动态",content:"确定删除此条动态吗？",confirmColor:"#353535",success:function(e){e.confirm&&a.wxreq({pathname:"YinianProject/yinian/DeleteEvent",data:t({userid:wx.getStorageSync("userid")},"eventId",i)}).then(function(t){if("success"==t.msg){wx.showToast({title:"删除成功",icon:"success",duration:2e3});var e=0,a=!1;n.data.eventlist.forEach(function(t,n){if(t.eid==i)return e=n,void(a=!0)}),a&&n.data.eventlist.splice(e,1),n.setData({eventlist:n.data.eventlist,showFunModel:!1})}})}})}},toSharePage:function(t){var e=t.currentTarget.dataset.index,a=t.currentTarget.dataset.isdefault;console.log(a);var n=this.data.eventlist[e].picList,i=this.data.eventlist[e].eMain,s=this.data.eventlist[e].eid,o=this.data.eventlist[e].egroupid;1==a?(wx.setStorageSync("groupSharePagePic",n),wx.navigateTo({url:"/pages/groupsharepage/groupsharepage?eid="+s+"&eMain="+i})):(wx.setStorageSync("sharePagePic",n),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&eid="+s+"&eMain="+i+"&groupid="+o+"&gOrigin=0&eventQRCodeCanPublish=0"}))},toEventDetail:function(t){var a=t.currentTarget.dataset.datas;if(a){var n=a.split(","),i=e(n,3),s=i[0],o=i[1],r=i[2];console.log(t),console.log(s,o,r),1==r?wx.navigateTo({url:"/pages/eventdetail/eventdetail?lastPage=mymemory&fromSource=group&dateindex="+o+"&rowindex=0&eid="+s+"&efrom=mymemory"}):wx.navigateTo({url:"/pages/eventdetail/eventdetail?lastPage=mymemory&dateindex="+o+"&rowindex=0&eid="+s+"&efrom=mymemory"})}},comment:function(t){t.currentTarget.dataset.parentindex;var e=t.currentTarget.dataset.eid;this.commentEid=e,this.commentedUserid=10,this.commentedname="系统消息",this.setData({showComInput:!0,inputfocus:!0,placehold:"对ta说点啥...",contentCurrent:!1})},recomment:function(t){if(void 0!=t.target.dataset.commentindex){var e=this,n=t.target.dataset.commentindex,s=t.currentTarget.dataset.dataindex,o=this.data.eventlist[s].comments[n],r=o.commentUser.userid,d=o.commentUser.unickname,l=t.currentTarget.dataset.eid;r==i.globalData.userInfo.userid?wx.showModal({title:"提示",content:"删除此条评论？",success:function(t){t.confirm&&a.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:o.cid}}).then(function(t){"success"==t.msg&&(e.data.eventlist.forEach(function(t,e){t.eid==l&&(t.comments.splice(n,1),t.commentCnt--)}),e.setData({eventlist:e.data.eventlist}))})}}):(this.commentEid=l,this.commentedUserid=r,this.commentedname=d,this.setData({showComInput:!0,inputfocus:!0,placehold:"@"+d+":",contentCurrent:!1}))}},sendcomment:function(t){var e=t.detail.formId,n=t.detail.value.content,s=this.data.userData.userid||wx.getStorageSync("userid"),r=this.commentEid,l=this.commentedUserid,c=this.commentedname;if(0!=n.length)if(o.testStr(n))wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1});else{var u=this;u.isCommentpushId(),d(s,wx.getStorageSync("groupid"),"comment");var h=a.formatTimeWithSecond(new Date),g={cid:-1,commentedUser:{userid:l,unickname:c},commentUser:{userid:s,unickname:i.globalData.userInfo.nickName,upic:i.globalData.userInfo.avatarUrl},ccontent:n,ctime:h},m=Array.from(u.data.eventlist);u.data.eventlist.forEach(function(t,e){t.eid==r&&(m[e].comments.unshift(g),m[e].commentCnt=parseInt(m[e].commentCnt)+1)}),u.setData({showComInput:!1,eventlist:m,value:"",contentCurrent:!1,placehold:"说点什么..."}),u.commentedUserid=10,u.commentedname="系统消息",wx.showToast({title:"发表成功",icon:"success",duration:1e3}),a.wxreq({pathname:"YinianProject/yinian/SendComment1",data:{commentUserId:s,commentedUserId:l,eventId:r,content:n,formID:e}}).then(function(t){0==t.code&&(u.data.eventlist.forEach(function(e){e.eid==r&&e.comments.forEach(function(e){e.ctime===h&&(e.cid=t.data[0].cid)})}),u.setData({eventlist:u.data.eventlist}))})}else wx.showModal({title:"提示",content:"请先输入评论内容",showCancel:!1})},checkchange:function(t){var e=t.detail.value.trim().length>0;this.setData({contentCurrent:e})},hiddenWrite:function(){this.setData({showComInput:!1})},enterpreview:function(t){var e=t.currentTarget.dataset.parentindex,a=t.currentTarget.dataset.sel,n=this.data.eventlist;wx.setStorageSync("lookImgs",n[e].picList),wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+a})},like:function(t){if(wx.getStorageSync("userid")){var e=t.detail.formId,a=t.currentTarget.dataset.likecatagry,n=t.currentTarget.dataset.parentindex,o=this.data.eventlist[n].eid,r=this;a&&(r.isLikepushId(),d(wx.getStorageSync("userid"),wx.getStorageSync("groupid"),"like"),r.data.eventlist[n].likeUser=1,r.data.eventlist[n].likeCnt=parseInt(r.data.eventlist[n].likeCnt)+1,r.setData({eventlist:r.data.eventlist}),wx.showToast({title:"点赞成功",icon:"success",duration:1e3}),wx.request({url:s.getUrl("YinianProject/yinian/AttachOrRemoveExpressionByLkNew"),data:{type:a,userid:i.globalData.userInfo.userid||wx.getStorageSync("userid"),eid:o,formID:e},success:function(t){console.log(t)}}))}else wx.showToast({title:"获取用户信息失败"})},loadinged:function(){var t=this;this.isloading||(this.isloading=!0,this.setData({showLoadingImg:!0,loadingImgOrText:!0}),wx.request({url:s.getUrl("YinianProject/newEvents/myActiveInfoCenter"),data:{userid:i.globalData.userInfo.userid||wx.getStorageSync("userid"),type:"loading",eid:t.data.eventlist[t.data.eventlist.length-1].eid},success:function(e){console.log(e),0==e.data.code?0==(e=e.data).data[0].eventList.length?t.setData({showLoadingImg:!0,loadingImgOrText:!1}):(e.data[0].eventList.forEach(function(e){Object.assign(e,{time:a.timeRest(e.euploadtime),isAudioPlay:!1}),t.data.eventlist.push(e)}),t.isloading=!1,t.setData({eventlist:t.data.eventlist,showLoadingImg:!1})):(t.isloading=!1,t.setData({showLoadingImg:!1}))},fail:function(){t.isloading=!1,t.setData({showLoadingImg:!1})}}))},fasttoknow:function(){var t=this;console.log("fasttoknow"),t.setData({showDisposeModel:!0,usernumber:n.usernumber}),clearInterval(t.timerinterval),t.timerinterval=null,t.usernumberchange()},usernumberchange:function(){var t=this;t.timerinterval=setInterval(function(){if(t.data.usernumber>t.data.maxnumber){clearInterval(t.timerinterval),t.timerinterval=null;var e=t.toThousands(t.data.maxnumber);console.log(e),t.setData({usernumber:e})}else t.data.usernumber+=323456,t.setData({usernumber:t.data.usernumber})},100)},toThousands:function(t){for(var t=(t||0).toString(),e="";t.length>3;)e=","+t.slice(-3)+e,t=t.slice(0,t.length-3);return t&&(e=t+e),e},closeModel:function(){console.log("closeModel"),this.setData({showDisposeModel:!1,classArr:["pic1","pic2","pic3"]})},changestart:function(t){c=t.touches[0].pageX,u=t.touches[0].pageY},changemove:function(t){},changend:function(t){var e=this;if(h=t.changedTouches[0].pageX,g=t.changedTouches[0].pageY,c-h>30){if("pic2"==e.data.classArr[0])return;e.data.classArr.unshift(e.data.classArr[e.data.classArr.length-1]),e.data.classArr.pop(e.data.classArr[e.data.classArr.length-1]),e.setData({classArr:e.data.classArr})}else if(h-c>30){if("pic1"==e.data.classArr[0])return;e.data.classArr.push(e.data.classArr[0]),e.data.classArr.shift(e.data.classArr[0]),e.setData({classArr:e.data.classArr})}},addgroup:function(){if(wx.getStorageSync("userid")){wx.navigateTo({url:"../makegroup/makegroup?lastPage=index",success:function(t){console.log(t)}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！创建相册功能不可用！",showCancel:!1})},audioPlay:function(t){var e=t.currentTarget.dataset.audiourl;e&&(console.log(e),r.src=e,r.play(),this.openThisAudio(e))},audioPause:function(){r.pause(),this.closeAllAudio()},openThisAudio:function(t){this.data.eventlist.forEach(function(e){e.eaudio===t?e.isAudioPlay=!0:e.isAudioPlay=!1}),this.setData({eventlist:this.data.eventlist})},closeAllAudio:function(){this.data.eventlist.forEach(function(t){t.isAudioPlay=!1}),this.setData({eventlist:this.data.eventlist})},isLikepushId:function(){""!=i.pushId&&void 0!=i.pushId&&a.wxreq({pathname:"YinianProject/ep/isLike",data:{pushId:i.pushId,port:i.globalData.port}}).then(function(t){},function(t){})},isCommentpushId:function(){""!=i.pushId&&void 0!=i.pushId&&a.wxreq({pathname:"YinianProject/ep/isComment",data:{pushId:i.pushId,port:i.globalData.port}}).then(function(t){},function(t){})}}); 
 			}); 	require("pages/mymemory/mymemory.js");
 		__wxRoute = 'pages/makepingtu/makepingtu';__wxRouteBegin = true; 	define("pages/makepingtu/makepingtu.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../utils/util.js"),i=require("../../utils/api.js"),a=require("../../utils/promise.js");Page({data:{imgPath:"",puzzid:0},onLoad:function(e){t.stat.statpv({route:this.route,options:e});var i=this;e.id&&i.setData({imgPath:wx.getStorageSync("ptUrl"),puzzid:e.id})},onShow:function(){},chooseImg:function(){var t=this,i=void 0,n=new a(function(t,i){e.wxreq({pathname:"YinianProject/yinian/GetUploadToken"}).then(function(e){t(e.data[0].token)})});e.wxpromise(wx.chooseImage)({count:1,sizeType:["original"],sourceType:["album","camera"]}).then(function(e){return wx.showToast({title:"正在上传",icon:"loading",duration:1e4}),i=e.tempFilePaths[0],t.setData({imgPath:i}),n}).then(function(t){return e.wxpromise(wx.uploadFile)({url:"https://upload.qiniup.com",filePath:i,name:"file",formData:{key:i.split("//")[1],token:t}})}).then(function(t){return e.wxreq({pathname:"YinianProject/activity/MakePuzzle",data:{userid:wx.getStorageSync("userid"),picture:JSON.parse(t.data).key,content:""}})}).then(function(e){wx.hideToast(),t.setData({puzzid:e.data[0].puzzleID})})},modifypuzz:function(t){var e=t.detail.value.text,a=this;wx.request({url:i.getUrl("YinianProject/activity/ModifyPuzzleInfo"),data:{userid:wx.getStorageSync("userid"),puzzleID:a.data.puzzid,content:e},success:function(t){t.data.data;wx.redirectTo({url:"../../pages/pingtu/pingtu?id="+a.data.puzzid})}})}}); 
 			}); 	require("pages/makepingtu/makepingtu.js");
 		__wxRoute = 'pages/commonpage/sendcomment/send';__wxRouteBegin = true; 	define("pages/commonpage/sendcomment/send.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../utils/util.js"),t=require("../../../utils/reg.js"),n=(require("../../../utils/api.js"),getApp());Page({data:{commentLegitimate:!1},onLoad:function(e){n.stat.statpv({route:this.route,options:e});var t=this;this.formID="",t.eid=e.eid,t.state=e.state,t.prevFrom=e.prevFrom,t.userid=n.globalData.userInfo.userid||wx.getStorageSync("userid"),n.fromlast=1,t.commentedUserid=e.commeneduserid||10,t.commentedNickname=e.commentedNickname||"","sendmaincomment"===e.state&&t.setData({placecontent:"请输入评论内容...."}),"personalPage"===t.prevFrom&&"sendusercomment"===e.state&&t.setData({placecontent:"@"+t.commentedNickname+":"})},setcolor:function(e){var t=e.detail.value.trim().length>0;this.setData({commentLegitimate:t})},onShow:function(){},back:function(){wx.navigateBack({delta:1})},sendcomment:function(a){var i=this;this.formID=a.detail.formId;var m=a.detail.value.content.replace(/\n/g,"");if(i.userid)if(m.trim().length>0){if(t.testStr(m))return void wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1});wx.showToast({title:"正在发表",icon:"loading",duration:5e3,mask:!0}),e.wxreq({pathname:"YinianProject/yinian/SendComment1",data:{commentUserId:i.userid,commentedUserId:i.commentedUserid,eventId:i.eid,content:m,formID:i.formID}}).then(function(t){if(0==t.code){if(wx.showToast({title:"评论成功",icon:"loading",duration:5e3,mask:!0}),"mymemory"==i.prevFrom){var a=getCurrentPages(),o=a.length,r=a[o-2].data.eventlist;r&&(r.forEach(function(a){a.eid==i.eid&&(a.commentCnt++,a.comments.unshift({cid:t.data[0].cid,commentedUser:{userid:i.commentedUserid,unickname:i.commentedname||"系统消息"},commentUser:{userid:i.userid,unickname:n.globalData.userInfo.nickName,upic:n.globalData.userInfo.avatarUrl},ccontent:m,ctime:e.formatTimeWithSecond(new Date)}))}),a[o-2].setData({eventlist:r}))}else if("personalPage"===i.prevFrom){var s=getCurrentPages(),c=s[s.length-2];c.comment.eid=i.eid,c.comment.text=m,c.comment.cid=t.data[0].cid,i.commentedUserid&&10!=i.commentedUserid&&(c.comment.replyUserId=i.commentedUserid,c.comment.nick=i.commentedNickname)}else if("party"===i.prevFrom){var d=getCurrentPages(),l=d.length,u=d[l-2].data.currentTab,f=void 0;1==u&&(f=d[l-2].data.eventlist),2==u&&(f=d[l-2].data.partyEventlist),f&&f.forEach(function(a){a.list[0].eid==i.eid&&(a.list[0].commentCnt++,a.list[0].comments.unshift({cid:t.data[0].cid,commentedUser:{userid:i.commentedUserid,unickname:i.commentedname||"系统消息"},commentUser:{userid:i.userid,unickname:n.globalData.userInfo.nickName,upic:n.globalData.userInfo.avatarUrl},ccontent:m,ctime:e.formatTimeWithSecond(new Date)}))}),1==u&&d[l-2].setData({eventlist:f}),2==u&&d[l-2].setData({partyEventlist:f})}else{var g=getCurrentPages(),v=g.length,h=g[v-2].data.eventlist;h&&h.forEach(function(a){a.list[0].eid==i.eid&&(a.list[0].commentCnt++,a.list[0].comments.unshift({cid:t.data[0].cid,commentedUser:{userid:i.commentedUserid,unickname:i.commentedname||"系统消息"},commentUser:{userid:i.userid,unickname:n.globalData.userInfo.nickName,upic:n.globalData.userInfo.avatarUrl},ccontent:m,ctime:e.formatTimeWithSecond(new Date)}))}),g[v-2].setData({eventlist:h})}wx.navigateBack({delta:1}),wx.hideToast()}})}else wx.showModal({title:"提示",content:"请输入正确的评论内容！",showCancel:!1})}}); 
 			}); 	require("pages/commonpage/sendcomment/send.js");
 		__wxRoute = 'pages/find/likelist/likelist';__wxRouteBegin = true; 	define("pages/find/likelist/likelist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/util.js"),i=(require("../../../utils/api.js"),getApp());Page({data:{likelist:"",liking:!1},onLoad:function(t){if(i.stat.statpv({route:this.route,options:t}),wx.getStorageSync("groupid")&&wx.getStorageSync("userid")){this.searchLimit=t.searchLimit?t.searchLimit:100,this.urlTitle=t.urlTitle;var e=this;wx.setNavigationBarTitle({title:e.urlTitle}),wx.request({url:"https://api.zhuiyinanian.com/YinianProject/space/GetGroupLikeList",data:{groupid:wx.getStorageSync("groupid"),uid:wx.getStorageSync("userid"),searchLimit:e.searchLimit},success:function(t){if(0==t.data.code){var i=t.data.data;e.setData({likelist:i})}}})}else wx.showModal({title:"提示",content:"获取用户信息失败",showCancel:!1,success:function(){wx.navigateBack({delta:1})}})},onReady:function(){},onShow:function(){},like:function(i){var e=i.currentTarget.dataset.likecatagry,a=i.currentTarget.dataset.childindex,s=this.data.likelist[a].eid,n=this;e&&(n.data.liking||(n.data.liking=!0,t.wxreq({pathname:"YinianProject/yinian/AttachOrRemoveExpressionByLkNew",data:{type:e,userid:wx.getStorageSync("userid"),eid:s}}).then(function(t){0==t.code&&wx.showToast({title:"点赞成功",icon:"success",duration:1e3}),n.data.likelist[a].like=[1],n.data.likelist[a].cnt++,n.setData({likelist:n.data.likelist}),setTimeout(function(){n.data.liking=!1},500)})))},seebigpic:function(t){console.log(t);var i=this,e=t.currentTarget.dataset.a,a=t.currentTarget.dataset.b,s=[];this.data.likelist[e].pictures.forEach(function(t){s.push(t.midThumbnail)}),wx.previewImage({current:i.data.likelist[e].pictures[a].midThumbnail,urls:s})}}); 
 			}); 	require("pages/find/likelist/likelist.js");
 		__wxRoute = 'pages/find/photoerlist/photoerlist';__wxRouteBegin = true; 	define("pages/find/photoerlist/photoerlist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/api.js"),e=getApp();Page({data:{photolist:"",myRank:"",totalContribution:"",userpic:"",username:""},onLoad:function(t){e.stat.statpv({route:this.route,options:t}),this.searchLimit=t.searchLimit?t.searchLimit:100,this.urlTitle=t.urlTitle},onReady:function(){},onShow:function(){var e=this,i=wx.getStorageSync("userInfo").upic;wx.getStorageSync("userInfo").nickName;console.log(i),wx.setNavigationBarTitle({title:e.urlTitle}),wx.request({url:t.getUrl("YinianProject/space/GetPublishList"),data:{groupid:wx.getStorageSync("groupid"),uid:wx.getStorageSync("userid"),searchLimit:e.searchLimit},success:function(t){var i=t.data.data;console.log(i),e.setData({photolist:i,userid:wx.getStorageSync("userid")})}})}}); 
 			}); 	require("pages/find/photoerlist/photoerlist.js");
 		__wxRoute = 'pages/find/findindex/findindex';__wxRouteBegin = true; 	define("pages/find/findindex/findindex.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{},onLoad:function(a){t.stat.statpv({route:this.route,options:a})},onReady:function(){},onShow:function(){var t=this;wx.request({url:"https://api.zhuiyinanian.com/YinianProject/space/GetActivityMenu",data:{groupid:wx.getStorageSync("groupid")},success:function(a){if(0==a.data.code){var e=a.data.data[0];console.log(e),t.setData({activeList:e})}else wx.showModal({title:"提示",content:"获取数据不成功",showCancel:!1,success:function(){wx.navigateBack({delta:1})}})}})},gotourl:function(t){var a=this;console.log(t.currentTarget.dataset.url);var e=/GetGroupLikeList/;1==/GetPublishList/.test(t.currentTarget.dataset.url)?wx.navigateTo({url:"../photoerlist/photoerlist?searchLimit="+a.data.activeList.menu[1].searchLimit+"&urlTitle="+a.data.activeList.menu[1].urlTitle}):1==e.test(t.currentTarget.dataset.url)&&wx.navigateTo({url:"../likelist/likelist?searchLimit="+a.data.activeList.menu[0].searchLimit+"&urlTitle="+a.data.activeList.menu[0].urlTitle})}}); 
 			}); 	require("pages/find/findindex/findindex.js");
 		__wxRoute = 'pages/personalPage/personalPage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/personalPage/personalPage.js';	define("pages/personalPage/personalPage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/api.js"),t=require("../../utils/reg.js"),a=require("../../utils/util.js"),i=getApp(),n=require("../../utils/hotActive.js").hotActive,o=void 0,s=null,r=wx.createInnerAudioContext();r.onPlay(function(){clearInterval(s),console.log("开始播放");var e=o.data.events,t=o.currentPlayAudioIndex,a=e[t].audioDuration;e[t].audioPlayStatus="play",o.setData({events:e,playTime:a}),s=setInterval(function(){a<=0?clearInterval(s):(a--,o.setData({playTime:a}))},1e3)}),r.onPause(function(){clearInterval(s),console.log("暂停")}),r.onStop(function(){clearInterval(s),console.log("停止");var e=o.data.events;e[o.currentPlayAudioIndex].audioPlayStatus="ready",o.setData({events:e})}),r.onEnded(function(){clearInterval(s),console.log("自然结束");var e=o.data.events;e[o.currentPlayAudioIndex].audioPlayStatus="ready",o.setData({events:e})}),r.onError(function(e){clearInterval(s),r.stop(),wx.showToast({title:"播放音频出错",icon:"none"}),console.log(e.errMsg),console.log(e.errCode)}),Page({data:{userId:wx.getStorageSync("userid"),pageUserId:-1,creatorId:-1,deletePermission:-1,user:{nick:"",avatar:"",point:"",cover:"",albumName:"",eventNumber:0,photoNumber:0,deletePermission:-1},events:[],eventLoadComplete:-1,loading:-1,isShowPlayer:!1,videoUrl:"",videoCoverUrl:"",showComInput:!1,placehold:"对ta说点啥...",inputfocus:!1,menuModalShow:!1,currentE:Object,playTime:Number,more:{download:!0,sync:!0,del:!0,stick:!0}},onLoad:function(e){i.stat.statpv({route:this.route,options:e}),o=this,this.pageUserId=e.pageUserId,this.groupId=e.groupId,this.userId=wx.getStorageSync("userid"),this.creator=e.creator,this.albumType=e.albumType,this.inBlacklist=-1,this.gOrigin=-1,this.gType=-1,this.eventQRCodeCanPublish=-1,this.lastEid="",this.type="initialize",this.disabled=-1,this.currentPlayAudioIndex=-1,this.setData({pageUserId:e.pageUserId}),this.deletedPhotos={eid:-1,photoIds:[]},this.comment={cid:-1,eid:-1,text:-1,replyUserId:-1,nick:-1},this.multipleComment=[],this.delComment={cid:-1,eid:-1},this.delMultipleComment={eid:-1,cids:[]},this.uLike={eid:-1},this.uStick={eid:-1,isStick:-1},this.getPageData()},onReady:function(){},onShow:function(){this.getIsInBlacklist(),this.setData({menuModalShow:!1}),-1!=this.deletedPhotos.eid&&this.deletedPhotos.photoIds.length>0&&(this.updateEvents(this.deletedPhotos.eid,this.deletedPhotos.photoIds),this.deletedPhotos.eid=-1,this.deletedPhotos.photoIds.length=0),-1!=this.comment.eid&&(this.updateComment(this.comment),this.comment.eid=-1,this.comment.text=-1,this.comment.replyUserId=-1),this.multipleComment.length>0&&(this.updateMultipleComment(this.multipleComment),this.multipleComment.length=0),-1!=this.delComment.eid&&(this.updateDeleteComment(this.delComment.eid,this.delComment.cid),this.delComment.eid=-1,this.delComment.cid=-1),-1!=this.delMultipleComment.eid&&(this.updateDeleteMultipleComment(this.delMultipleComment.eid,this.delMultipleComment.cids),this.delMultipleComment.eid=-1,this.delMultipleComment.cids.length=0),-1!=this.uLike.eid&&(this.updateLike(this.uLike.eid),this.uLike.eid=-1),-1!=this.uStick.eid&&(this.updateStick(this.uStick.eid,this.uStick.isStick),this.uStick.eid=-1,this.uStick.isStick=-1)},onHide:function(){r.stop()},onUnload:function(){r.stop()},onPullDownRefresh:function(){},onReachBottom:function(){1!==this.data.eventLoadComplete&&(this.data.events.length>0&&(this.lastEid=this.data.events[this.data.events.length-1].eid),this.type="loading",this.getPageData())},pullUpLoad:function(){1!==this.data.eventLoadComplete&&this.data.events.length>0&&(this.lastEid=this.data.events[this.data.events.length-1].eid,this.type="loading",this.getPageData())},getPageData:function(){var t=this;0!==t.disabled&&(t.disabled=0,t.setData({loading:0}),wx.request({url:e.host+"/YinianProject/newEvents/personalHomePage",method:"GET",data:{userid:t.pageUserId,groupid:t.groupId,type:t.type,eid:t.lastEid,albumType:t.albumType},success:function(e){var a=e.data;if(0===a.code){if("initialize"==t.type){var i=t.formatUserInfo(a.data[0].users);t.eventQRCodeCanPublish=a.data[0].users.eventQRCodeCanPublish,t.gOrigin=a.data[0].users.gOrigin,t.gtype=a.data[0].users.gtype,t.setData({user:i}),t.generatePermission(t)}var n=t.formatEventData(a.data[0].eventList,t.userId);if(console.log("receivedEvents",n),0===n.length)return void t.setData({eventLoadComplete:1});var o=t.data.events.concat(n);t.setData({events:o})}else wx.showToast({title:"数据请求失败",image:"/images/toast_warning.png",duration:2e3})},error:function(e){wx.showToast({title:"数据请求失败",image:"/images/toast_warning.png",duration:2e3})},fail:function(){wx.showToast({title:"数据请求失败",image:"/images/toast_warning.png",duration:2e3})},complete:function(){t.disabled=1,t.setData({loading:1})}}))},toIntegral:function(){wx.navigateTo({url:"/pages/integral/pages/mine/mine"})},openMore_old:function(e){var t=this;-1==t.creator&&wx.showToast({title:"相册创建者非法",image:"/images/toast_warning.png",duration:2e3});var a=e.currentTarget.dataset.eid,i=e.currentTarget.dataset.emain,n=e.currentTarget.dataset.piclist,o=e.currentTarget.dataset.stickstatus,s=0==o?"置顶动态":"取消置顶";console.log("stickStatus",o,s,a),t.userId==t.creator&&t.userId==t.pageUserId&&wx.showActionSheet({itemList:[s,"删除动态"],itemColor:"#333333",success:function(e){0===e.tapIndex&&t.stickEvent(a,o,t.userId,t.groupId,t),1===e.tapIndex&&t.openDeleteEvent(i,n)}}),t.userId===t.creator&&t.userId!=t.pageUserId&&wx.showActionSheet({itemList:[s],itemColor:"#333333",success:function(e){0===e.tapIndex&&t.stickEvent(a,o,t.userId,t.groupId,t)}}),t.userId!=t.creator&&t.userId==t.pageUserId&&wx.showActionSheet({itemList:["删除动态"],itemColor:"#333333",success:function(e){0===e.tapIndex&&t.openDeleteEvent(i,n)}}),t.userId==t.creator||(t.userId,t.pageUserId)},openMore:function(e){var t=this;-1==t.creator&&wx.showToast({title:"相册创建者非法",image:"/images/toast_warning.png",duration:2e3});e.currentTarget.dataset.eid;var a=e.currentTarget.dataset.emain,i=(e.currentTarget.dataset.piclist,e.currentTarget.dataset.stickstatus,t.data.more);0==a?(i.download=!0,i.sync=!0):4==a?(i.download=!0,i.sync=!1):(i.download=!1,i.sync=!1),t.userId==t.creator&&t.userId==t.pageUserId&&(i.del=!0,i.stick=!0),t.userId===t.creator&&t.userId!=t.pageUserId&&(i.del=!1,i.stick=!0),t.userId!=t.creator&&t.userId==t.pageUserId&&(i.del=!0,i.stick=!1),t.userId!=t.creator&&t.userId!=t.pageUserId&&(i.del=!1,i.stick=!1),t.setData({currentE:e,more:i,menuModalShow:!0})},openImagePreview:function(e){var t=e.currentTarget.dataset.current_index,a=e.currentTarget.dataset.piclist;wx.setStorageSync("lookImgs",a),wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+t})},openVideoPlayer:function(e){var t=e.currentTarget.dataset;this.setData({isShowPlayer:!0,videoUrl:t.url,videoCoverUrl:t.cover})},closeVideoPlayer:function(e){this.setData({isShowPlayer:!1,videoUrl:"",videoCoverUrl:""})},preventTouchMove:function(){},openEventDetail:function(e){var t=e.currentTarget.dataset.eid;wx.navigateTo({url:"/pages/eventdetail/eventdetail?lastPage=personalPage&eid="+t+"&efrom=personalPage"})},seeBigVideo:function(e){var t=e.currentTarget.dataset.url;wx.setStorageSync("videourl",t),wx.navigateTo({url:"/pages/viewscoll/bigvideo/bigvideo"})},openShare:function(e){if(-1!==this.eventQRCodeCanPublish){var t=e.currentTarget.dataset.eid,a=e.currentTarget.dataset.emain,i=e.currentTarget.dataset.piclist;wx.setStorageSync("sharePagePic",i),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=personalPage&clickfrom=eid&eid="+t+"&eMain="+a+"&groupid="+this.groupId+"&eventQRCodeCanPublish="+this.eventQRCodeCanPublish})}else wx.showToast({title:"跳转参数非法",image:"/images/toast_warning.png",duration:2e3})},like:function(t){if(this.disabled=0,1!==t.currentTarget.dataset.like_status){var a=this;a.isLikepushId(),n(a.userId,wx.getStorageSync("groupid"),"like");var i=t.currentTarget.dataset.eid,o=t.detail.formId,s=a.data.events;s.forEach(function(e){if(e.eid==i)return e.isLike=1,void e.likeCount++}),a.setData({events:s}),wx.request({url:e.host+"/YinianProject/yinian/AttachOrRemoveExpressionByLkNew",method:"GET",data:{userid:a.userId,eid:i,type:"like",formID:o},success:function(e){e.data},error:function(e){},fail:function(){},complete:function(){a.disabled=1}})}else this.disabled=1},openSyncEvent:function(){var e=o.data.currentE,t=e.currentTarget.dataset.emain,a=e.currentTarget.dataset.piclist,i=4==t?"video":"pic";-1!=this.inBlacklist?0!=this.inBlacklist?(wx.setStorageSync("editPhotoArr",a),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource=photosync&isPicOrVideo="+i})):wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1}):wx.showToast({title:"黑名单状态非法"})},openDownload:function(){var e=o.data.currentE,t=e.currentTarget.dataset.emain,a=e.currentTarget.dataset.piclist,i=4==t?"video":"pic";wx.setStorageSync("editPhotoArr",a),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource=download&isPicOrVideo="+i})},stickEvent_old:function(t,a,i,n,o){if(0!==o.disabled){o.disabled=0;var s=1==a?"cancel":"stick",r=1==a?"取消置顶":"置顶";wx.showModal({title:"提示",content:"是否"+r+"此动态",success:function(d){d.confirm?(wx.showLoading({title:"处理中"}),wx.request({url:e.host+"/YinianProject/yinian/ModifyEventLevel",data:{userid:i,groupid:n,eid:t,type:s},success:function(e){if(0===e.data.code){wx.showToast({title:r+"成功"});var i=o.data.events;i.forEach(function(e,i){e.eid!==t||(e.stickStatus=0==a?1:0)}),o.setData({events:i})}else wx.showToast({title:"操作失败",image:"/images/toast_warning.png",duration:2e3})},error:function(e){wx.showToast({title:"操作失败",image:"/images/toast_warning.png",duration:2e3})},fail:function(){wx.showToast({title:"操作失败",image:"/images/toast_warning.png",duration:2e3})},complete:function(){o.disabled=1,wx.hideLoading()}})):o.disabled=1}})}else wx.showToast({title:"手速太快",image:"/images/toast_warning.png",duration:2e3})},stickEvent:function(){var t=this;t.setData({menuModalShow:!1});var a=t.data.currentE,i=a.currentTarget.dataset.eid,n=a.currentTarget.dataset.stickstatus;if(0!==t.disabled){t.disabled=0;var o=1==n?"cancel":"stick",s=1==n?"取消置顶":"置顶";wx.showModal({title:"提示",content:"是否"+s+"此动态",success:function(a){a.confirm?(wx.showLoading({title:"处理中"}),wx.request({url:e.host+"/YinianProject/yinian/ModifyEventLevel",data:{userid:t.userId,groupid:t.groupId,eid:i,type:o},success:function(e){if(0===e.data.code){wx.showToast({title:s+"成功"});var a=t.data.events;a.forEach(function(e,t){e.eid!==i||(e.stickStatus=0==n?1:0)}),t.setData({events:a})}else wx.showToast({title:"操作失败",image:"/images/toast_warning.png",duration:2e3})},error:function(e){wx.showToast({title:"操作失败",image:"/images/toast_warning.png",duration:2e3})},fail:function(){wx.showToast({title:"操作失败",image:"/images/toast_warning.png",duration:2e3})},complete:function(){t.disabled=1,wx.hideLoading()}})):t.disabled=1}})}else wx.showToast({title:"手速太快",image:"/images/toast_warning.png",duration:2e3})},openDeleteEvent:function(e,t){var a=4==e?"video":"pic";wx.setStorageSync("editPhotoArr",t),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource=delete&isPicOrVideo="+a+"&fromPage=presonalPage"})},deleteEventRequest:function(e){var t=this;e&&wx.showModal({title:"删除动态",content:"确定删除此条动态吗？",confirmColor:"#353535",success:function(i){i.confirm&&a.wxreq({pathname:"YinianProject/yinian/DeleteEvent",data:{userid:wx.getStorageSync("userid"),eventId:e}}).then(function(a){if("success"==a.msg){wx.showToast({title:"删除成功",icon:"success",duration:2e3});var i=t.data.events;i=i.filter(function(t,a){return t.eid!=e}),t.setData({events:i})}})}})},deleteEvent:function(){var e=this;e.setData({menuModalShow:!1});var t=e.data.currentE,a=t.currentTarget.dataset.eid,i=t.currentTarget.dataset.emain,n=t.currentTarget.dataset.piclist;if(0==i||4==i){var o=4==i?"video":"pic";wx.setStorageSync("editPhotoArr",n),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource=delete&isPicOrVideo="+o+"&fromPage=presonalPage"})}else e.deleteEventRequest(a)},openComment:function(e){var t=e.currentTarget.dataset.eid;this.commentEid=t,this.commentedUserid=10,this.commentedname="系统消息",this.setData({showComInput:!0,inputfocus:!0,placehold:"对ta说点啥...",contentCurrent:!1})},openReply:function(e){var t=e.currentTarget.dataset.eid,a=e.currentTarget.dataset.nick,i=e.currentTarget.dataset.cuserid;i!=this.userId?(this.commentEid=t,this.commentedUserid=i,this.commentedname=a,this.setData({showComInput:!0,inputfocus:!0,placehold:"@"+a+":",contentCurrent:!1})):this.deleteComment(e)},sendcomment:function(e){var o=e.detail.formId,s=e.detail.value.content,r=wx.getStorageSync("userid")||i.globalData.userInfo.userid,d=this.commentEid,c=this.commentedUserid,u=this.commentedname;if(0!=s.length)if(t.testStr(s))wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1});else{var l=this;l.isCommentpushId(),n(r,wx.getStorageSync("groupid"),"comment");var m=a.formatTimeWithSecond(new Date),h={cid:-1,commentedUser:{userid:c,unickname:u},commentUser:{userid:r,unickname:i.globalData.userInfo.nickName,upic:i.globalData.userInfo.avatarUrl},ccontent:s,ctime:m},g=Array.from(l.data.events);l.data.events.forEach(function(e,t){e.eid==d&&(g[t].comments.unshift(h),g[t].commentCount=parseInt(g[t].commentCount)+1)}),l.setData({showComInput:!1,events:g,value:"",contentCurrent:!1,placehold:"说点什么..."}),l.commentedUserid=10,l.commentedname="系统消息",wx.showToast({title:"发表成功",icon:"success",duration:1e3}),a.wxreq({pathname:"YinianProject/yinian/SendComment1",data:{commentUserId:r,commentedUserId:c,eventId:d,content:s,formID:o}}).then(function(e){0==e.code&&(l.data.events.forEach(function(t){t.eid==d&&t.comments.forEach(function(t){t.ctime===m&&(t.cid=e.data[0].cid)})}),l.setData({events:l.data.events}))})}else wx.showModal({title:"提示",content:"请先输入评论内容",showCancel:!1})},hiddenWrite:function(){this.setData({showComInput:!1})},checkchange:function(e){var t=e.detail.value.trim().length>0;this.setData({contentCurrent:t})},stop:function(){},deleteComment:function(t){var a=this,i=t.currentTarget.dataset.cid,n=t.currentTarget.dataset.eid,o=t.currentTarget.dataset.cuserid,s=a.gOrigin,r=a.gtype;o!=a.userId&&a.creator!=a.userId||o!=a.userId&&a.creator==a.userId&&1!=s&&11!=r||wx.showModal({title:"提示",content:"是否删除该条评论",success:function(t){t.confirm&&wx.request({url:e.getUrl("YinianProject/yinian/DeleteComment"),method:"GET",data:{commentID:i},success:function(e){if(0==e.data.code){var t=a.data.events;t.forEach(function(e){if(e.eid==n){var t=e.comments;t.forEach(function(e,a){e.cid==i&&t.splice(a,1)})}}),a.setData({events:t})}else wx.showToast({title:"删除评论失败",image:"/images/toast_warning.png",duration:2e3})},error:function(e){wx.showToast({title:"删除评论失败",image:"/images/toast_warning.png",duration:2e3})},fail:function(){wx.showToast({title:"删除评论失败",image:"/images/toast_warning.png",duration:2e3})},complete:function(){}})}})},getIsInBlacklist:function(){var t=this;wx.request({url:e.host+"/YinianProject/user/inBlackList",methods:"GET",data:{userid:t.userId},success:function(e){var a=e.data;0==a.code?t.inBlacklist=a.data[0].inBlackList:console.log("调取黑名单失败")}})},formatUserInfo:function(e){var t=this.data.user;return t.nick=e.unickname,t.avatar=e.upic,t.point=e.useablePoints||0,t.cover=e.gpic,t.albumName=e.gname,t.eventNumber=e.eventCnt,t.photoNumber=e.picCnt,t},formatEventData:function(e,t,a){var i=this,n=[];return e.forEach(function(e){var a=i.formatTime(e.euploadtime),s=0;e.like.length>0&&e.like.forEach(function(e){e.likeUserID==t&&(s=1)});var r={download:!0,sync:!0,comment:!0,like:!0,andFriends:!0};1!=e.eMain&&2!=e.eMain||(r.download=!1,r.sync=!1),4==e.eMain&&(r.sync=!1),3==o.albumType&&(r.comment=!1,r.like=!1),3!=o.albumType&&1!=o.albumType&&5!=o.albumType||(r.andFriends=!1),2==o.albumType&&2==e.eMain&&(r.andFriends=!1);var d={eid:e.eid,avatar:e.upic,nick:e.unickname,time:a,desc:e.etext,location:e.eplace,isLike:s,textTitle:e.textTitle,likeCount:e.likeCnt,stickStatus:e.elevel,eMain:e.eMain,photos:e.picList,audio:e.eaudio,audioDuration:e.eaudioDuration,audioPlayStatus:"ready",andFriends:e.attentionMember,comments:e.comments,commentCount:e.commentCnt,jurisdiction:r};n.push(d)}),n},formatTime:function(e){var t=Date.parse(e.replace(/-/gi,"/"))/1e3,a=void 0,i=void 0,n=void 0,o=void 0,s=parseInt((new Date).getTime()/1e3),r=void 0,d=new Date(1e3*t),c=d.getFullYear(),u=d.getMonth()+1,l=d.getDate(),m=d.getHours(),h=d.getMinutes(),g=d.getSeconds();return u<10&&(u="0"+u),l<10&&(l="0"+l),m<10&&(m="0"+m),h<10&&(h="0"+h),g<10&&(g="0"+g),r=s-t,o=parseInt(r/86400),n=parseInt(r/3600),i=parseInt(r/60),a=parseInt(r),o>0&&o<3?o+"天前":o<=0&&n>0?n+"小时前":n<=0&&i>0?i+"分钟前":a<60?a<=0?"刚刚发表":a+"秒前":o>=3&&o<30?u+"-"+l+" "+m+":"+h:o>=30?c+"-"+u+"-"+l+" "+m+":"+h:void 0},updateEvents:function(e,t){var a=this,i=a.data.events;i.forEach(function(a){if(a.eid==e){var i;!function(){var e=a.photos;for(i=e.length-1;i>=0;i--)!function(){var a=e[i];t.forEach(function(t){a.pid==t&&e.splice(i,1)})}()}()}}),a.setData({events:i})},updateComment:function(e){var t=this,a=t.data.events,i=wx.getStorageSync("userInfo"),n={cid:e.cid,ceid:e.eid,ccontent:e.text,commentUser:{userid:i.userid,unickname:i.nickName},commentedUser:{}};-1===e.replyUserId?n.commentedUser={userid:"10",unickname:"系统消息",upic:"http://7xlmtr.com1.z0.glb.clouddn.com/default.jpg"}:n.commentedUser={userid:e.replyUserId,unickname:e.nick,upic:"http://7xlmtr.com1.z0.glb.clouddn.com/default.jpg"},a.forEach(function(t){t.eid===e.eid&&(t.commentCount++,t.comments.unshift(n))}),t.setData({events:a})},updateMultipleComment:function(e){var t=this,a=t.data.events,i=wx.getStorageSync("userInfo"),n=e.map(function(e){var t={cid:e.cid,ceid:e.eid,ccontent:e.text,commentUser:{userid:i.userid,unickname:i.nickName},commentedUser:{}};return e.replyUserId||e.nick?t.commentedUser={userid:e.replyUserId,unickname:e.nick,upic:"http://7xlmtr.com1.z0.glb.clouddn.com/default.jpg"}:t.commentedUser={userid:"10",unickname:"系统消息",upic:"http://7xlmtr.com1.z0.glb.clouddn.com/default.jpg"},t});a.forEach(function(e){n.forEach(function(t){e.eid===t.ceid&&(e.commentCount++,e.comments.unshift(t))})}),t.setData({events:a})},generatePermission:function(e){e.pageUserId==e.userId&&e.setData({deletePermission:1}),e.pageUserId==e.userId||e.creator!=e.userId||1!=e.gOrigin&&11!=e.gtype||(console.log("看别人"),e.setData({deletePermission:1}))},updateDeleteComment:function(e,t){var a=this,i=a.data.events;i.forEach(function(a){if(a.eid==e){var i=a.comments;i.forEach(function(e,a){e.cid==t&&i.splice(a,1)})}}),a.setData({events:i})},updateDeleteMultipleComment:function(e,t){var a=this,i=a.data.events;i.forEach(function(a){if(a.eid==e){var i=void 0;i=a.comments.filter(function(e){var i=!0;return t.forEach(function(t){i&&e.cid==t&&(a.commentCount--,i=!1)}),i}),a.comments=i}}),a.setData({events:i})},updateStick:function(e,t){var a=this,i=a.data.events;i.forEach(function(a){a.eid!==e||(a.stickStatus=t)}),a.setData({events:i})},updateLike:function(e){var t=this,a=t.data.events;a.forEach(function(t){if(t.eid==e)return t.isLike=1,void t.likeCount++}),t.setData({events:a})},playAudio:function(e){var t=o.data.events,a=o.currentPlayAudioIndex;-1!=a&&(t[a].audioPlayStatus="ready",o.setData({events:t}));var i=e.currentTarget.dataset.e_index,n=e.currentTarget.dataset.audio_src;e.currentTarget.dataset.audio_duration;o.currentPlayAudioIndex=i,r.src=n,r.play()},stopAudio:function(e){e.currentTarget.dataset.e_index,e.currentTarget.dataset.audio_src,e.currentTarget.dataset.audio_duration;r.stop()},isLikepushId:function(){""!=i.pushId&&void 0!=i.pushId&&a.wxreq({pathname:"YinianProject/ep/isLike",data:{pushId:i.pushId,port:i.globalData.port}}).then(function(e){},function(e){})},isCommentpushId:function(){""!=i.pushId&&void 0!=i.pushId&&a.wxreq({pathname:"YinianProject/ep/isComment",data:{pushId:i.pushId,port:i.globalData.port}}).then(function(e){},function(e){})}}); 
 			}); 	require("pages/personalPage/personalPage.js");
 		__wxRoute = 'pages/activitypage/activityindex/activityindex';__wxRouteBegin = true; 	define("pages/activitypage/activityindex/activityindex.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/util.js"),i=require("../../../utils/api.js"),a=require("../../../utils/albumsjump.js").albumsjump,e=getApp();Page({data:{allActivityGroup:[],myActivityGroup:[],isAllGroup:!0,showLoadingImg:!1,loadingImgOrText:!0,showLoadingImgMy:!1,loadingImgOrTextMy:!0,clickGroups:[{imgUrl:"http://oibl5dyji.bkt.clouddn.com/stories_cup_plus@2x.png",title:"故事集",openUrl:"/package/stories/pages/index/index"}]},onLoad:function(t){e.stat.statpv({route:this.route,options:t}),e.getUserInfo(function(t){"新用户"!=t.nickName||wx.redirectTo({url:"/pages/activitypage/login/home"})}),this.getAllActivity(),this.getSpacialActivity()},onShow:function(){wx.getStorageSync("userInfo")&&wx.getStorageSync("userInfo").userid?this.userid=wx.getStorageSync("userInfo").userid:wx.showModal({title:"错误",content:"获取用户信息失败，请重试",showCancel:!1,success:function(){wx.reLaunch({url:"/pages/index/index"})}})},toGroupScoll:function(t){var i=t.currentTarget.dataset.groupid,e=t.currentTarget.dataset.grouptype;a({groupNewType:e,data:{lastPage:"activityindex",from:"grouplist",groupid:i},navigator:"navigate"})},showAll:function(){this.data.isAllGroup||(this.setData({isAllGroup:!0}),this.data.allActivityGroup&&0==this.data.allActivityGroup.length&&this.getAllActivity())},gotoStory:function(t){e.stat.request({operation:"activityStory",userId:wx.getStorageSync("userid")}),wx.navigateTo({url:t.currentTarget.dataset.open})},showMy:function(){this.data.isAllGroup&&(this.setData({isAllGroup:!1}),this.data.myActivityGroup&&this.getMyActivity())},toSpecailActivity:function(i){if(0!=i.currentTarget.dataset.status){var a=i.currentTarget.dataset.url;if(a){wx.navigateTo({url:"/"+a});var e={userId:this.userid};t.joinSpacialActivity(e)}}else wx.showModal({title:"提示",content:"活动将于5月2日开始，敬请期待喔",showCancel:!1})},getAllActivity:function(){var i=this;wx.showToast({title:"正在加载...",icon:"loading",duration:3e4,mask:!0}),t.wxreq({pathname:"YinianProject/activity/GetActivitiGroups",data:{type:"initialize",number:0}}).then(function(t){0==t.code?(t.data.forEach(function(t){t.activitiStartTime=t.activitiStartTime.slice(0,10).replace(/-/g,"."),t.activitiEndTime=t.activitiEndTime.slice(0,10).replace(/-/g,".")}),i.setData({allActivityGroup:t.data,showLoadingImg:!1,loadingImgOrText:!0}),i.isloading=!1,wx.hideToast()):(wx.hideToast(),wx.showModal({title:"提示",content:"获取相册不成功，请重试",showCancel:!1,success:function(){wx.reLaunch({url:"/pages/index/index"})}}))}).catch(function(t){wx.hideToast(),wx.showModal({title:"提示",content:"获取相册不成功，请重试",showCancel:!1,success:function(){wx.reLaunch({url:"/pages/index/index"})}})})},getSpacialActivity:function(){var i=this;t.wxreq({pathname:"YinianProject/activitySpacial/selectAllSpacialActivity",data:{}}).then(function(t){0==t.code&&i.setData({specialList:t.data})})},getMyActivity:function(){var i=this;wx.showToast({title:"正在加载...",icon:"loading",duration:3e4,mask:!0}),t.wxreq({pathname:"YinianProject/activity/GetMyActivitiGroups",data:{type:"initialize",jointime:0,userid:i.userid}}).then(function(t){0==t.code?(t.data.forEach(function(t){t.activitiStartTime=t.activitiStartTime.slice(0,10).replace(/-/g,"."),t.activitiEndTime=t.activitiEndTime.slice(0,10).replace(/-/g,".")}),i.setData({myActivityGroup:t.data,showLoadingImgMy:!1,loadingImgOrTextMy:!0}),i.ismyloading=!1,wx.hideToast()):(wx.hideToast(),wx.showModal({title:"提示",content:"获取相册不成功，请重试",showCancel:!1,success:function(){}}))}).catch(function(t){wx.hideToast(),wx.showModal({title:"提示",content:"获取相册不成功，请重试",showCancel:!1,success:function(){}})})},onReachBottom:function(){wx.getStorageSync("userInfo")&&(0==this.data.myActivityGroup.length&&!this.data.isAllGroup||0==this.data.allActivityGroup.length&&this.data.isAllGroup||this.loading())},loading:function(){var t=this.data.isAllGroup;if(this.data.myActivityGroup.length>0&&!t||this.data.allActivityGroup.length>0&&t){var a=this;if(t){if(this.isloading)return;this.isloading=!0,this.setData({showLoadingImg:!0,loadingImgOrText:!0})}else{if(this.ismyloading)return;this.ismyloading=!0,this.setData({showLoadingImgMy:!0,loadingImgOrTextMy:!0})}var e=t?"YinianProject/activity/GetActivitiGroups":"YinianProject/activity/GetMyActivitiGroups",o=null;o=t?{type:"loading",number:this.data.allActivityGroup[this.data.allActivityGroup.length-1].number,userid:a.userid}:{type:"loading",jointime:this.data.myActivityGroup[this.data.myActivityGroup.length-1].joinTime,userid:a.userid},wx.request({url:i.getUrl(e),data:o,success:function(i){0==i.data.code?0==(i=i.data).data.length?t?a.setData({showLoadingImg:!0,loadingImgOrText:!1}):a.setData({showLoadingImgMy:!0,loadingImgOrTextMy:!1}):(i.data.forEach(function(i){i.activitiStartTime=i.activitiStartTime.slice(0,10).replace(/-/g,"."),i.activitiEndTime=i.activitiEndTime.slice(0,10).replace(/-/g,"."),t?a.data.allActivityGroup.push(i):a.data.myActivityGroup.push(i)}),t?(a.isloading=!1,a.setData({allActivityGroup:a.data.allActivityGroup,showLoadingImg:!1})):(a.ismyloading=!1,a.setData({myActivityGroup:a.data.myActivityGroup,showLoadingImgMy:!1}))):t?(a.isloading=!1,a.setData({showLoadingImg:!1})):(a.ismyloading=!1,a.setData({showLoadingImgMy:!1}))},fail:function(){t?(a.isloading=!1,a.setData({showLoadingImg:!1})):(a.ismyloading=!1,a.setData({showLoadingImgMy:!1}))}})}}}); 
 			}); 	require("pages/activitypage/activityindex/activityindex.js");
 		__wxRoute = 'pages/publish/pages/image/image';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/pages/image/image.js';	define("pages/publish/pages/image/image.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var t=require("../../icon.js"),a=require("../../publish.js"),n=getApp(),s=void 0;Page({data:{ICON:Object,groupId:-1,albumType:-1,text:"",location:"",publishTime:"",selectedFriends:[],selectedFriendIds:"",selectedSyncAlbums:{groupNames:"",groupIds:""},images:[],jurisdiction:{andFriends:!1,publishedTime:!1}},onLoad:function(e){n.stat.statpv({route:this.route,options:e}),s=this;var i=wx.getStorageSync("uploadchoosedpic")||[];s.setData({ICON:t.ICON,groupId:e.groupId,images:i,albumType:e.albumType}),s.generatePermissions(e.albumType),(0,a.previousPageNoRefresh)()},onReady:function(){},onShow:function(){s.readSelectedSyncAlbum()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},getInputText:function(e){s.setData({text:e.detail})},getLocation:function(e){s.setData({location:e.detail.result})},getDatetime:function(e){s.setData({publishTime:e.detail})},getAndFriends:function(e){if(e.detail.length=0){var t=s.data.selectedFriends;t.length=0,s.setData({selectedFriends:t}),console.log(s.data.selectedFriends)}else s.setData({selectedFriends:e.detail})},getSelectedSyncAlbums:function(e){var t=s.data.selectedSyncAlbums;t.groupIds=e.detail.groupIds,t.groupNames=e.detail.result,s.setData({selectedSyncAlbums:t})},selectImages:function(){var t=s.data.images,a=0;t.length<18?a=9:t.length>=18&&t.length<28?a=9-t.length%9:wx.showToast({title:"最多上传27张",image:"/images/toast_warning.png"}),wx.chooseImage({count:a,sizeType:["original"],sourceType:["album"],success:function(a){t.push.apply(t,e(a.tempFilePaths)),s.setData({images:t})}})},deleteImage:function(e){var t=e.currentTarget.dataset.index,a=s.data.images;a=a.filter(function(e,a){return t!=a}),s.setData({images:a})},readSelectedSyncAlbum:function(){var e=s.data.selectedSyncAlbums;wx.getStorageSync("strName")&&(e.groupNames=wx.getStorageSync("strName").replace(/\//g,"、"));var t=wx.getStorageSync("strId");e.groupIds=t||s.data.groupId,s.setData({selectedSyncAlbums:e})},generateAndFriendIds:function(){var e=s.data.selectedFriends,t="";e.forEach(function(a,n){n!=e.length-1?t+=a.userid+",":t+=a.userid+""}),s.setData({selectedFriendIds:t})},formSubmit:function(e){s.generateAndFriendIds();var t=s.data.images;if(0!==t.length){var a=e.detail.formId,i=s.data.text,r=s.data.location,o=s.data.selectedFriendIds,d=s.data.publishTime,l=s.data.selectedSyncAlbums.groupIds;console.log(o),n.upState=2,n.fromUp="pic",n.upObj={formID:a,content:i,place:r,attentionMember:o,publishedTime:d,mainIdStr:l,picarr:t},wx.getStorageSync("userid")?wx.navigateBack({delta:1}):wx.showModal({title:"提示",content:"请先授权",showCancel:!1})}else wx.showToast({title:"请添加图片",image:"/images/toast_warning.png"})},generatePermissions:function(e){var t=[2,3,4,5,11],a=[2,4],n=parseInt(e),i=s.data.jurisdiction;t.includes(n)&&(i.publishedTime=!0),a.includes(n)&&(i.andFriends=!0),s.setData({jurisdiction:i})}}); 
 			}); 	require("pages/publish/pages/image/image.js");
 		__wxRoute = 'pages/publish/pages/selectMember/selectMember';__wxRouteBegin = true; 	define("pages/publish/pages/selectMember/selectMember.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var t=require("../../icon.js"),a=require("../../api.js"),n=getApp(),r=void 0;Page({data:{testImageUrl:"http://img06.tooopen.com/images/20160806/tooopen_sy_174396723841.jpg",memberList:[],memberNumber:0,loading:-1,userId:wx.getStorageSync("userid"),ICON:Object},onLoad:function(e){n.stat.statpv({route:this.route,options:e}),(r=this).groupId=e.groupId,r.selected=e.selected,console.log("that.selected",r.selected.length),r.pageNumber=1,r.loadComplete=!1,r.setData({ICON:t.ICON}),r._getAlbumMembers(),r._getAlbumBaseInfo()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){r._getAlbumMembers()},_getAlbumMembers:function(){if(!r.loadComplete&&0!==r.data.loading){r.setData({loading:0});var t={groupid:r.groupId,userid:r.data.userId,pagenum:r.pageNumber};(0,a.getAlbumMembers)(t).then(function(t){if(0!==t.length){var a=r.data.memberList;r.selected.length>0&&r.updateSelected(t),a.push.apply(a,e(t)),r.setData({memberList:a,loading:1}),r.pageNumber++}else r.loadComplete=!0}).catch(function(e){wx.showToast({title:e.msg,image:"/images/toast_warning.png"}),r.disabled=1,r.setData({loading:1})})}},_getAlbumBaseInfo:function(){(0,a.getAlbumBaseInfo)(r.groupId).then(function(e){console.log("b",e),r.setData({memberNumber:e.gnum,adminId:e.userid})}).catch(function(e){wx.showToast({title:e.msg,image:"/images/toast_warning.png"})})},selectMember:function(e){var t=e.currentTarget.dataset.userid,a=e.currentTarget.dataset.selected;if(!r.getMoreThan5Selected()||a)for(var n=r.data.memberList,o=0;o<n.length;o++){var s=n[o];if(parseInt(s.user.userid)===t)return s.selected?s.selected=!1:s.selected=!0,void r.setData({memberList:n})}else wx.showToast({title:"最多选择5个",image:"/images/toast_warning.png"})},getMoreThan5Selected:function(){for(var e=r.data.memberList,t=0,a=0;a<e.length;a++){var n=e[a];if(!(t<5))return!0;n.selected&&t++}return!1},saveSelected:function(){for(var e=r.data.memberList,t=[],a=0;a<e.length;a++){if(t.length>5)return;var n=e[a];n.selected&&t.push(n.user)}var o=getCurrentPages();o[o.length-2].setData({selectedFriends:t}),wx.navigateBack({delta:1})},updateSelected:function(e){var t=r.selected.split(",");return e.map(function(e){for(var a=e.user.userid,n=0;n<t.length;n++)if(a==t[n])return e.selected=!0,e}),console.log(e),e}}); 
 			}); 	require("pages/publish/pages/selectMember/selectMember.js");
 		__wxRoute = 'pages/publish/pages/text/text';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/pages/text/text.js';	define("pages/publish/pages/text/text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../utils/util.js"),t=require("../../icon.js"),n=require("../../api.js"),i=void 0,o=getApp();Page({data:{ICON:Object,title:"",text:"",location:"",publishTime:"",groupId:0,albumType:-1,selectedFriends:[],selectedFriendIds:""},onLoad:function(e){o.stat.statpv({route:this.route,options:e}),console.log("options",e),(i=this).setData({ICON:t.ICON,groupId:e.groupId,albumType:e.albumType})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},inputTitle:function(e){var t=e.detail.value;i.setData({title:t})},getInputText:function(e){i.setData({text:e.detail})},getLocation:function(e){i.setData({location:e.detail.result})},getAndFriends:function(e){if(console.log("getAndFriends",e),e.detail.length=0){var t=i.data.selectedFriends;t.length=0,i.setData({selectedFriends:t})}else i.setData({selectedFriends:e.detail})},generateAndFriendIds:function(){var e=i.data.selectedFriends,t="";e.forEach(function(n,i){i!=e.length-1?t+=n.userid+",":t+=n.userid+""}),i.setData({selectedFriendIds:t})},getDatetime:function(e){console.log("e",e),i.setData({publishTime:e.detail})},formSubmit:function(t){if(i.generateAndFriendIds(),0!==i.data.text.length){var a={formID:t.detail.formId,userId:wx.getStorageSync("userid"),groupId:i.data.groupId,title:i.data.title,content:i.data.text,attentionMember:i.data.selectedFriendIds,memorytime:(0,e.formatTime)(new Date),publishTime:i.data.publishTime,place:i.data.location};(0,n.publishText)(a).then(function(e){console.log("发布成功",e),wx.showToast({title:"发布成功",complete:function(){o.fromUp="text",console.log("res",e[0]),console.log("res.eid",e[0].eid),o.text=e,wx.navigateBack({delta:1})}})}).catch(function(e){wx.showToast({title:"发布失败"})})}else wx.showToast({title:"请输入文字内容",image:"/images/toast_warning.png"})}}); 
 			}); 	require("pages/publish/pages/text/text.js");
 		__wxRoute = 'pages/publish/pages/video/video';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/pages/video/video.js';	define("pages/publish/pages/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../icon.js"),t=require("../../publish.js"),a=void 0,i=getApp();Page({data:{ICON:Object,groupId:-1,albumType:-1,text:"",location:"",publishTime:"",selectedFriends:[],selectedFriendIds:"",selectedSyncAlbums:{groupNames:"",groupIds:""},video:{tempFilePath:"",thumbTempFilePath:"",width:0,height:0,size:0,duration:0},jurisdiction:{andFriends:!1,publishedTime:!1}},onLoad:function(n){i.stat.statpv({route:this.route,options:n}),a=this;var d=wx.getStorageSync("uploadchoosedvideo");d&&a.setData({video:d}),a.setData({ICON:e.ICON,groupId:n.groupId,albumType:n.albumType}),a.generatePermissions(n.albumType),(0,t.previousPageNoRefresh)()},onReady:function(){},onShow:function(){a.readSelectedSyncAlbum()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},getInputText:function(e){a.setData({text:e.detail})},getLocation:function(e){a.setData({location:e.detail.result})},getDatetime:function(e){a.setData({publishTime:e.detail})},getAndFriends:function(e){if(e.detail.length=0){var t=a.data.selectedFriends;t.length=0,a.setData({selectedFriends:t}),console.log(a.data.selectedFriends)}else a.setData({selectedFriends:e.detail})},getSelectedSyncAlbums:function(e){var t=a.data.selectedSyncAlbums;t.groupIds=e.detail.groupIds,t.groupNames=e.detail.result,a.setData({selectedSyncAlbums:t})},selectVideo:function(){a.data.video;wx.chooseVideo({count:1,sizeType:["original"],sourceType:["album"],success:function(e){a.setData({video:e})}})},deleteVideo:function(e){var t=a.data.video;t.tempFilePath="",t.thumbTempFilePath="",t.width=0,t.height=0,t.size=0,t.duration=0,a.setData({video:t})},readSelectedSyncAlbum:function(){var e=a.data.selectedSyncAlbums;wx.getStorageSync("strName")&&(e.groupNames=wx.getStorageSync("strName").replace(/\//g,"、"));var t=wx.getStorageSync("strId");e.groupIds=t||a.data.groupId,a.setData({selectedSyncAlbums:e})},generateAndFriendIds:function(){var e=a.data.selectedFriends,t="";e.forEach(function(a,i){i!=e.length-1?t+=a.userid+",":t+=a.userid+""}),a.setData({selectedFriendIds:t})},formSubmit:function(e){a.generateAndFriendIds();var t=a.data.video.tempFilePath;if(0!==t.length){var n=e.detail.formId,d=a.data.text,s=a.data.location,o=a.data.selectedFriendIds,r=a.data.publishTime,u=a.data.selectedSyncAlbums.groupIds;i.upState=2,i.fromUp="video",i.upObj={formID:n,content:d,place:s,attentionMember:o,publishedTime:r,mainIdStr:u,picarr:t},wx.getStorageSync("userid")?wx.navigateBack({delta:1}):wx.showModal({title:"提示",content:"请先授权",showCancel:!1})}else wx.showToast({title:"请添加视频",image:"/images/toast_warning.png"})},generatePermissions:function(e){var t=[2,3,4,5,11],i=[2,4],n=parseInt(e),d=a.data.jurisdiction;t.includes(n)&&(d.publishedTime=!0),i.includes(n)&&(d.andFriends=!0),a.setData({jurisdiction:d})}}); 
 			}); 	require("pages/publish/pages/video/video.js");
 		__wxRoute = 'pages/publish/pages/audio/audio';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/pages/audio/audio.js';	define("pages/publish/pages/audio/audio.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t<10?t="00:0"+t:t>=10&&t<60?"00:"+t:"01:00"}var o=require("../../icon.js"),a=require("../../publish.js"),e=getApp(),n=null,i=null,r=wx.getRecorderManager(),l=wx.createInnerAudioContext(),c=void 0;Page({data:{recordStatus:"ready",recordMax:120,recordStep:0,recordTiming:"00:00",recordMaxTiming:"01:00",playStatus:"ready",playMax:120,palyStep:0,playTiming:"00:00",playMaxTiming:"01:00",location:"",publishTime:"",groupId:0,audio:{tempFilePath:"",duration:0,fileSize:0}},onLoad:function(t){e.stat.statpv({route:this.route,options:t}),(c=this).setData({ICON:o.ICON,groupId:t.groupId}),(0,a.previousPageNoRefresh)()},onReady:function(){},onShow:function(){},onHide:function(){console.log("页面隐藏"),r.stop()},onUnload:function(){console.log("页面卸载"),r.stop()},onPullDownRefresh:function(){},onReachBottom:function(){},getLocation:function(t){c.setData({location:t.detail.result})},getDatetime:function(t){c.setData({publishTime:t.detail})},startRecord:function(t){r.start()},stopRecord:function(t){r.stop()},reRecord:function(t){r.start()},startPlay:function(t){l.play()},stopPlay:function(t){l.stop()},formSubmit:function(t){var o=c.data.audio.tempFilePath;if(0!==o.length){var a=t.detail.formId,n=c.data.groupId,i=c.data.location,r=c.data.publishTime,l=Math.ceil(c.data.audio.duration/1e3);e.upState=2,e.fromUp="audio",e.upObj={formID:a,groupId:n,place:i,publishedTime:r,duration:l,picarr:o},console.log("appobj",e.upObj),wx.getStorageSync("userid")?wx.navigateBack({delta:1}):wx.showModal({title:"提示",content:"请先授权",showCancel:!1})}else wx.showToast({title:"没有声音文件",image:"/images/toast_warning.png"})}}),r.onStart(function(){c.setData({recordStatus:"recording",recordTiming:"00:00",recordStep:0,playTiming:"00:00",playStep:0}),console.log("录音开始");var o=0,a=0;n=setInterval(function(){o++,a=Math.floor(o/2),a=t(a),c.setData({recordStep:o,recordTiming:a})},500)}),r.onStop(function(o){console.log("录音结束",o),clearInterval(n),l.src=o.tempFilePath;var a=c.data.audio;a.tempFilePath=o.tempFilePath,a.fileSize=o.fileSize,a.duration=o.duration,console.log("e",o);var e=2*Math.floor(o.duration/1e3),i=t(e/2);c.setData({recordStatus:"completed",playMax:e,playMaxTiming:i,audio:a})}),l.onPlay(function(){console.log("正在播放",l.duration),c.setData({playStatus:"playing",playTiming:"00:00"});var o=0,a=0;i=setInterval(function(){o++,a=Math.floor(o/2),a=t(a),c.setData({playStep:o,playTiming:a})},500)}),l.onCanplay(function(){console.log("音频进入可播放状态")}),l.onError(function(t){console.log("播放发生错误",t)}),l.onEnded(function(){console.log("音频自然播放结束"),clearInterval(i),c.setData({playStatus:"ready"})}),l.onStop(function(){console.log("播放结束"),clearInterval(i),c.setData({playStatus:"ready",playStep:0,playTiming:"00:00"})}); 
 			}); 	require("pages/publish/pages/audio/audio.js");
 		__wxRoute = 'pages/notification/notification';__wxRouteBegin = true; 	define("pages/notification/notification.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js"),e=require("../../utils/api.js"),o=require("../../utils/reg.js"),a=getApp(),i=["YinianProject/ep/queryAllGroupEventFirst","YinianProject/ep/queryAllGroupLikeFirst","YinianProject/ep/queryAllGroupCommentFirst","","YinianProject/ep/queryAllGroupInviteFirst","YinianProject/ep/queryAllGroupJoinFirst"];Page({data:{userid:null,type:"",pushId:"",groupId:0,typeUrl:"",showComInput:!1,inputfocus:!1,placehold:"对ta说点啥...",contentCurrent:!1,notifyAlbums:[],tipText:"点击查看更多",hasloadall:!1,loadingImgOrText:!1,notifylimit:0},onLoad:function(t){console.log(t),a.stat.statpv({route:this.route,options:t}),a.pushId=t.pushId,a.globalData.port=t.port,console.log(a.globalData.port),this.enterLoadPage(t.pushId),this.setData({type:t.type,pushId:t.pushId}),t.groupId&&this.setData({groupId:t.groupId}),this.type=t.type,this.showNotificationtext(t.type),t.version&&(this.version=t.version),t.port&&(this.port=t.port,this.setData({port:t.port})),t.fromUserID&&(this.fromUserID=t.fromUserID),t.fromSpaceID&&(this.fromSpaceID=t.fromSpaceID),t.fromEventID&&(this.fromEventID=t.fromEventID),this.eventId=t.eventId,this.triggerUserId=t.triggerUserId},onReady:function(){},onShow:function(){var t=this.version?this.version:"",e=this.port?this.port:"",o=this.fromUserID?this.fromUserID:0,i=this.fromSpaceID?this.fromSpaceID:0,n=this.fromEventID?this.fromEventID:0,s=this;1!=s.data.fromlast?a.getUserInfo(function(t){console.log(t),s.setData({userid:t.userid,showLoadingImg:!0}),s.loadNotification()},t,e,o,i,n,"notification",function(){}):s.timer=setTimeout(function(){s.setData({fromlast:0})},100)},onHide:function(){this.setData({fromlast:1})},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){if(console.log("onReachBottomtop"),0!=this.data.notifyAlbums.length&&!this.isLoading)if(this.data.hasloadall)wx.showToast({title:"没有更多了",icon:"none",duration:2e3});else{var t=this;console.log("onReachBottom"),t.loadNotification()}},loadNotification:function(){var e=this;e.isLoadingup||(e.isLoadingup=!0,e.setData({loadingImgOrText:!0}),0==e.data.groupId?t.wxreq({pathname:e.data.typeUrl,data:{userId:e.data.userid,limit:e.data.notifylimit}}).then(function(t){if(console.log(t),e.isLoadingup=!1,0!=t.code)return e.setData({loadingImgOrText:!1,hasloadall:!1}),void(e.data.notifylimit?wx.showModal({title:"提示",content:"获取通知失败",showCancel:!1}):wx.showModal({title:"提示",content:"获取通知失败",showCancel:!1,success:function(t){t.confirm?(console.log("用户点击确定"),e.backtohome()):t.cancel&&console.log("用户点击取消")}}));t.data.length<10?e.setData({loadingImgOrText:!1,hasloadall:!0}):e.setData({loadingImgOrText:!1});var o=e.data.notifyAlbums.concat(t.data);e.setData({notifyAlbums:o,notifylimit:e.data.notifylimit+1})},function(t){e.isLoadingup=!1,e.setData({loadingImgOrText:!1}),e.data.notifylimit?wx.showModal({title:"提示",content:"获取通知失败",showCancel:!1}):wx.showModal({title:"提示",content:"获取通知失败",showCancel:!1,success:function(t){t.confirm?(console.log("用户点击确定"),e.backtohome()):t.cancel&&console.log("用户点击取消")}})}):(console.log(e.data.typeUrl),t.wxreq({pathname:e.data.typeUrl,data:{userId:e.data.userid,limit:e.data.notifylimit,groupId:e.data.groupId}}).then(function(t){if(console.log(t),e.isLoadingup=!1,0!=t.code)return e.setData({loadingImgOrText:!1,hasloadall:!1}),void(e.data.notifylimit?wx.showModal({title:"提示",content:"获取通知失败",showCancel:!1}):wx.showModal({title:"提示",content:"获取通知失败",showCancel:!1,success:function(t){t.confirm?(console.log("用户点击确定"),e.backtohome()):t.cancel&&console.log("用户点击取消")}}));t.data.length<10?e.setData({loadingImgOrText:!1,hasloadall:!0}):e.setData({loadingImgOrText:!1});var o=e.data.notifyAlbums.concat(t.data);e.setData({notifyAlbums:o,notifylimit:e.data.notifylimit+1})},function(t){e.isLoadingup=!1,e.setData({loadingImgOrText:!1}),e.data.notifylimit?wx.showModal({title:"提示",content:"获取通知失败",showCancel:!1}):wx.showModal({title:"提示",content:"获取通知失败",showCancel:!1,success:function(t){t.confirm?(console.log("用户点击确定"),e.backtohome()):t.cancel&&console.log("用户点击取消")}})})))},gotoalbum:function(t){this.setData({fromlast:1});switch(this.enterAlbum(t.target.dataset.groupnewtype,t.target.dataset.groupid,1),t.target.dataset.groupnewtype){case 2:case 3:case 4:case 5:wx.navigateTo({url:"/pages/grouptypescoll/grouptypescoll?from=notification&groupid="+t.target.dataset.groupid});break;case 11:wx.navigateTo({url:"/pages/loversalbum/index/index?from=notification&groupid="+t.target.dataset.groupid});break;default:console.log("viewscoll"),wx.navigateTo({url:"/pages/viewscoll/viewscoll?from=notification&groupid="+t.target.dataset.groupid})}},gotoactive:function(t){"Invite"!=this.type&&"Join"!=this.type&&(this.enterAlbum(t.target.dataset.groupnewtype,t.target.dataset.groupid,0),this.setData({fromlast:1}),wx.navigateTo({url:"/pages/eventdetail/eventdetail?lastPage=notification&eid="+t.currentTarget.dataset.eid+"&efrom=notification"}))},showNotificationtext:function(t,e){var o=this;switch(t){case"Event":o.setData({typeUrl:i[0]}),wx.setNavigationBarTitle({title:"动态消息"});break;case"Like":o.setData({typeUrl:i[1]}),wx.setNavigationBarTitle({title:"点赞消息"});break;case"Comment":o.setData({typeUrl:i[2]}),wx.setNavigationBarTitle({title:"评论消息"});break;case"@":o.setData({typeUrl:i[3]}),wx.setNavigationBarTitle({title:"@消息"});break;case"Invite":o.setData({typeUrl:i[4]}),wx.setNavigationBarTitle({title:"邀请消息"});break;default:o.setData({typeUrl:i[5]}),wx.setNavigationBarTitle({title:"加入消息"})}},enterLoadPage:function(e){t.wxreq({pathname:"YinianProject/ep/intoPage",data:{pushId:e,port:a.globalData.port}}).then(function(t){},function(t){})},enterAlbum:function(e,o,i){var n=this;t.wxreq({pathname:"YinianProject/ep/intoEnterGroup",data:{userId:n.data.pushId,groupId:o,groupType:i,enterGroupNewType:e,port:a.globalData.port}}).then(function(t){},function(t){})},stop:function(){},like:function(t){if(console.log(t),wx.getStorageSync("userid")){var o=t.detail.formId,i=t.currentTarget.dataset.likecatagry,n=t.currentTarget.dataset.eid,s=t.currentTarget.dataset.eidindex,r=this;i&&(r.isLikepushId(),console.log(s),console.log(r.data.notifyAlbums[s].likeStatus),r.data.notifyAlbums[s].likeStatus=1,r.setData({notifyAlbums:r.data.notifyAlbums}),wx.showToast({title:"点赞成功",icon:"success",duration:1e3}),wx.request({url:e.getUrl("YinianProject/yinian/AttachOrRemoveExpressionByLkNew"),data:{type:i,userid:a.globalData.userInfo.userid,eid:n,formID:o},success:function(t){t=t.data}}))}else wx.showToast({title:"获取用户信息失败"})},isLikepushId:function(){""!=a.pushId&&void 0!=a.pushId&&t.wxreq({pathname:"YinianProject/ep/isLike",data:{pushId:a.pushId,port:a.globalData.port}}).then(function(t){},function(t){})},isCommentpushId:function(){""!=a.pushId&&void 0!=a.pushId&&t.wxreq({pathname:"YinianProject/ep/isComment",data:{pushId:a.pushId,port:a.globalData.port}}).then(function(t){},function(t){})},comment:function(t){t.currentTarget.dataset.parentindex,t.currentTarget.dataset.childindex;var e=t.currentTarget.dataset.eid;this.commentEid=e,this.commentedUserid=10,this.commentedname="系统消息",this.setData({showComInput:!0,inputfocus:!0,placehold:"对ta说点啥...",contentCurrent:!1})},sendcomment:function(e){var a=e.detail.formId,i=e.detail.value.content,n=this.data.userid,s=this.commentEid,r=this.commentedUserid;this.commentedname;if(console.log(n,s,r),0!=i.length)if(o.testStr(i))wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1});else{var l=this;l.setData({showComInput:!1,value:"",contentCurrent:!1,placehold:"说点什么..."}),l.commentedUserid=10,l.commentedname="系统消息",wx.showToast({title:"发表成功",icon:"success",duration:1e3}),l.isCommentpushId(),t.wxreq({pathname:"YinianProject/yinian/SendComment1",data:{commentUserId:n,commentedUserId:r,eventId:s,content:i,formID:a}}).then(function(t){0==t.code&&console.log(t)})}else wx.showModal({title:"提示",content:"请先输入评论内容",showCancel:!1})},hiddenWrite:function(){this.setData({showComInput:!1})},checkchange:function(t){var e=t.detail.value.trim().length>0;this.setData({contentCurrent:e})},backtohome:function(){wx.switchTab({url:"/pages/index/index"})}}); 
 			}); 	require("pages/notification/notification.js");
 		__wxRoute = 'pages/mayDayActivity/index/index';__wxRouteBegin = true; 	define("pages/mayDayActivity/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/api.js"),e=require("../../../utils/util.js"),a=getApp(),i=/^0?(13|14|15|17|18|19)[0-9]{9}$/;Page({data:{showRewardsModalBox:!1},onLoad:function(t){var e=this;t.version&&(this.version=t.version),t.port&&(this.port=t.port,a.globalData.port=t.port),t.fromUserID&&(this.fromUserID=t.fromUserID),t.fromSpaceID&&(this.fromSpaceID=t.fromSpaceID),t.fromEventID&&(this.fromEventID=t.fromEventID),t.mayDayFromUserid&&"undefined"!==t.mayDayFromUserid&&(a.globalData.mayDayFromUserid=t.mayDayFromUserid),this.efrom=t.efrom,this.isHasData=!1,this.isUpCountOperation=!1,a.stat.statpv({options:t,route:e.route})},onShow:function(){var t=this,i=this.version?this.version:"",s=this.port?this.port:"",o=this.fromUserID?this.fromUserID:0,n=this.fromSpaceID?this.fromSpaceID:0,r=this.fromEventID?this.fromEventID:0;a.getUserInfo(function(i){if("新用户"!=i.nickName){if(t.userid=i.userid,!t.isUpCountOperation){var s={operation:"first_page_in",userId:i.userid};a.stat.request(s),t.isUpCountOperation=!0}t.isHasData?t.isHasData=!1:(wx.showToast({title:"加载中...",icon:"loading",duration:1e5,mask:!0}),e.wxreq({pathname:"YinianProject/activitySpacial/joinSpacialActivity",data:{activitySpacialId:1,userId:i.userid}}).then(function(e){t.selectAllContent()}))}else wx.navigateTo({url:"/pages/creatlogin/creatlogin"})},i,s,o,n,r,"mayDayActivity/index",function(){})},showPrizeIntro:function(){wx.showModal({title:"提示",content:"您已经提交领取，请联系客服微信：yiniankefu ，等待相册发放",showCancel:!1})},getHeaderData:function(){var t=this;e.wxreq({pathname:"YinianProject/activitySpacial/selectHasUploadNum",data:{activitySpacialId:1,userId:t.userid}}).then(function(e){console.log(e),0==e.code&&(t.data.contentText.hasUploadPercent=e.data[0].hasUploadPercent,t.data.contentText.hasUploadNumText=e.data[0].hasUploadNumText,t.setData({contentText:t.data.contentText}))})},selectAllContent:function(){var t=this;wx.showToast({title:"加载中...",icon:"loading",duration:1e5,mask:!0}),e.wxreq({pathname:"YinianProject/activitySpacial/selectAllContent",data:{userId:t.userid,activitySpacialId:1}}).then(function(e){0==e.code?t.setData({contentText:e.data[0].contentText,allPicList:e.data[0].picList}):wx.showModal({title:"提示",content:"获取数据失败，请稍后重试",showCancel:!1,success:function(){"smallApp"===t.efrom?wx.navigateBack({delta:1}):wx.switchTab({url:"/pages/index/index"})}}),wx.hideToast()}).catch(function(){wx.hideToast(),wx.showModal({title:"提示",content:"获取数据失败，请稍后重试",showCancel:!1,success:function(){"smallApp"===t.efrom?wx.navigateBack({delta:1}):wx.switchTab({url:"/pages/index/index"})}})})},toSpecialGroupList:function(){0==this.data.contentText.isReceive?wx.navigateTo({url:"/pages/mayDayActivity/upgroup/upgroup"}):wx.showModal({title:"提示",content:"您已提交打印，请勿重复上传，分享活动邀请好友一起打印成册",showCancel:!1});var t={operation:"first_page_add",userId:this.userid||0};a.stat.request(t)},deletePic:function(e){var a=e.currentTarget.dataset.sel,i=this;console.log(a),wx.showModal({title:"提示",content:"是否确定删除这张图片",success:function(e){if(e.confirm){var s=i.data.allPicList,o=i.userid,n=s[a].pid;s.splice(a,1),i.setData({allPicList:s}),wx.showToast({title:"删除成功"}),wx.request({url:t.getUrl("YinianProject/picture/deletePicById"),data:{userId:o,pid:n},success:function(t){0==t.data.code&&i.getHeaderData()}})}}})},showRewardsModal:function(){this.setData({showRewardsModalBox:!0});var t={operation:"first_page_reward",userId:this.userid||0};a.stat.request(t)},closeRewardsModal:function(){this.setData({showRewardsModalBox:!1})},formSubmit:function(t){console.log(t);var s=this,o=t.detail.value.userName.trim(),n=t.detail.value.userAddr.trim(),r=t.detail.value.userPhones.trim(),c=s.userid||0;if(o)if(n)if(r)if(i.test(r)){var d={operation:"twice_page_sure",userId:c};a.stat.request(d),wx.showModal({title:"提示",content:"请确保信息正确有效",success:function(t){t.confirm&&(wx.showToast({title:"正在登记...",icon:"loading",duration:1e5,mask:!0}),e.wxreq({pathname:"YinianProject/activitySpacial/saveUserPrintAlbumOrder",data:{userId:c,receiveName:o,receiveAddress:n,receivePhone:r}}).then(function(t){0==t.code?(s.data.contentText.isReceive=1,s.setData({contentText:s.data.contentText,showRewardsModalBox:!1}),wx.showToast({title:"登记成功"})):wx.showToast({title:"提交失败"})}).catch(function(t){wx.showToast({title:"网络错误！"})}))}})}else wx.showToast({title:"号码格式不正确",image:"/images/toast_warning.png",duration:1e3});else wx.showToast({title:"手机号不能为空",image:"/images/toast_warning.png",duration:1e3});else wx.showToast({title:"地址不能为空",image:"/images/toast_warning.png",duration:1e3});else wx.showToast({title:"名字不能为空",image:"/images/toast_warning.png",duration:1e3})},copytext:function(t){wx.setClipboardData({data:"yiniankefu",success:function(t){wx.showToast({title:"已复制到粘贴版",icon:"success",image:"/images/helpcenter_window_ok.png"})}})},haveShare:function(){var t=this.userid;if(1!=this.data.contentText.isShare){var i=this;e.wxreq({pathname:"YinianProject/activitySpacial/shareSpacialActivity",data:{userId:t}}).then(function(t){i.getHeaderData()})}var s={operation:"first_page_share",userId:t};a.stat.request(s)},goHome:function(){wx.switchTab({url:"/pages/index/index"})},onShareAppMessage:function(){return this.isHasData=!0,{title:"这个五一，送你一本相册",path:"/pages/mayDayActivity/index/index?port=mayday2&mayDayFromUserid="+(this.userid||0),imageUrl:"http://oibl5dyji.bkt.clouddn.com/0425_sharepic.png",success:function(){a.stat.request({operation:"shareCallback"})}}}}); 
 			}); 	require("pages/mayDayActivity/index/index.js");
 		__wxRoute = 'pages/mayDayActivity/upgroup/upgroup';__wxRouteBegin = true; 	define("pages/mayDayActivity/upgroup/upgroup.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../../utils/util.js"),i=require("../../../utils/albumsjump.js").albumsjump;Page({data:{groupList:[]},onLoad:function(e){var i=this,r=wx.getStorageSync("userid")||0;r&&"undefined"!==r&&"null"!==r?(this.getGroupList(r),t.stat.statpv({options:e,route:i.route})):wx.showModal({title:"提示",content:"获取信息不成功，请稍后再试",showCancel:!1})},onShow:function(){},selectGroup:function(t){var e=t.currentTarget.dataset.sel;1!=this.data.groupList[e].isActive&&(this.data.groupList.forEach(function(t,i){t.isActive=i==e?1:0}),this.sel=e,this.setData({groupList:this.data.groupList}))},toMake:function(){wx.redirectTo({url:"/pages/makegroup/makegroup?efrom=upgroup"})},getGroupList:function(t){if(t){var i=this;e.wxreq({pathname:"YinianProject/album/showAllMyAlbums",data:{userId:t,groupMemberId:"",isPage:0}}).then(function(t){0==t.code&&i.setData({groupList:t.data})})}else console.log("没有传入userId")},getIsActive:function(){for(var t=this.data.groupList,e=0,i=t.length;e<i;e++)if(1==t[e].isActive)return!0;return!1},uppic:function(e){var r=this;if(this.getIsActive()){var a=r.data.groupList[r.sel].groupid,o=r.data.groupList[r.sel].groupNewType,s={operation:"twice_page_getin",userId:wx.getStorageSync("userid")||0,groupNewType:o,groupId:a};t.stat.request(s),wx.chooseImage({sizeType:["original"],sourceType:["album"],success:function(e){var r=e.tempFilePaths;t.upState=2,t.fromUp="pic",t.upObj={mainIdStr:a,formID:"",place:"",content:"",picarr:r,attentionMember:"",publishedTime:""},i({groupNewType:o,data:{lastPage:"upgroup",from:"grouplist",groupid:a,makeFrom:"specialActivity"},navigator:"redirect"})}})}else wx.showToast({title:"至少选择一个",duration:1e3})}}); 
 			}); 	require("pages/mayDayActivity/upgroup/upgroup.js");
 		__wxRoute = 'pages/blessingActivities/pages/album/album';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/blessingActivities/pages/album/album.js';	define("pages/blessingActivities/pages/album/album.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var t=require("../../icon.js"),a=require("../../api.js"),i=getApp(),r=require("../../../../utils/util.js"),n=require("../../../../utils/tripledes.js"),s=(require("../../../../utils/reg.js"),void 0);Page({data:{userId:wx.getStorageSync("userid"),myBlessCount:0,totalMember:0,bannerImage:"",shareImage:"",nickName:"",avatar:"",groupId:-1,currentTab:"events",activityRules:!1,loadComplete:!1,loading:-1,tabsFix:!1,blessingModal:{show:!1,userId:-1,eventId:-1,selectedIndex:-1},blessedUsers:[],blessingList:[],ranking:[],myRanking:Object,colLeft:[],colRight:[],reload:!0},onLoad:function(e){s=this,i.globalData.scene=0,i.stat.statpv({route:this.route,options:e}),s.rollingTimer=null,s.colLeftHeight=0,s.colRightHeight=0,s.pageNumber=1,s.events=[],s.setData({ICON:t.ICON,groupId:e.groupId,fromPage:e.fromPage}),e.version&&(this.version=e.version),e.port&&(this.port=e.port,i.globalData.port=e.port,this.setData({port:e.port})),e.fromUserID&&(this.fromUserID=e.fromUserID),e.fromSpaceID&&(this.fromSpaceID=e.fromSpaceID),e.fromEventID&&(this.fromEventID=e.fromEventID),this.na=this.version?this.version:"",this.nb=this.port?this.port:"",this.nc=this.fromUserID?this.fromUserID:0,this.nd=this.fromSpaceID?this.fromSpaceID:0,this.ne=this.fromEventID?this.fromEventID:0},onReady:function(){},onShow:function(){s.data.reload&&i.getUserInfo(function(e){if("新用户"!=e.nickName){s.setData({userId:wx.getStorageSync("userid")});var t=n.encryptByDESModeCBC(e.userid),a=n.encryptByDESModeCBC(s.data.groupId);r.wxreq({pathname:"YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",data:{userid:t,groupid:a,port:s.nb,zj:"",fromUserID:s.data.userId||0,inviteuserid:s.data.user||0}}).then(function(t){if(2!=t.code){if(1012==t.code)wx.showModal({title:"提示",content:"相册已被解散",showCancel:!1,success:function(e){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else if(1037==t.code)wx.showModal({title:"提示",content:"相册已被封",showCancel:!1,success:function(e){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else{if(0!=t.code)return void wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}});t.data[0].joinStatus||wx.showToast({title:"加入活动成功"}),s._getInitEvent(),s._getBlessedUser(),s._getRankingList(),s._getMyRanking(),s.setData({reload:!1})}var a={userId:e.userid,fromUserId:s.fromUserID?s.fromUserID:"",operation:"enterBlessingActivitiesAlbum",userLastLoginTime:i.enterTime};i.stat.request(a)}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})}).catch(function(e){console.log("加入相册err",e)})}else wx.navigateTo({url:"/pages/creatlogin/creatlogin"})},s.na,s.nb,s.nc,s.nd,s.ne,function(){s.setData({showAuthPic:!1})})},onHide:function(){clearInterval(s.rollingTimer)},onUnload:function(){clearInterval(s.rollingTimer)},onPageScroll:function(e){this.fixedTabs(e.scrollTop)},onPullDownRefresh:function(){s._getInitEvent(),s._getBlessedUser(),s._getRankingList(),s._getMyRanking(),wx.stopPullDownRefresh()},onReachBottom:function(){(s.data.currentTab="events")&&s._getOthersEvent()},onShareAppMessage:function(e){if("button"===e.from){var t=e.target.id;if("shareDetail"===t){var a=e.target.dataset.eid,r=e.target.dataset.uid;s.data.nickName;return{title:"我上传了一张宝宝吃相照，进来送颗小心心吧！",path:"/pages/blessingActivities/pages/detail/detail?eventId="+a+"&userId="+r+"&groupId="+s.data.groupId+"&fromUseID="+s.fromUserID,imageUrl:"http://oibl5dyji.bkt.clouddn.com/sixOne_personalShare.png",withShareTicket:!0,success:function(e){var t={userId:s.userid,fromUserId:s.fromUserID?s.fromUserID:"",operation:"shareBlessingActivitiesDetail_success",userLastLoginTime:i.enterTime,remark:a};i.stat.request(t)},fail:function(e){var t={userId:s.userid,fromUserId:s.fromUserID?s.fromUserID:"",operation:"shareBlessingActivitiesDetail_fail",userLastLoginTime:i.enterTime,remark:a};i.stat.request(t)}}}if("shareAlbum"===t){s.data.nickName;return{title:"这个儿童节活动好好玩喔！你也一起参加吧！",path:"/pages/blessingActivities/pages/album/album?groupId="+s.data.groupId+"&fromUseID="+s.fromUserID,withShareTicket:!0,imageUrl:"http://oibl5dyji.bkt.clouddn.com/sixOne_activeShare.png",success:function(e){var t={userId:s.userid,fromUserId:s.fromUserID?s.fromUserID:"",operation:"shareBlessingActivitiesAlbum_success",userLastLoginTime:i.enterTime,groupId:s.data.groupId};i.stat.request(t)},fail:function(e){var t={userId:s.userid,fromUserId:s.fromUserID?s.fromUserID:"",operation:"shareBlessingActivitiesAlbum_fail",userLastLoginTime:i.enterTime,groupId:s.data.groupId};i.stat.request(t)}}}}if("menu"===e.from){s.data.nickName;return{title:"这个儿童节活动好好玩喔！你也一起参加吧！",path:"/pages/blessingActivities/pages/album/album?groupId="+s.data.groupId+"&fromUseID="+s.fromUserID,withShareTicket:!0,imageUrl:"http://oibl5dyji.bkt.clouddn.com/sixOne_activeShare.png",success:function(e){var t={userId:s.userid,fromUserId:s.fromUserID?s.fromUserID:"",operation:"shareBlessingActivitiesAlbum_success",userLastLoginTime:i.enterTime,groupId:s.data.groupId};i.stat.request(t)},fail:function(e){var t={userId:s.userid,fromUserId:s.fromUserID?s.fromUserID:"",operation:"shareBlessingActivitiesAlbum_fail",userLastLoginTime:i.enterTime,groupId:s.data.groupId};i.stat.request(t)}}}},fixedTabs:function(e){e>536/(750/i.globalData.systemInfo.windowWidth)?!1===this.data.tabsFix&&this.setData({tabsFix:!0}):!0===this.data.tabsFix&&this.setData({tabsFix:!1})},generateWaterfall:function(e){var t=[],a=[],i=0;return e.forEach(function(e){var r=e.width,n=e.height;if(i=e.blesses.length>0?5:0,s.colLeftHeight<=s.colRightHeight){t.push(e);var o=185*n/r;s.colLeftHeight+=o+i}else{a.push(e);var u=185*n/r;s.colRightHeight+=u+i}}),{colLeft:t,colRight:a}},switchActivityRules:function(e){var t=e.currentTarget.dataset.switch;s.setData({activityRules:t})},switchTab:function(e){var t=e.currentTarget.dataset.tab;s.setData({currentTab:t})},rollingAnimation:function(e){var t=wx.createAnimation({duration:2e3*e,timingFunction:"linear"}),a={duration:0};t.translateX(170*-e).step().translateX(300).step(a),s.setData({animationData:t.export()}),s.rollingTimer=setInterval(function(){t.translateX(170*-e).step().translateX(300).step(a),s.setData({animationData:t.export()})},2e3*e+500)},openUpload:function(){var e={userId:wx.getStorageSync("userid"),fromUserId:s.fromUserID?s.fromUserID:"",operation:"uploadBlessPicture",userLastLoginTime:i.enterTime};i.stat.request(e);var t={userId:wx.getStorageSync("userid"),groupId:s.data.groupId,storage:3e3,paths:Array};wx.chooseImage({count:9,sizeType:["original"],sourceType:["album"],success:function(r){wx.hideLoading(),t.paths=r.tempFilePaths,(0,a.upload)(t).then(function(t){0===t.code?(wx.showToast({title:"发布成功",icon:"none",duration:2500}),e.operation="uploadBlessPicture_success",i.stat.request(e),s._getInitEvent()):-1===t.code?wx.showToast({title:"参数不对",image:"/images/toast_warning.png",duration:2500}):wx.showToast({title:"发布失败",image:"/images/toast_warning.png",duration:2e3})}).catch(function(e){console.log("请求失败",e),wx.showToast({title:"发布失败",image:"/images/toast_warning.png",duration:2e3})})}})},openSendBlessingModal:function(e){var t=s.data.blessingModal;t.show=!0,t.selectedIndex=-1,t.userId=s.data.userId,t.eventId=e.currentTarget.dataset.event_id,s.setData({blessingModal:t})},openSendBlessing:function(e){var t=e.currentTarget.dataset.uid,a=e.currentTarget.dataset.eid,r={userId:wx.getStorageSync("userid"),fromUserId:s.fromUserID?s.fromUserID:"",operation:"blessalbumhome_like_open",userLastLoginTime:e.currentTarget.dataset.uid};i.stat.request(r),wx.navigateTo({url:"../detail/detail?userId="+t+"&eventId="+a+"&groupId="+s.data.groupId+"&action=send"})},reset:function(){var e=s.data.colLeft,t=s.data.colRight;e.length=0,t.length=0,s.events.length=0,s.pageNumber=1,s.setData({colLeft:e,colRight:t,loadComplete:!1,loading:-1})},_getInitEvent:function(){s.reset();var t={userId:s.data.userId,groupId:s.data.groupId,pageNumber:s.pageNumber};console.log("_getInitEvent_params",t),s.setData({loading:0}),wx.showNavigationBarLoading(),(0,a.getMyEvent)(t).then(function(e){console.log("获取我的动态",e),(e.data.midThumbnail||""==e.data.midThumbnail)&&s.events.push(e.data),s.setData({myBlessCount:e.data.bless_count,totalMember:e.data.memberCount,bannerImage:e.data.gpic,shareImage:e.data.sharePicUrl,nickName:e.data.unickname,avatar:e.data.upic})}).then(function(e){return(0,a.getOthersEvent)(t)}).then(function(t){if(wx.hideNavigationBarLoading(),0===t.code){var a;s.pageNumber++,(a=s.events).push.apply(a,e(t.data));var i=s.generateWaterfall(s.events),r=i.colLeft,n=i.colRight;s.setData({colLeft:r,colRight:n,loading:1})}}).catch(function(e){wx.hideNavigationBarLoading(),s.setData({loading:1}),wx.showToast({title:"加载数据失败",image:"/images/toast_warning.png"}),console.log("getMyEventErr",e)})},_getOthersEvent:function(){if(0!==s.data.loading&&!s.data.loadComplete){var t={userId:s.data.userId,groupId:s.data.groupId,pageNumber:s.pageNumber};wx.showNavigationBarLoading(),(0,a.getOthersEvent)(t).then(function(t){if(wx.hideNavigationBarLoading(),s.setData({loading:0}),0!==t.data.length){s.pageNumber++;var a=t.data,i=s.data.colLeft,r=s.data.colRight,n=s.generateWaterfall(a),o=n.colLeft,u=n.colRight;i.push.apply(i,e(o)),r.push.apply(r,e(u)),s.setData({colLeft:i,colRight:r,loading:1})}else s.setData({loadComplete:!0})}).catch(function(e){wx.hideNavigationBarLoading(),s.setData({loading:1})})}},_getBlessedUser:function(){(0,a.getBlessedUser)().then(function(e){if(0===e.code){var t=Array.from(e.data.unicknames);t.length>5&&(t=t.slice(0,5));var a=[];t.forEach(function(e){var t=void 0;t=e.length>3?"恭喜"+e.slice(0,3)+"...获得小心心":"恭喜"+e+"获得祝福",a.push(t)});var i=a.join("   ");s.setData({contentText:i})}}).catch(function(e){console.log("祝福姓名获取失败",e)})},_getRankingList:function(){var e={pageSize:100,pageNumber:1};(0,a.getRankingList)(e).then(function(e){var t=e.data;s.setData({ranking:t})}).catch(function(e){console.log("r-err",e)})},_getMyRanking:function(){(0,a.getMyRanking)(s.data.userId).then(function(e){var t=e.data;s.setData({myRanking:t})}).catch(function(e){console.log("获取我的排行数据出错")})},toDetail:function(e){s.setData({reload:!1});var t=e.currentTarget.dataset.uid,a=e.currentTarget.dataset.eid;wx.navigateTo({url:"../detail/detail?userId="+t+"&eventId="+a+"&groupId="+s.data.groupId})},copy:function(){wx.setClipboardData({data:"yiniankefu",success:function(e){wx.showToast({title:"已复制到粘贴版",icon:"success",image:"/images/helpcenter_window_ok.png"})}})},toIndex:function(){wx.switchTab({url:"/pages/index/index"})},preventScroll:function(){}}); 
 			}); 	require("pages/blessingActivities/pages/album/album.js");
 		__wxRoute = 'pages/blessingActivities/pages/detail/detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/blessingActivities/pages/detail/detail.js';	define("pages/blessingActivities/pages/detail/detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var t=require("../../icon.js"),a=require("../../api.js"),n=require("../../../../utils/util.js"),o=require("../../../../utils/tripledes.js"),s=require("../../../../utils/reg.js"),i=getApp(),r=void 0;Page({data:{commentBox:!1,groupId:-1,userId:-1,eventId:-1,shareImage:"",nickName:"",iLike:0,loginUserId:wx.getStorageSync("userid"),detail:Object,myBlessing:[],myBlessingNumber:0,commentsList:[],commentLoadComplete:!1,loading:-1,blessingModal:{show:!1,userId:-1,eventId:-1,selectedIndex:-1}},onLoad:function(e){if(console.log("options",e),r=this,r.groupId=e.groupId,r.pageNumber=1,r.pageSize=10,r.detailReload=!1,e.action){var a=r.data.blessingModal;a.show=!0,a.eventId=e.eventId,a.userId=wx.getStorageSync("userid"),r.setData({blessingModal:a})}r.setData({ICON:t.ICON,eventId:e.eventId,userId:e.userId,groupId:e.groupId,scene:i.globalData.scene}),e.version&&(this.version=e.version),e.port&&(this.port=e.port,i.globalData.port=e.port,this.setData({port:e.port})),e.fromUserID&&(this.fromUserID=e.fromUserID),e.fromSpaceID&&(this.fromSpaceID=e.fromSpaceID),e.fromEventID&&(this.fromEventID=e.fromEventID),r.na=this.version?this.version:"",r.nb=this.port?this.port:"",r.nc=this.fromUserID?this.fromUserID:0,r.nd=this.fromSpaceID?this.fromSpaceID:0,r.ne=this.fromEventID?this.fromEventID:0},onReady:function(){},onShow:function(e){i.getUserInfo(function(e){if("新用户"!=e.nickName){r.setData({loginUserId:wx.getStorageSync("userid")}),r._getDetail(),r.getComment();var t=o.encryptByDESModeCBC(e.userid),a=o.encryptByDESModeCBC(r.data.groupId),s={userId:e.userid,fromUserId:r.fromUserID?r.fromUserID:"",operation:"enterBlessingActivitiesdetail",userLastLoginTime:i.enterTime};i.stat.request(s),n.wxreq({pathname:"YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",data:{userid:t,groupid:a,port:r.nb,zj:"",fromUserID:r.data.userId,inviteuserid:r.data.userId}}).then(function(e){if(2!=e.code)if(1012==e.code)wx.showModal({title:"提示",content:"相册已被解散",showCancel:!1,success:function(e){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else if(1037==e.code)wx.showModal({title:"提示",content:"相册已被封",showCancel:!1,success:function(e){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else{if(0!=e.code)return void wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}});e.data[0].joinStatus||wx.showToast({title:"加入活动成功"})}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})}).catch(function(e){console.log("err",e)})}else wx.navigateTo({url:"/pages/creatlogin/creatlogin"})},r.na,r.nb,r.nc,r.nd,r.ne,function(){r.setData({showAuthPic:!1})}),r.detailReload&&(r._getDetail(),r.detailReload=!1)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){r.getComment()},onShareAppMessage:function(e){var t=r.data.eventId,a=r.data.userId;r.data.nickName;return{title:"我上传了一张宝宝吃相照，进来送颗小心心吧！",path:"/pages/blessingActivities/pages/detail/detail?eventId="+t+"&userId="+a+"&groupId="+r.data.groupId+"&fromUseID="+r.fromUserID,imageUrl:"http://oibl5dyji.bkt.clouddn.com/sixOne_personalShare.png",withShareTicket:!0,success:function(e){var n={userId:a,fromUserId:r.fromUserID?r.fromUserID:"",operation:"inBlessingActivities_detail_share_success",userLastLoginTime:i.enterTime,remark:t};i.stat.request(n)},fail:function(e){var n={userId:a,fromUserId:r.fromUserID?r.fromUserID:"",operation:"inBlessingActivities_detail_share_fail",userLastLoginTime:i.enterTime,remark:t};i.stat.request(n)}}},switchCommentBox:function(e){var t=e.currentTarget.dataset.status;r.setData({commentBox:t})},openSendBlessingModal:function(e){var t=r.data.blessingModal;t.show=!0,t.selectedIndex=-1,t.userId=r.data.loginUserId,t.eventId=r.data.eventId,r.setData({blessingModal:t});var a={userId:wx.getStorageSync("userid"),fromUserId:r.fromUserID?r.fromUserID:"",operation:"inBlessingActivities_detail_click_like",userLastLoginTime:i.enterTime,remark:r.data.userId};i.stat.request(a)},blessingTip:function(){wx.showToast({title:"已赞"})},_getDetail:function(){var e={eventId:r.data.eventId,userId:wx.getStorageSync("userid")};(0,a.getDetail)(e).then(function(e){var t=e.data,a=e.data.sharePicUrl,n=e.data.unickname,o=e.data.myBlessCountAtThisUser;r.setData({detail:t,shareImage:a,nickName:n,iLike:o}),r._getMyBlessing()}).catch(function(e){console.log("err")})},_getMyBlessing:function(){(0,a.getMyBlessing)(r.data.userId).then(function(e){var t=e.data.myBlessCount,a=e.data.mySelfBlesses.splice(0,200);r.setData({myBlessingNumber:t,myBlessing:a})}).catch(function(e){console.log("err",e)})},initComment:function(){var e=r.data.commentsList;e.length=0,r.pageNumber=1,r.setData({commentsList:e,commentLoadComplete:!1}),r.getComment()},sendComment:function(e){var t={formID:e.detail.formId,content:e.detail.value.content,userId:wx.getStorageSync("userid"),eventId:r.data.eventId};0!=t.content.length?s.testStr(t.content)?wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1}):(wx.showLoading({title:"正在发送"}),(0,a.comment)(t).then(function(e){console.log("params",t),wx.hideLoading(),wx.showToast({title:"评论成功"}),r.setData({commentBox:!1}),r.initComment()}).catch(function(e){wx.hideLoading(),wx.showToast({title:"评论失败"}),console.log("评论失败",e)})):wx.showModal({title:"提示",content:"请先输入评论内容",showCancel:!1})},getComment:function(){if(0!==r.data.loading&&!r.data.commentLoadComplete){r.setData({loading:0});var t={eventId:r.data.eventId,pageSize:r.pageSize,pageNumber:r.pageNumber};(0,a.getComment)(t).then(function(t){if(0==t.data.length)r.setData({commentLoadComplete:!0,loading:1});else{var a=r.data.commentsList;a.push.apply(a,e(t.data)),r.setData({commentsList:a,loading:1}),r.pageNumber++}}).catch(function(e){r.setData({loading:1})})}},preventEvent:function(){},openImagePreview:function(){wx.setStorageSync("lookImgs",r.data.detail.pictureRecords),wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current=0"})},openDeleteEvent:function(){var e=r.data.detail.pictureRecords;e.map(function(e){return e.eid=r.data.eventId,e}),wx.setStorageSync("editPhotoArr",e),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource=delete&isPicOrVideo=pic&sourcePage=blessActivity"})},toAlbum:function(){var e={userId:wx.getStorageSync("userid"),fromUserId:r.fromUserID?r.fromUserID:"",operation:"inBlessingActivities_detail_to_album",userLastLoginTime:i.enterTime,remark:r.data.eventId};i.stat.request(e);var t=i.globalData.scene;1007==t||1008==t?wx.redirectTo({url:"/pages/blessingActivities/pages/album/album?groupId="+r.data.groupId}):wx.navigateBack({delta:1})},blessingModalClose:function(e){var t=r.data.blessingModal;t.show=!1,r.setData({blessingModal:t})}}); 
 			}); 	require("pages/blessingActivities/pages/detail/detail.js");
 		__wxRoute = 'pages/creatlogin/creatlogin';__wxRouteBegin = true; 	define("pages/creatlogin/creatlogin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n=getApp();require("../../utils/util.js");Page({data:{startAuthPicYinian:"http://oibl5dyji.bkt.clouddn.com/0507_minelogin_yinian.png"},onLoad:function(n){},onReady:function(){},onShow:function(){},userInfoHandler:function(i){"getUserInfo:fail auth deny"==i.detail.errMsg?wx.switchTab({url:"/pages/index/index"}):(wx.showToast({title:"正在登录"}),n.newAuthfunction(function(n){wx.hideToast(),wx.navigateBack({})},"","","","","",i.detail,""))},onHide:function(){},onUnload:function(){}}); 
 			}); 	require("pages/creatlogin/creatlogin.js");
 		__wxRoute = 'pages/minelogin/minelogin';__wxRouteBegin = true; 	define("pages/minelogin/minelogin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();require("../../utils/util.js");Page({data:{startAuthPicYinian:"http://oibl5dyji.bkt.clouddn.com/0507_minelogin_yinian.png",pagetype:"mine"},onLoad:function(i){t.stat.statpv({route:this.route,options:i}),t.getUseinfo,"loveactive"==i.f&&(this.setData({pagetype:"activity"}),this.f=i.f,i.version&&(this.version=i.version),i.port&&(this.port=i.port,t.globalData.port=i.port,this.setData({port:i.port})),i.fromUserID&&(this.fromUserID=i.fromUserID),i.fromSpaceID&&(this.fromSpaceID=i.fromSpaceID),i.fromEventID&&(this.fromEventID=i.fromEventID),this.na=this.version?this.version:"",this.nb=this.port?this.port:"",this.nc=this.fromUserID?this.fromUserID:0,this.nd=this.fromSpaceID?this.fromSpaceID:0,this.ne=this.fromEventID?this.fromEventID:0,t.getUserInfo(function(t){"新用户"!=t.nickName&&wx.redirectTo({url:"/pages/loversalbum/loveactive/index"})},this.na,this.nb,this.nc,this.nd,this.ne,""))},onReady:function(){},userInfoHandler:function(i){var e=this;"getUserInfo:fail auth deny"==i.detail.errMsg?wx.switchTab({url:"/pages/index/index"}):(wx.showToast({title:"正在登录"}),t.newAuthfunction(function(t){wx.hideToast(),"新用户"!=t.nickName?(e.f="loveactive")?wx.redirectTo({url:"/pages/loversalbum/loveactive/index"}):wx.switchTab({url:"/pages/myself/myself"}):wx.showToast({title:"登录失败!"})},"","","","","",i.detail,""))},onShow:function(){},onHide:function(){},onUnload:function(){}}); 
 			}); 	require("pages/minelogin/minelogin.js");
 		__wxRoute = 'pages/activitypage/login/home';__wxRouteBegin = true; 	define("pages/activitypage/login/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{startAuthPicYinian:"http://oibl5dyji.bkt.clouddn.com/0507_minelogin_yinian.png"},onLoad:function(n){t.stat.statpv({route:this.route,options:n})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},userInfoHandler:function(n){"getUserInfo:fail auth deny"==n.detail.errMsg?wx.switchTab({url:"/pages/index/index"}):(wx.showToast({title:"正在登录"}),t.newAuthfunction(function(t){wx.hideToast(),"新用户"!=t.nickName?wx.switchTab({url:"/pages/activitypage/activityindex/activityindex"}):wx.showToast({title:"登录失败!"})},"","","","","",n.detail,""))}}); 
 			}); 	require("pages/activitypage/login/home.js");
 		__wxRoute = 'pages/familyAlbum/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/familyAlbum/index/index.js';	define("pages/familyAlbum/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var e,a=function(){function t(t,e){var a=[],o=!0,i=!1,s=void 0;try{for(var n,r=t[Symbol.iterator]();!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(t){i=!0,s=t}finally{try{!o&&r.return&&r.return()}finally{if(i)throw s}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=require("../../../utils/util.js"),s=require("../../../utils/config.js"),n=require("../../../utils/reg.js"),r=getApp(),l=require("../../../utils/api.js"),d=require("../../../utils/common.js"),u=[],c=require("../../../utils/tripledes.js"),p=wx.createInnerAudioContext(),g=require("../../../utils/albumsjump.js").albumsjump,h=require("../../../utils/hotActive.js").hotActive,m=void 0,f=void 0,w=void 0,v=0,S=0,b=0,I=0;Page((e={data:{canIUse:!1,returnhomepic:"http://oibl5dyji.bkt.clouddn.com/20170605160928.png",ablumInfo:{},textNum:0,fromlast:0,showModelHidden:!1,pvShowModel:!1,showAudioModelBox:!1,eventlist:[],authorityList:[],showTop:!0,showFunModel:!1,loadImgState:!0,waitingState:!0,secondNum:0,secondEnd:!0,showFooterIntro1:!0,showFooterIntro2:!0,alading:!1,aladingTwo:!0,progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic",isUpPicState:!0,globalNewUser:!1,inBlackList:1,showLoadingImg:!1,loadingImgOrText:!0,showmidifinenameModel:!1,showDisposeModel:!1,classArr:["pic1","pic2","pic3"],activitySwitchhot:1,inviteSwitchhot:1,bottomUrl:"",isgcreator:!1,inviteBelowHint:"",alertButtonOne:"",alertHidePic:"",alertButtonTwo01:"",alertButtonTwo02:"",usernumber:3006789,showcomeuserModel:!1,showfirstuploadModel:!1,firstUpPic:"http://oibl5dyji.bkt.clouddn.com/0509_firstUpPic.png",inventPerson:"",textArr:["精彩内容正在赶来...","稍等一下啦...","小忆正在加载中..."],showActivityRules:!0,maxnumber:0,showintroduce:!1,showAuthPic:!1,authpic:{belowImgUrl:""},showComInput:!1,placehold:"对ta说点啥...",inputfocus:!1,loversBannerInfo:{bannerShowPic:"http://oibl5dyji.bkt.clouddn.com/0412_loveBanner.png",bannerSwitch:0},showLoveFirstBox:!1,loversInvitePic:"http://7xlmtr.com1.z0.glb.clouddn.com/alertPictureOne_20180412.png",loversIntroPic:"http://7xlmtr.com1.z0.glb.clouddn.com/alertPictureTwo_20180412.png",addModalOn:!1,addModalAnimation:!1,addEventModalOn:!1,addEventModalAnimation:!1,addPhotoModalOn:!1,addPhotoModalAnimation:!1,modalTitle:"照片",icon:{arrow:"http://oibl5dyji.bkt.clouddn.com/myself_more@2x.png",photos:"http://oibl5dyji.bkt.clouddn.com/photos@2x.png",members:"http://oibl5dyji.bkt.clouddn.com/members@2x.png",photo_wall:"http://oibl5dyji.bkt.clouddn.com/photos_wall@2x.png",user:"http://oibl5dyji.bkt.clouddn.com/user@2x.png",camera:"http://oibl5dyji.bkt.clouddn.com/camera@2x.png",camera_l:"http://oibl5dyji.bkt.clouddn.com/camera_l@2x.png",photo_l:"http://oibl5dyji.bkt.clouddn.com/photo_l@2x.png",video_l:"http://oibl5dyji.bkt.clouddn.com/video_l@2x.png",write_l:"http://oibl5dyji.bkt.clouddn.com/write_l@2x.png",mike_l:"http://oibl5dyji.bkt.clouddn.com/mike_l@2x.png",close_l:"http://oibl5dyji.bkt.clouddn.com/close_l@2x.png",pose_add:"http://oibl5dyji.bkt.clouddn.com/PC_add@2x.png",pose_add_l:"http://oibl5dyji.bkt.clouddn.com/PC_add_l@2x.png",camera_dark:"http://oibl5dyji.bkt.clouddn.com/content_carema@2x.png"},loversInfo:{alertPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/alert_for_lover_201804201820.png",dakahuodongPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/dakahuodong_pic_201804201820.png",inviteText:"立即邀请",jilutianmiPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/ji_lu_tian_mi_pic_201804201821.png",kongXiangCePicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/kong_xiang_tupian_pic_201804201822.png",uploadText:"上传甜蜜时刻",yaoQingPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/yao_qing_ling_yi_ban_pic.png"},showMayDayActivity:!1,isActivitySwitch:{},showInviteModal:!1,menuNames:"photo,video,event,import",publishMenu:!1,eventModel:!1,eventOmain:"",eventEid:"",playPhoto:!1},showTimeAxis:function(){},showEventAxis:function(){},prevent:function(){this.setData({fromlast:1})},stop:function(){},donothing:function(){},stopreset:function(){this.loadImgStateNo=!0,this.setData({fromlast:1})},stopLoadImg:function(){this.loadImgStateNo=!0},onLoad:function(t){if(m=this,r.stat.statpv({route:this.route,options:t}),this.getAlbumCreater(),!t.groupid){var e=decodeURIComponent(t.scene);if(t={},e.length>0)for(var a=e.split("&"),o=0;o<a.length;o++)t[a[o].split("=")[0]]=a[o].split("=")[1]}t.version&&(this.version=t.version),t.port&&(this.port=t.port,r.globalData.port=t.port,this.setData({port:t.port})),t.fromUserID&&(this.fromUserID=t.fromUserID),t.fromSpaceID&&(this.fromSpaceID=t.fromSpaceID),t.fromEventID&&(this.fromEventID=t.fromEventID),this.isconfirm=t.isconfirm,this.mayefrom=t.mayefrom||"",this.loadImgStateNo=!1,this.getActivitySwitch();var s=this;s.setData({fromlast:0,loadImgState:!1}),this.groupid=t.groupid,this.from=t.from,this.mode=t.mode,this.type=t.type,this.comeuserid=t.comeUserid;try{wx.setStorageSync("groupid",parseInt(s.groupid))}catch(t){console.log(t)}this.zj=t.zj||"",this.lastPage=t.lastPage,this.lastPage=this.lastPage||"null",this.isSubmit=1;var n="showLoad"+s.groupid,l="showCreat"+s.groupid;wx.getStorageSync(n)?s.setData({showFooterIntro1:!1}):s.setData({showFooterIntro1:!0}),wx.getStorageSync(l)?s.setData({showFooterIntro2:!1}):s.setData({showFooterIntro2:!0}),this.loadImgStateNo=!1,wx.getStorageSync("userInfo")||(s.setData({showAuthPic:!0}),i.getAuthPic("timeLine",s.groupid,function(t){s.setData({authpic:t})})),s.getBannerInfo(),wx.getStorage({key:"peopleCount",success:function(t){0!=t.data&&t.data?s.setData({maxnumber:t.data}):(console.log(t),s.setData({maxnumber:t.data}))}}),"newlovers"===t.makeFrom&&(this.setData({showLoveFirstBox:!0}),i.getAuthPic("lovers_invite",0,function(t){s.setData({loversInvitePic:t.belowImgUrl})}))},onShow:function(){var t=this.version?this.version:"",e=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,o=this.fromSpaceID?this.fromSpaceID:0,s=this.fromEventID?this.fromEventID:0;this.nc=a;var n=this;if(n.flashSaleShowSwitch(),n.setData({groupid:n.groupid}),wx.setStorageSync("groupid",parseInt(n.groupid)),r.getshowState(function(t){n.setData({showpuzze:t})}),n.retState=!1,2===r.upState){var d=r.upObj;if(!d.picarr||0==d.picarr.length)return void console.log("获取上传的参数出错");r.isUp||("pic"==r.fromUp?n.startUpload():"video"==r.fromUp?n.startUpVideo():"audio"==r.fromUp?n.startUpAudio():"event"==r.fromUp&&n.eventUpload(),n.setData({isUpPicState:!1})),r.upState=0}"text"==r.fromUp&&(n.isfirstUpload(r.text),r.fromUp="");var u=i.randomNum(0,2);n.setData({promptText:u}),r.getUserInfo(function(t){if(1==n.isSubmit){n.enterCurrentTimestamp=(new Date).getTime();var a="null";n.data.ablumInfo&&1==n.data.ablumInfo.gOrigin?a="true":n.data.ablumInfo&&1!=n.data.ablumInfo.gOrigin&&(a="false");var o={basicInfo:{userid:t.userid,source:e,"isActivityAlbum ":a,"lastPage ":n.lastPage,timestamp:n.enterCurrentTimestamp,identification:t.userid+"_"+r.enterTimestamp},type:"enter",data:{page:{name:"albumDetail",page_identification:t.userid+"_"+n.enterCurrentTimestamp}}};0==r.sendValue&&i.sendData(t.userid,o),n.button=[]}else n.isSubmit=1;r.globalData.utime||n.flashSalegetUserInfo(t.userid),r.stat.stathotmall({userId:t.userid,groupId:n.groupid,port:r.globalData.port,operation:"interalbum",registerTime:r.globalData.utime,inviteId:n.nc}),1!=n.data.fromlast?(n.loadImgStateNo||setTimeout(function(){n.loadImgStateNo=!1},100),"yes"==t.isnew&&(n.setData({showintroduce:!0}),r.isNewUser=!0,n.comeuserid&&wx.request({url:l.getUrl("YinianProject/points/SuccessInviteFriend"),data:{userid:n.comeuserid},method:"GET",success:function(t){console.log(t),t.data.code},fail:function(t){}})),r.isNewUser&&n.setData({globalNewUser:!0}),null!=wx.getStorageSync("userInfo").uLockPass&&r.globalData.pwdState&&wx.navigateTo({url:"/pages/others/password/password?setPwd=shuru"}),n.setData({winHeight:r.globalData.systemInfo.windowHeight,isIphonex:r.globalData.systemInfo.model.toLowerCase().indexOf("iphone x")>=0,r2p:r.globalData.systemInfo.windowWidth/750,from:n.from||"",groupid:n.groupid,userid:t.userid,showAuthPic:!1}),n.groupid?(n.nickname=t.nickName,wx.request({url:l.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(e){if(0==e.data.code&&e.data.data[0].openloading){var a=parseInt(5*Math.random()+5);return n.setData({waitingState:!1,secondNum:a,secondEnd:!0}),void(n.timer3=setInterval(function(){var t=n.data.secondNum;t<=0?(clearInterval(n.timer3),n.timer3=null,n.setData({secondEnd:!1})):(t--,n.setData({secondNum:t}))},1e3))}n.getAlbumInformation(t)}})):wx.showModal({title:"提示",content:"页面找不到了，返回首页看看",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})):n.timer=setTimeout(function(){n.setData({fromlast:0})},100)},t,e,a,o,s,"viewscoll",function(){n.setData({showAuthPic:!1})})},onReady:function(){var t=this;p.onPlay(function(t){}),p.onPause(function(t){}),p.onError(function(e){wx.showToast({title:"语音播放错误",duration:1e3}),t.closeAllAudio()}),p.onEnded(function(e){t.closeAllAudio()});var e=0;r.globalData.userInfo&&(e=r.globalData.userInfo.userid),wx.reportAnalytics("addmember",{userid:e,groupid:t.groupid,clicktime:i.formatTimeWithSecond(new Date)})},onHide:function(){1==this.isSubmit&&(console.log("viewscoll-hide"),this.sendLeaveData())},onUnload:function(){var t=this;console.log("viewscoll-onUnload"),this.sendLeaveData(),this.retState=!0,3==t.data.upSteps&&(r.upState=0,r.upObj={},t.setData({progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0}))},sendLeaveData:function(){var t=this,e=this.port?this.port:"",a=wx.getStorageSync("userid"),o=(new Date).getTime()-t.enterCurrentTimestamp,s="null";t.data.ablumInfo&&1==t.data.ablumInfo.gOrigin?s="true":t.data.ablumInfo&&1!=t.data.ablumInfo.gOrigin&&(s="false");var n={basicInfo:{userid:a,source:e," isActivityAlbum ":s,"lastPage ":t.lastPage,timestamp:(new Date).getTime(),identification:a+"_"+r.enterTimestamp},type:"leave",data:{page:{name:"albumDetail",page_identification:a+"_"+t.enterCurrentTimestamp},botton:t.button,time:o}};0==r.sendValue&&i.sendData(a,n)},uploadAgain:function(){"pic"==r.fromUp?this.startUpload():"video"==r.fromUp?this.startUpVideo():"audio"==r.fromUp?this.startUpAudio():"event"==r.fromUp?this.eventUpload():"addEvent"==r.fromUp&&this.addImgUploadevent(),this.setData({isUpPicState:!1})},startUpVideo:function(){console.log(r.upObj);var t=this,e=r.upObj;t.setData({showProgress:!0,totalnum:1,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"video"}),r.isUp=!0,t.uploadvideosync(e)},uploadvideosync:function(t){var e=this;wx.request({url:l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(a){if(console.log(a),0!=a.data.code)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=a.data.data[0].token,i=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:i,name:"file",formData:{key:i.split("//")[1],token:o},success:function(a){if(console.log(a),200!=a.statusCode)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});e.setData({uploadnum:1,progress:100});var o=JSON.parse(a.data).key;wx.request({url:l.getUrl("YinianProject/event/UploadShortVideo"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.mainIdStr,content:t.content,address:o,storage:6e3,place:t.place,attentionMember:t.attentionMember||"",publishedTime:t.publishedTime||""},success:function(a){if(console.log(a),0==a.data.code){e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:2}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3);var o=a.data.data;e.isfirstUpload(o),h(wx.getStorageSync("userid"),t.mainIdStr,"upload")}else 1039==a.data.code?(e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:4}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3)):(r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},startUpAudio:function(){console.log(r.upObj);var t=this,e=r.upObj;t.setData({showProgress:!0,totalnum:1,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"audio"}),r.isUp=!0,t.uploadAudio(e)},uploadAudio:function(t){var e=this;wx.request({url:l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(a){if(console.log(a),0!=a.data.code)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=a.data.data[0].token,i=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:i,name:"file",formData:{key:i.split("//")[1],token:o},success:function(a){if(console.log(a),200!=a.statusCode)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});e.setData({uploadnum:1,progress:100});var o=JSON.parse(a.data);console.log("path",o);var i=o.key;console.log("userid",wx.getStorageSync("userid")),console.log("address",i),console.log("groupId",t.groupId),console.log("location",t.place),console.log("duration",t.duration),wx.request({url:l.getUrl("YinianProject/event/UploadAudio"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.groupId,eaudio:i,eaudioDuration:t.duration,storage:3e3,place:t.place},success:function(a){if(console.log("lastres",a),0==a.data.code){e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:2}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3);var o=a.data.data;e.isfirstUpload(o),h(wx.getStorageSync("userid"),t.groupId,"upload")}else 1039==a.data.code?(e.getCsTimeData(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:4}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3)):(r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},closeProgress:function(){var t=this;clearTimeout(t.timer2),clearTimeout(t.timer4),clearTimeout(t.timer5),r.upState=0,r.upObj={},this.setData({progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,isUpPicState:!0})},startUpload:function(){var t=this,e=r.upObj,a=[].concat(e.picarr);t.setData({showProgress:!0,totalnum:e.picarr.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic"}),r.isUp=!0,u.length=0;wx.request({url:l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(o){0===o.data.code?t.uploadpicasync(o.data.data[0].token,a,e,0):(u.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1)},fail:function(e){u.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1}})},uploadpicasync:function(t,e,a,o){var s=this;if(0==e.length)wx.request({url:l.getUrl("YinianProject/event/UploadEvent"),data:{userid:wx.getStorageSync("userid"),groupid:a.mainIdStr,content:a.content,textTitle:a.textTitle,picAddress:u.join(","),storage:300*u.length,memorytime:i.formatTime(new Date),source:"小程序",place:a.place,formID:a.formID,isPush:"true",main:o,attentionMember:a.attentionMember||"",publishedTime:a.publishedTime||""},success:function(t){if(console.log(t),0!=t.data.code)return u.length=0,r.isUp=!1,void s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});if(h(wx.getStorageSync("userid"),a.mainIdStr,"upload"),s.getCsTimeData(),r.isUp=!1,0==s.data.isActivitySwitch.isDelete&&1!=s.data.ablumInfo.gOrigin&&11!=s.data.ablumInfo.gtype&&s.getHeaderData(),null==t.data.data)return u.length=0,r.upState=0,r.upObj={},void s.setData({progress:0,upSteps:2,showProgress:!1,isUpPicState:!0});if(t.data.data[0].picList.length>0){var e=t.data.data;s.isfirstUpload(e)}t.data.data[0].picList.length<u.length?(s.setData({sucImgNum:t.data.data[0].picList.length,fitImgNum:u.length-t.data.data[0].picList.length,upSteps:4,progress:0}),u.length=0,r.upState=0,r.upObj={},s.timer4=setTimeout(function(){s.setData({showProgress:!1,isUpPicState:!0})},8e3)):(u.length=0,r.upState=0,r.upObj={},s.setData({progress:0,upSteps:2}),s.timer2=setTimeout(function(){s.setData({showProgress:!1,isUpPicState:!0})},3e3))},fail:function(){u.length=0,r.isUp=!1,s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}});else{var n=e.splice(0,1);s.uppic(t,n,e,a,o)}},uploadpicasyncEvetn:function(t,e,a,o){var s=this;if(0==e.length)wx.request({url:l.getUrl("YinianProject/family/addIncident"),data:{userid:wx.getStorageSync("userid"),groupid:a.mainIdStr,content:a.content,textTitle:a.textTitle,picAddress:u.join(","),storage:300*u.length,memorytime:i.formatTime(new Date),source:"小程序",place:a.place,formID:a.formID,isPush:"true",main:o,attentionMember:a.attentionMember||"",publishedTime:a.publishedTime||""},success:function(t){if(console.log(t),0!=t.data.code)return u.length=0,r.isUp=!1,void s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});if(h(wx.getStorageSync("userid"),a.mainIdStr,"upload"),s.getCsTimeData(),r.isUp=!1,0==s.data.isActivitySwitch.isDelete&&1!=s.data.ablumInfo.gOrigin&&11!=s.data.ablumInfo.gtype&&s.getHeaderData(),null==t.data.data)return u.length=0,r.upState=0,r.upObj={},void s.setData({progress:0,upSteps:2,showProgress:!1,isUpPicState:!0});if(t.data.data[0].picList.length>0){var e=t.data.data;s.isfirstUpload(e)}t.data.data[0].picList.length<u.length?(s.setData({sucImgNum:t.data.data[0].picList.length,fitImgNum:u.length-t.data.data[0].picList.length,upSteps:4,progress:0}),u.length=0,r.upState=0,r.upObj={},s.timer4=setTimeout(function(){s.setData({showProgress:!1,isUpPicState:!0})},8e3)):(u.length=0,r.upState=0,r.upObj={},s.setData({progress:0,upSteps:2}),s.timer2=setTimeout(function(){s.setData({showProgress:!1,isUpPicState:!0})},3e3))},fail:function(){u.length=0,r.isUp=!1,s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}});else{var n=e.splice(0,1);s.uppic(t,n,e,a,o)}},eventUpload:function(){var t=this,e=r.upObj,a=[].concat(e.picarr);t.setData({showProgress:!0,totalnum:e.picarr.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"event"}),r.isUp=!0,u.length=0;wx.request({url:l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(o){0===o.data.code?t.uploadpicasyncEvetn(o.data.data[0].token,a,e,"6"):(u.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1)},fail:function(e){u.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1}})},uppic:function(t,e,a,o,i,s){var n=this,l=e[0],d=l.lastIndexOf("."),c=(new Date).getTime()+""+parseInt(1e8*Math.random()+1e8)+l.substring(d);wx.uploadFile({url:"https://upload.qiniup.com",filePath:l,name:"file",formData:{key:c,token:t},success:function(e){if(200!=e.statusCode)return u.length=0,r.isUp=!1,void n.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var l=JSON.parse(e.data);u.push(l.key),n.setData({uploadnum:u.length,progress:parseInt(u.length/n.data.totalnum*100)}),"event"==s?n.uploadFileEvent(t,a,o,i,s):n.uploadpicasync(t,a,o,i)},fail:function(){u.length=0,r.isUp=!1,n.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},getAlbumInformation:function(t){var e=this,a=c.encryptByDESModeCBC(t.userid),o=c.encryptByDESModeCBC(e.groupid),s=this.port?this.port:"",n=this.fromUserID?this.fromUserID:0,l=e.zj,d=e.comeuserid;i.wxreq({pathname:"YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",data:{userid:a,groupid:o,port:s,fromUserID:n,zj:l,inviteuserid:d}}).then(function(a){if(2!=a.code)if(1012==a.code)wx.showModal({title:"提示",content:"相册已被解散",showCancel:!1,success:function(t){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else if(1037==a.code)wx.showModal({title:"提示",content:"相册已被封",showCancel:!1,success:function(t){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else{if(0!=a.code)return void wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}});a.data[0].inviteusername&&(console.log("yaoqingren",a.data[0].inviteusername,t.isnew),d!=t.userid&&"0"!=a.data[0].picNum&&"yes"==t.isnew&&e.setData({showcomeuserModel:!0,inventPerson:a.data[0].inviteusername}));var o=a.data[0].isPush?a.data[0].isPush:0;wx.setStorageSync("msgState",o);var s=a.data[0];s.joinStatus||wx.showToast({title:"加入相册成功"}),wx.setStorage({key:"createrid",data:s.gcreator}),s.gcreator==t.userid&&e.setData({isgcreator:!0}),wx.setStorage({key:"gAuthority",data:s.gAuthority});var n=s.authorityList?s.authorityList:[];wx.setStorage({key:"authorityList",data:n}),wx.setStorage({key:"gnum",data:s.gnum}),wx.setStorage({key:"ganme",data:s.gname}),e.gname=s.gname,r.globalData.gtype=s.gtype,r.globalData.gcreator=s.gcreator;var l=void 0;l=(10==s.gtype||11==s.gtype)&&t.userid==s.gcreator,e.setData({ablumInfo:{gcreator:s.gcreator,canDelete:l,gtype:s.gtype,gnum:s.gnum,picnum:s.picNum,gname:s.gname,list:s.memberList,gpic:s.gpic,gOrigin:s.gOrigin,eventQRCodeCanPublish:s.eventQRCodeCanPublish,dialogShow:s.dialogShow,inBlackList:s.inBlackList,advertisementsShow:s.advertisementsShow,useablePoints:s.points,upic:s.upic,unickname:r.globalData.userInfo.nickName,arTitle:s.arTitle,arValue:s.arValue,belowImgUrl:s.belowImgUrl,canNotExit:s.canNotExit||0,groupNewType:s.groupNewType}}),1==s.advertisementsShow&&e.getBusiness(),30==s.groupNewType&&(e.getLoversAuth(),e.getLoversInfo(),i.getAuthPic("lovers_intro",0,function(t){e.setData({loversIntroPic:t.belowImgUrl})})),e.getCsTimeData()}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})})},getActivitySwitch:function(){var t=this;i.wxreq({pathname:"YinianProject/activitySpacial/selectActivityInfoById",data:{activitySpacialId:1}}).then(function(e){0==e.code&&(console.log(e),t.setData({isActivitySwitch:e.data[0]}))})},refresh:function(){var t=this.version?this.version:"",e=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,o=this.fromSpaceID?this.fromSpaceID:0,i=this.fromEventID?this.fromEventID:0,s=this;r.getUserInfo(function(t){s.nickname=t.nickName,wx.request({url:l.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(e){var a;if(0==e.data.code&&(a=e.data.data[0].setlikecnt,s.setlikecnt=a,e.data.data[0].canlogin)){var o=parseInt(5*Math.random()+5);return s.setData({waitingState:!1,secondNum:o,secondEnd:!0}),void(s.timer2=setInterval(function(){var t=s.data.secondNum;t<=0?(clearInterval(s.timer2),s.timer2=null,s.setData({secondEnd:!1})):(t--,s.setData({secondNum:t}))},1e3))}s.setData({waitingState:!0}),s.getAlbumInformation(t)}})},t,e,a,o,i,"viewscoll")},onPageScroll:function(t){var e=750/r.globalData.systemInfo.windowWidth;t.scrollTop>372/e?this.data.showTop&&this.setData({showTop:!1}):this.data.showTop||this.setData({showTop:!0}),this.data.showComInput&&this.setData({showComInput:!1})},showLoveIntro:function(){this.setData({showLoveIntroBox:!0});var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("loversBanner",t,e,a)},closeLoversBox:function(){this.setData({showLoveIntroBox:!1})},closeLoversFirstUp:function(){this.setData({showLoveFirstBox:!1});var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("closeInviteOther",t,e,a)},getLoversAuth:function(){var t=this;i.wxreq({pathname:"YinianProject/bannerDisplay/getLoversBannerInfo",data:{groupId:t.groupid}}).then(function(e){console.log(e),0==e.code&&t.setData({loversBannerInfo:e.data[0]})})},loversInviteBtn:function(){var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("inviteOther",t,e,a)},getLoversInfo:function(){var t=this,e=t.groupid;i.wxreq({pathname:"YinianProject/groupConfig/getGroupConfig",data:{groupId:e,configName:"loverGroupContent"}}).then(function(e){console.log(e),0==e.code&&t.setData({loversInfo:e.data[0]})})},showcode:function(){var t=this;this.loadImgStateNo=!0,t.setData({fromlast:1}),t.tepEid?(wx.showToast({title:"正在获取二维码",icon:"loading",duration:6e3,mask:!0}),wx.request({url:l.getUrl("YinianProject/yinian/CreateSmallAppPlan2QRCode"),data:{id:t.tepEid,type:"eventdetail2"},success:function(t){var e=t.data.data[0].QRCodeURL;wx.hideToast(),wx.previewImage({urls:[e]})}})):wx.showModal({title:"提示",content:"获取动态数据不成功,请稍后再试",showCancel:!1})},toAnotherApp:function(){wx.navigateToMiniProgram({appId:"wx228859fda649194f",path:"pages/index/index",success:function(t){}})},goHome:function(){var t=this;"object"==o(this.button)&&this.button.push({name:"backToIndex"}),1==t.data.ablumInfo.gOrigin?t.data.showintroduce?t.fasttoknow():(t.loadImgStateNo=!0,wx.navigateTo({url:"/pages/makegroup/makegroup?lastPage=albumDetail"})):wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.switchTab({url:"/pages/index/index"}),r.isNewUser=!1,t.setData({globalNewUser:!1})},toLookPhoto:function(t){this.loadImgStateNo=!0,this.setData({fromlast:1});var e=t.currentTarget.dataset.userid,a=t.currentTarget.dataset.groupid,o=this.data.ablumInfo.groupNewType||0;wx.navigateTo({url:"/pages/personalPage/personalPage?groupId="+a+"&albumType="+o+"&pageUserId="+e+"&creator="+this.data.ablumInfo.gcreator})},toSettingPage:function(t){var e=t.currentTarget.dataset.albumtype,a=this.data.ablumInfo.gOrigin,o=this.data.ablumInfo.canNotExit,s=t.detail.formId;i.sendFormId(this.data.userid,s),console.log(e),this.loadImgStateNo=!0,wx.navigateTo({url:"/pages/setting/setting?clickFrom=grouptypescoll&gOrigin="+a+"&canNotExit="+o+"&albumType="+e})},addmember:function(t){var e=this,a=e.data.userid||0;if(!e.data.inviteSwitchhot){var s="";s="invite"==t.currentTarget.dataset.invite?"notiflyInvite":"albuminvite",r.stat.stathotmall({userId:a,groupId:e.groupid,port:r.globalData.port,operation:s,registerTime:r.globalData.utime,inviteId:e.nc})}if(e.groupid){if(this.loadImgStateNo=!0,this.setData({fromlast:1}),"object"==o(this.button)&&this.button.push({name:"invite"}),30==this.data.ablumInfo.groupNewType){var n=this.groupid,l=this.data.userid,d=this.data.ablumInfo.gcreator;i.countLoversOperation("addmember",n,l,d)}var u=e.groupid||0;i.countOperation("addmenber",u,a,"");var c="";c=e.data.inviteSwitchhot?"/pages/others/newsharepage/newsharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:c+"?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=addmenber&groupid="+e.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+e.data.ablumInfo.groupNewType}),this.isInvitepushId()}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},emptyListShare:function(){var t=this;if(t.groupid){var e=t.groupid||0,a=t.data.userid||0;i.countOperation("emptylist_share",e,a,""),t.loadImgStateNo=!0,t.setData({fromlast:1}),"object"==o(t.button)&&t.button.push({name:"invite"});var s="";console.log(t.data.inviteSwitchhot),s=t.data.inviteSwitchhot?"/pages/others/newsharepage/newsharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:s+"?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=addmenber&groupid="+t.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+t.data.ablumInfo.gcreator+"&gname="+t.data.ablumInfo.gname+"&groupNewType="+t.data.ablumInfo.groupNewType})}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},loversToShare:function(){var t=this;t.groupid?(this.loversInviteBtn(),this.loadImgStateNo=!0,this.setData({fromlast:1}),wx.navigateTo({url:"/pages/others/newsharepage/newsharepage?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerinfo_share&groupid="+t.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish})):wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},toShare:function(t){var e=this;if(e.groupid){if(e.loadImgStateNo=!0,e.setData({fromlast:1}),console.log(t.currentTarget.dataset.info),"info"===t.currentTarget.dataset.info){var a=e.groupid||0,o=e.data.userid||0;i.countOperation("bannerinfo_share",a,o,"")}var s=e.data.userid||0;e.data.activitySwitchhot||r.stat.stathotmall({userId:s,groupId:e.groupid,port:r.globalData.port,operation:"clicknotify",registerTime:r.globalData.utime,inviteId:e.nc});var n="";console.log(this.data.bannerInfo.bannerJump),n=this.data.bannerInfo.bannerJump?"/pages/others/newsharepage/newsharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:n+"?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerinfo_share&groupid="+e.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+e.data.ablumInfo.groupNewType})}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},toEditPhotos:function(t){var e=this,a=t.currentTarget.dataset.index,o=t.currentTarget.dataset.photosource,i=this.data.eventlist[a].list[0].picList,s=4==this.data.eventlist[a].list[0].eMain?"video":"pic";if("photosync"==o){if(0==this.data.ablumInfo.inBlackList)return void wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1});var n={operation:"ediSync",userId:e.data.userid,groupId:e.groupid};r.stat.request(n),this.loadImgStateNo=!0}else{if("download"!=o)return;this.loadImgStateNo=!0,this.setData({fromlast:1})}wx.setStorageSync("editPhotoArr",i),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+o+"&isPicOrVideo="+s})},toEditPhotosDelete:function(t){var e=this,a=t.detail.formId;i.sendFormId(this.data.userid,a);var o=t.currentTarget.dataset.photosource,s=this.data.eventlist[this.a].list[0].picList,n=this.data.eventlist[this.a].list[0].eMain,l=4==n?"video":"pic",d=this.tepEid;if("photosync"==o){if(0==this.data.ablumInfo.inBlackList)return void wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1});this.loadImgStateNo=!0;var u={operation:"ediSync",userId:e.data.userid,groupId:e.groupid};r.stat.request(u)}else if("download"==o)this.loadImgStateNo=!0,this.setData({fromlast:1});else{if("delete"!=o)return;if(1==n||2==n)return void this.delete_event(d);this.loadImgStateNo=!0}wx.setStorageSync("editPhotoArr",s),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+o+"&isPicOrVideo="+l,success:function(){e.setData({showFunModel:!1})}})},toChaneBgPic:function(){wx.getStorageSync("userid")?wx.getStorageSync("userid")==wx.getStorageSync("createrid")?(this.loadImgStateNo=!0,wx.navigateTo({url:"/pages/others/changbgpic/changbgpic"})):wx.showModal({title:"提示",content:"非相册管理员，无法修改背景图",showCancel:!1}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},editpic:function(t){var e=this;wx.getStorageSync("userid")?wx.getStorageSync("userid")==wx.getStorageSync("createrid")?(this.loadImgStateNo=!0,this.setData({fromlast:1}),wx.request({url:l.getUrl("YinianProject/yinian/GetUploadToken"),data:{},method:"GET",success:function(t){var a=t.data.data[0].token;e.isSubmit=2,wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传",icon:"loading",duration:2e3});var o=t.tempFilePaths[0].split("//")[1];wx.uploadFile({url:"https://upload.qiniup.com",filePath:t.tempFilePaths[0],name:"file",formData:{key:t.tempFilePaths[0].split("//")[1],token:a},success:function(t){var a=JSON.parse(t.data);new Date;wx.request({url:l.getUrl("YinianProject/yinian/ModifyGroupPic"),data:{url:a.key,userid:wx.getStorageSync("userid"),groupID:wx.getStorageSync("groupid")},success:function(t){0==t.data.code?(e.data.ablumInfo.gpic="http://7xlmtr.com1.z0.glb.clouddn.com/"+o,e.setData({ablumInfo:e.data.ablumInfo}),wx.showToast({title:"修改成功",icon:"success",duration:2e3,success:function(){setTimeout(function(){wx.hideToast()},1500)}})):wx.showToast({title:"设置失败"})}})}})}})}})):wx.showModal({title:"提示",content:"非相册管理员，无法修改背景图",showCancel:!1}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},comment:function(t){console.log(t);t.currentTarget.dataset.parentindex,t.currentTarget.dataset.childindex;var e=t.currentTarget.dataset.eid;this.commentEid=e,this.commentedUserid=10,this.commentedname="系统消息",this.setData({showComInput:!0,inputfocus:!0,placehold:"对ta说点啥...",contentCurrent:!1})},recomment:function(t){if(void 0!=t.target.dataset.commentindex){var e=this,o=t.target.dataset.commentindex,s=t.currentTarget.dataset.dataindex.split(","),n=a(s,2),l=n[0],d=n[1],u=this.data.eventlist[l].list[d].comments[o],c=u.commentUser.userid,p=u.commentUser.unickname,g=t.currentTarget.dataset.eid;c==r.globalData.userInfo.userid?wx.showModal({title:"提示",content:"删除此条评论？",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:u.cid}}).then(function(t){"success"==t.msg&&(e.data.eventlist.forEach(function(t,e){t.list[0].eid==g&&(t.list[0].comments.splice(o,1),t.list[0].commentCnt--)}),e.setData({eventlist:e.data.eventlist}))})}}):(this.commentEid=g,this.commentedUserid=c,this.commentedname=p,this.setData({showComInput:!0,inputfocus:!0,placehold:"@"+p+":",contentCurrent:!1}))}},sendcomment:function(t){var e=t.detail.formId,a=t.detail.value.content,o=this.data.userid,s=this.commentEid,l=this.commentedUserid,d=this.commentedname;if(0!=a.length)if(n.testStr(a))wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1});else{var u=this,c=i.formatTimeWithSecond(new Date),p={cid:-1,commentedUser:{userid:l,unickname:d},commentUser:{userid:o,unickname:r.globalData.userInfo.nickName,upic:r.globalData.userInfo.avatarUrl},ccontent:a,ctime:c},g=Array.from(u.data.eventlist);u.data.eventlist.forEach(function(t,e){t.list[0].eid==s&&(g[e].list[0].comments.unshift(p),g[e].list[0].commentCnt=parseInt(g[e].list[0].commentCnt)+1)}),u.setData({showComInput:!1,eventlist:g,value:"",contentCurrent:!1,placehold:"说点什么..."}),u.commentedUserid=10,u.commentedname="系统消息",wx.showToast({title:"发表成功",icon:"success",duration:1e3}),u.isCommentpushId(),h(o,wx.getStorageSync("groupid"),"comment"),i.wxreq({pathname:"YinianProject/yinian/SendComment1",data:{commentUserId:o,commentedUserId:l,eventId:s,content:a,formID:e}}).then(function(t){0==t.code&&(u.data.eventlist.forEach(function(e){e.list[0].eid==s&&e.list[0].comments.forEach(function(e){e.ctime===c&&(e.cid=t.data[0].cid)})}),u.setData({eventlist:u.data.eventlist}))})}else wx.showModal({title:"提示",content:"请先输入评论内容",showCancel:!1})},hiddenWrite:function(){this.setData({showComInput:!1})},checkchange:function(t){var e=t.detail.value.trim().length>0;this.setData({contentCurrent:e})},maketop:function(t){var e=this.data.eventlist[this.a].list[0].eid;this.state=this.data.eventlist[this.a].list[0].elevel;var a=this,o=1==this.state?"cancel":"stick",s=1==this.state?"取消置顶":"置顶";wx.showModal({title:"提示",content:"是否"+s+"此动态",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/ModifyEventLevel",data:{userid:wx.getStorageSync("userid"),groupid:wx.getStorageSync("groupid"),eid:e,type:o}}).then(function(t){if("success"==t.msg){wx.showToast({title:s+"成功"});a.data.eventlist[a.a].list[0].elevel=1==a.data.eventlist[a.a].list[0].elevel?"0":"1",a.state=1==a.state?"0":"1",a.getCsTimeData()}})}})},delete_event:function(e){var a=this;if(e){var o=e||this.data.eventlist[a.a].list[0].eid;wx.showModal({title:"删除动态",content:"确定删除此条动态吗？",confirmColor:"#353535",success:function(e){e.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteEvent",data:t({userid:wx.getStorageSync("userid")},"eventId",o)}).then(function(t){if("success"==t.msg){wx.showToast({title:"删除成功",icon:"success",duration:2e3});var e=0,i=!1;a.data.eventlist.forEach(function(t,a){if(t.list[0].eid==o)return e=a,void(i=!0)}),i&&a.data.eventlist.splice(e,1),a.setData({eventlist:a.data.eventlist,showFunModel:!1})}})}})}},closeintroduce:function(){this.setData({showintroduce:!1})},uploadpic:function(t){var e=this;if(wx.getStorageSync("userid")){clearTimeout(e.timer),this.setData({fromlast:1}),this.loadImgStateNo=!0;var a;a="pai"==(t=t||event).currentTarget.dataset.pic?"camera":"album",this.isSubmit=2,wx.chooseImage({count:9,sizeType:["original"],sourceType:[a],success:function(a){var o=a.tempFilePaths;wx.removeStorageSync("uploadchoosedpic"),wx.setStorage({key:"uploadchoosedpic",data:o,success:function(){if(e.setData({addModalOn:!1,fromlast:1}),e.loadImgStateNo=!0,e.closeModal(),e.data.eventModel)e.addImgUploadevent();else{var a=e.groupid;if("event"==t.currentTarget.dataset.stype)wx.navigateTo({url:"/pages/publish/pages/eventImage/eventImage?groupId="+e.groupid+"&albumType=4"});else{var o=e.data.ablumInfo.groupNewType;wx.navigateTo({url:"/pages/publish/pages/image/image?lastPage=albumDetail&groupId="+a+"&albumType="+o})}}},fail:function(){wx.showToast({title:"保存图片临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},uploadvideo:function(t){var e=this;if(wx.getStorageSync("userid")){this.setData({fromlast:1}),this.loadImgStateNo=!0;var a;a="pai"==(t=t||event).currentTarget.dataset.video?"camera":"album",this.isSubmit=2,wx.chooseVideo({sourceType:[a],maxDuration:60,camera:"back",success:function(t){wx.setStorage({key:"uploadchoosedvideo",data:t,success:function(){e.setData({addModalOn:!1});var t=e.data.ablumInfo.groupNewType,a=e.groupid;e.loadImgStateNo=!0,e.closeModal(),wx.navigateTo({url:"/pages/publish/pages/video/video?lastPage=albumDetail&groupId="+a+"&albumType="+t})},fail:function(){wx.showToast({title:"保存视频临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},uploadText:function(){var t=this,e=t.data.ablumInfo.groupNewType,a=t.groupid;t.setData({addModalOn:!1}),t.loadImgStateNo=!0,t.closeModal(),wx.navigateTo({url:"/pages/publish/pages/text/text?lastPage=albumDetail&groupId="+a+"&albumType="+e})},toUploadAudio:function(){var t=this,e=t.data.ablumInfo.groupNewType,a=t.groupid;t.loadImgStateNo=!0,t.closeModal(),t.setData({addModalOn:!1,fromlast:1}),wx.navigateTo({url:"/pages/publish/pages/audio/audio?lastPage=albumDetail&groupId="+a+"&albumType="+e})},getBusiness:function(){var t=this;wx.request({url:l.getUrl("YinianProject/adv/getTimeAxisAdv"),data:{groupid:t.groupid},success:function(e){0==e.data.code&&t.setData({businessList:e.data.data})}})},getBannerInfo:function(){var t=this;i.wxreq({pathname:"YinianProject/bannerDisplay/getBannerInfo",data:{groupId:t.groupid}}).then(function(e){0==e.code&&t.setData({bannerInfo:e.data[0]})})},getCsTimeData:function(){this.setlikecnt;var t=this,e=this.data.ablumInfo.groupNewType||"";t.isloading=!1,wx.request({url:l.getUrl("YinianProject/family/showTimeAxis"),data:{userid:wx.getStorageSync("userid"),groupid:t.groupid,type:"initialize",source:"ynxc",eid:0,albumType:e},success:function(e){if(console.log(e),0==e.data.code){var a=e.data.data,o=wx.getStorageSync("userid");t.templatearr=[],a.forEach(function(e){Object.assign(e,{time:i.timeRest(e.euploadtime),showlibox:!1,isAudioPlay:!1}),t.templatearr.push({month:e.euploadtime.substring(0,7).replace("-","."),list:[e]})});for(var s=0;s<t.templatearr.length;s++)t.templatearr[s].list[0].maxPicList=t.templatearr[s].list[0].picList.length,6==t.templatearr[s].list[0].eMain&&t.templatearr[s].list[0].picList.length>11&&t.templatearr[s].list[0].picList.splice(11,t.templatearr[s].list[0].picList.length-11);t.setData({eventlist:t.templatearr,showFunModel:!1,loadImgState:!0,showLoadingImg:!1,loadingImgOrText:!0}),t.isShowLoverModal(o,t.groupid),"3687301"==t.groupid&&t.data.aladingTwo&&(t.setData({alading:!0}),setTimeout(function(){t.setData({alading:!1,aladingTwo:!1})},2500))}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})}})},enterpreview:function(t){console.log(t);var e=t.currentTarget.dataset.parentindex,a=t.currentTarget.dataset.childindex,o=t.currentTarget.dataset.sel,i=this.data.eventlist,s=this;return console.log(e,a,o),console.log(i[e].list[a].picList),wx.setStorageSync("lookImgs",i[e].list[a].picList),clearTimeout(s.timer),s.setData({fromlast:1}),void wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+o})},showlike:function(t){if(wx.getStorageSync("userid")){var e=this,a=t.currentTarget.dataset.parentindex,o=t.currentTarget.dataset.childindex,i=t.currentTarget.dataset.eid;this.a=a,this.b=o,this.tepEid=i;this.data.eventlist[a].list[0];e.setData({showFunModel:!0,selNumA:a,selNumB:o})}else wx.showToast({title:"获取用户信息失败"})},toDownLoad:function(t){this.loadImgStateNo=!0,this.setData({fromlast:1});var e=this.data.eventlist[this.a].list[0].picList;wx.setStorageSync("downPic",e);var a=4==this.data.eventlist[this.a].list[0].eMain?"video":"pic";wx.navigateTo({url:"/pages/others/download/download?downloadPicOrVideo="+a})},tosharepage:function(t){var e=this,a=e.groupid||0,s=e.data.userid||0;i.countOperation("viewscoll_eid",a,s,""),this.loadImgStateNo=!0,this.setData({fromlast:1});var n=t.currentTarget.dataset.index,l=this.data.eventlist[n].list[0].picList,d=this.data.eventlist[n].list[0].eMain,u=this.data.eventlist[n].list[0].eid;r.sharePageUserPic=0,wx.setStorageSync("sharePagePic",l),"object"==o(this.button)&&this.button.push({name:"eventShare"}),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=viewscoll_eid&eid="+u+"&eMain="+d+"&groupid="+this.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+this.data.ablumInfo.groupNewType})},like:function(t){if(console.log("点赞"),console.log(t),wx.getStorageSync("userid")){var e=t.detail.formId,a=t.currentTarget.dataset.likecatagry,o=t.currentTarget.dataset.parentindex,i=t.currentTarget.dataset.childindex||0,s=(t.currentTarget.dataset.emain,t.currentTarget.dataset.eid),n=this;n.data.eventlist[o].list[i].likeUser=1,n.data.eventlist[o].list[i].likeCnt=parseInt(n.data.eventlist[o].list[i].likeCnt)+1,a&&(n.isLikepushId(),h(wx.getStorageSync("userid"),n.groupid,"like"),n.setData({eventlist:n.data.eventlist}),wx.showToast({title:"点赞成功",icon:"success",duration:1e3}),wx.request({url:l.getUrl("YinianProject/yinian/AttachOrRemoveExpressionByLkNew"),data:{type:a,userid:r.globalData.userInfo.userid,eid:s,formID:e},success:function(t){console.log(t),t=t.data}}))}else wx.showToast({title:"获取用户信息失败"})},likeState:function(){},onPullDownRefresh:function(){this.getCsTimeData(),wx.stopPullDownRefresh()},onReachBottom:function(){wx.getStorageSync("userid")&&this.data.eventlist&&0!=this.data.eventlist.length&&this.templatearr&&0!=this.templatearr.length&&this.loadinged()},loadinged:function(){this.setlikecnt;var t=this,e=this.data.ablumInfo.groupNewType||"";this.isloading||(this.isloading=!0,this.setData({showLoadingImg:!0,loadingImgOrText:!0}),wx.request({url:l.getUrl("YinianProject/family/showTimeAxis"),data:{groupid:t.groupid,type:"loading",source:"ynxc",albumType:e,eid:t.templatearr[t.templatearr.length-1].list[0].eid,userid:wx.getStorageSync("userid")},success:function(e){console.log(e),0==e.data.code?0==(e=e.data).data.length?t.setData({showLoadingImg:!0,loadingImgOrText:!1}):(e.data.forEach(function(e){t.retState||(Object.assign(e,{time:i.timeRest(e.euploadtime),showlibox:!1,isAudioPlay:!1}),e.maxPicList=e.picList.length,6==e.eMain&&e.picList.length>11&&e.picList.splice(11,e.picList.length-11),t.templatearr.push({month:e.euploadtime.substring(0,7).replace("-","."),list:[e]}))}),t.isloading=!1,t.setData({eventlist:t.templatearr,showLoadingImg:!1})):(t.isloading=!1,t.setData({showLoadingImg:!1}))},fail:function(){t.isloading=!1,t.setData({showLoadingImg:!1})}}))},toMakeGroup:function(){"object"==o(this.button)&&this.button.push({name:"createAlbum"}),this.loadImgStateNo=!0,this.closeIntroCreate(),wx.navigateTo({url:"/pages/makegroup/makegroup?lastPage=albumDetail"})},showPvModel:function(){var t=this;if("object"==o(this.button)&&this.button.push({name:"upload"}),0!=t.data.ablumInfo.inBlackList)if(r.isUp)wx.showToast({title:"正在上传中喔~"});else if(2==t.data.ablumInfo.gOrigin&&t.closeIntroUpload(),1!=wx.getStorageSync("gAuthority")||wx.getStorageSync("userid")==wx.getStorageSync("createrid")){if(2==wx.getStorageSync("gAuthority")){var e=wx.getStorageSync("authorityList");if(0==e.length)return;for(var a=0;a<e.length;a++)e[a].userid==wx.getStorageSync("userid")&&(t.quanxian=!0);if(!t.quanxian)return void wx.showModal({title:"提示",content:"没有上传照片的权限",showCancel:!1})}if(t.setData({pvShowModel:!0}),30==this.data.ablumInfo.groupNewType)if("cancel"===t.isconfirm){var s=this.groupid,n=this.data.userid,l=this.data.ablumInfo.gcreator;i.countLoversOperation("cancelLoversUpBtn",s,n,l)}else{var d=this.groupid,u=this.data.userid,c=this.data.ablumInfo.gcreator;i.countLoversOperation("loversUpBtn",d,u,c)}}else wx.showModal({title:"提示",content:"只能创建者才能上传"});else wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1})},closepvModel:function(){this.setData({pvShowModel:!1})},closeFunModel:function(){this.setData({showFunModel:!1})},openAudioModel:function(){this.setData({showAudioModelBox:!0})},closeAudioBox:function(){this.setData({showAudioModelBox:!1})},preReset:function(){this.setData({fromlast:1})},longPressDelete:function(t){var e=this,a=t.currentTarget.dataset.longcid,o=t.currentTarget.dataset.longeid,s=t.currentTarget.dataset.longindex;wx.showModal({title:"提示",content:"是否删除该条评论",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:a}}).then(function(t){"success"==t.msg&&(e.data.eventlist.forEach(function(t,e){t.list[0].eid==o&&(t.list[0].comments.splice(s,1),t.list[0].commentCnt--)}),e.setData({eventlist:e.data.eventlist}))})}})},activityRules:function(){this.data.ablumInfo&&this.data.ablumInfo.arValue&&this.data.ablumInfo.arValue.length>0&&this.setData({showActivityRules:!1})},closeActivityRules:function(){this.setData({showActivityRules:!0})},returnhome:function(){"object"==o(this.button)&&this.button.push({name:"backToIndex"}),wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.switchTab({url:"/pages/index/index"})},openModel:function(){this.setData({showModelHidden:!0})},closeModel:function(){this.setData({showModelHidden:!1})},closeIntroUpload:function(){var t="showLoad"+this.groupid;wx.setStorageSync(t,1),this.setData({showFooterIntro1:!1})},closeIntroCreate:function(){var t="showCreat"+this.groupid;wx.setStorageSync(t,1),this.setData({showFooterIntro2:!1})},toBusinessGroup:function(t){var e=this,a=t.detail.formId;if(i.sendFormId(e.data.userid,a),"object"==o(this.button)&&this.button.push({name:"banner"}),0==e.data.businessList[0].joinGroupOrList)wx.navigateTo({url:"/pages/others/businessgroup/businessgroup?lastPage=albumDetail&listid="+e.data.businessList[0].listid});else if(1==e.data.businessList[0].joinGroupOrList){this.loadImgStateNo=!0;var s=e.data.businessList[0].groupNewType;console.log(s),g({groupNewType:s,data:{lastPage:"albumDetail",from:"grouplist",groupid:e.data.businessList[0].joinGroupid},navigator:"navigate"})}else if(2==e.data.businessList[0].joinGroupOrList){if(11==e.data.ablumInfo.groupNewType)return;this.loadImgStateNo=!0,this.setData({fromlast:1});var n=e.groupid||0,r=e.data.userid||0;i.countOperation("bannerpic_share",n,r,""),wx.navigateTo({url:"/pages/others/newsharepage/newsharepage?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerpic_share&groupid="+e.groupid+"&gOrigin="+e.data.ablumInfo.gOrigin})}else if(3==e.data.businessList[0].joinGroupOrList){var l=e.data.businessList[0].joinGroupid;if(!l)return;this.loadImgStateNo=!0,wx.navigateTo({url:"/"+l})}},seeBigVideo:function(t){var e=t.currentTarget.dataset.url;wx.setStorageSync("videourl",e),wx.navigateTo({url:"/pages/viewscoll/bigvideo/bigvideo",success:function(){this.loadImgStateNo=!0,this.setData({fromlast:1})}.bind(this)})},loadmore:function(t){this.setData({fromlast:1}),wx.navigateTo({url:"/pages/eventdetail/eventdetail?lastPage=albumDetail&dateindex="+t.currentTarget.dataset.sela+"&eid="+t.currentTarget.dataset.eid+"&rowindex="+t.currentTarget.dataset.selb+"&efrom=grouptypescoll&groupNewType="+this.data.ablumInfo.groupNewType})},closeDispose:function(){console.log("closeDispose")},sureDispose:function(){console.log("sureDispose")},edit:function(){var t=this;wx.getStorageSync("createrid")==wx.getStorageSync("userid")?t.setData({Mengcen:!0}):wx.showModal({title:"提示",content:"非相册管理员，无法修改相册名",showCancel:!1})},setcolor:function(t){var e=this,a=t.detail.value.length;e.setData({textNum:a}),t.detail.value.trim().length>0?e.setData({buttonactive:!0}):e.setData({buttonactive:!1})},Mengcen_cancel:function(){this.setData({textNum:0,Mengcen:!1})},submitfun:function(t){var e=this;if(wx.getStorageSync("userid")){var a=t.detail.value.groupname;if(a.trim().length>0){if(n.testStr(a))return void wx.showModal({title:"包含敏感词",content:"请勿使用包含敏感词汇的相册名称",showCancel:!1});wx.request({url:l.getUrl("YinianProject/yinian/ModifyGroupName"),data:{groupid:wx.getStorageSync("groupid"),groupName:a,userid:wx.getStorageSync("userid")},success:function(t){0==t.data.code&&(wx.showToast({title:"修改成功",icon:"success",duration:2e3}),wx.setStorageSync("gname",a),e.data.ablumInfo.gname=a,wx.setStorageSync("ganme",a),e.setData({textNum:0,Mengcen:!1,ablumInfo:e.data.ablumInfo}))}})}else wx.showModal({title:"提示",content:"请输入正确的相册名称",showCancel:!1})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},fasttoknow:function(){var t=this;t.setData({showDisposeModel:!0,usernumber:s.usernumber}),clearInterval(t.timerinterval),t.timerinterval=null,t.usernumberchange()},usernumberchange:function(){var t=this;t.timerinterval=setInterval(function(){if(t.data.usernumber>t.data.maxnumber){clearInterval(t.timerinterval),t.timerinterval=null;var e=t.toThousands(t.data.maxnumber);console.log(e),t.setData({usernumber:e})}else t.data.usernumber+=323456,t.setData({usernumber:t.data.usernumber})},100)},toThousands:function(t){for(var t=(t||0).toString(),e="";t.length>3;)e=","+t.slice(-3)+e,t=t.slice(0,t.length-3);return t&&(e=t+e),e}},t(e,"closeModel",function(){this.setData({showDisposeModel:!1,classArr:["pic1","pic2","pic3"]})}),t(e,"changestart",function(t){v=t.touches[0].pageX,S=t.touches[0].pageY}),t(e,"changemove",function(t){}),t(e,"changend",function(t){var e=this;if(b=t.changedTouches[0].pageX,I=t.changedTouches[0].pageY,v-b>30){if("pic2"==e.data.classArr[0])return;e.data.classArr.unshift(e.data.classArr[e.data.classArr.length-1]),e.data.classArr.pop(e.data.classArr[e.data.classArr.length-1]),e.setData({classArr:e.data.classArr})}else if(b-v>30){if("pic1"==e.data.classArr[0])return;e.data.classArr.push(e.data.classArr[0]),e.data.classArr.shift(e.data.classArr[0]),e.setData({classArr:e.data.classArr})}}),t(e,"addgroup",function(){wx.getStorageSync("userid")?("object"==o(this.button)&&this.button.push({name:"createAlbum"}),this.loadImgStateNo=!0,wx.navigateTo({url:"../../../pages/makegroup/makegroup?lastPage=albumDetail"})):wx.showModal({title:"错误",content:"获取用户授权信息失败！创建相册功能不可用！",showCancel:!1})}),t(e,"isfirstUpload",function(t){return}),t(e,"noLongerPrompt",function(){var t=this;wx.setStorageSync("noPrompt",1),t.setData({showfirstuploadModel:!1});var e={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesNoPrompt",userLastLoginTime:r.enterTime};r.stat.request(e)}),t(e,"getHeaderData",function(){var t=this,e=t.data.userid;i.wxreq({pathname:"YinianProject/activitySpacial/selectHasUploadNum",data:{activitySpacialId:1,userId:e}}).then(function(a){if(console.log(a),0==a.code){var o=a.data[0].hasUploadPercent.split("/")[1];if(a.data[0].hasPicNum=parseInt(o),0==a.data[0].isReceive){t.setData({contentText:a.data[0],showMayDayActivity:!0});var i={operation:"twice_page_popover",userId:e,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(i)}}})}),t(e,"closeMayDayModal",function(){this.setData({showMayDayActivity:!1})}),t(e,"goOnUpload",function(){var t=this;this.setData({showMayDayActivity:!1}),this.openAddEventModal();var e={operation:"twice_page_reupload",userId:t.data.userid,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(e)}),t(e,"toGetPrize",function(){var t=this,e=this.data.userid;wx.redirectTo({url:"/pages/mayDayActivity/index/index"});var a={operation:"twice_page_toreward",userId:e,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(a)}),t(e,"useablePointsclick",function(t){console.log("跳转到 个人中心积分界面"),this.loadImgStateNo=!0,this.setData({fromlast:1});var e=t.detail.formId;i.sendFormId(this.data.userid,e);var a=this.data.groupid,o=this.data.userid,s=this.data.ablumInfo.groupNewType||0,n=this.data.ablumInfo.gcreator;wx.navigateTo({url:"/pages/personalPage/personalPage?groupId="+a+"&pageUserId="+o+"&creator="+n+"&albumType="+s})}),t(e,"closeDispose",function(){this.setData({showcomeuserModel:!1})}),t(e,"hurryupload",function(){var t=this;t.closeDispose(),t.showPvModel()}),t(e,"closefirstuploadDispose",function(){var t=this,e=t.data.userid||0;0==t.data.activitySwitchhot&&r.stat.stathotmall({userId:e,groupId:t.data.groupId,port:r.globalData.port,operation:"quitupload",registerTime:r.globalData.utime,inviteId:t.nc}),t.setData({showfirstuploadModel:!1});var a={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesAgainClose",userLastLoginTime:r.enterTime};"first"==t.data.isFirstUpload&&(a.operation="viewscollToStoriesFirstClose"),r.stat.request(a)}),t(e,"firstuploadshare",function(){var t=this,e=t.groupid||0,a=t.data.userid||0;i.countOperation("firstup_share",e,a,""),t.setData({showfirstuploadModel:!1});var o=t.data.thedata;console.log(o);var s=o[0].picList,n=o[0].eMain,r=o[0].eid;wx.setStorageSync("sharePagePic",s),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=firstup_share&eid="+r+"&eMain="+n+"&groupid="+this.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish})}),t(e,"toStories",function(t){var e=t.currentTarget.dataset.flag;console.log("flag",e);var a={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesAgain",userLastLoginTime:r.enterTime};"first"==e&&(a.operation="viewscollToStoriesFirst"),"again"==e&&(a.operation="viewscollToStoriesAgain"),"share"==e&&(a.operation="viewscollToStoriesShare"),r.stat.request(a);var o=void 0;"first"!=e&&"again"!=e||(o=this.data.thedata[0].eid),"share"==e&&(o=t.currentTarget.dataset.eid);var i=this.groupid;wx.navigateTo({url:"/package/share/pages/shareindex/shareindex?eId="+o+"&groupId="+i})}),t(e,"audioPlay",function(t){var e=t.currentTarget.dataset.audiourl;e&&(console.log(e),p.src=e,p.play(),this.openThisAudio(e))}),t(e,"audioPause",function(){p.pause(),this.closeAllAudio()}),t(e,"openThisAudio",function(t){this.data.eventlist.forEach(function(e){e.list[0].eaudio===t?e.list[0].isAudioPlay=!0:e.list[0].isAudioPlay=!1}),this.setData({eventlist:this.data.eventlist})}),t(e,"closeAllAudio",function(){this.data.eventlist.forEach(function(t){t.list[0].isAudioPlay=!1}),this.setData({eventlist:this.data.eventlist})}),t(e,"openAddModal",function(){var t=this;t.setData({addModalOn:!0}),t.setData({addModalAnimation:!0})}),t(e,"closeAddModal",function(){var t=this;t.setData({addModalOn:!1}),t.setData({addModalAnimation:!1})}),t(e,"openAddEventModal",function(){console.log("点击了分享");var t=this;t.permission()&&(t.openAddModal(),t.setData({addEventModalOn:!0}),t.setData({addEventModalAnimation:!0}),t.isUploadpushId())}),t(e,"closeAddEventModal",function(){var t=this;t.setData({addEventModalOn:!1}),t.setData({addEventModalAnimation:!1}),t.closeAddModal()}),t(e,"openAddPhotoModal",function(t){var e=this;e.setData({addEventModalOn:!1}),e.setData({addEventModalAnimation:!1});var a=t.currentTarget.dataset.type,o="";o="photo"===a?"照片":"video"===a?"视频":"事件",e.setData({addPhotoModalOn:!0,modalTitle:o}),e.setData({addPhotoModalAnimation:!0})}),t(e,"closeAddPhotoModal",function(){var t=this;t.setData({addPhotoModalOn:!1}),t.setData({addPhotoModalAnimation:!1}),t.closeAddModal()}),t(e,"toPoseCamera",function(){var t=this;t.permission()&&(t.setData({fromlast:1}),wx.navigateTo({url:"/pages/poseCamera/pages/camera/camera?groupId="+this.groupid,success:function(t){console.log("跳转成功",t)},fail:function(t){console.log("跳转失败",t)}}))}),t(e,"preventTouchMove",function(){}),t(e,"closeModal",function(){var t=this;t.closeAddPhotoModal(),t.closeAddEventModal()}),t(e,"permission",function(){var t=this,e=!0;if(0==t.data.ablumInfo.inBlackList)return wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1}),void(e=!1);if(1==wx.getStorageSync("gAuthority")&&wx.getStorageSync("userid")!=wx.getStorageSync("createrid"))return wx.showModal({title:"提示",content:"只能创建者才能上传"}),void(e=!1);if(2==wx.getStorageSync("gAuthority")){var a=wx.getStorageSync("authorityList");if(0==a.length)return;for(var o=0;o<a.length;o++)a[o].userid==wx.getStorageSync("userid")&&(t.quanxian=!0);if(!t.quanxian)return wx.showModal({title:"提示",content:"没有上传照片的权限",showCancel:!1}),void(e=!1)}return e}),t(e,"isUploadpushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isUpload",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"isInvitepushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isInvite",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"isLikepushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isLike",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"isCommentpushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isComment",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"flashSaleShowSwitch",function(){var t=this;i.wxreq({pathname:"YinianProject/flashSale/flashSaleShowSwitch",data:{}}).then(function(e){console.log(e),0==e.code?(t.setData({activitySwitchhot:e.data[0].activitySwitch,inviteSwitchhot:e.data[0].inviteSwitch,bottomUrl:e.data[0].bottomUrl,inviteBelowHint:e.data[0].inviteBelowHint}),r.globalData.activitySwitch=e.data[0].activitySwitch,r.globalData.shareUrl=e.data[0].shareUrl,r.globalData.inviteSwitch=e.data[0].inviteSwitch,r.globalData.regulaUrl=e.data[0].regulaUrl):wx.showToast({title:"hotshow请求失败!",duration:2e3})}).catch(function(t){wx.showToast({title:"hotshow请求失败!",duration:2e3})})}),t(e,"hotactiveNavgite",function(){var t=this;t.groupid?t.joinSaleActivty():wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})}),t(e,"joinSaleActivty",function(){var t=this;if(!t.isloadingactive){t.isloadingactive=!0;var e=t.data.userid||0;r.stat.stathotmall({userId:e,groupId:t.groupid,port:r.globalData.port,operation:"bottomhotClick",registerTime:r.globalData.utime,inviteId:t.nc}),i.wxreq({pathname:"YinianProject/flashSale/joinSaleActivty",data:{userId:t.data.ablumInfo.gcreator,groupId:t.groupid,groupName:t.data.ablumInfo.gname}}).then(function(e){t.isloadingactive=!1,wx.navigateTo({url:"/pages/others/hot/index/index?lastPage=albumDetail&clickfrom=group&clickRecord=addmenber&groupid="+t.groupid+"&gOrigin="+t.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+t.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+t.data.ablumInfo.gcreator+"&groupNewType="+t.data.ablumInfo.groupNewType})},function(t){})}}),t(e,"tocreateAlbum",function(){console.log("tocreateAlbum");var t=this,e=t.data.userid||0;r.stat.stathotmall({userId:e,groupId:t.data.groupId,port:r.globalData.port,operation:"wantplayupload",registerTime:r.globalData.utime,inviteId:t.nc}),wx.navigateTo({url:"../makegroup/makegroup",success:function(t){}})}),t(e,"getAlbumCreater",function(){var t=this;i.wxreq({pathname:"YinianProject/flashSale/flashSaleTextContentSwitch",data:{}}).then(function(e){console.log(e),0==e.code&&(r.globalData.sharePicTextContent=e.data[0].sharePicTextContent,r.globalData.sharePicUrlContent=e.data[0].sharePicUrlContent,r.globalData.alertButtonOne=e.data[0].alertButtonOne,r.globalData.alertHidePic=e.data[0].alertHidePic,r.globalData.alertButtonTwo01=e.data[0].alertButtonTwo01,r.globalData.alertButtonTwo02=e.data[0].alertButtonTwo02,r.globalData.shareButtonOne=e.data[0].shareButtonOne,r.globalData.shareButtonTwo_1=e.data[0].shareButtonTwo_1,r.globalData.shareButtonTwo_2=e.data[0].shareButtonTwo_2,r.globalData.hotRecordDetail=e.data[0].hotRecordDetail,t.setData({alertButtonOne:e.data[0].alertButtonOne,alertHidePic:e.data[0].alertHidePic,alertButtonTwo01:e.data[0].alertButtonTwo01,alertButtonTwo02:e.data[0].alertButtonTwo02}))}).catch(function(t){})}),t(e,"flashSalegetUserInfo",function(t){i.wxreq({pathname:"YinianProject/flashSale/getUserInfo",data:{userId:t}}).then(function(t){0==t.code&&(r.globalData.utime=t.data[0].utime)},function(t){})}),t(e,"closeInviteBox",function(){this.setData({showInviteModal:!1})}),t(e,"isShowLoverModal",function(t,e){var a=this;if(t&&"null"!=t&&"undefined"!=t&&e&&"null"!=e&&"undefined"!=e){var o="timeLine_"+t+"_"+e;wx.getStorageSync(o)||(wx.setStorageSync(o,1),a.setData({showInviteModal:!0}))}}),t(e,"openPublishMenu",function(){m.permission()&&(m.setData({publishMenu:!0,menuNames:"photo,video,event,import"}),m.isUploadpushId())}),t(e,"publishMenuClosed",function(t){var e=this;e.setData({publishMenu:!1});var a=t.detail;console.log(a),"photo"===a&&wx.showActionSheet({itemList:["系统相册选择","拍照"],itemColor:"#333",success:function(t){var a=t.tapIndex,o={currentTarget:{dataset:{pic:"phone"}}};console.log("eee",o.currentTarget.dataset.pic),0==a&&(o.currentTarget.dataset.pic="phone"),1==a&&(o.currentTarget.dataset.pic="pai"),e.uploadpic(o)},fail:function(t){console.log(t.errMsg)}}),"video"===a&&wx.showActionSheet({itemList:["系统相册选择","拍摄"],itemColor:"#333",success:function(t){var a=t.tapIndex,o={currentTarget:{dataset:{video:"phone"}}};console.log("eee",o.currentTarget.dataset.video),0==a&&(o.currentTarget.dataset.video="phone"),1==a&&(o.currentTarget.dataset.video="pai"),e.uploadvideo(o)},fail:function(t){console.log(t.errMsg)}}),"event"===a&&wx.showActionSheet({itemList:["系统相册选择","拍照"],itemColor:"#333",success:function(t){var a=t.tapIndex,o={currentTarget:{dataset:{pic:"phone",stype:"event"}}};console.log("eee",o.currentTarget.dataset.pic),0==a&&(o.currentTarget.dataset.pic="phone"),1==a&&(o.currentTarget.dataset.pic="pai"),e.uploadpic(o)},fail:function(t){console.log(t.errMsg)}}),"import"===a&&(e.stopreset(),wx.navigateTo({url:"/pages/downloadApp/downloadApp"}))}),t(e,"addImagess",function(t){if(console.log(t),!r.isUp){var e=t.currentTarget.dataset.emain,a=t.currentTarget.dataset.eid;m.setData({addModalOn:!m.data.addModalOn,addModalAnimation:!m.data.addModalAnimation,addPhotoModalOn:!m.data.addPhotoModalOn,addPhotoModalAnimation:!m.data.addPhotoModalAnimation,modalTitle:"照片",eventModel:!0,eventOmain:e,eventEid:a})}}),t(e,"goPic",function(){console.log("131:"+m.groupid),wx.navigateTo({url:"/pages/photowall/photowall?clickFrom=familyscoll&groupid="+m.groupid+"&from=grouplist"})}),t(e,"playPhoto",function(t){console.log(t),this.setData({playPhoto:!0}),f=t.currentTarget.dataset.eid,w=t.currentTarget.dataset.grouptype,r.stat.request({operation:"albumMakeMore",userId:wx.getStorageSync("userid"),groupId:m.groupid,groupNewType:w})}),t(e,"makeStory",function(){r.stat.request({operation:"albumMakeStory",userId:wx.getStorageSync("userid"),groupId:m.groupid,groupNewType:w}),wx.showLoading({title:"正在上传",mask:!0}),wx.request({url:l.host+"/YinianProject/story/createStory",data:{userId:wx.getStorageSync("userid")},success:function(t){console.log(t),wx.hideLoading(),0==t.data.code?(wx.setStorageSync("storyId",t.data.data[0].storyId),wx.request({url:l.host+"/YinianProject/story/eventGenerateStory",data:{userId:wx.getStorageSync("userid"),eId:f,storyId:wx.getStorageSync("storyId"),groupId:m.groupid},method:"GET",success:function(t){if(wx.hideLoading(),console.log(t),0===t.data.code){m.setData({playPhoto:!1});var e=d.getCurrentPageUrlWithArgs();console.log(e),wx.setStorageSync("skipUrl",e),wx.navigateTo({url:"/package/stories/pages/make/makeStory?eId="+wx.getStorageSync("storyId")+"&groupid="+m.groupid+"&index=1&groupType="+w})}else wx.showToast({icon:"none",title:"生成故事集失败"})},fail:function(t){wx.hideLoading(),wx.showToast({icon:"none",title:"网络请求错误"})},complete:function(t){}})):wx.showToast({title:"故事集ID请求错误",icon:"none"})},fail:function(t){wx.hideLoading(),wx.showToast({icon:"none",title:"网络请求错误"})},complete:function(t){}})}),t(e,"addImgUploadevent",function(){var t=wx.getStorageSync("uploadchoosedpic"),e=this,a=[],o=t;e.setData({showProgress:!0,totalnum:t.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"addEvent",eventModel:!1,isUpPicState:!1}),r.isUp=!0,u.length=0;wx.request({url:l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(t){0===t.data.code?e.uploadFileEvent(t.data.data[0].token,o,a,0,"event"):(u.length=0,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1,r.fromUp="addEvent")},fail:function(t){u.length=0,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1,r.fromUp="addEvent"}})}),t(e,"uploadFileEvent",function(t,e,a,o,s){var n=this;if(0==e.length)console.log(u),i.wxreq({pathname:"YinianProject/family/addPictureInIncident",data:{userid:wx.getStorageSync("userid"),groupid:n.groupid,eid:n.data.eventEid,picAddress:u.join(","),main:n.data.eventOmain}}).then(function(t){console.log(t),0==t.code?(u.length=0,r.upState=0,r.upObj={},n.setData({progress:0,upSteps:2}),n.timer2=setTimeout(function(){n.setData({showProgress:!1,isUpPicState:!0})},2e3),n.getCsTimeData(),r.isUp=!1,r.fromUp=""):(u.length=0,_this.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1,r.fromUp="addEvent")});else{var l=e.splice(0,1);n.uppic(t,l,e,a,o,s)}}),t(e,"toEventAxis",function(){var t=this.groupid;wx.navigateTo({url:"/pages/familyAlbum/eventAxis/eventAxis?groupid="+t})}),t(e,"toSport",function(){var t=this.groupid,e=this.data.ablumInfo.gname,a=this.data.ablumInfo.groupNewType;wx.navigateTo({url:"/package/sport/sport?groupId="+t+"&groupName="+e+"&groupNewType="+a+"&fromPage=album&port=familySport"})}),e)); 
 			}); 	require("pages/familyAlbum/index/index.js");
 		__wxRoute = 'pages/familyAlbum/eventAxis/eventAxis';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/familyAlbum/eventAxis/eventAxis.js';	define("pages/familyAlbum/eventAxis/eventAxis.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var e,a=function(){function t(t,e){var a=[],o=!0,i=!1,s=void 0;try{for(var n,r=t[Symbol.iterator]();!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(t){i=!0,s=t}finally{try{!o&&r.return&&r.return()}finally{if(i)throw s}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=require("../../../utils/util.js"),s=require("../../../utils/config.js"),n=require("../../../utils/reg.js"),r=getApp(),d=require("../../../utils/api.js"),l=require("../../../utils/common.js"),u=[],c=require("../../../utils/tripledes.js"),p=wx.createInnerAudioContext(),g=require("../../../utils/albumsjump.js").albumsjump,h=require("../../../utils/hotActive.js").hotActive,m=void 0,f=void 0,w=void 0,v=0,S=0,I=0,b=0;Page((e={data:{canIUse:!1,returnhomepic:"http://oibl5dyji.bkt.clouddn.com/20170605160928.png",ablumInfo:{},textNum:0,fromlast:0,showModelHidden:!1,pvShowModel:!1,showAudioModelBox:!1,eventlist:[],authorityList:[],showTop:!0,showFunModel:!1,loadImgState:!0,waitingState:!0,secondNum:0,secondEnd:!0,showFooterIntro1:!0,showFooterIntro2:!0,alading:!1,aladingTwo:!0,progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic",isUpPicState:!0,globalNewUser:!1,inBlackList:1,showLoadingImg:!1,loadingImgOrText:!0,showmidifinenameModel:!1,showDisposeModel:!1,classArr:["pic1","pic2","pic3"],activitySwitchhot:1,inviteSwitchhot:1,bottomUrl:"",isgcreator:!1,inviteBelowHint:"",alertButtonOne:"",alertHidePic:"",alertButtonTwo01:"",alertButtonTwo02:"",usernumber:3006789,showcomeuserModel:!1,showfirstuploadModel:!1,firstUpPic:"http://oibl5dyji.bkt.clouddn.com/0509_firstUpPic.png",inventPerson:"",textArr:["精彩内容正在赶来...","稍等一下啦...","小忆正在加载中..."],showActivityRules:!0,maxnumber:0,showintroduce:!1,showAuthPic:!1,authpic:{belowImgUrl:""},showComInput:!1,placehold:"对ta说点啥...",inputfocus:!1,loversBannerInfo:{bannerShowPic:"http://oibl5dyji.bkt.clouddn.com/0412_loveBanner.png",bannerSwitch:0},showLoveFirstBox:!1,loversInvitePic:"http://7xlmtr.com1.z0.glb.clouddn.com/alertPictureOne_20180412.png",loversIntroPic:"http://7xlmtr.com1.z0.glb.clouddn.com/alertPictureTwo_20180412.png",addModalOn:!1,addModalAnimation:!1,addEventModalOn:!1,addEventModalAnimation:!1,addPhotoModalOn:!1,addPhotoModalAnimation:!1,modalTitle:"照片",icon:{arrow:"http://oibl5dyji.bkt.clouddn.com/myself_more@2x.png",photos:"http://oibl5dyji.bkt.clouddn.com/photos@2x.png",members:"http://oibl5dyji.bkt.clouddn.com/members@2x.png",photo_wall:"http://oibl5dyji.bkt.clouddn.com/photos_wall@2x.png",user:"http://oibl5dyji.bkt.clouddn.com/user@2x.png",camera:"http://oibl5dyji.bkt.clouddn.com/camera@2x.png",camera_l:"http://oibl5dyji.bkt.clouddn.com/camera_l@2x.png",photo_l:"http://oibl5dyji.bkt.clouddn.com/photo_l@2x.png",video_l:"http://oibl5dyji.bkt.clouddn.com/video_l@2x.png",write_l:"http://oibl5dyji.bkt.clouddn.com/write_l@2x.png",mike_l:"http://oibl5dyji.bkt.clouddn.com/mike_l@2x.png",close_l:"http://oibl5dyji.bkt.clouddn.com/close_l@2x.png",pose_add:"http://oibl5dyji.bkt.clouddn.com/PC_add@2x.png",pose_add_l:"http://oibl5dyji.bkt.clouddn.com/PC_add_l@2x.png",camera_dark:"http://oibl5dyji.bkt.clouddn.com/content_carema@2x.png"},loversInfo:{alertPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/alert_for_lover_201804201820.png",dakahuodongPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/dakahuodong_pic_201804201820.png",inviteText:"立即邀请",jilutianmiPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/ji_lu_tian_mi_pic_201804201821.png",kongXiangCePicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/kong_xiang_tupian_pic_201804201822.png",uploadText:"上传甜蜜时刻",yaoQingPicUrl:"http://7xlmtr.com1.z0.glb.clouddn.com/yao_qing_ling_yi_ban_pic.png"},showMayDayActivity:!1,isActivitySwitch:{},showInviteModal:!1,timeAxis:!0,eventAxis:!1,menuNames:"photo,video,event,import",publishMenu:!1,eventModel:!1,eventOmain:"",eventEid:"",playPhoto:!1},prevent:function(){this.setData({fromlast:1})},stop:function(){},donothing:function(){},stopreset:function(){this.loadImgStateNo=!0,this.setData({fromlast:1})},stopLoadImg:function(){this.loadImgStateNo=!0},onLoad:function(t){if(m=this,r.stat.statpv({route:this.route,options:t}),this.getAlbumCreater(),!t.groupid){var e=decodeURIComponent(t.scene);if(t={},e.length>0)for(var a=e.split("&"),o=0;o<a.length;o++)t[a[o].split("=")[0]]=a[o].split("=")[1]}t.version&&(this.version=t.version),t.port&&(this.port=t.port,r.globalData.port=t.port,this.setData({port:t.port})),t.fromUserID&&(this.fromUserID=t.fromUserID),t.fromSpaceID&&(this.fromSpaceID=t.fromSpaceID),t.fromEventID&&(this.fromEventID=t.fromEventID),this.isconfirm=t.isconfirm,this.mayefrom=t.mayefrom||"",this.loadImgStateNo=!1,this.getActivitySwitch();var s=this;s.setData({fromlast:0,loadImgState:!1}),this.groupid=t.groupid,this.from=t.from,this.mode=t.mode,this.type=t.type,this.comeuserid=t.comeUserid;try{wx.setStorageSync("groupid",parseInt(s.groupid))}catch(t){console.log(t)}this.zj=t.zj||"",this.lastPage=t.lastPage,this.lastPage=this.lastPage||"null",this.isSubmit=1;var n="showLoad"+s.groupid,d="showCreat"+s.groupid;wx.getStorageSync(n)?s.setData({showFooterIntro1:!1}):s.setData({showFooterIntro1:!0}),wx.getStorageSync(d)?s.setData({showFooterIntro2:!1}):s.setData({showFooterIntro2:!0}),this.loadImgStateNo=!1,wx.getStorageSync("userInfo")||(s.setData({showAuthPic:!0}),i.getAuthPic("timeLine",s.groupid,function(t){s.setData({authpic:t})})),s.getBannerInfo(),wx.getStorage({key:"peopleCount",success:function(t){0!=t.data&&t.data?s.setData({maxnumber:t.data}):(console.log(t),s.setData({maxnumber:t.data}))}}),"newlovers"===t.makeFrom&&(this.setData({showLoveFirstBox:!0}),i.getAuthPic("lovers_invite",0,function(t){s.setData({loversInvitePic:t.belowImgUrl})})),m.getEventAxis()},onShow:function(){var t=this.version?this.version:"",e=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,o=this.fromSpaceID?this.fromSpaceID:0,s=this.fromEventID?this.fromEventID:0;this.nc=a;var n=this;if(n.flashSaleShowSwitch(),n.setData({groupid:n.groupid}),wx.setStorageSync("groupid",parseInt(n.groupid)),r.getshowState(function(t){n.setData({showpuzze:t})}),n.retState=!1,2===r.upState){var l=r.upObj;if(!l.picarr||0==l.picarr.length)return void console.log("获取上传的参数出错");r.isUp||("pic"==r.fromUp?n.startUpload():"video"==r.fromUp?n.startUpVideo():"audio"==r.fromUp?n.startUpAudio():"event"==r.fromUp&&n.eventUpload(),n.setData({isUpPicState:!1})),r.upState=0}"text"==r.fromUp&&(n.isfirstUpload(r.text),r.fromUp="");var u=i.randomNum(0,2);n.setData({promptText:u}),r.getUserInfo(function(t){if(1==n.isSubmit){n.enterCurrentTimestamp=(new Date).getTime();var a="null";n.data.ablumInfo&&1==n.data.ablumInfo.gOrigin?a="true":n.data.ablumInfo&&1!=n.data.ablumInfo.gOrigin&&(a="false");var o={basicInfo:{userid:t.userid,source:e,"isActivityAlbum ":a,"lastPage ":n.lastPage,timestamp:n.enterCurrentTimestamp,identification:t.userid+"_"+r.enterTimestamp},type:"enter",data:{page:{name:"albumDetail",page_identification:t.userid+"_"+n.enterCurrentTimestamp}}};0==r.sendValue&&i.sendData(t.userid,o),n.button=[]}else n.isSubmit=1;r.globalData.utime||n.flashSalegetUserInfo(t.userid),r.stat.stathotmall({userId:t.userid,groupId:n.groupid,port:r.globalData.port,operation:"interalbum",registerTime:r.globalData.utime,inviteId:n.nc}),1!=n.data.fromlast?(n.loadImgStateNo||setTimeout(function(){n.loadImgStateNo=!1},100),"yes"==t.isnew&&(n.setData({showintroduce:!0}),r.isNewUser=!0,n.comeuserid&&wx.request({url:d.getUrl("YinianProject/points/SuccessInviteFriend"),data:{userid:n.comeuserid},method:"GET",success:function(t){console.log(t),t.data.code},fail:function(t){}})),r.isNewUser&&n.setData({globalNewUser:!0}),null!=wx.getStorageSync("userInfo").uLockPass&&r.globalData.pwdState&&wx.navigateTo({url:"/pages/others/password/password?setPwd=shuru"}),n.setData({winHeight:r.globalData.systemInfo.windowHeight,isIphonex:r.globalData.systemInfo.model.toLowerCase().indexOf("iphone x")>=0,r2p:r.globalData.systemInfo.windowWidth/750,from:n.from||"",groupid:n.groupid,userid:t.userid,showAuthPic:!1}),n.groupid?(n.nickname=t.nickName,wx.request({url:d.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(e){if(0==e.data.code&&e.data.data[0].openloading){var a=parseInt(5*Math.random()+5);return n.setData({waitingState:!1,secondNum:a,secondEnd:!0}),void(n.timer3=setInterval(function(){var t=n.data.secondNum;t<=0?(clearInterval(n.timer3),n.timer3=null,n.setData({secondEnd:!1})):(t--,n.setData({secondNum:t}))},1e3))}n.getAlbumInformation(t)}})):wx.showModal({title:"提示",content:"页面找不到了，返回首页看看",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})):n.timer=setTimeout(function(){n.setData({fromlast:0})},100)},t,e,a,o,s,"viewscoll",function(){n.setData({showAuthPic:!1})})},onReady:function(){var t=this;p.onPlay(function(t){}),p.onPause(function(t){}),p.onError(function(e){wx.showToast({title:"语音播放错误",duration:1e3}),t.closeAllAudio()}),p.onEnded(function(e){t.closeAllAudio()});var e=0;r.globalData.userInfo&&(e=r.globalData.userInfo.userid),wx.reportAnalytics("addmember",{userid:e,groupid:t.groupid,clicktime:i.formatTimeWithSecond(new Date)})},onHide:function(){1==this.isSubmit&&(console.log("viewscoll-hide"),this.sendLeaveData())},onUnload:function(){var t=this;console.log("viewscoll-onUnload"),this.sendLeaveData(),this.retState=!0,3==t.data.upSteps&&(r.upState=0,r.upObj={},t.setData({progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0}))},sendLeaveData:function(){var t=this,e=this.port?this.port:"",a=wx.getStorageSync("userid"),o=(new Date).getTime()-t.enterCurrentTimestamp,s="null";t.data.ablumInfo&&1==t.data.ablumInfo.gOrigin?s="true":t.data.ablumInfo&&1!=t.data.ablumInfo.gOrigin&&(s="false");var n={basicInfo:{userid:a,source:e," isActivityAlbum ":s,"lastPage ":t.lastPage,timestamp:(new Date).getTime(),identification:a+"_"+r.enterTimestamp},type:"leave",data:{page:{name:"albumDetail",page_identification:a+"_"+t.enterCurrentTimestamp},botton:t.button,time:o}};0==r.sendValue&&i.sendData(a,n)},uploadAgain:function(){"pic"==r.fromUp?this.startUpload():"video"==r.fromUp?this.startUpVideo():"audio"==r.fromUp?this.startUpAudio():"event"==r.fromUp?this.eventUpload():"addEvent"==r.fromUp&&this.addImgUploadevent(),this.setData({isUpPicState:!1})},startUpVideo:function(){console.log(r.upObj);var t=this,e=r.upObj;t.setData({showProgress:!0,totalnum:1,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"video"}),r.isUp=!0,t.uploadvideosync(e)},uploadvideosync:function(t){var e=this;wx.request({url:d.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(a){if(console.log(a),0!=a.data.code)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=a.data.data[0].token,i=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:i,name:"file",formData:{key:i.split("//")[1],token:o},success:function(a){if(console.log(a),200!=a.statusCode)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});e.setData({uploadnum:1,progress:100});var o=JSON.parse(a.data).key;wx.request({url:d.getUrl("YinianProject/event/UploadShortVideo"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.mainIdStr,content:t.content,address:o,storage:6e3,place:t.place,attentionMember:t.attentionMember||"",publishedTime:t.publishedTime||""},success:function(a){if(console.log(a),0==a.data.code){e.getEventAxis(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:2}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3);var o=a.data.data;e.isfirstUpload(o),h(wx.getStorageSync("userid"),t.mainIdStr,"upload")}else 1039==a.data.code?(e.getEventAxis(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:4}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3)):(r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},startUpAudio:function(){console.log(r.upObj);var t=this,e=r.upObj;t.setData({showProgress:!0,totalnum:1,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"audio"}),r.isUp=!0,t.uploadAudio(e)},uploadAudio:function(t){var e=this;wx.request({url:d.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(a){if(console.log(a),0!=a.data.code)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var o=a.data.data[0].token,i=t.picarr;wx.uploadFile({url:"https://upload.qiniup.com",filePath:i,name:"file",formData:{key:i.split("//")[1],token:o},success:function(a){if(console.log(a),200!=a.statusCode)return r.isUp=!1,void e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});e.setData({uploadnum:1,progress:100});var o=JSON.parse(a.data);console.log("path",o);var i=o.key;console.log("userid",wx.getStorageSync("userid")),console.log("address",i),console.log("groupId",t.groupId),console.log("location",t.place),console.log("duration",t.duration),wx.request({url:d.getUrl("YinianProject/event/UploadAudio"),method:"GET",data:{userid:wx.getStorageSync("userid"),groupid:t.groupId,eaudio:i,eaudioDuration:t.duration,storage:3e3,place:t.place},success:function(a){if(console.log("lastres",a),0==a.data.code){e.getEventAxis(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:2}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3);var o=a.data.data;e.isfirstUpload(o),h(wx.getStorageSync("userid"),t.groupId,"upload")}else 1039==a.data.code?(e.getEventAxis(),r.isUp=!1,r.upState=0,r.upObj={},e.setData({progress:0,upSteps:4}),e.timer5=setTimeout(function(){e.setData({showProgress:!1,isUpPicState:!0})},3e3)):(r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}))},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(t){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},fail:function(){r.isUp=!1,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},closeProgress:function(){var t=this;clearTimeout(t.timer2),clearTimeout(t.timer4),clearTimeout(t.timer5),r.upState=0,r.upObj={},this.setData({progress:0,showProgress:!1,uploadnum:0,totalnum:0,upSteps:1,sucImgNum:0,fitImgNum:0,isUpPicState:!0})},startUpload:function(){var t=this,e=r.upObj,a=[].concat(e.picarr);t.setData({showProgress:!0,totalnum:e.picarr.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"pic"}),r.isUp=!0,u.length=0;wx.request({url:d.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(o){0===o.data.code?t.uploadpicasync(o.data.data[0].token,a,e,0):(u.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1)},fail:function(e){u.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1}})},uploadpicasync:function(t,e,a,o){var s=this;if(0==e.length)wx.request({url:d.getUrl("YinianProject/event/UploadEvent"),data:{userid:wx.getStorageSync("userid"),groupid:a.mainIdStr,content:a.content,textTitle:a.textTitle,picAddress:u.join(","),storage:300*u.length,memorytime:i.formatTime(new Date),source:"小程序",place:a.place,formID:a.formID,isPush:"true",main:o,attentionMember:a.attentionMember||"",publishedTime:a.publishedTime||""},success:function(t){if(console.log(t),0!=t.data.code)return u.length=0,r.isUp=!1,void s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});if(h(wx.getStorageSync("userid"),a.mainIdStr,"upload"),s.getEventAxis(),r.isUp=!1,0==s.data.isActivitySwitch.isDelete&&1!=s.data.ablumInfo.gOrigin&&11!=s.data.ablumInfo.gtype&&s.getHeaderData(),null==t.data.data)return u.length=0,r.upState=0,r.upObj={},void s.setData({progress:0,upSteps:2,showProgress:!1,isUpPicState:!0});if(t.data.data[0].picList.length>0){var e=t.data.data;s.isfirstUpload(e)}s.getEventAxis(),t.data.data[0].picList.length<u.length?(s.setData({sucImgNum:t.data.data[0].picList.length,fitImgNum:u.length-t.data.data[0].picList.length,upSteps:4,progress:0}),u.length=0,r.upState=0,r.upObj={},s.timer4=setTimeout(function(){s.setData({showProgress:!1,isUpPicState:!0})},8e3)):(u.length=0,r.upState=0,r.upObj={},s.setData({progress:0,upSteps:2}),s.timer2=setTimeout(function(){s.setData({showProgress:!1,isUpPicState:!0})},3e3))},fail:function(){u.length=0,r.isUp=!1,s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}});else{var n=e.splice(0,1);s.uppic(t,n,e,a,o)}},uploadpicasyncEvetn:function(t,e,a,o){var s=this;if(0==e.length)wx.request({url:d.getUrl("YinianProject/family/addIncident"),data:{userid:wx.getStorageSync("userid"),groupid:a.mainIdStr,content:a.content,textTitle:a.textTitle,picAddress:u.join(","),storage:300*u.length,memorytime:i.formatTime(new Date),source:"小程序",place:a.place,formID:a.formID,isPush:"true",main:o,attentionMember:a.attentionMember||"",publishedTime:a.publishedTime||""},success:function(t){if(console.log(t),0!=t.data.code)return u.length=0,r.isUp=!1,void s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});if(h(wx.getStorageSync("userid"),a.mainIdStr,"upload"),s.getEventAxis(),r.isUp=!1,0==s.data.isActivitySwitch.isDelete&&1!=s.data.ablumInfo.gOrigin&&11!=s.data.ablumInfo.gtype&&s.getHeaderData(),null==t.data.data)return u.length=0,r.upState=0,r.upObj={},void s.setData({progress:0,upSteps:2,showProgress:!1,isUpPicState:!0});if(t.data.data[0].picList.length>0){var e=t.data.data;s.isfirstUpload(e)}t.data.data[0].picList.length<u.length?(s.setData({sucImgNum:t.data.data[0].picList.length,fitImgNum:u.length-t.data.data[0].picList.length,upSteps:4,progress:0}),u.length=0,r.upState=0,r.upObj={},s.timer4=setTimeout(function(){s.setData({showProgress:!1,isUpPicState:!0})},8e3)):(u.length=0,r.upState=0,r.upObj={},s.setData({progress:0,upSteps:2}),s.timer2=setTimeout(function(){s.setData({showProgress:!1,isUpPicState:!0})},3e3))},fail:function(){u.length=0,r.isUp=!1,s.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}});else{var n=e.splice(0,1);s.uppic(t,n,e,a,o)}},eventUpload:function(){var t=this,e=r.upObj,a=[].concat(e.picarr);t.setData({showProgress:!0,totalnum:e.picarr.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"event"}),r.isUp=!0,u.length=0;wx.request({url:d.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(o){0===o.data.code?t.uploadpicasyncEvetn(o.data.data[0].token,a,e,"6"):(u.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1)},fail:function(e){u.length=0,t.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1}})},uppic:function(t,e,a,o,i,s){var n=this,d=e[0],l=d.lastIndexOf("."),c=(new Date).getTime()+""+parseInt(1e8*Math.random()+1e8)+d.substring(l);wx.uploadFile({url:"https://upload.qiniup.com",filePath:d,name:"file",formData:{key:c,token:t},success:function(e){if(200!=e.statusCode)return u.length=0,r.isUp=!1,void n.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0});var d=JSON.parse(e.data);u.push(d.key),n.setData({uploadnum:u.length,progress:parseInt(u.length/n.data.totalnum*100)}),"event"==s?n.uploadFileEvent(t,a,o,i,s):n.uploadpicasync(t,a,o,i)},fail:function(){u.length=0,r.isUp=!1,n.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0})}})},getAlbumInformation:function(t){var e=this,a=c.encryptByDESModeCBC(t.userid),o=c.encryptByDESModeCBC(e.groupid),s=this.port?this.port:"",n=this.fromUserID?this.fromUserID:0,d=e.zj,l=e.comeuserid;i.wxreq({pathname:"YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",data:{userid:a,groupid:o,port:s,fromUserID:n,zj:d,inviteuserid:l}}).then(function(a){if(2!=a.code)if(1012==a.code)wx.showModal({title:"提示",content:"相册已被解散",showCancel:!1,success:function(t){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else if(1037==a.code)wx.showModal({title:"提示",content:"相册已被封",showCancel:!1,success:function(t){wx.reLaunch?wx.reLaunch({url:"../index/index"}):wx.navigateBack({delta:10})}});else{if(0!=a.code)return void wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}});a.data[0].inviteusername&&(console.log("yaoqingren",a.data[0].inviteusername,t.isnew),l!=t.userid&&"0"!=a.data[0].picNum&&"yes"==t.isnew&&e.setData({showcomeuserModel:!0,inventPerson:a.data[0].inviteusername}));var o=a.data[0].isPush?a.data[0].isPush:0;wx.setStorageSync("msgState",o);var s=a.data[0];s.joinStatus||wx.showToast({title:"加入相册成功"}),wx.setStorage({key:"createrid",data:s.gcreator}),s.gcreator==t.userid&&e.setData({isgcreator:!0}),wx.setStorage({key:"gAuthority",data:s.gAuthority});var n=s.authorityList?s.authorityList:[];wx.setStorage({key:"authorityList",data:n}),wx.setStorage({key:"gnum",data:s.gnum}),wx.setStorage({key:"ganme",data:s.gname}),e.gname=s.gname,r.globalData.gtype=s.gtype,r.globalData.gcreator=s.gcreator;var d=void 0;d=(10==s.gtype||11==s.gtype)&&t.userid==s.gcreator,e.setData({ablumInfo:{gcreator:s.gcreator,canDelete:d,gtype:s.gtype,gnum:s.gnum,picnum:s.picNum,gname:s.gname,list:s.memberList,gpic:s.gpic,gOrigin:s.gOrigin,eventQRCodeCanPublish:s.eventQRCodeCanPublish,dialogShow:s.dialogShow,inBlackList:s.inBlackList,advertisementsShow:s.advertisementsShow,useablePoints:s.points,upic:s.upic,unickname:r.globalData.userInfo.nickName,arTitle:s.arTitle,arValue:s.arValue,belowImgUrl:s.belowImgUrl,canNotExit:s.canNotExit||0,groupNewType:s.groupNewType}}),1==s.advertisementsShow&&e.getBusiness(),4==s.groupNewType&&(e.getLoversAuth(),e.getLoversInfo(),i.getAuthPic("lovers_intro",0,function(t){e.setData({loversIntroPic:t.belowImgUrl})})),e.getEventAxis()}else wx.showModal({title:"提示",content:"网络错误，请重试",showCancel:!1,success:function(){wx.switchTab({url:"/pages/index/index"})}})})},getActivitySwitch:function(){var t=this;i.wxreq({pathname:"YinianProject/activitySpacial/selectActivityInfoById",data:{activitySpacialId:1}}).then(function(e){0==e.code&&(console.log(e),t.setData({isActivitySwitch:e.data[0]}))})},refresh:function(){var t=this.version?this.version:"",e=this.port?this.port:"",a=this.fromUserID?this.fromUserID:0,o=this.fromSpaceID?this.fromSpaceID:0,i=this.fromEventID?this.fromEventID:0,s=this;r.getUserInfo(function(t){s.nickname=t.nickName,wx.request({url:d.getUrl("YinianProject/test/GetControllerValue"),data:{},success:function(e){var a;if(0==e.data.code&&(a=e.data.data[0].setlikecnt,s.setlikecnt=a,e.data.data[0].canlogin)){var o=parseInt(5*Math.random()+5);return s.setData({waitingState:!1,secondNum:o,secondEnd:!0}),void(s.timer2=setInterval(function(){var t=s.data.secondNum;t<=0?(clearInterval(s.timer2),s.timer2=null,s.setData({secondEnd:!1})):(t--,s.setData({secondNum:t}))},1e3))}s.setData({waitingState:!0}),s.getAlbumInformation(t)}})},t,e,a,o,i,"viewscoll")},onPageScroll:function(t){var e=750/r.globalData.systemInfo.windowWidth;t.scrollTop>372/e?this.data.showTop&&this.setData({showTop:!1}):this.data.showTop||this.setData({showTop:!0}),this.data.showComInput&&this.setData({showComInput:!1})},showLoveIntro:function(){this.setData({showLoveIntroBox:!0});var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("loversBanner",t,e,a)},closeLoversBox:function(){this.setData({showLoveIntroBox:!1})},closeLoversFirstUp:function(){this.setData({showLoveFirstBox:!1});var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("closeInviteOther",t,e,a)},getLoversAuth:function(){var t=this;i.wxreq({pathname:"YinianProject/bannerDisplay/getLoversBannerInfo",data:{groupId:t.groupid}}).then(function(e){console.log(e),0==e.code&&t.setData({loversBannerInfo:e.data[0]})})},loversInviteBtn:function(){var t=this.groupid,e=this.data.userid,a=this.data.ablumInfo.gcreator;i.countLoversOperation("inviteOther",t,e,a)},getLoversInfo:function(){var t=this,e=t.groupid;i.wxreq({pathname:"YinianProject/groupConfig/getGroupConfig",data:{groupId:e,configName:"loverGroupContent"}}).then(function(e){console.log(e),0==e.code&&t.setData({loversInfo:e.data[0]})})},showcode:function(){var t=this;this.loadImgStateNo=!0,t.setData({fromlast:1}),t.tepEid?(wx.showToast({title:"正在获取二维码",icon:"loading",duration:6e3,mask:!0}),wx.request({url:d.getUrl("YinianProject/yinian/CreateSmallAppPlan2QRCode"),data:{id:t.tepEid,type:"eventdetail2"},success:function(t){var e=t.data.data[0].QRCodeURL;wx.hideToast(),wx.previewImage({urls:[e]})}})):wx.showModal({title:"提示",content:"获取动态数据不成功,请稍后再试",showCancel:!1})},toAnotherApp:function(){wx.navigateToMiniProgram({appId:"wx228859fda649194f",path:"pages/index/index",success:function(t){}})},goHome:function(){var t=this;"object"==o(this.button)&&this.button.push({name:"backToIndex"}),1==t.data.ablumInfo.gOrigin?t.data.showintroduce?t.fasttoknow():(t.loadImgStateNo=!0,wx.navigateTo({url:"/pages/makegroup/makegroup?lastPage=albumDetail"})):wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.switchTab({url:"/pages/index/index"}),r.isNewUser=!1,t.setData({globalNewUser:!1})},toLookPhoto:function(t){this.loadImgStateNo=!0,this.setData({fromlast:1});var e=t.currentTarget.dataset.userid,a=t.currentTarget.dataset.groupid,o=this.data.ablumInfo.groupNewType||0;wx.navigateTo({url:"/pages/personalPage/personalPage?groupId="+a+"&albumType="+o+"&pageUserId="+e+"&creator="+this.data.ablumInfo.gcreator})},toSettingPage:function(t){var e=t.currentTarget.dataset.albumtype,a=this.data.ablumInfo.gOrigin,o=this.data.ablumInfo.canNotExit,s=t.detail.formId;i.sendFormId(this.data.userid,s),console.log(e),this.loadImgStateNo=!0,wx.navigateTo({url:"/pages/setting/setting?clickFrom=grouptypescoll&gOrigin="+a+"&canNotExit="+o+"&albumType="+e})},addmember:function(t){var e=this,a=e.data.userid||0;if(!e.data.inviteSwitchhot){var s="";s="invite"==t.currentTarget.dataset.invite?"notiflyInvite":"albuminvite",r.stat.stathotmall({userId:a,groupId:e.groupid,port:r.globalData.port,operation:s,registerTime:r.globalData.utime,inviteId:e.nc})}if(e.groupid){if(this.loadImgStateNo=!0,this.setData({fromlast:1}),"object"==o(this.button)&&this.button.push({name:"invite"}),4==this.data.ablumInfo.groupNewType){var n=this.groupid,d=this.data.userid,l=this.data.ablumInfo.gcreator;i.countLoversOperation("addmember",n,d,l)}var u=e.groupid||0;i.countOperation("addmenber",u,a,"");var c="";c=e.data.inviteSwitchhot?"/pages/others/newsharepage/newsharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:c+"?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=addmenber&groupid="+e.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+e.data.ablumInfo.groupNewType}),this.isInvitepushId()}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},emptyListShare:function(){var t=this;if(t.groupid){var e=t.groupid||0,a=t.data.userid||0;i.countOperation("emptylist_share",e,a,""),t.loadImgStateNo=!0,t.setData({fromlast:1}),"object"==o(t.button)&&t.button.push({name:"invite"});var s="";console.log(t.data.inviteSwitchhot),s=t.data.inviteSwitchhot?"/pages/others/newsharepage/newsharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:s+"?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=addmenber&groupid="+t.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+t.data.ablumInfo.gcreator+"&gname="+t.data.ablumInfo.gname+"&groupNewType="+t.data.ablumInfo.groupNewType})}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},loversToShare:function(){var t=this;t.groupid?(this.loversInviteBtn(),this.loadImgStateNo=!0,this.setData({fromlast:1}),wx.navigateTo({url:"/pages/others/newsharepage/newsharepage?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerinfo_share&groupid="+t.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish})):wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},toShare:function(t){var e=this;if(e.groupid){if(e.loadImgStateNo=!0,e.setData({fromlast:1}),console.log(t.currentTarget.dataset.info),"info"===t.currentTarget.dataset.info){var a=e.groupid||0,o=e.data.userid||0;i.countOperation("bannerinfo_share",a,o,"")}var s=e.data.userid||0;e.data.activitySwitchhot||r.stat.stathotmall({userId:s,groupId:e.groupid,port:r.globalData.port,operation:"clicknotify",registerTime:r.globalData.utime,inviteId:e.nc});var n="";console.log(this.data.bannerInfo.bannerJump),n=this.data.bannerInfo.bannerJump?"/pages/others/newsharepage/newsharepage":"/pages/others/hot/invite/invite",wx.navigateTo({url:n+"?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerinfo_share&groupid="+e.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+e.data.ablumInfo.groupNewType})}else wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})},toEditPhotos:function(t){var e=this,a=t.currentTarget.dataset.index,o=t.currentTarget.dataset.photosource,i=this.data.eventlist[a].list[0].picList,s=4==this.data.eventlist[a].list[0].eMain?"video":"pic";if("photosync"==o){if(0==this.data.ablumInfo.inBlackList)return void wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1});var n={operation:"ediSync",userId:e.data.userid,groupId:e.groupid};r.stat.request(n),this.loadImgStateNo=!0}else{if("download"!=o)return;this.loadImgStateNo=!0,this.setData({fromlast:1})}wx.setStorageSync("editPhotoArr",i),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+o+"&isPicOrVideo="+s})},toEditPhotosDelete:function(t){var e=this,a=t.detail.formId;i.sendFormId(this.data.userid,a);var o=t.currentTarget.dataset.photosource,s=this.data.eventlist[this.a].list[0].picList,n=this.data.eventlist[this.a].list[0].eMain,d=4==n?"video":"pic",l=this.tepEid;if("photosync"==o){if(0==this.data.ablumInfo.inBlackList)return void wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1});this.loadImgStateNo=!0;var u={operation:"ediSync",userId:e.data.userid,groupId:e.groupid};r.stat.request(u)}else if("download"==o)this.loadImgStateNo=!0,this.setData({fromlast:1});else{if("delete"!=o)return;if(1==n||2==n)return void this.delete_event(l);this.loadImgStateNo=!0}wx.setStorageSync("editPhotoArr",s),wx.navigateTo({url:"/pages/others/editphotos/editphotos?photosource="+o+"&isPicOrVideo="+d,success:function(){e.setData({showFunModel:!1})}})},toChaneBgPic:function(){wx.getStorageSync("userid")?wx.getStorageSync("userid")==wx.getStorageSync("createrid")?(this.loadImgStateNo=!0,wx.navigateTo({url:"/pages/others/changbgpic/changbgpic"})):wx.showModal({title:"提示",content:"非相册管理员，无法修改背景图",showCancel:!1}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},editpic:function(t){var e=this;wx.getStorageSync("userid")?wx.getStorageSync("userid")==wx.getStorageSync("createrid")?(this.loadImgStateNo=!0,this.setData({fromlast:1}),wx.request({url:d.getUrl("YinianProject/yinian/GetUploadToken"),data:{},method:"GET",success:function(t){var a=t.data.data[0].token;e.isSubmit=2,wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传",icon:"loading",duration:2e3});var o=t.tempFilePaths[0].split("//")[1];wx.uploadFile({url:"https://upload.qiniup.com",filePath:t.tempFilePaths[0],name:"file",formData:{key:t.tempFilePaths[0].split("//")[1],token:a},success:function(t){var a=JSON.parse(t.data);new Date;wx.request({url:d.getUrl("YinianProject/yinian/ModifyGroupPic"),data:{url:a.key,userid:wx.getStorageSync("userid"),groupID:wx.getStorageSync("groupid")},success:function(t){0==t.data.code?(e.data.ablumInfo.gpic="http://7xlmtr.com1.z0.glb.clouddn.com/"+o,e.setData({ablumInfo:e.data.ablumInfo}),wx.showToast({title:"修改成功",icon:"success",duration:2e3,success:function(){setTimeout(function(){wx.hideToast()},1500)}})):wx.showToast({title:"设置失败"})}})}})}})}})):wx.showModal({title:"提示",content:"非相册管理员，无法修改背景图",showCancel:!1}):wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},comment:function(t){console.log(t);t.currentTarget.dataset.parentindex,t.currentTarget.dataset.childindex;var e=t.currentTarget.dataset.eid;this.commentEid=e,this.commentedUserid=10,this.commentedname="系统消息",this.setData({showComInput:!0,inputfocus:!0,placehold:"对ta说点啥...",contentCurrent:!1})},recomment:function(t){if(void 0!=t.target.dataset.commentindex){var e=this,o=t.target.dataset.commentindex,s=t.currentTarget.dataset.dataindex.split(","),n=a(s,2),d=n[0],l=n[1],u=this.data.eventlist[d].list[l].comments[o],c=u.commentUser.userid,p=u.commentUser.unickname,g=t.currentTarget.dataset.eid;c==r.globalData.userInfo.userid?wx.showModal({title:"提示",content:"删除此条评论？",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:u.cid}}).then(function(t){"success"==t.msg&&(e.data.eventlist.forEach(function(t,e){t.list[0].eid==g&&(t.list[0].comments.splice(o,1),t.list[0].commentCnt--)}),e.setData({eventlist:e.data.eventlist}))})}}):(this.commentEid=g,this.commentedUserid=c,this.commentedname=p,this.setData({showComInput:!0,inputfocus:!0,placehold:"@"+p+":",contentCurrent:!1}))}},sendcomment:function(t){var e=t.detail.formId,a=t.detail.value.content,o=this.data.userid,s=this.commentEid,d=this.commentedUserid,l=this.commentedname;if(0!=a.length)if(n.testStr(a))wx.showModal({title:"包含敏感词",content:"请勿输入敏感词汇",showCancel:!1});else{var u=this,c=i.formatTimeWithSecond(new Date),p={cid:-1,commentedUser:{userid:d,unickname:l},commentUser:{userid:o,unickname:r.globalData.userInfo.nickName,upic:r.globalData.userInfo.avatarUrl},ccontent:a,ctime:c},g=Array.from(u.data.eventlist);u.data.eventlist.forEach(function(t,e){t.list[0].eid==s&&(g[e].list[0].comments.unshift(p),g[e].list[0].commentCnt=parseInt(g[e].list[0].commentCnt)+1)}),console.log(3),u.setData({showComInput:!1,eventlist:g,value:"",contentCurrent:!1,placehold:"说点什么..."}),u.commentedUserid=10,u.commentedname="系统消息",wx.showToast({title:"发表成功",icon:"success",duration:1e3}),u.isCommentpushId(),h(o,wx.getStorageSync("groupid"),"comment"),i.wxreq({pathname:"YinianProject/yinian/SendComment1",data:{commentUserId:o,commentedUserId:d,eventId:s,content:a,formID:e}}).then(function(t){0==t.code&&(u.data.eventlist.forEach(function(e){e.list[0].eid==s&&e.list[0].comments.forEach(function(e){e.ctime===c&&(e.cid=t.data[0].cid)})}),u.setData({eventlist:u.data.eventlist}))})}else wx.showModal({title:"提示",content:"请先输入评论内容",showCancel:!1})},hiddenWrite:function(){this.setData({showComInput:!1})},checkchange:function(t){var e=t.detail.value.trim().length>0;this.setData({contentCurrent:e})},maketop:function(t){var e=this.data.eventlist[this.a].list[0].eid;this.state=this.data.eventlist[this.a].list[0].elevel;var a=this,o=1==this.state?"cancel":"stick",s=1==this.state?"取消置顶":"置顶";wx.showModal({title:"提示",content:"是否"+s+"此动态",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/ModifyEventLevel",data:{userid:wx.getStorageSync("userid"),groupid:wx.getStorageSync("groupid"),eid:e,type:o}}).then(function(t){if("success"==t.msg){wx.showToast({title:s+"成功"});a.data.eventlist[a.a].list[0].elevel=1==a.data.eventlist[a.a].list[0].elevel?"0":"1",a.state=1==a.state?"0":"1",a.getEventAxis()}})}})},delete_event:function(e){var a=this;if(e){var o=e||this.data.eventlist[a.a].list[0].eid;wx.showModal({title:"删除动态",content:"确定删除此条动态吗？",confirmColor:"#353535",success:function(e){e.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteEvent",data:t({userid:wx.getStorageSync("userid")},"eventId",o)}).then(function(t){if("success"==t.msg){wx.showToast({title:"删除成功",icon:"success",duration:2e3});var e=0,i=!1;a.data.eventlist.forEach(function(t,a){if(t.list[0].eid==o)return e=a,void(i=!0)}),i&&a.data.eventlist.splice(e,1),a.setData({eventlist:a.data.eventlist,showFunModel:!1})}})}})}},closeintroduce:function(){this.setData({showintroduce:!1})},uploadpic:function(t){console.log("e",t.currentTarget.dataset.pic);var e=this;if(wx.getStorageSync("userid")){clearTimeout(e.timer),this.setData({fromlast:1}),this.loadImgStateNo=!0;var a=void 0;a="pai"==t.currentTarget.dataset.pic?"camera":"album",this.isSubmit=2,wx.chooseImage({count:9,sizeType:["original"],sourceType:[a],success:function(t){var a=t.tempFilePaths;wx.removeStorageSync("uploadchoosedpic"),wx.setStorage({key:"uploadchoosedpic",data:a,success:function(){if(e.setData({addModalOn:!1,fromlast:1}),e.loadImgStateNo=!0,e.closeModal(),e.data.eventModel)e.addImgUploadevent();else{e.groupid;wx.navigateTo({url:"/pages/publish/pages/eventImage/eventImage?groupId="+e.groupid+"&albumType=6"})}},fail:function(){wx.showToast({title:"保存图片临时数据失败"})}})}})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},getBusiness:function(){var t=this;wx.request({url:d.getUrl("YinianProject/adv/getTimeAxisAdv"),data:{groupid:t.groupid},success:function(e){0==e.data.code&&t.setData({businessList:e.data.data})}})},getBannerInfo:function(){var t=this;i.wxreq({pathname:"YinianProject/bannerDisplay/getBannerInfo",data:{groupId:t.groupid}}).then(function(e){0==e.code&&t.setData({bannerInfo:e.data[0]})})},enterpreview:function(t){var e=t.currentTarget.dataset.parentindex,a=t.currentTarget.dataset.childindex,o=t.currentTarget.dataset.sel,i=this.data.eventlist,s=this;return console.log(i[e].list[a].picList),wx.setStorageSync("lookImgs",i[e].list[a].picList),clearTimeout(s.timer),s.setData({fromlast:1}),void wx.navigateTo({url:"/pages/others/lookmidpic/lookmidpic?current="+o})},showlike:function(t){if(wx.getStorageSync("userid")){var e=this,a=t.currentTarget.dataset.parentindex,o=t.currentTarget.dataset.childindex,i=t.currentTarget.dataset.eid;this.a=a,this.b=o,this.tepEid=i;this.data.eventlist[a];e.setData({showFunModel:!0,selNumA:a})}else wx.showToast({title:"获取用户信息失败"})},toDownLoad:function(t){this.loadImgStateNo=!0,this.setData({fromlast:1});var e=this.data.eventlist[this.a].list[0].picList;wx.setStorageSync("downPic",e);var a=4==this.data.eventlist[this.a].list[0].eMain?"video":"pic";wx.navigateTo({url:"/pages/others/download/download?downloadPicOrVideo="+a})},tosharepage:function(t){var e=this,a=e.groupid||0,s=e.data.userid||0;i.countOperation("viewscoll_eid",a,s,""),this.loadImgStateNo=!0,this.setData({fromlast:1});var n=t.currentTarget.dataset.index,d=this.data.eventlist[n].list[0].picList,l=this.data.eventlist[n].list[0].eMain,u=this.data.eventlist[n].list[0].eid;r.sharePageUserPic=0,wx.setStorageSync("sharePagePic",d),"object"==o(this.button)&&this.button.push({name:"eventShare"}),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=viewscoll_eid&eid="+u+"&eMain="+l+"&groupid="+this.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+e.data.ablumInfo.gcreator+"&gname="+e.data.ablumInfo.gname+"&groupNewType="+this.data.ablumInfo.groupNewType})},like:function(e){if(console.log("点赞"),console.log(e),wx.getStorageSync("userid")){var a=e.detail.formId,o=e.currentTarget.dataset.likecatagry,i=e.currentTarget.dataset.parentindex,s=e.currentTarget.dataset.childindex||0,n=(e.currentTarget.dataset.emain,e.currentTarget.dataset.eid),l=this;l.data.eventlist[i].list[s].likeUser=1,l.data.eventlist[i].list[s].likeCnt=parseInt(l.data.eventlist[i].list[s].likeCnt)+1,o&&(l.isLikepushId(),h(wx.getStorageSync("userid"),l.groupid,"like"),l.setData(t({eventlist:l.data.eventlist},"eventlist",l.data.eventlist)),wx.showToast({title:"点赞成功",icon:"success",duration:1e3}),wx.request({url:d.getUrl("YinianProject/yinian/AttachOrRemoveExpressionByLkNew"),data:{type:o,userid:r.globalData.userInfo.userid,eid:n,formID:a},success:function(t){console.log(t),t=t.data}}))}else wx.showToast({title:"获取用户信息失败"})},likeState:function(){},onPullDownRefresh:function(){m.getEventAxis(),wx.stopPullDownRefresh()},onReachBottom:function(){wx.getStorageSync("userid")&&this.data.eventlist&&0!=this.data.eventlist.length&&(this.isloading||this.eventloading())},eventloading:function(){var t=this;!t.data.eventlist||t.data.eventlist.length<1||(this.isloading=!0,this.setData({showLoadingImg:!0,loadingImgOrText:!0}),wx.request({url:d.getUrl("YinianProject/family/getIncidentList"),data:{groupid:t.groupid,userid:wx.getStorageSync("userid"),eid:t.data.eventlist[t.data.eventlist.length-1].list[0].eid},success:function(e){if(console.log(e),0==e.data.code){var a=e.data.data;if(0==a.length)t.setData({showLoadingImg:!0,loadingImgOrText:!1});else{for(var o=0;o<a.length;o++)a[o].time=a[o].euploadtime.substring(0,10),a[o].maxPicList=a[o].picList.length,a[o].picList.length>11&&a[o].picList.splice(11,a[o].picList.length-11);a.forEach(function(e){Object.assign(e,{time:i.timeRest(e.euploadtime),showlibox:!1,isAudioPlay:!1}),t.data.eventlist.push({month:e.euploadtime.substring(0,7).replace("-","."),list:[e]})}),t.isloading=!1,t.setData({eventlist:t.data.eventlist,showLoadingImg:!1})}}else t.isloading=!1,t.setData({showLoadingImg:!1})},fail:function(){t.isloading=!1,t.setData({showLoadingImg:!1})}}))},toMakeGroup:function(){"object"==o(this.button)&&this.button.push({name:"createAlbum"}),this.loadImgStateNo=!0,this.closeIntroCreate(),wx.navigateTo({url:"/pages/makegroup/makegroup?lastPage=albumDetail"})},showPvModel:function(){var t=this;if("object"==o(this.button)&&this.button.push({name:"upload"}),0!=t.data.ablumInfo.inBlackList)if(r.isUp)wx.showToast({title:"正在上传中喔~"});else if(2==t.data.ablumInfo.gOrigin&&t.closeIntroUpload(),1!=wx.getStorageSync("gAuthority")||wx.getStorageSync("userid")==wx.getStorageSync("createrid")){if(2==wx.getStorageSync("gAuthority")){var e=wx.getStorageSync("authorityList");if(0==e.length)return;for(var a=0;a<e.length;a++)e[a].userid==wx.getStorageSync("userid")&&(t.quanxian=!0);if(!t.quanxian)return void wx.showModal({title:"提示",content:"没有上传照片的权限",showCancel:!1})}if(t.setData({pvShowModel:!0}),4==this.data.ablumInfo.groupNewType)if("cancel"===t.isconfirm){var s=this.groupid,n=this.data.userid,d=this.data.ablumInfo.gcreator;i.countLoversOperation("cancelLoversUpBtn",s,n,d)}else{var l=this.groupid,u=this.data.userid,c=this.data.ablumInfo.gcreator;i.countLoversOperation("loversUpBtn",l,u,c)}}else wx.showModal({title:"提示",content:"只能创建者才能上传"});else wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1})},closepvModel:function(){this.setData({pvShowModel:!1})},closeFunModel:function(){this.setData({showFunModel:!1})},closeAudioBox:function(){this.setData({showAudioModelBox:!1})},preReset:function(){this.setData({fromlast:1})},longPressDelete:function(t){var e=this,a=t.currentTarget.dataset.longcid,o=t.currentTarget.dataset.longeid,s=t.currentTarget.dataset.longindex;wx.showModal({title:"提示",content:"是否删除该条评论",success:function(t){t.confirm&&i.wxreq({pathname:"YinianProject/yinian/DeleteComment",data:{commentID:a}}).then(function(t){"success"==t.msg&&(e.data.eventlist.forEach(function(t,e){t.list[0].eid==o&&(t.list[0].comments.splice(s,1),t.list[0].commentCnt--)}),e.setData({eventlist:e.data.eventlist}))})}})},activityRules:function(){this.data.ablumInfo&&this.data.ablumInfo.arValue&&this.data.ablumInfo.arValue.length>0&&this.setData({showActivityRules:!1})},closeActivityRules:function(){this.setData({showActivityRules:!0})},returnhome:function(){"object"==o(this.button)&&this.button.push({name:"backToIndex"}),wx.reLaunch?wx.reLaunch({url:"/pages/index/index"}):wx.switchTab({url:"/pages/index/index"})},openModel:function(){this.setData({showModelHidden:!0})},closeModel:function(){this.setData({showModelHidden:!1})},closeIntroUpload:function(){var t="showLoad"+this.groupid;wx.setStorageSync(t,1),this.setData({showFooterIntro1:!1})},closeIntroCreate:function(){var t="showCreat"+this.groupid;wx.setStorageSync(t,1),this.setData({showFooterIntro2:!1})},toBusinessGroup:function(t){var e=this,a=t.detail.formId;if(i.sendFormId(e.data.userid,a),"object"==o(this.button)&&this.button.push({name:"banner"}),0==e.data.businessList[0].joinGroupOrList)wx.navigateTo({url:"/pages/others/businessgroup/businessgroup?lastPage=albumDetail&listid="+e.data.businessList[0].listid});else if(1==e.data.businessList[0].joinGroupOrList){this.loadImgStateNo=!0;var s=e.data.businessList[0].groupNewType;console.log(s),g({groupNewType:s,data:{lastPage:"albumDetail",from:"grouplist",groupid:e.data.businessList[0].joinGroupid},navigator:"navigate"})}else if(2==e.data.businessList[0].joinGroupOrList){if(11==e.data.ablumInfo.groupNewType)return;this.loadImgStateNo=!0,this.setData({fromlast:1});var n=e.groupid||0,r=e.data.userid||0;i.countOperation("bannerpic_share",n,r,""),wx.navigateTo({url:"/pages/others/newsharepage/newsharepage?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerpic_share&groupid="+e.groupid+"&gOrigin="+e.data.ablumInfo.gOrigin})}else if(3==e.data.businessList[0].joinGroupOrList){var d=e.data.businessList[0].joinGroupid;if(!d)return;this.loadImgStateNo=!0,wx.navigateTo({url:"/"+d})}},loadmore:function(t){this.setData({fromlast:1}),wx.navigateTo({url:"/pages/eventdetail/eventdetail?lastPage=albumDetail&dateindex="+t.currentTarget.dataset.sela+"&eid="+t.currentTarget.dataset.eid+"&rowindex="+t.currentTarget.dataset.selb+"&efrom=grouptypescoll&groupNewType="+this.data.ablumInfo.groupNewType})},closeDispose:function(){console.log("closeDispose")},sureDispose:function(){console.log("sureDispose")},edit:function(){var t=this;wx.getStorageSync("createrid")==wx.getStorageSync("userid")?t.setData({Mengcen:!0}):wx.showModal({title:"提示",content:"非相册管理员，无法修改相册名",showCancel:!1})},setcolor:function(t){var e=this,a=t.detail.value.length;e.setData({textNum:a}),t.detail.value.trim().length>0?e.setData({buttonactive:!0}):e.setData({buttonactive:!1})},Mengcen_cancel:function(){this.setData({textNum:0,Mengcen:!1})},submitfun:function(t){var e=this;if(wx.getStorageSync("userid")){var a=t.detail.value.groupname;if(a.trim().length>0){if(n.testStr(a))return void wx.showModal({title:"包含敏感词",content:"请勿使用包含敏感词汇的相册名称",showCancel:!1});wx.request({url:d.getUrl("YinianProject/yinian/ModifyGroupName"),data:{groupid:wx.getStorageSync("groupid"),groupName:a,userid:wx.getStorageSync("userid")},success:function(t){0==t.data.code&&(wx.showToast({title:"修改成功",icon:"success",duration:2e3}),wx.setStorageSync("gname",a),e.data.ablumInfo.gname=a,wx.setStorageSync("ganme",a),e.setData({textNum:0,Mengcen:!1,ablumInfo:e.data.ablumInfo}))}})}else wx.showModal({title:"提示",content:"请输入正确的相册名称",showCancel:!1})}else wx.showModal({title:"错误",content:"获取用户授权信息失败！请稍后再试",showCancel:!1})},fasttoknow:function(){var t=this;t.setData({showDisposeModel:!0,usernumber:s.usernumber}),clearInterval(t.timerinterval),t.timerinterval=null,t.usernumberchange()},usernumberchange:function(){var t=this;t.timerinterval=setInterval(function(){if(t.data.usernumber>t.data.maxnumber){clearInterval(t.timerinterval),t.timerinterval=null;var e=t.toThousands(t.data.maxnumber);console.log(e),t.setData({usernumber:e})}else t.data.usernumber+=323456,t.setData({usernumber:t.data.usernumber})},100)},toThousands:function(t){for(var t=(t||0).toString(),e="";t.length>3;)e=","+t.slice(-3)+e,t=t.slice(0,t.length-3);return t&&(e=t+e),e}},t(e,"closeModel",function(){this.setData({showDisposeModel:!1,classArr:["pic1","pic2","pic3"]})}),t(e,"changestart",function(t){v=t.touches[0].pageX,S=t.touches[0].pageY}),t(e,"changemove",function(t){}),t(e,"changend",function(t){var e=this;if(I=t.changedTouches[0].pageX,b=t.changedTouches[0].pageY,v-I>30){if("pic2"==e.data.classArr[0])return;e.data.classArr.unshift(e.data.classArr[e.data.classArr.length-1]),e.data.classArr.pop(e.data.classArr[e.data.classArr.length-1]),e.setData({classArr:e.data.classArr})}else if(I-v>30){if("pic1"==e.data.classArr[0])return;e.data.classArr.push(e.data.classArr[0]),e.data.classArr.shift(e.data.classArr[0]),e.setData({classArr:e.data.classArr})}}),t(e,"addgroup",function(){wx.getStorageSync("userid")?("object"==o(this.button)&&this.button.push({name:"createAlbum"}),this.loadImgStateNo=!0,wx.navigateTo({url:"../../../pages/makegroup/makegroup?lastPage=albumDetail"})):wx.showModal({title:"错误",content:"获取用户授权信息失败！创建相册功能不可用！",showCancel:!1})}),t(e,"isfirstUpload",function(t){return}),t(e,"noLongerPrompt",function(){var t=this;wx.setStorageSync("noPrompt",1),t.setData({showfirstuploadModel:!1});var e={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesNoPrompt",userLastLoginTime:r.enterTime};r.stat.request(e)}),t(e,"getHeaderData",function(){var t=this,e=t.data.userid;i.wxreq({pathname:"YinianProject/activitySpacial/selectHasUploadNum",data:{activitySpacialId:1,userId:e}}).then(function(a){if(console.log(a),0==a.code){var o=a.data[0].hasUploadPercent.split("/")[1];if(a.data[0].hasPicNum=parseInt(o),0==a.data[0].isReceive){t.setData({contentText:a.data[0],showMayDayActivity:!0});var i={operation:"twice_page_popover",userId:e,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(i)}}})}),t(e,"closeMayDayModal",function(){this.setData({showMayDayActivity:!1})}),t(e,"goOnUpload",function(){var t=this;this.setData({showMayDayActivity:!1}),this.openAddEventModal();var e={operation:"twice_page_reupload",userId:t.data.userid,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(e)}),t(e,"toGetPrize",function(){var t=this,e=this.data.userid;wx.redirectTo({url:"/pages/mayDayActivity/index/index"});var a={operation:"twice_page_toreward",userId:e,remark:t.mayefrom,groupId:t.groupid||0};r.stat.request(a)}),t(e,"useablePointsclick",function(t){console.log("跳转到 个人中心积分界面"),this.loadImgStateNo=!0,this.setData({fromlast:1});var e=t.detail.formId;i.sendFormId(this.data.userid,e);var a=this.data.groupid,o=this.data.userid,s=this.data.ablumInfo.groupNewType||0,n=this.data.ablumInfo.gcreator;wx.navigateTo({url:"/pages/personalPage/personalPage?groupId="+a+"&pageUserId="+o+"&creator="+n+"&albumType="+s})}),t(e,"closeDispose",function(){this.setData({showcomeuserModel:!1})}),t(e,"hurryupload",function(){var t=this;t.closeDispose(),t.showPvModel()}),t(e,"closefirstuploadDispose",function(){var t=this,e=t.data.userid||0;0==t.data.activitySwitchhot&&r.stat.stathotmall({userId:e,groupId:t.data.groupId,port:r.globalData.port,operation:"quitupload",registerTime:r.globalData.utime,inviteId:t.nc}),t.setData({showfirstuploadModel:!1});var a={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesAgainClose",userLastLoginTime:r.enterTime};"first"==t.data.isFirstUpload&&(a.operation="viewscollToStoriesFirstClose"),r.stat.request(a)}),t(e,"firstuploadshare",function(){var t=this,e=t.groupid||0,a=t.data.userid||0;i.countOperation("firstup_share",e,a,""),t.setData({showfirstuploadModel:!1});var o=t.data.thedata;console.log(o);var s=o[0].picList,n=o[0].eMain,r=o[0].eid;wx.setStorageSync("sharePagePic",s),wx.navigateTo({url:"/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=firstup_share&eid="+r+"&eMain="+n+"&groupid="+this.groupid+"&gOrigin="+this.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+this.data.ablumInfo.eventQRCodeCanPublish})}),t(e,"toStories",function(t){var e=t.currentTarget.dataset.flag;console.log("flag",e);var a={userId:wx.getStorageSync("userid")||0,operation:"viewscollToStoriesAgain",userLastLoginTime:r.enterTime};"first"==e&&(a.operation="viewscollToStoriesFirst"),"again"==e&&(a.operation="viewscollToStoriesAgain"),"share"==e&&(a.operation="viewscollToStoriesShare"),r.stat.request(a);var o=void 0;"first"!=e&&"again"!=e||(o=this.data.thedata[0].eid),"share"==e&&(o=t.currentTarget.dataset.eid);var i=this.groupid;wx.navigateTo({url:"/pages/stories/pages/index/index?eId="+o+"&groupId="+i})}),t(e,"openAddModal",function(){var t=this;t.setData({addModalOn:!0}),t.setData({addModalAnimation:!0})}),t(e,"closeAddModal",function(){var t=this;t.setData({addModalOn:!1}),t.setData({addModalAnimation:!1})}),t(e,"openAddEventModal",function(){console.log("点击了分享");var t=this;t.permission()&&(t.openAddModal(),t.setData({addEventModalOn:!0}),t.setData({addEventModalAnimation:!0}),t.isUploadpushId())}),t(e,"closeAddEventModal",function(){var t=this;t.setData({addEventModalOn:!1}),t.setData({addEventModalAnimation:!1}),t.closeAddModal()}),t(e,"openAddPhotoModal",function(t){var e=this;e.setData({addEventModalOn:!1}),e.setData({addEventModalAnimation:!1});var a=t.currentTarget.dataset.type,o="";o="photo"===a?"照片":"video"===a?"视频":"事件",e.setData({addPhotoModalOn:!0,modalTitle:o}),e.setData({addPhotoModalAnimation:!0})}),t(e,"closeAddPhotoModal",function(){var t=this;t.setData({addPhotoModalOn:!1}),t.setData({addPhotoModalAnimation:!1}),t.closeAddModal()}),t(e,"toPoseCamera",function(){var t=this;t.permission()&&(t.setData({fromlast:1}),wx.navigateTo({url:"/pages/poseCamera/pages/camera/camera?groupId="+this.groupid,success:function(t){console.log("跳转成功",t)},fail:function(t){console.log("跳转失败",t)}}))}),t(e,"preventTouchMove",function(){}),t(e,"closeModal",function(){var t=this;t.closeAddPhotoModal(),t.closeAddEventModal()}),t(e,"permission",function(){var t=this,e=!0;if(0==t.data.ablumInfo.inBlackList)return wx.showModal({title:"提示",content:"由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",showCancel:!1}),void(e=!1);if(1==wx.getStorageSync("gAuthority")&&wx.getStorageSync("userid")!=wx.getStorageSync("createrid"))return wx.showModal({title:"提示",content:"只能创建者才能上传"}),void(e=!1);if(2==wx.getStorageSync("gAuthority")){var a=wx.getStorageSync("authorityList");if(0==a.length)return;for(var o=0;o<a.length;o++)a[o].userid==wx.getStorageSync("userid")&&(t.quanxian=!0);if(!t.quanxian)return wx.showModal({title:"提示",content:"没有上传照片的权限",showCancel:!1}),void(e=!1)}return e}),t(e,"isUploadpushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isUpload",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"isInvitepushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isInvite",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"isLikepushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isLike",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"isCommentpushId",function(){""!=r.pushId&&void 0!=r.pushId&&i.wxreq({pathname:"YinianProject/ep/isComment",data:{pushId:r.pushId,port:r.globalData.port}}).then(function(t){},function(t){})}),t(e,"flashSaleShowSwitch",function(){var t=this;i.wxreq({pathname:"YinianProject/flashSale/flashSaleShowSwitch",data:{}}).then(function(e){console.log(e),0==e.code?(t.setData({activitySwitchhot:e.data[0].activitySwitch,inviteSwitchhot:e.data[0].inviteSwitch,bottomUrl:e.data[0].bottomUrl,inviteBelowHint:e.data[0].inviteBelowHint}),r.globalData.activitySwitch=e.data[0].activitySwitch,r.globalData.shareUrl=e.data[0].shareUrl,r.globalData.inviteSwitch=e.data[0].inviteSwitch,r.globalData.regulaUrl=e.data[0].regulaUrl):wx.showToast({title:"hotshow请求失败!",duration:2e3})}).catch(function(t){wx.showToast({title:"hotshow请求失败!",duration:2e3})})}),t(e,"hotactiveNavgite",function(){var t=this;t.groupid?t.joinSaleActivty():wx.showModal({title:"提示",content:"获取该相册信息失败",showCancel:!1})}),t(e,"joinSaleActivty",function(){var t=this;if(!t.isloadingactive){t.isloadingactive=!0;var e=t.data.userid||0;r.stat.stathotmall({userId:e,groupId:t.groupid,port:r.globalData.port,operation:"bottomhotClick",registerTime:r.globalData.utime,inviteId:t.nc}),i.wxreq({pathname:"YinianProject/flashSale/joinSaleActivty",data:{userId:t.data.ablumInfo.gcreator,groupId:t.groupid,groupName:t.data.ablumInfo.gname}}).then(function(e){t.isloadingactive=!1,wx.navigateTo({url:"/pages/others/hot/index/index?lastPage=albumDetail&clickfrom=group&clickRecord=addmenber&groupid="+t.groupid+"&gOrigin="+t.data.ablumInfo.gOrigin+"&eventQRCodeCanPublish="+t.data.ablumInfo.eventQRCodeCanPublish+"&gcreator="+t.data.ablumInfo.gcreator+"&groupNewType="+t.data.ablumInfo.groupNewType})},function(t){})}}),t(e,"tocreateAlbum",function(){console.log("tocreateAlbum");var t=this,e=t.data.userid||0;r.stat.stathotmall({userId:e,groupId:t.data.groupId,port:r.globalData.port,operation:"wantplayupload",registerTime:r.globalData.utime,inviteId:t.nc}),wx.navigateTo({url:"../makegroup/makegroup",success:function(t){}})}),t(e,"getAlbumCreater",function(){var t=this;i.wxreq({pathname:"YinianProject/flashSale/flashSaleTextContentSwitch",data:{}}).then(function(e){console.log(e),0==e.code&&(r.globalData.sharePicTextContent=e.data[0].sharePicTextContent,r.globalData.sharePicUrlContent=e.data[0].sharePicUrlContent,r.globalData.alertButtonOne=e.data[0].alertButtonOne,r.globalData.alertHidePic=e.data[0].alertHidePic,r.globalData.alertButtonTwo01=e.data[0].alertButtonTwo01,r.globalData.alertButtonTwo02=e.data[0].alertButtonTwo02,r.globalData.shareButtonOne=e.data[0].shareButtonOne,r.globalData.shareButtonTwo_1=e.data[0].shareButtonTwo_1,r.globalData.shareButtonTwo_2=e.data[0].shareButtonTwo_2,r.globalData.hotRecordDetail=e.data[0].hotRecordDetail,t.setData({alertButtonOne:e.data[0].alertButtonOne,alertHidePic:e.data[0].alertHidePic,alertButtonTwo01:e.data[0].alertButtonTwo01,alertButtonTwo02:e.data[0].alertButtonTwo02}))}).catch(function(t){})}),t(e,"flashSalegetUserInfo",function(t){i.wxreq({pathname:"YinianProject/flashSale/getUserInfo",data:{userId:t}}).then(function(t){0==t.code&&(r.globalData.utime=t.data[0].utime)},function(t){})}),t(e,"closeInviteBox",function(){this.setData({showInviteModal:!1})}),t(e,"isShowLoverModal",function(t,e){var a=this;if(t&&"null"!=t&&"undefined"!=t&&e&&"null"!=e&&"undefined"!=e){var o="timeLine_"+t+"_"+e;wx.getStorageSync(o)||(wx.setStorageSync(o,1),a.setData({showInviteModal:!0}))}}),t(e,"getEventAxis",function(){i.wxreq({pathname:"YinianProject/family/getIncidentList",data:{groupid:m.groupid,userid:wx.getStorageSync("userid")}}).then(function(t){if(0==t.code){var e=t.data;if(e.length>0)for(var a=0;a<e.length;a++)e[a].time=e[a].euploadtime.substring(0,10),e[a].maxPicList=e[a].picList.length,e[a].picList.length>11&&e[a].picList.splice(11,e[a].picList.length-11);var o=[];e.forEach(function(t){Object.assign(t,{time:i.timeRest(t.euploadtime),showlibox:!1,isAudioPlay:!1}),o.push({month:t.euploadtime.substring(0,7).replace("-","."),list:[t]})}),m.setData({eventlist:o,showFunModel:!1,loadImgState:!0,showLoadingImg:!0,loadingImgOrText:!1}),console.log(m.data.eventlist)}}).catch(function(t){m.setData({showFunModel:!1})})}),t(e,"openPublishMenu",function(){m.permission()&&(m.setData({publishMenu:!0}),m.isUploadpushId())}),t(e,"publishMenuClosed",function(t){var e=this;e.setData({publishMenu:!1});var a=t.detail;console.log(a),"photo"===a&&wx.showActionSheet({itemList:["系统相册选择","拍照"],itemColor:"#333",success:function(t){var a=t.tapIndex,o={currentTarget:{dataset:{pic:"phone"}}};console.log("eee",o.currentTarget.dataset.pic),0==a&&(o.currentTarget.dataset.pic="phone"),1==a&&(o.currentTarget.dataset.pic="pai"),e.uploadpic(o)},fail:function(t){console.log(t.errMsg)}}),"video"===a&&wx.showActionSheet({itemList:["系统相册选择","拍摄"],itemColor:"#333",success:function(t){var a=t.tapIndex,o={currentTarget:{dataset:{video:"phone"}}};console.log("eee",o.currentTarget.dataset.video),0==a&&(o.currentTarget.dataset.video="phone"),1==a&&(o.currentTarget.dataset.video="pai"),e.uploadvideo(o)},fail:function(t){console.log(t.errMsg)}}),"event"===a&&wx.showActionSheet({itemList:["系统相册选择","拍照"],itemColor:"#333",success:function(t){var a=t.tapIndex,o={currentTarget:{dataset:{pic:"phone",stype:"event"}}};console.log("eee",o.currentTarget.dataset.pic),0==a&&(o.currentTarget.dataset.pic="phone"),1==a&&(o.currentTarget.dataset.pic="pai"),e.uploadpic(o)},fail:function(t){console.log(t.errMsg)}}),"import"===a&&(e.stopreset(),wx.navigateTo({url:"/pages/downloadApp/downloadApp"}))}),t(e,"addImagess",function(t){if(console.log(t),!r.isUp){var e=t.currentTarget.dataset.emain,a=t.currentTarget.dataset.eid;m.setData({addModalOn:!m.data.addModalOn,addModalAnimation:!m.data.addModalAnimation,addPhotoModalOn:!m.data.addPhotoModalOn,addPhotoModalAnimation:!m.data.addPhotoModalAnimation,modalTitle:"照片",eventModel:!0,eventOmain:e,eventEid:a})}}),t(e,"addImgUploadevent",function(){var t=wx.getStorageSync("uploadchoosedpic"),e=this,a=[],o=t;e.setData({showProgress:!0,totalnum:t.length,uploadnum:0,progress:0,upSteps:1,sucImgNum:0,fitImgNum:0,upViderOrPic:"addEvent",eventModel:!1,isUpPicState:!1}),r.isUp=!0,u.length=0;wx.request({url:d.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),data:{},method:"GET",success:function(t){0===t.data.code?e.uploadFileEvent(t.data.data[0].token,o,a,0,"event"):(u.length=0,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1,r.fromUp="addEvent")},fail:function(t){u.length=0,e.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1,r.fromUp="addEvent"}})}),t(e,"uploadFileEvent",function(t,e,a,o,s){var n=this;if(0==e.length)console.log(u),i.wxreq({pathname:"YinianProject/family/addPictureInIncident",data:{userid:wx.getStorageSync("userid"),groupid:n.groupid,eid:n.data.eventEid,picAddress:u.join(","),main:n.data.eventOmain}}).then(function(t){console.log(t),0==t.code?(u.length=0,r.upState=0,r.upObj={},n.setData({progress:0,upSteps:2}),n.timer2=setTimeout(function(){n.setData({showProgress:!1,isUpPicState:!0})},2e3),n.getEventAxis(),r.isUp=!1,r.fromUp=""):(u.length=0,_this.setData({upSteps:3,showProgress:!0,uploadnum:0,progress:0}),r.isUp=!1,r.fromUp="addEvent")});else{var d=e.splice(0,1);n.uppic(t,d,e,a,o,s)}}),t(e,"startUploadEvent",function(){wx.showActionSheet({itemList:["系统相册选择","拍照"],itemColor:"#333",success:function(t){var e=t.tapIndex,a={currentTarget:{dataset:{pic:"phone",stype:"event"}}};console.log("eee",a.currentTarget.dataset.pic),0==e&&(a.currentTarget.dataset.pic="phone"),1==e&&(a.currentTarget.dataset.pic="pai"),m.uploadpic(a)},fail:function(t){console.log(t.errMsg)}})}),t(e,"playPhoto",function(t){console.log(t),this.setData({playPhoto:!0}),f=t.currentTarget.dataset.eid,w=t.currentTarget.dataset.grouptype,r.stat.request({operation:"eventMakeMore",userId:wx.getStorageSync("userid"),groupId:m.groupid,groupNewType:w})}),t(e,"makeStory",function(){r.stat.request({operation:"eventMakeStory",userId:wx.getStorageSync("userid"),groupId:m.groupid,groupNewType:w}),wx.showLoading({title:"正在上传",mask:!0}),wx.request({url:d.host+"/YinianProject/story/createStory",data:{userId:wx.getStorageSync("userid")},success:function(t){console.log(t),0==t.data.code&&(wx.hideLoading(),wx.setStorageSync("storyId",t.data.data[0].storyId),wx.request({url:d.host+"/YinianProject/story/eventGenerateStory",data:{userId:wx.getStorageSync("userid"),eId:f,storyId:wx.getStorageSync("storyId"),groupId:m.groupid},method:"GET",success:function(t){if(console.log(t),0===t.data.code){m.setData({playPhoto:!1});var e=l.getCurrentPageUrlWithArgs();console.log(e),wx.setStorageSync("skipUrl",e),wx.navigateTo({url:"/package/stories/pages/make/makeStory?eId="+wx.getStorageSync("storyId")+"&groupid="+m.groupid+"&index=1&groupType="+w+"&action=3"})}},fail:function(t){}}))},fail:function(t){}})}),e)); 
 			}); 	require("pages/familyAlbum/eventAxis/eventAxis.js");
 		__wxRoute = 'pages/downloadApp/downloadApp';__wxRouteBegin = true; 	define("pages/downloadApp/downloadApp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=void 0;Page({data:{QRCodeUrl:"https://api.zhuiyinanian.com/web/image/download_app.png"},onLoad:function(t){o=this},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},saveQRCode:function(){wx.downloadFile({url:o.data.QRCodeUrl,success:function(t){if(200===t.statusCode){var n=t.tempFilePath;o.save(n)}else wx.showToast({title:"二维码保存失败",icon:"none"})},fail:function(){wx.showToast({title:"二维码下载错误",icon:"none"})}})},save:function(t){wx.saveImageToPhotosAlbum({filePath:t,success:function(){wx.showToast({title:"保存到相册成功"})},fail:function(t){o.getWritePhotosAlbum()}})},getWritePhotosAlbum:function(){wx.getSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]||wx.showModal({title:"权限提示",content:'你未授权"忆年共享相册"保存图片到你的相册，需要去授权吗？',success:function(t){t.confirm?wx.openSetting({success:function(t){console.log("ss",t),t.authSetting["scope.writePhotosAlbum"]?o.saveQRCode():wx.showToast({title:"未授权，无法保存",icon:"none"})},fail:function(){wx.showToast({title:"授权失败，无法保存",icon:"none"})}}):wx.showToast({title:"没有授权，无法保存",icon:"none"})}})}})},copyWebsite:function(){wx.setClipboardData({data:"http://www.zhuiyinanian.com",success:function(o){wx.showToast({title:"已复制到粘贴版",icon:"success",image:"/images/helpcenter_window_ok.png"})}})}}); 
 			}); 	require("pages/downloadApp/downloadApp.js");
 		__wxRoute = 'pages/components/publishMenu/publishMenu';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/publishMenu/publishMenu.js';	define("pages/components/publishMenu/publishMenu.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="http://oibl5dyji.bkt.clouddn.com/",n={PHOTOS:e+"PM_photos@2x.png",AUDIO:e+"PM_audio@2x.png",IMPORT:e+"PM_import@2x.png",WRITE:e+"PM_wirte@2x.png",CLOSE:e+"PM_close@2x.png",VIDEO:e+"PM_video@2x.png",MAKE_MV:e+"PM_make_mv@2x.png",EVENT:e+"PM_event@2x.png"},t=[{id:1,name:"photo",icon:n.PHOTOS,desc:"照片"},{id:2,name:"video",icon:n.VIDEO,desc:"视频"},{id:3,name:"text",icon:n.WRITE,desc:"文字"},{id:4,name:"audio",icon:n.AUDIO,desc:"语音"},{id:5,name:"event",icon:n.EVENT,desc:"事件"},{id:6,name:"make_mv",icon:n.MAKE_MV,desc:"制作MV"},{id:7,name:"import",icon:n.IMPORT,desc:"一键导入"}],a=void 0;Component({properties:{on:{type:Boolean,value:!1,observer:function(e,n){e&&setTimeout(function(){a.setData({backgroundOn:!0,selectedMenuName:""})},100)}},backgroundOn:{type:Boolean,value:!1,observer:function(e,n){e&&a.setData({mainOn:!0}),e||setTimeout(function(){a.setData({on:!1})},300)}},mainOn:{type:Boolean,value:!1,observer:function(e,n){e||a.setData({backgroundOn:!1})}},menuNames:{type:String,value:"",observer:function(e,n){a.generateMenus()}}},data:{menus:Array,selectedMenuName:""},created:function(){a=this},ready:function(){a.setData({ICON:n}),a.generateMenus()},methods:{close:function(){a.setData({mainOn:!1}),setTimeout(function(){console.log("Close",a.data.selectedMenuName),a.triggerEvent("Close",a.data.selectedMenuName)},150)},generateMenus:function(){if(a.data.menuNames.length>0){var e=t.filter(function(e){return a.data.menuNames.search(e.name)>=0});a.setData({menus:e})}},selectedOperation:function(e){var n=e.currentTarget.dataset.menu_name;a.setData({selectedMenuName:n}),a.close()},prevent:function(){}}}); 
 			}); 	require("pages/components/publishMenu/publishMenu.js");
 		__wxRoute = 'pages/publish/pages/eventImage/eventImage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/publish/pages/eventImage/eventImage.js';	define("pages/publish/pages/eventImage/eventImage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var t=require("../../icon.js"),a=require("../../publish.js"),n=getApp(),i=void 0;Page({data:{ICON:Object,groupId:-1,albumType:-1,text:"",title:"",location:"",publishTime:"",selectedFriends:[],selectedFriendIds:"",selectedSyncAlbums:{groupNames:"",groupIds:""},images:[],jurisdiction:{andFriends:!1,publishedTime:!1}},onLoad:function(e){n.stat.statpv({route:this.route,options:e}),i=this;var s=wx.getStorageSync("uploadchoosedpic")||[];i.setData({ICON:t.ICON,groupId:e.groupId,images:s,albumType:e.albumType}),i.generatePermissions(e.albumType),(0,a.previousPageNoRefresh)()},onReady:function(){},onShow:function(){i.readSelectedSyncAlbum()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},inputTitle:function(e){i.setData({title:e.detail.value})},getInputText:function(e){i.setData({text:e.detail})},getLocation:function(e){i.setData({location:e.detail.result})},getDatetime:function(e){i.setData({publishTime:e.detail})},getAndFriends:function(e){if(e.detail.length=0){var t=i.data.selectedFriends;t.length=0,i.setData({selectedFriends:t}),console.log(i.data.selectedFriends)}else i.setData({selectedFriends:e.detail})},getSelectedSyncAlbums:function(e){var t=i.data.selectedSyncAlbums;t.groupIds=e.detail.groupIds,t.groupNames=e.detail.result,i.setData({selectedSyncAlbums:t})},selectImages:function(){var t=i.data.images,a=0;t.length<18?a=9:t.length>=18&&t.length<28?a=9-t.length%9:wx.showToast({title:"最多上传27张",image:"/images/toast_warning.png"}),wx.chooseImage({count:a,sizeType:["original"],sourceType:["album"],success:function(a){t.push.apply(t,e(a.tempFilePaths)),i.setData({images:t})}})},deleteImage:function(e){var t=e.currentTarget.dataset.index,a=i.data.images;a=a.filter(function(e,a){return t!=a}),i.setData({images:a})},readSelectedSyncAlbum:function(){var e=i.data.selectedSyncAlbums;wx.getStorageSync("strName")&&(e.groupNames=wx.getStorageSync("strName").replace(/\//g,"、"));var t=wx.getStorageSync("strId");e.groupIds=t||i.data.groupId,i.setData({selectedSyncAlbums:e})},generateAndFriendIds:function(){var e=i.data.selectedFriends,t="";e.forEach(function(a,n){n!=e.length-1?t+=a.userid+",":t+=a.userid+""}),i.setData({selectedFriendIds:t})},formSubmit:function(e){i.generateAndFriendIds();var t=i.data.images;if(0!==t.length)if(0!==i.data.title.length){var a=e.detail.formId,s=i.data.title,o=i.data.text,r=i.data.location,d=i.data.selectedFriendIds,l=i.data.publishTime,u=i.data.selectedSyncAlbums.groupIds;console.log(d),n.upState=2,n.fromUp="event",n.upObj={formID:a,textTitle:s,content:o,place:r,attentionMember:d,publishedTime:l,mainIdStr:u,picarr:t},wx.getStorageSync("userid")?wx.navigateBack({delta:1}):wx.showModal({title:"提示",content:"请先授权",showCancel:!1})}else wx.showToast({title:"标题不能为空",image:"/images/toast_warning.png"});else wx.showToast({title:"请添加图片",image:"/images/toast_warning.png"})},generatePermissions:function(e){var t=[2,3,4,5,11],a=[2,4],n=parseInt(e),s=i.data.jurisdiction;t.includes(n)&&(s.publishedTime=!0),a.includes(n)&&(s.andFriends=!0),i.setData({jurisdiction:s})}}); 
 			}); 	require("pages/publish/pages/eventImage/eventImage.js");
 	