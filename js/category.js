/**
 * Created by lenovo on 2017/9/18.
 */
$(function () {
  $.ajax({
    url : "http://127.0.0.1:9090/api/getcategorytitle",
    type : "get",
    datatype :"json",
    success : function (data) {
      var getTitle = template("tplTitle",data);
      $(".bj-type").append(getTitle);
    }
  })
  
  
  $(".bj-type").on("click",".bj-title",function () {
    var that = $(this);
    var titleid = that.attr("id");
    that.parent().siblings().children(".bj-info").hide();
    that.next().show();
    if(that.hasClass("show")){
      that.removeClass("show").siblings().empty();
      return false;
    }
    that.addClass("show");
    $.ajax({
      url : "http://127.0.0.1:9090/api/getcategory",
      type : "get",
      datatype :"json",
      data : {
        titleid:titleid,
      },
      success : function (data) {
        var getInfo = template("tplInfo",data);
        that.next().html(getInfo);
        $(".bj-type").on("click",".bj-info>li",function (){
          var categoryId = $(this).attr("id");
          window.localStorage.setItem("id", categoryId);
        })
      }
    })
  })
})
