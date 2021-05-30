package kodllamaio.nortwind.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data //Getter-Setter işlemlerini kaldıran Lombok Annotation
@AllArgsConstructor // Tüm argümanları alan constructor
@NoArgsConstructor // Argümanı olmayan constructor
@Entity // Annotation İşlemi
@Table(name = "products") // Veritabanı İşlemi
public class Product {
    @Id //İşlemeri ID'ye göre yapak
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Bir bir arttırılacak

    @Column(name = "product_id")
    private int id;

    /*
    // categoryId'yi alt kısımda @ManttoOne ile iletişim sağlandı!
    @Column(name = "category_id")
    private int categoryId;
     */

    @Column(name = "product_name")
    private String productName;

    @Column(name = "unit_price")
    private double unitPrice;

    @Column(name = "units_in_stock")
    private short unitsInStock;

    @Column(name = "quantity_per_unit")
    private String quantityPerUnit; // Bir ünitede kaç tane var.

    @ManyToOne
    // Bu sınıf veritabanında product tablosunu yönetiyor orada category_id kısmında categoryi numaraları
    // bir çok kez yazarken category tablosunda 1 kez geçiyor bu ID
    // Many kısmı bu sınıfın tablonusu, One ise alttaki sınıfın tablsounu temsil ediyor!
    @JoinColumn(name = "category_id") // Hangi kolonla ilişkilendireceğimizi söylüyoruz!
    private Category category;

    /*public Product() {}

    public Product(int id, int categoryId, String productName, double unitPrice, short unitsInStock, String quantityPerUnit) {
        this.id = id;
        this.categoryId = categoryId;
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.unitsInStock = unitsInStock;
        this.quantityPerUnit = quantityPerUnit;
    }
    */

    //@Data eklediğimiz için Getter-Setterları kalırabiliriz
    /*public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public short getUnitsInStock() {
        return unitsInStock;
    }

    public void setUnitsInStock(short unitsInStock) {
        this.unitsInStock = unitsInStock;
    }

    public String getQuantityPerUnit() {
        return quantityPerUnit;
    }

    public void setQuantityPerUnit(String quantityPerUnit) {
        this.quantityPerUnit = quantityPerUnit;
    }
    */
}
