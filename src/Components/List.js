import React from 'react'
import ListItem from './ListItem'
import '../styles/list.css'
// import '../styles/about.css'
const List = ({ list }) => {
    return (
        <div className='list-wrap'>
            {list.map((item) => <ListItem key={item.id} item={item} />)}
        </div>
    )
}

export default List;
