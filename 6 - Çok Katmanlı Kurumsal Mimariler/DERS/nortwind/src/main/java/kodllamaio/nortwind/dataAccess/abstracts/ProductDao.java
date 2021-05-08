package kodllamaio.nortwind.dataAccess.abstracts;

import kodllamaio.nortwind.entities.concretes.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductDao extends JpaRepository<Product, Integer> {
    //Jpa Repository: Entity ile süslenen yani Product için


}
