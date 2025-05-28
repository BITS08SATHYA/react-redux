import {useSelector} from "react-redux";

const Display = () => {
    const count = useSelector((state) => state.count);
    return (
        <div>
            <h2>Current count from Display: {count}</h2>
        </div>
    )
}

export default Display;