$(function () {
    $("input").on("click", function () {
        //alert("HI");
        //按下按鈕後跳出彈掉視窗HI


        //$("h1").text("hello");
        //取得畫面上的H! 改變裡面的文字變成hello


        //$("h1").text($("li:first").text());
        //取得畫面上的H1 再去找畫面上的li裡的文字放進h1裡

        var 清單文字數量 = $("li").length;
        var 亂數 = Math.floor(Math.random()*清單文字數量);
        //random 是 0 - 0.99999   乘上 文字數量3  = 0 - 2.99999  
        //floor 是 向下取整數  = 0-2 
        //0 
        //取得裡面的文字元素
        $("h1").text($("li").eq(亂數).text())
        //找到img元件
        //設定img元件的src屬性 -> 對應元件的title值
        //取得屬性值
        $("img").attr("src",$("li").eq(亂數).attr("title"))

    })
})