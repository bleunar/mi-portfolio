import { useId } from "react";

export default function InputField({id, type='text', label, value, onChange, shadowed = false}) {
  const generatedId = useId();
  const inputId = id || generatedId;
    return (
        <div className={`form-floating ${shadowed ? "shadowed" : "border-3 border border-black rounded"} fw-bold mb-3`}>
            <input id={inputId} type={type} class="form-control fw-bold border-0" placeholder={`Enter ${label}`} value={value} onChange={onChange} />
            <label for={inputId}>{label}</label>
        </div>
    )
}


