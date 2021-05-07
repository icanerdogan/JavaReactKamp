package dataAccess.concretes;

import dataAccess.abstracts.UserDao;
import entities.concretes.User;

import java.util.List;

public class BaseUserDao implements UserDao {

    @Override
    public void addUser(User user) {
        users.add(user);
        System.out.println("Kullanıcı Ekleme İşlemi Başarılı!");

    }

    @Override
    public void deleteUser(User user) {
        users.remove(user);
        System.out.println("Kullanıcı Silme İşlemi Başarılı!");
    }

    @Override
    public List<User> getAll() {
        return users;
    }
}
