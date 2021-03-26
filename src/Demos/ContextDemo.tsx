import React from 'react';

export const ThemeContext = React.createContext('light');
export const LanguageContext = React.createContext('english');


export function GlobalProviders(children: any) {
    return (
        <ThemeContext.Provider value="dark">
            <LanguageContext.Provider value="en">
                {children}
            </LanguageContext.Provider>
        </ThemeContext.Provider>
    )
}