function SubmitBtn(props) {
    return (
      <button type="submit" disabled={props.disabled}>
        {props.label}
      </button>
    );
  }

  export default SubmitBtn;