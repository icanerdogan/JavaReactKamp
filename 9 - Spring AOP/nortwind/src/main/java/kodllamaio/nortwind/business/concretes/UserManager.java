package kodllamaio.nortwind.business.concretes;

import kodllamaio.nortwind.business.abstracts.UserService;
import kodllamaio.nortwind.core.dataAccess.UserDao;
import kodllamaio.nortwind.core.entities.User;
import kodllamaio.nortwind.core.utilities.results.DataResult;
import kodllamaio.nortwind.core.utilities.results.Result;
import kodllamaio.nortwind.core.utilities.results.SuccessDataResult;
import kodllamaio.nortwind.core.utilities.results.SuccessResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserManager implements UserService {
    private UserDao userDao;

    @Autowired
    public UserManager(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public Result add(User user) {
        this.userDao.save(user);
        return new SuccessResult("Kullanıcı Eklendi!");
    }

    @Override
    public DataResult<User> findByEmail(String email) {
        return new SuccessDataResult<User>(this.userDao.findByEmail(email),"Kullanıcı Bulundu!");
    }
}
