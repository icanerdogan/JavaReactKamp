package inheritance2;

public class Main {

	public static void main(String[] args) {

		/*LogManager logManager = new LogManager();
		logManager.log(2);*/
		
		CustomerManager customerManager = new CustomerManager();
		customerManager.add(new EmailLogger());
	}

}
