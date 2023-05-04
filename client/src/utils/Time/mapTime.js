
// Check Time Real

function checkTimeReal(time){
    console.log(time);
    const checktime = [60, 3600, 86400, 2592000, 31536000]
    if(time < 60){
        
        return `${time} Giây trước`;
    }else if (time >= 60 && time <= 3600) {
        return MathFloor(`${time/checktime[0]}`) +" "+ "Phút trước";
    }else if(time > 3600 && time <= 86400){
        return MathFloor(`${time/checktime[1]}`) +" "+ "Giờ trước";
    }else if(time > 86400 && time <= 2592000){
        return MathFloor(`${time/checktime[2]}`) +" "+ "Ngày trước";
    }else if(time > 2592000 && time <= 31536000){
        return MathFloor(`${time/checktime[3]}`) +" "+ "Tháng trước";
    }else{
        return MathFloor(`${time/checktime[4]}`) +" "+ "Năm trước";
    }
}

// Round Number
function MathFloor(time){
    return Math.floor(time)
}

// Get Time Real
function mapTime(time = 0){
    if(typeof time === "number"){
        const timeRealSecond = Math.floor(parseInt(Date.now() - time)/1000)
        return checkTimeReal(timeRealSecond)
    }else{
        console.log("Not Number");
    }
} 
export default mapTime;