//request cover variables
const coverReqModal = document.getElementById("req-cover-modal");
const getCoverReqBtns = document.querySelectorAll(".req-cover");
const coverReqConfirmBtn = document.getElementById("req-cover-confirm");
const coverReqCloseBtn = document.getElementById("req-cover-close");
const coverReqDisclaimer = document.getElementById("req-cover-msg");

//request trade variables
const tradeReqModal = document.getElementById("req-trade-modal");
const getTradeReqBtns = document.querySelectorAll(".req-trade");
const tradeReqConfirmBtn = document.getElementById("req-trade-confirm");
const tradeReqCloseBtn = document.getElementById("req-trade-close");
const tradeReqDisclaimer = document.getElementById("req-trade-msg");

//claim open shift variables
const openShiftModal = document.getElementById("open-shift-modal");
const getOpenShiftBtns = document.querySelectorAll(".claim-open-shift");
const openShiftConfirmBtn = document.getElementById("open-shift-confirm");
const openShiftCloseBtn = document.getElementById("open-shift-close");

//claim cover variables
const coverShiftModal = document.getElementById("claim-cover-modal");
const getCoverShiftBtns = document.querySelectorAll(".claim-cover");
const coverShiftConfirmBtn = document.getElementById("cover-shift-confirm");
const coverShiftCloseBtn = document.getElementById("cover-shift-close");

//offer trade variables
const tradeShiftModal = document.getElementById("offer-trade-modal");
const getTradeShiftBtns = document.querySelectorAll(".offer-trade");
const tradeShiftConfirmBtn = document.getElementById("trade-shift-confirm");
const tradeShiftClearBtn = document.getElementById("trade-shift-clear");
const tradeShiftCloseBtn = document.getElementById("trade-shift-close");

//confirmation modal variables
const confirmModal = document.getElementById("confirm-modal");
const confirmOkayBtn = document.getElementById("confirm-modal-button");

//request cover visual functions

function coverReqActivate()
{
    coverReqModal.style.display = "inline-block";
};

function coverReqConfirm()
{
    if(coverReqDisclaimer.checked === true)
    {
        coverReqModal.style.display = "none";
        coverReqDisclaimer.checked = false;
        confirmModalActivate();
    }
    else
    {
        alert("Please acknowledge the disclaimer before placing your request.")
    }
};

function coverReqClose()
{
    coverReqModal.style.display = "none";
};

getCoverReqBtns.forEach((btn) =>
{
    btn.addEventListener("click", coverReqActivate)
});

//request trade visual functions

function tradeReqActivate()
{
    tradeReqModal.style.display = "inline-block";
};

function tradeReqConfirm()
{
    //if coverReqDisclaimer checked then close, else throw alert
    console.log("Nothing to see here.")
};

function tradeReqClose()
{
    tradeReqModal.style.display = "none";
};

getTradeReqBtns.forEach((btn) =>
{
    btn.addEventListener("click", tradeReqActivate)
});

//claim open shift visual functions
function openShiftActivate()
{
    openShiftModal.style.display = "inline-block";
};

function openShiftConfirm()
{
    openShiftModal.style.display = "none";
    console.log("Approved!");
};

function openShiftClose()
{
    openShiftModal.style.display = "none";
};

getOpenShiftBtns.forEach((btn) =>
{
    btn.addEventListener("click", openShiftActivate);
});

//claim cover visual functions
function coverShiftActivate()
{
    coverShiftModal.style.display = "inline-block";
};

function coverShiftConfirm()
{
    coverShiftModal.style.display = "none";
    console.log("Sent for approval!");
};

function coverShiftClose()
{
    coverShiftModal.style.display = "none";
};

getCoverShiftBtns.forEach((btn) =>
{
    btn.addEventListener("click", coverShiftActivate)
});

//offer trade visual functions

function tradeShiftActivate()
{
    tradeShiftModal.style.display = "inline-block";
};

function tradeShiftConfirm()
{
    tradeShiftModal.style.display = "none";
    console.log("Sent for approval!")
};

function tradeShiftClear()
{
    console.log("Reset modal.")
};

function tradeShiftClose()
{
    tradeShiftModal.style.display = "none";
};

getTradeShiftBtns.forEach((btn) =>
{
    btn.addEventListener("click", tradeShiftActivate)
});

//confirmation

function confirmModalActivate()
{
    confirmModal.style.display = "inline-block";
};

function confirmModalClose()
{
    confirmModal.style.display = "none";
};

//function calls
coverReqConfirmBtn.addEventListener("click", coverReqConfirm);
coverReqCloseBtn.addEventListener("click", coverReqClose);
tradeReqConfirmBtn.addEventListener("click", tradeReqConfirm);
tradeReqCloseBtn.addEventListener("click", tradeReqClose);
openShiftConfirmBtn.addEventListener("click", openShiftConfirm);
openShiftCloseBtn.addEventListener("click", openShiftClose);
coverShiftConfirmBtn.addEventListener("click", coverShiftConfirm);
coverShiftCloseBtn.addEventListener("click", coverShiftClose);
tradeShiftConfirmBtn.addEventListener("click", tradeShiftConfirm);
tradeShiftClearBtn.addEventListener("click", tradeShiftClear);
tradeShiftCloseBtn.addEventListener("click", tradeShiftClose);
confirmOkayBtn.addEventListener("click", confirmModalClose);