package oopIntroTask;

// ÝÞ SINIFI
public class CourseManager {
	// Kurslar üzerinde yapabileceğimiz fonskiyonlar yani metodları tutuluyor
	
	public void enrollCourse(Course course) {
		System.out.println(course.courseName + "'a Başarıyla Kaydoldunuz!!");
	}
	public void withdrawCourse(Course course){
		System.out.println(course.courseName + "'tan Ayrıldınız!!");
	}
	
	public void rollCall(Course course){
		System.out.println("Yoklamanýz Alınmıştır :)");
	}
	
	public void sendComment(Course course, String comment){
		System.out.println("Yorumunuz Başarıyla Gönderildi: "+comment);
	}
}
