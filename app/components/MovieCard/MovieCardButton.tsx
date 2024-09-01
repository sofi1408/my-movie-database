"use client";

const MovieCardButton = () => {
  return (
      <button 
     style={{marginTop: '10px', padding: '10px', background: 'black', color: 'white'}}
     onClick={() => console.log('button clicked...')}>Get Details</button>
  )
}

export default MovieCardButton
