// step -1 reference namespace with other file
var studentCalc;
(function (studentCalc) {
    function AnualFeeCalc(feeAmount, term) {
        return feeAmount * term;
    }
    studentCalc.AnualFeeCalc = AnualFeeCalc;
})(studentCalc || (studentCalc = {}));
/// <reference path="./namespace.ts"/>
var TotalFee = studentCalc.AnualFeeCalc(1500, 4);
console.log("Output:" + TotalFee);
