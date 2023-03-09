function InputText(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {props.error && <span>{props.error}</span>}
    </div>
  );
}

export default InputText;