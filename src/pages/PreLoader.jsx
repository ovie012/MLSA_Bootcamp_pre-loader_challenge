import React, { useState, useEffect } from 'react'

function PreLoader({ fadeAway }) {
    const [statement, setStatement] = useState(0);
    const [fade, setFade] = useState(true);

    const preloaderStatements = [
        'Legend Preloader Presentation',
        'Legend Preloader Presentation',
        'Legend Preloader Presentation',
        'Legend Preloader Presentation',
        'Legend.dev presentss',
        '🤣This is just a test',
        "yes, i'm also an Arsenal Fan",
        'anyways, 80%',
        '100%',
    ];
    
    useEffect(() => {
        const declare = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setStatement(prevIndex => (prevIndex + 1) % preloaderStatements.length)
                setFade(true)
            }, 500);
        }, 1500);

        return () => clearInterval(declare);
    }, [preloaderStatements.length])


  return (
    <>
        <div className={`preloader ${fadeAway ? 'fade-away' : ''}`}>
            <h3>MLSA</h3>
            <h3>Bootcamp</h3>
            <p className={fade ? 'fade-in' : 'fade-out'}>{preloaderStatements[statement]}</p>
            <div className='loading'>
                <span></span>
            </div>
        </div>
    </>
  )
}

export default PreLoader;