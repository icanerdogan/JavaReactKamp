package inheritance;

public class Main {

	public static void main(String[] args) {

		IndividualCustomer ibrahim = new IndividualCustomer();
		ibrahim.customerNumber = "123123";
		
		CorporateCustomer hepsiBurada = new CorporateCustomer();
		hepsiBurada.customerNumber = "123456";
		
		UnionCustomer abc = new UnionCustomer();
		abc.unionNumber = "789789";
		
		CustomerManager customerManager = new CustomerManager();
		customerManager.add(hepsiBurada);
		customerManager.add(ibrahim);
		customerManager.add(abc);
		
		
		Customer[] customers = {ibrahim, hepsiBurada, abc};
		
		customerManager.addMultiple(customers);
	}

}
