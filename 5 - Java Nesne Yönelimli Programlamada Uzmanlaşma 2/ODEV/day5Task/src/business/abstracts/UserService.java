package business.abstracts;

import entities.concretes.User;

public interface UserService {
    void signIn(String email, String password);
    void signUp(User user);
}
