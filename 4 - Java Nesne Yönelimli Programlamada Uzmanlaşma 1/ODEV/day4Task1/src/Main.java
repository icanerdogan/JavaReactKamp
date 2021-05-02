import java.sql.Date;
import java.util.Calendar;

import Abstract.BaseCustomerManager;
import Adapters.MernisServiceAdapter;
import Concrete.NeroCustomerManager;
import Concrete.StarbucksCustomerManager;
import Entities.Customer;

public class Main {

	public static void main(String[] args) {
		
	        //BaseCustomerManager customerManager = new NeroCustomerManager(new MernisServiceAdapter());
			BaseCustomerManager customerManager = new StarbucksCustomerManager(new MernisServiceAdapter());
			
	        Date bDate = new Date(2000,9,5);
	        Customer customer = new Customer(1,"Ýbrahim Can","Erdoðan",bDate,"12345678910");
	        
	        customerManager.save(customer);
	    
	}

}
