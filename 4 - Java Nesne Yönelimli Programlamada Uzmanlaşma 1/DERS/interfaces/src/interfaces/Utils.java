package interfaces;

public class Utils {
	// Static olarak tanýmlanan sýnýflar genelde "loglama" gibi sürekli kullanýlan iþlemlerde tanýmlanýr.
	// Static metodlar "new" kullanýlmadan da SINIF ADIYLA ulaþýlabilir.
	
	public static void runLoggers(Logger[] loggers, String message) {
		for(Logger logger:loggers) {
			logger.log(message);
		}
	}
}
