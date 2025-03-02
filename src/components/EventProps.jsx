export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Hello ${user}`)
    }

    const handleHover = () => {
        alert(`Thanks hovering me`)
    }

    return (
        <>
            <WelcomeUser
                onClick={() => HandleWelcomeUser('Tushar')}
                onMouseEnter={handleHover}
            />
        </>
    )
}


const WelcomeUser = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log("Hey User, Welcome");
        onClick();
    }

    return (
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}