package kodllamaio.nortwind.business.concretes;

import kodllamaio.nortwind.business.abstracts.ProductService;
import kodllamaio.nortwind.core.utilities.results.DataResult;
import kodllamaio.nortwind.core.utilities.results.Result;
import kodllamaio.nortwind.core.utilities.results.SuccessDataResult;
import kodllamaio.nortwind.core.utilities.results.SuccessResult;
import kodllamaio.nortwind.dataAccess.abstracts.ProductDao;
import kodllamaio.nortwind.entities.concretes.Product;
import kodllamaio.nortwind.entities.dtos.ProductWithCategoryDto;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    // Sayfa ve Sayfaadaki veri miktarı
    @Override
    public DataResult<List<Product>> getAll(int pageNo, int pageSize) {
        Pageable pageable  = PageRequest.of(pageNo, pageSize);
        return new SuccessDataResult<List<Product>>(this.productDao.findAll(pageable).getContent());
    }

    @Override
    public DataResult<List<Product>> getAllSorted() {
        Sort sort = Sort.by(Sort.Direction.ASC, "productName"); // ASC: Artan DESC: Azalan
        return new SuccessDataResult<List<Product>>(this.productDao.findAll(sort), "Başarılı Şekilde Sıralandı!");
    }

    @Override
    public Result add(Product product) {
        this.productDao.save(product);
        return new SuccessResult("Ürün Eklendi");
    }

    // 1
    @Override
    public DataResult<Product> getByProductName(String productName) {
        return new SuccessDataResult<Product> // Burada Product döndürdüğü için fonksiyo işaretler arası Product yazdık!
                (this.productDao.getByProductName(productName), "İstenen Ürün Getirildi!");
    }

    // 2
    @Override
    public DataResult<Product> getByProductNameAndCategoryId(String productName, int categoryId) {
        // Business Code
        return new SuccessDataResult<Product>
                (this.productDao.getByProductNameAndCategory_CategoryId(productName, categoryId), "Ürün İsimleri ve Kategori Id'ler Listelendi!");
    }

    // 3
    @Override
    public DataResult<List<Product>> getByProductNameOrCategoryId(String productName, int categoryId) {
        return new SuccessDataResult<List<Product>>
                (this.productDao.getByProductNameOrCategory_CategoryId(productName, categoryId), "Ürün Adı veya Kategori Id'ler Listelendi!");

    }

    // 4
    @Override
    public DataResult<List<Product>> getByCategoryIdIn(List<Integer> categories) {
        return new SuccessDataResult<List<Product>>
                (this.productDao.getByCategory_CategoryIdIn(categories), "Kategoriler Listelendi!");

    }

    // 5
    @Override
    public DataResult<List<Product>> getByProductNameContains(String productName) {
        return new SuccessDataResult<List<Product>>
                (this.productDao.getByProductNameContains(productName), "Product Name Contains Listelendi!");

    }

    // 6
    @Override
    public DataResult<List<Product>> getByProductNameStartsWith(String productName) {
        return new SuccessDataResult<List<Product>>
                (this.productDao.getByProductNameStartsWith(productName), "Product Name Starts With Listelendi!");
    }

    // 7
    @Override
    public DataResult<List<Product>> getByNameAndCategory(String productName, int categoryId) {
        return new SuccessDataResult<List<Product>>
                (this.productDao.getByNameAndCategory(productName, categoryId), "İsim ve Kategori Listelendi!");
    }

    //ProductWithCategoryDto
    @Override
    public DataResult<List<ProductWithCategoryDto>> getProductWithCategoryDetails() {
        return new SuccessDataResult<List<ProductWithCategoryDto>>(this.productDao.getProductWithCategoryDetails(),"Data Listelendi!");
    }
}
