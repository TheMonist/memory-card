import { useState, useEffect } from "react";
import Card from "./Card";
// import scss files

const shuffle = (array) => {
    let clone = structuredClone(array)
    // console.log(arr)
    // console.log(clone)
    let shuffled = []
    let num = array.length
    while (num) {
        let randomNum = Math.floor(Math.random() * num)
        shuffled.push(clone[randomNum])
        clone.splice(randomNum, 1)
        num--
    }
    return shuffled
}

const CardList = ({ increaseScore, setScore }) => {
    // const requestApi => API Request
    const [imgList, setImgList] = useState([])
    const [mem, setMem] = useState([])

    const handleClick = (e) => {
        const id = e.target.id
        if() {

        } else {

        }
    }

    return (
        <div id="card-grid">
            {imgList.map((card) => (
                <Card />
            ))}
        </div>
    )
}

export default CardList