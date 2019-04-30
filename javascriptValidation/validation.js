function formValidation() {
    var uname = document.validation.name;
    var uadd = document.validation.address;
    var uyear = document.validation.year;
    var uemail = document.validation.email;
    var umsex = document.validation.sex;
    var ufsex = document.validation.sex2;

    if (allLetter(uname)) {
        if (alphanumeric(uadd)) {
            if (countryselect(uyear)) {
                if (ValidateEmail(uemail)) {
                    if (validsex(umsex, ufsex)) {
                    }
                }

            }
        }
    }
    return false;
}

function allLetter(uname)
{
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function alphanumeric(uadd)
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
function countryselect(uyear)
{
    if(uyear.value == -1)
    {
        alert('Select your country from the list');
        uyear.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function allnumeric(uzip)
{
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
} function validsex(umsex,ufsex)
{
    x=0;

    if(umsex.checked)
    {
        x++;
    } if(ufsex.checked)
{
    x++;
}
    if(x==0)
    {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else
    {
        alert('Form Succesfully Submitted');
        window.location.reload();
        return true;
    }
}