package kodllamaio.nortwind.core.utilities.results;

// Birden fazla vertipiyle çalışmak için <T> bu gibi Generic sınıflarla çalışıyoruz!
public class DataResult<T> extends Result{

    private T data;
    public DataResult(T data, boolean success, String message) {
        super(success, message);
        this.data = data;
    }

    public DataResult(T data, boolean success) {
        super(success);
        this.data = data;
    }

    public T getData(){
        return this.data;
    }
}
