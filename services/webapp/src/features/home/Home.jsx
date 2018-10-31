import React from 'react'

const data = () => {
    const array = []
    for (let i = 0; i < 100; i++) {
        array.push(i)
    }

    return array
}

const Home = (props) => {
    return (
        <div>{data().map(item => (<p key={item}>{item}</p>))}</div>
    )
}

export default Home
