import { useState } from "react";

export default function FormInput({ name: n, type, validate }) {
  const [error, setError] = useState("");
  const name = n.toLowerCase();

  const handleValidate = e => {
    const { value } = e.target;
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    if (!(value && validate.required)) {
      setError("This field is required.")
    } else if (value.length < validate.min) {
      setError(`characters should be at least ${validate.min}`);
    } else if (value.length > validate.max) {
      setError(`characters should be at most ${validate.max}`);
    } else if (validate.type_email && !value.match(regex)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  }

  const fieldOptions = isTextArea => ({
    name: name,
    required: validate.required,
    minLength: validate.min+1,
    maxLength: validate.max-1,
    onBlur: handleValidate,
    className: `p-[12.312px] md:p-[13.5px] rounded-[2px] border-[#eaeaea] border-[1px] bg-[#fafafa] ${error ? "border-red-600" : "border-[#eaeaea]"} ${isTextArea && "h-[120px]"}`
  });

  return (
    <div className="flex flex-col">
      <label className="text-[16.416px] md:text-[18px] font-rubik font-bold text-[#576168]">
        {name}
        {validate.required && <span className="text-red-600 font-normal pl-[5px]">*</span>}
      </label>
      {
        type.toLowerCase() !== "textarea" ? (
          <input type={type} {...fieldOptions()} />
        ) : (
          <textarea {...fieldOptions()}></textarea>
        )
      }
      {error && <span className="text-red-600 text-[14.7744px] md:text-[16.2px] font-rubik font-normal">{error}</span>}
    </div>
  );
}