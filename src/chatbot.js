import { useEffect } from "react";

const RobofyChat = () => {
  useEffect(() => {
    if (!document.getElementById("chatbotscript")) {
      const script = document.createElement("script");
      script.id = "chatbotscript";
      script.dataset.accountid = "6vLY6YTFxA5BIAOseXRkSg==";
      script.dataset.websiteid = "qIcqhkAaHYmLkMQuFlcJDA==";
      script.src = `https://app.robofy.ai/bot/js/common.js?v=${new Date().getTime()}`;
      script.async = true;
      script.onerror = () => console.error("Failed to load Robofy script");
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById("chatbotscript");
      if (existingScript) {
        document.head.removeChild(existingScript);
        console.log("Robofy script removed.");
      }
    };
  }, []);

  return null;
};

export default RobofyChat;
