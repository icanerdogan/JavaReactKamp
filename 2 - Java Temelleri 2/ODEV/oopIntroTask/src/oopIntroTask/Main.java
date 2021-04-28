package oopIntroTask;

public class Main {

	public static void main(String[] args) {
		
		// COURSES
		Course course1 = new Course(1, "Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)", 
				"2 ay sürecek ücretsiz ve profesyonel bir programla, sıfırdan yazılım geliştirme öğreniyoruz.",
				"Ücretsiz","C#");
		
		Course course2 = new Course(2, "Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)", 
				"2 ay sürecek ücretsiz ve profesyonel bir programla, sıfırdan yazılım geliştirme öğreniyoruz.",
				"Ücretsiz","Java");
		
		Course course3 = new Course(3, "Programlamaya Giriş İçin Temel Kurs", 
				"PYTHON, JAVA, C# gibi tüm programlama dilleri için temel programlama mantığını anlaşılır örneklerle öğrenin.",
				"Ücretsiz","Python, Java, C#");
		
		// COURSE LIST
		Course[] courses = {course1, course2, course3};
		
		// COURSE LOOP
		for(int i=0; i<courses.length;i++){
			System.out.println(i+1 + ". Kursumuzun Adı: "+courses[i].courseName);
		}
		
		// COURSE MANAGER
		CourseManager courseManager = new CourseManager();
		courseManager.enrollCourse(course1);
		courseManager.withdrawCourse(course3);
		courseManager.sendComment(course2, "İnanılmaz bir kamp oluyor. Çook teşekkürler :)");
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
		Instructor instructor2 = new Instructor(2, "Engin Demiroğ");
		Instructor instructor3 = new Instructor(3, "İbrahim Can Erdoğan");
		
		// INSTRUCTOR LIST
		Instructor[] instructors = {instructor1, instructor2, instructor3};
		
		// INSTRUCTOR LOOP
		for(Instructor i:instructors) {
			System.out.println("Eğitmenlerimiz: "+i.instructorName);
		}
		
	}

}
