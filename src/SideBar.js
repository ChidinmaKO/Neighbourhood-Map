import React from 'react'

class SideBar extends React.Component {


    render (){
        
       

        return (
            <aside id='aside' tabIndex='0'>
                <nav>
                    <nav className='close'>
                        <button role='button' aria-label='close list filter' className="closebtn" onClick={this.props.closeNav}>&times;</button>
                    </nav>
                    <div className='filter-section'>
                    
                        <input
                            type='text'
                            placeholder='Search'
                            role="textbox" 
                            aria-label = "Enter the place name"
                            onChange={(event) => this.props.searchQuery(event.target.value)}
                            />
                    
                    </div>
                    <div className='list'>
                        <ul className='list-links' role='list'>
                        
                        {this.props.showingVenueName.map(v =>
                            <li
                            key={v.id}
                            tabIndex='0'><a onClick={() => this.props.onToggleOpen(v.id)} >{v.name}</a></li>
                        )}

                        </ul>
                    </div>
                </nav>
            </aside>
        )
    }
}

export default SideBar