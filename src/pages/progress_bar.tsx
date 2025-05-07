import React, { useState } from "react";
import './progress_bar.css'

function ProgressBar(){
    const [progress, setProgress] = useState<number>(0);
    return(
        <div style={{ display: 'flex', justifyContent: 'center'}} data-testid="progressBar">
            <div style={{ textAlign: 'center' }}>
                <div style={{ width: '700px', border: '2px solid', borderRadius: '30px', marginBottom: '2%', marginTop: '4%'}}>
                    <div style={{ height: '20px', backgroundImage: "linear-gradient(rgb(40, 130, 213), rgb(73, 70, 173))", width: `${progress}%`, transition: "width 0.3s ease-in-out", borderRadius: '30px'}}><p style={{color: "whitesmoke"}}>{progress}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProgressBar