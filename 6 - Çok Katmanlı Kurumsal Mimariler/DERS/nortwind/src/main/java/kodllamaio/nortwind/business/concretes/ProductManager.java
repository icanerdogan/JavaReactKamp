package kodllamaio.nortwind.business.concretes;

import kodllamaio.nortwind.business.abstracts.ProductService;
import kodllamaio.nortwind.dataAccess.abstracts.ProductDao;
import kodllamaio.nortwind.entities.concretes.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // Service
public class ProductManager implements ProductService {
    private ProductDao productDao;

    @Autowired // Projede buna karşılık gelen sınıda injection
    public ProductManager(ProductDao productDao) {
        this.productDao = productDao;
    }

    @Override
    public List<Product> getAll() {
        return this.productDao.findAll();
    }
}
