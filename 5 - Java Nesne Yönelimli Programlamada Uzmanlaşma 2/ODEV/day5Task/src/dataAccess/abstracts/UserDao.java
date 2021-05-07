package dataAccess.abstracts;

import entities.concretes.User;

import java.util.ArrayList;
import java.util.List;

public interface UserDao {

    void addUser(User user);
    void deleteUser(User user);

    ArrayList<User> users = new ArrayList<>();
    List<User> getAll();
}
