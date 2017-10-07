/**
 * Created by lenovo on 2017/9/19.
 */
$(function () {
  var href = window.location.href
  // var titleid =href.split("=")[1].split("&")[0];
  var titleid =href.split("=")[2]
  // var titleid = window.localStorage.getItem("id");
  $.ajax({
    url : "http://127.0.0.1:9090/api/getcategorybyid",
    type : "get",
    datatype : "json",
    data : {
      categoryid : titleid
    },
    success : function (data) {
      var getTtd = template("tplTtd",data);
      $(".mdaohang>ul").append(getTtd);
    }
  })
  var productid=href.split("=")[1].split("&")[0];
  // var productid=window.localStorage.getItem("proid");
  $.ajax({
    url : "http://127.0.0.1:9090/api/getproduct",
    type : "get",
    datatype : "json",
    data : {
      productid : productid
    },
    success : function (data) {
      var getPro = template("tplPro",data);
      $(".more-show").html(getPro);
      var getpro1 = template("tplPro1",data);
      $(".more-from").html(getpro1);
      var getpro2 = template("tplPro2",data);
      $(".mdaohang>ul").append(getpro2)
    }
  })
  
  $.ajax({
    url : "http://127.0.0.1:9090/api/getproductcom",
    type : "get",
    datatype : "json",
    data : {
      productid : productid
    },
    success : function (data) {
      var getBb = template("tplBb",data);
      $(".more-say").html(getBb);
    }
  })
  

})