package icanerdogan.hrms.api.controllers;

import icanerdogan.hrms.business.abstracts.PositionService;
import icanerdogan.hrms.entities.concretes.Position;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/positions") //Kullanıcın pozisyonları görmesi için gitmesi gereken sekme
public class PositionsController {
    private PositionService positionService;

    @Autowired
    public PositionsController(PositionService positionService) {
        this.positionService = positionService;
    }

    @GetMapping("/allpositions")
    public List<Position> getAll()
    {
        return this.positionService.getAll();
    }
}
