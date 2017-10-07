/**
 * Created by lenovo on 2017/9/21.
 */
$(function () {
  $.ajax({
    url : "http://127.0.0.1:9090/api/getbrandtitle",
    type : "get",
    datatype :"json",
    success : function (data) {
      var getTitleb = template("tplTitleb",data);
      $(".bj-type").append(getTitleb);
    }
  })
})
  