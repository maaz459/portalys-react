"use strict";(self.webpackChunkportalys=self.webpackChunkportalys||[]).push([[656],{84656:function(r,n,e){e.r(n),e.d(n,{getED25519Key:function(){return c}});var a=e(93433),t=e(83201),f=e.n(t),o=e(19778).Buffer,s=f().lowlevel;function c(r){var n;n="string"===typeof r?o.from(r,"hex"):r;var e=new Uint8Array(64),t=[s.gf(),s.gf(),s.gf(),s.gf()],f=new Uint8Array([].concat((0,a.Z)(new Uint8Array(n)),(0,a.Z)(new Uint8Array(32)))),c=new Uint8Array(32);s.crypto_hash(e,f,32),e[0]&=248,e[31]&=127,e[31]|=64,s.scalarbase(t,e),s.pack(c,t);for(var i=0;i<32;i+=1)f[i+32]=c[i];return{sk:o.from(f),pk:o.from(c)}}}}]);
//# sourceMappingURL=656.9faf4f83.chunk.js.map