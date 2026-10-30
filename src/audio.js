export class NeighborhoodAudio {
  constructor(){this.context=null;this.enabled=true;this.volume=.4;this.started=false;this.birdTimer=4;this.noteTimer=1;this.chord=0;this.resting=false;}
  async start(){
    if(!this.context){
      const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return;
      this.context=new AudioContext();const c=this.context;
      this.master=c.createGain();this.master.gain.value=this.enabled?this.volume*.55:0;this.master.connect(c.destination);
      const buffer=c.createBuffer(1,c.sampleRate*4,c.sampleRate),data=buffer.getChannelData(0);let last=0;
      for(let i=0;i<data.length;i++){last=(last+(Math.random()*2-1)*.018)/1.018;data[i]=last*3.5;}
      const wind=c.createBufferSource();wind.buffer=buffer;wind.loop=true;
      const filter=c.createBiquadFilter();filter.type='lowpass';filter.frequency.value=550;
      const gain=c.createGain();gain.gain.value=.11;wind.connect(filter);filter.connect(gain);gain.connect(this.master);wind.start();this.wind=wind;
    }
    this.started=true;
    if(this.context.state==='suspended')try{await this.context.resume();}catch{}
  }
  setEnabled(value){this.enabled=value;if(value)this.start();this.applyVolume();}
  setVolume(value){this.volume=value;this.applyVolume();}
  applyVolume(){if(this.context)this.master.gain.setTargetAtTime(this.enabled?this.volume*.55:0,this.context.currentTime,.15);}
  tone(frequency,start,duration,volume=.06,type='sine',endFrequency=null){
    if(!this.context||!this.enabled)return;const c=this.context,o=c.createOscillator(),g=c.createGain();
    o.type=type;o.frequency.setValueAtTime(frequency,start);if(endFrequency)o.frequency.exponentialRampToValueAtTime(endFrequency,start+duration*.7);
    g.gain.setValueAtTime(0,start);g.gain.linearRampToValueAtTime(volume,start+Math.min(.04,duration*.15));g.gain.exponentialRampToValueAtTime(.0001,start+duration);
    o.connect(g);g.connect(this.master);o.start(start);o.stop(start+duration+.05);o.onended=()=>{o.disconnect();g.disconnect();};
  }
  update(dt){
    if(!this.started||!this.enabled||!this.context||this.context.state!=='running')return;
    this.birdTimer-=dt;this.noteTimer-=dt;
    if(this.birdTimer<0){
      const t=this.context.currentTime,base=1700+Math.random()*800;
      for(let i=0;i<3;i++)this.tone(base+i*110,t+i*.15,.11,.028,'sine',base+500+i*70);
      this.birdTimer=7+Math.random()*12;
    }
    if(this.noteTimer<0){
      const chords=[[196,246.94,293.66],[174.61,220,261.63],[164.81,196,246.94],[174.61,220,293.66]];
      const t=this.context.currentTime;
      for(const [i,f] of chords[this.chord%chords.length].entries())this.tone(f,t+i*.35,6,.018);
      this.chord++;this.noteTimer=10+Math.random()*4;
    }
  }
  discovery(){if(!this.context)return;const t=this.context.currentTime;[523.25,659.25,783.99].forEach((f,i)=>this.tone(f,t+i*.14,1.3,.07));}
  jump(){if(this.context)this.tone(280,this.context.currentTime,.15,.025,'sine',440);}
  land(){if(this.context)this.tone(130,this.context.currentTime,.1,.025,'sine',80);}
  greet(){if(!this.context)return;const t=this.context.currentTime;this.tone(660,t,.16,.03,'sine',880);this.tone(880,t+.14,.22,.028,'sine',990);}
  tweet(){if(!this.context)return;const t=this.context.currentTime;this.tone(2400,t,.07,.012,'sine',3100);this.tone(2900,t+.09,.06,.01,'sine',2500);}
  chirp(){if(this.context)this.tone(1500,this.context.currentTime,.09,.02,'sine',2100);}
  shiny(){if(!this.context)return;const t=this.context.currentTime;this.tone(1318.5,t,.18,.035,'sine',1760);this.tone(1760,t+.09,.3,.03,'sine',2093);this.tone(2637,t+.18,.4,.018,'triangle');}
  clatter(kind='metal',soft=false){if(!this.context)return;const t=this.context.currentTime,v=soft?.5:1;
    if(kind==='metal'){this.tone(820,t,.14,.04*v,'square',260);this.tone(1900,t+.02,.08,.02*v,'triangle',900);this.tone(640,t+.12,.12,.02*v,'square',200);}
    else if(kind==='glass'){this.tone(2400,t,.1,.03*v,'sine',1500);this.tone(3100,t+.05,.14,.02*v,'triangle',2000);}
    else if(kind==='clay'){this.tone(480,t,.1,.035*v,'triangle',140);this.tone(900,t+.03,.06,.015*v,'square',400);}
    else if(kind==='wood'){this.tone(260,t,.09,.04*v,'triangle',110);this.tone(420,t+.06,.07,.02*v,'triangle',200);}
    else{this.tone(330,t,.1,.03*v,'triangle',120);}}
  quack(small=false,idle=false){if(!this.context)return;const t=this.context.currentTime,f=small?620:330,v=idle?.02:.035;this.tone(f,t,.12,v,'sawtooth',f*.72);if(!idle)this.tone(f*1.05,t+.15,.1,v*.8,'sawtooth',f*.7);if(small)this.tone(f*1.2,t+.26,.08,v*.6,'sawtooth',f*.9);}
  caw(){if(!this.context)return;const t=this.context.currentTime;this.tone(520,t,.22,.03,'sawtooth',380);this.tone(500,t+.3,.2,.025,'sawtooth',360);}
  whistle(dist=0){if(!this.context)return;const t=this.context.currentTime,v=Math.max(.004,.05*Math.min(1,40/Math.max(1,dist)));this.tone(880,t,.5,v,'square',870);this.tone(1320,t,.5,v*.5,'square',1310);this.tone(880,t+.6,.9,v,'square',860);this.tone(1320,t+.6,.9,v*.5,'square',1300);}
  chuff(dist=0,k=.5){if(!this.context)return;const t=this.context.currentTime,v=Math.max(.002,.03*Math.min(1,30/Math.max(1,dist)));this.tone(120+k*60,t,.09,v,'sawtooth',60);this.tone(1800,t,.05,v*.3,'square',900);}
  jet(){if(!this.context)return;const t=this.context.currentTime;for(let i=0;i<10;i++)this.tone(90+i*7,t+i*.9,1.2,.025+i*.002,'sawtooth',110+i*9);for(let i=0;i<6;i++)this.tone(2200+i*180,t+6+i*.5,1,.006,'sine',2600+i*180);}
  purr(){if(this.context)this.tone(58,this.context.currentTime,.65,.025,'triangle',52);}
  suspend(){if(this.context?.state==='running')this.context.suspend().catch(()=>{});}
  resume(){if(this.started&&this.context?.state==='suspended')this.context.resume().catch(()=>{});}
}
