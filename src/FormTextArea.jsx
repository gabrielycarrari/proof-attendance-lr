const FormTextarea = ({ field, onChange, label, value, error, autofocus = false }) => {
    return (
        <>
            <div className="form-floating mb-4">
                <textarea className={`form-control ${error ? 'is-invalid' : 'is-valid'}`} placeholder=" " id={field} name={field} onChange={onChange} autoFocus={autofocus} style={{height:'7rem'}} value={value || ""}></textarea>
                <label htmlFor={field}>{label}</label>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </>
    );
}

export default FormTextarea;