/**
 * Created by lenovo on 2017/9/20.
 */
$(function () {
  $.ajax({
    url : "http://127.0.0.1:9090/api/getinlanddiscount",
    type : "get",
    datatype : "json",
    success : function (data) {
      var getIld = template("tplIld",data);
      $(".il-disul").html(getIld)
    }
  })
})