"use client"
import { useBoardStore } from '@/store/BoardStore'
import { useEffect, useState } from 'react'
import {DragDropContext, Droppable } from "react-beautiful-dnd"


const Board = () => {
    const getBoard = useBoardStore((state)=> state.getBoard)
    useEffect(() => {
      getBoard()
    },[getBoard])
    return (
      <h1>Hello</h1>
    // <DragDropContext>
    //     <Droppable direction="horizontal" type="column" droppableId='board'>
    //       {(provided)=>(
    //         <div>
                
    //         </div>
    //       )}
    //     </Droppable>
    // </DragDropContext>
  )
}

export default Board