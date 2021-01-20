!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.roov=t():e.roov=t()}(this,(function(){return(()=>{"use strict";var e,t,n={172:(e,t,n)=>{n.r(t),n.d(t,{player:()=>y});const i=JSON.parse('{"u2":"roov-player-v3","i8":"1.4.10"}');let a,o,s,r,d,l,v,h,c,p,E={content:{assetName:"",live:!1,url:"",contentLength:0,frameworkName:"HTML 5",frameworkVersion:"0.0.0",applicationName:i.u2,applicationVersion:i.i8,viewerId:"",customTags:{},deviceTags:{brand:"",manufacturer:"",model:"",type:"",os_name:"",os_version:"",category:""},TEST_CUSTOMER_KEY:"YOUR CONVIVA TEST CUSTOMER KEY",PRODUCTION_CUSTOMER_KEY:"YOUR CONVIVA PRODUCTION CUSTOMER KEY",gatewayUrl:""}};class y{constructor(e){a&&a.destroy(),v&&this.destroyPlayer(h),this.initializeAudio(e),d&&this.reportPlaybackEnd(),this.initializeConviva(e),this.initializeConfigAds(e),this.setupEvent(e)}initializeAudio({src:e="",autoplay:t=!1,withAds:n=!1,adElement:i="ad-container",adsURL:a}){this._src=e,this._player=document.getElementById("roov-player"),v=this._player,this._player.setAttribute("playsinline",""),this._player.src=this.isHLS()?"":e,this._withAds=n,this._adElement=i,this._adsURL=a,t&&(this._player.muted=!0,this.play()),console.log("isHLS",this.isHLS())}initializeConviva({convivaConfig:e=""}){r=!!e,r&&(this.convivaContentInfo={},this.convivaDeviceMetadata={},this._withAds&&(this.convivaAdsInfo={}),this.convivaDebug=e.debug,E.content.assetName=e.assetName,E.content.live=e.isLive,E.content.url=this._src,E.content.contentLength=this.duration()?this.duration():0,E.content.TEST_CUSTOMER_KEY=e.TEST_CUSTOMER_KEY,E.content.PRODUCTION_CUSTOMER_KEY=e.PRODUCTION_CUSTOMER_KEY,E.content.gatewayUrl=e.gatewayUrl,E.content.customTags=e.customTags,E.content.deviceTags=e.deviceTags,this.initConvivaClient())}initializeConfigAds({onPlaying:e,onBuffering:t,getBufferLength:n,onFinish:i}){"undefined"!=typeof google&&this._withAds&&(this.onPlaying=e,this.onBuffering=t,this.getBufferLength=n,this.onFinish=i,this.setUpIMA())}destroyPlayer({onPlaying:e,onBuffering:t}){v.removeEventListener("playing",e),v.removeEventListener("waiting",t),v.removeEventListener("ended",p),v.removeEventListener("timeupdate",c)}setupEvent({onPlaying:e,onloaderror:t,onFinish:n,onTimeUpdate:i,onBuffering:a,getBufferLength:o}){h={onPlaying:e,onBuffering:a},this.onloaderror=t;let s,d=()=>{!this.isAllAdsCompleted&&this._withAds||(n(),r&&this.reportPlaybackEnd())};p=d,e&&this._player.addEventListener("playing",e),a&&this._player.addEventListener("waiting",a),n&&this._player.addEventListener("ended",d),this._player.addEventListener("timeupdate",s=()=>{if(i&&i(),o&&!this.isAdsPlaying){let t,n;const i=this._player.buffered,a=this._player.duration;if(i.length>0)for(var e=0;e<i.length;e++)if(i.start(i.length-1-e)<this._player.currentTime){t=i.end(i.length-1-e)/a*100,n=this._player.currentTime/a*100,this._hls?o(0,0):(o(n,t),100==n&&100==t&&(this.isPostrollAllowed=!0));break}}c=s})}initConvivaClient(){if(this.convivaDebug){var e={};e[Conviva.Constants.GATEWAY_URL]=E.content.gatewayUrl,e[Conviva.Constants.LOG_LEVEL]=Conviva.Constants.LogLevel.DEBUG,Conviva.Analytics.init(E.content.TEST_CUSTOMER_KEY,null,e)}else Conviva.Analytics.init(E.content.PRODUCTION_CUSTOMER_KEY,null);d=Conviva.Analytics.buildVideoAnalytics(),d.setPlayer(this._player),this._withAds&&(l=Conviva.Analytics.buildAdAnalytics(d),this.setAdListener())}reportAdBreakStarted(){d.reportAdBreakStarted(Conviva.Constants.AdType.CLIENT_SIDE,Conviva.Constants.AdPlayer.CONTENT)}reportAdBreakEnded(){d.reportAdBreakEnded()}reportDeviceMetadata(){this.setDeviceMetaData(),Conviva.Analytics.setDeviceMetadata(this.convivaDeviceMetadata)}reportPlaybackStart(){this.setVideoMetadata();for(let e in E.content.tags)this.convivaContentInfo[e]=E.content.tags[e];d.reportPlaybackRequested(this.convivaContentInfo)}reportPlaybackEnd(){d.reportPlaybackEnded()}setAdListener(){this.convivaAdsInfo[Conviva.Constants.AD_TAG_URL]=this._adsURL,this.convivaAdsInfo[Conviva.Constants.AD_PRELOAD_FEATURE]=!0,this.convivaAdsInfo[Conviva.Constants.IMASDK_CONTENT_PLAYER]=this._adElement,l.setAdListener(o,this.convivaAdsInfo)}setVideoMetadata(){this.convivaContentInfo[Conviva.Constants.STREAM_URL]=E.content.url,this.convivaContentInfo[Conviva.Constants.ASSET_NAME]=E.content.assetName,this.convivaContentInfo[Conviva.Constants.IS_LIVE]=E.content.live?Conviva.Constants.StreamType.LIVE:Conviva.Constants.StreamType.VOD,this.convivaContentInfo[Conviva.Constants.PLAYER_NAME]=E.content.applicationName,this.convivaContentInfo[Conviva.Constants.VIEWER_ID]=E.content.viewerId,this.convivaContentInfo[Conviva.Constants.DEFAULT_RESOURCE]="Resource Unknown",this.convivaContentInfo[Conviva.Constants.ENCODED_FRAMERATE]=0,this.convivaContentInfo[Conviva.Constants.APPLICATION_VERSION]=E.content.applicationVersion}setDeviceMetaData(){this.convivaDeviceMetadata[Conviva.Constants.DeviceMetadata.BRAND]=E.content.deviceTags.brand,this.convivaDeviceMetadata[Conviva.Constants.DeviceMetadata.MANUFACTURER]=E.content.deviceTags.manufacturer,this.convivaDeviceMetadata[Conviva.Constants.DeviceMetadata.MODEL]=E.content.deviceTags.model,this.convivaDeviceMetadata[Conviva.Constants.DeviceMetadata.TYPE]="desktop"===E.content.deviceTags.type?Conviva.Constants.DeviceType.DESKTOP:"mobile"===E.content.deviceTags.type?Conviva.Constants.DeviceType.MOBILE:Conviva.Constants.DeviceType.CONSOLE_LOG,this.convivaDeviceMetadata[Conviva.Constants.DeviceMetadata.OS_NAME]=E.content.deviceTags.os_name,this.convivaDeviceMetadata[Conviva.Constants.DeviceMetadata.OS_VERSION]=E.content.deviceTags.os_version,this.convivaDeviceMetadata[Conviva.Constants.DeviceMetadata.CATEGORY]="android"==E.content.deviceTags.category?Conviva.Constants.DeviceCategory.ANDROID:"ios"==E.content.deviceTags.category?Conviva.Constants.DeviceCategory.IOS:Conviva.Constants.DeviceCategory.WEB}setUpIMA(){this.createAdDisplayContainer(),o=new google.ima.AdsLoader(s),o.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,(e=>{this.onAdsManagerLoaded(e)}),!1),o.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(e=>{this.onAdError(e)}),!1);this._player.onended=()=>{(this.isAllAdsCompleted||this.isPostrollAllowed)&&(o.contentComplete(),this.isContentFinished=!0)};var e=new google.ima.AdsRequest;e.adTagUrl=this._adsURL,e.linearAdSlotWidth=this._player.clientWidth,e.linearAdSlotHeight=this._player.clientHeight,e.nonLinearAdSlotWidth=this._player.clientWidth,e.nonLinearAdSlotHeight=this._player.clientHeight,o.requestAds(e)}createAdDisplayContainer(){s=new google.ima.AdDisplayContainer(document.getElementById("ad-container"),this._player)}playAds(){if(this.isAdsLoaded)return;this.isAdsLoaded=!0,this._player.load(),s.initialize();let e=this._player.clientWidth,t=this._player.clientHeight;try{a.init(e,t,google.ima.ViewMode.NORMAL),a.start()}catch(e){console.log("AdsManager could not be started",e),this._player.play()}}onAdsManagerLoaded(e){var t=new google.ima.AdsRenderingSettings;t.restoreCustomPlaybackStateOnAdBreakComplete=!0,a=e.getAdsManager(this._player,t),a.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(e=>{this.onAdError(e)})),a.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,(e=>{this.onContentPauseRequested(e)})),a.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,(e=>{this.onContentResumeRequested(e)})),a.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED,(e=>{this.onAdEvent(e)})),a.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS,(e=>{this.onAdEvent(e)})),a.addEventListener(google.ima.AdEvent.Type.LOADED,(e=>{this.onAdEvent(e)})),a.addEventListener(google.ima.AdEvent.Type.STARTED,(e=>{this.onAdEvent(e)})),a.addEventListener(google.ima.AdEvent.Type.COMPLETE,(e=>{this.onAdEvent(e)})),this.playAds()}onAdEvent(e){const t=google.ima.AdEvent.Type;switch(e.type){case t.LOADED:let n=e.getAd();console.log("onAdLoaded"),n.isLinear()||this.play();break;case t.STARTED:this.isAdsPlaying=!0,this.onPlaying&&this.onPlaying({state:"ADS"});break;case t.AD_BUFFERING:this.onBuffering();break;case t.COMPLETE:r&&this.reportAdBreakEnded(),this.isAdsPlaying=!1;break;case t.AD_PROGRESS:let i=e.getAdData();this.getBufferLength&&this.getBufferLength(i.currentTime,i.duration);break;case t.ALL_ADS_COMPLETED:this.isAllAdsCompleted=!0,this.isContentFinished&&(this.onFinish(),r&&this.reportPlaybackEnd());break;default:console.log("onAdEvent")}}onAdError(e){console.log(e.getError()),a.destroy()}onContentPauseRequested(){r&&this.reportAdBreakStarted(),this._player.pause()}onContentResumeRequested(){this.isContentFinished||this._player.play()}play(){this.isAdsPlaying?a.resume():this.isHLS()?n.e(801).then(n.t.bind(n,990,7)).then((({default:e})=>{e.isSupported()?(this._hls=new e,this._hls.loadSource(this._src),this._hls.attachMedia(this._player),this._hls.on(e.Events.MANIFEST_PARSED,(()=>{this.playVideo()}))):this._player.canPlayType("application/vnd.apple.mpegurl")&&(this._player.src=this._src,this._player.addEventListener("loadedmetadata",(()=>{this.playVideo()})))})):this.playVideo()}playVideo(){!this.isAdsLoaded&&this._withAds||this.isContentFinished||(this._player.play(),r&&(this.reportPlaybackStart(),this.reportDeviceMetadata()))}isHLS(){return/.m3u8$/.test(this._src)}pause(){this.isAdsPlaying?a.pause():(this._player.pause(),r&&this.reportPlaybackEnd())}volume(e){a&&0!=Object.keys(a).length&&a.setVolume(e),this._player.volume=e}duration(){return this._hls?"Infinity":this._player.duration}isPlaying(){return!this._player.paused}currentSource(){return this._player.src}currentTime(){return this._player.currentTime}seek(e){this._player.currentTime=e}muted(){0!=this._player.volume?this.volume(0):this.volume(1)}}}},i={};function a(e){if(i[e])return i[e].exports;var t=i[e]={exports:{}};return n[e].call(t.exports,t,t.exports,a),t.exports}return a.m=n,a.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);a.r(n);var i={};if(2&t&&"object"==typeof e&&e)for(const t in e)i[t]=()=>e[t];return i.default=()=>e,a.d(n,i),n},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>"Hls.js",a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="roov:",a.l=(n,i,o)=>{if(e[n])e[n].push(i);else{var s,r;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var v=d[l];if(v.getAttribute("src")==n||v.getAttribute("data-webpack")==t+o){s=v;break}}s||(r=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[i];var h=(t,i)=>{s.onerror=s.onload=null,clearTimeout(c);var a=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(i))),t)return t(i)},c=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),r&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="",(()=>{var e={826:0};a.f.j=(t,n)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise(((n,a)=>{i=e[t]=[n,a]}));n.push(i[2]=o);var s=a.p+a.u(t),r=new Error;a.l(s,(n=>{if(a.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",r.name="ChunkLoadError",r.type=o,r.request=s,i[1](r)}}),"chunk-"+t)}};var t=this.webpackChunkroov=this.webpackChunkroov||[],n=t.push.bind(t);t.push=t=>{for(var i,o,[s,r,d]=t,l=0,v=[];l<s.length;l++)o=s[l],a.o(e,o)&&e[o]&&v.push(e[o][0]),e[o]=0;for(i in r)a.o(r,i)&&(a.m[i]=r[i]);for(d&&d(a),n(t);v.length;)v.shift()()}})(),a(172)})()}));
//# sourceMappingURL=index.js.map