import inquirer from "inquirer";
let Mybalance = 10000;
const Mypin = 1234;
let pinnumber = await inquirer.prompt({
    name: 'pin',
    message: 'Enter your pin Number',
    type: 'number',
});
if (pinnumber.pin === Mypin) {
    console.log('your pin is correct');
    let OperationAns = await inquirer.prompt([
        {
            name: 'Operation',
            message: 'Please select option',
            type: 'list',
            choices: ["CheckBalance", 'WithdrawCash'],
        }
    ]);
    console.log(OperationAns);
    if (OperationAns.Operation === 'WithdrawCash') {
        let AmountAns = await inquirer.prompt([
            {
                name: 'Amount',
                message: 'enter your amount',
                type: 'number'
            }
        ]);
        Mybalance -= AmountAns.Amount;
        console.log('your remaining balance is:' + Mybalance);
    }
    else if (OperationAns.Operation === 'CheckBalance') {
        console.log('your balance is:' + Mybalance);
    }
}
else {
    console.log('please enter correct pin number');
}
