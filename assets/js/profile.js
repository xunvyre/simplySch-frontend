//Claim Open Shift Variables
var openShiftModal = document.getElementById("open-shift-modal");
var getOpenShiftBtns = document.querySelectorAll(".claim-open-shift");
var openShiftConfirmBtn = document.getElementById("open-shift-confirm");
var openShiftCloseBtn = document.getElementById("open-shift-close");

//Claim Open Shift Visual Functions
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

openShiftConfirmBtn.addEventListener("click", openShiftConfirm);
openShiftCloseBtn.addEventListener("click", openShiftClose);