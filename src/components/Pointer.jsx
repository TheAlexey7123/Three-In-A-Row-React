import { useEffect, useState } from "react";

export default function Pointer({x, y, enabled, setEnabled}) {

    const [position, setPosition] = useState({x: 0, y: 0});

    const handleClick = () => {
        setEnabled(!enabled);
    }

    useEffect(() => {

        const handleMouseMove = (event) => {
            const {x,y} = event;
            setPosition({x, y});
        }

        if(enabled){
            window.addEventListener('pointermove', handleMouseMove);
        }

        return() => {
            window.removeEventListener('pointermove', handleMouseMove);
            setPosition({x: 0, y: 0});
        }
    }, [enabled]);

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid #fff',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -25,
                top: -25,
                width: 50,
                height: 50,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
            />
            <button onClick={handleClick}>
                {enabled ? 'Desactivar' : 'Activar'} seguimiento puntero
            </button>
        </>
    )
}