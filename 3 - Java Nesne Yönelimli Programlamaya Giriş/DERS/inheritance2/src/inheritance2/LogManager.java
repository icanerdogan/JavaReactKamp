package inheritance2;

public class LogManager {

	// KÖTÜ KOD ÖRNEÐÝ
	// !!! Biribrinin alternatifi olan kod bloklarýnda if kullanýlmaz.
	
	public void log(int logType) {
		if (logType == 1) {
			System.out.println("Veritabanýna loglandý!");
		}
		if (logType == 2) {
			System.out.println("Dosyaya loglandý!");
		}
		else {
			System.out.println("Email Gönderildi!");
		}
	}
}
