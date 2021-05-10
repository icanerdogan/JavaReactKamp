package icanerdogan.hrms.business.abstracts;

import icanerdogan.hrms.entities.concretes.Position;

import java.util.List;

public interface PositionService {
    List<Position> getAll();
}
