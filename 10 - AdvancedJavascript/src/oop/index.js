class Customer{
    constructor(id, customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, 12345);
customer.name = "İbrahim Can Erdoğan"
console.log(customer.name);

// Class'a yapılan prototyping
Customer.bisey = "Bişey"
console.log(Customer.bisey);

// Constructoe içine this'ler eklenince ulaşılabilir!
console.log(customer.customerNumber)

class IndividualCustomer extends Customer{

    constructor(firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{

    constructor(companyName, id, customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}