$(function () {

    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;
    var one = 24 * 60 * 60 * 1000
    for (var x = 0; x < topicCount; x++) {
        if ((x % 2) == 0) {
            $("#courseTable").append("<tr>")
            //  $("#courseTable").append("<td>"+(x+1)+"</td>")
            $("#courseTable").append(`<td>${x + 1}</td>`)
            $("#courseTable").append(`<td>${new Date(starDate.getTime() + 7 * x * one).toLocaleDateString().slice(5)}</td>`)
            $("#courseTable").append(`<td>${topic[x]}</td>`)
            $("#courseTable").append("</tr>")
        }
        else {
            // $("td").eq().css("background-color","red");
            $("#courseTable").append("<tr>")
            //  $("#courseTable").append("<td>"+(x+1)+"</td>")
            $("#courseTable").append(`<td bgcolor="yellow">${x + 1}</td>`)
            $("#courseTable").append(`<td bgcolor="yellow" >${new Date(starDate.getTime() + 7 * x * one).toLocaleDateString().slice(5)}</td>`)
            $("#courseTable").append(`<td bgcolor="yellow">${topic[x]}</td>`)
            $("#courseTable").append("</tr>")
           
        }

        // $("#birthday").addEventListener(change,function (){

        // })
        // $("img").attr("src",$("li").eq(亂數).attr("title"))
        //.slice(5) 取得字串裡的部分 前面數來第五個
        //.toLocaleDateString()=根据本地时间格式，把 Date 对象的日期部分转换为字符串。
        //starDate.getTime() = 取得1970到現在的毫秒  
        //tr = 列  th = 表格標題  `= 字串跟變數可以一起用 變數用 ${}包在裡面   就不用"字串"+(變數)+"字串"



    }

})