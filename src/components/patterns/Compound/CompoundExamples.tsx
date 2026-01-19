/**
 * We often have components that belong to each other.
 * They are dependent on each other through the shared state, and share logic together.
 * Ex. Dropdown Components, MenuItems, select etc
 *
 * The compound component pattern allow you to create components that all work together to perform a task.
 */

import React, { createContext, useContext, useState } from "react";

const FlyingOutContext = createContext<any | null>(null);

const Toggle = () => {
  const { open, toggle } = useContext(FlyingOutContext);

  return (
    <div
      onClick={() => {
        toggle(!open);
      }}
    >
      <p>ICONS VIEW!</p>
    </div>
  );
};

const List = (props: any) => {
  const { open } = useContext(FlyingOutContext);
  return !!open && <ul>{props.children}</ul>;
};

const Item = (props: any) => {
  return <li>{props.children}</li>;
};

export const Flyout = (props: any) => {
  const [open, toggle] = useState<boolean>(false);

  return (
    <FlyingOutContext.Provider value={{ open, toggle }}>
      {props.children}
    </FlyingOutContext.Provider>
  );
};

// we can also implement the Compound Component pattern by mapping over the children of the component.
// we can add the open and toggle properties to these elements, by cloning them with the additional props.

export const FlyoutMap = (props: any) => {
  const [open, toggle] = useState<boolean>(false);

  return (
    <div>
      {/* React.Children.map will iterate, it's childrens and also add extra props */}
      {/* this is not a good idea. due to, if we wraping it in another component. it will break. */}
      {React.Children.map(props.children, (child: any) => {
        {/* All children components are cloned, and passed the value of open and toggle. */}
        {/* we now have access to these two values through props. */}
        React.cloneElement(child, { open, toggle });
      })}
    </div>
  );
};

Flyout.Toggle = Toggle;
Flyout.List = List;
Flyout.Item = Item;
