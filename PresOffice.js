var imageOrig = document.getElementById("imageOrig");
var userName = document.getElementById("userName");
var userInfo = document.getElementsByClassName("userInfo");
var userInfoState = 0;
var state = "Orig";

function openOrig() {
    imageOrig.style.content = "url('PRESOffice_Original.jpg')";
    state = "Orig";
    userInfoState = 1;
    toggleUserInfo();
}

function openMobile() {
    imageOrig.style.content = "url('PRESOffice_Mobile.jpg')";
    state = "Mobile";
}

function openPrinters() {
    imageOrig.style.content = "url('PRESOffice_Printers.jpg')";
    state = "Printers";
}

function openiPad() {
    imageOrig.style.content = "url('PRESOffice_iPads.jpg')";
    state = "iPad";
}

function openPhone() {
    imageOrig.style.content = "url('PRESOffice_Phones.jpg')";
    state = "Phone";
}

function openHotSpot() {
    imageOrig.style.content = "url('PRESOffice_Hotspots.jpg')";
    state = "HotSpot";
}

function openNetworked() {
    imageOrig.style.content = "url('PRESOffice_NetworkedPrinters.jpg')";
    state = "Networked";
}

function openPersonal() {
    imageOrig.style.content = "url('PRESOffice_PersonalPrinters.jpg')";
    state = "Personal";
}

function openAll() {
    imageOrig.style.content = "url('PRESOffice_All.jpg')";
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