package day3Task;

import java.util.Scanner;

public class UserManager {
	
	Scanner scanner = new Scanner(System.in);
	
	// SIGN IN
	public void signIn(User user) {

		System.out.println(user.getFirstName() + " " + user.getLastName() + " Hesabýnýza Baþarýyla Giriþ Yapýldý");
			
	}
	
	//SIGN OUT
	public void signOut(User user) {
		System.out.println(user.getFirstName() + " " + user.getLastName() + " Hesabýnýzdan Çýkýþ Yapýldý");
	}
	
	// REGISTER
	public void addUser(User u) {

		User user = new User(u.getFirstName(), u.getLastName(), u.getEmail(), u.getUsername(), u.getPassword());
		u.users.add(user);
		System.out.println("Kullanýcý Oluþturuldu");
	}
	
	//DELETE ACCOUNT
	public void removeUser(User u) {
		String username = u.getUsername();
		
		for(int i=0;i<u.users.size();i++) {
			if(u.users.get(i).getUsername().equals(username)) {
				System.out.println("Kullanýcý Adýnýzý Deðiþtirmek için Þifrenizi Giriniz: ");
				String password = scanner.nextLine();
				
				if(password.equals(u.users.get(i).getPassword())) {
					u.users.remove(i);
					System.out.println("Kullanýcý Silindi");
				}
				else {
					System.out.println("Yanlýþ Þifre Girdiniz. Ýþleminiz Gerçekleþtirilemedi.");
				}
			}
			else {
				System.out.println("Böyle bir kullanýcý bulunamadý.");
			}
		}
	}
	
	//CHANGE EMAIL
	public void changeEmail(User user, String newEmail) {
		System.out.println("Deðiþtirmek Ýstediðiniz Mail: " + user.getEmail());
		System.out.println("Yeni Mail Adresiniz: "+ newEmail);
		
		user.setEmail(newEmail);
		
		System.out.println("Mail Adresiniz Baþarýyla Deðiþtirildi");
	}
	
	// CHANGE PASSWORD
	public void changePassword(User user, String newPassword) {
		
		System.out.println("Þifrenizi deðiþtirmek istiyor musunuz? (E/H)");
		String chose = scanner.nextLine();
		
		if(chose.equals("E")) {
			user.setPassword(newPassword);
			System.out.println("Þifreniz Baþarýyla Deðiþtirildi");	
		}
		else if(chose.equals("H")) {
			System.out.println("Þifre deðiþikliði onaylanmadý. Þifre deðiþimi yapýlamadý.");	
		}
		
	}
	
	// CHANGE USERNAME
	public void changeUsername(User user, String newUsername) {
		System.out.println("Deðiþtirmek Ýstediðiniz Kullanýcý Adýnýz: " + user.getUsername());
		System.out.println("Yeni Kullanýcý Adýnýz: "+ newUsername);
		
		user.setUsername(newUsername);
		
		System.out.println("Kullanýcý Adýnýzý Baþarýyla Deðiþtirildi");
	}
	
	// GET INFORMATION
	public void getInformation(User user) {
		System.out.println("Kullanýcýnýn Gerçek Adý: "+ user.getFirstName() + " "+ user.getLastName());
		System.out.println("Ýletiþim: "+ user.getEmail());
		System.out.println("Kullanýcý Adý: "+ user.getUsername());
	}
}
