import React, { useEffect, useRef, useState, type JSXElementConstructor, type ReactElement, type ReactNode, type RefObject } from "react";

const Button = (props: any) => <button {...props}>Click Me!</button>;
const Text = (props: any) => <p {...props}>Hello World!</p>;

const DogImages = (props: any) => {
  const { data } = props;

  return (
    data?.message?.length &&
    data?.message?.map((elem: any) => <img src={elem} alt="dog" />)
  );
};

export const withStyles = (Component: JSXElementConstructor<ReactNode>) => {
  return (props: any) => {
    const style = { padding: "0.2rem", margin: "2rem" };
    return <Component {...props} style={style} />;
  };
};

const withLoader = (Component: any, url: string) => {
  return (props: any) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      };
      fetchData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Component {...props} data={data} />;
  };
};

export const StyledButton = withStyles(Button);
export const StyledText = withStyles(Text);
export const DogImagesWithLoader = withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);

// create custom hooks
const useHover = (): [RefObject<HTMLDivElement | null>, boolean] => {
  const [hovering, setHovering] = useState(false);
  const elemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseOver = () => setHovering(true);
  const handleMouseOut = () => setHovering(false);

  useEffect(() => {
    const node = elemRef?.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      node?.removeEventListener("mouseover", handleMouseOver);
      node?.removeEventListener("mouseout", handleMouseOut);
    };
  }, [elemRef?.current]);

  return [elemRef, hovering];
};

const DogImageWithHover = (props: any) => {
  const { data } = props;
  const [elemRef, hovering] = useHover();

  return (
    <>
      {hovering && <div>Hovering</div>}
      <div ref={elemRef}>
        {data?.message?.length &&
          data?.message?.map((elem: any) => <img src={elem} alt="dog" />)}
      </div>
    </>
  );
};

export const DogImageWithHoverAndLoader = withLoader(
  DogImageWithHover,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
