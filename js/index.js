// اظهار عمليه البحث واخفئها

let li_icon_search = document.querySelector(".li_icon_search")
let input_search_block = document.querySelector(".input_search")

li_icon_search.addEventListener("click", () => {
    input_search_block.classList.toggle("input_search_block")
})


// Email js
// function sendMail() {
//     var params = {
//         name: document.getElementById("user_name").value,
//         phone: document.getElementById("user_phone").value,
//         email: document.getElementById("user_email").value,
//         option: document.getElementById("option").value,
//         message: document.getElementById("maseg").value,
//     }

//     const serviceID = "service_zxscsyj"
//     const templatesID = "template_k8enzob"

//     emailjs.send(serviceID, templatesID, params).then((res) => {
//         alert("your message sent successfully")
//         document.getElementById("user_name").value = "";
//         document.getElementById("user_phone").value = "";
//         document.getElementById("user_email").value = "";
//         document.getElementById("option").value = "";
//         document.getElementById("maseg").value = "";
//         console.log(res);
//     }).catch(err => console.log(err));
// }


// EmailJS
// function sendMail() {
//     var params = {
//         name: document.getElementById("user_name").value,
//         phone: document.getElementById("user_phone").value,
//         email: document.getElementById("user_email").value,
//         option: document.getElementById("option").value,
//         message: document.getElementById("maseg").value,
//     };

//     const serviceID = "service_zxscsyj";
//     const templateID = "template_k8enzob";

//     emailjs.send(serviceID, templateID, params)
//         .then((res) => {
//             document.getElementById("user_name").value = "";
//             document.getElementById("user_phone").value = "";
//             document.getElementById("user_email").value = "";
//             document.getElementById("option").value = "";
//             document.getElementById("maseg").value = "";
//             alert("تم إرسال رسالتك بنجاح");
//             console.log(res);
//         })
//         .catch((err) => console.log(err));
// }

function sendMail() {
    var params = {
        name: document.getElementById("user_name").value,
        phone: document.getElementById("user_phone").value,
        email: document.getElementById("user_email").value,
        option: document.getElementById("option").value,
        message: document.getElementById("maseg").value
    };

    const serviceID = "service_zxscsyj";
    const templateID = "template_k8enzob";
    // const userID = "YOUR_USER_ID";

    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("تم إرسال رسالتك بنجاح!");
            document.getElementById("user_name").value = "";
            document.getElementById("user_phone").value = "";
            document.getElementById("user_email").value = "";
            document.getElementById("option").value = "";
            document.getElementById("maseg").value = "";
        }, function (error) {
            console.log("FAILED...", error);
            alert("حدث خطأ أثناء إرسال الرسالة. يُرجى المحاولة مرة أخرى!");
        });
}



// Email js
