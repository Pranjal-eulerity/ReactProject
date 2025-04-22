import React from 'react'

import { StyleDisplay, StyleCanvasWrapper } from './style.display'
import Button from '../../../Button'



const Display = ({canvasRefernence}) => {

  return (
      <StyleDisplay className='section display'>
        <StyleCanvasWrapper>
          <div className='canvas-wrapper'>
          <canvas className="lower-canvas" ref={canvasRefernence} width='500px' height='500px'></canvas>
          {/* <canvas className="uppcanvas"></canvas> */}
          </div>
          <Button>Yo</Button>
        </StyleCanvasWrapper>
    </StyleDisplay>
  )
}



export default Display