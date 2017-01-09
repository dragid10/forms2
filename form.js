$(function () { // Waits until document has loaded before it proceeds with any of the JS

    // var formData = JSON.parse($.get("http://campbest.270e.csi.miamioh.edu/forms/form-ajax.php"));
    $.get("http://campbest.270e.csi.miamioh.edu/forms/form-ajax.php", function (data, status) {
        console.log("Status is: " + status + "\nData is: " + data);
    }, "json");
    console.log(formData);

    // Any of the selectors listed below will hide their respective alert boxes if the content in their input is more than 2 chars long
    $("#firstname, #lastname, #miamiuid, #hometown, #currentcity, #comment").keyup(function () {
        // Stores input value in a variable
        var content = $(this).val();

        // Just some standard debugging
        console.log("content is " + content);

        // If the text in the input field is at least 2 characters, then hide the alert boxes for said field
        if (content.length >= 2) {
            $(this).siblings(".alert").fadeOut();
            $("#submitError").fadeOut();
        }
    })
});
