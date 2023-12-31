'use client'
import ClientOnly from './ClientOnly';
import s from './app.module.scss';
import { useState, useEffect } from 'react';
import Scene from '../components/Scene/Scene';
import BottomBar from '../components/BottomBar/BottomBar';

const Wrapper = ({ token } : { token: string; }) => {

    const [ play, _play ] = useState( false );

    const [ parsed, setParsed ] = useState<Array<JSX.Element>>([ ]);        
    const [ darkMode, set_theme ] = useState( false );
    const click = ( ) => _play( !play );

    //Get songs again and put them here
    const [ songs, setSong ] = useState([ ]);


    useEffect(( ) => {
        set_theme(  window.matchMedia('(prefers-color-scheme: dark)').matches );
        const themeWatcher = window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => set_theme( e.matches ));
        console.warn("Should remove this ^");
    }, [ ]);


    return <div id={ s.Main }>

        <ClientOnly>
            <Scene play={ play } darkMode={ darkMode }/>
        </ClientOnly>


        <div id={ s.TopArea }>
            <div>Welcome</div> 
            <div id={ s.RefreshBtnHolster }>
                <div id={ s.RefreshBtn } onClick={( ) => window.location.reload( )}/>
            </div>
        </div>
        <BottomBar onPlayBtn={ click }/>
    </div>;
};

export default Wrapper;