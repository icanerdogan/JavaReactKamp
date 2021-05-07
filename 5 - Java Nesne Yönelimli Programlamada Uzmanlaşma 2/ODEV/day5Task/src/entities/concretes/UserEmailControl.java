package entities.concretes;

import dataAccess.abstracts.UserDao;

public class UserEmailControl {
    private UserDao userDao;

    public UserEmailControl(UserDao userDao) {
        this.userDao = userDao;
    }

    public boolean isValid(String email){

        for(User user: userDao.getAll()){
            if (email.equals(user.getEmail())){
                return true;
            }
        }
        return false;
    }
}
