(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8888],{6596:(e,t,a)=>{var r,s=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,u=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of n(t))p.call(e,s)||s===a||o(e,s,{get:()=>t[s],enumerable:!(r=l(t,s))||r.enumerable});return e},y=(e,t,a)=>(((e,t,a)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a),h={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(h,{default:()=>P}),e.exports=(r=h,u(o({},"__esModule",{value:!0}),r));var d=((e,t,a)=>(a=null!=e?s(i(e)):{},u(!t&&e&&e.__esModule?a:o(a,"default",{value:e,enumerable:!0}),e)))(a(7294)),c=a(8045),m=a(1776);class P extends d.Component{constructor(){super(...arguments),y(this,"callPlayer",c.callPlayer),y(this,"mute",(()=>{this.setVolume(0)})),y(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),y(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:t,config:a,onError:r,onDuration:s}=this.props,o=e&&e.match(m.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,c.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((e=>{this.container&&(e.api.addReadyListener(((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))}),o),e.api.renderPlayer({uuid:o,container:this.container,autoplay:t?1:0,...a.options}),e.api.getPlayerMetadata(o).then((e=>{this.duration=e.length_in_seconds,s(e.length_in_seconds)})))}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return d.default.createElement("div",{style:t},d.default.createElement("div",{ref:this.ref}))}}y(P,"displayName","Vidyard"),y(P,"canPlay",m.canPlay.vidyard)}}]);