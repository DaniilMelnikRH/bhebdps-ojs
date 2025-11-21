class AlarmClock {
    constructor(){}

    alarmCollection = [];
    intervalId = null;

    addClock(time, callback){
        if(!(time && callback)) throw new Error("Отсутствуют обязательные аргументы!");

        if(this.alarmCollection.find(element => element.time === time)){
            console.warn("Уже присутствует звонок на это же время.");
        }

        this.alarmCollection.push({callback: callback, time: time, canCall: true});
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(element => 
            element.time !== time);
    }

    getCurrentFormattedTime(){
        const now = new Date();
        return (now.getHours() >= 10 ? now.getHours() : "0" + now.getHours()) +
        ":" + (now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes());
    }

    start(){
        if(this.intervalId) return;

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if((this.getCurrentFormattedTime() === alarm.time)
                    && alarm.canCall === true){
                        alarm.canCall = false;
                        alarm.callback();
                }
            });
        }, 1000);
    }

    stop(){
        clearInterval();
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}