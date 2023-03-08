class AlarmClock {

    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callback) {
        const hour = +(time[0] + time[1]);
        const minute = +(time[2] + time[3]);
        if (time === undefined || callback === undefined){
            throw new Error ('Отсутствуют обязательные аргументы');
        } else if (this.alarmCollection.find(clock => clock.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        return this.alarmCollection.push(Object({callback: callback, time: time, canCall: true}));

    }

    removeClock(time) {
        this.call = this.alarmCollection.filter(clock => clock.time === time);
        delete this.call;
    }

    getCurrentFormattedTime () {
        return new Date().toTimeString();
    }

    start () {
        if (this.intervalId !== undefined){
            return;
        }

    this.intervalId = setInterval(this.alarmCollection.forEach(clock => clock.time === time), 1000);
    if (this.intervalId === true){
        this.canCall = false;
        return this.callback;
    }
    }

    stop () {
        function clearInterval(){
            this.intervalId = null;
        }
        return clearInterval();
    }

    resetAllCalls () {
        this.alarmCollection.forEach(canCall => this.canCall === true)

    }

    clearAlarms () {
        this.stop();
        alarmCollection = [];
        
    }
}