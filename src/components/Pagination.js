import React from "react";
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi'

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick}><div><HiArrowSmLeft/></div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div><HiArrowSmRight/></div></button>
        </div>
    )
}

export default Pagination;