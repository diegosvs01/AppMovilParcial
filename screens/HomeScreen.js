// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resumen Financiero</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.label}>Saldo Total</Text>
        <Text style={styles.amount}>$300.00</Text>
        <Text style={styles.label}>Gastos del Mes</Text>
        <Text style={styles.expenseAmount}>$140.92</Text>
        <Text style={styles.label}>Ingresos del Mes</Text>
        <Text style={styles.incomeAmount}>$300.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summaryBox: {
    backgroundColor: '#4A148C',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  amount: {
    color: '#4CAF50',
    fontSize: 24,
  },
  expenseAmount: {
    color: '#FF0000',
    fontSize: 24,
  },
  incomeAmount: {
    color: '#4CAF50',
    fontSize: 24,
  },
});

export default HomeScreen;
