function Write(param) {

    const display = document.querySelector(".display");
    if (!isNaN(param) || param == '') {
        if (param === '') {
            display.value = '';
        }

        display.value += param;
    } else {
        var spelled = display.value.split('');
        if (!isNaN(spelled[spelled.length - 1])) {

            var Result = Calculate();

            ChangeDisplay(Result + param);

        }

    }

}

function ShowCalc() {

    var Result = Calculate();
    ChangeDisplay(Result);

}

function Calculate() {
    const display = document.querySelector(".display").value;
    let spelled = display.split('');
    var opr = GetOpr(spelled);
    if (opr[0] !== '') {
        var nums = GetNumbers(opr, spelled);


        switch (opr[0]) {
            case '+':
                return nums[0] + nums[1];
                break;
            case '-':
                return nums[0] - nums[1];

                break;
            case '/':
                return nums[0] / nums[1];

                break;
            case '*':
                return nums[0] * nums[1];

                break;
            case '^':
                return nums[0] ** nums[1];

                break;

            default:
                return NaN;
                break;
        }

    }
    return parseInt(display);
}

function GetNumbers(opr, txtInp) {

    var num1 = '';
    var num2 = '';
    for (let i = 0; i < txtInp.length; i++) {
        if (i !== opr[1]) {
            if (i > opr[1]) {
                num2 += txtInp[i];
            } else {
                num1 += txtInp[i];
            }
        }
    }
    return [parseInt(num1), parseInt(num2)];
}

function GetOpr(list) {

    var isexist = false;
    for (let i = 0; i < list.length; i++) {
        const element = list[i];

        switch (element) {
            case '+':
                return ['+', i];
                break;
            case '-':
                return ['-', i];
                break;
            case '/':
                return ['/', i];
                break;
            case '*':
                return ['*', i];
                break;
            case '^':
                return ['^', i];
                break;
            default:
                break;
        }
    };

    return ['', 0];
}

function Tavan(sup) {

    var Result = Calculate();

    ChangeDisplay(Result ** sup);
}

function ChangeDisplay(txt) {
    document.querySelector(".display").value = txt;
}