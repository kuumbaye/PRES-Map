var imageOrig = document.getElementById("imageOrig");
var userName = document.getElementById("userName");
var userInfo = document.getElementsByClassName("userInfo");
var userInfoState = 0;
var state = "Orig";

function openOrig() {
    imageOrig.style.content = "url('4thPRESOffice0617.jpg')";
    state = "Orig";
}

function openMobile() {
    imageOrig.style.content = "url('4thPRESOffice0617Mobile.jpg')";
    state = "Mobile";
}

function openPrinters() {
    imageOrig.style.content = "url('4thPRESOffice0617Printers.jpg')";
    state = "Printers";
}

function openiPad() {
    imageOrig.style.content = "url('4thPRESOffice0617iPad.jpg')";
    state = "iPad";
}

function openPhone() {
    imageOrig.style.content = "url('4thPRESOffice0617Phones.jpg')";
    state = "Phone";
}

function openHotSpot() {
    imageOrig.style.content = "url('4thPRESOffice0617HotSpots.jpg')";
    state = "HotSpot";
}

function openNetworked() {
    imageOrig.style.content = "url('4thPRESOffice0617NetworkedP.jpg')";
    state = "Networked";
}

function openPersonal() {
    imageOrig.style.content = "url('4thPRESOffice0617PersonalP.jpg')";
    state = "Personal";
}

function openAll() {
    imageOrig.style.content = "url('4thPRESOffice0617All.jpg')";
    state = "All";
}

function toggleUserInfo() {
    if (userInfoState == 0) {
        document.getElementById("userInfoContainer").style.display = "initial";
        userInfoState = 1;
    } else {
        document.getElementById("userInfoContainer").style.display = "none";
        userInfoState = 0;
    }

}