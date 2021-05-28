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
}
