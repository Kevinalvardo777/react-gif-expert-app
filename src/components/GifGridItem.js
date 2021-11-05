import React from 'react'

export const GifGridItem = ({title, url, id}) => {

    // console.log({imagg: img});
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
