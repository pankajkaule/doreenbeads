import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import '../styles/filterpanel1.css'

const FilterPanel1 = () => {
    return (
        <nav >
            <div className="title">PRODUCT CATEGORIES</div>
            <ul className="menus" > {
                menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                })
            }
            </ul>
        </nav>
    );
};

export default FilterPanel1;