package core;

import jLogger.JLoggerManager;

// JLoggerManager sınıfı başkası tarafından yazıldığından dokunulmuyor. Bu yğzden onu kullanmak için LoggerService ile kullanııyoruz.
public class JLoggerManagerAdapter implements LoggerService{

    @Override
    public void logToSystem(String message) {
        JLoggerManager jLoggerManager = new JLoggerManager();
        jLoggerManager.log(message);
    }
}
