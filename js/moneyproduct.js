/**
 * Created by lenovo on 2017/9/20.
 */
$(function () {
  
  var href = window.location.href
  var productid = href.split("=")[1]
  
  $.ajax({
    url : "http://127.0.0.1:9090/api/getmoneyctrlproduct",
    type :"get",
    datatype : "json",
    data : {
      productid : productid
    },
    success : function (data) {
      var getTti = template("tlpTti",data);
      $(".mp-title").html(getTti);
  
      var getTxq = template("tlpTxq",data);
      $(".mp-xq").html(getTxq);
  
      var getTct = template("tlpTct",data);
      $(".mp-city").html(getTct);
  
      var getTpl = template("tlpTpl",data);
      $(".mp-pl").html(getTpl);
    }
  })
})
