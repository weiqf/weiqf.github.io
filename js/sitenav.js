/**
 * Created by lenovo on 2017/9/20.
 */
$(function () {
  $.ajax({
    url: "http://127.0.0.1:9090/api/getsitenav",
    type: "get",
    datatype: "json",
    success : function (data) {
      var getStt = template("tplStt",data);
      $(".st-tbul").html(getStt);
    }
  })
})