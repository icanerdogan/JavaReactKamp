package entities.abstracts;

public interface UserCheckManager {
    boolean checkFirstName(String fName);
    boolean checkLastName(String lName);
    boolean checkUserName(String uName);
    boolean checkPassword(String password);
    boolean checkEmail(String email);
}
