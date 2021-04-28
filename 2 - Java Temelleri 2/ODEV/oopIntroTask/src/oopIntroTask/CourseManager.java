package oopIntroTask;

// ÝÞ SINIFI
public class CourseManager {
	// Kurslar üzerinde yapabileceðimiz fonskiyonlar yani metodlarý tutuluyor
	
	public void enrollCourse(Course course) {
		System.out.println(course.courseName + "'a Baþarýyla Kaydoldunuz!!");
	}
	public void withdrawCourse(Course course){
		System.out.println(course.courseName + "'tan Ayrýldýnýz!!");
	}
	
	public void rollCall(Course course){
		System.out.println("Yoklamanýz Alýnmýþtýr :)");
	}
	
	public void sendComment(Course course, String comment){
		System.out.println("Yorumunuz Baþarýyla Gönderildi: "+comment);
	}
}
