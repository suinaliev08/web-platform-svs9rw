setState('image');
setState('color');

$('input[type="file"]').on('change', function () {
  const file = $(this)[0].files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    updateState('image', this.result);
    colorjs
      .average(this.result, {
        format: 'hex',
      })
      .then((color) => updateState('color', color));
  };
  reader.readAsDataURL(file);
});
