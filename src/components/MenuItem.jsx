import React from 'react';
import styled from 'styled-components';

const MenuItemStyles = styled.button``;

export default function MenuItem(props) {
  const { subpath, path, pathLabel, title, changePath, sub } = props;
  return (
    <MenuItemStyles
      type="button"
      className={`menu__list__item ${subpath === path ? 'active__item' : undefined}`}
      onClick={() => changePath(path, sub, pathLabel)}
    >
      {title}
    </MenuItemStyles>
  );
}
