import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import GreetingViewControl from '../viewcontrols/greeting/greeting.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: "greet/:nameToGreet", view: GreetingViewControl}
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
