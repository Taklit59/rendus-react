import React, {createContext, useState} from "react";
export const monContexte = createContext();

export default function MenuContext(props) {
    let menuOption = ["ENTREE", "PLAT", "DESSERT"];
    
    const [choiceMenu, setChoiceMenu] = useState(menuOption);

    const modifyButton = (newMenu) => {
        setChoiceMenu(newMenu)
    }
    
    return (
        <monContexte.Provider value={{choiceMenu, modifyButton}}>
            {props.children}
        </monContexte.Provider>
    )
}