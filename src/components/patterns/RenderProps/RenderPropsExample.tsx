// Render Props pattern is way of making components very reusable.
// Render Prop is a prop on a component, which value is a function that returns a JSX element.
// The component itself does not render anything besides the render prop.
// Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

// In some cases, we can replace render props with hooks.

const Title = (props: any) => props.render();

const RenderPropExample = () => {
    // we are using render props
    return <Title render={()=> <h1>HEllo Using render Props!</h1>} />
}

export default RenderPropExample;