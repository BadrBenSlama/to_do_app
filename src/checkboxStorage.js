const checkboxStorage = () => {
  document.querySelectorAll('.checkbox').forEach((item) => {
    item.addEventListener('change', () => {
      if (item.checked) {
        console.log('Checkbox is checked..');
        localStorage.setItem('checkboxStatus', JSON.stringify(true));
      } else {
        console.log('Checkbox is not checked..');
        localStorage.setItem('checkboxStatus', JSON.stringify(false));
      }
    });
  });
  if (JSON.parse(localStorage.getItem('checkboxStatus')) === true) {
    document.getElementById('checkbox').setAttribute('checked', 'true');
  } else if (JSON.parse(localStorage.getItem('checkboxStatus')) === false) {
    document.getElementById('checkbox').setAttribute('unchecked', 'true');
  }
};
export default checkboxStorage;