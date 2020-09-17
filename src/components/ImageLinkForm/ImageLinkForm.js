import React from 'react';
import './ImageLinkForm.css';

const ImageFormLink = (props) => {
    return (
        <div className="f3">
            <p>{'Hey there. This Brain will detect faces in images you provide it. Give it a try.'}</p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input onChange={props.onInputChange} className='f4 pa2 w-70 center' type="tex"></input>
                    <button onClick={props.onClickDetectButton} className='w-30 grow f4 pa2 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default ImageFormLink;