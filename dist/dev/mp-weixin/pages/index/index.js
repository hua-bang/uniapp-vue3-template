"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  Count();
}
const Count = () => "../../components/Count.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const num = 231;
    const title = "hello";
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title),
        b: common_vendor.t(num)
      };
    };
  }
});
wx.createPage(_sfc_main);
