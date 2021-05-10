package icanerdogan.hrms.dataAccess.abstracts;

import icanerdogan.hrms.entities.concretes.Position;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PositionDao extends JpaRepository<Position, Integer> {
}
