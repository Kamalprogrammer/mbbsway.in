import { PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid"
export default function Button({ text, type, handleClick }) {
    return (
        <button
            onClick={handleClick}
            type={type}
            className="borderButtonClass">

            <span className="borderSpanClass">
                {text}
            </span>
        </button>

    )
}

