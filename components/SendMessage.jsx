import { useState, useRef } from "react";
import data from "data/contact.json";
import emailjs from '@emailjs/browser';
import { FormInput } from "subcomponents";

const Spinner = () => (
  <svg role="status" className="inline w-4 h-4 mr-2 text-[#a9a9b4] ml-[9px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>
)

export default function SendMessage() {
  const [result, setResult] = useState({ ok: false, error_text: "", email: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const sendEmail = e => {
    e.preventDefault();
    if (!loading) {
      setLoading(true)
      emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
        .then(result => {
            setResult({ ok: true, email: formRef.current.email.value });
            setLoading(false);
        }, error => {
            setResult({ ok: false, error_text: !error.text && "Unknown error, please try again later :(" });
            setLoading(false);
        });
    }
  };

  return (
    <div className={`px-6 py-8 md:p-14 h-full ${result.ok && "flex justify-center items-center"} ${!result.ok && result.error_text && "!pb-[30px]"}`}>
      {!result.ok ? (
        <form ref={formRef} onSubmit={sendEmail}>
          {data.message.forms.map((input, i) => (
            <div key={`contact_input_${i}`} className="py-[10px]">
              <FormInput {...input} />
            </div>
          ))}
          <button
            className={`px-[30px] py-[14px] rounded-full text-white text-[13.68px] md:text-[15px] font-poppins font-semibold mt-[10px] ${loading ? "bg-[#ddd] text-[#a9a9b4] cursor-not-allowed" : "bg-[#1579e6] hover:scale-105 hover:drop-shadow-lg customTransition focus:scale-95"}`}
          >{loading ? data.message.button.loading_name : data.message.button.name}
            {loading && <Spinner className="text-[#a9a9b4] ml-[9px]" />}
          </button>
          {result.error_text && <span className="block mt-3 text-[16.5px] md:text-[18px] font-medium text-red-500">{result.error_text}</span>}
        </form>
      ) : result.ok && (
        <h3 className="text-center text-[16px] sm:text-[22px] break-word font-rubik text-[#2db900]">
          Message has been sent successfully, we will reply soon&nbsp;
          {result.email && (
            <>
              to&nbsp;
              <a
                href={`mailto:${result.email}`}
                rel="noreferrer"
                target="_blank"
                className="underline"
              >{result.email}</a>
            </>
          )}
        </h3>
      )}
    </div>
  );
}