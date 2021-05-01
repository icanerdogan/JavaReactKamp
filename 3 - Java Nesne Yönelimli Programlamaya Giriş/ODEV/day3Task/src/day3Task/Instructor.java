package day3Task;

import java.util.ArrayList;

public class Instructor extends User{

	private int experience;

	public Instructor(String firstName, String lastName, String email, String username,String password, int experience) {
		super(firstName, lastName, email, username, password);
		this.experience = experience;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	ArrayList<Instructor> instructors = new ArrayList<Instructor>();
}
