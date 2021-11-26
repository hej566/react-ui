import React, { useContext } from 'react';
import MenuContext from '../MenuContext';

const MenuItem = React.forwardRef<HTMLDivElement, PropsTypes>((props: PropsTypes, ref) => {
  const { className, children, prefix, menuId, indent } = props;
  const menuItemIndent = Number(indent) * menuId.split('-').length;
  const ctx = useContext(MenuContext);
  const menuItemClasses: string[] = ['menu-item'];
  const isActive = ctx.activeStateMap[menuId];

  if (isActive) menuItemClasses.push('active');
  if (className) menuItemClasses.push(className);

  return (
    <div className={menuItemClasses.join(' ')} ref={ref} onMouseDown={ctx.onClick(menuId, 'leaf')}>
      <div
        className="menu-item__inner"
        style={{ paddingLeft: `${menuItemIndent}px`, paddingRight: `${indent}px` }}
      >
        <div className="menu-item__wrapper">
          <div className="menu-item__prefix">{prefix}</div>
          <div className="menu-item__content">{children}</div>
        </div>
      </div>
    </div>
  );
});

type PropsTypes = {
  children: any;
  className?: string;
  onClick?: any;
  prefix?: any;
  menuId: string;
  indent?: string;
  active?: boolean;
  disabled?: boolean;
  ref?: any;
  type?: string;
};

MenuItem.defaultProps = {
  className: '',
  prefix: null,
  indent: '16',
  onClick: () => {},
  active: false,
  disabled: false,
  ref: null,
  type: 'leaf',
};

export default MenuItem;
