$(function () { // Waits until document has loaded before it proceeds with any of the JS

    var formData = "";
    $.get("http://campbest.270e.csi.miamioh.edu/forms/form-ajax.php", function (data, status) {
        console.log("Status is: " + status + "\nData is: " + data);

        if (status === "success" && data != null) {
            formData = data.data;
            console.log("Status was good! data assigned to formData");
            console.log(formData);

        } else {
            alert("Something wrong with the server! Form Data status was not \"success\" ");
        }
    }, "json");

    $("#updateLeft").click(function () {
        console.log("Twas clicked!");
        var obj = formData[0];
        console.log(obj);
        for (var i = 0; i < formData.length; i++) {
            var info = formData[i];
            $("#tableBody").append("<tr>").append("<td>" + info.firstname + "</td>")
                .append("<td>" + info.lastname + "</td>").append("<td>" + info.currentcity + "</td>")
                .append("<td>" + info.uid + "</td>").append("<td>" + info["ip"] + "</td>")
                .append("<td>" + info["updateTime"] + "</td>").append("</tr>");
        }
    });

    var firstname = "", lastname = '', miamiuid = '', hometown = '', currentcity = '', comment = '';
    // Any of the selectors listed below will hide their respective alert boxes if the content in their input is more than 2 chars long
    $("#firstname, #lastname, #miamiuid, #hometown, #currentcity, #comment").keyup(function () {
        // Stores input value in a variable
        var content = $(this).val();
        firstname = $("#firstname").val();
        lastname = $("#lastname").val();
        miamiuid = $("#miamiuid").val();
        hometown = $("#hometown").val();
        currentcity = $("#currentcity").val();
        comment = $("#comment").val();

        // Just some standard debugging
        console.log("content is " + content);

        // If the text in the input field is at least 2 characters, then hide the alert boxes for said field
        if (content.length >= 2) {
            $(this).siblings(".alert").fadeOut();
            $("#submitError").fadeOut();
        } else {

        }
    })
});
