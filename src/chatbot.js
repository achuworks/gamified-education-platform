import { useEffect } from "react";

const RobofyChat = () => {
  useEffect(() => {
    // Prevent adding the script multiple times
    if (!document.getElementById("chatbotscript")) {
      const script = document.createElement("script");
      script.id = "chatbotscript";
      script.dataset.accountid = "6vLY6YTFxA5BIAOseXRkSg==";
      script.dataset.websiteid = "qIcqhkAaHYmLkMQuFlcJDA==";
      script.src = "https://app.robofy.ai/bot/js/common.js?v=" + new Date().getTime();
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup: Remove the script when the component unmounts
      const existingScript = document.getElementById("chatbotscript");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // No UI needed, just loads the script
};

export default RobofyChat;
