$(document).ready(function () {
  const selectedAmenities = [];
  $('input[type="checkbox"]').change(function () {
    const amenityID = $(this).attr('data-id');
    if ($(this).is(':checked')) {
      if (selectedAmenities.indexOf(amenityID) === -1) {
        selectedAmenities.push(amenityID);
      }
    } else {
      const index = selectedAmenities.indexOf(amenityID);
      if (index !== -1) {
        selectedAmenities.splice(index, 1);
      }
    }
    $('.amenities h4').text(selectedAmenities.join(', '));
  });
});
