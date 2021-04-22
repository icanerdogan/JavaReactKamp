
public class Conditions {

	public static void main(String[] args) {
		double dollarYesterday = 8.20;
		double dollarToday = 8.30;
		
		if(dollarYesterday < dollarToday){
			System.out.println("dollar rose");
		}
		else if(dollarYesterday > dollarToday) {
			System.out.println("dollar fell");
		}
		else {
			System.out.println("dollar fixed");
		}

	}

}
