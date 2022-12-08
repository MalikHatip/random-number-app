import React from 'react'

function Inputs({minVal,maxVal,setMaxVal,setMinVal}) {


  return (
    <div className='inputs'>
        <div>
            <label>Min value</label>
            <input className='minValue'
             type="number"
             value={minVal}
             onChange={(e)=>setMinVal(+e.target.value)}

             />
        </div>
        <div>
        <label>Max value</label>
            <input className='maxValue'
             type="number"
             value={maxVal}
             onChange={(e)=>setMaxVal(+e.target.value)}

             />
        </div>
    </div>
  )
}

export default Inputs