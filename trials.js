// ///////////////////////////////////////////////////////
// PART 1
// Account information:
"use-strict";
let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([['home', '510-867-5309'], 
                             ['mobile', '415-555-1212'], 
                             ['business', '415-123-4567']]);


// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:


// Add function to print account information 
function printAccountInfo(name, number, business){
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Number:${number}`);
    console.log(`Business Name: ${business}`);
}


// Add function to print all addresses, including a header
function showAddress(addresses) {
    for (let address of addresses) {
        console.log(address);

    }
}
// Add function to print phone types and numbers
function showPhoneNumbers(phoneNumbers) {
    for (let phoneNumber of phoneNumbers) {
        console.log(phoneNumber[0] + ":" + phoneNumber[1]);
    }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions
const transactions = new Map([['May-2',-500],
    ['May-13',+1200],
    ['May-15',-100],
    ['May-21',-359],
    ['May-29',+2200]
    ]);

// Add function to add transactions
function addTransaction(date,total){
    transactions.set(date, total);
}


// Add function to show balance status
function showBalanceStatus(balance){
    if (balance <= 0 ){
        console.log("YOU ARE OVERDRAWN");
    } else if (balance > 0  && balance < 20) {
        console.log("Warning:You are close to zero balance");
    } else {
        console.log("Thank you for your business");
    }
}


// Add function to show transactions
function showTransactions(transactions,startBalance){
    console.log(`Starting Balance: ${startBalance}`)
    let balance = 0
    let type = ""
    for (let [key, value] of transactions) {
        console.log(`Transaction Date:`, key)
        balance = startBalance + value;
        if ( value < 0 ){
            type = "Withdrawal"
        } else{
            type = "Deposit"

        }
        console.log(type , "Transaction", value, "Current balance: ", balance);
    }
    if (balance < 0) {
        balance -= 25
    }
    showBalanceStatus(balance);

}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info


// Function to add customer attributes


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours






