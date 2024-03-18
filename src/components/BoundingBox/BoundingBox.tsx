import React, { ReactElement, ReactPortal } from 'react'
import './BoundingBox.css'
type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

type Props = {
  children: React.ReactNode | React.ReactNode[] | ReactElement | ReactElement[]
}

function BoundingBox({children}: Props) {
  return (
    <div className='bounding-box'>
      {children}
    </div>
  )
}

export default BoundingBox
