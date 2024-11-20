import axios from "axios";
import { API_BASE_URL } from "../../utils/config";

export const authAPI = {
    accountconsent() {
      return axios.post(`${API_BASE_URL}/accountConsent`);
    },
    initiatecodegrant(consentId) {
      return axios.get(`${API_BASE_URL}/initiateCodeGrant?consentId=${consentId}`);
    },
    accesstoken(urlCode) {
      return axios.post(`${API_BASE_URL}/accessToken`, { code: urlCode });
    }
  };
