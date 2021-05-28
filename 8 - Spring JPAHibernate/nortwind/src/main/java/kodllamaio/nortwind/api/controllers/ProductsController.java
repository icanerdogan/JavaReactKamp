package kodllamaio.nortwind.api.controllers;

import kodllamaio.nortwind.business.abstracts.ProductService;
import kodllamaio.nortwind.core.utilities.results.DataResult;
import kodllamaio.nortwind.core.utilities.results.Result;
import kodllamaio.nortwind.entities.concretes.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
// Internet sitesinde arama çubuğunda linki karşılayan kısımdır.

@RestController // Bu sınıfa sen rest controller'sın demek için kullandık
@RequestMapping("/api/products") // Eğer kodlama.io/api/products ile gelen isteği karşılar
public class ProductsController {

    private ProductService productService;
    @Autowired
    // Autowired Bunu aslında tek bir tane Interface injectionda kullanabilrisin.
    // O zman constructor vermeye gerek kalmazdı
    public ProductsController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/getall") // Products içinde getAll kullanıyoruz.
    public DataResult<List<Product>> getAll(){
        return this.productService.getAll();
    }

    @PostMapping
    public Result add(@RequestBody Product product){
        return this.productService.add(product);
    }

    // 1
    @GetMapping("/getByProductName")
    public DataResult<Product> getByProductName(@RequestParam String productName){
        return this.productService.getByProductName(productName);
    }

    // 2
    @GetMapping("/getByProductNameAndCategoryId")
    public DataResult<Product> getByProductNameAndCategoryId(@RequestParam("productName") String productName, @RequestParam("categoryId") int categoryId){
        return this.productService.getByProductNameAndCategoryId(productName, categoryId);
    }

    // 3
    @GetMapping("/getByProductNameOrCategoryId")
    public DataResult<List<Product>> getByProductNameOrCategoryId(@RequestParam String productName, @RequestParam int categoryId){
        return this.productService.getByProductNameOrCategoryId(productName, categoryId);
    }

    // 4
    @GetMapping("/getByCategoryIdIn")
    public DataResult<List<Product>> getByCategoryIdIn(List<Integer> categories){
        return this.productService.getByCategoryIdIn(categories);
    }
    // 5
    @GetMapping("/getByProductNameContains")
    public DataResult<List<Product>> getByProductNameContains(String productName){
        return this.productService.getByProductNameContains(productName);
    }

    // 6
    @GetMapping("/getByProductNameStartsWith")
    public DataResult<List<Product>> getByProductNameStartsWith(String productName){
        return this.productService.getByProductNameStartsWith(productName);
    }

    // 7
    @GetMapping("/getByNameAndCategory")
    public DataResult<List<Product>> getByNameAndCategory(String productName, int categoryId){
        return this.productService.getByNameAndCategory(productName, categoryId);
    }

    // Page
    @GetMapping("/getAllByPage")
    public DataResult<List<Product>> getAll(int pageNo, int pageSize){
        return this.productService.getAll(pageNo-1, pageSize);
    }

    // Sort
    @GetMapping("/getAllSorted")
    public DataResult<List<Product>> getAllSorted(){
        return this.productService.getAllSorted();
    }
}
