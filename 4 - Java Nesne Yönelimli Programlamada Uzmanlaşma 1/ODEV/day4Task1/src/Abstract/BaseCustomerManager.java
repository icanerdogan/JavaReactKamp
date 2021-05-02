package Abstract;

import Entities.Customer;

// Starbucks ve Nero ayný metodu kullanacðý için bunu Class olarak yazýyoruz.
// Bu sýnýf Customer Service'ten implemente ederek metodlarýný alacak.
public abstract class BaseCustomerManager implements CustomerService{

    @Override
    public void save(Customer customer) {
        System.out.println("Save to Database: "+customer.getFirstName());
    }
}
