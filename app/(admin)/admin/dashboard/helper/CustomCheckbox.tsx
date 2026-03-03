import { FaCheck } from "react-icons/fa";

function CustomCheckbox() {
    return (
        <label className="flex items-center justify-center cursor-pointer select-none">
            <input
                type="checkbox"
                className="peer hidden"
            />

            <div
                className="
          w-4 h-4
          border border-gray-200
          rounded
          flex items-center justify-center
          peer-checked:bg-primary
          peer-checked:border-primary
        "
            >
                <FaCheck className="text-white text-[10px]" />
            </div>
        </label>
    );
}

export default CustomCheckbox;