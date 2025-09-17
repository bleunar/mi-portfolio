import { useId } from "react";

export default function TextArea({ id, label = "Thougts", value, onChange = () => {} }) {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <div class="form-floating shadowed fw-bold mb-3">
            <textarea id={inputId} class="form-control fw-bold" rows={3} placeholder={label} value={value} onChange={onChange}></textarea>
            <label for={inputId}>{label}</label>
        </div>
    )
}