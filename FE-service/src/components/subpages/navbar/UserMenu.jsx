import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";

const UserMenu = ({ options, show }) => {
  const { isLoggedIn } = useContext(LoginContext);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      {show && (
        <div className="sub-menu">
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flec-row items-center">
              {options?.map((item) => (
                <>
                  {!item?.loggedIn ? (
                    <div key={item.name}>
                      <item.icon />
                      {item}
                    </div>
                  ) : (
                    isLoggedIn && (
                      <div key={item.name}>
                        <item.icon />
                        {item}
                      </div>
                    )
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
