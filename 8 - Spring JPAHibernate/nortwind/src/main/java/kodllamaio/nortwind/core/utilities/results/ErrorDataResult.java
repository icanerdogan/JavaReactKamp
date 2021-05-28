package kodllamaio.nortwind.core.utilities.results;

public class ErrorDataResult<T> extends DataResult{

    // Sonuç başarısız olduğundan dolayı super içine direk false veriyoruz!
    public ErrorDataResult(T data, String message) {
        super(data, false, message);
    }

    // Sadece data ve succes bilgisini false olarak döndüren fonksiyon
    public ErrorDataResult(T data) {
        super(data, false);
    }

    // Sadece mesaj döndürdüğümüz!
    public ErrorDataResult(String message) {
        super(null, false, message);
    }

    // Herhangi bir data veya mesaj olmayınca sadece false döndüren fonksiyon!
    public ErrorDataResult() {
        super(null, false);
    }
}
