var n={name:"AtherlabsMultiSig",version:"1.0.0"},t={Nonce:[{name:"nonce",type:"uint256"}]},e={OffChainTransaction:[{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"data",type:"bytes"},{name:"nonce",type:"uint256"}]};function r(){return r=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},r.apply(this,arguments)}var i=/*#__PURE__*/function(){function i(t,e){this.domain=void 0,this.domain=r({},n,{verifyingContract:t,chainId:e.toString()})}var a=i.prototype;return a.signCancelTxNonce=function(n,e){try{return Promise.resolve(n.signTypedData(this.domain,t,r({},e)))}catch(n){return Promise.reject(n)}},a.signOffChainTransaction=function(n,t){try{return Promise.resolve(n.signTypedData(this.domain,e,r({},t)))}catch(n){return Promise.reject(n)}},i}();exports.DOMAIN_BASE_CONFIG=n,exports.EIP712_NONCE_TYPES=t,exports.EIP712_OFFCHAIN_TRANSACTION_TYPES=e,exports.MultiSigOffChainSDK=i;
