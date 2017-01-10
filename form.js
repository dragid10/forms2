$(function () { // Waits until document has loaded before it proceeds with any of the JS

    var formData = "";
    $.get("http://campbest.270e.csi.miamioh.edu/forms/form-ajax.php", function (data, status) {
        console.log("Status is: " + status + "\nData is: " + data);

        if (status === "success" && data != null) {
            formData = data.data;
            console.log("Status was good! data assigned to formData: ");
            console.log(formData);

        }
    }, "json").error(function () {
        alert("Something wrong with the server! Form Data status was not gotten successfully");
    });

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

    var firstname = "", lastname = '', miamiuid = '', hometown = '', currentcity = '', comment = '', myData = '',
        uid = '', tempObj = {};
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
        uid = "oladelaa";
        tempObj = {
            "firstname": firstname,
            "lastname": lastname,
            "miamiuid": miamiuid,
            "hometown": hometown,
            "currentcity": currentcity,
            "comment": comment,
            "uid": uid,
            "option1": "0",
            "option2": "1",
            "option3": "0",
            "year": "Sophomore"
        };
        console.log("Temp OBJ: " + tempObj);
        //TODO UNCOMMENT
        // myData = JSON.stringify(tempObj);
        // console.log("myData: ");
        // console.log("myData: " + myData);

        // Just some standard debugging
        // console.log("content is " + content);

        // If the text in the input field is at least 2 characters, then hide the alert boxes for said field
        if (content.length >= 2) {
            $(this).siblings(".alert").fadeOut();
            $("#submitError").fadeOut();
        }

        // Checks to see if fields are filled out. All of the fields are not filled out, then It'll prevent the submission
        $("#submitButton").unbind().click(function () {
            if (($("#firstname").val() === "") || ($("#lastname").val() === "") || ($("#miamiuid").val() === "")
                || ($("#hometown").val() === "") || ($("#currentcity").val() === "") || ($("#comment").val() === "")) {
                $("#myform").submit(function (e) {
                    $("#submitError").show();
                    e.preventDefault();
                })
            } else {
                // $("#myform").submit(function (e) {

                $.post("http://campbest.270e.csi.miamioh.edu/forms/form-ajax.php", tempObj, function (data, status) {
                    if (status === "success") {
                        console.log(status);
                        alert("Form successfully submitted!");
                    }
                }, "json").error(function () {
                    console.log("Status: " + status);
                    // console.log("Response: " + data);
                    alert("Form not submitted! Error occurred!");
                });
                // })
            }
        });
    });
});
