// Alert function ,use 5 times.
function ifCondition(value,boxName){
    if (value < 0 || isNaN(value )) {
        if (value < 0) {
            alert("Give a positive value in "+ boxName +" Box!!");
            return;
        }
        else {
            alert("Give a number in "+ boxName +" Box!!");
            return;
        }
    }

}


document.getElementById('total-cal-btn').addEventListener('click', function () {

    const income = document.getElementById('myIncome');
    const food = document.getElementById('myFood');
    const rent = document.getElementById('myRent');
    const clothes = document.getElementById('myColthes');

    ifCondition(income.value,'income')
    ifCondition(food.value,'food')
    ifCondition(rent.value,'rent')
    ifCondition(clothes.value,'clothes')
    const spendBlance = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);

    const mainBlance = parseFloat(income.value) - spendBlance;

    if (mainBlance < 0) {
        alert("Please Spend less!! you spend more than income");
        return;

    }

    const mySpend = document.getElementById('mySpend');
    const myBlance = document.getElementById('myBlance');

    mySpend.innerText = spendBlance;
    myBlance.innerText = mainBlance;

})


document.getElementById('save-cal-button').addEventListener('click', function () {
    const myBlance = document.getElementById('myBlance');
    const saveBtn = document.getElementById('save-input');
    if (saveBtn.value > 100) {
        alert("You can't save more than you have!!");
        return 0;
    }

ifCondition(saveBtn.value,'save');
    const totalSave = parseFloat(myBlance.innerText) * parseFloat(saveBtn.value) / 100;

    const iHave = parseFloat(myBlance.innerText) - totalSave;
    console.log(totalSave);

    console.log(iHave);
    const mySaveBank = document.getElementById('my-save-bank');
    mySaveBank.innerText = totalSave;

    const mySaveTotal = document.getElementById('my-save-total');
    mySaveTotal.innerText = iHave;

})