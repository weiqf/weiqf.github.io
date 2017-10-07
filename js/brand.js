/**
 * Created by lenovo on 2017/9/21.
 */
$(function () {
  var href = window.location.href
  var brandtitleid = href.split("=")[1]
  
  $.ajax({
    url : "http://127.0.0.1:9090/api/getbrand",
    type : "get",
    datatype :"json",
    data : {
      brandtitleid:brandtitleid
  },
    success : function (data) {
      var getBrt = template("tplBrt", data);
      $('.category-title').html(getBrt);
    }
  })
  
  var pagesize = 6;
  $.ajax({
    url : "http://127.0.0.1:9090/api/getbrandproductlist",
    type : "get",
    datatype :"json",
    data : {
      brandtitleid:brandtitleid,
      pagesize:pagesize
    },
    success : function (data) {
      var getBrts = template("tplBrts", data);
      $('.dsph').html(getBrts);
  
  
  
  
  
      var productCom = [];
      for (var i = 0; i < data.result.length; i++) {
        var item = data.result[i];
        productCom.push({productImg: item.productImg, productName: item.productName});
      }
  
  
      $.ajax({
        url : "http://127.0.0.1:9090/api/getproductcom",
        type : "get",
        datatype :"json",
        data : {
          productid :1
        },
        success : function (data) {
          for(var i=0;i<data.result.length;i++){
            var item = data.result[i];
            for(var k in productCom[i]){
              item[k] =  productCom[i][k];
            }
          }
      
          var getBrtsl = template("tplBrtsl", data);
          $('.dspl').html(getBrtsl);
        }
      })
    }
  })
  
  $.ajax({
    url : "http://127.0.0.1:9090/api/getproductcom",
    type : "get",
    datatype :"json",
    data : {
      productid :1
    },
    success : function (data) {
      for(var i=0;i<data.result.length;i++){
        var item = data.result[i];
        for(var k in productCom[i]){
          item[k] =  productCom[i][k];
        }
      }
      
      var getBrtsl = template("tplBrtsl", data);
      $('.dspl').html(getBrtsl);
    }
  })
  
 
})
