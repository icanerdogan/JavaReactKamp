package day3Task;

import java.util.ArrayList;

public class Student extends User{
	
	private String school;
	private String department;

	
	public Student(String firstName, String lastName, String email, String username,String password, String school, String department) {
		super(firstName, lastName, email, username, password);
		this.school = school;
		this.department = department;
	}
	
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	
	ArrayList<Student> students = new ArrayList<Student>();
}
