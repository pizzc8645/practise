var topic = [
"尚未開學",
"國定假日",
"環境準備",
"隨機性",
"重複性"
];

var starDate =new Date();
//日期時間物件
function setMonthAndDay(startMonth,startDay){
    //把社長說的那個日期變成javaScript需要的日期時間格式
    starDate.setMonth(startMonth-1,startDay);
    starDate.setHours(0);
    starDate.setMinutes(0);
    starDate.setSeconds(0);
}

setMonthAndDay(2,21);