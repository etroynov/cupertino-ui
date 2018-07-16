import * as React from 'react';
import './App.css'
const style={
  marginRight: 20,
  display: 'inline-block'
}
export default () =>{
    return (
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <div className='dropdown-container' style={{ marginTop: 20, display: "inline-block"}}>
            <button className="btn btn-default btn-dropdown">Dropdown</button>
            <div className='dropdown'>
                <ul className='dropdown-ul'>
                    <li className='active'><a href="">Active</a></li>
                    <li><a href="">Item</a></li>
                    <li className='dropdown-title'>Header</li>
                    <li><a href="">Item</a></li>
                    <li><a href="">Item</a></li>
                    <li className='divider'></li>
                    <li><a href="">Item</a></li>
                </ul>
            </div>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20}}>
          <a className='btn btn-default' href='' style={style}>Link</a>
          <button className='btn btn-default' style={style}>Default</button>
          <button disabled className='btn btn-default' style={style}>Default disabled</button>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20}}>
          <button className='btn btn-default' style={style}>Default</button>
          <button className='btn btn-primary' style={style}>Primary</button>
          <button className='btn btn-secondary' style={style}>Secondary</button>
          <button className='btn btn-danger' style={style}>Danger</button>
          <button className='btn btn-link' style={style}>Link</button>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20}}>
          <button className='btn btn-default btn-small' style={style}>Default</button>
          <button className='btn btn-primary btn-small' style={style}>Primary</button>
          <button className='btn btn-secondary btn-small' style={style}>Secondary</button>
          <button className='btn btn-danger btn-small' style={style}>Danger</button>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20}}>
          <button className='btn btn-default btn-large' style={style}>Default</button>
          <button className='btn btn-primary btn-large' style={style}>Primary</button>
          <button className='btn btn-secondary btn-large' style={style}>Secondary</button>
          <button className='btn btn-danger btn-large' style={style}>Danger</button>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20}}>
          <button className='btn btn-default btn-full' style={style}>Default</button>
          <button className='btn btn-primary btn-full' style={style}>Primary</button>
          <button className='btn btn-secondary btn-full' style={style}>Secondary</button>
          <button className='btn btn-danger btn-full' style={style}>Danger</button>
        </div>
        <div>
          <div className='btn-group'>
            <button className='btn btn-default'>Default</button>
            <button className='btn btn-primary'>Primary</button>
            <button className='btn btn-secondary'>Secondary</button>
            <button className='btn btn-danger'>Danger</button>
          </div>
        </div>
        <div>
          <div className='btn-group'>
            <button className='btn btn-default'>Default</button>
            <button className='btn btn-primary'>Primary</button>
            <button className='btn btn-secondary'>Secondary</button>
            <button className='btn btn-danger'>Danger</button>
          </div>
        </div>
        <div>
          <div className='btn-group'>
            <button className='btn btn-default'>Default</button>
            <button className='btn btn-primary'>Primary</button>
            <button className='btn btn-secondary'>Secondary</button>
            <button className='btn btn-danger'>Danger</button>
          </div>
        </div>
        
      </div>
    );
  }

