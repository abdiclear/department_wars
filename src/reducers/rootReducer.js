import {combineReducers} from 'redux';
import HR from './HR';
import Sales from './Sales';
import Admin from './Admin';
import RD from './RD';
import IT from './IT';

const rootReduce = combineReducers({
    hr: HR,
    sales: Sales,
    rd: RD,
    admin: Admin,
    it: IT
})

export default rootReduce;