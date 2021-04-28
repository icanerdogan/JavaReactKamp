package oopIntroTask;

public class Main {

	public static void main(String[] args) {
		
		// COURSES
		Course course1 = new Course(1, "Yazýlým Geliþtirici Yetiþtirme Kampý (C# + ANGULAR)", 
				"2 ay sürecek ücretsiz ve profesyonel bir programla, sýfýrdan yazýlým geliþtirme öðreniyoruz.",
				"Ücretsiz","C#");
		
		Course course2 = new Course(2, "Yazýlým Geliþtirici Yetiþtirme Kampý (JAVA + REACT)", 
				"2 ay sürecek ücretsiz ve profesyonel bir programla, sýfýrdan yazýlým geliþtirme öðreniyoruz.",
				"Ücretsiz","Java");
		
		Course course3 = new Course(3, "Programlamaya Giriþ Ýçin Temel Kurs", 
				"PYTHON, JAVA, C# gibi tüm programlama dilleri için temel programlama mantýðýný anlaþýlýr örneklerle öðrenin.",
				"Ücretsiz","Python, Java, C#");
		
		// COURSE LIST
		Course[] courses = {course1, course2, course3};
		
		// COURSE LOOP
		for(int i=0; i<courses.length;i++){
			System.out.println(i+1 + ". Kursumuzun Adý: "+courses[i].courseName);
		}
		
		// COURSE MANAGER
		CourseManager courseManager = new CourseManager();
		courseManager.enrollCourse(course1);
		courseManager.withdrawCourse(course3);
		courseManager.sendComment(course2, "Ýnanýlmaz bir kamp oluyor. Çook teþekkürler :)");
		courseManager.rollCall(course2);
		
		
		//CATEGORY
		Category category1 = new Category(1, "Tümü");
		Category category2 = new Category(2, "Programlama");
		
		// CATEGORY LIST
		Category[] categories = {category1, category2};

		// CATEGORY LOOP
		for(Category category:categories) {
			System.out.println("Bulunan Kategoriler: "+category.categoryName);
		}
		
		
		// INSTRUCTOR 
		Instructor instructor1 = new Instructor(1, "Tümü");
		Instructor instructor2 = new Instructor(2, "Engin Demiroð");
		Instructor instructor3 = new Instructor(3, "Ýbrahim Can Erdoðan");
		
		// INSTRUCTOR LIST
		Instructor[] instructors = {instructor1, instructor2, instructor3};
		
		// INSTRUCTOR LOOP
		for(Instructor i:instructors) {
			System.out.println("Eðitmenlerimiz: "+i.instructorName);
		}
		
	}

}
