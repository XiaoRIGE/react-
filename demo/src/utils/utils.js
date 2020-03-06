export default {
    formatDate(time){
        if(!time)return '';
        let date = new Date(time);
        let monthVal = date.getMonth();
        let dayVal = date.getDay();
        let hourVal = date.getHours();
        let minutesVal = date.getMinutes();
        let secVal = date.getSeconds();
        let month = (monthVal+1)>=10?(monthVal+1):'0'+(monthVal+1);
        let day = dayVal>=10?dayVal:'0'+dayVal;
        let hour = hourVal>=10?hourVal:'0'+hourVal;
        let minutes = minutesVal>=10?minutesVal:'0'+minutesVal;
        let sec = secVal>=10?secVal:'0'+secVal;
        return date.getFullYear() +'-'+month+'-'+day+' '+hour+":"+minutes+":"+sec;
    }
}