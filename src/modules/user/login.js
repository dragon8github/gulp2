const React =require('react');
const ReactDOM = require('react-dom');
import { Router, Route, hashHistory } from 'react-router';


let TeacherForm = React.createClass({
	render()
	{
		return <form id='TeacherForm'>
			        <h2>教师登录</h2>
			         <div className='control-group input-append'>
			                <input type='text' name='nickname' id='nickname' data-required='true' />

			                <label for='nickname' className='add-on'><span className='icon-asterisk'></span> Nickname</label>
			            </div>

			            <div className='control-group input-append'>
			                <input type='text' name='site' id='site' />

			                <label for='site' className='add-on'>Site</label>
			            </div>

			            <div className='control-group input-append'>
			                <input type='text' name='age' id='age' data-required data-pattern='^[0-9]+$' />

			                <label for='age' className='add-on'><span className='icon-asterisk'></span> Age</label>
			            </div>

			            <div className='btn-group'>
			                <button type='submit' className='btn btn-primary'>Send</button>

			                <button type='reset' className='btn'>Reset</button>
			            </div>
			    </form>
	}
})

let StudentForm = React.createClass({
    render:function()
    {
        return  <form id='StudentForm'>
			        <h2>学生登录</h2>
			         <div className='control-group input-append'>
			                <input type='text' name='nickname' id='nickname' data-required='true' />

			                <label for='nickname' className='add-on'><span className='icon-asterisk'></span> Nickname</label>
			            </div>

			            <div className='control-group input-append'>
			                <input type='text' name='site' id='site' />

			                <label for='site' className='add-on'>Site</label>
			            </div>

			            <div className='control-group input-append'>
			                <input type='text' name='age' id='age' data-required data-pattern='^[0-9]+$' />

			                <label for='age' className='add-on'><span className='icon-asterisk'></span> Age</label>
			            </div>

			            <div className='btn-group'>
			                <button type='submit' className='btn btn-primary'>Send</button>

			                <button type='reset' className='btn'>Reset</button>
			            </div>
			    </form>
    }
})


ReactDOM.render((
  <Router history={hashHistory}>
  	<Route path="/" component={StudentForm}/>
    <Route path="t" component={TeacherForm}/>
    <Route path="s" component={StudentForm}/>
  </Router>
), document.getElementById('form'));

