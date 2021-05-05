package business.abstracts;

import entities.concretes.Product;

import java.util.List;

// İsminde Service varsa Business sınıfına aittir.
public interface ProductService {
    void add(Product product);
    List<Product> getAll();
}
