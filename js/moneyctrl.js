/**
 * Created by lenovo on 2017/9/20.
 */
$(function () {
  var href = window.location.href
  var pageid =Number(window.sessionStorage.getItem("pages")) || 1;
 // var pageid = 1;
  var maxTotal = 0;
// var pages = 0;
  var select = $("select");
  var prev = $(".prev");
  var next = $(".next");
  
  $.ajax({
    url : "http://127.0.0.1:9090/api/getmoneyctrl",
    type : "get",
    datatype : "json",
    data : {
      pageid : pageid-1
    },
    success :function (data) {
      var getDis = template("tplDis",data);
      $(".recom").html(getDis);
      
      maxTotal = Math.ceil(data.totalCount/data.pagesize);
      select.html("");
      for (var i = 0; i <= maxTotal; i++) {
        var option=$("<option></option>");
        option.val(i+1);
        option.html(i+1+"/"+maxTotal);
        select.append(option);
      }
      select.val(pageid);
      select.on("change",function () {
        pageid = $(this).val();
        window.sessionStorage.setItem("pages", pageid);
        var str = "?pages="+pageid
        var nowhref = href.split("?")[0]+str;
        window.location.href = nowhref;
      })
      
      prev.on("click",function () {
        pageid--;
        if(pageid <1){
          pageid =1;
          return;
        }
        select.val(pageid)
        $.ajax({
          url: "http://127.0.0.1:9090/api/getmoneyctrl",
          type: "get",
          datatype: "json",
          data: {
            pageid: pageid - 1
          },
          success: function (data) {
            var getDis = template("tplDis", data);
            $(".recom").html(getDis);
            select.on("change",function () {
              pageid = $(this).val();
              window.sessionStorage.setItem("pages", pageid);
              var str = "?pages="+pageid
              var nowhref = href.split("?")[0]+str;
              window.location.href = nowhref;
            })
          }
        })
      })
      
      next.on("click",function () {
        pageid++;
        if(pageid>maxTotal){
          pageid =maxTotal;
          return;
        }
        select.val(pageid)
        $.ajax({
          url: "http://127.0.0.1:9090/api/getmoneyctrl",
          type: "get",
          datatype: "json",
          data: {
            pageid: pageid - 1
          },
          success: function (data) {
            var getDis = template("tplDis", data);
            $(".recom").html(getDis);
            select.on("change",function () {
              pageid = $(this).val();
              window.sessionStorage.setItem("pages", pageid);
              var str = "?pages="+pageid
              var nowhref = href.split("?")[0]+str;
              window.location.href = nowhref;
            })
          }
        })
      })
    }
  })
  
})