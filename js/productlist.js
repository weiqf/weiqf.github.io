/**
 * Created by lenovo on 2017/9/19.
 */
$(function () {
  // var categoryId=window.localStorage.getItem("id");
  var href = window.location.href
  var categoryId =href.split("=")[1].split("&")[0];
  // var href = window.location.href
  // var categoryId = href.split("=")[1].split("&")[0]
  $.ajax({
    url : "http://127.0.0.1:9090/api/getcategorybyid",
    type : "get",
    datatype : "json",
     data : {
       categoryid:categoryId
     },
    success : function (data) {
        var getMdh = template("tplMdh",data);
        $(".mdaohang").html(getMdh);
    }
  })
  
  var href = window.location.href
  // var pageid =Number(window.localStorage.getItem("pageid")) || 1;
  var pageid =href.split("=")[2] || 1;
  var maxTotal = 0;
  // var page = 1;
  var select = $("select");
  var prev = $(".prev");
  var next = $(".next");
  $.ajax({
    url : "http://127.0.0.1:9090/api/getproductlist",
    type : "get",
    datatype : "json",
    data : {
      categoryid:categoryId,
      pageid : pageid
    },
    success : function (data) {
      var getList = template("tplList",data);
      $(".pro-recom").html(getList);
      $(".pro-recom").on("click","li",function (){
        var categoryId = $(this).attr("class");
        window.localStorage.setItem("proid", categoryId);
      })
  
      maxTotal = Math.ceil(data.totalCount/data.pagesize);
      select.html("");
      for (var i = 1; i <= maxTotal; i++) {
        var option=$("<option></option>");
        option.val(i);
        option.html(i+"/"+maxTotal);
        select.append(option);
      }
      select.val(pageid);
      
      select.on("change",function () {
        pageid = $(this).val();
        window.localStorage.setItem("pageid", pageid);
        // var nowhref = href+pageid;
        // window.location.href = nowhref;
        
        var str = "&pageid="+pageid
        var nowhref = href.split("&")[0]+str;
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
          url: "http://127.0.0.1:9090/api/getproductlist",
          type: "get",
          datatype: "json",
          data: {
            categoryid: categoryId,
            pageid: pageid
          },
          success: function (data) {
            window.localStorage.setItem("pageid", pageid);
            var str = "&pageid="+pageid
            var nowhref = href.split("&")[0]+str;
            window.location.href = nowhref;
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
          url: "http://127.0.0.1:9090/api/getproductlist",
          type: "get",
          datatype: "json",
          data: {
            categoryid: categoryId,
            pageid: pageid
          },
          success: function (data) {
            window.localStorage.setItem("pageid", pageid);
            var str = "&pageid="+pageid
            var nowhref = href.split("&")[0]+str;
            window.location.href = nowhref;
          }
        })
      })
    }
  })
})