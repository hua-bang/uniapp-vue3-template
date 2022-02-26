"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const count = common_vendor.ref(1);
    const add = () => {
      count.value++;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(count.value),
        b: common_vendor.o(add)
      };
    };
  }
});
wx.createComponent(_sfc_main);
