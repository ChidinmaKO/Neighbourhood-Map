import React from 'react'

class Header extends React.Component {


    render(){
        return (
            <header tabIndex='0'>
                <nav className='hamburger-icon'>
                    <button tabIndex='0' className='key-icon' onClick={this.props.openNav} role='button' aria-label='navigation button'></button>
                </nav>
                <div className='head-right-container'>
                    
                    <div className='head-text'>
                        <h2>Victoria Island, Lagos-Nigeria.</h2>
                    </div>
                </div>
            </header>
        )
    }
}


export default Header