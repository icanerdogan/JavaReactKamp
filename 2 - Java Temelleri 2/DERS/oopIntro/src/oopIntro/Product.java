package oopIntro;

public class Product {
	
	int id; // Nesneyi diðer nesnelerden ayýran benzersiz sayý
	String name; //Ürün Adý
	double unitPrice; //Birim Fiyatý
	String detail; //Ürün Açýklamasý
	
	
	public Product() {
		System.out.println("Ben çalýþtým");
	}
	
	public Product(int id, String name, double unitPrice, String detail){
		
		// Diðer constructor'ý çalýþtýrmak için this(); fonksiyonu getirilir.
		this();
		
		// Bu class'ta yani en yukarýda tanýmladýðýmýz alan yukarýda parantezin içindeki alanda verilen deðere eþitliyoruz.
		this.id = id; 
		this.name = name;
		this.unitPrice = unitPrice;
		this.detail = detail;
	}
}
