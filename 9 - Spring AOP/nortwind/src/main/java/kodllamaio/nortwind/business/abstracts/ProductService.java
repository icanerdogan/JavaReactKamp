package kodllamaio.nortwind.business.abstracts;

import kodllamaio.nortwind.core.utilities.results.DataResult;
import kodllamaio.nortwind.core.utilities.results.Result;
import kodllamaio.nortwind.entities.concretes.Product;
import kodllamaio.nortwind.entities.dtos.ProductWithCategoryDto;

import java.util.List;

public interface ProductService {
    DataResult<List<Product>> getAll();
    DataResult<List<Product>> getAll(int pageNo, int pageSize);
    DataResult<List<Product>> getAllSorted(); // Datayı istediğin şarta göre sıralama
    Result add(Product product);

    DataResult<Product> getByProductName(String productName);
    DataResult<Product> getByProductNameAndCategoryId(String productName, int categoryId);
    DataResult<List<Product>> getByProductNameOrCategoryId(String productName, int categoryId);
    DataResult< List<Product>> getByCategoryIdIn(List<Integer> categories);
    DataResult<List<Product>> getByProductNameContains(String productName);
    DataResult<List<Product>> getByProductNameStartsWith(String productName);
    DataResult<List<Product>> getByNameAndCategory(String productName, int categoryId);

    DataResult<List<ProductWithCategoryDto>> getProductWithCategoryDetails();
}
