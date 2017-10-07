/**
 * Created by lenovo on 2017/9/18.
 */

// 生成导航
$(function () {
  $.ajax({
     url : "http://127.0.0.1:9090/api/getindexmenu",
    type : "get",
    dataType : "json",
    success : function(data){
       // console.log(data);
      var getNav = template("tplNav",data);
      $(".row").append(getNav);
    }
  })
  
  
  $(".row").on("click","li#7",function () {
    $("li:nth-of-type(n + 9)").toggleClass("show");
  })
  $.ajax({
    url : "http://127.0.0.1:9090/api/getmoneyctrl",
    type : "get",
    datatype : "json",
    success :function (data) {
      // console.log(data);
      var getDis = template("tplDis",data);
      
      $(".recom").append(getDis);
    }
  })
  
  $(".gogotop").click(function () {
    $('body,html').animate({scrollTop:0},500);
    return false;
  })
})

  