/**
 * Created by lenovo on 2017/9/20.
 */

$(function () {
  var href = window.location.href;
  var couponid = href.split("=")[1].split("&")[0];
  var couponTitle = href.split("=")[2];
  $(".bgc p").html(decodeURI(couponTitle)+"优惠券")
  $.ajax({
    url: "http://127.0.0.1:9090/api/getcouponproduct",
    type: "get",
    datatype: "json",
    data : {
      couponid : couponid
    },
    success : function (data) {
      var getCpt = template("tplCpt",data);
      $(".recom").html(getCpt);
    }
  })
})
