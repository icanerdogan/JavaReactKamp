package Abstract;

import Entities.Customer;

// Interface içinde default olarak public atandýðý için "public" yazmaya gerek yoktur.
public interface CustomerService {

    void save(Customer customer);
}
