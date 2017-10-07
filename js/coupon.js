/**
 * Created by lenovo on 2017/9/20.
 */
$(function () {
  $.ajax({
    url: "http://127.0.0.1:9090/api/getcoupon",
    type: "get",
    datatype: "json",
    success : function (data) {
      var getCp = template("tplCp",data);
      $(".cp-stroul").html(getCp);
    }
  })
})