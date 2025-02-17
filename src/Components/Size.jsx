import React from 'react'
import ScreenSize from './ScreenSize'
import ScreenHeight from './ScreenHeight';
import './Size.css'
function Size() {
    const width = ScreenSize();
    const height = ScreenHeight();
    
    return (
        <div className="size-container">
            <h3>Screen Size Tracker</h3>
            <p className="size-text">Screen Width: {width}px</p>
            <p className="size-text">Screen Height: {height}px</p>
        </div>
    );
}

export default Size