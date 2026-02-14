
import { useEffect } from 'react';
import { getCountryByIP, sendLocationToAPI } from '@/services/locationService';

export const useLocationTracking = () => {
  useEffect(() => {
    const trackLocation = async () => {
      try {
        // Only track if user hasn't been tracked in this session
        if (sessionStorage.getItem('location-tracked')) {
          return;
        }

        const country = await getCountryByIP();
        
        // Mark as tracked to prevent duplicate calls
        sessionStorage.setItem('location-tracked', 'true');
        
        // Send location to API without blocking the UI
        sendLocationToAPI(country).catch(error => {
          console.warn('Location tracking failed silently:', error);
        });
      } catch (error) {
        console.warn('Error in location tracking (non-blocking):', error);
      }
    };

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        setTimeout(trackLocation, 3000);
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(trackLocation, 5000);
    }
  }, []);
};
