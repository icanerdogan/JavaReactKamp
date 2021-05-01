package day3Task;

public class InstructorManager extends UserManager {

	public void getInformation(Instructor instructor) {
		System.out.println("Öðretmenin Adý: "+ instructor.getFirstName() + " "+ instructor.getLastName());
		System.out.println("Ýletiþim: "+ instructor.getEmail());
		System.out.println("Tecrübe Yýlý: "+ instructor.getExperience());

	}
	
	public void addUser(Instructor i) {

		Instructor instructor = new Instructor(i.getFirstName(), i.getLastName(), i.getEmail(), 
												i.getUsername(), i.getPassword(), i.getExperience());
		i.instructors.add(instructor);
		System.out.println("Öðretmen Oluþturuldu");
	}

	public void removeUser(Instructor ins) {
		String username = ins.getUsername();
		
		for(int i=0;i<ins.instructors.size();i++) {
			if(ins.instructors.get(i).getUsername().equals(username)) {
				System.out.println("Kullanýcý Adýnýzý Deðiþtirmek için Þifrenizi Giriniz: ");
				String password = scanner.nextLine();
				
				if(password.equals(ins.instructors.get(i).getPassword())) {
					ins.instructors.remove(i);
					System.out.println("Öðretmen Silindi");
				}
				else {
					System.out.println("Yanlýþ Þifre Girdiniz. Ýþleminiz Gerçekleþtirilemedi.");
				}
			}
			else {
				System.out.println("Böyle bir öðretmen profili bulunamadý.");
			}
		}
	}
}
