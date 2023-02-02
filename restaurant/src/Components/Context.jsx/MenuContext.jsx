import React, {createContext, useState} from "react";
export const monContexte = createContext();

export default function LangueContext(props) {
    let menuOption = ["ENTREE", "PLAT", "DESSERT"];
    if (menuOption === 1) {
        menuOption = "PLAT"
    }
    const [choiceMenu, setChoiceMenu] = useState(menuOption);
    const modifyMenu = (newMenu) => {
        setChoiceMenu(newMenu)
    }
    return (
        <monContexte.Provider value={{choiceMenu, modifyMenu}}>
            {props.children}
        </monContexte.Provider>
    )
}