import React from 'react'
import {useParams} from 'react-router-dom'

const Product = ({shoes}) => {
    const {id} = useParams()
    const shoe = shoes[id]
    if(!shoes) {
        return <h3>Shoe Not Found</h3>
    }
    const {name, img} = shoe
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} alt=""/>
        </div>
    )
}

export default Product
