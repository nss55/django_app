$(document).ready(function () {
$("#id_country").change(function () {
    var url = $("#shopForm").attr("data-state-url");  // get the url of the `load_cities` view
    var countryId = $(this).val();  // get the selected country ID from the HTML input

    $.ajax({                       // initialize an AJAX request
        url: url,                    // set the url of the request (= localhost:8000/hr/ajax/load-cities/)
        method: 'GET',
        data: {
            'country': countryId       // add the country id to the GET parameters
        },
        success: function (data) {   // `data` is the return of the `load_cities` view function
            $("#id_state").html(data);  // replace the contents of the city input with the data that came from the server
            console.log(data);
        }
    });

});


$("#id_state").change(function () {
    var url = $("#shopForm").attr("data-cities-url");  // get the url of the `load_cities` view
    var stateId = $(this).val();  // get the selected country ID from the HTML input

    $.ajax({                       // initialize an AJAX request
        url: url,                    // set the url of the request (= localhost:8000/hr/ajax/load-cities/)
        method: 'GET',
        data: {
            'state': stateId       // add the country id to the GET parameters
        },
        success: function (data) {   // `data` is the return of the `load_cities` view function
            $("#id_city").html(data);  // replace the contents of the city input with the data that came from the server
        }
    });

});

$('#id_opening_time').datetimepicker({
    format: 'hh:mm:ss'
});

$('#id_closing_time').datetimepicker({
    format: 'hh:mm:ss'
});
});