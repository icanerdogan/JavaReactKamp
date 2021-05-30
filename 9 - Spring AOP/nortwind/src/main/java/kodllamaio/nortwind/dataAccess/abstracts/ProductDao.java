package kodllamaio.nortwind.dataAccess.abstracts;

import kodllamaio.nortwind.entities.concretes.Product;
import kodllamaio.nortwind.entities.dtos.ProductWithCategoryDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductDao extends JpaRepository<Product, Integer> {
    //Jpa Repository: Entity ile süslenen yani Product için

    Product getByProductName(String productName);
    Product getByProductNameAndCategory_CategoryId(String productName, int categoryId);
    List<Product> getByProductNameOrCategory_CategoryId(String productName, int categoryId);
    List<Product> getByCategory_CategoryIdIn(List<Integer> categories);
    List<Product> getByProductNameContains(String productName);
    List<Product> getByProductNameStartsWith(String productName);

    @Query("from Product where productName=:productName and category.categoryId=:categoryId")
    List<Product> getByNameAndCategory(String productName, int categoryId);

    //DTO
    // Select p.productId, p.productName, c.categoryName from Category c inner join Product p on c.categoryId = p.categoryId
    @Query("Select new kodllamaio.nortwind.entities.dtos.ProductWithCategoryDto"
            + "(p.id, p.productName, c.categoryName) "
            + "From Category c Inner Join c.products p")
    List<ProductWithCategoryDto> getProductWithCategoryDetails();
}
