package kodllamaio.nortwind.business.abstracts;

import kodllamaio.nortwind.core.entities.User;
import kodllamaio.nortwind.core.utilities.results.DataResult;
import kodllamaio.nortwind.core.utilities.results.Result;

public interface UserService {
    Result add(User user);
    DataResult<User> findByEmail(String email);
}
