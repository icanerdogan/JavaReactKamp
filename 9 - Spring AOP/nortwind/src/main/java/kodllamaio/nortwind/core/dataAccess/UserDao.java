package kodllamaio.nortwind.core.dataAccess;

import kodllamaio.nortwind.core.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}
