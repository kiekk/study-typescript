import { CarInfo } from "./car-info.module";

CarInfo.Hello()

let car = new CarInfo.car('My Car')
console.log(car.name)

let engine = new CarInfo.engine("My Engine")
console.log(engine.name)

/*
    실행 결과
    Hello
    My Car
    My Engine
*/