var bm=0,_u=1,ym=2;var Lf=1,Kh=2,wi=3,Qi=0,gn=1,mn=2,Ki=0,wr=1,vu=2,Mu=3,Su=4,_m=5,Es=100,vm=101,Mm=102,Sm=103,wm=104,Em=200,Tm=201,Am=202,Rm=203,Rc=204,Cc=205,Cm=206,Im=207,Pm=208,Lm=209,km=210,Dm=211,Um=212,Nm=213,Fm=214,Ic=0,Pc=1,Lc=2,Rr=3,kc=4,Dc=5,Uc=6,Nc=7,jh=0,Om=1,Bm=2,ji=0,zm=1,Hm=2,Vm=3,Qh=4,Gm=5,Wm=6,Xm=7;var kf=300,Cr=301,Ir=302,Fc=303,Oc=304,tl=306,Cs=1e3,As=1001,Bc=1002,An=1003,qm=1004;var Vo=1005;var si=1006,Zl=1007;var Rs=1008;var Ci=1009,Df=1010,Uf=1011,go=1012,td=1013,Is=1014,ri=1015,Mo=1016,ed=1017,nd=1018,Pr=1020,Nf=35902,Ff=1021,Of=1022,qn=1023,Bf=1024,zf=1025,Er=1026,Lr=1027,id=1028,sd=1029,Hf=1030,rd=1031;var od=1033,xa=33776,ba=33777,ya=33778,_a=33779,zc=35840,Hc=35841,Vc=35842,Gc=35843,Wc=36196,Xc=37492,qc=37496,Yc=37808,Zc=37809,$c=37810,Jc=37811,Kc=37812,jc=37813,Qc=37814,th=37815,eh=37816,nh=37817,ih=37818,sh=37819,rh=37820,oh=37821,va=36492,ah=36494,lh=36495,Vf=36283,ch=36284,hh=36285,dh=36286;var Ma=2300,uh=2301,$l=2302,wu=2400,Eu=2401,Tu=2402;var Ym=3200,Zm=3201;var ad=0,$m=1,$i="",Je="srgb",Nr="srgb-linear",el="linear",fe="srgb";var sr=7680;var Au=519,Jm=512,Km=513,jm=514,Gf=515,Qm=516,t0=517,e0=518,n0=519,fh=35044,nl=35048;var Ru="300 es",Ti=2e3,Sa=2001,ts=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=1234567,ho=Math.PI/180,xo=180/Math.PI;function Ai(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function ld(i,t){return(i%t+t)%t}function i0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function s0(i,t,e){return i!==t?(e-i)/(t-i):0}function uo(i,t,e){return(1-e)*i+e*t}function r0(i,t,e,n){return uo(i,t,1-Math.exp(-e*n))}function o0(i,t=1){return t-Math.abs(ld(i,t*2)-t)}function a0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function l0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function c0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function h0(i,t){return i+Math.random()*(t-i)}function d0(i){return i*(.5-Math.random())}function u0(i){i!==void 0&&(Cu=i);let t=Cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function f0(i){return i*ho}function p0(i){return i*xo}function m0(i){return(i&i-1)===0&&i!==0}function g0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function x0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function b0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var $n={DEG2RAD:ho,RAD2DEG:xo,generateUUID:Ai,clamp:We,euclideanModulo:ld,mapLinear:i0,inverseLerp:s0,lerp:uo,damp:r0,pingpong:o0,smoothstep:a0,smootherstep:l0,randInt:c0,randFloat:h0,randFloatSpread:d0,seededRandom:u0,degToRad:f0,radToDeg:p0,isPowerOfTwo:m0,ceilPowerOfTwo:g0,floorPowerOfTwo:x0,setQuaternionFromProperEuler:b0,normalize:ue,denormalize:Xn},vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],b=s[1],_=s[4],y=s[7],S=s[2],w=s[5],T=s[8];return r[0]=o*x+a*b+l*S,r[3]=o*p+a*_+l*w,r[6]=o*m+a*y+l*T,r[1]=c*x+u*b+d*S,r[4]=c*p+u*_+d*w,r[7]=c*m+u*y+d*T,r[2]=h*x+f*b+g*S,r[5]=h*p+f*_+g*w,r[8]=h*m+f*y+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new Xt;function Wf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function y0(){let i=wa("canvas");return i.style.display="block",i}var Iu={};function lo(i){i in Iu||(Iu[i]=!0,console.warn(i))}function _0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function v0(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function M0(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var re={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=Tr(i.r),i.g=Tr(i.g),i.b=Tr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$i?el:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pu=[.64,.33,.3,.6,.15,.06],Lu=[.2126,.7152,.0722],ku=[.3127,.329],Du=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uu=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Nr]:{primaries:Pu,whitePoint:ku,transfer:el,toXYZ:Du,fromXYZ:Uu,luminanceCoefficients:Lu,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:Pu,whitePoint:ku,transfer:fe,toXYZ:Du,fromXYZ:Uu,luminanceCoefficients:Lu,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var rr,ph=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rr===void 0&&(rr=wa("canvas")),rr.width=t.width,rr.height=t.height;let n=rr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},S0=0,Ea=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var w0=0,bn=class i extends ts{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=As,s=As,r=si,o=Rs,a=qn,l=Ci,c=i.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Ai(),this.name="",this.source=new Ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cs:t.x=t.x-Math.floor(t.x);break;case As:t.x=t.x<0?0:1;break;case Bc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cs:t.y=t.y-Math.floor(t.y);break;case As:t.y=t.y<0?0:1;break;case Bc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=kf;bn.DEFAULT_ANISOTROPY=1;var Re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(f+1)/2,S=(m+1)/2,w=(u+h)/4,T=(d+x)/4,A=(g+p)/4;return _>y&&_>S?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=T/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=A/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=A/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-x)/b,this.z=(h-u)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mh=class extends ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ea(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ii=class extends mh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ta=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gh=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var He=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==h||c!==f||u!==g){let p=1-a,m=l*h+c*f+u*g+d*x,b=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let S=Math.sqrt(_),w=Math.atan2(S,m*b);p=Math.sin(p*w)/S,a=Math.sin(a*w)/S}let y=a*b;if(l=l*p+h*y,c=c*p+f*y,u=u*p+g*y,d=d*p+x*y,p===1-a){let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-a*f,t[e+2]=c*g+u*f+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new D,Nu=new He,Pi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),Wo.subVectors(this.max,jr),or.subVectors(t.a,jr),ar.subVectors(t.b,jr),lr.subVectors(t.c,jr),Gi.subVectors(ar,or),Wi.subVectors(lr,ar),bs.subVectors(or,lr);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-bs.z,bs.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,bs.z,0,-bs.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-bs.y,bs.x,0];return!Ql(e,or,ar,lr,Wo)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,or,ar,lr,Wo))?!1:(Xo.crossVectors(Gi,Wi),e=[Xo.x,Xo.y,Xo.z],Ql(e,or,ar,lr,Wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},yi=[new D,new D,new D,new D,new D,new D,new D,new D],Vn=new D,Go=new Pi,or=new D,ar=new D,lr=new D,Gi=new D,Wi=new D,bs=new D,jr=new D,Wo=new D,Xo=new D,ys=new D;function Ql(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ys.fromArray(i,r);let a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=t.dot(ys),c=e.dot(ys),u=n.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var E0=new Pi,Qr=new D,tc=new D,es=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):E0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(tc)),this.expandByPoint(Qr.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new D,ec=new D,qo=new D,Xi=new D,nc=new D,Yo=new D,ic=new D,Aa=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ec.copy(t).add(e).multiplyScalar(.5),qo.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(ec);let r=t.distanceTo(e)*.5,o=-this.direction.dot(qo),a=Xi.dot(this.direction),l=-Xi.dot(qo),c=Xi.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ec).addScaledVector(qo,h),f}intersectSphere(t,e){_i.subVectors(t.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){nc.subVectors(e,t),Yo.subVectors(n,t),ic.crossVectors(nc,Yo);let o=this.direction.dot(ic),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,t);let l=a*this.direction.dot(Yo.crossVectors(Xi,Yo));if(l<0)return null;let c=a*this.direction.dot(nc.cross(Xi));if(c<0||l+c>o)return null;let u=-a*Xi.dot(ic);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,l,c,u,d,h,f,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,d,h,f,g,x,p)}set(t,e,n,s,r,o,a,l,c,u,d,h,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/cr.setFromMatrixColumn(t,0).length(),r=1/cr.setFromMatrixColumn(t,1).length(),o=1/cr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,f=o*d,g=a*u,x=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,g=c*u,x=c*d;e[0]=h+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,g=c*u,x=c*d;e[0]=h-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,f=o*d,g=a*u,x=a*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+x,e[1]=l*d,e[5]=x*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){let h=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(T0,t,A0)}lookAt(t,e,n){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),qi.crossVectors(n,En),qi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),qi.crossVectors(n,En)),qi.normalize(),Zo.crossVectors(En,qi),s[0]=qi.x,s[4]=Zo.x,s[8]=En.x,s[1]=qi.y,s[5]=Zo.y,s[9]=En.y,s[2]=qi.z,s[6]=Zo.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],b=n[3],_=n[7],y=n[11],S=n[15],w=s[0],T=s[4],A=s[8],M=s[12],v=s[1],E=s[5],I=s[9],P=s[13],N=s[2],G=s[6],k=s[10],V=s[14],U=s[3],H=s[7],Z=s[11],it=s[15];return r[0]=o*w+a*v+l*N+c*U,r[4]=o*T+a*E+l*G+c*H,r[8]=o*A+a*I+l*k+c*Z,r[12]=o*M+a*P+l*V+c*it,r[1]=u*w+d*v+h*N+f*U,r[5]=u*T+d*E+h*G+f*H,r[9]=u*A+d*I+h*k+f*Z,r[13]=u*M+d*P+h*V+f*it,r[2]=g*w+x*v+p*N+m*U,r[6]=g*T+x*E+p*G+m*H,r[10]=g*A+x*I+p*k+m*Z,r[14]=g*M+x*P+p*V+m*it,r[3]=b*w+_*v+y*N+S*U,r[7]=b*T+_*E+y*G+S*H,r[11]=b*A+_*I+y*k+S*Z,r[15]=b*M+_*P+y*V+S*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*d-s*c*d-r*a*h+n*c*h+s*a*f-n*l*f)+x*(+e*l*f-e*c*h+r*o*h-s*o*f+s*c*u-r*l*u)+p*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*u-n*c*u)+m*(-s*a*u-e*l*d+e*a*h+s*o*d-n*o*h+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],b=d*p*c-x*h*c+x*l*f-a*p*f-d*l*m+a*h*m,_=g*h*c-u*p*c-g*l*f+o*p*f+u*l*m-o*h*m,y=u*x*c-g*d*c+g*a*f-o*x*f-u*a*m+o*d*m,S=g*d*l-u*x*l-g*a*h+o*x*h+u*a*p-o*d*p,w=e*b+n*_+s*y+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=b*T,t[1]=(x*h*r-d*p*r-x*s*f+n*p*f+d*s*m-n*h*m)*T,t[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*m+n*l*m)*T,t[3]=(d*l*r-a*h*r-d*s*c+n*h*c+a*s*f-n*l*f)*T,t[4]=_*T,t[5]=(u*p*r-g*h*r+g*s*f-e*p*f-u*s*m+e*h*m)*T,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*T,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*f+e*l*f)*T,t[8]=y*T,t[9]=(g*d*r-u*x*r-g*n*f+e*x*f+u*n*m-e*d*m)*T,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*m+e*a*m)*T,t[11]=(u*a*r-o*d*r-u*n*c+e*d*c+o*n*f-e*a*f)*T,t[12]=S*T,t[13]=(u*x*s-g*d*s+g*n*h-e*x*h-u*n*p+e*d*p)*T,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*p-e*a*p)*T,t[15]=(o*d*s-u*a*s+u*n*l-e*d*l-o*n*h+e*a*h)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,x=o*u,p=o*d,m=a*d,b=l*c,_=l*u,y=l*d,S=n.x,w=n.y,T=n.z;return s[0]=(1-(x+m))*S,s[1]=(f+y)*S,s[2]=(g-_)*S,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(h+m))*w,s[6]=(p+b)*w,s[7]=0,s[8]=(g+_)*T,s[9]=(p-b)*T,s[10]=(1-(h+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=cr.set(s[0],s[1],s[2]).length(),o=cr.set(s[4],s[5],s[6]).length(),a=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);let c=1/r,u=1/o,d=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ti){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s),f,g;if(a===Ti)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Sa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ti){let l=this.elements,c=1/(e-t),u=1/(n-s),d=1/(o-r),h=(e+t)*c,f=(n+s)*u,g,x;if(a===Ti)g=(o+r)*d,x=-2*d;else if(a===Sa)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},cr=new D,Gn=new le,T0=new D(0,0,0),A0=new D(1,1,1),qi=new D,Zo=new D,En=new D,Fu=new le,Ou=new He,Xe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xe.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},R0=0,Bu=new D,hr=new He,vi=new le,$o=new D,to=new D,C0=new D,I0=new He,zu=new D(1,0,0),Hu=new D(0,1,0),Vu=new D(0,0,1),Gu={type:"added"},P0={type:"removed"},dr={type:"childadded",child:null},sc={type:"childremoved",child:null},Ne=class i extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Xe,n=new He,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Xt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(zu,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zu,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$o.copy(t):$o.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(to,$o,this.up):vi.lookAt($o,to,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(vi),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gu),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(P0),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gu),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,C0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,I0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new D(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new D,Mi=new D,rc=new D,Si=new D,ur=new D,fr=new D,Wu=new D,oc=new D,ac=new D,lc=new D,cc=new Re,hc=new Re,dc=new Re,Ji=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Wn.subVectors(s,e),Mi.subVectors(n,e),rc.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(Mi),l=Wn.dot(rc),c=Mi.dot(Mi),u=Mi.dot(rc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return cc.setScalar(0),hc.setScalar(0),dc.setScalar(0),cc.fromBufferAttribute(t,e),hc.fromBufferAttribute(t,n),dc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cc,r.x),o.addScaledVector(hc,r.y),o.addScaledVector(dc,r.z),o}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),Mi.subVectors(t,e),Wn.cross(Mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Wn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ur.subVectors(s,n),fr.subVectors(r,n),oc.subVectors(t,n);let l=ur.dot(oc),c=fr.dot(oc);if(l<=0&&c<=0)return e.copy(n);ac.subVectors(t,s);let u=ur.dot(ac),d=fr.dot(ac);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ur,o);lc.subVectors(t,r);let f=ur.dot(lc),g=fr.dot(lc);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fr,a);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Wu.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Wu,a);let m=1/(p+x+h);return o=x*m,a=h*m,e.copy(n).addScaledVector(ur,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function uc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=ld(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=uc(o,r,t+1/3),this.g=uc(o,r,t),this.b=uc(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=Xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return re.fromWorkingColorSpace($e.copy(this),t),Math.round(We($e.r*255,0,255))*65536+Math.round(We($e.g*255,0,255))*256+Math.round(We($e.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Je){re.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Jo);let n=uo(Yi.h,Jo.h,e),s=uo(Yi.s,Jo.s,e),r=uo(Yi.l,Jo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Ft;Ft.NAMES=Xf;var L0=0,oi=class extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ai(),this.name="",this.blending=wr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==Es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ln=class extends oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new D,Ko=new vt,xn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ko.fromBufferAttribute(this,e),Ko.applyMatrix3(t),this.setXY(e,Ko.x,Ko.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fh&&(t.usage=this.usage),t}};var Ca=class extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ia=class extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},k0=0,Dn=new le,fc=new Ne,pr=new D,Tn=new Pi,eo=new Pi,ze=new D,we=class i extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wf(t)?Ia:Ca)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(Tn.min,eo.min),Tn.expandByPoint(ze),ze.addVectors(Tn.max,eo.max),Tn.expandByPoint(ze)):(Tn.expandByPoint(eo.min),Tn.expandByPoint(eo.max))}Tn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(t,c),ze.add(pr)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new D,l[A]=new D;let c=new D,u=new D,d=new D,h=new vt,f=new vt,g=new vt,x=new D,p=new D;function m(A,M,v){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,v),h.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(E),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(E),a[A].add(x),a[M].add(x),a[v].add(x),l[A].add(p),l[M].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,M=b.length;A<M;++A){let v=b[A],E=v.start,I=v.count;for(let P=E,N=E+I;P<N;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let _=new D,y=new D,S=new D,w=new D;function T(A){S.fromBufferAttribute(s,A),w.copy(S);let M=a[A];_.copy(M),_.sub(S.multiplyScalar(S.dot(M))).normalize(),y.crossVectors(w,M);let E=y.dot(l[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,E)}for(let A=0,M=b.length;A<M;++A){let v=b[A],E=v.start,I=v.count;for(let P=E,N=E+I;P<N;P+=3)T(t.getX(P+0)),T(t.getX(P+1)),T(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,d=new D;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),x=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new xn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xu=new le,_s=new Aa,jo=new es,qu=new D,Qo=new D,ta=new D,ea=new D,pc=new D,na=new D,Yu=new D,ia=new D,xt=class extends Ne{constructor(t=new we,e=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(pc.fromBufferAttribute(d,t),o?na.addScaledVector(pc,u):na.addScaledVector(pc.sub(e),u))}e.add(na)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(jo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(jo,qu)===null||_s.origin.distanceToSquared(qu)>(t.far-t.near)**2))&&(Xu.copy(r).invert(),_s.copy(t.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=b,S=_;y<S;y+=3){let w=a.getX(y),T=a.getX(y+1),A=a.getX(y+2);s=sa(this,m,t,n,c,u,d,w,T,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let b=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);s=sa(this,o,t,n,c,u,d,b,_,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=b,S=_;y<S;y+=3){let w=y,T=y+1,A=y+2;s=sa(this,m,t,n,c,u,d,w,T,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let b=p,_=p+1,y=p+2;s=sa(this,o,t,n,c,u,d,b,_,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function D0(i,t,e,n,s,r,o,a){let l;if(t.side===gn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Qi,a),l===null)return null;ia.copy(a),ia.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ia);return c<e.near||c>e.far?null:{distance:c,point:ia.clone(),object:i}}function sa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Qo),i.getVertexPosition(l,ta),i.getVertexPosition(c,ea);let u=D0(i,t,e,n,Qo,ta,ea,Yu);if(u){let d=new D;Ji.getBarycoord(Yu,Qo,ta,ea,d),s&&(u.uv=Ji.getInterpolatedAttribute(s,a,l,c,d,new vt)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,a,l,c,d,new vt)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,l,c,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new D,materialIndex:0};Ji.getNormal(Qo,ta,ea,h.normal),u.face=h,u.barycoord=d}return u}var Ve=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function g(x,p,m,b,_,y,S,w,T,A,M){let v=y/T,E=S/A,I=y/2,P=S/2,N=w/2,G=T+1,k=A+1,V=0,U=0,H=new D;for(let Z=0;Z<k;Z++){let it=Z*E-P;for(let gt=0;gt<G;gt++){let Mt=gt*v-I;H[x]=Mt*b,H[p]=it*_,H[m]=N,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[m]=w>0?1:-1,u.push(H.x,H.y,H.z),d.push(gt/T),d.push(1-Z/A),V+=1}}for(let Z=0;Z<A;Z++)for(let it=0;it<T;it++){let gt=h+it+G*Z,Mt=h+it+G*(Z+1),$=h+(it+1)+G*(Z+1),nt=h+(it+1)+G*Z;l.push(gt,Mt,nt),l.push(Mt,$,nt),U+=6}a.addGroup(f,U,M),f+=U,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function kr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=kr(i[e]);for(let s in n)t[s]=n[s]}return t}function U0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var N0={clone:kr,merge:on},F0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=U0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pa=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zi=new D,Zu=new vt,$u=new vt,an=class extends Pa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,Zu,$u),e.subVectors($u,Zu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ho*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},mr=-90,gr=1,xh=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(mr,gr,t,e);s.layers=this.layers,this.add(s);let r=new an(mr,gr,t,e);r.layers=this.layers,this.add(r);let o=new an(mr,gr,t,e);o.layers=this.layers,this.add(o);let a=new an(mr,gr,t,e);a.layers=this.layers,this.add(a);let l=new an(mr,gr,t,e);l.layers=this.layers,this.add(l);let c=new an(mr,gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},La=class extends bn{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Cr,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bh=class extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new La(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ve(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ki});r.uniforms.tEquirect.value=e;let o=new xt(s,r),a=e.minFilter;return e.minFilter===Rs&&(e.minFilter=si),new xh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},mc=new D,B0=new D,z0=new Xt,Ei=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=mc.subVectors(n,e).cross(B0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||z0.getNormalMatrix(t),s=this.coplanarPoint(mc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new es,ra=new D,bo=class{constructor(t=new Ei,e=new Ei,n=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ti){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],b=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,h-c,p-f,y-m).normalize(),n[1].setComponents(l+r,h+c,p+f,y+m).normalize(),n[2].setComponents(l+o,h+u,p+g,y+b).normalize(),n[3].setComponents(l-o,h-u,p-g,y-b).normalize(),n[4].setComponents(l-a,h-d,p-x,y-_).normalize(),e===Ti)n[5].setComponents(l+a,h+d,p+x,y+_).normalize();else if(e===Sa)n[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function H0(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var li=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let b=m*h-o;for(let _=0;_<c;_++){let y=_*d-r;g.push(y,-b,0),x.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let _=b+c*m,y=b+c*(m+1),S=b+1+c*(m+1),w=b+1+c*m;f.push(_,y,w),f.push(y,S,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
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
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
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
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eg=`#ifdef USE_IRIDESCENCE
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
#endif`,ng=`#ifdef USE_BUMPMAP
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
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dg=`#define PI 3.141592653589793
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
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fg=`vec3 transformedNormal = objectNormal;
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
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
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
}`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kg=`uniform bool receiveShadow;
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
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bg=`PhysicalMaterial material;
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
#endif`,zg=`struct PhysicalMaterial {
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
}`,Hg=`
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
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kg=`#if defined( USE_POINTS_UV )
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
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`#ifdef USE_MORPHTARGETS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h1=`#ifdef USE_NORMALMAP
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
#endif`,d1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T1=`float getShadowMask() {
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
}`,A1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,C1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I1=`#ifdef USE_SKINNING
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
#endif`,P1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
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
}`,Z1=`#if DEPTH_PACKING == 3200
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
}`,$1=`#define DISTANCE
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
}`,J1=`#define DISTANCE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`uniform float scale;
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
}`,tx=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#define LAMBERT
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
}`,sx=`#define LAMBERT
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
}`,rx=`#define MATCAP
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
}`,ox=`#define MATCAP
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
}`,ax=`#define NORMAL
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
}`,lx=`#define NORMAL
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
}`,cx=`#define PHONG
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
}`,hx=`#define PHONG
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
}`,dx=`#define STANDARD
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
}`,ux=`#define STANDARD
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
}`,fx=`#define TOON
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
}`,px=`#define TOON
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
}`,mx=`uniform float size;
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
}`,gx=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,bx=`uniform vec3 color;
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
}`,yx=`uniform float rotation;
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
}`,_x=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:q0,alphatest_pars_fragment:Y0,aomap_fragment:Z0,aomap_pars_fragment:$0,batching_pars_vertex:J0,batching_vertex:K0,begin_vertex:j0,beginnormal_vertex:Q0,bsdfs:tg,iridescence_fragment:eg,bumpmap_pars_fragment:ng,clipping_planes_fragment:ig,clipping_planes_pars_fragment:sg,clipping_planes_pars_vertex:rg,clipping_planes_vertex:og,color_fragment:ag,color_pars_fragment:lg,color_pars_vertex:cg,color_vertex:hg,common:dg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:fg,displacementmap_pars_vertex:pg,displacementmap_vertex:mg,emissivemap_fragment:gg,emissivemap_pars_fragment:xg,colorspace_fragment:bg,colorspace_pars_fragment:yg,envmap_fragment:_g,envmap_common_pars_fragment:vg,envmap_pars_fragment:Mg,envmap_pars_vertex:Sg,envmap_physical_pars_fragment:Dg,envmap_vertex:wg,fog_vertex:Eg,fog_pars_vertex:Tg,fog_fragment:Ag,fog_pars_fragment:Rg,gradientmap_pars_fragment:Cg,lightmap_pars_fragment:Ig,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Lg,lights_pars_begin:kg,lights_toon_fragment:Ug,lights_toon_pars_fragment:Ng,lights_phong_fragment:Fg,lights_phong_pars_fragment:Og,lights_physical_fragment:Bg,lights_physical_pars_fragment:zg,lights_fragment_begin:Hg,lights_fragment_maps:Vg,lights_fragment_end:Gg,logdepthbuf_fragment:Wg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:Yg,map_fragment:Zg,map_pars_fragment:$g,map_particle_fragment:Jg,map_particle_pars_fragment:Kg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:Qg,morphinstance_vertex:t1,morphcolor_vertex:e1,morphnormal_vertex:n1,morphtarget_pars_vertex:i1,morphtarget_vertex:s1,normal_fragment_begin:r1,normal_fragment_maps:o1,normal_pars_fragment:a1,normal_pars_vertex:l1,normal_vertex:c1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:d1,clearcoat_normal_fragment_maps:u1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:p1,opaque_fragment:m1,packing:g1,premultiplied_alpha_fragment:x1,project_vertex:b1,dithering_fragment:y1,dithering_pars_fragment:_1,roughnessmap_fragment:v1,roughnessmap_pars_fragment:M1,shadowmap_pars_fragment:S1,shadowmap_pars_vertex:w1,shadowmap_vertex:E1,shadowmask_pars_fragment:T1,skinbase_vertex:A1,skinning_pars_vertex:R1,skinning_vertex:C1,skinnormal_vertex:I1,specularmap_fragment:P1,specularmap_pars_fragment:L1,tonemapping_fragment:k1,tonemapping_pars_fragment:D1,transmission_fragment:U1,transmission_pars_fragment:N1,uv_pars_fragment:F1,uv_pars_vertex:O1,uv_vertex:B1,worldpos_vertex:z1,background_vert:H1,background_frag:V1,backgroundCube_vert:G1,backgroundCube_frag:W1,cube_vert:X1,cube_frag:q1,depth_vert:Y1,depth_frag:Z1,distanceRGBA_vert:$1,distanceRGBA_frag:J1,equirect_vert:K1,equirect_frag:j1,linedashed_vert:Q1,linedashed_frag:tx,meshbasic_vert:ex,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:sx,meshmatcap_vert:rx,meshmatcap_frag:ox,meshnormal_vert:ax,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:hx,meshphysical_vert:dx,meshphysical_frag:ux,meshtoon_vert:fx,meshtoon_frag:px,points_vert:mx,points_frag:gx,shadow_vert:xx,shadow_frag:bx,sprite_vert:yx,sprite_frag:_x},ct={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},ii={basic:{uniforms:on([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:on([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:on([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:on([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:on([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:on([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:on([ct.points,ct.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:on([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:on([ct.common,ct.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:on([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:on([ct.sprite,ct.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:on([ct.common,ct.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:on([ct.lights,ct.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ii.physical={uniforms:on([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var oa={r:0,b:0,g:0},Ms=new Xe,vx=new le;function Mx(i,t,e,n,s,r,o){let a=new Ft(0),l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function x(b){let _=!1,y=g(b);y===null?m(a,l):y&&y.isColor&&(m(y,1),_=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===tl)?(u===void 0&&(u=new xt(new Ve(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:kr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ms.copy(_.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vx.makeRotationFromEuler(Ms)),u.material.toneMapped=re.getTransfer(y.colorSpace)!==fe,(d!==y||h!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xt(new li(2,2),new ai({name:"BackgroundMaterial",uniforms:kr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=re.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,_){b.getRGB(oa,qf(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:p}}function Sx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(v,E,I,P,N){let G=!1,k=d(P,I,E);r!==k&&(r=k,c(r.object)),G=f(v,P,I,N),G&&g(v,P,I,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(v,E,I,P),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function d(v,E,I){let P=I.wireframe===!0,N=n[v.id];N===void 0&&(N={},n[v.id]=N);let G=N[E.id];G===void 0&&(G={},N[E.id]=G);let k=G[P];return k===void 0&&(k=h(l()),G[P]=k),k}function h(v){let E=[],I=[],P=[];for(let N=0;N<e;N++)E[N]=0,I[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:P,object:v,attributes:{},index:null}}function f(v,E,I,P){let N=r.attributes,G=E.attributes,k=0,V=I.getAttributes();for(let U in V)if(V[U].location>=0){let Z=N[U],it=G[U];if(it===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),Z===void 0||Z.attribute!==it||it&&Z.data!==it.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function g(v,E,I,P){let N={},G=E.attributes,k=0,V=I.getAttributes();for(let U in V)if(V[U].location>=0){let Z=G[U];Z===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor));let it={};it.attribute=Z,Z&&Z.data&&(it.data=Z.data),N[U]=it,k++}r.attributes=N,r.attributesNum=k,r.index=P}function x(){let v=r.newAttributes;for(let E=0,I=v.length;E<I;E++)v[E]=0}function p(v){m(v,0)}function m(v,E){let I=r.newAttributes,P=r.enabledAttributes,N=r.attributeDivisors;I[v]=1,P[v]===0&&(i.enableVertexAttribArray(v),P[v]=1),N[v]!==E&&(i.vertexAttribDivisor(v,E),N[v]=E)}function b(){let v=r.newAttributes,E=r.enabledAttributes;for(let I=0,P=E.length;I<P;I++)E[I]!==v[I]&&(i.disableVertexAttribArray(I),E[I]=0)}function _(v,E,I,P,N,G,k){k===!0?i.vertexAttribIPointer(v,E,I,N,G):i.vertexAttribPointer(v,E,I,P,N,G)}function y(v,E,I,P){x();let N=P.attributes,G=I.getAttributes(),k=E.defaultAttributeValues;for(let V in G){let U=G[V];if(U.location>=0){let H=N[V];if(H===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(H=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(H=v.instanceColor)),H!==void 0){let Z=H.normalized,it=H.itemSize,gt=t.get(H);if(gt===void 0)continue;let Mt=gt.buffer,$=gt.type,nt=gt.bytesPerElement,lt=$===i.INT||$===i.UNSIGNED_INT||H.gpuType===td;if(H.isInterleavedBufferAttribute){let rt=H.data,mt=rt.stride,Rt=H.offset;if(rt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<U.locationSize;Ct++)m(U.location+Ct,rt.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ct=0;Ct<U.locationSize;Ct++)p(U.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Ct=0;Ct<U.locationSize;Ct++)_(U.location+Ct,it/U.locationSize,$,Z,mt*nt,(Rt+it/U.locationSize*Ct)*nt,lt)}else{if(H.isInstancedBufferAttribute){for(let rt=0;rt<U.locationSize;rt++)m(U.location+rt,H.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let rt=0;rt<U.locationSize;rt++)p(U.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let rt=0;rt<U.locationSize;rt++)_(U.location+rt,it/U.locationSize,$,Z,it*nt,it/U.locationSize*rt*nt,lt)}}else if(k!==void 0){let Z=k[V];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(U.location,Z);break;case 3:i.vertexAttrib3fv(U.location,Z);break;case 4:i.vertexAttrib4fv(U.location,Z);break;default:i.vertexAttrib1fv(U.location,Z)}}}}b()}function S(){A();for(let v in n){let E=n[v];for(let I in E){let P=E[I];for(let N in P)u(P[N].object),delete P[N];delete E[I]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;let E=n[v.id];for(let I in E){let P=E[I];for(let N in P)u(P[N].object),delete P[N];delete E[I]}delete n[v.id]}function T(v){for(let E in n){let I=n[E];if(I[v.id]===void 0)continue;let P=I[v.id];for(let N in P)u(P[N].object),delete P[N];delete I[v.id]}}function A(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function wx(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function l(c,u,d,h){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ex(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==qn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let A=T===Mo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ci&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ri&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:S,maxSamples:w}}function Tx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ei,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let b=r?0:n,_=b*4,y=m.clippingState||null;l.value=y,y=u(g,h,_,f);for(let S=0;S!==_;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(d[_]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Ax(i){let t=new WeakMap;function e(o,a){return a===Fc?o.mapping=Cr:a===Oc&&(o.mapping=Ir),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fc||a===Oc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new bh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ka=class extends Pa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sr=4,Ju=[.125,.215,.35,.446,.526,.582],Ts=20,gc=new ka,Ku=new Ft,xc=null,bc=0,yc=0,_c=!1,ws=(1+Math.sqrt(5))/2,xr=1/ws,ju=[new D(-ws,xr,0),new D(ws,xr,0),new D(-xr,0,ws),new D(xr,0,ws),new D(0,ws,-xr),new D(0,ws,xr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Da=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xc,bc,yc),this._renderer.xr.enabled=_c,t.scissorTest=!1,aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cr||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:si,minFilter:si,generateMipmaps:!1,type:Mo,format:qn,colorSpace:Nr,depthBuffer:!1},s=Qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rx(r)),this._blurMaterial=Cx(r,t,e)}return s}_compileMaterial(t){let e=new xt(this._lodPlanes[0],t);this._renderer.compile(e,gc)}_sceneToCubeUV(t,e,n,s){let a=new an(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ku),u.toneMapping=ji,u.autoClear=!1;let f=new ln({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new xt(new Ve,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Ku),x=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let _=this._cubeSize;aa(s,b*_,m>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Cr||t.mapping===Ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;aa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,gc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ju[(s-r-1)%ju.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new xt(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ts-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):Ts;p>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ts}`);let m=[],b=0;for(let T=0;T<Ts;++T){let A=T/x,M=Math.exp(-A*A/2);m.push(M),T===0?b+=M:T<p&&(b+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/b;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;let y=this._sizeLods[s],S=3*y*(s>_-Sr?s-_+Sr:0),w=4*(this._cubeSize-y);aa(e,S,w,3*y,2*y),l.setRenderTarget(e),l.render(d,gc)}};function Rx(i){let t=[],e=[],n=[],s=i,r=i-Sr+1+Ju.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Sr?l=Ju[o-i+Sr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,p=2,m=1,b=new Float32Array(x*g*f),_=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let w=0;w<f;w++){let T=w%3*2/3-1,A=w>2?0:-1,M=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];b.set(M,x*g*w),_.set(h,p*g*w);let v=[w,w,w,w,w,w];y.set(v,m*g*w)}let S=new we;S.setAttribute("position",new xn(b,x)),S.setAttribute("uv",new xn(_,p)),S.setAttribute("faceIndex",new xn(y,m)),t.push(S),s>Sr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qu(i,t,e){let n=new Ii(i,t,e);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cx(i,t,e){let n=new Float32Array(Ts),s=new D(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cd(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function tf(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cd(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ef(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function cd(){return`

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
	`}function Ix(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Fc||l===Oc,u=l===Cr||l===Ir;if(c||u){let d=t.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Da(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Da(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Px(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&lo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lx(i,t,e,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);for(let g in h.morphAttributes){let x=h.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)t.update(h[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let _=0,y=b.length;_<y;_+=3){let S=b[_+0],w=b[_+1],T=b[_+2];h.push(S,w,w,T,T,S)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){let S=_+0,w=_+1,T=_+2;h.push(S,w,w,T,T,S)}}else return;let p=new(Wf(h)?Ia:Ca)(h,1);p.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function kx(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(h,f,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,x,0,g);let m=0;for(let b=0;b<g;b++)m+=f[b]*x[b];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Dx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ux(i,t,e){let n=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*S*4*d),T=new Ta(w,y,S,d);T.type=ri,T.needsUpdate=!0;let A=_*4;for(let v=0;v<d;v++){let E=p[v],I=m[v],P=b[v],N=y*S*4*v;for(let G=0;G<E.count;G++){let k=G*A;f===!0&&(s.fromBufferAttribute(E,G),w[N+k+0]=s.x,w[N+k+1]=s.y,w[N+k+2]=s.z,w[N+k+3]=0),g===!0&&(s.fromBufferAttribute(I,G),w[N+k+4]=s.x,w[N+k+5]=s.y,w[N+k+6]=s.z,w[N+k+7]=0),x===!0&&(s.fromBufferAttribute(P,G),w[N+k+8]=s.x,w[N+k+9]=s.y,w[N+k+10]=s.z,w[N+k+11]=P.itemSize===4?s.w:1)}}h={count:d,texture:T,size:new vt(y,S)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Nx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ua=class extends bn{constructor(t,e,n,s,r,o,a,l,c,u=Er){if(u!==Er&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Er&&(n=Is),n===void 0&&u===Lr&&(n=Pr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zf=new bn,nf=new Ua(1,1),$f=new Ta,Jf=new gh,Kf=new La,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),lf=new Float32Array(4);function Fr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function il(i,t){let e=rf[t];e===void 0&&(e=new Int32Array(t),rf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Hx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;lf.set(n),i.uniformMatrix2fv(this.addr,!1,lf),Oe(e,n)}}function Vx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;af.set(n),i.uniformMatrix3fv(this.addr,!1,af),Oe(e,n)}}function Gx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;of.set(n),i.uniformMatrix4fv(this.addr,!1,of),Oe(e,n)}}function Wx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Zx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function jx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nf.compareFunction=Gf,r=nf):r=Zf,e.setTexture2D(t||r,s)}function Qx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jf,s)}function tb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kf,s)}function eb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$f,s)}function nb(i){switch(i){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return Hx;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return Zx;case 36294:return $x;case 36295:return Jx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return eb}}function ib(i,t){i.uniform1fv(this.addr,t)}function sb(i,t){let e=Fr(t,this.size,2);i.uniform2fv(this.addr,e)}function rb(i,t){let e=Fr(t,this.size,3);i.uniform3fv(this.addr,e)}function ob(i,t){let e=Fr(t,this.size,4);i.uniform4fv(this.addr,e)}function ab(i,t){let e=Fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lb(i,t){let e=Fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cb(i,t){let e=Fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hb(i,t){i.uniform1iv(this.addr,t)}function db(i,t){i.uniform2iv(this.addr,t)}function ub(i,t){i.uniform3iv(this.addr,t)}function fb(i,t){i.uniform4iv(this.addr,t)}function pb(i,t){i.uniform1uiv(this.addr,t)}function mb(i,t){i.uniform2uiv(this.addr,t)}function gb(i,t){i.uniform3uiv(this.addr,t)}function xb(i,t){i.uniform4uiv(this.addr,t)}function bb(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zf,r[o])}function yb(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jf,r[o])}function _b(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kf,r[o])}function vb(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$f,r[o])}function Mb(i){switch(i){case 5126:return ib;case 35664:return sb;case 35665:return rb;case 35666:return ob;case 35674:return ab;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return hb;case 35667:case 35671:return db;case 35668:case 35672:return ub;case 35669:case 35673:return fb;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return vb}}var yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nb(e.type)}},_h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mb(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},vc=/(\w+)(\])?(\[|\.)?/g;function cf(i,t){i.seq.push(t),i.map[t.id]=t}function Sb(i,t,e){let n=i.name,s=n.length;for(vc.lastIndex=0;;){let r=vc.exec(n),o=vc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cf(e,c===void 0?new yh(a,i,t):new _h(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new vh(a),cf(e,d)),e=d}}}var Ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Sb(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function hf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var wb=37297,Eb=0;function Tb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var df=new Xt;function Ab(i){re._getMatrix(df,re.workingColorSpace,i);let t=`mat3( ${df.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case el:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Tb(i.getShaderSource(t),o)}else return s}function Rb(i,t){let e=Ab(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Cb(i,t){let e;switch(t){case zm:e="Linear";break;case Hm:e="Reinhard";break;case Vm:e="Cineon";break;case Qh:e="ACESFilmic";break;case Wm:e="AgX";break;case Xm:e="Neutral";break;case Gm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var la=new D;function Ib(){re.getLuminanceCoefficients(la);let i=la.x.toFixed(4),t=la.y.toFixed(4),e=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function Lb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function co(i){return i!==""}function ff(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Db=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(Db,Nb)}var Ub=new Map;function Nb(i,t){let e=Yt[t];if(e===void 0){let n=Ub.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mh(e)}var Fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(i){return i.replace(Fb,Ob)}function Ob(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Bb(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(t="SHADOWMAP_TYPE_VSM"),t}function zb(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cr:case Ir:t="ENVMAP_TYPE_CUBE";break;case tl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hb(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ir&&(t="ENVMAP_MODE_REFRACTION"),t}function Vb(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jh:t="ENVMAP_BLENDING_MULTIPLY";break;case Om:t="ENVMAP_BLENDING_MIX";break;case Bm:t="ENVMAP_BLENDING_ADD";break}return t}function Gb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wb(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Bb(e),c=zb(e),u=Hb(e),d=Vb(e),h=Gb(e),f=Pb(e),g=Lb(r),x=s.createProgram(),p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(co).join(`
`),m.length>0&&(m+=`
`)):(p=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),m=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ji?"#define TONE_MAPPING":"",e.toneMapping!==ji?Yt.tonemapping_pars_fragment:"",e.toneMapping!==ji?Cb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Rb("linearToOutputTexel",e.outputColorSpace),Ib(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(co).join(`
`)),o=Mh(o),o=ff(o,e),o=pf(o,e),a=Mh(a),a=ff(a,e),a=pf(a,e),o=mf(o),a=mf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=b+p+o,y=b+m+a,S=hf(s,s.VERTEX_SHADER,_),w=hf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,S),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(E){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x).trim(),P=s.getShaderInfoLog(S).trim(),N=s.getShaderInfoLog(w).trim(),G=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,w);else{let V=uf(s,S,"vertex"),U=uf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+V+`
`+U)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(P===""||N==="")&&(k=!1);k&&(E.diagnostics={runnable:G,programLog:I,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:m}})}s.deleteShader(S),s.deleteShader(w),A=new Ar(s,x),M=kb(s,x)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,wb)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Eb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var Xb=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wh(t),e.set(t,n)),n}},wh=class{constructor(t){this.id=Xb++,this.code=t,this.usedTimes=0}};function qb(i,t,e,n,s,r,o){let a=new Ra,l=new Sh,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,v,E,I,P){let N=I.fog,G=P.geometry,k=M.isMeshStandardMaterial?I.environment:null,V=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),U=V&&V.mapping===tl?V.image.height:null,H=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=Z!==void 0?Z.length:0,gt=0;G.morphAttributes.position!==void 0&&(gt=1),G.morphAttributes.normal!==void 0&&(gt=2),G.morphAttributes.color!==void 0&&(gt=3);let Mt,$,nt,lt;if(H){let de=ii[H];Mt=de.vertexShader,$=de.fragmentShader}else Mt=M.vertexShader,$=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),lt=l.getFragmentShaderID(M);let rt=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Rt=P.isInstancedMesh===!0,Ct=P.isBatchedMesh===!0,Jt=!!M.map,Lt=!!M.matcap,Qt=!!V,F=!!M.aoMap,fn=!!M.lightMap,Bt=!!M.bumpMap,Ht=!!M.normalMap,kt=!!M.displacementMap,be=!!M.emissiveMap,Pt=!!M.metalnessMap,L=!!M.roughnessMap,R=M.anisotropy>0,W=M.clearcoat>0,tt=M.dispersion>0,st=M.iridescence>0,Q=M.sheen>0,Tt=M.transmission>0,dt=R&&!!M.anisotropyMap,bt=W&&!!M.clearcoatMap,se=W&&!!M.clearcoatNormalMap,ot=W&&!!M.clearcoatRoughnessMap,yt=st&&!!M.iridescenceMap,Dt=st&&!!M.iridescenceThicknessMap,Nt=Q&&!!M.sheenColorMap,_t=Q&&!!M.sheenRoughnessMap,ie=!!M.specularMap,qt=!!M.specularColorMap,ge=!!M.specularIntensityMap,O=Tt&&!!M.transmissionMap,ht=Tt&&!!M.thicknessMap,J=!!M.gradientMap,et=!!M.alphaMap,pt=M.alphaTest>0,ut=!!M.alphaHash,Gt=!!M.extensions,Ae=ji;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let Ye={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:Mt,fragmentShader:$,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:lt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&P._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&P.instanceColor!==null,instancingMorph:Rt&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Nr,alphaToCoverage:!!M.alphaToCoverage,map:Jt,matcap:Lt,envMap:Qt,envMapMode:Qt&&V.mapping,envMapCubeUVHeight:U,aoMap:F,lightMap:fn,bumpMap:Bt,normalMap:Ht,displacementMap:h&&kt,emissiveMap:be,normalMapObjectSpace:Ht&&M.normalMapType===$m,normalMapTangentSpace:Ht&&M.normalMapType===ad,metalnessMap:Pt,roughnessMap:L,anisotropy:R,anisotropyMap:dt,clearcoat:W,clearcoatMap:bt,clearcoatNormalMap:se,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:st,iridescenceMap:yt,iridescenceThicknessMap:Dt,sheen:Q,sheenColorMap:Nt,sheenRoughnessMap:_t,specularMap:ie,specularColorMap:qt,specularIntensityMap:ge,transmission:Tt,transmissionMap:O,thicknessMap:ht,gradientMap:J,opaque:M.transparent===!1&&M.blending===wr&&M.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:ut,combine:M.combine,mapUv:Jt&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:fn&&x(M.lightMap.channel),bumpMapUv:Bt&&x(M.bumpMap.channel),normalMapUv:Ht&&x(M.normalMap.channel),displacementMapUv:kt&&x(M.displacementMap.channel),emissiveMapUv:be&&x(M.emissiveMap.channel),metalnessMapUv:Pt&&x(M.metalnessMap.channel),roughnessMapUv:L&&x(M.roughnessMap.channel),anisotropyMapUv:dt&&x(M.anisotropyMap.channel),clearcoatMapUv:bt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(M.sheenRoughnessMap.channel),specularMapUv:ie&&x(M.specularMap.channel),specularColorMapUv:qt&&x(M.specularColorMap.channel),specularIntensityMapUv:ge&&x(M.specularIntensityMap.channel),transmissionMapUv:O&&x(M.transmissionMap.channel),thicknessMapUv:ht&&x(M.thicknessMap.channel),alphaMapUv:et&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ht||R),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!G.attributes.uv&&(Jt||et),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:mt,skinning:P.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:gt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Jt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:be&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Gt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&M.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function m(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let E in M.defines)v.push(E),v.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(b(v,M),_(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function b(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function _(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let v=g[M.type],E;if(v){let I=ii[v];E=N0.clone(I.uniforms)}else E=M.uniforms;return E}function S(M,v){let E;for(let I=0,P=u.length;I<P;I++){let N=u[I];if(N.cacheKey===v){E=N,++E.usedTimes;break}}return E===void 0&&(E=new Wb(i,v,M,r),u.push(E)),E}function w(M){if(--M.usedTimes===0){let v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:A}}function Yb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,h,f,g,x,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=p),t++,m}function a(d,h,f,g,x,p){let m=o(d,h,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(d,h,f,g,x,p){let m=o(d,h,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,h){e.length>1&&e.sort(d||Zb),n.length>1&&n.sort(h||xf),s.length>1&&s.sort(h||xf)}function u(){for(let d=t,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function $b(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new bf,i.set(n,[o])):s>=r.length?(o=new bf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ft};break;case"SpotLight":e={position:new D,direction:new D,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Kb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jb=0;function Qb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t2(i){let t=new Jb,e=Kb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new le,o=new le;function a(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,b=0,_=0,y=0,S=0,w=0,T=0;c.sort(Qb);for(let M=0,v=c.length;M<v;M++){let E=c[M],I=E.color,P=E.intensity,N=E.distance,G=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=I.r*P,d+=I.g*P,h+=I.b*P;else if(E.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(E.sh.coefficients[k],P);T++}else if(E.isDirectionalLight){let k=t.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let V=E.shadow,U=e.get(E);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=E.shadow.matrix,b++}n.directional[f]=k,f++}else if(E.isSpotLight){let k=t.get(E);k.position.setFromMatrixPosition(E.matrixWorld),k.color.copy(I).multiplyScalar(P),k.distance=N,k.coneCos=Math.cos(E.angle),k.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),k.decay=E.decay,n.spot[x]=k;let V=E.shadow;if(E.map&&(n.spotLightMap[S]=E.map,S++,V.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[x]=V.matrix,E.castShadow){let U=e.get(E);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,n.spotShadow[x]=U,n.spotShadowMap[x]=G,y++}x++}else if(E.isRectAreaLight){let k=t.get(E);k.color.copy(I).multiplyScalar(P),k.halfWidth.set(E.width*.5,0,0),k.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=k,p++}else if(E.isPointLight){let k=t.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),k.distance=E.distance,k.decay=E.decay,E.castShadow){let V=E.shadow,U=e.get(E);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=E.shadow.matrix,_++}n.point[g]=k,g++}else if(E.isHemisphereLight){let k=t.get(E);k.skyColor.copy(E.color).multiplyScalar(P),k.groundColor.copy(E.groundColor).multiplyScalar(P),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==b||A.numPointShadows!==_||A.numSpotShadows!==y||A.numSpotMaps!==S||A.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,A.directionalLength=f,A.pointLength=g,A.spotLength=x,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=b,A.numPointShadows=_,A.numSpotShadows=y,A.numSpotMaps=S,A.numLightProbes=T,n.version=jb++)}function l(c,u){let d=0,h=0,f=0,g=0,x=0,p=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let _=c[m];if(_.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=n.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function yf(i){let t=new t2(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function e2(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yf(i),t.set(s,[a])):r>=o.length?(a=new yf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Eh=class extends oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Th=class extends oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},n2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i2=`uniform sampler2D shadow_pass;
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
}`;function s2(i,t,e){let n=new bo,s=new vt,r=new vt,o=new Re,a=new Eh({depthPacking:Zm}),l=new Th,c={},u=e.maxTextureSize,d={[Qi]:gn,[gn]:Qi,[mn]:mn},h=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:n2,fragmentShader:i2}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lf;let m=this.type;this.render=function(w,T,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ki),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let P=m!==wi&&this.type===wi,N=m===wi&&this.type!==wi;for(let G=0,k=w.length;G<k;G++){let V=w[G],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let H=U.getFrameExtents();if(s.multiply(H),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,U.mapSize.y=r.y)),U.map===null||P===!0||N===!0){let it=this.type!==wi?{minFilter:An,magFilter:An}:{};U.map!==null&&U.map.dispose(),U.map=new Ii(s.x,s.y,it),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let Z=U.getViewportCount();for(let it=0;it<Z;it++){let gt=U.getViewport(it);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),I.viewport(o),U.updateMatrices(V,it),n=U.getFrustum(),y(T,A,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===wi&&b(U,A),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(M,v,E)};function b(w,T){let A=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ii(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,A,h,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,A,f,x,null)}function _(w,T,A,M){let v=null,E=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)v=E;else if(v=A.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let I=v.uuid,P=T.uuid,N=c[I];N===void 0&&(N={},c[I]=N);let G=N[P];G===void 0&&(G=v.clone(),N[P]=G,T.addEventListener("dispose",S)),v=G}if(v.visible=T.visible,v.wireframe=T.wireframe,M===wi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let I=i.properties.get(v);I.light=A}return v}function y(w,T,A,M,v){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===wi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let P=t.update(w),N=w.material;if(Array.isArray(N)){let G=P.groups;for(let k=0,V=G.length;k<V;k++){let U=G[k],H=N[U.materialIndex];if(H&&H.visible){let Z=_(w,H,M,v);w.onBeforeShadow(i,w,T,A,P,Z,U),i.renderBufferDirect(A,null,P,Z,w,U),w.onAfterShadow(i,w,T,A,P,Z,U)}}}else if(N.visible){let G=_(w,N,M,v);w.onBeforeShadow(i,w,T,A,P,G,null),i.renderBufferDirect(A,null,P,G,w,null),w.onAfterShadow(i,w,T,A,P,G,null)}}let I=w.children;for(let P=0,N=I.length;P<N;P++)y(I[P],T,A,M,v)}function S(w){w.target.removeEventListener("dispose",S);for(let A in c){let M=c[A],v=w.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var r2={[Ic]:Pc,[Lc]:Uc,[kc]:Nc,[Rr]:Dc,[Pc]:Ic,[Uc]:Lc,[Nc]:kc,[Dc]:Rr};function o2(i,t){function e(){let O=!1,ht=new Re,J=null,et=new Re(0,0,0,0);return{setMask:function(pt){J!==pt&&!O&&(i.colorMask(pt,pt,pt,pt),J=pt)},setLocked:function(pt){O=pt},setClear:function(pt,ut,Gt,Ae,Ye){Ye===!0&&(pt*=Ae,ut*=Ae,Gt*=Ae),ht.set(pt,ut,Gt,Ae),et.equals(ht)===!1&&(i.clearColor(pt,ut,Gt,Ae),et.copy(ht))},reset:function(){O=!1,J=null,et.set(-1,0,0,0)}}}function n(){let O=!1,ht=!1,J=null,et=null,pt=null;return{setReversed:function(ut){if(ht!==ut){let Gt=t.get("EXT_clip_control");ht?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let Ae=pt;pt=null,this.setClear(Ae)}ht=ut},getReversed:function(){return ht},setTest:function(ut){ut?rt(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(ut){J!==ut&&!O&&(i.depthMask(ut),J=ut)},setFunc:function(ut){if(ht&&(ut=r2[ut]),et!==ut){switch(ut){case Ic:i.depthFunc(i.NEVER);break;case Pc:i.depthFunc(i.ALWAYS);break;case Lc:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case kc:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=ut}},setLocked:function(ut){O=ut},setClear:function(ut){pt!==ut&&(ht&&(ut=1-ut),i.clearDepth(ut),pt=ut)},reset:function(){O=!1,J=null,et=null,pt=null,ht=!1}}}function s(){let O=!1,ht=null,J=null,et=null,pt=null,ut=null,Gt=null,Ae=null,Ye=null;return{setTest:function(de){O||(de?rt(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(de){ht!==de&&!O&&(i.stencilMask(de),ht=de)},setFunc:function(de,zn,xi){(J!==de||et!==zn||pt!==xi)&&(i.stencilFunc(de,zn,xi),J=de,et=zn,pt=xi)},setOp:function(de,zn,xi){(ut!==de||Gt!==zn||Ae!==xi)&&(i.stencilOp(de,zn,xi),ut=de,Gt=zn,Ae=xi)},setLocked:function(de){O=de},setClear:function(de){Ye!==de&&(i.clearStencil(de),Ye=de)},reset:function(){O=!1,ht=null,J=null,et=null,pt=null,ut=null,Gt=null,Ae=null,Ye=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,f=[],g=null,x=!1,p=null,m=null,b=null,_=null,y=null,S=null,w=null,T=new Ft(0,0,0),A=0,M=!1,v=null,E=null,I=null,P=null,N=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,V=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=V>=1):U.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=V>=2);let H=null,Z={},it=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Mt=new Re().fromArray(it),$=new Re().fromArray(gt);function nt(O,ht,J,et){let pt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(O,ut),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<J;Gt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ut}let lt={};lt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Rr),Bt(!1),Ht(_u),rt(i.CULL_FACE),F(Ki);function rt(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function mt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Rt(O,ht){return d[O]!==ht?(i.bindFramebuffer(O,ht),d[O]=ht,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ct(O,ht){let J=f,et=!1;if(O){J=h.get(ht),J===void 0&&(J=[],h.set(ht,J));let pt=O.textures;if(J.length!==pt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Gt=pt.length;ut<Gt;ut++)J[ut]=i.COLOR_ATTACHMENT0+ut;J.length=pt.length,et=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,et=!0);et&&i.drawBuffers(J)}function Jt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let Lt={[Es]:i.FUNC_ADD,[vm]:i.FUNC_SUBTRACT,[Mm]:i.FUNC_REVERSE_SUBTRACT};Lt[Sm]=i.MIN,Lt[wm]=i.MAX;let Qt={[Em]:i.ZERO,[Tm]:i.ONE,[Am]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[km]:i.SRC_ALPHA_SATURATE,[Pm]:i.DST_COLOR,[Cm]:i.DST_ALPHA,[Rm]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[Lm]:i.ONE_MINUS_DST_COLOR,[Im]:i.ONE_MINUS_DST_ALPHA,[Dm]:i.CONSTANT_COLOR,[Um]:i.ONE_MINUS_CONSTANT_COLOR,[Nm]:i.CONSTANT_ALPHA,[Fm]:i.ONE_MINUS_CONSTANT_ALPHA};function F(O,ht,J,et,pt,ut,Gt,Ae,Ye,de){if(O===Ki){x===!0&&(mt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),O!==_m){if(O!==p||de!==M){if((m!==Es||y!==Es)&&(i.blendEquation(i.FUNC_ADD),m=Es,y=Es),de)switch(O){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vu:i.blendFunc(i.ONE,i.ONE);break;case Mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,_=null,S=null,w=null,T.set(0,0,0),A=0,p=O,M=de}return}pt=pt||ht,ut=ut||J,Gt=Gt||et,(ht!==m||pt!==y)&&(i.blendEquationSeparate(Lt[ht],Lt[pt]),m=ht,y=pt),(J!==b||et!==_||ut!==S||Gt!==w)&&(i.blendFuncSeparate(Qt[J],Qt[et],Qt[ut],Qt[Gt]),b=J,_=et,S=ut,w=Gt),(Ae.equals(T)===!1||Ye!==A)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ye),T.copy(Ae),A=Ye),p=O,M=!1}function fn(O,ht){O.side===mn?mt(i.CULL_FACE):rt(i.CULL_FACE);let J=O.side===gn;ht&&(J=!J),Bt(J),O.blending===wr&&O.transparent===!1?F(Ki):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let et=O.stencilWrite;a.setTest(et),et&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),be(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(O){v!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),v=O)}function Ht(O){O!==bm?(rt(i.CULL_FACE),O!==E&&(O===_u?i.cullFace(i.BACK):O===ym?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),E=O}function kt(O){O!==I&&(k&&i.lineWidth(O),I=O)}function be(O,ht,J){O?(rt(i.POLYGON_OFFSET_FILL),(P!==ht||N!==J)&&(i.polygonOffset(ht,J),P=ht,N=J)):mt(i.POLYGON_OFFSET_FILL)}function Pt(O){O?rt(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+G-1),H!==O&&(i.activeTexture(O),H=O)}function R(O,ht,J){J===void 0&&(H===null?J=i.TEXTURE0+G-1:J=H);let et=Z[J];et===void 0&&(et={type:void 0,texture:void 0},Z[J]=et),(et.type!==O||et.texture!==ht)&&(H!==J&&(i.activeTexture(J),H=J),i.bindTexture(O,ht||lt[O]),et.type=O,et.texture=ht)}function W(){let O=Z[H];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(O){Mt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Mt.copy(O))}function _t(O){$.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function ie(O,ht){let J=c.get(ht);J===void 0&&(J=new WeakMap,c.set(ht,J));let et=J.get(O);et===void 0&&(et=i.getUniformBlockIndex(ht,O.name),J.set(O,et))}function qt(O,ht){let et=c.get(ht).get(O);l.get(ht)!==et&&(i.uniformBlockBinding(ht,et,O.__bindingPointIndex),l.set(ht,et))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},H=null,Z={},d={},h=new WeakMap,f=[],g=null,x=!1,p=null,m=null,b=null,_=null,y=null,S=null,w=null,T=new Ft(0,0,0),A=0,M=!1,v=null,E=null,I=null,P=null,N=null,Mt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:mt,bindFramebuffer:Rt,drawBuffers:Ct,useProgram:Jt,setBlending:F,setMaterial:fn,setFlipSided:Bt,setCullFace:Ht,setLineWidth:kt,setPolygonOffset:be,setScissorTest:Pt,activeTexture:L,bindTexture:R,unbindTexture:W,compressedTexImage2D:tt,compressedTexImage3D:st,texImage2D:yt,texImage3D:Dt,updateUBOMapping:ie,uniformBlockBinding:qt,texStorage2D:se,texStorage3D:ot,texSubImage2D:Q,texSubImage3D:Tt,compressedTexSubImage2D:dt,compressedTexSubImage3D:bt,scissor:Nt,viewport:_t,reset:ge}}function _f(i,t,e,n){let s=a2(n);switch(e){case Ff:return i*t;case Bf:return i*t;case zf:return i*t*2;case id:return i*t/s.components*s.byteLength;case sd:return i*t/s.components*s.byteLength;case Hf:return i*t*2/s.components*s.byteLength;case rd:return i*t*2/s.components*s.byteLength;case Of:return i*t*3/s.components*s.byteLength;case qn:return i*t*4/s.components*s.byteLength;case od:return i*t*4/s.components*s.byteLength;case xa:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hc:case Gc:return Math.max(i,16)*Math.max(t,8)/4;case zc:case Vc:return Math.max(i,8)*Math.max(t,8)/2;case Wc:case Xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $c:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case th:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case eh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ih:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case va:case ah:case lh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vf:case ch:return Math.ceil(i/4)*Math.ceil(t/4)*8;case hh:case dh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a2(i){switch(i){case Ci:case Df:return{byteLength:1,components:1};case go:case Uf:case Mo:return{byteLength:2,components:1};case ed:case nd:return{byteLength:2,components:4};case Is:case td:case ri:return{byteLength:4,components:1};case Nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function l2(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,R){return f?new OffscreenCanvas(L,R):wa("canvas")}function x(L,R,W){let tt=1,st=Pt(L);if((st.width>W||st.height>W)&&(tt=W/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Q=Math.floor(tt*st.width),Tt=Math.floor(tt*st.height);d===void 0&&(d=g(Q,Tt));let dt=R?g(Q,Tt):d;return dt.width=Q,dt.height=Tt,dt.getContext("2d").drawImage(L,0,0,Q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Tt+")."),dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),L;return L}function p(L){return L.generateMipmaps}function m(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,R,W,tt,st=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=R;if(R===i.RED&&(W===i.FLOAT&&(Q=i.R32F),W===i.HALF_FLOAT&&(Q=i.R16F),W===i.UNSIGNED_BYTE&&(Q=i.R8)),R===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.R8UI),W===i.UNSIGNED_SHORT&&(Q=i.R16UI),W===i.UNSIGNED_INT&&(Q=i.R32UI),W===i.BYTE&&(Q=i.R8I),W===i.SHORT&&(Q=i.R16I),W===i.INT&&(Q=i.R32I)),R===i.RG&&(W===i.FLOAT&&(Q=i.RG32F),W===i.HALF_FLOAT&&(Q=i.RG16F),W===i.UNSIGNED_BYTE&&(Q=i.RG8)),R===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RG8UI),W===i.UNSIGNED_SHORT&&(Q=i.RG16UI),W===i.UNSIGNED_INT&&(Q=i.RG32UI),W===i.BYTE&&(Q=i.RG8I),W===i.SHORT&&(Q=i.RG16I),W===i.INT&&(Q=i.RG32I)),R===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),W===i.UNSIGNED_INT&&(Q=i.RGB32UI),W===i.BYTE&&(Q=i.RGB8I),W===i.SHORT&&(Q=i.RGB16I),W===i.INT&&(Q=i.RGB32I)),R===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),W===i.UNSIGNED_INT&&(Q=i.RGBA32UI),W===i.BYTE&&(Q=i.RGBA8I),W===i.SHORT&&(Q=i.RGBA16I),W===i.INT&&(Q=i.RGBA32I)),R===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),R===i.RGBA){let Tt=st?el:re.getTransfer(tt);W===i.FLOAT&&(Q=i.RGBA32F),W===i.HALF_FLOAT&&(Q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Q=Tt===fe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function y(L,R){let W;return L?R===null||R===Is||R===Pr?W=i.DEPTH24_STENCIL8:R===ri?W=i.DEPTH32F_STENCIL8:R===go&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Is||R===Pr?W=i.DEPTH_COMPONENT24:R===ri?W=i.DEPTH_COMPONENT32F:R===go&&(W=i.DEPTH_COMPONENT16),W}function S(L,R){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==An&&L.minFilter!==si?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function w(L){let R=L.target;R.removeEventListener("dispose",w),A(R),R.isVideoTexture&&u.delete(R)}function T(L){let R=L.target;R.removeEventListener("dispose",T),v(R)}function A(L){let R=n.get(L);if(R.__webglInit===void 0)return;let W=L.source,tt=h.get(W);if(tt){let st=tt[R.__cacheKey];st.usedTimes--,st.usedTimes===0&&M(L),Object.keys(tt).length===0&&h.delete(W)}n.remove(L)}function M(L){let R=n.get(L);i.deleteTexture(R.__webglTexture);let W=L.source,tt=h.get(W);delete tt[R.__cacheKey],o.memory.textures--}function v(L){let R=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(R.__webglFramebuffer[tt]))for(let st=0;st<R.__webglFramebuffer[tt].length;st++)i.deleteFramebuffer(R.__webglFramebuffer[tt][st]);else i.deleteFramebuffer(R.__webglFramebuffer[tt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[tt])}else{if(Array.isArray(R.__webglFramebuffer))for(let tt=0;tt<R.__webglFramebuffer.length;tt++)i.deleteFramebuffer(R.__webglFramebuffer[tt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let tt=0;tt<R.__webglColorRenderbuffer.length;tt++)R.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[tt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let W=L.textures;for(let tt=0,st=W.length;tt<st;tt++){let Q=n.get(W[tt]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(W[tt])}n.remove(L)}let E=0;function I(){E=0}function P(){let L=E;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),E+=1,L}function N(L){let R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function G(L,R){let W=n.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){let tt=L.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,L,R);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+R)}function k(L,R){let W=n.get(L);if(L.version>0&&W.__version!==L.version){$(W,L,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+R)}function V(L,R){let W=n.get(L);if(L.version>0&&W.__version!==L.version){$(W,L,R);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+R)}function U(L,R){let W=n.get(L);if(L.version>0&&W.__version!==L.version){nt(W,L,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+R)}let H={[Cs]:i.REPEAT,[As]:i.CLAMP_TO_EDGE,[Bc]:i.MIRRORED_REPEAT},Z={[An]:i.NEAREST,[qm]:i.NEAREST_MIPMAP_NEAREST,[Vo]:i.NEAREST_MIPMAP_LINEAR,[si]:i.LINEAR,[Zl]:i.LINEAR_MIPMAP_NEAREST,[Rs]:i.LINEAR_MIPMAP_LINEAR},it={[Jm]:i.NEVER,[n0]:i.ALWAYS,[Km]:i.LESS,[Gf]:i.LEQUAL,[jm]:i.EQUAL,[e0]:i.GEQUAL,[Qm]:i.GREATER,[t0]:i.NOTEQUAL};function gt(L,R){if(R.type===ri&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===si||R.magFilter===Zl||R.magFilter===Vo||R.magFilter===Rs||R.minFilter===si||R.minFilter===Zl||R.minFilter===Vo||R.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,H[R.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,H[R.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,H[R.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Z[R.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Z[R.minFilter]),R.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,it[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===An||R.minFilter!==Vo&&R.minFilter!==Rs||R.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Mt(L,R){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",w));let tt=R.source,st=h.get(tt);st===void 0&&(st={},h.set(tt,st));let Q=N(R);if(Q!==L.__cacheKey){st[Q]===void 0&&(st[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),st[Q].usedTimes++;let Tt=st[L.__cacheKey];Tt!==void 0&&(st[L.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(R)),L.__cacheKey=Q,L.__webglTexture=st[Q].texture}return W}function $(L,R,W){let tt=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(tt=i.TEXTURE_3D);let st=Mt(L,R),Q=R.source;e.bindTexture(tt,L.__webglTexture,i.TEXTURE0+W);let Tt=n.get(Q);if(Q.version!==Tt.__version||st===!0){e.activeTexture(i.TEXTURE0+W);let dt=re.getPrimaries(re.workingColorSpace),bt=R.colorSpace===$i?null:re.getPrimaries(R.colorSpace),se=R.colorSpace===$i||dt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ot=x(R.image,!1,s.maxTextureSize);ot=be(R,ot);let yt=r.convert(R.format,R.colorSpace),Dt=r.convert(R.type),Nt=_(R.internalFormat,yt,Dt,R.colorSpace,R.isVideoTexture);gt(tt,R);let _t,ie=R.mipmaps,qt=R.isVideoTexture!==!0,ge=Tt.__version===void 0||st===!0,O=Q.dataReady,ht=S(R,ot);if(R.isDepthTexture)Nt=y(R.format===Lr,R.type),ge&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Nt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Nt,ot.width,ot.height,0,yt,Dt,null));else if(R.isDataTexture)if(ie.length>0){qt&&ge&&e.texStorage2D(i.TEXTURE_2D,ht,Nt,ie[0].width,ie[0].height);for(let J=0,et=ie.length;J<et;J++)_t=ie[J],qt?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,_t.width,_t.height,yt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,J,Nt,_t.width,_t.height,0,yt,Dt,_t.data);R.generateMipmaps=!1}else qt?(ge&&e.texStorage2D(i.TEXTURE_2D,ht,Nt,ot.width,ot.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,yt,Dt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,ot.width,ot.height,0,yt,Dt,ot.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){qt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Nt,ie[0].width,ie[0].height,ot.depth);for(let J=0,et=ie.length;J<et;J++)if(_t=ie[J],R.format!==qn)if(yt!==null)if(qt){if(O)if(R.layerUpdates.size>0){let pt=_f(_t.width,_t.height,R.format,R.type);for(let ut of R.layerUpdates){let Gt=_t.data.subarray(ut*pt/_t.data.BYTES_PER_ELEMENT,(ut+1)*pt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ut,_t.width,_t.height,1,yt,Gt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,_t.width,_t.height,ot.depth,yt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Nt,_t.width,_t.height,ot.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,_t.width,_t.height,ot.depth,yt,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Nt,_t.width,_t.height,ot.depth,0,yt,Dt,_t.data)}else{qt&&ge&&e.texStorage2D(i.TEXTURE_2D,ht,Nt,ie[0].width,ie[0].height);for(let J=0,et=ie.length;J<et;J++)_t=ie[J],R.format!==qn?yt!==null?qt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Nt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,_t.width,_t.height,yt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,J,Nt,_t.width,_t.height,0,yt,Dt,_t.data)}else if(R.isDataArrayTexture)if(qt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Nt,ot.width,ot.height,ot.depth),O)if(R.layerUpdates.size>0){let J=_f(ot.width,ot.height,R.format,R.type);for(let et of R.layerUpdates){let pt=ot.data.subarray(et*J/ot.data.BYTES_PER_ELEMENT,(et+1)*J/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,yt,Dt,pt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,Dt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,ot.width,ot.height,ot.depth,0,yt,Dt,ot.data);else if(R.isData3DTexture)qt?(ge&&e.texStorage3D(i.TEXTURE_3D,ht,Nt,ot.width,ot.height,ot.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,Dt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,ot.width,ot.height,ot.depth,0,yt,Dt,ot.data);else if(R.isFramebufferTexture){if(ge)if(qt)e.texStorage2D(i.TEXTURE_2D,ht,Nt,ot.width,ot.height);else{let J=ot.width,et=ot.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Nt,J,et,0,yt,Dt,null),J>>=1,et>>=1}}else if(ie.length>0){if(qt&&ge){let J=Pt(ie[0]);e.texStorage2D(i.TEXTURE_2D,ht,Nt,J.width,J.height)}for(let J=0,et=ie.length;J<et;J++)_t=ie[J],qt?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,yt,Dt,_t):e.texImage2D(i.TEXTURE_2D,J,Nt,yt,Dt,_t);R.generateMipmaps=!1}else if(qt){if(ge){let J=Pt(ot);e.texStorage2D(i.TEXTURE_2D,ht,Nt,J.width,J.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Dt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Nt,yt,Dt,ot);p(R)&&m(tt),Tt.__version=Q.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function nt(L,R,W){if(R.image.length!==6)return;let tt=Mt(L,R),st=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);let Q=n.get(st);if(st.version!==Q.__version||tt===!0){e.activeTexture(i.TEXTURE0+W);let Tt=re.getPrimaries(re.workingColorSpace),dt=R.colorSpace===$i?null:re.getPrimaries(R.colorSpace),bt=R.colorSpace===$i||Tt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let se=R.isCompressedTexture||R.image[0].isCompressedTexture,ot=R.image[0]&&R.image[0].isDataTexture,yt=[];for(let et=0;et<6;et++)!se&&!ot?yt[et]=x(R.image[et],!0,s.maxCubemapSize):yt[et]=ot?R.image[et].image:R.image[et],yt[et]=be(R,yt[et]);let Dt=yt[0],Nt=r.convert(R.format,R.colorSpace),_t=r.convert(R.type),ie=_(R.internalFormat,Nt,_t,R.colorSpace),qt=R.isVideoTexture!==!0,ge=Q.__version===void 0||tt===!0,O=st.dataReady,ht=S(R,Dt);gt(i.TEXTURE_CUBE_MAP,R);let J;if(se){qt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,ie,Dt.width,Dt.height);for(let et=0;et<6;et++){J=yt[et].mipmaps;for(let pt=0;pt<J.length;pt++){let ut=J[pt];R.format!==qn?Nt!==null?qt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,ut.width,ut.height,Nt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,ie,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,ut.width,ut.height,Nt,_t,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,ie,ut.width,ut.height,0,Nt,_t,ut.data)}}}else{if(J=R.mipmaps,qt&&ge){J.length>0&&ht++;let et=Pt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,ie,et.width,et.height)}for(let et=0;et<6;et++)if(ot){qt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,yt[et].width,yt[et].height,Nt,_t,yt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,yt[et].width,yt[et].height,0,Nt,_t,yt[et].data);for(let pt=0;pt<J.length;pt++){let Gt=J[pt].image[et].image;qt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Gt.width,Gt.height,Nt,_t,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,ie,Gt.width,Gt.height,0,Nt,_t,Gt.data)}}else{qt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Nt,_t,yt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,Nt,_t,yt[et]);for(let pt=0;pt<J.length;pt++){let ut=J[pt];qt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Nt,_t,ut.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,ie,Nt,_t,ut.image[et])}}}p(R)&&m(i.TEXTURE_CUBE_MAP),Q.__version=st.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function lt(L,R,W,tt,st,Q){let Tt=r.convert(W.format,W.colorSpace),dt=r.convert(W.type),bt=_(W.internalFormat,Tt,dt,W.colorSpace),se=n.get(R),ot=n.get(W);if(ot.__renderTarget=R,!se.__hasExternalTextures){let yt=Math.max(1,R.width>>Q),Dt=Math.max(1,R.height>>Q);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,bt,yt,Dt,R.depth,0,Tt,dt,null):e.texImage2D(st,Q,bt,yt,Dt,0,Tt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Ht(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,st,ot.__webglTexture,0,Bt(R)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,st,ot.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(L,R,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),R.depthBuffer){let tt=R.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,Q=y(R.stencilBuffer,st),Tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Bt(R);Ht(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Q,R.width,R.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Q,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Q,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,L)}else{let tt=R.textures;for(let st=0;st<tt.length;st++){let Q=tt[st],Tt=r.convert(Q.format,Q.colorSpace),dt=r.convert(Q.type),bt=_(Q.internalFormat,Tt,dt,Q.colorSpace),se=Bt(R);W&&Ht(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,bt,R.width,R.height):Ht(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,bt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,bt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(R.depthTexture);tt.__renderTarget=R,(!tt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),G(R.depthTexture,0);let st=tt.__webglTexture,Q=Bt(R);if(R.depthTexture.format===Er)Ht(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(R.depthTexture.format===Lr)Ht(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Rt(L){let R=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){let tt=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),tt){let st=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,tt.removeEventListener("dispose",st)};tt.addEventListener("dispose",st),R.__depthDisposeCallback=st}R.__boundDepthTexture=tt}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");mt(R.__webglFramebuffer,L)}else if(W){R.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[tt]),R.__webglDepthbuffer[tt]===void 0)R.__webglDepthbuffer[tt]=i.createRenderbuffer(),rt(R.__webglDepthbuffer[tt],L,!1);else{let st=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=R.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),rt(R.__webglDepthbuffer,L,!1);else{let tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(L,R,W){let tt=n.get(L);R!==void 0&&lt(tt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Rt(L)}function Jt(L){let R=L.texture,W=n.get(L),tt=n.get(R);L.addEventListener("dispose",T);let st=L.textures,Q=L.isWebGLCubeRenderTarget===!0,Tt=st.length>1;if(Tt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=R.version,o.memory.textures++),Q){W.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(R.mipmaps&&R.mipmaps.length>0){W.__webglFramebuffer[dt]=[];for(let bt=0;bt<R.mipmaps.length;bt++)W.__webglFramebuffer[dt][bt]=i.createFramebuffer()}else W.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){W.__webglFramebuffer=[];for(let dt=0;dt<R.mipmaps.length;dt++)W.__webglFramebuffer[dt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let dt=0,bt=st.length;dt<bt;dt++){let se=n.get(st[dt]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Ht(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let dt=0;dt<st.length;dt++){let bt=st[dt];W.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[dt]);let se=r.convert(bt.format,bt.colorSpace),ot=r.convert(bt.type),yt=_(bt.internalFormat,se,ot,bt.colorSpace,L.isXRRenderTarget===!0),Dt=Bt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,yt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,W.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),gt(i.TEXTURE_CUBE_MAP,R);for(let dt=0;dt<6;dt++)if(R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)lt(W.__webglFramebuffer[dt][bt],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt);else lt(W.__webglFramebuffer[dt],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(R)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,bt=st.length;dt<bt;dt++){let se=st[dt],ot=n.get(se);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),gt(i.TEXTURE_2D,se),lt(W.__webglFramebuffer,L,se,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),p(se)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(dt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,tt.__webglTexture),gt(dt,R),R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)lt(W.__webglFramebuffer[bt],L,R,i.COLOR_ATTACHMENT0,dt,bt);else lt(W.__webglFramebuffer,L,R,i.COLOR_ATTACHMENT0,dt,0);p(R)&&m(dt),e.unbindTexture()}L.depthBuffer&&Rt(L)}function Lt(L){let R=L.textures;for(let W=0,tt=R.length;W<tt;W++){let st=R[W];if(p(st)){let Q=b(L),Tt=n.get(st).__webglTexture;e.bindTexture(Q,Tt),m(Q),e.unbindTexture()}}}let Qt=[],F=[];function fn(L){if(L.samples>0){if(Ht(L)===!1){let R=L.textures,W=L.width,tt=L.height,st=i.COLOR_BUFFER_BIT,Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(L),dt=R.length>1;if(dt)for(let bt=0;bt<R.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let bt=0;bt<R.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);let se=n.get(R[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,W,tt,0,0,W,tt,st,i.NEAREST),l===!0&&(Qt.length=0,F.length=0,Qt.push(i.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qt.push(Q),F.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let bt=0;bt<R.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);let se=n.get(R[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let R=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Bt(L){return Math.min(s.maxSamples,L.samples)}function Ht(L){let R=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function kt(L){let R=o.render.frame;u.get(L)!==R&&(u.set(L,R),L.update())}function be(L,R){let W=L.colorSpace,tt=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Nr&&W!==$i&&(re.getTransfer(W)===fe?(tt!==qn||st!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),R}function Pt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=U,this.rebindTextures=Ct,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ht}function c2(i,t){function e(n,s=$i){let r,o=re.getTransfer(s);if(n===Ci)return i.UNSIGNED_BYTE;if(n===ed)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return i.BYTE;if(n===Uf)return i.SHORT;if(n===go)return i.UNSIGNED_SHORT;if(n===td)return i.INT;if(n===Is)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===Mo)return i.HALF_FLOAT;if(n===Ff)return i.ALPHA;if(n===Of)return i.RGB;if(n===qn)return i.RGBA;if(n===Bf)return i.LUMINANCE;if(n===zf)return i.LUMINANCE_ALPHA;if(n===Er)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===id)return i.RED;if(n===sd)return i.RED_INTEGER;if(n===Hf)return i.RG;if(n===rd)return i.RG_INTEGER;if(n===od)return i.RGBA_INTEGER;if(n===xa||n===ba||n===ya||n===_a)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zc||n===Hc||n===Vc||n===Gc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wc||n===Xc||n===qc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wc||n===Xc)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yc||n===Zc||n===$c||n===Jc||n===Kc||n===jc||n===Qc||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===oh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$c)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===th)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ih)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===ah||n===lh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===va)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vf||n===ch||n===hh||n===dh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ah=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Zt=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},h2={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},d2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u2=`
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

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new bn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ai({vertexShader:d2,fragmentShader:u2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends ts{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,x=new Rh,p=e.getContextAttributes(),m=null,b=null,_=[],y=[],S=new vt,w=null,T=new an;T.viewport=new Re;let A=new an;A.viewport=new Re;let M=[T,A],v=new Ah,E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=_[$];return nt===void 0&&(nt=new fo,_[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=_[$];return nt===void 0&&(nt=new fo,_[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=_[$];return nt===void 0&&(nt=new fo,_[$]=nt),nt.getHandSpace()};function P($){let nt=y.indexOf($.inputSource);if(nt===-1)return;let lt=_[nt];lt!==void 0&&(lt.update($.inputSource,$.frame,c||o),lt.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",G);for(let $=0;$<_.length;$++){let nt=y[$];nt!==null&&(y[$]=null,_[$].disconnect(nt))}E=null,I=null,x.reset(),t.setRenderTarget(m),f=null,h=null,d=null,s=null,b=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",N),s.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0){let nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ii(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,lt=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?Lr:Er,lt=p.stencil?Pr:Is);let mt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(mt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new Ii(h.textureWidth,h.textureHeight,{format:qn,type:Ci,depthTexture:new Ua(h.textureWidth,h.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G($){for(let nt=0;nt<$.removed.length;nt++){let lt=$.removed[nt],rt=y.indexOf(lt);rt>=0&&(y[rt]=null,_[rt].disconnect(lt))}for(let nt=0;nt<$.added.length;nt++){let lt=$.added[nt],rt=y.indexOf(lt);if(rt===-1){for(let Rt=0;Rt<_.length;Rt++)if(Rt>=y.length){y.push(lt),rt=Rt;break}else if(y[Rt]===null){y[Rt]=lt,rt=Rt;break}if(rt===-1)break}let mt=_[rt];mt&&mt.connect(lt)}}let k=new D,V=new D;function U($,nt,lt){k.setFromMatrixPosition(nt.matrixWorld),V.setFromMatrixPosition(lt.matrixWorld);let rt=k.distanceTo(V),mt=nt.projectionMatrix.elements,Rt=lt.projectionMatrix.elements,Ct=mt[14]/(mt[10]-1),Jt=mt[14]/(mt[10]+1),Lt=(mt[9]+1)/mt[5],Qt=(mt[9]-1)/mt[5],F=(mt[8]-1)/mt[0],fn=(Rt[8]+1)/Rt[0],Bt=Ct*F,Ht=Ct*fn,kt=rt/(-F+fn),be=kt*-F;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(be),$.translateZ(kt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),mt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Pt=Ct+kt,L=Jt+kt,R=Bt-be,W=Ht+(rt-be),tt=Lt*Jt/L*Pt,st=Qt*Jt/L*Pt;$.projectionMatrix.makePerspective(R,W,tt,st,Pt,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function H($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,lt=$.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(lt=x.depthFar)),v.near=A.near=T.near=nt,v.far=A.far=T.far=lt,(E!==v.near||I!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,I=v.far),T.layers.mask=$.layers.mask|2,A.layers.mask=$.layers.mask|4,v.layers.mask=T.layers.mask|A.layers.mask;let rt=$.parent,mt=v.cameras;H(v,rt);for(let Rt=0;Rt<mt.length;Rt++)H(mt[Rt],rt);mt.length===2?U(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),Z($,v,rt)};function Z($,nt,lt){lt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(lt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let it=null;function gt($,nt){if(u=nt.getViewerPose(c||o),g=nt,u!==null){let lt=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let rt=!1;lt.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Rt=0;Rt<lt.length;Rt++){let Ct=lt[Rt],Jt=null;if(f!==null)Jt=f.getViewport(Ct);else{let Qt=d.getViewSubImage(h,Ct);Jt=Qt.viewport,Rt===0&&(t.setRenderTargetTextures(b,Qt.colorTexture,h.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(b))}let Lt=M[Rt];Lt===void 0&&(Lt=new an,Lt.layers.enable(Rt),Lt.viewport=new Re,M[Rt]=Lt),Lt.matrix.fromArray(Ct.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Ct.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Rt===0&&(v.matrix.copy(Lt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(Lt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){let Rt=d.getDepthInformation(lt[0]);Rt&&Rt.isValid&&Rt.texture&&x.init(t,Rt,s.renderState)}}for(let lt=0;lt<_.length;lt++){let rt=y[lt],mt=_[lt];rt!==null&&mt!==void 0&&mt.update(rt,nt,c||o)}it&&it($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Mt=new Yf;Mt.setAnimationLoop(gt),this.setAnimationLoop=function($){it=$},this.dispose=function(){}}},Ss=new Xe,f2=new le;function p2(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,qf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===gn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===gn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=t.get(m),_=b.envMap,y=b.envMapRotation;_&&(p.envMap.value=_,Ss.copy(y),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),p.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(Ss)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m2(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let y=_.program;n.uniformBlockBinding(b,y)}function c(b,_){let y=s[b.id];y===void 0&&(g(b),y=u(b),s[b.id]=y,b.addEventListener("dispose",p));let S=_.program;n.updateUBOMapping(b,S);let w=t.render.frame;r[b.id]!==w&&(h(b),r[b.id]=w)}function u(b){let _=d();b.__bindingPointIndex=_;let y=i.createBuffer(),S=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let _=s[b.id],y=b.uniforms,S=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,T=y.length;w<T;w++){let A=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,v=A.length;M<v;M++){let E=A[M];if(f(E,w,M,S)===!0){let I=E.__offset,P=Array.isArray(E.value)?E.value:[E.value],N=0;for(let G=0;G<P.length;G++){let k=P[G],V=x(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,I+N,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,N),N+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,_,y,S){let w=b.value,T=_+"_"+y;if(S[T]===void 0)return typeof w=="number"||typeof w=="boolean"?S[T]=w:S[T]=w.clone(),!0;{let A=S[T];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return S[T]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(b){let _=b.uniforms,y=0,S=16;for(let T=0,A=_.length;T<A;T++){let M=Array.isArray(_[T])?_[T]:[_[T]];for(let v=0,E=M.length;v<E;v++){let I=M[v],P=Array.isArray(I.value)?I.value:[I.value];for(let N=0,G=P.length;N<G;N++){let k=P[N],V=x(k),U=y%S,H=U%V.boundary,Z=U+H;y+=H,Z!==0&&S-Z<V.storage&&(y+=S-Z),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=V.storage}}}let w=y%S;return w>0&&(y+=S-w),b.__size=y,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function p(b){let _=b.target;_.removeEventListener("dispose",p);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Na=class{constructor(t={}){let{canvas:e=y0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),p=null,m=null,b=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=ji,this.toneMappingExposure=1;let y=this,S=!1,w=0,T=0,A=null,M=-1,v=null,E=new Re,I=new Re,P=null,N=new Ft(0),G=0,k=e.width,V=e.height,U=1,H=null,Z=null,it=new Re(0,0,k,V),gt=new Re(0,0,k,V),Mt=!1,$=new bo,nt=!1,lt=!1,rt=new le,mt=new le,Rt=new D,Ct=new Re,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function Qt(){return A===null?U:1}let F=n;function fn(C,B){return e.getContext(C,B)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){let B="webgl2";if(F=fn(B,C),F===null)throw fn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Bt,Ht,kt,be,Pt,L,R,W,tt,st,Q,Tt,dt,bt,se,ot,yt,Dt,Nt,_t,ie,qt,ge,O;function ht(){Bt=new Px(F),Bt.init(),qt=new c2(F,Bt),Ht=new Ex(F,Bt,t,qt),kt=new o2(F,Bt),Ht.reverseDepthBuffer&&h&&kt.buffers.depth.setReversed(!0),be=new Dx(F),Pt=new Yb,L=new l2(F,Bt,kt,Pt,Ht,qt,be),R=new Ax(y),W=new Ix(y),tt=new H0(F),ge=new Sx(F,tt),st=new Lx(F,tt,be,ge),Q=new Nx(F,st,tt,be),Nt=new Ux(F,Ht,L),ot=new Tx(Pt),Tt=new qb(y,R,W,Bt,Ht,ge,ot),dt=new p2(y,Pt),bt=new $b,se=new e2(Bt),Dt=new Mx(y,R,W,kt,Q,f,l),yt=new s2(y,Q,Ht),O=new m2(F,be,Ht,kt),_t=new wx(F,Bt,be),ie=new kx(F,Bt,be),be.programs=Tt.programs,y.capabilities=Ht,y.extensions=Bt,y.properties=Pt,y.renderLists=bt,y.shadowMap=yt,y.state=kt,y.info=be}ht();let J=new Ch(y,F);this.xr=J,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=Bt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Bt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(C){C!==void 0&&(U=C,this.setSize(k,V,!1))},this.getSize=function(C){return C.set(k,V)},this.setSize=function(C,B,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,V=B,e.width=Math.floor(C*U),e.height=Math.floor(B*U),q===!0&&(e.style.width=C+"px",e.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(k*U,V*U).floor()},this.setDrawingBufferSize=function(C,B,q){k=C,V=B,U=q,e.width=Math.floor(C*q),e.height=Math.floor(B*q),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,B,q,Y){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,B,q,Y),kt.viewport(E.copy(it).multiplyScalar(U).round())},this.getScissor=function(C){return C.copy(gt)},this.setScissor=function(C,B,q,Y){C.isVector4?gt.set(C.x,C.y,C.z,C.w):gt.set(C,B,q,Y),kt.scissor(I.copy(gt).multiplyScalar(U).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(C){kt.setScissorTest(Mt=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(C=!0,B=!0,q=!0){let Y=0;if(C){let z=!1;if(A!==null){let at=A.texture.format;z=at===od||at===rd||at===sd}if(z){let at=A.texture.type,ft=at===Ci||at===Is||at===go||at===Pr||at===ed||at===nd,St=Dt.getClearColor(),wt=Dt.getClearAlpha(),zt=St.r,Wt=St.g,Et=St.b;ft?(g[0]=zt,g[1]=Wt,g[2]=Et,g[3]=wt,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=zt,x[1]=Wt,x[2]=Et,x[3]=wt,F.clearBufferiv(F.COLOR,0,x))}else Y|=F.COLOR_BUFFER_BIT}B&&(Y|=F.DEPTH_BUFFER_BIT),q&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),bt.dispose(),se.dispose(),Pt.dispose(),R.dispose(),W.dispose(),Q.dispose(),ge.dispose(),O.dispose(),Tt.dispose(),J.dispose(),J.removeEventListener("sessionstart",uu),J.removeEventListener("sessionend",fu),xs.stop()};function et(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let C=be.autoReset,B=yt.enabled,q=yt.autoUpdate,Y=yt.needsUpdate,z=yt.type;ht(),be.autoReset=C,yt.enabled=B,yt.autoUpdate=q,yt.needsUpdate=Y,yt.type=z}function ut(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gt(C){let B=C.target;B.removeEventListener("dispose",Gt),Ae(B)}function Ae(C){Ye(C),Pt.remove(C)}function Ye(C){let B=Pt.get(C).programs;B!==void 0&&(B.forEach(function(q){Tt.releaseProgram(q)}),C.isShaderMaterial&&Tt.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,q,Y,z,at){B===null&&(B=Jt);let ft=z.isMesh&&z.matrixWorld.determinant()<0,St=mm(C,B,q,Y,z);kt.setMaterial(Y,ft);let wt=q.index,zt=1;if(Y.wireframe===!0){if(wt=st.getWireframeAttribute(q),wt===void 0)return;zt=2}let Wt=q.drawRange,Et=q.attributes.position,ae=Wt.start*zt,xe=(Wt.start+Wt.count)*zt;at!==null&&(ae=Math.max(ae,at.start*zt),xe=Math.min(xe,(at.start+at.count)*zt)),wt!==null?(ae=Math.max(ae,0),xe=Math.min(xe,wt.count)):Et!=null&&(ae=Math.max(ae,0),xe=Math.min(xe,Et.count));let ye=xe-ae;if(ye<0||ye===1/0)return;ge.setup(z,Y,St,q,wt);let pn,ce=_t;if(wt!==null&&(pn=tt.get(wt),ce=ie,ce.setIndex(pn)),z.isMesh)Y.wireframe===!0?(kt.setLineWidth(Y.wireframeLinewidth*Qt()),ce.setMode(F.LINES)):ce.setMode(F.TRIANGLES);else if(z.isLine){let At=Y.linewidth;At===void 0&&(At=1),kt.setLineWidth(At*Qt()),z.isLineSegments?ce.setMode(F.LINES):z.isLineLoop?ce.setMode(F.LINE_LOOP):ce.setMode(F.LINE_STRIP)}else z.isPoints?ce.setMode(F.POINTS):z.isSprite&&ce.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ce.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ce.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let At=z._multiDrawStarts,bi=z._multiDrawCounts,he=z._multiDrawCount,Hn=wt?tt.get(wt).bytesPerElement:1,ir=Pt.get(Y).currentProgram.getUniforms();for(let wn=0;wn<he;wn++)ir.setValue(F,"_gl_DrawID",wn),ce.render(At[wn]/Hn,bi[wn])}else if(z.isInstancedMesh)ce.renderInstances(ae,ye,z.count);else if(q.isInstancedBufferGeometry){let At=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,bi=Math.min(q.instanceCount,At);ce.renderInstances(ae,ye,bi)}else ce.render(ae,ye)};function de(C,B,q){C.transparent===!0&&C.side===mn&&C.forceSinglePass===!1?(C.side=gn,C.needsUpdate=!0,Ho(C,B,q),C.side=Qi,C.needsUpdate=!0,Ho(C,B,q),C.side=mn):Ho(C,B,q)}this.compile=function(C,B,q=null){q===null&&(q=C),m=se.get(q),m.init(B),_.push(m),q.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),C!==q&&C.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let Y=new Set;return C.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let at=z.material;if(at)if(Array.isArray(at))for(let ft=0;ft<at.length;ft++){let St=at[ft];de(St,q,z),Y.add(St)}else de(at,q,z),Y.add(at)}),_.pop(),m=null,Y},this.compileAsync=function(C,B,q=null){let Y=this.compile(C,B,q);return new Promise(z=>{function at(){if(Y.forEach(function(ft){Pt.get(ft).currentProgram.isReady()&&Y.delete(ft)}),Y.size===0){z(C);return}setTimeout(at,10)}Bt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let zn=null;function xi(C){zn&&zn(C)}function uu(){xs.stop()}function fu(){xs.start()}let xs=new Yf;xs.setAnimationLoop(xi),typeof self<"u"&&xs.setContext(self),this.setAnimationLoop=function(C){zn=C,J.setAnimationLoop(C),C===null?xs.stop():xs.start()},J.addEventListener("sessionstart",uu),J.addEventListener("sessionend",fu),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,B,A),m=se.get(C,_.length),m.init(B),_.push(m),mt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(mt),lt=this.localClippingEnabled,nt=ot.init(this.clippingPlanes,lt),p=bt.get(C,b.length),p.init(),b.push(p),J.enabled===!0&&J.isPresenting===!0){let at=y.xr.getDepthSensingMesh();at!==null&&Yl(at,B,-1/0,y.sortObjects)}Yl(C,B,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(H,Z),Lt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Lt&&Dt.addToRenderList(p,C),this.info.render.frame++,nt===!0&&ot.beginShadows();let q=m.state.shadowsArray;yt.render(q,C,B),nt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=p.opaque,z=p.transmissive;if(m.setupLights(),B.isArrayCamera){let at=B.cameras;if(z.length>0)for(let ft=0,St=at.length;ft<St;ft++){let wt=at[ft];mu(Y,z,C,wt)}Lt&&Dt.render(C);for(let ft=0,St=at.length;ft<St;ft++){let wt=at[ft];pu(p,C,wt,wt.viewport)}}else z.length>0&&mu(Y,z,C,B),Lt&&Dt.render(C),pu(p,C,B);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(y,C,B),ge.resetDefaultState(),M=-1,v=null,_.pop(),_.length>0?(m=_[_.length-1],nt===!0&&ot.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Yl(C,B,q,Y){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){Y&&Ct.setFromMatrixPosition(C.matrixWorld).applyMatrix4(mt);let ft=Q.update(C),St=C.material;St.visible&&p.push(C,ft,St,q,Ct.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){let ft=Q.update(C),St=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ct.copy(C.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ct.copy(ft.boundingSphere.center)),Ct.applyMatrix4(C.matrixWorld).applyMatrix4(mt)),Array.isArray(St)){let wt=ft.groups;for(let zt=0,Wt=wt.length;zt<Wt;zt++){let Et=wt[zt],ae=St[Et.materialIndex];ae&&ae.visible&&p.push(C,ft,ae,q,Ct.z,Et)}}else St.visible&&p.push(C,ft,St,q,Ct.z,null)}}let at=C.children;for(let ft=0,St=at.length;ft<St;ft++)Yl(at[ft],B,q,Y)}function pu(C,B,q,Y){let z=C.opaque,at=C.transmissive,ft=C.transparent;m.setupLightsView(q),nt===!0&&ot.setGlobalState(y.clippingPlanes,q),Y&&kt.viewport(E.copy(Y)),z.length>0&&zo(z,B,q),at.length>0&&zo(at,B,q),ft.length>0&&zo(ft,B,q),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function mu(C,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Ii(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Mo:Ci,minFilter:Rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let at=m.state.transmissionRenderTarget[Y.id],ft=Y.viewport||E;at.setSize(ft.z,ft.w);let St=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(N),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Lt&&Dt.render(q);let wt=y.toneMapping;y.toneMapping=ji;let zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),nt===!0&&ot.setGlobalState(y.clippingPlanes,Y),zo(C,q,Y),L.updateMultisampleRenderTarget(at),L.updateRenderTargetMipmap(at),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Et=0,ae=B.length;Et<ae;Et++){let xe=B[Et],ye=xe.object,pn=xe.geometry,ce=xe.material,At=xe.group;if(ce.side===mn&&ye.layers.test(Y.layers)){let bi=ce.side;ce.side=gn,ce.needsUpdate=!0,gu(ye,q,Y,pn,ce,At),ce.side=bi,ce.needsUpdate=!0,Wt=!0}}Wt===!0&&(L.updateMultisampleRenderTarget(at),L.updateRenderTargetMipmap(at))}y.setRenderTarget(St),y.setClearColor(N,G),zt!==void 0&&(Y.viewport=zt),y.toneMapping=wt}function zo(C,B,q){let Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,at=C.length;z<at;z++){let ft=C[z],St=ft.object,wt=ft.geometry,zt=Y===null?ft.material:Y,Wt=ft.group;St.layers.test(q.layers)&&gu(St,B,q,wt,zt,Wt)}}function gu(C,B,q,Y,z,at){C.onBeforeRender(y,B,q,Y,z,at),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.onBeforeRender(y,B,q,Y,C,at),z.transparent===!0&&z.side===mn&&z.forceSinglePass===!1?(z.side=gn,z.needsUpdate=!0,y.renderBufferDirect(q,B,Y,z,C,at),z.side=Qi,z.needsUpdate=!0,y.renderBufferDirect(q,B,Y,z,C,at),z.side=mn):y.renderBufferDirect(q,B,Y,z,C,at),C.onAfterRender(y,B,q,Y,z,at)}function Ho(C,B,q){B.isScene!==!0&&(B=Jt);let Y=Pt.get(C),z=m.state.lights,at=m.state.shadowsArray,ft=z.state.version,St=Tt.getParameters(C,z.state,at,B,q),wt=Tt.getProgramCacheKey(St),zt=Y.programs;Y.environment=C.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(C.isMeshStandardMaterial?W:R).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,zt===void 0&&(C.addEventListener("dispose",Gt),zt=new Map,Y.programs=zt);let Wt=zt.get(wt);if(Wt!==void 0){if(Y.currentProgram===Wt&&Y.lightsStateVersion===ft)return bu(C,St),Wt}else St.uniforms=Tt.getUniforms(C),C.onBeforeCompile(St,y),Wt=Tt.acquireProgram(St,wt),zt.set(wt,Wt),Y.uniforms=St.uniforms;let Et=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Et.clippingPlanes=ot.uniform),bu(C,St),Y.needsLights=xm(C),Y.lightsStateVersion=ft,Y.needsLights&&(Et.ambientLightColor.value=z.state.ambient,Et.lightProbe.value=z.state.probe,Et.directionalLights.value=z.state.directional,Et.directionalLightShadows.value=z.state.directionalShadow,Et.spotLights.value=z.state.spot,Et.spotLightShadows.value=z.state.spotShadow,Et.rectAreaLights.value=z.state.rectArea,Et.ltc_1.value=z.state.rectAreaLTC1,Et.ltc_2.value=z.state.rectAreaLTC2,Et.pointLights.value=z.state.point,Et.pointLightShadows.value=z.state.pointShadow,Et.hemisphereLights.value=z.state.hemi,Et.directionalShadowMap.value=z.state.directionalShadowMap,Et.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Et.spotShadowMap.value=z.state.spotShadowMap,Et.spotLightMatrix.value=z.state.spotLightMatrix,Et.spotLightMap.value=z.state.spotLightMap,Et.pointShadowMap.value=z.state.pointShadowMap,Et.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Wt,Y.uniformsList=null,Wt}function xu(C){if(C.uniformsList===null){let B=C.currentProgram.getUniforms();C.uniformsList=Ar.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function bu(C,B){let q=Pt.get(C);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function mm(C,B,q,Y,z){B.isScene!==!0&&(B=Jt),L.resetTextureUnits();let at=B.fog,ft=Y.isMeshStandardMaterial?B.environment:null,St=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nr,wt=(Y.isMeshStandardMaterial?W:R).get(Y.envMap||ft),zt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Wt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Et=!!q.morphAttributes.position,ae=!!q.morphAttributes.normal,xe=!!q.morphAttributes.color,ye=ji;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ye=y.toneMapping);let pn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=pn!==void 0?pn.length:0,At=Pt.get(Y),bi=m.state.lights;if(nt===!0&&(lt===!0||C!==v)){let kn=C===v&&Y.id===M;ot.setState(Y,C,kn)}let he=!1;Y.version===At.__version?(At.needsLights&&At.lightsStateVersion!==bi.state.version||At.outputColorSpace!==St||z.isBatchedMesh&&At.batching===!1||!z.isBatchedMesh&&At.batching===!0||z.isBatchedMesh&&At.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&At.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&At.instancing===!1||!z.isInstancedMesh&&At.instancing===!0||z.isSkinnedMesh&&At.skinning===!1||!z.isSkinnedMesh&&At.skinning===!0||z.isInstancedMesh&&At.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&At.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&At.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&At.instancingMorph===!1&&z.morphTexture!==null||At.envMap!==wt||Y.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==ot.numPlanes||At.numIntersection!==ot.numIntersection)||At.vertexAlphas!==zt||At.vertexTangents!==Wt||At.morphTargets!==Et||At.morphNormals!==ae||At.morphColors!==xe||At.toneMapping!==ye||At.morphTargetsCount!==ce)&&(he=!0):(he=!0,At.__version=Y.version);let Hn=At.currentProgram;he===!0&&(Hn=Ho(Y,B,z));let ir=!1,wn=!1,Jr=!1,_e=Hn.getUniforms(),ni=At.uniforms;if(kt.useProgram(Hn.program)&&(ir=!0,wn=!0,Jr=!0),Y.id!==M&&(M=Y.id,wn=!0),ir||v!==C){kt.buffers.depth.getReversed()?(rt.copy(C.projectionMatrix),v0(rt),M0(rt),_e.setValue(F,"projectionMatrix",rt)):_e.setValue(F,"projectionMatrix",C.projectionMatrix),_e.setValue(F,"viewMatrix",C.matrixWorldInverse);let Hi=_e.map.cameraPosition;Hi!==void 0&&Hi.setValue(F,Rt.setFromMatrixPosition(C.matrixWorld)),Ht.logarithmicDepthBuffer&&_e.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&_e.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,wn=!0,Jr=!0)}if(z.isSkinnedMesh){_e.setOptional(F,z,"bindMatrix"),_e.setOptional(F,z,"bindMatrixInverse");let kn=z.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),_e.setValue(F,"boneTexture",kn.boneTexture,L))}z.isBatchedMesh&&(_e.setOptional(F,z,"batchingTexture"),_e.setValue(F,"batchingTexture",z._matricesTexture,L),_e.setOptional(F,z,"batchingIdTexture"),_e.setValue(F,"batchingIdTexture",z._indirectTexture,L),_e.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&_e.setValue(F,"batchingColorTexture",z._colorsTexture,L));let Kr=q.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0)&&Nt.update(z,q,Hn),(wn||At.receiveShadow!==z.receiveShadow)&&(At.receiveShadow=z.receiveShadow,_e.setValue(F,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ni.envMap.value=wt,ni.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(ni.envMapIntensity.value=B.environmentIntensity),wn&&(_e.setValue(F,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&gm(ni,Jr),at&&Y.fog===!0&&dt.refreshFogUniforms(ni,at),dt.refreshMaterialUniforms(ni,Y,U,V,m.state.transmissionRenderTarget[C.id]),Ar.upload(F,xu(At),ni,L)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ar.upload(F,xu(At),ni,L),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&_e.setValue(F,"center",z.center),_e.setValue(F,"modelViewMatrix",z.modelViewMatrix),_e.setValue(F,"normalMatrix",z.normalMatrix),_e.setValue(F,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let kn=Y.uniformsGroups;for(let Hi=0,Vi=kn.length;Hi<Vi;Hi++){let yu=kn[Hi];O.update(yu,Hn),O.bind(yu,Hn)}}return Hn}function gm(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function xm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,B,q){Pt.get(C.texture).__webglTexture=B,Pt.get(C.depthTexture).__webglTexture=q;let Y=Pt.get(C);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,B){let q=Pt.get(C);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,q=0){A=C,w=B,T=q;let Y=!0,z=null,at=!1,ft=!1;if(C){let wt=Pt.get(C);if(wt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(wt.__hasExternalTextures)L.rebindTextures(C,Pt.get(C.texture).__webglTexture,Pt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Et=C.depthTexture;if(wt.__boundDepthTexture!==Et){if(Et!==null&&Pt.has(Et)&&(C.width!==Et.image.width||C.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}let zt=C.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(ft=!0);let Wt=Pt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?z=Wt[B][q]:z=Wt[B],at=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?z=Pt.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?z=Wt[q]:z=Wt,E.copy(C.viewport),I.copy(C.scissor),P=C.scissorTest}else E.copy(it).multiplyScalar(U).floor(),I.copy(gt).multiplyScalar(U).floor(),P=Mt;if(kt.bindFramebuffer(F.FRAMEBUFFER,z)&&Y&&kt.drawBuffers(C,z),kt.viewport(E),kt.scissor(I),kt.setScissorTest(P),at){let wt=Pt.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,q)}else if(ft){let wt=Pt.get(C.texture),zt=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.__webglTexture,q||0,zt)}M=-1},this.readRenderTargetPixels=function(C,B,q,Y,z,at,ft){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){kt.bindFramebuffer(F.FRAMEBUFFER,St);try{let wt=C.texture,zt=wt.format,Wt=wt.type;if(!Ht.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-Y&&q>=0&&q<=C.height-z&&F.readPixels(B,q,Y,z,qt.convert(zt),qt.convert(Wt),at)}finally{let wt=A!==null?Pt.get(A).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(C,B,q,Y,z,at,ft){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){let wt=C.texture,zt=wt.format,Wt=wt.type;if(!Ht.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=C.width-Y&&q>=0&&q<=C.height-z){kt.bindFramebuffer(F.FRAMEBUFFER,St);let Et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Et),F.bufferData(F.PIXEL_PACK_BUFFER,at.byteLength,F.STREAM_READ),F.readPixels(B,q,Y,z,qt.convert(zt),qt.convert(Wt),0);let ae=A!==null?Pt.get(A).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,ae);let xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await _0(F,xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,at),F.deleteBuffer(Et),F.deleteSync(xe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,B=null,q=0){C.isTexture!==!0&&(lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1]);let Y=Math.pow(2,-q),z=Math.floor(C.image.width*Y),at=Math.floor(C.image.height*Y),ft=B!==null?B.x:0,St=B!==null?B.y:0;L.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,ft,St,z,at),kt.unbindTexture()},this.copyTextureToTexture=function(C,B,q=null,Y=null,z=0){C.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1],B=arguments[2],z=arguments[3]||0,q=null);let at,ft,St,wt,zt,Wt,Et,ae,xe,ye=C.isCompressedTexture?C.mipmaps[z]:C.image;q!==null?(at=q.max.x-q.min.x,ft=q.max.y-q.min.y,St=q.isBox3?q.max.z-q.min.z:1,wt=q.min.x,zt=q.min.y,Wt=q.isBox3?q.min.z:0):(at=ye.width,ft=ye.height,St=ye.depth||1,wt=0,zt=0,Wt=0),Y!==null?(Et=Y.x,ae=Y.y,xe=Y.z):(Et=0,ae=0,xe=0);let pn=qt.convert(B.format),ce=qt.convert(B.type),At;B.isData3DTexture?(L.setTexture3D(B,0),At=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),At=F.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),At=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let bi=F.getParameter(F.UNPACK_ROW_LENGTH),he=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Hn=F.getParameter(F.UNPACK_SKIP_PIXELS),ir=F.getParameter(F.UNPACK_SKIP_ROWS),wn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ye.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wt),F.pixelStorei(F.UNPACK_SKIP_ROWS,zt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);let Jr=C.isDataArrayTexture||C.isData3DTexture,_e=B.isDataArrayTexture||B.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let ni=Pt.get(C),Kr=Pt.get(B),kn=Pt.get(ni.__renderTarget),Hi=Pt.get(Kr.__renderTarget);kt.bindFramebuffer(F.READ_FRAMEBUFFER,kn.__webglFramebuffer),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Vi=0;Vi<St;Vi++)Jr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(C).__webglTexture,z,Wt+Vi),C.isDepthTexture?(_e&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(B).__webglTexture,z,xe+Vi),F.blitFramebuffer(wt,zt,at,ft,Et,ae,at,ft,F.DEPTH_BUFFER_BIT,F.NEAREST)):_e?F.copyTexSubImage3D(At,z,Et,ae,xe+Vi,wt,zt,at,ft):F.copyTexSubImage2D(At,z,Et,ae,xe+Vi,wt,zt,at,ft);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _e?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(At,z,Et,ae,xe,at,ft,St,pn,ce,ye.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(At,z,Et,ae,xe,at,ft,St,pn,ye.data):F.texSubImage3D(At,z,Et,ae,xe,at,ft,St,pn,ce,ye):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,Et,ae,at,ft,pn,ce,ye.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,Et,ae,ye.width,ye.height,pn,ye.data):F.texSubImage2D(F.TEXTURE_2D,z,Et,ae,at,ft,pn,ce,ye);F.pixelStorei(F.UNPACK_ROW_LENGTH,bi),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Hn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ir),F.pixelStorei(F.UNPACK_SKIP_IMAGES,wn),z===0&&B.generateMipmaps&&F.generateMipmap(At),kt.unbindTexture()},this.copyTextureToTexture3D=function(C,B,q=null,Y=null,z=0){return C.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,C=arguments[2],B=arguments[3],z=arguments[4]||0),lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,B,q,Y,z)},this.initRenderTarget=function(C){Pt.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),kt.unbindTexture()},this.resetState=function(){w=0,T=0,A=null,kt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var Fa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Oa=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ih=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new D,Ba=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yo=class extends oi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},br,no=new D,yr=new D,_r=new D,vr=new vt,io=new vt,jf=new le,ca=new D,so=new D,ha=new D,vf=new vt,Mc=new vt,Mf=new vt,za=class extends Ne{constructor(t=new yo){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ih(e,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Ba(n,3,0,!1)),br.setAttribute("uv",new Ba(n,2,3,!1))}this.geometry=br,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),jf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_r.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-_r.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;da(ca.set(-.5,-.5,0),_r,o,yr,s,r),da(so.set(.5,-.5,0),_r,o,yr,s,r),da(ha.set(.5,.5,0),_r,o,yr,s,r),vf.set(0,0),Mc.set(1,0),Mf.set(1,1);let a=t.ray.intersectTriangle(ca,so,ha,!1,no);if(a===null&&(da(so.set(-.5,.5,0),_r,o,yr,s,r),Mc.set(0,1),a=t.ray.intersectTriangle(ca,ha,so,!1,no),a===null))return;let l=t.ray.origin.distanceTo(no);l<t.near||l>t.far||e.push({distance:l,point:no.clone(),uv:Ji.getInterpolation(no,ca,so,ha,vf,Mc,Mf,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function da(i,t,e,n,s,r){vr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(io.x=r*vr.x-s*vr.y,io.y=s*vr.x+r*vr.y):io.copy(vr),i.copy(t),i.x+=io.x,i.y+=io.y,i.applyMatrix4(jf)}var Ph=class extends bn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=An,u=An,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ha=class extends xn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Mr=new le,Sf=new le,ua=[],wf=new Pi,g2=new le,ro=new xt,oo=new es,ns=class extends xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,g2)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mr),wf.copy(t.boundingBox).applyMatrix4(Mr),this.boundingBox.union(wf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mr),oo.copy(t.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),t.ray.intersectsSphere(oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),Sf.multiplyMatrices(n,Mr),ro.matrixWorld=Sf,ro.raycast(t,ua);for(let o=0,a=ua.length;o<a;o++){let l=ua[o];l.instanceId=r,l.object=this,e.push(l)}ua.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ph(new Float32Array(s*this.count),s,this.count,id,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Dr=class extends oi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Va=new D,Ga=new D,Ef=new le,ao=new Aa,fa=new es,Sc=new D,Tf=new D,_o=class extends Ne{constructor(t=new we,e=new Dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Va.fromBufferAttribute(e,s-1),Ga.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Va.distanceTo(Ga);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;Ef.copy(s).invert(),ao.copy(t.ray).applyMatrix4(Ef);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=u.getX(x),b=u.getX(x+1),_=pa(this,t,ao,l,m,b);_&&e.push(_)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(f),m=pa(this,t,ao,l,x,p);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=pa(this,t,ao,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=pa(this,t,ao,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pa(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Va.fromBufferAttribute(o,s),Ga.fromBufferAttribute(o,r),e.distanceSqToSegment(Va,Ga,Sc,Tf)>n)return;Sc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Sc);if(!(l<t.near||l>t.far))return{distance:l,point:Tf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Af=new D,Rf=new D,Wa=class extends _o{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Af.fromBufferAttribute(e,s),Rf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Af.distanceTo(Rf);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Li=class extends bn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,l=new le;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xa=class extends Yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Lh=class extends Xa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hd(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ma=new D,wc=new hd,Ec=new hd,Tc=new hd,vo=class extends Yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ma.subVectors(s[0],s[1]).add(s[0]),c=ma);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ma),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),wc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,p),Ec.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,p),Tc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Ec.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Tc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(wc.calc(l),Ec.calc(l),Tc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function x2(i,t){let e=1-i;return e*e*t}function b2(i,t){return 2*(1-i)*i*t}function y2(i,t){return i*i*t}function po(i,t,e,n){return x2(i,t)+b2(i,e)+y2(i,n)}function _2(i,t){let e=1-i;return e*e*e*t}function v2(i,t){let e=1-i;return 3*e*e*i*t}function M2(i,t){return 3*(1-i)*i*i*t}function S2(i,t){return i*i*i*t}function mo(i,t,e,n,s){return _2(i,t)+v2(i,e)+M2(i,n)+S2(i,s)}var kh=class extends Yn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(t,s.x,r.x,o.x,a.x),mo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dh=class extends Yn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(t,s.x,r.x,o.x,a.x),mo(t,s.y,r.y,o.y,a.y),mo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Uh=class extends Yn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nh=class extends Yn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fh=class extends Yn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(po(t,s.x,r.x,o.x),po(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends Yn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(po(t,s.x,r.x,o.x),po(t,s.y,r.y,o.y),po(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oh=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Cf(a,l.x,c.x,u.x,d.x),Cf(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},w2=Object.freeze({__proto__:null,ArcCurve:Lh,CatmullRomCurve3:vo,CubicBezierCurve:kh,CubicBezierCurve3:Dh,EllipseCurve:Xa,LineCurve:Uh,LineCurve3:Nh,QuadraticBezierCurve:Fh,QuadraticBezierCurve3:qa,SplineCurve:Oh});var cn=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,x=[],p=n/2,m=0;b(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(f,2));function b(){let y=new D,S=new D,w=0,T=(e-t)/n;for(let A=0;A<=r;A++){let M=[],v=A/r,E=v*(e-t)+t;for(let I=0;I<=s;I++){let P=I/s,N=P*l+a,G=Math.sin(N),k=Math.cos(N);S.x=E*G,S.y=-v*n+p,S.z=E*k,d.push(S.x,S.y,S.z),y.set(G,T,k).normalize(),h.push(y.x,y.y,y.z),f.push(P,1-v),M.push(g++)}x.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){let v=x[M][A],E=x[M+1][A],I=x[M+1][A+1],P=x[M][A+1];(t>0||M!==0)&&(u.push(v,E,P),w+=3),(e>0||M!==r-1)&&(u.push(E,I,P),w+=3)}c.addGroup(m,w,0),m+=w}function _(y){let S=g,w=new vt,T=new D,A=0,M=y===!0?t:e,v=y===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,p*v,0),h.push(0,v,0),f.push(.5,.5),g++;let E=g;for(let I=0;I<=s;I++){let N=I/s*l+a,G=Math.cos(N),k=Math.sin(N);T.x=M*k,T.y=p*v,T.z=M*G,d.push(T.x,T.y,T.z),h.push(0,v,0),w.x=G*.5+.5,w.y=k*.5*v+.5,f.push(w.x,w.y),g++}for(let I=0;I<s;I++){let P=S+I,N=E+I;y===!0?u.push(N,N+1,P):u.push(N+1,N,P),A+=3}c.addGroup(m,A,y===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hn=class i extends cn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ya=class i extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let _=new D,y=new D,S=new D;for(let w=0;w<e.length;w+=3)f(e[w+0],_),f(e[w+1],y),f(e[w+2],S),l(_,y,S,b)}function l(b,_,y,S){let w=S+1,T=[];for(let A=0;A<=w;A++){T[A]=[];let M=b.clone().lerp(y,A/w),v=_.clone().lerp(y,A/w),E=w-A;for(let I=0;I<=E;I++)I===0&&A===w?T[A][I]=M:T[A][I]=M.clone().lerp(v,I/E)}for(let A=0;A<w;A++)for(let M=0;M<2*(w-A)-1;M++){let v=Math.floor(M/2);M%2===0?(h(T[A][v+1]),h(T[A+1][v]),h(T[A][v])):(h(T[A][v+1]),h(T[A+1][v+1]),h(T[A+1][v]))}}function c(b){let _=new D;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(b),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function u(){let b=new D;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let y=p(b)/2/Math.PI+.5,S=m(b)/Math.PI+.5;o.push(y,1-S)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){let _=o[b+0],y=o[b+2],S=o[b+4],w=Math.max(_,y,S),T=Math.min(_,y,S);w>.9&&T<.1&&(_<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),S<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function f(b,_){let y=b*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){let b=new D,_=new D,y=new D,S=new D,w=new vt,T=new vt,A=new vt;for(let M=0,v=0;M<r.length;M+=9,v+=6){b.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),w.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),A.set(o[v+4],o[v+5]),S.copy(b).add(_).add(y).divideScalar(3);let E=p(S);x(w,v+0,b,E),x(T,v+2,_,E),x(A,v+4,y,E)}}function x(b,_,y,S){S<0&&b.x===1&&(o[_]=b.x-1),y.x===0&&y.z===0&&(o[_]=S/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ps=class i extends Ya{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Za=class i extends Ya{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var De=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new D,h=new D,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let b=[],_=m/n,y=0;m===0&&o===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){let w=S/e;d.x=-t*Math.cos(s+w*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(w+y,1-_),b.push(c++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let _=u[m][b+1],y=u[m][b],S=u[m+1][b],w=u[m+1][b+1];(m!==0||o>0)&&f.push(_,y,w),(m!==n-1||l<Math.PI)&&f.push(y,S,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var is=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new D,d=new D,h=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,p=f/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(x,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var $a=class i extends we{constructor(t=new qa(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new vt,u=new D,d=[],h=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(f,2));function x(){for(let _=0;_<e;_++)p(_);p(r===!1?e:0),b(),m()}function p(_){u=t.getPointAt(_/e,u);let y=o.normals[_],S=o.binormals[_];for(let w=0;w<=s;w++){let T=w/s*Math.PI*2,A=Math.sin(T),M=-Math.cos(T);l.x=M*y.x+A*S.x,l.y=M*y.y+A*S.y,l.z=M*y.z+A*S.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){let S=(s+1)*(_-1)+(y-1),w=(s+1)*_+(y-1),T=(s+1)*_+y,A=(s+1)*(_-1)+y;g.push(S,w,A),g.push(w,T,A)}}function b(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)c.x=_/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new w2[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ge=class extends oi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var dn=class extends oi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ga(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function E2(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ur=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bh=class extends Ur{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eu:r=t,a=2*e-n;break;case Tu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Eu:o=t,l=2*n-e;break;case Tu:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,m=-h*p+2*h*x-h*g,b=(1+h)*p+(-1.5-2*h)*x+(-.5+h)*g+1,_=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let S=0;S!==a;++S)r[S]=m*o[u+S]+b*o[c+S]+_*o[l+S]+y*o[d+S];return r}},zh=class extends Ur{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Hh=class extends Ur{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ga(e,this.TimeBufferType),this.values=ga(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ga(t.times,Array),values:ga(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ma:e=this.InterpolantFactoryMethodDiscrete;break;case uh:e=this.InterpolantFactoryMethodLinear;break;case $l:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return $l}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&E2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$l,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[h+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=uh;var Ls=class extends Zn{constructor(t,e,n){super(t,e,n)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Ma;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Vh=class extends Zn{};Vh.prototype.ValueTypeName="color";var Gh=class extends Zn{};Gh.prototype.ValueTypeName="number";var Wh=class extends Ur{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)He.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ja=class extends Zn{InterpolantFactoryMethodLinear(t){return new Wh(this.times,this.values,this.getValueSize(),t)}};Ja.prototype.ValueTypeName="quaternion";Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends Zn{constructor(t,e,n){super(t,e,n)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Ma;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Xh=class extends Zn{};Xh.prototype.ValueTypeName="vector";var qh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},T2=new qh,Yh=class{constructor(t){this.manager=t!==void 0?t:T2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ka=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ja=class extends Ka{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ac=new le,If=new D,Pf=new D,Zh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Pf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pf),e.updateMatrixWorld(),Ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var $h=class extends Zh{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qa=class extends Ka{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var dd="\\[\\]\\.:\\/",A2=new RegExp("["+dd+"]","g"),ud="[^"+dd+"]",R2="[^"+dd.replace("\\.","")+"]",C2=/((?:WC+[\/:])*)/.source.replace("WC",ud),I2=/(WCOD+)?/.source.replace("WCOD",R2),P2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),L2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),k2=new RegExp("^"+C2+I2+P2+L2+"$"),D2=["material","materials","bones","map"],Jh=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(A2,"")}static parseTrackName(t){let e=k2.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);D2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Jh;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ny=Math.PI*2,Ut=(i,t)=>t[Math.floor(i()*t.length)],So=["#8d7f67","#6d5a44","#a78a62","#8f5f4e"],Ds=["#8ea48c","#c88f6e","#b48c9c","#4f7f96","#c9524a","#d9a53a"],Us=["#d9544f","#4f7f96","#6f9a4f","#e9c04b","#c7b2d9","#3f4a46"],pd=["#b89a70","#a7805b","#cfc8b4","#9c8a6e","#c4b08a"];function Ce(i,t,e,n,s,r=0,o="stand"){i.jobs.push({x:t,z:e,y:r,heading:n,role:s,pose:o})}function Or(i,t,e,n,s,r,o,a,l,c,u,d,h=null){let f=a-o,g=(o+a)/2,x=t.batch,p=(m,b,_,y,S=g,w=f)=>{x.box(m,S,b,_,w,y,u),i.solid(t,m,S,b,_,w,y,{kind:"wall",climbable:!0,...d})};for(let m=0;m<4;m++){let b=m*Math.PI/2,_=Math.round(Math.sin(b)),y=Math.round(Math.cos(b)),S=y,w=-_,T=m%2?r:s,A=m%2?s/2:r/2,M=[];if(c&&m===c.side?M.push([-T/2,c.u-c.width/2],[c.u+c.width/2,T/2]):M.push([-T/2,T/2]),h&&m===h.side){let v=[];for(let[E,I]of M)h.u-h.width/2>E&&h.u+h.width/2<I?v.push([E,h.u-h.width/2],[h.u+h.width/2,I]):v.push([E,I]);M.length=0,M.push(...v)}for(let[v,E]of M){let I=(v+E)/2,P=E-v;P<=.02||p(e+_*(A-l/2)+S*I,n+y*(A-l/2)+w*I,m%2?l:P,m%2?P:l)}for(let v of[c,h])v&&m===v.side&&o+v.height<a&&p(e+_*(A-l/2)+S*v.u,n+y*(A-l/2)+w*v.u,m%2?l:v.width+.1,m%2?v.width+.1:l,(o+v.height+a)/2,a-o-v.height)}return{minX:e-s/2+l,maxX:e+s/2-l,minZ:n-r/2+l,maxZ:n+r/2-l}}function ep(i,t,e,n,s,r,o,a,l,c){let u=t.batch,d=s*Math.PI/2,h=Math.round(Math.sin(d)),f=Math.round(Math.cos(d)),g=f,x=-h,p=e+g*r,m=n+x*r;for(let b of[-1,1])u.box(p+g*b*(o/2+.07),a/2,m+x*b*(o/2+.07),s%2?.22:.14,a,s%2?.14:.22,l);u.box(p,a+.07,m,s%2?.22:o+.3,.14,s%2?o+.3:.22,l),u.box(p-h*(o/2+.3)+g*(o/2-.02),a/2-.05,m-f*(o/2+.3)+x*(o/2-.02),s%2?o-.1:.06,a-.1,s%2?.06:o-.1,c),u.box(p-h*.5,.45,m-f*.5,s%2?.6:1.1,.03,s%2?1.1:.6,"#8f5f4e")}var sl=(i,t,e,n=0)=>{let s=(i.minX+i.maxX)/2,r=(i.minZ+i.maxZ)/2,o=i.maxX-i.minX,a=i.maxZ-i.minZ,l=t*Math.PI/2,c=Math.round(Math.sin(l)),u=Math.round(Math.cos(l)),d=t%2?o/2:a/2;return[s+c*(d-n)+u*e,r+u*(d-n)-c*e]},ss=(i,t,e,n,s,r)=>{i.beam([t,e,s],[t,n,s],.015,"#4a4f4c"),i.add(K.cone,t,n-.12,s,.34,.28,.34,r),i.ball(t,n-.2,s,.07,.07,.07,"#f6ecc8")},wo=(i,t,e,n,s,r,o,a,l)=>{let c=s*Math.PI/2,u=Math.round(Math.sin(c)),d=Math.round(Math.cos(c));i.box(t-u*.04,e,n-d*.04,s%2?.06:r,o,s%2?r:.06,a),i.box(t-u*.08,e,n-d*.08,s%2?.02:r-.12,o-.12,s%2?r-.12:.02,l)},rl=(i,t,e,n,s,r,o)=>{i.box(t,e+.012,n,s,.024,r,o),i.box(t,e+.018,n,s-.3,.015,r-.3,"#f1e8d2")},ol=(i,t,e,n,s,r,o)=>{let a=t.batch;a.box(e,n+.45,s,.42,.05,.42,o,r),a.box(e-Math.sin(r)*.19,n+.72,s-Math.cos(r)*.19,.42,.55,.05,o,r);for(let l of[-.16,.16])for(let c of[-.16,.16])a.box(e+l*Math.cos(r)+c*Math.sin(r),n+.22,s-l*Math.sin(r)+c*Math.cos(r),.04,.44,.04,o);i.solid(t,e,n+.25,s,.44,.5,.44,{climbable:!1,kind:"chair"})},al=(i,t,e,n,s,r,o,a,l)=>{let c=t.batch;c.box(e,n+.74,s,r,.06,o,a);for(let u of[-1,1])for(let d of[-1,1])c.box(e+u*(r/2-.1),n+.36,s+d*(o/2-.1),.07,.72,.07,l);i.solid(t,e,n+.39,s,r,.78,o,{climbable:!1,kind:"table"})},fd=(i,t,e,n,s,r,o,a,l,c)=>{let u=t.batch,d=r*Math.PI/2,h=Math.round(Math.sin(d)),f=Math.round(Math.cos(d)),g=f,x=-h,p=e-h*.2,m=s-f*.2;u.box(p,n+a/2,m,r%2?.38:o,a,r%2?o:.38,l);let b=Math.floor(a/.45);for(let _=0;_<b;_++){let y=n+.28+_*.45;for(let S=0;S<o/.26-1;S++){let w=-o/2+.2+S*.26;c()<.12||u.box(p-h*.02+g*w,y,m-f*.02+x*w,r%2?.3:.2,.34+c()*.06,r%2?.2:.3,Ut(c,Us))}}i.solid(t,p,n+a/2,m,r%2?.4:o,a,r%2?o:.4,{climbable:!0,kind:"shelf"})},Qf=(i,t,e,n,s,r,o,a,l,c)=>{let u=t.batch,d=Math.cos(r),h=Math.sin(r);u.box(e,n+.25,s,o,.36,a,c,r),u.box(e,n+.5,s,o-.1,.2,a-.1,"#f3ead6",r),u.box(e-h*.2,n+.6,s-d*.2,o-.12,.14,a-.9,l,r),u.box(e+h*(a/2-.4),n+.66,s+d*(a/2-.4),o*.4,.14,.45,"#fbf6e8",r),o>1.4&&u.box(e+h*(a/2-.4),n+.66,s+d*(a/2-.4),.5,.14,.45,"#fbf6e8",r),i.solid(t,e,n+.33,s,Math.abs(d)>.5?o:a,.66,Math.abs(d)>.5?a:o,{climbable:!0,kind:"bed"})},tp=(i,t,e,n,s=1)=>{i.add(K.pot,t,e+.22*s,n,.3*s,.44*s,.3*s,"#b07a60");for(let r=0;r<5;r++){let o=r*1.3;i.box(t+Math.cos(o)*.12*s,e+.62*s+r*.05,n+Math.sin(o)*.12*s,.12*s,.5*s,.04*s,"#5f7f4a",0,-o,Math.cos(o)*.5)}},U2={living(i,t,e,n,s,r){let o=t.batch,a=(e.minX+e.maxX)/2,l=(e.minZ+e.maxZ)/2,c=e.maxX-e.minX,u=e.maxZ-e.minZ,d=Ut(s,Ds),h=Ut(s,So);rl(o,a,n,l,Math.min(c-2.5,4.2),Math.min(u-2.5,3),Ut(s,["#b48c9c","#c9524a","#4f7f96","#d9a53a"]));let f=(r+2)%4,g=f*Math.PI/2,x=Math.round(Math.sin(g)),p=Math.round(Math.cos(g)),m=p,b=-x,_=f%2?c/2:u/2,y=a+x*(_-.7),S=l+p*(_-.7);o.box(y,n+.3,S,f%2?.95:2.5,.6,f%2?2.5:.95,d),o.box(y+x*.33,n+.75,S+p*.33,f%2?.28:2.5,.5,f%2?2.5:.28,d);for(let v of[-1,1])o.box(y+m*v*1.15,n+.5,S+b*v*1.15,f%2?.95:.2,.4,f%2?.2:.95,d);for(let v of[-.6,.6])o.box(y-x*.1+m*v,n+.7,S-p*.1+b*v,.5,.22,.32,Ut(s,Ds),g+.3*v);i.solid(t,y,n+.35,S,f%2?1:2.5,.7,f%2?2.5:1,{climbable:!1,kind:"sofa"}),o.box(y-x*1.6,n+.22,S-p*1.6,1.1,.44,.6,h,g),o.box(y-x*1.6,n+.46,S-p*1.6,1,.04,.5,"#e3dcc6",g),o.cyl(y-x*1.6+m*.2,n+.54,S-p*1.6+b*.2,.1,.1,"#f1e8d2"),i.solid(t,y-x*1.6,n+.24,S-p*1.6,f%2?.6:1.1,.48,f%2?1.1:.6,{climbable:!1,kind:"table"});let w=y-x*1.2+m*2.1,T=S-p*1.2+b*2.1;o.box(w,n+.3,T,.9,.6,.9,Ut(s,Ds),g-.6),o.box(w-Math.sin(g-.6)*.35,n+.75,T-Math.cos(g-.6)*.35,.9,.5,.2,Ut(s,Ds),g-.6),i.solid(t,w,n+.35,T,.95,.7,.95,{climbable:!1,kind:"chair"});let A=a-x*(_-.5),M=l-p*(_-.5);o.box(A,n+.25,M,f%2?.45:1.6,.5,f%2?1.6:.45,h),o.box(A,n+1.05,M,f%2?.06:1.5,.9,f%2?1.5:.06,"#2f3331"),o.box(A+x*.035,n+1.05,M+p*.035,f%2?.01:1.3,.7,f%2?1.3:.01,"#a9c3c9"),i.solid(t,A,n+.25,M,f%2?.45:1.6,.5,f%2?1.6:.45,{climbable:!1,kind:"cabinet"});{let[v,E]=sl(e,(f+1)%4,-(((f+1)%2?u:c)/2)+1.4);fd(i,t,v,n,E,(f+1)%4,2,1.9,h,s)}if(wo(o,y+m*2.4+x*.7,n+1.6,S+b*2.4+p*.7,f,.8,.6,h,Ut(s,["#8ebbb0","#d9a53a","#b48c9c"])),tp(o,e.minX+.5,n,e.minZ+.5,1.1),ss(o,a,n+2.25,n+1.95,l,Ut(s,["#e9c04b","#f1e8d2","#c9524a"])),s()>.5){let v=a+m*((f%2?u:c)/2-.85),E=l+b*((f%2?u:c)/2-.85),I=(f+1)%4*Math.PI/2;o.box(v,n+.65,E,1.5,1.3,.6,"#2b2622",I),o.box(v-Math.sin(I)*.32,n+.78,E-Math.cos(I)*.32,1.3,.06,.3,"#f3ead6",I);for(let P=0;P<9;P++)o.box(v-Math.sin(I)*.4+Math.cos(I)*(-.6+P*.15),n+.82,E-Math.cos(I)*.4-Math.sin(I)*(-.6+P*.15),.06,.03,.2,"#2b2622",I);o.box(v-Math.sin(I)*.9,n+.5,E-Math.cos(I)*.9,.9,.08,.35,"#2b2622",I);for(let P of[-.35,.35])o.box(v-Math.sin(I)*.9+Math.cos(I)*P,n+.23,E-Math.cos(I)*.9-Math.sin(I)*P,.06,.46,.3,"#2b2622",I);i.solid(t,v,n+.65,E,Math.abs(Math.cos(I))>.5?1.5:.6,1.3,Math.abs(Math.cos(I))>.5?.6:1.5,{climbable:!0,kind:"piano"}),Ce(t,v-Math.sin(I)*1.1,E-Math.cos(I)*1.1,I+Math.PI,Ut(s,["resident","grandma","kid"]),n,"sit")}else Ce(t,w-Math.sin(g-.6)*.1,T-Math.cos(g-.6)*.1,g-.6+Math.PI,Ut(s,["resident","grandpa","parent"]),n,"sit")},kitchen(i,t,e,n,s,r){let o=t.batch,a=(e.minX+e.maxX)/2,l=(e.minZ+e.maxZ)/2,c=e.maxX-e.minX,u=e.maxZ-e.minZ,d=Ut(s,["#cbbfa3","#8ea48c","#e9e3d2","#4f7f96"]),h=Ut(s,["#5f6b66","#e3dcc6","#8d7f67"]),f=(r+2)%4,g=f*Math.PI/2,x=Math.round(Math.sin(g)),p=Math.round(Math.cos(g)),m=p,b=-x,_=f%2?c/2:u/2,y=Math.min((f%2?u:c)-1.2,6),S=a+x*(_-.35),w=l+p*(_-.35);o.box(S,n+.45,w,f%2?.66:y,.9,f%2?y:.66,d),o.box(S,n+.93,w,f%2?.72:y+.05,.06,f%2?y+.05:.72,h),i.solid(t,S,n+.48,w,f%2?.72:y,.98,f%2?y:.72,{climbable:!0,kind:"counter"}),o.box(S,n+1.95,w+p*.15,f%2?.4:y-.6,.7,f%2?y-.6:.4,d),o.box(S+m*.9,n+.95,w+b*.9,f%2?.5:.7,.06,f%2?.7:.5,"#a9c3c9"),o.cyl(S+m*.9-x*.1,n+1.1,w+b*.9-p*.1,.025,.3,"#8a9893"),o.box(S-m*1.1,n+.97,w-b*1.1,.7,.04,.55,"#2f3331",g);for(let M=0;M<4;M++)o.cyl(S-m*1.1+(M%2?.18:-.18)*(f%2?0:1)+(f%2?M%2?.18:-.18:0),n+1,w-b*1.1+(M<2?.14:-.14),.1,.02,"#4a4f4c");o.cyl(S-m*1.1+m*.2,n+1.12,w-b*1.1+b*.2,.17,.22,"#8a9893"),o.cyl(S-m*1.1+m*.2,n+1.25,w-b*1.1+b*.2,.05,.3,"#2f3331");let T=S+m*(y/2+.55),A=w+b*(y/2+.55);o.box(T,n+.9,A,.8,1.8,.75,"#e9e3d2"),o.box(T-x*.39,n+1.1,A-p*.39,f%2?.02:.04,.5,f%2?.04:.02,"#8a9893"),i.solid(t,T,n+.9,A,.8,1.8,.75,{climbable:!0,kind:"fridge"}),o.ball(S+m*.1,n+1.02,w+b*.1,.22,.06,.22,"#a78a62");for(let M=0;M<5;M++)o.ball(S+m*.1+Math.cos(M*1.3)*.1,n+1.1,w+b*.1+Math.sin(M*1.3)*.1,.07,.07,.07,M%2?"#d9544f":"#6f9a4f");for(let M=0;M<3;M++)o.cyl(S+m*(-2+M*.25),n+1.5,w+b*(-2+M*.25),.06,.04,"#4a4f4c"),o.cyl(S+m*(-2+M*.25),n+1.32,w+b*(-2+M*.25),.14,.32,Ut(s,["#8a9893","#c9524a","#e3dcc6"]));al(i,t,a-x*.8,n,l-p*.8,f%2?1:1.7,f%2?1.7:1,"#e3dcc6",Ut(s,So));for(let M of[-1,1])ol(i,t,a-x*.8+x*M*(f%2?.85:.75),n,l-p*.8+p*M*(f%2?.75:.85),g+(M>0?Math.PI:0),Ut(s,So));o.cyl(a-x*.8,n+.8,l-p*.8,.12,.06,"#f1e8d2"),o.box(a-x*.8+.3,n+.8,l-p*.8,.14,.05,.2,"#c9524a"),ss(o,a-x*.8,n+2.25,n+1.75,l-p*.8,"#f1e8d2"),wo(o,S-m*2.4+x*.3,n+1.55,w-b*2.4+p*.3,f,.5,.5,"#2f3331","#d9a53a"),Ce(t,S-x*.9-m*1.1,w-p*.9-b*1.1,g,Ut(s,["resident","grandma","parent"]),n),s()>.5&&Ce(t,a-x*.8+x*(f%2?.85:.75),l-p*.8+p*(f%2?.75:.85),g+Math.PI,"kid",n,"sit")},bedroom(i,t,e,n,s,r){let o=t.batch,a=(e.minX+e.maxX)/2,l=(e.minZ+e.maxZ)/2,c=e.maxX-e.minX,u=e.maxZ-e.minZ,d=Ut(s,Ds),h=Ut(s,So),f=(r+2)%4,g=f*Math.PI/2,x=Math.round(Math.sin(g)),p=Math.round(Math.cos(g)),m=p,b=-x,_=f%2?c/2:u/2,y=a+x*(_-1.15),S=l+p*(_-1.15),w=s()>.4;Qf(i,t,y,n,S,g,w?1.7:1.1,2.2,d,h);for(let I of[-1,1]){let P=y+m*I*(w?1.2:.9),N=S+b*I*(w?1.2:.9);o.box(P+x*.7,n+.28,N+p*.7,.5,.56,.5,h),I>0?(o.cyl(P+x*.7,n+.7,N+p*.7,.05,.3,"#4a4f4c"),o.add(K.cone,P+x*.7,n+.92,N+p*.7,.2,.2,.2,"#e9c04b")):o.box(P+x*.7,n+.6,N+p*.7,.25,.08,.2,Ut(s,Us))}let T=a-x*(_-.4)+m*1.5,A=l-p*(_-.4)+b*1.5;o.box(T,n+1,A,f%2?.7:1.3,2,f%2?1.3:.7,h),o.box(T-x*.36,n+1,A-p*.36,f%2?.02:.05,1.3,f%2?.05:.02,"#e3dcc6"),i.solid(t,T,n+1,A,f%2?.7:1.3,2,f%2?1.3:.7,{climbable:!0,kind:"wardrobe"}),rl(o,y-x*1.8,n,S-p*1.8,1.6,1.1,"#c7b2d9");let M=a-x*(_-.5)-m*1.6,v=l-p*(_-.5)-b*1.6;o.box(M,n+.4,v,f%2?.5:1.1,.8,f%2?1.1:.5,h),o.box(M,n+1.3,v,f%2?.04:.6,.9,f%2?.6:.04,"#a9c3c9");for(let I of[.25,.55])o.box(M-x*.26,n+I,v-p*.26,f%2?.02:.3,.04,f%2?.3:.02,"#d9a53a");i.solid(t,M,n+.4,v,f%2?.5:1.1,.8,f%2?1.1:.5,{climbable:!0,kind:"chest"}),wo(o,y+x*1.1,n+1.7,S+p*1.1,f,.9,.55,h,Ut(s,["#8ebbb0","#b48c9c","#6f9a4f"])),ss(o,a,n+2.25,n+1.85,l,"#f1e8d2"),s()>.5&&o.box(y-m*.3,n+.78,S-b*.3,.4,.14,.3,"#d9a53a",g),s()>.6?Ce(t,y,S,g+Math.PI,"grandpa",n+.6,"sit"):Ce(t,M-x*.9,v-p*.9,g,Ut(s,["resident","kid"]),n)},study(i,t,e,n,s,r){let o=t.batch,a=(e.minX+e.maxX)/2,l=(e.minZ+e.maxZ)/2,c=e.maxX-e.minX,u=e.maxZ-e.minZ,d=Ut(s,So),h=(r+2)%4,f=h*Math.PI/2,g=Math.round(Math.sin(f)),x=Math.round(Math.cos(f)),p=x,m=-g,b=h%2?c/2:u/2,_=a+g*(b-.8),y=l+x*(b-.8);o.box(_,n+.74,y,h%2?.8:1.8,.06,h%2?1.8:.8,d);for(let M of[-1,1])o.box(_+p*M*.8,n+.36,y+m*M*.8,h%2?.7:.12,.72,h%2?.12:.7,d);i.solid(t,_,n+.39,y,h%2?.8:1.8,.78,h%2?1.8:.8,{climbable:!0,kind:"desk"}),o.cyl(_+p*.6,n+.8,y+m*.6,.05,.1,"#4a4f4c"),o.beam([_+p*.6,n+.82,y+m*.6],[_+p*.45,n+1.15,y+m*.45],.015,"#4a4f4c"),o.add(K.cone,_+p*.4,n+1.12,y+m*.4,.14,.16,.14,"#6f9a4f"),o.box(_-p*.2,n+.79,y-m*.2,.35,.04,.25,"#f3ead6",f),o.box(_-p*.6,n+.83,y-m*.6,.22,.12,.28,Ut(s,Us),f),o.cyl(_-p*.35+g*.25,n+.83,y-m*.35+x*.25,.05,.12,"#4f7f96"),ol(i,t,_-g*.8,n,y-x*.8,f+Math.PI,d);{let[M,v]=sl(e,(h+1)%4,0);fd(i,t,M,n,v,(h+1)%4,Math.min(((h+1)%2?u:c)-1,4),2.1,d,s)}{let[M,v]=sl(e,(h+3)%4,0);fd(i,t,M,n,v,(h+3)%4,Math.min(((h+3)%2?u:c)-1,3),1.4,d,s)}let S=_+p*1.9,w=y+m*1.9;o.cyl(S,n+.35,w,.22,.7,d),o.ball(S,n+1.05,w,.3,.3,.3,"#4f7f96"),o.ball(S+.1,n+1.12,w-.08,.14,.12,.12,"#6f9a4f"),o.ball(S-.12,n+.95,w+.1,.1,.12,.1,"#6f9a4f");let T=a-g*(b-1)-p*1.4,A=l-x*(b-1)-m*1.4;o.box(T,n+.3,A,.9,.6,.9,Ut(s,Ds),f),o.box(T-g*.35,n+.75,A-x*.35,h%2?.2:.9,.5,h%2?.9:.2,Ut(s,Ds)),i.solid(t,T,n+.35,A,.95,.7,.95,{climbable:!1,kind:"chair"}),rl(o,a,n,l,2.4,1.8,"#8f5f4e");for(let M=0;M<3;M++)o.box(T+p*.9,n+.1+M*.2,A+m*.9,.4,.2,.3,Ut(s,Us),M*.3);ss(o,a,n+2.25,n+1.85,l,"#6f9a4f"),Ce(t,_-g*.75,y-x*.75,f,Ut(s,["suit","resident","grandpa"]),n,"sit")},workshop(i,t,e,n,s,r){let o=t.batch,a=(e.minX+e.maxX)/2,l=(e.minZ+e.maxZ)/2,c=e.maxX-e.minX,u=e.maxZ-e.minZ,d=(r+2)%4,h=d*Math.PI/2,f=Math.round(Math.sin(h)),g=Math.round(Math.cos(h)),x=g,p=-f,m=d%2?c/2:u/2,b=Math.min((d%2?u:c)-1.5,4.5),_=a+f*(m-.45),y=l+g*(m-.45);o.box(_,n+.85,y,d%2?.8:b,.1,d%2?b:.8,"#a78a62");for(let v of[-1,1])for(let E of[-1,1])o.box(_+x*v*(b/2-.2)+f*E*.3,n+.4,y+p*v*(b/2-.2)+g*E*.3,.1,.8,.1,"#6d5a44");i.solid(t,_,n+.45,y,d%2?.8:b,.9,d%2?b:.8,{climbable:!0,kind:"bench"}),o.box(_+x*(b/2-.5),n+1.05,y+p*(b/2-.5),.3,.3,.25,"#4a4f4c",h),o.cyl(_+x*(b/2-.5)-f*.25,n+1.05,y+p*(b/2-.5)-g*.25,.04,.3,"#8a9893",Math.PI/2*(d%2?0:1),Math.PI/2*(d%2?1:0));for(let v=0;v<4;v++)o.cyl(_-x*(b/2-.4-v*.3),n+1,y-p*(b/2-.4-v*.3),.08,.2,Ut(s,["#c9524a","#8a9893","#e9c04b"]));o.box(_+f*.38,n+1.9,y+g*.38,d%2?.05:b,1.1,d%2?b:.05,"#cbbfa3");for(let v=0;v<8;v++){let E=-b/2+.4+v*(b-.8)/7;o.box(_+f*.33+x*E,n+1.7+v%3*.22,y+g*.33+p*E,d%2?.05:.06,.5,d%2?.06:.05,"#8d7f67"),o.box(_+f*.33+x*E,n+1.98+v%3*.22,y+g*.33+p*E,d%2?.05:.22,.1,d%2?.22:.05,"#4a4f4c")}let S=a-f*(m-1.2)+x*1.2,w=l-g*(m-1.2)+p*1.2,T=h+Math.PI/2;for(let v of[-.55,.55])o.add(K.torus,S+Math.cos(T)*v,n+.36,w-Math.sin(T)*v,.34,.34,.34,"#2f3331",0,T+Math.PI/2);o.beam([S+Math.cos(T)*.55,n+.36,w-Math.sin(T)*.55],[S+Math.cos(T)*.1,n+.85,w-Math.sin(T)*.1],.025,"#c9524a"),o.beam([S-Math.cos(T)*.55,n+.36,w+Math.sin(T)*.55],[S-Math.cos(T)*.15,n+.8,w+Math.sin(T)*.15],.025,"#c9524a"),o.beam([S+Math.cos(T)*.1,n+.85,w-Math.sin(T)*.1],[S-Math.cos(T)*.15,n+.8,w+Math.sin(T)*.15],.025,"#c9524a"),o.box(S-Math.cos(T)*.15,n+.86,w+Math.sin(T)*.15,.25,.06,.12,"#2b2622",T),o.box(S+Math.cos(T)*.1,n+.95,w-Math.sin(T)*.1,.06,.04,.45,"#8a9893",T),i.solid(t,S,n+.4,w,Math.abs(Math.cos(T))>.5?1.5:.4,.8,Math.abs(Math.cos(T))>.5?.4:1.5,{climbable:!1,kind:"bike"});for(let v=0;v<3;v++)i.crate(t,e.minX+.55+v%2*.05,n+.4+Math.floor(v/2)*.8,e.maxZ-.55-v%2*.9,.8);let A=a-f*(m-.4)-x*1.8,M=l-g*(m-.4)-p*1.8;o.box(A,n+.9,M,d%2?.4:1.6,1.8,d%2?1.6:.4,"#8a9893");for(let v=0;v<4;v++)for(let E=0;E<3;E++)o.box(A-f*.05+x*(-.5+E*.5),n+.3+v*.42,M-g*.05+p*(-.5+E*.5),.3,.26,.3,Ut(s,["#c7a97b","#d9a53a","#8f5f4e","#4f7f96"]));i.solid(t,A,n+.9,M,d%2?.45:1.6,1.8,d%2?1.6:.45,{climbable:!0,kind:"shelf"}),o.box(a,n+.02,l,2.2,.02,1.6,"#a39c88"),o.cyl(a+.5,n+.05,l+.3,.2,.03,"#6a6f6c"),ss(o,_-f*.4,n+2.25,n+1.9,y-g*.4,"#8a9893"),Ce(t,_-f*.75,y-g*.75,h,Ut(s,["worker","uncle","grandpa"]),n)},bakery(i,t,e,n,s,r){let o=t.batch,a=(e.minX+e.maxX)/2,l=(e.minZ+e.maxZ)/2,c=e.maxX-e.minX,u=e.maxZ-e.minZ,d=(r+2)%4,h=d*Math.PI/2,f=Math.round(Math.sin(h)),g=Math.round(Math.cos(h)),x=g,p=-f,m=d%2?c/2:u/2,b=Math.min((d%2?u:c)-1.5,5),_=a+f*(m-2.2),y=l+g*(m-2.2);o.box(_,n+.5,y,d%2?1:b,1,d%2?b:1,"#6d5a44"),o.box(_,n+1.02,y,d%2?1.2:b+.1,.08,d%2?b+.1:1.2,"#e3dcc6"),i.solid(t,_,n+.53,y,d%2?1.2:b,1.06,d%2?b:1.2,{climbable:!1,kind:"counter"}),o.box(_-f*.55,n+1.3,y-g*.55,d%2?.03:b-.4,.5,d%2?b-.4:.03,"#a9c3c9");for(let T=0;T<7;T++){let A=-b/2+.5+T*(b-1)/6,M=_+x*A,v=y+p*A;o.box(M,n+1.1,v,.36,.1,.5,"#c7a97b",h);for(let E=0;E<3;E++)o.ball(M+f*(E-1)*.13,n+1.19,v+g*(E-1)*.13,.09,.07,.13,T%3?"#d9a53a":"#b07a60")}let S=a+f*(m-.6),w=l+g*(m-.6);o.box(S,n+1.1,w,d%2?1.1:3,2.2,d%2?3:1.1,"#9a6b55"),o.box(S-f*.56,n+.9,w-g*.56,d%2?.02:1.2,.8,d%2?1.2:.02,"#2f3331"),o.box(S-f*.57,n+.9,w-g*.57,d%2?.01:.9,.5,d%2?.9:.01,"#e2733f"),i.solid(t,S,n+1.1,w,d%2?1.1:3,2.2,d%2?3:1.1,{climbable:!0,kind:"oven"});for(let T=0;T<3;T++){let A=e.minX+.6+T%2*.5,M=e.minZ+.7+Math.floor(T/2)*.6;o.ball(A,n+.3,M,.3,.32,.3,"#e9e3d2"),o.ball(A,n+.62,M,.14,.1,.14,"#cbbfa3")}o.box(a-f*(m-.3)+x*1.5,n+1.4,l-g*(m-.3)+p*1.5,d%2?.35:2.2,.06,d%2?2.2:.35,"#8d7f67");for(let T=0;T<6;T++)o.ball(a-f*(m-.3)+x*(.6+T*.36),n+1.52,l-g*(m-.3)+p*(.6+T*.36),.12,.1,.22,"#c08a52");al(i,t,a-f*1.2-x*1.6,n,l-g*1.2-p*1.6,.9,.9,"#e3dcc6","#4a4f4c"),ol(i,t,a-f*1.2-x*2.4,n,l-g*1.2-p*2.4,h+Math.PI/2,"#8f5f4e"),o.cyl(a-f*1.2-x*1.6,n+.82,l-g*1.2-p*1.6,.18,.05,"#f1e8d2"),o.ball(a-f*1.2-x*1.6,n+.9,l-g*1.2-p*1.6,.1,.08,.14,"#b07a60"),ss(o,_-f*1.2,n+2.25,n+1.95,y-g*1.2,"#e9c04b"),Ce(t,_+f*.9,y+g*.9,h+Math.PI,"vendor",n),Ce(t,_-f*1.3+x*.6,y-g*1.3+p*.6,h,Ut(s,["customer","grandma","kid"]),n)},nursery(i,t,e,n,s,r){let o=t.batch,a=(e.minX+e.maxX)/2,l=(e.minZ+e.maxZ)/2,c=e.maxX-e.minX,u=e.maxZ-e.minZ,d=(r+2)%4,h=d*Math.PI/2,f=Math.round(Math.sin(h)),g=Math.round(Math.cos(h)),x=g,p=-f,m=d%2?c/2:u/2,b=a+f*(m-1.1)+x*1.2,_=l+g*(m-1.1)+p*1.2;Qf(i,t,b,n,_,h,1,2,Ut(s,["#4f7f96","#c9524a"]),"#e9e3d2"),o.box(b,n+1.45,_,Math.abs(Math.cos(h))>.5?1:2,.14,Math.abs(Math.cos(h))>.5?2:1,"#e9e3d2"),o.box(b,n+1.62,_,Math.abs(Math.cos(h))>.5?.9:1.9,.2,Math.abs(Math.cos(h))>.5?1.9:.9,Ut(s,["#6f9a4f","#d9a53a"]));for(let w of[-1,1])for(let T of[-1,1])o.box(b+(Math.abs(Math.cos(h))>.5?w*.45:w*.95),n+.95,_+(Math.abs(Math.cos(h))>.5?T*.95:T*.45),.06,1.1,.06,"#e9e3d2");i.solid(t,b,n+1.5,_,Math.abs(Math.cos(h))>.5?1:2,.3,Math.abs(Math.cos(h))>.5?2:1,{climbable:!0,kind:"bed"}),N2(o,b-x*.55,n,_-p*.55,h),rl(o,a-f*.5,n,l-g*.5,2,2,"#e9c04b");for(let w=0;w<9;w++){let T=w*2.1,A=.3+w%3*.3;o.box(a-f*.5+Math.cos(T)*A,n+.11+w%2*.22,l-g*.5+Math.sin(T)*A,.22,.22,.22,Ut(s,["#c9524a","#4f7f96","#e9c04b","#6f9a4f"]),T)}al(i,t,a-f*(m-1),n-.25,l-g*(m-1),1.2,.7,"#f3ead6","#c9524a");for(let w of[-.4,.4])ol(i,t,a-f*(m-1)+x*w,n-.15,l-g*(m-1)-f*.6+p*w,h,"#4f7f96");for(let w=0;w<4;w++)wo(o,a-f*(m-.02)+x*(-.9+w*.6),n+1.5+w%2*.25,l-g*(m-.02)+p*(-.9+w*.6),(d+2)%4,.4,.35,"#f3ead6",Ut(s,["#e9c04b","#8ebbb0","#d9544f","#c7b2d9"]));let y=a+f*(m-.7)-x*1.6,S=l+g*(m-.7)-p*1.6;o.box(y,n+.55,S,.7,.3,.25,"#d9a53a",h+Math.PI/2),o.box(y+x*.4,n+.75,S+p*.4,.25,.3,.2,"#d9a53a",h+Math.PI/2);for(let w of[-.25,.25])o.box(y+x*w,n+.25,S+p*w,.06,.5,.35,"#8f5f4e",h+Math.PI/2);o.add(K.cylinder,y,n+.05,S,.4,.5,.4,"#8f5f4e",0,h+Math.PI/2,Math.PI/2),i.solid(t,y,n+.4,S,.8,.8,.8,{climbable:!1,kind:"toy"}),ss(o,a,n+2.25,n+1.9,l,"#c9524a"),Ce(t,a-f*.5+x*.9,l-g*.5+p*.9,h+Math.PI,"kid",n),s()>.5&&Ce(t,a-f*(m-1.3),l-g*(m-1.3),h,"parent",n)},atelier(i,t,e,n,s,r){let o=t.batch,a=(e.minX+e.maxX)/2,l=(e.minZ+e.maxZ)/2,c=e.maxX-e.minX,u=e.maxZ-e.minZ,d=(r+2)%4,h=d*Math.PI/2,f=Math.round(Math.sin(h)),g=Math.round(Math.cos(h)),x=g,p=-f,m=d%2?c/2:u/2,b=a+f*(m-1.6),_=l+g*(m-1.6);for(let w of[-.35,.35])o.box(b+x*w+f*.15,n+.9,_+p*w+g*.15,.05,1.8,.05,"#a78a62",0,0,0);o.box(b-f*.25,n+.8,_-g*.25,.05,1.6,.05,"#a78a62",f*.3,0,g*.3),o.box(b,n+1.15,_,d%2?.05:1,.8,d%2?1:.05,"#f6f1e4"),o.box(b-f*.03,n+1.15,_-g*.03,d%2?.01:.7,.5,d%2?.7:.01,Ut(s,["#8ebbb0","#d9a53a","#b48c9c"])),o.ball(b-f*.04,n+1.1,_-g*.04,.18,.22,.18,"#e9c04b"),i.solid(t,b,n+.9,_,d%2?.6:1,1.8,d%2?1:.6,{climbable:!1,kind:"easel"}),o.cyl(b-f*1.1,n+.25,_-g*1.1,.2,.5,"#8d7f67"),o.cyl(b-f*1.1,n+.52,_-g*1.1,.24,.04,"#8d7f67"),i.cylinderSolid(t,b-f*1.1,n,_-g*1.1,.24,.55,{climbable:!1,kind:"stool"});let y=b+x*.9,S=_+p*.9;o.box(y,n+.35,S,.5,.7,.5,"#a78a62");for(let w=0;w<6;w++)o.cyl(y+Math.cos(w*1.05)*.15,n+.78,S+Math.sin(w*1.05)*.15,.05,.12,Ut(s,Us));o.box(y,n+.73,S,.5,.04,.5,"#f3ead6");for(let w=0;w<4;w++){let T=-1.5+w;o.box(a-f*(m-.18)+x*T,n+.55,l-g*(m-.18)+p*T,d%2?.05:.8,1.1,d%2?.8:.05,"#f6f1e4",f*.12*(w%2?1:-1)),o.box(a-f*(m-.22)+x*T,n+.55,l-g*(m-.22)+p*T,d%2?.01:.6,.8,d%2?.6:.01,Ut(s,["#d9544f","#6f9a4f","#4f7f96","#e9c04b","#8ebbb0"]))}for(let w=0;w<3;w++){let[T,A]=sl(e,(d+1)%4,(w-1)*1.1);wo(o,T,n+1.6,A,(d+1)%4,.6,.5,"#2f3331",Ut(s,["#8ebbb0","#d9a53a","#b48c9c"]))}o.box(a,n+.02,l,3,.02,2.4,"#e3dcc6");for(let w=0;w<7;w++)o.cyl(a+(s()-.5)*2.6,n+.035,l+(s()-.5)*2,.1+s()*.1,.01,Ut(s,Us));al(i,t,a-f*.2-x*1.8,n,l-g*.2-p*1.8,1.4,.8,"#a78a62","#4a4f4c"),o.cyl(a-f*.2-x*1.8,n+.85,l-g*.2-p*1.8,.12,.16,"#8a9893");for(let w=0;w<5;w++)o.box(a-f*.2-x*1.8,n+1.05+w*.02,l-g*.2-p*1.8,.02,.3,.02,Ut(s,Us),0,w,.3);tp(o,e.maxX-.5,n,e.maxZ-.5,1.3),ss(o,b-f*.6,n+2.25,n+1.9,_-g*.6,"#f1e8d2"),Ce(t,b-f*1.1,_-g*1.1,h,Ut(s,["resident","grandma","suit"]),n,"sit")}};function N2(i,t,e,n,s){for(let r of[-.2,.2])i.box(t+Math.cos(s)*r,e+.75,n-Math.sin(s)*r,.05,1.5,.05,"#e9e3d2");for(let r=0;r<5;r++)i.box(t,e+.2+r*.3,n,.45,.04,.04,"#e9e3d2",s)}var ll=["living","kitchen","bedroom","study","workshop","nursery","atelier"],md={living:"a sitting room",kitchen:"a kitchen",bedroom:"a bedroom",study:"a study",workshop:"a workshop",bakery:"the bakery",nursery:"a nursery",atelier:"a painter\u2019s studio"};function np(i,t,e,n,s,r,o,a,l,c,u=null){let d=t.batch,h=e.maxX-e.minX,f=e.maxZ-e.minZ,g=h>=f,x=u?[u,Ut(r,ll.filter(v=>v!==u))]:(()=>{let v=Ut(r,ll),E=Ut(r,ll);for(;E===v;)E=Ut(r,ll);return[v,E]})(),p;g?(p=e.minX+h*(.45+r()*.1),o===1&&(p=Math.min(p,e.maxX-5.5)),o===3&&(p=Math.max(p,e.minX+5.5))):(p=e.minZ+f*(.45+r()*.1),o===0&&(p=Math.min(p,e.maxZ-5.5)),o===2&&(p=Math.max(p,e.minZ+5.5)));let m=g?e.minZ+f*(.3+r()*.4):e.minX+h*(.3+r()*.4),b=.22,_=s-n,y=(v,E,I=n+_/2,P=_)=>{let N=(v+E)/2,G=E-v;G<.05||(g?(d.box(p,I,N,b,P,G,l),i.solid(t,p,I,N,b,P,G,{kind:"wall",climbable:!0,buildingId:c})):(d.box(N,I,p,G,P,b,l),i.solid(t,N,I,p,G,P,b,{kind:"wall",climbable:!0,buildingId:c})))},S=g?e.minZ:e.minX,w=g?e.maxZ:e.maxX;y(S,m-.7),y(m+.7,w),y(m-.75,m+.75,n+2.1+(_-2.1)/2,_-2.1);for(let v of[-1,1])g?d.box(p,n+1.05,m+v*.74,b+.08,2.1,.08,"#f1e8d2"):d.box(m+v*.74,n+1.05,p,.08,2.1,b+.08,"#f1e8d2");let T=g?[{...e,maxX:p-b/2},{...e,minX:p+b/2}]:[{...e,maxZ:p-b/2},{...e,minZ:p+b/2}],A=g?o===1?1:o===3?0:a+(e.minX+e.maxX)/2>p?1:0:o===0?1:o===2?0:a+(e.minZ+e.maxZ)/2>p?1:0,M=[];return T.forEach((v,E)=>{let I=x[E===A?0:1],P=E===A?o:g?E===0?1:3:E===0?0:2;U2[I](i,t,v,n,r,P),M.push({kit:I,room:v})}),M}var rs=Math.PI*2,F2=new D(0,0,1),Rn=(i,t)=>t[Math.floor(i()*t.length)];function Eo(i,t,e,n,s,r,o,a,l,c,u){let d=new D(e,n,s),h=new D(r,o,a),f=h.clone().sub(d),g=f.length(),x=Math.max(2,Math.ceil(g/.42)),p=new He().setFromUnitVectors(F2,f.clone().normalize()),m=new Xe().setFromQuaternion(p);for(let b=0;b<x;b++){let _=(b+.5)/x,y=d.clone().lerp(h,_);t.batch.add(K.box,y.x,y.y,y.z,l,c,g/x+.02,u,m.x,m.y,m.z)}}function xd(i,t,e,n,s,r,o,a="#8d8470"){let l=Math.sin(o),c=Math.cos(o),u=c,d=-l;for(let h of[-1,1])t.batch.box(e+u*h*.22,(s+r)/2,n+d*h*.22,.06+Math.abs(u)*0,r-s,.06,a,o);for(let h=s+.3;h<r;h+=.3)t.batch.box(e,h,n,Math.abs(u)*.5+Math.abs(l)*.06,.05,Math.abs(d)*.5+Math.abs(c)*.06,a);i.solid(t,e,(s+r)/2,n,Math.abs(u)*.5+.08,r-s,Math.abs(d)*.5+.08,{climbable:!0,kind:"ladder"})}function O2(i,t,e,n,s,r){t.batch.cyl(e,s+1.1,n,.035,2.2,"#9a9078"),t.batch.box(e+.32,s+1.95,n,.6,.36,.02,r),i.cylinderSolid(t,e,s,n,.05,2.2,{kind:"pole",walkable:!1})}function Ns(i,t,e,n,s,r,o,a,l,c="#f3ead6"){t.batch.box(e,n,s,r,o,.12,l,a);let u=Math.sin(a),d=Math.cos(a);t.batch.box(e+u*.07,n,s+d*.07,r*.78,o*.5,.02,c,a)}function Vt(i,t,e,n,s,r=0,o="stand"){i.jobs.push({x:t,z:e,y:r,heading:n,role:s,pose:o})}function Kn(i,t,e,n,s,r){i.grounds.push({minX:t-n/2,maxX:t+n/2,minZ:e-s/2,maxZ:e+s/2,y:r})}function ip(i,t,e,n,s,r){let o=t.batch;o.box(e,.03,n,24,.12,24,"#cdbf9f"),Kn(t,e,n,24,24,.09);for(let d=0;d<60;d++)o.box(e+(s()-.5)*22,.092,n+(s()-.5)*22,.5+s()*.6,.012,.4+s()*.4,s()>.5?"#c2b391":"#d8caa8",(s()-.5)*.3);t.landmarks.push({id:r,kind:"market",x:e,z:n,radius:11,name:"the market square"}),o.cyl(e,.28,n,3.4,.5,"#d9cfae"),o.cyl(e,.55,n,3.1,.06,"#b8a98a"),i.cylinderSolid(t,e,0,n,3.4,.55,{climbable:!1,kind:"stage"});for(let d=0;d<8;d++){let h=d/8*rs;o.cyl(e+Math.cos(h)*2.8,2.1,n+Math.sin(h)*2.8,.09,3.1,"#f1e8d2"),i.cylinderSolid(t,e+Math.cos(h)*2.8,.55,n+Math.sin(h)*2.8,.1,3.1,{kind:"post",walkable:!1})}o.add(K.cone,e,4.25,n,3.9,1.5,3.9,"#8c6a52"),o.cyl(e,3.55,n,3.75,.18,"#f1e8d2"),i.cylinderSolid(t,e,3.45,n,3.75,.3,{climbable:!1,kind:"bandstand"}),o.ball(e,5.05,n,.2,.2,.2,"#d7b36a");for(let d=0;d<8;d++){let h=(d+.5)/8*rs;o.box(e+Math.cos(h)*2.8,1.05,n+Math.sin(h)*2.8,1.9,.08,.08,"#f1e8d2",-h+Math.PI/2);for(let f=-3;f<=3;f++)o.box(e+Math.cos(h)*2.8+Math.sin(h)*f*.27,.8,n+Math.sin(h)*2.8-Math.cos(h)*f*.27,.05,.5,.05,"#f1e8d2")}let a=[["#d9544f","#e0603b","#c84b3f"],["#e9c04b","#f0cf6a","#d8a93c"],["#7eaa5c","#93b86b","#6f9a4f"],["#c7b2d9","#b29ac7","#d6c5e3"],["#efe5cf","#e4d7bb","#f5ecd8"],["#e39a6e","#d98a5a","#ea9f78"]],l=["fruit","bread","veg","flowers","cheese","spices"],c=[["#c9524a","#f3ead6"],["#4f7f96","#f3ead6"],["#6f9a4f","#f3ead6"],["#d7a048","#f3ead6"],["#8c6a9c","#f3ead6"],["#c9524a","#e9c04b"]];[[-8,-8,0],[0,-8.5,0],[8,-8,0],[-8,8,Math.PI],[0,8.5,Math.PI],[8,8,Math.PI],[-9,0,Math.PI/2],[9,0,-Math.PI/2]].forEach(([d,h,f],g)=>{let x=e+d,p=n+h,m=Math.sin(f),b=Math.cos(f),_=b,y=-m,S=a[g%a.length],w=c[g%c.length],T=(k,V)=>[x+_*k+m*V,p+y*k+b*V],[A,M]=T(0,0);o.box(A,.78,M,2.6,.1,1.1,"#b89a70",f),o.box(A,.4,M,2.3,.66,.6,"#e3dcc6",f),i.solid(t,A,.42,M,Math.abs(_)*2.6+Math.abs(m)*1.1,.84,Math.abs(y)*2.6+Math.abs(b)*1.1,{climbable:!1,kind:"stall"});for(let k of[-1.2,1.2])for(let V of[-.5,.5]){let[U,H]=T(k,V);o.box(U,1.45,H,.08,2.9,.08,"#8d7f67")}for(let k=0;k<6;k++){let V=-1.25+k*.5+.25,[U,H]=T(V,-.25);o.add(K.box,U,2.95,H,.5,.06,1.75,w[k%2],-.32*(f===0?1:f===Math.PI?-1:0),f,.32*(Math.abs(f)===Math.PI/2?f>0?1:-1:0))}let[v,E]=T(0,.55);o.box(v,2.72,E,2.7,.2,.1,w[0],f),i.solid(t,A,2.9,M,Math.abs(_)*2.7+Math.abs(m)*1.9,.2,Math.abs(y)*2.7+Math.abs(b)*1.9,{climbable:!1,kind:"awning"});for(let k of[-.75,0,.75]){let[V,U]=T(k,-.1);o.box(V,.93,U,.62,.2,.5,"#a78a62",f);for(let H=0;H<5;H++)o.ball(V+(s()-.5)*.35,1.08,U+(s()-.5)*.25,.11,.1,.11,S[H%3])}let[I,P]=T(0,-.95);Vt(t,I,P,f,"vendor:"+l[g%l.length]);let[N,G]=T(-1.2,.5);o.box(N,1.4,G,.9,.5,.05,w[0],f),o.box(N+m*.03,1.4,G+b*.03,.7,.3,.02,"#f3ead6",f)});for(let[d,h]of[[-11,-11],[11,-11],[-11,11],[11,11]])i.pot(t,e+d,n+h,s,1.1);i.bench(t,e-5,n+1.5,Math.PI/2),i.bench(t,e+5,n-1.5,-Math.PI/2),i.lamp(t,e-5,n-5),i.lamp(t,e+5,n+5),Vt(t,e-3,n-4,s()*rs,"shopper"),Vt(t,e+4,n+3.5,s()*rs,"shopper"),Vt(t,e+3.4,n-5.5,s()*rs,"shopper"),i.bunting(t,e-11,n-11,e+11,n+11,5.4),i.bunting(t,e+11,n-11,e-11,n+11,5.6)}function sp(i,t,e,n,s,r){let o=t.batch,a=Rn(s,["#9a6b55","#a8735a","#8f6a5a","#b07a60"]),l=17,c=11,u=6.5,d=e-2.5,h=n-4;o.box(e,.02,n,24,.1,24,"#b6ad99"),Kn(t,e,n,24,24,.07),t.landmarks.push({id:r,kind:"works",x:e,z:n,radius:12,name:"the old works"});let f={id:r,x:d,z:h,w:l,d:c,h:u,roofType:2,roofRise:0,wall:a,roofColor:"#7b8a86",cx:t.cx,cz:t.cz,kind:"roof",body:null};t.buildings.push(f);let g=Or(i,t,d,h,l,c,0,u,.4,{side:3,u:1,width:4,height:4.2},a,{buildingId:r,building:f});o.box(d,u-.15,h,l-.2,.3,c-.2,"#6c7873"),f.body=i.solid(t,d,u-.15,h,l,.3,c,{kind:"roof",buildingId:r,building:f,climbable:!1}),B2(i,t,d,h,g,.07,s,r);for(let E=0;E<2;E++)o.box(d,2.6+E*2.4,h,l+.1,.18,c+.1,"#7d564a");let x=4,p=c/x;for(let E=0;E<x;E++){let I=h-c/2+E*p;for(let P=0;P<6;P++){let G=(p-.5)/6;o.box(d,u+.22*(P+.5),I+.25+G*(P+.5),l,.22,G+.02,P%2?"#74827e":"#7b8a86")}o.box(d,u+.7,I+p-.2,l-.4,1.3,.12,"#a9c3c9"),o.box(d,u+.7,I+p-.1,l,1.36,.08,"#6c7873")}let m=d+l/2-1.2,b=h-c/2+1.2;o.add(K.tapered,m,7.5,b,1.1,15,1.1,a),o.cyl(m,14.6,b,.95,.4,"#7d564a"),o.cyl(m,13.2,b,.9,.3,"#7d564a"),i.cylinderSolid(t,m,0,b,1,15,{climbable:!0,kind:"chimney"}),t.smoke.push({x:m,y:15.1,z:b}),o.box(d-l/2-.08,2.1,h+4.9,.1,4.2,3.8,"#5f6b66"),o.box(d-l/2-.12,2.1,h+4.9,.05,3.8,.12,"#3f4a46"),o.box(d-l/2-.02,4.45,h+1.5,.16,.16,9,"#3f4a46"),Ns(i,t,d,5.6,h+c/2+.08,6.5,1.1,0,"#3f4a46");for(let E=0;E<3;E++){let I=1.2+E*.55;o.cyl(d+l/2+.3,I,h+2,.16,6,"#8a9893")}for(let E=0;E<3;E++){let I=1.2+E*.55;o.add(K.cylinder,d+l/2+.3,I,h+2,.17,7,.17,"#8a9893",Math.PI/2,0,0)}i.solid(t,d+l/2+.3,1.75,h+2,.4,1.5,7,{climbable:!0,kind:"pipes"});let _=e+8.5,y=n+7;for(let E of[-1,1])for(let I of[-1,1])o.box(_+E*1.1,3.2,y+I*1.1,.18,6.4,.18,"#6c6459"),i.solid(t,_+E*1.1,3.2,y+I*1.1,.18,6.4,.18,{kind:"post"});o.box(_,1.6,y,2.4,.1,.1,"#6c6459",.78),o.box(_,3.4,y,2.4,.1,.1,"#6c6459",-.78),o.box(_,6.45,y,2.9,.2,2.9,"#857b6b"),i.solid(t,_,6.45,y,2.9,.2,2.9,{climbable:!1,kind:"deck"}),o.cyl(_,8,y,1.3,2.9,"#a79c88"),o.add(K.cone,_,9.9,y,1.45,.9,1.45,"#6f6a5f"),i.cylinderSolid(t,_,6.55,y,1.3,2.9,{climbable:!0,kind:"tank"}),xd(i,t,_-1.1,y,.2,6.4,-Math.PI/2);let S=e-9.5,w=n+8;for(let E=0;E<4;E++){let I=.55*(E+1);o.box(S+E*1.35,I/2,w,1.3,I,1.3,E%2?"#b89a70":"#c7a97b"),i.solid(t,S+E*1.35,I/2,w,1.3,I,1.3,{climbable:!1,kind:"pallet"})}for(let E=0;E<5;E++){let I=e+3+E%3*.9,P=n+9.5-Math.floor(E/3)*.9;o.cyl(I,.5,P,.4,1,Rn(s,["#6d7f8a","#8f5f4e","#7d8a5d"])),o.cyl(I,.3,P,.42,.05,"#4a4f4c"),o.cyl(I,.8,P,.42,.05,"#4a4f4c")}i.solid(t,e+3.9,.5,n+9.05,2.8,1,1.9,{climbable:!1,kind:"barrels"});let T=e+7,A=n-9;o.box(T,.55,A,1.3,.7,2.2,"#d9a53a"),o.box(T,1.35,A+.2,1.2,.9,1.1,"#d9a53a"),o.box(T,2.05,A+.2,1.25,.1,1.3,"#3f4a46");for(let E of[-1,1])for(let I of[-1,1])o.add(K.cylinder,T+E*.65,.32,A+I*.75,.32,.25,.32,"#2f3331",0,0,Math.PI/2);for(let E of[-1,1])o.box(T+E*.3,1.2,A-1.35,.08,2.6,.08,"#4a4f4c"),o.box(T+E*.3,.12,A-1.9,.1,.06,1.1,"#6a6f6c");i.solid(t,T,.9,A,1.3,1.8,2.2,{climbable:!1,kind:"forklift"});let M=e+1,v=n+3.5;o.box(M,.75,v,7,.12,1,"#4a4f4c");for(let E of[-2.8,0,2.8])for(let I of[-1,1])o.box(M+E,.35,v+I*.4,.12,.7,.12,"#4a4f4c");i.solid(t,M,.75,v,7,.14,1,{climbable:!1,kind:"belt"}),t.extras.push({kind:"rollers",x:M,y:.88,z:v,count:10,spacing:.65}),t.extras.push({kind:"cog",x:d-l/2-.25,y:3.2,z:h-3,r:1.1}),Vt(t,M-3.9,v-.9,Math.PI/2,"worker"),Vt(t,S+5.6,w,-Math.PI/2,"worker"),Vt(t,d-l/2-1.2,h+3.2,Math.PI/2,"foreman");for(let E=0;E<4;E++)i.crate(t,e-9+E*1.1,.4,n-9.5+E%2*.4,.8);i.lamp(t,e+10.5,n-10.5),i.tree(t,e-10.5,n-2,s,.7)}function bd(i,t,e,n,s,r,o=1){let a=t.batch,l=Math.round((7+s()*5)*o),c=3.1,u=l*c+.6,d=12+s()*3,h=12+s()*3,f=Rn(s,["#8fb0b8","#9bb5a9","#a2b7c6","#88a7b5"]),g=Rn(s,["#e9e3d2","#d8d3c3","#5f6b66","#c8bfae"]);a.box(e,.14,n,22,.3,22,"#c6c0ae"),Kn(t,e,n,22,22,.29);let x=c+.3;a.box(e,(x+u+.3)/2,n,d,u+.3-x,h,f);let p=i.solid(t,e,(x+u+.3)/2,n,d,u+.3-x,h,{kind:"wall",buildingId:r}),m={id:r,x:e,z:n,w:d,d:h,h:u+.3,roofType:2,roofRise:0,wall:f,roofColor:"#9aa49c",cx:t.cx,cz:t.cz,kind:"roof",body:p};t.buildings.push(m);let b=Or(i,t,e,n,d,h,.29,x,.3,{side:0,u:0,width:2.6,height:2.9},f,{buildingId:r,building:m});a.box(e,x-.08,n,d-.2,.16,h-.2,"#e9e3d2"),a.box(e,.3,n,d-.6,.04,h-.6,"#cfc8b4"),z2(i,t,e,n,b,.32,s,r,g);for(let T=1;T<=l;T++){let A=.3+T*c;a.box(e,A,n,d+.5,.16,h+.5,g)}let _=Math.floor(d/1.6);for(let T=0;T<=_;T++){let A=-d/2+T*(d/_);a.box(e+A,u/2+.3,n+h/2+.12,.14,u,.24,g),a.box(e+A,u/2+.3,n-h/2-.12,.14,u,.24,g)}let y=Math.floor(h/1.6);for(let T=0;T<=y;T++){let A=-h/2+T*(h/y);a.box(e+d/2+.12,u/2+.3,n+A,.24,u,.14,g),a.box(e-d/2-.12,u/2+.3,n+A,.24,u,.14,g)}for(let T of[-1,1])a.box(e+T*1.4,1.75,n+h/2+.02,.14,2.9,.2,g);a.box(e,3.22,n+h/2+.02,3,.14,.2,g),a.box(e+1.3-.04,1.75,n+h/2-.55,.04,2.8,1.1,"#a9c3c9",0),a.box(e,3.6,n+h/2+1.4,6.5,.22,2.8,g),i.solid(t,e,3.6,n+h/2+1.4,6.5,.22,2.8,{climbable:!1,kind:"awning"}),i.pot(t,e+4.4,n+h/2+2.6,s,1.2),i.pot(t,e-4.4,n+h/2+2.6,s,1.2),i.bench(t,e+7,n+h/2+3,0),i.bench(t,e-7,n+h/2+3,0);let S=u+.3;for(let T of[-1,1])a.box(e+T*(d/2-.15),S+.4,n,.3,.8,h,g),a.box(e,S+.4,n+T*(h/2-.15),d,.8,.3,g),i.solid(t,e+T*(d/2-.15),S+.4,n,.3,.8,h,{climbable:!1}),i.solid(t,e,S+.4,n+T*(h/2-.15),d,.8,.3,{climbable:!1});a.box(e-d*.22,S+1.2,n-h*.2,4,2.4,3.2,"#a9a79a"),i.solid(t,e-d*.22,S+1.2,n-h*.2,4,2.4,3.2,{buildingId:r,building:m,kind:"wall"}),a.cyl(e+d*.25,S+.5,n+h*.25,2.4,.12,"#8c8a7e"),a.box(e+d*.25,S+.57,n+h*.25,.5,.02,1.6,"#e9e3d2"),a.box(e+d*.25,S+.57,n+h*.25,1.6,.02,.4,"#e9e3d2"),a.add(K.tapered,e+d*.3,S+4.5,n-h*.3,.12,9,.12,"#8c8a7e"),i.cylinderSolid(t,e+d*.3,S,n-h*.3,.13,9,{climbable:!0,kind:"mast"}),a.ball(e+d*.3,S+9.1,n-h*.3,.18,.18,.18,"#d9544f"),t.extras.push({kind:"beacon",x:e+d*.3,y:S+9.1,z:n-h*.3});let w=.3+Math.floor(l*.55)*c-.9;a.box(e+2,w,n+h/2+.7,3,.15,1,"#5f6b66"),i.solid(t,e+2,w,n+h/2+.7,3,.15,1,{climbable:!1,kind:"cradle"});for(let T of[-1,1])a.box(e+2+T*1.4,(w+S)/2,n+h/2+.7,.04,S-w,.04,"#3f4a46"),a.box(e+2+T*1.4,w+.4,n+h/2+.7,.06,.8,1,"#5f6b66");t.landmarks.push({id:r,kind:"tower",x:e,z:n,radius:9,name:"the tower top",y:S}),Vt(t,e+1.5,n+h/2+2.2,Math.PI,"suit"),Vt(t,e-2,n+h/2+4,s()*rs,"suit")}function rp(i,t,e,n,s,r){let o=t.batch,a="#dfcf9f",l="#b87a6b",c="#b89a70",u="#6d7f8a",d=["#d9544f","#e9c04b","#4f7f96","#6f9a4f"];o.box(e,.025,n,24,.1,24,"#8fa66b"),o.box(e,.06,n,20,.1,14,l),Kn(t,e,n,20,14,.11),t.landmarks.push({id:r,kind:"playground",x:e,z:n,radius:12,name:"the parkour park"});for(let E=0;E<6;E++){let I=e-9+E*1.1,P=n-5,N=.5+E*.3;o.cyl(I,N/2,P,.26,N,d[E%4]),i.cylinderSolid(t,I,0,P,.27,N,{climbable:!1,kind:"pole"})}let h=e-2.2,f=n-5;o.box(h,2.05,f,1.8,.16,1.8,c),i.solid(t,h,2.05,f,1.8,.16,1.8,{climbable:!1,kind:"deck"});for(let E of[-1,1])for(let I of[-1,1])o.box(h+E*.8,1,f+I*.8,.12,2,.12,u);o.box(e+1.2,2.05,n-5,5,.14,.22,c),i.solid(t,e+1.2,2.05,n-5,5,.14,.22,{climbable:!1,kind:"beam"});let g=e+4.6,x=n-5;o.box(g,2.05,x,1.8,.16,1.8,c),i.solid(t,g,2.05,x,1.8,.16,1.8,{climbable:!1,kind:"deck"});for(let E of[-1,1])for(let I of[-1,1])o.box(g+E*.8,1,x+I*.8,.12,2,.12,u);for(let E=0;E<9;E++){let I=E/8,P=x+1+I*5,N=2.05-Math.sin(I*Math.PI)*.45;o.box(g,N,P,1.2,.08,.45,E%2?"#c7a97b":c),i.solid(t,g,N,P,1.2,.08,.5,{climbable:!1,kind:"plank"})}for(let E of[-1,1])o.beam([g+E*.65,2.9,x+.9],[g+E*.65,2.9,x+6.1],.025,"#8d8470");let p=e+4.6,m=n+2.2,b=4.2;for(let E of[-1,1])for(let I of[-1,1])o.box(p+E*1.1,b/2,m+I*1.1,.16,b,.16,u),i.solid(t,p+E*1.1,b/2,m+I*1.1,.16,b,.16,{kind:"post"});o.box(p,b,m,2.5,.16,2.5,c),i.solid(t,p,b,m,2.5,.16,2.5,{climbable:!1,kind:"lookout"}),o.add(K.cone,p,b+1.1,m,2.1,1.4,2.1,d[0]);for(let E of[-1,1])o.box(p+E*1.2,b+.5,m,.06,.8,2.5,"#e9e3d2"),o.box(p,b+.5,m-1.2,2.5,.8,.06,"#e9e3d2"),i.solid(t,p+E*1.2,b+.5,m,.06,.8,2.5,{climbable:!1});i.solid(t,p,b+.5,m-1.2,2.5,.8,.06,{climbable:!1}),xd(i,t,p-1.3,m,.2,b,Math.PI/2),Eo(i,t,p+.4,b-.05,m+1.3,p+.4,.5,m+7.6,1,.1,d[1]);for(let E of[-1,1])Eo(i,t,p+.4+E*.5,b+.2,m+1.3,p+.4+E*.5,.75,m+7.6,.08,.4,d[1]);let _=p+.4,y=m+9.3;o.cyl(_,.35,y,1.4,.12,"#2f3331"),o.cyl(_,.42,y,1.15,.06,"#3f4a46");for(let E=0;E<6;E++){let I=E/6*rs;o.box(_+Math.cos(I)*1.2,.18,y+Math.sin(I)*1.2,.08,.36,.08,u)}i.cylinderSolid(t,_,0,y,1.4,.45,{climbable:!1,kind:"trampoline",bouncy:12.5});let S=e-7,w=n+3;o.box(S,1.9,w,.4,3.8,4.5,"#cbbfa3"),i.solid(t,S,1.9,w,.4,3.8,4.5,{climbable:!0,kind:"climbing-wall"});for(let E=0;E<22;E++)o.box(S+.25,.3+s()*3.3,w-2+s()*4,.12,.12,.14,d[E%4]);o.box(S,3.85,w,1.2,.14,4.5,c),i.solid(t,S,3.85,w,1.2,.14,4.5,{climbable:!1,kind:"ledge"});let T=e-2.5,A=n+3.5;for(let E of[-1,1])for(let I of[-1,1])o.box(T+E*1.8,1.25,A+I*.5,.1,2.5,.1,u);for(let E=0;E<7;E++)o.add(K.cylinder,T-1.8+E*.6,2.5,A,.035,1,.035,d[E%4],Math.PI/2,0,0);o.box(T,2.5,A,3.7,.06,.06,u),i.solid(t,T,2.5,A,3.7,.08,1.05,{climbable:!1,kind:"bars"});for(let E=0;E<3;E++){let I=e-8+E*2.2,P=n-1.2;o.add(K.torus,I,1.2+E*.3,P,.7,.7,.7,d[(E+1)%4])}o.box(e+9,.09,n-3,4.5,.08,4.5,a);for(let E=0;E<5;E++)o.ball(e+7.5+s()*3,.17,n-4.5+s()*3,.25,.14,.25,"#e8dbb0");let M=e+9.5,v=n+4;o.box(M,2.4,v,2.6,.12,.12,u,0);for(let E of[-1,1])o.box(M+E*1.3,1.2,v,.12,2.4,.12,u);i.solid(t,M,.85,v,.9,.25,.9,{climbable:!1,kind:"swing"}),t.extras.push({kind:"swing",x:M,y:2.35,z:v}),o.box(e-7,.55,n+8.5,.6,.4,.6,u),o.add(K.box,e-7,.85,n+8.5,3.6,.1,.4,c,0,0,.22),i.bench(t,e+2,n+9.5,0),i.bench(t,e-2.5,n-9.5,Math.PI),O2(i,t,p+1,m-1,b+.1,d[0]),i.tree(t,e-10.5,n-10,s,.8),i.tree(t,e+10.5,n+10,s,.8),Vt(t,e+7.8,n+8.5,-2.4,"kid"),Vt(t,e-4,n-8,.6,"kid"),Vt(t,e+1,n+7,2.8,"parent")}function op(i,t,e,n,s,r,o){let a=t.batch,l=o==="home"?10:12,c=o==="home"?8:9,u=3.6,d=.3,h=o==="cafe"?Rn(s,["#d9b48c","#c9a684","#d6c1a0"]):o==="shop"?Rn(s,["#9fb3a6","#b7bfae","#cbb9a4"]):Rn(s,["#d8cbb2","#c4b49a","#d2c1a4"]),f=o==="cafe"?"#a7805b":o==="shop"?"#cfc8b4":"#b89a70",g=Rn(s,["#8a5a44","#96604a","#5c6b66","#6f6252"]),x=n+c/2,p=1.6,m={minX:e-l/2+d,maxX:e+l/2-d,minZ:n-c/2+d,maxZ:x-d};a.box(e,.1,n,l+.5,.2,c+.5,"#b8b6a0"),a.box(e,.3,n,l-.2,.12,c-.2,f),a.box(e,.1,x+.35,p+.8,.2,.9,"#b8b6a0"),i.solid(t,e,.1,x+.35,p+.8,.2,.9,{climbable:!1,kind:"step"}),i.solid(t,e,.18,n,l,.36,c,{climbable:!1,kind:"floor"}),a.box(e,u+.1,n,l,.3,c,h),i.solid(t,e,u+.1,n,l,.3,c,{kind:"wall",buildingId:r,climbable:!1});let b=(w,T,A,M)=>{a.box(w,u/2+.1,T,A,u,M,h),i.solid(t,w,u/2+.1,T,A,u,M,{kind:"wall",buildingId:r})};b(e,n-c/2+d/2,l,d),b(e-l/2+d/2,n,d,c),b(e+l/2-d/2,n,d,c);let _=(l-p)/2;b(e-p/2-_/2,x-d/2,_,d),b(e+p/2+_/2,x-d/2,_,d),a.box(e,2.3+(u-2.3)/2+.1,x-d/2,p+.1,u-2.3,d,h),i.solid(t,e,2.3+(u-2.3)/2+.1,x-d/2,p+.1,u-2.3,d,{kind:"wall",buildingId:r});for(let w of[-1,1])a.box(e+w*(p/2+.08),1.25,x,.16,2.5,.1,"#f1e8d2");a.box(e,2.42,x,p+.3,.16,.1,"#f1e8d2"),a.box(e,.37,x+.3,1.3,.03,.6,"#8f5f4e");for(let w of[-1,1]){let T=e+w*(p/2+_/2);a.box(T,1.85,x+.02,_-1.2,1.7,.08,"#a9c3c9"),a.box(T,1.85,x+.05,_-1.1,1.8,.04,"#f1e8d2"),a.box(T,.95,x+.1,_-1,.14,.36,"#ded5bb"),i.solid(t,T,.95,x+.1,_-1,.14,.36,{climbable:!1,kind:"sill"})}let y={id:r,x:e,z:n,w:l,d:c,h:u+.25,roofType:0,roofRise:2.2,ridgeX:!0,wall:h,roofColor:g,cx:t.cx,cz:t.cz,kind:"roof",body:null,interior:o};t.buildings.push(y),t.colliders.push({shape:"roof",building:y,kind:"roof",climbable:!1,minX:e-l/2-.55,maxX:e+l/2+.55,minY:u+.25,maxY:u+.25+2.2,minZ:n-c/2-.55,maxZ:n+c/2+.55}),a.box(e,u+.25,n,l+.38,.25,c+.38,"#e8dfc4"),i.gable(t,{...y,h:u+.25},2.2,g,!0),Kn(t,e,n,l,c,.36),t.landmarks.push({id:r,kind:o,x:e,z:n,radius:Math.min(l,c)/2-.6,name:o==="cafe"?"the corner caf\xE9":o==="shop"?"the little grocer":"somebody\u2019s living room",inside:m,y:.36});let S=.36;if(o==="cafe"){let w=e-l/2+2.2,T=n-c/2+2.6;a.box(w,S+.5,T,1,1,4.2,"#6d5a44"),a.box(w,S+1.02,T,1.2,.08,4.4,"#e3dcc6"),i.solid(t,w,S+.53,T,1.2,1.06,4.4,{climbable:!1,kind:"counter"}),a.box(w,S+1.35,T-1.2,.6,.55,.7,"#8a9893"),a.box(w,S+1.66,T-1.2,.5,.08,.5,"#3f4a46"),a.cyl(w,S+1.2,T+.8,.3,.04,"#f1e8d2"),a.cyl(w,S+1.3,T+.8,.24,.14,"#e39a6e");for(let M=0;M<3;M++){let v=S+1.5+M*.55;a.box(e-l/2+d+.18,v,n-.5,.3,.05,3,"#8d7f67");for(let E=0;E<6;E++)a.cyl(e-l/2+d+.18,v+.17,n-1.75+E*.5,.1,.3,Rn(s,["#d9544f","#e9c04b","#6f9a4f","#c7b2d9","#e39a6e"]))}Ns(i,t,e-l/2+d+.08,S+2.2,n+2.2,1.6,1.1,Math.PI/2,"#3f4a46","#4a4f4c"),[[e+1.2,n-1.6],[e+3.4,n+.6],[e+.4,n+1.4],[e+3.2,n-2]].forEach(([M,v],E)=>{a.cyl(M,S+.74,v,.55,.06,"#e3dcc6"),a.cyl(M,S+.36,v,.06,.72,"#4a4f4c"),a.cyl(M,S+.03,v,.3,.05,"#4a4f4c"),i.cylinderSolid(t,M,S,v,.55,.78,{climbable:!1,kind:"table"}),a.cyl(M,S+.8,v,.07,.07,"#f1e8d2"),E%2&&a.ball(M+.2,S+.82,v,.1,.05,.1,"#e39a6e");for(let I=0;I<2;I++){let P=E*1.3+I*Math.PI,N=M+Math.cos(P)*.95,G=v+Math.sin(P)*.95;a.box(N,S+.46,G,.42,.06,.42,"#8f5f4e",-P),a.box(N+Math.cos(P)*.18,S+.72,G+Math.sin(P)*.18,.06,.6,.42,"#8f5f4e",-P);for(let k of[-.16,.16])for(let V of[-.16,.16])a.box(N+k,S+.22,G+V,.04,.45,.04,"#4a4f4c");i.solid(t,N,S+.25,G,.45,.5,.45,{climbable:!1,kind:"chair"}),I===0&&E<3&&Vt(t,N,G,Math.atan2(M-N,v-G),"customer",S,"sit")}});for(let M=0;M<3;M++){let v=e-2+M*2.5;a.beam([v,u,n],[v,S+2.3,n],.015,"#4a4f4c"),a.add(K.cone,v,S+2.15,n,.32,.3,.32,"#d9a53a")}a.add(K.torus,e+l/2-1.2,S+.1,n+c/2-1.3,.45,.45,.45,"#b48c9c",Math.PI/2),a.cyl(e+l/2-1.2,S+.06,n+c/2-1.3,.4,.1,"#d3c7e0"),i.cylinderSolid(t,e+l/2-1.2,S,n+c/2-1.3,.5,.2,{climbable:!1,kind:"catbed"}),Vt(t,w+1.1,T+.4,-Math.PI/2,"barista",S),Vt(t,w+1.3,T-1.4,Math.PI/2,"customer",S),a.box(e,3.3,x+.2,4.6,.9,.14,"#8f5f4e"),a.box(e,3.3,x+.28,3.8,.5,.02,"#f1e8d2"),a.box(e,2.65,x+.6,l-1,.08,1.3,"#c9524a"),i.solid(t,e,2.65,x+.6,l-1,.08,1.3,{climbable:!1,kind:"awning"});for(let M=0;M<2;M++){let v=e+(M?3.2:-3.2),E=x+1.6;a.cyl(v,.72,E,.5,.05,"#e3dcc6"),a.cyl(v,.36,E,.05,.7,"#4a4f4c"),i.cylinderSolid(t,v,0,E,.5,.75,{climbable:!1,kind:"table"}),a.cyl(v,2.3,E,.06,2.6,"#f1e8d2"),a.add(K.cone,v,3.5,E,1.5,.5,1.5,M?"#c9524a":"#e9c04b"),i.cylinderSolid(t,v,3.3,E,1.5,.3,{climbable:!1,kind:"parasol"})}}else if(o==="shop"){for(let A=0;A<2;A++){let M=e-1.5+A*3.2;a.box(M,S+.9,n-.3,.9,1.8,5.5,"#cbbfa3"),i.solid(t,M,S+.9,n-.3,.9,1.8,5.5,{climbable:!0,kind:"shelf"});for(let v=0;v<3;v++)for(let E of[-1,1]){let I=S+.5+v*.55;a.box(M+E*.5,I,n-.3,.1,.04,5.5,"#8d7f67");for(let P=0;P<10;P++){let N=Rn(s,["#d9544f","#e9c04b","#4f7f96","#6f9a4f","#efe5cf","#e39a6e"]);P%3?a.cyl(M+E*.5,I+.14,n-2.9+P*.55,.1,.25,N):a.ball(M+E*.5,I+.12,n-2.9+P*.55,.13,.12,.13,N)}}}let w=e+l/2-2,T=n+c/2-2.2;a.box(w,S+.5,T,1.6,1,.8,"#8f5f4e"),a.box(w,S+1.03,T,1.7,.06,.9,"#e3dcc6"),a.box(w-.4,S+1.3,T,.4,.4,.4,"#4a4f4c"),i.solid(t,w,S+.55,T,1.7,1.1,.9,{climbable:!1,kind:"counter"}),Vt(t,w,T-1,Math.PI,"grocer",S),Vt(t,e-3.1,n+1,-Math.PI/2,"shopper",S),a.box(e-l/2+d+.6,S+.5,n-c/2+d+1.5,1.1,1,2.6,"#e9e3d2"),a.box(e-l/2+d+.6,S+1.02,n-c/2+d+1.5,1.1,.04,2.6,"#a9c3c9"),i.solid(t,e-l/2+d+.6,S+.5,n-c/2+d+1.5,1.1,1.04,2.6,{climbable:!1,kind:"freezer"});for(let A=0;A<3;A++)a.box(e+3.6,S+.15+A*.12,n+2.8,.5,.12,.4,"#d9a53a");a.box(e,3.3,x+.2,5.2,.9,.14,"#4f7f96"),a.box(e,3.3,x+.28,4.4,.5,.02,"#f1e8d2");for(let A=0;A<2;A++){let M=e-3.2+A*6.4,v=x+1;a.box(M,.45,v,1.6,.2,.9,"#a78a62"),a.box(M,.25,v,1.4,.4,.7,"#8d7f67");for(let E=0;E<10;E++)a.ball(M-.6+E%5*.3,.62,v-.2+Math.floor(E/5)*.4,.13,.12,.13,A?"#d9544f":"#6f9a4f");i.solid(t,M,.3,v,1.6,.6,.9,{climbable:!1,kind:"display"})}}else{a.box(e+1,S+.02,n+.5,3.5,.03,2.4,"#b48c9c"),a.box(e+1,S+.3,n+1.5,2.4,.6,.9,"#8ea48c"),a.box(e+1,S+.75,n+1.85,2.4,.5,.25,"#8ea48c");for(let v of[-1,1])a.box(e+1+v*1.1,S+.5,n+1.5,.2,.4,.9,"#8ea48c");i.solid(t,e+1,S+.35,n+1.5,2.4,.7,.9,{climbable:!1,kind:"sofa"}),a.box(e+1,S+.25,n-.3,1,.5,.6,"#8d7f67"),a.box(e+1,S+.5,n-.3,.9,.04,.5,"#e3dcc6"),i.solid(t,e+1,S+.27,n-.3,1,.54,.6,{climbable:!1,kind:"table"}),a.box(e+1,S+.25,n-2.6,1.6,.5,.45,"#6d5a44"),a.box(e+1,S+1.05,n-2.6,1.5,.9,.06,"#2f3331"),a.box(e+1,S+1.05,n-2.6+.035,1.3,.7,.01,"#a9c3c9"),i.solid(t,e+1,S+.25,n-2.6,1.6,.5,.45,{climbable:!1,kind:"cabinet"});let w=e+3.6,T=n-.2;a.box(w,S+.3,T,.9,.6,.9,"#c88f6e"),a.box(w+.35,S+.75,T,.2,.5,.9,"#c88f6e"),i.solid(t,w,S+.35,T,.9,.7,.9,{climbable:!1,kind:"chair"}),a.box(e-l/2+d+.2,S+1,n-1,.35,2,2.2,"#8d7f67");for(let v=0;v<4;v++){let E=S+.3+v*.45;for(let I=0;I<7;I++)a.box(e-l/2+d+.2,E+.15,n-1.9+I*.3,.25,.3,.22,Rn(s,["#d9544f","#4f7f96","#6f9a4f","#e9c04b","#c7b2d9"]))}i.solid(t,e-l/2+d+.2,S+1,n-1,.4,2,2.2,{climbable:!0,kind:"shelf"}),a.box(e-2.5,S+.45,n-c/2+d+.5,4,.9,1,"#cbbfa3"),a.box(e-2.5,S+.93,n-c/2+d+.5,4.1,.06,1.1,"#5f6b66"),a.box(e-3.5,S+1.1,n-c/2+d+.5,.8,.2,.6,"#e9e3d2"),a.box(e-2.5,S+2,n-c/2+d+.3,4,.7,.5,"#cbbfa3"),i.solid(t,e-2.5,S+.48,n-c/2+d+.5,4.1,.96,1.1,{climbable:!1,kind:"counter"}),a.box(e-1.2,S+1.1,n-c/2+d+.5,.5,.15,.5,"#6d7f8a"),a.cyl(e-1.6,S+1.1,n-c/2+d+.5,.14,.2,"#d9544f"),a.box(e-2,S+.72,n+1,1.5,.06,.9,"#e3dcc6");for(let v of[-.65,.65])for(let E of[-.35,.35])a.box(e-2+v,S+.35,n+1+E,.06,.7,.06,"#8d7f67");i.solid(t,e-2,S+.38,n+1,1.5,.76,.9,{climbable:!1,kind:"table"});for(let v of[-1,1])a.box(e-2+v*.5,S+.45,n+1.9,.4,.05,.4,"#8f5f4e"),a.box(e-2+v*.5,S+.7,n+2.1,.4,.55,.05,"#8f5f4e"),i.solid(t,e-2+v*.5,S+.3,n+2,.4,.6,.4,{climbable:!1,kind:"chair"});let A=e+l/2-1.6,M=n+c/2-1.9;a.box(A,S+.3,M,1.8,.4,2.4,"#8d7f67"),a.box(A,S+.55,M,1.7,.25,2.3,"#e9e3d2"),a.box(A,S+.6,M+.3,1.7,.22,1.6,Rn(s,["#c9524a","#4f7f96","#b48c9c"])),a.box(A,S+.75,M-.9,1.4,.18,.5,"#f3ead6"),i.solid(t,A,S+.35,M,1.8,.7,2.4,{climbable:!1,kind:"bed"}),Vt(t,e-1.3,n+1.9,0,"resident",S),s()>.5&&Vt(t,e+1.9,n+1.5,Math.PI,"resident",S,"sit"),a.box(e+1,3.3,n,1.2,.1,1.2,"#e9e3d2"),a.beam([e+1,u,n],[e+1,S+2.5,n],.015,"#4a4f4c"),a.add(K.cone,e+1,S+2.4,n,.5,.4,.5,"#e9c04b"),a.box(e-3.5,1.4,x+.8,.9,.9,.9,"#6f9a4f"),i.crate(t,e+3.6,.43,x+1.2,.86),i.pot(t,e-3.5,x+1.2,s,.9)}}function ap(i,t,e,n,s,r){let o=t.batch,a=16,l=14,c=5.2,u=Rn(s,["#8a9893","#9fa89d","#b0a58f"]);o.box(e,.02,n,24,.1,24,"#b6ad99"),Kn(t,e,n,24,24,.07);let d={id:r,x:e-2,z:n,w:a,d:l,h:c,roofType:2,roofRise:0,wall:u,roofColor:"#7b8a86",cx:t.cx,cz:t.cz,kind:"roof",body:null};t.buildings.push(d);let h=Or(i,t,e-2,n,a,l,0,c,.35,{side:0,u:0,width:3.6,height:3.8},u,{buildingId:r,building:d});o.box(e-2,c-.15,n,a-.2,.3,l-.2,"#6c7873"),d.body=i.solid(t,e-2,c-.15,n,a,.3,l,{kind:"roof",buildingId:r,building:d,climbable:!1}),H2(i,t,e-2,n,h,.07,s,r);for(let x=0;x<7;x++)o.box(e-2-a/2+1+x*2.3,c/2,n+l/2+.05,.14,c,.12,"#6c7873");for(let x=0;x<3;x+=2){let p=e-2-5+x*5;o.box(p,1.9,n+l/2+.06,3.6,3.8,.1,"#8f5f4e"),o.box(p,1.9,n+l/2+.1,3.4,.1,.05,"#3f4a46")}o.box(e-2,3.95,n+l/2+.08,4.2,.3,.2,"#5f6b66"),o.box(e-2,2,n+l/2+.12,3.8,.04,.3,"#e9c04b");for(let x=0;x<5;x++)o.box(e-2,c+.25*(x+.5),n,a-x*1.6,.25,l,x%2?"#74827e":"#7b8a86");o.box(e-2,c+1.4,n,4,.4,l-2,"#a9c3c9"),Eo(i,t,e+6.4,.4,n+6.5,e+6.4,c+.1,n-6.5,1.2,.12,"#6c7873"),o.box(e+7.2,c/2+.3,n,.08,c+.4,13.5,"#4a4f4c"),i.solid(t,e+7.2,c/2+.3,n,.08,c+.4,13.5,{climbable:!1,kind:"rail"});for(let x=0;x<6;x++){let p=e-8+x%3*1.5,m=n+10+Math.floor(x/3)*1.5,b=.4+x%3*.35;o.box(p,b/2,m,1.3,b,1.3,x%2?"#b89a70":"#c7a97b"),i.solid(t,p,b/2,m,1.3,b,1.3,{climbable:!1,kind:"pallet"})}let f=e+4,g=n+10;o.box(f,1.5,g,2.4,2.2,6,"#e9e3d2"),o.box(f,1.1,g+3.8,2.3,1.7,1.6,"#4f7f96"),o.box(f,.4,g+.5,2.5,.5,7.5,"#3f4a46");for(let x of[-1,1])for(let p of[-2.2,1.5,3.4])o.add(K.cylinder,f+x*1.2,.45,g+p,.45,.3,.45,"#2f3331",0,0,Math.PI/2);i.solid(t,f,1.3,g+.5,2.5,2.6,7.5,{climbable:!1,kind:"car"}),Vt(t,e-6,n+7.8,0,"worker"),Vt(t,f-2,g+3,Math.PI/2,"driver"),t.landmarks.push({id:r,kind:"warehouse",x:e,z:n,radius:12,name:"the depot"}),i.lamp(t,e+10.5,n-10.5)}function lp(i,t,e,n,s,r){let o=t.batch,a=e+7.5;o.box(e-4,.02,n,16,.1,24,"#b3ab97"),Kn(t,e-4,n,16,24,.07),t.stations=t.stations||[],t.stations.push({x:a,z:n,platformX:e-2.5});let l=13,c=20,u=e-2.5,d=1;o.box(u,d/2,n,l,d,c,"#c9bfa6"),i.solid(t,u,d/2,n,l,d,c,{kind:"floor",climbable:!1}),o.box(u+l/2-.35,d+.01,n,.5,.03,c,"#e3c35a"),o.box(u,d+.005,n,l-.2,.02,c-.2,"#d5cbb1");for(let g=0;g<4;g++){let p=.25*(g+.5),m=n+c/2+1.1-g*.55;o.box(u-3,p,m,3,.25,.55,"#bdb39a"),i.solid(t,u-3,p,m,3,.25,.55,{kind:"step",climbable:!1})}for(let g of[-7,-2.3,2.3,7])o.cyl(u-1,d+1.9,n+g,.09,3.8,"#4f5a56"),i.cylinderSolid(t,u-1,d,n+g,.1,3.8,{kind:"post"});o.box(u-1,d+3.85,n,9.5,.14,17.5,"#5c6b66"),i.solid(t,u-1,d+3.85,n,9.5,.14,17.5,{kind:"roof",climbable:!1});for(let g of[-1,1])o.box(u-1+g*4.75,d+3.6,n,.06,.5,17.5,"#8f5f4e");o.box(u-1,d+3.6,n-8.75,9.5,.5,.06,"#8f5f4e"),o.box(u-1,d+3.6,n+8.75,9.5,.5,.06,"#8f5f4e");let h=u-4.5,f=n-5;o.box(h,d+1.35,f,3.2,2.7,2.6,"#8f5f4e"),i.solid(t,h,d+1.35,f,3.2,2.7,2.6,{kind:"wall",climbable:!0}),o.box(h,d+2.82,f,3.5,.14,2.9,"#4f5a56"),o.box(h+1.62,d+1.5,f,.04,1,1.4,"#a9c3c9"),o.box(h+1.66,d+.95,f,.1,.08,1.5,"#e8dfc4"),Ns(i,t,h+1.68,d+2.3,f,1.9,.42,Math.PI/2,"#3f4a46"),o.cyl(u+3.5,d+1.6,n+3,.05,3.2,"#4f5a56"),o.cyl(u+3.5,d+3.3,n+3,.42,.12,"#f3ead6",Math.PI/2),o.cyl(u+3.5,d+3.3,n+3,.46,.1,"#3f4a46",Math.PI/2),o.box(u+3.5,d+3.3,n+3.07,.04,.3,.02,"#2b2622"),o.box(u+3.58,d+3.33,n+3.07,.2,.03,.02,"#2b2622"),i.cylinderSolid(t,u+3.5,d,n+3,.06,3.2,{kind:"pole",walkable:!1}),Ns(i,t,u+2,d+2.2,n+8.6,4.2,.7,0,"#3f4a46");for(let g of[-1.5,5])i.bench(t,u-1.8,n+g,-Math.PI/2,d);o.box(u+1.5,d+.45,n-7.5,1.2,.08,.7,"#8f5f4e");for(let g of[-1,1])o.cyl(u+1.5+g*.5,d+.2,n-7.5,.2,.1,"#2f3331",0,Math.PI/2);o.box(u+1.5,d+.8,n-7.5,.5,.6,.45,"#8a6a4c"),o.box(u+1.5,d+1.15,n-7.6,.6,.1,.35,"#c9a35c"),i.solid(t,u+1.5,d+.7,n-7.5,1.2,1.2,.7,{kind:"box",climbable:!1}),Vt(t,u+3.6,n-4,-Math.PI/2,"worker",d),Vt(t,u-1.8,n-1.5,-Math.PI/2,"suit",d,"sit"),Vt(t,u+1.5,n+6,-Math.PI/2,"grandma",d),Vt(t,u+.4,n+6.9,Math.PI,"kid",d),t.landmarks.push({id:r,kind:"station",x:e,z:n,radius:13,name:"the station",track:a}),i.lamp(t,e-10.5,n+10.5),i.lamp(t,e-10.5,n-10.5)}function cp(i,t,e,n,s,r){let o=t.batch;o.box(e,.02,n,24,.1,24,"#9aa66d"),Kn(t,e,n,24,24,.07),o.box(e,.075,n,1.6,.03,24,"#b9ad8e"),o.box(e,.075,n,24,.03,1.6,"#b9ad8e");let a=[["#6d9a52",.18],["#e0893c",.12],["#7b5ea7",.14],["#9bc46a",.22],["#c94a3f",.1],["#5f8a4a",.26]],l=0;for(let S of[-1,1])for(let w of[-1,1])for(let T=0;T<3;T++){let A=e+S*(3+(T-1)*3.2),M=n+w*6.2,v=2.4,E=7;o.box(A,.25,M,v,.4,E,"#8a6a4c"),o.box(A,.4,M,v-.3,.14,E-.3,"#5a4634"),i.solid(t,A,.25,M,v,.46,E,{kind:"bed",climbable:!1});let[I,P]=a[l++%a.length];for(let N=0;N<7;N++)for(let G of[-.55,.55])o.ball(A+G+(s()-.5)*.2,.48+P*.6,M-E/2+.7+N*(E-1.4)/6,P*(.8+s()*.5),P,P*(.8+s()*.5),I)}for(let[S,w]of[[-9.5,-1.6],[-9.5,1.6],[9.5,0]]){for(let T=0;T<3;T++){let A=T/3*rs;o.add(K.cylinder,e+S+Math.cos(A)*.35,1.1,n+w+Math.sin(A)*.35,.025,2.3,.025,"#9a9078",Math.cos(A)*.3,0,-Math.sin(A)*.3)}for(let T=0;T<5;T++)o.ball(e+S+(s()-.5)*.5,.5+T*.38,n+w+(s()-.5)*.5,.32,.26,.32,T%2?"#6d9a52":"#5f8a4a")}let c=e+6.2,u=n-2.6;o.cyl(c,1.1,u,.05,2.2,"#8a6a4c"),o.box(c,1.75,u,1.5,.07,.07,"#8a6a4c"),o.box(c,1.45,u,.6,.8,.32,"#c9524a"),o.ball(c,2.05,u,.22,.25,.22,"#d9c7a0"),o.add(K.cone,c,2.38,u,.34,.3,.34,"#8a6a4c"),o.cyl(c,2.24,u,.4,.04,"#8a6a4c");for(let S of[-1,1])o.box(c+S*.75,1.75,u,.18,.3,.18,"#e3c35a");i.cylinderSolid(t,c,0,u,.08,2.2,{kind:"pole",walkable:!1}),o.ball(e-10,.45,n+9.5,1.3,.55,1.1,"#5a4634"),o.ball(e-9.6,.7,n+9.4,.7,.35,.6,"#6b5540"),o.cyl(e+10.3,.55,n+9.8,.45,1.1,"#3f6b57"),o.cyl(e+10.3,1.11,n+9.8,.47,.04,"#2f3331"),o.box(e+3,.55,n+10,.7,.4,1.1,"#6a9ab8"),o.add(K.cylinder,e+3,.3,n+10.7,.28,.1,.28,"#2f3331",0,0,Math.PI/2);for(let S of[-1,1])o.box(e+3+S*.3,.5,n+9.1,.05,.05,.9,"#8a6a4c");let d=e-6.5,h=n+9,f=4.4,g=3.6,x=2.2,p="#cfe3e6";o.box(d,.18,h,f+.3,.36,g+.3,"#b8b6a0"),i.solid(t,d,.18,h,f+.3,.36,g+.3,{kind:"floor",climbable:!1}),Kn(t,d,h,f+.3,g+.3,.36),o.box(d,.1,h+g/2+.5,1.6,.2,.8,"#b8b6a0"),i.solid(t,d,.1,h+g/2+.5,1.6,.2,.8,{kind:"step",climbable:!1});let m=(S,w,T,A)=>{o.box(S,.36+x/2,w,T,x,A,p),i.solid(t,S,.36+x/2,w,T,x,A,{kind:"wall",climbable:!0})};m(d,h-g/2,f,.06),m(d-f/2,h,.06,g),m(d+f/2,h,.06,g),m(d-f/4-.3,h+g/2,f/2-.6,.06),m(d+f/4+.3,h+g/2,f/2-.6,.06);for(let S of[-1,1])o.box(d+S*(f/2),.36+x/2,h,.08,x,.08,"#f3ead6");for(let S of[-g/2,g/2])for(let w of[-f/2,f/2,-.6,.6])o.box(d+w,.36+x/2,h+S,.08,x,.08,"#f3ead6");o.box(d,.36+x,h,f+.2,.08,g+.2,"#f3ead6");let b=1.1,_=Math.atan2(b,f/2),y=Math.hypot(b,f/2);for(let S of[-1,1])o.add(K.box,d+S*f/4,.36+x+b/2+.04,h,y,.06,g+.2,p,0,0,-S*_);t.colliders.push({shape:"roof",building:{x:d,z:h,w:f-1.1,d:g-1.1,h:.36+x+.04,roofRise:b,ridgeX:!1,roofType:0},kind:"roof",climbable:!1,minX:d-f/2-.1,maxX:d+f/2+.1,minY:.36+x,maxY:.36+x+b+.1,minZ:h-g/2-.1,maxZ:h+g/2+.1}),o.box(d-f/2+.55,.36+.45,h-.4,.8,.06,g-1.2,"#8a6a4c"),i.solid(t,d-f/2+.55,.36+.25,h-.4,.8,.5,g-1.2,{kind:"shelf",climbable:!1});for(let S=0;S<4;S++){let w=h-g/2+.6+S*.7;o.add(K.pot,d-f/2+.55,.36+.58,w,.14,.2,.14,"#b8693f"),o.ball(d-f/2+.55,.36+.78,w,.14,.12,.14,S%2?"#6d9a52":"#e36b8a")}for(let[S,w,T]of[[8.5,-9,"#6b5540"],[-8.5,-9,"#5f6b66"]]){let A=e+S,M=n+w;o.box(A,1.1,M,2.6,2.2,2.2,T),i.solid(t,A,1.1,M,2.6,2.2,2.2,{kind:"wall",climbable:!0});for(let v of[-1,1])o.add(K.box,A+v*.7,2.55,M,1.6,.08,2.5,"#3f4a46",0,0,-v*.5);o.box(A,2.2,M,.2,.9,2.4,"#3f4a46"),o.box(A,1,M+1.12,.8,1.8,.06,S>0?"#3f4a46":"#8a6a4c")}for(let S=-11;S<=11;S+=1.1)if(!(Math.abs(S)<1.6))for(let w of[-1,1])o.ball(e+S,.45,n+w*11.6,.7,.55,.6,"#5f8a4a"),o.ball(e+w*11.6,.45,n+S,.6,.55,.7,"#5f8a4a");Vt(t,e-3,n-2.6,Math.PI/2,"grandpa"),Vt(t,e+3,n+2.6,-Math.PI/2,"resident"),Vt(t,d+.4,h+g/2+1.4,Math.PI,"grandma",0),t.landmarks.push({id:r,kind:"allotments",x:e,z:n,radius:13,name:"the allotments"}),i.lamp(t,e+10.5,n+10.5)}function hp(i,t,e,n,s,r=!1){let o=t.batch,a=72;o.box(e,.06,n,3.4,.12,a+.05,"#a39c88");for(let l=-35.6;l<=35.6;l+=.8)o.box(e,.13,n+l,2.3,.1,.28,"#6a5540");for(let l of[-1,1])o.box(e+l*.72,.23,n,.09,.14,a+.05,"#6b6a66"),o.box(e+l*.72,.31,n,.13,.03,a+.05,"#9a9a94");for(let l of[n-32.5,n+32.5]){o.box(e,.2,l,3.6,.12,7.4,"#9f9680"),o.box(e,.27,l,.9,.02,7.4,"#b9ae96");for(let c of[-1,1])o.box(e+c*1.2,.27,l,.6,.02,7.4,"#b9ae96")}o.box(e,.2,n,3.6,.12,3.2,"#9f9680");for(let l of[n-32.5,n+32.5])for(let c of[-1,1]){let u=e+c*2.6,d=l+c*4.4;o.cyl(u,1.4,d,.05,2.8,"#e9e3d2"),o.box(u,2.5,d,.9,.12,.08,"#c9524a",.78),o.box(u,2.5,d,.9,.12,.08,"#c9524a",-.78),o.box(u,1.9,d,.34,.34,.06,"#2f3331"),o.ball(u,1.9,d+.04,.1,.1,.04,"#d9544f"),i.cylinderSolid(t,u,0,d,.06,2.8,{kind:"pole",walkable:!1})}for(let l of[-1,1])for(let c of[[-29,-4.5],[4.5,29]]){if(l<0&&r)continue;let u=(c[0]+c[1])/2+n,d=c[1]-c[0];for(let h=c[0];h<=c[1];h+=2.4)o.box(e+l*2.9,.55,n+h,.08,1.1,.08,"#8d8470");o.box(e+l*2.9,.95,u,.04,.06,d,"#8d8470"),o.box(e+l*2.9,.5,u,.04,.06,d,"#8d8470"),i.solid(t,e+l*2.9,.55,u,.1,1.1,d,{kind:"rail",climbable:!1})}for(let l=0;l<10;l++)o.box(e+(s()-.5)*3,.13,n+(s()-.5)*60,.3,.04,.5,"#8ea563")}function dp(i,t,e,n,s,r,o){let a=t.batch,l=e+7.5;if(a.box(e-4,.02,n,16,.1,24,"#aeb08f"),Kn(t,e-4,n,16,24,.07),o==="bridge"){for(let d of[-1,1]){let h=l+d*5.5;Eo(i,t,h,.2,n+d*7,h,5,n-d*1.5,1.8,.14,"#5c6b66");for(let f=0;f<9;f++){let g=(f+.5)/9,x=.2+(5-.2)*g,p=n+d*7-d*8.5*g;a.box(h+1.8/2+.05,x+.5,p,.05,1,.05,"#4f5a56"),a.box(h-1.8/2-.05,x+.5,p,.05,1,.05,"#4f5a56")}a.add(K.box,h+1.8/2+.05,(5+.2)/2+1,n+d*2.75,.05,.06,9.9,"#4f5a56",Math.atan2(d*(5-.2),8.5),0,0),a.add(K.box,h-1.8/2-.05,(5+.2)/2+1,n+d*2.75,.05,.06,9.9,"#4f5a56",Math.atan2(d*(5-.2),8.5),0,0);for(let f of[-1,1])a.box(h+f*1.8/2,5/2,n+d*7,.2,5,.2,"#4f5a56"),i.solid(t,h+f*1.8/2,5/2,n+d*7,.2,5,.2,{kind:"post"}),a.box(h+f*1.8/2,5/2,n-d*1.5,.2,5,.2,"#4f5a56"),i.solid(t,h+f*1.8/2,5/2,n-d*1.5,.2,5,.2,{kind:"post"})}a.box(l,5,n-1.5,13,.16,1.8,"#5c6b66"),i.solid(t,l,5,n-1.5,13,.16,1.8,{kind:"deck",climbable:!1});for(let d of[-1,1]){a.box(l,5+.55,n-1.5+d*(1.8/2+.03),13,.06,.05,"#4f5a56"),a.box(l,5+1.05,n-1.5+d*(1.8/2+.03),13,.06,.05,"#4f5a56");for(let h=-6;h<=6;h+=1.5)a.box(l+h,5+.55,n-1.5+d*(1.8/2+.03),.05,1.1,.05,"#4f5a56");i.solid(t,l,5+.55,n-1.5+d*(1.8/2+.03),13,1.1,.08,{kind:"rail",climbable:!1})}a.box(l,5+1.45,n-1.5,13.2,.1,1.8+.6,"#8f5f4e"),t.landmarks.push({id:r,kind:"bridge",x:l,z:n-1.5,radius:7,name:"the footbridge",y:5}),Vt(t,l-2,n-1.5,Math.PI/2,"kid",5),Vt(t,l-2.8,n-1.2,Math.PI/2,"parent",5)}else if(o==="yard"){let c=l-4.2;a.box(c,.06,n+2,3,.12,18,"#a39c88");for(let h=-8.5;h<=10.5;h+=.8)a.box(c,.13,n+h,2.1,.1,.26,"#6a5540");for(let h of[-1,1])a.box(c+h*.72,.23,n+2,.09,.14,18,"#6b6a66");a.box(c,.5,n-7.4,2.2,.8,.3,"#c9524a");for(let[h,f,g]of[[n-3,"#6d7f8a",!0],[n+4.5,"#8f5f4e",!1]]){a.box(c,.8,h,2.4,.5,5.5,"#3f4a46");for(let x of[-1,1])for(let p of[-1.9,1.9])a.add(K.cylinder,c+x*1.1,.5,h+p,.48,.22,.48,"#2f3331",0,0,Math.PI/2);if(g){for(let x of[-1,1])a.box(c+x*1.15,1.65,h,.1,1.2,5.5,f);a.box(c,1.65,h-2.7,2.4,1.2,.1,f),a.box(c,1.65,h+2.7,2.4,1.2,.1,f);for(let x=0;x<5;x++)i.crate(t,c-.6+x%3*.6,1.4,h-1.6+Math.floor(x/3)*1.2,.55);i.solid(t,c,1.05,h,2.4,1.1,5.5,{kind:"car",climbable:!0})}else a.box(c,2.05,h,2.4,2,5.5,f),a.add(K.cylinder,c,3.05,h,1.3,5.6,.4,"#5c6b66",Math.PI/2),i.solid(t,c,2.05,h,2.4,2.1,5.5,{kind:"car",climbable:!0}),i.solid(t,c,3.05,h,2.6,.8,5.6,{kind:"car",climbable:!0})}let u=e-5,d=n+2;a.box(u,3.5,d,.5,7,.5,"#4f5a56"),i.solid(t,u,3.5,d,.5,7,.5,{kind:"post"}),a.box(u+3,6.8,d,7,.35,.4,"#4f5a56"),i.solid(t,u+3,6.8,d,7,.35,.4,{kind:"beam",climbable:!1}),a.beam([u+6,6.6,d],[u+6,3.2,d],.02,"#2f3331"),a.box(u+6,3,d,.4,.4,.4,"#4a4f4c"),i.crate(t,u+6,2.3,d,.9);for(let h=0;h<6;h++)a.cyl(e-8+h%3*.9,.5,n-6+Math.floor(h/3)*.9,.4,1,h%2?"#6d7f8a":"#c9524a");i.solid(t,e-7.1,.5,n-5.55,2.7,1,1.8,{climbable:!1,kind:"barrels"}),Ns(i,t,e-6,2.4,n+9,3.2,.7,0,"#3f4a46"),Vt(t,e-3,n-1,Math.PI/2,"worker"),Vt(t,u+6.8,d+1.2,Math.PI,"foreman"),t.landmarks.push({id:r,kind:"yard",x:e-2,z:n,radius:9,name:"the goods yard"})}else{let c=e+1.5,u=n-3,d=3;for(let p of[-1,1])for(let m of[-1,1])a.box(c+p*1.4,d/2,u+m*1.4,.22,d,.22,"#6c6459"),i.solid(t,c+p*1.4,d/2,u+m*1.4,.22,d,.22,{kind:"post"});a.box(c,d,u,3.6,.2,3.6,"#8d7f67"),i.solid(t,c,d,u,3.6,.2,3.6,{kind:"deck",climbable:!1}),gd(i,t,c,u,3.6,3.6,d+.1,d+2.6,.16,{side:3,u:0,width:1,height:2},"#8f5f4e"),a.box(c+1.75,d+1.6,u,.04,1.2,2.8,"#a9c3c9"),a.box(c,d+2.7,u,4.2,.14,4.2,"#4f5a56");for(let p=0;p<4;p++)a.box(c-1+p*.5,d+.5,u+.8,.08,.8,.08,"#c9524a",0,0,p%2?.4:-.3);a.box(c-.3,d+.3,u+.8,2.2,.3,.3,"#4a4f4c"),xd(i,t,c-1.95,u,.2,d+.1,-Math.PI/2),Vt(t,c-.6,u-.4,0,"worker",d+.1);let h=l-2.6,f=n+6;a.cyl(h,2.6,f,.08,5.2,"#e9e3d2"),i.cylinderSolid(t,h,0,f,.09,5.2,{kind:"pole",walkable:!1}),a.box(h+.5,4.8,f,1.2,.25,.06,"#c9524a",.3),a.box(h+.9,4.75,f,.3,.25,.06,"#f3ead6",.3),a.box(h+.2,4.3,f,.35,.35,.08,"#2f3331"),a.ball(h+.2,4.3,f+.05,.12,.12,.04,"#6f9a4f");let g=l-2.6,x=n-8;a.cyl(g,1.7,x,.22,3.4,"#5f6b66"),a.add(K.cylinder,g+.9,3.3,x,.16,2,.16,"#5f6b66",0,0,Math.PI/2),a.cyl(g+1.8,2.7,x,.14,1.2,"#5f6b66"),i.cylinderSolid(t,g,0,x,.24,3.4,{kind:"post"}),a.box(e-7,.6,n+7,2.4,1.2,1.6,"#8f5f4e"),a.box(e-7,1.3,n+7,2.6,.2,1.8,"#4f5a56"),i.solid(t,e-7,.7,n+7,2.6,1.4,1.8,{kind:"box",climbable:!0});for(let p=0;p<5;p++)a.box(e-4+p*.9,.15,n+9.5,.25,.3,2.6,"#6a5540",.1*(p%2));t.landmarks.push({id:r,kind:"signalbox",x:c,z:u,radius:6,name:"the signal box",y:d+.1}),i.tree(t,e-9,n-8,s,.8)}i.lamp(t,e-10.5,n+10.5)}function gd(i,t,e,n,s,r,o,a,l,c,u){let d=t.batch,h=a-o,f=(o+a)/2,g=(x,p,m,b,_=f,y=h)=>{d.box(x,_,p,m,y,b,u),i.solid(t,x,_,p,m,y,b,{kind:"wall",climbable:!0})};for(let x=0;x<4;x++){let p=x*Math.PI/2,m=Math.round(Math.sin(p)),b=Math.round(Math.cos(p)),_=b,y=-m,S=x%2?r:s,w=x%2?s/2:r/2,T=c&&x===c.side?[[-S/2,c.u-c.width/2],[c.u+c.width/2,S/2]]:[[-S/2,S/2]];for(let[A,M]of T){let v=(A+M)/2,E=M-A;E>.02&&g(e+m*(w-l/2)+_*v,n+b*(w-l/2)+y*v,x%2?l:E,x%2?E:l)}c&&x===c.side&&o+c.height<a&&g(e+m*(w-l/2)+_*c.u,n+b*(w-l/2)+y*c.u,x%2?l:c.width+.1,x%2?c.width+.1:l,(o+c.height+a)/2,a-o-c.height)}return{minX:e-s/2+l,maxX:e+s/2-l,minZ:n-r/2+l,maxZ:n+r/2-l}}function up(i){let r=[],o=(c,u,d)=>{for(let h=0;h<u;h++)for(let f of[-1,1])i.add(K.cylinder,0+f*1.15,.5,c-d/2+.9+h*((d-1.8)/Math.max(1,u-1)),.5,.22,.5,"#2f3331",0,0,Math.PI/2)};i.box(0,.45+.35,-6.5,2.6,.5,7,"#3f4a46"),o(-6.5,3,7),i.add(K.cylinder,0,.45+1.75,-6.5-.6,1.05,4.6,1.05,"#4f7f96",Math.PI/2),i.box(0,.45+1.5,-6.5+2.3,2.4,2.2,2.2,"#4f7f96"),i.box(0,.45+2.72,-6.5+2.3,2.7,.18,2.5,"#2f3331");for(let c of[-1,1])i.box(0+c*1.21,.45+1.8,-6.5+2.3,.04,.8,1,"#a9c3c9");i.cyl(0,.45+3.15,-6.5-2.3,.3,1,"#2b2622"),i.cyl(0,.45+3.7,-6.5-2.3,.42,.18,"#2b2622"),i.cyl(0,.45+2.95,-6.5-.6,.35,.5,"#c9a35c"),i.box(0,.45+.9,-6.5-3.7,2.4,.7,.4,"#c9524a"),i.ball(0,.45+1.4,-6.5-3.55,.18,.18,.1,"#f6ecc8"),r.push({x:0,y:.45+1.5,z:-6.5,w:2.6,h:3.1,d:7}),i.box(0+.9,.45+1.7,-6.5+2.3,.36,.5,.3,"#4f5d6b"),i.ball(0+.9,.45+2.1,-6.5+2.3,.14,.16,.14,"#e3b98f"),i.cyl(0+.9,.45+2.27,-6.5+2.3,.16,.08,"#2f3331");let a=3.2,l=10;for(let c=0;c<2;c++,a+=l+.7){i.box(0,.45+.35,a,2.6,.5,l,"#3f4a46"),o(a,4,l),i.box(0,.45+1.7,a,2.6,2.4,l,c?"#6f6252":"#8f5f4e"),i.box(0,.45+1.3,a,2.66,.5,l+.02,"#e8dfc4");for(let u=0;u<5;u++)for(let d of[-1,1])i.box(0+d*1.31,.45+2.1,a-l/2+1.3+u*1.9,.04,.9,1.1,"#a9c3c9"),u%2===c%2&&(i.ball(0+d*1.1,.45+2.05,a-l/2+1.3+u*1.9,.13,.15,.13,"#e3b98f"),i.box(0+d*1.1,.45+1.75,a-l/2+1.3+u*1.9,.3,.4,.3,["#c9524a","#4f7f96","#6f9a4f","#d9a53a"][u%4]));i.add(K.cylinder,0,.45+2.95,a,1.45,l+.1,.45,"#5c6b66",Math.PI/2),i.box(0,.45+.55,a-l/2-.4,.3,.3,.8,"#2b2622"),r.push({x:0,y:.45+1.75,z:a,w:2.6,h:2.6,d:l},{x:0,y:.45+2.95,z:a,w:2.9,h:.9,d:l+.1})}return i.box(0,.45+1.9,a-l/2-.5,2.2,.5,.1,"#c9524a"),{boxes:r,length:a-l/2-.3-(-6.5-3.5),front:-6.5-3.9,back:a-l/2-.5,chimney:{x:0,y:.45+3.9,z:-6.5-2.3}}}function fp(i,t,e,n,s,r){let o=t.batch,a=`airport:${r}`;o.box(e,.02,n,58,.1,58,"#b1aa98"),Kn(t,e,n,58,58,.07);let l=n+19;o.box(e,.05,l,58,.08,11,"#6e6f6a");for(let k=-26;k<=26;k+=4)o.box(e+k,.095,l,2.2,.02,.28,"#e9e3d2");for(let k of[-1,1]){for(let V=0;V<4;V++)o.box(e+k*(27-V*1.1),.095,l+(V%2?2.4:-2.4),.5,.02,3.5,"#e9e3d2");for(let V=-27;V<=27;V+=3)o.ball(e+V,.14,l+k*5.7,.09,.09,.09,V%6?"#f1e8d2":"#4f7f96")}o.box(e-2,.055,n+9,7,.08,10,"#7a7b75");for(let k=0;k<5;k++)o.box(e-2,.1,n+5+k*2,.25,.02,1.2,"#e9c04b");let c=e-2,u=n+1;o.box(c,.06,u,24,.08,16,"#7a7b75");for(let k=-10;k<=10;k+=2.5)o.box(c+k,.11,u-7.5,1.5,.02,.25,"#e9c04b");t.airports=t.airports||[],t.airports.push({id:a,x:e,z:n,runwayZ:l,stand:{x:c,y:0,z:u,heading:0},door:{x:c+4.1,z:u+2.3}}),Eo(i,t,c+4.1,.06,u+7.8,c+4.1,1.55,u+2.3,1.2,.08,"#e9e3d2"),o.box(c+4.1,1.52,u+1.95,1.2,.1,.9,"#e9e3d2"),i.solid(t,c+4.1,1.5,u+1.95,1.2,.14,.9,{kind:"deck",climbable:!1});for(let k of[-1,1]){o.box(c+4.1+k*.62,1.95,u+1.95,.05,.9,.9,"#4f5a56"),o.add(K.box,c+4.1+k*.62,1.3,u+5.05,.05,.06,5.6,"#4f5a56",-.27,0,0);for(let V=0;V<6;V++)o.box(c+4.1+k*.62,.55+V*.27,u+7.4-V*1,.05,.9,.05,"#4f5a56")}for(let k of[-1,1])o.add(K.cylinder,c+4.1+k*.78,.2,u+7.9,.2,.14,.2,"#2f3331",0,0,Math.PI/2);let d=c-9,h=u+5;o.box(d,.5,h,1.1,.6,1.6,"#d9a53a"),o.box(d,1,h-.3,1,.4,.8,"#2f3331");for(let k=0;k<3;k++){let V=h+2.2+k*1.9;o.box(d,.45,V,1.1,.1,1.6,"#8a9893"),o.box(d,.9,V,1.15,.8,1.7,"#6d7f8a");for(let U=0;U<4;U++)o.box(d-.3+U%2*.6,.62+Math.floor(U/2)*.4,V-.4+U%2*.7,.5,.35,.6,["#c9524a","#4f7f96","#e9c04b","#2f3331"][(U+k)%4]);for(let U of[-1,1])o.add(K.cylinder,d+U*.6,.25,V,.22,.15,.22,"#2f3331",0,0,Math.PI/2);i.solid(t,d,.7,V,1.15,1.3,1.7,{kind:"car",climbable:!0})}i.solid(t,d,.6,h,1.1,1.2,1.6,{kind:"car",climbable:!0});let f=c+11,g=u+5;o.add(K.cylinder,f,1.2,g,1,4.5,1,"#e9e3d2",Math.PI/2),o.box(f,.9,g+2.9,1.9,1.5,1.4,"#c9524a"),o.box(f,.5,g,2,.5,5.6,"#3f4a46");for(let k of[-1,1])for(let V of[-2,0,2.2])o.add(K.cylinder,f+k*1,.45,g+V,.45,.3,.45,"#2f3331",0,0,Math.PI/2);i.solid(t,f,1.1,g+.2,2,2.2,6.4,{kind:"car",climbable:!0});for(let k=0;k<6;k++)o.add(K.cone,c-6+k*2.4,.4,u-7,.3,.7,.3,k%2?"#e9c04b":"#2f3331");Vt(t,c+2,u-5,0,"worker"),Vt(t,d+1.5,h+1,-Math.PI/2,"driver"),o.cyl(e+26,3,n+11,.06,6,"#e9e3d2"),i.cylinderSolid(t,e+26,0,n+11,.07,6,{kind:"pole",walkable:!1}),o.add(K.cone,e+27.1,5.9,n+11,.3,1.6,.3,"#f29b4b",0,0,-Math.PI/2-.25),o.add(K.cone,e+27.6,5.75,n+11,.2,.8,.2,"#e9e3d2",0,0,-Math.PI/2-.25);for(let k=-28;k<=28;k+=2)o.box(e+k,.7,n+12.5,.06,1.4,.06,"#8a9893");o.box(e,1.35,n+12.5,56,.05,.04,"#8a9893"),o.box(e,.8,n+12.5,56,.05,.04,"#8a9893"),i.solid(t,e,.7,n+12.5,56,1.4,.08,{kind:"rail",climbable:!1});for(let k of[e-6,e+6])o.box(k,.5,n+12.5,1.6,1,.06,"#e9c04b");let x=e-4,p=n-16,m=30,b=12,_=4.6,y=.42,S=.32,w="#e9e3d2";o.box(x,.18,p,m+.4,.45,b+.4,"#b8b6a0"),o.box(x,y-.05,p,m-.1,.1,b-.1,"#cfc8b4"),i.solid(t,x,y/2,p,m,y,b,{climbable:!1,kind:"floor"});let T=gd(i,t,x,p,m,b,0,_,S,{side:0,u:-6,width:2.6,height:3},w);gd(i,t,x,p,m,b,_,_+.3,S,null,"#5f6b66"),o.box(x,_+.15,p,m,.3,b,"#5f6b66"),i.solid(t,x,_+.15,p,m,.3,b,{kind:"roof",climbable:!1});for(let k=-12;k<=12;k+=3)o.box(x+k,2.6,p+b/2+.02,2.4,2.4,.06,"#a9c3c9"),o.box(x+k,2.6,p+b/2+.05,2.5,2.5,.03,"#5f6b66");for(let k of[-1,1])o.box(x-6+k*1.4,1.5,p+b/2,.12,3,.12,"#5f6b66");o.box(x-6,3.08,p+b/2,3,.16,.2,"#5f6b66"),o.box(x-6,3.4,p+b/2+1.6,6,.16,3.4,"#5f6b66"),i.solid(t,x-6,3.4,p+b/2+1.6,6,.16,3.4,{kind:"awning",climbable:!1});for(let k of[-1,1])o.box(x-6+k*2.8,1.7,p+b/2+3.1,.14,3.4,.14,"#5f6b66"),i.solid(t,x-6+k*2.8,1.7,p+b/2+3.1,.14,3.4,.14,{kind:"post"});Ns(i,t,x+4,_+1.1,p+b/2+.1,9,1.2,0,"#4f7f96"),o.box(x+4,_+1.1,p+b/2+.2,7,.5,.02,"#f3ead6");let A=x-8,M=p-b/2+1.6;o.box(A,y+.55,M,7,1.1,1,"#4f7f96"),o.box(A,y+1.12,M,7.1,.06,1.1,"#e3dcc6"),i.solid(t,A,y+.58,M,7.1,1.18,1.1,{climbable:!1,kind:"counter"});for(let k=0;k<3;k++)o.box(A-2.4+k*2.4,y+1.4,M,.5,.4,.05,"#2f3331"),o.box(A-2.4+k*2.4,y+1.4,M+.03,.4,.3,.01,"#a9c3c9"),Vt(t,A-2.4+k*2.4,M-.9,0,"suit",y);o.box(A+3.4,y+.45,M+1.4,1.2,.1,.8,"#8a9893"),o.box(A+3.4,y+.25,M+1.4,1.2,.06,.8,"#3f4a46"),o.box(x+3,y+3.2,p-b/2+S+.1,6,1.5,.1,"#2f3331");for(let k=0;k<5;k++)o.box(x+1,y+3.7-k*.28,p-b/2+S+.16,1.6,.14,.02,"#e9c04b"),o.box(x+4,y+3.7-k*.28,p-b/2+S+.16,2.4,.14,.02,k===2?"#d9544f":"#f3ead6");for(let k=0;k<3;k++)for(let V=0;V<6;V++){let U=x-1+V*1.1,H=p+1.5+k*2.2;if(o.box(U,y+.42,H,.9,.08,.6,"#5f6b66"),o.box(U,y+.75,H-.25,.9,.6,.08,"#5f6b66"),V===0){o.box(U+2.75,y+.2,H,6.5,.1,.1,"#8a9893");for(let Z of[-.4,2.3,5.9])o.box(U+Z,y+.1,H,.08,.2,.5,"#8a9893")}i.solid(t,x+1.75,y+.3,H,6.6,.6,.7,{climbable:!1,kind:"seat"})}Vt(t,x+.1,p+1.6,Math.PI,"parent",y,"sit"),Vt(t,x+1.2,p+1.6,Math.PI,"kid",y,"sit"),Vt(t,x+3.4,p+3.8,Math.PI,"grandma",y,"sit"),Vt(t,x-4,p+2.5,.6,"suit",y);for(let k=0;k<4;k++){let V=x+8+k%2*.8,U=p+2+Math.floor(k/2)*1.2;o.box(V,y+.4,U,.5,.8,.35,["#c9524a","#4f7f96","#6f6252","#e9c04b"][k]),o.box(V,y+.85,U,.2,.12,.05,"#2f3331")}let v=x+m/2-2.6,E=p+2;o.box(v,y+.5,E,1,1,4,"#6d5a44"),o.box(v,y+1.02,E,1.2,.08,4.2,"#e3dcc6"),i.solid(t,v,y+.53,E,1.2,1.06,4.2,{climbable:!1,kind:"counter"}),o.box(v,y+1.35,E-1.2,.6,.55,.7,"#8a9893"),o.cyl(v,y+1.2,E+.8,.3,.04,"#f1e8d2"),o.cyl(v,y+1.3,E+.8,.24,.14,"#e39a6e"),Vt(t,v+1.1,E,-Math.PI/2,"barista",y);for(let k=0;k<3;k++){let V=v-2.2,U=E-3+k*2.2;o.cyl(V,y+.74,U,.5,.06,"#e3dcc6"),o.cyl(V,y+.36,U,.06,.72,"#4a4f4c"),i.cylinderSolid(t,V,y,U,.5,.78,{climbable:!1,kind:"table"})}for(let k=0;k<4;k++)o.beam([x-10+k*7,_,p],[x-10+k*7,y+3.4,p],.015,"#4a4f4c"),o.add(K.cone,x-10+k*7,y+3.3,p,.5,.4,.5,"#f1e8d2");o.box(x,y+.02,p+.2,12,.02,1.6,"#4f7f96");let I=x+9,P=p-b/2+S+.5;o.box(I,y+1.1,P,1.6,2.2,.3,"#8a9893"),o.box(I,y+2.3,P,1.7,.1,.4,"#2f3331"),o.box(I,y+1.1,P+.17,1.2,1.8,.02,"#5f6b66"),o.box(x-6,y+2.9,p+b/2-S-.2,1.8,.4,.06,"#4f7f96"),t.landmarks.push({id:a,kind:"airport",x,z:p,radius:6,name:"the airport",inside:T,y});let N=e+22,G=n-20;o.add(K.tapered,N,7,G,1.6,14,1.6,"#cfc8b4"),i.cylinderSolid(t,N,0,G,1.6,14,{kind:"wall",climbable:!0});for(let k=0;k<12;k++){let V=k*.9,U=1.3+k*1.05;o.box(N+Math.cos(V)*1.7,U,G+Math.sin(V)*1.7,1.1,.12,.5,"#8a9893",-V),i.solid(t,N+Math.cos(V)*1.7,U,G+Math.sin(V)*1.7,.9,.12,.9,{kind:"ledge",climbable:!1})}o.cyl(N,14.3,G,2.6,.5,"#5f6b66"),i.cylinderSolid(t,N,14.05,G,2.6,.5,{kind:"deck",climbable:!1}),o.cyl(N,15.5,G,2.3,2,"#a9c3c9"),o.cyl(N,16.7,G,2.8,.3,"#5f6b66"),o.cyl(N,17.6,G,.05,1.6,"#8a9893"),o.ball(N,18.4,G,.15,.15,.15,"#d9544f"),t.extras.push({kind:"beacon",x:N,y:18.4,z:G}),i.cylinderSolid(t,N,14.55,G,2.3,2,{kind:"wall",climbable:!1}),t.landmarks.push({id:a+":tower",kind:"tower",x:N,z:G,radius:3,name:"the control tower",y:14.55});for(let k=0;k<4;k++)o.box(e+14+k*3.2,.09,n-24,.12,.02,5,"#e9e3d2");Ns(i,t,e-20,2.6,n-27,5,1,0,"#4f7f96");for(let k of[-1,1])o.cyl(e-20+k*2.3,1.1,n-27,.08,2.2,"#4f5a56");for(let k=-24;k<=24;k+=4)o.ball(e+k,.5,n-28.6,1.6,.8,1.1,"#6f8a52");i.lamp(t,e-26,n-26),i.lamp(t,e+26,n-26),Vt(t,e-14,n-24,0,"suit"),Vt(t,e-16,n-23,2.5,"jogger")}function B2(i,t,e,n,s,r,o,a){let l=t.batch,c=p=>p[Math.floor(o()*p.length)];for(let p=0;p<2;p++){let m=s.minX+3+p*4.5,b=s.minZ+1.3;l.box(m,r+.5,b,3,1,1.1,"#5f6b66"),l.box(m,r+1.1,b,3.1,.2,1.2,"#4a4f4c"),l.add(K.cylinder,m,r+1.45,b,.3,2.2,.3,"#8a9893",0,0,Math.PI/2),l.box(m-1.2,r+1.5,b,.5,.9,.9,"#4a4f4c"),l.cyl(m+1.3,r+1.45,b+.5,.18,.1,"#c9524a",Math.PI/2),i.solid(t,m,r+.75,b,3.1,1.5,1.2,{climbable:!0,kind:"machine"})}let u=s.maxX-3,d=s.minZ+1.6;l.box(u,r+.4,d,2,.8,1.6,"#4a4f4c");for(let p of[-1,1])l.box(u+p*.8,r+2.2,d,.3,3.6,.3,"#5f6b66");l.box(u,r+3.9,d,2.2,.5,1.2,"#5f6b66"),i.solid(t,u,r+.4,d,2,.8,1.6,{climbable:!0,kind:"machine"}),t.extras.push({kind:"piston",x:u,y:r+2.3,z:d});let h=s.minX+2.8,f=s.maxZ-1.1;l.box(h,r+.85,f,4.5,.1,.8,"#a78a62");for(let p of[-1,1])for(let m of[-1,1])l.box(h+p*2,r+.4,f+m*.3,.1,.8,.1,"#6d5a44");i.solid(t,h,r+.45,f,4.5,.9,.8,{climbable:!0,kind:"bench"});for(let p=0;p<5;p++)l.cyl(h-1.6+p*.7,r+1,f,.08,.2,c(["#c9524a","#8a9893","#e9c04b"]));l.box(h+1.5,r+1.02,f,.5,.25,.3,"#4a4f4c"),l.box(h,r+2,s.maxZ-.1,4.5,1.2,.05,"#cbbfa3");for(let p=0;p<8;p++)l.box(h-1.9+p*.55,r+1.9+p%3*.2,s.maxZ-.18,.18,.5,.08,"#4a4f4c");let g=s.maxX-2.2,x=s.maxZ-2;l.box(g,r+1.4,x,4,2.8,3.6,"#cbbfa3"),l.box(g,r+1.7,x-1.82,3,1.1,.05,"#a9c3c9"),l.box(g-2.02,r+1.7,x,.05,1.1,2.6,"#a9c3c9"),l.box(g,r+2.85,x,4.2,.1,3.8,"#4a4f4c"),i.solid(t,g,r+1.4,x,4,2.8,3.6,{climbable:!0,kind:"wall",buildingId:a}),l.box(g-2.4,r+1.4,x+1,.06,1,.5,"#f3ead6"),l.box(e,r+.02,n+1,6,.02,4,"#9a9284");for(let p=0;p<6;p++)l.cyl(e-2+p%3*2,r+.25,n+(p<3?0:2),.45,.5,"#8a9893");for(let p=0;p<4;p++)l.cyl(s.minX+1+p%2*.9,r+.5,n-1+Math.floor(p/2)*.9,.4,1,p%2?"#6d7f8a":"#c9524a");i.solid(t,s.minX+1.45,r+.5,n-.55,1.9,1,1.9,{climbable:!1,kind:"barrels"});for(let p=0;p<3;p++)i.crate(t,s.maxX-1-p%2*.9,r+.4+Math.floor(p/2)*.8,n-2,.8);t.extras.push({kind:"rollers",x:e-1,y:r+.88,z:n+3.6,count:8,spacing:.65}),l.box(e-1,r+.75,n+3.6,5.6,.12,1,"#4a4f4c");for(let p of[-2.3,0,2.3])for(let m of[-1,1])l.box(e-1+p,r+.35,n+3.6+m*.4,.12,.7,.12,"#4a4f4c");i.solid(t,e-1,r+.75,n+3.6,5.6,.14,1,{climbable:!1,kind:"belt"});for(let p=0;p<3;p++)l.beam([e-5+p*5,6.2,n],[e-5+p*5,r+4.2,n],.02,"#4a4f4c"),l.add(K.cone,e-5+p*5,r+4.1,n,.7,.5,.7,"#5f6b66"),l.ball(e-5+p*5,r+3.95,n,.12,.12,.12,"#f6ecc8");l.box(s.minX+.12,r+1.6,n+3,.04,.7,2.2,"#c9524a"),l.box(s.minX+.16,r+1.6,n+3,.02,.4,1.8,"#f3ead6"),Ce(t,s.minX+3,s.minZ+2.6,Math.PI,"worker",r),Ce(t,u,d+1.6,Math.PI,"worker",r),Ce(t,g-1,x,-Math.PI/2,"foreman",r,"sit"),Ce(t,h,f-.9,0,"uncle",r),t.landmarks.push({id:a+":in",kind:"worksfloor",x:e,z:n,radius:4,name:"the works floor",inside:s,y:r})}function z2(i,t,e,n,s,r,o,a,l){let c=t.batch,u=s.maxX-s.minX,d=s.maxZ-s.minZ,h=e,f=s.minZ+1.8;c.box(h,r+.55,f,4.2,1.1,.9,"#5f6b66"),c.box(h,r+1.12,f,4.3,.06,1,"#e3dcc6"),c.box(h,r+.6,f-.46,4,.3,.02,"#c9a35c"),i.solid(t,h,r+.58,f,4.3,1.18,1,{climbable:!1,kind:"counter"}),c.box(h+1.2,r+1.3,f,.5,.35,.05,"#2f3331"),c.cyl(h-1.2,r+1.25,f,.14,.25,"#6f9a4f"),Ce(t,h,f-1,0,"suit",r);for(let g of[-1,1]){let x=e+g*1.3,p=s.minZ+.3;c.box(x,r+1.15,p,1.2,2.3,.14,"#8a9893"),c.box(x,r+1.15,p+.08,.04,2.1,.02,"#4a4f4c"),c.box(x,r+2.4,p,1.4,.18,.22,"#4a4f4c")}c.box(e,r+1.1,s.minZ+.36,.14,.2,.04,"#e9c04b");for(let g of[-1,1]){let x=e+g*(u/2-1.3),p=n+1;c.box(x,r+.25,p,.9,.5,2.6,"#4f7f96"),c.box(x+g*.35,r+.65,p,.2,.4,2.6,"#4f7f96"),i.solid(t,x,r+.3,p,.9,.6,2.6,{climbable:!1,kind:"sofa"}),c.cyl(x-g*1.2,r+.36,p,.5,.06,"#e3dcc6"),c.cyl(x-g*1.2,r+.15,p,.08,.3,"#4a4f4c"),i.cylinderSolid(t,x-g*1.2,r,p,.5,.4,{climbable:!1,kind:"table"})}Ce(t,e-(u/2-1.3),n+1.6,Math.PI/2,"suit",r,"sit"),c.add(K.pot,s.minX+.9,r+.35,s.maxZ-.9,.45,.7,.45,"#5f6b66");for(let g=0;g<6;g++)c.box(s.minX+.9+Math.cos(g*1.1)*.2,r+1.3+g*.06,s.maxZ-.9+Math.sin(g*1.1)*.2,.16,.9,.05,"#5f7f4a",0,-g*1.1,Math.cos(g)*.5);c.box(s.maxX-.2,r+1.6,n-1,.05,1.6,1.1,"#2f3331");for(let g=0;g<7;g++)c.box(s.maxX-.24,r+2.25-g*.2,n-1,.02,.08,.8,g%2?"#e9e3d2":"#c9a35c");c.box(e,r+.015,s.minZ+d*.5,2.6,.03,d-1,"#8f5f4e"),c.cyl(e,r+.02,n+.5,1.3,.02,"#c9a35c");for(let g=-1;g<=1;g++)c.beam([e+g*3,r+3,n],[e+g*3,r+2.5,n],.015,"#4a4f4c"),c.ball(e+g*3,r+2.4,n,.22,.22,.22,"#f6ecc8");t.landmarks.push({id:a+":in",kind:"lobby",x:e,z:n,radius:4,name:"the lobby",inside:s,y:r})}function H2(i,t,e,n,s,r,o,a){let l=t.batch,c=h=>h[Math.floor(o()*h.length)];for(let h=0;h<3;h++){let f=s.minZ+2.2+h*3.6,g=s.maxX-s.minX-5;for(let x of[1.2,2.6,4])l.box(e-1.5,r+x,f,g,.1,1.2,"#d9a53a");for(let x=0;x<=4;x++)for(let p of[-1,1])l.box(e-1.5-g/2+x*g/4,r+2.2,f+p*.58,.1,4.4,.1,"#4f7f96");for(let x=0;x<7;x++)for(let p of[0,1.2,2.6])o()>.3&&i.crate(t,e-1.5-g/2+.6+x*(g-1.2)/6,r+p+.42+(p?.05:0),f+(o()-.5)*.3,.7+o()*.2);i.solid(t,e-1.5,r+2.25,f,g,4.5,1.3,{climbable:!0,kind:"shelf"})}for(let h=0;h<3;h++){let f=s.maxX-1.2,g=s.minZ+1.2+h*1.6,x=.3+h%2*.4;l.box(f,r+x/2,g,1.3,x,1.3,h%2?"#b89a70":"#c7a97b"),i.solid(t,f,r+x/2,g,1.3,x,1.3,{climbable:!1,kind:"pallet"})}let u=s.minX+1.4,d=s.maxZ-1.2;l.box(u,r+.74,d,1.6,.06,.8,"#a78a62");for(let h of[-.7,.7])for(let f of[-.3,.3])l.box(u+h,r+.36,d+f,.07,.72,.07,"#4a4f4c");i.solid(t,u,r+.4,d,1.6,.8,.8,{climbable:!1,kind:"desk"}),l.box(u,r+.95,d,.4,.3,.05,"#2f3331"),l.box(u-.5,r+.78,d,.3,.04,.4,"#f3ead6"),Ce(t,u,d-.9,Math.PI,"worker",r),Ce(t,e+2,s.minZ+4,-Math.PI/2,"worker",r),l.box(e,r+.015,n,2.4,.03,s.maxZ-s.minZ-1,"#e9c04b");for(let h=0;h<6;h++)l.box(e+(h%2?1.1:-1.1),r+.02,s.minZ+1+h*2,.2,.02,1,"#2f3331");for(let h=0;h<3;h++)l.beam([e-4+h*4,5,n],[e-4+h*4,r+4.4,n],.02,"#4a4f4c"),l.add(K.cone,e-4+h*4,r+4.3,n,.7,.5,.7,"#5f6b66"),l.ball(e-4+h*4,r+4.15,n,.12,.12,.12,"#f6ecc8");t.landmarks.push({id:a+":in",kind:"depotfloor",x:e,z:n,radius:4,name:"inside the depot",inside:s,y:r})}var It=72,Co=Object.freeze({offsets:[0,28.45,43.55],pavement:[28.45,43.55]}),To=Math.PI*2,V2=new D(0,1,0),pp=new le,yd=new He,Br=new D,mp=new D,cl=new D,hl=new Ft;function Io(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function hi(i,t,e=0,n=0){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^e^Math.imul(n,1274126177);return s=Math.imul(s^s>>>13,1274126177),(s^s>>>16)>>>0}function as(i){let t=i>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ci=new Ve(1,1,1),Ao=new cn(1,1,1,10),Fs=new cn(.72,1,1,9),os=new hn(1,1,8),Sd=new Ps(1,1),wd=new Ps(1,1),vd=new cn(1,.72,1,9),ki=new is(1,.12,5,16),K=Object.freeze({box:ci,cylinder:Ao,tapered:Fs,cone:os,sphere:Sd,softSphere:wd,pot:vd,torus:ki}),Cn=class{constructor(){this.p=[],this.n=[],this.c=[],this.i=[],this.count=0,this.items=[]}add(t,e,n,s,r,o,a,l,c=0,u=0,d=0){this.items.push({geometry:t,x:e,y:n,z:s,sx:r,sy:o,sz:a,rx:c,ry:u,rz:d}),Br.set(e,n,s),mp.set(r,o,a),yd.setFromEuler(new Xe(c,u,d)),pp.compose(Br,yd,mp),hl.set(l);let h=t.attributes.position,f=t.attributes.normal,g=this.count;for(let x=0;x<h.count;x++)Br.fromBufferAttribute(h,x).applyMatrix4(pp),this.p.push(Br.x,Br.y,Br.z),cl.set(f.getX(x)/r,f.getY(x)/o,f.getZ(x)/a).applyQuaternion(yd).normalize(),this.n.push(cl.x,cl.y,cl.z),this.c.push(hl.r,hl.g,hl.b);if(t.index)for(let x=0;x<t.index.count;x++)this.i.push(t.index.getX(x)+g);else for(let x=0;x<h.count;x++)this.i.push(x+g);return this.count+=h.count,this}box(t,e,n,s,r,o,a,l=0){return this.add(ci,t,e,n,s,r,o,a,0,l)}cyl(t,e,n,s,r,o,a=0,l=0){return this.add(Ao,t,e,n,s,r,s,o,a,0,l)}ball(t,e,n,s,r,o,a,l=!1){return this.add(l?wd:Sd,t,e,n,s,r,o,a)}beam(t,e,n,s){let r=new D(...t),o=new D(...e),a=o.clone().sub(r),l=new He().setFromUnitVectors(V2,a.clone().normalize()),c=new Xe().setFromQuaternion(l);return this.add(Ao,...r.add(o).multiplyScalar(.5).toArray(),n,a.length(),n,s,c.x,c.y,c.z)}geometry(){let t=new we;return t.setAttribute("position",new Kt(this.p,3)),t.setAttribute("normal",new Kt(this.n,3)),t.setAttribute("color",new Kt(this.c,3)),t.setIndex(this.i),t.computeBoundingSphere(),t.computeBoundingBox(),t}},Un={whiskerfield:{id:"whiskerfield",name:"Whiskerfield",code:"WF",line:"Home. The kettle is probably on.",sky:"#c9d4c8",ground:"#93a86f",grass:["#93a86f","#9aae75","#8fa46a","#a0b27b"],lawn:"#8fa66b",road:"#b9ae96",pavement:"#cfc4ab",trees:"round",snow:!1,walls:["#d6c4a6","#c9b79b","#b9c0ae","#aeb9b2","#d8cbb2","#c4b49a","#b7bfae","#cbb9a4","#c2c7b6","#d2c1a4"],roofs:["#8a5a44","#96604a","#7b5140","#5c6b66","#65756d","#6f6252","#8a6a4c","#5a6870"],leaves:["#6f8a52","#7d965c","#8a9f66","#62804f","#93a26b","#6b8757"],flowers:["#d9b76a","#d69a86","#e6d9b4","#b98a9a","#d9a85e"],leaf:"#e8d59a",first:["Clover","Willow","Honey","Fern","Moss","Clementine","Juniper","Lavender","Pebble","Marigold","Chestnut","Meadow","Rosemary","Hazel","Poppy","Bramble"],last:["Quarter","Gardens","Lane","Hill","Corner","Heights","Common","Terrace"]},sunmarch:{id:"sunmarch",name:"Sunmarch",code:"SM",line:"Sunmarch. Warm stone, warmer roofs. Find some shade.",sky:"#dfe6e3",ground:"#bdae74",grass:["#bdae74","#c4b57a","#b7a76e","#c9ba80"],lawn:"#b3a86c",road:"#cbbd9f",pavement:"#dfd3b6",trees:"palm",snow:!1,walls:["#e8c9a0","#f0d9b5","#d9a77a","#e6b58a","#f2e2c4","#cf9b76","#e9d2a9","#dcb48e","#f4e4c8","#d7a583"],roofs:["#b4553c","#c4654a","#a8503a","#bd6147","#9d4a36","#c86e52","#ad5b43","#b85f45"],leaves:["#5f7f4a","#6e8a4f","#7f9a56","#557a44","#8ea563","#64854c"],flowers:["#e8578a","#f29b4b","#f4e37a","#d94f6b","#f7b267"],leaf:"#f1c27a",first:["Lemon","Olive","Almond","Saffron","Fig","Cicada","Terracotta","Amber","Salt","Orange","Mimosa","Pomegranate","Dune","Siesta","Oleander","Sage"],last:["Piazza","Walk","Steps","Court","Orchard","Rise","Yard","Terrace"]},norrholm:{id:"norrholm",name:"Norrholm",code:"NH",line:"Norrholm. Snow on everything. Mind your paws.",sky:"#d9e0e6",ground:"#e9edf1",grass:["#e9edf1","#eef1f4","#e4e9ee","#f0f3f6"],lawn:"#e6eaee",road:"#a9adb2",pavement:"#c3c7cb",trees:"pine",snow:!0,walls:["#8a3f35","#9c4a3c","#5d4a3a","#6e5542","#d9d3c3","#4f5d6b","#7a3a32","#c9c1ad","#3f4f5a","#8b6a50"],roofs:["#eef1f4","#e8ecf0","#f2f4f6","#e4e8ec","#edf0f3","#e9edf1","#f0f3f6","#e6eaee"],leaves:["#3f6b4a","#466f4e","#3a6245","#4c7553","#427050","#3b6647"],flowers:["#ffffff","#e7ecf0","#f3f5f7","#dfe6ea","#eef1f4"],leaf:"#ffffff",first:["Birch","Elk","Frost","Lantern","Pine","Ember","Ice","Aurora","Sled","Wool","Candle","Harbour","Reindeer","Lingon","Cinnamon","Fjord"],last:["Gate","Hollow","Way","Hill","Square","Ridge","Quay","Row"]},hanamura:{id:"hanamura",name:"Hanamura",code:"HM",line:"Hanamura. Blossom on the wind and tiles the colour of rain.",sky:"#d8dfe0",ground:"#8fa87a",grass:["#8fa87a","#97ae80","#89a274","#9cb285"],lawn:"#8aa676",road:"#b5b1a3",pavement:"#cfcabb",trees:"blossom",snow:!1,walls:["#efe6d2","#e9dfc9","#f3ead6","#e4d9c0","#d8cbb0","#eee4ce","#e6dcc6","#f0e7d4","#dfd4ba","#ece2cc"],roofs:["#4b5058","#555b63","#3f454d","#5a6068","#484e56","#60666e","#43494f","#515760"],leaves:["#f0b7c8","#f5c6d4","#6f8a52","#e9a7bb","#7d965c","#f7cfdb"],flowers:["#f6c9d6","#ffffff","#f1b4c6","#fbe3ea","#e99ab3"],leaf:"#f6c9d6",first:["Plum","Crane","Maple","Koi","Moon","Bamboo","Paper","Tea","Heron","Iris","Lotus","Pine","Mist","Lantern","Willow","Stone"],last:["Street","Gardens","Bridge","Steps","Crossing","Lane","Terrace","Ward"]}},xp=Object.keys(Un),Ee=Un.whiskerfield,Md=Ee.walls,Di=Ee.roofs,yn=Ee.leaves,jn=Ee.flowers;function G2(i){return Ee=Un[i]||Un.whiskerfield,Md=Ee.walls,Di=Ee.roofs,yn=Ee.leaves,jn=Ee.flowers,Ee}function fl(i,t,e){let n=hi(Math.floor(i/2),Math.floor(t/2),e,71);return`${Ee.first[n%Ee.first.length]} ${Ee.last[(n>>>8)%Ee.last.length]}`}var dl=(i,t)=>(i%t+t)%t,Ro=i=>dl(i,6)===1,Po=i=>i*It-9,gp=(i,t)=>dl(i,6)===2&&dl(t,6)===0,_d=(i,t)=>Ro(i)&&dl(t,2)===0,ul=class{constructor(t,e,n="whiskerfield"){this.scene=t,this.seedText=e,this.country=G2(n),this.seed=Io(n==="whiskerfield"?e:e+"~"+n),this.airports=[],this.chunks=new Map,this.colliders=[],this.buildings=[],this.parks=[],this.water=[],this.jobs=[],this.grounds=[],this.landmarks=[],this.spatial=new Map,this.material=new Ge({vertexColors:!0,roughness:.98,metalness:0,flatShading:!0}),this.center="",this.radius=2,this.pending=[]}update(t,e=1){let n=Math.floor((t.x+It/2)/It),s=Math.floor((t.z+It/2)/It),r=`${n},${s}`;if(r!==this.center){this.center=r,this.pending=[];for(let a=n-this.radius;a<=n+this.radius;a++)for(let l=s-this.radius;l<=s+this.radius;l++)this.chunks.has(`${a},${l}`)||this.pending.push({x:a,z:l,d:(a-n)**2+(l-s)**2});this.pending.sort((a,l)=>a.d-l.d);for(let[a,l]of this.chunks)(Math.abs(l.cx-n)>this.radius+1||Math.abs(l.cz-s)>this.radius+1)&&this.removeChunk(a);this.refreshColliders()}let o=0;for(;this.pending.length&&o<e;){let{x:a,z:l}=this.pending.shift();this.chunks.has(`${a},${l}`)||(this.createChunk(a,l),o++)}return o&&this.refreshColliders(),o}refreshColliders(){this.colliders=[],this.buildings=[],this.parks=[],this.water=[],this.jobs=[],this.grounds=[],this.landmarks=[],this.airports=[];for(let e of this.chunks.values())this.colliders.push(...e.colliders),this.buildings.push(...e.buildings),this.parks.push(...e.parks),this.water.push(...e.water),this.jobs.push(...e.jobs),this.grounds.push(...e.grounds),this.landmarks.push(...e.landmarks),e.airports&&this.airports.push(...e.airports);let t=new Map;for(let e of this.colliders)for(let n=Math.floor(e.minX/8);n<=Math.floor(e.maxX/8);n++)for(let s=Math.floor(e.minZ/8);s<=Math.floor(e.maxZ/8);s++){let r=n+","+s,o=t.get(r);o||t.set(r,o=[]),o.push(e)}this.spatial=t}removeChunk(t){let e=this.chunks.get(t);e&&(this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.group&&this.scene.remove(e.group),this.chunks.delete(t))}dispose(){for(let t of this.chunks.keys())this.removeChunk(t);this.material.dispose()}solid(t,e,n,s,r,o,a,l={}){let c={shape:"box",minX:e-r/2,maxX:e+r/2,minY:n-o/2,maxY:n+o/2,minZ:s-a/2,maxZ:s+a/2,climbable:!0,...l};return t.colliders.push(c),c}cylinderSolid(t,e,n,s,r,o,a={}){let l={shape:"cylinder",x:e,z:s,r,minX:e-r,maxX:e+r,minY:n,maxY:n+o,minZ:s-r,maxZ:s+r,climbable:!1,...a};return t.colliders.push(l),l}ellipsoidSolid(t,e,n,s,r,o,a,l={}){let c={shape:"ellipsoid",x:e,y:n,z:s,rx:r,ry:o,rz:a,minX:e-r,maxX:e+r,minY:n-o,maxY:n+o,minZ:s-a,maxZ:s+a,climbable:!0,...l};return t.colliders.push(c),c}autoColliders(t,e){let n=t.colliders.filter(l=>l.shape!=="roof"),s=.27,r=new Xe,o=new He,a=new D;for(let l of e){let{geometry:c,x:u,y:d,z:h,sx:f,sy:g,sz:x,rx:p,ry:m,rz:b}=l,_=c===Sd||c===wd,y=c===Ao||c===Fs||c===vd||c===os;if(!_&&!y&&c!==ci&&c!==ki)continue;let S=_||y||c===ki?f*(c===ki?1.12:1):f/2,w=_?g:c===ki?g*.12:g/2,T=_||y||c===ki?x*(c===ki?1.12:1):x/2,A=Math.abs(p)<.05&&Math.abs(b)<.05;if(Math.max(S,T)*2<.05||_&&Math.max(f,x)<.25||c===os&&f<.6||!A&&y&&f<.15||!A&&c===ci&&[f,g,x].sort((H,Z)=>H-Z)[1]<.1)continue;let M,v,E,I,P,N;if(A&&Math.abs(m)<.02)M=u-S,v=u+S,E=d-w,I=d+w,P=h-T,N=h+T;else{o.setFromEuler(r.set(p,m,b)),M=E=P=1/0,v=I=N=-1/0;for(let H=0;H<8;H++)a.set(H&1?S:-S,H&2?w:-w,H&4?T:-T).applyQuaternion(o),M=Math.min(M,u+a.x),v=Math.max(v,u+a.x),E=Math.min(E,d+a.y),I=Math.max(I,d+a.y),P=Math.min(P,h+a.z),N=Math.max(N,h+a.z)}if(I<s||I-E<.05||v-M>20||N-P>20)continue;let G=!1;for(let H of n){let Z=H.auto?.02:.3;if(M>=H.minX-Z&&v<=H.maxX+Z&&E>=H.minY-Z&&I<=H.maxY+Math.min(Z,.12)&&P>=H.minZ-Z&&N<=H.maxZ+Z){G=!0;break}}if(G)continue;let k,V=n.find(H=>H.tree&&M<H.maxX&&v>H.minX&&E<H.maxY&&I>H.minY&&P<H.maxZ&&N>H.minZ)?.tree,U=V?{kind:"tree",tree:V,auto:!0}:{kind:"auto",auto:!0};c===os&&A?k=this.ellipsoidSolid(t,u,d-w+g*.25,h,f,g*.75,x,{...U,climbable:!!V}):_&&A?k=this.ellipsoidSolid(t,u,d,h,f,g,x,{...U,climbable:!!V||d+g>1.1}):y&&A?k=this.cylinderSolid(t,u,d-w,h,Math.max(f,x),w*2,{...U,climbable:Math.max(f,x)>.3}):t.colliders.push(k={shape:"box",minX:M,maxX:v,minY:E,maxY:I,minZ:P,maxZ:N,climbable:I-E>.4,...U}),V&&k.shape==="ellipsoid"&&V.canopies.push(k),n.push(k)}}createChunk(t,e){let n=`${t},${e}`,s=as(hi(t,e,this.seed)),r={cx:t,cz:e,key:n,batch:new Cn,colliders:[],buildings:[],parks:[],water:[],mesh:null,jobs:[],extras:[],grounds:[],landmarks:[],smoke:[],group:null,ticks:[]},o=t*It,a=e*It,l=Ee.grass[hi(t,e,this.seed,4)%4];r.batch.box(o,-.2,a,It+.05,.4,It+.05,l);let c=Ee.road,u=Ee.pavement;for(let f of[-1,1]){r.batch.box(o+f*32.5,.005,a,7,.08,It,c),r.batch.box(o,.006,a+f*32.5,It,.08,7,c);for(let g of[-1,1])r.batch.box(o+f*32.5+g*4.05,.055,a,1.05,.15,It-9,u),r.batch.box(o,.056,a+f*32.5+g*4.05,It-9,.15,1.05,u)}r.batch.box(o,.015,a,3,.07,58,"#b3a88f"),r.batch.box(o,.016,a,58,.07,3,"#b3a88f"),this.cars(r,s);for(let f=0;f<100;f++){let g=s()*68-34,x=(s()-.5)*5.4,p=f%2?o+32.5+x:o+g,m=f%2?a+g:a+32.5+x;r.batch.box(p,.052,m,.45+s()*.6,.018,.3+s()*.35,s()>.5?"#aaa08a":"#c4b99f",(s()-.5)*.2)}let d=gp(t,e);Ro(t)&&hp(this,r,Po(t),a,s,_d(t,e)),d&&fp(this,r,o,a,s,n);for(let f=0;f<4&&!d;f++){let g=f%2?16.5:-16.5,x=f<2?-16.5:16.5,p=o+g,m=a+x,b=as(hi(t*4+f,e,this.seed,901)),_=this.lotKind(t,e,f,b),y=`${n}:${f}`;_==="park"?this.makePark(r,p,m,b,f):_==="market"?ip(this,r,p,m,b,y):_==="works"?sp(this,r,p,m,b,y):_==="depot"?ap(this,r,p,m,b,y):_==="tower"?bd(this,r,p,m,b,y,1):_==="spire"?bd(this,r,p,m,b,y,1.6):_==="play"?rp(this,r,p,m,b,y):_==="station"?lp(this,r,p,m,b,y):_==="rail"?dp(this,r,p,m,b,y,_d(t,e)?"bridge":hi(t,e,this.seed,33)%2?"yard":"crossing"):_==="allotments"?cp(this,r,p,m,b,y):_==="cafe"||_==="shop"||_==="home"?op(this,r,p,m,b,y,_):this.makeBuilding(r,p,m,b,y,t===0&&e===0?f:-1)}for(let f of[-1,1])d||(this.tree(r,o+f*27.4,a+5,s,.65),this.tree(r,o-7,a+f*27.4,s,.65)),this.lamp(r,o+f*27.2,a-27.2),s()>.35&&!d&&this.bench(r,o+f*27,a+14,f*Math.PI/2);t===0&&e===0?this.makeSpawn(r,s):s()>.65&&!Ee.snow&&!d&&this.bunting(r,o-12,a,o+12,a,6.5),this.autoColliders(r,r.batch.items),this.buildExtras(r);let h=new xt(r.batch.geometry(),this.material);h.castShadow=!0,h.receiveShadow=!0,h.name=`neighborhood-${n}`,r.mesh=h,r.batch=null,this.chunks.set(n,r),this.scene.add(h)}theme(t,e){if(t===0&&e===0)return"square";if(gp(t,e))return"airport";let n=hi(t,e,this.seed,77)%100,s=n<34?"lanes":n<49?"market":n<62?"works":n<76?"towers":n<88?"play":"allot";return Ro(t)?"rail-"+s:s}lotKind(t,e,n,s){let r=this.theme(t,e),o=hi(t*4+n,e,this.seed,905)%100;if(r==="airport")return"airport";if(r.startsWith("rail-")){if(n===0)return _d(t,e)?"station":"rail";if(n===2)return"rail";r=r.slice(5),(r==="towers"||r==="works")&&(r="lanes")}return r==="square"?["building","market","cafe","park"][n]:r==="market"?["market","cafe","shop",o<50?"park":"home"][n]:r==="works"?["works","depot",o<40?"park":"building","building"][n]:r==="towers"?["tower","spire","tower",o<60?"park":"building"][n]:r==="play"?["play","park",o<50?"home":"building","building"][n]:r==="allot"?["allotments","home","park","building"][n]:o<20?"park":o<30?"home":o<34?"cafe":"building"}buildExtras(t){if(!t.extras.length&&!t.smoke.length)return;let e=new Zt;e.name=`extras-${t.key}`,t.group=e,this.scene.add(e);let n=s=>new Ge({color:s,roughness:.85,flatShading:!0});for(let s of t.extras)if(s.kind==="rollers"){let r=n("#9aa4a0"),o=new cn(.11,.11,.9,8);o.rotateZ(Math.PI/2),o.rotateY(Math.PI/2);let a=[];for(let c=0;c<s.count;c++){let u=new xt(o,r);u.position.set(s.x-(s.count-1)/2*s.spacing+c*s.spacing,s.y,s.z),e.add(u),a.push(u)}let l=new xt(new Ve(.7,.5,.6),n("#c7a97b"));e.add(l),t.ticks.push(c=>{for(let u of a)u.rotation.x=c*3;l.position.set(s.x-3.2+c*.9%6.4,s.y+.36,s.z)})}else if(s.kind==="piston"){let r=new xt(new Ve(1.4,.5,1),n("#8a9893")),o=new xt(new cn(.14,.14,1.6,8),n("#5f6b66"));e.add(r),e.add(o),t.ticks.push(a=>{let l=(Math.sin(a*2.2)+1)/2;r.position.set(s.x,s.y-.9+l*.8,s.z),o.position.set(s.x,s.y+.2+l*.8,s.z)})}else if(s.kind==="cog"){let r=new Zt;r.position.set(s.x,s.y,s.z),r.add(new xt(new is(s.r,.14,6,14),n("#5f6b66")));for(let o=0;o<8;o++){let a=new xt(new Ve(.3,.3,.2),n("#5f6b66")),l=o/8*Math.PI*2;a.position.set(Math.cos(l)*(s.r+.15),Math.sin(l)*(s.r+.15),0),a.rotation.z=l,r.add(a)}for(let o=0;o<3;o++){let a=new xt(new Ve(s.r*2,.12,.1),n("#5f6b66"));a.rotation.z=o/3*Math.PI,r.add(a)}r.rotation.y=Math.PI/2,e.add(r),t.ticks.push(o=>{r.rotation.x=o*.6})}else if(s.kind==="beacon"){let r=new Ge({color:"#ff5a4a",emissive:"#ff3b2b",emissiveIntensity:1.2}),o=new xt(new De(.22,8,6),r);o.position.set(s.x,s.y,s.z),e.add(o),t.ticks.push(a=>{let l=.6+.4*Math.sin(a*3);o.scale.setScalar(l),r.emissiveIntensity=.4+l})}else if(s.kind==="swing"){let r=new Zt;r.position.set(s.x,s.y,s.z);let o=new xt(new cn(.025,.025,1.2,5),n("#8d8470"));o.position.y=-.6,r.add(o);let a=new xt(new is(.4,.12,6,14),n("#2f3331"));a.position.y=-1.4,a.rotation.x=Math.PI/2,r.add(a),e.add(r),t.ticks.push(l=>{r.rotation.z=Math.sin(l*1.4)*.32})}for(let s of t.smoke){let r=new Ge({color:"#dcd8d0",transparent:!0,opacity:.5,roughness:1,depthWrite:!1}),o=[];for(let a=0;a<7;a++){let l=new xt(K.softSphere,r);e.add(l),o.push(l)}t.ticks.push(a=>{o.forEach((l,c)=>{let u=(a*.18+c/7)%1;l.position.set(s.x+Math.sin(c*2.1+a*.3)*(.3+u*1.5)+u*1.8,s.y+u*7.5,s.z+Math.cos(c*1.7)*.3+u*.8),l.scale.setScalar(.55+u*1.9)})})}}animate(t){for(let e of this.chunks.values())for(let n of e.ticks)n(t)}makeBuilding(t,e,n,s,r,o=-1){let a=t.batch,l=12.5+s()*7.5,c=12+s()*7.5,u=2+Math.floor(s()*3),d=2.65+s()*.55,h=u*d+.4,f=Md[Math.floor(s()*Md.length)],g=Di[Math.floor(s()*Di.length)],x=Math.floor(s()*4);o===0&&(l=15+s()*3,c=13+s()*3,u=2+Math.floor(s()*2),h=u*3+.3,f=["#c9a684","#d2b795","#c4a083","#d6c1a0"][Math.floor(s()*4)],g=Di[Math.floor(s()*3)],x=0),o===1&&(l=14+s()*4,c=13+s()*3,h=6.5+s()*1.5,u=2,f=["#d8cbb2","#d2c5aa","#cbcbb4","#d6c4a4"][Math.floor(s()*4)],g=Di[3+Math.floor(s()*3)],x=2),o===2&&(l=14+s()*3,c=14+s()*3,h=9+s()*2,u=3,f=["#aeb9b2","#b3c0bc","#b9c0ae","#a8b7ab"][Math.floor(s()*4)],g=Di[Math.floor(s()*Di.length)],x=3),e+=(s()-.5)*1.6,n+=(s()-.5)*1.6;let p=s()>.5,m=x===0?2.4+s()*2:x===1?2.5+s()*1.7:0,b={id:r,x:e,z:n,w:l,d:c,h,roofType:x,roofRise:m,ridgeX:p,wall:f,roofColor:g,cx:t.cx,cz:t.cz,kind:"roof"};t.buildings.push(b);let _=o>=0?o===2?1:0:Math.floor(s()*4),y=(s()-.5)*l*.28,S=1.5,w=2.3,T=.42,A=.32,M=this.solid(t,e,(d+h)/2,n,l,h-d,c,{buildingId:r,building:b,kind:"wall"});b.body=M,x<2&&t.colliders.push({shape:"roof",building:b,kind:"roof",climbable:!1,minX:e-l/2-.55,maxX:e+l/2+.55,minY:h,maxY:h+m,minZ:n-c/2-.55,maxZ:n+c/2+.55}),a.box(e,.18,n,l+.35,.45,c+.35,"#b8b6a0"),a.box(e,(d+h)/2,n,l,h-d,c,f);let v=pd[Math.floor(s()*pd.length)];a.box(e,T-.05,n,l-.1,.1,c-.1,v),this.solid(t,e,T/2,n,l,T,c,{climbable:!1,kind:"floor",buildingId:r}),a.box(e,d-.08,n,l-.2,.16,c-.2,"#efe8d6");let E=Or(this,t,e,n,l,c,0,d,A,{side:_,u:y,width:S,height:w},f,{buildingId:r,building:b});for(let U of[0,1,2,3]){let H=U*Math.PI/2,Z=Math.round(Math.sin(H)),it=Math.round(Math.cos(H));a.box(e+Z*(U%2?l/2-A-.02:0),T+.06,n+it*(U%2?0:c/2-A-.02),U%2?.05:l-2*A,.12,U%2?c-2*A:.05,"#efe8d6")}let I=np(this,t,E,T,d,s,_,y,f,r,o===0?"bakery":null);t.landmarks.push({id:r+":in",kind:"house",x:e,z:n,radius:3,name:`${md[I[0].kit]} and ${md[I[1].kit]}`,inside:E,y:T,kits:I.map(U=>U.kit)}),a.box(e,h-.12,n,l+.38,.25,c+.38,"#e8dfc4");let P="#ede5cd",N="#647e78",G=g;for(let U=1;U<u;U++)s()>.3&&a.box(e,U*d+.25,n,l+.1,.11,c+.1,"#d7d2b7");if(s()>.35)for(let U of[-1,1])for(let H of[-1,1])for(let Z=.7;Z<h-.5;Z+=.85)a.box(e+U*(l/2-.06),Z,n+H*(c/2-.06),.56,.37,.56,"#ded6bc");for(let U=0;U<4;U++){let H=U*Math.PI/2,Z=Math.sin(H),it=Math.cos(H),gt=it,Mt=-Z,$=U%2?c:l,nt=U%2?l/2:c/2,lt=Math.max(2,Math.floor($/3.5));for(let rt=0;rt<u;rt++)for(let mt=0;mt<lt;mt++){let Rt=(mt-(lt-1)/2)*($/(lt+.45));if(U===_&&rt===0&&Math.abs(Rt-y)<2||s()<.07)continue;let Ct=e+Z*(nt+.055)+gt*Rt,Jt=n+it*(nt+.055)+Mt*Rt,Lt=rt*d+1.65,Qt=1.12+s()*.32,F=1.5+s()*.24,fn=s()>.82;if(a.box(Ct,Lt,Jt,Qt+.24,F+.23,.16,P,H),a.box(Ct+Z*.1,Lt,Jt+it*.1,Qt,F,.06,fn?"#dfcf97":N,H),a.box(Ct+Z*.15,Lt,Jt+it*.15,.065,F,.06,P,H),a.box(Ct+Z*.15,Lt+.05,Jt+it*.15,Qt,.065,.06,P,H),a.box(Ct+Z*.13,Lt-F/2-.1,Jt+it*.13,Qt+.42,.16,.37,"#ded5bb",H),this.solid(t,Ct+Z*.13,Lt-F/2-.1,Jt+it*.13,U%2?.37:Qt+.42,.16,U%2?Qt+.42:.37,{climbable:!1,kind:"sill"}),s()>.38)for(let Bt of[-1,1]){a.box(Ct+gt*Bt*(Qt/2+.3),Lt,Jt+Mt*Bt*(Qt/2+.3),.39,F+.1,.12,G,H);for(let Ht=0;Ht<4;Ht++)a.box(Ct+gt*Bt*(Qt/2+.3)+Z*.075,Lt-.5+Ht*.32,Jt+Mt*Bt*(Qt/2+.3)+it*.075,.32,.045,.045,"#a5ad91",H)}if(s()>.76){a.box(Ct+Z*.28,Lt-F/2-.13,Jt+it*.28,Qt+.15,.27,.47,"#a78060",H);for(let Bt=0;Bt<4;Bt++){let Ht=(Bt-1.5)*.29;a.ball(Ct+gt*Ht+Z*.3,Lt-F/2+.1,Jt+Mt*Ht+it*.3,.22,.2,.22,yn[Bt%yn.length]),a.ball(Ct+gt*Ht+Z*.3,Lt-F/2+.25,Jt+Mt*Ht+it*.3,.105,.1,.105,jn[Math.floor(s()*jn.length)])}}}}{let U=_*Math.PI/2,H=Math.sin(U),Z=Math.cos(U),it=Z,gt=-H,Mt=_%2?l/2:c/2,$=e+H*(Mt+.1)+it*y,nt=n+Z*(Mt+.1)+gt*y;ep(this,t,e+H*Mt,n+Z*Mt,_,y,S,w,P,"#5d796a");for(let[lt,rt,mt,Rt]of[[.3,.21,.42,.55],[.8,.1,.2,.5]])a.box($+H*lt,rt,nt+Z*lt,_%2?Rt:2.15,mt,_%2?2.15:Rt,"#cdc7ae"),this.solid(t,$+H*lt,rt,nt+Z*lt,_%2?Rt:2.15,mt,_%2?2.15:Rt,{climbable:!1,kind:"step"});if(s()>.4){let lt=Di[Math.floor(s()*Di.length)];for(let rt=0;rt<8;rt++){let mt=(rt-3.5)*.38;a.add(ci,$+it*mt+H*.65,2.85,nt+gt*mt+Z*.65,.38,.1,1.65,rt%2?"#eee4c8":lt,.17,U),a.box($+it*mt+H*1.43,2.62,nt+gt*mt+Z*1.43,.38,.28,.1,rt%2?"#eee4c8":lt,U)}this.solid(t,$+H*.7,2.88,nt+Z*.7,_%2?1.5:3.04,.1,_%2?3.04:1.5,{climbable:!1,kind:"awning"})}this.pot(t,$+it*1.45+H*.5,nt+gt*1.45+Z*.5,s,.7)}if(s()>.38||o===0){let U=_,H=U*Math.PI/2,Z=Math.sin(H),it=Math.cos(H),gt=it,Mt=-Z,$=U%2?l/2:c/2,nt=d+.38,lt=1.8,rt=e+Z*($+.6)+gt*lt,mt=n+it*($+.6)+Mt*lt,Rt=U%2?1.5:3.7,Ct=U%2?3.7:1.5;a.box(rt,nt,mt,Rt,.23,Ct,"#c6bea1"),this.solid(t,rt,nt,mt,Rt,.23,Ct,{climbable:!1});for(let Jt of[-1,1]){a.box(rt+Z*.68+gt*Jt*1.65,nt+.55,mt+it*.68+Mt*Jt*1.65,U%2?.08:3.5,.08,U%2?3.5:.08,"#667b68");for(let Lt=0;Lt<7;Lt++){let Qt=(Lt-3)*.52;a.box(rt+Z*.68+gt*Qt,nt+.3,mt+it*.68+Mt*Qt,.055,.55,.055,"#667b68")}}this.pot(t,rt+gt*1.2,mt+Mt*1.2,s,.5,nt+.13)}if(x===0?this.gable(t,b,m,g,p):x===1?this.hip(t,b,m,g):x===2?this.flatRoof(t,b,s):this.steppedRoof(t,b,s),x<2&&s()>.2){let U=e+(s()-.5)*l*.55,H=n+(s()-.5)*c*.55,Z=this.roofHeight(b,U,H);a.box(U,Z+.8,H,1.05,1.9,1.05,"#c4aa8b"),this.solid(t,U,(Z-.15+Z+1.95)/2,H,1.05,2.1,1.05,{kind:"chimney"}),a.box(U,Z+1.8,H,1.3,.22,1.3,"#ded0b1"),a.box(U,Z+1.93,H,.7,.04,.7,"#6d7060");for(let it=.3;it<1.7;it+=.38)a.box(U,Z+it,H+.532,1.05,.035,.015,"#b3977a")}if(s()>.43){let U=Math.floor(s()*4),H=U*Math.PI/2,Z=Math.sin(H),it=Math.cos(H),gt=U%2?l/2:c/2,Mt=(s()-.5)*5,$=e+Z*(gt+.14)+it*Mt,nt=n+it*(gt+.14)-Z*Mt;for(let lt=0;lt<h*3;lt++){let rt=.3+lt*.32,mt=Math.sin(lt*1.8)*.42;a.ball($+it*mt,rt,nt-Z*mt,.3+s()*.24,.28,.3+s()*.24,yn[lt%yn.length])}}let k=e-l/2-.8,V=n+c*.22;s()>.3&&(this.crate(t,k,.43,V,.86),s()>.5&&this.crate(t,k,1.23,V,.76),this.crate(t,k-.05,.36,V+1,.72)),this.pot(t,e+l/2+.7,n+c/2-1,s,.85);for(let U=0;U<6;U++){let H=e-l/2+1+U*(l-2)/5;Math.abs(H-(e+y))<1.5&&_===0||(a.ball(H,.28,n+c/2+1.1,.55,.38,.5,yn[Math.floor(s()*yn.length)]),s()>.4&&a.ball(H,.61,n+c/2+1.1,.14,.13,.14,jn[Math.floor(s()*jn.length)]))}}roofHeight(t,e,n){if(e<t.x-t.w/2-.55||e>t.x+t.w/2+.55||n<t.z-t.d/2-.55||n>t.z+t.d/2+.55)return-1/0;if(t.roofType===0){let s=t.ridgeX?n-t.z:e-t.x,r=(t.ridgeX?t.d:t.w)/2+.55;return t.h+t.roofRise*Math.max(0,1-Math.abs(s)/r)}if(t.roofType===1){let s=1-Math.abs(e-t.x)/(t.w/2+.55),r=1-Math.abs(n-t.z)/(t.d/2+.55);return t.h+t.roofRise*Math.min(1,Math.max(0,Math.min(s,r)/.84))}return t.upper&&Math.abs(e-t.upper.x)<t.upper.w/2&&Math.abs(n-t.upper.z)<t.upper.d/2?t.upper.h:t.h}gable(t,e,n,s,r){let o=e.w/2+.55,a=e.d/2+.55,l=r?a:o,c=r?o:a,u=[[-l,0,-c],[l,0,-c],[l,0,c],[-l,0,c],[0,n,-c],[0,n,c]];r&&(u=u.map(([w,T,A])=>[A,T,w]));let d=[[0,3,5],[0,5,4],[4,5,2],[4,2,1]],h=[];for(let w of d)for(let T of w)h.push(...u[T]);let f=new we;f.setAttribute("position",new Kt(h,3)),f.setAttribute("normal",new Kt(new Float32Array(h.length),3)),f.computeVertexNormals();let g=f.clone(),x=g.index,p=g.attributes.position.array;for(let w=0;w<p.length;w+=9)for(let T=0;T<3;T++){let A=p[w+T];p[w+T]=p[w+6+T],p[w+6+T]=A}g.computeVertexNormals(),t.batch.add(f,e.x,e.h,e.z,1,1,1,s),t.batch.add(g,e.x,e.h,e.z,1,1,1,s),f.dispose(),g.dispose();let m=e.wall;for(let w of[-1,1]){let T=r?[w*o,0,-a,w*o,0,a,w*o,n,0]:[-o,0,w*a,o,0,w*a,0,n,w*a],A=new we;A.setAttribute("position",new Kt(T,3)),A.setAttribute("normal",new Kt(new Float32Array(9),3)),A.computeVertexNormals(),t.batch.add(A,e.x,e.h-.02,e.z,1,1,1,m);let M=A.clone(),v=M.attributes.position.array;for(let E=0;E<3;E++){let I=v[E];v[E]=v[6+E],v[6+E]=I}M.computeVertexNormals(),t.batch.add(M,e.x,e.h-.02,e.z,1,1,1,m),A.dispose(),M.dispose()}let b=Math.atan2(n,r?a:o),_=Math.hypot(n,r?a:o),y=new Ft(s).multiplyScalar(1.075),S=Math.floor((r?o:a)*2/1.05);for(let w=0;w<=S;w++){let T=(w/S*2-1)*(r?o:a);for(let A of[-1,1])r?t.batch.add(ci,e.x+T,e.h+n/2+.045,e.z+A*a/2,.045,.045,_,y,A*b,0,0):t.batch.add(ci,e.x+A*o/2,e.h+n/2+.045,e.z+T,_,.045,.045,y,0,0,-A*b)}r?t.batch.cyl(e.x,e.h+n+.04,e.z,.13,e.w+1.25,s,0,Math.PI/2):t.batch.cyl(e.x,e.h+n+.04,e.z,.13,e.d+1.25,s,Math.PI/2)}hip(t,e,n,s){let r=e.w/2+.55,o=e.d/2+.55,a=r*.16,l=o*.16,c=[[-r,0,-o],[r,0,-o],[r,0,o],[-r,0,o],[-a,n,-l],[a,n,-l],[a,n,l],[-a,n,l]],u=[[0,4,5],[0,5,1],[1,5,6],[1,6,2],[2,6,7],[2,7,3],[3,7,4],[3,4,0],[4,7,6],[4,6,5]],d=[];for(let x of u)for(let p of x)d.push(...c[p]);let h=new we;h.setAttribute("position",new Kt(d,3)),h.setAttribute("normal",new Kt(new Float32Array(d.length),3)),h.computeVertexNormals(),t.batch.add(h,e.x,e.h,e.z,1,1,1,s);let f=h.clone(),g=f.attributes.position.array;for(let x=0;x<g.length;x+=9)for(let p=0;p<3;p++){let m=g[x+p];g[x+p]=g[x+6+p],g[x+6+p]=m}f.computeVertexNormals(),t.batch.add(f,e.x,e.h,e.z,1,1,1,s),h.dispose(),f.dispose();for(let x of[-1,1])for(let p of[-1,1])t.batch.beam([e.x+x*r,e.h,e.z+p*o],[e.x+x*a,e.h+n+.03,e.z+p*l],.095,"#a89779")}flatRoof(t,e,n){let{x:s,z:r,w:o,d:a,h:l}=e,c="#d9d3b8";t.batch.box(s,l+.04,r,o-.3,.1,a-.3,"#b9bca3");for(let h of[-1,1])t.batch.box(s+h*(o/2-.12),l+.32,r,.26,.6,a,c),t.batch.box(s,l+.32,r+h*(a/2-.12),o,.6,.26,c),this.solid(t,s+h*(o/2-.12),l+.3,r,.26,.6,a,{climbable:!1}),this.solid(t,s,l+.3,r+h*(a/2-.12),o,.6,.26,{climbable:!1});if(n()>.35){let h=s-o*.22,f=r-a*.2,g=4.5,x=3.6;for(let p of[-1,1])for(let m of[-1,1])t.batch.box(h+p*g/2,l+1.35,f+m*x/2,.16,2.7,.16,"#a39370"),this.solid(t,h+p*g/2,l+1.35,f+m*x/2,.16,2.7,.16,{kind:"post"});for(let p=0;p<7;p++)t.batch.box(h-g/2+p*g/6,l+2.75,f,.14,.18,x+.5,"#b4a17b");this.solid(t,h,l+2.78,f,g+.14,.18,x+.5,{climbable:!1,kind:"pergola"}),this.bench(t,h,f,0,l),this.pot(t,h+g/2+.6,f+x/2,n,.8,l)}let u=s+o*.28,d=r-a*.26;t.batch.add(Fs,u,l+.75,d,.75,1.5,.75,"#8a9c8b"),t.batch.add(ki,u,l+1.3,d,.73,.73,.73,"#6d8273",Math.PI/2),this.solid(t,u,l+.75,d,1.4,1.5,1.4,{climbable:!1});for(let h=0;h<3;h++)this.pot(t,s-o*.3+h*1.4,r+a*.31,n,.6,l);if(n()>.45){let h=r+a*.16;t.batch.beam([s-3,l+1.8,h],[s+3,l+1.8,h],.025,"#9b9479");for(let f of[-1,1])t.batch.box(s+f*3,l+.9,h,.07,1.8,.07,"#a29475");for(let f=0;f<4;f++)t.batch.box(s-2+f*1.25,l+1.28,h,.85,1.02,.035,["#e9dfc3","#b7c7bc","#d5af94","#e4d6ad"][f],.06)}}steppedRoof(t,e,n){let s=e.w*.64,r=e.d*.65,o=2.8+n()*1.5,a=e.x-e.w*.12,l=e.z-e.d*.1;t.batch.box(a,e.h+o/2,l,s,o,r,e.wall),this.solid(t,a,e.h+(o+.21)/2,l,s,o+.21,r,{buildingId:e.id,building:e,kind:"wall"}),t.batch.box(a,e.h+o,l,s+.35,.25,r+.35,"#e4dac0"),t.batch.box(a,e.h+o+.15,l,s-.3,.12,r-.3,"#aeb69b");for(let c of[-1,1])t.batch.box(a+c*s/2,e.h+1.5,l,.12,1.5,1.5,"#ece2c7"),t.batch.box(a+c*(s/2+.08),e.h+1.5,l,.05,1.25,1.25,"#71897d");for(let c=0;c<3;c++)this.pot(t,e.x+e.w*.32,e.z-r/2+c*1.7,n,.7,e.h);e.upper={x:a,z:l,w:s,d:r,h:e.h+o+.21}}crate(t,e,n,s,r){this.solid(t,e,n,s,r,r,r,{climbable:!1}),t.batch.box(e,n,s,r,r,r,"#b99b70");for(let o of[-1,1])t.batch.box(e+o*r*.42,n,s+r*.51,r*.1,r,.055,"#d0b18a"),t.batch.box(e,n+o*r*.42,s+r*.51,r,r*.1,.055,"#d0b18a"),t.batch.box(e+r*.51,n,s+o*r*.42,.055,r,r*.1,"#d0b18a");t.batch.add(ci,e,n,s+r*.53,r*.1,r*1.1,.055,"#c9aa80",0,0,-.75)}pot(t,e,n,s,r=1,o=0){this.cylinderSolid(t,e,o,n,.5*r,1.3*r,{kind:"pot"}),t.batch.add(vd,e,o+.35*r,n,.46*r,.7*r,.46*r,"#ba8b68"),t.batch.add(Ao,e,o+.69*r,n,.48*r,.11*r,.48*r,"#caa17d"),t.batch.ball(e,o+1.02*r,n,.55*r,.55*r,.55*r,yn[Math.floor(s()*yn.length)]),s()>.5&&t.batch.ball(e+.15*r,o+1.4*r,n,.16*r,.13*r,.16*r,jn[Math.floor(s()*jn.length)])}tree(t,e,n,s,r=1,o=0){let a=(3.9+s()*1.4)*Math.pow(r,.55),l=yn[Math.floor(s()*yn.length)];t.batch.add(Fs,e,o+a*.43,n,.27*r,a*.86,.27*r,"#9b8965");let c={x:e,z:n,canopies:[]},u=(f,g,x,p,m,b)=>c.canopies.push(this.ellipsoidSolid(t,f,g,x,p,m,b,{tree:c,kind:"tree"})),d=Ee.trees==="pine"?s()>.15?"pine":"round":Ee.trees==="palm"?s()>.3?"palm":"round":s()>.82?"pine":"round";if(d==="palm"){let f=(s()-.5)*.5,g=a*1.35,x=e+Math.sin(f)*g*.5,p=n;t.batch.beam([e,o,n],[x,o+g,p],.22*r,"#9b8965");for(let m=0;m<4;m++)t.batch.add(ki,e+Math.sin(f)*g*(m+.5)/4.5,o+g*(m+.5)/4.5,n,.26*r,.26*r,.26*r,"#8a7a5a",Math.PI/2);for(let m=0;m<8;m++){let b=m*To/8+s()*.4,_=2.6*r,y=.55+s()*.3,S=x+Math.cos(b)*_*.45,w=p+Math.sin(b)*_*.45;t.batch.add(ci,S,o+g-.25*r-Math.sin(y)*_*.25,w,_*.9,.08*r,.55*r,l,0,-b,0),t.batch.add(ci,S+Math.cos(b)*_*.3,o+g-.6*r-Math.sin(y)*_*.4,w+Math.sin(b)*_*.3,_*.5,.07*r,.4*r,l,0,-b,y*Math.sign(Math.cos(b)||1)*0)}t.batch.ball(x,o+g-.1*r,p,.35*r,.3*r,.35*r,"#6f8a52"),t.batch.ball(x+.3*r,o+g-.4*r,p,.17*r,.15*r,.17*r,"#8a6a4c"),t.batch.ball(x-.2*r,o+g-.45*r,p+.25*r,.17*r,.15*r,.17*r,"#8a6a4c"),u(x,o+g-.1*r,p,1.9*r,.7*r,1.9*r),this.cylinderSolid(t,(e+x)/2,o,n,.26*r,g-.3,{climbable:!0,tree:c,kind:"trunk"});return}if(d==="pine"){for(let f=0;f<3;f++)t.batch.add(os,e,o+a*.6+f*a*.23,n,(1.5-f*.28)*r,a*.65,(1.5-f*.28)*r,l),Ee.snow&&t.batch.add(os,e,o+a*.6+f*a*.23+a*.07,n,(1.5-f*.28)*r*.9,a*.52,(1.5-f*.28)*r*.9,"#f0f3f6");u(e,o+a*.78,n,1.05*r,a*.42,1.05*r)}else t.batch.beam([e,o+a*.5,n],[e+.8*r,o+a*.88,n+.3*r],.13*r,"#9b8965"),t.batch.ball(e,o+a,n,2.15*r,2.1*r,1.95*r,l,!0),t.batch.ball(e-1.15*r,o+a*.9,n+.3*r,1.45*r,1.35*r,1.5*r,l),t.batch.ball(e+.95*r,o+a*1.07,n-.45*r,1.45*r,1.4*r,1.45*r,yn[(yn.indexOf(l)+1)%yn.length]),u(e,o+a,n,2.15*r,2.1*r,1.95*r),u(e-1.15*r,o+a*.9,n+.3*r,1.45*r,1.35*r,1.5*r),u(e+.95*r,o+a*1.07,n-.45*r,1.45*r,1.4*r,1.45*r);let h=Math.max(...c.canopies.map(f=>f.y+f.ry));this.cylinderSolid(t,e,o,n,.27*r,h-.05-o,{climbable:!0,tree:c,kind:"trunk"})}bench(t,e,n,s=0,r=0){let o=t.batch,a=Math.cos(s),l=Math.sin(s),c=(u,d)=>[e+u*a+d*l,n-u*l+d*a];for(let u=0;u<4;u++){let d=c(0,(u-1.5)*.18);o.box(d[0],r+.67,d[1],2.6,.12,.15,"#b49b73",s)}for(let u of[-1,1]){let d=c(u*1.02,0);o.box(d[0],r+.34,d[1],.13,.65,.65,"#73816a",s),o.box(d[0],r+.95,d[1]+.3,.12,1.1,.12,"#73816a",s)}for(let u=0;u<3;u++){let d=c(0,.32);o.box(d[0],r+.9+u*.19,d[1],2.6,.13,.1,"#b49b73",s)}this.solid(t,e,r+.64,n,Math.abs(a)*2.6+Math.abs(l)*.75,.18,Math.abs(l)*2.6+Math.abs(a)*.75,{climbable:!1,kind:"bench"})}lamp(t,e,n){this.cylinderSolid(t,e,0,n,.14,3.83,{climbable:!0,kind:"lamp"}),t.batch.add(Fs,e,1.7,n,.11,3.4,.11,"#667b63"),t.batch.cyl(e,.15,n,.25,.3,"#78866b"),t.batch.box(e,3.5,n,.46,.65,.46,"#eee0ae"),t.batch.add(os,e,3.94,n,.43,.36,.43,"#657b62");for(let s of[-1,1])for(let r of[-1,1])t.batch.box(e+s*.23,3.5,n+r*.23,.045,.7,.045,"#667b63")}bunting(t,e,n,s,r,o){for(let[l,c]of[[e,n],[s,r]])t.batch.add(Fs,l,o/2,c,.09,o,.09,"#a09270"),t.batch.ball(l,o+.08,c,.13,.13,.13,"#b4a37d"),this.cylinderSolid(t,l,0,c,.1,o+.2,{kind:"pole",walkable:!1});let a=[e,o,n];for(let l=1;l<=14;l++){let c=l/14,u=e+(s-e)*c,d=n+(r-n)*c,h=o-Math.sin(c*Math.PI)*1.2;if(t.batch.beam(a,[u,h,d],.024,"#a39778"),a=[u,h,d],l%2===0){let f=[u,h-.04,d,u+.52,h-.08,d,u+.22,h-.75,d];for(let g of[!1,!0]){let x=new we;x.setAttribute("position",new Kt(g?[...f.slice(6,9),...f.slice(3,6),...f.slice(0,3)]:f,3)),x.setAttribute("normal",new Kt(new Float32Array(9),3)),x.computeVertexNormals(),t.batch.add(x,0,0,0,1,1,1,["#c88f6e","#e1c780","#91a991","#c5b2a0"][l/2%4]),x.dispose()}}}}makePark(t,e,n,s,r){let o=t.batch,a=`park:${t.key}:${r}`;t.parks.push({id:a,x:e,z:n,r:10,cx:t.cx,cz:t.cz}),o.box(e,.025,n,24,.1,24,Ee.lawn),o.box(e,.085,n,3.2,.08,25,"#c2b79d"),o.box(e,.086,n,25,.08,3.2,"#c2b79d");let l=e+4.5,c=n-4.3,u=3.4+s()*1.2;o.cyl(l,.01,c,u,.1,"#8ebbb0"),o.cyl(l,.047,c,u-.25,.03,"#a1c9ba"),t.water.push({x:l,z:c,r:u});for(let d=0;d<18;d++){let h=d/18*To,f=l+Math.cos(h)*(u+.13),g=c+Math.sin(h)*(u+.13);o.ball(f,.21,g,.52,.28,.45,d%3?"#c5c6a8":"#d7d3b6"),this.solid(t,f,.2,g,.7,.4,.65,{climbable:!1})}for(let d=0;d<5;d++){let h=s()*To,f=s()*u*.75,g=l+Math.cos(h)*f,x=c+Math.sin(h)*f;o.cyl(g,.14,x,.35,.025,"#82a67c"),d%2===0&&o.ball(g,.24,x,.12,.12,.12,"#e5c4b0")}for(let d=0;d<11;d++){let h=d/10,f=c-u+.3+h*(u*2-.6),g=.22+Math.sin(h*Math.PI)*.42;o.box(l,g,f,1.6,.15,.58,"#c3ac83"),this.solid(t,l,g,f,1.6,.15,.58,{climbable:!1})}for(let d of[-1,1])for(let h=0;h<4;h++){let f=h/3,g=c-u+.4+f*(u*2-.8),x=.55+Math.sin(f*Math.PI)*.42;o.box(l+d*.8,x,g,.08,.75,.08,"#a79570")}if(this.tree(t,e-6,n-6,s,1.35),this.tree(t,e+7,n+7,s,1.1),this.tree(t,e-7,n+6,s,.9),this.bench(t,e-4.5,n+2.2,Math.PI/2),this.bench(t,e+3,n+7,0),this.lamp(t,e-2.3,n+8.5),Ee.snow){let d=e-7,h=n+6,f=t.batch;f.ball(d,.55,h,.75,.6,.75,"#f4f6f8"),f.ball(d,1.4,h,.55,.5,.55,"#f4f6f8"),f.ball(d,2.1,h,.4,.38,.4,"#f4f6f8"),f.add(os,d,2.1,h+.5,.08,.4,.08,"#e2733f",Math.PI/2);for(let g of[-.14,.14])f.ball(d+g,2.2,h+.36,.04,.04,.04,"#2f3331");for(let g=0;g<3;g++)f.ball(d,1.2+g*.22,h+.52,.04,.04,.04,"#2f3331");f.cyl(d,2.5,h,.3,.08,"#2f3331"),f.cyl(d,2.75,h,.22,.45,"#2f3331"),f.box(d,1.75,h,1.1,.14,.3,"#c9524a",.3);for(let g of[-1,1])f.beam([d+g*.5,1.45,h],[d+g*1.2,1.9,h+.2],.03,"#6d5a44");this.cylinderSolid(t,d,0,h,.7,2.3,{climbable:!0,kind:"snowman"})}for(let d=0;d<26;d++){let h=e-9+s()*5,f=n-1+s()*10;o.ball(h,.2,f,.18,.23,.18,"#86a269"),o.ball(h,.42,f,.14,.12,.14,jn[Math.floor(s()*jn.length)])}for(let d=0;d<6;d++)o.box(e-10+d*1.6,.5,n+11,1.35,.85,.75,"#8fa873"),this.solid(t,e-10+d*1.6,.43,n+11,1.35,.86,.75,{climbable:!1})}cars(t,e){let n=t.cx*It,s=t.cz*It,r=["#b7c4c9","#c9b8a2","#8a9aa6","#a8b59a","#d2c7b4","#7c7f86","#b48c7a","#9fb3a0"];for(let o of[-1,1])for(let a of["x","z"]){let l=e()<.25?0:1+Math.floor(e()*2.6),c=-24+e()*6;for(let u=0;u<l&&c<23;u++){let d=a==="x",h=d?n+o*30.15:n+c,f=d?s+c:s+o*30.15;this.car(t,h,f,d,r[Math.floor(e()*r.length)],e),c+=5.2+e()*7}}}car(t,e,n,s,r,o){let a=t.batch,l=3.9,c=1.7,u=s?0:Math.PI/2,d=(y,S)=>s?[S,y]:[y,S],[h,f]=d(l,c),[g,x]=d(l*.52,c-.22),p=(o()-.5)*.3,m=s?e:e+p,b=s?n+p:n;a.box(e,.62,n,h,.62,f,r),a.box(e,.36,n,h-.1,.14,f-.1,"#4f5551"),a.box(m,1.2,b,g,.54,x,r);let _="#5f7579";for(let y of[-1,1]){s?a.box(m+y*(x/2-0),1.23,b,.05,.36,g-.5,_):a.box(m,1.23,b+y*(x/2),g-.5,.36,.05,_);let[S,w]=d(.08,c-.5);s?a.box(m,1.23,b+y*g/2,w,.4,S,_):a.box(m+y*g/2,1.23,b,S,.4,w,_);let[T,A]=d(.08,.3);for(let M of[-1,1]){let v=s?e+y*.55:e+M*(l/2),E=s?n+M*(l/2):n+y*.55;a.box(v,.68,E,T,.16,A,M===1?"#ecd9a6":"#b8604f")}}for(let y of[-1,1])for(let S of[-1,1]){let w=s?e+y*(c/2-.02):e+S*1.25,T=s?n+S*1.25:n+y*(c/2-.02);s?a.cyl(w,.33,T,.33,.24,"#30302c",0,Math.PI/2):a.cyl(w,.33,T,.33,.24,"#30302c",Math.PI/2,0),s?a.cyl(w+y*.02,.33,T,.17,.26,"#a9aba2",0,Math.PI/2):a.cyl(w,.33,T+y*.02,.17,.26,"#a9aba2",Math.PI/2,0)}this.solid(t,e,.48,n,h,.95,f,{kind:"car"}),this.solid(t,m,1.22,b,g,.54,x,{kind:"car"})}makeSpawn(t,e){let n=t.batch;n.cyl(0,.045,3,6.5,.1,"#c2b79d"),n.cyl(0,.105,3,5.8,.025,"#cfc4aa");for(let o=0;o<22;o++){let a=o/22*To;n.box(Math.cos(a)*6.1,.13,3+Math.sin(a)*6.1,.65,.035,.38,"#cbc8aa",-a)}let s=-3.8,r=4.5;n.cyl(s,.25,r,1.35,.45,"#c4c5a8"),n.cyl(s,.49,r,1.15,.08,"#a8bca6"),n.add(Fs,s,.95,r,.25,1.1,.25,"#c9c9ad"),n.cyl(s,1.48,r,.7,.2,"#d7d3b6"),n.ball(s,1.67,r,.18,.2,.18,"#c1c5a5"),this.cylinderSolid(t,s,0,r,1.35,.53,{climbable:!1,kind:"fountain"}),this.cylinderSolid(t,s,.53,r,.27,.85,{climbable:!1,kind:"fountain"}),this.cylinderSolid(t,s,1.38,r,.7,.2,{climbable:!1,kind:"fountain"}),this.bench(t,3.8,6.5,-.4),this.pot(t,4.5,1,e,1),this.tree(t,-7.5,-4.5,e,.9),this.bunting(t,-12,-6,12,-6,6.2);for(let o=0;o<8;o++){let a=e()*To,l=7+e()*2;n.ball(Math.cos(a)*l,.16,3+Math.sin(a)*l,.2,.18,.2,"#91ab70"),n.ball(Math.cos(a)*l,.34,3+Math.sin(a)*l,.12,.12,.12,jn[o%jn.length])}}inWater(t,e){return this.water.find(n=>(t-n.x)**2+(e-n.z)**2<n.r*n.r)}groundHeight(t,e){for(let c of this.grounds)if(t>=c.minX&&t<=c.maxX&&e>=c.minZ&&e<=c.maxZ)return c.y;let n=t-Math.round(t/It)*It,s=e-Math.round(e/It)*It,r=Math.abs(n),o=Math.abs(s),a=c=>Math.abs(c-28.45)<.525||Math.abs(c-35.45)<.525;if(a(r)&&o<=31.5||a(o)&&r<=31.5)return .13;let l=0;for(let c of this.parks){let u=Math.abs(t-c.x),d=Math.abs(e-c.z);if(u<12&&d<12){if(u<1.6&&d<12.5||d<1.6&&u<12.5)return .125;l=.075;break}}if(l)return l;if(Math.abs(t)<36&&Math.abs(e)<36){let c=Math.hypot(t,e-3);if(c<5.8)return .1175;if(c<6.5)return .095}return r<1.5&&o<29||o<1.5&&r<29?.05:r>29&&r<=36||o>29&&o<=36?.045:0}};var bp=11,W2=1.6,yp=2.2,_p=9,X2=(i,t)=>(i%t+t)%t,pl=class{constructor(t,e,n){this.scene=t,this.world=e,this.physics=n;let s=new Cn;this.spec=up(s),this.mesh=new xt(s.geometry(),e.material),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.name="train",this.group=new Zt,this.group.add(this.mesh),t.add(this.group),this.solids=this.spec.boxes.map(a=>({shape:"box",kind:"car",train:!0,climbable:!0,x:0,z:0,r:Math.max(a.w,a.d)/2+.2,local:a,minX:0,maxX:0,minY:a.y-a.h/2,maxY:a.y+a.h/2,minZ:0,maxZ:0}));for(let a of this.solids)n.dynamic.push(a);this.puffs=[];let r=new dn({color:"#f1efe8",transparent:!0,opacity:.55}),o=new De(1,7,6);for(let a=0;a<14;a++){let l=new xt(o,r.clone());l.visible=!1,t.add(l),this.puffs.push({mesh:l,t:2})}this.puffTimer=0,this.onWhistle=null,this.onChuff=null,this.chuffTimer=0,this.column=null,this.x=0,this.z=0,this.speed=0,this.state="stop",this.timer=3,this.next=null,this.lastDelta=0,this.visible=!1}stationsNear(t){let e=[],n=Math.round(t/It);for(let s=n-6;s<=n+6;s++)X2(s,2)===0&&e.push(s*It-16.5);return e}nearestColumn(t){let e=Math.round(t/It),n=null;for(let s=e-6;s<=e+6;s++)Ro(s)&&(n===null||Math.abs(Po(s)-t)<Math.abs(Po(n)-t))&&(n=s);return n}place(t,e){this.column=t,this.x=Po(t);let n=this.stationsNear(e);this.z=n.reduce((s,r)=>Math.abs(r-e)<Math.abs(s-e)?r:s),this.state="stop",this.timer=2+Math.random()*_p,this.speed=0,this.next=null}update(t,e,n){let s=this.nearestColumn(e.x);if(s===null)return this.visible=!1,this.group.visible=!1,this.lastDelta=0,this.updateSolids(),0;let r=Math.abs(e.z-this.z)>230||Math.abs(e.x-this.x)>230;(this.column!==s||r&&!n)&&this.place(s,e.z-150-Math.random()*60),this.group.visible=!0,this.visible=!0;let o=this.z;if(this.state==="stop")this.timer-=t,this.timer<=0&&(this.state="run",this.next=this.stationsNear(this.z).find(a=>a>this.z+1)??this.z+It*2,this.onWhistle?.(Math.hypot(e.x-this.x,e.z-this.z)));else{let a=this.next-this.z,l=this.speed*this.speed/(2*yp);a<=l+.05?this.speed=Math.max(0,this.speed-yp*t):this.speed=Math.min(bp,this.speed+W2*t),this.z+=this.speed*t,(a<.12||this.speed<.05&&a<.6)&&(this.z=this.next,this.speed=0,this.state="stop",this.timer=_p),this.chuffTimer-=t*(.6+this.speed/4),this.chuffTimer<=0&&this.speed>.5&&(this.chuffTimer=.9,this.onChuff?.(Math.hypot(e.x-this.x,e.z-this.z),this.speed/bp))}return this.lastDelta=this.z-o,this.group.position.set(this.x,0,this.z),this.updateSolids(),this.smoke(t),this.lastDelta}updateSolids(){for(let t of this.solids){let e=t.local;t.x=this.x+e.x,t.z=this.z+e.z,t.minX=t.x-e.w/2,t.maxX=t.x+e.w/2,t.minZ=t.z-e.d/2,t.maxZ=t.z+e.d/2,this.visible||(t.minX=t.maxX=1e9)}}smoke(t){let e=this.spec.chimney,n=this.state==="run"?.12:.6;if(this.puffTimer-=t,this.puffTimer<=0&&this.visible){this.puffTimer=n;let s=this.puffs.find(r=>r.t>=2);s&&(s.t=0,s.mesh.position.set(this.x+e.x,e.y,this.z+e.z),s.mesh.visible=!0,s.vx=(Math.random()-.5)*.4,s.vz=-this.speed*.35-.3)}for(let s of this.puffs){if(s.t>=2)continue;s.t+=t;let r=s.mesh;r.position.x+=s.vx*t,r.position.y+=(1.6-s.t*.3)*t,r.position.z+=s.vz*t;let o=.25+s.t*.55;r.scale.setScalar(o),r.material.opacity=.5*(1-s.t/2),s.t>=2&&(r.visible=!1)}}dispose(){this.scene.remove(this.group);for(let e of this.puffs)this.scene.remove(e.mesh);let t=this.physics.dynamic;for(let e of this.solids){let n=t.indexOf(e);n>=0&&t.splice(n,1)}}};var Ed=Math.PI*2,zr=(i,t,e)=>i+(t-i)*e,q2=i=>i*i*(3-2*i),Ui=i=>Math.max(0,Math.min(1,i)),Ke=Object.freeze({cy:2.4,floor:1.6,len:16,halfW:1.5,doorX:4.1,doorW:1.2,sill:1.6});function vp(i,t){let{cy:e,floor:n,len:s,halfW:r}=Ke,o="#f3f1ea",a=t,l="#2f3331",c="#3f4a46",u=2.1,d=n-.1+u/2;i.add(K.cylinder,0,e-.55,0,1.45,s,1.05,o,0,0,Math.PI/2),i.add(K.cylinder,0,e-.85,0,1.46,s,.8,a,0,0,Math.PI/2),i.add(K.cylinder,0,e+1.05,0,r+.02,s,.95,o,0,0,Math.PI/2),i.box(0,n-.08,0,s,.16,r*2-.1,"#6d7f8a"),i.box(0,n+.005,0,s-1,.01,.7,"#4f7f96"),i.box(0,d,-r+.06,s,u,.12,o);let h=Ke.doorX-Ke.doorW/2,f=Ke.doorX+Ke.doorW/2;i.box((-s/2+h)/2,d,r-.06,h+s/2,u,.12,o),i.box((f+s/2)/2,d,r-.06,s/2-f,u,.12,o),i.box(Ke.doorX,n+1.9+(u-2)/2,r-.06,Ke.doorW+.1,u-2+.2,.12,o);for(let m of[-1,1])for(let b=0;b<8;b++){let _=-s/2+1.8+b*1.5;m>0&&Math.abs(_-Ke.doorX)<1||(i.box(_,n+.9,m*(r-.08),.5,.42,.08,c),i.box(_,n+.9,m*(r-.12),.58,.5,.04,"#d9d6cc"))}i.box(Ke.doorX+1,n+.95,r+.25,.06,1.85,1.1,o),i.box(Ke.doorX+1,n+1.1,r+.26,.04,.36,.45,c),i.box(0,n+2+.05,0,s-.6,.1,r*2-.3,"#e9e9e4"),i.add(K.cone,s/2+1.6,e+.1,0,1.55,3.4,1.5,o,0,0,-Math.PI/2),i.box(s/2+.5,e+.95,0,1.1,.45,2.2,c,0,0,-.35),i.box(s/2-.2,e+1.25,0,1.6,.35,2.3,c),i.add(K.cone,-s/2-2.6,e+.5,0,1.3,5.4,1.4,o,0,0,Math.PI/2+.12),i.add(K.tapered,-s/2-1.9,e+3,0,2.2,4.4,.14,a,0,0,.5),i.ball(-s/2-2.6,e+3.4,.1,.4,.4,.06,"#f3f1ea"),i.ball(-s/2-2.6,e+3.4,-.1,.4,.4,.06,"#f3f1ea");for(let m of[-1,1])i.add(K.box,-s/2-2.2,e+.9,m*2.4,2.4,.16,3.6,o,0,m*.5,0);for(let m of[-1,1])i.add(K.box,-.6-1.5,e-.35,m*5.5,3.6,.22,9.5,o,0,m*-.42,0),i.add(K.box,-1.9,e-.3,m*1.8,4.6,.3,3,o),i.add(K.cylinder,.6,e-1.1,m*4.4,.75,2.6,.75,"#8a9893",0,0,Math.PI/2),i.add(K.cylinder,1.9,e-1.1,m*4.4,.6,.1,.6,l,0,0,Math.PI/2),i.box(.2,e-.65,m*4.4,1.6,.5,.3,o),i.ball(-6.5,e-.3,m*10.2,.18,.06,.4,m>0?"#6f9a4f":"#d9544f");let g=[[s/2-1.5,0],[-1.5,-1.8],[-1.5,1.8]];for(let[m,b]of g)i.box(m,(n-.5)/2+.3,b,.16,n-.9,.16,"#8a9893"),i.add(K.cylinder,m,.45,b,.45,.35,.45,l,0,0,Math.PI/2),i.add(K.cylinder,m,.45,b,.2,.37,.2,"#cfc8b4",0,0,Math.PI/2);let x=[];for(let m=0;m<7;m++){let b=s/2-3.2-m*1.35;for(let _ of[-1,1])for(let y of[.55,1.05]){let S=_*y;i.box(b,n+.25,S,.5,.12,.46,"#4f7f96"),i.box(b-.25,n+.55,S,.1,.72,.46,"#4f7f96"),i.box(b-.27,n+.92,S,.06,.16,.3,"#f3f1ea"),i.box(b,n+.1,S,.4,.2,.36,"#2f3331")}x.push({x:b-.05,y:n+.3,z:-.8,w:.6,h:.6,d:1.1},{x:b-.05,y:n+.3,z:.8,w:.6,h:.6,d:1.1})}i.box(s/2-1.3,n+1,0,.1,2,2.6,"#e9e9e4"),i.box(s/2-1.26,n+1.1,.5,.02,1.2,.5,"#d9d6cc"),i.ball(s/2-1.22,n+1,.35,.03,.03,.03,"#c9a35c"),i.box(-s/2+1.2,n+.5,-.9,1.6,1,1.1,"#8a9893"),i.box(-s/2+1.2,n+1.02,-.9,1.7,.06,1.2,"#e3dcc6");for(let m=0;m<3;m++)i.cyl(-s/2+.7+m*.45,n+1.1,-.9,.07,.14,["#c9524a","#f1e8d2","#4f7f96"][m]);return i.box(-s/2+1.2,n+1,1,.1,2,1,"#e9e9e4"),i.box(-s/2+1.16,n+1.3,1,.02,.3,.3,"#6f9a4f"),i.box(0,n+1.95,0,s-2,.04,.8,"#f6ecc8"),i.box(s/2-2.2,n+1.7,0,.04,.25,.9,"#d9544f"),[{x:0,y:n-.08,z:0,w:s,h:.16,d:r*2,kind:"floor",climbable:!1},{x:0,y:d,z:-r+.06,w:s,h:u,d:.14,kind:"wall",climbable:!1},{x:(-s/2+h)/2,y:d,z:r-.06,w:h+s/2,h:u,d:.14,kind:"wall",climbable:!1},{x:(f+s/2)/2,y:d,z:r-.06,w:s/2-f,h:u,d:.14,kind:"wall",climbable:!1},{x:Ke.doorX,y:n+1.9+(u-1.9)/2+.1,z:r-.06,w:Ke.doorW+.1,h:u-1.9,d:.14,kind:"wall",climbable:!1},{x:0,y:n+2.1,z:0,w:s,h:.2,d:r*2,kind:"ceiling",climbable:!1,walkable:!1},{x:s/2-1.3,y:n+1,z:0,w:.12,h:2,d:2.6,kind:"wall",climbable:!1},{x:-s/2+.25,y:n+1,z:0,w:.12,h:2,d:2.8,kind:"wall",climbable:!1},{x:-s/2+1.2,y:n+.5,z:-.9,w:1.7,h:1.08,d:1.2,kind:"counter",climbable:!1},{x:-s/2+1.2,y:n+1,z:1,w:.12,h:2,d:1,kind:"wall",climbable:!1},{x:-2.1,y:e-.35,z:6.25,w:4.6,h:.3,d:9.5,kind:"wing",climbable:!1},{x:-2.1,y:e-.35,z:-6.25,w:4.6,h:.3,d:9.5,kind:"wing",climbable:!1},...x.map(m=>({...m,kind:"seat",climbable:!1}))]}var Td=class{constructor(t,e,n,s){this.scene=t,this.world=e,this.physics=n,this.airport=s;let r=new Cn;this.local=vp(r,["#4f7f96","#c9524a","#6f9a4f","#d9a53a"][Math.abs(Math.round(s.x/It+s.z/It))%4]),this.mesh=new xt(r.geometry(),e.material),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.group=new Zt,this.group.add(this.mesh),t.add(this.group),this.solids=this.local.map(o=>({shape:"box",local:o,kind:o.kind,climbable:!!o.climbable,walkable:o.walkable,plane:this,x:0,z:0,r:Math.max(o.w,o.d)/2+.2,minX:0,maxX:0,minY:o.y-o.h/2,maxY:o.y+o.h/2,minZ:0,maxZ:0}));for(let o of this.solids)n.dynamic.push(o);this.park(),this.flying=!1}park(){let t=this.airport.stand;this.group.position.set(t.x,0,t.z),this.group.rotation.set(0,0,0),this.pitch=0,this.heading=0,this.updateSolids(!0)}updateSolids(t){let e=this.group.position.x,n=this.group.position.z;for(let s of this.solids){let r=s.local;if(!t){s.minX=s.maxX=1e9;continue}s.x=e+r.x,s.z=n+r.z,s.minX=s.x-r.w/2,s.maxX=s.x+r.w/2,s.minZ=s.z-r.d/2,s.maxZ=s.z+r.d/2}}catInside(t){let e=this.group.position.x,n=this.group.position.z;return!this.flying&&Math.abs(t.x-e)<Ke.len/2-1.4&&Math.abs(t.z-n)<Ke.halfW-.1&&t.y>Ke.floor-.3&&t.y<Ke.floor+1.6}dispose(){this.scene.remove(this.group);let t=this.physics.dynamic;for(let e of this.solids){let n=t.indexOf(e);n>=0&&t.splice(n,1)}}},ml=class{constructor(t,e,n){this.scene=t,this.world=e,this.physics=n,this.list=new Map}sync(){let t=new Set;for(let e of this.world.airports)t.add(e.id),this.list.has(e.id)||this.list.set(e.id,new Td(this.scene,this.world,this.physics,e));for(let[e,n]of this.list)t.has(e)||(n.dispose(),this.list.delete(e))}at(t){for(let e of this.list.values())if(e.catInside(t))return e;return null}dispose(){for(let t of this.list.values())t.dispose();this.list.clear()}},gl=class{constructor(){this.active=!1,this.phase=null,this.t=0,this.plane=null,this.to=null,this.onTravel=null,this.onArrive=null,this.onFade=null,this.cam={pos:new D,at:new D},this.fade=0,this.airport=null}begin(t,e){this.active=!0,this.plane=t,this.to=e,this.airport=t.airport,this.phase="board",this.t=0,t.flying=!0,t.updateSolids(!1),this.camPos=null}update(t){if(!this.active)return;this.t+=t;let e=this.airport,n=e.stand,s=e.runwayZ,r=this.plane,o=r.group,a=(u,d,h,f=0,g=0)=>{o.position.set(u,d,h),o.rotation.set(0,f,0),o.rotateZ(g)},l,c;if(this.phase==="board"){let u=Ui(this.t/1.6);a(n.x,0,n.z),l=[n.x+6+u*6,2.5+u*2,n.z+12+u*6],c=[n.x+2,2.4,n.z],this.t>1.6&&(this.phase="taxi",this.t=0)}else if(this.phase==="taxi"){let u=q2(Ui(this.t/5)),d=n.x,h=n.z,f=e.x-26,g=s,x=d-8,p=(h+g)/2,m=zr(zr(d,x,u),zr(x,f,u),u),b=zr(zr(h,p,u),zr(p,g,u),u),_=2*(1-u)*(x-d)+2*u*(f-x),y=2*(1-u)*(p-h)+2*u*(g-p),S=u<.01?0:-Math.atan2(y,_);a(m,0,b,S),l=[e.x-14,4,s+14],c=[m,2,b],this.t>5.2&&(this.phase="roll",this.t=0)}else if(this.phase==="roll"){let u=Ui(this.t/4.5),d=e.x-26+56*u*u,h=u>.8?(u-.8)/.2*.22:0;a(d,h*1.6,s,0,h),l=[e.x-6,2.2,s+15],c=[d,2.2,s],this.t>4.5&&(this.phase="climb",this.t=0,this.climbX=d)}else if(this.phase==="climb"){let u=Ui(this.t/7),d=this.climbX+36*this.t+2*this.t*this.t,h=.35+65*u*u,f=.22+.1*u;a(d,h,s,0,f),l=[d-20+u*6,h-1+u*6,s+9-u*3],c=[d+4,h+1,s],this.fade=Ui((this.t-5.3)/1.4),this.onFade?.(this.fade),this.t>7&&(this.phase="cloud",this.t=0)}else if(this.phase==="cloud"){if(this.t>.2&&!this.swapped){this.swapped=!0;let u=this.onTravel?.(this.to);this.airport=u}this.fade=1,this.onFade?.(1),this.swapped&&this.t>.9&&(this.phase="descend",this.t=0),l=this.cam.pos.toArray(),c=this.cam.at.toArray()}else if(this.phase==="descend"){let u=Ui(this.t/7),d=e.x-118+94*u,h=42*(1-u)*(1-u)+.35,f=-.12+.16*u;a(d,h,s,0,f),this.fade=1-Ui(this.t/1.6),this.onFade?.(this.fade),l=[d-16+u*4,h+3-u*1.5,s+11],c=[d+3,h,s],this.t>7&&(this.phase="rollout",this.t=0)}else if(this.phase==="rollout"){let u=Ui(this.t/4),d=e.x-24+46*(1-(1-u)*(1-u));a(d,0,s,0,0),l=[e.x+4,2.4,s+16],c=[d,2,s],this.fade=u>.8?(u-.8)/.2:0,this.onFade?.(this.fade),this.t>4&&(this.phase="stand",this.t=0,r.park())}else if(this.phase==="stand"&&(this.fade=1-Ui(this.t/1.2),this.onFade?.(this.fade),l=[n.x+10,3.5,n.z+14],c=[n.x+4,1.8,n.z+3],this.t>1.3&&!this.landed&&(this.landed=!0,this.onArrive?.(this.airport)),this.t>2.6)){this.finish();return}l&&(this.camPos?this.cam.pos.lerp(new D(...l),1-Math.exp(-t*4)):(this.cam.pos.set(...l),this.camPos=!0),this.cam.at.lerp(new D(...c),1-Math.exp(-t*6)))}finish(){this.active=!1,this.phase=null,this.plane.flying=!1,this.plane.updateSolids(!0),this.fade=0,this.onFade?.(0),this.swapped=!1,this.landed=!1,this.plane=null}},xl=class{constructor(t){this.scene=t,this.time=0;let e=new Cn;vp(e,"#c9524a"),this.liner=new xt(e.geometry(),new Ge({vertexColors:!0,roughness:.9,flatShading:!0})),this.liner.scale.setScalar(1.6),t.add(this.liner),this.linerT=1,this.linerWait=8,this.trail=new ns(new De(1,6,5),new ln({color:"#ffffff",transparent:!0,opacity:.42}),26),this.trail.frustumCulled=!1,t.add(this.trail),this.balloons=[];for(let n=0;n<2;n++){let s=new Zt,r=["#c9524a","#4f7f96"][n],o=["#e9c04b","#f3f1ea"][n],a=new xt(new De(4,12,10),new dn({color:r,flatShading:!0}));a.scale.y=1.15,a.position.y=7,s.add(a);for(let d=0;d<6;d+=2){let h=new xt(new De(4.03,12,10,d*Ed/6,Ed/6),new dn({color:o,flatShading:!0}));h.scale.y=1.15,h.position.y=7,s.add(h)}let l=new xt(new hn(1.6,2.4,8,1,!0),new dn({color:r,side:mn}));l.rotation.x=Math.PI,l.position.y=2.6,s.add(l);let c=new xt(new Ve(1.4,1.1,1.4),new dn({color:"#a78a62"}));s.add(c);for(let d of[-1,1])for(let h of[-1,1]){let f=new xt(new cn(.03,.03,2.6,4),new ln({color:"#4a4f4c"}));f.position.set(d*.55,1.8,h*.55),f.rotation.z=-d*.25,f.rotation.x=h*.25,s.add(f)}let u=new xt(new De(.3,6,5),new ln({color:"#f29b4b"}));u.position.y=1.4,s.add(u),t.add(s),this.balloons.push({group:s,flame:u,x:0,z:0,y:30+n*9,phase:n*2.1,wind:.35+n*.1,dir:1.1+n*.8,placed:!1})}}update(t,e){if(this.time+=t,this.linerT>=1){if(this.linerWait-=t,this.linerWait<=0){let r=Math.random()*Ed,o=Math.random()*200-100,a=Math.cos(r),l=Math.sin(r);this.linerFrom=new D(e.x-a*380-l*o,95+Math.random()*30,e.z-l*380+a*o),this.linerTo=new D(e.x+a*380-l*o,this.linerFrom.y+6,e.z+l*380+a*o),this.linerT=0,this.liner.rotation.set(0,-Math.atan2(this.linerTo.z-this.linerFrom.z,this.linerTo.x-this.linerFrom.x),0),this.linerWait=25+Math.random()*30}}else this.linerT+=t/26,this.liner.position.lerpVectors(this.linerFrom,this.linerTo,this.linerT),this.liner.visible=!0;let n=new le,s=this.linerTo?this.linerTo.clone().sub(this.linerFrom).normalize():new D(1,0,0);for(let r=0;r<26;r++){let o=6+r*4.2,a=.6+r*.22;if(this.linerT>=1||!this.linerTo)n.makeScale(0,0,0);else{let l=this.liner.position.clone().addScaledVector(s,-o);n.compose(l,new He,new D(a,a*.7,a))}this.trail.setMatrixAt(r,n)}this.trail.instanceMatrix.needsUpdate=!0,this.linerT>=1&&(this.liner.visible=!1);for(let r of this.balloons){if(!r.placed||Math.hypot(r.x-e.x,r.z-e.z)>260){r.placed=!0;let o=r.dir+Math.PI+(Math.random()-.5);r.x=e.x+Math.cos(o)*170,r.z=e.z+Math.sin(o)*170}r.x+=Math.cos(r.dir)*r.wind*t,r.z+=Math.sin(r.dir)*r.wind*t,r.group.position.set(r.x,r.y+Math.sin(this.time*.5+r.phase)*1.5,r.z),r.group.rotation.y=this.time*.05+r.phase,r.flame.visible=Math.sin(this.time*2.3+r.phase)>.55,r.flame.scale.setScalar(.8+Math.random()*.5)}}dispose(){this.scene.remove(this.liner),this.scene.remove(this.trail);for(let t of this.balloons)this.scene.remove(t.group)}};var Os=$n.damp,Hr=$n.clamp;function Y2(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128);for(let n=0;n<2600;n++){let s=Math.random()*.09;t.fillStyle=`rgba(70,45,25,${s})`,t.fillRect(Math.random()*128,Math.random()*128,1+Math.random()*2,1)}let e=new Li(i);return e.wrapS=e.wrapT=Cs,e.repeat.set(2,2),e}var bl=class{constructor(t,e=1){this.size=e,this.root=new Zt,this.root.scale.setScalar(e),this.model=new Zt,this.root.add(this.model),t.add(this.root),this.materials={};let n=Y2(),s=(h,f,g=.95,x=null)=>this.materials[h]=new Ge({color:f,roughness:g,map:x});s("fur","#c8874a",.96,n),s("light","#e9dcc4",.97,n),s("stripe","#8f5c32",.97),s("ear","#c9967e"),s("eye","#7fa05a",.55),s("pupil","#20281f",.4),s("shine","#fff9e8",.3),s("nose","#b97a6b",.7),s("collar","#5d7463",.8),s("bell","#c9a35c",.45);let r=new De(1,18,14),o=(h,f,g,x,p,m,b,_)=>{let y=new xt(r,this.materials[f]);return y.position.set(g,x,p),y.scale.set(m,b,_),y.castShadow=!0,y.receiveShadow=!0,h.add(y),y};this.spine=new Zt,this.model.add(this.spine),this.body=o(this.spine,"fur",0,.68,-.08,.34,.34,.62),this.chest=o(this.spine,"fur",0,.72,.3,.31,.33,.34),o(this.spine,"light",0,.6,.38,.24,.24,.2),this.hind=o(this.spine,"fur",0,.68,-.42,.32,.32,.32),this.head=new Zt,this.head.position.set(0,1.02,.56),this.spine.add(this.head),o(this.head,"fur",0,0,0,.33,.3,.29),o(this.head,"light",0,-.11,.22,.22,.14,.12),o(this.head,"light",-.095,-.1,.27,.11,.085,.08),o(this.head,"light",.095,-.1,.27,.11,.085,.08),this.eyes=[],this.pupils=[];for(let h of[-1,1]){let f=o(this.head,"eye",h*.15,.035,.255,.055,.06,.03),g=o(f,"pupil",0,0,.7,.45,.72,.3);o(f,"shine",-.25,.3,.85,.18,.18,.18),this.eyes.push(f),this.pupils.push(g);let x=new Zt;x.position.set(h*.22,.22,-.02),x.rotation.z=-h*.22,this.head.add(x);let p=new hn(.15,.34,4);p.rotateY(Math.PI/4);let m=new xt(p,this.materials.fur);m.position.y=.1,m.scale.z=.6,m.castShadow=!0,x.add(m);let b=new xt(new hn(.09,.22,4),this.materials.ear);b.rotation.y=Math.PI/4,b.position.set(0,.1,.055),b.scale.z=.25,x.add(b),h===1?this.twitchEar=x:this.otherEar=x}this.hatMount=new Zt,this.hatMount.position.set(0,.24,-.03),this.hatMount.rotation.x=-.12,this.head.add(this.hatMount),this.hatId="none",o(this.head,"nose",0,-.075,.345,.05,.035,.03);let a=new we().setFromPoints([new D(0,-.1,.34),new D(0,-.14,.33),new D(-.05,-.155,.32),new D(0,-.14,.33),new D(.05,-.155,.32)]);this.head.add(new _o(a,new Dr({color:"#7d6a55"})));let l=[];for(let h of[-1,1])for(let f=0;f<3;f++)l.push(new D(h*.14,-.1+f*.025,.31),new D(h*.46,-.14+f*.06,.28+(f-1)*.03));this.head.add(new Wa(new we().setFromPoints(l),new Dr({color:"#e8dcc4",transparent:!0,opacity:.7})));for(let h of[-.095,0,.095]){let f=o(this.head,"stripe",h,.215,.13,.028,.024,.1);f.rotation.x=.45}for(let h of[-.42,-.16,.1]){let f=new vo([new D(-.28,.82,h),new D(-.15,.98,h),new D(0,1.02,h),new D(.15,.98,h),new D(.28,.82,h)]),g=new xt(new $a(f,12,.024,6,!1),this.materials.stripe);g.castShadow=!0,this.spine.add(g)}this.legs=[];let c=[{x:-.22,z:.34,front:!0,phase:0},{x:.22,z:.34,front:!0,phase:Math.PI},{x:-.22,z:-.42,front:!1,phase:Math.PI},{x:.22,z:-.42,front:!1,phase:0}];for(let h of c){let f=new Zt;f.position.set(h.x,.55,h.z),this.spine.add(f),o(f,"fur",0,-.13,0,.095,.18,.1),h.front||o(f,"fur",0,-.04,-.02,.14,.18,.15);let g=new Zt;g.position.y=-.27,f.add(g),o(g,"fur",0,-.12,0,.075,.15,.08);let x=o(g,"light",0,-.26,.03,.1,.075,.13);this.legs.push({hip:f,knee:g,paw:x,...h})}this.tail=new Zt,this.tail.position.set(0,.78,-.66),this.spine.add(this.tail),this.tailSegments=[];let u=this.tail;for(let h=0;h<6;h++){let f=new Zt;f.position.set(0,h===0?0:.16,h===0?0:-.035),u.add(f);let g=.075-h*.007;o(f,h===5?"light":"fur",0,.08,-.015,g,.1,g),this.tailSegments.push(f),u=f}let d=new xt(new is(.26,.03,8,24),this.materials.collar);d.position.set(0,.88,.44),d.rotation.x=.2,this.spine.add(d),o(this.spine,"bell",0,.72,.66,.055,.065,.055),this.phase=0,this.restBlend=0,this.climbBlend=0,this.blinkTime=3,this.squash=0,this.tailSway=0,this.headLook=0,this.shadow=new xt(new li(2.1,2.1),new ln({map:this.shadowTexture(),transparent:!0,opacity:.22,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,t.add(this.shadow)}shadowTexture(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,2,32,32,31);return n.addColorStop(0,"rgba(35,45,30,.65)"),n.addColorStop(.4,"rgba(35,45,30,.3)"),n.addColorStop(1,"rgba(35,45,30,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),new Li(t)}setHat(t,e){for(;this.hatMount.children.length;)this.hatMount.remove(this.hatMount.children[0]);e&&this.hatMount.add(e),this.hatId=e?t:"none"}update(t,e,n,s,r=!1){let{speed:o=0,grounded:a=!0,climbing:l=!1,resting:c=!1,vy:u=0,turnRate:d=0,accel:h=0,landImpact:f=0,runBlend:g=0}=n,x=o>.15&&!c,p=o>6.2?1:0;this.phase+=t*(2.4+Math.min(o,13)*1.45),this.restBlend=Os(this.restBlend,c?1:0,4.5,t),this.climbBlend=Os(this.climbBlend,l?1:0,10,t),this.squash=Os(this.squash,f,9,t);let m=Hr(o/5,0,1),b=x&&a?Math.abs(Math.sin(this.phase*(p?1:2)))*.035*m:Math.sin(e*1.8)*.008,_=Hr(-d*.045,-.32,.32)*m,y=Hr(-h*.012,-.16,.16)+(a?0:Hr(-u*.025,-.28,.22));this.model.rotation.x=-this.climbBlend*1.12+y*(1-this.climbBlend),this.model.rotation.z=_*(1-this.restBlend)+(x&&a?Math.sin(this.phase)*.018*m:0),this.model.position.y=b-this.restBlend*.4-this.squash*.09,this.model.position.z=-this.climbBlend*.1,this.spine.rotation.x=Math.sin(this.phase*2)*.025*m+this.restBlend*.08,this.spine.scale.y=1-this.squash*.12+this.restBlend*.02,this.spine.scale.x=1+this.squash*.08,this.body.scale.z=.62+Math.sin(this.phase*2)*.015*m,this.chest.position.y=.72+Math.sin(this.phase*2+.6)*.012*m,this.hind.position.y=.68+Math.sin(this.phase*2+Math.PI)*.014*m;for(let A of this.legs){let M=this.phase+A.phase+(p?A.front?0:.55:0),v=Math.max(0,Math.sin(M)),E=x&&a?-Math.cos(M)*(.42+.3*g)*m:0,I=x&&a?v*(.55+.35*g)*m:0;if(l){let P=this.phase*1.25+A.phase;E=-.85+Math.sin(P)*.55,I=.7+Math.max(0,Math.cos(P))*.6}else a||(E=A.front?-.7+Hr(u*.03,-.2,.25):.55-Hr(u*.025,-.2,.25),I=A.front?.8:.45);E*=1-this.restBlend,I*=1-this.restBlend,A.hip.rotation.x=Os(A.hip.rotation.x,E+this.restBlend*(A.front?-1.42:-1.1),18,t),A.knee.rotation.x=Os(A.knee.rotation.x,I+this.restBlend*(A.front?.08:2.35),18,t),A.hip.rotation.z=(A.x>0?1:-1)*this.restBlend*(A.front?.1:.42),A.paw.rotation.x=-A.knee.rotation.x*.45}this.head.position.y=1.02-this.restBlend*.2-b*.55,this.head.position.z=.56+this.restBlend*.04,this.head.rotation.x=this.restBlend*.22+(l?-.25:0)-y*.55+Math.sin(this.phase*2)*.012*m,this.headLook=Os(this.headLook,!x&&!c&&!r?Math.sin(e*.5)*.18:-_*.5,3,t),this.head.rotation.y=this.headLook,this.head.rotation.z=!x&&!c?Math.sin(e*.8)*.02:-_*.25,this.tailSway=Os(this.tailSway,x?Math.sin(this.phase*.7)*.22:Math.sin(e*1.6)*.16,4,t);for(let A=0;A<this.tailSegments.length;A++){let M=this.tailSegments[A],v=A*.45;M.rotation.z=Math.sin(e*(c?1.1:2.2)-v)*(c?.08:.12)+this.tailSway*(A/6),M.rotation.x=(A===0?.35:.12)+Math.sin(e*1.3-v)*.05+this.restBlend*(A===0?-1.45:-.06)+(l?.18:0)+_*.08*A,M.rotation.y=this.restBlend*(A===0?.3:.45)}let S=!x&&Math.sin(e*.7)>.985?Math.sin(e*25)*.12:0;this.twitchEar.rotation.z=-.22+S-_*.15,this.otherEar.rotation.z=.22-S*.6-_*.15,this.blinkTime-=t,this.blinkTime<-.13&&(this.blinkTime=3+Math.random()*4);let w=this.blinkTime<0||c?.1:1;for(let A of this.eyes)A.scale.y=.06*w;for(let A of this.pupils)A.scale.y=.72*w;this.shadow.position.set(this.root.position.x,s+.02,this.root.position.z);let T=this.size*(1+Math.min(3,Math.max(0,this.root.position.y-s))*.35);this.shadow.scale.set(T,T,1),this.shadow.material.opacity=.3/(1+Math.max(0,this.root.position.y-s)*.8)}};var yl=class{constructor(){this.context=null,this.enabled=!0,this.volume=.4,this.started=!1,this.birdTimer=4,this.noteTimer=1,this.chord=0,this.resting=!1}async start(){if(!this.context){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.context=new t;let e=this.context;this.master=e.createGain(),this.master.gain.value=this.enabled?this.volume*.55:0,this.master.connect(e.destination);let n=e.createBuffer(1,e.sampleRate*4,e.sampleRate),s=n.getChannelData(0),r=0;for(let c=0;c<s.length;c++)r=(r+(Math.random()*2-1)*.018)/1.018,s[c]=r*3.5;let o=e.createBufferSource();o.buffer=n,o.loop=!0;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=550;let l=e.createGain();l.gain.value=.11,o.connect(a),a.connect(l),l.connect(this.master),o.start(),this.wind=o}if(this.started=!0,this.context.state==="suspended")try{await this.context.resume()}catch{}}setEnabled(t){this.enabled=t,t&&this.start(),this.applyVolume()}setVolume(t){this.volume=t,this.applyVolume()}applyVolume(){this.context&&this.master.gain.setTargetAtTime(this.enabled?this.volume*.55:0,this.context.currentTime,.15)}tone(t,e,n,s=.06,r="sine",o=null){if(!this.context||!this.enabled)return;let a=this.context,l=a.createOscillator(),c=a.createGain();l.type=r,l.frequency.setValueAtTime(t,e),o&&l.frequency.exponentialRampToValueAtTime(o,e+n*.7),c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(s,e+Math.min(.04,n*.15)),c.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(c),c.connect(this.master),l.start(e),l.stop(e+n+.05),l.onended=()=>{l.disconnect(),c.disconnect()}}update(t){if(!(!this.started||!this.enabled||!this.context||this.context.state!=="running")){if(this.birdTimer-=t,this.noteTimer-=t,this.birdTimer<0){let e=this.context.currentTime,n=1700+Math.random()*800;for(let s=0;s<3;s++)this.tone(n+s*110,e+s*.15,.11,.028,"sine",n+500+s*70);this.birdTimer=7+Math.random()*12}if(this.noteTimer<0){let e=[[196,246.94,293.66],[174.61,220,261.63],[164.81,196,246.94],[174.61,220,293.66]],n=this.context.currentTime;for(let[s,r]of e[this.chord%e.length].entries())this.tone(r,n+s*.35,6,.018);this.chord++,this.noteTimer=10+Math.random()*4}}}discovery(){if(!this.context)return;let t=this.context.currentTime;[523.25,659.25,783.99].forEach((e,n)=>this.tone(e,t+n*.14,1.3,.07))}jump(){this.context&&this.tone(280,this.context.currentTime,.15,.025,"sine",440)}land(){this.context&&this.tone(130,this.context.currentTime,.1,.025,"sine",80)}greet(){if(!this.context)return;let t=this.context.currentTime;this.tone(660,t,.16,.03,"sine",880),this.tone(880,t+.14,.22,.028,"sine",990)}tweet(){if(!this.context)return;let t=this.context.currentTime;this.tone(2400,t,.07,.012,"sine",3100),this.tone(2900,t+.09,.06,.01,"sine",2500)}chirp(){this.context&&this.tone(1500,this.context.currentTime,.09,.02,"sine",2100)}shiny(){if(!this.context)return;let t=this.context.currentTime;this.tone(1318.5,t,.18,.035,"sine",1760),this.tone(1760,t+.09,.3,.03,"sine",2093),this.tone(2637,t+.18,.4,.018,"triangle")}clatter(t="metal",e=!1){if(!this.context)return;let n=this.context.currentTime,s=e?.5:1;t==="metal"?(this.tone(820,n,.14,.04*s,"square",260),this.tone(1900,n+.02,.08,.02*s,"triangle",900),this.tone(640,n+.12,.12,.02*s,"square",200)):t==="glass"?(this.tone(2400,n,.1,.03*s,"sine",1500),this.tone(3100,n+.05,.14,.02*s,"triangle",2e3)):t==="clay"?(this.tone(480,n,.1,.035*s,"triangle",140),this.tone(900,n+.03,.06,.015*s,"square",400)):t==="wood"?(this.tone(260,n,.09,.04*s,"triangle",110),this.tone(420,n+.06,.07,.02*s,"triangle",200)):this.tone(330,n,.1,.03*s,"triangle",120)}quack(t=!1,e=!1){if(!this.context)return;let n=this.context.currentTime,s=t?620:330,r=e?.02:.035;this.tone(s,n,.12,r,"sawtooth",s*.72),e||this.tone(s*1.05,n+.15,.1,r*.8,"sawtooth",s*.7),t&&this.tone(s*1.2,n+.26,.08,r*.6,"sawtooth",s*.9)}caw(){if(!this.context)return;let t=this.context.currentTime;this.tone(520,t,.22,.03,"sawtooth",380),this.tone(500,t+.3,.2,.025,"sawtooth",360)}whistle(t=0){if(!this.context)return;let e=this.context.currentTime,n=Math.max(.004,.05*Math.min(1,40/Math.max(1,t)));this.tone(880,e,.5,n,"square",870),this.tone(1320,e,.5,n*.5,"square",1310),this.tone(880,e+.6,.9,n,"square",860),this.tone(1320,e+.6,.9,n*.5,"square",1300)}chuff(t=0,e=.5){if(!this.context)return;let n=this.context.currentTime,s=Math.max(.002,.03*Math.min(1,30/Math.max(1,t)));this.tone(120+e*60,n,.09,s,"sawtooth",60),this.tone(1800,n,.05,s*.3,"square",900)}jet(){if(!this.context)return;let t=this.context.currentTime;for(let e=0;e<10;e++)this.tone(90+e*7,t+e*.9,1.2,.025+e*.002,"sawtooth",110+e*9);for(let e=0;e<6;e++)this.tone(2200+e*180,t+6+e*.5,1,.006,"sine",2600+e*180)}purr(){this.context&&this.tone(58,this.context.currentTime,.65,.025,"triangle",52)}suspend(){this.context?.state==="running"&&this.context.suspend().catch(()=>{})}resume(){this.started&&this.context?.state==="suspended"&&this.context.resume().catch(()=>{})}};var ne=Object.freeze({scale:.34,radius:.16,height:.49,step:.25,gravity:22,jump:7.7,sprintJump:8.25,climb:6.8}),di=$n.clamp,Vr=1e-5,Sp=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),Mp=(i,t,e,n)=>i+Sp(i,t)*(1-Math.exp(-e*n));function _l(i,t,e){if(i.shape==="cylinder")return Math.hypot(t-i.x,e-i.z)<=i.r?i.maxY:-1/0;if(i.shape==="ellipsoid"){let n=((t-i.x)/i.rx)**2+((e-i.z)/i.rz)**2;return n<=.88?i.y+i.ry*Math.sqrt(1-n):-1/0}if(i.shape==="roof"){let n=i.building,s=n.w/2+.55,r=n.d/2+.55;if(Math.abs(t-n.x)>s||Math.abs(e-n.z)>r)return-1/0;if(n.roofType===0){let o=n.ridgeX?e-n.z:t-n.x,a=n.ridgeX?r:s;return n.h+n.roofRise*Math.max(0,1-Math.abs(o)/a)}if(n.roofType===1){let o=1-Math.abs(t-n.x)/s,a=1-Math.abs(e-n.z)/r;return n.h+n.roofRise*Math.min(1,Math.max(0,Math.min(o,a)/.84))}return n.h}return t>=i.minX&&t<=i.maxX&&e>=i.minZ&&e<=i.maxZ?i.maxY:-1/0}var vl=class{constructor(t){this.world=t,this.stamp=0,this.seen=new WeakMap,this.dynamic=[]}query(t,e,n=1){let s=this.world.spatial,r=[],o=++this.stamp;for(let a of this.dynamic)Math.abs(a.x-t)<n+a.r&&Math.abs(a.z-e)<n+a.r&&r.push(a);if(!s)return r.push(...this.world.colliders),r;for(let a=Math.floor((t-n)/8);a<=Math.floor((t+n)/8);a++)for(let l=Math.floor((e-n)/8);l<=Math.floor((e+n)/8);l++){let c=s.get(a+","+l);if(c)for(let u of c)this.seen.get(u)!==o&&(this.seen.set(u,o),r.push(u))}return r}highest(t,e,n){let s=Math.min(n,this.world.groundHeight(t,e));for(let r of this.query(t,e,.2)){if(r.walkable===!1)continue;let o=_l(r,t,e);Number.isFinite(o)&&o<=n&&o>s&&(s=o)}return s}support(t,e,n,s=!0){let r=this.world.groundHeight(t,e),o={y:r<=n+Vr?r:0,solid:null};for(let a of this.query(t,e,.2)){if(a.walkable===!1||!s&&a.shape==="roof")continue;let l=_l(a,t,e);Number.isFinite(l)&&l<=n+Vr&&l>o.y&&(o={y:l,solid:a})}return o}resolve(t,e,n,s=null){let r=0;for(let o=0;o<3;o++){let a=!1;for(let l of this.query(t.x,t.z,e+.1)){if(l===s||l.sensor||l.shape==="roof"||s&&l.tree&&s.tree&&l.tree===s.tree||t.y+n<=l.minY+.025||t.y>=l.maxY-.035)continue;let c,u,d,h;if(l.shape==="cylinder"||l.shape==="ellipsoid"){let g=l.r,x=l.r;if(l.shape==="ellipsoid"){let m=di((t.y+n*.45-l.y)/l.ry,-.98,.98),b=Math.sqrt(1-m*m);g=l.rx*b,x=l.rz*b;let _=_l(l,t.x,t.z);if(Number.isFinite(_)&&t.y>=_-.09)continue}if(c=t.x-l.x,u=t.z-l.z,Math.hypot(c/g,u/x)>=1+e/Math.min(g,x)||(d=Math.hypot(c,u),d<Vr&&(c=1,u=0,d=1),h=Math.min(g,x)+e,d>=h))continue}else{let g=di(t.x,l.minX,l.maxX),x=di(t.z,l.minZ,l.maxZ);if(c=t.x-g,u=t.z-x,d=Math.hypot(c,u),d>=e)continue;if(d<Vr){let p=[{d:t.x-l.minX,x:-1,z:0},{d:l.maxX-t.x,x:1,z:0},{d:t.z-l.minZ,x:0,z:-1},{d:l.maxZ-t.z,x:0,z:1}].sort((m,b)=>m.d-b.d);c=p[0].x,u=p[0].z,d=0,h=e+p[0].d}else h=e}let f=h-d+.001;t.x+=c/(d||1)*f,t.z+=u/(d||1)*f,r++,a=!0}if(!a)break}return r}ceiling(t,e,n,s,r,o){let a=e;for(let l of this.query(n,s,o)){if(l.shape==="roof"||l.shape==="ellipsoid"||l.sensor)continue;let c=_l(l,n,s);!Number.isFinite(c)||l.minY<=t+r-.025||t+r<=l.minY+.02&&e+r>=l.minY&&(a=Math.min(a,l.minY-r-.01))}return a}nearbyWall(t,e=.52,n=null,s=null){let r=null,o=1/0;for(let a of this.query(t.x,t.z,e+.4)){if(a===s||!a.climbable||a.maxY<=t.y+.015||a.minY>t.y+ne.height)continue;let l,c,u,d,h;if(a.shape==="cylinder"||a.shape==="ellipsoid"){l=t.x-a.x,c=t.z-a.z,h=Math.hypot(l,c)||1,l/=h,c/=h;let x=a.r;if(a.shape==="ellipsoid"){let p=di((t.y-a.y)/a.ry,-.95,.95);x=Math.min(a.rx,a.rz)*Math.sqrt(1-p*p)}u=a.x+l*x,d=a.z+c*x,h=Math.max(0,Math.hypot(t.x-a.x,t.z-a.z)-x)}else if(u=di(t.x,a.minX,a.maxX),d=di(t.z,a.minZ,a.maxZ),l=t.x-u,c=t.z-d,h=Math.hypot(l,c),h<Vr){let x=[{d:t.x-a.minX,x:-1,z:0},{d:a.maxX-t.x,x:1,z:0},{d:t.z-a.minZ,x:0,z:-1},{d:a.maxZ-t.z,x:0,z:1}].sort((p,m)=>p.d-m.d);l=x[0].x,c=x[0].z,h=0}else l/=h,c/=h;if(h>e)continue;let f=n==null?0:Math.max(0,-(l*Math.sin(n)+c*Math.cos(n))),g=h-f*.12-(a.kind==="tree"?.04:0);g<o&&(o=g,r={solid:a,nx:l,nz:c,qx:u,qz:d,distance:h})}return r}};function wp(i){return{pos:new D(i?.x??1.1,i?.y??0,i?.z??7.1),vx:0,vz:0,vy:0,heading:i?.heading??.55,speed:0,grounded:!0,coyote:.14,jumpBuffer:0,jumpCut:!1,climbCooldown:0,climbing:null,mantling:0,landImpact:0,turnRate:0,accel:0,runBlend:0,moveAmount:0,airTime:0,support:null,distance:0}}function Ep(i,t,e,n,s={}){i.climbCooldown=Math.max(0,i.climbCooldown-n),i.jumpBuffer=Math.max(0,i.jumpBuffer-n),i.mantling=Math.max(0,i.mantling-n),i.landImpact*=Math.exp(-9*n);let r=t.x,o=t.y;i.mantling>0&&(r=o=0);let a=Math.hypot(r,o),l=Math.min(1,a);a>1e-4?(r/=a,o/=a):r=o=0,i.moveAmount=l;let c=e.nearbyWall(i.pos,.5,i.heading,i.grounded?i.support:null),u=t.climb||t.autoClimb&&l>.3&&!i.grounded&&i.airTime>.09&&i.vy<3.2;if(u&&c&&i.climbCooldown===0&&!t.resting){let P=c.solid;if(i.climbing=c,i.grounded=!1,i.vy=0,i.vx=i.vz=0,i.speed=ne.climb,i.heading=Mp(i.heading,Math.atan2(-c.nx,-c.nz),20,n),i.pos.y+=ne.climb*n,P.shape==="ellipsoid"||P.tree){let N=P.shape==="ellipsoid"?P:P.tree?.canopies?.find(G=>i.pos.y>G.y-G.ry*.8);if(N){let G=di((i.pos.y-N.y)/N.ry,-.96,.98),k=Math.min(N.rx,N.rz)*Math.sqrt(1-G*G)+ne.radius+.035,V=Math.hypot(i.pos.x-N.x,i.pos.z-N.z)||1,U=(i.pos.x-N.x)/V,H=(i.pos.z-N.z)/V;i.pos.x=N.x+U*k,i.pos.z=N.z+H*k,i.heading=Math.atan2(-U,-H)}else P.shape!=="ellipsoid"&&(i.pos.x+=(c.qx+c.nx*(ne.radius+.025)-i.pos.x)*(1-Math.exp(-24*n)),i.pos.z+=(c.qz+c.nz*(ne.radius+.025)-i.pos.z)*(1-Math.exp(-24*n)))}else i.pos.x+=(c.qx+c.nx*(ne.radius+.025)-i.pos.x)*(1-Math.exp(-24*n)),i.pos.z+=(c.qz+c.nz*(ne.radius+.025)-i.pos.z)*(1-Math.exp(-24*n));if(i.pos.y>=P.maxY-.035){let N=P.shape==="box"?c.nx:(i.pos.x-P.x)/(Math.hypot(i.pos.x-P.x,i.pos.z-P.z)||1),G=P.shape==="box"?c.nz:(i.pos.z-P.z)/(Math.hypot(i.pos.x-P.x,i.pos.z-P.z)||1),k=P.shape!=="box"&&Math.min(P.rx??P.r,P.rz??P.r)<.6;k?(i.pos.x=P.x,i.pos.z=P.z):(i.pos.x-=N*(ne.radius+.24),i.pos.z-=G*(ne.radius+.24)),i.pos.y=Math.max(e.highest(i.pos.x,i.pos.z,P.maxY+1.6),P.minY)+.025,i.vy=k?.6:1.2,i.vx=k?0:-N*1.1,i.vz=k?0:-G*1.1,i.climbing=null,i.climbCooldown=.38,i.mantling=.3,i.jumpBuffer=0,s.mantle?.(P)}return{wall:c,climbed:!0}}i.climbing&&!u&&(i.vy=.4,i.climbCooldown=.18),i.climbing=null;let d=!!t.sprint;i.runBlend+=((d&&l>.05?1:0)-i.runBlend)*(1-Math.exp(-9*n));let h=l>.02?.32+.68*Math.pow(l,.8):0,f=(t.baseSpeed+(t.sprintSpeed-t.baseSpeed)*i.runBlend)*h;t.resting&&(f=0),e.world.inWater(i.pos.x,i.pos.z)&&i.pos.y<.2&&(f*=.7);let g=Math.cos(t.yaw),x=Math.sin(t.yaw),p=(r*g+o*x)*f,m=(-r*x+o*g)*f,b=Math.hypot(i.vx,i.vz),_=i.grounded?l>.02?24:30:10,y=1-Math.exp(-_*n);i.vx+=(p-i.vx)*y,i.vz+=(m-i.vz)*y,i.accel=di((Math.hypot(i.vx,i.vz)-b)/n,-40,40),i.coyote=i.grounded?.14:Math.max(0,i.coyote-n),t.jump&&(i.jumpBuffer=.18,t.jump=!1),i.jumpBuffer>0&&i.coyote>0&&!t.resting&&(i.vy=d?ne.sprintJump:ne.jump,i.grounded=!1,i.coyote=0,i.jumpBuffer=0,i.jumpCut=!1,s.jump?.()),!t.jumpHeld&&i.vy>4&&!i.jumpCut&&(i.vy*=.86,i.jumpCut=!0);let S=i.pos.clone(),w=Math.hypot(i.vx,i.vz)*n,T=Math.max(1,Math.ceil(w/(ne.radius*.7)));for(let P=0;P<T;P++){let N=i.pos.x+i.vx*n/T,G=i.pos.z+i.vz*n/T,k=i.pos.y;if(i.grounded){let U=Math.hypot(i.vx,i.vz)||1,H=i.vx/U*ne.radius,Z=i.vz/U*ne.radius,it=e.support(N,G,S.y+ne.step),gt=e.support(N+H,G+Z,S.y+ne.step),Mt=gt.y>it.y&&gt.y<=S.y+ne.step?gt:it;Mt.y>i.pos.y&&Mt.y<=S.y+ne.step&&(k=Mt.y)}i.pos.set(N,k,G);let V=e.resolve(i.pos,ne.radius,ne.height);if(i.grounded&&i.pos.y<.2&&!e.world.inWater(S.x,S.z)){let U=e.world.inWater(i.pos.x,i.pos.z);if(U){let H=i.pos.x-U.x,Z=i.pos.z-U.z,it=Math.hypot(H,Z)||1e-6,gt=U.r+ne.radius*.5;i.pos.x=U.x+H/it*gt,i.pos.z=U.z+Z/it*gt;let Mt=i.vx*(H/it)+i.vz*(Z/it);Mt<0&&(i.vx-=Mt*H/it,i.vz-=Mt*Z/it),V=(V||0)+1}}if(V){let U=i.pos.x-N,H=i.pos.z-G,Z=Math.hypot(U,H);if(Z>Vr){let it=U/Z,gt=H/Z,Mt=i.vx*it+i.vz*gt;Mt<0&&(i.vx-=Mt*it,i.vz-=Mt*gt)}}}let A=i.pos.y;i.vy=Math.max(-28,i.vy-ne.gravity*n);let M=A+i.vy*n;if(i.vy>0){let P=e.ceiling(A,M,i.pos.x,i.pos.z,ne.height,ne.radius);P<M&&(M=P,i.vy=0)}let v=i.grounded;i.grounded=!1;let E=e.support(i.pos.x,i.pos.z,A+(v?ne.step:.025));if(v&&Math.hypot(i.vx,i.vz)>.3){let P=Math.hypot(i.vx,i.vz)||1,N=e.support(i.pos.x+i.vx/P*ne.radius,i.pos.z+i.vz/P*ne.radius,A+.01);N.y>E.y&&N.y<=A+.01&&(E=N)}let I=v&&i.vy<=0&&i.vy>-1.2&&E.y<A&&A-E.y<=ne.step*.8;if(i.vy<=0&&M<=E.y+.002&&A>=E.y-(v?ne.step:.04)||I){if(E.solid?.bouncy&&i.vy<-2.5)return i.pos.y=E.y+.01,i.vy=Math.min(E.solid.bouncy,Math.max(7,-i.vy*.92+(t.jumpHeld?1.5:0))),i.grounded=!1,i.support=null,i.airTime=0,i.jumpCut=!0,s.bounce?.(E.solid),i.speed=Math.hypot(i.vx,i.vz),{wall:c,climbed:!1};i.pos.y=E.y,i.vy=0,i.grounded=!0,i.support=E.solid,i.jumpCut=!1,i.airTime=0,v||(i.landImpact=di(Math.abs(E.y-M)*2+.25,.2,1),s.land?.(E.solid))}else i.pos.y=M,i.support=null,i.airTime+=n;if(i.speed=Math.hypot(i.vx,i.vz),i.distance+=i.speed*n,i.speed>.12){let P=Math.atan2(i.vx,i.vz),N=Sp(i.heading,P);i.heading=Mp(i.heading,P,19,n),i.turnRate+=(di(N*12,-7,7)-i.turnRate)*(1-Math.exp(-12*n))}else i.turnRate*=Math.exp(-12*n);return(!Number.isFinite(i.pos.x+i.pos.y+i.pos.z)||i.pos.y<-8)&&(i.pos.set(1.1,1,7.1),i.vx=i.vz=i.vy=0),{wall:c,climbed:!1}}var Tp=["Oh! Hello there, sweetheart.","Well, aren\u2019t you a handsome one.","Pspsps\u2026 come here, little one.","Who\u2019s a good kitty? You are.","Look at those whiskers!","Hello, little neighbour.","You look like you own this street.","Aw. Soft as a cloud.","Off on an adventure, are we?","Good afternoon, your majesty.","Hi, puss. Lovely day for a wander.","Such a sweet face.","There\u2019s my favourite cat.","Careful on those rooftops, you.","Hello, fluff. Chin scratches?"],Ml=["Lovely afternoon, isn\u2019t it?","The bakery had cinnamon buns today.","Did you see that cat on the roof?","I should water the balcony plants.","Not a cloud in the sky.","Have you tried the new tea shop?","The bus was late again. Of course.","My tomatoes are finally coming in.","Mrs. Finch says hello.","We should sit by the pond later.","Someone left bunting up from the fete.","I could nap in this sun."],Ap=["Hm, where did I put my keys?","What a pretty door.","Oh, that\u2019s a nice bench.","I\u2019ll just rest a moment."],Z2={kid:{greet:["KITTY!!","Mum, look, a cat!","Can I keep it? Please?","Here kitty kitty kitty!"],idle:["Race you to the swings!","I\u2019m the king of the castle!","Wheee!"]},grandma:{greet:["Oh, hello, my darling.","Come here, pet. I\u2019ve a bit of ham.","You remind me of my old Tibbles.","Mind the road, sweetheart."],idle:["My knees know rain is coming.","Where did I leave my glasses\u2026","Lovely to get some air."]},grandpa:{greet:["Well now. Hello, old chap.","Scratch behind the ears? Like so.","Finest cat on the street, you are.","Hmph. Cats. Go on then."],idle:["In my day this was all fields.","Nice bit of sun.","Bus is late. As usual."]},uncle:{greet:["Ey up, kitty!","Hello, you little rascal.","Big cat energy, that one.","Who\u2019s this, then?"],idle:["I could murder a pie.","Beautiful day for it.","Right, where was I."]},vendor:{greet:["Oh, hello, puss. No fish here, sorry!","Shoo\u2014 oh, you\u2019re lovely, actually.","Mind the apples, little one.","A customer! Of sorts."],idle:["Fresh today! Lovely and fresh!","Two for one, last of the day!","Get your lovely bread here!","Best in town, honest."]},barista:{greet:["Oat milk for the cat? Coming up.","Hello, regular. Usual spot?","Careful, the machine\u2019s hot.","You\u2019re allowed in. Just this once."],idle:["Flat white for Priya!","One more and then I\u2019ll close.","That grinder needs a service."]},grocer:{greet:["No, those tins aren\u2019t for you.","Hello, trouble.","Have a sniff, but don\u2019t knock it over.","Aw. Alright, you can stay."],idle:["Three for two on the beans.","Must restock aisle one.","Nice and quiet today."]},worker:{greet:["Oi oi! Hello, kitty.","Hard hat area, mate.","Site cat! We\u2019ve got a site cat!","Mind your paws round here."],idle:["Tea break in five.","Pass us that spanner.","Nearly done with this lot."]},foreman:{greet:["Health and safety\u2026 allows cats.","Hello, inspector.","Right, who let the cat in?"],idle:["Where\u2019s that delivery?","Clipboard says we\u2019re behind.","Come on, lads."]},suit:{greet:["Oh\u2014 hello. I\u2019m late, but hello.","You\u2019d do better in this meeting than me.","Hi, puss. Quick scratch, then I must dash."],idle:["Running late, running late.","Call me back about the thing.","Fifteenth floor. Ugh."]},shopper:{greet:["Hello, gorgeous.","Careful, there\u2019s eggs in here.","Oh, what a love."],idle:["Did I get milk? I got milk.","Those flowers are lovely.","I\u2019ll just look at the bread."]},customer:{greet:["Hello! Come and sit with me.","Oh, a caf\xE9 cat. Perfect.","You can have the crumbs."],idle:["This is a very good bun.","One more coffee won\u2019t hurt."]},resident:{greet:["How did you get in here?!","Oh. Hello. Make yourself at home, I suppose.","Don\u2019t scratch the sofa."],idle:["I should hoover.","Where\u2019s the remote?","Tea. Tea would be good."]},parent:{greet:["Gently, gently \u2014 look, a cat.","Hello, puss. Don\u2019t mind the kids."],idle:["Five more minutes, then home.","Not so high, love!"]},driver:{greet:["Alright, kitty.","Don\u2019t get under the wheels now."],idle:["Two more drops and I\u2019m done.","Traffic was murder."]},jogger:{greet:["Hey! Quick\u2014 hi\u2014 bye!","Can\u2019t stop! Lovely cat!"],idle:["Pace, pace, pace."]}},$2=["#f1d4bd","#e9c4a6","#d9a98a","#c48b67","#a46f4d","#8d5a3b","#6b4529","#f6dfcc"],J2=["#c9d8c6","#d9b8a8","#a7b7c7","#e6d6b0","#b48c9c","#8ea48c","#d3c7e0","#c3b59b","#9fb8b4","#e2c3a0","#d9544f","#4f7f96","#e9c04b","#f3ead6","#6f9a4f"],K2=["#5c6670","#7b6f5f","#4f5a52","#8a8072","#44505a","#6f6a80","#9b9179","#3b4f6b","#8f5f4e"],j2=["#2e2420","#5a3e2c","#8a6a46","#c7a16b","#3b3b40","#b4553a","#1d1a1a","#e0c08a"],Rp=["#d9d2c4","#c4c0b8","#eae6dc","#a9a49b"],Ni=Co.offsets,jt=new Ve(1,1,1),_n=new De(1,10,8),Q2=new cn(.72,1,1,10),Sl=new De(1,10,8,0,Math.PI*2,0,Math.PI/2),Ad=new cn(1,1,1,12),s_=new hn(1,1,8),ty=i=>Math.abs((i%It+It)%It)<.01;function ey(i,t){let e=Math.floor(i/It)*It,n=i-e;if(t>0){for(let s of Ni)if(s>n+.01)return e+s;return e+It+Ni[0]}for(let s=Ni.length-1;s>=0;s--)if(Ni[s]<n-.01)return e+Ni[s];return e-It+Ni[Ni.length-1]}function ny(i,t,e){if(!ty(i))return!0;let n=Math.min(t,e),s=Math.max(t,e),r=(n%It+It)%It;return!(Math.abs(r-Co.pavement[0])<.01&&Math.abs(s-n-(Co.pavement[1]-Co.pavement[0]))<.01)}function Ip(i,t){let e=n=>{let s=Math.floor(n/It)*It,r=n-s,o=Ni[0],a=1/0;for(let l of[...Ni,It])Math.abs(l-r)<a&&(a=Math.abs(l-r),o=l);return s+o};return{x:e(i),z:e(t)}}var ve=(i,t)=>t[Math.floor(i()*t.length)];function iy(i,t){let e=i.split(":")[0],n=t()<.5,s={role:e,femme:n,height:1.62+t()*.24,build:1,headScale:1,skin:ve(t,$2),shirt:ve(t,J2),trousers:ve(t,K2),hair:ve(t,j2),hairStyle:n?ve(t,["bob","long","bun","ponytail","short"]):ve(t,["short","short","crop","quiff"]),hat:null,skirt:n&&t()<.45,facial:null,glasses:t()<.18,carry:null,apron:null,vest:!1,tie:!1,stick:!1,hunch:0,speed:1};return e==="kid"&&(s.height=.98+t()*.22,s.headScale=1.45,s.build=.8,s.shirt=ve(t,["#d9544f","#e9c04b","#4f7f96","#6f9a4f","#e39a6e","#c7b2d9"]),s.trousers=ve(t,["#3b4f6b","#4f7f96","#8f5f4e"]),s.hairStyle=n?ve(t,["pigtails","bob","ponytail"]):ve(t,["short","crop"]),s.hat=t()<.3?"cap":null,s.glasses=t()<.08,s.skirt=n&&t()<.4,s.speed=1.5),e==="grandma"&&(s.femme=!0,s.height=1.5+t()*.1,s.build=1.1,s.hair=ve(t,Rp),s.hairStyle=ve(t,["bun","bob","short"]),s.skirt=!0,s.shirt=ve(t,["#b48c9c","#c7b2d9","#8ea48c","#d3c7e0"]),s.glasses=t()<.6,s.stick=t()<.6,s.hunch=.18,s.speed=.6,s.hat=t()<.3?"sunhat":null),e==="grandpa"&&(s.femme=!1,s.height=1.6+t()*.1,s.build=1.05,s.hair=ve(t,Rp),s.hairStyle=ve(t,["bald","crop","short"]),s.facial=ve(t,["beard","moustache","beard"]),s.glasses=t()<.5,s.stick=t()<.6,s.hunch=.14,s.speed=.65,s.hat=t()<.6?"flatcap":null,s.shirt=ve(t,["#c3b59b","#9fb8b4","#8ea48c","#e6d6b0"]),s.tie=t()<.3),e==="uncle"&&(s.femme=!1,s.height=1.7+t()*.15,s.build=1.3,s.facial=t()<.7?"moustache":null,s.hat=ve(t,["flatcap",null,"sunhat"]),s.hairStyle=ve(t,["bald","short","crop"]),s.shirt=ve(t,["#e6d6b0","#a7b7c7","#d9b8a8","#f3ead6"]),s.speed=.85),(e==="worker"||e==="foreman")&&(s.vest=!0,s.hat="hardhat",s.shirt=ve(t,["#4f5a52","#5c6670","#8f5f4e"]),s.trousers=ve(t,["#5c6670","#8a8072","#3b4f6b"]),s.carry=e==="foreman"?"clipboard":t()<.5?"tool":null,s.skirt=!1,s.build=1.1),e==="vendor"&&(s.apron=ve(t,["#f3ead6","#4f7f96","#6f9a4f","#c9524a"]),s.hat=t()<.5?"cap":null,s.skirt=!1),e==="barista"&&(s.apron="#3f4a46",s.hairStyle=n?"bun":"quiff",s.shirt="#f3ead6",s.skirt=!1),e==="grocer"&&(s.apron="#6f9a4f",s.shirt="#f3ead6",s.skirt=!1,s.build=1.1),e==="suit"&&(s.shirt=ve(t,["#2f3a3a","#44505a","#3b3b40","#5f6b66"]),s.trousers=s.shirt,s.tie=!n,s.carry="briefcase",s.skirt=n,s.speed=1.2),e==="shopper"&&(s.carry="bag"),e==="parent"&&(s.carry=t()<.5?"bag":null),e==="driver"&&(s.hat="cap",s.shirt="#4f7f96",s.skirt=!1,s.build=1.15),e==="jogger"&&(s.shirt=ve(t,["#d9544f","#e9c04b","#4f7f96"]),s.trousers="#2f3331",s.hairStyle=n?"ponytail":"crop",s.skirt=!1,s.speed=2.2,s.hat=t()<.4?"cap":null),(e==="resident"||e==="customer")&&(s.carry=null),s}function sy(i){let t=i.height,e=t*.47,n=t*.31,s=t*.025,r=t*.07*i.headScale,o=.36*i.build,a=.2*i.build,l=new Cn;l.add(jt,0,n/2,0,o,n,a,i.shirt),l.add(_n,0,n*.97,0,o*.55,n*.12,a*.6,i.shirt),i.skirt?l.add(Q2,0,-e*.25,0,o*.62,e*.55,a*1.3,i.trousers):l.add(jt,0,-.02,0,o*.96,.08,a,i.trousers),i.apron&&(l.add(jt,0,n*.42,a/2+.01,o*.78,n*.95,.02,i.apron),l.add(jt,0,-e*.2,a/2+.01,o*.82,e*.45,.02,i.apron),l.add(jt,0,n*.95,0,.03,n*.15,a+.04,i.apron)),i.vest&&(l.add(jt,0,n*.5,0,o+.04,n*.8,a+.04,"#f2c21b"),l.add(jt,0,n*.5,0,o+.05,.06,a+.05,"#cfd3d2"),l.add(jt,0,n*.28,0,o+.05,.06,a+.05,"#cfd3d2")),i.tie&&(l.add(jt,0,n*.62,a/2+.005,.05,n*.55,.01,i.femme?"#b48c9c":"#8f5f4e"),l.add(jt,0,n*.78,a/2+.005,o*.3,n*.3,.008,"#f3ead6")),l.add(jt,0,n+s/2,0,r*.7,s+.02,r*.7,i.skin);let c=n+s+r*.95;l.add(_n,0,c,0,r,r*1.08,r*.95,i.skin);let u=c+r*.08,d=r*.82;for(let m of[-1,1])l.add(_n,m*r*.36,u,d,r*.14,r*.12,r*.06,"#f8f6f0"),l.add(_n,m*r*.36,u,d+r*.05,r*.075,r*.085,r*.04,"#2a211d"),l.add(jt,m*r*.36,u+r*.24,d-r*.02,r*.3,r*.05,r*.05,i.hair==="#e0c08a"?"#b08a56":i.hair),i.glasses&&(l.add(jt,m*r*.36,u,d+r*.1,r*.34,r*.3,.006,"#4a4f4c"),l.add(jt,m*r*.36,u,d+r*.1,r*.26,r*.22,.008,"#dfeae8"));if(i.glasses&&l.add(jt,0,u,d+r*.1,r*.2,.006,.006,"#4a4f4c"),l.add(_n,0,c-r*.12,r*.93,r*.11,r*.14,r*.12,i.skin),i.facial==="moustache"?l.add(jt,0,c-r*.3,r*.9,r*.5,r*.1,r*.08,i.hair):l.add(jt,0,c-r*.38,r*.9,r*.26,r*.04,.006,"#9a5f55"),i.facial==="beard"&&l.add(_n,0,c-r*.55,r*.55,r*.62,r*.5,r*.55,i.hair),i.role==="kid"||i.role==="grandma")for(let m of[-1,1])l.add(_n,m*r*.62,c-r*.18,r*.62,r*.16,r*.1,r*.08,"#e8a39a");let h=i.hair;if(i.hairStyle!=="bald"&&l.add(_n,0,c+r*.22,-r*.05,r*1.03,r*.9,r*1,h),i.hairStyle==="bald"&&(l.add(jt,0,c-r*.05,-r*.5,r*1.9,r*.6,r*.9,h),l.add(jt,0,c-r*.05,-r*.5,r*1.9,r*.6,r*.9,h)),i.hairStyle==="bob"||i.hairStyle==="long"){for(let m of[-1,1])l.add(jt,m*r*.95,c-r*.25,-r*.1,r*.3,r*1.3,r*1.3,h);l.add(jt,0,c-r*.2,-r*.85,r*1.9,r*1.4,r*.5,h)}if(i.hairStyle==="long"&&l.add(jt,0,c-r*1.4,-r*.8,r*1.6,r*1.6,r*.45,h),i.hairStyle==="bun"&&l.add(_n,0,c+r*.7,-r*.7,r*.45,r*.4,r*.45,h),i.hairStyle==="ponytail"&&(l.add(_n,0,c+r*.3,-r*.9,r*.3,r*.3,r*.3,h),l.add(jt,0,c-r*.3,-r*1.05,r*.3,r*1.4,r*.3,h)),i.hairStyle==="pigtails")for(let m of[-1,1])l.add(_n,m*r*1.05,c+r*.2,-r*.2,r*.28,r*.28,r*.28,h),l.add(jt,m*r*1.1,c-r*.4,-r*.2,r*.25,r*1,r*.25,h);i.hairStyle==="quiff"&&l.add(_n,0,c+r*.95,r*.35,r*.55,r*.35,r*.5,h),i.hairStyle==="crop"&&l.add(_n,0,c+r*.25,-r*.05,r*1,r*.8,r*.98,h),l.add(jt,0,c+r*.62,r*.55,r*1.4,r*.4,r*.5,i.hairStyle==="bald"?i.skin:h),i.hat==="cap"&&(l.add(Sl,0,c+r*.45,0,r*1.1,r*.75,r*1.1,i.shirt==="#d9544f"?"#3b4f6b":"#d9544f"),l.add(jt,0,c+r*.5,r*1.1,r*1.2,.02,r*.9,i.shirt==="#d9544f"?"#3b4f6b":"#d9544f")),i.hat==="flatcap"&&(l.add(Sl,0,c+r*.5,-r*.1,r*1.12,r*.6,r*1.15,"#8a8072"),l.add(jt,0,c+r*.55,r*.95,r*1.1,.02,r*.7,"#8a8072")),i.hat==="sunhat"&&(l.add(Sl,0,c+r*.5,0,r*1.1,r*.75,r*1.1,"#e6d6b0"),l.add(Ad,0,c+r*.5,0,r*1.9,.02,r*1.9,"#e6d6b0"),l.add(Ad,0,c+r*.7,0,r*1.12,r*.12,r*1.12,"#c9524a")),i.hat==="hardhat"&&(l.add(Sl,0,c+r*.4,0,r*1.15,r*.9,r*1.15,"#f2c21b"),l.add(Ad,0,c+r*.42,0,r*1.4,.03,r*1.4,"#f2c21b"));let f=.15*i.build,g=new Cn;g.add(jt,0,-e*.26,0,f,e*.52,f*1.1,i.skirt?i.skin:i.trousers);let x=new Cn;x.add(jt,0,-e*.24,0,f*.92,e*.5,f,i.skirt?i.skin:i.trousers),x.add(jt,0,-e*.48+.04,.035,f,.08,f*1.7,i.role==="kid"?"#f3ead6":i.role==="worker"||i.role==="foreman"?"#5a4634":"#3b3732");let p=new Cn;return p.add(jt,0,-n*.3,0,.09*i.build,n*.6,.09*i.build,i.role==="jogger"||i.role==="kid"?i.skin:i.shirt),p.add(_n,0,-n*.66,0,.05,.07,.05,i.skin),i.carry==="bag"&&(p.add(jt,0,-n*.95,.02,.22,.28,.12,"#c9b48a"),p.add(jt,0,-n*.78,.02,.14,.14,.02,"#8d7f67")),i.carry==="briefcase"&&p.add(jt,0,-n*.98,.02,.12,.3,.4,"#5a4634"),i.carry==="clipboard"&&p.add(jt,0,-n*.7,.14,.22,.3,.02,"#f3ead6"),i.carry==="tool"&&p.add(jt,0,-n*.72,.2,.04,.04,.4,"#4a4f4c"),i.stick&&(p.add(jt,0,-n*.72,.02,.035,n*.6+e*.95,.035,"#8d7f67"),p.add(jt,0,-n*.66,.02,.12,.04,.04,"#5a4634")),{H:t,legH:e,torsoH:n,torso:l.geometry(),thigh:g.geometry(),shin:x.geometry(),arm:p.geometry()}}var wl=class{constructor(t,e,n=null){this.people=t,this.role=e,this.job=n,this.d=iy(e,t.rng);let s=this.look=sy(this.d);this.H=s.H,this.group=new Zt,this.body=new Zt,this.group.add(this.body),this.torso=new xt(s.torso,t.material),this.torso.position.y=s.legH,this.torso.castShadow=!0,this.body.add(this.torso),this.legs=[],this.shins=[],this.arms=[];for(let r of[-1,1]){let o=new xt(s.thigh,t.material);o.position.set(r*.09*this.d.build,s.legH,0),o.castShadow=!0,this.body.add(o),this.legs.push(o);let a=new xt(s.shin,t.material);a.position.y=-s.legH*.52,o.add(a),this.shins.push(a);let l=new xt(s.arm,t.material);l.position.set(r*(.19*this.d.build+.03),s.torsoH-.03,0),l.rotation.z=-r*.08,this.torso.add(l),this.arms.push(l)}this.heart=new za(t.heartMaterial.clone()),this.heart.scale.set(.26,.26,1),this.heart.visible=!1,this.group.add(this.heart),this.solid={shape:"cylinder",x:0,z:0,r:.3*this.d.build,minX:0,maxX:0,minZ:0,maxZ:0,minY:0,maxY:this.H,climbable:!1,walkable:!1,person:this},this.lines=Z2[this.d.role]||null,this.reset(n?n.x:0,n?n.z:0),n&&(this.y=n.y||0,this.heading=n.heading,this.state="work",this.sitting=n.pose==="sit")}reset(t,e){this.x=t,this.z=e,this.y=0,this.heading=Math.random()*Math.PI*2,this.bodyTilt=0,this.reach=0,this.sit=0,this.sitting=!1,this.axis="x",this.dir=1,this.state="walk",this.timer=0,this.cooldown=Math.random()*4,this.phase=Math.random()*7,this.baseSpeed=(1.05+Math.random()*.5)*this.d.speed,this.speed=0,this.line="",this.lineTimer=0,this.heartTime=0,this.greeted=0,this.gesture=Math.random()*10,this.target=null,this.job||this.chooseNext(!0)}chooseNext(t=!1){let e=Ip(this.x,this.z);this.x=e.x,this.z=e.z;let n=[];for(let a of["x","z"])for(let l of[-1,1]){let c=a==="x"?e.x:e.z,u=a==="x"?e.z:e.x,d=ey(c,l);if(!ny(u,c,d))continue;let h=a===this.axis&&l===-this.dir;n.push({axis:a,dir:l,next:d,weight:h?t?1:.08:a===this.axis?1.5:1})}if(!n.length)return;let s=n.reduce((a,l)=>a+l.weight,0),r=Math.random()*s,o=n[0];for(let a of n)if(r-=a.weight,r<=0){o=a;break}this.axis=o.axis,this.dir=o.dir,this.target=o.axis==="x"?{x:o.next,z:e.z}:{x:e.x,z:o.next},this.baseSpeed=Math.min(1.6*this.d.speed,Math.max(.9*this.d.speed,this.baseSpeed+(Math.random()-.5)*.25))}say(t,e=3.2){this.line=t,this.lineTimer=e}greetLine(t){if(t>9&&Math.random()<.7)return["Whoa! Where\u2019s the fire, kitty?","Zoom zoom! Go on then.","Ha! Someone\u2019s in a hurry."][Math.floor(Math.random()*3)];let e=this.lines?.greet;return e&&Math.random()<.75?e[Math.floor(Math.random()*e.length)]:Tp[Math.floor(Math.random()*Tp.length)]}idleLine(){let t=this.lines?.idle;return t&&Math.random()<.8?t[Math.floor(Math.random()*t.length)]:Ap[Math.floor(Math.random()*Ap.length)]}update(t,e,n,s){let r=this.people;this.timer=Math.max(0,this.timer-t),this.cooldown=Math.max(0,this.cooldown-t),this.lineTimer-=t,this.lineTimer<=0&&(this.line="");let o=e.x-this.x,a=e.z-this.z,l=Math.hypot(o,a),c=Math.abs(e.y-this.y)<1.6;r.interactive&&this.state!=="greet"&&this.state!=="chat"&&l<2.3&&c&&this.cooldown===0&&(this.state="greet",this.timer=3+Math.random()*1.8,this.speed=0,this.greeted++,this.say(this.greetLine(n),3.4),this.heartTime=1.6,r.greetings++,r.onGreet?.(this));let u=!1;if(this.state==="greet")this.sitting||this.face(Math.atan2(o,a),t,6),(this.timer===0||l>5)&&(this.state=this.job?"work":"walk",this.cooldown=9+Math.random()*14);else if(this.state==="work")!this.sitting&&l<6&&c?this.face(Math.atan2(o,a),t,2):this.sitting||this.face(this.job.heading,t,2),Math.random()<t*.05&&l<22&&this.say(this.idleLine(),2.6);else if(this.state==="chat")this.partner&&this.face(Math.atan2(this.partner.x-this.x,this.partner.z-this.z),t,5),this.timer===0&&(this.state="walk",this.cooldown=6+Math.random()*10,this.partner=null);else if(this.state==="idle")this.timer===0&&(this.state="walk",Math.random()<.5&&this.chooseNext());else{this.target||this.chooseNext(!0);for(let h of s)if(!(h===this||h.state!=="walk"||h.cooldown>0||this.cooldown>0)&&Math.hypot(h.x-this.x,h.z-this.z)<2&&Math.random()<.5){let f=3.5+Math.random()*3;this.state=h.state="chat",this.timer=h.timer=f,this.partner=h,h.partner=this,this.say(Ml[Math.floor(Math.random()*Ml.length)],2.6),setTimeout(()=>{h.state==="chat"&&h.say(Ml[Math.floor(Math.random()*Ml.length)],2.6)},1800),this.speed=h.speed=0;break}if(this.state==="walk"){let h=this.baseSpeed;for(let p of s)p!==this&&p.axis===this.axis&&Math.hypot(p.x-this.x,p.z-this.z)<1.1&&((p.x-this.x)*(this.axis==="x"?1:0)+(p.z-this.z)*(this.axis==="z"?1:0))*this.dir>0&&(h=Math.min(h,p.speed*.9));l<1&&c&&(h=Math.min(h,.35)),this.speed+=(h-this.speed)*(1-Math.exp(-4*t));let f=this.speed*t,g=this.axis;(this.target[g]-this[g])*this.dir<=f?(this[g]=this.target[g],Math.random()<.18?(this.state="idle",this.timer=1.5+Math.random()*3.5,this.speed=0,Math.random()<.35&&this.say(this.idleLine(),2.4)):this.chooseNext()):(this[g]+=f*this.dir,Math.random()<t*.025&&(this.state="idle",this.timer=1.2+Math.random()*2.5,this.speed=0)),u=this.speed>.05,u&&this.face(this.axis==="x"?Math.atan2(this.dir,0):Math.atan2(0,this.dir),t,7)}}if(!this.job){let h=r.physics.support(this.x,this.z,this.y+.35).y;this.y+=(h-this.y)*(1-Math.exp(-14*t))}this.animate(t,u);let d=this.solid;d.x=this.x,d.z=this.z,d.minX=this.x-d.r,d.maxX=this.x+d.r,d.minZ=this.z-d.r,d.maxZ=this.z+d.r,d.minY=this.y,d.maxY=this.y+this.H}face(t,e,n){this.heading+=Math.atan2(Math.sin(t-this.heading),Math.cos(t-this.heading))*(1-Math.exp(-n*e))}animate(t,e){let n=this.people.time,s=this.state==="greet",r=this.d,o=this.state==="work";this.phase+=t*(e?(r.role==="kid"?7.5:5.6)*this.speed/1.2:0);let a=e?Math.sin(this.phase)*(r.role==="kid"?.7:.55)*Math.min(1,this.speed/.9):0;if(this.legs[0].rotation.x=a,this.legs[1].rotation.x=-a,this.shins[0].rotation.x=e?Math.max(0,-Math.sin(this.phase-.9))*.7:0,this.shins[1].rotation.x=e?Math.max(0,Math.sin(this.phase-.9))*.7:0,this.arms[0].rotation.x=-a*.6,this.arms[1].rotation.x=a*.6,r.stick&&(this.arms[1].rotation.x=-.35+a*.2),(r.carry==="bag"||r.carry==="briefcase")&&(this.arms[1].rotation.x*=.3),r.carry==="clipboard"&&(this.arms[1].rotation.x=-1.2,this.arms[0].rotation.x=-.9+Math.sin(n*2.1)*.1),this.bodyTilt+=((s?this.sitting?.25:.62:0)-this.bodyTilt)*(1-Math.exp(-5*t)),this.reach+=((s?1:0)-this.reach)*(1-Math.exp(-5*t)),this.sit+=((this.sitting?1:0)-this.sit)*(1-Math.exp(-8*t)),this.torso.rotation.x=this.bodyTilt+r.hunch,o){let l=r.role,c=n*2+this.gesture;l==="vendor"||l==="parent"?(this.arms[0].rotation.x=-1.1+Math.sin(c)*.35,this.arms[0].rotation.z=.5+Math.sin(c*.5)*.2):l==="worker"?(this.arms[0].rotation.x=-1.4+Math.max(0,Math.sin(c*1.6))*1.1,this.torso.rotation.x+=.25+Math.max(0,Math.sin(c*1.6))*.08):l==="barista"||l==="grocer"||l==="driver"?(this.arms[0].rotation.x=-1.1+Math.sin(c*1.3)*.2,this.arms[1].rotation.x=-1+Math.cos(c*1.1)*.2):l==="suit"?(this.arms[0].rotation.x=-1.4,this.arms[0].rotation.z=-.9,this.torso.rotation.y=Math.sin(c*.3)*.1):l==="kid"&&(this.body.position.y+=Math.abs(Math.sin(c*1.5))*.08,this.arms[0].rotation.x=-2.6+Math.sin(c*1.5)*.3)}this.arms[1].rotation.x+=-this.reach*.55,this.arms[0].rotation.x+=-this.reach*.25,this.legs[0].rotation.x+=this.reach*.18*(1-this.sit),this.legs[1].rotation.x+=-this.reach*.12*(1-this.sit);for(let l of this.legs)l.rotation.x+=-Math.PI/2*this.sit;for(let l of this.shins)l.rotation.x+=Math.PI/2*this.sit;if(this.body.position.y=(e?Math.abs(Math.sin(this.phase))*.03:Math.sin(n*1.3+this.phase)*.006)-this.reach*.14*(1-this.sit)-this.sit*(this.look.legH*.52-.44),this.sitting&&(this.arms[0].rotation.x=-.9+Math.sin(n*1.2+this.gesture)*.08,this.arms[1].rotation.x=-.9),this.body.rotation.z=e?Math.sin(this.phase)*.03:Math.sin(n*.9+this.phase)*.012,this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.heading,this.heartTime=Math.max(0,this.heartTime-t),this.heart.visible=this.heartTime>0,this.heart.visible){let l=1-this.heartTime/1.6;this.heart.position.set(Math.sin(l*6)*.12,this.H*.6+l*.7,.35),this.heart.material.opacity=Math.min(1,(1-l)*2);let c=.22+Math.sin(l*Math.PI)*.12;this.heart.scale.set(c,c,1)}}dispose(){this.look.torso.dispose(),this.look.thigh.dispose(),this.look.shin.dispose(),this.look.arm.dispose()}},Cp=["woman","man","woman","man","uncle","grandma","grandpa","kid","suit","shopper","jogger","parent"],El=class{constructor(t,e,n=12,s="whiskerfield"){this.scene=t,this.physics=e,this.count=n,this.time=0,this.greetings=0,this.onGreet=null,this.interactive=!1,this.material=new Ge({vertexColors:!0,roughness:.9,flatShading:!0}),this.heartMaterial=new yo({map:ry(),transparent:!0,depthWrite:!1}),this.rng=as(Io(s+"people")),this.list=[],this.workers=new Map,this.spawnTimer=0,this.jobTimer=0}get wanderers(){return this.list.filter(t=>!t.job)}spawnAll(t){for(let e=0;e<this.count;e++){let n=new wl(this,Cp[e%Cp.length]);this.place(n,t,10,55,null),this.scene.add(n.group),this.list.push(n),this.physics.dynamic.push(n.solid)}}place(t,e,n,s,r){for(let o=0;o<24;o++){let a=Math.random()*Math.PI*2,l=n+Math.random()*(s-n),c=Ip(e.x+Math.sin(a)*l,e.z+Math.cos(a)*l),u=Math.hypot(c.x-e.x,c.z-e.z);if(!(u<n||u>s+12)){if(r&&u<40){let d=new D(c.x,1,c.z).project(r);if(Math.abs(d.x)<1.15&&Math.abs(d.y)<1.15&&d.z<1)continue}if(!this.list.some(d=>d!==t&&Math.hypot(d.x-c.x,d.z-c.z)<4)){t.reset(c.x,c.z);return}}}t.reset(e.x+30,e.z+28.45)}syncJobs(t){let e=this.physics.world,n=new Set,s=75;for(let r of e.jobs){if(Math.abs(r.x-t.x)>s||Math.abs(r.z-t.z)>s||(n.add(r),this.workers.has(r)))continue;let o=new wl(this,r.role,r);this.workers.set(r,o),this.scene.add(o.group),this.list.push(o),this.physics.dynamic.push(o.solid)}for(let[r,o]of this.workers)n.has(r)||(this.workers.delete(r),this.scene.remove(o.group),o.dispose(),this.list.splice(this.list.indexOf(o),1),this.physics.dynamic.splice(this.physics.dynamic.indexOf(o.solid),1))}update(t,e,n,s){if(this.time+=t,this.spawnTimer-=t,this.jobTimer-=t,this.jobTimer<=0&&(this.jobTimer=1,this.syncJobs(e)),this.spawnTimer<=0){this.spawnTimer=.6;for(let r of this.list)!r.job&&Math.hypot(r.x-e.x,r.z-e.z)>90&&this.place(r,e,32,62,s)}for(let r of this.list)r.update(t,e,n,this.list)}speaker(t,e=null){let n=this.list.filter(s=>s.line).map(s=>[Math.hypot(s.x-t.x,s.z-t.z),s]).filter(([s])=>s<18).sort((s,r)=>s[0]-r[0]);for(let[,s]of n)if(!e||e(s))return s;return null}dispose(){for(let t of this.list)this.scene.remove(t.group),t.dispose();this.list=[],this.workers.clear(),this.physics.dynamic=[]}};function ry(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.fillStyle="#e08a94",t.beginPath(),t.moveTo(32,56),t.bezierCurveTo(4,36,6,10,32,20),t.bezierCurveTo(58,10,60,36,32,56),t.fill();let e=new Li(i);return e.colorSpace=Je,e}var un=Math.PI*2,Up=(i,t={})=>new Ge({color:i,roughness:.55,flatShading:!0,...t}),Pp=[{kind:"cap",name:"a bottle cap",line:"A bottle cap. Still shiny.",color:"#d9b24a",geo:K.cylinder,scale:[.11,.035,.11]},{kind:"coin",name:"an old coin",line:"An old coin, worn smooth.",color:"#e6c766",geo:K.cylinder,scale:[.09,.02,.09]},{kind:"marble",name:"a lost marble",line:"A marble. Somebody will miss this.",color:"#7ec8e3",geo:K.sphere,scale:[.09,.09,.09]},{kind:"key",name:"a brass key",line:"A little brass key. To what?",color:"#c9a35c",geo:K.box,scale:[.05,.03,.22]},{kind:"button",name:"a pearl button",line:"A pearl button from a good coat.",color:"#f1ead8",geo:K.cylinder,scale:[.08,.025,.08]},{kind:"ring",name:"a silver ring",line:"A silver ring. Finders keepers.",color:"#dfe3e6",geo:K.torus,scale:[.08,.08,.08]},{kind:"wrapper",name:"a foil wrapper",line:"A foil wrapper, folded into a star.",color:"#e07a7a",geo:K.box,scale:[.16,.01,.12]},{kind:"bell",name:"a tiny bell",line:"A tiny bell. It still rings.",color:"#d8b35a",geo:K.cone,scale:[.09,.11,.09]}],Rd=new Map,Lp=1.8,Cd=null,oy=i=>(Rd.has(i.kind)||Rd.set(i.kind,Up(i.color,{metalness:.35,roughness:.3,emissive:i.color,emissiveIntensity:.45})),Rd.get(i.kind)),kp={cone:{r:.2,h:.55,sound:"plastic",build:i=>{i.add(Ot(K.cone,"#e5742f",0,.28,0,.2,.55,.2)),i.add(Ot(K.box,"#e5742f",0,.02,0,.42,.04,.42)),i.add(Ot(K.cylinder,"#f3eee0",0,.3,0,.14,.07,.14))}},bin:{r:.26,h:.72,sound:"metal",build:i=>{i.add(Ot(K.cylinder,"#8d9693",0,.36,0,.26,.72,.26)),i.add(Ot(K.cylinder,"#6f7976",0,.74,0,.28,.05,.28)),i.add(Ot(K.box,"#6f7976",0,.8,0,.1,.08,.22))}},bucket:{r:.19,h:.32,sound:"metal",build:i=>{i.add(Ot(K.tapered,"#6a9ab8",0,.16,0,.22,.32,.22)),i.add(Ot(K.torus,"#5a6b74",0,.32,0,.2,.2,.2,Math.PI/2))}},bottle:{r:.06,h:.34,sound:"glass",build:i=>{i.add(Ot(K.cylinder,"#5c8a5a",0,.13,0,.06,.26,.06)),i.add(Ot(K.cylinder,"#5c8a5a",0,.3,0,.025,.1,.025)),i.add(Ot(K.cylinder,"#d9b24a",0,.35,0,.03,.02,.03))}},can:{r:.05,h:.13,sound:"metal",build:i=>{i.add(Ot(K.cylinder,"#c94a3f",0,.065,0,.05,.13,.05)),i.add(Ot(K.cylinder,"#d8d8d2",0,.13,0,.045,.01,.045))}},pot:{r:.18,h:.36,sound:"clay",build:i=>{i.add(Ot(K.pot,"#b8693f",0,.14,0,.19,.28,.19)),i.add(Ot(K.cylinder,"#4b3a2c",0,.27,0,.15,.04,.15)),i.add(Ot(K.sphere,"#6d9a52",0,.38,0,.17,.14,.17)),i.add(Ot(K.sphere,"#e36b8a",.07,.46,.03,.05,.05,.05)),i.add(Ot(K.sphere,"#f4d35e",-.06,.45,-.04,.045,.045,.045))}},crate:{r:.26,h:.34,sound:"wood",build:i=>{i.add(Ot(K.box,"#c7a97b",0,.17,0,.5,.34,.42)),i.add(Ot(K.box,"#a98a5e",0,.17,.215,.5,.05,.02)),i.add(Ot(K.box,"#a98a5e",0,.17,-.215,.5,.05,.02))}},jug:{r:.09,h:.3,sound:"glass",build:i=>{i.add(Ot(K.tapered,"#e8e2d2",0,.15,0,.1,.3,.1)),i.add(Ot(K.torus,"#e8e2d2",.1,.17,0,.06,.06,.06,0,Math.PI/2))}}},Id=new Map,ay=i=>(Id.has(i)||Id.set(i,Up(i,{roughness:.8})),Id.get(i));function Ot(i,t,e,n,s,r,o,a,l=0,c=0){let u=new xt(i,ay(t));return u.position.set(e,n,s),u.scale.set(r,o,a),u.rotation.set(l,0,c),u.castShadow=!0,u}var Dp=["Hey!","Oi \u2014 cat!","Honestly\u2026","Careful, puss.","Was that you?","Cats.","Not again.","Well, that\u2019s that."],ls=[{id:"none",name:"No hat",need:0,blurb:"Fur, as nature intended."},{id:"leaf",name:"Leaf",need:1,blurb:"A big leaf. It counts.",build:i=>{let t=Ot(K.sphere,"#7aa04f",0,.02,.02,.3,.03,.24);t.rotation.z=.25,i.add(t),i.add(Ot(K.cylinder,"#5e7a3a",.1,.03,-.2,.012,.18,.012,1.3))}},{id:"party",name:"Party cone",need:4,blurb:"Somebody is having a birthday.",build:i=>{i.add(Ot(K.cone,"#f08cae",0,.19,0,.14,.4,.14)),i.add(Ot(K.cone,"#fff4e6",0,.3,0,.075,.18,.075)),i.add(Ot(K.sphere,"#f4d35e",0,.4,0,.045,.045,.045))}},{id:"beret",name:"Beret",need:8,blurb:"Tr\xE8s chat.",build:i=>{let t=Ot(K.sphere,"#b8433e",.03,.03,0,.28,.09,.26);i.add(t),i.add(Ot(K.cylinder,"#8d2e2a",.04,.12,0,.015,.05,.015))}},{id:"bucket",name:"Bucket hat",need:12,blurb:"Keeps the sun off the ears, mostly.",build:i=>{i.add(Ot(K.tapered,"#e3c56a",0,.1,0,.3,.2,.3)),i.add(Ot(K.cylinder,"#e3c56a",0,0,0,.36,.03,.36))}},{id:"straw",name:"Straw hat",need:16,blurb:"For gardens and long afternoons.",build:i=>{i.add(Ot(K.cylinder,"#e9d79a",0,.09,0,.24,.18,.24)),i.add(Ot(K.cylinder,"#e9d79a",0,0,0,.44,.025,.44)),i.add(Ot(K.cylinder,"#5f7a9a",0,.05,0,.25,.04,.25))}},{id:"chef",name:"Chef\u2019s hat",need:22,blurb:"The kitchen is yours now.",build:i=>{i.add(Ot(K.cylinder,"#f7f3ea",0,.12,0,.22,.24,.22)),i.add(Ot(K.sphere,"#f7f3ea",0,.3,0,.27,.17,.27))}},{id:"flowers",name:"Flower crown",need:28,blurb:"Made by a kind child at the market.",build:i=>{i.add(Ot(K.torus,"#6a8f4a",0,.03,0,.26,.26,.26,Math.PI/2));for(let t=0;t<7;t++){let e=t/7*un;i.add(Ot(K.sphere,["#f08cae","#fff4e6","#f4d35e"][t%3],Math.cos(e)*.26,.07,Math.sin(e)*.26,.075,.065,.075))}}},{id:"tophat",name:"Top hat",need:36,blurb:"Distinguished. Slightly too big.",build:i=>{i.add(Ot(K.cylinder,"#2c2a2e",0,.2,0,.22,.4,.22)),i.add(Ot(K.cylinder,"#2c2a2e",0,0,0,.36,.03,.36)),i.add(Ot(K.cylinder,"#b8433e",0,.06,0,.23,.06,.23))}},{id:"crown",name:"Crown",need:50,blurb:"Ruler of every rooftop.",build:i=>{i.add(Ot(K.cylinder,"#e0b64a",0,.08,0,.24,.16,.24));for(let t=0;t<6;t++){let e=t/6*un;i.add(Ot(K.cone,"#e0b64a",Math.cos(e)*.2,.2,Math.sin(e)*.2,.06,.14,.06)),i.add(Ot(K.sphere,["#c94a3f","#5f7a9a","#6d9a52"][t%3],Math.cos(e)*.22,.1,Math.sin(e)*.22,.03,.03,.03))}}}];function Np(i){let t=ls.find(n=>n.id===i);if(!t?.build)return null;let e=new Zt;return t.build(e),e.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),e}var Tl=class{constructor(t,e,n,{collected:s=[],knocks:r=0}={}){this.scene=t,this.world=e,this.physics=n,this.collected=new Set(s),this.knocks=r,this.tracked=new Map,this.onShiny=null,this.onKnock=null,this.time=0,this.nearest=1/0}get found(){return this.collected.size}sync(){for(let[t,e]of this.world.chunks)this.tracked.has(t)||this.dress(e);for(let[t,e]of this.tracked)this.world.chunks.has(t)||(this.scene.remove(e.group),this.tracked.delete(t))}dress(t){let e=as(hi(t.cx,t.cz,this.world.seed,1313)),n=t.cx*It,s=t.cz*It,r=new Zt;r.name=`fun-${t.key}`,this.scene.add(r);let o={group:r,shinies:[],props:[]};this.tracked.set(t.key,o);let a=(h,f,g=80)=>this.physics.support(h,f,g),l=[],c=t.buildings.filter(h=>h.kind!=="floor").sort(()=>e()-.5).slice(0,3);for(let h of c)l.push([h.x+(e()-.5)*h.w*.5,h.z+(e()-.5)*h.d*.5,"roof"]);for(let h of t.landmarks)h.kind==="tower"?l.push([h.x+(e()-.5)*3,h.z+(e()-.5)*3,"tower"]):h.kind==="playground"?l.push([h.x+(e()-.5)*8,h.z+(e()-.5)*8,"play"]):h.kind==="market"||h.kind==="works"?l.push([h.x+(e()-.5)*10,h.z+(e()-.5)*10,"ground"]):h.kind==="station"?l.push([h.x+7.5,h.z+3.2+(e()-.5)*8,"roof"]):h.kind==="allotments"&&l.push([h.x-6.5+(e()-.5)*2,h.z+9,"roof"]);for(let h of t.parks){let f=e()*un;l.push([h.x+Math.cos(f)*7,h.z+Math.sin(f)*7,"ground"])}l.push([n+(e()>.5?28.45:-28.45),s+(e()-.5)*40,"ground"]),l.forEach(([h,f,g],x)=>{let p=a(h,f);if(!p||p.y>60||g==="ground"&&p.y>1.2)return;let m=`${t.key}:s${x}`;if(this.collected.has(m))return;let b=Pp[hi(t.cx*8+x,t.cz,this.world.seed,1717)%Pp.length],_=new xt(b.geo,oy(b));_.scale.set(...b.scale.map(w=>w*Lp)),_.castShadow=!0,b.kind==="ring"&&(_.rotation.x=Math.PI/2);let y=p.y+.22;_.position.set(h,y,f),r.add(_),Cd||(Cd=new ln({color:"#fff1b8",transparent:!0,opacity:.2,depthWrite:!1}));let S=new xt(K.softSphere,Cd);S.scale.setScalar(.18),S.position.set(h,y,f),r.add(S),o.shinies.push({id:m,kind:b,mesh:_,glow:S,x:h,y,z:f,phase:e()*un})});let u=6+Math.floor(e()*4),d=Object.keys(kp);for(let h=0;h<u;h++){let f=e()>.5?1:-1,g=(e()-.5)*52,[x,p]=e()>.5?[n+f*(28.45+(e()-.5)*.8),s+g]:[n+g,s+f*(28.45+(e()-.5)*.8)];if(Math.abs(Math.abs(x-n)-27)<1.6&&Math.abs(p-s-14)<1.8||Math.abs(Math.abs(x-n)-27.2)<1&&Math.abs(p-s+27.2)<1)continue;let m=a(x,p,3);if(!m||m.y>.3)continue;let b=d[Math.floor(e()*d.length)],_=kp[b],y=new Zt;_.build(y),y.position.set(x,m.y,p),y.rotation.y=e()*un,r.add(y),o.props.push({kind:b,def:_,g:y,x,y:m.y,z:p,vx:0,vy:0,vz:0,state:"up",ang:0,spin:0,axis:new D(1,0,0),yaw:y.rotation.y,rest:0})}}update(t,e,n){this.time+=t;let s=this.time,r=e.pos.x,o=e.pos.z,a=e.pos.y;this.nearest=1/0;let l=Math.floor((r+It/2)/It),c=Math.floor((o+It/2)/It);for(let[,u]of this.tracked){if(!u.shinies.length&&!u.props.length)continue;let d=this.world.chunks.get(u.group.name.slice(4));if(!(!d||Math.abs(d.cx-l)>1||Math.abs(d.cz-c)>1)){for(let h=u.shinies.length-1;h>=0;h--){let f=u.shinies[h],g=f.mesh;g.rotation.y=s*2.2+f.phase,g.position.y=f.y+Math.sin(s*2.6+f.phase)*.035;let x=(1+Math.max(0,Math.sin(s*3.1+f.phase*2))**8*.35)*Lp;g.scale.set(f.kind.scale[0]*x,f.kind.scale[1]*x,f.kind.scale[2]*x),f.glow.position.y=g.position.y,f.glow.scale.setScalar(.17+Math.sin(s*4+f.phase)*.035);let p=f.x-r,m=f.z-o,b=f.y-(a+.3),_=Math.hypot(p,m);_<this.nearest&&Math.abs(b)<3&&(this.nearest=_),_<ne.radius+.36&&Math.abs(b)<.8&&(u.shinies.splice(h,1),u.group.remove(g),u.group.remove(f.glow),this.collected.add(f.id),this.onShiny?.(f))}for(let h of u.props)this.stepProp(h,t,e,n)}}}stepProp(t,e,n,s){let r=n.pos.x,o=n.pos.z,a=n.pos.y,l=t.def,c=t.x-r,u=t.z-o,d=Math.hypot(c,u);if(d>30)return;let h=t.state==="down"&&Math.abs(t.ang)>.7,f=h?l.r*2:l.h,g=h?Math.max(l.r,l.h*.5):l.r;if(t.state!=="air"&&d<ne.radius+g+.03&&a<t.y+f&&a+.5>t.y&&n.speed>.6){let _=Math.hypot(n.vx,n.vz)||1,y=_>.5?n.vx/_:c/(d||1),S=_>.5?n.vz/_:u/(d||1),w=Math.min(4.5,1.1+n.speed*.32)*(h?1.1:1);t.vx=y*w,t.vz=S*w,t.vy=h?1.1+n.speed*.05:1.9+n.speed*.12,t.axis.set(S,0,-y).normalize(),t.spin=5+n.speed*.7,t.state="air",t.rest=0,this.knocks++,this.onKnock?.(t,l.sound);let T=s?.list?.filter(A=>!A.sitting&&Math.hypot(A.x-t.x,A.z-t.z)<7).sort((A,M)=>Math.hypot(A.x-t.x,A.z-t.z)-Math.hypot(M.x-t.x,M.z-t.z))[0];T&&Math.random()<.7&&T.say(Dp[Math.floor(Math.random()*Dp.length)],2.4)}if(t.state!=="air")return;t.vy-=22*e,t.vx*=1-e*.3,t.vz*=1-e*.3;let x=t.x+t.vx*e,p=t.z+t.vz*e;this.physics.support(x,p,t.y+.4).y>t.y+.2?(t.vx*=-.35,t.vz*=-.35):(t.x=x,t.z=p),t.y+=t.vy*e,t.ang+=t.spin*e;let b=this.physics.support(t.x,t.z,t.y+.05).y;if(t.y<=b)if(t.y=b,t.vy<-2.2)t.vy=-t.vy*.28,t.vx*=.55,t.vz*=.55,t.spin*=.6,this.onKnock?.(t,l.sound,!0);else{let _=Math.round(t.ang/(Math.PI/2))*(Math.PI/2),y=Math.abs((_%un+un)%un)<.01||Math.abs((_%un+un)%un-un)<.01;t.ang=y?0:(_%un+un)%un<Math.PI?Math.PI/2:-Math.PI/2,y||(t.y=b+l.r*.98),t.vx=t.vy=t.vz=0,t.spin=0,t.state="down"}t.g.position.set(t.x,t.y,t.z),t.g.quaternion.setFromAxisAngle(t.axis,t.ang).multiply(new He().setFromAxisAngle(new D(0,1,0),t.yaw))}listShinies(){let t=[];for(let[,e]of this.tracked)for(let n of e.shinies)t.push({id:n.id,kind:n.kind.kind,x:n.x,y:n.y,z:n.z});return t}listProps(){let t=[];for(let[,e]of this.tracked)for(let n of e.props)t.push({kind:n.kind,x:n.x,y:n.y,z:n.z,state:n.state});return t}};var Ld=Math.PI*2,Pd=new Map,ly=i=>(Pd.has(i)||Pd.set(i,new dn({color:i})),Pd.get(i)),Gr=new De(1,10,8),cy=new hn(.5,1,6),Fp=.06;function hy(i){let t=new Zt,e=i==="mother"?1:.5,n=i==="mother"?"#b48a5a":"#f1d35a",s=i==="mother"?"#3f7a4a":"#f1d35a",r=i==="mother"?"#e3c35a":"#e0893c",o=(c,u,d,h,f,g,x,p,m=0)=>{let b=new xt(c,ly(u));return b.position.set(d*e,h*e,f*e),b.scale.set(g*e,x*e,p*e),b.rotation.x=m,b.castShadow=!0,t.add(b),b};o(Gr,n,0,.16,0,.19,.14,.26),i==="mother"&&o(Gr,"#e8dfc4",0,.2,-.02,.16,.1,.18),o(Gr,n,0,.2,-.26,.07,.05,.1);let a=o(Gr,s,0,.32,.18,.08,.11,.08),l=o(Gr,s,0,.42,.22,.1,.09,.1);o(cy,r,0,.41,.34,.08,.14,.06,Math.PI/2);for(let c of[-1,1])o(Gr,"#2a2a2a",c*.055,.44,.27,.015,.015,.015);return{group:t,head:l,neck:a}}var Al=class{constructor(t,e,n,s){let r=hy(t);this.group=r.group,this.kind=t,this.pond=e,this.x=n,this.z=s,this.heading=Math.random()*Ld,this.speed=0,this.phase=Math.random()*9,this.follow=null,this.wander=0,this.quack=0,this.onLand=!1}},Rl=class{constructor(t,e,n){this.scene=t,this.world=e,this.physics=n,this.flocks=new Map,this.onQuack=null,this.startles=0}sync(t){let e=this.world.water.filter(n=>Math.abs(n.x-t.x)<120&&Math.abs(n.z-t.z)<120);for(let n of e){let s=`${n.x.toFixed(1)},${n.z.toFixed(1)}`;this.flocks.has(s)||this.spawn(s,n)}for(let[n,s]of this.flocks)if(!e.some(r=>`${r.x.toFixed(1)},${r.z.toFixed(1)}`===n)){for(let r of s)this.scene.remove(r.group);this.flocks.delete(n)}}spawn(t,e){let n=Math.random()*Ld,s=[],r=new Al("mother",e,e.x+Math.cos(n)*e.r*.4,e.z+Math.sin(n)*e.r*.4);s.push(r);let o=r;for(let a=0;a<3+Math.floor(Math.random()*2);a++){let l=new Al("duckling",e,o.x-Math.cos(o.heading)*.35,o.z-Math.sin(o.heading)*.35);l.follow=o,s.push(l),o=l}for(let a of s)a.group.position.set(a.x,Fp,a.z),this.scene.add(a.group);this.flocks.set(t,s)}update(t,e,n){for(let[,s]of this.flocks)for(let r of s){let o=r.pond,a=Math.hypot(e.x-r.x,e.z-r.z),l,c,u=r.kind==="mother"?.55:.7;if(a<3.2&&Math.abs(e.y)<2){let b=r.x-e.x,_=r.z-e.z,y=Math.hypot(b,_)||1;l=r.x+b/y*3+_/y*.6,c=r.z+_/y*3-b/y*.6,u=1.5,r.quack<=0&&Math.random()<.5&&(r.quack=2+Math.random()*3,this.startles++,this.onQuack?.(r.kind))}else if(r.follow){let b=r.follow;l=b.x-Math.sin(b.heading)*.42,c=b.z-Math.cos(b.heading)*.42,Math.hypot(l-r.x,c-r.z)<.12&&(u=0)}else{if(r.wander-=t,r.wander<=0||!r.target){r.wander=4+Math.random()*6;let b=Math.random()*Ld,_=Math.random()*(o.r-.8);r.target=[o.x+Math.cos(b)*_,o.z+Math.sin(b)*_]}[l,c]=r.target,Math.hypot(l-r.x,c-r.z)<.3&&(u=0),r.quack<=0&&Math.random()<t*.04&&(r.quack=6,this.onQuack?.(r.kind,!0))}r.quack-=t;let d=Math.hypot(l-o.x,c-o.z),h=a<3.2?o.r+2.2:o.r-.4;d>h&&(l=o.x+(l-o.x)/d*h,c=o.z+(c-o.z)/d*h);let f=l-r.x,g=c-r.z,x=Math.hypot(f,g);if(x>.05&&u>0){let _=Math.atan2(f,g)-r.heading;_=Math.atan2(Math.sin(_),Math.cos(_)),r.heading+=_*Math.min(1,t*5)}r.speed+=((u>0&&x>.05?Math.min(u,x*2):0)-r.speed)*Math.min(1,t*4),r.x+=Math.sin(r.heading)*r.speed*t,r.z+=Math.cos(r.heading)*r.speed*t;let p=Math.hypot(r.x-o.x,r.z-o.z)<o.r-.15;r.onLand=!p;let m=p?Fp+Math.sin(n*2.1+r.phase)*.012:this.physics.support(r.x,r.z,1).y+.02;r.group.position.set(r.x,m,r.z),r.group.rotation.set(p?Math.sin(n*2.6+r.phase)*.04:0,r.heading,p?Math.sin(n*1.9+r.phase)*.05:Math.sin(n*12)*.08*Math.min(1,r.speed))}}dispose(){for(let[,t]of this.flocks)for(let e of t)this.scene.remove(e.group);this.flocks.clear()}get count(){let t=0;for(let[,e]of this.flocks)t+=e.length;return t}};var Op=[{body:"#f2d84a",head:"#f7e27a",wing:"#d8bb2e"},{body:"#7fb6e6",head:"#e8eef2",wing:"#4f86bd"},{body:"#8fc46a",head:"#e6e07a",wing:"#5f9548"},{body:"#e9e4dc",head:"#f4f1ea",wing:"#aeb3b8"},{body:"#9ac3dc",head:"#f0f3f5",wing:"#6d94b4"}],dy=new Set(["lamp","post","chimney","pergola","sill","tree","pole","awning","bench","fountain","box"]),uy={body:"#2b2b30",head:"#33333a",wing:"#1d1d22",beak:"#4a4a50",crow:!0},kd=new Map,Wr=i=>(kd.has(i)||kd.set(i,new dn({color:i})),kd.get(i)),Dd=new De(1,10,8),Bp=new Ve(1,.08,.6),fy=new hn(.5,1,6),py=new Ve(.035,.02,.16),Ud=class{constructor(t,e){this.birds=t,this.group=new Zt,this.wingFlap=0,this.phase=Math.random()*9,this.crow=!!e.crow,this.crow&&this.group.scale.setScalar(1.7);let n=new xt(Dd,Wr(e.body));n.scale.set(.11,.1,.15),n.position.y=.1,this.group.add(n);let s=new xt(Dd,Wr(e.head));s.scale.set(.08,.08,.08),s.position.set(0,.19,.11),this.group.add(s);let r=new xt(fy,Wr(e.beak||"#e5a24a"));r.scale.set(.04,.05,.04),r.rotation.x=Math.PI/2,r.position.set(0,.185,.2),this.group.add(r);let o=new xt(py,Wr(e.wing));o.position.set(0,.1,-.19),o.rotation.x=-.3,this.group.add(o),this.wings=[-1,1].map(a=>{let l=new xt(Bp,Wr(e.wing));return l.scale.set(.18,1,.2),l.position.set(a*.09,.13,0),l.geometry=Bp,l.userData.side=a,this.group.add(l),l});for(let a of[-1,1]){let l=new xt(Dd,Wr("#2a2a2a"));l.scale.setScalar(.014),l.position.set(a*.05,.21,.16),this.group.add(l)}this.state="perch",this.perch=null,this.from=new D,this.to=new D,this.t=0,this.flight=1,this.hopTimer=2+Math.random()*4,this.heading=Math.random()*Math.PI*2,this.cooldown=0}settle(t){this.perch=t,this.state="perch",this.group.position.set(t.x,t.y,t.z),this.heading=t.heading??Math.random()*Math.PI*2,this.group.rotation.set(0,this.heading,0),this.hopTimer=3+Math.random()*6,this.wingFlap=0}flyTo(t,e){this.from.copy(this.group.position),this.to.set(t.x,t.y,t.z),this.perch=t,this.state="fly",this.t=0;let n=this.from.distanceTo(this.to);this.flight=Math.max(.9,n/(e?7:5)),this.arc=1.2+Math.min(3,n*.12)+(e?.8:0),this.heading=Math.atan2(this.to.x-this.from.x,this.to.z-this.from.z),this.cooldown=e?2:0}update(t,e,n,s){let r=this.birds,o=this.group.position;this.cooldown=Math.max(0,this.cooldown-t);let a=e.x-o.x,l=e.z-o.z,c=e.y-o.y,u=Math.hypot(a,l);if(this.state==="perch"){let d=Math.sin(s*5+this.phase)*.004+(Math.sin(s*1.3+this.phase)>.95?.01:0);this.group.position.y=this.perch.y+d,this.group.rotation.y=this.heading+Math.sin(s*.7+this.phase)*.35,this.hopTimer-=t;let h=u<(n>8?5.5:2.6)&&Math.abs(c)<3.2;if(h||this.hopTimer<=0){let f=r.findPerch(e,h?10:4,40,this.perch,this.crow);f?(this.flyTo(f,h),h&&r.onStartle?.(this)):this.hopTimer=2}for(let f of this.wings)f.rotation.z=f.userData.side*.12}else{this.t=Math.min(1,this.t+t/this.flight);let d=this.t,h=d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;o.lerpVectors(this.from,this.to,h),o.y+=Math.sin(d*Math.PI)*this.arc;let f=Math.cos(d*Math.PI)*this.arc*Math.PI/Math.max(1,this.from.distanceTo(this.to));this.group.rotation.set(-Math.atan(f)*.5,this.heading,Math.sin(s*3+this.phase)*.12),this.wingFlap+=t*26;let g=Math.sin(this.wingFlap)*.9;for(let x of this.wings)x.rotation.z=x.userData.side*(g+.2);this.t>=1&&this.settle(this.perch)}}},Cl=class{constructor(t,e,n=12){this.scene=t,this.world=e,this.count=n,this.list=[],this.time=0,this.spawnTimer=0,this.onStartle=null,this.startles=0,this.group=new Zt,t.add(this.group)}perchesNear(t,e,n){let s=[];for(let r of this.world.colliders){if(!dy.has(r.kind)||r.sensor)continue;let o=(r.minX+r.maxX)/2,a=(r.minZ+r.maxZ)/2;if(!(Math.abs(o-t)>n||Math.abs(a-e)>n))if(r.shape==="ellipsoid"){let l=Math.random()*Math.PI*2,c=r.rx*.72;s.push({x:r.x+Math.cos(l)*c,y:r.y+Math.sqrt(Math.max(0,1-.72*.72))*r.ry*.6,z:r.z+Math.sin(l)*c,heading:l+Math.PI/2,solid:r})}else if(r.shape==="cylinder")s.push({x:r.x,y:r.maxY,z:r.z,solid:r});else{let l=r.maxX-r.minX>=r.maxZ-r.minZ,c=.15+Math.random()*.7;s.push({x:l?r.minX+(r.maxX-r.minX)*c:o,y:r.maxY,z:l?a:r.minZ+(r.maxZ-r.minZ)*c,heading:l?Math.PI/2:0,solid:r})}}return s}findPerch(t,e,n,s=null,r=!1){let o=this.perchesNear(t.x,t.z,n).filter(u=>{let d=Math.hypot(u.x-t.x,u.z-t.z);return d<e||d>n||u.solid===s?.solid?!1:!this.list.some(h=>h.perch&&h.perch.solid===u.solid&&Math.hypot(h.perch.x-u.x,h.perch.z-u.z)<.35)});if(!o.length)return null;let a=o.filter(u=>u.y<3.4),l=o.filter(u=>u.y>=3.4),c=r?l.length?l:o:a.length&&Math.random()<.75?a:o;return c[Math.floor(Math.random()*c.length)]}spawnAll(t){for(let e=0;e<this.count;e++){let n=e%4===3,s=new Ud(this,n?uy:Op[e%Op.length]),r=this.findPerch(t,6,45,null,n)||{x:t.x+8,y:.9,z:t.z+6,solid:null};s.settle(r),this.group.add(s.group),this.list.push(s)}}update(t,e,n){if(this.time+=t,this.spawnTimer-=t,this.spawnTimer<=0){this.spawnTimer=1;for(let s of this.list)if(Math.hypot(s.group.position.x-e.x,s.group.position.z-e.z)>75){let r=this.findPerch(e,18,50,null,s.crow);r&&s.settle(r)}}for(let s of this.list)s.update(t,e,n,this.time)}dispose(){for(let t of this.list)this.group.remove(t.group);this.list=[]}};var zp="whiskerfield.installed.v1",Xr=[],qr=(i,t)=>{Xr.push({name:i,result:t,at:Date.now()}),Xr.length>40&&Xr.shift()},Pl=matchMedia("(pointer:coarse)").matches,Hp=/iP(hone|ad|od)/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Vp=/Safari/.test(navigator.userAgent)&&!/Chrom|Edg|OPR|Firefox/.test(navigator.userAgent);function Nd(){return matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||matchMedia("(display-mode: window-controls-overlay)").matches||navigator.standalone===!0||new URLSearchParams(location.search).get("launch")==="app"}function Il(){try{localStorage.setItem(zp,String(Date.now()))}catch{}}function Fd(){try{return!!localStorage.getItem(zp)}catch{return!1}}async function Gp(){if(Nd())return Il(),!0;if(Fd())return!0;if(navigator.getInstalledRelatedApps)try{if((await navigator.getInstalledRelatedApps()).some(t=>t.platform==="webapp"))return Il(),!0}catch{}return!1}function Yr(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}async function Od(i=document.documentElement){if(Yr())return!0;try{if(i.requestFullscreen)await i.requestFullscreen({navigationUI:"hide"});else if(i.webkitRequestFullscreen)await i.webkitRequestFullscreen();else return qr("fullscreen","unsupported"),!1;return qr("fullscreen","ok"),!0}catch(t){return qr("fullscreen",t?.name||"error"),!1}}async function Wp(){try{document.exitFullscreen&&document.fullscreenElement?await document.exitFullscreen():document.webkitExitFullscreen&&document.webkitFullscreenElement&&await document.webkitExitFullscreen()}catch{}zd()}async function Bd(){try{return screen.orientation?.lock?(await screen.orientation.lock("landscape"),qr("orientation","ok"),!0):(qr("orientation","unsupported"),!1)}catch(i){return qr("orientation",i?.name||"error"),!1}}function zd(){try{screen.orientation?.unlock?.()}catch{}}function Hd(){return innerHeight>innerWidth}function Xp(){return Pl&&Math.min(screen.width,screen.height)<820}async function Vd(){if(!Pl)return{fullscreen:!1,landscape:!1};let i=await Od(),t=await Bd();return{fullscreen:i,landscape:t}}var Bs=null,qp=!1;async function Gd(i){if(qp=i,!i){try{await Bs?.release()}catch{}Bs=null;return}if(Bs||document.hidden||!navigator.wakeLock?.request)return;let t={name:"wakelock",ok:!1};Xr.push(t);try{Bs=await navigator.wakeLock.request("screen"),t.ok=!0,Bs.addEventListener("release",()=>{Bs=null})}catch{Bs=null}}document.addEventListener("visibilitychange",()=>{!document.hidden&&qp&&Gd(!0)});var j=i=>document.getElementById(i),js=$n.clamp,ql="whiskerfield.journey.v1";var nn=Pl,gy=7,xy=12.5,by=1/90,Kp=3.15,jp=new URLSearchParams(location.search),Qp=()=>["clover","willow","honey","fern","peach","moss"][Math.floor(Math.random()*6)]+"-"+Math.floor(100+Math.random()*900),ee=null;try{let i=JSON.parse(localStorage.getItem(ql));i?.version===1&&typeof i.seed=="string"&&(ee=i)}catch{}var Ll=jp.get("seed")?.trim().slice(0,40)||null,lu=i=>{if(i?.seed)try{localStorage.setItem(ql+":"+(i.country&&i.country!=="whiskerfield"?i.seed+"~"+i.country:i.seed),JSON.stringify({...i,settings:void 0}))}catch{}},tm=(i,t=null)=>{try{let e=JSON.parse(localStorage.getItem(ql+":"+(t&&t!=="whiskerfield"?i+"~"+t:i)));return e?.version===1&&e.seed===i?e:null}catch{return null}};if(ee&&Ll&&Ll!==ee.seed){lu(ee);let i=tm(Ll);ee=i?{...i,settings:ee.settings}:{version:1,settings:ee.settings,started:ee.started}}var te={audio:!0,volume:.4,sensitivity:.7,shadows:!nn,reducedMotion:matchMedia("(prefers-reduced-motion:reduce)").matches,immersive:!0,...ee?.settings},yy=i=>i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z)&&Math.abs(i.x)<1e6&&Math.abs(i.z)<1e6&&i.y>=0&&i.y<100,X=wp(yy(ee?.position)?{...ee.position,heading:Number.isFinite(ee?.heading)?ee.heading:.55}:null),Mn=new Set(Array.isArray(ee?.roofs)?ee.roofs.filter(i=>typeof i=="string").slice(-1e4):[]),Bn=new Set(Array.isArray(ee?.gardens)?ee.gardens.filter(i=>typeof i=="string").slice(-1e4):[]),vn=new Set(Array.isArray(ee?.places)?ee.places.filter(i=>typeof i=="string").slice(-1e4):[]),Ln=Number.isFinite(ee?.friends)?ee.friends:0,Dl=Array.isArray(ee?.shinies)?ee.shinies.filter(i=>typeof i=="string").slice(-2e4):[],Ul=Number.isFinite(ee?.knocks)?ee.knocks:0,zi=typeof ee?.hat=="string"&&ls.some(i=>i.id===ee.hat)?ee.hat:"none",oe=null,gi=null,ps=null,ei=null,jd=null,us=0,em=null,sn=new gl,Sn=Un[ee?.country]?ee.country:"whiskerfield";var me=new yl;me.enabled=te.audio;me.volume=te.volume;var $t,Fn,Qe,On,Te,pe,Ie,qe,ds,mi,cs,Oi,nm=[],Bi,Pe=!1,en=!1,Le=null,Qd=null,tu=!1,Yp=!1,tn=Number.isFinite(ee?.cameraYaw)?ee.cameraYaw:.56,Qs=.34,ms=nn?5:5.4,nr=tn,er=Qs,Xs=ms,Bo=0,qs=0,kl=0,Wd=0,Xd=0,qd=0,Zp=0,eu=0,zs=0,Lo=16,tr=!1,fs=!1,Nl=!1,Ys=!1,Fl=0,Ol=0,Bl=null,ko=0,Yd=!1,zl=0,Hl=0,Vl=!1,Gl=!1,Hs=[],Fo="",fi=null,Vs=null,im=sessionStorage.getItem("whiskerfield.portrait")==="1",je=new Set,Fi=new Map,ui=new D,In=new D,_y=new D,Zr=new D,Ue=new Ne,$p=new Ft,nu=[],iu=[],Zs=[],pi=null,$s=!1,hs=Nd()||Fd(),sm=!1,Zd=0,$d=null,Nn={x:0,y:0,yaw:0,sprint:!1,baseSpeed:gy,sprintSpeed:xy,jump:!1,jumpHeld:!1,climb:!1,autoClimb:!0,resting:!1},vy={jump:()=>me.jump(),land:()=>me.land(),mantle:()=>me.chirp(),bounce:()=>{me.chirp(),Oo()}},Qn={x:0,y:0,climb:!1,sprint:!1,jump:!1,jumpHeld:!1},No=null,cu=!1,su=()=>{cu=!0};function Se(){if($t){cu=!1,No={x:X.pos.x,z:X.pos.z,yaw:tn};try{localStorage.setItem(ql,JSON.stringify({version:1,seed:$t.seedText,country:Sn,position:{x:X.pos.x,y:X.pos.y,z:X.pos.z},heading:X.heading,cameraYaw:tn,roofs:[...Mn].slice(-1e4),gardens:[...Bn].slice(-1e4),places:[...vn].slice(-1e4),friends:Ln,shinies:[...oe.collected].slice(-2e4),knocks:oe.knocks,hat:zi,settings:te,started:Pe}))}catch{Yp||(Yp=!0,Be("Saving is blocked in this browser (private mode?). Progress will not be kept.","note",5e3))}}}function Be(i,t="sun",e=3200){clearTimeout(Zp);let n=j("toast");j("toast-text").textContent=i,n.dataset.kind=t,n.classList.add("show"),n.classList.toggle("action",t==="update"),Zp=setTimeout(()=>n.classList.remove("show"),e)}function gs(){j("roof-count").textContent=Mn.size,j("garden-count").textContent=Bn.size,j("friend-count").textContent=Ln,j("place-count").textContent=vn.size,j("shiny-count").textContent=oe?oe.found:0}function rm(i,t){i.querySelector("use")?.setAttribute("href",t)}function Ws(){for(let[i,t]of[["audio-toggle","audio"],["shadow-toggle","shadows"],["motion-toggle","reducedMotion"],["immersive-toggle","immersive"]])j(i).classList.toggle("on",!!te[t]),j(i).setAttribute("aria-checked",String(!!te[t]));j("volume-slider").value=Math.round(te.volume*100),j("volume-label").textContent=Math.round(te.volume*100)+"%",j("sensitivity-slider").value=Math.round(te.sensitivity*100),j("sensitivity-label").textContent=Math.round(te.sensitivity*100)+"%",rm(j("sound-button"),te.audio?"#i-sound":"#i-muted"),j("sound-button").setAttribute("aria-label",te.audio?"Turn sound off":"Turn sound on"),Te&&au(),mi&&(mi.count=te.reducedMotion?12:48)}function $r(){je.clear(),tr=!1,fs=!1,Nl=!1,Fl=Ol=0,zl=Hl=0,Vl=!1,Gl=!1,X.jumpBuffer=0,j("joystick-knob").style.transform="translate(0px,0px)",j("joystick").classList.remove("engaged"),document.querySelectorAll(".touch-action.pressed").forEach(i=>i.classList.remove("pressed"))}function Pn(i){Qd=document.activeElement,$r(),Le=i,j("modal-backdrop").hidden=!1,document.querySelectorAll(".modal").forEach(t=>t.hidden=t.id!==i),j(i).scrollTop=0,i==="map-modal"&&(fi={x:X.pos.x,z:X.pos.z},Xl()),i==="settings-modal"&&(j("seed-label").textContent="Seed: "+$t.seedText,j("new-world-confirm").hidden=!0,Ws(),ti()),i==="install-modal"&&ti(),i==="hats-modal"&&(du(),j("hat-button").classList.remove("new")),requestAnimationFrame(()=>j(i).querySelector("button")?.focus({preventScroll:!0}))}function Js(){Le&&(Le=null,j("modal-backdrop").hidden=!0,document.querySelectorAll(".modal").forEach(i=>i.hidden=!0),$r(),Qd?.isConnected?Qd.focus({preventScroll:!0}):j("world").focus({preventScroll:!0}))}function om(){!tu||Pe||(Pe=!0,en=!1,eu=0,document.body.classList.add("playing"),document.body.classList.remove("resting"),Gd(!0),j("welcome").setAttribute("aria-hidden","true"),j("welcome").inert=!0,j("world").focus({preventScroll:!0}),te.audio&&me.start(),Se(),te.immersive&&Vd().then(Gs),Be(ee?.started?"Welcome back. You are where you left off.":"Try a roof first. Hold E at a wall, or jump at it and keep pushing.","sun",4200))}function ru(){if(!(!Pe||Le)){if(!X.grounded){Be("You can only nap on the ground.","note",2200);return}en=!en,$r(),document.body.classList.toggle("resting",en),j("rest-button").setAttribute("aria-pressed",String(en)),en&&(Be("Napping. Move to get up.","moon",2600),me.purr())}}function Gs(){let i=Pe&&Xp()&&Hd()&&!im;j("rotate").hidden=!i,document.body.classList.toggle("portrait",Hd());let t=Yr();rm(j("fullscreen-button"),t?"#i-shrink":"#i-expand"),j("fullscreen-button").setAttribute("aria-label",t?"Leave fullscreen":"Fullscreen")}function My(){pe=new Oa,pe.background=new Ft("#c9d4c8"),pe.fog=new Fa("#c9d4c8",58,nn?108:145),Te=new Na({canvas:j("world"),antialias:!0,powerPreference:"high-performance"}),Te.setPixelRatio(Math.min(devicePixelRatio,nn?1.4:1.5)),Te.setSize(innerWidth,innerHeight),Te.outputColorSpace=Je,Te.toneMapping=Qh,Te.toneMappingExposure=1.05,Te.shadowMap.enabled=te.shadows,Te.shadowMap.type=Kh,Ie=new an(50,innerWidth/innerHeight,.08,350),pe.add(new ja("#dfe6d8","#7e8a68",1.35)),qe=new Qa("#ffe6c0",2.2),qe.position.set(-35,60,25),qe.castShadow=!0,qe.shadow.mapSize.set(nn?1024:2048,nn?1024:2048),qe.shadow.camera.left=-36,qe.shadow.camera.right=36,qe.shadow.camera.top=36,qe.shadow.camera.bottom=-36,qe.shadow.camera.near=1,qe.shadow.camera.far=150,qe.shadow.bias=-3e-4,qe.shadow.normalBias=.03,qe.shadow.radius=3,pe.add(qe),pe.add(qe.target);let i=(()=>{let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,128,128);for(let s=0;s<2400;s++)e.fillStyle=`rgba(60,75,45,${Math.random()*.1})`,e.fillRect(Math.random()*128,Math.random()*128,1+Math.random()*2,1);let n=new Li(t);return n.wrapS=n.wrapT=Cs,n.repeat.set(180,180),n})();ds=new xt(new li(1200,1200),new Ge({color:"#93a86f",roughness:1,map:i})),ds.rotation.x=-Math.PI/2,ds.position.y=-.45,ds.receiveShadow=!0,pe.add(ds),hu(Ll||ee?.seed||Qp(),Sn),On=new bl(pe,ne.scale),On.root.position.copy(X.pos),On.root.rotation.y=X.heading,Wl(zi,!0),wy(),Ey(),Ws(),gs(),ui.copy(X.pos),dm(1,!0),j("seed-label").textContent="Seed: "+$t.seedText,ee?.started&&(j("start-button").firstChild.textContent="Wander on ",j("welcome-note").lastChild.textContent=" Just as you left it. Ready when you are."),tu=!0,Te.render(pe,Ie),requestAnimationFrame(()=>{requestAnimationFrame(()=>{j("loading").classList.add("done"),setTimeout(()=>j("loading").hidden=!0,700)})}),requestAnimationFrame(pm),jp.get("test")==="1"&&(window.__whiskerfield={player:X,get world(){return $t},get people(){return Qe},get birds(){return Bi},get physics(){return Fn},cat:On,renderer:Te,camera:Ie,input:Nn,hold:Qn,keys:je,start:om,save:Se,adapt:fm,getQuality:()=>({level:Ks,pixelRatio:Te.getPixelRatio(),shadows:Te.shadowMap.enabled}),mapCenter:()=>fi,step:t=>{cm(t),Qe.interactive=Pe&&!Le,Qe.update(t,X.pos,X.speed,Ie),Bi.update(t,X.pos,X.speed),oe.sync(),oe.update(t,X,Qe),gi.sync(X.pos),gi.update(t,X.pos,qs);let e=ps.update(t,X.pos,!!X.support?.train);if(X.support?.train&&!sn.active&&(X.pos.z+=e),sn.active)sn.update(t);else{let n=ei.at(X.pos);n?(us+=t,us>.9&&(us=-999,ou(n))):us=0}ei.sync(),qs+=t},get fun(){return oe},get ducks(){return gi},get train(){return ps},get planes(){return ei},flight:sn,get country(){return Sn},travel:lm,offerFlight:ou,board:t=>am(t),wearHat:Wl,hats:ls,discover:um,platformCalls:Xr,getState:()=>({ready:tu,started:Pe,resting:en,modal:Le,position:X.pos.toArray(),speed:X.speed,grounded:X.grounded,climbing:!!X.climbing,support:X.support?.kind||null,roofs:Mn.size,gardens:Bn.size,places:vn.size,friends:Ln,shinies:oe?oe.found:0,knocks:oe?oe.knocks:0,hat:zi,chunks:$t.chunks.size,colliders:$t.colliders.length,npcs:Qe.list.length,greetings:Qe.greetings,drawCalls:Te.info.render.calls,triangles:Te.info.render.triangles,offlineReady:$s,installed:hs,installButtonHidden:j("install-button").hidden,fullscreen:Yr(),cameraDistance:ms}),teleport:(t,e,n)=>{X.pos.set(t,e,n),X.vx=X.vz=X.vy=0,X.climbing=null,X.grounded=!1,$t.update(X.pos,25)},setCamera:(t,e=Qs,n=ms)=>{tn=nr=t,Qs=er=e,ms=Xs=n},getSettings:()=>({...te})})}function Sy(){let i=Un[Sn];pe.background.set(i.sky),pe.fog.color.set(i.sky),ds.material.color.set(i.ground),mi&&mi.material.color.set(i.leaf),j("seed-label").textContent="Seed: "+$t.seedText+(Sn==="whiskerfield"?"":" \xB7 "+i.name),document.body.dataset.country=Sn}function hu(i,t="whiskerfield"){Sn=Un[t]?t:"whiskerfield",$t=new ul(pe,i,Sn),$t.radius=nn?1:2,$t.update(X.pos,nn?5:9),Fn=new vl($t),Sy(),Qe=new El(pe,Fn,nn?9:14,i),Qe.onGreet=()=>{Ln++,gs(),me.greet(),Ln===1&&Be("Your first hello. People remember a friendly cat.","heart",3600),Ln%10===0&&Se()},Qe.spawnAll(X.pos),Bi=new Cl(pe,$t,nn?8:14),Bi.onStartle=e=>{Bi.startles++,e.crow?me.caw():Math.random()<.5&&me.tweet()},Bi.spawnAll(X.pos),gi=new Rl(pe,$t,Fn),gi.sync(X.pos),gi.onQuack=(e,n)=>me.quack(e==="duckling",n),ps=new pl(pe,$t,Fn),ps.onWhistle=e=>me.whistle(e),ps.onChuff=(e,n)=>me.chuff(e,n),ei=new ml(pe,$t,Fn),ei.sync(),jd||(jd=new xl(pe)),oe=new Tl(pe,$t,Fn,{collected:Dl,knocks:Ul}),oe.sync(),oe.onShiny=e=>{let n=oe.found;gs(),me.shiny(),Oo(e.x,e.y,e.z),su();let s=ls.find(r=>r.need===n&&r.id!=="none");Be(s?`${e.kind.line} That makes ${n} \u2014 the ${s.name.toLowerCase()} is yours. Press H.`:n===1?`${e.kind.line} A cat could start a collection.`:e.kind.line,"sun",s?4600:2600),s&&j("hat-button").classList.add("new"),(n%5===0||s)&&Se()},oe.onKnock=(e,n,s)=>{me.clatter(n,s),!s&&(su(),oe.knocks===1?Be("Oops. It was in the way.","leaf",2600):oe.knocks===10&&Be("Ten things knocked over. The street has noticed.","leaf",3e3))},On&&Wl(zi,!0)}function Wl(i,t=!1){let e=ls.find(n=>n.id===i)||ls[0];return oe&&oe.found<e.need?(t||Be(`Find ${e.need-oe.found} more ${e.need-oe.found===1?"shiny":"shinies"} for the ${e.name.toLowerCase()}.`,"note",2600),!1):(zi=e.id,On.setHat(e.id,Np(e.id)),su(),t||(Se(),du()),!0)}function du(){let i=j("hat-list");if(!i)return;i.textContent="";let t=oe?oe.found:0;j("hat-found").textContent=t;for(let e of ls){let n=document.createElement("button");n.type="button",n.className="hat-card",n.dataset.hat=e.id;let s=t<e.need,r=zi===e.id;n.classList.toggle("locked",s),n.classList.toggle("wearing",r),n.setAttribute("aria-pressed",r?"true":"false"),n.innerHTML="<strong></strong><small></small><em></em>",n.querySelector("strong").textContent=e.name,n.querySelector("small").textContent=e.blurb,n.querySelector("em").textContent=r?"Wearing":s?`${e.need} shinies`:e.need?"Found":"",n.addEventListener("click",()=>{Wl(e.id)&&du()}),i.appendChild(n)}}function wy(){let i=as(Io($t.seedText+"air"));mi=new ns(new li(.14,.25),new ln({color:"#e8d59a",side:mn,transparent:!0,opacity:.72}),48),mi.instanceMatrix.setUsage(nl),mi.frustumCulled=!1,pe.add(mi);for(let n=0;n<48;n++)nu.push({x:(i()-.5)*70,y:1+i()*12,z:(i()-.5)*70,phase:i()*Math.PI*2,speed:.3+i()*.5});cs=new ns(new li(.12,.15),new ln({side:mn}),24),cs.instanceMatrix.setUsage(nl),cs.frustumCulled=!1,pe.add(cs);for(let n=0;n<12;n++)iu.push({x:(i()-.5)*55,z:(i()-.5)*55,y:.6+i()*1.6,phase:i()*7}),cs.setColorAt(n*2,$p.set(["#f1d995","#e7ba95","#e9e7c7"][n%3])),cs.setColorAt(n*2+1,$p.set(["#f1d995","#e7ba95","#e9e7c7"][n%3]));Oi=new ns(new Za(.19),new Ge({color:"#edcc7d",emissive:"#c7a04d",emissiveIntensity:.3,roughness:.5}),400),Oi.instanceMatrix.setUsage(nl),Oi.count=0,Oi.frustumCulled=!1,pe.add(Oi);let t=new dn({color:"#f2f2df",transparent:!0,opacity:.65,depthWrite:!1}),e=new Ps(1,1);for(let n=0;n<9;n++){let s=new Zt;for(let r=0;r<4;r++){let o=new xt(e,t);o.position.set(r*3.5,Math.sin(r)*1.2,0),o.scale.set(4.5,2.1+r%2,2.8),s.add(o)}s.position.set((i()-.5)*240,38+i()*20,(i()-.5)*240),pe.add(s),nm.push(s)}}function Ey(){j("start-button").addEventListener("click",om),j("welcome-help").addEventListener("click",()=>Pn("help-modal")),j("settings-help").addEventListener("click",()=>Pn("help-modal")),j("settings-button").addEventListener("click",()=>Pn("settings-modal")),j("map-button").addEventListener("click",()=>Pn("map-modal")),j("hat-button").addEventListener("click",()=>Pn("hats-modal")),j("brand").addEventListener("click",u=>{u.preventDefault(),Pn("settings-modal")}),j("rest-button").addEventListener("click",ru),j("fullscreen-button").addEventListener("click",async()=>{Yr()?await Wp():(await Od(),nn&&await Bd()),Gs()}),j("rotate-continue").addEventListener("click",()=>{im=!0,sessionStorage.setItem("whiskerfield.portrait","1"),Gs()}),j("rotate-fullscreen").addEventListener("click",async()=>{await Vd(),Gs()}),document.querySelectorAll("[data-close]").forEach(u=>u.addEventListener("click",Js)),j("modal-backdrop").addEventListener("click",u=>{u.target===j("modal-backdrop")&&Js()}),j("sound-button").addEventListener("click",()=>{te.audio=!te.audio,me.setEnabled(te.audio),Ws(),Se()}),j("audio-toggle").addEventListener("click",()=>{te.audio=!te.audio,me.setEnabled(te.audio),Ws(),Se()}),j("shadow-toggle").addEventListener("click",()=>{te.shadows=!te.shadows,Ws(),Te.shadowMap.needsUpdate=!0,pe.traverse(u=>{u.material&&(u.material.needsUpdate=!0)}),Se()}),j("motion-toggle").addEventListener("click",()=>{te.reducedMotion=!te.reducedMotion,Ws(),Se()}),j("immersive-toggle").addEventListener("click",()=>{te.immersive=!te.immersive,Ws(),Se()}),j("volume-slider").addEventListener("input",u=>{te.volume=Number(u.target.value)/100,me.setVolume(te.volume),j("volume-label").textContent=u.target.value+"%",Se()}),j("sensitivity-slider").addEventListener("input",u=>{te.sensitivity=Number(u.target.value)/100,j("sensitivity-label").textContent=u.target.value+"%",Se()}),j("new-world-button").addEventListener("click",()=>j("new-world-confirm").hidden=!1),j("cancel-new-world").addEventListener("click",()=>j("new-world-confirm").hidden=!0),j("confirm-new-world").addEventListener("click",Ty),j("map-recenter").addEventListener("click",()=>{fi={x:X.pos.x,z:X.pos.z},Xl()}),j("install-button").addEventListener("click",()=>Pn("install-modal")),j("install-link").addEventListener("click",()=>Pn("install-modal")),j("install-now-button").addEventListener("click",async()=>{if(pi){let u=pi;pi=null;try{await u.prompt(),(await u.userChoice).outcome==="accepted"?(Jd(),Be("Installed.","heart")):ti()}catch{pi=null,ti()}}else Js()}),j("toast").addEventListener("click",()=>{sm&&location.reload()}),window.addEventListener("beforeinstallprompt",u=>{u.preventDefault(),pi=u,ti()}),window.addEventListener("appinstalled",()=>{Jd(),Se()}),Gp().then(u=>{u&&Jd()}),window.addEventListener("keydown",u=>{if(u.code==="Escape"){u.preventDefault(),Le?Js():Pn("settings-modal");return}if(Le){if(u.code==="Tab"){let d=[...j(Le).querySelectorAll('button,input,[tabindex="0"]')].filter(g=>!g.disabled&&g.offsetParent!==null),h=d[0],f=d.at(-1);u.shiftKey&&document.activeElement===h?(u.preventDefault(),f?.focus()):!u.shiftKey&&document.activeElement===f&&(u.preventDefault(),h?.focus())}return}if(Pe){if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","KeyE","ShiftLeft","ShiftRight","KeyM","KeyN","KeyF","KeyH"].includes(u.code)&&u.preventDefault(),u.code==="KeyM"&&!u.repeat){Pn("map-modal");return}if(u.code==="KeyH"&&!u.repeat){Pn("hats-modal");return}if(u.code==="KeyN"&&!u.repeat){ru();return}if(u.code==="KeyF"&&!u.repeat){j("fullscreen-button").click();return}u.code==="Space"&&!u.repeat&&!je.has("Space")&&(tr=!0),u.code==="Space"&&(fs=!0),je.add(u.code)}}),window.addEventListener("keyup",u=>{je.delete(u.code),u.code==="Space"&&(fs=!1)}),window.addEventListener("blur",()=>{$r(),Fi.clear(),Se()}),document.addEventListener("visibilitychange",()=>{document.hidden?($r(),Se(),me.suspend()):(kl=performance.now(),me.resume())}),window.addEventListener("pagehide",Se);let i=()=>{Ie.aspect=innerWidth/innerHeight,Ie.updateProjectionMatrix(),Te.setSize(innerWidth,innerHeight),Gs()};window.addEventListener("resize",i),screen.orientation?.addEventListener?.("change",i),document.addEventListener("fullscreenchange",()=>{Yr()||zd(),Gs()}),j("world").addEventListener("webglcontextlost",u=>{u.preventDefault(),Se(),j("error-message").textContent="The graphics context was lost. Reload to continue from your saved spot.",j("error-screen").hidden=!1});let t=j("world");t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("pointerdown",u=>{if(!Le&&(t.setPointerCapture(u.pointerId),Fi.set(u.pointerId,{x:u.clientX,y:u.clientY}),Fi.size===2)){let d=[...Fi.values()];Zd=Math.hypot(d[0].x-d[1].x,d[0].y-d[1].y)}}),t.addEventListener("pointermove",u=>{if(!Fi.has(u.pointerId)||Le)return;let d=Fi.get(u.pointerId),h=u.clientX-d.x,f=u.clientY-d.y;if(d.x=u.clientX,d.y=u.clientY,Fi.size===2){let g=[...Fi.values()],x=Math.hypot(g[0].x-g[1].x,g[0].y-g[1].y);Xs=js(Xs-(x-Zd)*.012,3.2,nn?9:14),Zd=x}else nr-=h*.0048*te.sensitivity,er=js(er+f*.0032*te.sensitivity,.16,nn?.95:1.15);Bo=1.6});let e=u=>Fi.delete(u.pointerId);t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("lostpointercapture",e),t.addEventListener("wheel",u=>{u.preventDefault(),Le||(Xs=js(Xs+u.deltaY*.006,3.2,14),Bo=1.6)},{passive:!1});let n=j("joystick"),s=null,r=u=>{let d=n.getBoundingClientRect(),h=d.width*.36,f=u.clientX-d.left-d.width/2,g=u.clientY-d.top-d.height/2,x=Math.hypot(f,g);x>h&&(f*=h/x,g*=h/x);let p=Math.min(1,x/h),m=.1,b=p<m?0:(p-m)/(1-m);Fl=x?f/x*b:0,Ol=x?g/x*b:0,j("joystick-knob").style.transform=`translate(${f}px,${g}px)`,n.classList.toggle("engaged",p>m)};n.addEventListener("pointerdown",u=>{u.preventDefault(),s=u.pointerId,n.setPointerCapture(u.pointerId),r(u)}),n.addEventListener("pointermove",u=>{u.pointerId===s&&r(u)});let o=u=>{u.pointerId===s&&(s=null,Fl=Ol=0,j("joystick-knob").style.transform="translate(0px,0px)",n.classList.remove("engaged"))};n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),n.addEventListener("lostpointercapture",o);let a=(u,d,h)=>{let f=j(u);f.addEventListener("pointerdown",g=>{g.preventDefault(),f.setPointerCapture(g.pointerId),f.classList.add("pressed"),d()});for(let g of["pointerup","pointercancel","lostpointercapture"])f.addEventListener(g,()=>{f.classList.remove("pressed"),h()})};a("touch-jump",()=>{tr=!0,fs=!0},()=>{fs=!1}),a("touch-climb",()=>{Nl=!0},()=>{Nl=!1});let l=u=>{Ys=u,j("touch-run").classList.toggle("active",Ys),j("touch-run").setAttribute("aria-pressed",String(Ys))};j("touch-run").addEventListener("pointerdown",u=>{u.preventDefault(),l(!Ys)});let c=j("map-canvas");c.addEventListener("pointerdown",u=>{c.setPointerCapture(u.pointerId),Vs={x:u.clientX,y:u.clientY}}),c.addEventListener("pointermove",u=>{if(!Vs)return;let d=Kp*(c.clientWidth/960);fi.x-=(u.clientX-Vs.x)/d,fi.z-=(u.clientY-Vs.y)/d,Vs={x:u.clientX,y:u.clientY},Xl()});for(let u of["pointerup","pointercancel","lostpointercapture"])c.addEventListener(u,()=>Vs=null);Gs()}function Jd(){hs=!0,pi=null,Il(),ti()}function ou(i){em=i;let t=j("flight-list");t.innerHTML="";for(let e of xp){if(e===Sn)continue;let n=Un[e],s=document.createElement("button");s.className="flight-card",s.type="button",s.dataset.country=e,s.innerHTML=`<span class="flight-code">${n.code}</span><strong>${n.name}</strong><small>${e==="whiskerfield"?"Home":n.trees==="palm"?"Warm. Palms. Red roofs.":n.snow?"Snow. Pines. Red cabins.":"Blossom. Dark tiles."}</small>`,s.addEventListener("click",()=>am(e)),t.appendChild(s)}j("flight-from").textContent=Un[Sn].name,Pn("flight-modal")}function am(i){let t=em||ei.at(X.pos)||[...ei.list.values()][0];return!t||!Un[i]||i===Sn?!1:(Js(),en=!1,$r(),On.root.visible=!1,me.jet(),sn.begin(t,i),Be("Doors closing. Hold on to something.","sun",2600),!0)}sn.onFade=i=>{let t=j("fade");t.style.opacity=i,t.hidden=i<=0};sn.onTravel=i=>lm(i);sn.onArrive=i=>{X.pos.set(i.door.x,.3,i.stand.z+8.6),X.vx=X.vz=X.vy=0,X.climbing=null,X.grounded=!0,X.heading=Math.PI,On.root.visible=!0,On.root.position.copy(X.pos),tn=nr=Math.PI+.4,ui.copy(X.pos),Be(Un[Sn].line,"sun",4200),me.discovery(),Se()};function lm(i){lu({version:1,seed:$t.seedText,country:Sn,position:{x:X.pos.x,y:X.pos.y,z:X.pos.z},heading:X.heading,cameraYaw:tn,roofs:[...Mn].slice(-1e4),gardens:[...Bn].slice(-1e4),places:[...vn].slice(-1e4),friends:Ln,shinies:[...oe.collected],knocks:oe.knocks,hat:zi,started:Pe});let t=$t.seedText;Qe.dispose(),Bi.dispose(),gi.dispose(),ps.dispose(),ei.dispose();for(let[,s]of oe.tracked)pe.remove(s.group);$t.dispose();let e=tm(t,i);if(Mn.clear(),Bn.clear(),vn.clear(),Ln=0,Dl.length=0,Ul=0,e){for(let s of e.roofs||[])Mn.add(s);for(let s of e.gardens||[])Bn.add(s);for(let s of e.places||[])vn.add(s);Ln=e.friends||0,Dl.push(...e.shinies||[]),Ul=e.knocks||0}X.pos.set(2*It+2.1,.3,9.9),X.vx=X.vz=X.vy=0,hu(t,i),gs(),Fo="";let n=$t.airports.reduce((s,r)=>!s||Math.hypot(r.x-X.pos.x,r.z-X.pos.z)<Math.hypot(s.x-X.pos.x,s.z-X.pos.z)?r:s,null);return vn.add(n.id),Se(),n}function Ty(){lu({version:1,seed:$t.seedText,country:Sn,position:{x:X.pos.x,y:X.pos.y,z:X.pos.z},heading:X.heading,cameraYaw:tn,roofs:[...Mn].slice(-1e4),gardens:[...Bn].slice(-1e4),places:[...vn].slice(-1e4),friends:Ln,shinies:[...oe.collected],knocks:oe.knocks,hat:zi,started:Pe}),Qe.dispose(),Bi.dispose(),gi.dispose(),ps.dispose(),ei.dispose();for(let[,i]of oe.tracked)pe.remove(i.group);$t.dispose(),Mn.clear(),Bn.clear(),vn.clear(),Ln=0,Dl.length=0,Ul=0,zi="none",X.pos.set(1.1,0,7.1),X.vx=X.vz=X.vy=0,X.climbing=null,X.grounded=!0,X.heading=.55,X.landImpact=0,X.runBlend=0,tn=nr=.56,Qs=er=.34,ms=Xs=nn?5:5.4,en=!1,ee=null,hu(Qp(),"whiskerfield"),gs(),Js(),Se(),document.body.classList.remove("resting"),j("rest-button").setAttribute("aria-pressed","false"),Be("New town. Same cat.","leaf")}function cm(i){if(sn.active){X.speed=0;return}let t=(je.has("KeyD")||je.has("ArrowRight")?1:0)-(je.has("KeyA")||je.has("ArrowLeft")?1:0)+Fl+zl+Qn.x,e=(je.has("KeyS")||je.has("ArrowDown")?1:0)-(je.has("KeyW")||je.has("ArrowUp")?1:0)+Ol+Hl+Qn.y;Qn.jump&&(tr=!0,Qn.jump=!1);let n=Math.hypot(t,e);n>.15&&en&&(en=!1,document.body.classList.remove("resting"),j("rest-button").setAttribute("aria-pressed","false")),Nn.x=t,Nn.y=e,Nn.yaw=tn,Nn.sprint=je.has("ShiftLeft")||je.has("ShiftRight")||Ys||Vl||Qn.sprint,Nn.jump=Nn.jump||tr,tr=!1,Nn.jumpHeld=fs||Qn.jumpHeld;let s=je.has("KeyE")||Nl||Gl||Qn.climb;Nn.resting=en;let r=Math.min(12,Math.max(1,Math.ceil(i/by))),o=i/r;for(let a=0;a<r;a++){if(ko=Bl&&X.grounded&&n>.5&&X.speed<1.2&&!en?ko+o:Math.max(0,ko-o*3),ko>.32&&(Yd=!0,ko=0),Nn.climb=s||Yd,Bl=Ep(X,Nn,Fn,o,vy).wall,Wd+=o,Wd>5){Wd=0;let u=!No||Math.hypot(X.pos.x-No.x,X.pos.z-No.z)>.3||Math.abs(tn-No.yaw)>.05;(cu||u)&&Se()}(!X.climbing||n<.3)&&(Yd=!1)}Nn.jump=!1}function Ay(i){let e=[...navigator.getGamepads?navigator.getGamepads():[]].find(a=>a&&a.connected);if(!e){zl=Hl=0,Vl=!1,Gl=!1,Hs=[];return}let n=a=>Math.abs(a)<.16?0:(Math.abs(a)-.16)/.84*Math.sign(a);zl=n(e.axes[0]||0),Hl=n(e.axes[1]||0);let s=n(e.axes[2]||0),r=n(e.axes[3]||0);(s||r)&&(nr-=s*2.6*i,er=js(er+r*1.8*i,.16,1.15),Bo=1.6);let o=a=>!!e.buttons[a]?.pressed;o(10)&&!Hs[10]&&(Ys=!Ys),Vl=o(6)||o(7),Gl=o(1)||o(5)||o(4),o(0)&&!Hs[0]&&(tr=!0),o(0)?fs=!0:Hs[0]&&(fs=!1),o(9)&&!Hs[9]&&(Le?Js():Pn("settings-modal")),o(3)&&!Hs[3]&&ru(),Hs=e.buttons.map(a=>a.pressed)}function hm(i,t,e,n=.2){let s=0,r=1;for(let[o,a,l,c]of[[i.x,t.x,e.minX-n,e.maxX+n],[i.y,t.y,e.minY-n,e.maxY+n],[i.z,t.z,e.minZ-n,e.maxZ+n]])if(Math.abs(a)<1e-7){if(o<l||o>c)return 1/0}else{let u=(l-o)/a,d=(c-o)/a;if(u>d&&([u,d]=[d,u]),s=Math.max(s,u),r=Math.min(r,d),s>r)return 1/0}return s>.02?s:1/0}function dm(i,t=!1){if(Qn.camera){Ie.position.set(...Qn.camera.pos),Ie.lookAt(...Qn.camera.at);return}if(sn.active&&sn.camPos){Ie.position.copy(sn.cam.pos),Ie.lookAt(sn.cam.at);return}tn=$n.damp(tn,nr,12,i),Qs=$n.damp(Qs,er,10,i),ms=$n.damp(ms,Xs*(1+X.runBlend*.14),6,i),Bo=Math.max(0,Bo-i);let e=!Pe,n=innerWidth<700||innerWidth<innerHeight,s=Math.cos(tn),r=-Math.sin(tn),o=_y.copy(X.pos);if(o.y+=e?.9:.38+(X.climbing?.25:0),e||(o.x+=X.vx*.1,o.z+=X.vz*.1,o.y+=js(X.vy,-4,4)*.03),e){let h=n?0:-3.4;o.x+=s*h,o.z+=r*h}t?ui.copy(o):ui.lerp(o,1-Math.exp(-10*i));let a=e?.3:Qs,l=e?n?9:11:ms;In.set(Math.sin(tn)*Math.cos(a)*l,Math.sin(a)*l,Math.cos(tn)*Math.cos(a)*l);let c=1,u=-1/0;if(!e)for(let h of Fn.query(X.pos.x,X.pos.z,l+1.5)){if(h.shape==="ellipsoid"||h.person||h.shape==="cylinder"&&h.r<.2||h.maxY-h.minY<.3)continue;let f=hm(ui,In,h);f>=1||(h.maxY-h.minY>=.7?c=Math.min(c,f):f>.05&&(u=Math.max(u,ui.y+(h.maxY+.22-ui.y)/f)))}if(c<1&&In.multiplyScalar(Math.max(.18,c-.3/l)),In.add(ui),u>In.y&&(In.y=Math.min(u,ui.y+l*.9)),!e){let h=Fn.highest(In.x,In.z,In.y),f=Math.max(0,h)+.42;In.y<f&&(In.y=f)}t?Ie.position.copy(In):Ie.position.lerp(In,1-Math.exp(-(c<1?16:9)*i)),Ie.lookAt(ui);let d=e?46:50+X.runBlend*6;Math.abs(Ie.fov-d)>.02&&(Ie.fov=$n.damp(Ie.fov,d,5,i),Ie.updateProjectionMatrix())}function Oo(i=X.pos.x,t=X.pos.y+.4,e=X.pos.z){for(let n=0;n<14;n++)Zs.push({x:i,y:t,z:e,vx:(Math.random()-.5)*2,vy:.8+Math.random()*1.8,vz:(Math.random()-.5)*2,life:1.4});Zs.length>80&&Zs.splice(0,Zs.length-80)}var Ry={market:()=>"Market day. Mind the stallholders\u2019 feet.",works:()=>"The old works. Something in there is still turning.",warehouse:()=>"The depot. Pallets make excellent stairs.",tower:()=>"Top of the tower. You can see the whole district.",playground:()=>"The playground. Beams, a climbing frame, a slide, a trampoline.",cafe:()=>"Inside the caf\xE9.",shop:()=>"The little grocer. Please do not knock over the tins.",home:()=>"Somebody\u2019s living room.",station:()=>"The station. The train is in, and in no hurry.",allotments:()=>"The allotments. Mind the lettuces.",house:i=>`Inside. ${i.name[0].toUpperCase()}${i.name.slice(1)}.`,worksfloor:()=>"The works floor. Loud, warm, and nobody minds a cat.",lobby:()=>"The lobby. Very shiny floor.",depotfloor:()=>"Inside the depot. Rows and rows of boxes.",bridge:()=>"The footbridge. Best place to watch the train.",yard:()=>"The goods yard.",signalbox:()=>"The signal box. All the levers.",airport:()=>"The airport. Walk up the steps if you fancy going somewhere."};function um(){let i=X.pos;for(let e of $t.buildings){if(Mn.has(e.id))continue;let n=X.support,s=!!n&&(n.building===e||n.buildingId===e.id||["roof","chimney","wall","box","pergola","pot"].includes(n.kind));if(X.grounded&&s&&i.y>=e.h-.15&&Math.abs(i.x-e.x)<e.w/2+.3&&Math.abs(i.z-e.z)<e.d/2+.3){Mn.add(e.id),gs(),Oo(),me.discovery();let r=Mn.size;Be(r===1?"First rooftop. Roofs connect most of the town.":r%5===0?`${r} rooftops.`:"New rooftop.","sun",r===1?3600:2200),Se();break}}for(let e of $t.parks)if(!Bn.has(e.id)&&i.y<1.5&&(i.x-e.x)**2+(i.z-e.z)**2<81){Bn.add(e.id),gs(),me.discovery(),Oo(),Be("A park.","leaf",2600),Se();break}for(let e of $t.landmarks){if(vn.has(e.id))continue;let n;if(e.inside?n=i.x>e.inside.minX&&i.x<e.inside.maxX&&i.z>e.inside.minZ&&i.z<e.inside.maxZ&&i.y<e.y+1.5:e.kind==="tower"?n=X.grounded&&i.y>e.y-.5&&Math.abs(i.x-e.x)<e.radius&&Math.abs(i.z-e.z)<e.radius:n=(i.x-e.x)**2+(i.z-e.z)**2<e.radius**2&&i.y<6,!n)continue;vn.add(e.id),gs(),Oo(),me.discovery();let s=vn.size;Be(Ry[e.kind]?.(e,s)||`You found ${e.name}.`,"sun",3200),Se();break}let t=fl(Math.floor((i.x+36)/72),Math.floor((i.z+36)/72),$t.seed);if(t!==Fo){let e=!Fo;Fo=t,j("district-name").textContent=t;let n=j("location-card");n.classList.remove("fresh"),n.offsetWidth,n.classList.add("fresh"),!e&&getComputedStyle(n).display==="none"&&Be(t,"leaf",2e3)}}function Cy(i){let t=X.pos,e=qs;for(let s=0;s<nu.length;s++){let r=nu[s];r.x+=i*r.speed,r.z+=i*.15,r.x-t.x>35&&(r.x-=70),r.x-t.x<-35&&(r.x+=70),r.z-t.z>35&&(r.z-=70),r.z-t.z<-35&&(r.z+=70),Ue.position.set(r.x,r.y+Math.sin(e*.5+r.phase)*.6,r.z),Ue.rotation.set(e*.4+r.phase,e*.3+r.phase,e*.2),Ue.scale.setScalar(1),Ue.updateMatrix(),mi.setMatrixAt(s,Ue.matrix)}mi.instanceMatrix.needsUpdate=!0;for(let s=0;s<iu.length;s++){let r=iu[s];r.x-t.x>30&&(r.x-=60),r.x-t.x<-30&&(r.x+=60),r.z-t.z>30&&(r.z-=60),r.z-t.z<-30&&(r.z+=60);let o=r.x+Math.sin(e*.55+r.phase)*1.7,a=r.z+Math.cos(e*.4+r.phase)*1.7,l=r.y+Math.sin(e*1.4+r.phase)*.35;for(let c=0;c<2;c++)Ue.position.set(o+(c?-.05:.05),l,a),Ue.rotation.set(Math.PI/2,Math.sin(e*13+r.phase)*(c?-.8:.8),e*.2+r.phase),Ue.scale.set(1,1,1),Ue.updateMatrix(),cs.setMatrixAt(s*2+c,Ue.matrix)}cs.instanceMatrix.needsUpdate=!0;let n=0;for(let s of $t.buildings){if(Mn.has(s.id)||(s.x-t.x)**2+(s.z-t.z)**2>65**2||n>=320)continue;let r=$t.roofHeight(s,s.x,s.z);Ue.position.set(s.x,r+1.25+Math.sin(e*1.7+s.x)*.15,s.z),Ue.rotation.set(0,e*.7,0),Ue.scale.setScalar(1),Ue.updateMatrix(),Oi.setMatrixAt(n++,Ue.matrix)}for(let s=Zs.length-1;s>=0;s--){let r=Zs[s];if(r.life-=i,r.life<=0){Zs.splice(s,1);continue}r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,r.vy-=i,n<390&&(Ue.position.set(r.x,r.y,r.z),Ue.rotation.set(e,e,0),Ue.scale.setScalar(Math.min(1,r.life)*.3),Ue.updateMatrix(),Oi.setMatrixAt(n++,Ue.matrix))}Oi.count=n,Oi.instanceMatrix.needsUpdate=!0;for(let s of nm)s.position.x+=i*.18,s.position.x-t.x>150&&(s.position.x-=300),s.position.x-t.x<-150&&(s.position.x+=300),s.position.z-t.z>150&&(s.position.z-=300),s.position.z-t.z<-150&&(s.position.z+=300)}var Do=new D,Kd=new D;function Iy(i){Do.copy(Ie.position),Kd.set(i.x,i.y+i.H*.8,i.z).sub(Do);let t=Kd.length(),e=(Do.x+i.x)/2,n=(Do.z+i.z)/2;for(let s of Fn.query(e,n,t/2+1))if(!(s.shape==="ellipsoid"||s.person||s.auto||s.shape==="cylinder"||s.maxY-s.minY<.3)&&!(s.kind!=="wall"&&s.kind!=="roof"&&s.kind!=="floor")&&hm(Do,Kd,s,0)<.985)return!1;return!0}function Py(){let i=j("bubble"),t=Pe&&!Le?Qe.speaker(X.pos,Iy):null;if(!t){i.classList.remove("show");return}if(Zr.set(t.x,t.y+t.H+.22,t.z).project(Ie),Zr.z>1||Math.abs(Zr.x)>1.3||Math.abs(Zr.y)>1.3){i.classList.remove("show");return}let e=js((Zr.x+1)/2*innerWidth,90,innerWidth-90),n=js((1-Zr.y)/2*innerHeight,52,innerHeight-40);i.textContent!==t.line&&(i.textContent=t.line),i.style.transform=`translate(${e}px,${n}px) translate(-50%,-100%)`,i.classList.add("show")}function Xl(){if(!fi)return;let i=j("map-canvas"),t=i.getContext("2d"),e=i.width,n=i.height,s=Kp,r=f=>(f-fi.x)*s+e/2,o=f=>(f-fi.z)*s+n/2;t.fillStyle="#dce6c9",t.fillRect(0,0,e,n);for(let f of $t.chunks.values()){let g=f.cx*It,x=f.cz*It;t.fillStyle=(f.cx+f.cz)%2?"#d4e1bf":"#d8e3c4",t.fillRect(r(g-36),o(x-36),72*s,72*s),t.fillStyle="#eee9d4";for(let p of[-1,1])t.fillRect(r(g+p*32.5-3.5),o(x-36),7*s,72*s),t.fillRect(r(g-36),o(x+p*32.5-3.5),72*s,7*s);t.fillStyle="#e7e5cd",t.fillRect(r(g-1.5),o(x-29),3*s,58*s),t.fillRect(r(g-29),o(x-1.5),58*s,3*s),t.fillStyle="#8fa27b",t.font='500 12px "DM Sans", sans-serif',t.textAlign="center",t.fillText(fl(f.cx,f.cz,$t.seed).toUpperCase(),r(g),o(x-27))}for(let f of $t.parks){t.fillStyle="#b7cd98",t.beginPath(),t.roundRect(r(f.x-12),o(f.z-12),24*s,24*s,9),t.fill(),t.fillStyle="#e8e2c7",t.fillRect(r(f.x-1.5),o(f.z-12),3*s,24*s),t.fillRect(r(f.x-12),o(f.z-1.5),24*s,3*s),t.fillStyle="#94bfb0",t.beginPath(),t.ellipse(r(f.x+4.5),o(f.z-4.3),4*s,3.7*s,0,0,Math.PI*2),t.fill();for(let[g,x]of[[-6,-6],[7,7],[-7,6]])t.fillStyle="#91ad78",t.beginPath(),t.arc(r(f.x+g),o(f.z+x),7,0,Math.PI*2),t.fill();Bn.has(f.id)&&(t.fillStyle="#64865c",t.font="16px sans-serif",t.fillText("\u2713",r(f.x),o(f.z+4)))}for(let f of $t.buildings){let g=Mn.has(f.id);t.fillStyle="#a8b596",t.beginPath(),t.roundRect(r(f.x-f.w/2)+3,o(f.z-f.d/2)+4,f.w*s,f.d*s,3),t.fill(),t.fillStyle=g?"#7f9d79":f.wall,t.strokeStyle=g?"#5f805d":"#aab397",t.lineWidth=1.3,t.beginPath(),t.roundRect(r(f.x-f.w/2),o(f.z-f.d/2),f.w*s,f.d*s,3),t.fill(),t.stroke(),t.strokeStyle=g?"#a8c29a":f.roofColor,t.lineWidth=2,t.beginPath(),t.moveTo(r(f.x-f.w/2+1),o(f.z)),t.lineTo(r(f.x+f.w/2-1),o(f.z)),t.stroke(),g?(t.fillStyle="#f4f4df",t.font="bold 15px sans-serif",t.textAlign="center",t.fillText("\u2713",r(f.x),o(f.z)+5)):(t.fillStyle="#c5a15d",t.beginPath(),t.arc(r(f.x),o(f.z),2.5,0,Math.PI*2),t.fill())}let a={market:"#d7a048",works:"#8a6a4c",warehouse:"#8a8072",tower:"#5f6b66",playground:"#d9544f",cafe:"#c88f6e",shop:"#6f9a4f",home:"#b48c9c",station:"#4f7f96",allotments:"#8fb04f",airport:"#5f6b66",bridge:"#4f5a56",yard:"#8a6a4c",signalbox:"#8f5f4e",house:"#b48c9c",worksfloor:"#9a6b55",lobby:"#8fb0b8",depotfloor:"#8a9893"};for(let f of $t.landmarks){let g=vn.has(f.id);t.fillStyle=a[f.kind]||"#999",t.strokeStyle="#fffaf0",t.lineWidth=2,t.beginPath(),t.arc(r(f.x),o(f.z),g?7:5.5,0,Math.PI*2),t.fill(),t.stroke(),g&&(t.fillStyle="#fffaf0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("\u2713",r(f.x),o(f.z)+3.5)),Math.abs(f.x-fi.x)<110&&Math.abs(f.z-fi.z)<70&&(t.fillStyle="#5f6b5a",t.font='600 10px "DM Sans", sans-serif',t.textAlign="center",t.fillText(f.name.replace(/^the |^somebody’s /,""),r(f.x),o(f.z)+18))}for(let f of Qe.list)t.fillStyle=f.job?"#a37c5a":"#7c8fa6",t.beginPath(),t.arc(r(f.x),o(f.z),3,0,Math.PI*2),t.fill();let l=r(X.pos.x),c=o(X.pos.z);t.fillStyle="#ffffff",t.beginPath(),t.arc(l,c,12,0,Math.PI*2),t.fill(),t.shadowColor="#6b775333",t.shadowBlur=8,t.fillStyle="#cb8b50",t.beginPath(),t.arc(l,c,8.5,0,Math.PI*2),t.fill(),t.shadowBlur=0,t.save(),t.translate(l,c),t.rotate(-X.heading),t.fillStyle="#fff9e9",t.beginPath(),t.moveTo(0,6),t.lineTo(-4,-3),t.lineTo(4,-3),t.closePath(),t.fill(),t.restore();let u=Mn.size,d=Bn.size,h=vn.size;j("map-seed").textContent="Seed "+$t.seedText,j("map-description").textContent=`${Fo||fl(0,0,$t.seed)} \xB7 ${u} rooftop${u===1?"":"s"}, ${d} garden${d===1?"":"s"}, ${h} place${h===1?"":"s"}, ${Ln} friend${Ln===1?"":"s"}. Drag to look further.`}var Ks=0,Uo=0,Jp=!1,Ly=()=>Math.min(devicePixelRatio,nn?1.4:1.5);function au(){let i=Math.max(.75,Ly()-.2*Math.min(Ks,3));Math.abs(Te.getPixelRatio()-i)>.01&&(Te.setPixelRatio(i),Te.setSize(innerWidth,innerHeight));let t=te.shadows&&Ks<4;Te.shadowMap.enabled!==t&&(Te.shadowMap.enabled=t,pe.traverse(e=>{e.material&&(e.material.needsUpdate=!0)}))}function fm(i){Lo+=(i-Lo)*.05,Lo>30?(zs+=i/1e3,Uo=0):Lo<20?(zs=0,Uo+=i/1e3):zs=Math.max(0,zs-i/2e3),zs>2.5&&Ks<4?(zs=0,Uo=0,Ks++,au(),Jp||(Jp=!0,Be("Softening the picture to keep the frame rate up.","note",3200))):Uo>8&&Ks>0&&(Uo=0,zs=0,Ks--,au(),Lo=16)}function pm(i){if(requestAnimationFrame(pm),document.hidden){kl=i;return}let t=i-(kl||i-16),e=Math.min(.12,Math.max(.001,t/1e3));kl=i,qs+=e,Pe&&(fm(t),eu+=e),Ay(e),$t.update(X.pos,1)&&oe.sync(),$t.animate(qs);let n=ps.update(e,X.pos,!!X.support?.train);if(X.support?.train&&!sn.active&&(X.pos.z+=n),Pe&&!Le?cm(e):(X.speed=0,X.turnRate=0,X.accel=0,Bl=null),sn.active)sn.update(e);else if(Pe&&!Le){let r=ei.at(X.pos);r?(us+=e,us>.9&&(us=-999,ou(r))):us=0}jd.update(e,X.pos),On.root.position.copy(X.pos),On.root.rotation.y=X.heading;let s=Fn.support(X.pos.x,X.pos.z,X.pos.y+.05).y;if(On.update(e,qs,{speed:X.speed,grounded:X.grounded,climbing:!!X.climbing,resting:en,vy:X.vy,turnRate:X.turnRate,accel:X.accel,landImpact:X.landImpact,runBlend:X.runBlend},s,te.reducedMotion),Qe.interactive=Pe&&!Le,Qe.update(e,X.pos,X.speed,Ie),Bi.update(e,X.pos,X.speed),Pe&&!Le&&oe.update(e,X,Qe),gi.update(e,X.pos,qs),!Pe&&!te.reducedMotion&&(nr+=e*.03),dm(e),Cy(e),me.update(e),Py(),ds.position.x=X.pos.x,ds.position.z=X.pos.z,qe.position.set(X.pos.x-35,60,X.pos.z+25),qe.target.position.set(X.pos.x,0,X.pos.z),Xd+=e,Xd>.25){Xd=0,Pe&&!Le&&um(),oe.sync(),gi.sync(X.pos),ei.sync();let r=!!Bl&&!X.climbing&&!en&&Pe&&!Le&&X.grounded;j("context-hint").classList.toggle("visible",r&&!nn),j("touch-climb").classList.toggle("ready",r),document.body.classList.toggle("sprinting",X.runBlend>.5),document.body.classList.toggle("settled",eu>14),Le==="map-modal"&&!Vs&&Xl()}en&&(qd+=e,qd>1.7&&(qd=0,me.purr())),Te.render(pe,Ie)}function ti(){let i=hs?"Installed":$s?"Offline ready":"Loading\u2026";j("offline-label").textContent=!navigator.onLine&&$s?"Playing offline":i,j("offline-status").classList.toggle("ready",$s),j("install-ready").querySelector("span").textContent=$s?"All tucked in. This world is ready to play offline.":"Getting the offline files ready\u2026";let t=!hs&&(!!pi||Hp||Vp);j("install-button").hidden=!t,j("install-link").hidden=hs,j("install-link").textContent=pi?"Install on this device":"How to install",j("installed-note").hidden=!hs,j("install-now-button").firstChild.textContent=pi?"Install Whiskerfield ":hs?"Back to my world ":"Got it. Thank you ",j("install-instructions").hidden=!!pi||hs}async function ky(){if(ti(),window.addEventListener("online",ti),window.addEventListener("offline",ti),!("serviceWorker"in navigator)||!window.isSecureContext){j("offline-label").textContent="Online preview",j("install-ready").querySelector("span").textContent="Offline install needs HTTPS or localhost.";return}try{let i=!!navigator.serviceWorker.controller;$d=await navigator.serviceWorker.register("./sw.js",{scope:"./"}),$d.addEventListener("updatefound",()=>{let t=$d.installing;t?.addEventListener("statechange",()=>{t.state==="installed"&&i&&(sm=!0,Pe?Be("Update ready. Tap to reload.","update",9e3):location.reload())})}),await navigator.serviceWorker.ready,$s=!0,ti(),navigator.storage?.persist&&navigator.storage.persist().catch(()=>{}),navigator.serviceWorker.addEventListener("message",t=>{t.data?.type==="OFFLINE_READY"&&($s=!0,ti())})}catch(i){console.warn("Offline cache unavailable:",i),j("offline-label").textContent="Online preview",j("install-ready").querySelector("span").textContent="Offline files couldn\u2019t be saved. Reconnect and reload to try again."}}try{My(),ky()}catch(i){console.error(i),j("loading").hidden=!0,j("error-screen").hidden=!1,j("error-message").textContent="This little world needs WebGL. Try an up-to-date Chrome, Edge, Firefox, or Safari browser with hardware acceleration enabled. "+i.message}
