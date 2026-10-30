var xf=0,Vh=1,_f=2;var Qu=1,Gc=2,Vn=3,gi=0,Ve=1,rn=2,pi=0,Us=1,Gh=2,Wh=3,Xh=4,yf=5,Oi=100,vf=101,Mf=102,bf=103,Sf=104,wf=200,Ef=201,Tf=202,Af=203,vl=204,Ml=205,Rf=206,Cf=207,If=208,Pf=209,Lf=210,Df=211,Uf=212,Nf=213,Ff=214,bl=0,Sl=1,wl=2,Bs=3,El=4,Tl=5,Al=6,Rl=7,Wc=0,Of=1,Bf=2,mi=0,zf=1,kf=2,Hf=3,Xc=4,Vf=5,Gf=6,Wf=7;var td=300,zs=301,ks=302,Cl=303,Il=304,ao=306,Hi=1e3,zi=1001,Pl=1002,Ke=1003,Xf=1004;var Zr=1005;var En=1006,ko=1007;var ki=1008;var Yn=1009,ed=1010,nd=1011,Rr=1012,qc=1013,Vi=1014,Tn=1015,Ur=1016,Yc=1017,Zc=1018,Hs=1020,id=35902,sd=1021,rd=1022,mn=1023,ad=1024,od=1025,Ns=1026,Vs=1027,$c=1028,Jc=1029,ld=1030,Kc=1031;var jc=1033,Sa=33776,wa=33777,Ea=33778,Ta=33779,Ll=35840,Dl=35841,Ul=35842,Nl=35843,Fl=36196,Ol=37492,Bl=37496,zl=37808,kl=37809,Hl=37810,Vl=37811,Gl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,Zl=37817,$l=37818,Jl=37819,Kl=37820,jl=37821,Aa=36492,Ql=36494,tc=36495,cd=36283,ec=36284,nc=36285,ic=36286;var Ra=2300,sc=2301,Ho=2302,qh=2400,Yh=2401,Zh=2402;var qf=3200,Yf=3201;var Qc=0,Zf=1,di="",Ue="srgb",$s="srgb-linear",oo="linear",ne="srgb";var ps=7680;var $h=519,$f=512,Jf=513,Kf=514,hd=515,jf=516,Qf=517,tp=518,ep=519,rc=35044,lo=35048;var Jh="300 es",Wn=2e3,Ca=2001,xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=1234567,Sr=Math.PI/180,Cr=180/Math.PI;function Xn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function th(i,t){return(i%t+t)%t}function np(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ip(i,t,e){return i!==t?(e-i)/(t-i):0}function wr(i,t,e){return(1-e)*i+e*t}function sp(i,t,e,n){return wr(i,t,1-Math.exp(-e*n))}function rp(i,t=1){return t-Math.abs(th(i,t*2)-t)}function ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function op(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cp(i,t){return i+Math.random()*(t-i)}function hp(i){return i*(.5-Math.random())}function up(i){i!==void 0&&(Kh=i);let t=Kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dp(i){return i*Sr}function fp(i){return i*Cr}function pp(i){return(i&i-1)===0&&i!==0}function mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var vn={DEG2RAD:Sr,RAD2DEG:Cr,generateUUID:Xn,clamp:Ce,euclideanModulo:th,mapLinear:np,inverseLerp:ip,lerp:wr,damp:sp,pingpong:rp,smoothstep:ap,smootherstep:op,randInt:lp,randFloat:cp,randFloatSpread:hp,seededRandom:up,degToRad:dp,radToDeg:fp,isPowerOfTwo:pp,ceilPowerOfTwo:mp,floorPowerOfTwo:gp,setQuaternionFromProperEuler:xp,normalize:Qt,denormalize:pn},xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],S=s[4],_=s[7],L=s[2],A=s[5],C=s[8];return r[0]=a*x+o*w+l*L,r[3]=a*m+o*S+l*A,r[6]=a*p+o*_+l*C,r[1]=c*x+h*w+d*L,r[4]=c*m+h*S+d*A,r[7]=c*p+h*_+d*C,r[2]=u*x+f*w+g*L,r[5]=u*m+f*S+g*A,r[8]=u*p+f*_+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vo=new Ft;function ud(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _p(){let i=Ia("canvas");return i.style.display="block",i}var jh={};function Mr(i){i in jh||(jh[i]=!0,console.warn(i))}function yp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Mp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=Fs(i.r),i.g=Fs(i.g),i.b=Fs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?oo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qh=[.64,.33,.3,.6,.15,.06],tu=[.2126,.7152,.0722],eu=[.3127,.329],nu=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[$s]:{primaries:Qh,whitePoint:eu,transfer:oo,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:tu,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:Qh,whitePoint:eu,transfer:ne,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:tu,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});var ms,ac=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=Ia("canvas")),ms.width=t.width,ms.height=t.height;let n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ia("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bp=0,Pa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Go(s[a].image)):r.push(Go(s[a]))}else r=Go(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ac.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sp=0,We=class i extends xi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zi,s=zi,r=En,a=ki,o=mn,l=Yn,c=i.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Xn(),this.name="",this.source=new Pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=td;We.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,_=(f+1)/2,L=(p+1)/2,A=(h+u)/4,C=(d+x)/4,R=(g+m)/4;return S>_&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=C/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=R/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=R/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-x)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oc=class extends xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Pa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},La=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lc=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*x,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let L=Math.sqrt(S),A=Math.atan2(L,p*w);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}let _=o*w;if(l=l*m+u*_,c=c*m+f*_,h=h*m+g*_,d=d*m+x*_,m===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wo=new I,su=new gn,$n=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Jr.subVectors(this.max,ur),gs.subVectors(t.a,ur),xs.subVectors(t.b,ur),_s.subVectors(t.c,ur),ai.subVectors(xs,gs),oi.subVectors(_s,xs),Ii.subVectors(gs,_s);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ii.z,Ii.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ii.z,0,-Ii.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ii.y,Ii.x,0];return!Xo(e,gs,xs,_s,Jr)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,gs,xs,_s,Jr))?!1:(Kr.crossVectors(ai,oi),e=[Kr.x,Kr.y,Kr.z],Xo(e,gs,xs,_s,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},On=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,$r=new $n,gs=new I,xs=new I,_s=new I,ai=new I,oi=new I,Ii=new I,ur=new I,Jr=new I,Kr=new I,Pi=new I;function Xo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);let o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wp=new $n,dr=new I,qo=new I,_i=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(qo)),this.expandByPoint(dr.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bn=new I,Yo=new I,jr=new I,li=new I,Zo=new I,Qr=new I,$o=new I,Da=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yo.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Yo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(jr),o=li.dot(this.direction),l=-li.dot(jr),c=li.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yo).addScaledVector(jr,u),f}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){Zo.subVectors(e,t),Qr.subVectors(n,t),$o.crossVectors(Zo,Qr);let a=this.direction.dot($o),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,t);let l=o*this.direction.dot(Qr.crossVectors(li,Qr));if(l<0)return null;let c=o*this.direction.dot(Zo.cross(li));if(c<0||l+c>a)return null;let h=-o*li.dot($o);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),a=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ep,t,Tp)}lookAt(t,e,n){let s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ci.crossVectors(n,$e),ci.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ci.crossVectors(n,$e)),ci.normalize(),ta.crossVectors($e,ci),s[0]=ci.x,s[4]=ta.x,s[8]=$e.x,s[1]=ci.y,s[5]=ta.y,s[9]=$e.y,s[2]=ci.z,s[6]=ta.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],S=n[7],_=n[11],L=n[15],A=s[0],C=s[4],R=s[8],M=s[12],y=s[1],T=s[5],D=s[9],P=s[13],O=s[2],W=s[6],H=s[10],Z=s[14],z=s[3],tt=s[7],nt=s[11],rt=s[15];return r[0]=a*A+o*y+l*O+c*z,r[4]=a*C+o*T+l*W+c*tt,r[8]=a*R+o*D+l*H+c*nt,r[12]=a*M+o*P+l*Z+c*rt,r[1]=h*A+d*y+u*O+f*z,r[5]=h*C+d*T+u*W+f*tt,r[9]=h*R+d*D+u*H+f*nt,r[13]=h*M+d*P+u*Z+f*rt,r[2]=g*A+x*y+m*O+p*z,r[6]=g*C+x*T+m*W+p*tt,r[10]=g*R+x*D+m*H+p*nt,r[14]=g*M+x*P+m*Z+p*rt,r[3]=w*A+S*y+_*O+L*z,r[7]=w*C+S*T+_*W+L*tt,r[11]=w*R+S*D+_*H+L*nt,r[15]=w*M+S*P+_*Z+L*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+x*(+e*l*f-e*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=d*m*c-x*u*c+x*l*f-o*m*f-d*l*p+o*u*p,S=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,_=h*x*c-g*d*c+g*o*f-a*x*f-h*o*p+a*d*p,L=g*d*l-h*x*l-g*o*u+a*x*u+h*o*m-a*d*m,A=e*w+n*S+s*_+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=w*C,t[1]=(x*u*r-d*m*r-x*s*f+n*m*f+d*s*p-n*u*p)*C,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*C,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*C,t[4]=S*C,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*C,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*f+e*l*f)*C,t[8]=_*C,t[9]=(g*d*r-h*x*r-g*n*f+e*x*f+h*n*p-e*d*p)*C,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*C,t[12]=L*C,t[13]=(h*x*s-g*d*s+g*n*u-e*x*u-h*n*m+e*d*m)*C,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*C,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,m=a*d,p=o*d,w=l*c,S=l*h,_=l*d,L=n.x,A=n.y,C=n.z;return s[0]=(1-(x+p))*L,s[1]=(f+_)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(u+p))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+S)*C,s[9]=(m-w)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ys.set(s[0],s[1],s[2]).length(),a=ys.set(s[4],s[5],s[6]).length(),o=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);let c=1/r,h=1/a,d=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Wn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,g;if(o===Wn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ca)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Wn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,f=(n+s)*h,g,x;if(o===Wn)g=(a+r)*d,x=-2*d;else if(o===Ca)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ys=new I,dn=new te,Ep=new I(0,0,0),Tp=new I(1,1,1),ci=new I,ta=new I,$e=new I,ru=new te,au=new gn,Xe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xe.DEFAULT_ORDER="XYZ";var Ua=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ap=0,ou=new I,vs=new gn,zn=new te,ea=new I,fr=new I,Rp=new I,Cp=new gn,lu=new I(1,0,0),cu=new I(0,1,0),hu=new I(0,0,1),uu={type:"added"},Ip={type:"removed"},Ms={type:"childadded",child:null},Jo={type:"childremoved",child:null},ve=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Xe,n=new gn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Ft}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ea.copy(t):ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(fr,ea,this.up):zn.lookAt(ea,fr,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(zn),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ip),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ve.DEFAULT_UP=new I(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new I,kn=new I,Ko=new I,Hn=new I,bs=new I,Ss=new I,du=new I,jo=new I,Qo=new I,tl=new I,el=new ge,nl=new ge,il=new ge,fi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),kn.subVectors(n,e),Ko.subVectors(t,e);let a=fn.dot(fn),o=fn.dot(kn),l=fn.dot(Ko),c=kn.dot(kn),h=kn.dot(Ko),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return el.setScalar(0),nl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(t,e),nl.fromBufferAttribute(t,n),il.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(el,r.x),a.addScaledVector(nl,r.y),a.addScaledVector(il,r.z),a}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),kn.subVectors(t,e),fn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),fn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;bs.subVectors(s,n),Ss.subVectors(r,n),jo.subVectors(t,n);let l=bs.dot(jo),c=Ss.dot(jo);if(l<=0&&c<=0)return e.copy(n);Qo.subVectors(t,s);let h=bs.dot(Qo),d=Ss.dot(Qo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bs,a);tl.subVectors(t,r);let f=bs.dot(tl),g=Ss.dot(tl);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ss,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return du.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(du,o);let p=1/(m+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(bs,a).addScaledVector(Ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},na={h:0,s:0,l:0};function sl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=th(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=sl(a,r,t+1/3),this.g=sl(a,r,t),this.b=sl(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=dd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Zt.fromWorkingColorSpace(De.copy(this),t),Math.round(Ce(De.r*255,0,255))*65536+Math.round(Ce(De.g*255,0,255))*256+Math.round(Ce(De.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(De.copy(this),e);let n=De.r,s=De.g,r=De.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ue){Zt.fromWorkingColorSpace(De.copy(this),t);let e=De.r,n=De.g,s=De.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(na);let n=wr(hi.h,na.h,e),s=wr(hi.s,na.s,e),r=wr(hi.l,na.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new Lt;Lt.NAMES=dd;var Pp=0,An=class extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Xn(),this.name="",this.blending=Us,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=Ml,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ml&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jn=class extends An{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new I,ia=new xt,Ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rc&&(t.usage=this.usage),t}};var Na=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fa=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var zt=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lp=0,sn=new te,rl=new ve,ws=new I,Je=new $n,pr=new $n,Te=new I,fe=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ud(t)?Fa:Na)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Je.min,pr.min),Je.expandByPoint(Te),Te.addVectors(Je.max,pr.max),Je.expandByPoint(Te)):(Je.expandByPoint(pr.min),Je.expandByPoint(pr.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(t,c),Te.add(ws)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new I,l[R]=new I;let c=new I,h=new I,d=new I,u=new xt,f=new xt,g=new xt,x=new I,m=new I;function p(R,M,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,R),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[R].add(x),o[M].add(x),o[y].add(x),l[R].add(m),l[M].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,M=w.length;R<M;++R){let y=w[R],T=y.start,D=y.count;for(let P=T,O=T+D;P<O;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let S=new I,_=new I,L=new I,A=new I;function C(R){L.fromBufferAttribute(s,R),A.copy(L);let M=o[R];S.copy(M),S.sub(L.multiplyScalar(L.dot(M))).normalize(),_.crossVectors(A,M);let T=_.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,T)}for(let R=0,M=w.length;R<M;++R){let y=w[R],T=y.start,D=y.count;for(let P=T,O=T+D;P<O;P+=3)C(t.getX(P+0)),C(t.getX(P+1)),C(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ge(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new te,Li=new Da,sa=new _i,pu=new I,ra=new I,aa=new I,oa=new I,al=new I,la=new I,mu=new I,ca=new I,kt=class extends ve{constructor(t=new fe,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(al.fromBufferAttribute(d,t),a?la.addScaledVector(al,h):la.addScaledVector(al.sub(e),h))}e.add(la)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(sa.containsPoint(Li.origin)===!1&&(Li.intersectSphere(sa,pu)===null||Li.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),Li.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=w,L=S;_<L;_+=3){let A=o.getX(_),C=o.getX(_+1),R=o.getX(_+2);s=ha(this,p,t,n,c,h,d,A,C,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);s=ha(this,a,t,n,c,h,d,w,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=w,L=S;_<L;_+=3){let A=_,C=_+1,R=_+2;s=ha(this,p,t,n,c,h,d,A,C,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=m,S=m+1,_=m+2;s=ha(this,a,t,n,c,h,d,w,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Dp(i,t,e,n,s,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===gi,o),l===null)return null;ca.copy(o),ca.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ca);return c<e.near||c>e.far?null:{distance:c,point:ca.clone(),object:i}}function ha(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ra),i.getVertexPosition(l,aa),i.getVertexPosition(c,oa);let h=Dp(i,t,e,n,ra,aa,oa,mu);if(h){let d=new I;fi.getBarycoord(mu,ra,aa,oa,d),s&&(h.uv=fi.getInterpolatedAttribute(s,o,l,c,d,new xt)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,l,c,d,new xt)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};fi.getNormal(ra,aa,oa,u.normal),h.face=u,h.barycoord=d}return h}var an=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function g(x,m,p,w,S,_,L,A,C,R,M){let y=_/C,T=L/R,D=_/2,P=L/2,O=A/2,W=C+1,H=R+1,Z=0,z=0,tt=new I;for(let nt=0;nt<H;nt++){let rt=nt*T-P;for(let wt=0;wt<W;wt++){let Et=wt*y-D;tt[x]=Et*w,tt[m]=rt*S,tt[p]=O,c.push(tt.x,tt.y,tt.z),tt[x]=0,tt[m]=0,tt[p]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(wt/C),d.push(1-nt/R),Z+=1}}for(let nt=0;nt<R;nt++)for(let rt=0;rt<C;rt++){let wt=u+rt+W*nt,Et=u+rt+W*(nt+1),X=u+(rt+1)+W*(nt+1),Q=u+(rt+1)+W*nt;l.push(wt,Et,Q),l.push(Et,X,Q),z+=6}o.addGroup(f,z,M),f+=z,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){let t={};for(let e=0;e<i.length;e++){let n=Gs(i[e]);for(let s in n)t[s]=n[s]}return t}function Up(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Np={clone:Gs,merge:Be},Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends An{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=Up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Oa=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new I,gu=new xt,xu=new xt,ze=class extends Oa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,gu,xu),e.subVectors(xu,gu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Es=-90,Ts=1,cc=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(Es,Ts,t,e);s.layers=this.layers,this.add(s);let r=new ze(Es,Ts,t,e);r.layers=this.layers,this.add(r);let a=new ze(Es,Ts,t,e);a.layers=this.layers,this.add(a);let o=new ze(Es,Ts,t,e);o.layers=this.layers,this.add(o);let l=new ze(Es,Ts,t,e);l.layers=this.layers,this.add(l);let c=new ze(Es,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ba=class extends We{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hc=class extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ba(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new an(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:pi});r.uniforms.tEquirect.value=e;let a=new kt(s,r),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=En),new cc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ol=new I,Bp=new I,zp=new Ft,Gn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ol.subVectors(n,e).cross(Bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zp.getNormalMatrix(t),s=this.coplanarPoint(ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new _i,ua=new I,Ir=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],w=s[13],S=s[14],_=s[15];if(n[0].setComponents(l-r,u-c,m-f,_-p).normalize(),n[1].setComponents(l+r,u+c,m+f,_+p).normalize(),n[2].setComponents(l+a,u+h,m+g,_+w).normalize(),n[3].setComponents(l-a,u-h,m-g,_-w).normalize(),n[4].setComponents(l-o,u-d,m-x,_-S).normalize(),e===Wn)n[5].setComponents(l+o,u+d,m+x,_+S).normalize();else if(e===Ca)n[5].setComponents(o,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ua.x=s.normal.x>0?t.max.x:t.min.x,ua.y=s.normal.y>0?t.max.y:t.min.y,ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function kp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Cn=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let w=p*u-a;for(let S=0;S<c;S++){let _=S*d-r;g.push(_,-w,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let S=w+c*p,_=w+c*(p+1),L=w+1+c*(p+1),A=w+1+c*p;f.push(S,_,A),f.push(_,L,A)}this.setIndex(f),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,um=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,km=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ng=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$g=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Hp,alphahash_pars_fragment:Vp,alphamap_fragment:Gp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:Zp,batching_pars_vertex:$p,batching_vertex:Jp,begin_vertex:Kp,beginnormal_vertex:jp,bsdfs:Qp,iridescence_fragment:tm,bumpmap_pars_fragment:em,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:am,color_pars_fragment:om,color_pars_vertex:lm,color_vertex:cm,common:hm,cube_uv_reflection_fragment:um,defaultnormal_vertex:dm,displacementmap_pars_vertex:fm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:xm,colorspace_pars_fragment:_m,envmap_fragment:ym,envmap_common_pars_fragment:vm,envmap_pars_fragment:Mm,envmap_pars_vertex:bm,envmap_physical_pars_fragment:Dm,envmap_vertex:Sm,fog_vertex:wm,fog_pars_vertex:Em,fog_fragment:Tm,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Pm,lights_pars_begin:Lm,lights_toon_fragment:Um,lights_toon_pars_fragment:Nm,lights_phong_fragment:Fm,lights_phong_pars_fragment:Om,lights_physical_fragment:Bm,lights_physical_pars_fragment:zm,lights_fragment_begin:km,lights_fragment_maps:Hm,lights_fragment_end:Vm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:Zm,map_particle_fragment:$m,map_particle_pars_fragment:Jm,metalnessmap_fragment:Km,metalnessmap_pars_fragment:jm,morphinstance_vertex:Qm,morphcolor_vertex:tg,morphnormal_vertex:eg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:sg,normal_fragment_maps:rg,normal_pars_fragment:ag,normal_pars_vertex:og,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:ug,clearcoat_pars_fragment:dg,iridescence_pars_fragment:fg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:xg,dithering_fragment:_g,dithering_pars_fragment:yg,roughnessmap_fragment:vg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:Sg,shadowmap_vertex:wg,shadowmask_pars_fragment:Eg,skinbase_vertex:Tg,skinning_pars_vertex:Ag,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Ig,specularmap_pars_fragment:Pg,tonemapping_fragment:Lg,tonemapping_pars_fragment:Dg,transmission_fragment:Ug,transmission_pars_fragment:Ng,uv_pars_fragment:Fg,uv_pars_vertex:Og,uv_vertex:Bg,worldpos_vertex:zg,background_vert:kg,background_frag:Hg,backgroundCube_vert:Vg,backgroundCube_frag:Gg,cube_vert:Wg,cube_frag:Xg,depth_vert:qg,depth_frag:Yg,distanceRGBA_vert:Zg,distanceRGBA_frag:$g,equirect_vert:Jg,equirect_frag:Kg,linedashed_vert:jg,linedashed_frag:Qg,meshbasic_vert:t0,meshbasic_frag:e0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:s0,meshmatcap_frag:r0,meshnormal_vert:a0,meshnormal_frag:o0,meshphong_vert:l0,meshphong_frag:c0,meshphysical_vert:h0,meshphysical_frag:u0,meshtoon_vert:d0,meshtoon_frag:f0,points_vert:p0,points_frag:m0,shadow_vert:g0,shadow_frag:x0,sprite_vert:_0,sprite_frag:y0},ot={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},wn={basic:{uniforms:Be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Be([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Be([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Be([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Be([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Be([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Be([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Be([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Be([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Be([ot.common,ot.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Be([ot.lights,ot.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};wn.physical={uniforms:Be([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var da={r:0,b:0,g:0},Ui=new Xe,v0=new te;function M0(i,t,e,n,s,r,a){let o=new Lt(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function x(w){let S=!1,_=g(w);_===null?p(o,l):_&&_.isColor&&(p(_,1),S=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,S){let _=g(S);_&&(_.isCubeTexture||_.mapping===ao)?(h===void 0&&(h=new kt(new an(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Gs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(S.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(Ui)),h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ne,(d!==_||u!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new kt(new Cn(2,2),new Rn({name:"BackgroundMaterial",uniforms:Gs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ne,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,S){w.getRGB(da,fd(i)),n.buffers.color.setClear(da.r,da.g,da.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:x,addToRenderList:m}}function b0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(y,T,D,P,O){let W=!1,H=d(P,D,T);r!==H&&(r=H,c(r.object)),W=f(y,P,D,O),W&&g(y,P,D,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(y,T,D,P),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,T,D){let P=D.wireframe===!0,O=n[y.id];O===void 0&&(O={},n[y.id]=O);let W=O[T.id];W===void 0&&(W={},O[T.id]=W);let H=W[P];return H===void 0&&(H=u(l()),W[P]=H),H}function u(y){let T=[],D=[],P=[];for(let O=0;O<e;O++)T[O]=0,D[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:P,object:y,attributes:{},index:null}}function f(y,T,D,P){let O=r.attributes,W=T.attributes,H=0,Z=D.getAttributes();for(let z in Z)if(Z[z].location>=0){let nt=O[z],rt=W[z];if(rt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),nt===void 0||nt.attribute!==rt||rt&&nt.data!==rt.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(y,T,D,P){let O={},W=T.attributes,H=0,Z=D.getAttributes();for(let z in Z)if(Z[z].location>=0){let nt=W[z];nt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor));let rt={};rt.attribute=nt,nt&&nt.data&&(rt.data=nt.data),O[z]=rt,H++}r.attributes=O,r.attributesNum=H,r.index=P}function x(){let y=r.newAttributes;for(let T=0,D=y.length;T<D;T++)y[T]=0}function m(y){p(y,0)}function p(y,T){let D=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;D[y]=1,P[y]===0&&(i.enableVertexAttribArray(y),P[y]=1),O[y]!==T&&(i.vertexAttribDivisor(y,T),O[y]=T)}function w(){let y=r.newAttributes,T=r.enabledAttributes;for(let D=0,P=T.length;D<P;D++)T[D]!==y[D]&&(i.disableVertexAttribArray(D),T[D]=0)}function S(y,T,D,P,O,W,H){H===!0?i.vertexAttribIPointer(y,T,D,O,W):i.vertexAttribPointer(y,T,D,P,O,W)}function _(y,T,D,P){x();let O=P.attributes,W=D.getAttributes(),H=T.defaultAttributeValues;for(let Z in W){let z=W[Z];if(z.location>=0){let tt=O[Z];if(tt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){let nt=tt.normalized,rt=tt.itemSize,wt=t.get(tt);if(wt===void 0)continue;let Et=wt.buffer,X=wt.type,Q=wt.bytesPerElement,lt=X===i.INT||X===i.UNSIGNED_INT||tt.gpuType===qc;if(tt.isInterleavedBufferAttribute){let at=tt.data,At=at.stride,St=tt.offset;if(at.isInstancedInterleavedBuffer){for(let It=0;It<z.locationSize;It++)p(z.location+It,at.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let It=0;It<z.locationSize;It++)m(z.location+It);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let It=0;It<z.locationSize;It++)S(z.location+It,rt/z.locationSize,X,nt,At*Q,(St+rt/z.locationSize*It)*Q,lt)}else{if(tt.isInstancedBufferAttribute){for(let at=0;at<z.locationSize;at++)p(z.location+at,tt.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let at=0;at<z.locationSize;at++)m(z.location+at);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let at=0;at<z.locationSize;at++)S(z.location+at,rt/z.locationSize,X,nt,rt*Q,rt/z.locationSize*at*Q,lt)}}else if(H!==void 0){let nt=H[Z];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(z.location,nt);break;case 3:i.vertexAttrib3fv(z.location,nt);break;case 4:i.vertexAttrib4fv(z.location,nt);break;default:i.vertexAttrib1fv(z.location,nt)}}}}w()}function L(){R();for(let y in n){let T=n[y];for(let D in T){let P=T[D];for(let O in P)h(P[O].object),delete P[O];delete T[D]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let T=n[y.id];for(let D in T){let P=T[D];for(let O in P)h(P[O].object),delete P[O];delete T[D]}delete n[y.id]}function C(y){for(let T in n){let D=n[T];if(D[y.id]===void 0)continue;let P=D[y.id];for(let O in P)h(P[O].object),delete P[O];delete D[y.id]}}function R(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function S0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function w0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let R=C===Ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Tn&&!R)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:L,maxSamples:A}}function E0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Gn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,S=w*4,_=p.clippingState||null;l.value=_,_=h(g,u,S,f);for(let L=0;L!==S;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==x;++S,_+=4)a.copy(d[S]).applyMatrix4(w,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function T0(i){let t=new WeakMap;function e(a,o){return o===Cl?a.mapping=zs:o===Il&&(a.mapping=ks),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Cl||o===Il)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new hc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var za=class extends Oa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ds=4,_u=[.125,.215,.35,.446,.526,.582],Bi=20,ll=new za,yu=new Lt,cl=null,hl=0,ul=0,dl=!1,Fi=(1+Math.sqrt(5))/2,As=1/Fi,vu=[new I(-Fi,As,0),new I(Fi,As,0),new I(-As,0,Fi),new I(As,0,Fi),new I(0,Fi,-As),new I(0,Fi,As),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ka=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cl,hl,ul),this._renderer.xr.enabled=dl,t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ur,format:mn,colorSpace:$s,depthBuffer:!1},s=Mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(r)),this._blurMaterial=R0(r,t,e)}return s}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,n,s){let o=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(yu),h.toneMapping=mi,h.autoClear=!1;let f=new Jn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new kt(new an,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(yu),x=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let S=this._cubeSize;fa(s,w*S,p>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zs||t.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;fa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ll)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vu[(s-r-1)%vu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new kt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);let p=[],w=0;for(let C=0;C<Bi;++C){let R=C/x,M=Math.exp(-R*R/2);p.push(M),C===0?w+=M:C<m&&(w+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;let _=this._sizeLods[s],L=3*_*(s>S-Ds?s-S+Ds:0),A=4*(this._cubeSize-_);fa(e,L,A,3*_,2*_),l.setRenderTarget(e),l.render(d,ll)}};function A0(i){let t=[],e=[],n=[],s=i,r=i-Ds+1+_u.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ds?l=_u[a-i+Ds-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),S=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,R=A>2?0:-1,M=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];w.set(M,x*g*A),S.set(u,m*g*A);let y=[A,A,A,A,A,A];_.set(y,p*g*A)}let L=new fe;L.setAttribute("position",new Ge(w,x)),L.setAttribute("uv",new Ge(S,m)),L.setAttribute("faceIndex",new Ge(_,p)),t.push(L),s>Ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mu(i,t,e){let n=new Zn(i,t,e);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function R0(i,t,e){let n=new Float32Array(Bi),s=new I(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function bu(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Su(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Cl||l===Il,h=l===zs||l===ks;if(c||h){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ka(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ka(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function I0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function P0(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let S=0,_=w.length;S<_;S+=3){let L=w[S+0],A=w[S+1],C=w[S+2];u.push(L,A,A,C,C,L)}}else if(g!==void 0){let w=g.array;x=g.version;for(let S=0,_=w.length/3-1;S<_;S+=3){let L=S+0,A=S+1,C=S+2;u.push(L,A,A,C,C,L)}}else return;let m=new(ud(u)?Fa:Na)(u,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function L0(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function D0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function U0(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=o.attributes.position.count*S,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*L*4*d),C=new La(A,_,L,d);C.type=Tn,C.needsUpdate=!0;let R=S*4;for(let y=0;y<d;y++){let T=m[y],D=p[y],P=w[y],O=_*L*4*y;for(let W=0;W<T.count;W++){let H=W*R;f===!0&&(s.fromBufferAttribute(T,W),A[O+H+0]=s.x,A[O+H+1]=s.y,A[O+H+2]=s.z,A[O+H+3]=0),g===!0&&(s.fromBufferAttribute(D,W),A[O+H+4]=s.x,A[O+H+5]=s.y,A[O+H+6]=s.z,A[O+H+7]=0),x===!0&&(s.fromBufferAttribute(P,W),A[O+H+8]=s.x,A[O+H+9]=s.y,A[O+H+10]=s.z,A[O+H+11]=P.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new xt(_,L)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function N0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ha=class extends We{constructor(t,e,n,s,r,a,o,l,c,h=Ns){if(h!==Ns&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ns&&(n=Vi),n===void 0&&h===Vs&&(n=Hs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},md=new We,wu=new Ha(1,1),gd=new La,xd=new lc,_d=new Ba,Eu=[],Tu=[],Au=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function Js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Eu[s];if(r===void 0&&(r=new Float32Array(s),Eu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function co(i,t){let e=Tu[t];e===void 0&&(e=new Int32Array(t),Tu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function F0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function k0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Cu.set(n),i.uniformMatrix2fv(this.addr,!1,Cu),be(e,n)}}function H0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Ru.set(n),i.uniformMatrix3fv(this.addr,!1,Ru),be(e,n)}}function V0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Au.set(n),i.uniformMatrix4fv(this.addr,!1,Au),be(e,n)}}function G0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function K0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wu.compareFunction=hd,r=wu):r=md,e.setTexture2D(t||r,s)}function j0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xd,s)}function Q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_d,s)}function tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function ex(i){switch(i){case 5126:return F0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return k0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return $0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return tx}}function nx(i,t){i.uniform1fv(this.addr,t)}function ix(i,t){let e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function sx(i,t){let e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function rx(i,t){let e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function ax(i,t){let e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ox(i,t){let e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lx(i,t){let e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cx(i,t){i.uniform1iv(this.addr,t)}function hx(i,t){i.uniform2iv(this.addr,t)}function ux(i,t){i.uniform3iv(this.addr,t)}function dx(i,t){i.uniform4iv(this.addr,t)}function fx(i,t){i.uniform1uiv(this.addr,t)}function px(i,t){i.uniform2uiv(this.addr,t)}function mx(i,t){i.uniform3uiv(this.addr,t)}function gx(i,t){i.uniform4uiv(this.addr,t)}function xx(i,t,e){let n=this.cache,s=t.length,r=co(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||md,r[a])}function _x(i,t,e){let n=this.cache,s=t.length,r=co(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xd,r[a])}function yx(i,t,e){let n=this.cache,s=t.length,r=co(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||_d,r[a])}function vx(i,t,e){let n=this.cache,s=t.length,r=co(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gd,r[a])}function Mx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ax;case 35675:return ox;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return vx}}var uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ex(e.type)}},dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mx(e.type)}},fc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},fl=/(\w+)(\])?(\[|\.)?/g;function Iu(i,t){i.seq.push(t),i.map[t.id]=t}function bx(i,t,e){let n=i.name,s=n.length;for(fl.lastIndex=0;;){let r=fl.exec(n),a=fl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Iu(e,c===void 0?new uc(o,i,t):new dc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new fc(o),Iu(e,d)),e=d}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);bx(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Pu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Sx=37297,wx=0;function Ex(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Lu=new Ft;function Tx(i){Zt._getMatrix(Lu,Zt.workingColorSpace,i);let t=`mat3( ${Lu.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case oo:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Du(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ex(i.getShaderSource(t),a)}else return s}function Ax(i,t){let e=Tx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rx(i,t){let e;switch(t){case zf:e="Linear";break;case kf:e="Reinhard";break;case Hf:e="Cineon";break;case Xc:e="ACESFilmic";break;case Gf:e="AgX";break;case Wf:e="Neutral";break;case Vf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pa=new I;function Cx(){Zt.getLuminanceCoefficients(pa);let i=pa.x.toFixed(4),t=pa.y.toFixed(4),e=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ix(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Px(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function br(i){return i!==""}function Uu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(Dx,Nx)}var Ux=new Map;function Nx(i,t){let e=Bt[t];if(e===void 0){let n=Ux.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}var Fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(i){return i.replace(Fx,Ox)}function Ox(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ou(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function zx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case ks:t="ENVMAP_TYPE_CUBE";break;case ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ks&&(t="ENVMAP_MODE_REFRACTION"),t}function Hx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wc:t="ENVMAP_BLENDING_MULTIPLY";break;case Of:t="ENVMAP_BLENDING_MIX";break;case Bf:t="ENVMAP_BLENDING_ADD";break}return t}function Vx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Bx(e),c=zx(e),h=kx(e),d=Hx(e),u=Vx(e),f=Ix(e),g=Px(r),x=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),p.length>0&&(p+=`
`)):(m=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Bt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Ax("linearToOutputTexel",e.outputColorSpace),Cx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),a=pc(a),a=Uu(a,e),a=Nu(a,e),o=pc(o),o=Uu(o,e),o=Nu(o,e),a=Fu(a),o=Fu(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+m+a,_=w+p+o,L=Pu(s,s.VERTEX_SHADER,S),A=Pu(s,s.FRAGMENT_SHADER,_);s.attachShader(x,L),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(T){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x).trim(),P=s.getShaderInfoLog(L).trim(),O=s.getShaderInfoLog(A).trim(),W=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,A);else{let Z=Du(s,L,"vertex"),z=Du(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+Z+`
`+z)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(P===""||O==="")&&(H=!1);H&&(T.diagnostics={runnable:W,programLog:D,vertexShader:{log:P,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(L),s.deleteShader(A),R=new Os(s,x),M=Lx(s,x)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Sx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}var Wx=0,mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gc(t),e.set(t,n)),n}},gc=class{constructor(t){this.id=Wx++,this.code=t,this.usedTimes=0}};function Xx(i,t,e,n,s,r,a){let o=new Ua,l=new mc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,T,D,P){let O=D.fog,W=P.geometry,H=M.isMeshStandardMaterial?D.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),z=Z&&Z.mapping===ao?Z.image.height:null,tt=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=nt!==void 0?nt.length:0,wt=0;W.morphAttributes.position!==void 0&&(wt=1),W.morphAttributes.normal!==void 0&&(wt=2),W.morphAttributes.color!==void 0&&(wt=3);let Et,X,Q,lt;if(tt){let jt=wn[tt];Et=jt.vertexShader,X=jt.fragmentShader}else Et=M.vertexShader,X=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),lt=l.getFragmentShaderID(M);let at=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),St=P.isInstancedMesh===!0,It=P.isBatchedMesh===!0,de=!!M.map,qt=!!M.matcap,xe=!!Z,B=!!M.aoMap,en=!!M.lightMap,Gt=!!M.bumpMap,Wt=!!M.normalMap,Rt=!!M.displacementMap,ae=!!M.emissiveMap,Tt=!!M.metalnessMap,E=!!M.roughnessMap,v=M.anisotropy>0,k=M.clearcoat>0,J=M.dispersion>0,et=M.iridescence>0,Y=M.sheen>0,Mt=M.transmission>0,ht=v&&!!M.anisotropyMap,pt=k&&!!M.clearcoatMap,Yt=k&&!!M.clearcoatNormalMap,it=k&&!!M.clearcoatRoughnessMap,mt=et&&!!M.iridescenceMap,Ct=et&&!!M.iridescenceThicknessMap,Pt=Y&&!!M.sheenColorMap,gt=Y&&!!M.sheenRoughnessMap,Xt=!!M.specularMap,Ot=!!M.specularColorMap,ie=!!M.specularIntensityMap,U=Mt&&!!M.transmissionMap,ct=Mt&&!!M.thicknessMap,q=!!M.gradientMap,K=!!M.alphaMap,ft=M.alphaTest>0,ut=!!M.alphaHash,Ut=!!M.extensions,me=mi;M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(me=i.toneMapping);let Pe={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Et,fragmentShader:X,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:lt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:It,batchingColor:It&&P._colorsTexture!==null,instancing:St,instancingColor:St&&P.instanceColor!==null,instancingMorph:St&&P.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:$s,alphaToCoverage:!!M.alphaToCoverage,map:de,matcap:qt,envMap:xe,envMapMode:xe&&Z.mapping,envMapCubeUVHeight:z,aoMap:B,lightMap:en,bumpMap:Gt,normalMap:Wt,displacementMap:u&&Rt,emissiveMap:ae,normalMapObjectSpace:Wt&&M.normalMapType===Zf,normalMapTangentSpace:Wt&&M.normalMapType===Qc,metalnessMap:Tt,roughnessMap:E,anisotropy:v,anisotropyMap:ht,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:it,dispersion:J,iridescence:et,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:Y,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:ie,transmission:Mt,transmissionMap:U,thicknessMap:ct,gradientMap:q,opaque:M.transparent===!1&&M.blending===Us&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:ut,combine:M.combine,mapUv:de&&x(M.map.channel),aoMapUv:B&&x(M.aoMap.channel),lightMapUv:en&&x(M.lightMap.channel),bumpMapUv:Gt&&x(M.bumpMap.channel),normalMapUv:Wt&&x(M.normalMap.channel),displacementMapUv:Rt&&x(M.displacementMap.channel),emissiveMapUv:ae&&x(M.emissiveMap.channel),metalnessMapUv:Tt&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:ht&&x(M.anisotropyMap.channel),clearcoatMapUv:pt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(M.sheenRoughnessMap.channel),specularMapUv:Xt&&x(M.specularMap.channel),specularColorMapUv:Ot&&x(M.specularColorMap.channel),specularIntensityMapUv:ie&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:ct&&x(M.thicknessMap.channel),alphaMapUv:K&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Wt||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!W.attributes.uv&&(de||K),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:P.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:de&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ne,decodeVideoTextureEmissive:ae&&M.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(M.emissiveMap.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rn,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)y.push(T),y.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(w(y,M),S(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function S(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){let y=g[M.type],T;if(y){let D=wn[y];T=Np.clone(D.uniforms)}else T=M.uniforms;return T}function L(M,y){let T;for(let D=0,P=h.length;D<P;D++){let O=h[D];if(O.cacheKey===y){T=O,++T.usedTimes;break}}return T===void 0&&(T=new Gx(i,y,M,r),h.push(T)),T}function A(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:R}}function qx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function o(d,u,f,g,x,m){let p=a(d,u,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,g,x,m){let p=a(d,u,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||Yx),n.length>1&&n.sort(u||Bu),s.length>1&&s.sort(u||Bu)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Zx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new zu,i.set(n,[a])):s>=r.length?(a=new zu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Lt};break;case"SpotLight":e={position:new I,direction:new I,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Jx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Kx=0;function jx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qx(i){let t=new $x,e=Jx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new te,a=new te;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,S=0,_=0,L=0,A=0,C=0;c.sort(jx);for(let M=0,y=c.length;M<y;M++){let T=c[M],D=T.color,P=T.intensity,O=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=D.r*P,d+=D.g*P,u+=D.b*P;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],P);C++}else if(T.isDirectionalLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z=T.shadow,z=e.get(T);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=T.shadow.matrix,w++}n.directional[f]=H,f++}else if(T.isSpotLight){let H=t.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(D).multiplyScalar(P),H.distance=O,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[x]=H;let Z=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,Z.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[x]=Z.matrix,T.castShadow){let z=e.get(T);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=W,_++}x++}else if(T.isRectAreaLight){let H=t.get(T);H.color.copy(D).multiplyScalar(P),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=H,m++}else if(T.isPointLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let Z=T.shadow,z=e.get(T);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=T.shadow.matrix,S++}n.point[g]=H,g++}else if(T.isHemisphereLight){let H=t.get(T);H.skyColor.copy(T.color).multiplyScalar(P),H.groundColor.copy(T.groundColor).multiplyScalar(P),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==w||R.numPointShadows!==S||R.numSpotShadows!==_||R.numSpotMaps!==L||R.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=w,R.numPointShadows=S,R.numSpotShadows=_,R.numSpotMaps=L,R.numLightProbes=C,n.version=Kx++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let S=c[p];if(S.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(S.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function ku(i){let t=new Qx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function t_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ku(i),t.set(s,[o])):r>=a.length?(o=new ku(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var xc=class extends An{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_c=class extends An{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i_(i,t,e){let n=new Ir,s=new xt,r=new xt,a=new ge,o=new xc({depthPacking:Yf}),l=new _c,c={},h=e.maxTextureSize,d={[gi]:Ve,[Ve]:gi,[rn]:rn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:e_,fragmentShader:n_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let p=this.type;this.render=function(A,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(pi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let P=p!==Vn&&this.type===Vn,O=p===Vn&&this.type!==Vn;for(let W=0,H=A.length;W<H;W++){let Z=A[W],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let tt=z.getFrameExtents();if(s.multiply(tt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,z.mapSize.y=r.y)),z.map===null||P===!0||O===!0){let rt=this.type!==Vn?{minFilter:Ke,magFilter:Ke}:{};z.map!==null&&z.map.dispose(),z.map=new Zn(s.x,s.y,rt),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let nt=z.getViewportCount();for(let rt=0;rt<nt;rt++){let wt=z.getViewport(rt);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),D.viewport(a),z.updateMatrices(Z,rt),n=z.getFrustum(),_(C,R,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===Vn&&w(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,T)};function w(A,C){let R=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,R,u,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,R,f,x,null)}function S(A,C,R,M){let y=null,T=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=R.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let D=y.uuid,P=C.uuid,O=c[D];O===void 0&&(O={},c[D]=O);let W=O[P];W===void 0&&(W=y.clone(),O[P]=W,C.addEventListener("dispose",L)),y=W}if(y.visible=C.visible,y.wireframe=C.wireframe,M===Vn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=i.properties.get(y);D.light=R}return y}function _(A,C,R,M,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let P=t.update(A),O=A.material;if(Array.isArray(O)){let W=P.groups;for(let H=0,Z=W.length;H<Z;H++){let z=W[H],tt=O[z.materialIndex];if(tt&&tt.visible){let nt=S(A,tt,M,y);A.onBeforeShadow(i,A,C,R,P,nt,z),i.renderBufferDirect(R,null,P,nt,A,z),A.onAfterShadow(i,A,C,R,P,nt,z)}}}else if(O.visible){let W=S(A,O,M,y);A.onBeforeShadow(i,A,C,R,P,W,null),i.renderBufferDirect(R,null,P,W,A,null),A.onAfterShadow(i,A,C,R,P,W,null)}}let D=A.children;for(let P=0,O=D.length;P<O;P++)_(D[P],C,R,M,y)}function L(A){A.target.removeEventListener("dispose",L);for(let R in c){let M=c[R],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var s_={[bl]:Sl,[wl]:Al,[El]:Rl,[Bs]:Tl,[Sl]:bl,[Al]:wl,[Rl]:El,[Tl]:Bs};function r_(i,t){function e(){let U=!1,ct=new ge,q=null,K=new ge(0,0,0,0);return{setMask:function(ft){q!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),q=ft)},setLocked:function(ft){U=ft},setClear:function(ft,ut,Ut,me,Pe){Pe===!0&&(ft*=me,ut*=me,Ut*=me),ct.set(ft,ut,Ut,me),K.equals(ct)===!1&&(i.clearColor(ft,ut,Ut,me),K.copy(ct))},reset:function(){U=!1,q=null,K.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,q=null,K=null,ft=null;return{setReversed:function(ut){if(ct!==ut){let Ut=t.get("EXT_clip_control");ct?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let me=ft;ft=null,this.setClear(me)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?at(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(ut){q!==ut&&!U&&(i.depthMask(ut),q=ut)},setFunc:function(ut){if(ct&&(ut=s_[ut]),K!==ut){switch(ut){case bl:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case Tl:i.depthFunc(i.GEQUAL);break;case Al:i.depthFunc(i.GREATER);break;case Rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ut}},setLocked:function(ut){U=ut},setClear:function(ut){ft!==ut&&(ct&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){U=!1,q=null,K=null,ft=null,ct=!1}}}function s(){let U=!1,ct=null,q=null,K=null,ft=null,ut=null,Ut=null,me=null,Pe=null;return{setTest:function(jt){U||(jt?at(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(jt){ct!==jt&&!U&&(i.stencilMask(jt),ct=jt)},setFunc:function(jt,cn,Nn){(q!==jt||K!==cn||ft!==Nn)&&(i.stencilFunc(jt,cn,Nn),q=jt,K=cn,ft=Nn)},setOp:function(jt,cn,Nn){(ut!==jt||Ut!==cn||me!==Nn)&&(i.stencilOp(jt,cn,Nn),ut=jt,Ut=cn,me=Nn)},setLocked:function(jt){U=jt},setClear:function(jt){Pe!==jt&&(i.clearStencil(jt),Pe=jt)},reset:function(){U=!1,ct=null,q=null,K=null,ft=null,ut=null,Ut=null,me=null,Pe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,S=null,_=null,L=null,A=null,C=new Lt(0,0,0),R=0,M=!1,y=null,T=null,D=null,P=null,O=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=Z>=2);let tt=null,nt={},rt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Et=new ge().fromArray(rt),X=new ge().fromArray(wt);function Q(U,ct,q,K){let ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(U,ut),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<q;Ut++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ct+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}let lt={};lt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(Bs),Gt(!1),Wt(Vh),at(i.CULL_FACE),B(pi);function at(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function At(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function St(U,ct){return d[U]!==ct?(i.bindFramebuffer(U,ct),d[U]=ct,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ct),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function It(U,ct){let q=f,K=!1;if(U){q=u.get(ct),q===void 0&&(q=[],u.set(ct,q));let ft=U.textures;if(q.length!==ft.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ut=ft.length;ut<Ut;ut++)q[ut]=i.COLOR_ATTACHMENT0+ut;q.length=ft.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function de(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let qt={[Oi]:i.FUNC_ADD,[vf]:i.FUNC_SUBTRACT,[Mf]:i.FUNC_REVERSE_SUBTRACT};qt[bf]=i.MIN,qt[Sf]=i.MAX;let xe={[wf]:i.ZERO,[Ef]:i.ONE,[Tf]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[Lf]:i.SRC_ALPHA_SATURATE,[If]:i.DST_COLOR,[Rf]:i.DST_ALPHA,[Af]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[Pf]:i.ONE_MINUS_DST_COLOR,[Cf]:i.ONE_MINUS_DST_ALPHA,[Df]:i.CONSTANT_COLOR,[Uf]:i.ONE_MINUS_CONSTANT_COLOR,[Nf]:i.CONSTANT_ALPHA,[Ff]:i.ONE_MINUS_CONSTANT_ALPHA};function B(U,ct,q,K,ft,ut,Ut,me,Pe,jt){if(U===pi){x===!0&&(At(i.BLEND),x=!1);return}if(x===!1&&(at(i.BLEND),x=!0),U!==yf){if(U!==m||jt!==M){if((p!==Oi||_!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,_=Oi),jt)switch(U){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gh:i.blendFunc(i.ONE,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,S=null,L=null,A=null,C.set(0,0,0),R=0,m=U,M=jt}return}ft=ft||ct,ut=ut||q,Ut=Ut||K,(ct!==p||ft!==_)&&(i.blendEquationSeparate(qt[ct],qt[ft]),p=ct,_=ft),(q!==w||K!==S||ut!==L||Ut!==A)&&(i.blendFuncSeparate(xe[q],xe[K],xe[ut],xe[Ut]),w=q,S=K,L=ut,A=Ut),(me.equals(C)===!1||Pe!==R)&&(i.blendColor(me.r,me.g,me.b,Pe),C.copy(me),R=Pe),m=U,M=!1}function en(U,ct){U.side===rn?At(i.CULL_FACE):at(i.CULL_FACE);let q=U.side===Ve;ct&&(q=!q),Gt(q),U.blending===Us&&U.transparent===!1?B(pi):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let K=U.stencilWrite;o.setTest(K),K&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function Wt(U){U!==xf?(at(i.CULL_FACE),U!==T&&(U===Vh?i.cullFace(i.BACK):U===_f?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),T=U}function Rt(U){U!==D&&(H&&i.lineWidth(U),D=U)}function ae(U,ct,q){U?(at(i.POLYGON_OFFSET_FILL),(P!==ct||O!==q)&&(i.polygonOffset(ct,q),P=ct,O=q)):At(i.POLYGON_OFFSET_FILL)}function Tt(U){U?at(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+W-1),tt!==U&&(i.activeTexture(U),tt=U)}function v(U,ct,q){q===void 0&&(tt===null?q=i.TEXTURE0+W-1:q=tt);let K=nt[q];K===void 0&&(K={type:void 0,texture:void 0},nt[q]=K),(K.type!==U||K.texture!==ct)&&(tt!==q&&(i.activeTexture(q),tt=q),i.bindTexture(U,ct||lt[U]),K.type=U,K.texture=ct)}function k(){let U=nt[tt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(U){Et.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Et.copy(U))}function gt(U){X.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function Xt(U,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let K=q.get(U);K===void 0&&(K=i.getUniformBlockIndex(ct,U.name),q.set(U,K))}function Ot(U,ct){let K=c.get(ct).get(U);l.get(ct)!==K&&(i.uniformBlockBinding(ct,K,U.__bindingPointIndex),l.set(ct,K))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,nt={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,S=null,_=null,L=null,A=null,C=new Lt(0,0,0),R=0,M=!1,y=null,T=null,D=null,P=null,O=null,Et.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:At,bindFramebuffer:St,drawBuffers:It,useProgram:de,setBlending:B,setMaterial:en,setFlipSided:Gt,setCullFace:Wt,setLineWidth:Rt,setPolygonOffset:ae,setScissorTest:Tt,activeTexture:E,bindTexture:v,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:Yt,texStorage3D:it,texSubImage2D:Y,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:pt,scissor:Pt,viewport:gt,reset:ie}}function Hu(i,t,e,n){let s=a_(n);switch(e){case sd:return i*t;case ad:return i*t;case od:return i*t*2;case $c:return i*t/s.components*s.byteLength;case Jc:return i*t/s.components*s.byteLength;case ld:return i*t*2/s.components*s.byteLength;case Kc:return i*t*2/s.components*s.byteLength;case rd:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case jc:return i*t*4/s.components*s.byteLength;case Sa:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:case Nl:return Math.max(i,16)*Math.max(t,8)/4;case Ll:case Ul:return Math.max(i,8)*Math.max(t,8)/2;case Fl:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Aa:case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cd:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nc:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a_(i){switch(i){case Yn:case ed:return{byteLength:1,components:1};case Rr:case nd:case Ur:return{byteLength:2,components:1};case Yc:case Zc:return{byteLength:2,components:4};case Vi:case qc:case Tn:return{byteLength:4,components:1};case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function o_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):Ia("canvas")}function x(E,v,k){let J=1,et=Tt(E);if((et.width>k||et.height>k)&&(J=k/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor(J*et.width),Mt=Math.floor(J*et.height);d===void 0&&(d=g(Y,Mt));let ht=v?g(Y,Mt):d;return ht.width=Y,ht.height=Mt,ht.getContext("2d").drawImage(E,0,0,Y,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Y+"x"+Mt+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,v,k,J,et=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=v;if(v===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),v===i.RGBA){let Mt=et?oo:Zt.getTransfer(J);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=Mt===ne?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(E,v){let k;return E?v===null||v===Vi||v===Hs?k=i.DEPTH24_STENCIL8:v===Tn?k=i.DEPTH32F_STENCIL8:v===Rr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Vi||v===Hs?k=i.DEPTH_COMPONENT24:v===Tn?k=i.DEPTH_COMPONENT32F:v===Rr&&(k=i.DEPTH_COMPONENT16),k}function L(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ke&&E.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){let v=E.target;v.removeEventListener("dispose",A),R(v),v.isVideoTexture&&h.delete(v)}function C(E){let v=E.target;v.removeEventListener("dispose",C),y(v)}function R(E){let v=n.get(E);if(v.__webglInit===void 0)return;let k=E.source,J=u.get(k);if(J){let et=J[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(E),Object.keys(J).length===0&&u.delete(k)}n.remove(E)}function M(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let k=E.source,J=u.get(k);delete J[v.__cacheKey],a.memory.textures--}function y(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let et=0;et<v.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(v.__webglFramebuffer[J][et]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=E.textures;for(let J=0,et=k.length;J<et;J++){let Y=n.get(k[J]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(E)}let T=0;function D(){T=0}function P(){let E=T;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),T+=1,E}function O(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function W(E,v){let k=n.get(E);if(E.isVideoTexture&&Rt(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,E,v);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function H(E,v){let k=n.get(E);if(E.version>0&&k.__version!==E.version){X(k,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function Z(E,v){let k=n.get(E);if(E.version>0&&k.__version!==E.version){X(k,E,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function z(E,v){let k=n.get(E);if(E.version>0&&k.__version!==E.version){Q(k,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}let tt={[Hi]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[Pl]:i.MIRRORED_REPEAT},nt={[Ke]:i.NEAREST,[Xf]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},rt={[$f]:i.NEVER,[ep]:i.ALWAYS,[Jf]:i.LESS,[hd]:i.LEQUAL,[Kf]:i.EQUAL,[tp]:i.GEQUAL,[jf]:i.GREATER,[Qf]:i.NOTEQUAL};function wt(E,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===ko||v.magFilter===Zr||v.magFilter===ki||v.minFilter===En||v.minFilter===ko||v.minFilter===Zr||v.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,tt[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,tt[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,tt[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,nt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,nt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,rt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ke||v.minFilter!==Zr&&v.minFilter!==ki||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Et(E,v){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));let J=v.source,et=u.get(J);et===void 0&&(et={},u.set(J,et));let Y=O(v);if(Y!==E.__cacheKey){et[Y]===void 0&&(et[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),et[Y].usedTimes++;let Mt=et[E.__cacheKey];Mt!==void 0&&(et[E.__cacheKey].usedTimes--,Mt.usedTimes===0&&M(v)),E.__cacheKey=Y,E.__webglTexture=et[Y].texture}return k}function X(E,v,k){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let et=Et(E,v),Y=v.source;e.bindTexture(J,E.__webglTexture,i.TEXTURE0+k);let Mt=n.get(Y);if(Y.version!==Mt.__version||et===!0){e.activeTexture(i.TEXTURE0+k);let ht=Zt.getPrimaries(Zt.workingColorSpace),pt=v.colorSpace===di?null:Zt.getPrimaries(v.colorSpace),Yt=v.colorSpace===di||ht===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=x(v.image,!1,s.maxTextureSize);it=ae(v,it);let mt=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type),Pt=S(v.internalFormat,mt,Ct,v.colorSpace,v.isVideoTexture);wt(J,v);let gt,Xt=v.mipmaps,Ot=v.isVideoTexture!==!0,ie=Mt.__version===void 0||et===!0,U=Y.dataReady,ct=L(v,it);if(v.isDepthTexture)Pt=_(v.format===Vs,v.type),ie&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Pt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Pt,it.width,it.height,0,mt,Ct,null));else if(v.isDataTexture)if(Xt.length>0){Ot&&ie&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Xt[0].width,Xt[0].height);for(let q=0,K=Xt.length;q<K;q++)gt=Xt[q],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,q,Pt,gt.width,gt.height,0,mt,Ct,gt.data);v.generateMipmaps=!1}else Ot?(ie&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,it.width,it.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,mt,Ct,it.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,it.width,it.height,0,mt,Ct,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ot&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Pt,Xt[0].width,Xt[0].height,it.depth);for(let q=0,K=Xt.length;q<K;q++)if(gt=Xt[q],v.format!==mn)if(mt!==null)if(Ot){if(U)if(v.layerUpdates.size>0){let ft=Hu(gt.width,gt.height,v.format,v.type);for(let ut of v.layerUpdates){let Ut=gt.data.subarray(ut*ft/gt.data.BYTES_PER_ELEMENT,(ut+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ut,gt.width,gt.height,1,mt,Ut)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,it.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Pt,gt.width,gt.height,it.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,it.depth,mt,Ct,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Pt,gt.width,gt.height,it.depth,0,mt,Ct,gt.data)}else{Ot&&ie&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Xt[0].width,Xt[0].height);for(let q=0,K=Xt.length;q<K;q++)gt=Xt[q],v.format!==mn?mt!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,q,Pt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(v.isDataArrayTexture)if(Ot){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Pt,it.width,it.height,it.depth),U)if(v.layerUpdates.size>0){let q=Hu(it.width,it.height,v.format,v.type);for(let K of v.layerUpdates){let ft=it.data.subarray(K*q/it.data.BYTES_PER_ELEMENT,(K+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,mt,Ct,ft)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Ct,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,it.width,it.height,it.depth,0,mt,Ct,it.data);else if(v.isData3DTexture)Ot?(ie&&e.texStorage3D(i.TEXTURE_3D,ct,Pt,it.width,it.height,it.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Ct,it.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,it.width,it.height,it.depth,0,mt,Ct,it.data);else if(v.isFramebufferTexture){if(ie)if(Ot)e.texStorage2D(i.TEXTURE_2D,ct,Pt,it.width,it.height);else{let q=it.width,K=it.height;for(let ft=0;ft<ct;ft++)e.texImage2D(i.TEXTURE_2D,ft,Pt,q,K,0,mt,Ct,null),q>>=1,K>>=1}}else if(Xt.length>0){if(Ot&&ie){let q=Tt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Pt,q.width,q.height)}for(let q=0,K=Xt.length;q<K;q++)gt=Xt[q],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,mt,Ct,gt):e.texImage2D(i.TEXTURE_2D,q,Pt,mt,Ct,gt);v.generateMipmaps=!1}else if(Ot){if(ie){let q=Tt(it);e.texStorage2D(i.TEXTURE_2D,ct,Pt,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ct,it)}else e.texImage2D(i.TEXTURE_2D,0,Pt,mt,Ct,it);m(v)&&p(J),Mt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Q(E,v,k){if(v.image.length!==6)return;let J=Et(E,v),et=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);let Y=n.get(et);if(et.version!==Y.__version||J===!0){e.activeTexture(i.TEXTURE0+k);let Mt=Zt.getPrimaries(Zt.workingColorSpace),ht=v.colorSpace===di?null:Zt.getPrimaries(v.colorSpace),pt=v.colorSpace===di||Mt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Yt=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Yt&&!it?mt[K]=x(v.image[K],!0,s.maxCubemapSize):mt[K]=it?v.image[K].image:v.image[K],mt[K]=ae(v,mt[K]);let Ct=mt[0],Pt=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),Xt=S(v.internalFormat,Pt,gt,v.colorSpace),Ot=v.isVideoTexture!==!0,ie=Y.__version===void 0||J===!0,U=et.dataReady,ct=L(v,Ct);wt(i.TEXTURE_CUBE_MAP,v);let q;if(Yt){Ot&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Xt,Ct.width,Ct.height);for(let K=0;K<6;K++){q=mt[K].mipmaps;for(let ft=0;ft<q.length;ft++){let ut=q[ft];v.format!==mn?Pt!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ut.width,ut.height,Pt,gt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Xt,ut.width,ut.height,0,Pt,gt,ut.data)}}}else{if(q=v.mipmaps,Ot&&ie){q.length>0&&ct++;let K=Tt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Xt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Pt,gt,mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,mt[K].width,mt[K].height,0,Pt,gt,mt[K].data);for(let ft=0;ft<q.length;ft++){let Ut=q[ft].image[K].image;Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Ut.width,Ut.height,Pt,gt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Xt,Ut.width,Ut.height,0,Pt,gt,Ut.data)}}else{Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pt,gt,mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,Pt,gt,mt[K]);for(let ft=0;ft<q.length;ft++){let ut=q[ft];Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Pt,gt,ut.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Xt,Pt,gt,ut.image[K])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),Y.__version=et.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function lt(E,v,k,J,et,Y){let Mt=r.convert(k.format,k.colorSpace),ht=r.convert(k.type),pt=S(k.internalFormat,Mt,ht,k.colorSpace),Yt=n.get(v),it=n.get(k);if(it.__renderTarget=v,!Yt.__hasExternalTextures){let mt=Math.max(1,v.width>>Y),Ct=Math.max(1,v.height>>Y);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Y,pt,mt,Ct,v.depth,0,Mt,ht,null):e.texImage2D(et,Y,pt,mt,Ct,0,Mt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Wt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,it.__webglTexture,0,Gt(v)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,it.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let J=v.depthTexture,et=J&&J.isDepthTexture?J.type:null,Y=_(v.stencilBuffer,et),Mt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Gt(v);Wt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Y,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,E)}else{let J=v.textures;for(let et=0;et<J.length;et++){let Y=J[et],Mt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),pt=S(Y.internalFormat,Mt,ht,Y.colorSpace),Yt=Gt(v);k&&Wt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,pt,v.width,v.height):Wt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);let et=J.__webglTexture,Y=Gt(v);if(v.depthTexture.format===Ns)Wt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(v.depthTexture.format===Vs)Wt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function St(E){let v=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let J=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let et=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),v.__depthDisposeCallback=et}v.__boundDepthTexture=J}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(v.__webglFramebuffer,E)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),at(v.__webglDepthbuffer[J],E,!1);else{let et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),at(v.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(E,v,k){let J=n.get(E);v!==void 0&&lt(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&St(E)}function de(E){let v=E.texture,k=n.get(E),J=n.get(v);E.addEventListener("dispose",C);let et=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let pt=0;pt<v.mipmaps.length;pt++)k.__webglFramebuffer[ht][pt]=i.createFramebuffer()}else k.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)k.__webglFramebuffer[ht]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ht=0,pt=et.length;ht<pt;ht++){let Yt=n.get(et[ht]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Wt(E)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){let pt=et[ht];k.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);let Yt=r.convert(pt.format,pt.colorSpace),it=r.convert(pt.type),mt=S(pt.internalFormat,Yt,it,pt.colorSpace,E.isXRRenderTarget===!0),Ct=Gt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),at(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),wt(i.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)lt(k.__webglFramebuffer[ht][pt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else lt(k.__webglFramebuffer[ht],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,pt=et.length;ht<pt;ht++){let Yt=et[ht],it=n.get(Yt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),wt(i.TEXTURE_2D,Yt),lt(k.__webglFramebuffer,E,Yt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,J.__webglTexture),wt(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)lt(k.__webglFramebuffer[pt],E,v,i.COLOR_ATTACHMENT0,ht,pt);else lt(k.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ht,0);m(v)&&p(ht),e.unbindTexture()}E.depthBuffer&&St(E)}function qt(E){let v=E.textures;for(let k=0,J=v.length;k<J;k++){let et=v[k];if(m(et)){let Y=w(E),Mt=n.get(et).__webglTexture;e.bindTexture(Y,Mt),p(Y),e.unbindTexture()}}}let xe=[],B=[];function en(E){if(E.samples>0){if(Wt(E)===!1){let v=E.textures,k=E.width,J=E.height,et=i.COLOR_BUFFER_BIT,Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(E),ht=v.length>1;if(ht)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);let Yt=n.get(v[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,et,i.NEAREST),l===!0&&(xe.length=0,B.length=0,xe.push(i.COLOR_ATTACHMENT0+pt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(xe.push(Y),B.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);let Yt=n.get(v[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Gt(E){return Math.min(s.maxSamples,E.samples)}function Wt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Rt(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function ae(E,v){let k=E.colorSpace,J=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==$s&&k!==di&&(Zt.getTransfer(k)===ne?(J!==mn||et!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Tt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=It,this.setupRenderTarget=de,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Wt}function l_(i,t){function e(n,s=di){let r,a=Zt.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===id)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ed)return i.BYTE;if(n===nd)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Ur)return i.HALF_FLOAT;if(n===sd)return i.ALPHA;if(n===rd)return i.RGB;if(n===mn)return i.RGBA;if(n===ad)return i.LUMINANCE;if(n===od)return i.LUMINANCE_ALPHA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===Jc)return i.RED_INTEGER;if(n===ld)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===Sa||n===wa||n===Ea||n===Ta)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Dl||n===Ul||n===Nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===Ol||n===Bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fl||n===Ol)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===Ql||n===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Aa)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cd||n===ec||n===nc||n===ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var yc=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ue=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},c_={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Rn({vertexShader:h_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends xi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=new vc,m=e.getContextAttributes(),p=null,w=null,S=[],_=[],L=new xt,A=null,C=new ze;C.viewport=new ge;let R=new ze;R.viewport=new ge;let M=[C,R],y=new yc,T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=S[X];return Q===void 0&&(Q=new Er,S[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=S[X];return Q===void 0&&(Q=new Er,S[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=S[X];return Q===void 0&&(Q=new Er,S[X]=Q),Q.getHandSpace()};function P(X){let Q=_.indexOf(X.inputSource);if(Q===-1)return;let lt=S[Q];lt!==void 0&&(lt.update(X.inputSource,X.frame,c||a),lt.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",W);for(let X=0;X<S.length;X++){let Q=_[X];Q!==null&&(_[X]=null,S[X].disconnect(Q))}T=null,D=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,w=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",O),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Zn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,lt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Vs:Ns,lt=m.stencil?Hs:Vi);let At={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(At),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Zn(u.textureWidth,u.textureHeight,{format:mn,type:Yn,depthTexture:new Ha(u.textureWidth,u.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(X){for(let Q=0;Q<X.removed.length;Q++){let lt=X.removed[Q],at=_.indexOf(lt);at>=0&&(_[at]=null,S[at].disconnect(lt))}for(let Q=0;Q<X.added.length;Q++){let lt=X.added[Q],at=_.indexOf(lt);if(at===-1){for(let St=0;St<S.length;St++)if(St>=_.length){_.push(lt),at=St;break}else if(_[St]===null){_[St]=lt,at=St;break}if(at===-1)break}let At=S[at];At&&At.connect(lt)}}let H=new I,Z=new I;function z(X,Q,lt){H.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(lt.matrixWorld);let at=H.distanceTo(Z),At=Q.projectionMatrix.elements,St=lt.projectionMatrix.elements,It=At[14]/(At[10]-1),de=At[14]/(At[10]+1),qt=(At[9]+1)/At[5],xe=(At[9]-1)/At[5],B=(At[8]-1)/At[0],en=(St[8]+1)/St[0],Gt=It*B,Wt=It*en,Rt=at/(-B+en),ae=Rt*-B;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ae),X.translateZ(Rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),At[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Tt=It+Rt,E=de+Rt,v=Gt-ae,k=Wt+(at-ae),J=qt*de/E*Tt,et=xe*de/E*Tt;X.projectionMatrix.makePerspective(v,k,J,et,Tt,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function tt(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,lt=X.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(lt=x.depthFar)),y.near=R.near=C.near=Q,y.far=R.far=C.far=lt,(T!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,D=y.far),C.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,y.layers.mask=C.layers.mask|R.layers.mask;let at=X.parent,At=y.cameras;tt(y,at);for(let St=0;St<At.length;St++)tt(At[St],at);At.length===2?z(y,C,R):y.projectionMatrix.copy(C.projectionMatrix),nt(X,y,at)};function nt(X,Q,lt){lt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(lt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Cr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let rt=null;function wt(X,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let at=!1;lt.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let St=0;St<lt.length;St++){let It=lt[St],de=null;if(f!==null)de=f.getViewport(It);else{let xe=d.getViewSubImage(u,It);de=xe.viewport,St===0&&(t.setRenderTargetTextures(w,xe.colorTexture,u.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(w))}let qt=M[St];qt===void 0&&(qt=new ze,qt.layers.enable(St),qt.viewport=new ge,M[St]=qt),qt.matrix.fromArray(It.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(It.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(de.x,de.y,de.width,de.height),St===0&&(y.matrix.copy(qt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(qt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){let St=d.getDepthInformation(lt[0]);St&&St.isValid&&St.texture&&x.init(t,St,s.renderState)}}for(let lt=0;lt<S.length;lt++){let at=_[lt],At=S[lt];at!==null&&At!==void 0&&At.update(at,Q,c||a)}rt&&rt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Et=new pd;Et.setAnimationLoop(wt),this.setAnimationLoop=function(X){rt=X},this.dispose=function(){}}},Ni=new Xe,d_=new te;function f_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),S=w.envMap,_=w.envMapRotation;S&&(m.envMap.value=S,Ni.copy(_),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(Ni)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let _=S.program;n.uniformBlockBinding(w,_)}function c(w,S){let _=s[w.id];_===void 0&&(g(w),_=h(w),s[w.id]=_,w.addEventListener("dispose",m));let L=S.program;n.updateUBOMapping(w,L);let A=t.render.frame;r[w.id]!==A&&(u(w),r[w.id]=A)}function h(w){let S=d();w.__bindingPointIndex=S;let _=i.createBuffer(),L=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let S=s[w.id],_=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,C=_.length;A<C;A++){let R=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,y=R.length;M<y;M++){let T=R[M];if(f(T,A,M,L)===!0){let D=T.__offset,P=Array.isArray(T.value)?T.value:[T.value],O=0;for(let W=0;W<P.length;W++){let H=P[W],Z=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,D+O,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,O),O+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,S,_,L){let A=w.value,C=S+"_"+_;if(L[C]===void 0)return typeof A=="number"||typeof A=="boolean"?L[C]=A:L[C]=A.clone(),!0;{let R=L[C];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return L[C]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(w){let S=w.uniforms,_=0,L=16;for(let C=0,R=S.length;C<R;C++){let M=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,T=M.length;y<T;y++){let D=M[y],P=Array.isArray(D.value)?D.value:[D.value];for(let O=0,W=P.length;O<W;O++){let H=P[O],Z=x(H),z=_%L,tt=z%Z.boundary,nt=z+tt;_+=tt,nt!==0&&L-nt<Z.storage&&(_+=L-nt),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=Z.storage}}}let A=_%L;return A>0&&(_+=L-A),w.__size=_,w.__cache={},this}function x(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){let S=w.target;S.removeEventListener("dispose",m);let _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Va=class{constructor(t={}){let{canvas:e=_p(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=mi,this.toneMappingExposure=1;let _=this,L=!1,A=0,C=0,R=null,M=-1,y=null,T=new ge,D=new ge,P=null,O=new Lt(0),W=0,H=e.width,Z=e.height,z=1,tt=null,nt=null,rt=new ge(0,0,H,Z),wt=new ge(0,0,H,Z),Et=!1,X=new Ir,Q=!1,lt=!1,at=new te,At=new te,St=new I,It=new ge,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function xe(){return R===null?z:1}let B=n;function en(b,N){return e.getContext(b,N)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),B===null){let N="webgl2";if(B=en(N,b),B===null)throw en(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Gt,Wt,Rt,ae,Tt,E,v,k,J,et,Y,Mt,ht,pt,Yt,it,mt,Ct,Pt,gt,Xt,Ot,ie,U;function ct(){Gt=new I0(B),Gt.init(),Ot=new l_(B,Gt),Wt=new w0(B,Gt,t,Ot),Rt=new r_(B,Gt),Wt.reverseDepthBuffer&&u&&Rt.buffers.depth.setReversed(!0),ae=new D0(B),Tt=new qx,E=new o_(B,Gt,Rt,Tt,Wt,Ot,ae),v=new T0(_),k=new C0(_),J=new kp(B),ie=new b0(B,J),et=new P0(B,J,ae,ie),Y=new N0(B,et,J,ae),Pt=new U0(B,Wt,E),it=new E0(Tt),Mt=new Xx(_,v,k,Gt,Wt,ie,it),ht=new f_(_,Tt),pt=new Zx,Yt=new t_(Gt),Ct=new M0(_,v,k,Rt,Y,f,l),mt=new i_(_,Y,Wt),U=new p_(B,ae,Wt,Rt),gt=new S0(B,Gt,ae),Xt=new L0(B,Gt,ae),ae.programs=Mt.programs,_.capabilities=Wt,_.extensions=Gt,_.properties=Tt,_.renderLists=pt,_.shadowMap=mt,_.state=Rt,_.info=ae}ct();let q=new Mc(_,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=Gt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Gt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(H,Z,!1))},this.getSize=function(b){return b.set(H,Z)},this.setSize=function(b,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,Z=N,e.width=Math.floor(b*z),e.height=Math.floor(N*z),V===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(H*z,Z*z).floor()},this.setDrawingBufferSize=function(b,N,V){H=b,Z=N,z=V,e.width=Math.floor(b*V),e.height=Math.floor(N*V),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(rt)},this.setViewport=function(b,N,V,G){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,N,V,G),Rt.viewport(T.copy(rt).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(wt)},this.setScissor=function(b,N,V,G){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,N,V,G),Rt.scissor(D.copy(wt).multiplyScalar(z).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(b){Rt.setScissorTest(Et=b)},this.setOpaqueSort=function(b){tt=b},this.setTransparentSort=function(b){nt=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,N=!0,V=!0){let G=0;if(b){let F=!1;if(R!==null){let st=R.texture.format;F=st===jc||st===Kc||st===Jc}if(F){let st=R.texture.type,dt=st===Yn||st===Vi||st===Rr||st===Hs||st===Yc||st===Zc,_t=Ct.getClearColor(),yt=Ct.getClearAlpha(),Dt=_t.r,Nt=_t.g,vt=_t.b;dt?(g[0]=Dt,g[1]=Nt,g[2]=vt,g[3]=yt,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=Dt,x[1]=Nt,x[2]=vt,x[3]=yt,B.clearBufferiv(B.COLOR,0,x))}else G|=B.COLOR_BUFFER_BIT}N&&(G|=B.DEPTH_BUFFER_BIT),V&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),Yt.dispose(),Tt.dispose(),v.dispose(),k.dispose(),Y.dispose(),ie.dispose(),U.dispose(),Mt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Uh),q.removeEventListener("sessionend",Nh),Ci.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let b=ae.autoReset,N=mt.enabled,V=mt.autoUpdate,G=mt.needsUpdate,F=mt.type;ct(),ae.autoReset=b,mt.enabled=N,mt.autoUpdate=V,mt.needsUpdate=G,mt.type=F}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ut(b){let N=b.target;N.removeEventListener("dispose",Ut),me(N)}function me(b){Pe(b),Tt.remove(b)}function Pe(b){let N=Tt.get(b).programs;N!==void 0&&(N.forEach(function(V){Mt.releaseProgram(V)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,V,G,F,st){N===null&&(N=de);let dt=F.isMesh&&F.matrixWorld.determinant()<0,_t=pf(b,N,V,G,F);Rt.setMaterial(G,dt);let yt=V.index,Dt=1;if(G.wireframe===!0){if(yt=et.getWireframeAttribute(V),yt===void 0)return;Dt=2}let Nt=V.drawRange,vt=V.attributes.position,$t=Nt.start*Dt,se=(Nt.start+Nt.count)*Dt;st!==null&&($t=Math.max($t,st.start*Dt),se=Math.min(se,(st.start+st.count)*Dt)),yt!==null?($t=Math.max($t,0),se=Math.min(se,yt.count)):vt!=null&&($t=Math.max($t,0),se=Math.min(se,vt.count));let oe=se-$t;if(oe<0||oe===1/0)return;ie.setup(F,G,_t,V,yt);let He,Jt=gt;if(yt!==null&&(He=J.get(yt),Jt=Xt,Jt.setIndex(He)),F.isMesh)G.wireframe===!0?(Rt.setLineWidth(G.wireframeLinewidth*xe()),Jt.setMode(B.LINES)):Jt.setMode(B.TRIANGLES);else if(F.isLine){let bt=G.linewidth;bt===void 0&&(bt=1),Rt.setLineWidth(bt*xe()),F.isLineSegments?Jt.setMode(B.LINES):F.isLineLoop?Jt.setMode(B.LINE_LOOP):Jt.setMode(B.LINE_STRIP)}else F.isPoints?Jt.setMode(B.POINTS):F.isSprite&&Jt.setMode(B.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let bt=F._multiDrawStarts,Fn=F._multiDrawCounts,Kt=F._multiDrawCount,hn=yt?J.get(yt).bytesPerElement:1,fs=Tt.get(G).currentProgram.getUniforms();for(let Ze=0;Ze<Kt;Ze++)fs.setValue(B,"_gl_DrawID",Ze),Jt.render(bt[Ze]/hn,Fn[Ze])}else if(F.isInstancedMesh)Jt.renderInstances($t,oe,F.count);else if(V.isInstancedBufferGeometry){let bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Fn=Math.min(V.instanceCount,bt);Jt.renderInstances($t,oe,Fn)}else Jt.render($t,oe)};function jt(b,N,V){b.transparent===!0&&b.side===rn&&b.forceSinglePass===!1?(b.side=Ve,b.needsUpdate=!0,Yr(b,N,V),b.side=gi,b.needsUpdate=!0,Yr(b,N,V),b.side=rn):Yr(b,N,V)}this.compile=function(b,N,V=null){V===null&&(V=b),p=Yt.get(V),p.init(N),S.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==V&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let G=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let st=F.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){let _t=st[dt];jt(_t,V,F),G.add(_t)}else jt(st,V,F),G.add(st)}),S.pop(),p=null,G},this.compileAsync=function(b,N,V=null){let G=this.compile(b,N,V);return new Promise(F=>{function st(){if(G.forEach(function(dt){Tt.get(dt).currentProgram.isReady()&&G.delete(dt)}),G.size===0){F(b);return}setTimeout(st,10)}Gt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let cn=null;function Nn(b){cn&&cn(b)}function Uh(){Ci.stop()}function Nh(){Ci.start()}let Ci=new pd;Ci.setAnimationLoop(Nn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(b){cn=b,q.setAnimationLoop(b),b===null?Ci.stop():Ci.start()},q.addEventListener("sessionstart",Uh),q.addEventListener("sessionend",Nh),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,N,R),p=Yt.get(b,S.length),p.init(N),S.push(p),At.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(At),lt=this.localClippingEnabled,Q=it.init(this.clippingPlanes,lt),m=pt.get(b,w.length),m.init(),w.push(m),q.enabled===!0&&q.isPresenting===!0){let st=_.xr.getDepthSensingMesh();st!==null&&zo(st,N,-1/0,_.sortObjects)}zo(b,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(tt,nt),qt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,qt&&Ct.addToRenderList(m,b),this.info.render.frame++,Q===!0&&it.beginShadows();let V=p.state.shadowsArray;mt.render(V,b,N),Q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){let st=N.cameras;if(F.length>0)for(let dt=0,_t=st.length;dt<_t;dt++){let yt=st[dt];Oh(G,F,b,yt)}qt&&Ct.render(b);for(let dt=0,_t=st.length;dt<_t;dt++){let yt=st[dt];Fh(m,b,yt,yt.viewport)}}else F.length>0&&Oh(G,F,b,N),qt&&Ct.render(b),Fh(m,b,N);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(_,b,N),ie.resetDefaultState(),M=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],Q===!0&&it.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function zo(b,N,V,G){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){G&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(At);let dt=Y.update(b),_t=b.material;_t.visible&&m.push(b,dt,_t,V,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){let dt=Y.update(b),_t=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),It.copy(dt.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(At)),Array.isArray(_t)){let yt=dt.groups;for(let Dt=0,Nt=yt.length;Dt<Nt;Dt++){let vt=yt[Dt],$t=_t[vt.materialIndex];$t&&$t.visible&&m.push(b,dt,$t,V,It.z,vt)}}else _t.visible&&m.push(b,dt,_t,V,It.z,null)}}let st=b.children;for(let dt=0,_t=st.length;dt<_t;dt++)zo(st[dt],N,V,G)}function Fh(b,N,V,G){let F=b.opaque,st=b.transmissive,dt=b.transparent;p.setupLightsView(V),Q===!0&&it.setGlobalState(_.clippingPlanes,V),G&&Rt.viewport(T.copy(G)),F.length>0&&qr(F,N,V),st.length>0&&qr(st,N,V),dt.length>0&&qr(dt,N,V),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Oh(b,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Zn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Ur:Yn,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let st=p.state.transmissionRenderTarget[G.id],dt=G.viewport||T;st.setSize(dt.z,dt.w);let _t=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(O),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),qt&&Ct.render(V);let yt=_.toneMapping;_.toneMapping=mi;let Dt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Q===!0&&it.setGlobalState(_.clippingPlanes,G),qr(b,V,G),E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let vt=0,$t=N.length;vt<$t;vt++){let se=N[vt],oe=se.object,He=se.geometry,Jt=se.material,bt=se.group;if(Jt.side===rn&&oe.layers.test(G.layers)){let Fn=Jt.side;Jt.side=Ve,Jt.needsUpdate=!0,Bh(oe,V,G,He,Jt,bt),Jt.side=Fn,Jt.needsUpdate=!0,Nt=!0}}Nt===!0&&(E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st))}_.setRenderTarget(_t),_.setClearColor(O,W),Dt!==void 0&&(G.viewport=Dt),_.toneMapping=yt}function qr(b,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,st=b.length;F<st;F++){let dt=b[F],_t=dt.object,yt=dt.geometry,Dt=G===null?dt.material:G,Nt=dt.group;_t.layers.test(V.layers)&&Bh(_t,N,V,yt,Dt,Nt)}}function Bh(b,N,V,G,F,st){b.onBeforeRender(_,N,V,G,F,st),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(_,N,V,G,b,st),F.transparent===!0&&F.side===rn&&F.forceSinglePass===!1?(F.side=Ve,F.needsUpdate=!0,_.renderBufferDirect(V,N,G,F,b,st),F.side=gi,F.needsUpdate=!0,_.renderBufferDirect(V,N,G,F,b,st),F.side=rn):_.renderBufferDirect(V,N,G,F,b,st),b.onAfterRender(_,N,V,G,F,st)}function Yr(b,N,V){N.isScene!==!0&&(N=de);let G=Tt.get(b),F=p.state.lights,st=p.state.shadowsArray,dt=F.state.version,_t=Mt.getParameters(b,F.state,st,N,V),yt=Mt.getProgramCacheKey(_t),Dt=G.programs;G.environment=b.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(b.isMeshStandardMaterial?k:v).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Ut),Dt=new Map,G.programs=Dt);let Nt=Dt.get(yt);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===dt)return kh(b,_t),Nt}else _t.uniforms=Mt.getUniforms(b),b.onBeforeCompile(_t,_),Nt=Mt.acquireProgram(_t,yt),Dt.set(yt,Nt),G.uniforms=_t.uniforms;let vt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(vt.clippingPlanes=it.uniform),kh(b,_t),G.needsLights=gf(b),G.lightsStateVersion=dt,G.needsLights&&(vt.ambientLightColor.value=F.state.ambient,vt.lightProbe.value=F.state.probe,vt.directionalLights.value=F.state.directional,vt.directionalLightShadows.value=F.state.directionalShadow,vt.spotLights.value=F.state.spot,vt.spotLightShadows.value=F.state.spotShadow,vt.rectAreaLights.value=F.state.rectArea,vt.ltc_1.value=F.state.rectAreaLTC1,vt.ltc_2.value=F.state.rectAreaLTC2,vt.pointLights.value=F.state.point,vt.pointLightShadows.value=F.state.pointShadow,vt.hemisphereLights.value=F.state.hemi,vt.directionalShadowMap.value=F.state.directionalShadowMap,vt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,vt.spotShadowMap.value=F.state.spotShadowMap,vt.spotLightMatrix.value=F.state.spotLightMatrix,vt.spotLightMap.value=F.state.spotLightMap,vt.pointShadowMap.value=F.state.pointShadowMap,vt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function zh(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Os.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function kh(b,N){let V=Tt.get(b);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function pf(b,N,V,G,F){N.isScene!==!0&&(N=de),E.resetTextureUnits();let st=N.fog,dt=G.isMeshStandardMaterial?N.environment:null,_t=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:$s,yt=(G.isMeshStandardMaterial?k:v).get(G.envMap||dt),Dt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Nt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),vt=!!V.morphAttributes.position,$t=!!V.morphAttributes.normal,se=!!V.morphAttributes.color,oe=mi;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(oe=_.toneMapping);let He=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Jt=He!==void 0?He.length:0,bt=Tt.get(G),Fn=p.state.lights;if(Q===!0&&(lt===!0||b!==y)){let nn=b===y&&G.id===M;it.setState(G,b,nn)}let Kt=!1;G.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Fn.state.version||bt.outputColorSpace!==_t||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==yt||G.fog===!0&&bt.fog!==st||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==it.numPlanes||bt.numIntersection!==it.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Nt||bt.morphTargets!==vt||bt.morphNormals!==$t||bt.morphColors!==se||bt.toneMapping!==oe||bt.morphTargetsCount!==Jt)&&(Kt=!0):(Kt=!0,bt.__version=G.version);let hn=bt.currentProgram;Kt===!0&&(hn=Yr(G,N,F));let fs=!1,Ze=!1,cr=!1,le=hn.getUniforms(),Sn=bt.uniforms;if(Rt.useProgram(hn.program)&&(fs=!0,Ze=!0,cr=!0),G.id!==M&&(M=G.id,Ze=!0),fs||y!==b){Rt.buffers.depth.getReversed()?(at.copy(b.projectionMatrix),vp(at),Mp(at),le.setValue(B,"projectionMatrix",at)):le.setValue(B,"projectionMatrix",b.projectionMatrix),le.setValue(B,"viewMatrix",b.matrixWorldInverse);let si=le.map.cameraPosition;si!==void 0&&si.setValue(B,St.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&le.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Ze=!0,cr=!0)}if(F.isSkinnedMesh){le.setOptional(B,F,"bindMatrix"),le.setOptional(B,F,"bindMatrixInverse");let nn=F.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),le.setValue(B,"boneTexture",nn.boneTexture,E))}F.isBatchedMesh&&(le.setOptional(B,F,"batchingTexture"),le.setValue(B,"batchingTexture",F._matricesTexture,E),le.setOptional(B,F,"batchingIdTexture"),le.setValue(B,"batchingIdTexture",F._indirectTexture,E),le.setOptional(B,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(B,"batchingColorTexture",F._colorsTexture,E));let hr=V.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&Pt.update(F,V,hn),(Ze||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,le.setValue(B,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Sn.envMap.value=yt,Sn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Sn.envMapIntensity.value=N.environmentIntensity),Ze&&(le.setValue(B,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&mf(Sn,cr),st&&G.fog===!0&&ht.refreshFogUniforms(Sn,st),ht.refreshMaterialUniforms(Sn,G,z,Z,p.state.transmissionRenderTarget[b.id]),Os.upload(B,zh(bt),Sn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Os.upload(B,zh(bt),Sn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(B,"center",F.center),le.setValue(B,"modelViewMatrix",F.modelViewMatrix),le.setValue(B,"normalMatrix",F.normalMatrix),le.setValue(B,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let nn=G.uniformsGroups;for(let si=0,ri=nn.length;si<ri;si++){let Hh=nn[si];U.update(Hh,hn),U.bind(Hh,hn)}}return hn}function mf(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function gf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,N,V){Tt.get(b.texture).__webglTexture=N,Tt.get(b.depthTexture).__webglTexture=V;let G=Tt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){let V=Tt.get(b);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,V=0){R=b,A=N,C=V;let G=!0,F=null,st=!1,dt=!1;if(b){let yt=Tt.get(b);if(yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(B.FRAMEBUFFER,null),G=!1;else if(yt.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(yt.__hasExternalTextures)E.rebindTextures(b,Tt.get(b.texture).__webglTexture,Tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let vt=b.depthTexture;if(yt.__boundDepthTexture!==vt){if(vt!==null&&Tt.has(vt)&&(b.width!==vt.image.width||b.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(dt=!0);let Nt=Tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?F=Nt[N][V]:F=Nt[N],st=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?F=Tt.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[V]:F=Nt,T.copy(b.viewport),D.copy(b.scissor),P=b.scissorTest}else T.copy(rt).multiplyScalar(z).floor(),D.copy(wt).multiplyScalar(z).floor(),P=Et;if(Rt.bindFramebuffer(B.FRAMEBUFFER,F)&&G&&Rt.drawBuffers(b,F),Rt.viewport(T),Rt.scissor(D),Rt.setScissorTest(P),st){let yt=Tt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,V)}else if(dt){let yt=Tt.get(b.texture),Dt=N||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,yt.__webglTexture,V||0,Dt)}M=-1},this.readRenderTargetPixels=function(b,N,V,G,F,st,dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){Rt.bindFramebuffer(B.FRAMEBUFFER,_t);try{let yt=b.texture,Dt=yt.format,Nt=yt.type;if(!Wt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-G&&V>=0&&V<=b.height-F&&B.readPixels(N,V,G,F,Ot.convert(Dt),Ot.convert(Nt),st)}finally{let yt=R!==null?Tt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(b,N,V,G,F,st,dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){let yt=b.texture,Dt=yt.format,Nt=yt.type;if(!Wt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-G&&V>=0&&V<=b.height-F){Rt.bindFramebuffer(B.FRAMEBUFFER,_t);let vt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.bufferData(B.PIXEL_PACK_BUFFER,st.byteLength,B.STREAM_READ),B.readPixels(N,V,G,F,Ot.convert(Dt),Ot.convert(Nt),0);let $t=R!==null?Tt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,$t);let se=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await yp(B,se,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,st),B.deleteBuffer(vt),B.deleteSync(se),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,V=0){b.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);let G=Math.pow(2,-V),F=Math.floor(b.image.width*G),st=Math.floor(b.image.height*G),dt=N!==null?N.x:0,_t=N!==null?N.y:0;E.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,dt,_t,F,st),Rt.unbindTexture()},this.copyTextureToTexture=function(b,N,V=null,G=null,F=0){b.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let st,dt,_t,yt,Dt,Nt,vt,$t,se,oe=b.isCompressedTexture?b.mipmaps[F]:b.image;V!==null?(st=V.max.x-V.min.x,dt=V.max.y-V.min.y,_t=V.isBox3?V.max.z-V.min.z:1,yt=V.min.x,Dt=V.min.y,Nt=V.isBox3?V.min.z:0):(st=oe.width,dt=oe.height,_t=oe.depth||1,yt=0,Dt=0,Nt=0),G!==null?(vt=G.x,$t=G.y,se=G.z):(vt=0,$t=0,se=0);let He=Ot.convert(N.format),Jt=Ot.convert(N.type),bt;N.isData3DTexture?(E.setTexture3D(N,0),bt=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),bt=B.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),bt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);let Fn=B.getParameter(B.UNPACK_ROW_LENGTH),Kt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),hn=B.getParameter(B.UNPACK_SKIP_PIXELS),fs=B.getParameter(B.UNPACK_SKIP_ROWS),Ze=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,yt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Dt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Nt);let cr=b.isDataArrayTexture||b.isData3DTexture,le=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Sn=Tt.get(b),hr=Tt.get(N),nn=Tt.get(Sn.__renderTarget),si=Tt.get(hr.__renderTarget);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,nn.__webglFramebuffer),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<_t;ri++)cr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tt.get(b).__webglTexture,F,Nt+ri),b.isDepthTexture?(le&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tt.get(N).__webglTexture,F,se+ri),B.blitFramebuffer(yt,Dt,st,dt,vt,$t,st,dt,B.DEPTH_BUFFER_BIT,B.NEAREST)):le?B.copyTexSubImage3D(bt,F,vt,$t,se+ri,yt,Dt,st,dt):B.copyTexSubImage2D(bt,F,vt,$t,se+ri,yt,Dt,st,dt);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else le?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(bt,F,vt,$t,se,st,dt,_t,He,Jt,oe.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(bt,F,vt,$t,se,st,dt,_t,He,oe.data):B.texSubImage3D(bt,F,vt,$t,se,st,dt,_t,He,Jt,oe):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,F,vt,$t,st,dt,He,Jt,oe.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,F,vt,$t,oe.width,oe.height,He,oe.data):B.texSubImage2D(B.TEXTURE_2D,F,vt,$t,st,dt,He,Jt,oe);B.pixelStorei(B.UNPACK_ROW_LENGTH,Fn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Kt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,hn),B.pixelStorei(B.UNPACK_SKIP_ROWS,fs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze),F===0&&N.generateMipmaps&&B.generateMipmap(bt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,V=null,G=null,F=0){return b.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,V,G,F)},this.initRenderTarget=function(b){Tt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,Rt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Ga=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wa=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},bc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Oe=new I,Xa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pr=class extends An{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rs,mr=new I,Cs=new I,Is=new I,Ps=new xt,gr=new xt,yd=new te,ma=new I,xr=new I,ga=new I,Vu=new xt,pl=new xt,Gu=new xt,qa=class extends ve{constructor(t=new Pr){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bc(e,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new Xa(n,3,0,!1)),Rs.setAttribute("uv",new Xa(n,2,3,!1))}this.geometry=Rs,this.material=t,this.center=new xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;xa(ma.set(-.5,-.5,0),Is,a,Cs,s,r),xa(xr.set(.5,-.5,0),Is,a,Cs,s,r),xa(ga.set(.5,.5,0),Is,a,Cs,s,r),Vu.set(0,0),pl.set(1,0),Gu.set(1,1);let o=t.ray.intersectTriangle(ma,xr,ga,!1,mr);if(o===null&&(xa(xr.set(-.5,.5,0),Is,a,Cs,s,r),pl.set(0,1),o=t.ray.intersectTriangle(ma,ga,xr,!1,mr),o===null))return;let l=t.ray.origin.distanceTo(mr);l<t.near||l>t.far||e.push({distance:l,point:mr.clone(),uv:fi.getInterpolation(mr,ma,xr,ga,Vu,pl,Gu,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function xa(i,t,e,n,s,r){Ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(gr.x=r*Ps.x-s*Ps.y,gr.y=s*Ps.x+r*Ps.y):gr.copy(Ps),i.copy(t),i.x+=gr.x,i.y+=gr.y,i.applyMatrix4(yd)}var Sc=class extends We{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ke,h=Ke,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ya=class extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ls=new te,Wu=new te,_a=[],Xu=new $n,m_=new te,_r=new kt,yr=new _i,Ws=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ya(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,m_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),Xu.copy(t.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),yr.copy(t.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),t.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),Wu.multiplyMatrices(n,Ls),_r.matrixWorld=Wu,_r.raycast(t,_a);for(let a=0,o=_a.length;a<o;a++){let l=_a[a];l.instanceId=r,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sc(new Float32Array(s*this.count),s,this.count,$c,Tn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Xs=class extends An{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Za=new I,$a=new I,qu=new te,vr=new Da,ya=new _i,ml=new I,Yu=new I,Lr=class extends ve{constructor(t=new fe,e=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Za.fromBufferAttribute(e,s-1),$a.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Za.distanceTo($a);t.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;qu.copy(s).invert(),vr.copy(t.ray).applyMatrix4(qu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),w=h.getX(x+1),S=va(this,t,vr,l,p,w);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=va(this,t,vr,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=va(this,t,vr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=va(this,t,vr,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function va(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(Za.fromBufferAttribute(a,s),$a.fromBufferAttribute(a,r),e.distanceSqToSegment(Za,$a,ml,Yu)>n)return;ml.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ml);if(!(l<t.near||l>t.far))return{distance:l,point:Yu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Zu=new I,$u=new I,Ja=class extends Lr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Zu.fromBufferAttribute(e,s),$u.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zu.distanceTo($u);t.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Kn=class extends We{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new xt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],a=[],o=new I,l=new te;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ka=class extends xn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},wc=class extends Ka{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ma=new I,gl=new nh,xl=new nh,_l=new nh,Dr=class extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ma.subVectors(s[0],s[1]).add(s[0]),c=Ma);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),gl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),xl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),_l.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(gl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),xl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),_l.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(gl.calc(l),xl.calc(l),_l.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ju(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function g_(i,t){let e=1-i;return e*e*t}function x_(i,t){return 2*(1-i)*i*t}function __(i,t){return i*i*t}function Tr(i,t,e,n){return g_(i,t)+x_(i,e)+__(i,n)}function y_(i,t){let e=1-i;return e*e*e*t}function v_(i,t){let e=1-i;return 3*e*e*i*t}function M_(i,t){return 3*(1-i)*i*i*t}function b_(i,t){return i*i*i*t}function Ar(i,t,e,n,s){return y_(i,t)+v_(i,e)+M_(i,n)+b_(i,s)}var Ec=class extends xn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(t,s.x,r.x,a.x,o.x),Ar(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tc=class extends xn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(t,s.x,r.x,a.x,o.x),Ar(t,s.y,r.y,a.y,o.y),Ar(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ac=class extends xn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rc=class extends xn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cc=class extends xn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Tr(t,s.x,r.x,a.x),Tr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends xn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Tr(t,s.x,r.x,a.x),Tr(t,s.y,r.y,a.y),Tr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ic=class extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Ju(o,l.x,c.x,h.x,d.x),Ju(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},S_=Object.freeze({__proto__:null,ArcCurve:wc,CatmullRomCurve3:Dr,CubicBezierCurve:Ec,CubicBezierCurve3:Tc,EllipseCurve:Ka,LineCurve:Ac,LineCurve3:Rc,QuadraticBezierCurve:Cc,QuadraticBezierCurve3:ja,SplineCurve:Ic});var Gi=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;w(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function w(){let _=new I,L=new I,A=0,C=(e-t)/n;for(let R=0;R<=r;R++){let M=[],y=R/r,T=y*(e-t)+t;for(let D=0;D<=s;D++){let P=D/s,O=P*l+o,W=Math.sin(O),H=Math.cos(O);L.x=T*W,L.y=-y*n+m,L.z=T*H,d.push(L.x,L.y,L.z),_.set(W,C,H).normalize(),u.push(_.x,_.y,_.z),f.push(P,1-y),M.push(g++)}x.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){let y=x[M][R],T=x[M+1][R],D=x[M+1][R+1],P=x[M][R+1];(t>0||M!==0)&&(h.push(y,T,P),A+=3),(e>0||M!==r-1)&&(h.push(T,D,P),A+=3)}c.addGroup(p,A,0),p+=A}function S(_){let L=g,A=new xt,C=new I,R=0,M=_===!0?t:e,y=_===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;let T=g;for(let D=0;D<=s;D++){let O=D/s*l+o,W=Math.cos(O),H=Math.sin(O);C.x=M*H,C.y=m*y,C.z=M*W,d.push(C.x,C.y,C.z),u.push(0,y,0),A.x=W*.5+.5,A.y=H*.5*y+.5,f.push(A.x,A.y),g++}for(let D=0;D<s;D++){let P=L+D,O=T+D;_===!0?h.push(O,O+1,P):h.push(O+1,O,P),R+=3}c.addGroup(p,R,_===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jn=class i extends Gi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qa=class i extends fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let S=new I,_=new I,L=new I;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],_),f(e[A+2],L),l(S,_,L,w)}function l(w,S,_,L){let A=L+1,C=[];for(let R=0;R<=A;R++){C[R]=[];let M=w.clone().lerp(_,R/A),y=S.clone().lerp(_,R/A),T=A-R;for(let D=0;D<=T;D++)D===0&&R===A?C[R][D]=M:C[R][D]=M.clone().lerp(y,D/T)}for(let R=0;R<A;R++)for(let M=0;M<2*(A-R)-1;M++){let y=Math.floor(M/2);M%2===0?(u(C[R][y+1]),u(C[R+1][y]),u(C[R][y])):(u(C[R][y+1]),u(C[R+1][y+1]),u(C[R+1][y]))}}function c(w){let S=new I;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(w),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){let w=new I;for(let S=0;S<r.length;S+=3){w.x=r[S+0],w.y=r[S+1],w.z=r[S+2];let _=m(w)/2/Math.PI+.5,L=p(w)/Math.PI+.5;a.push(_,1-L)}g(),d()}function d(){for(let w=0;w<a.length;w+=6){let S=a[w+0],_=a[w+2],L=a[w+4],A=Math.max(S,_,L),C=Math.min(S,_,L);A>.9&&C<.1&&(S<.2&&(a[w+0]+=1),_<.2&&(a[w+2]+=1),L<.2&&(a[w+4]+=1))}}function u(w){r.push(w.x,w.y,w.z)}function f(w,S){let _=w*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function g(){let w=new I,S=new I,_=new I,L=new I,A=new xt,C=new xt,R=new xt;for(let M=0,y=0;M<r.length;M+=9,y+=6){w.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),A.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),L.copy(w).add(S).add(_).divideScalar(3);let T=m(L);x(A,y+0,w,T),x(C,y+2,S,T),x(R,y+4,_,T)}}function x(w,S,_,L){L<0&&w.x===1&&(a[S]=w.x-1),_.x===0&&_.z===0&&(a[S]=L/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Wi=class i extends Qa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},to=class i extends Qa{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var yi=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let w=[],S=p/n,_=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let A=L/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(A+_,1-S),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let S=h[p][w+1],_=h[p][w],L=h[p+1][w],A=h[p+1][w+1];(p!==0||a>0)&&f.push(S,_,A),(p!==n-1||l<Math.PI)&&f.push(_,L,A)}this.setIndex(f),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qs=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(x,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var eo=class i extends fe{constructor(t=new ja(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new xt,h=new I,d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function x(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),w(),p()}function m(S){h=t.getPointAt(S/e,h);let _=a.normals[S],L=a.binormals[S];for(let A=0;A<=s;A++){let C=A/s*Math.PI*2,R=Math.sin(C),M=-Math.cos(C);l.x=M*_.x+R*L.x,l.y=M*_.y+R*L.y,l.z=M*_.z+R*L.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=e;S++)for(let _=1;_<=s;_++){let L=(s+1)*(S-1)+(_-1),A=(s+1)*S+(_-1),C=(s+1)*S+_,R=(s+1)*(S-1)+_;g.push(L,A,R),g.push(A,C,R)}}function w(){for(let S=0;S<=e;S++)for(let _=0;_<=s;_++)c.x=S/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new S_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var _n=class extends An{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ys=class extends An{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ba(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function w_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pc=class extends Zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yh:r=t,o=2*e-n;break;case Zh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yh:a=t,l=2*n-e;break;case Zh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,w=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+w*a[c+L]+S*a[l+L]+_*a[d+L];return r}},Lc=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Dc=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ba(e,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ba(t.times,Array),values:ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ra:e=this.InterpolantFactoryMethodDiscrete;break;case sc:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return sc;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&w_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ho,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=sc;var Xi=class extends yn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ra;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends yn{};Uc.prototype.ValueTypeName="color";var Nc=class extends yn{};Nc.prototype.ValueTypeName="number";var Fc=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},no=class extends yn{InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}};no.prototype.ValueTypeName="quaternion";no.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends yn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Ra;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends yn{};Oc.prototype.ValueTypeName="vector";var Bc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},E_=new Bc,zc=class{constructor(t){this.manager=t!==void 0?t:E_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},so=class extends io{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},yl=new te,Ku=new I,ju=new I,kc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ku),ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ju),e.updateMatrixWorld(),yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Hc=class extends kc{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ro=class extends io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Hc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ih="\\[\\]\\.:\\/",T_=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",A_="[^"+ih.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",sh),C_=/(WCOD+)?/.source.replace("WCOD",A_),I_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),P_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),L_=new RegExp("^"+R_+C_+I_+P_+"$"),D_=["material","materials","bones","map"],Vc=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(T_,"")}static parseTrackName(t){let e=L_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);D_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Vc;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Vt=72,Or=Object.freeze({offsets:[0,28.45,43.55],pavement:[28.45,43.55]}),ho=Math.PI*2,U_=new I(0,1,0),vd=new te,rh=new gn,js=new I,Md=new I,uo=new I,fo=new Lt;function Br(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function po(i,t,e=0,n=0){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^e^Math.imul(n,1274126177);return s=Math.imul(s^s>>>13,1274126177),(s^s>>>16)>>>0}function Qs(i){let t=i>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Fr=new an(1,1,1),ah=new Gi(1,1,1,10),Nr=new Gi(.72,1,1,9),bd=new jn(1,1,8),N_=new Wi(1,1),F_=new Wi(1,1),O_=new Gi(1,.72,1,9),B_=new qs(1,.12,5,16),Yi=class{constructor(){this.p=[],this.n=[],this.c=[],this.i=[],this.count=0}add(t,e,n,s,r,a,o,l,c=0,h=0,d=0){js.set(e,n,s),Md.set(r,a,o),rh.setFromEuler(new Xe(c,h,d)),vd.compose(js,rh,Md),fo.set(l);let u=t.attributes.position,f=t.attributes.normal,g=this.count;for(let x=0;x<u.count;x++)js.fromBufferAttribute(u,x).applyMatrix4(vd),this.p.push(js.x,js.y,js.z),uo.set(f.getX(x)/r,f.getY(x)/a,f.getZ(x)/o).applyQuaternion(rh).normalize(),this.n.push(uo.x,uo.y,uo.z),this.c.push(fo.r,fo.g,fo.b);if(t.index)for(let x=0;x<t.index.count;x++)this.i.push(t.index.getX(x)+g);else for(let x=0;x<u.count;x++)this.i.push(x+g);return this.count+=u.count,this}box(t,e,n,s,r,a,o,l=0){return this.add(Fr,t,e,n,s,r,a,o,0,l)}cyl(t,e,n,s,r,a,o=0,l=0){return this.add(ah,t,e,n,s,r,s,a,o,0,l)}ball(t,e,n,s,r,a,o,l=!1){return this.add(l?F_:N_,t,e,n,s,r,a,o)}beam(t,e,n,s){let r=new I(...t),a=new I(...e),o=a.clone().sub(r),l=new gn().setFromUnitVectors(U_,o.clone().normalize()),c=new Xe().setFromQuaternion(l);return this.add(ah,...r.add(a).multiplyScalar(.5).toArray(),n,o.length(),n,s,c.x,c.y,c.z)}geometry(){let t=new fe;return t.setAttribute("position",new zt(this.p,3)),t.setAttribute("normal",new zt(this.n,3)),t.setAttribute("color",new zt(this.c,3)),t.setIndex(this.i),t.computeBoundingSphere(),t.computeBoundingBox(),t}},Sd=["#d6c4a6","#c9b79b","#b9c0ae","#aeb9b2","#d8cbb2","#c4b49a","#b7bfae","#cbb9a4","#c2c7b6","#d2c1a4"],vi=["#8a5a44","#96604a","#7b5140","#5c6b66","#65756d","#6f6252","#8a6a4c","#5a6870"],je=["#6f8a52","#7d965c","#8a9f66","#62804f","#93a26b","#6b8757"],In=["#d9b76a","#d69a86","#e6d9b4","#b98a9a","#d9a85e"],wd=["Clover","Willow","Honey","Fern","Moss","Clementine","Juniper","Lavender","Pebble","Marigold","Chestnut","Meadow","Rosemary","Hazel","Poppy","Bramble"],Ed=["Quarter","Gardens","Lane","Hill","Corner","Heights","Common","Terrace"];function go(i,t,e){let n=po(Math.floor(i/2),Math.floor(t/2),e,71);return`${wd[n%wd.length]} ${Ed[(n>>>8)%Ed.length]}`}var mo=class{constructor(t,e){this.scene=t,this.seedText=e,this.seed=Br(e),this.chunks=new Map,this.colliders=[],this.buildings=[],this.parks=[],this.water=[],this.spatial=new Map,this.material=new _n({vertexColors:!0,roughness:.98,metalness:0,flatShading:!0}),this.center="",this.radius=2,this.pending=[]}update(t,e=1){let n=Math.floor((t.x+Vt/2)/Vt),s=Math.floor((t.z+Vt/2)/Vt),r=`${n},${s}`;if(r!==this.center){this.center=r,this.pending=[];for(let o=n-this.radius;o<=n+this.radius;o++)for(let l=s-this.radius;l<=s+this.radius;l++)this.chunks.has(`${o},${l}`)||this.pending.push({x:o,z:l,d:(o-n)**2+(l-s)**2});this.pending.sort((o,l)=>o.d-l.d);for(let[o,l]of this.chunks)(Math.abs(l.cx-n)>this.radius+1||Math.abs(l.cz-s)>this.radius+1)&&this.removeChunk(o);this.refreshColliders()}let a=0;for(;this.pending.length&&a<e;){let{x:o,z:l}=this.pending.shift();this.chunks.has(`${o},${l}`)||(this.createChunk(o,l),a++)}return a&&this.refreshColliders(),a}refreshColliders(){this.colliders=[],this.buildings=[],this.parks=[],this.water=[];for(let e of this.chunks.values())this.colliders.push(...e.colliders),this.buildings.push(...e.buildings),this.parks.push(...e.parks),this.water.push(...e.water);let t=new Map;for(let e of this.colliders)for(let n=Math.floor(e.minX/8);n<=Math.floor(e.maxX/8);n++)for(let s=Math.floor(e.minZ/8);s<=Math.floor(e.maxZ/8);s++){let r=n+","+s,a=t.get(r);a||t.set(r,a=[]),a.push(e)}this.spatial=t}removeChunk(t){let e=this.chunks.get(t);e&&(this.scene.remove(e.mesh),e.mesh.geometry.dispose(),this.chunks.delete(t))}dispose(){for(let t of this.chunks.keys())this.removeChunk(t);this.material.dispose()}solid(t,e,n,s,r,a,o,l={}){let c={shape:"box",minX:e-r/2,maxX:e+r/2,minY:n-a/2,maxY:n+a/2,minZ:s-o/2,maxZ:s+o/2,climbable:!0,...l};return t.colliders.push(c),c}cylinderSolid(t,e,n,s,r,a,o={}){let l={shape:"cylinder",x:e,z:s,r,minX:e-r,maxX:e+r,minY:n,maxY:n+a,minZ:s-r,maxZ:s+r,climbable:!1,...o};return t.colliders.push(l),l}ellipsoidSolid(t,e,n,s,r,a,o,l={}){let c={shape:"ellipsoid",x:e,y:n,z:s,rx:r,ry:a,rz:o,minX:e-r,maxX:e+r,minY:n-a,maxY:n+a,minZ:s-o,maxZ:s+o,climbable:!0,...l};return t.colliders.push(c),c}createChunk(t,e){let n=`${t},${e}`,s=Qs(po(t,e,this.seed)),r={cx:t,cz:e,key:n,batch:new Yi,colliders:[],buildings:[],parks:[],water:[],mesh:null},a=t*Vt,o=e*Vt,l=["#93a86f","#9aae75","#8fa46a","#a0b27b"][po(t,e,this.seed,4)%4];r.batch.box(a,-.2,o,Vt+.05,.4,Vt+.05,l);let c="#b9ae96",h="#cfc4ab";for(let u of[-1,1]){r.batch.box(a+u*32.5,.005,o,7,.08,Vt,c),r.batch.box(a,.006,o+u*32.5,Vt,.08,7,c);for(let f of[-1,1])r.batch.box(a+u*32.5+f*4.05,.055,o,1.05,.15,Vt-9,h),r.batch.box(a,.056,o+u*32.5+f*4.05,Vt-9,.15,1.05,h)}r.batch.box(a,.015,o,3,.07,58,"#b3a88f"),r.batch.box(a,.016,o,58,.07,3,"#b3a88f"),this.cars(r,s);for(let u=0;u<100;u++){let f=s()*68-34,g=(s()-.5)*5.4,x=u%2?a+32.5+g:a+f,m=u%2?o+f:o+32.5+g;r.batch.box(x,.052,m,.45+s()*.6,.018,.3+s()*.35,s()>.5?"#aaa08a":"#c4b99f",(s()-.5)*.2)}for(let u=0;u<4;u++){let f=u%2?16.5:-16.5,g=u<2?-16.5:16.5,x=a+f,m=o+g,p=Qs(po(t*4+u,e,this.seed,901));t===0&&e===0&&u===3||!(t===0&&e===0)&&p()<.23?this.makePark(r,x,m,p,u):this.makeBuilding(r,x,m,p,`${n}:${u}`,t===0&&e===0?u:-1)}for(let u of[-1,1])this.tree(r,a+u*27.4,o+5,s,.65),this.tree(r,a-7,o+u*27.4,s,.65),this.lamp(r,a+u*27.2,o-27.2),s()>.35&&this.bench(r,a+u*27,o+14,u*Math.PI/2);t===0&&e===0?this.makeSpawn(r,s):s()>.65&&this.bunting(r,a-12,o,a+12,o,6.5);let d=new kt(r.batch.geometry(),this.material);d.castShadow=!0,d.receiveShadow=!0,d.name=`neighborhood-${n}`,r.mesh=d,r.batch=null,this.chunks.set(n,r),this.scene.add(d)}makeBuilding(t,e,n,s,r,a=-1){let o=t.batch,l=12.5+s()*7.5,c=12+s()*7.5,h=2+Math.floor(s()*3),d=2.65+s()*.55,u=h*d+.4,f=Sd[Math.floor(s()*Sd.length)],g=vi[Math.floor(s()*vi.length)],x=Math.floor(s()*4);a===0&&(l=15+s()*3,c=13+s()*3,h=2+Math.floor(s()*2),u=h*3+.3,f=["#c9a684","#d2b795","#c4a083","#d6c1a0"][Math.floor(s()*4)],g=vi[Math.floor(s()*3)],x=0),a===1&&(l=14+s()*4,c=13+s()*3,u=6.5+s()*1.5,h=2,f=["#d8cbb2","#d2c5aa","#cbcbb4","#d6c4a4"][Math.floor(s()*4)],g=vi[3+Math.floor(s()*3)],x=2),a===2&&(l=14+s()*3,c=14+s()*3,u=9+s()*2,h=3,f=["#aeb9b2","#b3c0bc","#b9c0ae","#a8b7ab"][Math.floor(s()*4)],g=vi[Math.floor(s()*vi.length)],x=3),e+=(s()-.5)*1.6,n+=(s()-.5)*1.6;let m=s()>.5,p=x===0?2.4+s()*2:x===1?2.5+s()*1.7:0,w={id:r,x:e,z:n,w:l,d:c,h:u,roofType:x,roofRise:p,ridgeX:m,wall:f,roofColor:g,cx:t.cx,cz:t.cz,kind:"roof"};t.buildings.push(w);let S=this.solid(t,e,u/2,n,l,u,c,{buildingId:r,building:w,kind:"wall"});w.body=S,x<2&&t.colliders.push({shape:"roof",building:w,kind:"roof",climbable:!1,minX:e-l/2-.55,maxX:e+l/2+.55,minY:u,maxY:u+p,minZ:n-c/2-.55,maxZ:n+c/2+.55}),o.box(e,.18,n,l+.35,.45,c+.35,"#b8b6a0"),o.box(e,u/2,n,l,u,c,f),o.box(e,u-.12,n,l+.38,.25,c+.38,"#e8dfc4");let _="#ede5cd",L="#647e78",A=g;for(let T=1;T<h;T++)s()>.3&&o.box(e,T*d+.25,n,l+.1,.11,c+.1,"#d7d2b7");if(s()>.35)for(let T of[-1,1])for(let D of[-1,1])for(let P=.7;P<u-.5;P+=.85)o.box(e+T*(l/2-.06),P,n+D*(c/2-.06),.56,.37,.56,"#ded6bc");let C=a>=0?a===2?1:0:Math.floor(s()*4),R=(s()-.5)*l*.28;for(let T=0;T<4;T++){let D=T*Math.PI/2,P=Math.sin(D),O=Math.cos(D),W=O,H=-P,Z=T%2?c:l,z=T%2?l/2:c/2,tt=Math.max(2,Math.floor(Z/3.5));for(let nt=0;nt<h;nt++)for(let rt=0;rt<tt;rt++){let wt=(rt-(tt-1)/2)*(Z/(tt+.45));if(T===C&&nt===0&&Math.abs(wt-R)<2||s()<.07)continue;let Et=e+P*(z+.055)+W*wt,X=n+O*(z+.055)+H*wt,Q=nt*d+1.65,lt=1.12+s()*.32,at=1.5+s()*.24,At=s()>.82;if(o.box(Et,Q,X,lt+.24,at+.23,.16,_,D),o.box(Et+P*.1,Q,X+O*.1,lt,at,.06,At?"#dfcf97":L,D),o.box(Et+P*.15,Q,X+O*.15,.065,at,.06,_,D),o.box(Et+P*.15,Q+.05,X+O*.15,lt,.065,.06,_,D),o.box(Et+P*.13,Q-at/2-.1,X+O*.13,lt+.42,.16,.37,"#ded5bb",D),this.solid(t,Et+P*.13,Q-at/2-.1,X+O*.13,T%2?.37:lt+.42,.16,T%2?lt+.42:.37,{climbable:!1,kind:"sill"}),s()>.38)for(let St of[-1,1]){o.box(Et+W*St*(lt/2+.3),Q,X+H*St*(lt/2+.3),.39,at+.1,.12,A,D);for(let It=0;It<4;It++)o.box(Et+W*St*(lt/2+.3)+P*.075,Q-.5+It*.32,X+H*St*(lt/2+.3)+O*.075,.32,.045,.045,"#a5ad91",D)}if(s()>.76){o.box(Et+P*.28,Q-at/2-.13,X+O*.28,lt+.15,.27,.47,"#a78060",D);for(let St=0;St<4;St++){let It=(St-1.5)*.29;o.ball(Et+W*It+P*.3,Q-at/2+.1,X+H*It+O*.3,.22,.2,.22,je[St%je.length]),o.ball(Et+W*It+P*.3,Q-at/2+.25,X+H*It+O*.3,.105,.1,.105,In[Math.floor(s()*In.length)])}}}}{let T=C*Math.PI/2,D=Math.sin(T),P=Math.cos(T),O=P,W=-D,H=C%2?l/2:c/2,Z=e+D*(H+.1)+O*R,z=n+P*(H+.1)+W*R;if(o.box(Z,1.25,z,1.75,2.5,.2,_,T),o.box(Z+D*.12,1.2,z+P*.12,1.4,2.35,.08,"#5d796a",T),o.box(Z+D*.18,1.65,z+P*.18,.95,.85,.04,"#9aaf98",T),o.ball(Z+D*.23+O*.43,1.05,z+P*.23+W*.43,.065,.065,.065,"#d5b773"),o.box(Z+D*.45,.14,z+P*.45,2.15,.25,.95,"#cdc7ae",T),this.solid(t,Z+D*.35,.12,z+P*.35,C%2?.8:2.1,.24,C%2?2.1:.8,{climbable:!1}),s()>.4){let tt=vi[Math.floor(s()*vi.length)];for(let nt=0;nt<8;nt++){let rt=(nt-3.5)*.38;o.add(Fr,Z+O*rt+D*.65,2.85,z+W*rt+P*.65,.38,.1,1.65,nt%2?"#eee4c8":tt,.17,T),o.box(Z+O*rt+D*1.43,2.62,z+W*rt+P*1.43,.38,.28,.1,nt%2?"#eee4c8":tt,T)}this.solid(t,Z+D*.7,2.88,z+P*.7,C%2?1.5:3.04,.1,C%2?3.04:1.5,{climbable:!1,kind:"awning"})}this.pot(t,Z+O*1.45+D*.5,z+W*1.45+P*.5,s,.7)}if(s()>.38||a===0){let T=C,D=T*Math.PI/2,P=Math.sin(D),O=Math.cos(D),W=O,H=-P,Z=T%2?l/2:c/2,z=d+.38,tt=1.8,nt=e+P*(Z+.6)+W*tt,rt=n+O*(Z+.6)+H*tt,wt=T%2?1.5:3.7,Et=T%2?3.7:1.5;o.box(nt,z,rt,wt,.23,Et,"#c6bea1"),this.solid(t,nt,z,rt,wt,.23,Et,{climbable:!1});for(let X of[-1,1]){o.box(nt+P*.68+W*X*1.65,z+.55,rt+O*.68+H*X*1.65,T%2?.08:3.5,.08,T%2?3.5:.08,"#667b68");for(let Q=0;Q<7;Q++){let lt=(Q-3)*.52;o.box(nt+P*.68+W*lt,z+.3,rt+O*.68+H*lt,.055,.55,.055,"#667b68")}}this.pot(t,nt+W*1.2,rt+H*1.2,s,.5,z+.13)}if(x===0?this.gable(t,w,p,g,m):x===1?this.hip(t,w,p,g):x===2?this.flatRoof(t,w,s):this.steppedRoof(t,w,s),x<2&&s()>.2){let T=e+(s()-.5)*l*.55,D=n+(s()-.5)*c*.55,P=this.roofHeight(w,T,D);o.box(T,P+.8,D,1.05,1.9,1.05,"#c4aa8b"),this.solid(t,T,(P-.15+P+1.95)/2,D,1.05,2.1,1.05,{kind:"chimney"}),o.box(T,P+1.8,D,1.3,.22,1.3,"#ded0b1"),o.box(T,P+1.93,D,.7,.04,.7,"#6d7060");for(let O=.3;O<1.7;O+=.38)o.box(T,P+O,D+.532,1.05,.035,.015,"#b3977a")}if(s()>.43){let T=Math.floor(s()*4),D=T*Math.PI/2,P=Math.sin(D),O=Math.cos(D),W=T%2?l/2:c/2,H=(s()-.5)*5,Z=e+P*(W+.14)+O*H,z=n+O*(W+.14)-P*H;for(let tt=0;tt<u*3;tt++){let nt=.3+tt*.32,rt=Math.sin(tt*1.8)*.42;o.ball(Z+O*rt,nt,z-P*rt,.3+s()*.24,.28,.3+s()*.24,je[tt%je.length])}}let M=e-l/2-.8,y=n+c*.22;s()>.3&&(this.crate(t,M,.43,y,.86),s()>.5&&this.crate(t,M,1.23,y,.76),this.crate(t,M-.05,.36,y+1,.72)),this.pot(t,e+l/2+.7,n+c/2-1,s,.85);for(let T=0;T<6;T++){let D=e-l/2+1+T*(l-2)/5;Math.abs(D-(e+R))<1.5&&C===0||(o.ball(D,.28,n+c/2+1.1,.55,.38,.5,je[Math.floor(s()*je.length)]),s()>.4&&o.ball(D,.61,n+c/2+1.1,.14,.13,.14,In[Math.floor(s()*In.length)]))}}roofHeight(t,e,n){if(e<t.x-t.w/2-.55||e>t.x+t.w/2+.55||n<t.z-t.d/2-.55||n>t.z+t.d/2+.55)return-1/0;if(t.roofType===0){let s=t.ridgeX?n-t.z:e-t.x,r=(t.ridgeX?t.d:t.w)/2+.55;return t.h+t.roofRise*Math.max(0,1-Math.abs(s)/r)}if(t.roofType===1){let s=1-Math.abs(e-t.x)/(t.w/2+.55),r=1-Math.abs(n-t.z)/(t.d/2+.55);return t.h+t.roofRise*Math.min(1,Math.max(0,Math.min(s,r)/.84))}return t.upper&&Math.abs(e-t.upper.x)<t.upper.w/2&&Math.abs(n-t.upper.z)<t.upper.d/2?t.upper.h:t.h}gable(t,e,n,s,r){let a=e.w/2+.55,o=e.d/2+.55,l=[[-a,0,-o],[a,0,-o],[a,0,o],[-a,0,o],[0,n,-o],[0,n,o]];r&&(l=l.map(([_,L,A])=>[A,L,_]));let c=[[0,3,5],[0,5,4],[4,5,2],[4,2,1]],h=[];for(let _ of c)for(let L of _)h.push(...l[L]);let d=new fe;d.setAttribute("position",new zt(h,3)),d.setAttribute("normal",new zt(new Float32Array(h.length),3)),d.computeVertexNormals();let u=d.clone(),f=u.index,g=u.attributes.position.array;for(let _=0;_<g.length;_+=9)for(let L=0;L<3;L++){let A=g[_+L];g[_+L]=g[_+6+L],g[_+6+L]=A}u.computeVertexNormals(),t.batch.add(d,e.x,e.h,e.z,1,1,1,s),t.batch.add(u,e.x,e.h,e.z,1,1,1,s),d.dispose(),u.dispose();let x=e.wall;for(let _ of[-1,1]){let L=r?[_*a,0,-o,_*a,0,o,_*a,n,0]:[-a,0,_*o,a,0,_*o,0,n,_*o],A=new fe;A.setAttribute("position",new zt(L,3)),A.setAttribute("normal",new zt(new Float32Array(9),3)),A.computeVertexNormals(),t.batch.add(A,e.x,e.h-.02,e.z,1,1,1,x);let C=A.clone(),R=C.attributes.position.array;for(let M=0;M<3;M++){let y=R[M];R[M]=R[6+M],R[6+M]=y}C.computeVertexNormals(),t.batch.add(C,e.x,e.h-.02,e.z,1,1,1,x),A.dispose(),C.dispose()}let m=Math.atan2(n,r?o:a),p=Math.hypot(n,r?o:a),w=new Lt(s).multiplyScalar(1.075),S=Math.floor((r?a:o)*2/1.05);for(let _=0;_<=S;_++){let L=(_/S*2-1)*(r?a:o);for(let A of[-1,1])r?t.batch.add(Fr,e.x+L,e.h+n/2+.045,e.z+A*o/2,.045,.045,p,w,A*m,0,0):t.batch.add(Fr,e.x+A*a/2,e.h+n/2+.045,e.z+L,p,.045,.045,w,0,0,-A*m)}r?t.batch.cyl(e.x,e.h+n+.04,e.z,.13,e.w+1.25,s,0,Math.PI/2):t.batch.cyl(e.x,e.h+n+.04,e.z,.13,e.d+1.25,s,Math.PI/2)}hip(t,e,n,s){let r=e.w/2+.55,a=e.d/2+.55,o=r*.16,l=a*.16,c=[[-r,0,-a],[r,0,-a],[r,0,a],[-r,0,a],[-o,n,-l],[o,n,-l],[o,n,l],[-o,n,l]],h=[[0,4,5],[0,5,1],[1,5,6],[1,6,2],[2,6,7],[2,7,3],[3,7,4],[3,4,0],[4,7,6],[4,6,5]],d=[];for(let x of h)for(let m of x)d.push(...c[m]);let u=new fe;u.setAttribute("position",new zt(d,3)),u.setAttribute("normal",new zt(new Float32Array(d.length),3)),u.computeVertexNormals(),t.batch.add(u,e.x,e.h,e.z,1,1,1,s);let f=u.clone(),g=f.attributes.position.array;for(let x=0;x<g.length;x+=9)for(let m=0;m<3;m++){let p=g[x+m];g[x+m]=g[x+6+m],g[x+6+m]=p}f.computeVertexNormals(),t.batch.add(f,e.x,e.h,e.z,1,1,1,s),u.dispose(),f.dispose();for(let x of[-1,1])for(let m of[-1,1])t.batch.beam([e.x+x*r,e.h,e.z+m*a],[e.x+x*o,e.h+n+.03,e.z+m*l],.095,"#a89779")}flatRoof(t,e,n){let{x:s,z:r,w:a,d:o,h:l}=e,c="#d9d3b8";t.batch.box(s,l+.04,r,a-.3,.1,o-.3,"#b9bca3");for(let u of[-1,1])t.batch.box(s+u*(a/2-.12),l+.32,r,.26,.6,o,c),t.batch.box(s,l+.32,r+u*(o/2-.12),a,.6,.26,c),this.solid(t,s+u*(a/2-.12),l+.3,r,.26,.6,o,{climbable:!1}),this.solid(t,s,l+.3,r+u*(o/2-.12),a,.6,.26,{climbable:!1});if(n()>.35){let u=s-a*.22,f=r-o*.2,g=4.5,x=3.6;for(let m of[-1,1])for(let p of[-1,1])t.batch.box(u+m*g/2,l+1.35,f+p*x/2,.16,2.7,.16,"#a39370"),this.solid(t,u+m*g/2,l+1.35,f+p*x/2,.16,2.7,.16,{kind:"post"});for(let m=0;m<7;m++)t.batch.box(u-g/2+m*g/6,l+2.75,f,.14,.18,x+.5,"#b4a17b");this.solid(t,u,l+2.78,f,g+.14,.18,x+.5,{climbable:!1,kind:"pergola"}),this.bench(t,u,f,0,l),this.pot(t,u+g/2+.6,f+x/2,n,.8,l)}let h=s+a*.28,d=r-o*.26;t.batch.add(Nr,h,l+.75,d,.75,1.5,.75,"#8a9c8b"),t.batch.add(B_,h,l+1.3,d,.73,.73,.73,"#6d8273",Math.PI/2),this.solid(t,h,l+.75,d,1.4,1.5,1.4,{climbable:!1});for(let u=0;u<3;u++)this.pot(t,s-a*.3+u*1.4,r+o*.31,n,.6,l);if(n()>.45){let u=r+o*.16;t.batch.beam([s-3,l+1.8,u],[s+3,l+1.8,u],.025,"#9b9479");for(let f of[-1,1])t.batch.box(s+f*3,l+.9,u,.07,1.8,.07,"#a29475");for(let f=0;f<4;f++)t.batch.box(s-2+f*1.25,l+1.28,u,.85,1.02,.035,["#e9dfc3","#b7c7bc","#d5af94","#e4d6ad"][f],.06)}}steppedRoof(t,e,n){let s=e.w*.64,r=e.d*.65,a=2.8+n()*1.5,o=e.x-e.w*.12,l=e.z-e.d*.1;t.batch.box(o,e.h+a/2,l,s,a,r,e.wall),this.solid(t,o,e.h+(a+.21)/2,l,s,a+.21,r,{buildingId:e.id,building:e,kind:"wall"}),t.batch.box(o,e.h+a,l,s+.35,.25,r+.35,"#e4dac0"),t.batch.box(o,e.h+a+.15,l,s-.3,.12,r-.3,"#aeb69b");for(let c of[-1,1])t.batch.box(o+c*s/2,e.h+1.5,l,.12,1.5,1.5,"#ece2c7"),t.batch.box(o+c*(s/2+.08),e.h+1.5,l,.05,1.25,1.25,"#71897d");for(let c=0;c<3;c++)this.pot(t,e.x+e.w*.32,e.z-r/2+c*1.7,n,.7,e.h);e.upper={x:o,z:l,w:s,d:r,h:e.h+a+.21}}crate(t,e,n,s,r){this.solid(t,e,n,s,r,r,r,{climbable:!1}),t.batch.box(e,n,s,r,r,r,"#b99b70");for(let a of[-1,1])t.batch.box(e+a*r*.42,n,s+r*.51,r*.1,r,.055,"#d0b18a"),t.batch.box(e,n+a*r*.42,s+r*.51,r,r*.1,.055,"#d0b18a"),t.batch.box(e+r*.51,n,s+a*r*.42,.055,r,r*.1,"#d0b18a");t.batch.add(Fr,e,n,s+r*.53,r*.1,r*1.1,.055,"#c9aa80",0,0,-.75)}pot(t,e,n,s,r=1,a=0){this.cylinderSolid(t,e,a,n,.5*r,1.3*r,{kind:"pot"}),t.batch.add(O_,e,a+.35*r,n,.46*r,.7*r,.46*r,"#ba8b68"),t.batch.add(ah,e,a+.69*r,n,.48*r,.11*r,.48*r,"#caa17d"),t.batch.ball(e,a+1.02*r,n,.55*r,.55*r,.55*r,je[Math.floor(s()*je.length)]),s()>.5&&t.batch.ball(e+.15*r,a+1.4*r,n,.16*r,.13*r,.16*r,In[Math.floor(s()*In.length)])}tree(t,e,n,s,r=1,a=0){let o=(3.9+s()*1.4)*Math.pow(r,.55),l=je[Math.floor(s()*je.length)];t.batch.add(Nr,e,a+o*.43,n,.27*r,o*.86,.27*r,"#9b8965");let c={x:e,z:n,canopies:[]},h=(u,f,g,x,m,p)=>c.canopies.push(this.ellipsoidSolid(t,u,f,g,x,m,p,{tree:c,kind:"tree"}));if(s()>.82){for(let u=0;u<3;u++)t.batch.add(bd,e,a+o*.6+u*o*.23,n,(1.5-u*.28)*r,o*.65,(1.5-u*.28)*r,l);h(e,a+o*.78,n,1.05*r,o*.42,1.05*r)}else t.batch.beam([e,a+o*.5,n],[e+.8*r,a+o*.88,n+.3*r],.13*r,"#9b8965"),t.batch.ball(e,a+o,n,2.15*r,2.1*r,1.95*r,l,!0),t.batch.ball(e-1.15*r,a+o*.9,n+.3*r,1.45*r,1.35*r,1.5*r,l),t.batch.ball(e+.95*r,a+o*1.07,n-.45*r,1.45*r,1.4*r,1.45*r,je[(je.indexOf(l)+1)%je.length]),h(e,a+o,n,2.15*r,2.1*r,1.95*r),h(e-1.15*r,a+o*.9,n+.3*r,1.45*r,1.35*r,1.5*r),h(e+.95*r,a+o*1.07,n-.45*r,1.45*r,1.4*r,1.45*r);let d=Math.max(...c.canopies.map(u=>u.y+u.ry));this.cylinderSolid(t,e,a,n,.27*r,d-.05-a,{climbable:!0,tree:c,kind:"trunk"})}bench(t,e,n,s=0,r=0){let a=t.batch,o=Math.cos(s),l=Math.sin(s),c=(h,d)=>[e+h*o+d*l,n-h*l+d*o];for(let h=0;h<4;h++){let d=c(0,(h-1.5)*.18);a.box(d[0],r+.67,d[1],2.6,.12,.15,"#b49b73",s)}for(let h of[-1,1]){let d=c(h*1.02,0);a.box(d[0],r+.34,d[1],.13,.65,.65,"#73816a",s),a.box(d[0],r+.95,d[1]+.3,.12,1.1,.12,"#73816a",s)}for(let h=0;h<3;h++){let d=c(0,.32);a.box(d[0],r+.9+h*.19,d[1],2.6,.13,.1,"#b49b73",s)}this.solid(t,e,r+.64,n,Math.abs(o)*2.6+Math.abs(l)*.75,.18,Math.abs(l)*2.6+Math.abs(o)*.75,{climbable:!1,kind:"bench"})}lamp(t,e,n){this.cylinderSolid(t,e,0,n,.14,3.83,{climbable:!0,kind:"lamp"}),t.batch.add(Nr,e,1.7,n,.11,3.4,.11,"#667b63"),t.batch.cyl(e,.15,n,.25,.3,"#78866b"),t.batch.box(e,3.5,n,.46,.65,.46,"#eee0ae"),t.batch.add(bd,e,3.94,n,.43,.36,.43,"#657b62");for(let s of[-1,1])for(let r of[-1,1])t.batch.box(e+s*.23,3.5,n+r*.23,.045,.7,.045,"#667b63")}bunting(t,e,n,s,r,a){for(let[l,c]of[[e,n],[s,r]])t.batch.add(Nr,l,a/2,c,.09,a,.09,"#a09270"),t.batch.ball(l,a+.08,c,.13,.13,.13,"#b4a37d"),this.cylinderSolid(t,l,0,c,.1,a+.2,{kind:"pole",walkable:!1});let o=[e,a,n];for(let l=1;l<=14;l++){let c=l/14,h=e+(s-e)*c,d=n+(r-n)*c,u=a-Math.sin(c*Math.PI)*1.2;if(t.batch.beam(o,[h,u,d],.024,"#a39778"),o=[h,u,d],l%2===0){let f=[h,u-.04,d,h+.52,u-.08,d,h+.22,u-.75,d];for(let g of[!1,!0]){let x=new fe;x.setAttribute("position",new zt(g?[...f.slice(6,9),...f.slice(3,6),...f.slice(0,3)]:f,3)),x.setAttribute("normal",new zt(new Float32Array(9),3)),x.computeVertexNormals(),t.batch.add(x,0,0,0,1,1,1,["#c88f6e","#e1c780","#91a991","#c5b2a0"][l/2%4]),x.dispose()}}}}makePark(t,e,n,s,r){let a=t.batch,o=`park:${t.key}:${r}`;t.parks.push({id:o,x:e,z:n,r:10,cx:t.cx,cz:t.cz}),a.box(e,.025,n,24,.1,24,"#8fa66b"),a.box(e,.085,n,3.2,.08,25,"#c2b79d"),a.box(e,.086,n,25,.08,3.2,"#c2b79d");let l=e+4.5,c=n-4.3,h=3.4+s()*1.2;a.cyl(l,.01,c,h,.1,"#8ebbb0"),a.cyl(l,.047,c,h-.25,.03,"#a1c9ba"),t.water.push({x:l,z:c,r:h});for(let d=0;d<18;d++){let u=d/18*ho,f=l+Math.cos(u)*(h+.13),g=c+Math.sin(u)*(h+.13);a.ball(f,.21,g,.52,.28,.45,d%3?"#c5c6a8":"#d7d3b6"),this.solid(t,f,.2,g,.7,.4,.65,{climbable:!1})}for(let d=0;d<5;d++){let u=s()*ho,f=s()*h*.75,g=l+Math.cos(u)*f,x=c+Math.sin(u)*f;a.cyl(g,.14,x,.35,.025,"#82a67c"),d%2===0&&a.ball(g,.24,x,.12,.12,.12,"#e5c4b0")}for(let d=0;d<11;d++){let u=d/10,f=c-h+.3+u*(h*2-.6),g=.22+Math.sin(u*Math.PI)*.42;a.box(l,g,f,1.6,.15,.58,"#c3ac83"),this.solid(t,l,g,f,1.6,.15,.58,{climbable:!1})}for(let d of[-1,1])for(let u=0;u<4;u++){let f=u/3,g=c-h+.4+f*(h*2-.8),x=.55+Math.sin(f*Math.PI)*.42;a.box(l+d*.8,x,g,.08,.75,.08,"#a79570")}this.tree(t,e-6,n-6,s,1.35),this.tree(t,e+7,n+7,s,1.1),this.tree(t,e-7,n+6,s,.9),this.bench(t,e-4.5,n+2.2,Math.PI/2),this.bench(t,e+3,n+7,0),this.lamp(t,e-2.3,n+8.5);for(let d=0;d<26;d++){let u=e-9+s()*5,f=n-1+s()*10;a.ball(u,.2,f,.18,.23,.18,"#86a269"),a.ball(u,.42,f,.14,.12,.14,In[Math.floor(s()*In.length)])}for(let d=0;d<6;d++)a.box(e-10+d*1.6,.5,n+11,1.35,.85,.75,"#8fa873"),this.solid(t,e-10+d*1.6,.43,n+11,1.35,.86,.75,{climbable:!1})}cars(t,e){let n=t.cx*Vt,s=t.cz*Vt,r=["#b7c4c9","#c9b8a2","#8a9aa6","#a8b59a","#d2c7b4","#7c7f86","#b48c7a","#9fb3a0"];for(let a of[-1,1])for(let o of["x","z"]){let l=e()<.25?0:1+Math.floor(e()*2.6),c=-24+e()*6;for(let h=0;h<l&&c<23;h++){let d=o==="x",u=d?n+a*30.15:n+c,f=d?s+c:s+a*30.15;this.car(t,u,f,d,r[Math.floor(e()*r.length)],e),c+=5.2+e()*7}}}car(t,e,n,s,r,a){let o=t.batch,l=3.9,c=1.7,h=s?0:Math.PI/2,d=(_,L)=>s?[L,_]:[_,L],[u,f]=d(l,c),[g,x]=d(l*.52,c-.22),m=(a()-.5)*.3,p=s?e:e+m,w=s?n+m:n;o.box(e,.62,n,u,.62,f,r),o.box(e,.36,n,u-.1,.14,f-.1,"#4f5551"),o.box(p,1.2,w,g,.54,x,r);let S="#5f7579";for(let _ of[-1,1]){s?o.box(p+_*(x/2-0),1.23,w,.05,.36,g-.5,S):o.box(p,1.23,w+_*(x/2),g-.5,.36,.05,S);let[L,A]=d(.08,c-.5);s?o.box(p,1.23,w+_*g/2,A,.4,L,S):o.box(p+_*g/2,1.23,w,L,.4,A,S);let[C,R]=d(.08,.3);for(let M of[-1,1]){let y=s?e+_*.55:e+M*(l/2),T=s?n+M*(l/2):n+_*.55;o.box(y,.68,T,C,.16,R,M===1?"#ecd9a6":"#b8604f")}}for(let _ of[-1,1])for(let L of[-1,1]){let A=s?e+_*(c/2-.02):e+L*1.25,C=s?n+L*1.25:n+_*(c/2-.02);s?o.cyl(A,.33,C,.33,.24,"#30302c",0,Math.PI/2):o.cyl(A,.33,C,.33,.24,"#30302c",Math.PI/2,0),s?o.cyl(A+_*.02,.33,C,.17,.26,"#a9aba2",0,Math.PI/2):o.cyl(A,.33,C+_*.02,.17,.26,"#a9aba2",Math.PI/2,0)}this.solid(t,e,.48,n,u,.95,f,{kind:"car"}),this.solid(t,p,1.22,w,g,.54,x,{kind:"car"})}makeSpawn(t,e){let n=t.batch;n.cyl(0,.045,3,6.5,.1,"#c2b79d"),n.cyl(0,.105,3,5.8,.025,"#cfc4aa");for(let a=0;a<22;a++){let o=a/22*ho;n.box(Math.cos(o)*6.1,.13,3+Math.sin(o)*6.1,.65,.035,.38,"#cbc8aa",-o)}let s=-3.8,r=4.5;n.cyl(s,.25,r,1.35,.45,"#c4c5a8"),n.cyl(s,.49,r,1.15,.08,"#a8bca6"),n.add(Nr,s,.95,r,.25,1.1,.25,"#c9c9ad"),n.cyl(s,1.48,r,.7,.2,"#d7d3b6"),n.ball(s,1.67,r,.18,.2,.18,"#c1c5a5"),this.cylinderSolid(t,s,0,r,1.35,.53,{climbable:!1,kind:"fountain"}),this.cylinderSolid(t,s,.53,r,.27,.85,{climbable:!1,kind:"fountain"}),this.cylinderSolid(t,s,1.38,r,.7,.2,{climbable:!1,kind:"fountain"}),this.bench(t,3.8,6.5,-.4),this.pot(t,4.5,1,e,1),this.tree(t,-7.5,-4.5,e,.9),this.bunting(t,-12,-6,12,-6,6.2);for(let a=0;a<8;a++){let o=e()*ho,l=7+e()*2;n.ball(Math.cos(o)*l,.16,3+Math.sin(o)*l,.2,.18,.2,"#91ab70"),n.ball(Math.cos(o)*l,.34,3+Math.sin(o)*l,.12,.12,.12,In[a%In.length])}}inWater(t,e){return this.water.find(n=>(t-n.x)**2+(e-n.z)**2<n.r*n.r)}groundHeight(t,e){let n=t-Math.round(t/Vt)*Vt,s=e-Math.round(e/Vt)*Vt,r=Math.abs(n),a=Math.abs(s),o=c=>Math.abs(c-28.45)<.525||Math.abs(c-35.45)<.525;if(o(r)&&a<=31.5||o(a)&&r<=31.5)return .13;let l=0;for(let c of this.parks){let h=Math.abs(t-c.x),d=Math.abs(e-c.z);if(h<12&&d<12){if(h<1.6&&d<12.5||d<1.6&&h<12.5)return .125;l=.075;break}}if(l)return l;if(Math.abs(t)<36&&Math.abs(e)<36){let c=Math.hypot(t,e-3);if(c<5.8)return .1175;if(c<6.5)return .095}return r<1.5&&a<29||a<1.5&&r<29?.05:r>29&&r<=36||a>29&&a<=36?.045:0}};var Zi=vn.damp,tr=vn.clamp;function z_(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128);for(let n=0;n<2600;n++){let s=Math.random()*.09;t.fillStyle=`rgba(70,45,25,${s})`,t.fillRect(Math.random()*128,Math.random()*128,1+Math.random()*2,1)}let e=new Kn(i);return e.wrapS=e.wrapT=Hi,e.repeat.set(2,2),e}var xo=class{constructor(t,e=1){this.size=e,this.root=new ue,this.root.scale.setScalar(e),this.model=new ue,this.root.add(this.model),t.add(this.root),this.materials={};let n=z_(),s=(u,f,g=.95,x=null)=>this.materials[u]=new _n({color:f,roughness:g,map:x});s("fur","#c8874a",.96,n),s("light","#e9dcc4",.97,n),s("stripe","#8f5c32",.97),s("ear","#c9967e"),s("eye","#7fa05a",.55),s("pupil","#20281f",.4),s("shine","#fff9e8",.3),s("nose","#b97a6b",.7),s("collar","#5d7463",.8),s("bell","#c9a35c",.45);let r=new yi(1,18,14),a=(u,f,g,x,m,p,w,S)=>{let _=new kt(r,this.materials[f]);return _.position.set(g,x,m),_.scale.set(p,w,S),_.castShadow=!0,_.receiveShadow=!0,u.add(_),_};this.spine=new ue,this.model.add(this.spine),this.body=a(this.spine,"fur",0,.68,-.08,.34,.34,.62),this.chest=a(this.spine,"fur",0,.72,.3,.31,.33,.34),a(this.spine,"light",0,.6,.38,.24,.24,.2),this.hind=a(this.spine,"fur",0,.68,-.42,.32,.32,.32),this.head=new ue,this.head.position.set(0,1.02,.56),this.spine.add(this.head),a(this.head,"fur",0,0,0,.33,.3,.29),a(this.head,"light",0,-.11,.22,.22,.14,.12),a(this.head,"light",-.095,-.1,.27,.11,.085,.08),a(this.head,"light",.095,-.1,.27,.11,.085,.08),this.eyes=[],this.pupils=[];for(let u of[-1,1]){let f=a(this.head,"eye",u*.15,.035,.255,.055,.06,.03),g=a(f,"pupil",0,0,.7,.45,.72,.3);a(f,"shine",-.25,.3,.85,.18,.18,.18),this.eyes.push(f),this.pupils.push(g);let x=new ue;x.position.set(u*.22,.22,-.02),x.rotation.z=-u*.22,this.head.add(x);let m=new jn(.15,.34,4);m.rotateY(Math.PI/4);let p=new kt(m,this.materials.fur);p.position.y=.1,p.scale.z=.6,p.castShadow=!0,x.add(p);let w=new kt(new jn(.09,.22,4),this.materials.ear);w.rotation.y=Math.PI/4,w.position.set(0,.1,.055),w.scale.z=.25,x.add(w),u===1?this.twitchEar=x:this.otherEar=x}a(this.head,"nose",0,-.075,.345,.05,.035,.03);let o=new fe().setFromPoints([new I(0,-.1,.34),new I(0,-.14,.33),new I(-.05,-.155,.32),new I(0,-.14,.33),new I(.05,-.155,.32)]);this.head.add(new Lr(o,new Xs({color:"#7d6a55"})));let l=[];for(let u of[-1,1])for(let f=0;f<3;f++)l.push(new I(u*.14,-.1+f*.025,.31),new I(u*.46,-.14+f*.06,.28+(f-1)*.03));this.head.add(new Ja(new fe().setFromPoints(l),new Xs({color:"#e8dcc4",transparent:!0,opacity:.7})));for(let u of[-.095,0,.095]){let f=a(this.head,"stripe",u,.215,.13,.028,.024,.1);f.rotation.x=.45}for(let u of[-.42,-.16,.1]){let f=new Dr([new I(-.28,.82,u),new I(-.15,.98,u),new I(0,1.02,u),new I(.15,.98,u),new I(.28,.82,u)]),g=new kt(new eo(f,12,.024,6,!1),this.materials.stripe);g.castShadow=!0,this.spine.add(g)}this.legs=[];let c=[{x:-.22,z:.34,front:!0,phase:0},{x:.22,z:.34,front:!0,phase:Math.PI},{x:-.22,z:-.42,front:!1,phase:Math.PI},{x:.22,z:-.42,front:!1,phase:0}];for(let u of c){let f=new ue;f.position.set(u.x,.55,u.z),this.spine.add(f),a(f,"fur",0,-.13,0,.095,.18,.1),u.front||a(f,"fur",0,-.04,-.02,.14,.18,.15);let g=new ue;g.position.y=-.27,f.add(g),a(g,"fur",0,-.12,0,.075,.15,.08);let x=a(g,"light",0,-.26,.03,.1,.075,.13);this.legs.push({hip:f,knee:g,paw:x,...u})}this.tail=new ue,this.tail.position.set(0,.78,-.66),this.spine.add(this.tail),this.tailSegments=[];let h=this.tail;for(let u=0;u<6;u++){let f=new ue;f.position.set(0,u===0?0:.16,u===0?0:-.035),h.add(f);let g=.075-u*.007;a(f,u===5?"light":"fur",0,.08,-.015,g,.1,g),this.tailSegments.push(f),h=f}let d=new kt(new qs(.26,.03,8,24),this.materials.collar);d.position.set(0,.88,.44),d.rotation.x=.2,this.spine.add(d),a(this.spine,"bell",0,.72,.66,.055,.065,.055),this.phase=0,this.restBlend=0,this.climbBlend=0,this.blinkTime=3,this.squash=0,this.tailSway=0,this.headLook=0,this.shadow=new kt(new Cn(2.1,2.1),new Jn({map:this.shadowTexture(),transparent:!0,opacity:.22,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,t.add(this.shadow)}shadowTexture(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,2,32,32,31);return n.addColorStop(0,"rgba(35,45,30,.65)"),n.addColorStop(.4,"rgba(35,45,30,.3)"),n.addColorStop(1,"rgba(35,45,30,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),new Kn(t)}update(t,e,n,s,r=!1){let{speed:a=0,grounded:o=!0,climbing:l=!1,resting:c=!1,vy:h=0,turnRate:d=0,accel:u=0,landImpact:f=0,runBlend:g=0}=n,x=a>.15&&!c,m=a>6.2?1:0;this.phase+=t*(2.4+Math.min(a,13)*1.45),this.restBlend=Zi(this.restBlend,c?1:0,4.5,t),this.climbBlend=Zi(this.climbBlend,l?1:0,10,t),this.squash=Zi(this.squash,f,9,t);let p=tr(a/5,0,1),w=x&&o?Math.abs(Math.sin(this.phase*(m?1:2)))*.035*p:Math.sin(e*1.8)*.008,S=tr(-d*.045,-.32,.32)*p,_=tr(-u*.012,-.16,.16)+(o?0:tr(-h*.025,-.28,.22));this.model.rotation.x=-this.climbBlend*1.12+_*(1-this.climbBlend),this.model.rotation.z=S*(1-this.restBlend)+(x&&o?Math.sin(this.phase)*.018*p:0),this.model.position.y=w-this.restBlend*.2-this.squash*.09,this.model.position.z=-this.climbBlend*.1,this.spine.rotation.x=Math.sin(this.phase*2)*.025*p+this.restBlend*.08,this.spine.scale.y=1-this.squash*.12+this.restBlend*.02,this.spine.scale.x=1+this.squash*.08,this.body.scale.z=.62+Math.sin(this.phase*2)*.015*p,this.chest.position.y=.72+Math.sin(this.phase*2+.6)*.012*p,this.hind.position.y=.68+Math.sin(this.phase*2+Math.PI)*.014*p;for(let R of this.legs){let M=this.phase+R.phase+(m?R.front?0:.55:0),y=Math.max(0,Math.sin(M)),T=x&&o?-Math.cos(M)*(.42+.3*g)*p:0,D=x&&o?y*(.55+.35*g)*p:0;if(l){let P=this.phase*1.25+R.phase;T=-.85+Math.sin(P)*.55,D=.7+Math.max(0,Math.cos(P))*.6}else o||(T=R.front?-.7+tr(h*.03,-.2,.25):.55-tr(h*.025,-.2,.25),D=R.front?.8:.45);T*=1-this.restBlend,D*=1-this.restBlend,R.hip.rotation.x=Zi(R.hip.rotation.x,T+this.restBlend*(R.front?-.9:.9),18,t),R.knee.rotation.x=Zi(R.knee.rotation.x,D+this.restBlend*1.5,18,t),R.hip.rotation.z=(R.x>0?1:-1)*this.restBlend*.28,R.paw.rotation.x=-R.knee.rotation.x*.45}this.head.position.y=1.02-this.restBlend*.25-w*.55,this.head.position.z=.56+this.restBlend*.04,this.head.rotation.x=this.restBlend*.22+(l?-.25:0)-_*.55+Math.sin(this.phase*2)*.012*p,this.headLook=Zi(this.headLook,!x&&!c&&!r?Math.sin(e*.5)*.18:-S*.5,3,t),this.head.rotation.y=this.headLook,this.head.rotation.z=!x&&!c?Math.sin(e*.8)*.02:-S*.25,this.tailSway=Zi(this.tailSway,x?Math.sin(this.phase*.7)*.22:Math.sin(e*1.6)*.16,4,t);for(let R=0;R<this.tailSegments.length;R++){let M=this.tailSegments[R],y=R*.45;M.rotation.z=Math.sin(e*(c?1.1:2.2)-y)*(c?.08:.12)+this.tailSway*(R/6),M.rotation.x=(R===0?.35:.12)+Math.sin(e*1.3-y)*.05-this.restBlend*.32+(l?.18:0)+S*.08*R,M.rotation.y=this.restBlend*.22*R}let L=!x&&Math.sin(e*.7)>.985?Math.sin(e*25)*.12:0;this.twitchEar.rotation.z=-.22+L-S*.15,this.otherEar.rotation.z=.22-L*.6-S*.15,this.blinkTime-=t,this.blinkTime<-.13&&(this.blinkTime=3+Math.random()*4);let A=this.blinkTime<0||c?.1:1;for(let R of this.eyes)R.scale.y=.06*A;for(let R of this.pupils)R.scale.y=.72*A;this.shadow.position.set(this.root.position.x,s+.02,this.root.position.z);let C=this.size*(1+Math.min(3,Math.max(0,this.root.position.y-s))*.35);this.shadow.scale.set(C,C,1),this.shadow.material.opacity=.3/(1+Math.max(0,this.root.position.y-s)*.8)}};var _o=class{constructor(){this.context=null,this.enabled=!0,this.volume=.4,this.started=!1,this.birdTimer=4,this.noteTimer=1,this.chord=0,this.resting=!1}async start(){if(!this.context){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.context=new t;let e=this.context;this.master=e.createGain(),this.master.gain.value=this.enabled?this.volume*.55:0,this.master.connect(e.destination);let n=e.createBuffer(1,e.sampleRate*4,e.sampleRate),s=n.getChannelData(0),r=0;for(let c=0;c<s.length;c++)r=(r+(Math.random()*2-1)*.018)/1.018,s[c]=r*3.5;let a=e.createBufferSource();a.buffer=n,a.loop=!0;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=550;let l=e.createGain();l.gain.value=.11,a.connect(o),o.connect(l),l.connect(this.master),a.start(),this.wind=a}if(this.started=!0,this.context.state==="suspended")try{await this.context.resume()}catch{}}setEnabled(t){this.enabled=t,t&&this.start(),this.applyVolume()}setVolume(t){this.volume=t,this.applyVolume()}applyVolume(){this.context&&this.master.gain.setTargetAtTime(this.enabled?this.volume*.55:0,this.context.currentTime,.15)}tone(t,e,n,s=.06,r="sine",a=null){if(!this.context||!this.enabled)return;let o=this.context,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.setValueAtTime(t,e),a&&l.frequency.exponentialRampToValueAtTime(a,e+n*.7),c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(s,e+Math.min(.04,n*.15)),c.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(c),c.connect(this.master),l.start(e),l.stop(e+n+.05),l.onended=()=>{l.disconnect(),c.disconnect()}}update(t){if(!(!this.started||!this.enabled||!this.context||this.context.state!=="running")){if(this.birdTimer-=t,this.noteTimer-=t,this.birdTimer<0){let e=this.context.currentTime,n=1700+Math.random()*800;for(let s=0;s<3;s++)this.tone(n+s*110,e+s*.15,.11,.028,"sine",n+500+s*70);this.birdTimer=7+Math.random()*12}if(this.noteTimer<0){let e=[[196,246.94,293.66],[174.61,220,261.63],[164.81,196,246.94],[174.61,220,293.66]],n=this.context.currentTime;for(let[s,r]of e[this.chord%e.length].entries())this.tone(r,n+s*.35,6,.018);this.chord++,this.noteTimer=10+Math.random()*4}}}discovery(){if(!this.context)return;let t=this.context.currentTime;[523.25,659.25,783.99].forEach((e,n)=>this.tone(e,t+n*.14,1.3,.07))}jump(){this.context&&this.tone(280,this.context.currentTime,.15,.025,"sine",440)}land(){this.context&&this.tone(130,this.context.currentTime,.1,.025,"sine",80)}greet(){if(!this.context)return;let t=this.context.currentTime;this.tone(660,t,.16,.03,"sine",880),this.tone(880,t+.14,.22,.028,"sine",990)}tweet(){if(!this.context)return;let t=this.context.currentTime;this.tone(2400,t,.07,.012,"sine",3100),this.tone(2900,t+.09,.06,.01,"sine",2500)}chirp(){this.context&&this.tone(1500,this.context.currentTime,.09,.02,"sine",2100)}purr(){this.context&&this.tone(58,this.context.currentTime,.65,.025,"triangle",52)}suspend(){this.context?.state==="running"&&this.context.suspend().catch(()=>{})}resume(){this.started&&this.context?.state==="suspended"&&this.context.resume().catch(()=>{})}};var re=Object.freeze({scale:.34,radius:.16,height:.49,step:.25,gravity:22,jump:7.7,sprintJump:8.25,climb:6.8}),Pn=vn.clamp,er=1e-5,Ad=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),Td=(i,t,e,n)=>i+Ad(i,t)*(1-Math.exp(-e*n));function yo(i,t,e){if(i.shape==="cylinder")return Math.hypot(t-i.x,e-i.z)<=i.r?i.maxY:-1/0;if(i.shape==="ellipsoid"){let n=((t-i.x)/i.rx)**2+((e-i.z)/i.rz)**2;return n<=.88?i.y+i.ry*Math.sqrt(1-n):-1/0}if(i.shape==="roof"){let n=i.building,s=n.w/2+.55,r=n.d/2+.55;if(Math.abs(t-n.x)>s||Math.abs(e-n.z)>r)return-1/0;if(n.roofType===0){let a=n.ridgeX?e-n.z:t-n.x,o=n.ridgeX?r:s;return n.h+n.roofRise*Math.max(0,1-Math.abs(a)/o)}if(n.roofType===1){let a=1-Math.abs(t-n.x)/s,o=1-Math.abs(e-n.z)/r;return n.h+n.roofRise*Math.min(1,Math.max(0,Math.min(a,o)/.84))}return n.h}return t>=i.minX&&t<=i.maxX&&e>=i.minZ&&e<=i.maxZ?i.maxY:-1/0}var vo=class{constructor(t){this.world=t,this.stamp=0,this.seen=new WeakMap,this.dynamic=[]}query(t,e,n=1){let s=this.world.spatial,r=[],a=++this.stamp;for(let o of this.dynamic)Math.abs(o.x-t)<n+o.r&&Math.abs(o.z-e)<n+o.r&&r.push(o);if(!s)return r.push(...this.world.colliders),r;for(let o=Math.floor((t-n)/8);o<=Math.floor((t+n)/8);o++)for(let l=Math.floor((e-n)/8);l<=Math.floor((e+n)/8);l++){let c=s.get(o+","+l);if(c)for(let h of c)this.seen.get(h)!==a&&(this.seen.set(h,a),r.push(h))}return r}highest(t,e,n){let s=Math.min(n,this.world.groundHeight(t,e));for(let r of this.query(t,e,.2)){if(r.walkable===!1)continue;let a=yo(r,t,e);Number.isFinite(a)&&a<=n&&a>s&&(s=a)}return s}support(t,e,n,s=!0){let r=this.world.groundHeight(t,e),a={y:r<=n+er?r:0,solid:null};for(let o of this.query(t,e,.2)){if(o.walkable===!1||!s&&o.shape==="roof")continue;let l=yo(o,t,e);Number.isFinite(l)&&l<=n+er&&l>a.y&&(a={y:l,solid:o})}return a}resolve(t,e,n,s=null){let r=0;for(let a=0;a<3;a++){let o=!1;for(let l of this.query(t.x,t.z,e+.1)){if(l===s||l.sensor||l.shape==="roof"||s&&l.tree&&s.tree&&l.tree===s.tree||t.y+n<=l.minY+.025||t.y>=l.maxY-.035)continue;let c,h,d,u;if(l.shape==="cylinder"||l.shape==="ellipsoid"){let g=l.r,x=l.r;if(l.shape==="ellipsoid"){let p=Pn((t.y+n*.45-l.y)/l.ry,-.98,.98),w=Math.sqrt(1-p*p);g=l.rx*w,x=l.rz*w;let S=yo(l,t.x,t.z);if(Number.isFinite(S)&&t.y>=S-.09)continue}if(c=t.x-l.x,h=t.z-l.z,Math.hypot(c/g,h/x)>=1+e/Math.min(g,x)||(d=Math.hypot(c,h),d<er&&(c=1,h=0,d=1),u=Math.min(g,x)+e,d>=u))continue}else{let g=Pn(t.x,l.minX,l.maxX),x=Pn(t.z,l.minZ,l.maxZ);if(c=t.x-g,h=t.z-x,d=Math.hypot(c,h),d>=e)continue;if(d<er){let m=[{d:t.x-l.minX,x:-1,z:0},{d:l.maxX-t.x,x:1,z:0},{d:t.z-l.minZ,x:0,z:-1},{d:l.maxZ-t.z,x:0,z:1}].sort((p,w)=>p.d-w.d);c=m[0].x,h=m[0].z,d=0,u=e+m[0].d}else u=e}let f=u-d+.001;t.x+=c/(d||1)*f,t.z+=h/(d||1)*f,r++,o=!0}if(!o)break}return r}ceiling(t,e,n,s,r,a){let o=e;for(let l of this.query(n,s,a)){if(l.shape==="roof"||l.shape==="ellipsoid"||l.sensor)continue;let c=yo(l,n,s);!Number.isFinite(c)||l.minY<=t+r-.025||t+r<=l.minY+.02&&e+r>=l.minY&&(o=Math.min(o,l.minY-r-.01))}return o}nearbyWall(t,e=.52,n=null,s=null){let r=null,a=1/0;for(let o of this.query(t.x,t.z,e+.4)){if(o===s||!o.climbable||o.maxY<=t.y+.015||o.minY>t.y+re.height)continue;let l,c,h,d,u;if(o.shape==="cylinder"||o.shape==="ellipsoid"){l=t.x-o.x,c=t.z-o.z,u=Math.hypot(l,c)||1,l/=u,c/=u;let x=o.r;if(o.shape==="ellipsoid"){let m=Pn((t.y-o.y)/o.ry,-.95,.95);x=Math.min(o.rx,o.rz)*Math.sqrt(1-m*m)}h=o.x+l*x,d=o.z+c*x,u=Math.max(0,Math.hypot(t.x-o.x,t.z-o.z)-x)}else if(h=Pn(t.x,o.minX,o.maxX),d=Pn(t.z,o.minZ,o.maxZ),l=t.x-h,c=t.z-d,u=Math.hypot(l,c),u<er){let x=[{d:t.x-o.minX,x:-1,z:0},{d:o.maxX-t.x,x:1,z:0},{d:t.z-o.minZ,x:0,z:-1},{d:o.maxZ-t.z,x:0,z:1}].sort((m,p)=>m.d-p.d);l=x[0].x,c=x[0].z,u=0}else l/=u,c/=u;if(u>e)continue;let f=n==null?0:Math.max(0,-(l*Math.sin(n)+c*Math.cos(n))),g=u-f*.12-(o.kind==="tree"?.04:0);g<a&&(a=g,r={solid:o,nx:l,nz:c,qx:h,qz:d,distance:u})}return r}};function Rd(i){return{pos:new I(i?.x??1.1,i?.y??0,i?.z??7.1),vx:0,vz:0,vy:0,heading:i?.heading??.55,speed:0,grounded:!0,coyote:.14,jumpBuffer:0,jumpCut:!1,climbCooldown:0,climbing:null,mantling:0,landImpact:0,turnRate:0,accel:0,runBlend:0,moveAmount:0,airTime:0,support:null,distance:0}}function Cd(i,t,e,n,s={}){i.climbCooldown=Math.max(0,i.climbCooldown-n),i.jumpBuffer=Math.max(0,i.jumpBuffer-n),i.mantling=Math.max(0,i.mantling-n),i.landImpact*=Math.exp(-9*n);let r=t.x,a=t.y;i.mantling>0&&(r=a=0);let o=Math.hypot(r,a),l=Math.min(1,o);o>1e-4?(r/=o,a/=o):r=a=0,i.moveAmount=l;let c=e.nearbyWall(i.pos,.5,i.heading,i.grounded?i.support:null),h=t.climb||t.autoClimb&&l>.3&&!i.grounded&&i.airTime>.09&&i.vy<3.2;if(h&&c&&i.climbCooldown===0&&!t.resting){let P=c.solid;if(i.climbing=c,i.grounded=!1,i.vy=0,i.vx=i.vz=0,i.speed=re.climb,i.heading=Td(i.heading,Math.atan2(-c.nx,-c.nz),20,n),i.pos.y+=re.climb*n,P.shape==="ellipsoid"||P.tree){let O=P.shape==="ellipsoid"?P:P.tree?.canopies?.find(W=>i.pos.y>W.y-W.ry*.8);if(O){let W=Pn((i.pos.y-O.y)/O.ry,-.96,.98),H=Math.min(O.rx,O.rz)*Math.sqrt(1-W*W)+re.radius+.035,Z=Math.hypot(i.pos.x-O.x,i.pos.z-O.z)||1,z=(i.pos.x-O.x)/Z,tt=(i.pos.z-O.z)/Z;i.pos.x=O.x+z*H,i.pos.z=O.z+tt*H,i.heading=Math.atan2(-z,-tt)}else P.shape!=="ellipsoid"&&(i.pos.x+=(c.qx+c.nx*(re.radius+.025)-i.pos.x)*(1-Math.exp(-24*n)),i.pos.z+=(c.qz+c.nz*(re.radius+.025)-i.pos.z)*(1-Math.exp(-24*n)))}else i.pos.x+=(c.qx+c.nx*(re.radius+.025)-i.pos.x)*(1-Math.exp(-24*n)),i.pos.z+=(c.qz+c.nz*(re.radius+.025)-i.pos.z)*(1-Math.exp(-24*n));if(i.pos.y>=P.maxY-.035){let O=P.shape==="box"?c.nx:(i.pos.x-P.x)/(Math.hypot(i.pos.x-P.x,i.pos.z-P.z)||1),W=P.shape==="box"?c.nz:(i.pos.z-P.z)/(Math.hypot(i.pos.x-P.x,i.pos.z-P.z)||1),H=P.shape!=="box"&&Math.min(P.rx??P.r,P.rz??P.r)<.6;H?(i.pos.x=P.x,i.pos.z=P.z):(i.pos.x-=O*(re.radius+.24),i.pos.z-=W*(re.radius+.24)),i.pos.y=Math.max(e.highest(i.pos.x,i.pos.z,P.maxY+1.6),P.minY)+.025,i.vy=H?.6:1.2,i.vx=H?0:-O*1.1,i.vz=H?0:-W*1.1,i.climbing=null,i.climbCooldown=.38,i.mantling=.3,i.jumpBuffer=0,s.mantle?.(P)}return{wall:c,climbed:!0}}i.climbing&&!h&&(i.vy=.4,i.climbCooldown=.18),i.climbing=null;let d=!!t.sprint;i.runBlend+=((d&&l>.05?1:0)-i.runBlend)*(1-Math.exp(-9*n));let u=l>.02?.32+.68*Math.pow(l,.8):0,f=(t.baseSpeed+(t.sprintSpeed-t.baseSpeed)*i.runBlend)*u;t.resting&&(f=0),e.world.inWater(i.pos.x,i.pos.z)&&i.pos.y<.2&&(f*=.7);let g=Math.cos(t.yaw),x=Math.sin(t.yaw),m=(r*g+a*x)*f,p=(-r*x+a*g)*f,w=Math.hypot(i.vx,i.vz),S=i.grounded?l>.02?24:30:10,_=1-Math.exp(-S*n);i.vx+=(m-i.vx)*_,i.vz+=(p-i.vz)*_,i.accel=Pn((Math.hypot(i.vx,i.vz)-w)/n,-40,40),i.coyote=i.grounded?.14:Math.max(0,i.coyote-n),t.jump&&(i.jumpBuffer=.18,t.jump=!1),i.jumpBuffer>0&&i.coyote>0&&!t.resting&&(i.vy=d?re.sprintJump:re.jump,i.grounded=!1,i.coyote=0,i.jumpBuffer=0,i.jumpCut=!1,s.jump?.()),!t.jumpHeld&&i.vy>4&&!i.jumpCut&&(i.vy*=.86,i.jumpCut=!0);let L=i.pos.clone(),A=Math.hypot(i.vx,i.vz)*n,C=Math.max(1,Math.ceil(A/(re.radius*.7)));for(let P=0;P<C;P++){let O=i.pos.x+i.vx*n/C,W=i.pos.z+i.vz*n/C,H=i.pos.y;if(i.grounded){let z=e.support(O,W,L.y+re.step);z.y>i.pos.y&&z.y<=L.y+re.step&&(H=z.y)}i.pos.set(O,H,W);let Z=e.resolve(i.pos,re.radius,re.height);if(i.grounded&&i.pos.y<.2&&!e.world.inWater(L.x,L.z)){let z=e.world.inWater(i.pos.x,i.pos.z);if(z){let tt=i.pos.x-z.x,nt=i.pos.z-z.z,rt=Math.hypot(tt,nt)||1e-6,wt=z.r+re.radius*.5;i.pos.x=z.x+tt/rt*wt,i.pos.z=z.z+nt/rt*wt;let Et=i.vx*(tt/rt)+i.vz*(nt/rt);Et<0&&(i.vx-=Et*tt/rt,i.vz-=Et*nt/rt),Z=(Z||0)+1}}if(Z){let z=i.pos.x-O,tt=i.pos.z-W,nt=Math.hypot(z,tt);if(nt>er){let rt=z/nt,wt=tt/nt,Et=i.vx*rt+i.vz*wt;Et<0&&(i.vx-=Et*rt,i.vz-=Et*wt)}}}let R=i.pos.y;i.vy=Math.max(-28,i.vy-re.gravity*n);let M=R+i.vy*n;if(i.vy>0){let P=e.ceiling(R,M,i.pos.x,i.pos.z,re.height,re.radius);P<M&&(M=P,i.vy=0)}let y=i.grounded;i.grounded=!1;let T=e.support(i.pos.x,i.pos.z,R+(y?re.step:.025)),D=y&&i.vy<=0&&i.vy>-1.2&&T.y<R&&R-T.y<=re.step*.8;if(i.vy<=0&&M<=T.y+.002&&R>=T.y-(y?re.step:.04)||D?(i.pos.y=T.y,i.vy=0,i.grounded=!0,i.support=T.solid,i.jumpCut=!1,i.airTime=0,y||(i.landImpact=Pn(Math.abs(T.y-M)*2+.25,.2,1),s.land?.(T.solid))):(i.pos.y=M,i.support=null,i.airTime+=n),i.speed=Math.hypot(i.vx,i.vz),i.distance+=i.speed*n,i.speed>.12){let P=Math.atan2(i.vx,i.vz),O=Ad(i.heading,P);i.heading=Td(i.heading,P,19,n),i.turnRate+=(Pn(O*12,-7,7)-i.turnRate)*(1-Math.exp(-12*n))}else i.turnRate*=Math.exp(-12*n);return(!Number.isFinite(i.pos.x+i.pos.y+i.pos.z)||i.pos.y<-8)&&(i.pos.set(1.1,1,7.1),i.vx=i.vz=i.vy=0),{wall:c,climbed:!1}}var Id=["Oh! Hello there, sweetheart.","Well, aren\u2019t you a handsome one.","Pspsps\u2026 come here, little one.","Who\u2019s a good kitty? You are.","Look at those whiskers!","Hello, little neighbour.","You look like you own this street.","Aw. Soft as a cloud.","Off on an adventure, are we?","Good afternoon, your majesty.","Hi, puss. Lovely day for a wander.","Such a sweet face.","There\u2019s my favourite cat.","Careful on those rooftops, you.","Hello, fluff. Chin scratches?"],Mo=["Lovely afternoon, isn\u2019t it?","The bakery had cinnamon buns today.","Did you see that cat on the roof?","I should water the balcony plants.","Not a cloud in the sky.","Have you tried the new tea shop?","The bus was late again. Of course.","My tomatoes are finally coming in.","Mrs. Finch says hello.","We should sit by the pond later.","Someone left bunting up from the fete.","I could nap in this sun."],Pd=["Hm, where did I put my keys?","What a pretty door.","Oh, that\u2019s a nice bench.","I\u2019ll just rest a moment."],Ld=["#e9c4a6","#d9a98a","#c48b67","#8d5a3b","#f0d2b8","#a46f4d","#6b4529"],Dd=["#c9d8c6","#d9b8a8","#a7b7c7","#e6d6b0","#b48c9c","#8ea48c","#d3c7e0","#c3b59b","#9fb8b4","#e2c3a0"],Ud=["#5c6670","#7b6f5f","#4f5a52","#8a8072","#44505a","#6f6a80","#9b9179"],Nd=["#2e2420","#5a3e2c","#8a6a46","#c7a16b","#d9d2c4","#3b3b40","#b4553a"],Qn=Or.offsets,k_=i=>Math.abs((i%Vt+Vt)%Vt)<.01;function H_(i,t){let e=Math.floor(i/Vt)*Vt,n=i-e;if(t>0){for(let s of Qn)if(s>n+.01)return e+s;return e+Vt+Qn[0]}for(let s=Qn.length-1;s>=0;s--)if(Qn[s]<n-.01)return e+Qn[s];return e-Vt+Qn[Qn.length-1]}function V_(i,t,e){if(!k_(i))return!0;let n=Math.min(t,e),s=Math.max(t,e),r=(n%Vt+Vt)%Vt;return!(Math.abs(r-Or.pavement[0])<.01&&Math.abs(s-n-(Or.pavement[1]-Or.pavement[0]))<.01)}function Fd(i,t){let e=n=>{let s=Math.floor(n/Vt)*Vt,r=n-s,a=Qn[0],o=1/0;for(let l of[...Qn,Vt])Math.abs(l-r)<o&&(o=Math.abs(l-r),a=l);return s+a};return{x:e(i),z:e(t)}}var oh=class{constructor(t,e){this.people=t,this.variant=e,this.H=e.height,this.group=new ue,this.body=new ue,this.group.add(this.body);let n=this.H*.47,s=this.H*.31;this.torso=new kt(e.torso,t.material),this.torso.position.y=n,this.torso.castShadow=!0,this.body.add(this.torso),this.legs=[],this.arms=[];for(let r of[-1,1]){let a=new kt(e.leg,t.material);a.position.set(r*.09,n,0),a.castShadow=!0,this.body.add(a),this.legs.push(a);let o=new kt(e.arm,t.material);o.position.set(r*.22,s-.03,0),o.rotation.z=-r*.08,this.torso.add(o),this.arms.push(o)}this.heart=new qa(t.heartMaterial.clone()),this.heart.scale.set(.26,.26,1),this.heart.visible=!1,this.group.add(this.heart),this.solid={shape:"cylinder",x:0,z:0,r:.3,minX:0,maxX:0,minZ:0,maxZ:0,minY:0,maxY:this.H,climbable:!1,walkable:!1,person:this},this.reset(0,0)}reset(t,e){this.x=t,this.z=e,this.y=0,this.heading=Math.random()*Math.PI*2,this.bodyTilt=0,this.reach=0,this.axis="x",this.dir=1,this.state="walk",this.timer=0,this.cooldown=Math.random()*4,this.phase=Math.random()*7,this.baseSpeed=1.05+Math.random()*.5,this.speed=0,this.line="",this.lineTimer=0,this.heartTime=0,this.greeted=0,this.target=null,this.chooseNext(!0)}chooseNext(t=!1){let e=Fd(this.x,this.z);this.x=e.x,this.z=e.z;let n=[];for(let o of["x","z"])for(let l of[-1,1]){let c=o==="x"?e.x:e.z,h=o==="x"?e.z:e.x,d=H_(c,l);if(!V_(h,c,d))continue;let u=o===this.axis&&l===-this.dir;n.push({axis:o,dir:l,next:d,weight:u?t?1:.08:o===this.axis?1.5:1})}if(!n.length)return;let s=n.reduce((o,l)=>o+l.weight,0),r=Math.random()*s,a=n[0];for(let o of n)if(r-=o.weight,r<=0){a=o;break}this.axis=a.axis,this.dir=a.dir,this.target=a.axis==="x"?{x:a.next,z:e.z}:{x:e.x,z:a.next},this.baseSpeed=Math.min(1.6,Math.max(.9,this.baseSpeed+(Math.random()-.5)*.25))}say(t,e=3.2){this.line=t,this.lineTimer=e}update(t,e,n,s){let r=this.people;this.timer=Math.max(0,this.timer-t),this.cooldown=Math.max(0,this.cooldown-t),this.lineTimer-=t,this.lineTimer<=0&&(this.line="");let a=e.x-this.x,o=e.z-this.z,l=Math.hypot(a,o),c=Math.abs(e.y-this.y)<1.6;r.interactive&&this.state!=="greet"&&this.state!=="chat"&&l<2.3&&c&&this.cooldown===0&&(this.state="greet",this.timer=3+Math.random()*1.8,this.speed=0,this.greeted++,this.say(n>9?["Whoa! Where\u2019s the fire, kitty?","Zoom zoom! Go on then.","Ha! Someone\u2019s in a hurry."][Math.floor(Math.random()*3)]:Id[Math.floor(Math.random()*Id.length)],3.4),this.heartTime=1.6,r.greetings++,r.onGreet?.(this));let h=!1;if(this.state==="greet")this.face(Math.atan2(a,o),t,6),(this.timer===0||l>5)&&(this.state="walk",this.cooldown=9+Math.random()*14);else if(this.state==="chat")this.partner&&this.face(Math.atan2(this.partner.x-this.x,this.partner.z-this.z),t,5),this.timer===0&&(this.state="walk",this.cooldown=6+Math.random()*10,this.partner=null);else if(this.state==="idle")this.timer===0&&(this.state="walk",Math.random()<.5&&this.chooseNext());else{this.target||this.chooseNext(!0);for(let f of s)if(!(f===this||f.state!=="walk"||f.cooldown>0||this.cooldown>0)&&Math.hypot(f.x-this.x,f.z-this.z)<2&&Math.random()<.5){let g=3.5+Math.random()*3;this.state=f.state="chat",this.timer=f.timer=g,this.partner=f,f.partner=this,this.say(Mo[Math.floor(Math.random()*Mo.length)],2.6),setTimeout(()=>{f.state==="chat"&&f.say(Mo[Math.floor(Math.random()*Mo.length)],2.6)},1800),this.speed=f.speed=0;break}if(this.state==="walk"){let f=this.baseSpeed;for(let p of s)p!==this&&p.axis===this.axis&&Math.hypot(p.x-this.x,p.z-this.z)<1.1&&((p.x-this.x)*(this.axis==="x"?1:0)+(p.z-this.z)*(this.axis==="z"?1:0))*this.dir>0&&(f=Math.min(f,p.speed*.9));l<1&&c&&(f=Math.min(f,.35)),this.speed+=(f-this.speed)*(1-Math.exp(-4*t));let g=this.speed*t,x=this.axis;(this.target[x]-this[x])*this.dir<=g?(this[x]=this.target[x],Math.random()<.18?(this.state="idle",this.timer=1.5+Math.random()*3.5,this.speed=0,Math.random()<.35&&this.say(Pd[Math.floor(Math.random()*Pd.length)],2.4)):this.chooseNext()):(this[x]+=g*this.dir,Math.random()<t*.025&&(this.state="idle",this.timer=1.2+Math.random()*2.5,this.speed=0)),h=this.speed>.05,h&&this.face(this.axis==="x"?Math.atan2(this.dir,0):Math.atan2(0,this.dir),t,7)}}let d=r.physics.support(this.x,this.z,this.y+.35).y;this.y+=(d-this.y)*(1-Math.exp(-14*t)),this.animate(t,h);let u=this.solid;u.x=this.x,u.z=this.z,u.minX=this.x-u.r,u.maxX=this.x+u.r,u.minZ=this.z-u.r,u.maxZ=this.z+u.r,u.minY=this.y,u.maxY=this.y+this.H}face(t,e,n){this.heading+=Math.atan2(Math.sin(t-this.heading),Math.cos(t-this.heading))*(1-Math.exp(-n*e))}animate(t,e){let n=this.people.time,s=this.state==="greet";this.phase+=t*(e?5.6*this.speed/1.2:0);let r=e?Math.sin(this.phase)*.55*Math.min(1,this.speed/.9):0;if(this.legs[0].rotation.x=r,this.legs[1].rotation.x=-r,this.arms[0].rotation.x=-r*.6,this.arms[1].rotation.x=r*.6,this.bodyTilt+=((s?.62:0)-this.bodyTilt)*(1-Math.exp(-5*t)),this.reach+=((s?1:0)-this.reach)*(1-Math.exp(-5*t)),this.torso.rotation.x=this.bodyTilt,this.arms[1].rotation.x+=-this.reach*.55,this.arms[0].rotation.x+=-this.reach*.25,this.legs[0].rotation.x+=this.reach*.18,this.legs[1].rotation.x+=-this.reach*.12,this.body.position.y=(e?Math.abs(Math.sin(this.phase))*.03:Math.sin(n*1.3+this.phase)*.006)-this.reach*.14,this.body.rotation.z=e?Math.sin(this.phase)*.03:Math.sin(n*.9+this.phase)*.012,this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.heading,this.heartTime=Math.max(0,this.heartTime-t),this.heart.visible=this.heartTime>0,this.heart.visible){let a=1-this.heartTime/1.6;this.heart.position.set(Math.sin(a*6)*.12,this.H*.6+a*.7,.35),this.heart.material.opacity=Math.min(1,(1-a)*2);let o=.22+Math.sin(a*Math.PI)*.12;this.heart.scale.set(o,o,1)}}},bo=class{constructor(t,e,n=12,s="whiskerfield"){this.scene=t,this.physics=e,this.count=n,this.time=0,this.greetings=0,this.onGreet=null,this.interactive=!1,this.material=new _n({vertexColors:!0,roughness:.9,flatShading:!0}),this.heartMaterial=new Pr({map:W_(),transparent:!0,depthWrite:!1});let r=Qs(Br(s+"people"));this.variants=[];for(let a=0;a<10;a++)this.variants.push(G_(r));this.list=[],this.spawnTimer=0}spawnAll(t){for(let e=0;e<this.count;e++){let n=new oh(this,this.variants[e%this.variants.length]);this.place(n,t,10,55,null),this.scene.add(n.group),this.list.push(n),this.physics.dynamic.push(n.solid)}}place(t,e,n,s,r){for(let a=0;a<24;a++){let o=Math.random()*Math.PI*2,l=n+Math.random()*(s-n),c=Fd(e.x+Math.sin(o)*l,e.z+Math.cos(o)*l),h=Math.hypot(c.x-e.x,c.z-e.z);if(!(h<n||h>s+12)){if(r&&h<40){let d=new I(c.x,1,c.z).project(r);if(Math.abs(d.x)<1.15&&Math.abs(d.y)<1.15&&d.z<1)continue}if(!this.list.some(d=>d!==t&&Math.hypot(d.x-c.x,d.z-c.z)<4)){t.reset(c.x,c.z);return}}}t.reset(e.x+30,e.z+28.45)}update(t,e,n,s){if(this.time+=t,this.spawnTimer-=t,this.spawnTimer<=0){this.spawnTimer=.6;for(let r of this.list)Math.hypot(r.x-e.x,r.z-e.z)>90&&this.place(r,e,32,62,s)}for(let r of this.list)r.update(t,e,n,this.list)}speaker(t){let e=null,n=18;for(let s of this.list)if(s.line){let r=Math.hypot(s.x-t.x,s.z-t.z);r<n&&(n=r,e=s)}return e}dispose(){for(let t of this.list)this.scene.remove(t.group);this.list=[],this.physics.dynamic=[]}};function G_(i){let t=1.62+i()*.24,e=t*.47,n=t*.31,s=t*.03,r=t*.065,a=Ld[Math.floor(i()*Ld.length)],o=Dd[Math.floor(i()*Dd.length)],l=Ud[Math.floor(i()*Ud.length)],c=Nd[Math.floor(i()*Nd.length)],h=new an(1,1,1),d=new yi(1,10,8),u=new Yi;u.add(h,0,n/2,0,.36,n,.2,o),u.add(h,0,n*.96,0,.4,n*.1,.22,o),u.add(d,0,n+s/2,0,.055,s,.055,a),u.add(d,0,n+s+r,.01,r,r*1.08,r,a),u.add(d,0,n+s+r*1.25,-.015,r*1.05,r*.8,r*1.05,c),i()>.6&&u.add(h,0,n+s+r*.3,-r*.55,r*1.9,r*1.4,r*.7,c),i()>.7&&(u.add(h,.25,n*.45,-.02,.16,.2,.08,"#8b7355"),u.add(h,.17,n*.78,0,.03,.34,.03,"#6d5a44"));let f=new Yi;f.add(h,0,-e*.47,0,.15,e*.94,.17,l),f.add(h,0,-e+.04,.03,.15,.08,.25,"#3b3732");let g=new Yi;return g.add(h,0,-n*.3,0,.09,n*.6,.09,o),g.add(d,0,-n*.66,0,.05,.07,.05,a),{height:t,torso:u.geometry(),leg:f.geometry(),arm:g.geometry()}}function W_(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.fillStyle="#e08a94",t.beginPath(),t.moveTo(32,56),t.bezierCurveTo(4,36,6,10,32,20),t.bezierCurveTo(58,10,60,36,32,56),t.fill();let e=new Kn(i);return e.colorSpace=Ue,e}var Od=[{body:"#f2d84a",head:"#f7e27a",wing:"#d8bb2e"},{body:"#7fb6e6",head:"#e8eef2",wing:"#4f86bd"},{body:"#8fc46a",head:"#e6e07a",wing:"#5f9548"},{body:"#e9e4dc",head:"#f4f1ea",wing:"#aeb3b8"},{body:"#9ac3dc",head:"#f0f3f5",wing:"#6d94b4"}],X_=new Set(["lamp","post","chimney","pergola","sill","tree","pole","awning","bench","fountain","box"]),lh=new Map,nr=i=>(lh.has(i)||lh.set(i,new Ys({color:i})),lh.get(i)),ch=new yi(1,10,8),Bd=new an(1,.08,.6),q_=new jn(.5,1,6),Y_=new an(.035,.02,.16),hh=class{constructor(t,e){this.birds=t,this.group=new ue,this.wingFlap=0,this.phase=Math.random()*9;let n=new kt(ch,nr(e.body));n.scale.set(.11,.1,.15),n.position.y=.1,this.group.add(n);let s=new kt(ch,nr(e.head));s.scale.set(.08,.08,.08),s.position.set(0,.19,.11),this.group.add(s);let r=new kt(q_,nr("#e5a24a"));r.scale.set(.04,.05,.04),r.rotation.x=Math.PI/2,r.position.set(0,.185,.2),this.group.add(r);let a=new kt(Y_,nr(e.wing));a.position.set(0,.1,-.19),a.rotation.x=-.3,this.group.add(a),this.wings=[-1,1].map(o=>{let l=new kt(Bd,nr(e.wing));return l.scale.set(.18,1,.2),l.position.set(o*.09,.13,0),l.geometry=Bd,l.userData.side=o,this.group.add(l),l});for(let o of[-1,1]){let l=new kt(ch,nr("#2a2a2a"));l.scale.setScalar(.014),l.position.set(o*.05,.21,.16),this.group.add(l)}this.state="perch",this.perch=null,this.from=new I,this.to=new I,this.t=0,this.flight=1,this.hopTimer=2+Math.random()*4,this.heading=Math.random()*Math.PI*2,this.cooldown=0}settle(t){this.perch=t,this.state="perch",this.group.position.set(t.x,t.y,t.z),this.heading=t.heading??Math.random()*Math.PI*2,this.group.rotation.set(0,this.heading,0),this.hopTimer=3+Math.random()*6,this.wingFlap=0}flyTo(t,e){this.from.copy(this.group.position),this.to.set(t.x,t.y,t.z),this.perch=t,this.state="fly",this.t=0;let n=this.from.distanceTo(this.to);this.flight=Math.max(.9,n/(e?7:5)),this.arc=1.2+Math.min(3,n*.12)+(e?.8:0),this.heading=Math.atan2(this.to.x-this.from.x,this.to.z-this.from.z),this.cooldown=e?2:0}update(t,e,n,s){let r=this.birds,a=this.group.position;this.cooldown=Math.max(0,this.cooldown-t);let o=e.x-a.x,l=e.z-a.z,c=e.y-a.y,h=Math.hypot(o,l);if(this.state==="perch"){let d=Math.sin(s*5+this.phase)*.004+(Math.sin(s*1.3+this.phase)>.95?.01:0);this.group.position.y=this.perch.y+d,this.group.rotation.y=this.heading+Math.sin(s*.7+this.phase)*.35,this.hopTimer-=t;let u=h<(n>8?5.5:2.6)&&Math.abs(c)<3.2;if(u||this.hopTimer<=0){let f=r.findPerch(e,u?10:4,40,this.perch);f?(this.flyTo(f,u),u&&r.onStartle?.(this)):this.hopTimer=2}for(let f of this.wings)f.rotation.z=f.userData.side*.12}else{this.t=Math.min(1,this.t+t/this.flight);let d=this.t,u=d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;a.lerpVectors(this.from,this.to,u),a.y+=Math.sin(d*Math.PI)*this.arc;let f=Math.cos(d*Math.PI)*this.arc*Math.PI/Math.max(1,this.from.distanceTo(this.to));this.group.rotation.set(-Math.atan(f)*.5,this.heading,Math.sin(s*3+this.phase)*.12),this.wingFlap+=t*26;let g=Math.sin(this.wingFlap)*.9;for(let x of this.wings)x.rotation.z=x.userData.side*(g+.2);this.t>=1&&this.settle(this.perch)}}},So=class{constructor(t,e,n=12){this.scene=t,this.world=e,this.count=n,this.list=[],this.time=0,this.spawnTimer=0,this.onStartle=null,this.startles=0,this.group=new ue,t.add(this.group)}perchesNear(t,e,n){let s=[];for(let r of this.world.colliders){if(!X_.has(r.kind)||r.sensor)continue;let a=(r.minX+r.maxX)/2,o=(r.minZ+r.maxZ)/2;if(!(Math.abs(a-t)>n||Math.abs(o-e)>n))if(r.shape==="ellipsoid"){let l=Math.random()*Math.PI*2,c=r.rx*.72;s.push({x:r.x+Math.cos(l)*c,y:r.y+Math.sqrt(Math.max(0,1-.72*.72))*r.ry*.6,z:r.z+Math.sin(l)*c,heading:l+Math.PI/2,solid:r})}else if(r.shape==="cylinder")s.push({x:r.x,y:r.maxY,z:r.z,solid:r});else{let l=r.maxX-r.minX>=r.maxZ-r.minZ,c=.15+Math.random()*.7;s.push({x:l?r.minX+(r.maxX-r.minX)*c:a,y:r.maxY,z:l?o:r.minZ+(r.maxZ-r.minZ)*c,heading:l?Math.PI/2:0,solid:r})}}return s}findPerch(t,e,n,s=null){let r=this.perchesNear(t.x,t.z,n).filter(l=>{let c=Math.hypot(l.x-t.x,l.z-t.z);return c<e||c>n||l.solid===s?.solid?!1:!this.list.some(h=>h.perch&&h.perch.solid===l.solid&&Math.hypot(h.perch.x-l.x,h.perch.z-l.z)<.35)});if(!r.length)return null;let a=r.filter(l=>l.y<3.4),o=a.length&&Math.random()<.75?a:r;return o[Math.floor(Math.random()*o.length)]}spawnAll(t){for(let e=0;e<this.count;e++){let n=new hh(this,Od[e%Od.length]),s=this.findPerch(t,6,45)||{x:t.x+8,y:.9,z:t.z+6,solid:null};n.settle(s),this.group.add(n.group),this.list.push(n)}}update(t,e,n){if(this.time+=t,this.spawnTimer-=t,this.spawnTimer<=0){this.spawnTimer=1;for(let s of this.list)if(Math.hypot(s.group.position.x-e.x,s.group.position.z-e.z)>75){let r=this.findPerch(e,18,50);r&&s.settle(r)}}for(let s of this.list)s.update(t,e,n,this.time)}dispose(){for(let t of this.list)this.group.remove(t.group);this.list=[]}};var zd="whiskerfield.installed.v1",ir=[],sr=(i,t)=>{ir.push({name:i,result:t,at:Date.now()}),ir.length>40&&ir.shift()},Eo=matchMedia("(pointer:coarse)").matches,kd=/iP(hone|ad|od)/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Hd=/Safari/.test(navigator.userAgent)&&!/Chrom|Edg|OPR|Firefox/.test(navigator.userAgent);function uh(){return matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||matchMedia("(display-mode: window-controls-overlay)").matches||navigator.standalone===!0||new URLSearchParams(location.search).get("launch")==="app"}function wo(){try{localStorage.setItem(zd,String(Date.now()))}catch{}}function dh(){try{return!!localStorage.getItem(zd)}catch{return!1}}async function Vd(){if(uh())return wo(),!0;if(dh())return!0;if(navigator.getInstalledRelatedApps)try{if((await navigator.getInstalledRelatedApps()).some(t=>t.platform==="webapp"))return wo(),!0}catch{}return!1}function rr(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}async function fh(i=document.documentElement){if(rr())return!0;try{if(i.requestFullscreen)await i.requestFullscreen({navigationUI:"hide"});else if(i.webkitRequestFullscreen)await i.webkitRequestFullscreen();else return sr("fullscreen","unsupported"),!1;return sr("fullscreen","ok"),!0}catch(t){return sr("fullscreen",t?.name||"error"),!1}}async function Gd(){try{document.exitFullscreen&&document.fullscreenElement?await document.exitFullscreen():document.webkitExitFullscreen&&document.webkitFullscreenElement&&await document.webkitExitFullscreen()}catch{}mh()}async function ph(){try{return screen.orientation?.lock?(await screen.orientation.lock("landscape"),sr("orientation","ok"),!0):(sr("orientation","unsupported"),!1)}catch(i){return sr("orientation",i?.name||"error"),!1}}function mh(){try{screen.orientation?.unlock?.()}catch{}}function gh(){return innerHeight>innerWidth}function Wd(){return Eo&&Math.min(screen.width,screen.height)<820}async function xh(){if(!Eo)return{fullscreen:!1,landscape:!1};let i=await fh(),t=await ph();return{fullscreen:i,landscape:t}}var $i=null,Xd=!1;async function _h(i){if(Xd=i,!i){try{await $i?.release()}catch{}$i=null;return}if($i||document.hidden||!navigator.wakeLock?.request)return;let t={name:"wakelock",ok:!1};ir.push(t);try{$i=await navigator.wakeLock.request("screen"),t.ok=!0,$i.addEventListener("release",()=>{$i=null})}catch{$i=null}}document.addEventListener("visibilitychange",()=>{!document.hidden&&Xd&&_h(!0)});var $=i=>document.getElementById(i),ls=vn.clamp,Bo="whiskerfield.journey.v1";var Ye=Eo,$_=7,J_=12.5,K_=1/90,Kd=3.15,jd=new URLSearchParams(location.search),Qd=()=>["clover","willow","honey","fern","peach","moss"][Math.floor(Math.random()*6)]+"-"+Math.floor(100+Math.random()*900),ce=null;try{let i=JSON.parse(localStorage.getItem(Bo));i?.version===1&&typeof i.seed=="string"&&(ce=i)}catch{}var To=jd.get("seed")?.trim().slice(0,40)||null,tf=i=>{if(i?.seed)try{localStorage.setItem(Bo+":"+i.seed,JSON.stringify({...i,settings:void 0}))}catch{}},j_=i=>{try{let t=JSON.parse(localStorage.getItem(Bo+":"+i));return t?.version===1&&t.seed===i?t:null}catch{return null}};if(ce&&To&&To!==ce.seed){tf(ce);let i=j_(To);ce=i?{...i,settings:ce.settings}:{version:1,settings:ce.settings,started:ce.started}}var Ht={audio:!0,volume:.4,sensitivity:.7,shadows:!Ye,reducedMotion:matchMedia("(prefers-reduced-motion:reduce)").matches,immersive:!0,...ce?.settings},Q_=i=>i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z)&&Math.abs(i.x)<1e6&&Math.abs(i.z)<1e6&&i.y>=0&&i.y<100,j=Rd(Q_(ce?.position)?{...ce.position,heading:Number.isFinite(ce?.heading)?ce.heading:.55}:null),bn=new Set(Array.isArray(ce?.roofs)?ce.roofs.filter(i=>typeof i=="string").slice(-1e4):[]),ii=new Set(Array.isArray(ce?.gardens)?ce.gardens.filter(i=>typeof i=="string").slice(-1e4):[]),Un=Number.isFinite(ce?.friends)?ce.friends:0,Re=new _o;Re.enabled=Ht.audio;Re.volume=Ht.volume;var ee,us,tn,ns,pe,we,Fe,Ie,ts,wi,bi,ni,ef=[],Ei,Ae=!1,ke=!1,Ee=null,Th=null,Ah=!1,qd=!1,qe=Number.isFinite(ce?.cameraYaw)?ce.cameraYaw:.56,cs=.34,Ai=Ye?5:5.4,lr=qe,ds=cs,is=Ai,Gr=0,Rh=0,Ao=0,yh=0,vh=0,Mh=0,Yd=0,Ch=0,Ji=0,zr=16,hs=!1,Ti=!1,Co=!1,ss=!1,Io=0,Po=0,Lo=null,kr=0,bh=!1,Do=0,Uo=0,No=!1,Fo=!1,Ki=[],Ro="",Ri=null,ji=null,nf=sessionStorage.getItem("whiskerfield.portrait")==="1",Ne=new Set,ti=new Map,ei=new I,Qe=new I,ty=new I,ar=new I,ye=new ve,Zd=new Lt,Ih=[],Ph=[],rs=[],Dn=null,as=!1,Si=uh()||dh(),sf=!1,Sh=0,wh=null,on={x:0,y:0,yaw:0,sprint:!1,baseSpeed:$_,sprintSpeed:J_,jump:!1,jumpHeld:!1,climb:!1,autoClimb:!0,resting:!1},ey={jump:()=>Re.jump(),land:()=>Re.land(),mantle:()=>Re.chirp()},Mi={x:0,y:0,climb:!1,sprint:!1,jump:!1,jumpHeld:!1},Vr=null,rf=!1;function Se(){if(ee){rf=!1,Vr={x:j.pos.x,z:j.pos.z,yaw:qe};try{localStorage.setItem(Bo,JSON.stringify({version:1,seed:ee.seedText,position:{x:j.pos.x,y:j.pos.y,z:j.pos.z},heading:j.heading,cameraYaw:qe,roofs:[...bn].slice(-1e4),gardens:[...ii].slice(-1e4),friends:Un,settings:Ht,started:Ae}))}catch{qd||(qd=!0,ln("This browser can\u2019t save your journey. Try leaving private browsing.","note",5e3))}}}function ln(i,t="sun",e=3200){clearTimeout(Yd);let n=$("toast");$("toast-text").textContent=i,n.dataset.kind=t,n.classList.add("show"),n.classList.toggle("action",t==="update"),Yd=setTimeout(()=>n.classList.remove("show"),e)}function Wr(){$("roof-count").textContent=bn.size,$("garden-count").textContent=ii.size,$("friend-count").textContent=Un}function af(i,t){i.querySelector("use")?.setAttribute("href",t)}function es(){for(let[i,t]of[["audio-toggle","audio"],["shadow-toggle","shadows"],["motion-toggle","reducedMotion"],["immersive-toggle","immersive"]])$(i).classList.toggle("on",!!Ht[t]),$(i).setAttribute("aria-checked",String(!!Ht[t]));$("volume-slider").value=Math.round(Ht.volume*100),$("volume-label").textContent=Math.round(Ht.volume*100)+"%",$("sensitivity-slider").value=Math.round(Ht.sensitivity*100),$("sensitivity-label").textContent=Math.round(Ht.sensitivity*100)+"%",af($("sound-button"),Ht.audio?"#i-sound":"#i-muted"),$("sound-button").setAttribute("aria-label",Ht.audio?"Turn sound off":"Turn sound on"),pe&&Dh(),wi&&(wi.count=Ht.reducedMotion?12:48)}function Xr(){Ne.clear(),hs=!1,Ti=!1,Co=!1,Io=Po=0,Do=Uo=0,No=!1,Fo=!1,j.jumpBuffer=0,$("joystick-knob").style.transform="translate(0px,0px)",$("joystick").classList.remove("engaged"),document.querySelectorAll(".touch-action.pressed").forEach(i=>i.classList.remove("pressed"))}function Ln(i){Th=document.activeElement,Xr(),Ee=i,$("modal-backdrop").hidden=!1,document.querySelectorAll(".modal").forEach(t=>t.hidden=t.id!==i),$(i).scrollTop=0,i==="map-modal"&&(Ri={x:j.pos.x,z:j.pos.z},Oo()),i==="settings-modal"&&($("seed-label").textContent="Seed: "+ee.seedText,$("new-world-confirm").hidden=!0,es(),Mn()),i==="install-modal"&&Mn(),requestAnimationFrame(()=>$(i).querySelector("button")?.focus({preventScroll:!0}))}function or(){Ee&&(Ee=null,$("modal-backdrop").hidden=!0,document.querySelectorAll(".modal").forEach(i=>i.hidden=!0),Xr(),Th?.isConnected?Th.focus({preventScroll:!0}):$("world").focus({preventScroll:!0}))}function of(){!Ah||Ae||(Ae=!0,ke=!1,Ch=0,document.body.classList.add("playing"),document.body.classList.remove("resting"),_h(!0),$("welcome").setAttribute("aria-hidden","true"),$("welcome").inert=!0,$("world").focus({preventScroll:!0}),Ht.audio&&Re.start(),Se(),Ht.immersive&&xh().then(Qi),ln(ce?.started?"There you are. Your little world was waiting.":"The afternoon is yours. Find a rooftop or a friendly neighbour.","sun",4200))}function Lh(){if(!(!Ae||Ee)){if(!j.grounded){ln("Paws on the ground first.","note",2200);return}ke=!ke,Xr(),document.body.classList.toggle("resting",ke),$("rest-button").setAttribute("aria-pressed",String(ke)),ke&&(ln("This spot feels like home. Move whenever you\u2019re ready.","moon",2600),Re.purr())}}function Qi(){let i=Ae&&Wd()&&gh()&&!nf;$("rotate").hidden=!i,document.body.classList.toggle("portrait",gh());let t=rr();af($("fullscreen-button"),t?"#i-shrink":"#i-expand"),$("fullscreen-button").setAttribute("aria-label",t?"Leave fullscreen":"Fullscreen")}function ny(){we=new Wa,we.background=new Lt("#c9d4c8"),we.fog=new Ga("#c9d4c8",58,Ye?108:145),pe=new Va({canvas:$("world"),antialias:!0,powerPreference:"high-performance"}),pe.setPixelRatio(Math.min(devicePixelRatio,Ye?1.4:1.5)),pe.setSize(innerWidth,innerHeight),pe.outputColorSpace=Ue,pe.toneMapping=Xc,pe.toneMappingExposure=1.05,pe.shadowMap.enabled=Ht.shadows,pe.shadowMap.type=Gc,Fe=new ze(50,innerWidth/innerHeight,.08,350),we.add(new so("#dfe6d8","#7e8a68",1.35)),Ie=new ro("#ffe6c0",2.2),Ie.position.set(-35,60,25),Ie.castShadow=!0,Ie.shadow.mapSize.set(Ye?1024:2048,Ye?1024:2048),Ie.shadow.camera.left=-36,Ie.shadow.camera.right=36,Ie.shadow.camera.top=36,Ie.shadow.camera.bottom=-36,Ie.shadow.camera.near=1,Ie.shadow.camera.far=150,Ie.shadow.bias=-3e-4,Ie.shadow.normalBias=.03,Ie.shadow.radius=3,we.add(Ie),we.add(Ie.target);let i=(()=>{let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,128,128);for(let s=0;s<2400;s++)e.fillStyle=`rgba(60,75,45,${Math.random()*.1})`,e.fillRect(Math.random()*128,Math.random()*128,1+Math.random()*2,1);let n=new Kn(t);return n.wrapS=n.wrapT=Hi,n.repeat.set(180,180),n})();ts=new kt(new Cn(1200,1200),new _n({color:"#93a86f",roughness:1,map:i})),ts.rotation.x=-Math.PI/2,ts.position.y=-.45,ts.receiveShadow=!0,we.add(ts),lf(To||ce?.seed||Qd()),ns=new xo(we,re.scale),ns.root.position.copy(j.pos),ns.root.rotation.y=j.heading,iy(),sy(),es(),Wr(),ei.copy(j.pos),hf(1,!0),$("seed-label").textContent="Seed: "+ee.seedText,ce?.started&&($("start-button").firstChild.textContent="Wander on ",$("welcome-note").lastChild.textContent=" Just as you left it. Ready when you are."),Ah=!0,pe.render(we,Fe),requestAnimationFrame(()=>{requestAnimationFrame(()=>{$("loading").classList.add("done"),setTimeout(()=>$("loading").hidden=!0,700)})}),requestAnimationFrame(ff),jd.get("test")==="1"&&(window.__whiskerfield={player:j,get world(){return ee},get people(){return tn},get birds(){return Ei},get physics(){return us},cat:ns,renderer:pe,camera:Fe,input:on,hold:Mi,keys:Ne,start:of,save:Se,adapt:df,getQuality:()=>({level:os,pixelRatio:pe.getPixelRatio(),shadows:pe.shadowMap.enabled}),mapCenter:()=>Ri,step:t=>{cf(t),tn.interactive=Ae&&!Ee,tn.update(t,j.pos,j.speed,Fe),Ei.update(t,j.pos,j.speed)},discover:uf,platformCalls:ir,getState:()=>({ready:Ah,started:Ae,resting:ke,modal:Ee,position:j.pos.toArray(),speed:j.speed,grounded:j.grounded,climbing:!!j.climbing,support:j.support?.kind||null,roofs:bn.size,gardens:ii.size,friends:Un,chunks:ee.chunks.size,colliders:ee.colliders.length,npcs:tn.list.length,greetings:tn.greetings,drawCalls:pe.info.render.calls,triangles:pe.info.render.triangles,offlineReady:as,installed:Si,installButtonHidden:$("install-button").hidden,fullscreen:rr(),cameraDistance:Ai}),teleport:(t,e,n)=>{j.pos.set(t,e,n),j.vx=j.vz=j.vy=0,j.climbing=null,j.grounded=!1,ee.update(j.pos,25)},setCamera:(t,e=cs,n=Ai)=>{qe=lr=t,cs=ds=e,Ai=is=n},getSettings:()=>({...Ht})})}function lf(i){ee=new mo(we,i),ee.radius=Ye?1:2,ee.update(j.pos,Ye?5:9),us=new vo(ee),tn=new bo(we,us,Ye?9:14,i),tn.onGreet=()=>{Un++,Wr(),Re.greet(),Un===1&&ln("A new friend. Neighbours love a visiting cat.","heart",3600),Un%10===0&&Se()},tn.spawnAll(j.pos),Ei=new So(we,ee,Ye?8:14),Ei.onStartle=()=>{Ei.startles++,Math.random()<.5&&Re.tweet()},Ei.spawnAll(j.pos)}function iy(){let i=Qs(Br(ee.seedText+"air"));wi=new Ws(new Cn(.14,.25),new Jn({color:"#e8d59a",side:rn,transparent:!0,opacity:.72}),48),wi.instanceMatrix.setUsage(lo),wi.frustumCulled=!1,we.add(wi);for(let n=0;n<48;n++)Ih.push({x:(i()-.5)*70,y:1+i()*12,z:(i()-.5)*70,phase:i()*Math.PI*2,speed:.3+i()*.5});bi=new Ws(new Cn(.12,.15),new Jn({side:rn}),24),bi.instanceMatrix.setUsage(lo),bi.frustumCulled=!1,we.add(bi);for(let n=0;n<12;n++)Ph.push({x:(i()-.5)*55,z:(i()-.5)*55,y:.6+i()*1.6,phase:i()*7}),bi.setColorAt(n*2,Zd.set(["#f1d995","#e7ba95","#e9e7c7"][n%3])),bi.setColorAt(n*2+1,Zd.set(["#f1d995","#e7ba95","#e9e7c7"][n%3]));ni=new Ws(new to(.19),new _n({color:"#edcc7d",emissive:"#c7a04d",emissiveIntensity:.3,roughness:.5}),400),ni.instanceMatrix.setUsage(lo),ni.count=0,ni.frustumCulled=!1,we.add(ni);let t=new Ys({color:"#f2f2df",transparent:!0,opacity:.65,depthWrite:!1}),e=new Wi(1,1);for(let n=0;n<9;n++){let s=new ue;for(let r=0;r<4;r++){let a=new kt(e,t);a.position.set(r*3.5,Math.sin(r)*1.2,0),a.scale.set(4.5,2.1+r%2,2.8),s.add(a)}s.position.set((i()-.5)*240,38+i()*20,(i()-.5)*240),we.add(s),ef.push(s)}}function sy(){$("start-button").addEventListener("click",of),$("welcome-help").addEventListener("click",()=>Ln("help-modal")),$("settings-help").addEventListener("click",()=>Ln("help-modal")),$("settings-button").addEventListener("click",()=>Ln("settings-modal")),$("map-button").addEventListener("click",()=>Ln("map-modal")),$("brand").addEventListener("click",h=>{h.preventDefault(),Ln("settings-modal")}),$("rest-button").addEventListener("click",Lh),$("fullscreen-button").addEventListener("click",async()=>{rr()?await Gd():(await fh(),Ye&&await ph()),Qi()}),$("rotate-continue").addEventListener("click",()=>{nf=!0,sessionStorage.setItem("whiskerfield.portrait","1"),Qi()}),$("rotate-fullscreen").addEventListener("click",async()=>{await xh(),Qi()}),document.querySelectorAll("[data-close]").forEach(h=>h.addEventListener("click",or)),$("modal-backdrop").addEventListener("click",h=>{h.target===$("modal-backdrop")&&or()}),$("sound-button").addEventListener("click",()=>{Ht.audio=!Ht.audio,Re.setEnabled(Ht.audio),es(),Se()}),$("audio-toggle").addEventListener("click",()=>{Ht.audio=!Ht.audio,Re.setEnabled(Ht.audio),es(),Se()}),$("shadow-toggle").addEventListener("click",()=>{Ht.shadows=!Ht.shadows,es(),pe.shadowMap.needsUpdate=!0,we.traverse(h=>{h.material&&(h.material.needsUpdate=!0)}),Se()}),$("motion-toggle").addEventListener("click",()=>{Ht.reducedMotion=!Ht.reducedMotion,es(),Se()}),$("immersive-toggle").addEventListener("click",()=>{Ht.immersive=!Ht.immersive,es(),Se()}),$("volume-slider").addEventListener("input",h=>{Ht.volume=Number(h.target.value)/100,Re.setVolume(Ht.volume),$("volume-label").textContent=h.target.value+"%",Se()}),$("sensitivity-slider").addEventListener("input",h=>{Ht.sensitivity=Number(h.target.value)/100,$("sensitivity-label").textContent=h.target.value+"%",Se()}),$("new-world-button").addEventListener("click",()=>$("new-world-confirm").hidden=!1),$("cancel-new-world").addEventListener("click",()=>$("new-world-confirm").hidden=!0),$("confirm-new-world").addEventListener("click",ry),$("map-recenter").addEventListener("click",()=>{Ri={x:j.pos.x,z:j.pos.z},Oo()}),$("install-button").addEventListener("click",()=>Ln("install-modal")),$("install-link").addEventListener("click",()=>Ln("install-modal")),$("install-now-button").addEventListener("click",async()=>{if(Dn){let h=Dn;Dn=null;try{await h.prompt(),(await h.userChoice).outcome==="accepted"?(Eh(),ln("Whiskerfield is now on your device.","heart")):Mn()}catch{Dn=null,Mn()}}else or()}),$("toast").addEventListener("click",()=>{sf&&location.reload()}),window.addEventListener("beforeinstallprompt",h=>{h.preventDefault(),Dn=h,Mn()}),window.addEventListener("appinstalled",()=>{Eh(),Se()}),Vd().then(h=>{h&&Eh()}),window.addEventListener("keydown",h=>{if(h.code==="Escape"){h.preventDefault(),Ee?or():Ln("settings-modal");return}if(Ee){if(h.code==="Tab"){let d=[...$(Ee).querySelectorAll('button,input,[tabindex="0"]')].filter(g=>!g.disabled&&g.offsetParent!==null),u=d[0],f=d.at(-1);h.shiftKey&&document.activeElement===u?(h.preventDefault(),f?.focus()):!h.shiftKey&&document.activeElement===f&&(h.preventDefault(),u?.focus())}return}if(Ae){if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","KeyE","ShiftLeft","ShiftRight","KeyM","KeyN","KeyF"].includes(h.code)&&h.preventDefault(),h.code==="KeyM"&&!h.repeat){Ln("map-modal");return}if(h.code==="KeyN"&&!h.repeat){Lh();return}if(h.code==="KeyF"&&!h.repeat){$("fullscreen-button").click();return}h.code==="Space"&&!h.repeat&&!Ne.has("Space")&&(hs=!0),h.code==="Space"&&(Ti=!0),Ne.add(h.code)}}),window.addEventListener("keyup",h=>{Ne.delete(h.code),h.code==="Space"&&(Ti=!1)}),window.addEventListener("blur",()=>{Xr(),ti.clear(),Se()}),document.addEventListener("visibilitychange",()=>{document.hidden?(Xr(),Se(),Re.suspend()):(Ao=performance.now(),Re.resume())}),window.addEventListener("pagehide",Se);let i=()=>{Fe.aspect=innerWidth/innerHeight,Fe.updateProjectionMatrix(),pe.setSize(innerWidth,innerHeight),Qi()};window.addEventListener("resize",i),screen.orientation?.addEventListener?.("change",i),document.addEventListener("fullscreenchange",()=>{rr()||mh(),Qi()}),$("world").addEventListener("webglcontextlost",h=>{h.preventDefault(),Se(),$("error-message").textContent="The graphics took a little catnap. Reload to return to your saved spot.",$("error-screen").hidden=!1});let t=$("world");t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("pointerdown",h=>{if(!Ee&&(t.setPointerCapture(h.pointerId),ti.set(h.pointerId,{x:h.clientX,y:h.clientY}),ti.size===2)){let d=[...ti.values()];Sh=Math.hypot(d[0].x-d[1].x,d[0].y-d[1].y)}}),t.addEventListener("pointermove",h=>{if(!ti.has(h.pointerId)||Ee)return;let d=ti.get(h.pointerId),u=h.clientX-d.x,f=h.clientY-d.y;if(d.x=h.clientX,d.y=h.clientY,ti.size===2){let g=[...ti.values()],x=Math.hypot(g[0].x-g[1].x,g[0].y-g[1].y);is=ls(is-(x-Sh)*.02,3.2,14),Sh=x}else lr-=u*.0048*Ht.sensitivity,ds=ls(ds+f*.0032*Ht.sensitivity,.16,1.15);Gr=1.6});let e=h=>ti.delete(h.pointerId);t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("lostpointercapture",e),t.addEventListener("wheel",h=>{h.preventDefault(),Ee||(is=ls(is+h.deltaY*.006,3.2,14),Gr=1.6)},{passive:!1});let n=$("joystick"),s=null,r=h=>{let d=n.getBoundingClientRect(),u=d.width*.36,f=h.clientX-d.left-d.width/2,g=h.clientY-d.top-d.height/2,x=Math.hypot(f,g);x>u&&(f*=u/x,g*=u/x);let m=Math.min(1,x/u),p=.1,w=m<p?0:(m-p)/(1-p);Io=x?f/x*w:0,Po=x?g/x*w:0,$("joystick-knob").style.transform=`translate(${f}px,${g}px)`,n.classList.toggle("engaged",m>p)};n.addEventListener("pointerdown",h=>{h.preventDefault(),s=h.pointerId,n.setPointerCapture(h.pointerId),r(h)}),n.addEventListener("pointermove",h=>{h.pointerId===s&&r(h)});let a=h=>{h.pointerId===s&&(s=null,Io=Po=0,$("joystick-knob").style.transform="translate(0px,0px)",n.classList.remove("engaged"))};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),n.addEventListener("lostpointercapture",a);let o=(h,d,u)=>{let f=$(h);f.addEventListener("pointerdown",g=>{g.preventDefault(),f.setPointerCapture(g.pointerId),f.classList.add("pressed"),d()});for(let g of["pointerup","pointercancel","lostpointercapture"])f.addEventListener(g,()=>{f.classList.remove("pressed"),u()})};o("touch-jump",()=>{hs=!0,Ti=!0},()=>{Ti=!1}),o("touch-climb",()=>{Co=!0},()=>{Co=!1});let l=h=>{ss=h,$("touch-run").classList.toggle("active",ss),$("touch-run").setAttribute("aria-pressed",String(ss))};$("touch-run").addEventListener("pointerdown",h=>{h.preventDefault(),l(!ss)});let c=$("map-canvas");c.addEventListener("pointerdown",h=>{c.setPointerCapture(h.pointerId),ji={x:h.clientX,y:h.clientY}}),c.addEventListener("pointermove",h=>{if(!ji)return;let d=Kd*(c.clientWidth/960);Ri.x-=(h.clientX-ji.x)/d,Ri.z-=(h.clientY-ji.y)/d,ji={x:h.clientX,y:h.clientY},Oo()});for(let h of["pointerup","pointercancel","lostpointercapture"])c.addEventListener(h,()=>ji=null);Qi()}function Eh(){Si=!0,Dn=null,wo(),Mn()}function ry(){tf({version:1,seed:ee.seedText,position:{x:j.pos.x,y:j.pos.y,z:j.pos.z},heading:j.heading,cameraYaw:qe,roofs:[...bn].slice(-1e4),gardens:[...ii].slice(-1e4),friends:Un,started:Ae}),tn.dispose(),Ei.dispose(),ee.dispose(),bn.clear(),ii.clear(),Un=0,j.pos.set(1.1,0,7.1),j.vx=j.vz=j.vy=0,j.climbing=null,j.grounded=!0,j.heading=.55,j.landImpact=0,j.runBlend=0,qe=lr=.56,cs=ds=.34,Ai=is=Ye?5:5.4,ke=!1,ce=null,lf(Qd()),Wr(),$("seed-label").textContent="Seed: "+ee.seedText,or(),Se(),document.body.classList.remove("resting"),$("rest-button").setAttribute("aria-pressed","false"),ln("A fresh little beginning. New streets, new rooftops, the same curious cat.","leaf")}function cf(i){let t=(Ne.has("KeyD")||Ne.has("ArrowRight")?1:0)-(Ne.has("KeyA")||Ne.has("ArrowLeft")?1:0)+Io+Do+Mi.x,e=(Ne.has("KeyS")||Ne.has("ArrowDown")?1:0)-(Ne.has("KeyW")||Ne.has("ArrowUp")?1:0)+Po+Uo+Mi.y;Mi.jump&&(hs=!0,Mi.jump=!1);let n=Math.hypot(t,e);n>.15&&ke&&(ke=!1,document.body.classList.remove("resting"),$("rest-button").setAttribute("aria-pressed","false")),on.x=t,on.y=e,on.yaw=qe,on.sprint=Ne.has("ShiftLeft")||Ne.has("ShiftRight")||ss||No||Mi.sprint,on.jump=on.jump||hs,hs=!1,on.jumpHeld=Ti||Mi.jumpHeld;let s=Ne.has("KeyE")||Co||Fo||Mi.climb;on.resting=ke;let r=Math.min(12,Math.max(1,Math.ceil(i/K_))),a=i/r;for(let o=0;o<r;o++){if(kr=Lo&&j.grounded&&n>.5&&j.speed<1.2&&!ke?kr+a:Math.max(0,kr-a*3),kr>.32&&(bh=!0,kr=0),on.climb=s||bh,Lo=Cd(j,on,us,a,ey).wall,yh+=a,yh>5){yh=0;let h=!Vr||Math.hypot(j.pos.x-Vr.x,j.pos.z-Vr.z)>.3||Math.abs(qe-Vr.yaw)>.05;(rf||h)&&Se()}(!j.climbing||n<.3)&&(bh=!1)}on.jump=!1}function ay(i){let e=[...navigator.getGamepads?navigator.getGamepads():[]].find(o=>o&&o.connected);if(!e){Do=Uo=0,No=!1,Fo=!1,Ki=[];return}let n=o=>Math.abs(o)<.16?0:(Math.abs(o)-.16)/.84*Math.sign(o);Do=n(e.axes[0]||0),Uo=n(e.axes[1]||0);let s=n(e.axes[2]||0),r=n(e.axes[3]||0);(s||r)&&(lr-=s*2.6*i,ds=ls(ds+r*1.8*i,.16,1.15),Gr=1.6);let a=o=>!!e.buttons[o]?.pressed;a(10)&&!Ki[10]&&(ss=!ss),No=a(6)||a(7),Fo=a(1)||a(5)||a(4),a(0)&&!Ki[0]&&(hs=!0),a(0)?Ti=!0:Ki[0]&&(Ti=!1),a(9)&&!Ki[9]&&(Ee?or():Ln("settings-modal")),a(3)&&!Ki[3]&&Lh(),Ki=e.buttons.map(o=>o.pressed)}function oy(i,t,e,n=.2){let s=0,r=1;for(let[a,o,l,c]of[[i.x,t.x,e.minX-n,e.maxX+n],[i.y,t.y,e.minY-n,e.maxY+n],[i.z,t.z,e.minZ-n,e.maxZ+n]])if(Math.abs(o)<1e-7){if(a<l||a>c)return 1/0}else{let h=(l-a)/o,d=(c-a)/o;if(h>d&&([h,d]=[d,h]),s=Math.max(s,h),r=Math.min(r,d),s>r)return 1/0}return s>.02?s:1/0}function hf(i,t=!1){qe=vn.damp(qe,lr,12,i),cs=vn.damp(cs,ds,10,i),Ai=vn.damp(Ai,is*(1+j.runBlend*.14),6,i),Gr=Math.max(0,Gr-i);let e=!Ae,n=innerWidth<700||innerWidth<innerHeight,s=Math.cos(qe),r=-Math.sin(qe),a=ty.copy(j.pos);if(a.y+=e?.9:.38+(j.climbing?.25:0),e||(a.x+=j.vx*.1,a.z+=j.vz*.1,a.y+=ls(j.vy,-4,4)*.03),e){let u=n?0:-3.4;a.x+=s*u,a.z+=r*u}t?ei.copy(a):ei.lerp(a,1-Math.exp(-10*i));let o=e?.3:cs,l=e?n?9:11:Ai;Qe.set(Math.sin(qe)*Math.cos(o)*l,Math.sin(o)*l,Math.cos(qe)*Math.cos(o)*l);let c=1,h=-1/0;if(!e)for(let u of us.query(j.pos.x,j.pos.z,l+1.5)){if(u.shape==="ellipsoid"||u.person||u.shape==="cylinder"&&u.r<.2||u.maxY-u.minY<.3)continue;let f=oy(ei,Qe,u);f>=1||(u.maxY-u.minY>=.7?c=Math.min(c,f):f>.05&&(h=Math.max(h,ei.y+(u.maxY+.22-ei.y)/f)))}if(c<1&&Qe.multiplyScalar(Math.max(.18,c-.3/l)),Qe.add(ei),h>Qe.y&&(Qe.y=Math.min(h,ei.y+l*.9)),!e){let u=us.highest(Qe.x,Qe.z,Qe.y),f=Math.max(0,u)+.42;Qe.y<f&&(Qe.y=f)}t?Fe.position.copy(Qe):Fe.position.lerp(Qe,1-Math.exp(-(c<1?16:9)*i)),Fe.lookAt(ei);let d=e?46:50+j.runBlend*6;Math.abs(Fe.fov-d)>.02&&(Fe.fov=vn.damp(Fe.fov,d,5,i),Fe.updateProjectionMatrix())}function $d(i=j.pos.x,t=j.pos.y+.4,e=j.pos.z){for(let n=0;n<14;n++)rs.push({x:i,y:t,z:e,vx:(Math.random()-.5)*2,vy:.8+Math.random()*1.8,vz:(Math.random()-.5)*2,life:1.4});rs.length>80&&rs.splice(0,rs.length-80)}function uf(){let i=j.pos;for(let e of ee.buildings){if(bn.has(e.id))continue;let n=j.support,s=!!n&&(n.building===e||n.buildingId===e.id||["roof","chimney","wall","box","pergola","pot"].includes(n.kind));if(j.grounded&&s&&i.y>=e.h-.15&&Math.abs(i.x-e.x)<e.w/2+.3&&Math.abs(i.z-e.z)<e.d/2+.3){bn.add(e.id),Wr(),$d(),Re.discovery();let r=bn.size;ln(r===1?"Your first rooftop. The town looks softer from up here.":r%5===0?`${r} rooftops. So many afternoons.`:"A new rooftop.","sun",r===1?3600:2200),Se();break}}for(let e of ee.parks)if(!ii.has(e.id)&&i.y<1.5&&(i.x-e.x)**2+(i.z-e.z)**2<81){ii.add(e.id),Wr(),Re.discovery(),$d(),ln("A quiet garden discovered.","leaf",2600),Se();break}let t=go(Math.floor((i.x+36)/72),Math.floor((i.z+36)/72),ee.seed);if(t!==Ro){let e=!Ro;Ro=t,$("district-name").textContent=t;let n=$("location-card");n.classList.remove("fresh"),n.offsetWidth,n.classList.add("fresh"),!e&&getComputedStyle(n).display==="none"&&ln(t,"leaf",2e3)}}function ly(i){let t=j.pos,e=Rh;for(let s=0;s<Ih.length;s++){let r=Ih[s];r.x+=i*r.speed,r.z+=i*.15,r.x-t.x>35&&(r.x-=70),r.x-t.x<-35&&(r.x+=70),r.z-t.z>35&&(r.z-=70),r.z-t.z<-35&&(r.z+=70),ye.position.set(r.x,r.y+Math.sin(e*.5+r.phase)*.6,r.z),ye.rotation.set(e*.4+r.phase,e*.3+r.phase,e*.2),ye.scale.setScalar(1),ye.updateMatrix(),wi.setMatrixAt(s,ye.matrix)}wi.instanceMatrix.needsUpdate=!0;for(let s=0;s<Ph.length;s++){let r=Ph[s];r.x-t.x>30&&(r.x-=60),r.x-t.x<-30&&(r.x+=60),r.z-t.z>30&&(r.z-=60),r.z-t.z<-30&&(r.z+=60);let a=r.x+Math.sin(e*.55+r.phase)*1.7,o=r.z+Math.cos(e*.4+r.phase)*1.7,l=r.y+Math.sin(e*1.4+r.phase)*.35;for(let c=0;c<2;c++)ye.position.set(a+(c?-.05:.05),l,o),ye.rotation.set(Math.PI/2,Math.sin(e*13+r.phase)*(c?-.8:.8),e*.2+r.phase),ye.scale.set(1,1,1),ye.updateMatrix(),bi.setMatrixAt(s*2+c,ye.matrix)}bi.instanceMatrix.needsUpdate=!0;let n=0;for(let s of ee.buildings){if(bn.has(s.id)||(s.x-t.x)**2+(s.z-t.z)**2>65**2||n>=320)continue;let r=ee.roofHeight(s,s.x,s.z);ye.position.set(s.x,r+1.25+Math.sin(e*1.7+s.x)*.15,s.z),ye.rotation.set(0,e*.7,0),ye.scale.setScalar(1),ye.updateMatrix(),ni.setMatrixAt(n++,ye.matrix)}for(let s=rs.length-1;s>=0;s--){let r=rs[s];if(r.life-=i,r.life<=0){rs.splice(s,1);continue}r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,r.vy-=i,n<390&&(ye.position.set(r.x,r.y,r.z),ye.rotation.set(e,e,0),ye.scale.setScalar(Math.min(1,r.life)*.3),ye.updateMatrix(),ni.setMatrixAt(n++,ye.matrix))}ni.count=n,ni.instanceMatrix.needsUpdate=!0;for(let s of ef)s.position.x+=i*.18,s.position.x-t.x>150&&(s.position.x-=300),s.position.x-t.x<-150&&(s.position.x+=300),s.position.z-t.z>150&&(s.position.z-=300),s.position.z-t.z<-150&&(s.position.z+=300)}function cy(){let i=$("bubble"),t=Ae&&!Ee?tn.speaker(j.pos):null;if(!t){i.classList.remove("show");return}if(ar.set(t.x,t.y+t.H+.22,t.z).project(Fe),ar.z>1||Math.abs(ar.x)>1.3||Math.abs(ar.y)>1.3){i.classList.remove("show");return}let e=ls((ar.x+1)/2*innerWidth,90,innerWidth-90),n=ls((1-ar.y)/2*innerHeight,52,innerHeight-40);i.textContent!==t.line&&(i.textContent=t.line),i.style.transform=`translate(${e}px,${n}px) translate(-50%,-100%)`,i.classList.add("show")}function Oo(){if(!Ri)return;let i=$("map-canvas"),t=i.getContext("2d"),e=i.width,n=i.height,s=Kd,r=d=>(d-Ri.x)*s+e/2,a=d=>(d-Ri.z)*s+n/2;t.fillStyle="#dce6c9",t.fillRect(0,0,e,n);for(let d of ee.chunks.values()){let u=d.cx*Vt,f=d.cz*Vt;t.fillStyle=(d.cx+d.cz)%2?"#d4e1bf":"#d8e3c4",t.fillRect(r(u-36),a(f-36),72*s,72*s),t.fillStyle="#eee9d4";for(let g of[-1,1])t.fillRect(r(u+g*32.5-3.5),a(f-36),7*s,72*s),t.fillRect(r(u-36),a(f+g*32.5-3.5),72*s,7*s);t.fillStyle="#e7e5cd",t.fillRect(r(u-1.5),a(f-29),3*s,58*s),t.fillRect(r(u-29),a(f-1.5),58*s,3*s),t.fillStyle="#8fa27b",t.font='500 12px "DM Sans", sans-serif',t.textAlign="center",t.fillText(go(d.cx,d.cz,ee.seed).toUpperCase(),r(u),a(f-27))}for(let d of ee.parks){t.fillStyle="#b7cd98",t.beginPath(),t.roundRect(r(d.x-12),a(d.z-12),24*s,24*s,9),t.fill(),t.fillStyle="#e8e2c7",t.fillRect(r(d.x-1.5),a(d.z-12),3*s,24*s),t.fillRect(r(d.x-12),a(d.z-1.5),24*s,3*s),t.fillStyle="#94bfb0",t.beginPath(),t.ellipse(r(d.x+4.5),a(d.z-4.3),4*s,3.7*s,0,0,Math.PI*2),t.fill();for(let[u,f]of[[-6,-6],[7,7],[-7,6]])t.fillStyle="#91ad78",t.beginPath(),t.arc(r(d.x+u),a(d.z+f),7,0,Math.PI*2),t.fill();ii.has(d.id)&&(t.fillStyle="#64865c",t.font="16px sans-serif",t.fillText("\u2713",r(d.x),a(d.z+4)))}for(let d of ee.buildings){let u=bn.has(d.id);t.fillStyle="#a8b596",t.beginPath(),t.roundRect(r(d.x-d.w/2)+3,a(d.z-d.d/2)+4,d.w*s,d.d*s,3),t.fill(),t.fillStyle=u?"#7f9d79":d.wall,t.strokeStyle=u?"#5f805d":"#aab397",t.lineWidth=1.3,t.beginPath(),t.roundRect(r(d.x-d.w/2),a(d.z-d.d/2),d.w*s,d.d*s,3),t.fill(),t.stroke(),t.strokeStyle=u?"#a8c29a":d.roofColor,t.lineWidth=2,t.beginPath(),t.moveTo(r(d.x-d.w/2+1),a(d.z)),t.lineTo(r(d.x+d.w/2-1),a(d.z)),t.stroke(),u?(t.fillStyle="#f4f4df",t.font="bold 15px sans-serif",t.textAlign="center",t.fillText("\u2713",r(d.x),a(d.z)+5)):(t.fillStyle="#c5a15d",t.beginPath(),t.arc(r(d.x),a(d.z),2.5,0,Math.PI*2),t.fill())}for(let d of tn.list)t.fillStyle="#7c8fa6",t.beginPath(),t.arc(r(d.x),a(d.z),3,0,Math.PI*2),t.fill();let o=r(j.pos.x),l=a(j.pos.z);t.fillStyle="#ffffff",t.beginPath(),t.arc(o,l,12,0,Math.PI*2),t.fill(),t.shadowColor="#6b775333",t.shadowBlur=8,t.fillStyle="#cb8b50",t.beginPath(),t.arc(o,l,8.5,0,Math.PI*2),t.fill(),t.shadowBlur=0,t.save(),t.translate(o,l),t.rotate(-j.heading),t.fillStyle="#fff9e9",t.beginPath(),t.moveTo(0,6),t.lineTo(-4,-3),t.lineTo(4,-3),t.closePath(),t.fill(),t.restore();let c=bn.size,h=ii.size;$("map-seed").textContent="Seed "+ee.seedText,$("map-description").textContent=`${Ro||go(0,0,ee.seed)} \xB7 ${c} rooftop${c===1?"":"s"}, ${h} garden${h===1?"":"s"}, ${Un} friend${Un===1?"":"s"}. Drag to look further.`}var os=0,Hr=0,Jd=!1,hy=()=>Math.min(devicePixelRatio,Ye?1.4:1.5);function Dh(){let i=Math.max(.75,hy()-.2*Math.min(os,3));Math.abs(pe.getPixelRatio()-i)>.01&&(pe.setPixelRatio(i),pe.setSize(innerWidth,innerHeight));let t=Ht.shadows&&os<4;pe.shadowMap.enabled!==t&&(pe.shadowMap.enabled=t,we.traverse(e=>{e.material&&(e.material.needsUpdate=!0)}))}function df(i){zr+=(i-zr)*.05,zr>30?(Ji+=i/1e3,Hr=0):zr<20?(Ji=0,Hr+=i/1e3):Ji=Math.max(0,Ji-i/2e3),Ji>2.5&&os<4?(Ji=0,Hr=0,os++,Dh(),Jd||(Jd=!0,ln("Softening the picture a little so the cat stays quick.","note",3200))):Hr>8&&os>0&&(Hr=0,Ji=0,os--,Dh(),zr=16)}function ff(i){if(requestAnimationFrame(ff),document.hidden){Ao=i;return}let t=i-(Ao||i-16),e=Math.min(.12,Math.max(.001,t/1e3));Ao=i,Rh+=e,Ae&&(df(t),Ch+=e),ay(e),ee.update(j.pos,1),Ae&&!Ee?cf(e):(j.speed=0,j.turnRate=0,j.accel=0,Lo=null),ns.root.position.copy(j.pos),ns.root.rotation.y=j.heading;let n=us.support(j.pos.x,j.pos.z,j.pos.y+.05).y;if(ns.update(e,Rh,{speed:j.speed,grounded:j.grounded,climbing:!!j.climbing,resting:ke,vy:j.vy,turnRate:j.turnRate,accel:j.accel,landImpact:j.landImpact,runBlend:j.runBlend},n,Ht.reducedMotion),tn.interactive=Ae&&!Ee,tn.update(e,j.pos,j.speed,Fe),Ei.update(e,j.pos,j.speed),!Ae&&!Ht.reducedMotion&&(lr+=e*.03),hf(e),ly(e),Re.update(e),cy(),ts.position.x=j.pos.x,ts.position.z=j.pos.z,Ie.position.set(j.pos.x-35,60,j.pos.z+25),Ie.target.position.set(j.pos.x,0,j.pos.z),vh+=e,vh>.25){vh=0,Ae&&!Ee&&uf();let s=!!Lo&&!j.climbing&&!ke&&Ae&&!Ee&&j.grounded;$("context-hint").classList.toggle("visible",s&&!Ye),$("touch-climb").classList.toggle("ready",s),document.body.classList.toggle("sprinting",j.runBlend>.5),document.body.classList.toggle("settled",Ch>14),Ee==="map-modal"&&!ji&&Oo()}ke&&(Mh+=e,Mh>1.7&&(Mh=0,Re.purr())),pe.render(we,Fe)}function Mn(){let i=Si?"Installed":as?"Offline ready":"Getting cozy\u2026";$("offline-label").textContent=!navigator.onLine&&as?"Playing offline":i,$("offline-status").classList.toggle("ready",as),$("install-ready").querySelector("span").textContent=as?"All tucked in. This world is ready to play offline.":"Getting the offline files ready\u2026";let t=!Si&&(!!Dn||kd||Hd);$("install-button").hidden=!t,$("install-link").hidden=Si,$("install-link").textContent=Dn?"Install on this device":"How to install",$("installed-note").hidden=!Si,$("install-now-button").firstChild.textContent=Dn?"Install Whiskerfield ":Si?"Back to my world ":"Got it. Thank you ",$("install-instructions").hidden=!!Dn||Si}async function uy(){if(Mn(),window.addEventListener("online",Mn),window.addEventListener("offline",Mn),!("serviceWorker"in navigator)||!window.isSecureContext){$("offline-label").textContent="Online preview",$("install-ready").querySelector("span").textContent="Offline install needs HTTPS or localhost.";return}try{let i=!!navigator.serviceWorker.controller;wh=await navigator.serviceWorker.register("./sw.js",{scope:"./"}),wh.addEventListener("updatefound",()=>{let t=wh.installing;t?.addEventListener("statechange",()=>{t.state==="installed"&&i&&(sf=!0,Ae?ln("A small update is ready. Tap here to refresh.","update",9e3):location.reload())})}),await navigator.serviceWorker.ready,as=!0,Mn(),navigator.storage?.persist&&navigator.storage.persist().catch(()=>{}),navigator.serviceWorker.addEventListener("message",t=>{t.data?.type==="OFFLINE_READY"&&(as=!0,Mn())})}catch(i){console.warn("Offline cache unavailable:",i),$("offline-label").textContent="Online preview",$("install-ready").querySelector("span").textContent="Offline files couldn\u2019t be saved. Reconnect and reload to try again."}}try{ny(),uy()}catch(i){console.error(i),$("loading").hidden=!0,$("error-screen").hidden=!1,$("error-message").textContent="This little world needs WebGL. Try an up-to-date Chrome, Edge, Firefox, or Safari browser with hardware acceleration enabled. "+i.message}
