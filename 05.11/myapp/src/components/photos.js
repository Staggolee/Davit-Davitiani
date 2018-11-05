import React from 'react'

const Photos = (props) => {
    return (
        <div>
            {
                props.data.map(photo => (
                    <div key = {photo.id}>
                        <h2>Photo Title {photo.title}</h2>
                    </div>
                ))
            }
        </div>

    )
}

export default Photos 