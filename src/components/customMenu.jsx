import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";

const CustomMenu = (props) => {
  const { data, onClick = () => {} } = props;
  return (
    <>
      <Breadcrumb>
        {data.map((item, index) => {
          return (
            <Breadcrumb.Item key={`menu-${index}`}>
              <NavLink
                onClick={() => {
                  if (item.canDoOnClick) {
                    onClick();
                  }
                }}
                to={item.path}
              >
                {item.name}
              </NavLink>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </>
  );
};

CustomMenu.propTypes = {
  data: PropTypes.array,
};

export default CustomMenu;
