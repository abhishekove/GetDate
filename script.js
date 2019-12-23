function calendar(){
    var day=['Sunday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var month=['January','February','March','April','May','June','July','August','September','Octomber','November','December'];
    var d=new Date();
    setText('calendar-day',day[d.getDay()]);
    setText('calendar-date',d.getDate());
    setText('calendar-month-year',month[d.getMonth()]+' '+(d.getYear()+1900));
};
function setText(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};
window.onload=calendar;