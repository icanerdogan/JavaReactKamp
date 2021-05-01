package interfaces;

// Burada sadece müþteriyi ilgilendiren metodlar bulunmalýdýr.

public class CustomerManager {
	
	//private Logger logger;
	
	/*public CustomerManager(Logger logger) {
		this.logger = logger;
	}
	 */
	
	private Logger[] loggers;
	
	public CustomerManager(Logger[] loggers) {
		this.loggers = loggers;
	}
	
	
	//loosly - tightly coupled (Gevþek ve Katý Baðlanma)
	
	public void add(Customer customer) {
		System.out.println("Müþteri Eklendi " + customer.getFirstName());
		
		// #4 - Static metot olarak multi logger fonskiyon
		Utils.runLoggers(loggers, customer.getFirstName());
		
		// #3 - Loggerlarý sonradan deðiþtirilebilen ve birden fazla logger atanabilen kullaným
		/*for(Logger logger:loggers) {
			logger.log(customer.getFirstName());
		}*/
		
		// #2 - Loggerý sonradan deðiþtirilebilen ancak tek logger ile sýnýrlý olan kullaným
		//this.logger.log(customer.getFirstName());
		
		// #1 - Tüm kodlarda ayrý ayrý oluþturulmasý gereken kötü kullaným
		/*DatabaseLogger logger = new DatabaseLogger();
		logger.log(customer.getFirstName() + " veri tabanýna loglandý");*/
	} 
	
	public void delete(Customer customer) {
		System.out.println("Müþteri Silindi " + customer.getFirstName());
		
		// #4
		Utils.runLoggers(loggers, customer.getLastName());
		
		// #3
		/*for(Logger logger:loggers) {
			logger.log(customer.getFirstName());
		}*/
		
		// #2
		//this.logger.log(customer.getFirstName());
		
		// #1
		/*DatabaseLogger logger = new DatabaseLogger();
		logger.log(customer.getFirstName() + " veri tabanýna loglandý");*/
	}
	

}
