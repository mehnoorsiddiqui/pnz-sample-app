import { useState, useEffect } from "react";
import { localStorageService } from "../utils/localStorageService";
import { authAPI } from "../api/auth/route";
import PopupWindow from "../components/PopupWindow";

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const access_token = localStorageService.getAccessToken();
        if (access_token) {
            setIsLoggedIn(true); 
        } else {
            setIsLoggedIn(false); 
        }
    }, []); 
    const handleLogin = async () => {
        setLoading(true);
        try {
            const accountConsent = await authAPI.accountconsent();
            const initiateCodeGrant = await authAPI.initiatecodegrant(accountConsent.data.consentId);
            const redirectUri = initiateCodeGrant.data.redirect;
            const left = window.screen.width / 2 - 300;
            const top = window.screen.height / 2 - 500;
            const popup = PopupWindow.open(
                "pnz-oauth-authorize",
                `${redirectUri}`,
                { height: 1000, width: 600, left, top }
            );

            popup.then(onSuccess, onFailure);
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setLoading(false);
        }
    };

    const onSuccess = async (data) => {
        if (!data.code) {
            onFailure(new Error("'code' not found"));
            return;
        }
        try {
            const accessToken = await authAPI.accesstoken(data.code);
            localStorageService.setAccessToken(accessToken.data.accessTokenObject);
            console.log("Login successful!");
            setIsLoggedIn(true)
        } catch (error) {
            onFailure(error);
        }
    };

    const onFailure = (error) => {
        console.error("Login failed:", error);
    };
    return { isLoggedIn, loading, handleLogin };
};
