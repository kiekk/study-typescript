type EventType = 'keyup' | 'mouseover'

const myEvent: EventType = 'keyup'
console.log(typeof myEvent, myEvent)

function on(event: EventType, callback: (message: string) => any) {
    console.log(typeof event, event)
    callback("callback")
}

on(myEvent, (message) => console.log(message))

/*
    실행 결과
    string keyup
    string keyup
    callback
*/