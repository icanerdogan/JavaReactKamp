package dataAccess.abstracts;

import entities.concretes.Product;

import java.util.List;

public interface ProductDao {
    // Ürün ekleme, güncelleme, listeleme

    void add(Product product);
    void update(Product product);
    void delete(Product product);

    Product get(int id); // id'ye göre çağıracağız ve Product nesnesi çağıracağız
    List<Product> getAll(); // ArrayList ile sürekli değiştirebilebilen, eklenebilen listeler oluşturuyoruz.
}
