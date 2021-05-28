package kodllamaio.nortwind.core.utilities.results;

public class SuccessDataResult<T> extends DataResult{

    // Sonuç başarılı olduğundan dolayı super içine direk true veriyoruz!
    public SuccessDataResult(T data, String message) {
        super(data, true, message);
    }

    // Sadece data ve succes bilgisini true olarak döndüren fonksiyon
    public SuccessDataResult(T data) {
        super(data, true);
    }

    // Sadece mesaj döndürdüğümüz!
    public SuccessDataResult(String message) {
        super(null, true, message);
    }

    // Herhangi bir data veya mesaj olmayınca sadece true döndüren fonksiyon!
    public SuccessDataResult() {
        super(null, true);
    }
}
