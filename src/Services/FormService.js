const FormService = {
  handleFieldChange(target) {
    const { id, value } = target;
    return this.setState({
      [id]: {
        value,
        touched: true
      }
    });
  }
};
export default FormService;
