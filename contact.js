function sendMessage()
{
    let username = document.contactMe.uname.value;
    let phoneNum = document.contactMe.phone.value;
    let content = document.contactMe.message.value;

    if(username == "" || content == "")
    {
        alert("Required fields empty. Please fill out name and message");
    }
    else if(content.length <= 10)
    {
        alert("Message too short");
    }
    else
    {
        alert("Composing email.");
        let subject = `Message through Portfolio from ${username}`;

        let body = `${content}\n\nFrom: ${username}\nPhone: ${phoneNum}`;

        let mailToLink = `mailto:divya.bajaj@utrgv.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailToLink;
    }
}