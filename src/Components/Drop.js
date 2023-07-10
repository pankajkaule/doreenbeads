import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import "../styles/drop.css";
const Drop = () => {
  return (
    <div id="menu">
      <div className="title">PRODUCT CATEGORIES</div>
      <div className="borderstyle">
        <ul>
          {" "}
          {menuItems.map((menu, index) => {
            // console.log(menu.submenu[0].title);
            return (
              <>
                <li>
                  <a href="#">{menu.title}</a>
                  {/* <ul>
                                    <li>{menu.submenu[1].title}</li>
                                </ul> */}

                  <ul>
                    {menu.submenu.map((element) => {
                      // console.log(element);
                      return (
                        <li>
                          <a href="#">{element.title}</a>
                          <ul>
                            {element.deepmenu.map((ele) => {
                              return (
                                <li>
                                  <a href="#">{ele.title}</a>
                                  <ul>
                                    {ele.deepsubmenu?.map(
                                      (elevent) => (
                                        <li>
                                          <a href="#">
                                            {elevent.title ? elevent.title : ""}
                                          </a>{" "}
                                        </li>
                                      )

                                      // console.log(elevent,"kkk");
                                      // return (<li><a href="#">{elevent.title}</a> </li>)
                                    )}
                                  </ul>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Drop;
