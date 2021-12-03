import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import Button from '../Button';
import Bars from '../../assets/icons/svg/bars-regular.svg';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
  title?: string;
  className?: string;
  Icon?: React.ReactNode | null;
  theme?: string;
  open?: boolean;
  expand?: boolean;
  variant?: string;
  position?: string;
}

Navbar.defaultProps = {
  className: '',
  title: '',
  Icon: <Icon Component={Bars} />,
  theme: 'light',
  open: false,
  expand: true,
  variant: 'light',
  position: '',
};

function Navbar(props: PropsTypes) {
  const { title, Icon, className, children, theme, open, expand, variant, position } = props;
  const activeListMap: { [key: string]: boolean } = {};
  const disabledListMap: { [key: string]: boolean } = {};
  const [activeStateMap, setActiveStateMap] = useState(activeListMap);
  const [disabledStateMap, setDisabledStateMap] = useState(disabledListMap);
  const [isOpen, setOpenState] = useState(open);
  const navbarCollapseRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const navbarNavRef = useRef<HTMLDivElement>(null);
  const navbarClasses: string[] = ['navbar'];

  if (className) navbarClasses.push(className);
  if (theme) navbarClasses.push(`navbar-${theme}`);
  if (variant) navbarClasses.push(`bg-${variant}`);
  if (position) navbarClasses.push(position);

  if (!Object.keys(activeStateMap).length) {
    React.Children.forEach(children, (child) => {
      const { active, disabled } = child.props;
      const { key } = child;
      if (key) {
        activeStateMap[key] = active;
        disabledStateMap[key] = disabled;
      }
    });
  }

  function clickHandler(key: string) {
    return () => {
      if (!disabledStateMap[key]) {
        for (const id in activeStateMap) {
          activeStateMap[id] = false;
        }
        activeStateMap[key] = true;

        setActiveStateMap(() => ({
          ...activeStateMap,
        }));
      }
      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));
    };
  }

  function transitionEndHandler() {
    const navbarCollapseDom = navbarCollapseRef.current;
    if (navbarCollapseDom && navbarCollapseDom.classList.contains('transitioning')) {
      if (!isOpen) {
        navbarCollapseDom.classList.remove('transitioning');
        navbarCollapseDom.classList.add('collapse', 'show');
        setOpenState(true);
      } else {
        navbarCollapseDom.classList.remove('transitioning');
        navbarCollapseDom.classList.add('collapse');
        navbarCollapseDom.style.display = 'none';
        setOpenState(false);
      }
      navbarCollapseDom.style.removeProperty('height');
    }
  }

  function show() {
    const navbarCollapseDom = navbarCollapseRef.current;
    const navbarNavDom = navbarNavRef.current;
    if (navbarCollapseDom && navbarNavDom) {
      requestAnimationFrame(() => {
        navbarCollapseDom.style.display = 'block';
        navbarCollapseDom.style.height = `0px`;
        setTimeout(() => {
          navbarCollapseDom.style.height = `${navbarNavDom.clientHeight}px`;
        }, 0);
        navbarCollapseDom.classList.remove('collapse');
        navbarCollapseDom.classList.add('transitioning');
      });
    }
  }

  function hide() {
    const navbarCollapseDom = navbarCollapseRef.current;
    const navbarNavDom = navbarNavRef.current;
    if (navbarCollapseDom && navbarNavDom) {
      navbarCollapseDom.style.display = 'block';
      navbarCollapseDom.style.height = `${navbarNavDom.clientHeight}px`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          navbarCollapseDom.style.height = `0px`;
        }, 0);
        navbarCollapseDom.classList.remove('collapse', 'show');
        navbarCollapseDom.classList.add('transitioning');
      });
    }
  }

  const NavItemList = React.Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return React.cloneElement(child, {
        active: activeStateMap[key],
        disabled: disabledStateMap[key],
        onClick: !disabledStateMap[key] ? clickHandler(String(key)) : null,
      });
    }
  });

  return (
    <nav className={navbarClasses.join(' ')}>
      <div className="container-fluid">
        <div className="navbar-brand">{title}</div>
        <Button
          className="navbar-toggler"
          variant="link"
          PrefixIcon={Icon}
          onClick={isOpen ? hide : show}
          buttonRef={toggleButtonRef}
        />
        <div
          className="navbar-collapse collapse"
          onTransitionEnd={transitionEndHandler}
          ref={navbarCollapseRef}
        >
          <div className="navbar-nav me-auto mb-2 mb-lg-0" ref={navbarNavRef}>
            {NavItemList}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
