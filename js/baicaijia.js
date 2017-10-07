/**
 * Created by lenovo on 2017/9/21.
 */
$(function () {
  // var warpScroll = null;
  
  $.ajax({
    url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
    type: "get",
    datatype: "json",
    success : function (data) {
      var getBct = template("tplBct",data);
      $(".bcj-wrap>ul").html(getBct);
      
      
  
      var ul = $(".bcj-wrap>ul");
      var lis = $(".bcj-wrap>ul>li");
      ul.width((lis.width()*1.15)*lis.length)
      
        
      // lis.on("click",function () {
      //   var titleid = $(this).attr("id");
      //   window.localStorage.setItem("titleID", titleid);
      // })
      $.ajax({
        url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
        type: "get",
        datatype: "json",
        data :{
          titleid :0
        },
        success : function (data) {
          $(".bcj-recom").html(template("tplBcl",data))
        }
      })
      
      
  
      var myScroll = new IScroll('#bcj-wrapper', {
        scrollX: true,
        scrollY: false
      });
      lis.eq(0).addClass("active").siblings().removeClass("active");
      // lis.each(function (i,v) {
      //   // console.log(v);
      // })
        lis.on("click",function () {
        var that = $(this);
        that.addClass("active").siblings().removeClass("active");
        var titleid = that.attr("data-titleId") || 0;
        $.ajax({
          url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
          type: "get",
          datatype: "json",
          data :{
            titleid :titleid
          },
          success : function (data) {
              $(".bcj-recom").html(template("tplBcl",data))
          }
        })
      })
    }
  })
  

  
})
