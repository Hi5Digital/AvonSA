"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytical: false,
    advertisement: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytical: true,
      advertisement: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 md:p-6">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cookie Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">
              Cookie Preferences
            </h3>
            <p className="text-sm text-luxury-taupe mb-4">
              We use cookies to enhance your browsing experience. Review our
              Privacy Policy for more details.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="necessary"
                  disabled
                  checked={true}
                  className="mt-1"
                />
                <div>
                  <label htmlFor="necessary" className="font-medium text-sm">
                    Necessary
                  </label>
                  <p className="text-xs text-luxury-taupe">
                    Enable essential site features.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="functional"
                  checked={preferences.functional}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      functional: e.target.checked,
                    })
                  }
                  className="mt-1"
                />
                <div>
                  <label htmlFor="functional" className="font-medium text-sm">
                    Functional
                  </label>
                  <p className="text-xs text-luxury-taupe">
                    Support features like content sharing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="analytical"
                  checked={preferences.analytical}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      analytical: e.target.checked,
                    })
                  }
                  className="mt-1"
                />
                <div>
                  <label htmlFor="analytical" className="font-medium text-sm">
                    Analytical
                  </label>
                  <p className="text-xs text-luxury-taupe">
                    Track visitor interactions and metrics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="advertisement"
                  checked={preferences.advertisement}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      advertisement: e.target.checked,
                    })
                  }
                  className="mt-1"
                />
                <div>
                  <label htmlFor="advertisement" className="font-medium text-sm">
                    Advertisement
                  </label>
                  <p className="text-xs text-luxury-taupe">
                    Deliver relevant ads across websites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col justify-center gap-3">
            <Button
              variant="primary"
              fullWidth
              onClick={handleAcceptAll}
              className="bg-luxury-plum hover:bg-luxury-berry"
            >
              Accept All
            </Button>
            <Button variant="secondary" fullWidth onClick={handleSavePreferences}>
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
