package kodllamaio.nortwind.business.concretes;

import kodllamaio.nortwind.business.abstracts.ProductService;
import kodllamaio.nortwind.core.utilities.results.DataResult;
import kodllamaio.nortwind.core.utilities.results.Result;
import kodllamaio.nortwind.core.utilities.results.SuccessDataResult;
import kodllamaio.nortwind.core.utilities.results.SuccessResult;
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
    public DataResult<List<Product>> getAll() {
        return new SuccessDataResult<List<Product>>
                (this.productDao.findAll(), "Data Listelendi!");

    }

    @Override
    public Result add(Product product) {
        this.productDao.save(product);
        return new SuccessResult("Ürün Eklendi");
    }
}
