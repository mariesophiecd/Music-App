import React, {createContext, useState} from 'react';

export const ChartsContext = createContext();

export const ChartsProvider = (props) => {
    const [charts, setCharts] = useState();

    return(
        <ChartsContext.Provider value={[charts, setCharts]}>
            {props.children}
        </ChartsContext.Provider>
    )
}
