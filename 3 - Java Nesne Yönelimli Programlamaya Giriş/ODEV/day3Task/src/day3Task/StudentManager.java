package day3Task;

public class StudentManager extends UserManager{
	

	public void getInformation(Student student) {
		System.out.println("Öðretmenin Adý: "+ student.getFirstName() + " "+ student.getLastName());
		System.out.println("Ýletiþim: "+ student.getEmail());
		System.out.println("Okul: "+ student.getSchool());
		System.out.println("Bölüm: "+ student.getDepartment());
	}
	
	public void addUser(Student s) {
		
		Student student = new Student(s.getFirstName(), s.getLastName(), s.getEmail(), s.getUsername(), s.getPassword(), 
										s.getSchool(), s.getDepartment());
		s.students.add(student);
		System.out.println("Öðrenci Oluþturuldu");
	}

	
	public void removeUser(Student s) {
		String username = s.getUsername();
		
		for(int i=0;i<s.students.size();i++) {
			if(s.students.get(i).getUsername().equals(username)) {
				System.out.println("Kullanýcý Adýnýzý Deðiþtirmek için Þifrenizi Giriniz: ");
				String password = scanner.nextLine();
				
				if(password.equals(s.students.get(i).getPassword())) {
					s.students.remove(i);
					System.out.println("Öðrenci Silindi");
				}
				else {
					System.out.println("Yanlýþ Þifre Girdiniz. Ýþleminiz Gerçekleþtirilemedi.");
				}
			}
			else {
				System.out.println("Böyle bir öðrenci profili bulunamadý.");
			}
		}
	}
	
}
