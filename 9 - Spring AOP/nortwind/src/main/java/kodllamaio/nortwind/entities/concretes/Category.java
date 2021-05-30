package kodllamaio.nortwind.entities.concretes;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "categories")
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","products"}) // getByProductName ile ürün adı yollandığında oluşan sonsuz kategori adı çağrılmaının çözümü
public class Category {
    @Id
    @Column(name = "category_id")
    private int categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @OneToMany(mappedBy = "category")
    // Category tablosu ile Product arasında olan bir ilişkidir
    // Burada "One" olan kısım Category olduğu için Caategory sınıfı içinde yazıyoruz!
    // mappedBy: aşağıdaki prosucts ile hangi tablonun ilişkisi varsa onu veriyoruz!
    private List<Product> products;
}
