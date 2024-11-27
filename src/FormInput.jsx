const FormInput = ({ type, field, onChange, label, value, error, autofocus = false }) => {
    return (
        <>
            <div className="form-floating mb-4">
                <input type={type} className={`form-control ${error ? 'is-invalid' : 'is-valid'}`} placeholder=" " id={field} name={field} value={value || ""} onChange={onChange} autoFocus={autofocus} />
                <label htmlFor={field}>{label}</label>                
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </>
    );
}

export default FormInput;