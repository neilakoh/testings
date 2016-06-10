import iap from "in-app-purchase";

function test() {
  iap.config({
     googlePublicKeyStrLive: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh9hHJDS/Hk8iQ/TJlM++HmJMg6yAgFwJm/UyyCptu7fmFVuLGvJ15/QrQtXhQxc2yxFoWuVgDtw8ef4swz20w37cfqba0WHH7YgU1Z2iCvB/dabTSYPxyJg47H4iSMkV6rkZyhac0e/hPM6Gf4D5TPxvQCYFzvrGk7iC7SgFjG+SCl81p/NjnJ5DNs3sH8aS+tJkIK2msaQnfw7JJzFUhBXKHteY1EYVYwBpPMbDh4hA39h36EX/Q1sOTGnEVjR8XJq3N4h+tyjfFO/HFIrThwqJj4AlC0BJV/jjOVbJUAXZU3xNpMA4iDzG+4ivNdEoBND0pNe8G+L0UHkEKmiRJQIDAQAB'
  });

    var receipt = {
      'data': {
        "orderId":"GPA.1378-1743-2481-60151",
        "packageName":"com.rometic.trulyasian",
        "productId":"g001",
        "purchaseTime":1456192890584,
        "purchaseState":0,
        "purchaseToken":"nbglngoljenigcbmeicpbckb.AO-J1OxsKilAvlx7EZgG7ePK4v2gxNJBZI3_sKp1rxBykPdMGfupPYvKP0GTsrAij9COz3lFaybw2SeMvOmsv0X7G125EKV1tK_N7dmkUEV6Que9Jz41unM",
        "autoRenewing":true
      },
      'signature': 'Z1IYQUtGfVg60p2MbZqdinsKarFZ671QRXlONkGyjhwBezsS+3LjCnc6VDx7R3RqbxUj1VLuPr4VjLMYbuMPtFoK5tAZh130IVzX4BVD40s0XK/BPBVeOJOEjN6TnRtI/IGjiQEaJA5aYYrbMDVmU0TXXq6QP4OBD0btZtPaiTkwf13yYG+IN4atbrL3F2ddXRA0oHgLa211hhRXxK02hchuOVLH1psqIg/vTqhEmd5+Jugcxsejg5ob/EOsBsQog+uXbziJQsWdgBuLWXiZnBqCUaXkJzLaMGpM7C527SAZTrcoHxenT3aIoPN/UoDSoh/jVVhixxRx2bYCluyOQQ=='
    }

  iap.setup(function (error) {
    if (error) {
        return console.log("Setup Error: "+error);
    } else {
      iap.validate(iap.APPLE, receipt, function (error, response) {
          if (error) {
              return console.log("Validation Error: "+error);
          }
          if (iap.isValidated(response)) {
              var purchaseDataList = iap.getPurchaseData(response);
              return purchaseDataList;
          }
      });
    }
});
}

export default function passData() {
  return test();
}
