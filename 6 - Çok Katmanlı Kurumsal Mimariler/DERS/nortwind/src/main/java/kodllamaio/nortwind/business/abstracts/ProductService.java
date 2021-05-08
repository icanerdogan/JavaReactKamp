package kodllamaio.nortwind.business.abstracts;

import kodllamaio.nortwind.entities.concretes.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAll();
}
