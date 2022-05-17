import data from "data/contact.json";
import { FormInput } from "components";

export default function SendMessage() {
  return (
    <div className="px-6 py-8 md:p-14">
      <form>
        {data.message.forms.map((input, i) => (
          <div key={`contact_input_${i}`} className="py-[10px]">
            <FormInput {...input} />
          </div>
        ))}
        <button
          type="button"
          className="px-[30px] py-[14px] bg-[#1579e6] rounded-full text-white text-[15px] font-poppins font-semibold mt-[10px]"
        >{data.message.button_name}</button>
      </form>
    </div>
  );
}