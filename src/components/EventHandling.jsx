export const EventHandling = () => {

    function handleButtonClick() {
        alert("Hello Thanks for click ")
    }

    function handleButtonArgClick(value) {
        alert(`Hello Thanks for click ${value}`)
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click On </button>

            <h1>Inline Function call</h1>

            <button onClick={() => alert("Hello Im Use inline ")}>Click On </button>

            <h1> Function use as a argument call</h1>

            <button onClick={() => handleButtonArgClick("Tushar")}>Click On </button>
        </>
    )
}