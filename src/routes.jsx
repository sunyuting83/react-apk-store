import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import Index from './components/Index/index';
import Apk from './components/Apk/item';
import Search from './components/Search/index';
import Classify from './components/Classify/index';
import ListData from './components/public/listData';
import Soft from './components/PublicIndex/soft';
import Game from './components/PublicIndex/game';


const App = () => (

    <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/item/:id' component={Apk} />
        <Route path='/search' component={Search} />
        <Route exact path='/classify' component={Classify} />
        <Route path='/list/:id' component={ListData} />
        <Route exact path='/soft' component={Soft} />
        <Route exact path='/game' component={Game} />
    </Switch>
)
export default App;