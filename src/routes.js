import React from 'react'

import Home from './components/Home/Home'
import About from './components/About/About'
import Classlist from './components/ClassList/ClassList'
import Student from './components/Student/Student'

import {Switch, Route} from 'react-router-dom'

export default(
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/classlist/:class" component={Classlist}/>
        <Route path="/student/:id" component={Student} />
    </Switch>
)