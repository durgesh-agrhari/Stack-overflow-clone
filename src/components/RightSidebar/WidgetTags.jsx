import React from 'react'

const WidgetTags = () => {

    const tags = ['C','DBMS', ' Beast CSS ', 'Best sHTML', 'Javascript', 'Reactjs', 'OS', 'CN', 'mongodb', 'Wordpress', 'C', 'CSS','Java', 'Network' ]


  return (
    <div className='widget-tags'>
        <h3>Watched tages</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tag) => (
                    <p key={tag}> {tag} </p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags