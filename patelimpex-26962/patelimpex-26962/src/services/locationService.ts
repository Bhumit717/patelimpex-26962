
export const getCountryByIP = async (): Promise<string> => {
  try {
    // Add shorter timeout for better UX
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // Reduced from 3000ms
    
    const response = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'PatelImpex/1.0'
      },
      // Add cache control for better performance
      cache: 'default'
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Cache the result in sessionStorage to avoid repeated calls
    if (data.country_name) {
      sessionStorage.setItem('user-country', data.country_name);
    }
    
    return data.country_name || 'Unknown Country';
  } catch (error) {
    console.warn('Error fetching country (fallback to cached or Unknown):', error);
    
    // Try to return cached country if available
    const cachedCountry = sessionStorage.getItem('user-country');
    return cachedCountry || 'Unknown Country';
  }
};

export const sendLocationToAPI = async (country: string): Promise<void> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500); // Reduced timeout
    
    const message = encodeURIComponent(`Visitor from: ${country} - ${new Date().toISOString()}`);
    const apiUrl = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${message}`;
    
    await fetch(apiUrl, {
      method: 'GET',
      mode: 'no-cors',
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    console.log(`Location sent to API: ${country}`);
  } catch (error) {
    // Fail silently to not impact user experience
    console.warn('Error sending location to API (non-blocking):', error);
  }
};
