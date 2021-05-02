package Abstract;

import Entities.Customer;

public interface CustomerCheckService {
    boolean CheckIfRealPerson(Customer customer);
}
