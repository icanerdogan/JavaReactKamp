import business.abstracts.ProductService;
import business.concretes.ProductManager;
import core.JLoggerManagerAdapter;
import dataAccess.concretes.AbcProductDao;
import dataAccess.concretes.HibernateProductDao;
import entities.concretes.Product;
import jLogger.JLoggerManager;

public class Main {

    public static void main(String[] args) {
        JLoggerManager jLoggerManager = new JLoggerManager();
        // Entity nesneleri "new"leniyorsa ilerde sorun yaşayacağız. Bu kısım Sprign IOT ile giderilecek.
        ProductService productService = new ProductManager(new AbcProductDao(), new JLoggerManagerAdapter());
        Product product = new Product(1,2,"Elma",12,50);

        productService.add(product);
    }
}
