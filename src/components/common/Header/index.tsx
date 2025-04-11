import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div className="flex border items-center p-4">
            <button
                onClick={handleClick}
                className="bg-[url('/src/assets/leftArrow.svg')] bg-no-repeat bg-center w-[10px] h-[20px]"
            ></button>
        </div>
    );
};
