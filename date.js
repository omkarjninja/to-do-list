
module.exports.getDate=getDate;
function getDate(){
    var today=new Date();
    var day="";
    var dayname=["sun","mon","tues","wed","thurs","fri","satur"]
    var options={
        weekday:"long",
        month:"long",
        day:"numeric"
    }
    var tday=dayname[today.getDay()];
    // console.log(tday);
    day=tday+"day";
    day=today.toLocaleDateString("en-US",options);
    return day;
}
module.exports.getDay=getDay;
function getDay(){
    var today=new Date();
    var day="";
    var dayname=["sun","mon","tues","wed","thurs","fri","satur"]
    var options={
        weekday:"long",
    }
    var tday=dayname[today.getDay()];
    // console.log(tday);
    day=tday+"day";
    day=today.toLocaleDateString("en-US",options);
    return day;
}