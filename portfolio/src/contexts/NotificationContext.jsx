import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";

const NotificationContext = createContext();
let counter = 0;
const NOTIFICATION_TIMEOUT = 3500

function create_id () {
    counter+=1
    const new_id =  `${Date.now()}${counter}`
    return new_id
}

export const useNotifications = () => useContext(NotificationContext);

export function NotificationProvider({ children }) {
    const [notificationMessages, setNotificationMessages] = useState([]); // notification data
    
    // called when sending notifiaction to confirm actions
    const notifyConfirm = useCallback((text, description = "") => {
        const id = create_id();

        setNotificationMessages(prev => [...prev, { id, type: 'success', text, description, icon: "bi-check" }]);

        setTimeout(() => {
            setNotificationMessages(prev => prev.filter(item => item.id !== id));
        }, NOTIFICATION_TIMEOUT);
    }, []);


    // called when sending notifiaction to inform users of errors
    const notifyError = useCallback((text, description = "") => {
        const id = create_id();

        setNotificationMessages(prev => [...prev, { id, type: 'danger', text, description, icon: "bi-exclamation" }]);

        setTimeout(() => {
            setNotificationMessages(prev => prev.filter(item => item.id !== id));
        }, NOTIFICATION_TIMEOUT);
    }, []);


    // called when sending notifiaction to inform users of errors
    const notifyInform = useCallback((text, description = "") => {
        const id = create_id();

        setNotificationMessages(prev => [...prev, { id, type: 'info', text, description, icon: "bi-info" }]);

        setTimeout(() => {
            setNotificationMessages(prev => prev.filter(item => item.id !== id));
        }, NOTIFICATION_TIMEOUT);
    }, []);


    return (
        <NotificationContext.Provider value={{ notifyConfirm, notifyError, notifyInform }}>
            {children}

            <div className={`toast-container position-fixed top-0 end-0  p-3`} style={{ zIndex: 2000, marginTop: "7vh" }}>
                {notificationMessages.map(item => (
                    <div key={item.id} className={`toast align-items-end shadowed show mb-3 bg-body`}>
                        <div className="d-flex">
                            <div className="toast-body p-1 flex-fill">
                                <div className="d-flex align-items-center justify-content-between gap-2 px-2">
                                    <div className="text-start ms-2 flex-fill">
                                        <div className="p mb-0 text-capitalize fw-bold">{item.text}</div>
                                        <div className="text-start text-muted" style={{fontSize:"0.55rem"}}>{item.description ? item.description : ""}</div>
                                    </div>

                                    <i className={`bi ${item.icon} fs-4`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
}
