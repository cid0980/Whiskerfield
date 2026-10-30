var rp=0,vu=1,op=2;var Pd=1,dh=2,si=3,Li=0,en=1,yn=2,Ii=0,er=1,bu=2,Mu=3,Su=4,ap=5,ss=100,lp=101,cp=102,hp=103,up=104,dp=200,fp=201,pp=202,mp=203,Gl=204,Wl=205,gp=206,xp=207,yp=208,_p=209,vp=210,bp=211,Mp=212,Sp=213,wp=214,Xl=0,ql=1,Yl=2,rr=3,Zl=4,$l=5,Jl=6,Kl=7,fh=0,Ep=1,Tp=2,Pi=0,Ap=1,Rp=2,Cp=3,ph=4,Ip=5,Pp=6,Lp=7;var Ld=300,or=301,ar=302,jl=303,Ql=304,Ta=306,ls=1e3,os=1001,tc=1002,un=1003,Dp=1004;var po=1005;var zn=1006,cl=1007;var as=1008;var ci=1009,Dd=1010,Ud=1011,Zr=1012,mh=1013,cs=1014,Hn=1015,to=1016,gh=1017,xh=1018,lr=1020,Nd=35902,Fd=1021,kd=1022,Rn=1023,Od=1024,Bd=1025,nr=1026,cr=1027,yh=1028,_h=1029,zd=1030,vh=1031;var bh=1033,Go=33776,Wo=33777,Xo=33778,qo=33779,ec=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37808,cc=37809,hc=37810,uc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,xc=37817,yc=37818,_c=37819,vc=37820,bc=37821,Yo=36492,Mc=36494,Sc=36495,Hd=36283,wc=36284,Ec=36285,Tc=36286;var Zo=2300,Ac=2301,hl=2302,wu=2400,Eu=2401,Tu=2402;var Up=3200,Np=3201;var Mh=0,Fp=1,Ri="",Ge="srgb",mr="srgb-linear",Aa="linear",ce="srgb";var Ns=7680;var Au=519,kp=512,Op=513,Bp=514,Vd=515,zp=516,Hp=517,Vp=518,Gp=519,Rc=35044,Ra=35048;var Ru="300 es",oi=2e3,$o=2001,Di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=1234567,Gr=Math.PI/180,$r=180/Math.PI;function ai(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function Sh(i,t){return(i%t+t)%t}function Wp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xp(i,t,e){return i!==t?(e-i)/(t-i):0}function Wr(i,t,e){return(1-e)*i+e*t}function qp(i,t,e,n){return Wr(i,t,1-Math.exp(-e*n))}function Yp(i,t=1){return t-Math.abs(Sh(i,t*2)-t)}function Zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $p(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kp(i,t){return i+Math.random()*(t-i)}function jp(i){return i*(.5-Math.random())}function Qp(i){i!==void 0&&(Cu=i);let t=Cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tm(i){return i*Gr}function em(i){return i*$r}function nm(i){return(i&i-1)===0&&i!==0}function im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Un={DEG2RAD:Gr,RAD2DEG:$r,generateUUID:ai,clamp:Fe,euclideanModulo:Sh,mapLinear:Wp,inverseLerp:Xp,lerp:Wr,damp:qp,pingpong:Yp,smoothstep:Zp,smootherstep:$p,randInt:Jp,randFloat:Kp,randFloatSpread:jp,seededRandom:Qp,degToRad:tm,radToDeg:em,isPowerOfTwo:nm,ceilPowerOfTwo:im,floorPowerOfTwo:sm,setQuaternionFromProperEuler:rm,normalize:ae,denormalize:An},yt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],x=n[8],g=s[0],m=s[3],p=s[6],S=s[1],v=s[4],y=s[7],E=s[2],A=s[5],C=s[8];return r[0]=o*g+a*S+l*E,r[3]=o*m+a*v+l*A,r[6]=o*p+a*y+l*C,r[1]=c*g+h*S+d*E,r[4]=c*m+h*v+d*A,r[7]=c*p+h*y+d*C,r[2]=u*g+f*S+x*E,r[5]=u*m+f*v+x*A,r[8]=u*p+f*y+x*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,x=e*d+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return t[0]=d*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=u*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ul.makeScale(t,e)),this}rotate(t){return this.premultiply(ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ul=new zt;function Gd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function om(){let i=Jo("canvas");return i.style.display="block",i}var Iu={};function Hr(i){i in Iu||(Iu[i]=!0,console.warn(i))}function am(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lm(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cm(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?Aa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pu=[.64,.33,.3,.6,.15,.06],Lu=[.2126,.7152,.0722],Du=[.3127,.329],Uu=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[mr]:{primaries:Pu,whitePoint:Du,transfer:Aa,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:Lu,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:Pu,whitePoint:Du,transfer:ce,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:Lu,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});var Fs,Cc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fs===void 0&&(Fs=Jo("canvas")),Fs.width=t.width,Fs.height=t.height;let n=Fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Jo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hm=0,Ko=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dl(s[o].image)):r.push(dl(s[o]))}else r=dl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var um=0,sn=class i extends Di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=os,s=os,r=zn,o=as,a=Rn,l=ci,c=i.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=ai(),this.name="",this.source=new Ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ld)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Ld;sn.DEFAULT_ANISOTROPY=1;var be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(f+1)/2,E=(p+1)/2,A=(h+u)/4,C=(d+g)/4,R=(x+m)/4;return v>y&&v>E?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=C/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=R/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=R/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(d-g)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends Di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ko(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},jo=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pc=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var We=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],x=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=x,t[e+3]=g;return}if(d!==g||l!==u||c!==f||h!==x){let m=1-a,p=l*u+c*f+h*x+d*g,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let E=Math.sqrt(v),A=Math.atan2(E,p*S);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}let y=a*S;if(l=l*m+u*y,c=c*m+f*y,h=h*m+x*y,d=d*m+g*y,m===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],x=r[o+3];return t[e]=a*x+h*d+l*f-c*u,t[e+1]=l*x+h*u+c*d-a*f,t[e+2]=c*x+h*f+a*u-l*d,t[e+3]=h*x-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"YZX":this._x=u*h*d+c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d-u*f*x;break;case"XZY":this._x=u*h*d-c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d+u*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fl.copy(this).projectOnVector(t),this.sub(fl)}reflect(t){return this.sub(fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fl=new D,Fu=new We,ui=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),go.subVectors(this.max,Pr),ks.subVectors(t.a,Pr),Os.subVectors(t.b,Pr),Bs.subVectors(t.c,Pr),Mi.subVectors(Os,ks),Si.subVectors(Bs,Os),Ki.subVectors(ks,Bs);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Ki.z,Ki.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Ki.z,0,-Ki.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Ki.y,Ki.x,0];return!pl(e,ks,Os,Bs,go)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,ks,Os,Bs,go))?!1:(xo.crossVectors(Mi,Si),e=[xo.x,xo.y,xo.z],pl(e,ks,Os,Bs,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qn=[new D,new D,new D,new D,new D,new D,new D,new D],wn=new D,mo=new ui,ks=new D,Os=new D,Bs=new D,Mi=new D,Si=new D,Ki=new D,Pr=new D,go=new D,xo=new D,ji=new D;function pl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ji.fromArray(i,r);let a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var dm=new ui,Lr=new D,ml=new D,Ui=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):dm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(ml)),this.expandByPoint(Lr.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new D,gl=new D,yo=new D,wi=new D,xl=new D,_o=new D,yl=new D,Qo=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gl.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(gl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yo),a=wi.dot(this.direction),l=-wi.dot(yo),c=wi.lengthSq(),h=Math.abs(1-o*o),d,u,f,x;if(h>0)if(d=o*l-a,u=o*a-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gl).addScaledVector(yo,u),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){xl.subVectors(e,t),_o.subVectors(n,t),yl.crossVectors(xl,_o);let o=this.direction.dot(yl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,t);let l=a*this.direction.dot(_o.crossVectors(wi,_o));if(l<0)return null;let c=a*this.direction.dot(xl.cross(wi));if(c<0||l+c>o)return null;let h=-a*wi.dot(yl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,x,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,x,g,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,x,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),o=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,x=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+x*c,e[5]=u-g*c,e[9]=-a*l,e[2]=g-u*c,e[6]=x+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,x=c*h,g=c*d;e[0]=u+g*a,e[4]=x*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-x,e[6]=g+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,x=c*h,g=c*d;e[0]=u-g*a,e[4]=-o*d,e[8]=x+f*a,e[1]=f+x*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,x=a*h,g=a*d;e[0]=l*h,e[4]=x*c-f,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=f*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,x=a*l,g=a*c;e[0]=l*h,e[4]=g-u*d,e[8]=x*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+x,e[10]=u-g*d}else if(t.order==="XZY"){let u=o*l,f=o*c,x=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=o*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fm,t,pm)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ei.crossVectors(n,cn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ei.crossVectors(n,cn)),Ei.normalize(),vo.crossVectors(cn,Ei),s[0]=Ei.x,s[4]=vo.x,s[8]=cn.x,s[1]=Ei.y,s[5]=vo.y,s[9]=cn.y,s[2]=Ei.z,s[6]=vo.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],x=n[2],g=n[6],m=n[10],p=n[14],S=n[3],v=n[7],y=n[11],E=n[15],A=s[0],C=s[4],R=s[8],b=s[12],_=s[1],M=s[5],L=s[9],I=s[13],U=s[2],H=s[6],z=s[10],q=s[14],O=s[3],X=s[7],tt=s[11],rt=s[15];return r[0]=o*A+a*_+l*U+c*O,r[4]=o*C+a*M+l*H+c*X,r[8]=o*R+a*L+l*z+c*tt,r[12]=o*b+a*I+l*q+c*rt,r[1]=h*A+d*_+u*U+f*O,r[5]=h*C+d*M+u*H+f*X,r[9]=h*R+d*L+u*z+f*tt,r[13]=h*b+d*I+u*q+f*rt,r[2]=x*A+g*_+m*U+p*O,r[6]=x*C+g*M+m*H+p*X,r[10]=x*R+g*L+m*z+p*tt,r[14]=x*b+g*I+m*q+p*rt,r[3]=S*A+v*_+y*U+E*O,r[7]=S*C+v*M+y*H+E*X,r[11]=S*R+v*L+y*z+E*tt,r[15]=S*b+v*I+y*q+E*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],x=t[3],g=t[7],m=t[11],p=t[15];return x*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+g*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],x=t[12],g=t[13],m=t[14],p=t[15],S=d*m*c-g*u*c+g*l*f-a*m*f-d*l*p+a*u*p,v=x*u*c-h*m*c-x*l*f+o*m*f+h*l*p-o*u*p,y=h*g*c-x*d*c+x*a*f-o*g*f-h*a*p+o*d*p,E=x*d*l-h*g*l-x*a*u+o*g*u+h*a*m-o*d*m,A=e*S+n*v+s*y+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=S*C,t[1]=(g*u*r-d*m*r-g*s*f+n*m*f+d*s*p-n*u*p)*C,t[2]=(a*m*r-g*l*r+g*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*C,t[4]=v*C,t[5]=(h*m*r-x*u*r+x*s*f-e*m*f-h*s*p+e*u*p)*C,t[6]=(x*l*r-o*m*r-x*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*C,t[8]=y*C,t[9]=(x*d*r-h*g*r-x*n*f+e*g*f+h*n*p-e*d*p)*C,t[10]=(o*g*r-x*a*r+x*n*c-e*g*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*C,t[12]=E*C,t[13]=(h*g*s-x*d*s+x*n*u-e*g*u-h*n*m+e*d*m)*C,t[14]=(x*a*s-o*g*s-x*n*l+e*g*l+o*n*m-e*a*m)*C,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,x=r*d,g=o*h,m=o*d,p=a*d,S=l*c,v=l*h,y=l*d,E=n.x,A=n.y,C=n.z;return s[0]=(1-(g+p))*E,s[1]=(f+y)*E,s[2]=(x-v)*E,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(u+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(x+v)*C,s[9]=(m-S)*C,s[10]=(1-(u+g))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);let c=1/r,h=1/o,d=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=oi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,x;if(a===oi)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===$o)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=oi){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,f=(n+s)*h,x,g;if(a===oi)x=(o+r)*d,g=-2*d;else if(a===$o)x=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zs=new D,En=new le,fm=new D(0,0,0),pm=new D(1,1,1),Ei=new D,vo=new D,cn=new D,ku=new le,Ou=new We,ke=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ke.DEFAULT_ORDER="XYZ";var ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mm=0,Bu=new D,Hs=new We,ei=new le,bo=new D,Dr=new D,gm=new D,xm=new We,zu=new D(1,0,0),Hu=new D(0,1,0),Vu=new D(0,0,1),Gu={type:"added"},ym={type:"removed"},Vs={type:"childadded",child:null},_l={type:"childremoved",child:null},Ie=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new ke,n=new We,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(zu,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zu,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bo.copy(t):bo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Dr,bo,this.up):ei.lookAt(bo,Dr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(ei),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ym),_l.child=t,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,gm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,xm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new D(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new D,ni=new D,vl=new D,ii=new D,Gs=new D,Ws=new D,Wu=new D,bl=new D,Ml=new D,Sl=new D,wl=new be,El=new be,Tl=new be,Ci=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),ni.subVectors(n,e),vl.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(ni),l=Tn.dot(vl),c=ni.dot(ni),h=ni.dot(vl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,x=(o*h-a*l)*u;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return wl.setScalar(0),El.setScalar(0),Tl.setScalar(0),wl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,n),Tl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wl,r.x),o.addScaledVector(El,r.y),o.addScaledVector(Tl,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),ni.subVectors(t,e),Tn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Tn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Gs.subVectors(s,n),Ws.subVectors(r,n),bl.subVectors(t,n);let l=Gs.dot(bl),c=Ws.dot(bl);if(l<=0&&c<=0)return e.copy(n);Ml.subVectors(t,s);let h=Gs.dot(Ml),d=Ws.dot(Ml);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gs,o);Sl.subVectors(t,r);let f=Gs.dot(Sl),x=Ws.dot(Sl);if(x>=0&&f<=x)return e.copy(r);let g=f*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Ws,a);let m=h*x-f*d;if(m<=0&&d-h>=0&&f-x>=0)return Wu.subVectors(r,s),a=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(Wu,a);let p=1/(m+g+u);return o=g*p,a=u*p,e.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function Al(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Sh(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Al(o,r,t+1/3),this.g=Al(o,r,t),this.b=Al(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=Wd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return Qt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Fe(Ve.r*255,0,255))*65536+Math.round(Fe(Ve.g*255,0,255))*256+Math.round(Fe(Ve.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ge){Qt.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Mo);let n=Wr(Ti.h,Mo.h,e),s=Wr(Ti.s,Mo.s,e),r=Wr(Ti.l,Mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Ut;Ut.NAMES=Wd;var _m=0,Vn=class extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ai(),this.name="",this.blending=er,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==Wl&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Cn=class extends Vn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new D,So=new yt,nn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rc&&(t.usage=this.usage),t}};var ea=class extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var na=class extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},vm=0,xn=new le,Rl=new Ie,Xs=new D,hn=new ui,Ur=new ui,Ue=new D,ye=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gd(t)?na:ea)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(hn.min,Ur.min),hn.expandByPoint(Ue),Ue.addVectors(hn.max,Ur.max),hn.expandByPoint(Ue)):(hn.expandByPoint(Ur.min),hn.expandByPoint(Ur.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(t,c),Ue.add(Xs)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new D,l[R]=new D;let c=new D,h=new D,d=new D,u=new yt,f=new yt,x=new yt,g=new D,m=new D;function p(R,b,_){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,R),f.fromBufferAttribute(r,b),x.fromBufferAttribute(r,_),h.sub(c),d.sub(c),f.sub(u),x.sub(u);let M=1/(f.x*x.y-x.x*f.y);isFinite(M)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(M),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(M),a[R].add(g),a[b].add(g),a[_].add(g),l[R].add(m),l[b].add(m),l[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,b=S.length;R<b;++R){let _=S[R],M=_.start,L=_.count;for(let I=M,U=M+L;I<U;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new D,y=new D,E=new D,A=new D;function C(R){E.fromBufferAttribute(s,R),A.copy(E);let b=a[R];v.copy(b),v.sub(E.multiplyScalar(E.dot(b))).normalize(),y.crossVectors(A,b);let M=y.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,M)}for(let R=0,b=S.length;R<b;++R){let _=S[R],M=_.start,L=_.count;for(let I=M,U=M+L;I<U;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){let x=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)u[x++]=c[f++]}return new nn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xu=new le,Qi=new Qo,wo=new Ui,qu=new D,Eo=new D,To=new D,Ao=new D,Cl=new D,Ro=new D,Yu=new D,Co=new D,Rt=class extends Ie{constructor(t=new ye,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Cl.fromBufferAttribute(d,t),o?Ro.addScaledVector(Cl,h):Ro.addScaledVector(Cl.sub(e),h))}e.add(Ro)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(wo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(wo,qu)===null||Qi.origin.distanceToSquared(qu)>(t.far-t.near)**2))&&(Xu.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,E=v;y<E;y+=3){let A=a.getX(y),C=a.getX(y+1),R=a.getX(y+2);s=Io(this,p,t,n,c,h,d,A,C,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){let S=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Io(this,o,t,n,c,h,d,S,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,E=v;y<E;y+=3){let A=y,C=y+1,R=y+2;s=Io(this,p,t,n,c,h,d,A,C,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){let S=m,v=m+1,y=m+2;s=Io(this,o,t,n,c,h,d,S,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function bm(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Li,a),l===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:i}}function Io(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Eo),i.getVertexPosition(l,To),i.getVertexPosition(c,Ao);let h=bm(i,t,e,n,Eo,To,Ao,Yu);if(h){let d=new D;Ci.getBarycoord(Yu,Eo,To,Ao,d),s&&(h.uv=Ci.getInterpolatedAttribute(s,a,l,c,d,new yt)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,a,l,c,d,new yt)),o&&(h.normal=Ci.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};Ci.getNormal(Eo,To,Ao,u.normal),h.face=u,h.barycoord=d}return h}var Je=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(d,2));function x(g,m,p,S,v,y,E,A,C,R,b){let _=y/C,M=E/R,L=y/2,I=E/2,U=A/2,H=C+1,z=R+1,q=0,O=0,X=new D;for(let tt=0;tt<z;tt++){let rt=tt*M-I;for(let wt=0;wt<H;wt++){let Et=wt*_-L;X[g]=Et*S,X[m]=rt*v,X[p]=U,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[p]=A>0?1:-1,h.push(X.x,X.y,X.z),d.push(wt/C),d.push(1-tt/R),q+=1}}for(let tt=0;tt<R;tt++)for(let rt=0;rt<C;rt++){let wt=u+rt+H*tt,Et=u+rt+H*(tt+1),Y=u+(rt+1)+H*(tt+1),et=u+(rt+1)+H*tt;l.push(wt,Et,et),l.push(Et,Y,et),O+=6}a.addGroup(f,O,b),f+=O,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=hr(i[e]);for(let s in n)t[s]=n[s]}return t}function Mm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Sm={clone:hr,merge:Ze},wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends Vn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=Mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ia=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ai=new D,Zu=new yt,$u=new yt,$e=class extends ia{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,Zu,$u),e.subVectors($u,Zu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qs=-90,Ys=1,Lc=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(qs,Ys,t,e);s.layers=this.layers,this.add(s);let r=new $e(qs,Ys,t,e);r.layers=this.layers,this.add(r);let o=new $e(qs,Ys,t,e);o.layers=this.layers,this.add(o);let a=new $e(qs,Ys,t,e);a.layers=this.layers,this.add(a);let l=new $e(qs,Ys,t,e);l.layers=this.layers,this.add(l);let c=new $e(qs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},sa=class extends sn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dc=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new sa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Je(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Ii});r.uniforms.tEquirect.value=e;let o=new Rt(s,r),a=e.minFilter;return e.minFilter===as&&(e.minFilter=zn),new Lc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Il=new D,Tm=new D,Am=new zt,ri=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Il.subVectors(n,e).cross(Tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Il),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Am.getNormalMatrix(t),s=this.coplanarPoint(Il).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new Ui,Po=new D,Jr=class{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],x=s[9],g=s[10],m=s[11],p=s[12],S=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,u-c,m-f,y-p).normalize(),n[1].setComponents(l+r,u+c,m+f,y+p).normalize(),n[2].setComponents(l+o,u+h,m+x,y+S).normalize(),n[3].setComponents(l-o,u-h,m-x,y-S).normalize(),n[4].setComponents(l-a,u-d,m-g,y-v).normalize(),e===oi)n[5].setComponents(l+a,u+d,m+g,y+v).normalize();else if(e===$o)n[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],g=d[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let g=d[f];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wn=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],x=[],g=[],m=[];for(let p=0;p<h;p++){let S=p*u-o;for(let v=0;v<c;v++){let y=v*d-r;x.push(y,-S,0),g.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let v=S+c*p,y=S+c*(p+1),E=S+1+c*(p+1),A=S+1+c*p;f.push(v,y,A),f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
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
#endif`,Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
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
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
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
#endif`,Om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
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
#endif`,Gm=`#ifdef USE_BUMPMAP
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jm=`#define PI 3.141592653589793
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
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tg=`vec3 transformedNormal = objectNormal;
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
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
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
}`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vg=`uniform bool receiveShadow;
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
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
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
#endif`,Ag=`struct PhysicalMaterial {
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
}`,Rg=`
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
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Og=`#if defined( USE_POINTS_UV )
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
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
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
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,k0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,Z0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,J0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,j0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,tx=`#define TOON
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
}`,ex=`#define TOON
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
}`,nx=`uniform float size;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 color;
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
}`,ox=`uniform float rotation;
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
}`,ax=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Cm,alphahash_pars_fragment:Im,alphamap_fragment:Pm,alphamap_pars_fragment:Lm,alphatest_fragment:Dm,alphatest_pars_fragment:Um,aomap_fragment:Nm,aomap_pars_fragment:Fm,batching_pars_vertex:km,batching_vertex:Om,begin_vertex:Bm,beginnormal_vertex:zm,bsdfs:Hm,iridescence_fragment:Vm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Ym,color_fragment:Zm,color_pars_fragment:$m,color_pars_vertex:Jm,color_vertex:Km,common:jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:tg,displacementmap_pars_vertex:eg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:hg,envmap_physical_pars_fragment:bg,envmap_vertex:ug,fog_vertex:dg,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:xg,lights_lambert_fragment:yg,lights_lambert_pars_fragment:_g,lights_pars_begin:vg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Sg,lights_phong_fragment:wg,lights_phong_pars_fragment:Eg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Ig,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Lg,logdepthbuf_pars_vertex:Dg,logdepthbuf_vertex:Ug,map_fragment:Ng,map_pars_fragment:Fg,map_particle_fragment:kg,map_particle_pars_fragment:Og,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:zg,morphinstance_vertex:Hg,morphcolor_vertex:Vg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Wg,morphtarget_vertex:Xg,normal_fragment_begin:qg,normal_fragment_maps:Yg,normal_pars_fragment:Zg,normal_pars_vertex:$g,normal_vertex:Jg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:Qg,clearcoat_pars_fragment:t0,iridescence_pars_fragment:e0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:o0,dithering_pars_fragment:a0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:d0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:x0,specularmap_fragment:y0,specularmap_pars_fragment:_0,tonemapping_fragment:v0,tonemapping_pars_fragment:b0,transmission_fragment:M0,transmission_pars_fragment:S0,uv_pars_fragment:w0,uv_pars_vertex:E0,uv_vertex:T0,worldpos_vertex:A0,background_vert:R0,background_frag:C0,backgroundCube_vert:I0,backgroundCube_frag:P0,cube_vert:L0,cube_frag:D0,depth_vert:U0,depth_frag:N0,distanceRGBA_vert:F0,distanceRGBA_frag:k0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:H0,meshbasic_vert:V0,meshbasic_frag:G0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:Z0,meshnormal_frag:$0,meshphong_vert:J0,meshphong_frag:K0,meshphysical_vert:j0,meshphysical_frag:Q0,meshtoon_vert:tx,meshtoon_frag:ex,points_vert:nx,points_frag:ix,shadow_vert:sx,shadow_frag:rx,sprite_vert:ox,sprite_frag:ax},at={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Bn={basic:{uniforms:Ze([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ze([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ze([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ze([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ze([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ze([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ze([at.points,at.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ze([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ze([at.common,at.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ze([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ze([at.sprite,at.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ze([at.common,at.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ze([at.lights,at.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Bn.physical={uniforms:Ze([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Lo={r:0,b:0,g:0},es=new ke,lx=new le;function cx(i,t,e,n,s,r,o){let a=new Ut(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function x(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function g(S){let v=!1,y=x(S);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){let y=x(v);y&&(y.isCubeTexture||y.mapping===Ta)?(h===void 0&&(h=new Rt(new Je(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:hr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),es.copy(v.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lx.makeRotationFromEuler(es)),h.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ce,(d!==y||u!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Rt(new Wn(2,2),new Gn({name:"BackgroundMaterial",uniforms:hr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(Lo,Xd(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m}}function hx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(_,M,L,I,U){let H=!1,z=d(I,L,M);r!==z&&(r=z,c(r.object)),H=f(_,I,L,U),H&&x(_,I,L,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(_,M,L,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function d(_,M,L){let I=L.wireframe===!0,U=n[_.id];U===void 0&&(U={},n[_.id]=U);let H=U[M.id];H===void 0&&(H={},U[M.id]=H);let z=H[I];return z===void 0&&(z=u(l()),H[I]=z),z}function u(_){let M=[],L=[],I=[];for(let U=0;U<e;U++)M[U]=0,L[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:L,attributeDivisors:I,object:_,attributes:{},index:null}}function f(_,M,L,I){let U=r.attributes,H=M.attributes,z=0,q=L.getAttributes();for(let O in q)if(q[O].location>=0){let tt=U[O],rt=H[O];if(rt===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),tt===void 0||tt.attribute!==rt||rt&&tt.data!==rt.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function x(_,M,L,I){let U={},H=M.attributes,z=0,q=L.getAttributes();for(let O in q)if(q[O].location>=0){let tt=H[O];tt===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(tt=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(tt=_.instanceColor));let rt={};rt.attribute=tt,tt&&tt.data&&(rt.data=tt.data),U[O]=rt,z++}r.attributes=U,r.attributesNum=z,r.index=I}function g(){let _=r.newAttributes;for(let M=0,L=_.length;M<L;M++)_[M]=0}function m(_){p(_,0)}function p(_,M){let L=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;L[_]=1,I[_]===0&&(i.enableVertexAttribArray(_),I[_]=1),U[_]!==M&&(i.vertexAttribDivisor(_,M),U[_]=M)}function S(){let _=r.newAttributes,M=r.enabledAttributes;for(let L=0,I=M.length;L<I;L++)M[L]!==_[L]&&(i.disableVertexAttribArray(L),M[L]=0)}function v(_,M,L,I,U,H,z){z===!0?i.vertexAttribIPointer(_,M,L,U,H):i.vertexAttribPointer(_,M,L,I,U,H)}function y(_,M,L,I){g();let U=I.attributes,H=L.getAttributes(),z=M.defaultAttributeValues;for(let q in H){let O=H[q];if(O.location>=0){let X=U[q];if(X===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(X=_.instanceColor)),X!==void 0){let tt=X.normalized,rt=X.itemSize,wt=t.get(X);if(wt===void 0)continue;let Et=wt.buffer,Y=wt.type,et=wt.bytesPerElement,ct=Y===i.INT||Y===i.UNSIGNED_INT||X.gpuType===mh;if(X.isInterleavedBufferAttribute){let ot=X.data,Ct=ot.stride,Tt=X.offset;if(ot.isInstancedInterleavedBuffer){for(let Lt=0;Lt<O.locationSize;Lt++)p(O.location+Lt,ot.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Lt=0;Lt<O.locationSize;Lt++)m(O.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Lt=0;Lt<O.locationSize;Lt++)v(O.location+Lt,rt/O.locationSize,Y,tt,Ct*et,(Tt+rt/O.locationSize*Lt)*et,ct)}else{if(X.isInstancedBufferAttribute){for(let ot=0;ot<O.locationSize;ot++)p(O.location+ot,X.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ot=0;ot<O.locationSize;ot++)m(O.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let ot=0;ot<O.locationSize;ot++)v(O.location+ot,rt/O.locationSize,Y,tt,rt*et,rt/O.locationSize*ot*et,ct)}}else if(z!==void 0){let tt=z[q];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(O.location,tt);break;case 3:i.vertexAttrib3fv(O.location,tt);break;case 4:i.vertexAttrib4fv(O.location,tt);break;default:i.vertexAttrib1fv(O.location,tt)}}}}S()}function E(){R();for(let _ in n){let M=n[_];for(let L in M){let I=M[L];for(let U in I)h(I[U].object),delete I[U];delete M[L]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;let M=n[_.id];for(let L in M){let I=M[L];for(let U in I)h(I[U].object),delete I[U];delete M[L]}delete n[_.id]}function C(_){for(let M in n){let L=n[M];if(L[_.id]===void 0)continue;let I=L[_.id];for(let U in I)h(I[U].object),delete I[U];delete L[_.id]}}function R(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function ux(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let x=0;x<d;x++)f+=h[x];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)o(c[x],h[x],u[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let x=0;for(let g=0;g<d;g++)x+=h[g]*u[g];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let R=C===to&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ci&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hn&&!R)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:E,maxSamples:A}}function fx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ri,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,v=S*4,y=p.clippingState||null;l.value=y,y=h(x,u,v,f);for(let E=0;E!==v;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,x){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let p=f+g*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==g;++v,y+=4)o.copy(d[v]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function px(i){let t=new WeakMap;function e(o,a){return a===jl?o.mapping=or:a===Ql&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===jl||a===Ql)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Dc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ra=class extends ia{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},tr=4,Ju=[.125,.215,.35,.446,.526,.582],rs=20,Pl=new ra,Ku=new Ut,Ll=null,Dl=0,Ul=0,Nl=!1,is=(1+Math.sqrt(5))/2,Zs=1/is,ju=[new D(-is,Zs,0),new D(is,Zs,0),new D(-Zs,0,is),new D(Zs,0,is),new D(0,is,-Zs),new D(0,is,Zs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],oa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ll=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ll,Dl,Ul),this._renderer.xr.enabled=Nl,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ll=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:to,format:Rn,colorSpace:mr,depthBuffer:!1},s=Qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mx(r)),this._blurMaterial=gx(r,t,e)}return s}_compileMaterial(t){let e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,Pl)}_sceneToCubeUV(t,e,n,s){let a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ku),h.toneMapping=Pi,h.autoClear=!1;let f=new Cn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),x=new Rt(new Je,f),g=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Ku),g=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Do(s,S*v,p>2?v:0,v,v),h.setRenderTarget(s),g&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===or||t.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Do(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Pl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ju[(s-r-1)%ju.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Rt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*rs-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);let p=[],S=0;for(let C=0;C<rs;++C){let R=C/g,b=Math.exp(-R*R/2);p.push(b),C===0?S+=b:C<m&&(S+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=x,u.mipInt.value=v-n;let y=this._sizeLods[s],E=3*y*(s>v-tr?s-v+tr:0),A=4*(this._cubeSize-y);Do(e,E,A,3*y,2*y),l.setRenderTarget(e),l.render(d,Pl)}};function mx(i){let t=[],e=[],n=[],s=i,r=i-tr+1+Ju.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-tr?l=Ju[o-i+tr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,g=3,m=2,p=1,S=new Float32Array(g*x*f),v=new Float32Array(m*x*f),y=new Float32Array(p*x*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,R=A>2?0:-1,b=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];S.set(b,g*x*A),v.set(u,m*x*A);let _=[A,A,A,A,A,A];y.set(_,p*x*A)}let E=new ye;E.setAttribute("position",new nn(S,g)),E.setAttribute("uv",new nn(v,m)),E.setAttribute("faceIndex",new nn(y,p)),t.push(E),s>tr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qu(i,t,e){let n=new hi(i,t,e);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gx(i,t,e){let n=new Float32Array(rs),s=new D(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function td(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function ed(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function xx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===jl||l===Ql,h=l===or||l===ar;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new oa(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new oa(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function yx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _x(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);for(let x in u.morphAttributes){let g=u.morphAttributes[x];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let x in u)t.update(u[x],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let x in f){let g=f[x];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,x=d.attributes.position,g=0;if(f!==null){let S=f.array;g=f.version;for(let v=0,y=S.length;v<y;v+=3){let E=S[v+0],A=S[v+1],C=S[v+2];u.push(E,A,A,C,C,E)}}else if(x!==void 0){let S=x.array;g=x.version;for(let v=0,y=S.length/3-1;v<y;v+=3){let E=v+0,A=v+1,C=v+2;u.push(E,A,A,C,C,E)}}else return;let m=new(Gd(u)?na:ea)(u,1);m.version=g;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function vx(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,u*o,x),e.update(f,n,x))}function h(u,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];e.update(m,n,1)}function d(u,f,x,g){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,g,0,x);let p=0;for(let S=0;S<x;S++)p+=f[S]*g[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function bx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mx(i,t,e){let n=new WeakMap,s=new be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;f===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*E*4*d),C=new jo(A,y,E,d);C.type=Hn,C.needsUpdate=!0;let R=v*4;for(let _=0;_<d;_++){let M=m[_],L=p[_],I=S[_],U=y*E*4*_;for(let H=0;H<M.count;H++){let z=H*R;f===!0&&(s.fromBufferAttribute(M,H),A[U+z+0]=s.x,A[U+z+1]=s.y,A[U+z+2]=s.z,A[U+z+3]=0),x===!0&&(s.fromBufferAttribute(L,H),A[U+z+4]=s.x,A[U+z+5]=s.y,A[U+z+6]=s.z,A[U+z+7]=0),g===!0&&(s.fromBufferAttribute(I,H),A[U+z+8]=s.x,A[U+z+9]=s.y,A[U+z+10]=s.z,A[U+z+11]=I.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new yt(y,E)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var aa=class extends sn{constructor(t,e,n,s,r,o,a,l,c,h=nr){if(h!==nr&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===nr&&(n=cs),n===void 0&&h===cr&&(n=lr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yd=new sn,nd=new aa(1,1),Zd=new jo,$d=new Pc,Jd=new sa,id=[],sd=[],rd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);function gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=id[s];if(r===void 0&&(r=new Float32Array(s),id[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ca(i,t){let e=sd[t];e===void 0&&(e=new Int32Array(t),sd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function Ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Rx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),Le(e,n)}}function Cx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;od.set(n),i.uniformMatrix3fv(this.addr,!1,od),Le(e,n)}}function Ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;rd.set(n),i.uniformMatrix4fv(this.addr,!1,rd),Le(e,n)}}function Px(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function Nx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function Bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nd.compareFunction=Vd,r=nd):r=Yd,e.setTexture2D(t||r,s)}function zx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$d,s)}function Hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jd,s)}function Vx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zd,s)}function Gx(i){switch(i){case 5126:return wx;case 35664:return Ex;case 35665:return Tx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Ix;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Fx;case 36295:return kx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Vx}}function Wx(i,t){i.uniform1fv(this.addr,t)}function Xx(i,t){let e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function qx(i,t){let e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function Yx(i,t){let e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function Zx(i,t){let e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $x(i,t){let e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jx(i,t){let e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kx(i,t){i.uniform1iv(this.addr,t)}function jx(i,t){i.uniform2iv(this.addr,t)}function Qx(i,t){i.uniform3iv(this.addr,t)}function ty(i,t){i.uniform4iv(this.addr,t)}function ey(i,t){i.uniform1uiv(this.addr,t)}function ny(i,t){i.uniform2uiv(this.addr,t)}function iy(i,t){i.uniform3uiv(this.addr,t)}function sy(i,t){i.uniform4uiv(this.addr,t)}function ry(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yd,r[o])}function oy(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$d,r[o])}function ay(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Jd,r[o])}function ly(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zd,r[o])}function cy(i){switch(i){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return Zx;case 35675:return $x;case 35676:return Jx;case 5124:case 35670:return Kx;case 35667:case 35671:return jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ty;case 5125:return ey;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return ly}}var Uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gx(e.type)}},Nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cy(e.type)}},Fc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Fl=/(\w+)(\])?(\[|\.)?/g;function ld(i,t){i.seq.push(t),i.map[t.id]=t}function hy(i,t,e){let n=i.name,s=n.length;for(Fl.lastIndex=0;;){let r=Fl.exec(n),o=Fl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ld(e,c===void 0?new Uc(a,i,t):new Nc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Fc(a),ld(e,d)),e=d}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);hy(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function cd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var uy=37297,dy=0;function fy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var hd=new zt;function py(i){Qt._getMatrix(hd,Qt.workingColorSpace,i);let t=`mat3( ${hd.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Aa:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ud(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fy(i.getShaderSource(t),o)}else return s}function my(i,t){let e=py(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gy(i,t){let e;switch(t){case Ap:e="Linear";break;case Rp:e="Reinhard";break;case Cp:e="Cineon";break;case ph:e="ACESFilmic";break;case Pp:e="AgX";break;case Lp:e="Neutral";break;case Ip:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Uo=new D;function xy(){Qt.getLuminanceCoefficients(Uo);let i=Uo.x.toFixed(4),t=Uo.y.toFixed(4),e=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function _y(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vr(i){return i!==""}function dd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var by=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(by,Sy)}var My=new Map;function Sy(i,t){let e=Vt[t];if(e===void 0){let n=My.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}var wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(i){return i.replace(wy,Ey)}function Ey(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function md(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ty(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function Ay(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ry(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ar&&(t="ENVMAP_MODE_REFRACTION"),t}function Cy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ep:t="ENVMAP_BLENDING_MIX";break;case Tp:t="ENVMAP_BLENDING_ADD";break}return t}function Iy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Py(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ty(e),c=Ay(e),h=Ry(e),d=Cy(e),u=Iy(e),f=yy(e),x=_y(r),g=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Pi?gy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,my("linearToOutputTexel",e.outputColorSpace),xy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=kc(o),o=dd(o,e),o=fd(o,e),a=kc(a),a=dd(a,e),a=fd(a,e),o=pd(o),a=pd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=S+m+o,y=S+p+a,E=cd(s,s.VERTEX_SHADER,v),A=cd(s,s.FRAGMENT_SHADER,y);s.attachShader(g,E),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(M){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g).trim(),I=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(A).trim(),H=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,A);else{let q=ud(s,E,"vertex"),O=ud(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+L+`
`+q+`
`+O)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||U==="")&&(z=!1);z&&(M.diagnostics={runnable:H,programLog:L,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(E),s.deleteShader(A),R=new sr(s,g),b=vy(s,g)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(g,uy)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}var Ly=0,Oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bc(t),e.set(t,n)),n}},Bc=class{constructor(t){this.id=Ly++,this.code=t,this.usedTimes=0}};function Dy(i,t,e,n,s,r,o){let a=new ta,l=new Oc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,_,M,L,I){let U=L.fog,H=I.geometry,z=b.isMeshStandardMaterial?L.environment:null,q=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),O=q&&q.mapping===Ta?q.image.height:null,X=x[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rt=tt!==void 0?tt.length:0,wt=0;H.morphAttributes.position!==void 0&&(wt=1),H.morphAttributes.normal!==void 0&&(wt=2),H.morphAttributes.color!==void 0&&(wt=3);let Et,Y,et,ct;if(X){let oe=Bn[X];Et=oe.vertexShader,Y=oe.fragmentShader}else Et=b.vertexShader,Y=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),ct=l.getFragmentShaderID(b);let ot=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Tt=I.isInstancedMesh===!0,Lt=I.isBatchedMesh===!0,xe=!!b.map,Kt=!!b.matcap,we=!!q,B=!!b.aoMap,mn=!!b.lightMap,Yt=!!b.bumpMap,Zt=!!b.normalMap,It=!!b.displacementMap,de=!!b.emissiveMap,At=!!b.metalnessMap,P=!!b.roughnessMap,w=b.anisotropy>0,V=b.clearcoat>0,j=b.dispersion>0,nt=b.iridescence>0,J=b.sheen>0,Mt=b.transmission>0,ut=w&&!!b.anisotropyMap,mt=V&&!!b.clearcoatMap,jt=V&&!!b.clearcoatNormalMap,it=V&&!!b.clearcoatRoughnessMap,gt=nt&&!!b.iridescenceMap,Pt=nt&&!!b.iridescenceThicknessMap,Dt=J&&!!b.sheenColorMap,xt=J&&!!b.sheenRoughnessMap,$t=!!b.specularMap,Ht=!!b.specularColorMap,he=!!b.specularIntensityMap,N=Mt&&!!b.transmissionMap,ht=Mt&&!!b.thicknessMap,Z=!!b.gradientMap,Q=!!b.alphaMap,pt=b.alphaTest>0,dt=!!b.alphaHash,Ot=!!b.extensions,ve=Pi;b.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ve=i.toneMapping);let ze={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:Et,fragmentShader:Y,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:ct,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&I._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&I.instanceColor!==null,instancingMorph:Tt&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:mr,alphaToCoverage:!!b.alphaToCoverage,map:xe,matcap:Kt,envMap:we,envMapMode:we&&q.mapping,envMapCubeUVHeight:O,aoMap:B,lightMap:mn,bumpMap:Yt,normalMap:Zt,displacementMap:u&&It,emissiveMap:de,normalMapObjectSpace:Zt&&b.normalMapType===Fp,normalMapTangentSpace:Zt&&b.normalMapType===Mh,metalnessMap:At,roughnessMap:P,anisotropy:w,anisotropyMap:ut,clearcoat:V,clearcoatMap:mt,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:j,iridescence:nt,iridescenceMap:gt,iridescenceThicknessMap:Pt,sheen:J,sheenColorMap:Dt,sheenRoughnessMap:xt,specularMap:$t,specularColorMap:Ht,specularIntensityMap:he,transmission:Mt,transmissionMap:N,thicknessMap:ht,gradientMap:Z,opaque:b.transparent===!1&&b.blending===er&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:pt,alphaHash:dt,combine:b.combine,mapUv:xe&&g(b.map.channel),aoMapUv:B&&g(b.aoMap.channel),lightMapUv:mn&&g(b.lightMap.channel),bumpMapUv:Yt&&g(b.bumpMap.channel),normalMapUv:Zt&&g(b.normalMap.channel),displacementMapUv:It&&g(b.displacementMap.channel),emissiveMapUv:de&&g(b.emissiveMap.channel),metalnessMapUv:At&&g(b.metalnessMap.channel),roughnessMapUv:P&&g(b.roughnessMap.channel),anisotropyMapUv:ut&&g(b.anisotropyMap.channel),clearcoatMapUv:mt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:jt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(b.sheenRoughnessMap.channel),specularMapUv:$t&&g(b.specularMap.channel),specularColorMapUv:Ht&&g(b.specularColorMap.channel),specularIntensityMapUv:he&&g(b.specularIntensityMap.channel),transmissionMapUv:N&&g(b.transmissionMap.channel),thicknessMapUv:ht&&g(b.thicknessMap.channel),alphaMapUv:Q&&g(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Zt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(xe||Q),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:wt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:xe&&b.map.isVideoTexture===!0&&Qt.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let M in b.defines)_.push(M),_.push(b.defines[M]);return b.isRawShaderMaterial===!1&&(S(_,b),v(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function S(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function v(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let _=x[b.type],M;if(_){let L=Bn[_];M=Sm.clone(L.uniforms)}else M=b.uniforms;return M}function E(b,_){let M;for(let L=0,I=h.length;L<I;L++){let U=h[L];if(U.cacheKey===_){M=U,++M.usedTimes;break}}return M===void 0&&(M=new Py(i,_,b,r),h.push(M)),M}function A(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:R}}function Uy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ny(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,x,g,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=g,p.group=m),t++,p}function a(d,u,f,x,g,m){let p=o(d,u,f,x,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,x,g,m){let p=o(d,u,f,x,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||Ny),n.length>1&&n.sort(u||gd),s.length>1&&s.sort(u||gd)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Fy(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new xd,i.set(n,[o])):s>=r.length?(o=new xd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ky(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ut};break;case"SpotLight":e={position:new D,direction:new D,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var By=0;function zy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hy(i){let t=new ky,e=Oy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new le,o=new le;function a(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,S=0,v=0,y=0,E=0,A=0,C=0;c.sort(zy);for(let b=0,_=c.length;b<_;b++){let M=c[b],L=M.color,I=M.intensity,U=M.distance,H=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=L.r*I,d+=L.g*I,u+=L.b*I;else if(M.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(M.sh.coefficients[z],I);C++}else if(M.isDirectionalLight){let z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let q=M.shadow,O=e.get(M);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=M.shadow.matrix,S++}n.directional[f]=z,f++}else if(M.isSpotLight){let z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(L).multiplyScalar(I),z.distance=U,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,n.spot[g]=z;let q=M.shadow;if(M.map&&(n.spotLightMap[E]=M.map,E++,q.updateMatrices(M),M.castShadow&&A++),n.spotLightMatrix[g]=q.matrix,M.castShadow){let O=e.get(M);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,n.spotShadow[g]=O,n.spotShadowMap[g]=H,y++}g++}else if(M.isRectAreaLight){let z=t.get(M);z.color.copy(L).multiplyScalar(I),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=z,m++}else if(M.isPointLight){let z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){let q=M.shadow,O=e.get(M);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,O.shadowCameraNear=q.camera.near,O.shadowCameraFar=q.camera.far,n.pointShadow[x]=O,n.pointShadowMap[x]=H,n.pointShadowMatrix[x]=M.shadow.matrix,v++}n.point[x]=z,x++}else if(M.isHemisphereLight){let z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(I),z.groundColor.copy(M.groundColor).multiplyScalar(I),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let R=n.hash;(R.directionalLength!==f||R.pointLength!==x||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==E||R.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,R.directionalLength=f,R.pointLength=x,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=E,R.numLightProbes=C,n.version=By++)}function l(c,h){let d=0,u=0,f=0,x=0,g=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let v=c[p];if(v.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function yd(i){let t=new Hy(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Vy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yd(i),t.set(s,[a])):r>=o.length?(a=new yd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var zc=class extends Vn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hc=class extends Vn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
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
}`;function Xy(i,t,e){let n=new Jr,s=new yt,r=new yt,o=new be,a=new zc({depthPacking:Np}),l=new Hc,c={},h=e.maxTextureSize,d={[Li]:en,[en]:Li,[yn]:yn},u=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Gy,fragmentShader:Wy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new ye;x.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Rt(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let p=this.type;this.render=function(A,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ii),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=p!==si&&this.type===si,U=p===si&&this.type!==si;for(let H=0,z=A.length;H<z;H++){let q=A[H],O=q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let X=O.getFrameExtents();if(s.multiply(X),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,O.mapSize.y=r.y)),O.map===null||I===!0||U===!0){let rt=this.type!==si?{minFilter:un,magFilter:un}:{};O.map!==null&&O.map.dispose(),O.map=new hi(s.x,s.y,rt),O.map.texture.name=q.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let tt=O.getViewportCount();for(let rt=0;rt<tt;rt++){let wt=O.getViewport(rt);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),L.viewport(o),O.updateMatrices(q,rt),n=O.getFrustum(),y(C,R,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===si&&S(O,R),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,M)};function S(A,C){let R=t.update(g);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hi(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,R,u,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,R,f,g,null)}function v(A,C,R,b){let _=null,M=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)_=M;else if(_=R.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let L=_.uuid,I=C.uuid,U=c[L];U===void 0&&(U={},c[L]=U);let H=U[I];H===void 0&&(H=_.clone(),U[I]=H,C.addEventListener("dispose",E)),_=H}if(_.visible=C.visible,_.wireframe=C.wireframe,b===si?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:d[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let L=i.properties.get(_);L.light=R}return _}function y(A,C,R,b,_){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===si)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let I=t.update(A),U=A.material;if(Array.isArray(U)){let H=I.groups;for(let z=0,q=H.length;z<q;z++){let O=H[z],X=U[O.materialIndex];if(X&&X.visible){let tt=v(A,X,b,_);A.onBeforeShadow(i,A,C,R,I,tt,O),i.renderBufferDirect(R,null,I,tt,A,O),A.onAfterShadow(i,A,C,R,I,tt,O)}}}else if(U.visible){let H=v(A,U,b,_);A.onBeforeShadow(i,A,C,R,I,H,null),i.renderBufferDirect(R,null,I,H,A,null),A.onAfterShadow(i,A,C,R,I,H,null)}}let L=A.children;for(let I=0,U=L.length;I<U;I++)y(L[I],C,R,b,_)}function E(A){A.target.removeEventListener("dispose",E);for(let R in c){let b=c[R],_=A.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var qy={[Xl]:ql,[Yl]:Jl,[Zl]:Kl,[rr]:$l,[ql]:Xl,[Jl]:Yl,[Kl]:Zl,[$l]:rr};function Yy(i,t){function e(){let N=!1,ht=new be,Z=null,Q=new be(0,0,0,0);return{setMask:function(pt){Z!==pt&&!N&&(i.colorMask(pt,pt,pt,pt),Z=pt)},setLocked:function(pt){N=pt},setClear:function(pt,dt,Ot,ve,ze){ze===!0&&(pt*=ve,dt*=ve,Ot*=ve),ht.set(pt,dt,Ot,ve),Q.equals(ht)===!1&&(i.clearColor(pt,dt,Ot,ve),Q.copy(ht))},reset:function(){N=!1,Z=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,ht=!1,Z=null,Q=null,pt=null;return{setReversed:function(dt){if(ht!==dt){let Ot=t.get("EXT_clip_control");ht?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let ve=pt;pt=null,this.setClear(ve)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?ot(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(dt){Z!==dt&&!N&&(i.depthMask(dt),Z=dt)},setFunc:function(dt){if(ht&&(dt=qy[dt]),Q!==dt){switch(dt){case Xl:i.depthFunc(i.NEVER);break;case ql:i.depthFunc(i.ALWAYS);break;case Yl:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Zl:i.depthFunc(i.EQUAL);break;case $l:i.depthFunc(i.GEQUAL);break;case Jl:i.depthFunc(i.GREATER);break;case Kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=dt}},setLocked:function(dt){N=dt},setClear:function(dt){pt!==dt&&(ht&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){N=!1,Z=null,Q=null,pt=null,ht=!1}}}function s(){let N=!1,ht=null,Z=null,Q=null,pt=null,dt=null,Ot=null,ve=null,ze=null;return{setTest:function(oe){N||(oe?ot(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(oe){ht!==oe&&!N&&(i.stencilMask(oe),ht=oe)},setFunc:function(oe,Mn,Kn){(Z!==oe||Q!==Mn||pt!==Kn)&&(i.stencilFunc(oe,Mn,Kn),Z=oe,Q=Mn,pt=Kn)},setOp:function(oe,Mn,Kn){(dt!==oe||Ot!==Mn||ve!==Kn)&&(i.stencilOp(oe,Mn,Kn),dt=oe,Ot=Mn,ve=Kn)},setLocked:function(oe){N=oe},setClear:function(oe){ze!==oe&&(i.clearStencil(oe),ze=oe)},reset:function(){N=!1,ht=null,Z=null,Q=null,pt=null,dt=null,Ot=null,ve=null,ze=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,v=null,y=null,E=null,A=null,C=new Ut(0,0,0),R=0,b=!1,_=null,M=null,L=null,I=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,q=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=q>=1):O.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=q>=2);let X=null,tt={},rt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Et=new be().fromArray(rt),Y=new be().fromArray(wt);function et(N,ht,Z,Q){let pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(N,dt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<Z;Ot++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}let ct={};ct[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(rr),Yt(!1),Zt(vu),ot(i.CULL_FACE),B(Ii);function ot(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ct(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Tt(N,ht){return d[N]!==ht?(i.bindFramebuffer(N,ht),d[N]=ht,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Lt(N,ht){let Z=f,Q=!1;if(N){Z=u.get(ht),Z===void 0&&(Z=[],u.set(ht,Z));let pt=N.textures;if(Z.length!==pt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ot=pt.length;dt<Ot;dt++)Z[dt]=i.COLOR_ATTACHMENT0+dt;Z.length=pt.length,Q=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Z)}function xe(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let Kt={[ss]:i.FUNC_ADD,[lp]:i.FUNC_SUBTRACT,[cp]:i.FUNC_REVERSE_SUBTRACT};Kt[hp]=i.MIN,Kt[up]=i.MAX;let we={[dp]:i.ZERO,[fp]:i.ONE,[pp]:i.SRC_COLOR,[Gl]:i.SRC_ALPHA,[vp]:i.SRC_ALPHA_SATURATE,[yp]:i.DST_COLOR,[gp]:i.DST_ALPHA,[mp]:i.ONE_MINUS_SRC_COLOR,[Wl]:i.ONE_MINUS_SRC_ALPHA,[_p]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[bp]:i.CONSTANT_COLOR,[Mp]:i.ONE_MINUS_CONSTANT_COLOR,[Sp]:i.CONSTANT_ALPHA,[wp]:i.ONE_MINUS_CONSTANT_ALPHA};function B(N,ht,Z,Q,pt,dt,Ot,ve,ze,oe){if(N===Ii){g===!0&&(Ct(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),N!==ap){if(N!==m||oe!==b){if((p!==ss||y!==ss)&&(i.blendEquation(i.FUNC_ADD),p=ss,y=ss),oe)switch(N){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bu:i.blendFunc(i.ONE,i.ONE);break;case Mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,v=null,E=null,A=null,C.set(0,0,0),R=0,m=N,b=oe}return}pt=pt||ht,dt=dt||Z,Ot=Ot||Q,(ht!==p||pt!==y)&&(i.blendEquationSeparate(Kt[ht],Kt[pt]),p=ht,y=pt),(Z!==S||Q!==v||dt!==E||Ot!==A)&&(i.blendFuncSeparate(we[Z],we[Q],we[dt],we[Ot]),S=Z,v=Q,E=dt,A=Ot),(ve.equals(C)===!1||ze!==R)&&(i.blendColor(ve.r,ve.g,ve.b,ze),C.copy(ve),R=ze),m=N,b=!1}function mn(N,ht){N.side===yn?Ct(i.CULL_FACE):ot(i.CULL_FACE);let Z=N.side===en;ht&&(Z=!Z),Yt(Z),N.blending===er&&N.transparent===!1?B(Ii):B(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),de(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(N){_!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),_=N)}function Zt(N){N!==rp?(ot(i.CULL_FACE),N!==M&&(N===vu?i.cullFace(i.BACK):N===op?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),M=N}function It(N){N!==L&&(z&&i.lineWidth(N),L=N)}function de(N,ht,Z){N?(ot(i.POLYGON_OFFSET_FILL),(I!==ht||U!==Z)&&(i.polygonOffset(ht,Z),I=ht,U=Z)):Ct(i.POLYGON_OFFSET_FILL)}function At(N){N?ot(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function P(N){N===void 0&&(N=i.TEXTURE0+H-1),X!==N&&(i.activeTexture(N),X=N)}function w(N,ht,Z){Z===void 0&&(X===null?Z=i.TEXTURE0+H-1:Z=X);let Q=tt[Z];Q===void 0&&(Q={type:void 0,texture:void 0},tt[Z]=Q),(Q.type!==N||Q.texture!==ht)&&(X!==Z&&(i.activeTexture(Z),X=Z),i.bindTexture(N,ht||ct[N]),Q.type=N,Q.texture=ht)}function V(){let N=tt[X];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(N){Et.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Et.copy(N))}function xt(N){Y.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function $t(N,ht){let Z=c.get(ht);Z===void 0&&(Z=new WeakMap,c.set(ht,Z));let Q=Z.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(ht,N.name),Z.set(N,Q))}function Ht(N,ht){let Q=c.get(ht).get(N);l.get(ht)!==Q&&(i.uniformBlockBinding(ht,Q,N.__bindingPointIndex),l.set(ht,Q))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},X=null,tt={},d={},u=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,v=null,y=null,E=null,A=null,C=new Ut(0,0,0),R=0,b=!1,_=null,M=null,L=null,I=null,U=null,Et.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Ct,bindFramebuffer:Tt,drawBuffers:Lt,useProgram:xe,setBlending:B,setMaterial:mn,setFlipSided:Yt,setCullFace:Zt,setLineWidth:It,setPolygonOffset:de,setScissorTest:At,activeTexture:P,bindTexture:w,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:nt,texImage2D:gt,texImage3D:Pt,updateUBOMapping:$t,uniformBlockBinding:Ht,texStorage2D:jt,texStorage3D:it,texSubImage2D:J,texSubImage3D:Mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:Dt,viewport:xt,reset:he}}function _d(i,t,e,n){let s=Zy(n);switch(e){case Fd:return i*t;case Od:return i*t;case Bd:return i*t*2;case yh:return i*t/s.components*s.byteLength;case _h:return i*t/s.components*s.byteLength;case zd:return i*t*2/s.components*s.byteLength;case vh:return i*t*2/s.components*s.byteLength;case kd:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case bh:return i*t*4/s.components*s.byteLength;case Go:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:case sc:return Math.max(i,16)*Math.max(t,8)/4;case ec:case ic:return Math.max(i,8)*Math.max(t,8)/2;case rc:case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yo:case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hd:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ec:case Tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zy(i){switch(i){case ci:case Dd:return{byteLength:1,components:1};case Zr:case Ud:case to:return{byteLength:2,components:1};case gh:case xh:return{byteLength:2,components:4};case cs:case mh:case Hn:return{byteLength:4,components:1};case Nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $y(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,w){return f?new OffscreenCanvas(P,w):Jo("canvas")}function g(P,w,V){let j=1,nt=At(P);if((nt.width>V||nt.height>V)&&(j=V/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor(j*nt.width),Mt=Math.floor(j*nt.height);d===void 0&&(d=x(J,Mt));let ut=w?x(J,Mt):d;return ut.width=J,ut.height=Mt,ut.getContext("2d").drawImage(P,0,0,J,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+Mt+")."),ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,w,V,j,nt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=w;if(w===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),w===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8)),w===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),w===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),w===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),w===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),w===i.RGBA){let Mt=nt?Aa:Qt.getTransfer(j);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=Mt===ce?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(P,w){let V;return P?w===null||w===cs||w===lr?V=i.DEPTH24_STENCIL8:w===Hn?V=i.DEPTH32F_STENCIL8:w===Zr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===cs||w===lr?V=i.DEPTH_COMPONENT24:w===Hn?V=i.DEPTH_COMPONENT32F:w===Zr&&(V=i.DEPTH_COMPONENT16),V}function E(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==zn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function A(P){let w=P.target;w.removeEventListener("dispose",A),R(w),w.isVideoTexture&&h.delete(w)}function C(P){let w=P.target;w.removeEventListener("dispose",C),_(w)}function R(P){let w=n.get(P);if(w.__webglInit===void 0)return;let V=P.source,j=u.get(V);if(j){let nt=j[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(P),Object.keys(j).length===0&&u.delete(V)}n.remove(P)}function b(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let V=P.source,j=u.get(V);delete j[w.__cacheKey],o.memory.textures--}function _(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let nt=0;nt<w.__webglFramebuffer[j].length;nt++)i.deleteFramebuffer(w.__webglFramebuffer[j][nt]);else i.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)i.deleteFramebuffer(w.__webglFramebuffer[j]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let V=P.textures;for(let j=0,nt=V.length;j<nt;j++){let J=n.get(V[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(V[j])}n.remove(P)}let M=0;function L(){M=0}function I(){let P=M;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),M+=1,P}function U(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function H(P,w){let V=n.get(P);if(P.isVideoTexture&&It(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){let j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,P,w);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function z(P,w){let V=n.get(P);if(P.version>0&&V.__version!==P.version){Y(V,P,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function q(P,w){let V=n.get(P);if(P.version>0&&V.__version!==P.version){Y(V,P,w);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function O(P,w){let V=n.get(P);if(P.version>0&&V.__version!==P.version){et(V,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}let X={[ls]:i.REPEAT,[os]:i.CLAMP_TO_EDGE,[tc]:i.MIRRORED_REPEAT},tt={[un]:i.NEAREST,[Dp]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[cl]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},rt={[kp]:i.NEVER,[Gp]:i.ALWAYS,[Op]:i.LESS,[Vd]:i.LEQUAL,[Bp]:i.EQUAL,[Vp]:i.GEQUAL,[zp]:i.GREATER,[Hp]:i.NOTEQUAL};function wt(P,w){if(w.type===Hn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===zn||w.magFilter===cl||w.magFilter===po||w.magFilter===as||w.minFilter===zn||w.minFilter===cl||w.minFilter===po||w.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,X[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,X[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,X[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,tt[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,tt[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,rt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===un||w.minFilter!==po&&w.minFilter!==as||w.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Et(P,w){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",A));let j=w.source,nt=u.get(j);nt===void 0&&(nt={},u.set(j,nt));let J=U(w);if(J!==P.__cacheKey){nt[J]===void 0&&(nt[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[J].usedTimes++;let Mt=nt[P.__cacheKey];Mt!==void 0&&(nt[P.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(w)),P.__cacheKey=J,P.__webglTexture=nt[J].texture}return V}function Y(P,w,V){let j=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=i.TEXTURE_3D);let nt=Et(P,w),J=w.source;e.bindTexture(j,P.__webglTexture,i.TEXTURE0+V);let Mt=n.get(J);if(J.version!==Mt.__version||nt===!0){e.activeTexture(i.TEXTURE0+V);let ut=Qt.getPrimaries(Qt.workingColorSpace),mt=w.colorSpace===Ri?null:Qt.getPrimaries(w.colorSpace),jt=w.colorSpace===Ri||ut===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=g(w.image,!1,s.maxTextureSize);it=de(w,it);let gt=r.convert(w.format,w.colorSpace),Pt=r.convert(w.type),Dt=v(w.internalFormat,gt,Pt,w.colorSpace,w.isVideoTexture);wt(j,w);let xt,$t=w.mipmaps,Ht=w.isVideoTexture!==!0,he=Mt.__version===void 0||nt===!0,N=J.dataReady,ht=E(w,it);if(w.isDepthTexture)Dt=y(w.format===cr,w.type),he&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,gt,Pt,null));else if(w.isDataTexture)if($t.length>0){Ht&&he&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,$t[0].width,$t[0].height);for(let Z=0,Q=$t.length;Z<Q;Z++)xt=$t[Z],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,xt.width,xt.height,gt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,Z,Dt,xt.width,xt.height,0,gt,Pt,xt.data);w.generateMipmaps=!1}else Ht?(he&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,it.width,it.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,gt,Pt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,gt,Pt,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Dt,$t[0].width,$t[0].height,it.depth);for(let Z=0,Q=$t.length;Z<Q;Z++)if(xt=$t[Z],w.format!==Rn)if(gt!==null)if(Ht){if(N)if(w.layerUpdates.size>0){let pt=_d(xt.width,xt.height,w.format,w.type);for(let dt of w.layerUpdates){let Ot=xt.data.subarray(dt*pt/xt.data.BYTES_PER_ELEMENT,(dt+1)*pt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,dt,xt.width,xt.height,1,gt,Ot)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,xt.width,xt.height,it.depth,gt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Dt,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,xt.width,xt.height,it.depth,gt,Pt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Dt,xt.width,xt.height,it.depth,0,gt,Pt,xt.data)}else{Ht&&he&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,$t[0].width,$t[0].height);for(let Z=0,Q=$t.length;Z<Q;Z++)xt=$t[Z],w.format!==Rn?gt!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Dt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,xt.width,xt.height,gt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,Z,Dt,xt.width,xt.height,0,gt,Pt,xt.data)}else if(w.isDataArrayTexture)if(Ht){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Dt,it.width,it.height,it.depth),N)if(w.layerUpdates.size>0){let Z=_d(it.width,it.height,w.format,w.type);for(let Q of w.layerUpdates){let pt=it.data.subarray(Q*Z/it.data.BYTES_PER_ELEMENT,(Q+1)*Z/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,gt,Pt,pt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Pt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,gt,Pt,it.data);else if(w.isData3DTexture)Ht?(he&&e.texStorage3D(i.TEXTURE_3D,ht,Dt,it.width,it.height,it.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Pt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,gt,Pt,it.data);else if(w.isFramebufferTexture){if(he)if(Ht)e.texStorage2D(i.TEXTURE_2D,ht,Dt,it.width,it.height);else{let Z=it.width,Q=it.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Dt,Z,Q,0,gt,Pt,null),Z>>=1,Q>>=1}}else if($t.length>0){if(Ht&&he){let Z=At($t[0]);e.texStorage2D(i.TEXTURE_2D,ht,Dt,Z.width,Z.height)}for(let Z=0,Q=$t.length;Z<Q;Z++)xt=$t[Z],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,gt,Pt,xt):e.texImage2D(i.TEXTURE_2D,Z,Dt,gt,Pt,xt);w.generateMipmaps=!1}else if(Ht){if(he){let Z=At(it);e.texStorage2D(i.TEXTURE_2D,ht,Dt,Z.width,Z.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Pt,it)}else e.texImage2D(i.TEXTURE_2D,0,Dt,gt,Pt,it);m(w)&&p(j),Mt.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function et(P,w,V){if(w.image.length!==6)return;let j=Et(P,w),nt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);let J=n.get(nt);if(nt.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+V);let Mt=Qt.getPrimaries(Qt.workingColorSpace),ut=w.colorSpace===Ri?null:Qt.getPrimaries(w.colorSpace),mt=w.colorSpace===Ri||Mt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let jt=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,gt=[];for(let Q=0;Q<6;Q++)!jt&&!it?gt[Q]=g(w.image[Q],!0,s.maxCubemapSize):gt[Q]=it?w.image[Q].image:w.image[Q],gt[Q]=de(w,gt[Q]);let Pt=gt[0],Dt=r.convert(w.format,w.colorSpace),xt=r.convert(w.type),$t=v(w.internalFormat,Dt,xt,w.colorSpace),Ht=w.isVideoTexture!==!0,he=J.__version===void 0||j===!0,N=nt.dataReady,ht=E(w,Pt);wt(i.TEXTURE_CUBE_MAP,w);let Z;if(jt){Ht&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,$t,Pt.width,Pt.height);for(let Q=0;Q<6;Q++){Z=gt[Q].mipmaps;for(let pt=0;pt<Z.length;pt++){let dt=Z[pt];w.format!==Rn?Dt!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,dt.width,dt.height,Dt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,$t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,dt.width,dt.height,Dt,xt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,$t,dt.width,dt.height,0,Dt,xt,dt.data)}}}else{if(Z=w.mipmaps,Ht&&he){Z.length>0&&ht++;let Q=At(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,$t,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,gt[Q].width,gt[Q].height,Dt,xt,gt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,gt[Q].width,gt[Q].height,0,Dt,xt,gt[Q].data);for(let pt=0;pt<Z.length;pt++){let Ot=Z[pt].image[Q].image;Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Ot.width,Ot.height,Dt,xt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,$t,Ot.width,Ot.height,0,Dt,xt,Ot.data)}}else{Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Dt,xt,gt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,Dt,xt,gt[Q]);for(let pt=0;pt<Z.length;pt++){let dt=Z[pt];Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Dt,xt,dt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,$t,Dt,xt,dt.image[Q])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),J.__version=nt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ct(P,w,V,j,nt,J){let Mt=r.convert(V.format,V.colorSpace),ut=r.convert(V.type),mt=v(V.internalFormat,Mt,ut,V.colorSpace),jt=n.get(w),it=n.get(V);if(it.__renderTarget=w,!jt.__hasExternalTextures){let gt=Math.max(1,w.width>>J),Pt=Math.max(1,w.height>>J);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,mt,gt,Pt,w.depth,0,Mt,ut,null):e.texImage2D(nt,J,mt,gt,Pt,0,Mt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,nt,it.__webglTexture,0,Yt(w)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,nt,it.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(P,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let j=w.depthTexture,nt=j&&j.isDepthTexture?j.type:null,J=y(w.stencilBuffer,nt),Mt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Yt(w);Zt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,J,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,J,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,P)}else{let j=w.textures;for(let nt=0;nt<j.length;nt++){let J=j[nt],Mt=r.convert(J.format,J.colorSpace),ut=r.convert(J.type),mt=v(J.internalFormat,Mt,ut,J.colorSpace),jt=Yt(w);V&&Zt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,mt,w.width,w.height):Zt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,mt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,mt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);let nt=j.__webglTexture,J=Yt(w);if(w.depthTexture.format===nr)Zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(w.depthTexture.format===cr)Zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Tt(P){let w=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let j=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){let nt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",nt)};j.addEventListener("dispose",nt),w.__depthDisposeCallback=nt}w.__boundDepthTexture=j}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ct(w.__webglFramebuffer,P)}else if(V){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=i.createRenderbuffer(),ot(w.__webglDepthbuffer[j],P,!1);else{let nt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ot(w.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(P,w,V){let j=n.get(P);w!==void 0&&ct(j.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Tt(P)}function xe(P){let w=P.texture,V=n.get(P),j=n.get(w);P.addEventListener("dispose",C);let nt=P.textures,J=P.isWebGLCubeRenderTarget===!0,Mt=nt.length>1;if(Mt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=w.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let mt=0;mt<w.mipmaps.length;mt++)V.__webglFramebuffer[ut][mt]=i.createFramebuffer()}else V.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<w.mipmaps.length;ut++)V.__webglFramebuffer[ut]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ut=0,mt=nt.length;ut<mt;ut++){let jt=n.get(nt[ut]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Zt(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){let mt=nt[ut];V.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ut]);let jt=r.convert(mt.format,mt.colorSpace),it=r.convert(mt.type),gt=v(mt.internalFormat,jt,it,mt.colorSpace,P.isXRRenderTarget===!0),Pt=Yt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,gt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,V.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),wt(i.TEXTURE_CUBE_MAP,w);for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)ct(V.__webglFramebuffer[ut][mt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else ct(V.__webglFramebuffer[ut],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ut=0,mt=nt.length;ut<mt;ut++){let jt=nt[ut],it=n.get(jt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),wt(i.TEXTURE_2D,jt),ct(V.__webglFramebuffer,P,jt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),wt(ut,w),w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)ct(V.__webglFramebuffer[mt],P,w,i.COLOR_ATTACHMENT0,ut,mt);else ct(V.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,ut,0);m(w)&&p(ut),e.unbindTexture()}P.depthBuffer&&Tt(P)}function Kt(P){let w=P.textures;for(let V=0,j=w.length;V<j;V++){let nt=w[V];if(m(nt)){let J=S(P),Mt=n.get(nt).__webglTexture;e.bindTexture(J,Mt),p(J),e.unbindTexture()}}}let we=[],B=[];function mn(P){if(P.samples>0){if(Zt(P)===!1){let w=P.textures,V=P.width,j=P.height,nt=i.COLOR_BUFFER_BIT,J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(P),ut=w.length>1;if(ut)for(let mt=0;mt<w.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let mt=0;mt<w.length;mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[mt]);let jt=n.get(w[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,V,j,0,0,V,j,nt,i.NEAREST),l===!0&&(we.length=0,B.length=0,we.push(i.COLOR_ATTACHMENT0+mt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(we.push(J),B.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let mt=0;mt<w.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[mt]);let jt=n.get(w[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Yt(P){return Math.min(s.maxSamples,P.samples)}function Zt(P){let w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function de(P,w){let V=P.colorSpace,j=P.format,nt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==mr&&V!==Ri&&(Qt.getTransfer(V)===ce?(j!==Rn||nt!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function At(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=O,this.rebindTextures=Lt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Zt}function Jy(i,t){function e(n,s=Ri){let r,o=Qt.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===gh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dd)return i.BYTE;if(n===Ud)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===mh)return i.INT;if(n===cs)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===to)return i.HALF_FLOAT;if(n===Fd)return i.ALPHA;if(n===kd)return i.RGB;if(n===Rn)return i.RGBA;if(n===Od)return i.LUMINANCE;if(n===Bd)return i.LUMINANCE_ALPHA;if(n===nr)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===yh)return i.RED;if(n===_h)return i.RED_INTEGER;if(n===zd)return i.RG;if(n===vh)return i.RG_INTEGER;if(n===bh)return i.RGBA_INTEGER;if(n===Go||n===Wo||n===Xo||n===qo)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===oc||n===ac)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rc||n===oc)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ac)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===yc||n===_c||n===vc||n===bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===Mc||n===Sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hd||n===wc||n===Ec||n===Tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Vc=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ky={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qy=`
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

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Gn({vertexShader:jy,fragmentShader:Qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends Di{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,x=null,g=new Gc,m=e.getContextAttributes(),p=null,S=null,v=[],y=[],E=new yt,A=null,C=new $e;C.viewport=new be;let R=new $e;R.viewport=new be;let b=[C,R],_=new Vc,M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=v[Y];return et===void 0&&(et=new Xr,v[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=v[Y];return et===void 0&&(et=new Xr,v[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=v[Y];return et===void 0&&(et=new Xr,v[Y]=et),et.getHandSpace()};function I(Y){let et=y.indexOf(Y.inputSource);if(et===-1)return;let ct=v[et];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,c||o),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let Y=0;Y<v.length;Y++){let et=y[Y];et!==null&&(y[Y]=null,v[Y].disconnect(et))}M=null,L=null,g.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,S=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new hi(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,ct=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?cr:nr,ct=m.stencil?lr:cs);let Ct={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new hi(u.textureWidth,u.textureHeight,{format:Rn,type:ci,depthTexture:new aa(u.textureWidth,u.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(Y){for(let et=0;et<Y.removed.length;et++){let ct=Y.removed[et],ot=y.indexOf(ct);ot>=0&&(y[ot]=null,v[ot].disconnect(ct))}for(let et=0;et<Y.added.length;et++){let ct=Y.added[et],ot=y.indexOf(ct);if(ot===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=y.length){y.push(ct),ot=Tt;break}else if(y[Tt]===null){y[Tt]=ct,ot=Tt;break}if(ot===-1)break}let Ct=v[ot];Ct&&Ct.connect(ct)}}let z=new D,q=new D;function O(Y,et,ct){z.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(ct.matrixWorld);let ot=z.distanceTo(q),Ct=et.projectionMatrix.elements,Tt=ct.projectionMatrix.elements,Lt=Ct[14]/(Ct[10]-1),xe=Ct[14]/(Ct[10]+1),Kt=(Ct[9]+1)/Ct[5],we=(Ct[9]-1)/Ct[5],B=(Ct[8]-1)/Ct[0],mn=(Tt[8]+1)/Tt[0],Yt=Lt*B,Zt=Lt*mn,It=ot/(-B+mn),de=It*-B;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(de),Y.translateZ(It),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let At=Lt+It,P=xe+It,w=Yt-de,V=Zt+(ot-de),j=Kt*xe/P*At,nt=we*xe/P*At;Y.projectionMatrix.makePerspective(w,V,j,nt,At,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function X(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,ct=Y.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),_.near=R.near=C.near=et,_.far=R.far=C.far=ct,(M!==_.near||L!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,L=_.far),C.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,_.layers.mask=C.layers.mask|R.layers.mask;let ot=Y.parent,Ct=_.cameras;X(_,ot);for(let Tt=0;Tt<Ct.length;Tt++)X(Ct[Tt],ot);Ct.length===2?O(_,C,R):_.projectionMatrix.copy(C.projectionMatrix),tt(Y,_,ot)};function tt(Y,et,ct){ct===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$r*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(_)};let rt=null;function wt(Y,et){if(h=et.getViewerPose(c||o),x=et,h!==null){let ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let ot=!1;ct.length!==_.cameras.length&&(_.cameras.length=0,ot=!0);for(let Tt=0;Tt<ct.length;Tt++){let Lt=ct[Tt],xe=null;if(f!==null)xe=f.getViewport(Lt);else{let we=d.getViewSubImage(u,Lt);xe=we.viewport,Tt===0&&(t.setRenderTargetTextures(S,we.colorTexture,u.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(S))}let Kt=b[Tt];Kt===void 0&&(Kt=new $e,Kt.layers.enable(Tt),Kt.viewport=new be,b[Tt]=Kt),Kt.matrix.fromArray(Lt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Lt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(xe.x,xe.y,xe.width,xe.height),Tt===0&&(_.matrix.copy(Kt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ot===!0&&_.cameras.push(Kt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let Tt=d.getDepthInformation(ct[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(t,Tt,s.renderState)}}for(let ct=0;ct<v.length;ct++){let ot=y[ct],Ct=v[ct];ot!==null&&Ct!==void 0&&Ct.update(ot,et,c||o)}rt&&rt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}let Et=new qd;Et.setAnimationLoop(wt),this.setAnimationLoop=function(Y){rt=Y},this.dispose=function(){}}},ns=new ke,t_=new le;function e_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),v=S.envMap,y=S.envMapRotation;v&&(m.envMap.value=v,ns.copy(y),ns.x*=-1,ns.y*=-1,ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(t_.makeRotationFromEuler(ns)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){let y=v.program;n.uniformBlockBinding(S,y)}function c(S,v){let y=s[S.id];y===void 0&&(x(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));let E=v.program;n.updateUBOMapping(S,E);let A=t.render.frame;r[S.id]!==A&&(u(S),r[S.id]=A)}function h(S){let v=d();S.__bindingPointIndex=v;let y=i.createBuffer(),E=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let v=s[S.id],y=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,C=y.length;A<C;A++){let R=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,_=R.length;b<_;b++){let M=R[b];if(f(M,A,b,E)===!0){let L=M.__offset,I=Array.isArray(M.value)?M.value:[M.value],U=0;for(let H=0;H<I.length;H++){let z=I[H],q=g(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+U,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,y,E){let A=S.value,C=v+"_"+y;if(E[C]===void 0)return typeof A=="number"||typeof A=="boolean"?E[C]=A:E[C]=A.clone(),!0;{let R=E[C];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[C]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function x(S){let v=S.uniforms,y=0,E=16;for(let C=0,R=v.length;C<R;C++){let b=Array.isArray(v[C])?v[C]:[v[C]];for(let _=0,M=b.length;_<M;_++){let L=b[_],I=Array.isArray(L.value)?L.value:[L.value];for(let U=0,H=I.length;U<H;U++){let z=I[U],q=g(z),O=y%E,X=O%q.boundary,tt=O+X;y+=X,tt!==0&&E-tt<q.storage&&(y+=E-tt),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=q.storage}}}let A=y%E;return A>0&&(y+=E-A),S.__size=y,S.__cache={},this}function g(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var la=class{constructor(t={}){let{canvas:e=om(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Pi,this.toneMappingExposure=1;let y=this,E=!1,A=0,C=0,R=null,b=-1,_=null,M=new be,L=new be,I=null,U=new Ut(0),H=0,z=e.width,q=e.height,O=1,X=null,tt=null,rt=new be(0,0,z,q),wt=new be(0,0,z,q),Et=!1,Y=new Jr,et=!1,ct=!1,ot=new le,Ct=new le,Tt=new D,Lt=new be,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function we(){return R===null?O:1}let B=n;function mn(T,F){return e.getContext(T,F)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),B===null){let F="webgl2";if(B=mn(F,T),B===null)throw mn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Yt,Zt,It,de,At,P,w,V,j,nt,J,Mt,ut,mt,jt,it,gt,Pt,Dt,xt,$t,Ht,he,N;function ht(){Yt=new yx(B),Yt.init(),Ht=new Jy(B,Yt),Zt=new dx(B,Yt,t,Ht),It=new Yy(B,Yt),Zt.reverseDepthBuffer&&u&&It.buffers.depth.setReversed(!0),de=new bx(B),At=new Uy,P=new $y(B,Yt,It,At,Zt,Ht,de),w=new px(y),V=new xx(y),j=new Rm(B),he=new hx(B,j),nt=new _x(B,j,de,he),J=new Sx(B,nt,j,de),Dt=new Mx(B,Zt,P),it=new fx(At),Mt=new Dy(y,w,V,Yt,Zt,he,it),ut=new e_(y,At),mt=new Fy,jt=new Vy(Yt),Pt=new cx(y,w,V,It,J,f,l),gt=new Xy(y,J,Zt),N=new n_(B,de,Zt,It),xt=new ux(B,Yt,de),$t=new vx(B,Yt,de),de.programs=Mt.programs,y.capabilities=Zt,y.extensions=Yt,y.properties=At,y.renderLists=mt,y.shadowMap=gt,y.state=It,y.info=de}ht();let Z=new Wc(y,B);this.xr=Z,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=Yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(z,q,!1))},this.getSize=function(T){return T.set(z,q)},this.setSize=function(T,F,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,q=F,e.width=Math.floor(T*O),e.height=Math.floor(F*O),G===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(z*O,q*O).floor()},this.setDrawingBufferSize=function(T,F,G){z=T,q=F,O=G,e.width=Math.floor(T*G),e.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(rt)},this.setViewport=function(T,F,G,W){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,F,G,W),It.viewport(M.copy(rt).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(wt)},this.setScissor=function(T,F,G,W){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,F,G,W),It.scissor(L.copy(wt).multiplyScalar(O).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(T){It.setScissorTest(Et=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(T=!0,F=!0,G=!0){let W=0;if(T){let k=!1;if(R!==null){let st=R.texture.format;k=st===bh||st===vh||st===_h}if(k){let st=R.texture.type,ft=st===ci||st===cs||st===Zr||st===lr||st===gh||st===xh,_t=Pt.getClearColor(),vt=Pt.getClearAlpha(),Ft=_t.r,Bt=_t.g,bt=_t.b;ft?(x[0]=Ft,x[1]=Bt,x[2]=bt,x[3]=vt,B.clearBufferuiv(B.COLOR,0,x)):(g[0]=Ft,g[1]=Bt,g[2]=bt,g[3]=vt,B.clearBufferiv(B.COLOR,0,g))}else W|=B.COLOR_BUFFER_BIT}F&&(W|=B.DEPTH_BUFFER_BIT),G&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),jt.dispose(),At.dispose(),w.dispose(),V.dispose(),J.dispose(),he.dispose(),N.dispose(),Mt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",du),Z.removeEventListener("sessionend",fu),Ji.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=de.autoReset,F=gt.enabled,G=gt.autoUpdate,W=gt.needsUpdate,k=gt.type;ht(),de.autoReset=T,gt.enabled=F,gt.autoUpdate=G,gt.needsUpdate=W,gt.type=k}function dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ot(T){let F=T.target;F.removeEventListener("dispose",Ot),ve(F)}function ve(T){ze(T),At.remove(T)}function ze(T){let F=At.get(T).programs;F!==void 0&&(F.forEach(function(G){Mt.releaseProgram(G)}),T.isShaderMaterial&&Mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,W,k,st){F===null&&(F=xe);let ft=k.isMesh&&k.matrixWorld.determinant()<0,_t=np(T,F,G,W,k);It.setMaterial(W,ft);let vt=G.index,Ft=1;if(W.wireframe===!0){if(vt=nt.getWireframeAttribute(G),vt===void 0)return;Ft=2}let Bt=G.drawRange,bt=G.attributes.position,ne=Bt.start*Ft,ue=(Bt.start+Bt.count)*Ft;st!==null&&(ne=Math.max(ne,st.start*Ft),ue=Math.min(ue,(st.start+st.count)*Ft)),vt!==null?(ne=Math.max(ne,0),ue=Math.min(ue,vt.count)):bt!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,bt.count));let fe=ue-ne;if(fe<0||fe===1/0)return;he.setup(k,W,_t,G,vt);let tn,ie=xt;if(vt!==null&&(tn=j.get(vt),ie=$t,ie.setIndex(tn)),k.isMesh)W.wireframe===!0?(It.setLineWidth(W.wireframeLinewidth*we()),ie.setMode(B.LINES)):ie.setMode(B.TRIANGLES);else if(k.isLine){let St=W.linewidth;St===void 0&&(St=1),It.setLineWidth(St*we()),k.isLineSegments?ie.setMode(B.LINES):k.isLineLoop?ie.setMode(B.LINE_LOOP):ie.setMode(B.LINE_STRIP)}else k.isPoints?ie.setMode(B.POINTS):k.isSprite&&ie.setMode(B.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ie.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ie.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let St=k._multiDrawStarts,jn=k._multiDrawCounts,se=k._multiDrawCount,Sn=vt?j.get(vt).bytesPerElement:1,Us=At.get(W).currentProgram.getUniforms();for(let ln=0;ln<se;ln++)Us.setValue(B,"_gl_DrawID",ln),ie.render(St[ln]/Sn,jn[ln])}else if(k.isInstancedMesh)ie.renderInstances(ne,fe,k.count);else if(G.isInstancedBufferGeometry){let St=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,jn=Math.min(G.instanceCount,St);ie.renderInstances(ne,fe,jn)}else ie.render(ne,fe)};function oe(T,F,G){T.transparent===!0&&T.side===yn&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,fo(T,F,G),T.side=Li,T.needsUpdate=!0,fo(T,F,G),T.side=yn):fo(T,F,G)}this.compile=function(T,F,G=null){G===null&&(G=T),p=jt.get(G),p.init(F),v.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==G&&T.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let W=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let st=k.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){let _t=st[ft];oe(_t,G,k),W.add(_t)}else oe(st,G,k),W.add(st)}),v.pop(),p=null,W},this.compileAsync=function(T,F,G=null){let W=this.compile(T,F,G);return new Promise(k=>{function st(){if(W.forEach(function(ft){At.get(ft).currentProgram.isReady()&&W.delete(ft)}),W.size===0){k(T);return}setTimeout(st,10)}Yt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Mn=null;function Kn(T){Mn&&Mn(T)}function du(){Ji.stop()}function fu(){Ji.start()}let Ji=new qd;Ji.setAnimationLoop(Kn),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(T){Mn=T,Z.setAnimationLoop(T),T===null?Ji.stop():Ji.start()},Z.addEventListener("sessionstart",du),Z.addEventListener("sessionend",fu),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,R),p=jt.get(T,v.length),p.init(F),v.push(p),Ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Ct),ct=this.localClippingEnabled,et=it.init(this.clippingPlanes,ct),m=mt.get(T,S.length),m.init(),S.push(m),Z.enabled===!0&&Z.isPresenting===!0){let st=y.xr.getDepthSensingMesh();st!==null&&ll(st,F,-1/0,y.sortObjects)}ll(T,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(X,tt),Kt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Kt&&Pt.addToRenderList(m,T),this.info.render.frame++,et===!0&&it.beginShadows();let G=p.state.shadowsArray;gt.render(G,T,F),et===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,k=m.transmissive;if(p.setupLights(),F.isArrayCamera){let st=F.cameras;if(k.length>0)for(let ft=0,_t=st.length;ft<_t;ft++){let vt=st[ft];mu(W,k,T,vt)}Kt&&Pt.render(T);for(let ft=0,_t=st.length;ft<_t;ft++){let vt=st[ft];pu(m,T,vt,vt.viewport)}}else k.length>0&&mu(W,k,T,F),Kt&&Pt.render(T),pu(m,T,F);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,F),he.resetDefaultState(),b=-1,_=null,v.pop(),v.length>0?(p=v[v.length-1],et===!0&&it.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ll(T,F,G,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){W&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ct);let ft=J.update(T),_t=T.material;_t.visible&&m.push(T,ft,_t,G,Lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){let ft=J.update(T),_t=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Lt.copy(ft.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(Ct)),Array.isArray(_t)){let vt=ft.groups;for(let Ft=0,Bt=vt.length;Ft<Bt;Ft++){let bt=vt[Ft],ne=_t[bt.materialIndex];ne&&ne.visible&&m.push(T,ft,ne,G,Lt.z,bt)}}else _t.visible&&m.push(T,ft,_t,G,Lt.z,null)}}let st=T.children;for(let ft=0,_t=st.length;ft<_t;ft++)ll(st[ft],F,G,W)}function pu(T,F,G,W){let k=T.opaque,st=T.transmissive,ft=T.transparent;p.setupLightsView(G),et===!0&&it.setGlobalState(y.clippingPlanes,G),W&&It.viewport(M.copy(W)),k.length>0&&uo(k,F,G),st.length>0&&uo(st,F,G),ft.length>0&&uo(ft,F,G),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function mu(T,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new hi(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?to:ci,minFilter:as,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let st=p.state.transmissionRenderTarget[W.id],ft=W.viewport||M;st.setSize(ft.z,ft.w);let _t=y.getRenderTarget();y.setRenderTarget(st),y.getClearColor(U),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),Kt&&Pt.render(G);let vt=y.toneMapping;y.toneMapping=Pi;let Ft=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),et===!0&&it.setGlobalState(y.clippingPlanes,W),uo(T,G,W),P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let bt=0,ne=F.length;bt<ne;bt++){let ue=F[bt],fe=ue.object,tn=ue.geometry,ie=ue.material,St=ue.group;if(ie.side===yn&&fe.layers.test(W.layers)){let jn=ie.side;ie.side=en,ie.needsUpdate=!0,gu(fe,G,W,tn,ie,St),ie.side=jn,ie.needsUpdate=!0,Bt=!0}}Bt===!0&&(P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st))}y.setRenderTarget(_t),y.setClearColor(U,H),Ft!==void 0&&(W.viewport=Ft),y.toneMapping=vt}function uo(T,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,st=T.length;k<st;k++){let ft=T[k],_t=ft.object,vt=ft.geometry,Ft=W===null?ft.material:W,Bt=ft.group;_t.layers.test(G.layers)&&gu(_t,F,G,vt,Ft,Bt)}}function gu(T,F,G,W,k,st){T.onBeforeRender(y,F,G,W,k,st),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(y,F,G,W,T,st),k.transparent===!0&&k.side===yn&&k.forceSinglePass===!1?(k.side=en,k.needsUpdate=!0,y.renderBufferDirect(G,F,W,k,T,st),k.side=Li,k.needsUpdate=!0,y.renderBufferDirect(G,F,W,k,T,st),k.side=yn):y.renderBufferDirect(G,F,W,k,T,st),T.onAfterRender(y,F,G,W,k,st)}function fo(T,F,G){F.isScene!==!0&&(F=xe);let W=At.get(T),k=p.state.lights,st=p.state.shadowsArray,ft=k.state.version,_t=Mt.getParameters(T,k.state,st,F,G),vt=Mt.getProgramCacheKey(_t),Ft=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?V:w).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",Ot),Ft=new Map,W.programs=Ft);let Bt=Ft.get(vt);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===ft)return yu(T,_t),Bt}else _t.uniforms=Mt.getUniforms(T),T.onBeforeCompile(_t,y),Bt=Mt.acquireProgram(_t,vt),Ft.set(vt,Bt),W.uniforms=_t.uniforms;let bt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(bt.clippingPlanes=it.uniform),yu(T,_t),W.needsLights=sp(T),W.lightsStateVersion=ft,W.needsLights&&(bt.ambientLightColor.value=k.state.ambient,bt.lightProbe.value=k.state.probe,bt.directionalLights.value=k.state.directional,bt.directionalLightShadows.value=k.state.directionalShadow,bt.spotLights.value=k.state.spot,bt.spotLightShadows.value=k.state.spotShadow,bt.rectAreaLights.value=k.state.rectArea,bt.ltc_1.value=k.state.rectAreaLTC1,bt.ltc_2.value=k.state.rectAreaLTC2,bt.pointLights.value=k.state.point,bt.pointLightShadows.value=k.state.pointShadow,bt.hemisphereLights.value=k.state.hemi,bt.directionalShadowMap.value=k.state.directionalShadowMap,bt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,bt.spotShadowMap.value=k.state.spotShadowMap,bt.spotLightMatrix.value=k.state.spotLightMatrix,bt.spotLightMap.value=k.state.spotLightMap,bt.pointShadowMap.value=k.state.pointShadowMap,bt.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function xu(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=sr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function yu(T,F){let G=At.get(T);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function np(T,F,G,W,k){F.isScene!==!0&&(F=xe),P.resetTextureUnits();let st=F.fog,ft=W.isMeshStandardMaterial?F.environment:null,_t=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mr,vt=(W.isMeshStandardMaterial?V:w).get(W.envMap||ft),Ft=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),bt=!!G.morphAttributes.position,ne=!!G.morphAttributes.normal,ue=!!G.morphAttributes.color,fe=Pi;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=y.toneMapping);let tn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=tn!==void 0?tn.length:0,St=At.get(W),jn=p.state.lights;if(et===!0&&(ct===!0||T!==_)){let gn=T===_&&W.id===b;it.setState(W,T,gn)}let se=!1;W.version===St.__version?(St.needsLights&&St.lightsStateVersion!==jn.state.version||St.outputColorSpace!==_t||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==vt||W.fog===!0&&St.fog!==st||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==it.numPlanes||St.numIntersection!==it.numIntersection)||St.vertexAlphas!==Ft||St.vertexTangents!==Bt||St.morphTargets!==bt||St.morphNormals!==ne||St.morphColors!==ue||St.toneMapping!==fe||St.morphTargetsCount!==ie)&&(se=!0):(se=!0,St.__version=W.version);let Sn=St.currentProgram;se===!0&&(Sn=fo(W,F,k));let Us=!1,ln=!1,Cr=!1,pe=Sn.getUniforms(),On=St.uniforms;if(It.useProgram(Sn.program)&&(Us=!0,ln=!0,Cr=!0),W.id!==b&&(b=W.id,ln=!0),Us||_!==T){It.buffers.depth.getReversed()?(ot.copy(T.projectionMatrix),lm(ot),cm(ot),pe.setValue(B,"projectionMatrix",ot)):pe.setValue(B,"projectionMatrix",T.projectionMatrix),pe.setValue(B,"viewMatrix",T.matrixWorldInverse);let vi=pe.map.cameraPosition;vi!==void 0&&vi.setValue(B,Tt.setFromMatrixPosition(T.matrixWorld)),Zt.logarithmicDepthBuffer&&pe.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pe.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,ln=!0,Cr=!0)}if(k.isSkinnedMesh){pe.setOptional(B,k,"bindMatrix"),pe.setOptional(B,k,"bindMatrixInverse");let gn=k.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),pe.setValue(B,"boneTexture",gn.boneTexture,P))}k.isBatchedMesh&&(pe.setOptional(B,k,"batchingTexture"),pe.setValue(B,"batchingTexture",k._matricesTexture,P),pe.setOptional(B,k,"batchingIdTexture"),pe.setValue(B,"batchingIdTexture",k._indirectTexture,P),pe.setOptional(B,k,"batchingColorTexture"),k._colorsTexture!==null&&pe.setValue(B,"batchingColorTexture",k._colorsTexture,P));let Ir=G.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0)&&Dt.update(k,G,Sn),(ln||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,pe.setValue(B,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(On.envMap.value=vt,On.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(On.envMapIntensity.value=F.environmentIntensity),ln&&(pe.setValue(B,"toneMappingExposure",y.toneMappingExposure),St.needsLights&&ip(On,Cr),st&&W.fog===!0&&ut.refreshFogUniforms(On,st),ut.refreshMaterialUniforms(On,W,O,q,p.state.transmissionRenderTarget[T.id]),sr.upload(B,xu(St),On,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sr.upload(B,xu(St),On,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pe.setValue(B,"center",k.center),pe.setValue(B,"modelViewMatrix",k.modelViewMatrix),pe.setValue(B,"normalMatrix",k.normalMatrix),pe.setValue(B,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let gn=W.uniformsGroups;for(let vi=0,bi=gn.length;vi<bi;vi++){let _u=gn[vi];N.update(_u,Sn),N.bind(_u,Sn)}}return Sn}function ip(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function sp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,F,G){At.get(T.texture).__webglTexture=F,At.get(T.depthTexture).__webglTexture=G;let W=At.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){let G=At.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,G=0){R=T,A=F,C=G;let W=!0,k=null,st=!1,ft=!1;if(T){let vt=At.get(T);if(vt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(vt.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(vt.__hasExternalTextures)P.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let bt=T.depthTexture;if(vt.__boundDepthTexture!==bt){if(bt!==null&&At.has(bt)&&(T.width!==bt.image.width||T.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}let Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(ft=!0);let Bt=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?k=Bt[F][G]:k=Bt[F],st=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?k=At.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?k=Bt[G]:k=Bt,M.copy(T.viewport),L.copy(T.scissor),I=T.scissorTest}else M.copy(rt).multiplyScalar(O).floor(),L.copy(wt).multiplyScalar(O).floor(),I=Et;if(It.bindFramebuffer(B.FRAMEBUFFER,k)&&W&&It.drawBuffers(T,k),It.viewport(M),It.scissor(L),It.setScissorTest(I),st){let vt=At.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,G)}else if(ft){let vt=At.get(T.texture),Ft=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,vt.__webglTexture,G||0,Ft)}b=-1},this.readRenderTargetPixels=function(T,F,G,W,k,st,ft){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t){It.bindFramebuffer(B.FRAMEBUFFER,_t);try{let vt=T.texture,Ft=vt.format,Bt=vt.type;if(!Zt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&G>=0&&G<=T.height-k&&B.readPixels(F,G,W,k,Ht.convert(Ft),Ht.convert(Bt),st)}finally{let vt=R!==null?At.get(R).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(T,F,G,W,k,st,ft){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t){let vt=T.texture,Ft=vt.format,Bt=vt.type;if(!Zt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-W&&G>=0&&G<=T.height-k){It.bindFramebuffer(B.FRAMEBUFFER,_t);let bt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,bt),B.bufferData(B.PIXEL_PACK_BUFFER,st.byteLength,B.STREAM_READ),B.readPixels(F,G,W,k,Ht.convert(Ft),Ht.convert(Bt),0);let ne=R!==null?At.get(R).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,ne);let ue=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await am(B,ue,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,bt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,st),B.deleteBuffer(bt),B.deleteSync(ue),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,G=0){T.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);let W=Math.pow(2,-G),k=Math.floor(T.image.width*W),st=Math.floor(T.image.height*W),ft=F!==null?F.x:0,_t=F!==null?F.y:0;P.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,ft,_t,k,st),It.unbindTexture()},this.copyTextureToTexture=function(T,F,G=null,W=null,k=0){T.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],F=arguments[2],k=arguments[3]||0,G=null);let st,ft,_t,vt,Ft,Bt,bt,ne,ue,fe=T.isCompressedTexture?T.mipmaps[k]:T.image;G!==null?(st=G.max.x-G.min.x,ft=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,vt=G.min.x,Ft=G.min.y,Bt=G.isBox3?G.min.z:0):(st=fe.width,ft=fe.height,_t=fe.depth||1,vt=0,Ft=0,Bt=0),W!==null?(bt=W.x,ne=W.y,ue=W.z):(bt=0,ne=0,ue=0);let tn=Ht.convert(F.format),ie=Ht.convert(F.type),St;F.isData3DTexture?(P.setTexture3D(F,0),St=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),St=B.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),St=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let jn=B.getParameter(B.UNPACK_ROW_LENGTH),se=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Sn=B.getParameter(B.UNPACK_SKIP_PIXELS),Us=B.getParameter(B.UNPACK_SKIP_ROWS),ln=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,vt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ft),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Bt);let Cr=T.isDataArrayTexture||T.isData3DTexture,pe=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let On=At.get(T),Ir=At.get(F),gn=At.get(On.__renderTarget),vi=At.get(Ir.__renderTarget);It.bindFramebuffer(B.READ_FRAMEBUFFER,gn.__webglFramebuffer),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let bi=0;bi<_t;bi++)Cr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.get(T).__webglTexture,k,Bt+bi),T.isDepthTexture?(pe&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.get(F).__webglTexture,k,ue+bi),B.blitFramebuffer(vt,Ft,st,ft,bt,ne,st,ft,B.DEPTH_BUFFER_BIT,B.NEAREST)):pe?B.copyTexSubImage3D(St,k,bt,ne,ue+bi,vt,Ft,st,ft):B.copyTexSubImage2D(St,k,bt,ne,ue+bi,vt,Ft,st,ft);It.bindFramebuffer(B.READ_FRAMEBUFFER,null),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pe?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(St,k,bt,ne,ue,st,ft,_t,tn,ie,fe.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(St,k,bt,ne,ue,st,ft,_t,tn,fe.data):B.texSubImage3D(St,k,bt,ne,ue,st,ft,_t,tn,ie,fe):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,k,bt,ne,st,ft,tn,ie,fe.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,k,bt,ne,fe.width,fe.height,tn,fe.data):B.texSubImage2D(B.TEXTURE_2D,k,bt,ne,st,ft,tn,ie,fe);B.pixelStorei(B.UNPACK_ROW_LENGTH,jn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,se),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Sn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Us),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ln),k===0&&F.generateMipmaps&&B.generateMipmap(St),It.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G=null,W=null,k=0){return T.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,T=arguments[2],F=arguments[3],k=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,G,W,k)},this.initRenderTarget=function(T){At.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),It.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,It.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var ca=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ha=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ke,this.environmentIntensity=1,this.environmentRotation=new ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Xc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new D,ua=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kr=class extends Vn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$s,Nr=new D,Js=new D,Ks=new D,js=new yt,Fr=new yt,Kd=new le,No=new D,kr=new D,Fo=new D,vd=new yt,kl=new yt,bd=new yt,da=class extends Ie{constructor(t=new Kr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xc(e,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new ua(n,3,0,!1)),$s.setAttribute("uv",new ua(n,2,3,!1))}this.geometry=$s,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Ks.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ko(No.set(-.5,-.5,0),Ks,o,Js,s,r),ko(kr.set(.5,-.5,0),Ks,o,Js,s,r),ko(Fo.set(.5,.5,0),Ks,o,Js,s,r),vd.set(0,0),kl.set(1,0),bd.set(1,1);let a=t.ray.intersectTriangle(No,kr,Fo,!1,Nr);if(a===null&&(ko(kr.set(-.5,.5,0),Ks,o,Js,s,r),kl.set(0,1),a=t.ray.intersectTriangle(No,Fo,kr,!1,Nr),a===null))return;let l=t.ray.origin.distanceTo(Nr);l<t.near||l>t.far||e.push({distance:l,point:Nr.clone(),uv:Ci.getInterpolation(Nr,No,kr,Fo,vd,kl,bd,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ko(i,t,e,n,s,r){js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fr.x=r*js.x-s*js.y,Fr.y=s*js.x+r*js.y):Fr.copy(js),i.copy(t),i.x+=Fr.x,i.y+=Fr.y,i.applyMatrix4(Kd)}var qc=class extends sn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=un,h=un,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fa=class extends nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new le,Md=new le,Oo=[],Sd=new ui,i_=new le,Or=new Rt,Br=new Ui,ur=class extends Rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Sd.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Br.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),t.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),Md.multiplyMatrices(n,Qs),Or.matrixWorld=Md,Or.raycast(t,Oo);for(let o=0,a=Oo.length;o<a;o++){let l=Oo[o];l.instanceId=r,l.object=this,e.push(l)}Oo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qc(new Float32Array(s*this.count),s,this.count,yh,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var dr=class extends Vn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pa=new D,ma=new D,wd=new le,zr=new Qo,Bo=new Ui,Ol=new D,Ed=new D,jr=class extends Ie{constructor(t=new ye,e=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)pa.fromBufferAttribute(e,s-1),ma.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=pa.distanceTo(ma);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;wd.copy(s).invert(),zr.copy(t.ray).applyMatrix4(wd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let g=f,m=x-1;g<m;g+=c){let p=h.getX(g),S=h.getX(g+1),v=zo(this,t,zr,l,p,S);v&&e.push(v)}if(this.isLineLoop){let g=h.getX(x-1),m=h.getX(f),p=zo(this,t,zr,l,g,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let g=f,m=x-1;g<m;g+=c){let p=zo(this,t,zr,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){let g=zo(this,t,zr,l,x-1,f);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zo(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(pa.fromBufferAttribute(o,s),ma.fromBufferAttribute(o,r),e.distanceSqToSegment(pa,ma,Ol,Ed)>n)return;Ol.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ol);if(!(l<t.near||l>t.far))return{distance:l,point:Ed.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Td=new D,Ad=new D,ga=class extends jr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Td.fromBufferAttribute(e,s),Ad.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Td.distanceTo(Ad);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var di=class extends sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new yt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,l=new le;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Fe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Fe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xa=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new yt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Yc=class extends xa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ho=new D,Bl=new Eh,zl=new Eh,Hl=new Eh,Qr=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ho.subVectors(s[0],s[1]).add(s[0]),c=Ho);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ho),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),Bl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,x,g,m),zl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,x,g,m),Hl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Hl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Bl.calc(l),zl.calc(l),Hl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function s_(i,t){let e=1-i;return e*e*t}function r_(i,t){return 2*(1-i)*i*t}function o_(i,t){return i*i*t}function qr(i,t,e,n){return s_(i,t)+r_(i,e)+o_(i,n)}function a_(i,t){let e=1-i;return e*e*e*t}function l_(i,t){let e=1-i;return 3*e*e*i*t}function c_(i,t){return 3*(1-i)*i*i*t}function h_(i,t){return i*i*i*t}function Yr(i,t,e,n,s){return a_(i,t)+l_(i,e)+c_(i,n)+h_(i,s)}var Zc=class extends In{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(t,s.x,r.x,o.x,a.x),Yr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$c=class extends In{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(t,s.x,r.x,o.x,a.x),Yr(t,s.y,r.y,o.y,a.y),Yr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jc=class extends In{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kc=class extends In{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jc=class extends In{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends In{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y),qr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qc=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Rd(a,l.x,c.x,h.x,d.x),Rd(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new yt().fromArray(s))}return this}},u_=Object.freeze({__proto__:null,ArcCurve:Yc,CatmullRomCurve3:Qr,CubicBezierCurve:Zc,CubicBezierCurve3:$c,EllipseCurve:xa,LineCurve:Jc,LineCurve3:Kc,QuadraticBezierCurve:jc,QuadraticBezierCurve3:ya,SplineCurve:Qc});var _n=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],x=0,g=[],m=n/2,p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function S(){let y=new D,E=new D,A=0,C=(e-t)/n;for(let R=0;R<=r;R++){let b=[],_=R/r,M=_*(e-t)+t;for(let L=0;L<=s;L++){let I=L/s,U=I*l+a,H=Math.sin(U),z=Math.cos(U);E.x=M*H,E.y=-_*n+m,E.z=M*z,d.push(E.x,E.y,E.z),y.set(H,C,z).normalize(),u.push(y.x,y.y,y.z),f.push(I,1-_),b.push(x++)}g.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){let _=g[b][R],M=g[b+1][R],L=g[b+1][R+1],I=g[b][R+1];(t>0||b!==0)&&(h.push(_,M,I),A+=3),(e>0||b!==r-1)&&(h.push(M,L,I),A+=3)}c.addGroup(p,A,0),p+=A}function v(y){let E=x,A=new yt,C=new D,R=0,b=y===!0?t:e,_=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*_,0),u.push(0,_,0),f.push(.5,.5),x++;let M=x;for(let L=0;L<=s;L++){let U=L/s*l+a,H=Math.cos(U),z=Math.sin(U);C.x=b*z,C.y=m*_,C.z=b*H,d.push(C.x,C.y,C.z),u.push(0,_,0),A.x=H*.5+.5,A.y=z*.5*_+.5,f.push(A.x,A.y),x++}for(let L=0;L<s;L++){let I=E+L,U=M+L;y===!0?h.push(U,U+1,I):h.push(U+1,U,I),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pn=class i extends _n{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_a=class i extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let v=new D,y=new D,E=new D;for(let A=0;A<e.length;A+=3)f(e[A+0],v),f(e[A+1],y),f(e[A+2],E),l(v,y,E,S)}function l(S,v,y,E){let A=E+1,C=[];for(let R=0;R<=A;R++){C[R]=[];let b=S.clone().lerp(y,R/A),_=v.clone().lerp(y,R/A),M=A-R;for(let L=0;L<=M;L++)L===0&&R===A?C[R][L]=b:C[R][L]=b.clone().lerp(_,L/M)}for(let R=0;R<A;R++)for(let b=0;b<2*(A-R)-1;b++){let _=Math.floor(b/2);b%2===0?(u(C[R][_+1]),u(C[R+1][_]),u(C[R][_])):(u(C[R][_+1]),u(C[R+1][_+1]),u(C[R+1][_]))}}function c(S){let v=new D;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(S),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let S=new D;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let y=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;o.push(y,1-E)}x(),d()}function d(){for(let S=0;S<o.length;S+=6){let v=o[S+0],y=o[S+2],E=o[S+4],A=Math.max(v,y,E),C=Math.min(v,y,E);A>.9&&C<.1&&(v<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,v){let y=S*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function x(){let S=new D,v=new D,y=new D,E=new D,A=new yt,C=new yt,R=new yt;for(let b=0,_=0;b<r.length;b+=9,_+=6){S.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),A.set(o[_+0],o[_+1]),C.set(o[_+2],o[_+3]),R.set(o[_+4],o[_+5]),E.copy(S).add(v).add(y).divideScalar(3);let M=m(E);g(A,_+0,S,M),g(C,_+2,v,M),g(R,_+4,y,M)}}function g(S,v,y,E){E<0&&S.x===1&&(o[v]=S.x-1),y.x===0&&y.z===0&&(o[v]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var hs=class i extends _a{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},va=class i extends _a{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ln=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new D,u=new D,f=[],x=[],g=[],m=[];for(let p=0;p<=n;p++){let S=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){let A=E/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(A+y,1-v),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let v=h[p][S+1],y=h[p][S],E=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&f.push(v,y,A),(p!==n-1||l<Math.PI)&&f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ni=class i extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let g=x/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(x/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let g=(s+1)*f+x-1,m=(s+1)*(f-1)+x-1,p=(s+1)*(f-1)+x,S=(s+1)*f+x;o.push(g,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ba=class i extends ye{constructor(t=new ya(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new yt,h=new D,d=[],u=[],f=[],x=[];g(),this.setIndex(x),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function g(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),S(),p()}function m(v){h=t.getPointAt(v/e,h);let y=o.normals[v],E=o.binormals[v];for(let A=0;A<=s;A++){let C=A/s*Math.PI*2,R=Math.sin(C),b=-Math.cos(C);l.x=b*y.x+R*E.x,l.y=b*y.y+R*E.y,l.z=b*y.z+R*E.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){let E=(s+1)*(v-1)+(y-1),A=(s+1)*v+(y-1),C=(s+1)*v+y,R=(s+1)*(v-1)+y;x.push(E,A,R),x.push(A,C,R)}}function S(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)c.x=v/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new u_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Xe=class extends Vn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var fr=class extends Vn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function d_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var pr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},th=class extends pr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eu:r=t,a=2*e-n;break;case Tu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Eu:o=t,l=2*n-e;break;case Tu:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),g=x*x,m=g*x,p=-u*m+2*u*g-u*x,S=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*x+1,v=(-1-f)*m+(1.5+f)*g+.5*x,y=f*m-f*g;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+S*o[c+E]+v*o[l+E]+y*o[d+E];return r}},eh=class extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},nh=class extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vo(e,this.TimeBufferType),this.values=Vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vo(t.times,Array),values:Vo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new th(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Zo:e=this.InterpolantFactoryMethodDiscrete;break;case Ac:e=this.InterpolantFactoryMethodLinear;break;case hl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return Ac;case this.InterpolantFactoryMethodSmooth:return hl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&d_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let x=0;x!==n;++x){let g=e[d+x];if(g!==e[u+x]||g!==e[f+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Ac;var us=class extends Dn{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Zo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends Dn{};ih.prototype.ValueTypeName="color";var sh=class extends Dn{};sh.prototype.ValueTypeName="number";var rh=class extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)We.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ma=class extends Dn{InterpolantFactoryMethodLinear(t){return new rh(this.times,this.values,this.getValueSize(),t)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Dn{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Zo;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var oh=class extends Dn{};oh.prototype.ValueTypeName="vector";var ah=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},f_=new ah,lh=class{constructor(t){this.manager=t!==void 0?t:f_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};lh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sa=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},wa=class extends Sa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Vl=new le,Cd=new D,Id=new D,ch=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cd),Id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Id),e.updateMatrixWorld(),Vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var hh=class extends ch{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new hh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Th="\\[\\]\\.:\\/",p_=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",m_="[^"+Th.replace("\\.","")+"]",g_=/((?:WC+[\/:])*)/.source.replace("WC",Ah),x_=/(WCOD+)?/.source.replace("WCOD",m_),y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),__=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),v_=new RegExp("^"+g_+x_+y_+__+"$"),b_=["material","materials","bones","map"],uh=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(p_,"")}static parseTrackName(t){let e=v_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);b_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=uh;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var fs=Math.PI*2,M_=new D(0,0,1),dn=(i,t)=>t[Math.floor(i()*t.length)];function Rh(i,t,e,n,s,r,o,a,l,c,h){let d=new D(e,n,s),u=new D(r,o,a),f=u.clone().sub(d),x=f.length(),g=Math.max(2,Math.ceil(x/.42)),m=new We().setFromUnitVectors(M_,f.clone().normalize()),p=new ke().setFromQuaternion(m);for(let S=0;S<g;S++){let v=(S+.5)/g,y=d.clone().lerp(u,v);t.batch.add(lt.box,y.x,y.y,y.z,l,c,x/g+.02,h,p.x,p.y,p.z)}}function jd(i,t,e,n,s,r,o,a="#8d8470"){let l=Math.sin(o),c=Math.cos(o),h=c,d=-l;for(let u of[-1,1])t.batch.box(e+h*u*.22,(s+r)/2,n+d*u*.22,.06+Math.abs(h)*0,r-s,.06,a,o);for(let u=s+.3;u<r;u+=.3)t.batch.box(e,u,n,Math.abs(h)*.5+Math.abs(l)*.06,.05,Math.abs(d)*.5+Math.abs(c)*.06,a);i.solid(t,e,(s+r)/2,n,Math.abs(h)*.5+.08,r-s,Math.abs(d)*.5+.08,{climbable:!0,kind:"ladder"})}function S_(i,t,e,n,s,r){t.batch.cyl(e,s+1.1,n,.035,2.2,"#9a9078"),t.batch.box(e+.32,s+1.95,n,.6,.36,.02,r),i.cylinderSolid(t,e,s,n,.05,2.2,{kind:"pole",walkable:!1})}function Qd(i,t,e,n,s,r,o,a,l,c="#f3ead6"){t.batch.box(e,n,s,r,o,.12,l,a);let h=Math.sin(a),d=Math.cos(a);t.batch.box(e+h*.07,n,s+d*.07,r*.78,o*.5,.02,c,a)}function Ee(i,t,e,n,s,r=0,o="stand"){i.jobs.push({x:t,z:e,y:r,heading:n,role:s,pose:o})}function xr(i,t,e,n,s,r){i.grounds.push({minX:t-n/2,maxX:t+n/2,minZ:e-s/2,maxZ:e+s/2,y:r})}function tf(i,t,e,n,s,r){let o=t.batch;o.box(e,.03,n,24,.12,24,"#cdbf9f"),xr(t,e,n,24,24,.09);for(let d=0;d<60;d++)o.box(e+(s()-.5)*22,.092,n+(s()-.5)*22,.5+s()*.6,.012,.4+s()*.4,s()>.5?"#c2b391":"#d8caa8",(s()-.5)*.3);t.landmarks.push({id:r,kind:"market",x:e,z:n,radius:11,name:"the market square"}),o.cyl(e,.28,n,3.4,.5,"#d9cfae"),o.cyl(e,.55,n,3.1,.06,"#b8a98a"),i.cylinderSolid(t,e,0,n,3.4,.55,{climbable:!1,kind:"stage"});for(let d=0;d<8;d++){let u=d/8*fs;o.cyl(e+Math.cos(u)*2.8,2.1,n+Math.sin(u)*2.8,.09,3.1,"#f1e8d2"),i.cylinderSolid(t,e+Math.cos(u)*2.8,.55,n+Math.sin(u)*2.8,.1,3.1,{kind:"post",walkable:!1})}o.add(lt.cone,e,4.25,n,3.9,1.5,3.9,"#8c6a52"),o.cyl(e,3.55,n,3.75,.18,"#f1e8d2"),i.cylinderSolid(t,e,3.45,n,3.75,.3,{climbable:!1,kind:"bandstand"}),o.ball(e,5.05,n,.2,.2,.2,"#d7b36a");for(let d=0;d<8;d++){let u=(d+.5)/8*fs;o.box(e+Math.cos(u)*2.8,1.05,n+Math.sin(u)*2.8,1.9,.08,.08,"#f1e8d2",-u+Math.PI/2);for(let f=-3;f<=3;f++)o.box(e+Math.cos(u)*2.8+Math.sin(u)*f*.27,.8,n+Math.sin(u)*2.8-Math.cos(u)*f*.27,.05,.5,.05,"#f1e8d2")}let a=[["#d9544f","#e0603b","#c84b3f"],["#e9c04b","#f0cf6a","#d8a93c"],["#7eaa5c","#93b86b","#6f9a4f"],["#c7b2d9","#b29ac7","#d6c5e3"],["#efe5cf","#e4d7bb","#f5ecd8"],["#e39a6e","#d98a5a","#ea9f78"]],l=["fruit","bread","veg","flowers","cheese","spices"],c=[["#c9524a","#f3ead6"],["#4f7f96","#f3ead6"],["#6f9a4f","#f3ead6"],["#d7a048","#f3ead6"],["#8c6a9c","#f3ead6"],["#c9524a","#e9c04b"]];[[-8,-8,0],[0,-8.5,0],[8,-8,0],[-8,8,Math.PI],[0,8.5,Math.PI],[8,8,Math.PI],[-9,0,Math.PI/2],[9,0,-Math.PI/2]].forEach(([d,u,f],x)=>{let g=e+d,m=n+u,p=Math.sin(f),S=Math.cos(f),v=S,y=-p,E=a[x%a.length],A=c[x%c.length],C=(z,q)=>[g+v*z+p*q,m+y*z+S*q],[R,b]=C(0,0);o.box(R,.78,b,2.6,.1,1.1,"#b89a70",f),o.box(R,.4,b,2.3,.66,.6,"#e3dcc6",f),i.solid(t,R,.42,b,Math.abs(v)*2.6+Math.abs(p)*1.1,.84,Math.abs(y)*2.6+Math.abs(S)*1.1,{climbable:!1,kind:"stall"});for(let z of[-1.2,1.2])for(let q of[-.5,.5]){let[O,X]=C(z,q);o.box(O,1.45,X,.08,2.9,.08,"#8d7f67")}for(let z=0;z<6;z++){let q=-1.25+z*.5+.25,[O,X]=C(q,-.25);o.add(lt.box,O,2.95,X,.5,.06,1.75,A[z%2],-.32*(f===0?1:f===Math.PI?-1:0),f,.32*(Math.abs(f)===Math.PI/2?f>0?1:-1:0))}let[_,M]=C(0,.55);o.box(_,2.72,M,2.7,.2,.1,A[0],f),i.solid(t,R,2.9,b,Math.abs(v)*2.7+Math.abs(p)*1.9,.2,Math.abs(y)*2.7+Math.abs(S)*1.9,{climbable:!1,kind:"awning"});for(let z of[-.75,0,.75]){let[q,O]=C(z,-.1);o.box(q,.93,O,.62,.2,.5,"#a78a62",f);for(let X=0;X<5;X++)o.ball(q+(s()-.5)*.35,1.08,O+(s()-.5)*.25,.11,.1,.11,E[X%3])}let[L,I]=C(0,-.95);Ee(t,L,I,f,"vendor:"+l[x%l.length]);let[U,H]=C(-1.2,.5);o.box(U,1.4,H,.9,.5,.05,A[0],f),o.box(U+p*.03,1.4,H+S*.03,.7,.3,.02,"#f3ead6",f)});for(let[d,u]of[[-11,-11],[11,-11],[-11,11],[11,11]])i.pot(t,e+d,n+u,s,1.1);i.bench(t,e-5,n+1.5,Math.PI/2),i.bench(t,e+5,n-1.5,-Math.PI/2),i.lamp(t,e-5,n-5),i.lamp(t,e+5,n+5),Ee(t,e-3,n-4,s()*fs,"shopper"),Ee(t,e+4,n+3.5,s()*fs,"shopper"),Ee(t,e+3.4,n-5.5,s()*fs,"shopper"),i.bunting(t,e-11,n-11,e+11,n+11,5.4),i.bunting(t,e+11,n-11,e-11,n+11,5.6)}function ef(i,t,e,n,s,r){let o=t.batch,a=dn(s,["#9a6b55","#a8735a","#8f6a5a","#b07a60"]),l=17,c=11,h=6.5,d=e-2.5,u=n-4;o.box(e,.02,n,24,.1,24,"#b6ad99"),xr(t,e,n,24,24,.07),t.landmarks.push({id:r,kind:"works",x:e,z:n,radius:12,name:"the old works"}),o.box(d,h/2,u,l,h,c,a);let f=i.solid(t,d,h/2,u,l,h,c,{kind:"wall",buildingId:r}),x={id:r,x:d,z:u,w:l,d:c,h,roofType:2,roofRise:0,wall:a,roofColor:"#7b8a86",cx:t.cx,cz:t.cz,kind:"roof",body:f};t.buildings.push(x);for(let M=0;M<2;M++)o.box(d,2.6+M*2.4,u,l+.1,.18,c+.1,"#7d564a");let g=4,m=c/g;for(let M=0;M<g;M++){let L=u-c/2+M*m;for(let I=0;I<6;I++){let H=(m-.5)/6;o.box(d,h+.22*(I+.5),L+.25+H*(I+.5),l,.22,H+.02,I%2?"#74827e":"#7b8a86")}o.box(d,h+.7,L+m-.2,l-.4,1.3,.12,"#a9c3c9"),o.box(d,h+.7,L+m-.1,l,1.36,.08,"#6c7873")}let p=d+l/2-1.2,S=u-c/2+1.2;o.add(lt.tapered,p,7.5,S,1.1,15,1.1,a),o.cyl(p,14.6,S,.95,.4,"#7d564a"),o.cyl(p,13.2,S,.9,.3,"#7d564a"),i.cylinderSolid(t,p,0,S,1,15,{climbable:!0,kind:"chimney"}),t.smoke.push({x:p,y:15.1,z:S}),o.box(d-l/2-.05,2.1,u+1,.1,4.2,4,"#5f6b66"),o.box(d-l/2-.1,2.1,u+1,.05,3.8,.12,"#3f4a46"),Qd(i,t,d,5.6,u+c/2+.08,6.5,1.1,0,"#3f4a46");for(let M=0;M<3;M++){let L=1.2+M*.55;o.cyl(d+l/2+.3,L,u+2,.16,6,"#8a9893")}for(let M=0;M<3;M++){let L=1.2+M*.55;o.add(lt.cylinder,d+l/2+.3,L,u+2,.17,7,.17,"#8a9893",Math.PI/2,0,0)}i.solid(t,d+l/2+.3,1.75,u+2,.4,1.5,7,{climbable:!0,kind:"pipes"});let v=e+8.5,y=n+7;for(let M of[-1,1])for(let L of[-1,1])o.box(v+M*1.1,3.2,y+L*1.1,.18,6.4,.18,"#6c6459"),i.solid(t,v+M*1.1,3.2,y+L*1.1,.18,6.4,.18,{kind:"post"});o.box(v,1.6,y,2.4,.1,.1,"#6c6459",.78),o.box(v,3.4,y,2.4,.1,.1,"#6c6459",-.78),o.box(v,6.45,y,2.9,.2,2.9,"#857b6b"),i.solid(t,v,6.45,y,2.9,.2,2.9,{climbable:!1,kind:"deck"}),o.cyl(v,8,y,1.3,2.9,"#a79c88"),o.add(lt.cone,v,9.9,y,1.45,.9,1.45,"#6f6a5f"),i.cylinderSolid(t,v,6.55,y,1.3,2.9,{climbable:!0,kind:"tank"}),jd(i,t,v-1.1,y,.2,6.4,-Math.PI/2);let E=e-9.5,A=n+8;for(let M=0;M<4;M++){let L=.55*(M+1);o.box(E+M*1.35,L/2,A,1.3,L,1.3,M%2?"#b89a70":"#c7a97b"),i.solid(t,E+M*1.35,L/2,A,1.3,L,1.3,{climbable:!1,kind:"pallet"})}for(let M=0;M<5;M++){let L=e+3+M%3*.9,I=n+9.5-Math.floor(M/3)*.9;o.cyl(L,.5,I,.4,1,dn(s,["#6d7f8a","#8f5f4e","#7d8a5d"])),o.cyl(L,.3,I,.42,.05,"#4a4f4c"),o.cyl(L,.8,I,.42,.05,"#4a4f4c")}i.solid(t,e+3.9,.5,n+9.05,2.8,1,1.9,{climbable:!1,kind:"barrels"});let C=e+7,R=n-9;o.box(C,.55,R,1.3,.7,2.2,"#d9a53a"),o.box(C,1.35,R+.2,1.2,.9,1.1,"#d9a53a"),o.box(C,2.05,R+.2,1.25,.1,1.3,"#3f4a46");for(let M of[-1,1])for(let L of[-1,1])o.add(lt.cylinder,C+M*.65,.32,R+L*.75,.32,.25,.32,"#2f3331",0,0,Math.PI/2);for(let M of[-1,1])o.box(C+M*.3,1.2,R-1.35,.08,2.6,.08,"#4a4f4c"),o.box(C+M*.3,.12,R-1.9,.1,.06,1.1,"#6a6f6c");i.solid(t,C,.9,R,1.3,1.8,2.2,{climbable:!1,kind:"forklift"});let b=e+1,_=n+3.5;o.box(b,.75,_,7,.12,1,"#4a4f4c");for(let M of[-2.8,0,2.8])for(let L of[-1,1])o.box(b+M,.35,_+L*.4,.12,.7,.12,"#4a4f4c");i.solid(t,b,.75,_,7,.14,1,{climbable:!1,kind:"belt"}),t.extras.push({kind:"rollers",x:b,y:.88,z:_,count:10,spacing:.65}),t.extras.push({kind:"cog",x:d-l/2-.25,y:3.2,z:u-3,r:1.1}),Ee(t,b-3.9,_-.9,Math.PI/2,"worker"),Ee(t,E+5.6,A,-Math.PI/2,"worker"),Ee(t,d-l/2-1.2,u+3.2,Math.PI/2,"foreman");for(let M=0;M<4;M++)i.crate(t,e-9+M*1.1,.4,n-9.5+M%2*.4,.8);i.lamp(t,e+10.5,n-10.5),i.tree(t,e-10.5,n-2,s,.7)}function Ch(i,t,e,n,s,r,o=1){let a=t.batch,l=Math.round((7+s()*5)*o),c=3.1,h=l*c+.6,d=12+s()*3,u=12+s()*3,f=dn(s,["#8fb0b8","#9bb5a9","#a2b7c6","#88a7b5"]),x=dn(s,["#e9e3d2","#d8d3c3","#5f6b66","#c8bfae"]);a.box(e,.14,n,22,.3,22,"#c6c0ae"),xr(t,e,n,22,22,.29),a.box(e,h/2+.3,n,d,h,u,f);let g=i.solid(t,e,h/2+.15,n,d,h+.3,u,{kind:"wall",buildingId:r}),m={id:r,x:e,z:n,w:d,d:u,h:h+.3,roofType:2,roofRise:0,wall:f,roofColor:"#9aa49c",cx:t.cx,cz:t.cz,kind:"roof",body:g};t.buildings.push(m);for(let E=1;E<=l;E++){let A=.3+E*c;a.box(e,A,n,d+.5,.16,u+.5,x)}let p=Math.floor(d/1.6);for(let E=0;E<=p;E++){let A=-d/2+E*(d/p);a.box(e+A,h/2+.3,n+u/2+.12,.14,h,.24,x),a.box(e+A,h/2+.3,n-u/2-.12,.14,h,.24,x)}let S=Math.floor(u/1.6);for(let E=0;E<=S;E++){let A=-u/2+E*(u/S);a.box(e+d/2+.12,h/2+.3,n+A,.24,h,.14,x),a.box(e-d/2-.12,h/2+.3,n+A,.24,h,.14,x)}a.box(e,1.7,n+u/2+.3,4.6,3.1,.3,"#2f3a3a"),a.box(e,3.6,n+u/2+1.4,6.5,.22,2.8,x),i.solid(t,e,3.6,n+u/2+1.4,6.5,.22,2.8,{climbable:!1,kind:"awning"}),i.pot(t,e+4.4,n+u/2+2.6,s,1.2),i.pot(t,e-4.4,n+u/2+2.6,s,1.2),i.bench(t,e+7,n+u/2+3,0),i.bench(t,e-7,n+u/2+3,0);let v=h+.3;for(let E of[-1,1])a.box(e+E*(d/2-.15),v+.4,n,.3,.8,u,x),a.box(e,v+.4,n+E*(u/2-.15),d,.8,.3,x),i.solid(t,e+E*(d/2-.15),v+.4,n,.3,.8,u,{climbable:!1}),i.solid(t,e,v+.4,n+E*(u/2-.15),d,.8,.3,{climbable:!1});a.box(e-d*.22,v+1.2,n-u*.2,4,2.4,3.2,"#a9a79a"),i.solid(t,e-d*.22,v+1.2,n-u*.2,4,2.4,3.2,{buildingId:r,building:m,kind:"wall"}),a.cyl(e+d*.25,v+.5,n+u*.25,2.4,.12,"#8c8a7e"),a.box(e+d*.25,v+.57,n+u*.25,.5,.02,1.6,"#e9e3d2"),a.box(e+d*.25,v+.57,n+u*.25,1.6,.02,.4,"#e9e3d2"),a.add(lt.tapered,e+d*.3,v+4.5,n-u*.3,.12,9,.12,"#8c8a7e"),i.cylinderSolid(t,e+d*.3,v,n-u*.3,.13,9,{climbable:!0,kind:"mast"}),a.ball(e+d*.3,v+9.1,n-u*.3,.18,.18,.18,"#d9544f"),t.extras.push({kind:"beacon",x:e+d*.3,y:v+9.1,z:n-u*.3});let y=.3+Math.floor(l*.55)*c-.9;a.box(e+2,y,n+u/2+.7,3,.15,1,"#5f6b66"),i.solid(t,e+2,y,n+u/2+.7,3,.15,1,{climbable:!1,kind:"cradle"});for(let E of[-1,1])a.box(e+2+E*1.4,(y+v)/2,n+u/2+.7,.04,v-y,.04,"#3f4a46"),a.box(e+2+E*1.4,y+.4,n+u/2+.7,.06,.8,1,"#5f6b66");t.landmarks.push({id:r,kind:"tower",x:e,z:n,radius:9,name:"the tower top",y:v}),Ee(t,e+1.5,n+u/2+2.2,Math.PI,"suit"),Ee(t,e-2,n+u/2+4,s()*fs,"suit")}function nf(i,t,e,n,s,r){let o=t.batch,a="#dfcf9f",l="#b87a6b",c="#b89a70",h="#6d7f8a",d=["#d9544f","#e9c04b","#4f7f96","#6f9a4f"];o.box(e,.025,n,24,.1,24,"#8fa66b"),o.box(e,.06,n,20,.1,14,l),xr(t,e,n,20,14,.11),t.landmarks.push({id:r,kind:"playground",x:e,z:n,radius:12,name:"the parkour park"});for(let M=0;M<6;M++){let L=e-9+M*1.1,I=n-5,U=.5+M*.3;o.cyl(L,U/2,I,.26,U,d[M%4]),i.cylinderSolid(t,L,0,I,.27,U,{climbable:!1,kind:"pole"})}let u=e-2.2,f=n-5;o.box(u,2.05,f,1.8,.16,1.8,c),i.solid(t,u,2.05,f,1.8,.16,1.8,{climbable:!1,kind:"deck"});for(let M of[-1,1])for(let L of[-1,1])o.box(u+M*.8,1,f+L*.8,.12,2,.12,h);o.box(e+1.2,2.05,n-5,5,.14,.22,c),i.solid(t,e+1.2,2.05,n-5,5,.14,.22,{climbable:!1,kind:"beam"});let x=e+4.6,g=n-5;o.box(x,2.05,g,1.8,.16,1.8,c),i.solid(t,x,2.05,g,1.8,.16,1.8,{climbable:!1,kind:"deck"});for(let M of[-1,1])for(let L of[-1,1])o.box(x+M*.8,1,g+L*.8,.12,2,.12,h);for(let M=0;M<9;M++){let L=M/8,I=g+1+L*5,U=2.05-Math.sin(L*Math.PI)*.45;o.box(x,U,I,1.2,.08,.45,M%2?"#c7a97b":c),i.solid(t,x,U,I,1.2,.08,.5,{climbable:!1,kind:"plank"})}for(let M of[-1,1])o.beam([x+M*.65,2.9,g+.9],[x+M*.65,2.9,g+6.1],.025,"#8d8470");let m=e+4.6,p=n+2.2,S=4.2;for(let M of[-1,1])for(let L of[-1,1])o.box(m+M*1.1,S/2,p+L*1.1,.16,S,.16,h),i.solid(t,m+M*1.1,S/2,p+L*1.1,.16,S,.16,{kind:"post"});o.box(m,S,p,2.5,.16,2.5,c),i.solid(t,m,S,p,2.5,.16,2.5,{climbable:!1,kind:"lookout"}),o.add(lt.cone,m,S+1.1,p,2.1,1.4,2.1,d[0]);for(let M of[-1,1])o.box(m+M*1.2,S+.5,p,.06,.8,2.5,"#e9e3d2"),o.box(m,S+.5,p-1.2,2.5,.8,.06,"#e9e3d2"),i.solid(t,m+M*1.2,S+.5,p,.06,.8,2.5,{climbable:!1});i.solid(t,m,S+.5,p-1.2,2.5,.8,.06,{climbable:!1}),jd(i,t,m-1.3,p,.2,S,Math.PI/2),Rh(i,t,m+.4,S-.05,p+1.3,m+.4,.5,p+7.6,1,.1,d[1]);for(let M of[-1,1])Rh(i,t,m+.4+M*.5,S+.2,p+1.3,m+.4+M*.5,.75,p+7.6,.08,.4,d[1]);let v=m+.4,y=p+9.3;o.cyl(v,.35,y,1.4,.12,"#2f3331"),o.cyl(v,.42,y,1.15,.06,"#3f4a46");for(let M=0;M<6;M++){let L=M/6*fs;o.box(v+Math.cos(L)*1.2,.18,y+Math.sin(L)*1.2,.08,.36,.08,h)}i.cylinderSolid(t,v,0,y,1.4,.45,{climbable:!1,kind:"trampoline",bouncy:12.5});let E=e-7,A=n+3;o.box(E,1.9,A,.4,3.8,4.5,"#cbbfa3"),i.solid(t,E,1.9,A,.4,3.8,4.5,{climbable:!0,kind:"climbing-wall"});for(let M=0;M<22;M++)o.box(E+.25,.3+s()*3.3,A-2+s()*4,.12,.12,.14,d[M%4]);o.box(E,3.85,A,1.2,.14,4.5,c),i.solid(t,E,3.85,A,1.2,.14,4.5,{climbable:!1,kind:"ledge"});let C=e-2.5,R=n+3.5;for(let M of[-1,1])for(let L of[-1,1])o.box(C+M*1.8,1.25,R+L*.5,.1,2.5,.1,h);for(let M=0;M<7;M++)o.add(lt.cylinder,C-1.8+M*.6,2.5,R,.035,1,.035,d[M%4],Math.PI/2,0,0);o.box(C,2.5,R,3.7,.06,.06,h),i.solid(t,C,2.5,R,3.7,.08,1.05,{climbable:!1,kind:"bars"});for(let M=0;M<3;M++){let L=e-8+M*2.2,I=n-1.2;o.add(lt.torus,L,1.2+M*.3,I,.7,.7,.7,d[(M+1)%4])}o.box(e+9,.09,n-3,4.5,.08,4.5,a);for(let M=0;M<5;M++)o.ball(e+7.5+s()*3,.17,n-4.5+s()*3,.25,.14,.25,"#e8dbb0");let b=e+9.5,_=n+4;o.box(b,2.4,_,2.6,.12,.12,h,0);for(let M of[-1,1])o.box(b+M*1.3,1.2,_,.12,2.4,.12,h);i.solid(t,b,.85,_,.9,.25,.9,{climbable:!1,kind:"swing"}),t.extras.push({kind:"swing",x:b,y:2.35,z:_}),o.box(e-7,.55,n+8.5,.6,.4,.6,h),o.add(lt.box,e-7,.85,n+8.5,3.6,.1,.4,c,0,0,.22),i.bench(t,e+2,n+9.5,0),i.bench(t,e-2.5,n-9.5,Math.PI),S_(i,t,m+1,p-1,S+.1,d[0]),i.tree(t,e-10.5,n-10,s,.8),i.tree(t,e+10.5,n+10,s,.8),Ee(t,e+7.8,n+8.5,-2.4,"kid"),Ee(t,e-4,n-8,.6,"kid"),Ee(t,e+1,n+7,2.8,"parent")}function sf(i,t,e,n,s,r,o){let a=t.batch,l=o==="home"?10:12,c=o==="home"?8:9,h=3.6,d=.3,u=o==="cafe"?dn(s,["#d9b48c","#c9a684","#d6c1a0"]):o==="shop"?dn(s,["#9fb3a6","#b7bfae","#cbb9a4"]):dn(s,["#d8cbb2","#c4b49a","#d2c1a4"]),f=o==="cafe"?"#a7805b":o==="shop"?"#cfc8b4":"#b89a70",x=dn(s,["#8a5a44","#96604a","#5c6b66","#6f6252"]),g=n+c/2,m=1.6,p={minX:e-l/2+d,maxX:e+l/2-d,minZ:n-c/2+d,maxZ:g-d};a.box(e,.1,n,l+.5,.2,c+.5,"#b8b6a0"),a.box(e,.3,n,l-.2,.12,c-.2,f),a.box(e,.1,g+.35,m+.8,.2,.9,"#b8b6a0"),i.solid(t,e,.1,g+.35,m+.8,.2,.9,{climbable:!1,kind:"step"}),i.solid(t,e,.18,n,l,.36,c,{climbable:!1,kind:"floor"}),a.box(e,h+.1,n,l,.3,c,u),i.solid(t,e,h+.1,n,l,.3,c,{kind:"wall",buildingId:r,climbable:!1});let S=(A,C,R,b)=>{a.box(A,h/2+.1,C,R,h,b,u),i.solid(t,A,h/2+.1,C,R,h,b,{kind:"wall",buildingId:r})};S(e,n-c/2+d/2,l,d),S(e-l/2+d/2,n,d,c),S(e+l/2-d/2,n,d,c);let v=(l-m)/2;S(e-m/2-v/2,g-d/2,v,d),S(e+m/2+v/2,g-d/2,v,d),a.box(e,2.3+(h-2.3)/2+.1,g-d/2,m+.1,h-2.3,d,u),i.solid(t,e,2.3+(h-2.3)/2+.1,g-d/2,m+.1,h-2.3,d,{kind:"wall",buildingId:r});for(let A of[-1,1])a.box(e+A*(m/2+.08),1.25,g,.16,2.5,.1,"#f1e8d2");a.box(e,2.42,g,m+.3,.16,.1,"#f1e8d2"),a.box(e,.37,g+.3,1.3,.03,.6,"#8f5f4e");for(let A of[-1,1]){let C=e+A*(m/2+v/2);a.box(C,1.85,g+.02,v-1.2,1.7,.08,"#a9c3c9"),a.box(C,1.85,g+.05,v-1.1,1.8,.04,"#f1e8d2"),a.box(C,.95,g+.1,v-1,.14,.36,"#ded5bb"),i.solid(t,C,.95,g+.1,v-1,.14,.36,{climbable:!1,kind:"sill"})}let y={id:r,x:e,z:n,w:l,d:c,h:h+.25,roofType:0,roofRise:2.2,ridgeX:!0,wall:u,roofColor:x,cx:t.cx,cz:t.cz,kind:"roof",body:null,interior:o};t.buildings.push(y),t.colliders.push({shape:"roof",building:y,kind:"roof",climbable:!1,minX:e-l/2-.55,maxX:e+l/2+.55,minY:h+.25,maxY:h+.25+2.2,minZ:n-c/2-.55,maxZ:n+c/2+.55}),a.box(e,h+.25,n,l+.38,.25,c+.38,"#e8dfc4"),i.gable(t,{...y,h:h+.25},2.2,x,!0),xr(t,e,n,l,c,.36),t.landmarks.push({id:r,kind:o,x:e,z:n,radius:Math.min(l,c)/2-.6,name:o==="cafe"?"the corner caf\xE9":o==="shop"?"the little grocer":"somebody\u2019s living room",inside:p,y:.36});let E=.36;if(o==="cafe"){let A=e-l/2+2.2,C=n-c/2+2.6;a.box(A,E+.5,C,1,1,4.2,"#6d5a44"),a.box(A,E+1.02,C,1.2,.08,4.4,"#e3dcc6"),i.solid(t,A,E+.53,C,1.2,1.06,4.4,{climbable:!1,kind:"counter"}),a.box(A,E+1.35,C-1.2,.6,.55,.7,"#8a9893"),a.box(A,E+1.66,C-1.2,.5,.08,.5,"#3f4a46"),a.cyl(A,E+1.2,C+.8,.3,.04,"#f1e8d2"),a.cyl(A,E+1.3,C+.8,.24,.14,"#e39a6e");for(let b=0;b<3;b++){let _=E+1.5+b*.55;a.box(e-l/2+d+.18,_,n-.5,.3,.05,3,"#8d7f67");for(let M=0;M<6;M++)a.cyl(e-l/2+d+.18,_+.17,n-1.75+M*.5,.1,.3,dn(s,["#d9544f","#e9c04b","#6f9a4f","#c7b2d9","#e39a6e"]))}Qd(i,t,e-l/2+d+.08,E+2.2,n+2.2,1.6,1.1,Math.PI/2,"#3f4a46","#4a4f4c"),[[e+1.2,n-1.6],[e+3.4,n+.6],[e+.4,n+1.4],[e+3.2,n-2]].forEach(([b,_],M)=>{a.cyl(b,E+.74,_,.55,.06,"#e3dcc6"),a.cyl(b,E+.36,_,.06,.72,"#4a4f4c"),a.cyl(b,E+.03,_,.3,.05,"#4a4f4c"),i.cylinderSolid(t,b,E,_,.55,.78,{climbable:!1,kind:"table"}),a.cyl(b,E+.8,_,.07,.07,"#f1e8d2"),M%2&&a.ball(b+.2,E+.82,_,.1,.05,.1,"#e39a6e");for(let L=0;L<2;L++){let I=M*1.3+L*Math.PI,U=b+Math.cos(I)*.95,H=_+Math.sin(I)*.95;a.box(U,E+.46,H,.42,.06,.42,"#8f5f4e",-I),a.box(U+Math.cos(I)*.18,E+.72,H+Math.sin(I)*.18,.06,.6,.42,"#8f5f4e",-I);for(let z of[-.16,.16])for(let q of[-.16,.16])a.box(U+z,E+.22,H+q,.04,.45,.04,"#4a4f4c");i.solid(t,U,E+.25,H,.45,.5,.45,{climbable:!1,kind:"chair"}),L===0&&M<3&&Ee(t,U,H,Math.atan2(b-U,_-H),"customer",E,"sit")}});for(let b=0;b<3;b++){let _=e-2+b*2.5;a.beam([_,h,n],[_,E+2.3,n],.015,"#4a4f4c"),a.add(lt.cone,_,E+2.15,n,.32,.3,.32,"#d9a53a")}a.add(lt.torus,e+l/2-1.2,E+.1,n+c/2-1.3,.45,.45,.45,"#b48c9c",Math.PI/2),a.cyl(e+l/2-1.2,E+.06,n+c/2-1.3,.4,.1,"#d3c7e0"),i.cylinderSolid(t,e+l/2-1.2,E,n+c/2-1.3,.5,.2,{climbable:!1,kind:"catbed"}),Ee(t,A+1.1,C+.4,-Math.PI/2,"barista",E),Ee(t,A+1.3,C-1.4,Math.PI/2,"customer",E),a.box(e,3.3,g+.2,4.6,.9,.14,"#8f5f4e"),a.box(e,3.3,g+.28,3.8,.5,.02,"#f1e8d2"),a.box(e,2.65,g+.6,l-1,.08,1.3,"#c9524a"),i.solid(t,e,2.65,g+.6,l-1,.08,1.3,{climbable:!1,kind:"awning"});for(let b=0;b<2;b++){let _=e+(b?3.2:-3.2),M=g+1.6;a.cyl(_,.72,M,.5,.05,"#e3dcc6"),a.cyl(_,.36,M,.05,.7,"#4a4f4c"),i.cylinderSolid(t,_,0,M,.5,.75,{climbable:!1,kind:"table"}),a.cyl(_,2.3,M,.06,2.6,"#f1e8d2"),a.add(lt.cone,_,3.5,M,1.5,.5,1.5,b?"#c9524a":"#e9c04b"),i.cylinderSolid(t,_,3.3,M,1.5,.3,{climbable:!1,kind:"parasol"})}}else if(o==="shop"){for(let R=0;R<2;R++){let b=e-1.5+R*3.2;a.box(b,E+.9,n-.3,.9,1.8,5.5,"#cbbfa3"),i.solid(t,b,E+.9,n-.3,.9,1.8,5.5,{climbable:!0,kind:"shelf"});for(let _=0;_<3;_++)for(let M of[-1,1]){let L=E+.5+_*.55;a.box(b+M*.5,L,n-.3,.1,.04,5.5,"#8d7f67");for(let I=0;I<10;I++){let U=dn(s,["#d9544f","#e9c04b","#4f7f96","#6f9a4f","#efe5cf","#e39a6e"]);I%3?a.cyl(b+M*.5,L+.14,n-2.9+I*.55,.1,.25,U):a.ball(b+M*.5,L+.12,n-2.9+I*.55,.13,.12,.13,U)}}}let A=e+l/2-2,C=n+c/2-2.2;a.box(A,E+.5,C,1.6,1,.8,"#8f5f4e"),a.box(A,E+1.03,C,1.7,.06,.9,"#e3dcc6"),a.box(A-.4,E+1.3,C,.4,.4,.4,"#4a4f4c"),i.solid(t,A,E+.55,C,1.7,1.1,.9,{climbable:!1,kind:"counter"}),Ee(t,A,C-1,Math.PI,"grocer",E),Ee(t,e-3.1,n+1,-Math.PI/2,"shopper",E),a.box(e-l/2+d+.6,E+.5,n-c/2+d+1.5,1.1,1,2.6,"#e9e3d2"),a.box(e-l/2+d+.6,E+1.02,n-c/2+d+1.5,1.1,.04,2.6,"#a9c3c9"),i.solid(t,e-l/2+d+.6,E+.5,n-c/2+d+1.5,1.1,1.04,2.6,{climbable:!1,kind:"freezer"});for(let R=0;R<3;R++)a.box(e+3.6,E+.15+R*.12,n+2.8,.5,.12,.4,"#d9a53a");a.box(e,3.3,g+.2,5.2,.9,.14,"#4f7f96"),a.box(e,3.3,g+.28,4.4,.5,.02,"#f1e8d2");for(let R=0;R<2;R++){let b=e-3.2+R*6.4,_=g+1;a.box(b,.45,_,1.6,.2,.9,"#a78a62"),a.box(b,.25,_,1.4,.4,.7,"#8d7f67");for(let M=0;M<10;M++)a.ball(b-.6+M%5*.3,.62,_-.2+Math.floor(M/5)*.4,.13,.12,.13,R?"#d9544f":"#6f9a4f");i.solid(t,b,.3,_,1.6,.6,.9,{climbable:!1,kind:"display"})}}else{a.box(e+1,E+.02,n+.5,3.5,.03,2.4,"#b48c9c"),a.box(e+1,E+.3,n+1.5,2.4,.6,.9,"#8ea48c"),a.box(e+1,E+.75,n+1.85,2.4,.5,.25,"#8ea48c");for(let _ of[-1,1])a.box(e+1+_*1.1,E+.5,n+1.5,.2,.4,.9,"#8ea48c");i.solid(t,e+1,E+.35,n+1.5,2.4,.7,.9,{climbable:!1,kind:"sofa"}),a.box(e+1,E+.25,n-.3,1,.5,.6,"#8d7f67"),a.box(e+1,E+.5,n-.3,.9,.04,.5,"#e3dcc6"),i.solid(t,e+1,E+.27,n-.3,1,.54,.6,{climbable:!1,kind:"table"}),a.box(e+1,E+.25,n-2.6,1.6,.5,.45,"#6d5a44"),a.box(e+1,E+1.05,n-2.6,1.5,.9,.06,"#2f3331"),a.box(e+1,E+1.05,n-2.6+.035,1.3,.7,.01,"#a9c3c9"),i.solid(t,e+1,E+.25,n-2.6,1.6,.5,.45,{climbable:!1,kind:"cabinet"});let A=e+3.6,C=n-.2;a.box(A,E+.3,C,.9,.6,.9,"#c88f6e"),a.box(A+.35,E+.75,C,.2,.5,.9,"#c88f6e"),i.solid(t,A,E+.35,C,.9,.7,.9,{climbable:!1,kind:"chair"}),a.box(e-l/2+d+.2,E+1,n-1,.35,2,2.2,"#8d7f67");for(let _=0;_<4;_++){let M=E+.3+_*.45;for(let L=0;L<7;L++)a.box(e-l/2+d+.2,M+.15,n-1.9+L*.3,.25,.3,.22,dn(s,["#d9544f","#4f7f96","#6f9a4f","#e9c04b","#c7b2d9"]))}i.solid(t,e-l/2+d+.2,E+1,n-1,.4,2,2.2,{climbable:!0,kind:"shelf"}),a.box(e-2.5,E+.45,n-c/2+d+.5,4,.9,1,"#cbbfa3"),a.box(e-2.5,E+.93,n-c/2+d+.5,4.1,.06,1.1,"#5f6b66"),a.box(e-3.5,E+1.1,n-c/2+d+.5,.8,.2,.6,"#e9e3d2"),a.box(e-2.5,E+2,n-c/2+d+.3,4,.7,.5,"#cbbfa3"),i.solid(t,e-2.5,E+.48,n-c/2+d+.5,4.1,.96,1.1,{climbable:!1,kind:"counter"}),a.box(e-1.2,E+1.1,n-c/2+d+.5,.5,.15,.5,"#6d7f8a"),a.cyl(e-1.6,E+1.1,n-c/2+d+.5,.14,.2,"#d9544f"),a.box(e-2,E+.72,n+1,1.5,.06,.9,"#e3dcc6");for(let _ of[-.65,.65])for(let M of[-.35,.35])a.box(e-2+_,E+.35,n+1+M,.06,.7,.06,"#8d7f67");i.solid(t,e-2,E+.38,n+1,1.5,.76,.9,{climbable:!1,kind:"table"});for(let _ of[-1,1])a.box(e-2+_*.5,E+.45,n+1.9,.4,.05,.4,"#8f5f4e"),a.box(e-2+_*.5,E+.7,n+2.1,.4,.55,.05,"#8f5f4e"),i.solid(t,e-2+_*.5,E+.3,n+2,.4,.6,.4,{climbable:!1,kind:"chair"});let R=e+l/2-1.6,b=n+c/2-1.9;a.box(R,E+.3,b,1.8,.4,2.4,"#8d7f67"),a.box(R,E+.55,b,1.7,.25,2.3,"#e9e3d2"),a.box(R,E+.6,b+.3,1.7,.22,1.6,dn(s,["#c9524a","#4f7f96","#b48c9c"])),a.box(R,E+.75,b-.9,1.4,.18,.5,"#f3ead6"),i.solid(t,R,E+.35,b,1.8,.7,2.4,{climbable:!1,kind:"bed"}),Ee(t,e-1.3,n+1.9,0,"resident",E),s()>.5&&Ee(t,e+1.9,n+1.5,Math.PI,"resident",E,"sit"),a.box(e+1,3.3,n,1.2,.1,1.2,"#e9e3d2"),a.beam([e+1,h,n],[e+1,E+2.5,n],.015,"#4a4f4c"),a.add(lt.cone,e+1,E+2.4,n,.5,.4,.5,"#e9c04b"),a.box(e-3.5,1.4,g+.8,.9,.9,.9,"#6f9a4f"),i.crate(t,e+3.6,.43,g+1.2,.86),i.pot(t,e-3.5,g+1.2,s,.9)}}function rf(i,t,e,n,s,r){let o=t.batch,a=16,l=14,c=5.2,h=dn(s,["#8a9893","#9fa89d","#b0a58f"]);o.box(e,.02,n,24,.1,24,"#b6ad99"),xr(t,e,n,24,24,.07),o.box(e-2,c/2,n,a,c,l,h);let d=i.solid(t,e-2,c/2,n,a,c,l,{kind:"wall",buildingId:r}),u={id:r,x:e-2,z:n,w:a,d:l,h:c,roofType:2,roofRise:0,wall:h,roofColor:"#7b8a86",cx:t.cx,cz:t.cz,kind:"roof",body:d};t.buildings.push(u);for(let g=0;g<7;g++)o.box(e-2-a/2+1+g*2.3,c/2,n+l/2+.05,.14,c,.12,"#6c7873");for(let g=0;g<3;g++){let m=e-2-5+g*5;o.box(m,1.9,n+l/2+.06,3.6,3.8,.1,g===1?"#5f6b66":"#8f5f4e"),o.box(m,1.9,n+l/2+.1,3.4,.1,.05,"#3f4a46")}for(let g=0;g<5;g++)o.box(e-2,c+.25*(g+.5),n,a-g*1.6,.25,l,g%2?"#74827e":"#7b8a86");o.box(e-2,c+1.4,n,4,.4,l-2,"#a9c3c9"),Rh(i,t,e+6.4,.4,n+6.5,e+6.4,c+.1,n-6.5,1.2,.12,"#6c7873"),o.box(e+7.2,c/2+.3,n,.08,c+.4,13.5,"#4a4f4c"),i.solid(t,e+7.2,c/2+.3,n,.08,c+.4,13.5,{climbable:!1,kind:"rail"});for(let g=0;g<6;g++){let m=e-8+g%3*1.5,p=n+10+Math.floor(g/3)*1.5,S=.4+g%3*.35;o.box(m,S/2,p,1.3,S,1.3,g%2?"#b89a70":"#c7a97b"),i.solid(t,m,S/2,p,1.3,S,1.3,{climbable:!1,kind:"pallet"})}let f=e+4,x=n+10;o.box(f,1.5,x,2.4,2.2,6,"#e9e3d2"),o.box(f,1.1,x+3.8,2.3,1.7,1.6,"#4f7f96"),o.box(f,.4,x+.5,2.5,.5,7.5,"#3f4a46");for(let g of[-1,1])for(let m of[-2.2,1.5,3.4])o.add(lt.cylinder,f+g*1.2,.45,x+m,.45,.3,.45,"#2f3331",0,0,Math.PI/2);i.solid(t,f,1.3,x+.5,2.5,2.6,7.5,{climbable:!1,kind:"car"}),Ee(t,e-6,n+7.8,0,"worker"),Ee(t,f-2,x+3,Math.PI/2,"driver"),t.landmarks.push({id:r,kind:"warehouse",x:e,z:n,radius:12,name:"the depot"}),i.lamp(t,e+10.5,n-10.5)}var kt=72,no=Object.freeze({offsets:[0,28.45,43.55],pavement:[28.45,43.55]}),Ia=Math.PI*2,w_=new D(0,1,0),of=new le,Ih=new We,yr=new D,af=new D,Pa=new D,La=new Ut;function io(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function fi(i,t,e=0,n=0){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^e^Math.imul(n,1274126177);return s=Math.imul(s^s>>>13,1274126177),(s^s>>>16)>>>0}function Bi(i){let t=i>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ms=new Je(1,1,1),eo=new _n(1,1,1,10),ps=new _n(.72,1,1,9),_r=new Pn(1,1,8),Lh=new hs(1,1),Dh=new hs(1,1),Ph=new _n(1,.72,1,9),Oi=new Ni(1,.12,5,16),lt=Object.freeze({box:ms,cylinder:eo,tapered:ps,cone:_r,sphere:Lh,softSphere:Dh,pot:Ph,torus:Oi}),zi=class{constructor(){this.p=[],this.n=[],this.c=[],this.i=[],this.count=0,this.items=[]}add(t,e,n,s,r,o,a,l,c=0,h=0,d=0){this.items.push({geometry:t,x:e,y:n,z:s,sx:r,sy:o,sz:a,rx:c,ry:h,rz:d}),yr.set(e,n,s),af.set(r,o,a),Ih.setFromEuler(new ke(c,h,d)),of.compose(yr,Ih,af),La.set(l);let u=t.attributes.position,f=t.attributes.normal,x=this.count;for(let g=0;g<u.count;g++)yr.fromBufferAttribute(u,g).applyMatrix4(of),this.p.push(yr.x,yr.y,yr.z),Pa.set(f.getX(g)/r,f.getY(g)/o,f.getZ(g)/a).applyQuaternion(Ih).normalize(),this.n.push(Pa.x,Pa.y,Pa.z),this.c.push(La.r,La.g,La.b);if(t.index)for(let g=0;g<t.index.count;g++)this.i.push(t.index.getX(g)+x);else for(let g=0;g<u.count;g++)this.i.push(g+x);return this.count+=u.count,this}box(t,e,n,s,r,o,a,l=0){return this.add(ms,t,e,n,s,r,o,a,0,l)}cyl(t,e,n,s,r,o,a=0,l=0){return this.add(eo,t,e,n,s,r,s,o,a,0,l)}ball(t,e,n,s,r,o,a,l=!1){return this.add(l?Dh:Lh,t,e,n,s,r,o,a)}beam(t,e,n,s){let r=new D(...t),o=new D(...e),a=o.clone().sub(r),l=new We().setFromUnitVectors(w_,a.clone().normalize()),c=new ke().setFromQuaternion(l);return this.add(eo,...r.add(o).multiplyScalar(.5).toArray(),n,a.length(),n,s,c.x,c.y,c.z)}geometry(){let t=new ye;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("normal",new Gt(this.n,3)),t.setAttribute("color",new Gt(this.c,3)),t.setIndex(this.i),t.computeBoundingSphere(),t.computeBoundingBox(),t}},lf=["#d6c4a6","#c9b79b","#b9c0ae","#aeb9b2","#d8cbb2","#c4b49a","#b7bfae","#cbb9a4","#c2c7b6","#d2c1a4"],ki=["#8a5a44","#96604a","#7b5140","#5c6b66","#65756d","#6f6252","#8a6a4c","#5a6870"],fn=["#6f8a52","#7d965c","#8a9f66","#62804f","#93a26b","#6b8757"],Xn=["#d9b76a","#d69a86","#e6d9b4","#b98a9a","#d9a85e"],cf=["Clover","Willow","Honey","Fern","Moss","Clementine","Juniper","Lavender","Pebble","Marigold","Chestnut","Meadow","Rosemary","Hazel","Poppy","Bramble"],hf=["Quarter","Gardens","Lane","Hill","Corner","Heights","Common","Terrace"];function Ua(i,t,e){let n=fi(Math.floor(i/2),Math.floor(t/2),e,71);return`${cf[n%cf.length]} ${hf[(n>>>8)%hf.length]}`}var Da=class{constructor(t,e){this.scene=t,this.seedText=e,this.seed=io(e),this.chunks=new Map,this.colliders=[],this.buildings=[],this.parks=[],this.water=[],this.jobs=[],this.grounds=[],this.landmarks=[],this.spatial=new Map,this.material=new Xe({vertexColors:!0,roughness:.98,metalness:0,flatShading:!0}),this.center="",this.radius=2,this.pending=[]}update(t,e=1){let n=Math.floor((t.x+kt/2)/kt),s=Math.floor((t.z+kt/2)/kt),r=`${n},${s}`;if(r!==this.center){this.center=r,this.pending=[];for(let a=n-this.radius;a<=n+this.radius;a++)for(let l=s-this.radius;l<=s+this.radius;l++)this.chunks.has(`${a},${l}`)||this.pending.push({x:a,z:l,d:(a-n)**2+(l-s)**2});this.pending.sort((a,l)=>a.d-l.d);for(let[a,l]of this.chunks)(Math.abs(l.cx-n)>this.radius+1||Math.abs(l.cz-s)>this.radius+1)&&this.removeChunk(a);this.refreshColliders()}let o=0;for(;this.pending.length&&o<e;){let{x:a,z:l}=this.pending.shift();this.chunks.has(`${a},${l}`)||(this.createChunk(a,l),o++)}return o&&this.refreshColliders(),o}refreshColliders(){this.colliders=[],this.buildings=[],this.parks=[],this.water=[],this.jobs=[],this.grounds=[],this.landmarks=[];for(let e of this.chunks.values())this.colliders.push(...e.colliders),this.buildings.push(...e.buildings),this.parks.push(...e.parks),this.water.push(...e.water),this.jobs.push(...e.jobs),this.grounds.push(...e.grounds),this.landmarks.push(...e.landmarks);let t=new Map;for(let e of this.colliders)for(let n=Math.floor(e.minX/8);n<=Math.floor(e.maxX/8);n++)for(let s=Math.floor(e.minZ/8);s<=Math.floor(e.maxZ/8);s++){let r=n+","+s,o=t.get(r);o||t.set(r,o=[]),o.push(e)}this.spatial=t}removeChunk(t){let e=this.chunks.get(t);e&&(this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.group&&this.scene.remove(e.group),this.chunks.delete(t))}dispose(){for(let t of this.chunks.keys())this.removeChunk(t);this.material.dispose()}solid(t,e,n,s,r,o,a,l={}){let c={shape:"box",minX:e-r/2,maxX:e+r/2,minY:n-o/2,maxY:n+o/2,minZ:s-a/2,maxZ:s+a/2,climbable:!0,...l};return t.colliders.push(c),c}cylinderSolid(t,e,n,s,r,o,a={}){let l={shape:"cylinder",x:e,z:s,r,minX:e-r,maxX:e+r,minY:n,maxY:n+o,minZ:s-r,maxZ:s+r,climbable:!1,...a};return t.colliders.push(l),l}ellipsoidSolid(t,e,n,s,r,o,a,l={}){let c={shape:"ellipsoid",x:e,y:n,z:s,rx:r,ry:o,rz:a,minX:e-r,maxX:e+r,minY:n-o,maxY:n+o,minZ:s-a,maxZ:s+a,climbable:!0,...l};return t.colliders.push(c),c}autoColliders(t,e){let n=t.colliders.filter(l=>l.shape!=="roof"),s=.27,r=new ke,o=new We,a=new D;for(let l of e){let{geometry:c,x:h,y:d,z:u,sx:f,sy:x,sz:g,rx:m,ry:p,rz:S}=l,v=c===Lh||c===Dh,y=c===eo||c===ps||c===Ph||c===_r;if(!v&&!y&&c!==ms&&c!==Oi)continue;let E=v||y||c===Oi?f*(c===Oi?1.12:1):f/2,A=v?x:c===Oi?x*.12:x/2,C=v||y||c===Oi?g*(c===Oi?1.12:1):g/2,R=Math.abs(m)<.05&&Math.abs(S)<.05;if(Math.max(E,C)*2<.05||v&&Math.max(f,g)<.25||c===_r&&f<.6||!R&&y&&f<.15)continue;let b,_,M,L,I,U;if(R&&Math.abs(p)<.02)b=h-E,_=h+E,M=d-A,L=d+A,I=u-C,U=u+C;else{o.setFromEuler(r.set(m,p,S)),b=M=I=1/0,_=L=U=-1/0;for(let X=0;X<8;X++)a.set(X&1?E:-E,X&2?A:-A,X&4?C:-C).applyQuaternion(o),b=Math.min(b,h+a.x),_=Math.max(_,h+a.x),M=Math.min(M,d+a.y),L=Math.max(L,d+a.y),I=Math.min(I,u+a.z),U=Math.max(U,u+a.z)}if(L<s||L-M<.05||_-b>20||U-I>20)continue;let H=!1;for(let X of n){let tt=X.auto?.02:.3;if(b>=X.minX-tt&&_<=X.maxX+tt&&M>=X.minY-tt&&L<=X.maxY+Math.min(tt,.12)&&I>=X.minZ-tt&&U<=X.maxZ+tt){H=!0;break}}if(H)continue;let z,q=n.find(X=>X.tree&&b<X.maxX&&_>X.minX&&M<X.maxY&&L>X.minY&&I<X.maxZ&&U>X.minZ)?.tree,O=q?{kind:"tree",tree:q,auto:!0}:{kind:"auto",auto:!0};c===_r&&R?z=this.ellipsoidSolid(t,h,d-A+x*.25,u,f,x*.75,g,{...O,climbable:!!q}):v&&R?z=this.ellipsoidSolid(t,h,d,u,f,x,g,{...O,climbable:!!q||d+x>1.1}):y&&R?z=this.cylinderSolid(t,h,d-A,u,Math.max(f,g),A*2,{...O,climbable:Math.max(f,g)>.3}):t.colliders.push(z={shape:"box",minX:b,maxX:_,minY:M,maxY:L,minZ:I,maxZ:U,climbable:L-M>.4,...O}),q&&z.shape==="ellipsoid"&&q.canopies.push(z),n.push(z)}}createChunk(t,e){let n=`${t},${e}`,s=Bi(fi(t,e,this.seed)),r={cx:t,cz:e,key:n,batch:new zi,colliders:[],buildings:[],parks:[],water:[],mesh:null,jobs:[],extras:[],grounds:[],landmarks:[],smoke:[],group:null,ticks:[]},o=t*kt,a=e*kt,l=["#93a86f","#9aae75","#8fa46a","#a0b27b"][fi(t,e,this.seed,4)%4];r.batch.box(o,-.2,a,kt+.05,.4,kt+.05,l);let c="#b9ae96",h="#cfc4ab";for(let u of[-1,1]){r.batch.box(o+u*32.5,.005,a,7,.08,kt,c),r.batch.box(o,.006,a+u*32.5,kt,.08,7,c);for(let f of[-1,1])r.batch.box(o+u*32.5+f*4.05,.055,a,1.05,.15,kt-9,h),r.batch.box(o,.056,a+u*32.5+f*4.05,kt-9,.15,1.05,h)}r.batch.box(o,.015,a,3,.07,58,"#b3a88f"),r.batch.box(o,.016,a,58,.07,3,"#b3a88f"),this.cars(r,s);for(let u=0;u<100;u++){let f=s()*68-34,x=(s()-.5)*5.4,g=u%2?o+32.5+x:o+f,m=u%2?a+f:a+32.5+x;r.batch.box(g,.052,m,.45+s()*.6,.018,.3+s()*.35,s()>.5?"#aaa08a":"#c4b99f",(s()-.5)*.2)}for(let u=0;u<4;u++){let f=u%2?16.5:-16.5,x=u<2?-16.5:16.5,g=o+f,m=a+x,p=Bi(fi(t*4+u,e,this.seed,901)),S=this.lotKind(t,e,u,p),v=`${n}:${u}`;S==="park"?this.makePark(r,g,m,p,u):S==="market"?tf(this,r,g,m,p,v):S==="works"?ef(this,r,g,m,p,v):S==="depot"?rf(this,r,g,m,p,v):S==="tower"?Ch(this,r,g,m,p,v,1):S==="spire"?Ch(this,r,g,m,p,v,1.6):S==="play"?nf(this,r,g,m,p,v):S==="cafe"||S==="shop"||S==="home"?sf(this,r,g,m,p,v,S):this.makeBuilding(r,g,m,p,v,t===0&&e===0?u:-1)}for(let u of[-1,1])this.tree(r,o+u*27.4,a+5,s,.65),this.tree(r,o-7,a+u*27.4,s,.65),this.lamp(r,o+u*27.2,a-27.2),s()>.35&&this.bench(r,o+u*27,a+14,u*Math.PI/2);t===0&&e===0?this.makeSpawn(r,s):s()>.65&&this.bunting(r,o-12,a,o+12,a,6.5),this.autoColliders(r,r.batch.items),this.buildExtras(r);let d=new Rt(r.batch.geometry(),this.material);d.castShadow=!0,d.receiveShadow=!0,d.name=`neighborhood-${n}`,r.mesh=d,r.batch=null,this.chunks.set(n,r),this.scene.add(d)}theme(t,e){if(t===0&&e===0)return"square";let n=fi(t,e,this.seed,77)%100;return n<34?"lanes":n<50?"market":n<64?"works":n<80?"towers":n<90?"play":"lanes"}lotKind(t,e,n,s){let r=this.theme(t,e),o=fi(t*4+n,e,this.seed,905)%100;return r==="square"?["building","market","cafe","park"][n]:r==="market"?["market","cafe","shop",o<50?"park":"home"][n]:r==="works"?["works","depot",o<40?"park":"building","building"][n]:r==="towers"?["tower","spire","tower",o<60?"park":"building"][n]:r==="play"?["play","park",o<50?"home":"building","building"][n]:o<20?"park":o<30?"home":o<34?"cafe":"building"}buildExtras(t){if(!t.extras.length&&!t.smoke.length)return;let e=new te;e.name=`extras-${t.key}`,t.group=e,this.scene.add(e);let n=s=>new Xe({color:s,roughness:.85,flatShading:!0});for(let s of t.extras)if(s.kind==="rollers"){let r=n("#9aa4a0"),o=new _n(.11,.11,.9,8);o.rotateZ(Math.PI/2),o.rotateY(Math.PI/2);let a=[];for(let c=0;c<s.count;c++){let h=new Rt(o,r);h.position.set(s.x-(s.count-1)/2*s.spacing+c*s.spacing,s.y,s.z),e.add(h),a.push(h)}let l=new Rt(new Je(.7,.5,.6),n("#c7a97b"));e.add(l),t.ticks.push(c=>{for(let h of a)h.rotation.x=c*3;l.position.set(s.x-3.2+c*.9%6.4,s.y+.36,s.z)})}else if(s.kind==="cog"){let r=new te;r.position.set(s.x,s.y,s.z),r.add(new Rt(new Ni(s.r,.14,6,14),n("#5f6b66")));for(let o=0;o<8;o++){let a=new Rt(new Je(.3,.3,.2),n("#5f6b66")),l=o/8*Math.PI*2;a.position.set(Math.cos(l)*(s.r+.15),Math.sin(l)*(s.r+.15),0),a.rotation.z=l,r.add(a)}for(let o=0;o<3;o++){let a=new Rt(new Je(s.r*2,.12,.1),n("#5f6b66"));a.rotation.z=o/3*Math.PI,r.add(a)}r.rotation.y=Math.PI/2,e.add(r),t.ticks.push(o=>{r.rotation.x=o*.6})}else if(s.kind==="beacon"){let r=new Xe({color:"#ff5a4a",emissive:"#ff3b2b",emissiveIntensity:1.2}),o=new Rt(new Ln(.22,8,6),r);o.position.set(s.x,s.y,s.z),e.add(o),t.ticks.push(a=>{let l=.6+.4*Math.sin(a*3);o.scale.setScalar(l),r.emissiveIntensity=.4+l})}else if(s.kind==="swing"){let r=new te;r.position.set(s.x,s.y,s.z);let o=new Rt(new _n(.025,.025,1.2,5),n("#8d8470"));o.position.y=-.6,r.add(o);let a=new Rt(new Ni(.4,.12,6,14),n("#2f3331"));a.position.y=-1.4,a.rotation.x=Math.PI/2,r.add(a),e.add(r),t.ticks.push(l=>{r.rotation.z=Math.sin(l*1.4)*.32})}for(let s of t.smoke){let r=new Xe({color:"#dcd8d0",transparent:!0,opacity:.5,roughness:1,depthWrite:!1}),o=[];for(let a=0;a<7;a++){let l=new Rt(lt.softSphere,r);e.add(l),o.push(l)}t.ticks.push(a=>{o.forEach((l,c)=>{let h=(a*.18+c/7)%1;l.position.set(s.x+Math.sin(c*2.1+a*.3)*(.3+h*1.5)+h*1.8,s.y+h*7.5,s.z+Math.cos(c*1.7)*.3+h*.8),l.scale.setScalar(.55+h*1.9)})})}}animate(t){for(let e of this.chunks.values())for(let n of e.ticks)n(t)}makeBuilding(t,e,n,s,r,o=-1){let a=t.batch,l=12.5+s()*7.5,c=12+s()*7.5,h=2+Math.floor(s()*3),d=2.65+s()*.55,u=h*d+.4,f=lf[Math.floor(s()*lf.length)],x=ki[Math.floor(s()*ki.length)],g=Math.floor(s()*4);o===0&&(l=15+s()*3,c=13+s()*3,h=2+Math.floor(s()*2),u=h*3+.3,f=["#c9a684","#d2b795","#c4a083","#d6c1a0"][Math.floor(s()*4)],x=ki[Math.floor(s()*3)],g=0),o===1&&(l=14+s()*4,c=13+s()*3,u=6.5+s()*1.5,h=2,f=["#d8cbb2","#d2c5aa","#cbcbb4","#d6c4a4"][Math.floor(s()*4)],x=ki[3+Math.floor(s()*3)],g=2),o===2&&(l=14+s()*3,c=14+s()*3,u=9+s()*2,h=3,f=["#aeb9b2","#b3c0bc","#b9c0ae","#a8b7ab"][Math.floor(s()*4)],x=ki[Math.floor(s()*ki.length)],g=3),e+=(s()-.5)*1.6,n+=(s()-.5)*1.6;let m=s()>.5,p=g===0?2.4+s()*2:g===1?2.5+s()*1.7:0,S={id:r,x:e,z:n,w:l,d:c,h:u,roofType:g,roofRise:p,ridgeX:m,wall:f,roofColor:x,cx:t.cx,cz:t.cz,kind:"roof"};t.buildings.push(S);let v=this.solid(t,e,u/2,n,l,u,c,{buildingId:r,building:S,kind:"wall"});S.body=v,g<2&&t.colliders.push({shape:"roof",building:S,kind:"roof",climbable:!1,minX:e-l/2-.55,maxX:e+l/2+.55,minY:u,maxY:u+p,minZ:n-c/2-.55,maxZ:n+c/2+.55}),a.box(e,.18,n,l+.35,.45,c+.35,"#b8b6a0"),a.box(e,u/2,n,l,u,c,f),a.box(e,u-.12,n,l+.38,.25,c+.38,"#e8dfc4");let y="#ede5cd",E="#647e78",A=x;for(let M=1;M<h;M++)s()>.3&&a.box(e,M*d+.25,n,l+.1,.11,c+.1,"#d7d2b7");if(s()>.35)for(let M of[-1,1])for(let L of[-1,1])for(let I=.7;I<u-.5;I+=.85)a.box(e+M*(l/2-.06),I,n+L*(c/2-.06),.56,.37,.56,"#ded6bc");let C=o>=0?o===2?1:0:Math.floor(s()*4),R=(s()-.5)*l*.28;for(let M=0;M<4;M++){let L=M*Math.PI/2,I=Math.sin(L),U=Math.cos(L),H=U,z=-I,q=M%2?c:l,O=M%2?l/2:c/2,X=Math.max(2,Math.floor(q/3.5));for(let tt=0;tt<h;tt++)for(let rt=0;rt<X;rt++){let wt=(rt-(X-1)/2)*(q/(X+.45));if(M===C&&tt===0&&Math.abs(wt-R)<2||s()<.07)continue;let Et=e+I*(O+.055)+H*wt,Y=n+U*(O+.055)+z*wt,et=tt*d+1.65,ct=1.12+s()*.32,ot=1.5+s()*.24,Ct=s()>.82;if(a.box(Et,et,Y,ct+.24,ot+.23,.16,y,L),a.box(Et+I*.1,et,Y+U*.1,ct,ot,.06,Ct?"#dfcf97":E,L),a.box(Et+I*.15,et,Y+U*.15,.065,ot,.06,y,L),a.box(Et+I*.15,et+.05,Y+U*.15,ct,.065,.06,y,L),a.box(Et+I*.13,et-ot/2-.1,Y+U*.13,ct+.42,.16,.37,"#ded5bb",L),this.solid(t,Et+I*.13,et-ot/2-.1,Y+U*.13,M%2?.37:ct+.42,.16,M%2?ct+.42:.37,{climbable:!1,kind:"sill"}),s()>.38)for(let Tt of[-1,1]){a.box(Et+H*Tt*(ct/2+.3),et,Y+z*Tt*(ct/2+.3),.39,ot+.1,.12,A,L);for(let Lt=0;Lt<4;Lt++)a.box(Et+H*Tt*(ct/2+.3)+I*.075,et-.5+Lt*.32,Y+z*Tt*(ct/2+.3)+U*.075,.32,.045,.045,"#a5ad91",L)}if(s()>.76){a.box(Et+I*.28,et-ot/2-.13,Y+U*.28,ct+.15,.27,.47,"#a78060",L);for(let Tt=0;Tt<4;Tt++){let Lt=(Tt-1.5)*.29;a.ball(Et+H*Lt+I*.3,et-ot/2+.1,Y+z*Lt+U*.3,.22,.2,.22,fn[Tt%fn.length]),a.ball(Et+H*Lt+I*.3,et-ot/2+.25,Y+z*Lt+U*.3,.105,.1,.105,Xn[Math.floor(s()*Xn.length)])}}}}{let M=C*Math.PI/2,L=Math.sin(M),I=Math.cos(M),U=I,H=-L,z=C%2?l/2:c/2,q=e+L*(z+.1)+U*R,O=n+I*(z+.1)+H*R;if(a.box(q,1.25,O,1.75,2.5,.2,y,M),a.box(q+L*.12,1.2,O+I*.12,1.4,2.35,.08,"#5d796a",M),a.box(q+L*.18,1.65,O+I*.18,.95,.85,.04,"#9aaf98",M),a.ball(q+L*.23+U*.43,1.05,O+I*.23+H*.43,.065,.065,.065,"#d5b773"),a.box(q+L*.45,.14,O+I*.45,2.15,.25,.95,"#cdc7ae",M),this.solid(t,q+L*.35,.12,O+I*.35,C%2?.8:2.1,.24,C%2?2.1:.8,{climbable:!1}),s()>.4){let X=ki[Math.floor(s()*ki.length)];for(let tt=0;tt<8;tt++){let rt=(tt-3.5)*.38;a.add(ms,q+U*rt+L*.65,2.85,O+H*rt+I*.65,.38,.1,1.65,tt%2?"#eee4c8":X,.17,M),a.box(q+U*rt+L*1.43,2.62,O+H*rt+I*1.43,.38,.28,.1,tt%2?"#eee4c8":X,M)}this.solid(t,q+L*.7,2.88,O+I*.7,C%2?1.5:3.04,.1,C%2?3.04:1.5,{climbable:!1,kind:"awning"})}this.pot(t,q+U*1.45+L*.5,O+H*1.45+I*.5,s,.7)}if(s()>.38||o===0){let M=C,L=M*Math.PI/2,I=Math.sin(L),U=Math.cos(L),H=U,z=-I,q=M%2?l/2:c/2,O=d+.38,X=1.8,tt=e+I*(q+.6)+H*X,rt=n+U*(q+.6)+z*X,wt=M%2?1.5:3.7,Et=M%2?3.7:1.5;a.box(tt,O,rt,wt,.23,Et,"#c6bea1"),this.solid(t,tt,O,rt,wt,.23,Et,{climbable:!1});for(let Y of[-1,1]){a.box(tt+I*.68+H*Y*1.65,O+.55,rt+U*.68+z*Y*1.65,M%2?.08:3.5,.08,M%2?3.5:.08,"#667b68");for(let et=0;et<7;et++){let ct=(et-3)*.52;a.box(tt+I*.68+H*ct,O+.3,rt+U*.68+z*ct,.055,.55,.055,"#667b68")}}this.pot(t,tt+H*1.2,rt+z*1.2,s,.5,O+.13)}if(g===0?this.gable(t,S,p,x,m):g===1?this.hip(t,S,p,x):g===2?this.flatRoof(t,S,s):this.steppedRoof(t,S,s),g<2&&s()>.2){let M=e+(s()-.5)*l*.55,L=n+(s()-.5)*c*.55,I=this.roofHeight(S,M,L);a.box(M,I+.8,L,1.05,1.9,1.05,"#c4aa8b"),this.solid(t,M,(I-.15+I+1.95)/2,L,1.05,2.1,1.05,{kind:"chimney"}),a.box(M,I+1.8,L,1.3,.22,1.3,"#ded0b1"),a.box(M,I+1.93,L,.7,.04,.7,"#6d7060");for(let U=.3;U<1.7;U+=.38)a.box(M,I+U,L+.532,1.05,.035,.015,"#b3977a")}if(s()>.43){let M=Math.floor(s()*4),L=M*Math.PI/2,I=Math.sin(L),U=Math.cos(L),H=M%2?l/2:c/2,z=(s()-.5)*5,q=e+I*(H+.14)+U*z,O=n+U*(H+.14)-I*z;for(let X=0;X<u*3;X++){let tt=.3+X*.32,rt=Math.sin(X*1.8)*.42;a.ball(q+U*rt,tt,O-I*rt,.3+s()*.24,.28,.3+s()*.24,fn[X%fn.length])}}let b=e-l/2-.8,_=n+c*.22;s()>.3&&(this.crate(t,b,.43,_,.86),s()>.5&&this.crate(t,b,1.23,_,.76),this.crate(t,b-.05,.36,_+1,.72)),this.pot(t,e+l/2+.7,n+c/2-1,s,.85);for(let M=0;M<6;M++){let L=e-l/2+1+M*(l-2)/5;Math.abs(L-(e+R))<1.5&&C===0||(a.ball(L,.28,n+c/2+1.1,.55,.38,.5,fn[Math.floor(s()*fn.length)]),s()>.4&&a.ball(L,.61,n+c/2+1.1,.14,.13,.14,Xn[Math.floor(s()*Xn.length)]))}}roofHeight(t,e,n){if(e<t.x-t.w/2-.55||e>t.x+t.w/2+.55||n<t.z-t.d/2-.55||n>t.z+t.d/2+.55)return-1/0;if(t.roofType===0){let s=t.ridgeX?n-t.z:e-t.x,r=(t.ridgeX?t.d:t.w)/2+.55;return t.h+t.roofRise*Math.max(0,1-Math.abs(s)/r)}if(t.roofType===1){let s=1-Math.abs(e-t.x)/(t.w/2+.55),r=1-Math.abs(n-t.z)/(t.d/2+.55);return t.h+t.roofRise*Math.min(1,Math.max(0,Math.min(s,r)/.84))}return t.upper&&Math.abs(e-t.upper.x)<t.upper.w/2&&Math.abs(n-t.upper.z)<t.upper.d/2?t.upper.h:t.h}gable(t,e,n,s,r){let o=e.w/2+.55,a=e.d/2+.55,l=[[-o,0,-a],[o,0,-a],[o,0,a],[-o,0,a],[0,n,-a],[0,n,a]];r&&(l=l.map(([y,E,A])=>[A,E,y]));let c=[[0,3,5],[0,5,4],[4,5,2],[4,2,1]],h=[];for(let y of c)for(let E of y)h.push(...l[E]);let d=new ye;d.setAttribute("position",new Gt(h,3)),d.setAttribute("normal",new Gt(new Float32Array(h.length),3)),d.computeVertexNormals();let u=d.clone(),f=u.index,x=u.attributes.position.array;for(let y=0;y<x.length;y+=9)for(let E=0;E<3;E++){let A=x[y+E];x[y+E]=x[y+6+E],x[y+6+E]=A}u.computeVertexNormals(),t.batch.add(d,e.x,e.h,e.z,1,1,1,s),t.batch.add(u,e.x,e.h,e.z,1,1,1,s),d.dispose(),u.dispose();let g=e.wall;for(let y of[-1,1]){let E=r?[y*o,0,-a,y*o,0,a,y*o,n,0]:[-o,0,y*a,o,0,y*a,0,n,y*a],A=new ye;A.setAttribute("position",new Gt(E,3)),A.setAttribute("normal",new Gt(new Float32Array(9),3)),A.computeVertexNormals(),t.batch.add(A,e.x,e.h-.02,e.z,1,1,1,g);let C=A.clone(),R=C.attributes.position.array;for(let b=0;b<3;b++){let _=R[b];R[b]=R[6+b],R[6+b]=_}C.computeVertexNormals(),t.batch.add(C,e.x,e.h-.02,e.z,1,1,1,g),A.dispose(),C.dispose()}let m=Math.atan2(n,r?a:o),p=Math.hypot(n,r?a:o),S=new Ut(s).multiplyScalar(1.075),v=Math.floor((r?o:a)*2/1.05);for(let y=0;y<=v;y++){let E=(y/v*2-1)*(r?o:a);for(let A of[-1,1])r?t.batch.add(ms,e.x+E,e.h+n/2+.045,e.z+A*a/2,.045,.045,p,S,A*m,0,0):t.batch.add(ms,e.x+A*o/2,e.h+n/2+.045,e.z+E,p,.045,.045,S,0,0,-A*m)}r?t.batch.cyl(e.x,e.h+n+.04,e.z,.13,e.w+1.25,s,0,Math.PI/2):t.batch.cyl(e.x,e.h+n+.04,e.z,.13,e.d+1.25,s,Math.PI/2)}hip(t,e,n,s){let r=e.w/2+.55,o=e.d/2+.55,a=r*.16,l=o*.16,c=[[-r,0,-o],[r,0,-o],[r,0,o],[-r,0,o],[-a,n,-l],[a,n,-l],[a,n,l],[-a,n,l]],h=[[0,4,5],[0,5,1],[1,5,6],[1,6,2],[2,6,7],[2,7,3],[3,7,4],[3,4,0],[4,7,6],[4,6,5]],d=[];for(let g of h)for(let m of g)d.push(...c[m]);let u=new ye;u.setAttribute("position",new Gt(d,3)),u.setAttribute("normal",new Gt(new Float32Array(d.length),3)),u.computeVertexNormals(),t.batch.add(u,e.x,e.h,e.z,1,1,1,s);let f=u.clone(),x=f.attributes.position.array;for(let g=0;g<x.length;g+=9)for(let m=0;m<3;m++){let p=x[g+m];x[g+m]=x[g+6+m],x[g+6+m]=p}f.computeVertexNormals(),t.batch.add(f,e.x,e.h,e.z,1,1,1,s),u.dispose(),f.dispose();for(let g of[-1,1])for(let m of[-1,1])t.batch.beam([e.x+g*r,e.h,e.z+m*o],[e.x+g*a,e.h+n+.03,e.z+m*l],.095,"#a89779")}flatRoof(t,e,n){let{x:s,z:r,w:o,d:a,h:l}=e,c="#d9d3b8";t.batch.box(s,l+.04,r,o-.3,.1,a-.3,"#b9bca3");for(let u of[-1,1])t.batch.box(s+u*(o/2-.12),l+.32,r,.26,.6,a,c),t.batch.box(s,l+.32,r+u*(a/2-.12),o,.6,.26,c),this.solid(t,s+u*(o/2-.12),l+.3,r,.26,.6,a,{climbable:!1}),this.solid(t,s,l+.3,r+u*(a/2-.12),o,.6,.26,{climbable:!1});if(n()>.35){let u=s-o*.22,f=r-a*.2,x=4.5,g=3.6;for(let m of[-1,1])for(let p of[-1,1])t.batch.box(u+m*x/2,l+1.35,f+p*g/2,.16,2.7,.16,"#a39370"),this.solid(t,u+m*x/2,l+1.35,f+p*g/2,.16,2.7,.16,{kind:"post"});for(let m=0;m<7;m++)t.batch.box(u-x/2+m*x/6,l+2.75,f,.14,.18,g+.5,"#b4a17b");this.solid(t,u,l+2.78,f,x+.14,.18,g+.5,{climbable:!1,kind:"pergola"}),this.bench(t,u,f,0,l),this.pot(t,u+x/2+.6,f+g/2,n,.8,l)}let h=s+o*.28,d=r-a*.26;t.batch.add(ps,h,l+.75,d,.75,1.5,.75,"#8a9c8b"),t.batch.add(Oi,h,l+1.3,d,.73,.73,.73,"#6d8273",Math.PI/2),this.solid(t,h,l+.75,d,1.4,1.5,1.4,{climbable:!1});for(let u=0;u<3;u++)this.pot(t,s-o*.3+u*1.4,r+a*.31,n,.6,l);if(n()>.45){let u=r+a*.16;t.batch.beam([s-3,l+1.8,u],[s+3,l+1.8,u],.025,"#9b9479");for(let f of[-1,1])t.batch.box(s+f*3,l+.9,u,.07,1.8,.07,"#a29475");for(let f=0;f<4;f++)t.batch.box(s-2+f*1.25,l+1.28,u,.85,1.02,.035,["#e9dfc3","#b7c7bc","#d5af94","#e4d6ad"][f],.06)}}steppedRoof(t,e,n){let s=e.w*.64,r=e.d*.65,o=2.8+n()*1.5,a=e.x-e.w*.12,l=e.z-e.d*.1;t.batch.box(a,e.h+o/2,l,s,o,r,e.wall),this.solid(t,a,e.h+(o+.21)/2,l,s,o+.21,r,{buildingId:e.id,building:e,kind:"wall"}),t.batch.box(a,e.h+o,l,s+.35,.25,r+.35,"#e4dac0"),t.batch.box(a,e.h+o+.15,l,s-.3,.12,r-.3,"#aeb69b");for(let c of[-1,1])t.batch.box(a+c*s/2,e.h+1.5,l,.12,1.5,1.5,"#ece2c7"),t.batch.box(a+c*(s/2+.08),e.h+1.5,l,.05,1.25,1.25,"#71897d");for(let c=0;c<3;c++)this.pot(t,e.x+e.w*.32,e.z-r/2+c*1.7,n,.7,e.h);e.upper={x:a,z:l,w:s,d:r,h:e.h+o+.21}}crate(t,e,n,s,r){this.solid(t,e,n,s,r,r,r,{climbable:!1}),t.batch.box(e,n,s,r,r,r,"#b99b70");for(let o of[-1,1])t.batch.box(e+o*r*.42,n,s+r*.51,r*.1,r,.055,"#d0b18a"),t.batch.box(e,n+o*r*.42,s+r*.51,r,r*.1,.055,"#d0b18a"),t.batch.box(e+r*.51,n,s+o*r*.42,.055,r,r*.1,"#d0b18a");t.batch.add(ms,e,n,s+r*.53,r*.1,r*1.1,.055,"#c9aa80",0,0,-.75)}pot(t,e,n,s,r=1,o=0){this.cylinderSolid(t,e,o,n,.5*r,1.3*r,{kind:"pot"}),t.batch.add(Ph,e,o+.35*r,n,.46*r,.7*r,.46*r,"#ba8b68"),t.batch.add(eo,e,o+.69*r,n,.48*r,.11*r,.48*r,"#caa17d"),t.batch.ball(e,o+1.02*r,n,.55*r,.55*r,.55*r,fn[Math.floor(s()*fn.length)]),s()>.5&&t.batch.ball(e+.15*r,o+1.4*r,n,.16*r,.13*r,.16*r,Xn[Math.floor(s()*Xn.length)])}tree(t,e,n,s,r=1,o=0){let a=(3.9+s()*1.4)*Math.pow(r,.55),l=fn[Math.floor(s()*fn.length)];t.batch.add(ps,e,o+a*.43,n,.27*r,a*.86,.27*r,"#9b8965");let c={x:e,z:n,canopies:[]},h=(u,f,x,g,m,p)=>c.canopies.push(this.ellipsoidSolid(t,u,f,x,g,m,p,{tree:c,kind:"tree"}));if(s()>.82){for(let u=0;u<3;u++)t.batch.add(_r,e,o+a*.6+u*a*.23,n,(1.5-u*.28)*r,a*.65,(1.5-u*.28)*r,l);h(e,o+a*.78,n,1.05*r,a*.42,1.05*r)}else t.batch.beam([e,o+a*.5,n],[e+.8*r,o+a*.88,n+.3*r],.13*r,"#9b8965"),t.batch.ball(e,o+a,n,2.15*r,2.1*r,1.95*r,l,!0),t.batch.ball(e-1.15*r,o+a*.9,n+.3*r,1.45*r,1.35*r,1.5*r,l),t.batch.ball(e+.95*r,o+a*1.07,n-.45*r,1.45*r,1.4*r,1.45*r,fn[(fn.indexOf(l)+1)%fn.length]),h(e,o+a,n,2.15*r,2.1*r,1.95*r),h(e-1.15*r,o+a*.9,n+.3*r,1.45*r,1.35*r,1.5*r),h(e+.95*r,o+a*1.07,n-.45*r,1.45*r,1.4*r,1.45*r);let d=Math.max(...c.canopies.map(u=>u.y+u.ry));this.cylinderSolid(t,e,o,n,.27*r,d-.05-o,{climbable:!0,tree:c,kind:"trunk"})}bench(t,e,n,s=0,r=0){let o=t.batch,a=Math.cos(s),l=Math.sin(s),c=(h,d)=>[e+h*a+d*l,n-h*l+d*a];for(let h=0;h<4;h++){let d=c(0,(h-1.5)*.18);o.box(d[0],r+.67,d[1],2.6,.12,.15,"#b49b73",s)}for(let h of[-1,1]){let d=c(h*1.02,0);o.box(d[0],r+.34,d[1],.13,.65,.65,"#73816a",s),o.box(d[0],r+.95,d[1]+.3,.12,1.1,.12,"#73816a",s)}for(let h=0;h<3;h++){let d=c(0,.32);o.box(d[0],r+.9+h*.19,d[1],2.6,.13,.1,"#b49b73",s)}this.solid(t,e,r+.64,n,Math.abs(a)*2.6+Math.abs(l)*.75,.18,Math.abs(l)*2.6+Math.abs(a)*.75,{climbable:!1,kind:"bench"})}lamp(t,e,n){this.cylinderSolid(t,e,0,n,.14,3.83,{climbable:!0,kind:"lamp"}),t.batch.add(ps,e,1.7,n,.11,3.4,.11,"#667b63"),t.batch.cyl(e,.15,n,.25,.3,"#78866b"),t.batch.box(e,3.5,n,.46,.65,.46,"#eee0ae"),t.batch.add(_r,e,3.94,n,.43,.36,.43,"#657b62");for(let s of[-1,1])for(let r of[-1,1])t.batch.box(e+s*.23,3.5,n+r*.23,.045,.7,.045,"#667b63")}bunting(t,e,n,s,r,o){for(let[l,c]of[[e,n],[s,r]])t.batch.add(ps,l,o/2,c,.09,o,.09,"#a09270"),t.batch.ball(l,o+.08,c,.13,.13,.13,"#b4a37d"),this.cylinderSolid(t,l,0,c,.1,o+.2,{kind:"pole",walkable:!1});let a=[e,o,n];for(let l=1;l<=14;l++){let c=l/14,h=e+(s-e)*c,d=n+(r-n)*c,u=o-Math.sin(c*Math.PI)*1.2;if(t.batch.beam(a,[h,u,d],.024,"#a39778"),a=[h,u,d],l%2===0){let f=[h,u-.04,d,h+.52,u-.08,d,h+.22,u-.75,d];for(let x of[!1,!0]){let g=new ye;g.setAttribute("position",new Gt(x?[...f.slice(6,9),...f.slice(3,6),...f.slice(0,3)]:f,3)),g.setAttribute("normal",new Gt(new Float32Array(9),3)),g.computeVertexNormals(),t.batch.add(g,0,0,0,1,1,1,["#c88f6e","#e1c780","#91a991","#c5b2a0"][l/2%4]),g.dispose()}}}}makePark(t,e,n,s,r){let o=t.batch,a=`park:${t.key}:${r}`;t.parks.push({id:a,x:e,z:n,r:10,cx:t.cx,cz:t.cz}),o.box(e,.025,n,24,.1,24,"#8fa66b"),o.box(e,.085,n,3.2,.08,25,"#c2b79d"),o.box(e,.086,n,25,.08,3.2,"#c2b79d");let l=e+4.5,c=n-4.3,h=3.4+s()*1.2;o.cyl(l,.01,c,h,.1,"#8ebbb0"),o.cyl(l,.047,c,h-.25,.03,"#a1c9ba"),t.water.push({x:l,z:c,r:h});for(let d=0;d<18;d++){let u=d/18*Ia,f=l+Math.cos(u)*(h+.13),x=c+Math.sin(u)*(h+.13);o.ball(f,.21,x,.52,.28,.45,d%3?"#c5c6a8":"#d7d3b6"),this.solid(t,f,.2,x,.7,.4,.65,{climbable:!1})}for(let d=0;d<5;d++){let u=s()*Ia,f=s()*h*.75,x=l+Math.cos(u)*f,g=c+Math.sin(u)*f;o.cyl(x,.14,g,.35,.025,"#82a67c"),d%2===0&&o.ball(x,.24,g,.12,.12,.12,"#e5c4b0")}for(let d=0;d<11;d++){let u=d/10,f=c-h+.3+u*(h*2-.6),x=.22+Math.sin(u*Math.PI)*.42;o.box(l,x,f,1.6,.15,.58,"#c3ac83"),this.solid(t,l,x,f,1.6,.15,.58,{climbable:!1})}for(let d of[-1,1])for(let u=0;u<4;u++){let f=u/3,x=c-h+.4+f*(h*2-.8),g=.55+Math.sin(f*Math.PI)*.42;o.box(l+d*.8,g,x,.08,.75,.08,"#a79570")}this.tree(t,e-6,n-6,s,1.35),this.tree(t,e+7,n+7,s,1.1),this.tree(t,e-7,n+6,s,.9),this.bench(t,e-4.5,n+2.2,Math.PI/2),this.bench(t,e+3,n+7,0),this.lamp(t,e-2.3,n+8.5);for(let d=0;d<26;d++){let u=e-9+s()*5,f=n-1+s()*10;o.ball(u,.2,f,.18,.23,.18,"#86a269"),o.ball(u,.42,f,.14,.12,.14,Xn[Math.floor(s()*Xn.length)])}for(let d=0;d<6;d++)o.box(e-10+d*1.6,.5,n+11,1.35,.85,.75,"#8fa873"),this.solid(t,e-10+d*1.6,.43,n+11,1.35,.86,.75,{climbable:!1})}cars(t,e){let n=t.cx*kt,s=t.cz*kt,r=["#b7c4c9","#c9b8a2","#8a9aa6","#a8b59a","#d2c7b4","#7c7f86","#b48c7a","#9fb3a0"];for(let o of[-1,1])for(let a of["x","z"]){let l=e()<.25?0:1+Math.floor(e()*2.6),c=-24+e()*6;for(let h=0;h<l&&c<23;h++){let d=a==="x",u=d?n+o*30.15:n+c,f=d?s+c:s+o*30.15;this.car(t,u,f,d,r[Math.floor(e()*r.length)],e),c+=5.2+e()*7}}}car(t,e,n,s,r,o){let a=t.batch,l=3.9,c=1.7,h=s?0:Math.PI/2,d=(y,E)=>s?[E,y]:[y,E],[u,f]=d(l,c),[x,g]=d(l*.52,c-.22),m=(o()-.5)*.3,p=s?e:e+m,S=s?n+m:n;a.box(e,.62,n,u,.62,f,r),a.box(e,.36,n,u-.1,.14,f-.1,"#4f5551"),a.box(p,1.2,S,x,.54,g,r);let v="#5f7579";for(let y of[-1,1]){s?a.box(p+y*(g/2-0),1.23,S,.05,.36,x-.5,v):a.box(p,1.23,S+y*(g/2),x-.5,.36,.05,v);let[E,A]=d(.08,c-.5);s?a.box(p,1.23,S+y*x/2,A,.4,E,v):a.box(p+y*x/2,1.23,S,E,.4,A,v);let[C,R]=d(.08,.3);for(let b of[-1,1]){let _=s?e+y*.55:e+b*(l/2),M=s?n+b*(l/2):n+y*.55;a.box(_,.68,M,C,.16,R,b===1?"#ecd9a6":"#b8604f")}}for(let y of[-1,1])for(let E of[-1,1]){let A=s?e+y*(c/2-.02):e+E*1.25,C=s?n+E*1.25:n+y*(c/2-.02);s?a.cyl(A,.33,C,.33,.24,"#30302c",0,Math.PI/2):a.cyl(A,.33,C,.33,.24,"#30302c",Math.PI/2,0),s?a.cyl(A+y*.02,.33,C,.17,.26,"#a9aba2",0,Math.PI/2):a.cyl(A,.33,C+y*.02,.17,.26,"#a9aba2",Math.PI/2,0)}this.solid(t,e,.48,n,u,.95,f,{kind:"car"}),this.solid(t,p,1.22,S,x,.54,g,{kind:"car"})}makeSpawn(t,e){let n=t.batch;n.cyl(0,.045,3,6.5,.1,"#c2b79d"),n.cyl(0,.105,3,5.8,.025,"#cfc4aa");for(let o=0;o<22;o++){let a=o/22*Ia;n.box(Math.cos(a)*6.1,.13,3+Math.sin(a)*6.1,.65,.035,.38,"#cbc8aa",-a)}let s=-3.8,r=4.5;n.cyl(s,.25,r,1.35,.45,"#c4c5a8"),n.cyl(s,.49,r,1.15,.08,"#a8bca6"),n.add(ps,s,.95,r,.25,1.1,.25,"#c9c9ad"),n.cyl(s,1.48,r,.7,.2,"#d7d3b6"),n.ball(s,1.67,r,.18,.2,.18,"#c1c5a5"),this.cylinderSolid(t,s,0,r,1.35,.53,{climbable:!1,kind:"fountain"}),this.cylinderSolid(t,s,.53,r,.27,.85,{climbable:!1,kind:"fountain"}),this.cylinderSolid(t,s,1.38,r,.7,.2,{climbable:!1,kind:"fountain"}),this.bench(t,3.8,6.5,-.4),this.pot(t,4.5,1,e,1),this.tree(t,-7.5,-4.5,e,.9),this.bunting(t,-12,-6,12,-6,6.2);for(let o=0;o<8;o++){let a=e()*Ia,l=7+e()*2;n.ball(Math.cos(a)*l,.16,3+Math.sin(a)*l,.2,.18,.2,"#91ab70"),n.ball(Math.cos(a)*l,.34,3+Math.sin(a)*l,.12,.12,.12,Xn[o%Xn.length])}}inWater(t,e){return this.water.find(n=>(t-n.x)**2+(e-n.z)**2<n.r*n.r)}groundHeight(t,e){for(let c of this.grounds)if(t>=c.minX&&t<=c.maxX&&e>=c.minZ&&e<=c.maxZ)return c.y;let n=t-Math.round(t/kt)*kt,s=e-Math.round(e/kt)*kt,r=Math.abs(n),o=Math.abs(s),a=c=>Math.abs(c-28.45)<.525||Math.abs(c-35.45)<.525;if(a(r)&&o<=31.5||a(o)&&r<=31.5)return .13;let l=0;for(let c of this.parks){let h=Math.abs(t-c.x),d=Math.abs(e-c.z);if(h<12&&d<12){if(h<1.6&&d<12.5||d<1.6&&h<12.5)return .125;l=.075;break}}if(l)return l;if(Math.abs(t)<36&&Math.abs(e)<36){let c=Math.hypot(t,e-3);if(c<5.8)return .1175;if(c<6.5)return .095}return r<1.5&&o<29||o<1.5&&r<29?.05:r>29&&r<=36||o>29&&o<=36?.045:0}};var gs=Un.damp,vr=Un.clamp;function E_(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128);for(let n=0;n<2600;n++){let s=Math.random()*.09;t.fillStyle=`rgba(70,45,25,${s})`,t.fillRect(Math.random()*128,Math.random()*128,1+Math.random()*2,1)}let e=new di(i);return e.wrapS=e.wrapT=ls,e.repeat.set(2,2),e}var Na=class{constructor(t,e=1){this.size=e,this.root=new te,this.root.scale.setScalar(e),this.model=new te,this.root.add(this.model),t.add(this.root),this.materials={};let n=E_(),s=(u,f,x=.95,g=null)=>this.materials[u]=new Xe({color:f,roughness:x,map:g});s("fur","#c8874a",.96,n),s("light","#e9dcc4",.97,n),s("stripe","#8f5c32",.97),s("ear","#c9967e"),s("eye","#7fa05a",.55),s("pupil","#20281f",.4),s("shine","#fff9e8",.3),s("nose","#b97a6b",.7),s("collar","#5d7463",.8),s("bell","#c9a35c",.45);let r=new Ln(1,18,14),o=(u,f,x,g,m,p,S,v)=>{let y=new Rt(r,this.materials[f]);return y.position.set(x,g,m),y.scale.set(p,S,v),y.castShadow=!0,y.receiveShadow=!0,u.add(y),y};this.spine=new te,this.model.add(this.spine),this.body=o(this.spine,"fur",0,.68,-.08,.34,.34,.62),this.chest=o(this.spine,"fur",0,.72,.3,.31,.33,.34),o(this.spine,"light",0,.6,.38,.24,.24,.2),this.hind=o(this.spine,"fur",0,.68,-.42,.32,.32,.32),this.head=new te,this.head.position.set(0,1.02,.56),this.spine.add(this.head),o(this.head,"fur",0,0,0,.33,.3,.29),o(this.head,"light",0,-.11,.22,.22,.14,.12),o(this.head,"light",-.095,-.1,.27,.11,.085,.08),o(this.head,"light",.095,-.1,.27,.11,.085,.08),this.eyes=[],this.pupils=[];for(let u of[-1,1]){let f=o(this.head,"eye",u*.15,.035,.255,.055,.06,.03),x=o(f,"pupil",0,0,.7,.45,.72,.3);o(f,"shine",-.25,.3,.85,.18,.18,.18),this.eyes.push(f),this.pupils.push(x);let g=new te;g.position.set(u*.22,.22,-.02),g.rotation.z=-u*.22,this.head.add(g);let m=new Pn(.15,.34,4);m.rotateY(Math.PI/4);let p=new Rt(m,this.materials.fur);p.position.y=.1,p.scale.z=.6,p.castShadow=!0,g.add(p);let S=new Rt(new Pn(.09,.22,4),this.materials.ear);S.rotation.y=Math.PI/4,S.position.set(0,.1,.055),S.scale.z=.25,g.add(S),u===1?this.twitchEar=g:this.otherEar=g}this.hatMount=new te,this.hatMount.position.set(0,.24,-.03),this.hatMount.rotation.x=-.12,this.head.add(this.hatMount),this.hatId="none",o(this.head,"nose",0,-.075,.345,.05,.035,.03);let a=new ye().setFromPoints([new D(0,-.1,.34),new D(0,-.14,.33),new D(-.05,-.155,.32),new D(0,-.14,.33),new D(.05,-.155,.32)]);this.head.add(new jr(a,new dr({color:"#7d6a55"})));let l=[];for(let u of[-1,1])for(let f=0;f<3;f++)l.push(new D(u*.14,-.1+f*.025,.31),new D(u*.46,-.14+f*.06,.28+(f-1)*.03));this.head.add(new ga(new ye().setFromPoints(l),new dr({color:"#e8dcc4",transparent:!0,opacity:.7})));for(let u of[-.095,0,.095]){let f=o(this.head,"stripe",u,.215,.13,.028,.024,.1);f.rotation.x=.45}for(let u of[-.42,-.16,.1]){let f=new Qr([new D(-.28,.82,u),new D(-.15,.98,u),new D(0,1.02,u),new D(.15,.98,u),new D(.28,.82,u)]),x=new Rt(new ba(f,12,.024,6,!1),this.materials.stripe);x.castShadow=!0,this.spine.add(x)}this.legs=[];let c=[{x:-.22,z:.34,front:!0,phase:0},{x:.22,z:.34,front:!0,phase:Math.PI},{x:-.22,z:-.42,front:!1,phase:Math.PI},{x:.22,z:-.42,front:!1,phase:0}];for(let u of c){let f=new te;f.position.set(u.x,.55,u.z),this.spine.add(f),o(f,"fur",0,-.13,0,.095,.18,.1),u.front||o(f,"fur",0,-.04,-.02,.14,.18,.15);let x=new te;x.position.y=-.27,f.add(x),o(x,"fur",0,-.12,0,.075,.15,.08);let g=o(x,"light",0,-.26,.03,.1,.075,.13);this.legs.push({hip:f,knee:x,paw:g,...u})}this.tail=new te,this.tail.position.set(0,.78,-.66),this.spine.add(this.tail),this.tailSegments=[];let h=this.tail;for(let u=0;u<6;u++){let f=new te;f.position.set(0,u===0?0:.16,u===0?0:-.035),h.add(f);let x=.075-u*.007;o(f,u===5?"light":"fur",0,.08,-.015,x,.1,x),this.tailSegments.push(f),h=f}let d=new Rt(new Ni(.26,.03,8,24),this.materials.collar);d.position.set(0,.88,.44),d.rotation.x=.2,this.spine.add(d),o(this.spine,"bell",0,.72,.66,.055,.065,.055),this.phase=0,this.restBlend=0,this.climbBlend=0,this.blinkTime=3,this.squash=0,this.tailSway=0,this.headLook=0,this.shadow=new Rt(new Wn(2.1,2.1),new Cn({map:this.shadowTexture(),transparent:!0,opacity:.22,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,t.add(this.shadow)}shadowTexture(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,2,32,32,31);return n.addColorStop(0,"rgba(35,45,30,.65)"),n.addColorStop(.4,"rgba(35,45,30,.3)"),n.addColorStop(1,"rgba(35,45,30,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),new di(t)}setHat(t,e){for(;this.hatMount.children.length;)this.hatMount.remove(this.hatMount.children[0]);e&&this.hatMount.add(e),this.hatId=e?t:"none"}update(t,e,n,s,r=!1){let{speed:o=0,grounded:a=!0,climbing:l=!1,resting:c=!1,vy:h=0,turnRate:d=0,accel:u=0,landImpact:f=0,runBlend:x=0}=n,g=o>.15&&!c,m=o>6.2?1:0;this.phase+=t*(2.4+Math.min(o,13)*1.45),this.restBlend=gs(this.restBlend,c?1:0,4.5,t),this.climbBlend=gs(this.climbBlend,l?1:0,10,t),this.squash=gs(this.squash,f,9,t);let p=vr(o/5,0,1),S=g&&a?Math.abs(Math.sin(this.phase*(m?1:2)))*.035*p:Math.sin(e*1.8)*.008,v=vr(-d*.045,-.32,.32)*p,y=vr(-u*.012,-.16,.16)+(a?0:vr(-h*.025,-.28,.22));this.model.rotation.x=-this.climbBlend*1.12+y*(1-this.climbBlend),this.model.rotation.z=v*(1-this.restBlend)+(g&&a?Math.sin(this.phase)*.018*p:0),this.model.position.y=S-this.restBlend*.4-this.squash*.09,this.model.position.z=-this.climbBlend*.1,this.spine.rotation.x=Math.sin(this.phase*2)*.025*p+this.restBlend*.08,this.spine.scale.y=1-this.squash*.12+this.restBlend*.02,this.spine.scale.x=1+this.squash*.08,this.body.scale.z=.62+Math.sin(this.phase*2)*.015*p,this.chest.position.y=.72+Math.sin(this.phase*2+.6)*.012*p,this.hind.position.y=.68+Math.sin(this.phase*2+Math.PI)*.014*p;for(let R of this.legs){let b=this.phase+R.phase+(m?R.front?0:.55:0),_=Math.max(0,Math.sin(b)),M=g&&a?-Math.cos(b)*(.42+.3*x)*p:0,L=g&&a?_*(.55+.35*x)*p:0;if(l){let I=this.phase*1.25+R.phase;M=-.85+Math.sin(I)*.55,L=.7+Math.max(0,Math.cos(I))*.6}else a||(M=R.front?-.7+vr(h*.03,-.2,.25):.55-vr(h*.025,-.2,.25),L=R.front?.8:.45);M*=1-this.restBlend,L*=1-this.restBlend,R.hip.rotation.x=gs(R.hip.rotation.x,M+this.restBlend*(R.front?-1.42:-1.1),18,t),R.knee.rotation.x=gs(R.knee.rotation.x,L+this.restBlend*(R.front?.08:2.35),18,t),R.hip.rotation.z=(R.x>0?1:-1)*this.restBlend*(R.front?.1:.42),R.paw.rotation.x=-R.knee.rotation.x*.45}this.head.position.y=1.02-this.restBlend*.2-S*.55,this.head.position.z=.56+this.restBlend*.04,this.head.rotation.x=this.restBlend*.22+(l?-.25:0)-y*.55+Math.sin(this.phase*2)*.012*p,this.headLook=gs(this.headLook,!g&&!c&&!r?Math.sin(e*.5)*.18:-v*.5,3,t),this.head.rotation.y=this.headLook,this.head.rotation.z=!g&&!c?Math.sin(e*.8)*.02:-v*.25,this.tailSway=gs(this.tailSway,g?Math.sin(this.phase*.7)*.22:Math.sin(e*1.6)*.16,4,t);for(let R=0;R<this.tailSegments.length;R++){let b=this.tailSegments[R],_=R*.45;b.rotation.z=Math.sin(e*(c?1.1:2.2)-_)*(c?.08:.12)+this.tailSway*(R/6),b.rotation.x=(R===0?.35:.12)+Math.sin(e*1.3-_)*.05+this.restBlend*(R===0?-1.45:-.06)+(l?.18:0)+v*.08*R,b.rotation.y=this.restBlend*(R===0?.3:.45)}let E=!g&&Math.sin(e*.7)>.985?Math.sin(e*25)*.12:0;this.twitchEar.rotation.z=-.22+E-v*.15,this.otherEar.rotation.z=.22-E*.6-v*.15,this.blinkTime-=t,this.blinkTime<-.13&&(this.blinkTime=3+Math.random()*4);let A=this.blinkTime<0||c?.1:1;for(let R of this.eyes)R.scale.y=.06*A;for(let R of this.pupils)R.scale.y=.72*A;this.shadow.position.set(this.root.position.x,s+.02,this.root.position.z);let C=this.size*(1+Math.min(3,Math.max(0,this.root.position.y-s))*.35);this.shadow.scale.set(C,C,1),this.shadow.material.opacity=.3/(1+Math.max(0,this.root.position.y-s)*.8)}};var Fa=class{constructor(){this.context=null,this.enabled=!0,this.volume=.4,this.started=!1,this.birdTimer=4,this.noteTimer=1,this.chord=0,this.resting=!1}async start(){if(!this.context){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.context=new t;let e=this.context;this.master=e.createGain(),this.master.gain.value=this.enabled?this.volume*.55:0,this.master.connect(e.destination);let n=e.createBuffer(1,e.sampleRate*4,e.sampleRate),s=n.getChannelData(0),r=0;for(let c=0;c<s.length;c++)r=(r+(Math.random()*2-1)*.018)/1.018,s[c]=r*3.5;let o=e.createBufferSource();o.buffer=n,o.loop=!0;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=550;let l=e.createGain();l.gain.value=.11,o.connect(a),a.connect(l),l.connect(this.master),o.start(),this.wind=o}if(this.started=!0,this.context.state==="suspended")try{await this.context.resume()}catch{}}setEnabled(t){this.enabled=t,t&&this.start(),this.applyVolume()}setVolume(t){this.volume=t,this.applyVolume()}applyVolume(){this.context&&this.master.gain.setTargetAtTime(this.enabled?this.volume*.55:0,this.context.currentTime,.15)}tone(t,e,n,s=.06,r="sine",o=null){if(!this.context||!this.enabled)return;let a=this.context,l=a.createOscillator(),c=a.createGain();l.type=r,l.frequency.setValueAtTime(t,e),o&&l.frequency.exponentialRampToValueAtTime(o,e+n*.7),c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(s,e+Math.min(.04,n*.15)),c.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(c),c.connect(this.master),l.start(e),l.stop(e+n+.05),l.onended=()=>{l.disconnect(),c.disconnect()}}update(t){if(!(!this.started||!this.enabled||!this.context||this.context.state!=="running")){if(this.birdTimer-=t,this.noteTimer-=t,this.birdTimer<0){let e=this.context.currentTime,n=1700+Math.random()*800;for(let s=0;s<3;s++)this.tone(n+s*110,e+s*.15,.11,.028,"sine",n+500+s*70);this.birdTimer=7+Math.random()*12}if(this.noteTimer<0){let e=[[196,246.94,293.66],[174.61,220,261.63],[164.81,196,246.94],[174.61,220,293.66]],n=this.context.currentTime;for(let[s,r]of e[this.chord%e.length].entries())this.tone(r,n+s*.35,6,.018);this.chord++,this.noteTimer=10+Math.random()*4}}}discovery(){if(!this.context)return;let t=this.context.currentTime;[523.25,659.25,783.99].forEach((e,n)=>this.tone(e,t+n*.14,1.3,.07))}jump(){this.context&&this.tone(280,this.context.currentTime,.15,.025,"sine",440)}land(){this.context&&this.tone(130,this.context.currentTime,.1,.025,"sine",80)}greet(){if(!this.context)return;let t=this.context.currentTime;this.tone(660,t,.16,.03,"sine",880),this.tone(880,t+.14,.22,.028,"sine",990)}tweet(){if(!this.context)return;let t=this.context.currentTime;this.tone(2400,t,.07,.012,"sine",3100),this.tone(2900,t+.09,.06,.01,"sine",2500)}chirp(){this.context&&this.tone(1500,this.context.currentTime,.09,.02,"sine",2100)}shiny(){if(!this.context)return;let t=this.context.currentTime;this.tone(1318.5,t,.18,.035,"sine",1760),this.tone(1760,t+.09,.3,.03,"sine",2093),this.tone(2637,t+.18,.4,.018,"triangle")}clatter(t="metal",e=!1){if(!this.context)return;let n=this.context.currentTime,s=e?.5:1;t==="metal"?(this.tone(820,n,.14,.04*s,"square",260),this.tone(1900,n+.02,.08,.02*s,"triangle",900),this.tone(640,n+.12,.12,.02*s,"square",200)):t==="glass"?(this.tone(2400,n,.1,.03*s,"sine",1500),this.tone(3100,n+.05,.14,.02*s,"triangle",2e3)):t==="clay"?(this.tone(480,n,.1,.035*s,"triangle",140),this.tone(900,n+.03,.06,.015*s,"square",400)):t==="wood"?(this.tone(260,n,.09,.04*s,"triangle",110),this.tone(420,n+.06,.07,.02*s,"triangle",200)):this.tone(330,n,.1,.03*s,"triangle",120)}purr(){this.context&&this.tone(58,this.context.currentTime,.65,.025,"triangle",52)}suspend(){this.context?.state==="running"&&this.context.suspend().catch(()=>{})}resume(){this.started&&this.context?.state==="suspended"&&this.context.resume().catch(()=>{})}};var qt=Object.freeze({scale:.34,radius:.16,height:.49,step:.25,gravity:22,jump:7.7,sprintJump:8.25,climb:6.8}),qn=Un.clamp,br=1e-5,df=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),uf=(i,t,e,n)=>i+df(i,t)*(1-Math.exp(-e*n));function ka(i,t,e){if(i.shape==="cylinder")return Math.hypot(t-i.x,e-i.z)<=i.r?i.maxY:-1/0;if(i.shape==="ellipsoid"){let n=((t-i.x)/i.rx)**2+((e-i.z)/i.rz)**2;return n<=.88?i.y+i.ry*Math.sqrt(1-n):-1/0}if(i.shape==="roof"){let n=i.building,s=n.w/2+.55,r=n.d/2+.55;if(Math.abs(t-n.x)>s||Math.abs(e-n.z)>r)return-1/0;if(n.roofType===0){let o=n.ridgeX?e-n.z:t-n.x,a=n.ridgeX?r:s;return n.h+n.roofRise*Math.max(0,1-Math.abs(o)/a)}if(n.roofType===1){let o=1-Math.abs(t-n.x)/s,a=1-Math.abs(e-n.z)/r;return n.h+n.roofRise*Math.min(1,Math.max(0,Math.min(o,a)/.84))}return n.h}return t>=i.minX&&t<=i.maxX&&e>=i.minZ&&e<=i.maxZ?i.maxY:-1/0}var Oa=class{constructor(t){this.world=t,this.stamp=0,this.seen=new WeakMap,this.dynamic=[]}query(t,e,n=1){let s=this.world.spatial,r=[],o=++this.stamp;for(let a of this.dynamic)Math.abs(a.x-t)<n+a.r&&Math.abs(a.z-e)<n+a.r&&r.push(a);if(!s)return r.push(...this.world.colliders),r;for(let a=Math.floor((t-n)/8);a<=Math.floor((t+n)/8);a++)for(let l=Math.floor((e-n)/8);l<=Math.floor((e+n)/8);l++){let c=s.get(a+","+l);if(c)for(let h of c)this.seen.get(h)!==o&&(this.seen.set(h,o),r.push(h))}return r}highest(t,e,n){let s=Math.min(n,this.world.groundHeight(t,e));for(let r of this.query(t,e,.2)){if(r.walkable===!1)continue;let o=ka(r,t,e);Number.isFinite(o)&&o<=n&&o>s&&(s=o)}return s}support(t,e,n,s=!0){let r=this.world.groundHeight(t,e),o={y:r<=n+br?r:0,solid:null};for(let a of this.query(t,e,.2)){if(a.walkable===!1||!s&&a.shape==="roof")continue;let l=ka(a,t,e);Number.isFinite(l)&&l<=n+br&&l>o.y&&(o={y:l,solid:a})}return o}resolve(t,e,n,s=null){let r=0;for(let o=0;o<3;o++){let a=!1;for(let l of this.query(t.x,t.z,e+.1)){if(l===s||l.sensor||l.shape==="roof"||s&&l.tree&&s.tree&&l.tree===s.tree||t.y+n<=l.minY+.025||t.y>=l.maxY-.035)continue;let c,h,d,u;if(l.shape==="cylinder"||l.shape==="ellipsoid"){let x=l.r,g=l.r;if(l.shape==="ellipsoid"){let p=qn((t.y+n*.45-l.y)/l.ry,-.98,.98),S=Math.sqrt(1-p*p);x=l.rx*S,g=l.rz*S;let v=ka(l,t.x,t.z);if(Number.isFinite(v)&&t.y>=v-.09)continue}if(c=t.x-l.x,h=t.z-l.z,Math.hypot(c/x,h/g)>=1+e/Math.min(x,g)||(d=Math.hypot(c,h),d<br&&(c=1,h=0,d=1),u=Math.min(x,g)+e,d>=u))continue}else{let x=qn(t.x,l.minX,l.maxX),g=qn(t.z,l.minZ,l.maxZ);if(c=t.x-x,h=t.z-g,d=Math.hypot(c,h),d>=e)continue;if(d<br){let m=[{d:t.x-l.minX,x:-1,z:0},{d:l.maxX-t.x,x:1,z:0},{d:t.z-l.minZ,x:0,z:-1},{d:l.maxZ-t.z,x:0,z:1}].sort((p,S)=>p.d-S.d);c=m[0].x,h=m[0].z,d=0,u=e+m[0].d}else u=e}let f=u-d+.001;t.x+=c/(d||1)*f,t.z+=h/(d||1)*f,r++,a=!0}if(!a)break}return r}ceiling(t,e,n,s,r,o){let a=e;for(let l of this.query(n,s,o)){if(l.shape==="roof"||l.shape==="ellipsoid"||l.sensor)continue;let c=ka(l,n,s);!Number.isFinite(c)||l.minY<=t+r-.025||t+r<=l.minY+.02&&e+r>=l.minY&&(a=Math.min(a,l.minY-r-.01))}return a}nearbyWall(t,e=.52,n=null,s=null){let r=null,o=1/0;for(let a of this.query(t.x,t.z,e+.4)){if(a===s||!a.climbable||a.maxY<=t.y+.015||a.minY>t.y+qt.height)continue;let l,c,h,d,u;if(a.shape==="cylinder"||a.shape==="ellipsoid"){l=t.x-a.x,c=t.z-a.z,u=Math.hypot(l,c)||1,l/=u,c/=u;let g=a.r;if(a.shape==="ellipsoid"){let m=qn((t.y-a.y)/a.ry,-.95,.95);g=Math.min(a.rx,a.rz)*Math.sqrt(1-m*m)}h=a.x+l*g,d=a.z+c*g,u=Math.max(0,Math.hypot(t.x-a.x,t.z-a.z)-g)}else if(h=qn(t.x,a.minX,a.maxX),d=qn(t.z,a.minZ,a.maxZ),l=t.x-h,c=t.z-d,u=Math.hypot(l,c),u<br){let g=[{d:t.x-a.minX,x:-1,z:0},{d:a.maxX-t.x,x:1,z:0},{d:t.z-a.minZ,x:0,z:-1},{d:a.maxZ-t.z,x:0,z:1}].sort((m,p)=>m.d-p.d);l=g[0].x,c=g[0].z,u=0}else l/=u,c/=u;if(u>e)continue;let f=n==null?0:Math.max(0,-(l*Math.sin(n)+c*Math.cos(n))),x=u-f*.12-(a.kind==="tree"?.04:0);x<o&&(o=x,r={solid:a,nx:l,nz:c,qx:h,qz:d,distance:u})}return r}};function ff(i){return{pos:new D(i?.x??1.1,i?.y??0,i?.z??7.1),vx:0,vz:0,vy:0,heading:i?.heading??.55,speed:0,grounded:!0,coyote:.14,jumpBuffer:0,jumpCut:!1,climbCooldown:0,climbing:null,mantling:0,landImpact:0,turnRate:0,accel:0,runBlend:0,moveAmount:0,airTime:0,support:null,distance:0}}function pf(i,t,e,n,s={}){i.climbCooldown=Math.max(0,i.climbCooldown-n),i.jumpBuffer=Math.max(0,i.jumpBuffer-n),i.mantling=Math.max(0,i.mantling-n),i.landImpact*=Math.exp(-9*n);let r=t.x,o=t.y;i.mantling>0&&(r=o=0);let a=Math.hypot(r,o),l=Math.min(1,a);a>1e-4?(r/=a,o/=a):r=o=0,i.moveAmount=l;let c=e.nearbyWall(i.pos,.5,i.heading,i.grounded?i.support:null),h=t.climb||t.autoClimb&&l>.3&&!i.grounded&&i.airTime>.09&&i.vy<3.2;if(h&&c&&i.climbCooldown===0&&!t.resting){let I=c.solid;if(i.climbing=c,i.grounded=!1,i.vy=0,i.vx=i.vz=0,i.speed=qt.climb,i.heading=uf(i.heading,Math.atan2(-c.nx,-c.nz),20,n),i.pos.y+=qt.climb*n,I.shape==="ellipsoid"||I.tree){let U=I.shape==="ellipsoid"?I:I.tree?.canopies?.find(H=>i.pos.y>H.y-H.ry*.8);if(U){let H=qn((i.pos.y-U.y)/U.ry,-.96,.98),z=Math.min(U.rx,U.rz)*Math.sqrt(1-H*H)+qt.radius+.035,q=Math.hypot(i.pos.x-U.x,i.pos.z-U.z)||1,O=(i.pos.x-U.x)/q,X=(i.pos.z-U.z)/q;i.pos.x=U.x+O*z,i.pos.z=U.z+X*z,i.heading=Math.atan2(-O,-X)}else I.shape!=="ellipsoid"&&(i.pos.x+=(c.qx+c.nx*(qt.radius+.025)-i.pos.x)*(1-Math.exp(-24*n)),i.pos.z+=(c.qz+c.nz*(qt.radius+.025)-i.pos.z)*(1-Math.exp(-24*n)))}else i.pos.x+=(c.qx+c.nx*(qt.radius+.025)-i.pos.x)*(1-Math.exp(-24*n)),i.pos.z+=(c.qz+c.nz*(qt.radius+.025)-i.pos.z)*(1-Math.exp(-24*n));if(i.pos.y>=I.maxY-.035){let U=I.shape==="box"?c.nx:(i.pos.x-I.x)/(Math.hypot(i.pos.x-I.x,i.pos.z-I.z)||1),H=I.shape==="box"?c.nz:(i.pos.z-I.z)/(Math.hypot(i.pos.x-I.x,i.pos.z-I.z)||1),z=I.shape!=="box"&&Math.min(I.rx??I.r,I.rz??I.r)<.6;z?(i.pos.x=I.x,i.pos.z=I.z):(i.pos.x-=U*(qt.radius+.24),i.pos.z-=H*(qt.radius+.24)),i.pos.y=Math.max(e.highest(i.pos.x,i.pos.z,I.maxY+1.6),I.minY)+.025,i.vy=z?.6:1.2,i.vx=z?0:-U*1.1,i.vz=z?0:-H*1.1,i.climbing=null,i.climbCooldown=.38,i.mantling=.3,i.jumpBuffer=0,s.mantle?.(I)}return{wall:c,climbed:!0}}i.climbing&&!h&&(i.vy=.4,i.climbCooldown=.18),i.climbing=null;let d=!!t.sprint;i.runBlend+=((d&&l>.05?1:0)-i.runBlend)*(1-Math.exp(-9*n));let u=l>.02?.32+.68*Math.pow(l,.8):0,f=(t.baseSpeed+(t.sprintSpeed-t.baseSpeed)*i.runBlend)*u;t.resting&&(f=0),e.world.inWater(i.pos.x,i.pos.z)&&i.pos.y<.2&&(f*=.7);let x=Math.cos(t.yaw),g=Math.sin(t.yaw),m=(r*x+o*g)*f,p=(-r*g+o*x)*f,S=Math.hypot(i.vx,i.vz),v=i.grounded?l>.02?24:30:10,y=1-Math.exp(-v*n);i.vx+=(m-i.vx)*y,i.vz+=(p-i.vz)*y,i.accel=qn((Math.hypot(i.vx,i.vz)-S)/n,-40,40),i.coyote=i.grounded?.14:Math.max(0,i.coyote-n),t.jump&&(i.jumpBuffer=.18,t.jump=!1),i.jumpBuffer>0&&i.coyote>0&&!t.resting&&(i.vy=d?qt.sprintJump:qt.jump,i.grounded=!1,i.coyote=0,i.jumpBuffer=0,i.jumpCut=!1,s.jump?.()),!t.jumpHeld&&i.vy>4&&!i.jumpCut&&(i.vy*=.86,i.jumpCut=!0);let E=i.pos.clone(),A=Math.hypot(i.vx,i.vz)*n,C=Math.max(1,Math.ceil(A/(qt.radius*.7)));for(let I=0;I<C;I++){let U=i.pos.x+i.vx*n/C,H=i.pos.z+i.vz*n/C,z=i.pos.y;if(i.grounded){let O=Math.hypot(i.vx,i.vz)||1,X=i.vx/O*qt.radius,tt=i.vz/O*qt.radius,rt=e.support(U,H,E.y+qt.step),wt=e.support(U+X,H+tt,E.y+qt.step),Et=wt.y>rt.y&&wt.y<=E.y+qt.step?wt:rt;Et.y>i.pos.y&&Et.y<=E.y+qt.step&&(z=Et.y)}i.pos.set(U,z,H);let q=e.resolve(i.pos,qt.radius,qt.height);if(i.grounded&&i.pos.y<.2&&!e.world.inWater(E.x,E.z)){let O=e.world.inWater(i.pos.x,i.pos.z);if(O){let X=i.pos.x-O.x,tt=i.pos.z-O.z,rt=Math.hypot(X,tt)||1e-6,wt=O.r+qt.radius*.5;i.pos.x=O.x+X/rt*wt,i.pos.z=O.z+tt/rt*wt;let Et=i.vx*(X/rt)+i.vz*(tt/rt);Et<0&&(i.vx-=Et*X/rt,i.vz-=Et*tt/rt),q=(q||0)+1}}if(q){let O=i.pos.x-U,X=i.pos.z-H,tt=Math.hypot(O,X);if(tt>br){let rt=O/tt,wt=X/tt,Et=i.vx*rt+i.vz*wt;Et<0&&(i.vx-=Et*rt,i.vz-=Et*wt)}}}let R=i.pos.y;i.vy=Math.max(-28,i.vy-qt.gravity*n);let b=R+i.vy*n;if(i.vy>0){let I=e.ceiling(R,b,i.pos.x,i.pos.z,qt.height,qt.radius);I<b&&(b=I,i.vy=0)}let _=i.grounded;i.grounded=!1;let M=e.support(i.pos.x,i.pos.z,R+(_?qt.step:.025));if(_&&Math.hypot(i.vx,i.vz)>.3){let I=Math.hypot(i.vx,i.vz)||1,U=e.support(i.pos.x+i.vx/I*qt.radius,i.pos.z+i.vz/I*qt.radius,R+.01);U.y>M.y&&U.y<=R+.01&&(M=U)}let L=_&&i.vy<=0&&i.vy>-1.2&&M.y<R&&R-M.y<=qt.step*.8;if(i.vy<=0&&b<=M.y+.002&&R>=M.y-(_?qt.step:.04)||L){if(M.solid?.bouncy&&i.vy<-2.5)return i.pos.y=M.y+.01,i.vy=Math.min(M.solid.bouncy,Math.max(7,-i.vy*.92+(t.jumpHeld?1.5:0))),i.grounded=!1,i.support=null,i.airTime=0,i.jumpCut=!0,s.bounce?.(M.solid),i.speed=Math.hypot(i.vx,i.vz),{wall:c,climbed:!1};i.pos.y=M.y,i.vy=0,i.grounded=!0,i.support=M.solid,i.jumpCut=!1,i.airTime=0,_||(i.landImpact=qn(Math.abs(M.y-b)*2+.25,.2,1),s.land?.(M.solid))}else i.pos.y=b,i.support=null,i.airTime+=n;if(i.speed=Math.hypot(i.vx,i.vz),i.distance+=i.speed*n,i.speed>.12){let I=Math.atan2(i.vx,i.vz),U=df(i.heading,I);i.heading=uf(i.heading,I,19,n),i.turnRate+=(qn(U*12,-7,7)-i.turnRate)*(1-Math.exp(-12*n))}else i.turnRate*=Math.exp(-12*n);return(!Number.isFinite(i.pos.x+i.pos.y+i.pos.z)||i.pos.y<-8)&&(i.pos.set(1.1,1,7.1),i.vx=i.vz=i.vy=0),{wall:c,climbed:!1}}var mf=["Oh! Hello there, sweetheart.","Well, aren\u2019t you a handsome one.","Pspsps\u2026 come here, little one.","Who\u2019s a good kitty? You are.","Look at those whiskers!","Hello, little neighbour.","You look like you own this street.","Aw. Soft as a cloud.","Off on an adventure, are we?","Good afternoon, your majesty.","Hi, puss. Lovely day for a wander.","Such a sweet face.","There\u2019s my favourite cat.","Careful on those rooftops, you.","Hello, fluff. Chin scratches?"],Ba=["Lovely afternoon, isn\u2019t it?","The bakery had cinnamon buns today.","Did you see that cat on the roof?","I should water the balcony plants.","Not a cloud in the sky.","Have you tried the new tea shop?","The bus was late again. Of course.","My tomatoes are finally coming in.","Mrs. Finch says hello.","We should sit by the pond later.","Someone left bunting up from the fete.","I could nap in this sun."],gf=["Hm, where did I put my keys?","What a pretty door.","Oh, that\u2019s a nice bench.","I\u2019ll just rest a moment."],T_={kid:{greet:["KITTY!!","Mum, look, a cat!","Can I keep it? Please?","Here kitty kitty kitty!"],idle:["Race you to the swings!","I\u2019m the king of the castle!","Wheee!"]},grandma:{greet:["Oh, hello, my darling.","Come here, pet. I\u2019ve a bit of ham.","You remind me of my old Tibbles.","Mind the road, sweetheart."],idle:["My knees know rain is coming.","Where did I leave my glasses\u2026","Lovely to get some air."]},grandpa:{greet:["Well now. Hello, old chap.","Scratch behind the ears? Like so.","Finest cat on the street, you are.","Hmph. Cats. Go on then."],idle:["In my day this was all fields.","Nice bit of sun.","Bus is late. As usual."]},uncle:{greet:["Ey up, kitty!","Hello, you little rascal.","Big cat energy, that one.","Who\u2019s this, then?"],idle:["I could murder a pie.","Beautiful day for it.","Right, where was I."]},vendor:{greet:["Oh, hello, puss. No fish here, sorry!","Shoo\u2014 oh, you\u2019re lovely, actually.","Mind the apples, little one.","A customer! Of sorts."],idle:["Fresh today! Lovely and fresh!","Two for one, last of the day!","Get your lovely bread here!","Best in town, honest."]},barista:{greet:["Oat milk for the cat? Coming up.","Hello, regular. Usual spot?","Careful, the machine\u2019s hot.","You\u2019re allowed in. Just this once."],idle:["Flat white for Priya!","One more and then I\u2019ll close.","That grinder needs a service."]},grocer:{greet:["No, those tins aren\u2019t for you.","Hello, trouble.","Have a sniff, but don\u2019t knock it over.","Aw. Alright, you can stay."],idle:["Three for two on the beans.","Must restock aisle one.","Nice and quiet today."]},worker:{greet:["Oi oi! Hello, kitty.","Hard hat area, mate.","Site cat! We\u2019ve got a site cat!","Mind your paws round here."],idle:["Tea break in five.","Pass us that spanner.","Nearly done with this lot."]},foreman:{greet:["Health and safety\u2026 allows cats.","Hello, inspector.","Right, who let the cat in?"],idle:["Where\u2019s that delivery?","Clipboard says we\u2019re behind.","Come on, lads."]},suit:{greet:["Oh\u2014 hello. I\u2019m late, but hello.","You\u2019d do better in this meeting than me.","Hi, puss. Quick scratch, then I must dash."],idle:["Running late, running late.","Call me back about the thing.","Fifteenth floor. Ugh."]},shopper:{greet:["Hello, gorgeous.","Careful, there\u2019s eggs in here.","Oh, what a love."],idle:["Did I get milk? I got milk.","Those flowers are lovely.","I\u2019ll just look at the bread."]},customer:{greet:["Hello! Come and sit with me.","Oh, a caf\xE9 cat. Perfect.","You can have the crumbs."],idle:["This is a very good bun.","One more coffee won\u2019t hurt."]},resident:{greet:["How did you get in here?!","Oh. Hello. Make yourself at home, I suppose.","Don\u2019t scratch the sofa."],idle:["I should hoover.","Where\u2019s the remote?","Tea. Tea would be good."]},parent:{greet:["Gently, gently \u2014 look, a cat.","Hello, puss. Don\u2019t mind the kids."],idle:["Five more minutes, then home.","Not so high, love!"]},driver:{greet:["Alright, kitty.","Don\u2019t get under the wheels now."],idle:["Two more drops and I\u2019m done.","Traffic was murder."]},jogger:{greet:["Hey! Quick\u2014 hi\u2014 bye!","Can\u2019t stop! Lovely cat!"],idle:["Pace, pace, pace."]}},A_=["#f1d4bd","#e9c4a6","#d9a98a","#c48b67","#a46f4d","#8d5a3b","#6b4529","#f6dfcc"],R_=["#c9d8c6","#d9b8a8","#a7b7c7","#e6d6b0","#b48c9c","#8ea48c","#d3c7e0","#c3b59b","#9fb8b4","#e2c3a0","#d9544f","#4f7f96","#e9c04b","#f3ead6","#6f9a4f"],C_=["#5c6670","#7b6f5f","#4f5a52","#8a8072","#44505a","#6f6a80","#9b9179","#3b4f6b","#8f5f4e"],I_=["#2e2420","#5a3e2c","#8a6a46","#c7a16b","#3b3b40","#b4553a","#1d1a1a","#e0c08a"],xf=["#d9d2c4","#c4c0b8","#eae6dc","#a9a49b"],pi=no.offsets,Wt=new Je(1,1,1),rn=new Ln(1,10,8),P_=new _n(.72,1,1,10),za=new Ln(1,10,8,0,Math.PI*2,0,Math.PI/2),Uh=new _n(1,1,1,12),xv=new Pn(1,1,8),L_=i=>Math.abs((i%kt+kt)%kt)<.01;function D_(i,t){let e=Math.floor(i/kt)*kt,n=i-e;if(t>0){for(let s of pi)if(s>n+.01)return e+s;return e+kt+pi[0]}for(let s=pi.length-1;s>=0;s--)if(pi[s]<n-.01)return e+pi[s];return e-kt+pi[pi.length-1]}function U_(i,t,e){if(!L_(i))return!0;let n=Math.min(t,e),s=Math.max(t,e),r=(n%kt+kt)%kt;return!(Math.abs(r-no.pavement[0])<.01&&Math.abs(s-n-(no.pavement[1]-no.pavement[0]))<.01)}function _f(i,t){let e=n=>{let s=Math.floor(n/kt)*kt,r=n-s,o=pi[0],a=1/0;for(let l of[...pi,kt])Math.abs(l-r)<a&&(a=Math.abs(l-r),o=l);return s+o};return{x:e(i),z:e(t)}}var me=(i,t)=>t[Math.floor(i()*t.length)];function N_(i,t){let e=i.split(":")[0],n=t()<.5,s={role:e,femme:n,height:1.62+t()*.24,build:1,headScale:1,skin:me(t,A_),shirt:me(t,R_),trousers:me(t,C_),hair:me(t,I_),hairStyle:n?me(t,["bob","long","bun","ponytail","short"]):me(t,["short","short","crop","quiff"]),hat:null,skirt:n&&t()<.45,facial:null,glasses:t()<.18,carry:null,apron:null,vest:!1,tie:!1,stick:!1,hunch:0,speed:1};return e==="kid"&&(s.height=.98+t()*.22,s.headScale=1.45,s.build=.8,s.shirt=me(t,["#d9544f","#e9c04b","#4f7f96","#6f9a4f","#e39a6e","#c7b2d9"]),s.trousers=me(t,["#3b4f6b","#4f7f96","#8f5f4e"]),s.hairStyle=n?me(t,["pigtails","bob","ponytail"]):me(t,["short","crop"]),s.hat=t()<.3?"cap":null,s.glasses=t()<.08,s.skirt=n&&t()<.4,s.speed=1.5),e==="grandma"&&(s.femme=!0,s.height=1.5+t()*.1,s.build=1.1,s.hair=me(t,xf),s.hairStyle=me(t,["bun","bob","short"]),s.skirt=!0,s.shirt=me(t,["#b48c9c","#c7b2d9","#8ea48c","#d3c7e0"]),s.glasses=t()<.6,s.stick=t()<.6,s.hunch=.18,s.speed=.6,s.hat=t()<.3?"sunhat":null),e==="grandpa"&&(s.femme=!1,s.height=1.6+t()*.1,s.build=1.05,s.hair=me(t,xf),s.hairStyle=me(t,["bald","crop","short"]),s.facial=me(t,["beard","moustache","beard"]),s.glasses=t()<.5,s.stick=t()<.6,s.hunch=.14,s.speed=.65,s.hat=t()<.6?"flatcap":null,s.shirt=me(t,["#c3b59b","#9fb8b4","#8ea48c","#e6d6b0"]),s.tie=t()<.3),e==="uncle"&&(s.femme=!1,s.height=1.7+t()*.15,s.build=1.3,s.facial=t()<.7?"moustache":null,s.hat=me(t,["flatcap",null,"sunhat"]),s.hairStyle=me(t,["bald","short","crop"]),s.shirt=me(t,["#e6d6b0","#a7b7c7","#d9b8a8","#f3ead6"]),s.speed=.85),(e==="worker"||e==="foreman")&&(s.vest=!0,s.hat="hardhat",s.shirt=me(t,["#4f5a52","#5c6670","#8f5f4e"]),s.trousers=me(t,["#5c6670","#8a8072","#3b4f6b"]),s.carry=e==="foreman"?"clipboard":t()<.5?"tool":null,s.skirt=!1,s.build=1.1),e==="vendor"&&(s.apron=me(t,["#f3ead6","#4f7f96","#6f9a4f","#c9524a"]),s.hat=t()<.5?"cap":null,s.skirt=!1),e==="barista"&&(s.apron="#3f4a46",s.hairStyle=n?"bun":"quiff",s.shirt="#f3ead6",s.skirt=!1),e==="grocer"&&(s.apron="#6f9a4f",s.shirt="#f3ead6",s.skirt=!1,s.build=1.1),e==="suit"&&(s.shirt=me(t,["#2f3a3a","#44505a","#3b3b40","#5f6b66"]),s.trousers=s.shirt,s.tie=!n,s.carry="briefcase",s.skirt=n,s.speed=1.2),e==="shopper"&&(s.carry="bag"),e==="parent"&&(s.carry=t()<.5?"bag":null),e==="driver"&&(s.hat="cap",s.shirt="#4f7f96",s.skirt=!1,s.build=1.15),e==="jogger"&&(s.shirt=me(t,["#d9544f","#e9c04b","#4f7f96"]),s.trousers="#2f3331",s.hairStyle=n?"ponytail":"crop",s.skirt=!1,s.speed=2.2,s.hat=t()<.4?"cap":null),(e==="resident"||e==="customer")&&(s.carry=null),s}function F_(i){let t=i.height,e=t*.47,n=t*.31,s=t*.025,r=t*.07*i.headScale,o=.36*i.build,a=.2*i.build,l=new zi;l.add(Wt,0,n/2,0,o,n,a,i.shirt),l.add(rn,0,n*.97,0,o*.55,n*.12,a*.6,i.shirt),i.skirt?l.add(P_,0,-e*.25,0,o*.62,e*.55,a*1.3,i.trousers):l.add(Wt,0,-.02,0,o*.96,.08,a,i.trousers),i.apron&&(l.add(Wt,0,n*.42,a/2+.01,o*.78,n*.95,.02,i.apron),l.add(Wt,0,-e*.2,a/2+.01,o*.82,e*.45,.02,i.apron),l.add(Wt,0,n*.95,0,.03,n*.15,a+.04,i.apron)),i.vest&&(l.add(Wt,0,n*.5,0,o+.04,n*.8,a+.04,"#f2c21b"),l.add(Wt,0,n*.5,0,o+.05,.06,a+.05,"#cfd3d2"),l.add(Wt,0,n*.28,0,o+.05,.06,a+.05,"#cfd3d2")),i.tie&&(l.add(Wt,0,n*.62,a/2+.005,.05,n*.55,.01,i.femme?"#b48c9c":"#8f5f4e"),l.add(Wt,0,n*.78,a/2+.005,o*.3,n*.3,.008,"#f3ead6")),l.add(Wt,0,n+s/2,0,r*.7,s+.02,r*.7,i.skin);let c=n+s+r*.95;l.add(rn,0,c,0,r,r*1.08,r*.95,i.skin);let h=c+r*.08,d=r*.82;for(let p of[-1,1])l.add(rn,p*r*.36,h,d,r*.14,r*.12,r*.06,"#f8f6f0"),l.add(rn,p*r*.36,h,d+r*.05,r*.075,r*.085,r*.04,"#2a211d"),l.add(Wt,p*r*.36,h+r*.24,d-r*.02,r*.3,r*.05,r*.05,i.hair==="#e0c08a"?"#b08a56":i.hair),i.glasses&&(l.add(Wt,p*r*.36,h,d+r*.1,r*.34,r*.3,.006,"#4a4f4c"),l.add(Wt,p*r*.36,h,d+r*.1,r*.26,r*.22,.008,"#dfeae8"));if(i.glasses&&l.add(Wt,0,h,d+r*.1,r*.2,.006,.006,"#4a4f4c"),l.add(rn,0,c-r*.12,r*.93,r*.11,r*.14,r*.12,i.skin),i.facial==="moustache"?l.add(Wt,0,c-r*.3,r*.9,r*.5,r*.1,r*.08,i.hair):l.add(Wt,0,c-r*.38,r*.9,r*.26,r*.04,.006,"#9a5f55"),i.facial==="beard"&&l.add(rn,0,c-r*.55,r*.55,r*.62,r*.5,r*.55,i.hair),i.role==="kid"||i.role==="grandma")for(let p of[-1,1])l.add(rn,p*r*.62,c-r*.18,r*.62,r*.16,r*.1,r*.08,"#e8a39a");let u=i.hair;if(i.hairStyle!=="bald"&&l.add(rn,0,c+r*.22,-r*.05,r*1.03,r*.9,r*1,u),i.hairStyle==="bald"&&(l.add(Wt,0,c-r*.05,-r*.5,r*1.9,r*.6,r*.9,u),l.add(Wt,0,c-r*.05,-r*.5,r*1.9,r*.6,r*.9,u)),i.hairStyle==="bob"||i.hairStyle==="long"){for(let p of[-1,1])l.add(Wt,p*r*.95,c-r*.25,-r*.1,r*.3,r*1.3,r*1.3,u);l.add(Wt,0,c-r*.2,-r*.85,r*1.9,r*1.4,r*.5,u)}if(i.hairStyle==="long"&&l.add(Wt,0,c-r*1.4,-r*.8,r*1.6,r*1.6,r*.45,u),i.hairStyle==="bun"&&l.add(rn,0,c+r*.7,-r*.7,r*.45,r*.4,r*.45,u),i.hairStyle==="ponytail"&&(l.add(rn,0,c+r*.3,-r*.9,r*.3,r*.3,r*.3,u),l.add(Wt,0,c-r*.3,-r*1.05,r*.3,r*1.4,r*.3,u)),i.hairStyle==="pigtails")for(let p of[-1,1])l.add(rn,p*r*1.05,c+r*.2,-r*.2,r*.28,r*.28,r*.28,u),l.add(Wt,p*r*1.1,c-r*.4,-r*.2,r*.25,r*1,r*.25,u);i.hairStyle==="quiff"&&l.add(rn,0,c+r*.95,r*.35,r*.55,r*.35,r*.5,u),i.hairStyle==="crop"&&l.add(rn,0,c+r*.25,-r*.05,r*1,r*.8,r*.98,u),l.add(Wt,0,c+r*.62,r*.55,r*1.4,r*.4,r*.5,i.hairStyle==="bald"?i.skin:u),i.hat==="cap"&&(l.add(za,0,c+r*.45,0,r*1.1,r*.75,r*1.1,i.shirt==="#d9544f"?"#3b4f6b":"#d9544f"),l.add(Wt,0,c+r*.5,r*1.1,r*1.2,.02,r*.9,i.shirt==="#d9544f"?"#3b4f6b":"#d9544f")),i.hat==="flatcap"&&(l.add(za,0,c+r*.5,-r*.1,r*1.12,r*.6,r*1.15,"#8a8072"),l.add(Wt,0,c+r*.55,r*.95,r*1.1,.02,r*.7,"#8a8072")),i.hat==="sunhat"&&(l.add(za,0,c+r*.5,0,r*1.1,r*.75,r*1.1,"#e6d6b0"),l.add(Uh,0,c+r*.5,0,r*1.9,.02,r*1.9,"#e6d6b0"),l.add(Uh,0,c+r*.7,0,r*1.12,r*.12,r*1.12,"#c9524a")),i.hat==="hardhat"&&(l.add(za,0,c+r*.4,0,r*1.15,r*.9,r*1.15,"#f2c21b"),l.add(Uh,0,c+r*.42,0,r*1.4,.03,r*1.4,"#f2c21b"));let f=.15*i.build,x=new zi;x.add(Wt,0,-e*.26,0,f,e*.52,f*1.1,i.skirt?i.skin:i.trousers);let g=new zi;g.add(Wt,0,-e*.24,0,f*.92,e*.5,f,i.skirt?i.skin:i.trousers),g.add(Wt,0,-e*.48+.04,.035,f,.08,f*1.7,i.role==="kid"?"#f3ead6":i.role==="worker"||i.role==="foreman"?"#5a4634":"#3b3732");let m=new zi;return m.add(Wt,0,-n*.3,0,.09*i.build,n*.6,.09*i.build,i.role==="jogger"||i.role==="kid"?i.skin:i.shirt),m.add(rn,0,-n*.66,0,.05,.07,.05,i.skin),i.carry==="bag"&&(m.add(Wt,0,-n*.95,.02,.22,.28,.12,"#c9b48a"),m.add(Wt,0,-n*.78,.02,.14,.14,.02,"#8d7f67")),i.carry==="briefcase"&&m.add(Wt,0,-n*.98,.02,.12,.3,.4,"#5a4634"),i.carry==="clipboard"&&m.add(Wt,0,-n*.7,.14,.22,.3,.02,"#f3ead6"),i.carry==="tool"&&m.add(Wt,0,-n*.72,.2,.04,.04,.4,"#4a4f4c"),i.stick&&(m.add(Wt,0,-n*.72,.02,.035,n*.6+e*.95,.035,"#8d7f67"),m.add(Wt,0,-n*.66,.02,.12,.04,.04,"#5a4634")),{H:t,legH:e,torsoH:n,torso:l.geometry(),thigh:x.geometry(),shin:g.geometry(),arm:m.geometry()}}var Ha=class{constructor(t,e,n=null){this.people=t,this.role=e,this.job=n,this.d=N_(e,t.rng);let s=this.look=F_(this.d);this.H=s.H,this.group=new te,this.body=new te,this.group.add(this.body),this.torso=new Rt(s.torso,t.material),this.torso.position.y=s.legH,this.torso.castShadow=!0,this.body.add(this.torso),this.legs=[],this.shins=[],this.arms=[];for(let r of[-1,1]){let o=new Rt(s.thigh,t.material);o.position.set(r*.09*this.d.build,s.legH,0),o.castShadow=!0,this.body.add(o),this.legs.push(o);let a=new Rt(s.shin,t.material);a.position.y=-s.legH*.52,o.add(a),this.shins.push(a);let l=new Rt(s.arm,t.material);l.position.set(r*(.19*this.d.build+.03),s.torsoH-.03,0),l.rotation.z=-r*.08,this.torso.add(l),this.arms.push(l)}this.heart=new da(t.heartMaterial.clone()),this.heart.scale.set(.26,.26,1),this.heart.visible=!1,this.group.add(this.heart),this.solid={shape:"cylinder",x:0,z:0,r:.3*this.d.build,minX:0,maxX:0,minZ:0,maxZ:0,minY:0,maxY:this.H,climbable:!1,walkable:!1,person:this},this.lines=T_[this.d.role]||null,this.reset(n?n.x:0,n?n.z:0),n&&(this.y=n.y||0,this.heading=n.heading,this.state="work",this.sitting=n.pose==="sit")}reset(t,e){this.x=t,this.z=e,this.y=0,this.heading=Math.random()*Math.PI*2,this.bodyTilt=0,this.reach=0,this.sit=0,this.sitting=!1,this.axis="x",this.dir=1,this.state="walk",this.timer=0,this.cooldown=Math.random()*4,this.phase=Math.random()*7,this.baseSpeed=(1.05+Math.random()*.5)*this.d.speed,this.speed=0,this.line="",this.lineTimer=0,this.heartTime=0,this.greeted=0,this.gesture=Math.random()*10,this.target=null,this.job||this.chooseNext(!0)}chooseNext(t=!1){let e=_f(this.x,this.z);this.x=e.x,this.z=e.z;let n=[];for(let a of["x","z"])for(let l of[-1,1]){let c=a==="x"?e.x:e.z,h=a==="x"?e.z:e.x,d=D_(c,l);if(!U_(h,c,d))continue;let u=a===this.axis&&l===-this.dir;n.push({axis:a,dir:l,next:d,weight:u?t?1:.08:a===this.axis?1.5:1})}if(!n.length)return;let s=n.reduce((a,l)=>a+l.weight,0),r=Math.random()*s,o=n[0];for(let a of n)if(r-=a.weight,r<=0){o=a;break}this.axis=o.axis,this.dir=o.dir,this.target=o.axis==="x"?{x:o.next,z:e.z}:{x:e.x,z:o.next},this.baseSpeed=Math.min(1.6*this.d.speed,Math.max(.9*this.d.speed,this.baseSpeed+(Math.random()-.5)*.25))}say(t,e=3.2){this.line=t,this.lineTimer=e}greetLine(t){if(t>9&&Math.random()<.7)return["Whoa! Where\u2019s the fire, kitty?","Zoom zoom! Go on then.","Ha! Someone\u2019s in a hurry."][Math.floor(Math.random()*3)];let e=this.lines?.greet;return e&&Math.random()<.75?e[Math.floor(Math.random()*e.length)]:mf[Math.floor(Math.random()*mf.length)]}idleLine(){let t=this.lines?.idle;return t&&Math.random()<.8?t[Math.floor(Math.random()*t.length)]:gf[Math.floor(Math.random()*gf.length)]}update(t,e,n,s){let r=this.people;this.timer=Math.max(0,this.timer-t),this.cooldown=Math.max(0,this.cooldown-t),this.lineTimer-=t,this.lineTimer<=0&&(this.line="");let o=e.x-this.x,a=e.z-this.z,l=Math.hypot(o,a),c=Math.abs(e.y-this.y)<1.6;r.interactive&&this.state!=="greet"&&this.state!=="chat"&&l<2.3&&c&&this.cooldown===0&&(this.state="greet",this.timer=3+Math.random()*1.8,this.speed=0,this.greeted++,this.say(this.greetLine(n),3.4),this.heartTime=1.6,r.greetings++,r.onGreet?.(this));let h=!1;if(this.state==="greet")this.sitting||this.face(Math.atan2(o,a),t,6),(this.timer===0||l>5)&&(this.state=this.job?"work":"walk",this.cooldown=9+Math.random()*14);else if(this.state==="work")!this.sitting&&l<6&&c?this.face(Math.atan2(o,a),t,2):this.sitting||this.face(this.job.heading,t,2),Math.random()<t*.05&&l<22&&this.say(this.idleLine(),2.6);else if(this.state==="chat")this.partner&&this.face(Math.atan2(this.partner.x-this.x,this.partner.z-this.z),t,5),this.timer===0&&(this.state="walk",this.cooldown=6+Math.random()*10,this.partner=null);else if(this.state==="idle")this.timer===0&&(this.state="walk",Math.random()<.5&&this.chooseNext());else{this.target||this.chooseNext(!0);for(let u of s)if(!(u===this||u.state!=="walk"||u.cooldown>0||this.cooldown>0)&&Math.hypot(u.x-this.x,u.z-this.z)<2&&Math.random()<.5){let f=3.5+Math.random()*3;this.state=u.state="chat",this.timer=u.timer=f,this.partner=u,u.partner=this,this.say(Ba[Math.floor(Math.random()*Ba.length)],2.6),setTimeout(()=>{u.state==="chat"&&u.say(Ba[Math.floor(Math.random()*Ba.length)],2.6)},1800),this.speed=u.speed=0;break}if(this.state==="walk"){let u=this.baseSpeed;for(let m of s)m!==this&&m.axis===this.axis&&Math.hypot(m.x-this.x,m.z-this.z)<1.1&&((m.x-this.x)*(this.axis==="x"?1:0)+(m.z-this.z)*(this.axis==="z"?1:0))*this.dir>0&&(u=Math.min(u,m.speed*.9));l<1&&c&&(u=Math.min(u,.35)),this.speed+=(u-this.speed)*(1-Math.exp(-4*t));let f=this.speed*t,x=this.axis;(this.target[x]-this[x])*this.dir<=f?(this[x]=this.target[x],Math.random()<.18?(this.state="idle",this.timer=1.5+Math.random()*3.5,this.speed=0,Math.random()<.35&&this.say(this.idleLine(),2.4)):this.chooseNext()):(this[x]+=f*this.dir,Math.random()<t*.025&&(this.state="idle",this.timer=1.2+Math.random()*2.5,this.speed=0)),h=this.speed>.05,h&&this.face(this.axis==="x"?Math.atan2(this.dir,0):Math.atan2(0,this.dir),t,7)}}if(!this.job){let u=r.physics.support(this.x,this.z,this.y+.35).y;this.y+=(u-this.y)*(1-Math.exp(-14*t))}this.animate(t,h);let d=this.solid;d.x=this.x,d.z=this.z,d.minX=this.x-d.r,d.maxX=this.x+d.r,d.minZ=this.z-d.r,d.maxZ=this.z+d.r,d.minY=this.y,d.maxY=this.y+this.H}face(t,e,n){this.heading+=Math.atan2(Math.sin(t-this.heading),Math.cos(t-this.heading))*(1-Math.exp(-n*e))}animate(t,e){let n=this.people.time,s=this.state==="greet",r=this.d,o=this.state==="work";this.phase+=t*(e?(r.role==="kid"?7.5:5.6)*this.speed/1.2:0);let a=e?Math.sin(this.phase)*(r.role==="kid"?.7:.55)*Math.min(1,this.speed/.9):0;if(this.legs[0].rotation.x=a,this.legs[1].rotation.x=-a,this.shins[0].rotation.x=e?Math.max(0,-Math.sin(this.phase-.9))*.7:0,this.shins[1].rotation.x=e?Math.max(0,Math.sin(this.phase-.9))*.7:0,this.arms[0].rotation.x=-a*.6,this.arms[1].rotation.x=a*.6,r.stick&&(this.arms[1].rotation.x=-.35+a*.2),(r.carry==="bag"||r.carry==="briefcase")&&(this.arms[1].rotation.x*=.3),r.carry==="clipboard"&&(this.arms[1].rotation.x=-1.2,this.arms[0].rotation.x=-.9+Math.sin(n*2.1)*.1),this.bodyTilt+=((s?this.sitting?.25:.62:0)-this.bodyTilt)*(1-Math.exp(-5*t)),this.reach+=((s?1:0)-this.reach)*(1-Math.exp(-5*t)),this.sit+=((this.sitting?1:0)-this.sit)*(1-Math.exp(-8*t)),this.torso.rotation.x=this.bodyTilt+r.hunch,o){let l=r.role,c=n*2+this.gesture;l==="vendor"||l==="parent"?(this.arms[0].rotation.x=-1.1+Math.sin(c)*.35,this.arms[0].rotation.z=.5+Math.sin(c*.5)*.2):l==="worker"?(this.arms[0].rotation.x=-1.4+Math.max(0,Math.sin(c*1.6))*1.1,this.torso.rotation.x+=.25+Math.max(0,Math.sin(c*1.6))*.08):l==="barista"||l==="grocer"||l==="driver"?(this.arms[0].rotation.x=-1.1+Math.sin(c*1.3)*.2,this.arms[1].rotation.x=-1+Math.cos(c*1.1)*.2):l==="suit"?(this.arms[0].rotation.x=-1.4,this.arms[0].rotation.z=-.9,this.torso.rotation.y=Math.sin(c*.3)*.1):l==="kid"&&(this.body.position.y+=Math.abs(Math.sin(c*1.5))*.08,this.arms[0].rotation.x=-2.6+Math.sin(c*1.5)*.3)}this.arms[1].rotation.x+=-this.reach*.55,this.arms[0].rotation.x+=-this.reach*.25,this.legs[0].rotation.x+=this.reach*.18*(1-this.sit),this.legs[1].rotation.x+=-this.reach*.12*(1-this.sit);for(let l of this.legs)l.rotation.x+=-Math.PI/2*this.sit;for(let l of this.shins)l.rotation.x+=Math.PI/2*this.sit;if(this.body.position.y=(e?Math.abs(Math.sin(this.phase))*.03:Math.sin(n*1.3+this.phase)*.006)-this.reach*.14*(1-this.sit)-this.sit*(this.look.legH*.52-.44),this.sitting&&(this.arms[0].rotation.x=-.9+Math.sin(n*1.2+this.gesture)*.08,this.arms[1].rotation.x=-.9),this.body.rotation.z=e?Math.sin(this.phase)*.03:Math.sin(n*.9+this.phase)*.012,this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.heading,this.heartTime=Math.max(0,this.heartTime-t),this.heart.visible=this.heartTime>0,this.heart.visible){let l=1-this.heartTime/1.6;this.heart.position.set(Math.sin(l*6)*.12,this.H*.6+l*.7,.35),this.heart.material.opacity=Math.min(1,(1-l)*2);let c=.22+Math.sin(l*Math.PI)*.12;this.heart.scale.set(c,c,1)}}dispose(){this.look.torso.dispose(),this.look.thigh.dispose(),this.look.shin.dispose(),this.look.arm.dispose()}},yf=["woman","man","woman","man","uncle","grandma","grandpa","kid","suit","shopper","jogger","parent"],Va=class{constructor(t,e,n=12,s="whiskerfield"){this.scene=t,this.physics=e,this.count=n,this.time=0,this.greetings=0,this.onGreet=null,this.interactive=!1,this.material=new Xe({vertexColors:!0,roughness:.9,flatShading:!0}),this.heartMaterial=new Kr({map:k_(),transparent:!0,depthWrite:!1}),this.rng=Bi(io(s+"people")),this.list=[],this.workers=new Map,this.spawnTimer=0,this.jobTimer=0}get wanderers(){return this.list.filter(t=>!t.job)}spawnAll(t){for(let e=0;e<this.count;e++){let n=new Ha(this,yf[e%yf.length]);this.place(n,t,10,55,null),this.scene.add(n.group),this.list.push(n),this.physics.dynamic.push(n.solid)}}place(t,e,n,s,r){for(let o=0;o<24;o++){let a=Math.random()*Math.PI*2,l=n+Math.random()*(s-n),c=_f(e.x+Math.sin(a)*l,e.z+Math.cos(a)*l),h=Math.hypot(c.x-e.x,c.z-e.z);if(!(h<n||h>s+12)){if(r&&h<40){let d=new D(c.x,1,c.z).project(r);if(Math.abs(d.x)<1.15&&Math.abs(d.y)<1.15&&d.z<1)continue}if(!this.list.some(d=>d!==t&&Math.hypot(d.x-c.x,d.z-c.z)<4)){t.reset(c.x,c.z);return}}}t.reset(e.x+30,e.z+28.45)}syncJobs(t){let e=this.physics.world,n=new Set,s=75;for(let r of e.jobs){if(Math.abs(r.x-t.x)>s||Math.abs(r.z-t.z)>s||(n.add(r),this.workers.has(r)))continue;let o=new Ha(this,r.role,r);this.workers.set(r,o),this.scene.add(o.group),this.list.push(o),this.physics.dynamic.push(o.solid)}for(let[r,o]of this.workers)n.has(r)||(this.workers.delete(r),this.scene.remove(o.group),o.dispose(),this.list.splice(this.list.indexOf(o),1),this.physics.dynamic.splice(this.physics.dynamic.indexOf(o.solid),1))}update(t,e,n,s){if(this.time+=t,this.spawnTimer-=t,this.jobTimer-=t,this.jobTimer<=0&&(this.jobTimer=1,this.syncJobs(e)),this.spawnTimer<=0){this.spawnTimer=.6;for(let r of this.list)!r.job&&Math.hypot(r.x-e.x,r.z-e.z)>90&&this.place(r,e,32,62,s)}for(let r of this.list)r.update(t,e,n,this.list)}speaker(t){let e=null,n=18;for(let s of this.list)if(s.line){let r=Math.hypot(s.x-t.x,s.z-t.z);r<n&&(n=r,e=s)}return e}dispose(){for(let t of this.list)this.scene.remove(t.group),t.dispose();this.list=[],this.workers.clear(),this.physics.dynamic=[]}};function k_(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.fillStyle="#e08a94",t.beginPath(),t.moveTo(32,56),t.bezierCurveTo(4,36,6,10,32,20),t.bezierCurveTo(58,10,60,36,32,56),t.fill();let e=new di(i);return e.colorSpace=Ge,e}var Ke=Math.PI*2,wf=(i,t={})=>new Xe({color:i,roughness:.55,flatShading:!0,...t}),vf=[{kind:"cap",name:"a bottle cap",line:"A bottle cap. Still shiny.",color:"#d9b24a",geo:lt.cylinder,scale:[.11,.035,.11]},{kind:"coin",name:"an old coin",line:"An old coin, worn smooth.",color:"#e6c766",geo:lt.cylinder,scale:[.09,.02,.09]},{kind:"marble",name:"a lost marble",line:"A marble. Somebody will miss this.",color:"#7ec8e3",geo:lt.sphere,scale:[.09,.09,.09]},{kind:"key",name:"a brass key",line:"A little brass key. To what?",color:"#c9a35c",geo:lt.box,scale:[.05,.03,.22]},{kind:"button",name:"a pearl button",line:"A pearl button from a good coat.",color:"#f1ead8",geo:lt.cylinder,scale:[.08,.025,.08]},{kind:"ring",name:"a silver ring",line:"A silver ring. Finders keepers.",color:"#dfe3e6",geo:lt.torus,scale:[.08,.08,.08]},{kind:"wrapper",name:"a foil wrapper",line:"A foil wrapper, folded into a star.",color:"#e07a7a",geo:lt.box,scale:[.16,.01,.12]},{kind:"bell",name:"a tiny bell",line:"A tiny bell. It still rings.",color:"#d8b35a",geo:lt.cone,scale:[.09,.11,.09]}],Nh=new Map,bf=1.8,Fh=null,O_=i=>(Nh.has(i.kind)||Nh.set(i.kind,wf(i.color,{metalness:.35,roughness:.3,emissive:i.color,emissiveIntensity:.45})),Nh.get(i.kind)),Mf={cone:{r:.2,h:.55,sound:"plastic",build:i=>{i.add(Nt(lt.cone,"#e5742f",0,.28,0,.2,.55,.2)),i.add(Nt(lt.box,"#e5742f",0,.02,0,.42,.04,.42)),i.add(Nt(lt.cylinder,"#f3eee0",0,.3,0,.14,.07,.14))}},bin:{r:.26,h:.72,sound:"metal",build:i=>{i.add(Nt(lt.cylinder,"#8d9693",0,.36,0,.26,.72,.26)),i.add(Nt(lt.cylinder,"#6f7976",0,.74,0,.28,.05,.28)),i.add(Nt(lt.box,"#6f7976",0,.8,0,.1,.08,.22))}},bucket:{r:.19,h:.32,sound:"metal",build:i=>{i.add(Nt(lt.tapered,"#6a9ab8",0,.16,0,.22,.32,.22)),i.add(Nt(lt.torus,"#5a6b74",0,.32,0,.2,.2,.2,Math.PI/2))}},bottle:{r:.06,h:.34,sound:"glass",build:i=>{i.add(Nt(lt.cylinder,"#5c8a5a",0,.13,0,.06,.26,.06)),i.add(Nt(lt.cylinder,"#5c8a5a",0,.3,0,.025,.1,.025)),i.add(Nt(lt.cylinder,"#d9b24a",0,.35,0,.03,.02,.03))}},can:{r:.05,h:.13,sound:"metal",build:i=>{i.add(Nt(lt.cylinder,"#c94a3f",0,.065,0,.05,.13,.05)),i.add(Nt(lt.cylinder,"#d8d8d2",0,.13,0,.045,.01,.045))}},pot:{r:.18,h:.36,sound:"clay",build:i=>{i.add(Nt(lt.pot,"#b8693f",0,.14,0,.19,.28,.19)),i.add(Nt(lt.cylinder,"#4b3a2c",0,.27,0,.15,.04,.15)),i.add(Nt(lt.sphere,"#6d9a52",0,.38,0,.17,.14,.17)),i.add(Nt(lt.sphere,"#e36b8a",.07,.46,.03,.05,.05,.05)),i.add(Nt(lt.sphere,"#f4d35e",-.06,.45,-.04,.045,.045,.045))}},crate:{r:.26,h:.34,sound:"wood",build:i=>{i.add(Nt(lt.box,"#c7a97b",0,.17,0,.5,.34,.42)),i.add(Nt(lt.box,"#a98a5e",0,.17,.215,.5,.05,.02)),i.add(Nt(lt.box,"#a98a5e",0,.17,-.215,.5,.05,.02))}},jug:{r:.09,h:.3,sound:"glass",build:i=>{i.add(Nt(lt.tapered,"#e8e2d2",0,.15,0,.1,.3,.1)),i.add(Nt(lt.torus,"#e8e2d2",.1,.17,0,.06,.06,.06,0,Math.PI/2))}}},kh=new Map,B_=i=>(kh.has(i)||kh.set(i,wf(i,{roughness:.8})),kh.get(i));function Nt(i,t,e,n,s,r,o,a,l=0,c=0){let h=new Rt(i,B_(t));return h.position.set(e,n,s),h.scale.set(r,o,a),h.rotation.set(l,0,c),h.castShadow=!0,h}var Sf=["Hey!","Oi \u2014 cat!","Honestly\u2026","Careful, puss.","Was that you?","Cats.","Not again.","Well, that\u2019s that."],Hi=[{id:"none",name:"No hat",need:0,blurb:"Fur, as nature intended."},{id:"leaf",name:"Leaf",need:1,blurb:"A big leaf. It counts.",build:i=>{let t=Nt(lt.sphere,"#7aa04f",0,.02,.02,.3,.03,.24);t.rotation.z=.25,i.add(t),i.add(Nt(lt.cylinder,"#5e7a3a",.1,.03,-.2,.012,.18,.012,1.3))}},{id:"party",name:"Party cone",need:4,blurb:"Somebody is having a birthday.",build:i=>{i.add(Nt(lt.cone,"#f08cae",0,.19,0,.14,.4,.14)),i.add(Nt(lt.cone,"#fff4e6",0,.3,0,.075,.18,.075)),i.add(Nt(lt.sphere,"#f4d35e",0,.4,0,.045,.045,.045))}},{id:"beret",name:"Beret",need:8,blurb:"Tr\xE8s chat.",build:i=>{let t=Nt(lt.sphere,"#b8433e",.03,.03,0,.28,.09,.26);i.add(t),i.add(Nt(lt.cylinder,"#8d2e2a",.04,.12,0,.015,.05,.015))}},{id:"bucket",name:"Bucket hat",need:12,blurb:"Keeps the sun off the ears, mostly.",build:i=>{i.add(Nt(lt.tapered,"#e3c56a",0,.1,0,.3,.2,.3)),i.add(Nt(lt.cylinder,"#e3c56a",0,0,0,.36,.03,.36))}},{id:"straw",name:"Straw hat",need:16,blurb:"For gardens and long afternoons.",build:i=>{i.add(Nt(lt.cylinder,"#e9d79a",0,.09,0,.24,.18,.24)),i.add(Nt(lt.cylinder,"#e9d79a",0,0,0,.44,.025,.44)),i.add(Nt(lt.cylinder,"#5f7a9a",0,.05,0,.25,.04,.25))}},{id:"chef",name:"Chef\u2019s hat",need:22,blurb:"The kitchen is yours now.",build:i=>{i.add(Nt(lt.cylinder,"#f7f3ea",0,.12,0,.22,.24,.22)),i.add(Nt(lt.sphere,"#f7f3ea",0,.3,0,.27,.17,.27))}},{id:"flowers",name:"Flower crown",need:28,blurb:"Made by a kind child at the market.",build:i=>{i.add(Nt(lt.torus,"#6a8f4a",0,.03,0,.26,.26,.26,Math.PI/2));for(let t=0;t<7;t++){let e=t/7*Ke;i.add(Nt(lt.sphere,["#f08cae","#fff4e6","#f4d35e"][t%3],Math.cos(e)*.26,.07,Math.sin(e)*.26,.075,.065,.075))}}},{id:"tophat",name:"Top hat",need:36,blurb:"Distinguished. Slightly too big.",build:i=>{i.add(Nt(lt.cylinder,"#2c2a2e",0,.2,0,.22,.4,.22)),i.add(Nt(lt.cylinder,"#2c2a2e",0,0,0,.36,.03,.36)),i.add(Nt(lt.cylinder,"#b8433e",0,.06,0,.23,.06,.23))}},{id:"crown",name:"Crown",need:50,blurb:"Ruler of every rooftop.",build:i=>{i.add(Nt(lt.cylinder,"#e0b64a",0,.08,0,.24,.16,.24));for(let t=0;t<6;t++){let e=t/6*Ke;i.add(Nt(lt.cone,"#e0b64a",Math.cos(e)*.2,.2,Math.sin(e)*.2,.06,.14,.06)),i.add(Nt(lt.sphere,["#c94a3f","#5f7a9a","#6d9a52"][t%3],Math.cos(e)*.22,.1,Math.sin(e)*.22,.03,.03,.03))}}}];function Ef(i){let t=Hi.find(n=>n.id===i);if(!t?.build)return null;let e=new te;return t.build(e),e.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),e}var Ga=class{constructor(t,e,n,{collected:s=[],knocks:r=0}={}){this.scene=t,this.world=e,this.physics=n,this.collected=new Set(s),this.knocks=r,this.tracked=new Map,this.onShiny=null,this.onKnock=null,this.time=0,this.nearest=1/0}get found(){return this.collected.size}sync(){for(let[t,e]of this.world.chunks)this.tracked.has(t)||this.dress(e);for(let[t,e]of this.tracked)this.world.chunks.has(t)||(this.scene.remove(e.group),this.tracked.delete(t))}dress(t){let e=Bi(fi(t.cx,t.cz,this.world.seed,1313)),n=t.cx*kt,s=t.cz*kt,r=new te;r.name=`fun-${t.key}`,this.scene.add(r);let o={group:r,shinies:[],props:[]};this.tracked.set(t.key,o);let a=(u,f,x=80)=>this.physics.support(u,f,x),l=[],c=t.buildings.filter(u=>u.kind!=="floor").sort(()=>e()-.5).slice(0,3);for(let u of c)l.push([u.x+(e()-.5)*u.w*.5,u.z+(e()-.5)*u.d*.5,"roof"]);for(let u of t.landmarks)u.kind==="tower"?l.push([u.x+(e()-.5)*3,u.z+(e()-.5)*3,"tower"]):u.kind==="playground"?l.push([u.x+(e()-.5)*8,u.z+(e()-.5)*8,"play"]):(u.kind==="market"||u.kind==="works")&&l.push([u.x+(e()-.5)*10,u.z+(e()-.5)*10,"ground"]);for(let u of t.parks){let f=e()*Ke;l.push([u.x+Math.cos(f)*7,u.z+Math.sin(f)*7,"ground"])}l.push([n+(e()>.5?28.45:-28.45),s+(e()-.5)*40,"ground"]),l.forEach(([u,f,x],g)=>{let m=a(u,f);if(!m||m.y>60||x==="ground"&&m.y>1.2)return;let p=`${t.key}:s${g}`;if(this.collected.has(p))return;let S=vf[fi(t.cx*8+g,t.cz,this.world.seed,1717)%vf.length],v=new Rt(S.geo,O_(S));v.scale.set(...S.scale.map(A=>A*bf)),v.castShadow=!0,S.kind==="ring"&&(v.rotation.x=Math.PI/2);let y=m.y+.22;v.position.set(u,y,f),r.add(v),Fh||(Fh=new Cn({color:"#fff1b8",transparent:!0,opacity:.2,depthWrite:!1}));let E=new Rt(lt.softSphere,Fh);E.scale.setScalar(.18),E.position.set(u,y,f),r.add(E),o.shinies.push({id:p,kind:S,mesh:v,glow:E,x:u,y,z:f,phase:e()*Ke})});let h=6+Math.floor(e()*4),d=Object.keys(Mf);for(let u=0;u<h;u++){let f=e()>.5?1:-1,x=(e()-.5)*52,[g,m]=e()>.5?[n+f*(28.45+(e()-.5)*.8),s+x]:[n+x,s+f*(28.45+(e()-.5)*.8)];if(Math.abs(Math.abs(g-n)-27)<1.6&&Math.abs(m-s-14)<1.8||Math.abs(Math.abs(g-n)-27.2)<1&&Math.abs(m-s+27.2)<1)continue;let p=a(g,m,3);if(!p||p.y>.3)continue;let S=d[Math.floor(e()*d.length)],v=Mf[S],y=new te;v.build(y),y.position.set(g,p.y,m),y.rotation.y=e()*Ke,r.add(y),o.props.push({kind:S,def:v,g:y,x:g,y:p.y,z:m,vx:0,vy:0,vz:0,state:"up",ang:0,spin:0,axis:new D(1,0,0),yaw:y.rotation.y,rest:0})}}update(t,e,n){this.time+=t;let s=this.time,r=e.pos.x,o=e.pos.z,a=e.pos.y;this.nearest=1/0;let l=Math.floor((r+kt/2)/kt),c=Math.floor((o+kt/2)/kt);for(let[,h]of this.tracked){if(!h.shinies.length&&!h.props.length)continue;let d=this.world.chunks.get(h.group.name.slice(4));if(!(!d||Math.abs(d.cx-l)>1||Math.abs(d.cz-c)>1)){for(let u=h.shinies.length-1;u>=0;u--){let f=h.shinies[u],x=f.mesh;x.rotation.y=s*2.2+f.phase,x.position.y=f.y+Math.sin(s*2.6+f.phase)*.035;let g=(1+Math.max(0,Math.sin(s*3.1+f.phase*2))**8*.35)*bf;x.scale.set(f.kind.scale[0]*g,f.kind.scale[1]*g,f.kind.scale[2]*g),f.glow.position.y=x.position.y,f.glow.scale.setScalar(.17+Math.sin(s*4+f.phase)*.035);let m=f.x-r,p=f.z-o,S=f.y-(a+.3),v=Math.hypot(m,p);v<this.nearest&&Math.abs(S)<3&&(this.nearest=v),v<qt.radius+.36&&Math.abs(S)<.8&&(h.shinies.splice(u,1),h.group.remove(x),h.group.remove(f.glow),this.collected.add(f.id),this.onShiny?.(f))}for(let u of h.props)this.stepProp(u,t,e,n)}}}stepProp(t,e,n,s){let r=n.pos.x,o=n.pos.z,a=n.pos.y,l=t.def,c=t.x-r,h=t.z-o,d=Math.hypot(c,h);if(d>30)return;let u=t.state==="down"&&Math.abs(t.ang)>.7,f=u?l.r*2:l.h,x=u?Math.max(l.r,l.h*.5):l.r;if(t.state!=="air"&&d<qt.radius+x+.03&&a<t.y+f&&a+.5>t.y&&n.speed>.6){let v=Math.hypot(n.vx,n.vz)||1,y=v>.5?n.vx/v:c/(d||1),E=v>.5?n.vz/v:h/(d||1),A=Math.min(4.5,1.1+n.speed*.32)*(u?1.1:1);t.vx=y*A,t.vz=E*A,t.vy=u?1.1+n.speed*.05:1.9+n.speed*.12,t.axis.set(E,0,-y).normalize(),t.spin=5+n.speed*.7,t.state="air",t.rest=0,this.knocks++,this.onKnock?.(t,l.sound);let C=s?.list?.filter(R=>!R.sitting&&Math.hypot(R.x-t.x,R.z-t.z)<7).sort((R,b)=>Math.hypot(R.x-t.x,R.z-t.z)-Math.hypot(b.x-t.x,b.z-t.z))[0];C&&Math.random()<.7&&C.say(Sf[Math.floor(Math.random()*Sf.length)],2.4)}if(t.state!=="air")return;t.vy-=22*e,t.vx*=1-e*.3,t.vz*=1-e*.3;let g=t.x+t.vx*e,m=t.z+t.vz*e;this.physics.support(g,m,t.y+.4).y>t.y+.2?(t.vx*=-.35,t.vz*=-.35):(t.x=g,t.z=m),t.y+=t.vy*e,t.ang+=t.spin*e;let S=this.physics.support(t.x,t.z,t.y+.05).y;if(t.y<=S)if(t.y=S,t.vy<-2.2)t.vy=-t.vy*.28,t.vx*=.55,t.vz*=.55,t.spin*=.6,this.onKnock?.(t,l.sound,!0);else{let v=Math.round(t.ang/(Math.PI/2))*(Math.PI/2),y=Math.abs((v%Ke+Ke)%Ke)<.01||Math.abs((v%Ke+Ke)%Ke-Ke)<.01;t.ang=y?0:(v%Ke+Ke)%Ke<Math.PI?Math.PI/2:-Math.PI/2,y||(t.y=S+l.r*.98),t.vx=t.vy=t.vz=0,t.spin=0,t.state="down"}t.g.position.set(t.x,t.y,t.z),t.g.quaternion.setFromAxisAngle(t.axis,t.ang).multiply(new We().setFromAxisAngle(new D(0,1,0),t.yaw))}listShinies(){let t=[];for(let[,e]of this.tracked)for(let n of e.shinies)t.push({id:n.id,kind:n.kind.kind,x:n.x,y:n.y,z:n.z});return t}listProps(){let t=[];for(let[,e]of this.tracked)for(let n of e.props)t.push({kind:n.kind,x:n.x,y:n.y,z:n.z,state:n.state});return t}};var Tf=[{body:"#f2d84a",head:"#f7e27a",wing:"#d8bb2e"},{body:"#7fb6e6",head:"#e8eef2",wing:"#4f86bd"},{body:"#8fc46a",head:"#e6e07a",wing:"#5f9548"},{body:"#e9e4dc",head:"#f4f1ea",wing:"#aeb3b8"},{body:"#9ac3dc",head:"#f0f3f5",wing:"#6d94b4"}],z_=new Set(["lamp","post","chimney","pergola","sill","tree","pole","awning","bench","fountain","box"]),Oh=new Map,Mr=i=>(Oh.has(i)||Oh.set(i,new fr({color:i})),Oh.get(i)),Bh=new Ln(1,10,8),Af=new Je(1,.08,.6),H_=new Pn(.5,1,6),V_=new Je(.035,.02,.16),zh=class{constructor(t,e){this.birds=t,this.group=new te,this.wingFlap=0,this.phase=Math.random()*9;let n=new Rt(Bh,Mr(e.body));n.scale.set(.11,.1,.15),n.position.y=.1,this.group.add(n);let s=new Rt(Bh,Mr(e.head));s.scale.set(.08,.08,.08),s.position.set(0,.19,.11),this.group.add(s);let r=new Rt(H_,Mr("#e5a24a"));r.scale.set(.04,.05,.04),r.rotation.x=Math.PI/2,r.position.set(0,.185,.2),this.group.add(r);let o=new Rt(V_,Mr(e.wing));o.position.set(0,.1,-.19),o.rotation.x=-.3,this.group.add(o),this.wings=[-1,1].map(a=>{let l=new Rt(Af,Mr(e.wing));return l.scale.set(.18,1,.2),l.position.set(a*.09,.13,0),l.geometry=Af,l.userData.side=a,this.group.add(l),l});for(let a of[-1,1]){let l=new Rt(Bh,Mr("#2a2a2a"));l.scale.setScalar(.014),l.position.set(a*.05,.21,.16),this.group.add(l)}this.state="perch",this.perch=null,this.from=new D,this.to=new D,this.t=0,this.flight=1,this.hopTimer=2+Math.random()*4,this.heading=Math.random()*Math.PI*2,this.cooldown=0}settle(t){this.perch=t,this.state="perch",this.group.position.set(t.x,t.y,t.z),this.heading=t.heading??Math.random()*Math.PI*2,this.group.rotation.set(0,this.heading,0),this.hopTimer=3+Math.random()*6,this.wingFlap=0}flyTo(t,e){this.from.copy(this.group.position),this.to.set(t.x,t.y,t.z),this.perch=t,this.state="fly",this.t=0;let n=this.from.distanceTo(this.to);this.flight=Math.max(.9,n/(e?7:5)),this.arc=1.2+Math.min(3,n*.12)+(e?.8:0),this.heading=Math.atan2(this.to.x-this.from.x,this.to.z-this.from.z),this.cooldown=e?2:0}update(t,e,n,s){let r=this.birds,o=this.group.position;this.cooldown=Math.max(0,this.cooldown-t);let a=e.x-o.x,l=e.z-o.z,c=e.y-o.y,h=Math.hypot(a,l);if(this.state==="perch"){let d=Math.sin(s*5+this.phase)*.004+(Math.sin(s*1.3+this.phase)>.95?.01:0);this.group.position.y=this.perch.y+d,this.group.rotation.y=this.heading+Math.sin(s*.7+this.phase)*.35,this.hopTimer-=t;let u=h<(n>8?5.5:2.6)&&Math.abs(c)<3.2;if(u||this.hopTimer<=0){let f=r.findPerch(e,u?10:4,40,this.perch);f?(this.flyTo(f,u),u&&r.onStartle?.(this)):this.hopTimer=2}for(let f of this.wings)f.rotation.z=f.userData.side*.12}else{this.t=Math.min(1,this.t+t/this.flight);let d=this.t,u=d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;o.lerpVectors(this.from,this.to,u),o.y+=Math.sin(d*Math.PI)*this.arc;let f=Math.cos(d*Math.PI)*this.arc*Math.PI/Math.max(1,this.from.distanceTo(this.to));this.group.rotation.set(-Math.atan(f)*.5,this.heading,Math.sin(s*3+this.phase)*.12),this.wingFlap+=t*26;let x=Math.sin(this.wingFlap)*.9;for(let g of this.wings)g.rotation.z=g.userData.side*(x+.2);this.t>=1&&this.settle(this.perch)}}},Wa=class{constructor(t,e,n=12){this.scene=t,this.world=e,this.count=n,this.list=[],this.time=0,this.spawnTimer=0,this.onStartle=null,this.startles=0,this.group=new te,t.add(this.group)}perchesNear(t,e,n){let s=[];for(let r of this.world.colliders){if(!z_.has(r.kind)||r.sensor)continue;let o=(r.minX+r.maxX)/2,a=(r.minZ+r.maxZ)/2;if(!(Math.abs(o-t)>n||Math.abs(a-e)>n))if(r.shape==="ellipsoid"){let l=Math.random()*Math.PI*2,c=r.rx*.72;s.push({x:r.x+Math.cos(l)*c,y:r.y+Math.sqrt(Math.max(0,1-.72*.72))*r.ry*.6,z:r.z+Math.sin(l)*c,heading:l+Math.PI/2,solid:r})}else if(r.shape==="cylinder")s.push({x:r.x,y:r.maxY,z:r.z,solid:r});else{let l=r.maxX-r.minX>=r.maxZ-r.minZ,c=.15+Math.random()*.7;s.push({x:l?r.minX+(r.maxX-r.minX)*c:o,y:r.maxY,z:l?a:r.minZ+(r.maxZ-r.minZ)*c,heading:l?Math.PI/2:0,solid:r})}}return s}findPerch(t,e,n,s=null){let r=this.perchesNear(t.x,t.z,n).filter(l=>{let c=Math.hypot(l.x-t.x,l.z-t.z);return c<e||c>n||l.solid===s?.solid?!1:!this.list.some(h=>h.perch&&h.perch.solid===l.solid&&Math.hypot(h.perch.x-l.x,h.perch.z-l.z)<.35)});if(!r.length)return null;let o=r.filter(l=>l.y<3.4),a=o.length&&Math.random()<.75?o:r;return a[Math.floor(Math.random()*a.length)]}spawnAll(t){for(let e=0;e<this.count;e++){let n=new zh(this,Tf[e%Tf.length]),s=this.findPerch(t,6,45)||{x:t.x+8,y:.9,z:t.z+6,solid:null};n.settle(s),this.group.add(n.group),this.list.push(n)}}update(t,e,n){if(this.time+=t,this.spawnTimer-=t,this.spawnTimer<=0){this.spawnTimer=1;for(let s of this.list)if(Math.hypot(s.group.position.x-e.x,s.group.position.z-e.z)>75){let r=this.findPerch(e,18,50);r&&s.settle(r)}}for(let s of this.list)s.update(t,e,n,this.time)}dispose(){for(let t of this.list)this.group.remove(t.group);this.list=[]}};var Rf="whiskerfield.installed.v1",Sr=[],wr=(i,t)=>{Sr.push({name:i,result:t,at:Date.now()}),Sr.length>40&&Sr.shift()},qa=matchMedia("(pointer:coarse)").matches,Cf=/iP(hone|ad|od)/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,If=/Safari/.test(navigator.userAgent)&&!/Chrom|Edg|OPR|Firefox/.test(navigator.userAgent);function Hh(){return matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||matchMedia("(display-mode: window-controls-overlay)").matches||navigator.standalone===!0||new URLSearchParams(location.search).get("launch")==="app"}function Xa(){try{localStorage.setItem(Rf,String(Date.now()))}catch{}}function Vh(){try{return!!localStorage.getItem(Rf)}catch{return!1}}async function Pf(){if(Hh())return Xa(),!0;if(Vh())return!0;if(navigator.getInstalledRelatedApps)try{if((await navigator.getInstalledRelatedApps()).some(t=>t.platform==="webapp"))return Xa(),!0}catch{}return!1}function Er(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}async function Gh(i=document.documentElement){if(Er())return!0;try{if(i.requestFullscreen)await i.requestFullscreen({navigationUI:"hide"});else if(i.webkitRequestFullscreen)await i.webkitRequestFullscreen();else return wr("fullscreen","unsupported"),!1;return wr("fullscreen","ok"),!0}catch(t){return wr("fullscreen",t?.name||"error"),!1}}async function Lf(){try{document.exitFullscreen&&document.fullscreenElement?await document.exitFullscreen():document.webkitExitFullscreen&&document.webkitFullscreenElement&&await document.webkitExitFullscreen()}catch{}Xh()}async function Wh(){try{return screen.orientation?.lock?(await screen.orientation.lock("landscape"),wr("orientation","ok"),!0):(wr("orientation","unsupported"),!1)}catch(i){return wr("orientation",i?.name||"error"),!1}}function Xh(){try{screen.orientation?.unlock?.()}catch{}}function qh(){return innerHeight>innerWidth}function Df(){return qa&&Math.min(screen.width,screen.height)<820}async function Yh(){if(!qa)return{fullscreen:!1,landscape:!1};let i=await Gh(),t=await Wh();return{fullscreen:i,landscape:t}}var xs=null,Uf=!1;async function Zh(i){if(Uf=i,!i){try{await xs?.release()}catch{}xs=null;return}if(xs||document.hidden||!navigator.wakeLock?.request)return;let t={name:"wakelock",ok:!1};Sr.push(t);try{xs=await navigator.wakeLock.request("screen"),t.ok=!0,xs.addEventListener("release",()=>{xs=null})}catch{xs=null}}document.addEventListener("visibilitychange",()=>{!document.hidden&&Uf&&Zh(!0)});var $=i=>document.getElementById(i),Cs=Un.clamp,al="whiskerfield.journey.v1";var an=qa,W_=7,X_=12.5,q_=1/90,Bf=3.15,zf=new URLSearchParams(location.search),Hf=()=>["clover","willow","honey","fern","peach","moss"][Math.floor(Math.random()*6)]+"-"+Math.floor(100+Math.random()*900),Jt=null;try{let i=JSON.parse(localStorage.getItem(al));i?.version===1&&typeof i.seed=="string"&&(Jt=i)}catch{}var Ya=zf.get("seed")?.trim().slice(0,40)||null,Vf=i=>{if(i?.seed)try{localStorage.setItem(al+":"+i.seed,JSON.stringify({...i,settings:void 0}))}catch{}},Y_=i=>{try{let t=JSON.parse(localStorage.getItem(al+":"+i));return t?.version===1&&t.seed===i?t:null}catch{return null}};if(Jt&&Ya&&Ya!==Jt.seed){Vf(Jt);let i=Y_(Ya);Jt=i?{...i,settings:Jt.settings}:{version:1,settings:Jt.settings,started:Jt.started}}var Xt={audio:!0,volume:.4,sensitivity:.7,shadows:!an,reducedMotion:matchMedia("(prefers-reduced-motion:reduce)").matches,immersive:!0,...Jt?.settings},Z_=i=>i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z)&&Math.abs(i.x)<1e6&&Math.abs(i.z)<1e6&&i.y>=0&&i.y<100,K=ff(Z_(Jt?.position)?{...Jt.position,heading:Number.isFinite(Jt?.heading)?Jt.heading:.55}:null),kn=new Set(Array.isArray(Jt?.roofs)?Jt.roofs.filter(i=>typeof i=="string").slice(-1e4):[]),_i=new Set(Array.isArray(Jt?.gardens)?Jt.gardens.filter(i=>typeof i=="string").slice(-1e4):[]),$n=new Set(Array.isArray(Jt?.places)?Jt.places.filter(i=>typeof i=="string").slice(-1e4):[]),Jn=Number.isFinite(Jt?.friends)?Jt.friends:0,Gf=Array.isArray(Jt?.shinies)?Jt.shinies.filter(i=>typeof i=="string").slice(-2e4):[],Wf=Number.isFinite(Jt?.knocks)?Jt.knocks:0,$i=typeof Jt?.hat=="string"&&Hi.some(i=>i.id===Jt.hat)?Jt.hat:"none",re=null,Se=new Fa;Se.enabled=Xt.audio;Se.volume=Xt.volume;var ee,Yi,je,yi,_e,Te,Ne,Oe,Ms,Wi,Vi,xi,Xf=[],Xi,De=!1,Qe=!1,Ce=null,nu=null,iu=!1,Nf=!1,on=Number.isFinite(Jt?.cameraYaw)?Jt.cameraYaw:.56,Is=.34,Zi=an?5:5.4,Rr=on,Ds=Is,ws=Zi,co=0,Za=0,$a=0,$h=0,Jh=0,Kh=0,Ff=0,su=0,ys=0,so=16,Ps=!1,qi=!1,Ka=!1,Es=!1,ja=0,Qa=0,tl=null,ro=0,jh=!1,el=0,nl=0,il=!1,sl=!1,_s=[],Ja="",Yn=null,vs=null,qf=sessionStorage.getItem("whiskerfield.portrait")==="1",qe=new Set,mi=new Map,gi=new D,pn=new D,$_=new D,Tr=new D,Re=new Ie,kf=new Ut,ru=[],ou=[],Ts=[],Zn=null,As=!1,Gi=Hh()||Vh(),Yf=!1,Qh=0,tu=null,vn={x:0,y:0,yaw:0,sprint:!1,baseSpeed:W_,sprintSpeed:X_,jump:!1,jumpHeld:!1,climb:!1,autoClimb:!0,resting:!1},J_={jump:()=>Se.jump(),land:()=>Se.land(),mantle:()=>Se.chirp(),bounce:()=>{Se.chirp(),lo()}},Nn={x:0,y:0,climb:!1,sprint:!1,jump:!1,jumpHeld:!1},ao=null,hu=!1,au=()=>{hu=!0};function Me(){if(ee){hu=!1,ao={x:K.pos.x,z:K.pos.z,yaw:on};try{localStorage.setItem(al,JSON.stringify({version:1,seed:ee.seedText,position:{x:K.pos.x,y:K.pos.y,z:K.pos.z},heading:K.heading,cameraYaw:on,roofs:[...kn].slice(-1e4),gardens:[..._i].slice(-1e4),places:[...$n].slice(-1e4),friends:Jn,shinies:[...re.collected].slice(-2e4),knocks:re.knocks,hat:$i,settings:Xt,started:De}))}catch{Nf||(Nf=!0,Be("Saving is blocked in this browser (private mode?). Progress will not be kept.","note",5e3))}}}function Be(i,t="sun",e=3200){clearTimeout(Ff);let n=$("toast");$("toast-text").textContent=i,n.dataset.kind=t,n.classList.add("show"),n.classList.toggle("action",t==="update"),Ff=setTimeout(()=>n.classList.remove("show"),e)}function Ls(){$("roof-count").textContent=kn.size,$("garden-count").textContent=_i.size,$("friend-count").textContent=Jn,$("place-count").textContent=$n.size,$("shiny-count").textContent=re?re.found:0}function Zf(i,t){i.querySelector("use")?.setAttribute("href",t)}function Ss(){for(let[i,t]of[["audio-toggle","audio"],["shadow-toggle","shadows"],["motion-toggle","reducedMotion"],["immersive-toggle","immersive"]])$(i).classList.toggle("on",!!Xt[t]),$(i).setAttribute("aria-checked",String(!!Xt[t]));$("volume-slider").value=Math.round(Xt.volume*100),$("volume-label").textContent=Math.round(Xt.volume*100)+"%",$("sensitivity-slider").value=Math.round(Xt.sensitivity*100),$("sensitivity-label").textContent=Math.round(Xt.sensitivity*100)+"%",Zf($("sound-button"),Xt.audio?"#i-sound":"#i-muted"),$("sound-button").setAttribute("aria-label",Xt.audio?"Turn sound off":"Turn sound on"),_e&&cu(),Wi&&(Wi.count=Xt.reducedMotion?12:48)}function ho(){qe.clear(),Ps=!1,qi=!1,Ka=!1,ja=Qa=0,el=nl=0,il=!1,sl=!1,K.jumpBuffer=0,$("joystick-knob").style.transform="translate(0px,0px)",$("joystick").classList.remove("engaged"),document.querySelectorAll(".touch-action.pressed").forEach(i=>i.classList.remove("pressed"))}function bn(i){nu=document.activeElement,ho(),Ce=i,$("modal-backdrop").hidden=!1,document.querySelectorAll(".modal").forEach(t=>t.hidden=t.id!==i),$(i).scrollTop=0,i==="map-modal"&&(Yn={x:K.pos.x,z:K.pos.z},ol()),i==="settings-modal"&&($("seed-label").textContent="Seed: "+ee.seedText,$("new-world-confirm").hidden=!0,Ss(),Fn()),i==="install-modal"&&Fn(),i==="hats-modal"&&(uu(),$("hat-button").classList.remove("new")),requestAnimationFrame(()=>$(i).querySelector("button")?.focus({preventScroll:!0}))}function Ar(){Ce&&(Ce=null,$("modal-backdrop").hidden=!0,document.querySelectorAll(".modal").forEach(i=>i.hidden=!0),ho(),nu?.isConnected?nu.focus({preventScroll:!0}):$("world").focus({preventScroll:!0}))}function $f(){!iu||De||(De=!0,Qe=!1,su=0,document.body.classList.add("playing"),document.body.classList.remove("resting"),Zh(!0),$("welcome").setAttribute("aria-hidden","true"),$("welcome").inert=!0,$("world").focus({preventScroll:!0}),Xt.audio&&Se.start(),Me(),Xt.immersive&&Yh().then(bs),Be(Jt?.started?"Welcome back. You are where you left off.":"Try a roof first. Hold E at a wall, or jump at it and keep pushing.","sun",4200))}function lu(){if(!(!De||Ce)){if(!K.grounded){Be("You can only nap on the ground.","note",2200);return}Qe=!Qe,ho(),document.body.classList.toggle("resting",Qe),$("rest-button").setAttribute("aria-pressed",String(Qe)),Qe&&(Be("Napping. Move to get up.","moon",2600),Se.purr())}}function bs(){let i=De&&Df()&&qh()&&!qf;$("rotate").hidden=!i,document.body.classList.toggle("portrait",qh());let t=Er();Zf($("fullscreen-button"),t?"#i-shrink":"#i-expand"),$("fullscreen-button").setAttribute("aria-label",t?"Leave fullscreen":"Fullscreen")}function K_(){Te=new ha,Te.background=new Ut("#c9d4c8"),Te.fog=new ca("#c9d4c8",58,an?108:145),_e=new la({canvas:$("world"),antialias:!0,powerPreference:"high-performance"}),_e.setPixelRatio(Math.min(devicePixelRatio,an?1.4:1.5)),_e.setSize(innerWidth,innerHeight),_e.outputColorSpace=Ge,_e.toneMapping=ph,_e.toneMappingExposure=1.05,_e.shadowMap.enabled=Xt.shadows,_e.shadowMap.type=dh,Ne=new $e(50,innerWidth/innerHeight,.08,350),Te.add(new wa("#dfe6d8","#7e8a68",1.35)),Oe=new Ea("#ffe6c0",2.2),Oe.position.set(-35,60,25),Oe.castShadow=!0,Oe.shadow.mapSize.set(an?1024:2048,an?1024:2048),Oe.shadow.camera.left=-36,Oe.shadow.camera.right=36,Oe.shadow.camera.top=36,Oe.shadow.camera.bottom=-36,Oe.shadow.camera.near=1,Oe.shadow.camera.far=150,Oe.shadow.bias=-3e-4,Oe.shadow.normalBias=.03,Oe.shadow.radius=3,Te.add(Oe),Te.add(Oe.target);let i=(()=>{let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,128,128);for(let s=0;s<2400;s++)e.fillStyle=`rgba(60,75,45,${Math.random()*.1})`,e.fillRect(Math.random()*128,Math.random()*128,1+Math.random()*2,1);let n=new di(t);return n.wrapS=n.wrapT=ls,n.repeat.set(180,180),n})();Ms=new Rt(new Wn(1200,1200),new Xe({color:"#93a86f",roughness:1,map:i})),Ms.rotation.x=-Math.PI/2,Ms.position.y=-.45,Ms.receiveShadow=!0,Te.add(Ms),Jf(Ya||Jt?.seed||Hf()),yi=new Na(Te,qt.scale),yi.root.position.copy(K.pos),yi.root.rotation.y=K.heading,rl($i,!0),j_(),Q_(),Ss(),Ls(),gi.copy(K.pos),jf(1,!0),$("seed-label").textContent="Seed: "+ee.seedText,Jt?.started&&($("start-button").firstChild.textContent="Wander on ",$("welcome-note").lastChild.textContent=" Just as you left it. Ready when you are."),iu=!0,_e.render(Te,Ne),requestAnimationFrame(()=>{requestAnimationFrame(()=>{$("loading").classList.add("done"),setTimeout(()=>$("loading").hidden=!0,700)})}),requestAnimationFrame(ep),zf.get("test")==="1"&&(window.__whiskerfield={player:K,get world(){return ee},get people(){return je},get birds(){return Xi},get physics(){return Yi},cat:yi,renderer:_e,camera:Ne,input:vn,hold:Nn,keys:qe,start:$f,save:Me,adapt:tp,getQuality:()=>({level:Rs,pixelRatio:_e.getPixelRatio(),shadows:_e.shadowMap.enabled}),mapCenter:()=>Yn,step:t=>{Kf(t),je.interactive=De&&!Ce,je.update(t,K.pos,K.speed,Ne),Xi.update(t,K.pos,K.speed),re.sync(),re.update(t,K,je)},get fun(){return re},wearHat:rl,hats:Hi,discover:Qf,platformCalls:Sr,getState:()=>({ready:iu,started:De,resting:Qe,modal:Ce,position:K.pos.toArray(),speed:K.speed,grounded:K.grounded,climbing:!!K.climbing,support:K.support?.kind||null,roofs:kn.size,gardens:_i.size,places:$n.size,friends:Jn,shinies:re?re.found:0,knocks:re?re.knocks:0,hat:$i,chunks:ee.chunks.size,colliders:ee.colliders.length,npcs:je.list.length,greetings:je.greetings,drawCalls:_e.info.render.calls,triangles:_e.info.render.triangles,offlineReady:As,installed:Gi,installButtonHidden:$("install-button").hidden,fullscreen:Er(),cameraDistance:Zi}),teleport:(t,e,n)=>{K.pos.set(t,e,n),K.vx=K.vz=K.vy=0,K.climbing=null,K.grounded=!1,ee.update(K.pos,25)},setCamera:(t,e=Is,n=Zi)=>{on=Rr=t,Is=Ds=e,Zi=ws=n},getSettings:()=>({...Xt})})}function Jf(i){ee=new Da(Te,i),ee.radius=an?1:2,ee.update(K.pos,an?5:9),Yi=new Oa(ee),je=new Va(Te,Yi,an?9:14,i),je.onGreet=()=>{Jn++,Ls(),Se.greet(),Jn===1&&Be("Your first hello. People remember a friendly cat.","heart",3600),Jn%10===0&&Me()},je.spawnAll(K.pos),Xi=new Wa(Te,ee,an?8:14),Xi.onStartle=()=>{Xi.startles++,Math.random()<.5&&Se.tweet()},Xi.spawnAll(K.pos),re=new Ga(Te,ee,Yi,{collected:Gf,knocks:Wf}),re.sync(),re.onShiny=t=>{let e=re.found;Ls(),Se.shiny(),lo(t.x,t.y,t.z),au();let n=Hi.find(s=>s.need===e&&s.id!=="none");Be(n?`${t.kind.line} That makes ${e} \u2014 the ${n.name.toLowerCase()} is yours. Press H.`:e===1?`${t.kind.line} A cat could start a collection.`:t.kind.line,"sun",n?4600:2600),n&&$("hat-button").classList.add("new"),(e%5===0||n)&&Me()},re.onKnock=(t,e,n)=>{Se.clatter(e,n),!n&&(au(),re.knocks===1?Be("Oops. It was in the way.","leaf",2600):re.knocks===10&&Be("Ten things knocked over. The street has noticed.","leaf",3e3))},yi&&rl($i,!0)}function rl(i,t=!1){let e=Hi.find(n=>n.id===i)||Hi[0];return re&&re.found<e.need?(t||Be(`Find ${e.need-re.found} more ${e.need-re.found===1?"shiny":"shinies"} for the ${e.name.toLowerCase()}.`,"note",2600),!1):($i=e.id,yi.setHat(e.id,Ef(e.id)),au(),t||(Me(),uu()),!0)}function uu(){let i=$("hat-list");if(!i)return;i.textContent="";let t=re?re.found:0;$("hat-found").textContent=t;for(let e of Hi){let n=document.createElement("button");n.type="button",n.className="hat-card",n.dataset.hat=e.id;let s=t<e.need,r=$i===e.id;n.classList.toggle("locked",s),n.classList.toggle("wearing",r),n.setAttribute("aria-pressed",r?"true":"false"),n.innerHTML="<strong></strong><small></small><em></em>",n.querySelector("strong").textContent=e.name,n.querySelector("small").textContent=e.blurb,n.querySelector("em").textContent=r?"Wearing":s?`${e.need} shinies`:e.need?"Found":"",n.addEventListener("click",()=>{rl(e.id)&&uu()}),i.appendChild(n)}}function j_(){let i=Bi(io(ee.seedText+"air"));Wi=new ur(new Wn(.14,.25),new Cn({color:"#e8d59a",side:yn,transparent:!0,opacity:.72}),48),Wi.instanceMatrix.setUsage(Ra),Wi.frustumCulled=!1,Te.add(Wi);for(let n=0;n<48;n++)ru.push({x:(i()-.5)*70,y:1+i()*12,z:(i()-.5)*70,phase:i()*Math.PI*2,speed:.3+i()*.5});Vi=new ur(new Wn(.12,.15),new Cn({side:yn}),24),Vi.instanceMatrix.setUsage(Ra),Vi.frustumCulled=!1,Te.add(Vi);for(let n=0;n<12;n++)ou.push({x:(i()-.5)*55,z:(i()-.5)*55,y:.6+i()*1.6,phase:i()*7}),Vi.setColorAt(n*2,kf.set(["#f1d995","#e7ba95","#e9e7c7"][n%3])),Vi.setColorAt(n*2+1,kf.set(["#f1d995","#e7ba95","#e9e7c7"][n%3]));xi=new ur(new va(.19),new Xe({color:"#edcc7d",emissive:"#c7a04d",emissiveIntensity:.3,roughness:.5}),400),xi.instanceMatrix.setUsage(Ra),xi.count=0,xi.frustumCulled=!1,Te.add(xi);let t=new fr({color:"#f2f2df",transparent:!0,opacity:.65,depthWrite:!1}),e=new hs(1,1);for(let n=0;n<9;n++){let s=new te;for(let r=0;r<4;r++){let o=new Rt(e,t);o.position.set(r*3.5,Math.sin(r)*1.2,0),o.scale.set(4.5,2.1+r%2,2.8),s.add(o)}s.position.set((i()-.5)*240,38+i()*20,(i()-.5)*240),Te.add(s),Xf.push(s)}}function Q_(){$("start-button").addEventListener("click",$f),$("welcome-help").addEventListener("click",()=>bn("help-modal")),$("settings-help").addEventListener("click",()=>bn("help-modal")),$("settings-button").addEventListener("click",()=>bn("settings-modal")),$("map-button").addEventListener("click",()=>bn("map-modal")),$("hat-button").addEventListener("click",()=>bn("hats-modal")),$("brand").addEventListener("click",h=>{h.preventDefault(),bn("settings-modal")}),$("rest-button").addEventListener("click",lu),$("fullscreen-button").addEventListener("click",async()=>{Er()?await Lf():(await Gh(),an&&await Wh()),bs()}),$("rotate-continue").addEventListener("click",()=>{qf=!0,sessionStorage.setItem("whiskerfield.portrait","1"),bs()}),$("rotate-fullscreen").addEventListener("click",async()=>{await Yh(),bs()}),document.querySelectorAll("[data-close]").forEach(h=>h.addEventListener("click",Ar)),$("modal-backdrop").addEventListener("click",h=>{h.target===$("modal-backdrop")&&Ar()}),$("sound-button").addEventListener("click",()=>{Xt.audio=!Xt.audio,Se.setEnabled(Xt.audio),Ss(),Me()}),$("audio-toggle").addEventListener("click",()=>{Xt.audio=!Xt.audio,Se.setEnabled(Xt.audio),Ss(),Me()}),$("shadow-toggle").addEventListener("click",()=>{Xt.shadows=!Xt.shadows,Ss(),_e.shadowMap.needsUpdate=!0,Te.traverse(h=>{h.material&&(h.material.needsUpdate=!0)}),Me()}),$("motion-toggle").addEventListener("click",()=>{Xt.reducedMotion=!Xt.reducedMotion,Ss(),Me()}),$("immersive-toggle").addEventListener("click",()=>{Xt.immersive=!Xt.immersive,Ss(),Me()}),$("volume-slider").addEventListener("input",h=>{Xt.volume=Number(h.target.value)/100,Se.setVolume(Xt.volume),$("volume-label").textContent=h.target.value+"%",Me()}),$("sensitivity-slider").addEventListener("input",h=>{Xt.sensitivity=Number(h.target.value)/100,$("sensitivity-label").textContent=h.target.value+"%",Me()}),$("new-world-button").addEventListener("click",()=>$("new-world-confirm").hidden=!1),$("cancel-new-world").addEventListener("click",()=>$("new-world-confirm").hidden=!0),$("confirm-new-world").addEventListener("click",tv),$("map-recenter").addEventListener("click",()=>{Yn={x:K.pos.x,z:K.pos.z},ol()}),$("install-button").addEventListener("click",()=>bn("install-modal")),$("install-link").addEventListener("click",()=>bn("install-modal")),$("install-now-button").addEventListener("click",async()=>{if(Zn){let h=Zn;Zn=null;try{await h.prompt(),(await h.userChoice).outcome==="accepted"?(eu(),Be("Installed.","heart")):Fn()}catch{Zn=null,Fn()}}else Ar()}),$("toast").addEventListener("click",()=>{Yf&&location.reload()}),window.addEventListener("beforeinstallprompt",h=>{h.preventDefault(),Zn=h,Fn()}),window.addEventListener("appinstalled",()=>{eu(),Me()}),Pf().then(h=>{h&&eu()}),window.addEventListener("keydown",h=>{if(h.code==="Escape"){h.preventDefault(),Ce?Ar():bn("settings-modal");return}if(Ce){if(h.code==="Tab"){let d=[...$(Ce).querySelectorAll('button,input,[tabindex="0"]')].filter(x=>!x.disabled&&x.offsetParent!==null),u=d[0],f=d.at(-1);h.shiftKey&&document.activeElement===u?(h.preventDefault(),f?.focus()):!h.shiftKey&&document.activeElement===f&&(h.preventDefault(),u?.focus())}return}if(De){if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","KeyE","ShiftLeft","ShiftRight","KeyM","KeyN","KeyF","KeyH"].includes(h.code)&&h.preventDefault(),h.code==="KeyM"&&!h.repeat){bn("map-modal");return}if(h.code==="KeyH"&&!h.repeat){bn("hats-modal");return}if(h.code==="KeyN"&&!h.repeat){lu();return}if(h.code==="KeyF"&&!h.repeat){$("fullscreen-button").click();return}h.code==="Space"&&!h.repeat&&!qe.has("Space")&&(Ps=!0),h.code==="Space"&&(qi=!0),qe.add(h.code)}}),window.addEventListener("keyup",h=>{qe.delete(h.code),h.code==="Space"&&(qi=!1)}),window.addEventListener("blur",()=>{ho(),mi.clear(),Me()}),document.addEventListener("visibilitychange",()=>{document.hidden?(ho(),Me(),Se.suspend()):($a=performance.now(),Se.resume())}),window.addEventListener("pagehide",Me);let i=()=>{Ne.aspect=innerWidth/innerHeight,Ne.updateProjectionMatrix(),_e.setSize(innerWidth,innerHeight),bs()};window.addEventListener("resize",i),screen.orientation?.addEventListener?.("change",i),document.addEventListener("fullscreenchange",()=>{Er()||Xh(),bs()}),$("world").addEventListener("webglcontextlost",h=>{h.preventDefault(),Me(),$("error-message").textContent="The graphics context was lost. Reload to continue from your saved spot.",$("error-screen").hidden=!1});let t=$("world");t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("pointerdown",h=>{if(!Ce&&(t.setPointerCapture(h.pointerId),mi.set(h.pointerId,{x:h.clientX,y:h.clientY}),mi.size===2)){let d=[...mi.values()];Qh=Math.hypot(d[0].x-d[1].x,d[0].y-d[1].y)}}),t.addEventListener("pointermove",h=>{if(!mi.has(h.pointerId)||Ce)return;let d=mi.get(h.pointerId),u=h.clientX-d.x,f=h.clientY-d.y;if(d.x=h.clientX,d.y=h.clientY,mi.size===2){let x=[...mi.values()],g=Math.hypot(x[0].x-x[1].x,x[0].y-x[1].y);ws=Cs(ws-(g-Qh)*.02,3.2,14),Qh=g}else Rr-=u*.0048*Xt.sensitivity,Ds=Cs(Ds+f*.0032*Xt.sensitivity,.16,1.15);co=1.6});let e=h=>mi.delete(h.pointerId);t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("lostpointercapture",e),t.addEventListener("wheel",h=>{h.preventDefault(),Ce||(ws=Cs(ws+h.deltaY*.006,3.2,14),co=1.6)},{passive:!1});let n=$("joystick"),s=null,r=h=>{let d=n.getBoundingClientRect(),u=d.width*.36,f=h.clientX-d.left-d.width/2,x=h.clientY-d.top-d.height/2,g=Math.hypot(f,x);g>u&&(f*=u/g,x*=u/g);let m=Math.min(1,g/u),p=.1,S=m<p?0:(m-p)/(1-p);ja=g?f/g*S:0,Qa=g?x/g*S:0,$("joystick-knob").style.transform=`translate(${f}px,${x}px)`,n.classList.toggle("engaged",m>p)};n.addEventListener("pointerdown",h=>{h.preventDefault(),s=h.pointerId,n.setPointerCapture(h.pointerId),r(h)}),n.addEventListener("pointermove",h=>{h.pointerId===s&&r(h)});let o=h=>{h.pointerId===s&&(s=null,ja=Qa=0,$("joystick-knob").style.transform="translate(0px,0px)",n.classList.remove("engaged"))};n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),n.addEventListener("lostpointercapture",o);let a=(h,d,u)=>{let f=$(h);f.addEventListener("pointerdown",x=>{x.preventDefault(),f.setPointerCapture(x.pointerId),f.classList.add("pressed"),d()});for(let x of["pointerup","pointercancel","lostpointercapture"])f.addEventListener(x,()=>{f.classList.remove("pressed"),u()})};a("touch-jump",()=>{Ps=!0,qi=!0},()=>{qi=!1}),a("touch-climb",()=>{Ka=!0},()=>{Ka=!1});let l=h=>{Es=h,$("touch-run").classList.toggle("active",Es),$("touch-run").setAttribute("aria-pressed",String(Es))};$("touch-run").addEventListener("pointerdown",h=>{h.preventDefault(),l(!Es)});let c=$("map-canvas");c.addEventListener("pointerdown",h=>{c.setPointerCapture(h.pointerId),vs={x:h.clientX,y:h.clientY}}),c.addEventListener("pointermove",h=>{if(!vs)return;let d=Bf*(c.clientWidth/960);Yn.x-=(h.clientX-vs.x)/d,Yn.z-=(h.clientY-vs.y)/d,vs={x:h.clientX,y:h.clientY},ol()});for(let h of["pointerup","pointercancel","lostpointercapture"])c.addEventListener(h,()=>vs=null);bs()}function eu(){Gi=!0,Zn=null,Xa(),Fn()}function tv(){Vf({version:1,seed:ee.seedText,position:{x:K.pos.x,y:K.pos.y,z:K.pos.z},heading:K.heading,cameraYaw:on,roofs:[...kn].slice(-1e4),gardens:[..._i].slice(-1e4),places:[...$n].slice(-1e4),friends:Jn,shinies:[...re.collected],knocks:re.knocks,hat:$i,started:De}),je.dispose(),Xi.dispose();for(let[,i]of re.tracked)Te.remove(i.group);ee.dispose(),kn.clear(),_i.clear(),$n.clear(),Jn=0,Gf.length=0,Wf=0,$i="none",K.pos.set(1.1,0,7.1),K.vx=K.vz=K.vy=0,K.climbing=null,K.grounded=!0,K.heading=.55,K.landImpact=0,K.runBlend=0,on=Rr=.56,Is=Ds=.34,Zi=ws=an?5:5.4,Qe=!1,Jt=null,Jf(Hf()),Ls(),$("seed-label").textContent="Seed: "+ee.seedText,Ar(),Me(),document.body.classList.remove("resting"),$("rest-button").setAttribute("aria-pressed","false"),Be("New town. Same cat.","leaf")}function Kf(i){let t=(qe.has("KeyD")||qe.has("ArrowRight")?1:0)-(qe.has("KeyA")||qe.has("ArrowLeft")?1:0)+ja+el+Nn.x,e=(qe.has("KeyS")||qe.has("ArrowDown")?1:0)-(qe.has("KeyW")||qe.has("ArrowUp")?1:0)+Qa+nl+Nn.y;Nn.jump&&(Ps=!0,Nn.jump=!1);let n=Math.hypot(t,e);n>.15&&Qe&&(Qe=!1,document.body.classList.remove("resting"),$("rest-button").setAttribute("aria-pressed","false")),vn.x=t,vn.y=e,vn.yaw=on,vn.sprint=qe.has("ShiftLeft")||qe.has("ShiftRight")||Es||il||Nn.sprint,vn.jump=vn.jump||Ps,Ps=!1,vn.jumpHeld=qi||Nn.jumpHeld;let s=qe.has("KeyE")||Ka||sl||Nn.climb;vn.resting=Qe;let r=Math.min(12,Math.max(1,Math.ceil(i/q_))),o=i/r;for(let a=0;a<r;a++){if(ro=tl&&K.grounded&&n>.5&&K.speed<1.2&&!Qe?ro+o:Math.max(0,ro-o*3),ro>.32&&(jh=!0,ro=0),vn.climb=s||jh,tl=pf(K,vn,Yi,o,J_).wall,$h+=o,$h>5){$h=0;let h=!ao||Math.hypot(K.pos.x-ao.x,K.pos.z-ao.z)>.3||Math.abs(on-ao.yaw)>.05;(hu||h)&&Me()}(!K.climbing||n<.3)&&(jh=!1)}vn.jump=!1}function ev(i){let e=[...navigator.getGamepads?navigator.getGamepads():[]].find(a=>a&&a.connected);if(!e){el=nl=0,il=!1,sl=!1,_s=[];return}let n=a=>Math.abs(a)<.16?0:(Math.abs(a)-.16)/.84*Math.sign(a);el=n(e.axes[0]||0),nl=n(e.axes[1]||0);let s=n(e.axes[2]||0),r=n(e.axes[3]||0);(s||r)&&(Rr-=s*2.6*i,Ds=Cs(Ds+r*1.8*i,.16,1.15),co=1.6);let o=a=>!!e.buttons[a]?.pressed;o(10)&&!_s[10]&&(Es=!Es),il=o(6)||o(7),sl=o(1)||o(5)||o(4),o(0)&&!_s[0]&&(Ps=!0),o(0)?qi=!0:_s[0]&&(qi=!1),o(9)&&!_s[9]&&(Ce?Ar():bn("settings-modal")),o(3)&&!_s[3]&&lu(),_s=e.buttons.map(a=>a.pressed)}function nv(i,t,e,n=.2){let s=0,r=1;for(let[o,a,l,c]of[[i.x,t.x,e.minX-n,e.maxX+n],[i.y,t.y,e.minY-n,e.maxY+n],[i.z,t.z,e.minZ-n,e.maxZ+n]])if(Math.abs(a)<1e-7){if(o<l||o>c)return 1/0}else{let h=(l-o)/a,d=(c-o)/a;if(h>d&&([h,d]=[d,h]),s=Math.max(s,h),r=Math.min(r,d),s>r)return 1/0}return s>.02?s:1/0}function jf(i,t=!1){if(Nn.camera){Ne.position.set(...Nn.camera.pos),Ne.lookAt(...Nn.camera.at);return}on=Un.damp(on,Rr,12,i),Is=Un.damp(Is,Ds,10,i),Zi=Un.damp(Zi,ws*(1+K.runBlend*.14),6,i),co=Math.max(0,co-i);let e=!De,n=innerWidth<700||innerWidth<innerHeight,s=Math.cos(on),r=-Math.sin(on),o=$_.copy(K.pos);if(o.y+=e?.9:.38+(K.climbing?.25:0),e||(o.x+=K.vx*.1,o.z+=K.vz*.1,o.y+=Cs(K.vy,-4,4)*.03),e){let u=n?0:-3.4;o.x+=s*u,o.z+=r*u}t?gi.copy(o):gi.lerp(o,1-Math.exp(-10*i));let a=e?.3:Is,l=e?n?9:11:Zi;pn.set(Math.sin(on)*Math.cos(a)*l,Math.sin(a)*l,Math.cos(on)*Math.cos(a)*l);let c=1,h=-1/0;if(!e)for(let u of Yi.query(K.pos.x,K.pos.z,l+1.5)){if(u.shape==="ellipsoid"||u.person||u.shape==="cylinder"&&u.r<.2||u.maxY-u.minY<.3)continue;let f=nv(gi,pn,u);f>=1||(u.maxY-u.minY>=.7?c=Math.min(c,f):f>.05&&(h=Math.max(h,gi.y+(u.maxY+.22-gi.y)/f)))}if(c<1&&pn.multiplyScalar(Math.max(.18,c-.3/l)),pn.add(gi),h>pn.y&&(pn.y=Math.min(h,gi.y+l*.9)),!e){let u=Yi.highest(pn.x,pn.z,pn.y),f=Math.max(0,u)+.42;pn.y<f&&(pn.y=f)}t?Ne.position.copy(pn):Ne.position.lerp(pn,1-Math.exp(-(c<1?16:9)*i)),Ne.lookAt(gi);let d=e?46:50+K.runBlend*6;Math.abs(Ne.fov-d)>.02&&(Ne.fov=Un.damp(Ne.fov,d,5,i),Ne.updateProjectionMatrix())}function lo(i=K.pos.x,t=K.pos.y+.4,e=K.pos.z){for(let n=0;n<14;n++)Ts.push({x:i,y:t,z:e,vx:(Math.random()-.5)*2,vy:.8+Math.random()*1.8,vz:(Math.random()-.5)*2,life:1.4});Ts.length>80&&Ts.splice(0,Ts.length-80)}var iv={market:()=>"Market day. Mind the stallholders\u2019 feet.",works:()=>"The old works. Something in there is still turning.",warehouse:()=>"The depot. Pallets make excellent stairs.",tower:()=>"Top of the tower. You can see the whole district.",playground:()=>"The playground. Beams, a climbing frame, a slide, a trampoline.",cafe:()=>"Inside the caf\xE9.",shop:()=>"The little grocer. Please do not knock over the tins.",home:()=>"Somebody\u2019s living room."};function Qf(){let i=K.pos;for(let e of ee.buildings){if(kn.has(e.id))continue;let n=K.support,s=!!n&&(n.building===e||n.buildingId===e.id||["roof","chimney","wall","box","pergola","pot"].includes(n.kind));if(K.grounded&&s&&i.y>=e.h-.15&&Math.abs(i.x-e.x)<e.w/2+.3&&Math.abs(i.z-e.z)<e.d/2+.3){kn.add(e.id),Ls(),lo(),Se.discovery();let r=kn.size;Be(r===1?"First rooftop. Roofs connect most of the town.":r%5===0?`${r} rooftops.`:"New rooftop.","sun",r===1?3600:2200),Me();break}}for(let e of ee.parks)if(!_i.has(e.id)&&i.y<1.5&&(i.x-e.x)**2+(i.z-e.z)**2<81){_i.add(e.id),Ls(),Se.discovery(),lo(),Be("A park.","leaf",2600),Me();break}for(let e of ee.landmarks){if($n.has(e.id))continue;let n;if(e.inside?n=i.x>e.inside.minX&&i.x<e.inside.maxX&&i.z>e.inside.minZ&&i.z<e.inside.maxZ&&i.y<e.y+1.5:e.kind==="tower"?n=K.grounded&&i.y>e.y-.5&&Math.abs(i.x-e.x)<e.radius&&Math.abs(i.z-e.z)<e.radius:n=(i.x-e.x)**2+(i.z-e.z)**2<e.radius**2&&i.y<6,!n)continue;$n.add(e.id),Ls(),lo(),Se.discovery();let s=$n.size;Be(iv[e.kind]?.(e,s)||`You found ${e.name}.`,"sun",3200),Me();break}let t=Ua(Math.floor((i.x+36)/72),Math.floor((i.z+36)/72),ee.seed);if(t!==Ja){let e=!Ja;Ja=t,$("district-name").textContent=t;let n=$("location-card");n.classList.remove("fresh"),n.offsetWidth,n.classList.add("fresh"),!e&&getComputedStyle(n).display==="none"&&Be(t,"leaf",2e3)}}function sv(i){let t=K.pos,e=Za;for(let s=0;s<ru.length;s++){let r=ru[s];r.x+=i*r.speed,r.z+=i*.15,r.x-t.x>35&&(r.x-=70),r.x-t.x<-35&&(r.x+=70),r.z-t.z>35&&(r.z-=70),r.z-t.z<-35&&(r.z+=70),Re.position.set(r.x,r.y+Math.sin(e*.5+r.phase)*.6,r.z),Re.rotation.set(e*.4+r.phase,e*.3+r.phase,e*.2),Re.scale.setScalar(1),Re.updateMatrix(),Wi.setMatrixAt(s,Re.matrix)}Wi.instanceMatrix.needsUpdate=!0;for(let s=0;s<ou.length;s++){let r=ou[s];r.x-t.x>30&&(r.x-=60),r.x-t.x<-30&&(r.x+=60),r.z-t.z>30&&(r.z-=60),r.z-t.z<-30&&(r.z+=60);let o=r.x+Math.sin(e*.55+r.phase)*1.7,a=r.z+Math.cos(e*.4+r.phase)*1.7,l=r.y+Math.sin(e*1.4+r.phase)*.35;for(let c=0;c<2;c++)Re.position.set(o+(c?-.05:.05),l,a),Re.rotation.set(Math.PI/2,Math.sin(e*13+r.phase)*(c?-.8:.8),e*.2+r.phase),Re.scale.set(1,1,1),Re.updateMatrix(),Vi.setMatrixAt(s*2+c,Re.matrix)}Vi.instanceMatrix.needsUpdate=!0;let n=0;for(let s of ee.buildings){if(kn.has(s.id)||(s.x-t.x)**2+(s.z-t.z)**2>65**2||n>=320)continue;let r=ee.roofHeight(s,s.x,s.z);Re.position.set(s.x,r+1.25+Math.sin(e*1.7+s.x)*.15,s.z),Re.rotation.set(0,e*.7,0),Re.scale.setScalar(1),Re.updateMatrix(),xi.setMatrixAt(n++,Re.matrix)}for(let s=Ts.length-1;s>=0;s--){let r=Ts[s];if(r.life-=i,r.life<=0){Ts.splice(s,1);continue}r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,r.vy-=i,n<390&&(Re.position.set(r.x,r.y,r.z),Re.rotation.set(e,e,0),Re.scale.setScalar(Math.min(1,r.life)*.3),Re.updateMatrix(),xi.setMatrixAt(n++,Re.matrix))}xi.count=n,xi.instanceMatrix.needsUpdate=!0;for(let s of Xf)s.position.x+=i*.18,s.position.x-t.x>150&&(s.position.x-=300),s.position.x-t.x<-150&&(s.position.x+=300),s.position.z-t.z>150&&(s.position.z-=300),s.position.z-t.z<-150&&(s.position.z+=300)}function rv(){let i=$("bubble"),t=De&&!Ce?je.speaker(K.pos):null;if(!t){i.classList.remove("show");return}if(Tr.set(t.x,t.y+t.H+.22,t.z).project(Ne),Tr.z>1||Math.abs(Tr.x)>1.3||Math.abs(Tr.y)>1.3){i.classList.remove("show");return}let e=Cs((Tr.x+1)/2*innerWidth,90,innerWidth-90),n=Cs((1-Tr.y)/2*innerHeight,52,innerHeight-40);i.textContent!==t.line&&(i.textContent=t.line),i.style.transform=`translate(${e}px,${n}px) translate(-50%,-100%)`,i.classList.add("show")}function ol(){if(!Yn)return;let i=$("map-canvas"),t=i.getContext("2d"),e=i.width,n=i.height,s=Bf,r=f=>(f-Yn.x)*s+e/2,o=f=>(f-Yn.z)*s+n/2;t.fillStyle="#dce6c9",t.fillRect(0,0,e,n);for(let f of ee.chunks.values()){let x=f.cx*kt,g=f.cz*kt;t.fillStyle=(f.cx+f.cz)%2?"#d4e1bf":"#d8e3c4",t.fillRect(r(x-36),o(g-36),72*s,72*s),t.fillStyle="#eee9d4";for(let m of[-1,1])t.fillRect(r(x+m*32.5-3.5),o(g-36),7*s,72*s),t.fillRect(r(x-36),o(g+m*32.5-3.5),72*s,7*s);t.fillStyle="#e7e5cd",t.fillRect(r(x-1.5),o(g-29),3*s,58*s),t.fillRect(r(x-29),o(g-1.5),58*s,3*s),t.fillStyle="#8fa27b",t.font='500 12px "DM Sans", sans-serif',t.textAlign="center",t.fillText(Ua(f.cx,f.cz,ee.seed).toUpperCase(),r(x),o(g-27))}for(let f of ee.parks){t.fillStyle="#b7cd98",t.beginPath(),t.roundRect(r(f.x-12),o(f.z-12),24*s,24*s,9),t.fill(),t.fillStyle="#e8e2c7",t.fillRect(r(f.x-1.5),o(f.z-12),3*s,24*s),t.fillRect(r(f.x-12),o(f.z-1.5),24*s,3*s),t.fillStyle="#94bfb0",t.beginPath(),t.ellipse(r(f.x+4.5),o(f.z-4.3),4*s,3.7*s,0,0,Math.PI*2),t.fill();for(let[x,g]of[[-6,-6],[7,7],[-7,6]])t.fillStyle="#91ad78",t.beginPath(),t.arc(r(f.x+x),o(f.z+g),7,0,Math.PI*2),t.fill();_i.has(f.id)&&(t.fillStyle="#64865c",t.font="16px sans-serif",t.fillText("\u2713",r(f.x),o(f.z+4)))}for(let f of ee.buildings){let x=kn.has(f.id);t.fillStyle="#a8b596",t.beginPath(),t.roundRect(r(f.x-f.w/2)+3,o(f.z-f.d/2)+4,f.w*s,f.d*s,3),t.fill(),t.fillStyle=x?"#7f9d79":f.wall,t.strokeStyle=x?"#5f805d":"#aab397",t.lineWidth=1.3,t.beginPath(),t.roundRect(r(f.x-f.w/2),o(f.z-f.d/2),f.w*s,f.d*s,3),t.fill(),t.stroke(),t.strokeStyle=x?"#a8c29a":f.roofColor,t.lineWidth=2,t.beginPath(),t.moveTo(r(f.x-f.w/2+1),o(f.z)),t.lineTo(r(f.x+f.w/2-1),o(f.z)),t.stroke(),x?(t.fillStyle="#f4f4df",t.font="bold 15px sans-serif",t.textAlign="center",t.fillText("\u2713",r(f.x),o(f.z)+5)):(t.fillStyle="#c5a15d",t.beginPath(),t.arc(r(f.x),o(f.z),2.5,0,Math.PI*2),t.fill())}let a={market:"#d7a048",works:"#8a6a4c",warehouse:"#8a8072",tower:"#5f6b66",playground:"#d9544f",cafe:"#c88f6e",shop:"#6f9a4f",home:"#b48c9c"};for(let f of ee.landmarks){let x=$n.has(f.id);t.fillStyle=a[f.kind]||"#999",t.strokeStyle="#fffaf0",t.lineWidth=2,t.beginPath(),t.arc(r(f.x),o(f.z),x?7:5.5,0,Math.PI*2),t.fill(),t.stroke(),x&&(t.fillStyle="#fffaf0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("\u2713",r(f.x),o(f.z)+3.5)),Math.abs(f.x-Yn.x)<110&&Math.abs(f.z-Yn.z)<70&&(t.fillStyle="#5f6b5a",t.font='600 10px "DM Sans", sans-serif',t.textAlign="center",t.fillText(f.name.replace(/^the |^somebody’s /,""),r(f.x),o(f.z)+18))}for(let f of je.list)t.fillStyle=f.job?"#a37c5a":"#7c8fa6",t.beginPath(),t.arc(r(f.x),o(f.z),3,0,Math.PI*2),t.fill();let l=r(K.pos.x),c=o(K.pos.z);t.fillStyle="#ffffff",t.beginPath(),t.arc(l,c,12,0,Math.PI*2),t.fill(),t.shadowColor="#6b775333",t.shadowBlur=8,t.fillStyle="#cb8b50",t.beginPath(),t.arc(l,c,8.5,0,Math.PI*2),t.fill(),t.shadowBlur=0,t.save(),t.translate(l,c),t.rotate(-K.heading),t.fillStyle="#fff9e9",t.beginPath(),t.moveTo(0,6),t.lineTo(-4,-3),t.lineTo(4,-3),t.closePath(),t.fill(),t.restore();let h=kn.size,d=_i.size,u=$n.size;$("map-seed").textContent="Seed "+ee.seedText,$("map-description").textContent=`${Ja||Ua(0,0,ee.seed)} \xB7 ${h} rooftop${h===1?"":"s"}, ${d} garden${d===1?"":"s"}, ${u} place${u===1?"":"s"}, ${Jn} friend${Jn===1?"":"s"}. Drag to look further.`}var Rs=0,oo=0,Of=!1,ov=()=>Math.min(devicePixelRatio,an?1.4:1.5);function cu(){let i=Math.max(.75,ov()-.2*Math.min(Rs,3));Math.abs(_e.getPixelRatio()-i)>.01&&(_e.setPixelRatio(i),_e.setSize(innerWidth,innerHeight));let t=Xt.shadows&&Rs<4;_e.shadowMap.enabled!==t&&(_e.shadowMap.enabled=t,Te.traverse(e=>{e.material&&(e.material.needsUpdate=!0)}))}function tp(i){so+=(i-so)*.05,so>30?(ys+=i/1e3,oo=0):so<20?(ys=0,oo+=i/1e3):ys=Math.max(0,ys-i/2e3),ys>2.5&&Rs<4?(ys=0,oo=0,Rs++,cu(),Of||(Of=!0,Be("Softening the picture to keep the frame rate up.","note",3200))):oo>8&&Rs>0&&(oo=0,ys=0,Rs--,cu(),so=16)}function ep(i){if(requestAnimationFrame(ep),document.hidden){$a=i;return}let t=i-($a||i-16),e=Math.min(.12,Math.max(.001,t/1e3));$a=i,Za+=e,De&&(tp(t),su+=e),ev(e),ee.update(K.pos,1)&&re.sync(),ee.animate(Za),De&&!Ce?Kf(e):(K.speed=0,K.turnRate=0,K.accel=0,tl=null),yi.root.position.copy(K.pos),yi.root.rotation.y=K.heading;let n=Yi.support(K.pos.x,K.pos.z,K.pos.y+.05).y;if(yi.update(e,Za,{speed:K.speed,grounded:K.grounded,climbing:!!K.climbing,resting:Qe,vy:K.vy,turnRate:K.turnRate,accel:K.accel,landImpact:K.landImpact,runBlend:K.runBlend},n,Xt.reducedMotion),je.interactive=De&&!Ce,je.update(e,K.pos,K.speed,Ne),Xi.update(e,K.pos,K.speed),De&&!Ce&&re.update(e,K,je),!De&&!Xt.reducedMotion&&(Rr+=e*.03),jf(e),sv(e),Se.update(e),rv(),Ms.position.x=K.pos.x,Ms.position.z=K.pos.z,Oe.position.set(K.pos.x-35,60,K.pos.z+25),Oe.target.position.set(K.pos.x,0,K.pos.z),Jh+=e,Jh>.25){Jh=0,De&&!Ce&&Qf(),re.sync();let s=!!tl&&!K.climbing&&!Qe&&De&&!Ce&&K.grounded;$("context-hint").classList.toggle("visible",s&&!an),$("touch-climb").classList.toggle("ready",s),document.body.classList.toggle("sprinting",K.runBlend>.5),document.body.classList.toggle("settled",su>14),Ce==="map-modal"&&!vs&&ol()}Qe&&(Kh+=e,Kh>1.7&&(Kh=0,Se.purr())),_e.render(Te,Ne)}function Fn(){let i=Gi?"Installed":As?"Offline ready":"Loading\u2026";$("offline-label").textContent=!navigator.onLine&&As?"Playing offline":i,$("offline-status").classList.toggle("ready",As),$("install-ready").querySelector("span").textContent=As?"All tucked in. This world is ready to play offline.":"Getting the offline files ready\u2026";let t=!Gi&&(!!Zn||Cf||If);$("install-button").hidden=!t,$("install-link").hidden=Gi,$("install-link").textContent=Zn?"Install on this device":"How to install",$("installed-note").hidden=!Gi,$("install-now-button").firstChild.textContent=Zn?"Install Whiskerfield ":Gi?"Back to my world ":"Got it. Thank you ",$("install-instructions").hidden=!!Zn||Gi}async function av(){if(Fn(),window.addEventListener("online",Fn),window.addEventListener("offline",Fn),!("serviceWorker"in navigator)||!window.isSecureContext){$("offline-label").textContent="Online preview",$("install-ready").querySelector("span").textContent="Offline install needs HTTPS or localhost.";return}try{let i=!!navigator.serviceWorker.controller;tu=await navigator.serviceWorker.register("./sw.js",{scope:"./"}),tu.addEventListener("updatefound",()=>{let t=tu.installing;t?.addEventListener("statechange",()=>{t.state==="installed"&&i&&(Yf=!0,De?Be("Update ready. Tap to reload.","update",9e3):location.reload())})}),await navigator.serviceWorker.ready,As=!0,Fn(),navigator.storage?.persist&&navigator.storage.persist().catch(()=>{}),navigator.serviceWorker.addEventListener("message",t=>{t.data?.type==="OFFLINE_READY"&&(As=!0,Fn())})}catch(i){console.warn("Offline cache unavailable:",i),$("offline-label").textContent="Online preview",$("install-ready").querySelector("span").textContent="Offline files couldn\u2019t be saved. Reconnect and reload to try again."}}try{K_(),av()}catch(i){console.error(i),$("loading").hidden=!0,$("error-screen").hidden=!1,$("error-message").textContent="This little world needs WebGL. Try an up-to-date Chrome, Edge, Firefox, or Safari browser with hardware acceleration enabled. "+i.message}
