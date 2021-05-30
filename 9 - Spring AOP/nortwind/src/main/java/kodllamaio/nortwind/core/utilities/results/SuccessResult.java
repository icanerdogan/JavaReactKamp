package kodllamaio.nortwind.core.utilities.results;

public class SuccessResult extends Result{

    // İşlem Sonnucu Başarılı
    public SuccessResult(){
        super(true);
    }
    public SuccessResult(String message) {
        super(true, message);
    }

}
