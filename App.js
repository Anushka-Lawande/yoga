import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigator from './src/navigation/AppNavigator';
import { authService } from './src/services/authService';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check auth session on application startup
  useEffect(() => {
    async function checkAuthSession() {
      try {
        const authenticated = await authService.isAuthenticated();
        setIsAuthenticated(authenticated);
      } catch (e) {
        console.error('[App Startup] Error checking auth token session:', e);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    }
    checkAuthSession();
  }, []);

  const handleLogin = async (token, user) => {
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      setIsAuthenticated(false);
    } catch (e) {
      console.error('[App Logout] Error during logout:', e);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  return (
    <SafeAreaProvider style={styles.rootContainer}>
      <NavigationContainer>
        <AppNavigator 
          isAuthenticated={isAuthenticated} 
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <StatusBar style="light" backgroundColor="#0f172a" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#090d16',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#090d16',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
