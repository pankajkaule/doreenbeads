import MenuItems from "./MenuItems";
import '../styles/filterpanel1.css'

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 2 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}> {
            submenus.map((submenu, index) => (<MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
            ))
        } </ul>
    );
};

export default Dropdown;