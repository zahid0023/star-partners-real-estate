export const authorizeAgent = async ({ AGENT_ID }) => {

    const APP_KEY = "org_4482d37e544d422990c6873a356ffb480a85316e3336060ac116864477846cc4950f6da7f7c079bb520e69";
    const API_URL = `https://api.bland.ai/v1/agents/${AGENT_ID}/authorize`;


    const options = {
        method: 'POST',
        headers: {
            'Authorization': APP_KEY
        }
    };

    try {
        const response = await fetch(API_URL, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Authorization response:", data);
        return data.token;
    } catch (error) {
        console.error("Error authorizing agent:", error);
        throw error;  // Re-throw the error for further handling
    }
}