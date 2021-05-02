package Concrete;

import Abstract.BaseCustomerManager;
import Abstract.CustomerCheckService;
import Entities.Customer;

public class NeroCustomerManager extends BaseCustomerManager {
	
	CustomerCheckService customerCheckService;
	
	public NeroCustomerManager(CustomerCheckService customerCheckService) {
		this.customerCheckService = customerCheckService;
	}

	@Override
    public void save(Customer customer) {
		if (customerCheckService.CheckIfRealPerson(customer))
        {
            System.out.println("Person Checked!");
        }else{
            System.out.println("Not a valid person!");
        }
    }
}
