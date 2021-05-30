package kodllamaio.nortwind.core.utilities.results;

public class ErrorResult extends Result{

    // İşlem Sonucu Başarısız!
    public ErrorResult(){
        super(false);
    }
    public ErrorResult(String message) {
        super(false, message);
    }

}
