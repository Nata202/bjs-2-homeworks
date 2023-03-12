class AlarmClock {

    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callback) {
        time = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
        if (!time || !callback){
            throw new Error ('Отсутствуют обязательные аргументы');
        } else if (this.alarmCollection.find(clock => clock.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        return this.alarmCollection.push(new Object({callback: callback, time: time, canCall: true}));

    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
        delete this.alarmCollection;
    }

    getCurrentFormattedTime () {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
    }

    start () {
        if (this.intervalId !== null){
            return;
        }

    this.intervalId = setInterval(() => this.Object.forEach({
        callback: callback, 
        time: getCurrentFormattedTime(), 
        canCall: true,
    }), 1000);

    if (this.intervalId === true){
        this.canCall = false;
        return this.callback();
    }
    }

    stop () {
        clearInterval(intervalId);
        this.intervalId = null;
    }

    resetAllCalls () {
        this.alarmCollection.forEach(() => this.canCall === true)

    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];        
    }
}