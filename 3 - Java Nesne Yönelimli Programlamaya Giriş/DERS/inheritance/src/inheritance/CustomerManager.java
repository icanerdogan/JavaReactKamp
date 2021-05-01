package inheritance;

public class CustomerManager {
	
	/*public void add(IndividualCustomer customer){
		System.out.println(customer.customerNumber + " kaydedildi.");
	}
	
	public void add(CorporateCustomer customer){
		System.out.println(customer.customerN + " kaydedildi.");
	}*/
	
	public void add(Customer customer){
		System.out.println(customer.customerNumber + " kaydedildi.");
		
	}
	
	//Bulk Insert
	public void addMultiple(Customer[] customers) {
		
	}
}
