import React, { useState } from 'react'

export default () => {
  const [yourproblem, setProblem] = useState('')
  const [adress, setAdress] = useState('')
  const [willhelp, setWilhlp] = useState('')
  const [occupation, setOccupation] = useState('')
  const [lookinghelp, setLookinghelp] = useState('')



  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label>Describe your problem</label>
          <input
            className='u-full-width'
            placeholder='Name'
            type='text'
            onChange={e => setProblem(e.target.value)}
            value={yourproblem}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>What kind of help you are looking for?</label>
          <input
            className='u-full-width'
            placeholder='Address'
            type="text"
            onChange={e => setLookinghelp(e.target.value)}
            value={lookinghelp}
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Address</label>
          <input
            className='u-full-width required'
            type='text'
            onChange={e => setAdress(e.target.value)}
            value={adress}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Occupation</label>
          <input
            className='u-full-width required'
            type='text'
            onChange={e => setOccupation(e.target.value)}
            value={occupation}
            autoFocus
          />
        </div>
      </div>

      <div className='row'>
        <div className='six columns'>
          <label>Are you willing to join any Organisation?</label>
          <select
          
          className='u-full-width required'
          placeholder='no choice'
          onChange={e => setWilhlp(e.target.value)}
          value={willhelp}
          autoFocus>
            <option value="opel">YES</option>
            <option value="audi">NO</option>
          </select>
        </div>
      </div>
    </div>
  )
}
