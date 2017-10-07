/**
 * Created by lx on 2017/6/26.
 */
$(function(){
  function subStr(url) {
    var obj = {};
    var str = url.split('?')[1];

    if(!str){
      return {};
    }
    //console.log(str);
    var str2 = str.split('&');
    // console.log(str2);
    for (var k in str2) {
      var str3 = str2[k].split('=');
      obj[str3[0]] = str3[1];
    }
    return obj;
  }
  var href = subStr(window.location.href);
  // console.log(href);

  var areaid = 0;
  var shopid = 0;



// 商铺
  $.ajax({
    url:"http://127.0.0.1:9090/api/getgsshop",
    dataType:"jsonp",
    success:function(data){

      var str1 = template("tpl1",data);


      $(".shop>ul").html(str1);

      var nav_l = document.querySelector(".nav-l");
      var liArr = nav_l.querySelectorAll("li");
      var divArr = document.querySelectorAll(".content>div");
      var liArr1 = document.querySelectorAll(".shop>ul>li");
      //  console.log(liArr1)
      // console.log(divArr)
      for(var i = 0;i<liArr.length;i++){
        liArr[i].index = i;
        liArr[i].onclick=function(){
          console.log(1)

          //  for(var j = 0;j<liArr.length;j++){
          //     $(divArr[j]).addClass("hide");
          // }
          $(divArr[this.index]).toggleClass("hide").siblings().addClass("hide");
        }

      }

      for(var j = 0;j<liArr1.length;j++){
        liArr1[j].onclick=function(){
          shopid = this.dataset.shopId;
          // console.log(shopid)
          liArr[0].innerHTML = this.innerHTML + " ^";
          list(shopid,areaid);
          $(this).addClass("active").siblings().removeClass("active")
          $(this).parent("ul").parent(".shop").addClass("hide");
        }
      }







    }

  })
// 地区
  $.ajax({
    url:"http://127.0.0.1:9090/api/getgsshoparea",
    dataType:"jsonp",

    success:function(data){
      var str2 = template("tpl2",data);
      $(".area>ul").html(str2);
      var nav_l = document.querySelector(".nav-l");
      var liArr = nav_l.querySelectorAll("li");
      var liArr1 = document.querySelectorAll(".area>ul>li");
      var divArr = document.querySelectorAll(".content>div");
      for(var j = 0;j<liArr1.length;j++){
        liArr1[j].onclick=function(){
          areaid = this.dataset.areaId;
          console.log(this.innerHTML.trim().slice(0,2))
          liArr[1].innerHTML = this.innerHTML.trim().slice(0,2)  + " ^";
          $(this).addClass("active").siblings().removeClass("active")
          list(shopid,areaid);
          $(this).parent("ul").parent(".area").addClass("hide");
        }
      }


    }
  })

// 商品列表
  function list(shopid,areaid){
    $.ajax({
      url:"http://127.0.0.1:9090/api/getgsproduct",
      dataType:"json",
      data:{
        shopid :shopid,
        areaid :areaid
      },
      success:function(data){
        // console.log(data)
        var str3 = template("tpl3",data);
        // console.log(str3)
        $(".content-list>ul").html(str3);

      }
    })

  }
  list(shopid,areaid);









})