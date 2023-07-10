import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/filterpanel1.css'

import Dropdown from "./DropDown";
const MenuItems = ({ items, depthLevel }) => {

    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.outerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.outerWidth > 960 && setDropdown(false);
    };

    return (
        <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {
                items.submenu ? (
                    <>
                        <div className="support">
                            <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                                <span className="itemstitle"><Link to='/product'>{items.title}</Link></span>  {" "}
                            </button> </div>
                        <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                    </>
                ) : (
                    <a href="/#" >{items.title}</a>
                )
            } </li>
    );
};

export default MenuItems;

