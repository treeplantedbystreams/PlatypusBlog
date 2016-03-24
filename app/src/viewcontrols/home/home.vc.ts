import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        name: ""
    };
    greet():void{
        
       this.navigator.navigate('greeting-vc',{
           parameters: {
               nameToGreet: this.context.name
           }
       });
    }
}

register.viewControl('home-vc', HomeViewControl);
