import React, { useState } from 'react'

const Waves = () => {
    const [waves, setWaves] = useState(0)
    const label = `Hey!!`
    const numberOfWaves = `${waves} ${waves === 1 ? 'wave': 'waves'}`

    return(
        <div>
            <button onClick={() => {setWaves(waves+1)}}>{label}</button>
            <div>{numberOfWaves}</div>
        </div>
    )
}

export default Waves