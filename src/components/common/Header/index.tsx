import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <button
            onClick={handleClick}
            className="bg-[url('/src/assets/leftArrow.svg')] bg-no-repeat bg-center w-[10px] h-[20px]"
        ></button>
    );
};
