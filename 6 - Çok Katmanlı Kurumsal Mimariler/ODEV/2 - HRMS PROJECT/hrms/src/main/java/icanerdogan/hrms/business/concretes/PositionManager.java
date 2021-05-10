package icanerdogan.hrms.business.concretes;

import icanerdogan.hrms.business.abstracts.PositionService;
import icanerdogan.hrms.dataAccess.abstracts.PositionDao;
import icanerdogan.hrms.entities.concretes.Position;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionManager implements PositionService {
    private PositionDao positionDao;

    @Autowired
    public PositionManager(PositionDao positionDao) {
        this.positionDao = positionDao;
    }

    @Override
    public List<Position> getAll() {
        return this.positionDao.findAll();
    }
}
